/**
cron 50 9 * * * jd_ddaxc_qdd.js
*/
const Env = require('./basic/Env.js');
const $ = new Env('东东爱消除-抢豆豆');
const notify = $.isNode() ? require('./sendNotify.js') : '';
const jdCookieNode = $.isNode() ? require('./jdCookie.js') : '';
let exchangeName = ['京豆*1888']
if (process.env.EXCHANGE_EC) {
    exchangeName = process.env.EXCHANGE_EC.indexOf('&')
}
const CryptoJS = require('crypto-js')

let ACT_ID = 'A_112790_R_1_D_20201028'
//Node.js用户请在jdCookie.js处填写京东ck;
//IOS等用户直接用NobyDa的jd cookie
let cookiesArr = [], cookie = '', message;

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

if ($.isNode()) {
    Object.keys(jdCookieNode).forEach((item) => {
        cookiesArr.push(jdCookieNode[item])
    })
    if (process.env.JD_DEBUG && process.env.JD_DEBUG === 'false') console.log = () => { };
} else {
    cookiesArr = [$.getdata('CookieJD'), $.getdata('CookieJD2'), ...jsonParse($.getdata('CookiesJD') || "[]").map(item => item.cookie)].filter(item => !!item);
}

!(async () => {
    if (!cookiesArr[0]) {
        $.msg($.name, '【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取', 'https://bean.m.jd.com/', { "open-url": "https://bean.m.jd.com/" });
        return;
    }

    $.shareCodesArr = []
    $.datalist = {};
    let taskAll = [];
    for (let i = 0; i < cookiesArr.length; i++) {
        if (cookiesArr[i]) {
            cookie = cookiesArr[i];
            $.UserName = decodeURIComponent(cookie.match(/pt_pin=(.+?);/) && cookie.match(/pt_pin=(.+?);/)[1])
            $.index = i + 1;
            $.isLogin = true;
            $.nickName = '';
            message = '';
            if( !$.UserName || TYUserName.indexOf($.UserName)===-1 ) continue;
            await GetUA();
            $.datalist[$.UserName] = { "UA": $.UA };
            //await TotalBean();
            console.log(`\n******开始【京东账号${$.index}】${$.nickName || $.UserName}*********\n`);
            if (!$.isLogin) {
                $.msg($.name, `【提示】cookie已失效`, `京东账号${$.index} ${$.nickName || $.UserName}\n请重新登录获取\nhttps://bean.m.jd.com/`, { "open-url": "https://bean.m.jd.com/" });
                if ($.isNode()) {
                    await notify.sendNotify(`${$.name}cookie已失效 - ${$.UserName}`, `京东账号${$.index} ${$.UserName}\n请重新登录获取cookie`);
                } else {
                    $.setdata('', `CookieJD${i ? i + 1 : ""}`);//cookie失效，故清空cookie。$.setdata('', `CookieJD${i ? i + 1 : "" }`);//cookie失效，故清空cookie。
                }
                continue
            }
            await jdBeauty();
            let money = $.datalist[$.UserName].money;
            if(money>=900){
                taskAll.push(await buyGood("H007"));
            }
        }
    }

    //获取当前时间
    var nowtime = new Date().getTime();
    console.log(nowtime);
    //获取下一个小时
    var h = new Date().getHours() + 1;
    console.log(h);
    // 获取下一个小时的时间戳
    var end = new Date(new Date(new Date().toLocaleDateString()).getTime() + h * 60 * 60 * 1000 - 1).getTime();
    console.log(end);
    var timing = end - nowtime;
    console.log(timing);
    setInterval(async () => {
        console.log($.time('yyyy-MM-dd hh:mm:ss S'));
        await Promise.all(taskAll);
    }, timing);

})()
    .catch((e) => {
        $.log('', `❌ ${$.name}, 失败! 原因: ${e}!`, '')
    })
    .finally(() => {
        $.done();
    })

async function jdBeauty() {
    $.reqId = 1
    await getIsvToken()
    await getIsvToken2()
    await getActInfo()
    //await marketGoods()
}

// 获得IsvToken
function getIsvToken() {
    return new Promise(resolve => {
        //POST h2
        $.post(jdUrl('encrypt/pin?appId=dafbe42d5bff9d82298e5230eb8c3f79'), async (err, resp, data) => {
            try {
                if (err) {
                    console.log(`${err},${jsonParse(resp.body)['message']}`)
                    console.log(`${$.name} API请求失败，请检查网路重试`)
                } else {
                    if (safeGet(data)) {
                        data = JSON.parse(data);
                        if (data.success && data.data) {
                            $.datalist[$.UserName].lkToken = data.data.lkToken;
                        } else console.log(`getIsvToken 错误：${data.errorCode + data.errorMessage}`)

                    }
                }
            } catch (e) {
                $.logErr(e, resp)
            } finally {
                resolve(data);
            }
        })
    })
}

