/*
饿了么 v3.04

此版本不再支持圈X, 需要用圈X跑的请使用旧版脚本
签到，吃货豆任务，现金提款机，笔笔返，抢10元券

自行捉包把饿了么域名包里的Cookie填到ELM_CK里, 多账号换行或&或@隔开
export ELM_CK="UTUSER=xxxxx; SID=xxxxxxxx; cookie2=yyyyyyy;"

默认任务最大并发数为50, 需要更改的话, 填写变量 ELM_Thread, 以下为3账号并发配置:
export ELM_Thread=3

需要抢10元券的号请在对应账号ck后面加上 grabCoupon=1; ，或者在变量ELM_GrabCoupon里面对应账号位置填上1(&隔开)，否则默认不抢
如：export ELM_CK="UTUSER=xxxxx; cookie2=yyyyyyy; grabCoupon=1;"
或单独设置变量：export ELM_GrabCoupon="1&1&0&0" (代表账号1和2抢券，3和4不抢)

抢券时间默认为9点59分59秒200毫秒开始，需要改的话自己设置变量ELM_CouponTime
如：export ELM_CouponTime="9:59:59:700"
据说现在下午3点后可以随便兑换10元无门槛券

定时每天一两次就行，早上7点后务必跑一次去瓜分提款机现金

cron: 57 0,9 * * *
*/
//const Env=require('./basic/Env');
const {TYQLDG_API,CkToJson,JsonToCK}=require('./basic/tyqldg');
const $ = new Env("饿了么"),
got = require("got"),
{CookieJar} = require("tough-cookie"),
envPrefix = "ELM_",
envSplitor = ["\n", "&", "@"],//支持多种分割，但要保证变量里不存在这个字符
ckNames = ["ELM_CK"],//可以支持多变量
MAX_THREAD = parseInt(process.env[envPrefix + "Thread"]) || 50,//默认最大并发数
DEFAULT_TIMEOUT = 8000,//超时
DEFAULT_RETRY = 3;//重试次数
let eid=0,env_name="ELM_CK";

let _0x4db149 = null;
const _0x487d49 = process.env[envPrefix + "Proxy"] || process.env.LEAF_DEBUG_PROXY || "",
    _0x54d102 = "9:59:59:200",
    _0x27b73d = "10:00:00:000".split(":"),
    _0x57fdea = 6,
    _0x509129 = 200,
    _0x590d6b = 50,
    _0x486bfd = 30,
    _0x5494c5 = process.env.ELM_CouponTime || _0x54d102,
    _0x4e1262 = process.env.ELM_GrabCoupon?.["split"]("&") || [];
const _0xd2b9 = 3.1,
    _0xd66760 = "elm",
    _0x320bb6 = "https://leafxcy.coding.net/api/user/leafxcy/project/validcode/shared-depot/validCode/git/blob/master/code.json",
    _0x5b4fd9 = "https://leafxcy.coding.net/api/user/leafxcy/project/validcode/shared-depot/validCode/git/blob/master/" + _0xd66760 + ".json",
    UA = "Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/19A346 Ariver/1.1.0 AliApp(AP/10.3.30.9000) Nebula WK RVKType(1) AlipayDefined(nt:WIFI,ws:390|780|3.0) AlipayClient/10.3.30.9000 Language/zh-Hans Region/CN MiniProgram APXWebView NebulaX/1.0.0",
    Origin = "https://tb.ele.me",
    Referer = "https://tb.ele.me/",
    _0x19009e = "0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM",
    _0x8533af = "12574478",
    _0x27580e = "2.7.0";
let _0x2c57c7 = "602ea051",
    _0x2b1d05 = "WECHAT_APP",
    _0x38e56d = ["201200@eleme_iphone_10.15.33", "200001@wechat_iphone_1.0.0", "2021001110676437@alipay_iphone_10.14.3"],
    _0x166234 = [],
    _0x2899fb = [],
    _0x522b1b = [],
    _0x2d9242 = [];
try {
    fs = require("fs");
} catch (_0x1c7112) { }
if (fs) {
    try {
        _0x166234 = JSON.parse(fs.readFileSync("./elm_id_chd_simple.json", "utf-8"));
    } catch { }
    try {
        _0x2899fb = JSON.parse(fs.readFileSync("./elm_id_chd_pageview.json", "utf-8"));
    } catch { }
    try {
        _0x522b1b = JSON.parse(fs.readFileSync("./elm_id_tkj_simple.json", "utf-8"));
    } catch { }
    try {
        _0x2d9242 = JSON.parse(fs.readFileSync("./elm_id_tkj_pageview.json", "utf-8"));
    } catch { }
}
const _0x5a2c6d = 10000,
    _0x337d90 = 3000,
    _0x3af049 = 20000,
    _0x197605 = 5000,
    _0x20cf13 = {"CHD": "吃货豆","INTEGRAL_PROPERTY": "提款卡"};
let _0x8b6399 = [];

async function expireNotify(userName,index){
    let json={"userName":userName,"title":`${$.name}账号cookie已失效`,"message":`${$.name}账号${index} ${userName}\n请重新登录获取cookie`,"disable":true};
    if(eid) json.eid=eid;else json.env_name=env_name;
    let NotifyData = await TYQLDG_API("notify",json);
    if(NotifyData){
        if(NotifyData.code==200){
            if( !eid && NotifyData.eid ) eid=NotifyData.eid;
        }
        console.log(NotifyData.msg);
    }
}

