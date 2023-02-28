/*
微信小程序 zippo会员中心

使用类来实现的版本, 包含了简单的类继承

cron: 24 7,19 * * *
*/

const Env = require('./basic/Env.js');
const $ = new Env('东东爱消除-抢豆豆');
const got = require('got');

const envPrefix = 'JD_'
const envSplitor = ['\n','&','@'] //支持多种分割，但要保证变量里不存在这个字符
const ckNames = [envPrefix+'COOKIE'] //可以支持多变量
const MAX_THREAD = parseInt(process.env[envPrefix+'Thread']) || 50; //默认最大并发数
const DEFAULT_TIMEOUT=8000, DEFAULT_RETRY=3;

const appId="dafbe42d5bff9d82298e5230eb8c3f79",
ACT_ID = 'A_112790_R_1_D_20201028',
CryptoJS = require('crypto-js')

$.exchangeList=[
    {"res":{"sID":"H001","asConsume":["X028,900"],"iLimit":0,"iDailyLimit":1,"sName":"星星","iTotalLimit":99999,"iTotalDailyLimit":250,"iTotRefreshHour":10},"count":0,"name":"京豆*1888","left":1},
    {"res":{"sID":"H004","asConsume":["X028,452"],"iLimit":0,"iDailyLimit":1,"sName":"星星","iTotalLimit":99999,"iTotalDailyLimit":400,"iTotRefreshHour":10},"count":0,"name":"京豆*666","left":1},
    {"res":{"sID":"H007","asConsume":["X028,700"],"iLimit":0,"iDailyLimit":1,"sName":"星星","iTotalLimit":99999,"iTotalDailyLimit":300,"iTotRefreshHour":10},"count":0,"name":"京豆*888","left":1}
];

let TYUserName=[];
if( process.env.TYUserName ){
    TYUserName=process.env.TYUserName.split("@");
}else{
    console.log(`请设置变量 TYUserName 来指定用户，多个用@分隔`)
    return false
}

let exchangeName = ['京豆*1888']
if (process.env.EXCHANGE_EC) {
    exchangeName = process.env.EXCHANGE_EC.split('&')
}

$.reqId = 1;
$.userIdx=0;

class BasicClass {
    constructor() {     
        this.index = $.userIdx++;
        this.valid = true;

        //设置got的默认超时等参数
        this.got = got.extend({
            retry: {limit:0},
            timeout: DEFAULT_TIMEOUT,
            followRedirect: false,
        })
    }
    //给每个账户打印前面加上自己的名字
    log(msg, opt = {}) {
        var m = '', n = $.userCount.toString().length;;
        if (this.index) m += `账号[${$.padStr(this.index,n)}]`;
        if (this.UserName) m += `[${this.UserName}]`;
        $.log(m + msg, opt);
    }
    //使用自己的got实例发包,可以实现设置每个账号自己的默认UA等
    async request(opt,me_got) {
        var resp = null, count = 0;
        var fn = opt.fn || opt.url;
        if(opt?.method) opt.method = opt.method.toUpperCase();
        if(!me_got) me_got=this.got;
        while (count++ < DEFAULT_RETRY) {
            try {
                var err = null;
                const errcodes = ['ECONNRESET', 'EADDRINUSE', 'ENOTFOUND', 'EAI_AGAIN'];
                await me_got(opt).then(t => {
                    resp = t
                }, e => {
                    err = e;
                    resp = e.response;
                });
                if(err) {
                    if(err.name == 'TimeoutError') {
                        this.log(`[${fn}]请求超时(${err.code})，重试第${count}次`);
                    } else if(errcodes.includes(err.code)) {
                        this.log(`[${fn}]请求错误(${err.code})，重试第${count}次`);
                    } else {
                        let statusCode = resp?.statusCode || -1;
                        this.log(`[${fn}]请求错误(${err.message}), 返回[${statusCode}]`);
                        break;
                    }
                } else {
                    break;
                }
            } catch (e) {
                this.log(`[${fn}]请求错误(${e.message})，重试第${count}次`);
            };
        }
        let {statusCode=-1,headers=null,body=null} = resp;
        if (body) try {body = JSON.parse(body);} catch {};
        return {statusCode,headers,result:body};
    }
}
let http = new BasicClass();