// 获得对应游戏的访问Token
function getIsvToken2() {
    return new Promise(resolve => {
        $.post(jdUrl('user/token?appId=dafbe42d5bff9d82298e5230eb8c3f79&client=m&url=pengyougou.m.jd.com'), async (err, resp, data) => {
            try {
                if (err) {
                    console.log(`${err},${jsonParse(resp.body)['message']}`)
                    console.log(`${$.name} API请求失败，请检查网路重试`)
                } else {
                    if (safeGet(data)) {
                        data = JSON.parse(data);
                        $.datalist[$.UserName].token = data.data
                    }
                }
            } catch (e) {
                $.logErr(e, resp)
            } finally {
                resolve(data);
            }
        })
    })
}

function getActInfo(inviter = null) {
    let body = {
        "inviter": inviter,
        "activeId": ACT_ID,
        "refid": "wojing",
        "lkToken": $.datalist[$.UserName].lkToken,
        "token": $.datalist[$.UserName].token,//"AAFj4l0uADCN8OgtvOA0H0PfSKwWlAA-Z2FuMNgeaKsVXmKWfaV18TPpRgUI6_vv-WxfZ9PuaWQ",
        "returnurl": "https://prodev.m.jd.com/mall/active/448KZiLTkqbPBuhS7nK5rJsrLHGD/index.html?babelChannel=ttt2",
        //"tttparams":"7fuwkeyJhZGRyZXNzSWQiOjIwODEwNTMxMDUsImRMYXQiOjAsImRMbmciOjAsImdMYXQiOiIyOC4yOTc4IiwiZ0xuZyI6IjEwNS4yNCIsImdwc19hcmVhIjoiMjJfMjAwNV8zNjMxNV81NzIxMiIsImxhdCI6MjguNzYxMTAxLCJsbmciOjEwNC42MTc3NjcsIm1vZGVsIjoiMjIwODEyMTJDIiwicG9zTGF0IjoiMjguMjk3OCIsInBvc0xuZyI6IjEwNS4yNCIsInByc3RhdGUiOiIwIiwidW5fYXJlYSI6IjIyXzIwMDVfMjAxMF8zNjQ2Mi5J9",
        "babelChannel": "ttt2", "location": "22-2005-36315", "deviceType": "h5", "scene": "3", "source": "wojing"
    }
    return new Promise(resolve => {
        $.post(taskUrl("platform/active/role/login", body), async (err, resp, data) => {
            try {
                if (err) {
                    console.log(`${err}`)
                    console.log(`${$.name} API请求失败，请检查网路重试`)
                } else {
                    if (safeGet(data)) {
                        data = JSON.parse(data);
                        if (!inviter) {
                            $.info = data.info;
                            $.datalist[$.UserName] = Object.assign(
                                $.datalist[$.UserName], {
                                inviter: data.id,
                                authcode: data.authcode,
                                token2: data.token,
                                money: JSON.parse(data.info.platform)['money'],
                                pltId: data.info.pltId,
                            }
                            );
                            console.log(`您的好友助力码为：${$.datalist[$.UserName].inviter}`)
                            console.log(`当前星星：${$.datalist[$.UserName].money}`)
                            await checkLogin()
                        }
                    }
                }
            } catch (e) {
                $.logErr(e, resp)
            } finally {
                resolve(data);
            }
        })
    })
}