class _0x1598f2 {
    constructor() {
        this.index = $.userIdx++;
        this.name = "";
        this.valid = true;
        this.got = got.extend({
            "retry": {"limit": 0},
            "timeout": DEFAULT_TIMEOUT,
            "followRedirect": false
        });
    }
    log(_0x273ef1, _0x4b9a86 = {}) {
        var _0x401770 = "",
            _0x4b1f63 = $.userCount.toString().length;
        if (this.index) {
            _0x401770 += "账号[" + $.padStr(this.index, _0x4b1f63) + "]";
        }
        if (this.name) {
            _0x401770 += "[" + this.name + "]";
        }
        $.log(_0x401770 + _0x273ef1, _0x4b9a86);
    }
    async request(_0x155b44) {
        var _0x3a30ad = null,
            _0x44773f = 0,
            _0x234473 = _0x155b44.fn || _0x155b44.url;
        _0x155b44.method = _0x155b44?.["method"]?.["toUpperCase"]() || "GET";
        if (_0x487d49) {
            if (!_0x4db149) {
                var _0x5b5033 = require("https-proxy-agent");
                _0x4db149 = new _0x5b5033(_0x487d49);
            }
            _0x155b44.agent = {
                "http": _0x4db149,
                "https": _0x4db149
            };
            _0x155b44.https = {
                "rejectUnauthorized": false
            };
        }
        while (_0x44773f++ < DEFAULT_RETRY) {
            try {
                await this.got(_0x155b44).then(_0x3833f => {
                    _0x3a30ad = _0x3833f;
                }, _0x19a5b9 => {
                    _0x3a30ad = _0x19a5b9.response;
                });
                if ((_0x3a30ad?.["statusCode"] / 100 | 0) <= 4) {
                    break;
                }
            } catch (_0x2820ee) {
                _0x2820ee.name == "TimeoutError" ? this.log("[" + _0x234473 + "]请求超时，重试第" + _0x44773f + "次") : this.log("[" + _0x234473 + "]请求错误(" + _0x2820ee.message + ")，重试第" + _0x44773f + "次");
            }
        }
        if (_0x3a30ad == null) {
            return Promise.resolve({
                "statusCode": -1,
                "headers": null,
                "result": null
            });
        }
        if (_0x155b44.debugIn) {
            $.log(_0x3a30ad.request.options.headers);
            if (_0x155b44.json) {
                $.log(_0x155b44.json);
            }
            if (_0x155b44.form) {
                $.log(_0x155b44.form);
            }
            if (_0x155b44.body) {
                $.log(_0x155b44.body);
            }
        }
        let {
            statusCode: _0x117de1,
            headers: _0x25b774,
            body: _0x527aff
        } = _0x3a30ad;
        if (_0x527aff) {
            try {
                _0x527aff = JSON.parse(_0x527aff);
            } catch { }
        }
        _0x155b44.debugOut && ($.log(_0x25b774), $.log(JSON.stringify(_0x527aff)));
        const _0x192034 = {
            "statusCode": _0x117de1,
            "headers": _0x25b774,
            "result": _0x527aff
        };
        return Promise.resolve(_0x192034);
    }
}
let _0x3793b6 = new _0x1598f2();
class _0x4aa47f extends _0x1598f2 {
    constructor(_0x5c5cb9) {
        super();
        _0x5c5cb9 = _0x5c5cb9.replace(/ /g, "");
        this.cookieJar = new CookieJar();
        for (let _0x47c240 of _0x5c5cb9.split(";").filter(_0x5a4569 => _0x5a4569)) {
            let _0x18ef64 = _0x47c240.split("=");
            if (!_0x18ef64[0]) {
                continue;
            }
            this[_0x18ef64[0]] = _0x18ef64[1] || "";
        }
        this.task_list = [];
        this.latitude = "22.52" + $.randomString(4, "0123456789");
        this.longitude = "114.07" + $.randomString(4, "0123456789");
        this.ua = "140#" + $.randomString(60, _0x19009e);
        this.umidtoken = $.randomString(68, _0x19009e);
        _0x4e1262.length >= this.index ? this.grabCouponFlagEnv = Number(_0x4e1262[this.index - 1]) : this.grabCouponFlagEnv = 0;
        const _0x5bfe4a = {
            "Connection": "keep-alive",
            "User-Agent": UA,
            "Origin": Origin,
            "Referer": Referer
        };
        const _0x2374df = {
            "limit": 0
        };
        const _0x27eb9e = {
            "headers": _0x5bfe4a,
            "retry": _0x2374df,
            "timeout": DEFAULT_TIMEOUT,
            "followRedirect": false
        };
        this.got = got.extend(_0x27eb9e);
        const _0x568a3f = {
            "x-shard": "shardid=1",
            "Referer": "https://r.ele.me/",
            "Origin": "https://r.ele.me"
        };
        this.cashback_header = _0x568a3f;
    }
    ["getSign"](_0x2fff46, _0x3c3287) {
        let _0x2c0264 = this.cookieJar.getCookieStringSync("https://mtop.ele.me"),
            _0x355889 = _0x2c0264.match(/_m_h5_tk=(\w+)_\w+/);
        this.md5Salt = _0x355889 ? _0x355889[1] : "4c260d5bf8993f39571ba378979cb915";
        let _0x1d98c8 = [this.md5Salt, _0x2fff46.toString(), _0x8533af, JSON.stringify(_0x3c3287)];
        return _0x4c8fc0(_0x1d98c8.join("&"));
    }
    ["get_params"](_0x40462d, _0x324aad, _0x5ec123 = {}) {
        let _0x144b14 = Date.now(),
            _0x206ff6 = {};
        for (let _0xeb2b2c in _0x324aad) {
            typeof _0x324aad[_0xeb2b2c] == "object" ? _0x206ff6[_0xeb2b2c] = JSON.stringify(_0x324aad[_0xeb2b2c]) : _0x206ff6[_0xeb2b2c] = _0x324aad[_0xeb2b2c];
        }
        let _0x1ff4e8 = {
            "jsv": _0x27580e,
            "appKey": _0x8533af,
            "t": _0x144b14,
            "sign": this.getSign(_0x144b14, _0x206ff6),
            "api": _0x40462d,
            "v": "1.0",
            "ecode": "1",
            "type": "json",
            "valueType": "string",
            "needLogin": "true",
            "LoginRequest": "true",
            "ttid": _0x38e56d[0] || "",
            "dataType": "jsonp",
            "data": JSON.stringify(_0x206ff6)
        };
        Object.assign(_0x1ff4e8, _0x5ec123);
        return _0x1ff4e8;
    }
    async ["refresh_ck"](_0x52dd06 = {}) {
        this.valid = false;
        try {
            let _0x27da34 = "mtop.alsc.user.session.exchange.apply";
            const _0x40843c = {
                "clientType": "weixin"
            };
            let _0x37588d = this.get_params(_0x27da34, _0x40843c);
            const _0x3a8c0d = {
                "loginSucResultAction": "loginResult",
                "loginType": "snsLogin",
                "loginScene": "miniProgramLogin",
                "resultCode": 100,
                "appEntrance": "weixin",
                "elemeExt": {},
                "smartlock": false,
                "snsType": "weixin_mini_program",
                "cookie2": this.cookie2,
                "munb": 2214134889517,
                "SID": this.SID,
                "loginResult": "success"
            };
            let _0xc11596 = {
                "x-smallstc": JSON.stringify(_0x3a8c0d)
            };
            const _0x49e2cc = {
                "fn": "refresh_ck",
                "method": "get",
                "url": "https://mtop.ele.me/h5/" + _0x27da34 + "/1.0",
                "searchParams": _0x37588d,
                "headers": _0xc11596,
                "cookieJar": this.cookieJar
            };
            let {
                result: _0x55d3ac
            } = await this.request(_0x49e2cc),
                _0x259d8f = _0x55d3ac?.["ret"][0] || "";
            if (_0x259d8f.includes("SUCCESS")) {
                this.valid = true;
                this.expireTime = $.time("yyyy-MM-dd hh:mm:ss", Number(_0x55d3ac.data.expiredTime) || 0);
                this.log("刷新CK成功");
                await this.set_cookie(_0x55d3ac.data.exchangeSessionValue);
                //console.log(this.cookieJar.getCookieString("https://mtop.ele.me"));
            } else {
                if ((_0x259d8f.includes("FAIL_SYS_TOKEN_EMPTY") || _0x259d8f.includes("FAIL_SYS_TOKEN_EMPTY")) && !_0x52dd06.expire_retry) {
                    let _0x234563 = Object.assign({}, _0x52dd06);
                    _0x234563.expire_retry = true;
                    await this.refresh_ck(_0x234563);
                } else {
                    if (_0x259d8f.includes("FAIL_SYS_SESSION_EXPIRED")) {
                        await expireNotify(this.UTUSER,this.index);
                        this.log("CK过期");
                    } else {
                        this.log("刷新CK失败: " + _0x259d8f);
                    }
                }
            }
        } catch (_0xf63d86) {
            $.log(_0xf63d86);
        } finally {
            return Promise.resolve();
        }
    }
    async ["set_cookie"](exchangeSessionValue) {
        try {
            await this.request({
                "fn": "set_cookie",
                "method": "post",
                "url": "https://alsc-session.ele.me/set_cookie",
                "json": {
                    "exchangeSessionValue": exchangeSessionValue
                },
                "cookieJar": this.cookieJar
            });
        } catch (_0x3e66b5) {
            $.log(_0x3e66b5);
        } finally {
            return Promise.resolve();
        }
    }
    async ["user_mini"](_0x251ed6 = {}) {
        try {
            const _0x4fe8ad = {
                "fn": "user_mini",
                "method": "get",
                "url": "https://restapi.ele.me/eus/v4/user_mini",
                "cookieJar": this.cookieJar
            };
            let {result} = await this.request(_0x4fe8ad);
            if(result?.["mobile"]){
                let tel=result.mobile;
                tel = tel.substr(0,3) + "****" + tel.substr(7);
                this.name=result.username?result.username:tel;
            }else{
                this.log("获取账号失败");
                await expireNotify(this.UTUSER,this.index);
            }
        } catch (_0x20e610) {
            $.log(_0x20e610);
        } finally {
            return Promise.resolve();
        }
    }
    async ["foodieRecords"](_0x1bac9d = {}) {
        try {
            const _0x1a0fe8 = {
                "fn": "foodieRecords",
                "method": "get",
                "url": "https://h5.ele.me/restapi/svip_biz/v1/supervip/foodie/records",
                "cookieJar": this.cookieJar,
                "searchParams": {}
            };
            _0x1a0fe8.searchParams.offset = 0;
            _0x1a0fe8.searchParams.limit = _0x1bac9d.limit || 100;
            _0x1a0fe8.searchParams.longitude = this.longitude;
            _0x1a0fe8.searchParams.latitude = this.latitude;
            let {
                result: _0x411c20
            } = await this.request(_0x1a0fe8);
            if (_0x411c20.success == true) {
                let _0x26ebb6 = $.time("yyyy-MM-dd");
                this.pea = parseInt(_0x411c20.peaCount) || 0;
                this.todayBean = 0;
                if (_0x411c20.records && _0x411c20.records.length > 0) {
                    for (let _0x4b4d5b of _0x411c20.records) {
                        _0x4b4d5b.createdTime.includes(_0x26ebb6) && _0x4b4d5b.optType == 1 && (this.todayBean += parseInt(_0x4b4d5b.count));
                    }
                }
                this.monthAccountInfo = _0x411c20.monthAccountInfo;
            } else {
                this.log("查询吃货豆收支失败: " + _0x411c20.message);
            }
        } catch (_0xa64551) {
            $.log(_0xa64551);
        } finally {
            return Promise.resolve();
        }
    }
    async ["get_foodie_record"](_0x13dee5 = {}) {
        try {
            let _0x213338 = "867018",
                _0x3c1212 = "mtop.alibaba.svip.langrisser.query";
            const _0x1db418 = {
                "needHead": true,
                "month": ""
            };
            const _0x59cba7 = {
                "backup": false,
                "count": 1,
                "data": _0x1db418,
                "resId": _0x213338
            };
            const _0x4f6e13 = {
                "lgrsRequestItems": [_0x59cba7],
                "longitude": this.longitude,
                "latitude": this.latitude
            };
            let _0x2772b6 = this.get_params(_0x3c1212, _0x4f6e13);
            const _0x2dbf8b = {
                "fn": "get_foodie_record",
                "method": "get",
                "url": "https://mtop.ele.me/h5/" + _0x3c1212 + "/1.0",
                "searchParams": _0x2772b6,
                "cookieJar": this.cookieJar
            };
            let {
                result: _0x3c8c6d
            } = await this.request(_0x2dbf8b),
                _0x3f7fe2 = _0x3c8c6d?.["ret"][0] || "";
            if (_0x3f7fe2.includes("SUCCESS")) {
                let _0x118bf8 = _0x3c8c6d?.["data"]?.["data"][_0x213338]?.["data"][0] || {};
                this.pea = parseInt(_0x118bf8.peaCount) || 0;
                let _0x785a4f = _0x118bf8?.["accountMonthRecords"] || [];
                for (let _0x428758 of _0x785a4f) { }
            } else {
                this.log("查询吃货豆出错: " + _0x3f7fe2);
            }
        } catch (_0x28c40a) {
            $.log(_0x28c40a);
        } finally {
            return Promise.resolve();
        }
    }
    async ["init_check"]() {
        await this.user_mini();
        await this.foodieRecords();
        this.log("吃货豆: " + this.pea + ", CK过期时间: " + this.expireTime);
    }
    async ["supportor"](_0x2ec3a7 = {}) {
        try {
            let _0x1a4b19 = "mtop.me.ele.alsc.alpac.recommend.support",
                _0x2e5f46 = {
                    "requestId": $.randomString(32).toLowerCase(),
                    "ttid": "200001@wechat_ios_1.0.0",
                    "channel": _0x2b1d05,
                    "unionId": "",
                    "ownerId": _0x2c57c7,
                    "fromOfficialAccount": false,
                    "bizType": 1,
                    "referCode": "",
                    "referId": "",
                    "referChannelCode": "",
                    "referChannelType": "",
                    "templateId": ["wxqFTeTYUFXbV3j4Jo-EQioceVmliHRQjEZP0POCr3k"],
                    "v": "2.9",
                    "actId": _0x2ec3a7?.["actid"]?.["toString"]() || "1"
                },
                _0x1dd2b7 = this.get_params(_0x1a4b19, _0x2e5f46);
            const _0xae0b74 = {
                "fn": "supportor",
                "method": "get",
                "url": "https://mtop.ele.me/h5/" + _0x1a4b19 + "/1.0",
                "searchParams": _0x1dd2b7,
                "cookieJar": this.cookieJar
            };
            let {
                result: _0x2002e9
            } = await this.request(_0xae0b74),
                _0x24b29d = _0x2002e9?.["ret"][0] || "";
            if (_0x24b29d.includes("SUCCESS")) {
                if (_0x2002e9?.["data"]?.["code"] == 0) {
                    let _0x179c51 = _0x2002e9.data.data;
                    this.log(": " + _0x179c51.subTitle + " -- " + (_0x179c51.couponCondition ? _0x179c51.couponCondition / 100 : "无门槛") + "减" + _0x179c51.couponAmount / 100);
                } else {
                    this.log("领取红包失败: " + _0x2002e9?.["data"]?.["message"]);
                }
            } else {
                this.log("领取红包出错: " + _0x24b29d);
            }
        } catch (_0xaeda05) {
            $.log(_0xaeda05);
        } finally {
            return Promise.resolve();
        }
    }
    async ["getSignList"](_0x3229f8 = {}) {
        try {
            let _0x26d909 = "797010",
                _0x42f658 = "mtop.alibaba.svip.langrisser.query";
            const _0x29a32e = {
                "firstLoad": true
            };
            const _0x1a8d44 = {
                "data": _0x29a32e,
                "resId": _0x26d909
            };
            const _0x1ece69 = {
                "callSource": "biz_card_main",
                "lgrsRequestItems": [_0x1a8d44],
                "latitude": this.latitude,
                "longitude": this.longitude
            };
            let _0x1a59dc = this.get_params(_0x42f658, _0x1ece69);
            const _0x4b31ea = {
                "fn": "getSignList",
                "method": "get",
                "url": "https://mtop.ele.me/h5/" + _0x42f658 + "/1.0",
                "searchParams": _0x1a59dc,
                "cookieJar": this.cookieJar
            };
            let {
                result: _0x33d7ca
            } = await this.request(_0x4b31ea),
                _0x4e9ee5 = _0x33d7ca?.["ret"][0] || "";
            if (_0x4e9ee5.includes("SUCCESS")) {
                let _0x133a2f = _0x33d7ca.data.data[_0x26d909],
                    _0x3f35bf = _0x133a2f.data.filter(_0x3586c9 => _0x3586c9.isToday)[0],
                    _0x4acf67 = _0x3f35bf?.["signStatus"] === "HAS_SIGN";
                this.log("已连续签到" + (_0x133a2f?.["extend"]?.["continuousSignDays"] || 0) + "天，今天" + (_0x4acf67 ? "已" : "未") + "签到");
                if (!_0x4acf67) {
                    await this.signIn();
                }
            } else {
                this.log("查询签到信息出错: " + _0x4e9ee5);
            }
        } catch (_0x596001) {
            $.log(_0x596001);
        } finally {
            return Promise.resolve();
        }
    }
    async ["signIn"](_0x11bed0 = {}) {
        try {
            let _0x5dfdab = "mtop.koubei.interactioncenter.sign.component.recordsignin";
            const _0x1b674d = {
                "bizScene": "svip_sign_scene",
                "asac": _0x11bed0.asac || "2A227051WYEVFLNT5WTFAM",
                "latitude": this.latitude,
                "longitude": this.longitude
            };
            let _0x1ae9fd = this.get_params(_0x5dfdab, _0x1b674d);
            const _0x89be81 = {
                "fn": "signIn",
                "method": "get",
                "url": "https://mtop.ele.me/h5/" + _0x5dfdab + "/1.0",
                "searchParams": _0x1ae9fd,
                "cookieJar": this.cookieJar
            };
            let {
                result: _0x11b334
            } = await this.request(_0x89be81),
                _0x5bfc5e = _0x11b334?.["ret"][0] || "";
            _0x5bfc5e.includes("SUCCESS") ? this.log("签到: " + _0x11b334?.["data"]?.["data"]?.["ext"]?.["rewardValue"] + "吃货豆") : this.log("签到出错: " + _0x5bfc5e);
        } catch (_0x9bc5b3) {
            $.log(_0x9bc5b3);
        } finally {
            return Promise.resolve();
        }
    }
    async ["querytask"](_0x3d99be) {
        try {
            let _0x529c19 = "mtop.ele.biz.growth.task.core.querytask";
            const _0x25c2ca = {
                "lng": this.longitude,
                "lat": this.latitude
            };
            let _0x363ea9 = {
                "missionCollectionId": _0x3d99be.missionCollectionId,
                "missionId": _0x3d99be.missionDefId,
                "bizScene": "svip",
                "accountPlan": "HAVANA_COMMON",
                "locationInfos": JSON.stringify([JSON.stringify(_0x25c2ca)])
            },
                _0x5511c3 = this.get_params(_0x529c19, _0x363ea9);
            const _0x405f86 = {
                "fn": "querytask",
                "method": "get",
                "url": "https://mtop.ele.me/h5/" + _0x529c19 + "/1.0/",
                "searchParams": _0x5511c3,
                "cookieJar": this.cookieJar
            };
            let {
                result: _0x5c25e2
            } = await this.request(_0x405f86);
        } catch (_0x59e61f) {
            $.log(_0x59e61f);
        } finally {
            return Promise.resolve();
        }
    }
    async ["getChdTaskList"](_0x460d1a, _0x443b02 = {}) {
        let _0x39350b = [];
        try {
            let _0x46e2b9 = "224166",
                _0x5c10eb = "mtop.alibaba.svip.langrisser.query";
            const _0x58922e = {
                "resId": _0x46e2b9
            };
            const _0x40a606 = {
                "source": "mtop"
            };
            const _0xaa1c77 = {
                "callSource": "biz_card_main",
                "lgrsRequestItems": [_0x58922e],
                "extra": _0x40a606,
                "latitude": this.latitude,
                "longitude": this.longitude
            };
            const _0x1b4504 = {
                "ttid": _0x460d1a
            };
            let _0x4e8fb5 = this.get_params(_0x5c10eb, _0xaa1c77, _0x1b4504);
            const _0x458dbd = {
                "fn": "getChdTaskList",
                "method": "get",
                "url": "https://mtop.ele.me/h5/" + _0x5c10eb + "/1.0",
                "searchParams": _0x4e8fb5,
                "cookieJar": this.cookieJar
            };
            let {
                result: _0x364a52
            } = await this.request(_0x458dbd),
                _0x2e986d = _0x364a52?.["ret"][0] || "";
            _0x2e986d.includes("SUCCESS") ? _0x39350b = _0x364a52.data.data[_0x46e2b9].data : this.log("获取吃货豆任务出错: " + _0x2e986d);
        } catch (_0x582a2a) {
            $.log(_0x582a2a);
        } finally {
            return Promise.resolve(_0x39350b);
        }
    }
    async ["doTask"](_0x5f269a) {
        try {
            let _0x8daa63 = "[" + _0x5f269a.missionDefId + ":" + _0x5f269a.missionCollectionId + ":" + _0x5f269a.missionType + "]",
                _0x2f1ab0 = "223166",
                _0x4e963e = "mtop.alibaba.svip.langrisser.act";
            const _0x40c23c = {
                "callSource": "biz_code_main",
                "resId": _0x2f1ab0,
                "source": "mtop",
                "extra": {},
                "latitude": this.latitude,
                "longitude": this.longitude
            };
            _0x40c23c.extra.missionDefId = _0x5f269a.missionDefId;
            _0x40c23c.extra.missionCollectionId = _0x5f269a.missionCollectionId;
            _0x40c23c.extra.missionType = _0x5f269a.missionType;
            _0x40c23c.extra.source = "mtop";
            _0x40c23c.extra.missionXId = _0x5f269a.missionXId || "";
            let _0x287652 = this.get_params(_0x4e963e, _0x40c23c);
            const _0x3ee0ea = {
                "fn": "doTask",
                "method": "get",
                "url": "https://mtop.ele.me/h5/" + _0x4e963e + "/1.0",
                "searchParams": _0x287652,
                "cookieJar": this.cookieJar
            };
            let {
                result: _0x15f1fc
            } = await this.request(_0x3ee0ea),
                _0x37708d = _0x15f1fc?.["ret"][0] || "";
            if (_0x37708d.includes("SUCCESS")) {
                if (_0x5f269a.missionType == "SIMPLESIGNIN") {
                    if (_0x15f1fc?.["data"]?.["success"]) {
                        this.log("完成任务" + _0x8daa63 + ": " + (_0x15f1fc?.["data"]?.["extend"]?.["value"] || "空气") + (_0x20cf13[_0x15f1fc?.["data"]?.["extend"]?.["subType"]] || ""));
                        if (!(_0x5f269a.is_tkj_task && _0x5f269a.pre_task == "PAGEVIEW")) {
                            let _0x564115 = (Math.random() * _0x337d90 | 0) + _0x5a2c6d;
                            this.log("等待" + _0x564115 / 1000 + "秒...");
                            await $.wait(_0x564115);
                        }
                    } else {
                        this.log("完成任务" + _0x8daa63 + "失败[" + _0x15f1fc?.["data"]?.["msgCode"] + "]: " + _0x15f1fc?.["data"]?.["msgInfo"]);
                        if (!(_0x5f269a.is_tkj_task && _0x5f269a.pre_task == "PAGEVIEW")) {
                            let _0x5ec380 = (Math.random() * 2000 | 0) + 1000;
                            this.log("等待" + _0x5ec380 / 1000 + "秒...");
                            await $.wait(_0x5ec380);
                        }
                    }
                } else {
                    if (!_0x5f269a.is_tkj_task) {
                        if (_0x15f1fc?.["data"]?.["msgCode"] == 0) {
                            this.log("开始浏览15s任务" + _0x8daa63 + "...");
                            let _0x1e45b6 = (Math.random() * _0x197605 | 0) + _0x3af049;
                            this.log("等待" + _0x1e45b6 / 1000 + "秒...");
                            await $.wait(_0x1e45b6);
                            await this.pageview(_0x5f269a);
                        } else {
                            this.log("开始浏览15s任务" + _0x8daa63 + "失败: " + _0x15f1fc?.["data"]?.["msgInfo"]);
                            let _0xed01d8 = (Math.random() * 2000 | 0) + 1000;
                            this.log("等待" + _0xed01d8 / 1000 + "秒...");
                            await $.wait(_0xed01d8);
                        }
                    }
                }
            } else {
                this.log("完成任务" + _0x8daa63 + "出错: " + _0x37708d);
                let _0x446ab5 = (Math.random() * 2000 | 0) + 1000;
                this.log("等待" + _0x446ab5 / 1000 + "秒...");
                await $.wait(_0x446ab5);
            }
        } catch (_0x275a11) {
            $.log(_0x275a11);
        } finally {
            return Promise.resolve();
        }
    }
    async ["pageview"](_0x50f7d3) {
        try {
            let _0x4cebdd = "[" + _0x50f7d3.missionDefId + ":" + _0x50f7d3.missionCollectionId + ":" + _0x50f7d3.missionType + "]",
                _0xdaf198 = "mtop.ele.biz.growth.task.event.pageview",
                _0x5551c6 = {
                    "collectionId": _0x50f7d3.missionCollectionId,
                    "missionId": _0x50f7d3.missionDefId,
                    "actionCode": _0x50f7d3.missionType,
                    "pageFrom": _0x50f7d3.pageSpm || "a2ogi.15063444",
                    "viewTime": Number(_0x50f7d3.pageStageTime) || 15,
                    "bizScene": "svip",
                    "accountPlan": "HAVANA_COMMON",
                    "sync": true,
                    "asac": _0x50f7d3.asac || "2A21119A45TTVAEXP40N7N",
                    "ua": this.ua,
                    "umidtoken": this.umidtoken
                },
                _0x23ac08 = this.get_params(_0xdaf198, _0x5551c6);
            const _0x4e43d6 = {
                "fn": "pageview",
                "method": "get",
                "url": "https://mtop.ele.me/h5/" + _0xdaf198 + "/1.0",
                "searchParams": _0x23ac08,
                "cookieJar": this.cookieJar
            };
            let {
                result: _0x441501
            } = await this.request(_0x4e43d6),
                _0x2753a8 = _0x441501?.["ret"][0] || "";
            if (_0x2753a8.includes("SUCCESS")) {
                if (_0x50f7d3.is_tkj_task) {
                    this.log("开始进行浏览15s任务" + _0x4cebdd);
                    let _0x9e8779 = (Math.random() * _0x197605 | 0) + _0x3af049;
                    this.log("等待" + _0x9e8779 / 1000 + "秒...");
                    await $.wait(_0x9e8779);
                    _0x50f7d3.pre_task = _0x50f7d3.missionType;
                    _0x50f7d3.missionType = "SIMPLESIGNIN";
                    await this.doTask(_0x50f7d3);
                } else {
                    this.log("浏览15s任务" + _0x4cebdd + "完成");
                }
            } else {
                this.log("浏览15s任务" + _0x4cebdd + "完成出错: " + _0x2753a8);
            }
        } catch (_0x3ad4f9) {
            $.log(_0x3ad4f9);
        } finally {
            return Promise.resolve();
        }
    }
    async ["userprize"](_0x402eb5) {
        try {
            let _0x221d44 = "mtop.koubei.interaction.center.dailyatm.userprize",
                _0x37d43e = {
                    "bizScene": "daily_atm",
                    "locationInfos": JSON.stringify([JSON.stringify({
                        "lng": this.longitude,
                        "lat": this.latitude,
                        "city": "440300"
                    })]),
                    "actId": "20210322200313000125480674",
                    "accountPlan": "HAVANA_COMMON"
                },
                _0x309daa = this.get_params(_0x221d44, _0x37d43e);
            const _0x436606 = {
                "fn": "userprize",
                "method": "get",
                "url": "https://mtop.ele.me/h5/" + _0x221d44 + "/1.0",
                "searchParams": _0x309daa,
                "cookieJar": this.cookieJar
            };
            let {
                result: _0x186d45
            } = await this.request(_0x436606),
                _0x38a6eb = _0x186d45?.["ret"][0] || "";
            if (_0x38a6eb.includes("SUCCESS")) {
                if (_0x402eb5 == "receive") {
                    _0x186d45?.["data"]?.["data"]?.["isToReceive"] ? (this.log("可以瓜分" + _0x186d45?.["data"]?.["data"]?.["toReceive"]?.["amount"] + "元"), await this.receivemoney(_0x186d45.data.data.toReceive.amount)) : this.log("现在不能瓜分");
                } else {
                    _0x402eb5 == "withdraw" && (this.log("提款机余额: " + _0x186d45?.["data"]?.["data"]?.["drawAmount"] + "元"), _0x186d45?.["data"]?.["data"]?.["drawAmount"] > 0 && (await this.withdraw(_0x186d45?.["data"]?.["data"]?.["drawAmount"])));
                }
            } else {
                this.log("查询提款机出错: " + _0x38a6eb);
            }
        } catch (_0x37d77f) {
            $.log(_0x37d77f);
        } finally {
            return Promise.resolve();
        }
    }
    async ["receivemoney"](_0x46a3be) {
        try {
            let _0x2f6e4d = "mtop.koubei.interaction.center.dailyatm.receivemoney";
            const _0x5e60da = {
                "lng": this.longitude,
                "lat": this.latitude,
                "city": "440300"
            };
            let _0x465797 = {
                "bizScene": "daily_atm",
                "locationInfos": JSON.stringify([JSON.stringify(_0x5e60da)]),
                "actId": "20210322200313000125480674",
                "accountPlan": "HAVANA_COMMON",
                "amount": _0x46a3be,
                "asac": "2A21315L64SAZBMEONXFT2",
                "ua": this.ua,
                "umidtoken": this.umidtoken
            },
                _0x16eba9 = this.get_params(_0x2f6e4d, _0x465797);
            const _0x54e036 = {
                "fn": "receivemoney",
                "method": "get",
                "url": "https://mtop.ele.me/h5/" + _0x2f6e4d + "/1.0",
                "searchParams": _0x16eba9,
                "cookieJar": this.cookieJar
            };
            let {
                result: _0x9e4118
            } = await this.request(_0x54e036),
                _0x467b84 = _0x9e4118?.["ret"][0] || "";
            _0x467b84.includes("SUCCESS") ? this.log("提款机瓜分获得: " + _0x46a3be + "元") : this.log("提款机瓜分出错: " + _0x467b84);
        } catch (_0x496162) {
            $.log(_0x496162);
        } finally {
            return Promise.resolve();
        }
    }
    async ["withdraw"](_0x19d450) {
        try {
            let _0x29c526 = "mtop.koubei.interaction.center.dailyatm.withdraw",
                _0x2c8cbf = {
                    "bizScene": "daily_atm",
                    "locationInfos": JSON.stringify([JSON.stringify({
                        "lng": this.longitude,
                        "lat": this.latitude,
                        "city": "440300"
                    })]),
                    "actId": "20210322200313000125480674",
                    "accountPlan": "HAVANA_COMMON",
                    "withDrawAmount": _0x19d450,
                    "asac": "2A21315L64SAZBMEONXFT2",
                    "rightId": "20210322203950034352625786"
                },
                _0x50b00f = this.get_params(_0x29c526, _0x2c8cbf);
            const _0x392358 = {
                "fn": "withdraw",
                "method": "get",
                "url": "https://mtop.ele.me/h5/" + _0x29c526 + "/1.0",
                "searchParams": _0x50b00f,
                "cookieJar": this.cookieJar
            };
            let {
                result: _0x5d8bf9
            } = await this.request(_0x392358),
                _0x41665c = _0x5d8bf9?.["ret"][0] || "";
            _0x41665c.includes("SUCCESS") ? this.log("提款机提现" + _0x19d450 + "元成功") : this.log("提款机提现出错: " + _0x41665c);
        } catch (_0x251a1d) {
            $.log(_0x251a1d);
        } finally {
            return Promise.resolve();
        }
    }
    async ["dailyAtmTaskinfo"]() {
        try {
            let _0x116bc0 = "mtop.koubei.interaction.center.dailyatm.taskinfo";
            const _0xcdb0ff = {
                "lng": this.longitude,
                "lat": this.latitude,
                "city": "440300"
            };
            let _0x5ad05f = {
                "bizScene": "daily_atm",
                "locationInfos": JSON.stringify([JSON.stringify(_0xcdb0ff)]),
                "actId": "20210322200313000125480674",
                "accountPlan": "HAVANA_COMMON"
            },
                _0x2ca427 = this.get_params(_0x116bc0, _0x5ad05f);
            const _0x54ea15 = {
                "fn": "dailyAtmTaskinfo",
                "method": "get",
                "url": "https://mtop.ele.me/h5/" + _0x116bc0 + "/1.0",
                "searchParams": _0x2ca427,
                "cookieJar": this.cookieJar
            };
            let {
                result: _0xb54b4e
            } = await this.request(_0x54ea15),
                _0x53753e = _0xb54b4e?.["ret"][0] || "";
            if (_0x53753e.includes("SUCCESS")) {
                let _0x3638c0 = _0xb54b4e.data.data;
                this.cardNums = _0x3638c0.cardNums;
                this.multiple = _0x3638c0.multiple;
            } else {
                this.log("查询现金提款机出错: " + _0x53753e);
            }
        } catch (_0xce9b72) {
            $.log(_0xce9b72);
        } finally {
            return Promise.resolve();
        }
    }
    async ["divide_chd_interact"]() {
        try {
            let _0xdeb5fd = "507426",
                _0x22190a = "mtop.alibaba.svip.langrisser.query";
            const _0x215320 = {
                "channel": "",
                "foodiePeaBizType": "",
                "peasId": ""
            };
            const _0x3473d2 = {
                "data": _0x215320,
                "resId": _0xdeb5fd
            };
            let _0x290bfe = {
                "callSource": "biz_hui_yuan",
                "lgrsRequestItems": JSON.stringify([_0x3473d2]),
                "latitude": this.latitude,
                "longitude": this.longitude
            },
                _0x5d3fc8 = this.get_params(_0x22190a, _0x290bfe);
            const _0x3ff5f7 = {
                "fn": "divide_chd_interact",
                "method": "get",
                "url": "https://mtop.ele.me/h5/" + _0x22190a + "/1.0",
                "searchParams": _0x5d3fc8,
                "cookieJar": this.cookieJar
            };
            let {
                result: _0x47284d
            } = await this.request(_0x3ff5f7),
                _0x4e5b72 = _0x47284d?.["ret"][0] || "";
            if (_0x4e5b72.includes("SUCCESS")) {
                let _0x3891f3 = _0x47284d?.["data"]?.["data"][_0xdeb5fd]?.["data"] || [];
                _0x3891f3.length > 0 ? await this.collect_order_chd() : this.log("没有可领取的下单吃货豆奖励");
            } else {
                this.log("查询下单吃货豆奖励出错: " + _0x4e5b72);
            }
        } catch (_0x58232) {
            $.log(_0x58232);
        } finally {
            return Promise.resolve();
        }
    }
    async ["collect_order_chd"]() {
        try {
            let _0x570084 = "528646",
                _0x2d6609 = "mtop.alibaba.svip.langrisser.query";
            const _0x2e8923 = {
                "resId": _0x570084,
                "latitude": this.latitude,
                "longitude": this.longitude
            };
            let _0x90b767 = this.get_params(_0x2d6609, _0x2e8923);
            const _0x14157a = {
                "fn": "collect_order_chd",
                "method": "get",
                "url": "https://mtop.ele.me/h5/" + _0x2d6609 + "/1.0",
                "searchParams": _0x90b767,
                "cookieJar": this.cookieJar
            };
            let {
                result: _0x1b2478
            } = await this.request(_0x14157a),
                _0x97bed0 = _0x1b2478?.["ret"][0] || "";
            if (_0x97bed0.includes("SUCCESS")) {
                let _0x1471ac = _0x1b2478?.["data"]?.["extend"]?.["drawSuccessPeas"] || "";
                this.log("领取到下单奖励: " + (_0x1471ac ? _0x1471ac + "吃货豆" : "空气"));
            } else {
                this.log("领取下单吃货豆奖励出错: " + _0x97bed0);
            }
        } catch (_0x3f9eb9) {
            $.log(_0x3f9eb9);
        } finally {
            return Promise.resolve();
        }
    }
    ["add_to_task_list"](_0x40c92e, _0x1d7ea2) {
        let _0x5794f9 = _0x1d7ea2.filter(_0x3de7be => _0x3de7be.missionDefId == _0x40c92e.missionDefId && _0x3de7be.missionCollectionId == _0x40c92e.missionCollectionId && _0x3de7be.missionType == _0x40c92e.missionType);
        _0x5794f9.length == 0 && _0x1d7ea2.push(_0x40c92e);
    }
    async ["get_chd_task_list"](_0x1d42d7, _0x5117d6) {
        let _0x2c58c6 = await this.getChdTaskList(_0x1d42d7);
        for (let _0x3fbbb2 of _0x2c58c6) {
            this.add_to_task_list(_0x3fbbb2, this.task_list);
            let _0x4480cf = Object.assign({}, _0x3fbbb2);
            _0x4480cf.rewardStatus = "TODO";
            this.add_to_task_list(_0x4480cf, _0x5117d6);
        }
    }
    async ["userChdGetTask"]() {
        let _0x46058f = _0x8b6399;
        for (let _0x2aa6b7 of _0x38e56d) {
            await this.get_chd_task_list(_0x2aa6b7, _0x46058f);
        }
        let _0x21b6e5 = [].concat(_0x166234);
        for (let _0x5423d8 of _0x21b6e5.sort(function (_0x2fdeea, _0x2d97fd) {
            return Math.random() - 0.5;
        })) {
            const _0x4566a5 = {
                "missionDefId": _0x5423d8.missionDefId,
                "missionCollectionId": _0x5423d8.missionCollectionId,
                "missionType": "SIMPLESIGNIN",
                "rewardStatus": "TODO"
            };
            this.add_to_task_list(_0x4566a5, _0x46058f);
        }
        let _0x4c93ce = [].concat(_0x2899fb);
        for (let _0x1c35dd of _0x4c93ce.sort(function (_0x24b995, _0x35b3c2) {
            return Math.random() - 0.5;
        })) {
            const _0x1eb38c = {
                "missionDefId": _0x1c35dd.missionDefId,
                "missionCollectionId": _0x1c35dd.missionCollectionId,
                "missionType": "PAGEVIEW",
                "pageSpm": _0x1c35dd.pageFrom || "a2ogi.15063444",
                "rewardStatus": "TODO"
            };
            this.add_to_task_list(_0x1eb38c, _0x46058f);
        }
    }
    async ["userChdDoTask"]() {
        for (let _0x3ec9ac of _0x8b6399.sort(function () {
            return Math.random() - 0.5;
        })) {
            let _0x10b7fd = this.task_list.filter(_0x3c589e => _0x3c589e.missionDefId == _0x3ec9ac.missionDefId && _0x3c589e.missionCollectionId == _0x3ec9ac.missionCollectionId && _0x3c589e.missionType == _0x3ec9ac.missionType);
            _0x10b7fd.length > 0 ? _0x10b7fd[0].rewardStatus == "TODO" && (await this.doTask(_0x10b7fd[0])) : await this.doTask(_0x3ec9ac);
        }
    }
    async ["userTkjTask"]() {
        let _0x3155b9 = [].concat(_0x522b1b);
        for (let _0x297950 of _0x3155b9.sort(function (_0x4fefa8, _0x53bdcb) {
            return Math.random() - 0.5;
        })) {
            const _0x5ad331 = {
                "missionDefId": _0x297950.missionDefId,
                "missionCollectionId": _0x297950.missionCollectionId,
                "missionType": "SIMPLESIGNIN",
                "is_tkj_task": true
            };
            await this.doTask(_0x5ad331);
        }
        let _0x332977 = [].concat(_0x2d9242);
        for (let _0x13633c of _0x332977.sort(function (_0x1ccab0, _0x2eadb1) {
            return Math.random() - 0.5;
        })) {
            const _0x2423a1 = {
                "missionDefId": _0x13633c.missionDefId,
                "missionCollectionId": _0x13633c.missionCollectionId,
                "missionType": "PAGEVIEW",
                "pageSpm": _0x13633c.pageFrom || "a2ogi.15063444",
                "is_tkj_task": true
            };
            await this.pageview(_0x2423a1);
        }
    }
    async ["userTkjWithdrawTask"]() {
        await this.userprize("receive");
        await this.userprize("withdraw");
    }
    async ["queryCashbackTasks"]() {
        try {
            const _0x880783 = {
                "fn": "queryCashbackTasks",
                "method": "get",
                "url": "https://httpizza.ele.me/ele-fin-promotion-activity/bonus/queryTasks",
                "searchParams": {},
                "cookieJar": this.cookieJar,
                "headers": this.cashback_header
            };
            _0x880783.searchParams.welfareCode = "cash_back-1";
            let {
                result: _0x5eca9f
            } = await this.request(_0x880783);
            if (_0x5eca9f.code == "000") {
                let _0x5d2672 = true;
                for (let _0xdcbf22 of _0x5eca9f.data.filter(_0x22817c => _0x22817c.taskType == "view")) {
                    let _0x4e622e = _0xdcbf22.status == "issue_success";
                    !_0x4e622e && (_0x5d2672 = false, await this.receiveAndFinishTask(_0xdcbf22));
                }
                _0x5d2672 && this.log("所有笔笔返任务已完成");
            } else {
                let _0x786223 = _0x5eca9f.msg || _0x5eca9f.message;
                this.log("查询笔笔返任务列表失败: " + _0x786223);
            }
        } catch (_0x1d9a5a) {
            $.log(_0x1d9a5a);
        } finally {
            return Promise.resolve();
        }
    }
    async ["receiveAndFinishTask"](_0x1afbef) {
        try {
            let _0x48be8b = {
                "fn": "receiveAndFinishTask",
                "method": "post",
                "url": "https://httpizza.ele.me/ele-fin-promotion-activity/bonus/receiveAndFinishTask",
                "cookieJar": this.cookieJar,
                "headers": this.cashback_header,
                "json": {
                    "taskId": _0x1afbef.taskId.toString(),
                    "scene": "saving-pot",
                    "welfareCode": "cash_back-1"
                }
            },
                {
                    result: _0x27c155
                } = await this.request(_0x48be8b);
            if (_0x27c155.code == "000") {
                this.log("完成任务[" + _0x1afbef.taskName + "]获得" + _0x1afbef.bonusNum / 100 + "元");
            } else {
                let _0x101c74 = _0x27c155.msg || _0x27c155.message;
                this.log("完成任务[" + _0x1afbef.taskName + "]失败: " + _0x101c74);
            }
        } catch (_0xc3d2d2) {
            $.log(_0xc3d2d2);
        } finally {
            return Promise.resolve();
        }
    }
    async ["queryCashbackBalance"]() {
        try {
            const _0x233f3b = {
                "fn": "queryCashbackBalance",
                "method": "get",
                "url": "https://httpizza.ele.me/ele-fin-promotion-activity/bonus/queryBalance",
                "searchParams": {},
                "cookieJar": this.cookieJar,
                "headers": this.cashback_header
            };
            _0x233f3b.searchParams.bizCode = "cashback";
            let {
                result: _0x6105b7
            } = await this.request(_0x233f3b);
            if (_0x6105b7.code == "0000") {
                let _0x34851c = _0x6105b7.result;
                this.log("笔笔返余额: " + _0x6105b7.result / 100 + "元");
                if (_0x34851c > 0) {
                    await this.cashbackWithdraw(_0x34851c);
                }
            } else {
                let _0x4983af = _0x6105b7.msg || _0x6105b7.message;
                this.log("查询笔笔返余额失败: " + _0x4983af);
            }
        } catch (_0x468f4d) {
            $.log(_0x468f4d);
        } finally {
            return Promise.resolve();
        }
    }
    async ["cashbackWithdraw"](_0xd08419) {
        try {
            const _0xacbd26 = {
                "amount": _0xd08419,
                "bizCode": "cashback",
                "subSceneCode": "cash_back_wd",
                "remark": "笔笔返零钱奖励提现"
            };
            const _0x13fbfa = {
                "fn": "cashbackWithdraw",
                "method": "post",
                "url": "https://httpizza.ele.me/ele-fin-promotion-activity/bonus/accountWithdrawal",
                "cookieJar": this.cookieJar,
                "headers": this.cashback_header,
                "json": _0xacbd26
            };
            let {
                result: _0x56b900
            } = await this.request(_0x13fbfa);
            if (_0x56b900.code == "0000") {
                this.log("笔笔返提现" + _0x56b900.result.amount / 100 + "元到钱包");
            } else {
                let _0x58ad55 = _0x56b900.msg || _0x56b900.message;
                this.log("笔笔返提现" + this.cashbackBalance / 100 + "元失败: " + _0x58ad55);
            }
        } catch (_0x2a5bc1) {
            $.log(_0x2a5bc1);
        } finally {
            return Promise.resolve();
        }
    }
    async ["queryWalletBalance"]() {
        try {
            const _0x1bbdfa = {
                "fn": "queryWalletBalance",
                "method": "get",
                "url": "https://wallet.ele.me/api/storedcard/queryBalance",
                "cookieJar": this.cookieJar
            };
            let {
                result: _0x333bc3
            } = await this.request(_0x1bbdfa);
            _0x333bc3.code == "000" ? this.walletMoney = _0x333bc3.data.otherAccount.availableAmount : this.log("查询钱包余额失败");
        } catch (_0x2a75a0) {
            $.log(_0x2a75a0);
        } finally {
            return Promise.resolve();
        }
    }
    async ["get_x5check_ele"]() {
        try {
            const _0x511cc0 = {
                "fn": "get_x5check_ele",
                "method": "get",
                "url": "https://restapi.ele.me/member/v2/users/1613668433/location",
                "searchParams": {},
                "cookieJar": this.cookieJar
            };
            _0x511cc0.searchParams["_bx-m"] = "0.0.4";
            _0x511cc0.searchParams.longitude = this.longitude;
            _0x511cc0.searchParams.latitude = this.latitude;
            await this.request(_0x511cc0);
        } catch (_0x26e267) {
            $.log(_0x26e267);
        } finally {
            return Promise.resolve();
        }
    }
    async ["grabCouponReq"]() {
        try {
            const _0xb8a58b = {
                "costFoodiePea": 1000
            };
            const _0x5df258 = {
                "tagCode": "43002",
                "supplyInst": "43002|178006",
                "extra": _0xb8a58b
            };
            let _0x596c53 = {
                "fn": "grabCouponReq",
                "method": "get",
                "url": "https://h5.ele.me/restapi/biz.svip_scene/svip/engine/xSupply",
                "cookieJar": this.cookieJar,
                "searchParams": {
                    "params[]": JSON.stringify(_0x5df258),
                    "bizCode": "biz_code_main",
                    "longitude": this.longitude,
                    "latitude": this.latitude
                }
            },
                {
                    result: _0x324c9c
                } = await this.request(_0x596c53);
            if (_0x324c9c.code == 200) {
                for (let _0x43ff1f of _0x324c9c?.["data"] || []) {
                    if (_0x43ff1f.xstatus == 1) {
                        if (_0x43ff1f.attribute.msgCode == 0) {
                            const _0x17b2a1 = {
                                "time": true,
                                "notify": true
                            };
                            this.log("抢到了无门槛减10券", _0x17b2a1);
                        } else {
                            const _0xc16952 = {
                                "time": true
                            };
                            this.log("抢券失败: " + _0x43ff1f.xmessage, _0xc16952);
                        }
                    } else {
                        const _0x4d23f7 = {
                            "time": true
                        };
                        this.log("抢券失败: " + _0x43ff1f.xmessage, _0x4d23f7);
                    }
                }
            } else {
                let _0x7bdad5 = _0x324c9c.message ? _0x324c9c.message : _0x324c9c.ret ? _0x324c9c.ret.join(",") : "";
                const _0x207432 = {
                    "time": true
                };
                this.log("抢券失败: " + _0x7bdad5, _0x207432);
            }
        } catch (_0x489eed) {
            $.log(_0x489eed);
        } finally {
            return Promise.resolve();
        }
    }
    async ["final_check"]() {
        await this.foodieRecords();
        await this.dailyAtmTaskinfo();
        await this.queryWalletBalance();
        if (!this.pea && !this.todayBean && !this.monthAccountInfo) {
            return Promise.resolve();
        }
        let _0x38f795 = "============= 账号[" + this.index + "] =============\n";
        if (this.name) {
            _0x38f795 += "账号：" + this.name + "\n";
        }
        if (this.expireTime) {
            _0x38f795 += "CK过期时间: " + this.expireTime + "\n";
        }
        if (this.walletMoney) {
            _0x38f795 += "钱包余额：" + this.walletMoney / 100 + "元\n";
        }
        if (this.cardNums !== undefined) {
            _0x38f795 += "提款卡：" + (this.cardNums || 0) + "张，明天可以瓜分" + (this.multiple || 0) + "倍\n";
        }
        if (this.pea) {
            _0x38f795 += "吃货豆：" + this.pea + "\n";
        }
        if (this.todayBean) {
            _0x38f795 += "今日吃货豆收入：" + this.todayBean + "吃货豆\n";
        }
        if (this.monthAccountInfo) {
            _0x38f795 += "月收入：\n";
            for (let _0x1acd9e in this.monthAccountInfo) {
                let _0x739c9a = this.monthAccountInfo[_0x1acd9e];
                _0x38f795 += "-- " + _0x1acd9e + "，收入" + _0x739c9a.plusCount + "豆" + (_0x739c9a.useCount ? "，支出" + _0x739c9a.useCount + "豆" : "") + (_0x739c9a.expireCount ? "，月底将过期" + _0x739c9a.expireCount + "豆" : "") + "\n";
            }
        }
        $.log(_0x38f795, {"notify": true});
    }
}
!(async () => {
    $.log("最大并发数: " + MAX_THREAD);
    $.log("抢券时间: " + _0x5494c5);
    $.log("");
    if (!(await _0x52f4a5())) {
        return;
    }
    await _0xf6d27b();
    $.read_env(_0x4aa47f,ckNames,envSplitor);
    $.log("\n-------------- 刷新CK --------------");
    await $.threadTask("refresh_ck", MAX_THREAD);
    let _0x198dd2 = $.userList.filter(_0x2c7c30 => _0x2c7c30.valid);
    if (_0x198dd2.length == 0) {
        return;
    }
    $.log("\n-------------- 查询账号 --------------");
    await $.threadTask("init_check", MAX_THREAD);
    $.log("\n-------------- 领红包 --------------");
    await $.threadTask("supportor", MAX_THREAD);
    $.log("\n-------------- 抢券 --------------");
    await _0x57daaa();
    $.log("\n-------------- 领取下单奖励 --------------");
    await $.threadTask("divide_chd_interact", MAX_THREAD);
    $.log("\n-------------- 吃货豆签到 --------------");
    await $.threadTask("getSignList", MAX_THREAD);
    $.log("\n-------------- 提款机瓜分 --------------");
    await $.threadTask("userTkjWithdrawTask", MAX_THREAD);
    $.log("\n-------------- 提款机任务 --------------");
    await $.threadTask("userTkjTask", MAX_THREAD);
    $.log("\n-------------- 笔笔返任务 --------------");
    await $.threadTask("queryCashbackTasks", MAX_THREAD);
    $.log("\n-------------- 笔笔返提现 --------------");
    await $.threadTask("queryCashbackBalance", MAX_THREAD);
    $.log("\n-------------- 收入详情 --------------");
    await $.threadTask("final_check", 1);
})().catch(_0x152edb => $.log(_0x152edb)).finally(() => $.exitNow());