class UserClass extends BasicClass {
    constructor(ck) {
        super()
        this.UserName = decodeURIComponent(ck.match(/pt_pin=(.+?);/) && ck.match(/pt_pin=(.+?);/)[1])
        let ua="jdapp;iPhone;10.1.4;13.1.2;" + $.randomString(40) + ";network/wifi;model/iPhone8,1;addressid/2308460611;appBuild/167814;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 13_1_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1";
        this.got = this.got.extend({
            prefixUrl: 'https://jd.moxigame.cn/',
            method: 'POST',
            headers:{
                'Host': 'jd.moxigame.cn',
                'Connection': 'keep-alive',
                //'Content-Type': 'application/json',
                'Accept': '*/*',
                'Origin': 'https://game-cdn.moxigame.cn',
                'X-Requested-With': 'com.jingdong.app.mall',
                'Referer': 'https://game-cdn.moxigame.cn/',//https://game-cdn.moxigame.cn/eliminateJD/index.html?activeId=A_112790_R_1_D_20201028
                'Accept-Encoding': 'gzip, deflate, br',
                'Accept-Language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7',
                'Cookie': ck,
                'User-Agent': ua,
                'X-Requested-With': 'XMLHttpRequest'
            },
        })

        this.got2 = this.got.extend({
            prefixUrl: 'https://jdjoy.jd.com/saas/framework/',
            method: 'POST',
            headers:{
                'Host': 'jdjoy.jd.com',
                'origin': "https://prodev.m.jd.com",
                "x-requested-with": "com.jingdong.app.mall",
                'referer': "https://prodev.m.jd.com/mall/active/448KZiLTkqbPBuhS7nK5rJsrLHGD/index.html?babelChannel=ttt2&tttparams=7fuwkeyJhZGRyZXNzSWQiOjIwODEwNTMxMDUsImRMYXQiOjAsImRMbmciOjAsImdMYXQiOiIyOC4yOTc4IiwiZ0xuZyI6IjEwNS4yNCIsImdwc19hcmVhIjoiMjJfMjAwNV8zNjMxNV81NzIxMiIsImxhdCI6MjguNzYxMTAxLCJsbmciOjEwNC42MTc3NjcsIm1vZGVsIjoiMjIwODEyMTJDIiwicG9zTGF0IjoiMjguMjk3OCIsInBvc0xuZyI6IjEwNS4yNCIsInByc3RhdGUiOiIwIiwidW5fYXJlYSI6IjIyXzIwMDVfMjAxMF8zNjQ2Mi5J9",
                "accept-encoding": "gzip, deflate, br",
                "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
                //'content-type': 'application/x-www-form-urlencoded',
                'Cookie': ck,
                'User-Agent': ua,
            }
        })
    }
    async getIsvToken() {// 获得IsvToken
        this.valid = false;
        try {
            let {result} = await this.request({url: 'encrypt/pin',searchParams: {appId}},this.got2)
            if (result?.success && result?.data) {
                this.valid = true;
                this.lkToken = result.data.lkToken;
            } else {
                console.log(`getIsvToken 错误：${result.errorCode + result.errorMessage}`);
            }
        } catch (e) {
            console.log(e)
        }
    }
    async getIsvToken2() {//获得对应游戏的访问Token
        this.valid = false;
        try {
            let {result} = await this.request({
                url: 'user/token',
                searchParams: {appId,'client':'m','url':'pengyougou.m.jd.com'}
            },this.got2)
            if (result?.success && result?.data) {
                this.valid = true;
                this.token = result.data
            } else {
                console.log(`getIsvToken 错误：${result.errorCode + result.errorMessage}`);
            }
        } catch (e) {
            console.log(e)
        }
    }
    async getActInfo(inviter = null) {
        try {
            let options = {
                fn: 'getActInfo',
                method: 'POST',
                url: `platform/active/role/login`,
                json: {
                    "inviter": inviter,
                    "activeId": ACT_ID,
                    "refid": "wojing",
                    "lkToken": this.lkToken,
                    "token": this.token,
                    "returnurl": "https://prodev.m.jd.com/mall/active/448KZiLTkqbPBuhS7nK5rJsrLHGD/index.html?babelChannel=ttt2",
                    //"tttparams":"7fuwkeyJhZGRyZXNzSWQiOjIwODEwNTMxMDUsImRMYXQiOjAsImRMbmciOjAsImdMYXQiOiIyOC4yOTc4IiwiZ0xuZyI6IjEwNS4yNCIsImdwc19hcmVhIjoiMjJfMjAwNV8zNjMxNV81NzIxMiIsImxhdCI6MjguNzYxMTAxLCJsbmciOjEwNC42MTc3NjcsIm1vZGVsIjoiMjIwODEyMTJDIiwicG9zTGF0IjoiMjguMjk3OCIsInBvc0xuZyI6IjEwNS4yNCIsInByc3RhdGUiOiIwIiwidW5fYXJlYSI6IjIyXzIwMDVfMjAxMF8zNjQ2Mi5J9",
                    "babelChannel": "ttt2", "location": "22-2005-36315", "deviceType": "h5", "scene": "3", "source": "wojing"
                }
            }
            let {result} = await this.request(options)
            if(result?.code == 0) {
                if (!inviter) {
                    //this.inviter=result.id;
                    this.authcode=result.authcode;
                    this.token2=result.token;
                    this.money=JSON.parse(result.info.platform)['money'];
                    this.pltId=result.info.pltId;
                    if(this.money>=900){
                        console.log(`当前星星：${this.money}，可以抢1888豆`);
                        await this.checkLogin(result.info)
                    }else{
                        //删除不满足的
                        $.userList.splice(this.index-1, 1);
                        $.userCount = $.userList.length;
                        console.log(`当前星星：${this.money}`);
                    }
                }
            } else {
                console.log(`获取信息失败[${result?.code}]: ${result?.errmsg}`);
            }
        } catch (e) {
            console.log(e)
        }
    }
    async checkLogin(info) {
        try {
            let options = {
                fn: 'checkLogin',
                method: 'POST',
                url: `eliminate_jd/game/local/logincheck`,
                json: {
                    info: JSON.stringify(info),
                    "reqsId": $.reqId++
                }
            }
            let {result} = await this.request(options)
            if(result?.code == 0) {
                this.gameId = result.role.gameId
                this.gameToken = result.token//$.token3
                //$.strength = result.role.items['8003']
            } else {
                console.log(`获取checkLogin失败[${result?.code}]: ${result?.errmsg}`);
            }
        } catch (e) {
            console.log(e)
        }
    }
    async marketGoods() {
        try {
            let data = {
                "id": this.pltId,
                "activeid": ACT_ID,
                "activeId": ACT_ID,
                "authcode": this.authCode,
                "token": this.token2
            }, iv = randomString(16);
            let options = {
                fn: 'marketgoods',
                method: 'POST',
                url: `platform/active/role/marketgoods`,
                json: {
                    "__data__": this.encrypt(data, iv),
                    "__iv__": iv,
                    "__id__": this.pltId
                }
            }
            let {result} = await this.request(options)
            //{"code":0,"list":[{"res":{"sID":"H001","asConsume":["X028,900"],"sAwardItem":"JD30","iLimit":0,"iDailyLimit":1,"sName":"星星","iTotalLimit":99999,"iTotalDailyLimit":250,"iTotRefreshHour":10},"count":0,"name":"京豆*1888","left":0},{"res":{"sID":"H004","asConsume":["X028,452"],"sAwardItem":"JD31","iLimit":0,"iDailyLimit":1,"sName":"星星","iTotalLimit":99999,"iTotalDailyLimit":400,"iTotRefreshHour":10},"count":3,"name":"京豆*666","left":1},{"res":{"sID":"H007","asConsume":["X028,700"],"sAwardItem":"JD32","iLimit":0,"iDailyLimit":1,"sName":"星星","iTotalLimit":99999,"iTotalDailyLimit":300,"iTotRefreshHour":10},"count":4,"name":"京豆*888","left":1}],"money":376,"serverTime":1677402933091}
            if (result.code === 0) {
                for (let vo of result.list) {
                    if (exchangeName.includes(vo.name)) {
                        let cond = vo['res']['asConsume'][0].split(',');//vo['count'] !== 0
                        if (vo['left'] === 1 && cond[0] === 'X028' && parseInt(cond[1]) <= this.money) {
                            await this.buyGood(vo['res']['sID']);
                        }
                    }
                }
            } else {
                console.log(`获取marketGoods失败[${result?.code}]: ${result?.errmsg}`);
            }
        } catch (e) {
            console.log(e)
        }
    }
    async buyGood(consumeid) {
        if(!consumeid) consumeid="H001";
        try {
            let data = {
                "consumeid": consumeid,
                "id": this.pltId,
                "activeid": ACT_ID,
                "activeId": ACT_ID,
                "authcode": this.authcode,
                "token": this.token2
            }, iv = randomString(16);
            let options = {
                fn: 'buyGood',
                method: 'POST',
                url: `platform/active/role/marketbuy`,
                json: {
                    "__data__": this.encrypt(data, iv),
                    "__iv__": iv,
                    "__id__": this.pltId
                }
            }
            let {result} = await this.request(options)
            if(result.__data__) {
                data = JSON.parse(this.decrypt(result));
                if (data.code === 0) {
                    this.log(`商品兑换成功，获得${data.item[0].itemid === 'JD29' ? '京豆' : '未知奖品'} * ${data.item[0].count}`)
                } else {
                    this.log(`任务完成失败，错误信息：${JSON.stringify(data)}`)
                }
            } else {
                this.log(`兑换失败${JSON.stringify(result)}`);
            }
        } catch (e) {
            console.log(e)
        }
    }
    encrypt(data, iv, game = false) {
        let key = this[(game ? "gameToken" : "token2")];
        key = key.slice(8, 16) + key.slice(24, 32);
        typeof data == "object" && (data = JSON.stringify(data));
        var j = CryptoJS.AES.encrypt(data, CryptoJS.enc.Utf8.parse(key), {
            "iv": CryptoJS.enc.Utf8.parse(iv),
            "mode": CryptoJS.mode.CBC,
            "padding": CryptoJS.pad.Pkcs7
        }),
            k = j.toString();
        return k;
    }
    decrypt(body, game = false) {
        let data = body.__data__,
            iv = body.__iv__,
            id = this[game ? "gameId" : "pltId"],
            key = CryptoJS.MD5(id).toString().slice(0, 16)
        var l = CryptoJS.AES.decrypt(data, CryptoJS.enc.Utf8.parse(key), {
            "iv": CryptoJS.enc.Utf8.parse(iv),
            "mode": CryptoJS.mode.CBC,
            "padding": CryptoJS.pad.Pkcs7
        }),
            m = l.toString(CryptoJS.enc.Utf8);
        return m.toString();
    }
    //做任务逻辑
    async userTask() {
        $.log(`\n============= 账号[${this.index}][${this.UserName}] =============`);
        await this.getIsvToken()
        if(!this.valid) return;
        await this.getIsvToken2()
        if(!this.valid) return;
        await this.getActInfo()
        //await this.marketGoods()
    }
}