function checkLogin() {
    return new Promise(resolve => {
        $.post(taskUrl("eliminate_jd/game/local/logincheck", {
            info: JSON.stringify($.info),
            "reqsId": $.reqId++
        }), async (err, resp, data) => {
            try {
                if (err) {
                    console.log(`${err}`)
                    console.log(`${$.name} API请求失败，请检查网路重试`)
                } else {
                    if (safeGet(data)) {
                        data = JSON.parse(data);
                        $.datalist[$.UserName].gameId = data.role.gameId
                        $.datalist[$.UserName].gameToken = data.token//$.token3
                        $.strength = data.role.items['8003']
                    }
                }
            } catch (e) {
                $.logErr(e, resp)
            } finally {
                resolve(data);
            }
        })
    })
}

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function marketGoods() {
    let data = {
        "id": $.datalist[$.UserName].pltId,
        "activeid": ACT_ID,
        "activeId": ACT_ID,
        "authcode": $.datalist[$.UserName].authCode,
        "token": $.datalist[$.UserName].token2
    }, iv = randomString(16),
        body = {
            "__data__": encrypt(data, iv),
            "__iv__": iv,
            "__id__": $.datalist[$.UserName].pltId
        }
    return new Promise(resolve => {
        $.post(taskUrl("/platform/active/role/marketgoods", body),
            async (err, resp, data) => {
                try {
                    if (err) {
                        console.log(`${err}`)
                        console.log(`${$.name} API请求失败，请检查网路重试`)
                    } else {
                        if (safeGet(data)) {
                            //{"code":0,"list":[{"res":{"sID":"H001","asConsume":["X028,900"],"sAwardItem":"JD30","iLimit":0,"iDailyLimit":1,"sName":"星星","iTotalLimit":99999,"iTotalDailyLimit":250,"iTotRefreshHour":10},"count":0,"name":"京豆*1888","left":0},{"res":{"sID":"H004","asConsume":["X028,452"],"sAwardItem":"JD31","iLimit":0,"iDailyLimit":1,"sName":"星星","iTotalLimit":99999,"iTotalDailyLimit":400,"iTotRefreshHour":10},"count":3,"name":"京豆*666","left":1},{"res":{"sID":"H007","asConsume":["X028,700"],"sAwardItem":"JD32","iLimit":0,"iDailyLimit":1,"sName":"星星","iTotalLimit":99999,"iTotalDailyLimit":300,"iTotRefreshHour":10},"count":4,"name":"京豆*888","left":1}],"money":376,"serverTime":1677402933091}
                            data = JSON.parse(data)
                            //data.money
                            let money = $.datalist[$.UserName].money;
                            if (data.code === 0) {
                                for (let vo of data.list) {
                                    if (exchangeName.includes(vo.name)) {
                                        let cond = vo['res']['asConsume'][0].split(',');//vo['count'] !== 0
                                        if (vo['left'] === 1 && cond[0] === 'X028' && parseInt(cond[1]) <= money) {
                                            await buyGood(vo['res']['sID'])
                                        }
                                    }
                                }
                            } else {
                                console.log(`任务完成失败，错误信息：${JSON.stringify(data)}`)
                            }
                        }
                    }
                } catch (e) {
                    $.logErr(e, resp)
                } finally {
                    resolve(data);
                }
            })
    })
}

async function QueryExchange() {
    if($.exchangeList){
        for (let vo of $.exchangeList) {
            if (exchangeName.includes(vo.name)) {
                let cond = vo['res']['asConsume'][0].split(',');//vo['count'] !== 0
                if (vo['left'] === 1 && cond[0] === 'X028' && parseInt(cond[1]) <= money) {
                    await buyGood(vo['res']['sID'])
                }
            }
        }
    }

}

function buyGood(consumeid) {
    let data = {
        "consumeid": consumeid,
        "id": $.datalist[$.UserName].pltId,
        "activeid": ACT_ID,
        "activeId": ACT_ID,
        "authcode": $.datalist[$.UserName].authcode,
        "token": $.datalist[$.UserName].token2
    }, iv = randomString(16),
        body = {
            "__data__": encrypt(data, iv),
            "__iv__": iv,
            "__id__": $.datalist[$.UserName].pltId
        }
    return new Promise(resolve => {
        $.post(taskUrl("/platform/active/role/marketbuy", body),
            async (err, resp, data) => {
                try {
                    if (err) {
                        console.log(`${err}`)
                        console.log(`${$.name} API请求失败，请检查网路重试`)
                    } else {
                        if (safeGet(data)) {
                            data = JSON.parse(data)
                            if (data.__data__) {
                                data = JSON.parse(decrypt(data));
                                if (data.code === 0) {
                                    console.log(`商品兑换成功，获得${data.item[0].itemid === 'JD29' ? '京豆' : '未知奖品'} * ${data.item[0].count}`)
                                } else {
                                    console.log(`任务完成失败，错误信息：${JSON.stringify(data)}`)
                                }
                            }
                        }
                    }
                } catch (e) {
                    $.logErr(e, resp)
                } finally {
                    resolve(data);
                }
            })
    })
}

function taskUrl(functionId, body = {}, decrypt = false) {
    return {
        url: `https://jd.moxigame.cn/${functionId}`,
        body: decrypt ? body : JSON.stringify(body),
        headers: {
            'Host': 'jd.moxigame.cn',
            'Connection': 'keep-alive',
            'Content-Type': decrypt ? 'application/x-www-form-urlencoded' : 'application/json',
            Accept: "*/*",
            Origin: "https://game-cdn.moxigame.cn",
            "X-Requested-With": "com.jingdong.app.mall",
            "Sec-Fetch-Site": "same-site",
            "Sec-Fetch-Mode": "cors",
            "Sec-Fetch-Dest": "empty",
            Referer: "https://game-cdn.moxigame.cn/",//https://game-cdn.moxigame.cn/eliminateJD/index.html?activeId=A_112790_R_1_D_20201028
            "Accept-Encoding": "gzip, deflate, br",
            "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
            "Cookie": cookie,
            "User-Agent": $.datalist[$.UserName].UA,
            "X-Requested-With": "XMLHttpRequest"
        }
    }
}