async function _0x57daaa() {
    let _0x567aa3 = $.userList.filter(_0x36e2d4 => _0x36e2d4.valid && (_0x36e2d4.grabCoupon || _0x36e2d4.grabCouponFlagEnv));
    if (_0x567aa3.length) {
        for (let _0x3da5e4 of _0x567aa3) {
            _0x3da5e4.pea < 1000 ? _0x3da5e4.log("吃货豆不足1000，无法抢券") : _0x3da5e4.log("准备抢券");
        }
        let _0x56e121 = _0x567aa3.filter(_0x1fa70b => _0x1fa70b.pea >= 1000);
        if (_0x56e121.length) {
            $.log("抢券时间配置为: " + _0x5494c5);
            let _0x3abc96 = new Date(),
                _0x3821df = _0x3abc96.getFullYear(),
                _0x24d8e9 = _0x3abc96.getMonth(),
                _0x5b4fa7 = _0x3abc96.getDate(),
                _0x2b29fc = _0x5494c5.split(":"),
                _0x2ec04c = parseInt(_0x2b29fc[0]),
                _0x260b81 = parseInt(_0x2b29fc[1]),
                _0x14f1a5 = parseInt(_0x2b29fc[2] || 0),
                _0x3d5377 = parseInt(_0x2b29fc[3] || 0);
            if (!(_0x2ec04c >= 0 && _0x2ec04c < 24 && _0x260b81 >= 0 && _0x260b81 < 60 && _0x14f1a5 >= 0 && _0x14f1a5 < 60 && _0x3d5377 >= 0 && _0x3d5377 < 1000)) {
                $.log("设置的抢券时间格式数字有误: " + _0x5494c5 + "，将改用默认的抢券时间：" + _0x54d102);
                _0x2b29fc = _0x54d102.split(":");
                _0x2ec04c = parseInt(_0x2b29fc[0]);
                _0x260b81 = parseInt(_0x2b29fc[1]);
                _0x14f1a5 = parseInt(_0x2b29fc[2]);
                _0x3d5377 = parseInt(_0x2b29fc[3]);
            }
            let _0x57c5e4 = new Date(_0x3821df, _0x24d8e9, _0x5b4fa7, _0x2ec04c, _0x260b81, _0x14f1a5, _0x3d5377).getTime(),
                _0x2a5975 = new Date(_0x3821df, _0x24d8e9, _0x5b4fa7, _0x27b73d[0], _0x27b73d[1], _0x27b73d[2], _0x27b73d[3]).getTime(),
                _0x499d01 = Date.now(),
                _0x21da22 = _0x57c5e4 - _0x499d01;
            if (_0x21da22 <= 0) {
                $.log("已到抢券时间，不等待");
            } else {
                if (_0x21da22 > _0x57fdea * 60 * 1000) {
                    $.log("离抢券时间大于" + _0x57fdea + "分钟，不等待");
                } else {
                    $.log("离抢券时间还有" + Math.ceil(_0x21da22 / 1000) + "秒，开始等待...");
                    while (_0x499d01 < _0x57c5e4) {
                        _0x21da22 = _0x57c5e4 - _0x499d01;
                        let _0x335d0e = Math.min(_0x21da22, _0x509129);
                        await $.wait(_0x335d0e);
                        _0x499d01 = Date.now();
                    }
                }
            }
            $.log("\n现在时间[" + $.time("hh:mm:ss.S") + "]，开始抢券");
            taskall = [];
            for (let _0x5bc998 = 0; _0x5bc998 < _0x590d6b; _0x5bc998++) {
                for (let _0x4d8b18 of _0x56e121) {
                    taskall.push(_0x4d8b18.grabCouponReq());
                }
                _0x499d01 = Date.now();
                if (_0x499d01 >= _0x2a5975) {
                    break;
                } else {
                    await $.wait(_0x486bfd);
                }
            }
            await Promise.all(taskall);
        } else {
            $.log("没有可以抢券的账号");
        }
    } else {
        $.log("没有配置要抢券的账号\n需要抢券的账号请在对应CK后面加上 grabCoupon=1;\n或在变量elmGrabCoupon里面对应账号位置填上1(&隔开)");
    }
}
async function _0x52f4a5() {
    let _0x70eb05 = false;
    try {
        const _0x3fcbed = {
            "fn": "auth",
            "method": "get",
            "url": _0x320bb6
        };
        let {
            statusCode: _0x1cf687,
            result: _0x50223c
        } = await _0x3793b6.request(_0x3fcbed);
        if (_0x1cf687 != 200) {
            return Promise.resolve();
        }
        if (_0x50223c?.["code"] == 0) {
            _0x50223c = JSON.parse(_0x50223c.data.file.data);
            /*if (_0x50223c?.["commonNotify"] && _0x50223c.commonNotify.length > 0) {
                const _0x4896a9 = {
                    "notify": true
                };
                $.log(_0x50223c.commonNotify.join("\n") + "\n", _0x4896a9);
            }
            _0x50223c?.["commonMsg"] && _0x50223c.commonMsg.length > 0 && $.log(_0x50223c.commonMsg.join("\n") + "\n");*/
            if (_0x50223c[_0xd66760]) {
                let _0x24152e = _0x50223c[_0xd66760];
                _0x24152e.status == 0 ? _0xd2b9 >= _0x24152e.version ? (_0x70eb05 = true/*, $.log(_0x24152e.msg[_0x24152e.status])*/, $.log(_0x24152e.updateMsg), $.log("现在运行的脚本版本是：" + _0xd2b9 + "，最新脚本版本：" + _0x24152e.latestVersion)) : $.log(_0x24152e.versionMsg) : $.log(_0x24152e.msg[_0x24152e.status]);
            } else {
                $.log(_0x50223c.errorMsg);
            }
        }
    } catch (_0x1191df) {
        $.log(_0x1191df);
    } finally {
        return Promise.resolve(_0x70eb05);
    }
}
async function _0xf6d27b() {
    let _0x1cf1ee = false;
    try {
        const _0x4e9ce8 = {
            "fn": "auth",
            "method": "get",
            "url": _0x5b4fd9
        };
        let {
            statusCode: _0xa741d2,
            result: _0x2b52d2
        } = await _0x3793b6.request(_0x4e9ce8);
        if (_0xa741d2 != 200) {
            return Promise.resolve();
        }
        if (_0x2b52d2?.["code"] == 0) {
            _0x2b52d2 = JSON.parse(_0x2b52d2.data.file.data);
            _0x2c57c7 = _0x2b52d2?.["ownerId"] || _0x2c57c7;
            _0x2b1d05 = _0x2b52d2?.["share_app"] || _0x2b1d05;
            for (let _0xe4af4d of _0x2b52d2.chdTask.simple) {
                !_0x166234.filter(_0x91ff14 => _0x91ff14.missionDefId == _0xe4af4d.missionDefId && _0x91ff14.missionCollectionId == _0xe4af4d.missionCollectionId).length && _0x166234.push(_0xe4af4d);
            }
            for (let _0x1dcc5f of _0x2b52d2.chdTask.pageview) {
                !_0x2899fb.filter(_0x103fc7 => _0x103fc7.missionDefId == _0x1dcc5f.missionDefId && _0x103fc7.missionCollectionId == _0x1dcc5f.missionCollectionId).length && _0x2899fb.push(_0x1dcc5f);
            }
            for (let _0x135687 of _0x2b52d2.tkjTask.simple) {
                !_0x522b1b.filter(_0xecdbcb => _0xecdbcb.missionDefId == _0x135687.missionDefId && _0xecdbcb.missionCollectionId == _0x135687.missionCollectionId).length && _0x522b1b.push(_0x135687);
            }
            for (let _0xb792a7 of _0x2b52d2.tkjTask.pageview) {
                !_0x2d9242.filter(_0x2e3784 => _0x2e3784.missionDefId == _0xb792a7.missionDefId && _0x2e3784.missionCollectionId == _0xb792a7.missionCollectionId).length && _0x2d9242.push(_0xb792a7);
            }
        }
    } catch (_0x489159) {
        $.log(_0x489159);
    } finally {
        return Promise.resolve(_0x1cf1ee);
    }
}
function _0x4c8fc0(_0x49a14f) {
    function _0x48cb47(_0x5e205d, _0x3d77a9) {
        return _0x5e205d << _0x3d77a9 | _0x5e205d >>> 32 - _0x3d77a9;
    }
    function _0x3aaac3(_0x195d1c, _0x324d0c) {
        var _0x29dad1, _0x44d73f, _0x510d53, _0x43fd12, _0x56fd7d;
        _0x510d53 = 2147483648 & _0x195d1c;
        _0x43fd12 = 2147483648 & _0x324d0c;
        _0x29dad1 = 1073741824 & _0x195d1c;
        _0x44d73f = 1073741824 & _0x324d0c;
        _0x56fd7d = (1073741823 & _0x195d1c) + (1073741823 & _0x324d0c);
        return _0x29dad1 & _0x44d73f ? 2147483648 ^ _0x56fd7d ^ _0x510d53 ^ _0x43fd12 : _0x29dad1 | _0x44d73f ? 1073741824 & _0x56fd7d ? 3221225472 ^ _0x56fd7d ^ _0x510d53 ^ _0x43fd12 : 1073741824 ^ _0x56fd7d ^ _0x510d53 ^ _0x43fd12 : _0x56fd7d ^ _0x510d53 ^ _0x43fd12;
    }
    function _0x4da329(_0x2538a3, _0x50be9b, _0x2cdfd9) {
        return _0x2538a3 & _0x50be9b | ~_0x2538a3 & _0x2cdfd9;
    }
    function _0x3ebb81(_0x331363, _0x4bd5d4, _0x24dc6a) {
        return _0x331363 & _0x24dc6a | _0x4bd5d4 & ~_0x24dc6a;
    }
    function _0x476f34(_0x1036bf, _0x1d3de2, _0x44b19b) {
        return _0x1036bf ^ _0x1d3de2 ^ _0x44b19b;
    }
    function _0x41d6d2(_0x2be3fe, _0x3b6e21, _0x9b4f46) {
        return _0x3b6e21 ^ (_0x2be3fe | ~_0x9b4f46);
    }
    function _0x4f9b0f(_0x5b5071, _0x47e6f4, _0x31c74f, _0xfa57ef, _0x1c6592, _0x190cf9, _0x23df68) {
        _0x5b5071 = _0x3aaac3(_0x5b5071, _0x3aaac3(_0x3aaac3(_0x4da329(_0x47e6f4, _0x31c74f, _0xfa57ef), _0x1c6592), _0x23df68));
        return _0x3aaac3(_0x48cb47(_0x5b5071, _0x190cf9), _0x47e6f4);
    }
    function _0x1c83ae(_0x416500, _0x117aa2, _0x1962d5, _0x52b4c6, _0x551d8e, _0x12a35b, _0x50efd7) {
        _0x416500 = _0x3aaac3(_0x416500, _0x3aaac3(_0x3aaac3(_0x3ebb81(_0x117aa2, _0x1962d5, _0x52b4c6), _0x551d8e), _0x50efd7));
        return _0x3aaac3(_0x48cb47(_0x416500, _0x12a35b), _0x117aa2);
    }
    function _0x12f589(_0x32f784, _0x2a232e, _0x267cce, _0x586dc2, _0x3a2fd7, _0x52b198, _0x37e790) {
        _0x32f784 = _0x3aaac3(_0x32f784, _0x3aaac3(_0x3aaac3(_0x476f34(_0x2a232e, _0x267cce, _0x586dc2), _0x3a2fd7), _0x37e790));
        return _0x3aaac3(_0x48cb47(_0x32f784, _0x52b198), _0x2a232e);
    }
    function _0x4de20d(_0x1e2923, _0x45fb14, _0x58237e, _0xa1b914, _0xa595e4, _0x22c45d, _0x1e318a) {
        _0x1e2923 = _0x3aaac3(_0x1e2923, _0x3aaac3(_0x3aaac3(_0x41d6d2(_0x45fb14, _0x58237e, _0xa1b914), _0xa595e4), _0x1e318a));
        return _0x3aaac3(_0x48cb47(_0x1e2923, _0x22c45d), _0x45fb14);
    }
    function _0x50be3e(_0x4d6d85) {
        for (var _0x19bd7f, _0x1b3cba = _0x4d6d85.length, _0x3f3557 = _0x1b3cba + 8, _0x165261 = (_0x3f3557 - _0x3f3557 % 64) / 64, _0x47049e = 16 * (_0x165261 + 1), _0x4659b9 = new Array(_0x47049e - 1), _0x361dc5 = 0, _0x2942d2 = 0; _0x1b3cba > _0x2942d2;) {
            _0x19bd7f = (_0x2942d2 - _0x2942d2 % 4) / 4;
            _0x361dc5 = _0x2942d2 % 4 * 8;
            _0x4659b9[_0x19bd7f] = _0x4659b9[_0x19bd7f] | _0x4d6d85.charCodeAt(_0x2942d2) << _0x361dc5;
            _0x2942d2++;
        }
        _0x19bd7f = (_0x2942d2 - _0x2942d2 % 4) / 4;
        _0x361dc5 = _0x2942d2 % 4 * 8;
        _0x4659b9[_0x19bd7f] = _0x4659b9[_0x19bd7f] | 128 << _0x361dc5;
        _0x4659b9[_0x47049e - 2] = _0x1b3cba << 3;
        _0x4659b9[_0x47049e - 1] = _0x1b3cba >>> 29;
        return _0x4659b9;
    }
    function _0x1e7831(_0x2e9729) {
        var _0x1bc55a,
            _0x48aff3,
            _0x406801 = "",
            _0x5ec2f5 = "";
        for (_0x48aff3 = 0; 3 >= _0x48aff3; _0x48aff3++) {
            _0x1bc55a = _0x2e9729 >>> 8 * _0x48aff3 & 255;
            _0x5ec2f5 = "0" + _0x1bc55a.toString(16);
            _0x406801 += _0x5ec2f5.substr(_0x5ec2f5.length - 2, 2);
        }
        return _0x406801;
    }
    function _0x13f4c3(_0x160213) {
        _0x160213 = _0x160213.replace(/\r\n/g, "\n");
        for (var _0x5279d0 = "", _0x3198c1 = 0; _0x3198c1 < _0x160213.length; _0x3198c1++) {
            var _0x6d84a5 = _0x160213.charCodeAt(_0x3198c1);
            128 > _0x6d84a5 ? _0x5279d0 += String.fromCharCode(_0x6d84a5) : _0x6d84a5 > 127 && 2048 > _0x6d84a5 ? (_0x5279d0 += String.fromCharCode(_0x6d84a5 >> 6 | 192), _0x5279d0 += String.fromCharCode(63 & _0x6d84a5 | 128)) : (_0x5279d0 += String.fromCharCode(_0x6d84a5 >> 12 | 224), _0x5279d0 += String.fromCharCode(_0x6d84a5 >> 6 & 63 | 128), _0x5279d0 += String.fromCharCode(63 & _0x6d84a5 | 128));
        }
        return _0x5279d0;
    }
    var _0x41cd88,
        _0x542a97,
        _0x53d8dd,
        _0x1443b7,
        _0x212587,
        _0x1cb9de,
        _0x2de10f,
        _0x22a1c5,
        _0x1375c8,
        _0x5c2b2c = [],
        _0x4a1f9b = 7,
        _0x4610ff = 12,
        _0x4eb9c4 = 17,
        _0x472c3b = 22,
        _0x29769b = 5,
        _0x56f055 = 9,
        _0x56df0c = 14,
        _0x487607 = 20,
        _0x502ea3 = 4,
        _0x442c58 = 11,
        _0x14dec2 = 16,
        _0x482c5e = 23,
        _0x1379fe = 6,
        _0x2efb56 = 10,
        _0x178652 = 15,
        _0x346e31 = 21;
    for (_0x49a14f = _0x13f4c3(_0x49a14f), _0x5c2b2c = _0x50be3e(_0x49a14f), _0x1cb9de = 1732584193, _0x2de10f = 4023233417, _0x22a1c5 = 2562383102, _0x1375c8 = 271733878, _0x41cd88 = 0; _0x41cd88 < _0x5c2b2c.length; _0x41cd88 += 16) {
        _0x542a97 = _0x1cb9de;
        _0x53d8dd = _0x2de10f;
        _0x1443b7 = _0x22a1c5;
        _0x212587 = _0x1375c8;
        _0x1cb9de = _0x4f9b0f(_0x1cb9de, _0x2de10f, _0x22a1c5, _0x1375c8, _0x5c2b2c[_0x41cd88 + 0], _0x4a1f9b, 3614090360);
        _0x1375c8 = _0x4f9b0f(_0x1375c8, _0x1cb9de, _0x2de10f, _0x22a1c5, _0x5c2b2c[_0x41cd88 + 1], _0x4610ff, 3905402710);
        _0x22a1c5 = _0x4f9b0f(_0x22a1c5, _0x1375c8, _0x1cb9de, _0x2de10f, _0x5c2b2c[_0x41cd88 + 2], _0x4eb9c4, 606105819);
        _0x2de10f = _0x4f9b0f(_0x2de10f, _0x22a1c5, _0x1375c8, _0x1cb9de, _0x5c2b2c[_0x41cd88 + 3], _0x472c3b, 3250441966);
        _0x1cb9de = _0x4f9b0f(_0x1cb9de, _0x2de10f, _0x22a1c5, _0x1375c8, _0x5c2b2c[_0x41cd88 + 4], _0x4a1f9b, 4118548399);
        _0x1375c8 = _0x4f9b0f(_0x1375c8, _0x1cb9de, _0x2de10f, _0x22a1c5, _0x5c2b2c[_0x41cd88 + 5], _0x4610ff, 1200080426);
        _0x22a1c5 = _0x4f9b0f(_0x22a1c5, _0x1375c8, _0x1cb9de, _0x2de10f, _0x5c2b2c[_0x41cd88 + 6], _0x4eb9c4, 2821735955);
        _0x2de10f = _0x4f9b0f(_0x2de10f, _0x22a1c5, _0x1375c8, _0x1cb9de, _0x5c2b2c[_0x41cd88 + 7], _0x472c3b, 4249261313);
        _0x1cb9de = _0x4f9b0f(_0x1cb9de, _0x2de10f, _0x22a1c5, _0x1375c8, _0x5c2b2c[_0x41cd88 + 8], _0x4a1f9b, 1770035416);
        _0x1375c8 = _0x4f9b0f(_0x1375c8, _0x1cb9de, _0x2de10f, _0x22a1c5, _0x5c2b2c[_0x41cd88 + 9], _0x4610ff, 2336552879);
        _0x22a1c5 = _0x4f9b0f(_0x22a1c5, _0x1375c8, _0x1cb9de, _0x2de10f, _0x5c2b2c[_0x41cd88 + 10], _0x4eb9c4, 4294925233);
        _0x2de10f = _0x4f9b0f(_0x2de10f, _0x22a1c5, _0x1375c8, _0x1cb9de, _0x5c2b2c[_0x41cd88 + 11], _0x472c3b, 2304563134);
        _0x1cb9de = _0x4f9b0f(_0x1cb9de, _0x2de10f, _0x22a1c5, _0x1375c8, _0x5c2b2c[_0x41cd88 + 12], _0x4a1f9b, 1804603682);
        _0x1375c8 = _0x4f9b0f(_0x1375c8, _0x1cb9de, _0x2de10f, _0x22a1c5, _0x5c2b2c[_0x41cd88 + 13], _0x4610ff, 4254626195);
        _0x22a1c5 = _0x4f9b0f(_0x22a1c5, _0x1375c8, _0x1cb9de, _0x2de10f, _0x5c2b2c[_0x41cd88 + 14], _0x4eb9c4, 2792965006);
        _0x2de10f = _0x4f9b0f(_0x2de10f, _0x22a1c5, _0x1375c8, _0x1cb9de, _0x5c2b2c[_0x41cd88 + 15], _0x472c3b, 1236535329);
        _0x1cb9de = _0x1c83ae(_0x1cb9de, _0x2de10f, _0x22a1c5, _0x1375c8, _0x5c2b2c[_0x41cd88 + 1], _0x29769b, 4129170786);
        _0x1375c8 = _0x1c83ae(_0x1375c8, _0x1cb9de, _0x2de10f, _0x22a1c5, _0x5c2b2c[_0x41cd88 + 6], _0x56f055, 3225465664);
        _0x22a1c5 = _0x1c83ae(_0x22a1c5, _0x1375c8, _0x1cb9de, _0x2de10f, _0x5c2b2c[_0x41cd88 + 11], _0x56df0c, 643717713);
        _0x2de10f = _0x1c83ae(_0x2de10f, _0x22a1c5, _0x1375c8, _0x1cb9de, _0x5c2b2c[_0x41cd88 + 0], _0x487607, 3921069994);
        _0x1cb9de = _0x1c83ae(_0x1cb9de, _0x2de10f, _0x22a1c5, _0x1375c8, _0x5c2b2c[_0x41cd88 + 5], _0x29769b, 3593408605);
        _0x1375c8 = _0x1c83ae(_0x1375c8, _0x1cb9de, _0x2de10f, _0x22a1c5, _0x5c2b2c[_0x41cd88 + 10], _0x56f055, 38016083);
        _0x22a1c5 = _0x1c83ae(_0x22a1c5, _0x1375c8, _0x1cb9de, _0x2de10f, _0x5c2b2c[_0x41cd88 + 15], _0x56df0c, 3634488961);
        _0x2de10f = _0x1c83ae(_0x2de10f, _0x22a1c5, _0x1375c8, _0x1cb9de, _0x5c2b2c[_0x41cd88 + 4], _0x487607, 3889429448);
        _0x1cb9de = _0x1c83ae(_0x1cb9de, _0x2de10f, _0x22a1c5, _0x1375c8, _0x5c2b2c[_0x41cd88 + 9], _0x29769b, 568446438);
        _0x1375c8 = _0x1c83ae(_0x1375c8, _0x1cb9de, _0x2de10f, _0x22a1c5, _0x5c2b2c[_0x41cd88 + 14], _0x56f055, 3275163606);
        _0x22a1c5 = _0x1c83ae(_0x22a1c5, _0x1375c8, _0x1cb9de, _0x2de10f, _0x5c2b2c[_0x41cd88 + 3], _0x56df0c, 4107603335);
        _0x2de10f = _0x1c83ae(_0x2de10f, _0x22a1c5, _0x1375c8, _0x1cb9de, _0x5c2b2c[_0x41cd88 + 8], _0x487607, 1163531501);
        _0x1cb9de = _0x1c83ae(_0x1cb9de, _0x2de10f, _0x22a1c5, _0x1375c8, _0x5c2b2c[_0x41cd88 + 13], _0x29769b, 2850285829);
        _0x1375c8 = _0x1c83ae(_0x1375c8, _0x1cb9de, _0x2de10f, _0x22a1c5, _0x5c2b2c[_0x41cd88 + 2], _0x56f055, 4243563512);
        _0x22a1c5 = _0x1c83ae(_0x22a1c5, _0x1375c8, _0x1cb9de, _0x2de10f, _0x5c2b2c[_0x41cd88 + 7], _0x56df0c, 1735328473);
        _0x2de10f = _0x1c83ae(_0x2de10f, _0x22a1c5, _0x1375c8, _0x1cb9de, _0x5c2b2c[_0x41cd88 + 12], _0x487607, 2368359562);
        _0x1cb9de = _0x12f589(_0x1cb9de, _0x2de10f, _0x22a1c5, _0x1375c8, _0x5c2b2c[_0x41cd88 + 5], _0x502ea3, 4294588738);
        _0x1375c8 = _0x12f589(_0x1375c8, _0x1cb9de, _0x2de10f, _0x22a1c5, _0x5c2b2c[_0x41cd88 + 8], _0x442c58, 2272392833);
        _0x22a1c5 = _0x12f589(_0x22a1c5, _0x1375c8, _0x1cb9de, _0x2de10f, _0x5c2b2c[_0x41cd88 + 11], _0x14dec2, 1839030562);
        _0x2de10f = _0x12f589(_0x2de10f, _0x22a1c5, _0x1375c8, _0x1cb9de, _0x5c2b2c[_0x41cd88 + 14], _0x482c5e, 4259657740);
        _0x1cb9de = _0x12f589(_0x1cb9de, _0x2de10f, _0x22a1c5, _0x1375c8, _0x5c2b2c[_0x41cd88 + 1], _0x502ea3, 2763975236);
        _0x1375c8 = _0x12f589(_0x1375c8, _0x1cb9de, _0x2de10f, _0x22a1c5, _0x5c2b2c[_0x41cd88 + 4], _0x442c58, 1272893353);
        _0x22a1c5 = _0x12f589(_0x22a1c5, _0x1375c8, _0x1cb9de, _0x2de10f, _0x5c2b2c[_0x41cd88 + 7], _0x14dec2, 4139469664);
        _0x2de10f = _0x12f589(_0x2de10f, _0x22a1c5, _0x1375c8, _0x1cb9de, _0x5c2b2c[_0x41cd88 + 10], _0x482c5e, 3200236656);
        _0x1cb9de = _0x12f589(_0x1cb9de, _0x2de10f, _0x22a1c5, _0x1375c8, _0x5c2b2c[_0x41cd88 + 13], _0x502ea3, 681279174);
        _0x1375c8 = _0x12f589(_0x1375c8, _0x1cb9de, _0x2de10f, _0x22a1c5, _0x5c2b2c[_0x41cd88 + 0], _0x442c58, 3936430074);
        _0x22a1c5 = _0x12f589(_0x22a1c5, _0x1375c8, _0x1cb9de, _0x2de10f, _0x5c2b2c[_0x41cd88 + 3], _0x14dec2, 3572445317);
        _0x2de10f = _0x12f589(_0x2de10f, _0x22a1c5, _0x1375c8, _0x1cb9de, _0x5c2b2c[_0x41cd88 + 6], _0x482c5e, 76029189);
        _0x1cb9de = _0x12f589(_0x1cb9de, _0x2de10f, _0x22a1c5, _0x1375c8, _0x5c2b2c[_0x41cd88 + 9], _0x502ea3, 3654602809);
        _0x1375c8 = _0x12f589(_0x1375c8, _0x1cb9de, _0x2de10f, _0x22a1c5, _0x5c2b2c[_0x41cd88 + 12], _0x442c58, 3873151461);
        _0x22a1c5 = _0x12f589(_0x22a1c5, _0x1375c8, _0x1cb9de, _0x2de10f, _0x5c2b2c[_0x41cd88 + 15], _0x14dec2, 530742520);
        _0x2de10f = _0x12f589(_0x2de10f, _0x22a1c5, _0x1375c8, _0x1cb9de, _0x5c2b2c[_0x41cd88 + 2], _0x482c5e, 3299628645);
        _0x1cb9de = _0x4de20d(_0x1cb9de, _0x2de10f, _0x22a1c5, _0x1375c8, _0x5c2b2c[_0x41cd88 + 0], _0x1379fe, 4096336452);
        _0x1375c8 = _0x4de20d(_0x1375c8, _0x1cb9de, _0x2de10f, _0x22a1c5, _0x5c2b2c[_0x41cd88 + 7], _0x2efb56, 1126891415);
        _0x22a1c5 = _0x4de20d(_0x22a1c5, _0x1375c8, _0x1cb9de, _0x2de10f, _0x5c2b2c[_0x41cd88 + 14], _0x178652, 2878612391);
        _0x2de10f = _0x4de20d(_0x2de10f, _0x22a1c5, _0x1375c8, _0x1cb9de, _0x5c2b2c[_0x41cd88 + 5], _0x346e31, 4237533241);
        _0x1cb9de = _0x4de20d(_0x1cb9de, _0x2de10f, _0x22a1c5, _0x1375c8, _0x5c2b2c[_0x41cd88 + 12], _0x1379fe, 1700485571);
        _0x1375c8 = _0x4de20d(_0x1375c8, _0x1cb9de, _0x2de10f, _0x22a1c5, _0x5c2b2c[_0x41cd88 + 3], _0x2efb56, 2399980690);
        _0x22a1c5 = _0x4de20d(_0x22a1c5, _0x1375c8, _0x1cb9de, _0x2de10f, _0x5c2b2c[_0x41cd88 + 10], _0x178652, 4293915773);
        _0x2de10f = _0x4de20d(_0x2de10f, _0x22a1c5, _0x1375c8, _0x1cb9de, _0x5c2b2c[_0x41cd88 + 1], _0x346e31, 2240044497);
        _0x1cb9de = _0x4de20d(_0x1cb9de, _0x2de10f, _0x22a1c5, _0x1375c8, _0x5c2b2c[_0x41cd88 + 8], _0x1379fe, 1873313359);
        _0x1375c8 = _0x4de20d(_0x1375c8, _0x1cb9de, _0x2de10f, _0x22a1c5, _0x5c2b2c[_0x41cd88 + 15], _0x2efb56, 4264355552);
        _0x22a1c5 = _0x4de20d(_0x22a1c5, _0x1375c8, _0x1cb9de, _0x2de10f, _0x5c2b2c[_0x41cd88 + 6], _0x178652, 2734768916);
        _0x2de10f = _0x4de20d(_0x2de10f, _0x22a1c5, _0x1375c8, _0x1cb9de, _0x5c2b2c[_0x41cd88 + 13], _0x346e31, 1309151649);
        _0x1cb9de = _0x4de20d(_0x1cb9de, _0x2de10f, _0x22a1c5, _0x1375c8, _0x5c2b2c[_0x41cd88 + 4], _0x1379fe, 4149444226);
        _0x1375c8 = _0x4de20d(_0x1375c8, _0x1cb9de, _0x2de10f, _0x22a1c5, _0x5c2b2c[_0x41cd88 + 11], _0x2efb56, 3174756917);
        _0x22a1c5 = _0x4de20d(_0x22a1c5, _0x1375c8, _0x1cb9de, _0x2de10f, _0x5c2b2c[_0x41cd88 + 2], _0x178652, 718787259);
        _0x2de10f = _0x4de20d(_0x2de10f, _0x22a1c5, _0x1375c8, _0x1cb9de, _0x5c2b2c[_0x41cd88 + 9], _0x346e31, 3951481745);
        _0x1cb9de = _0x3aaac3(_0x1cb9de, _0x542a97);
        _0x2de10f = _0x3aaac3(_0x2de10f, _0x53d8dd);
        _0x22a1c5 = _0x3aaac3(_0x22a1c5, _0x1443b7);
        _0x1375c8 = _0x3aaac3(_0x1375c8, _0x212587);
    }
    var _0x37465d = _0x1e7831(_0x1cb9de) + _0x1e7831(_0x2de10f) + _0x1e7831(_0x22a1c5) + _0x1e7831(_0x1375c8);
    return _0x37465d.toLowerCase();
}