!(async () => {
    $.log(`最大并发数: ${MAX_THREAD}`);

    //封装的读取变量方法, 可以自己另外写也可以直接用, 读取到的账号会存入 $.userList 中
    $.read_env(UserClass,ckNames,envSplitor,function(ck){
        let UserName = decodeURIComponent(ck.match(/pt_pin=(.+?);/) && ck.match(/pt_pin=(.+?);/)[1])
        return UserName && TYUserName.indexOf(UserName)!==-1;
    });

    //正常的做任务流程
    for(let user of $.userList) {
        await user.userTask();
        await $.wait(1000);
    }
    if($.userCount){
        //获取当前时间
        var nowtime = new Date().getTime();
        //console.log(nowtime);
        //获取下一个小时
        var h = new Date().getHours() + 1;
        //console.log(h);
        // 获取下一个小时的时间戳
        var end = new Date(new Date(new Date().toLocaleDateString()).getTime() + h * 60 * 60 * 1000 - 1).getTime();
        //console.log(end);
        var timing = end - nowtime;
        console.log(`等待${$.time('hh:mm:ss',end)}抢豆豆`);
        await $.wait(timing);
        console.log($.time('yyyy-MM-dd hh:mm:ss S'));
        //封装的并发
        await $.threadTask('buyGood',MAX_THREAD);
    }
})()
.catch((e) => $.log(e))
.finally(() => $.exitNow())