function jdUrl(functionId, body = '') {
    return {
        url: `https://jdjoy.jd.com/saas/framework/${functionId}`,
        body: body,
        headers: {
            'Host': 'jdjoy.jd.com',
            origin: "https://prodev.m.jd.com",
            "x-requested-with": "com.jingdong.app.mall",
            "sec-fetch-site": "same-site",
            "sec-fetch-mode": "cors",
            "sec-fetch-dest": "empty",
            referer: "https://prodev.m.jd.com/mall/active/448KZiLTkqbPBuhS7nK5rJsrLHGD/index.html?babelChannel=ttt2&tttparams=7fuwkeyJhZGRyZXNzSWQiOjIwODEwNTMxMDUsImRMYXQiOjAsImRMbmciOjAsImdMYXQiOiIyOC4yOTc4IiwiZ0xuZyI6IjEwNS4yNCIsImdwc19hcmVhIjoiMjJfMjAwNV8zNjMxNV81NzIxMiIsImxhdCI6MjguNzYxMTAxLCJsbmciOjEwNC42MTc3NjcsIm1vZGVsIjoiMjIwODEyMTJDIiwicG9zTGF0IjoiMjguMjk3OCIsInBvc0xuZyI6IjEwNS4yNCIsInByc3RhdGUiOiIwIiwidW5fYXJlYSI6IjIyXzIwMDVfMjAxMF8zNjQ2Mi5J9",
            "accept-encoding": "gzip, deflate, br",
            "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
            'user-agent': $.datalist[$.UserName].UA,
            //'content-type': 'application/x-www-form-urlencoded',
            'Cookie': cookie
        }
    }
}

function encrypt(data, iv, game = false) {
    let key = $.datalist[$.UserName][(game ? "gameToken" : "token2")];
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

function decrypt(body, game = false) {
    let data = body.__data__,
        iv = body.__iv__,
        id = $.datalist[$.UserName][game ? "gameId" : "pltId"],
        key = CryptoJS.MD5(id).toString().slice(0, 16)
    var l = CryptoJS.AES.decrypt(data, CryptoJS.enc.Utf8.parse(key), {
        "iv": CryptoJS.enc.Utf8.parse(iv),
        "mode": CryptoJS.mode.CBC,
        "padding": CryptoJS.pad.Pkcs7
    }),
        m = l.toString(CryptoJS.enc.Utf8);
    return m.toString();
}

async function GetUA() {
    //User-Agent: jdapp;android;11.4.4;;;appBuild/98651;ef/1;ep/%7B%22hdid%22%3A%22JM9F1ywUPwflvMIpYPok0tt5k9kW4ArJEU3lfLhxBqw%3D%22%2C%22ts%22%3A1675779374699%2C%22ridx%22%3A-1%2C%22cipher%22%3A%7B%22sv%22%3A%22CJC%3D%22%2C%22ad%22%3A%22CJunCJvvZJqnZQOnZNGyYq%3D%3D%22%2C%22od%22%3A%22DNS5YwG5DQSnD2YyEQHuDG%3D%3D%22%2C%22ov%22%3A%22CzC%3D%22%2C%22ud%22%3A%22CJunCJvvZJqnZQOnZNGyYq%3D%3D%22%7D%2C%22ciphertype%22%3A5%2C%22version%22%3A%221.2.0%22%2C%22appname%22%3A%22com.jingdong.app.mall%22%7D;jdSupportDarkMode/0;Mozilla/5.0 (Linux; Android 13; 22081212C Build/TKQ1.220829.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/89.0.4389.72 MQQBrowser/6.2 TBS/046141 Mobile Safari/537.36
    $.UA = "jdapp;iPhone;10.1.4;13.1.2;" + randomString(40) + ";network/wifi;model/iPhone8,1;addressid/2308460611;appBuild/167814;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 13_1_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1";
}

function randomString(e) {
    e = e || 32;
    let t = "0123456789abcdef",
        a = t.length,
        n = "";
    for (let i = 0; i < e; i++)
        n += t.charAt(Math.floor(Math.random() * a));
    return n
}

function safeGet(data) {
    try {
        if (typeof JSON.parse(data) == "object") {
            return true;
        }
    } catch (e) {
        console.log(e);
        console.log(`京东服务器访问数据为空，请检查自身设备网络情况`);
        return false;
    }
}

function jsonParse(str) {
    if (typeof str == "string") {
        try {
            return JSON.parse(str);
        } catch (e) {
            console.log(e);
            $.msg($.name, '', '不要在BoxJS手动复制粘贴修改cookie')
            return [];
        }
    }
}