function Env(name){return new class{constructor(name){this.name=name;this.startTime=Date.now();this.log(`[${this.name}]开始运行\n`,{time:true});this.notifyStr=[];this.notifyFlag=true;this.userIdx=0;this.userList=[];this.userCount=0}log(msg,options={}){let opt={console:true};Object.assign(opt,options);if(opt.time){let fmt=opt.fmt||"hh:mm:ss";msg=`[${this.time(fmt)}]`+msg}if(opt.notify)this.notifyStr.push(msg);if(opt.console)console.log(msg)}read_env(Class){let envStrList=ckNames.map(x=>process.env[x]);for(let env_str of envStrList.filter(x=>!!x)){let sp=envSplitor.filter(x=>env_str.includes(x));let splitor=sp.length>0?sp[0]:envSplitor[0];for(let ck of env_str.split(splitor).filter(x=>!!x)){this.userList.push(new Class(ck))}}this.userCount=this.userList.length;if(!this.userCount){this.log(`未找到变量，请检查变量${ckNames.map(x=>"["+x+"]").join("\u6216")}`,{notify:true});return false}this.log(`共找到${this.userCount}个账号`);return true}async threads(taskName,conf,opt={}){while(conf.idx<$.userList.length){let user=$.userList[conf.idx++];if(!user.valid)continue;await user[taskName](opt)}}async threadTask(taskName,thread){let taskAll=[];let taskConf={idx:0};while(thread--)taskAll.push(this.threads(taskName,taskConf));await Promise.all(taskAll)}time(t,x=null){let xt=x?new Date(x):new Date;let e={"M+":xt.getMonth()+1,"d+":xt.getDate(),"h+":xt.getHours(),"m+":xt.getMinutes(),"s+":xt.getSeconds(),"q+":Math.floor((xt.getMonth()+3)/3),"S":this.padStr(xt.getMilliseconds(),3)};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(xt.getFullYear()+"").substr(4-RegExp.$1.length)));for(let s in e)new RegExp("("+s+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?e[s]:("00"+e[s]).substr((""+e[s]).length)));return t}async showmsg(){if(!this.notifyFlag)return;if(!this.notifyStr.length)return;var notify=require("./sendNotify");this.log("\n============== \u63A8\u9001 ==============");await notify.sendNotify(this.name,this.notifyStr.join("\n"))}padStr(num,length,opt={}){let padding=opt.padding||"0";let mode=opt.mode||"l";let numStr=String(num);let numPad=length>numStr.length?length-numStr.length:0;let pads="";for(let i=0;i<numPad;i++){pads+=padding}if(mode=="r"){numStr=numStr+pads}else{numStr=pads+numStr}return numStr}json2str(obj,c,encode=false){let ret=[];for(let keys of Object.keys(obj).sort()){let v=obj[keys];if(v&&encode)v=encodeURIComponent(v);ret.push(keys+"="+v)}return ret.join(c)}str2json(str,decode=false){let ret={};for(let item of str.split("&")){if(!item)continue;let idx=item.indexOf("=");if(idx==-1)continue;let k=item.substr(0,idx);let v=item.substr(idx+1);if(decode)v=decodeURIComponent(v);ret[k]=v}return ret}randomPattern(pattern,charset="abcdef0123456789"){let str="";for(let chars of pattern){if(chars=="x"){str+=charset.charAt(Math.floor(Math.random()*charset.length))}else if(chars=="X"){str+=charset.charAt(Math.floor(Math.random()*charset.length)).toUpperCase()}else{str+=chars}}return str}randomString(len,charset="abcdef0123456789"){let str="";for(let i=0;i<len;i++){str+=charset.charAt(Math.floor(Math.random()*charset.length))}return str}randomList(a){let idx=Math.floor(Math.random()*a.length);return a[idx]}wait(t){return new Promise(e=>setTimeout(e,t))}async exitNow(){await this.showmsg();let e=Date.now();let s=(e-this.startTime)/1000;this.log("");this.log(`[${this.name}]运行结束，共运行了${s}秒`,{time:true});process.exit(0)}}(name)}