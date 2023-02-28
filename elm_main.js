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
const {TYQLDG_API,CkToJson,JsonToCK}=require('./basic/tyqldg');
const $ = new Env("饿了么"),
got = require("got"),
{
    CookieJar: _0x320f4b
} = require("tough-cookie"),
envPrefix = "ELM_",
envSplitor = ["\n", "&", "@"],//支持多种分割，但要保证变量里不存在这个字符
ckNames = ["ELM_CK"],//可以支持多变量
MAX_THREAD = parseInt(process.env[envPrefix + "Thread"]) || 50,//默认最大并发数
DEFAULT_TIMEOUT = 8000,//超时
DEFAULT_RETRY = 3;//重试次数

let _0x593008 = null;
const _0x5db887 = process.env[envPrefix + "Proxy"] || process.env.LEAF_DEBUG_PROXY || "",
    _0x180779 = "9:59:59:200",
    _0x527141 = "10:00:00:000".split(":"),
    _0x283667 = 6,
    _0xa79336 = 200,
    _0x47a9cc = 50,
    _0xc8bf7b = 30,
    _0x20c5ce = process.env.ELM_CouponTime || _0x180779,
    _0x13fc1e = process.env.ELM_GrabCoupon?.["split"]("&") || [];
const _0x5c1a93 = 3.04,
    _0x229345 = "elm",
    _0x2f2e4c = "https://leafxcy.coding.net/api/user/leafxcy/project/validcode/shared-depot/validCode/git/blob/master/code.json",
    _0xaf016e = "https://leafxcy.coding.net/api/user/leafxcy/project/validcode/shared-depot/validCode/git/blob/master/" + _0x229345 + ".json",
    _0x2d85c9 = "Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/19A346 Ariver/1.1.0 AliApp(AP/10.3.30.9000) Nebula WK RVKType(1) AlipayDefined(nt:WIFI,ws:390|780|3.0) AlipayClient/10.3.30.9000 Language/zh-Hans Region/CN MiniProgram APXWebView NebulaX/1.0.0",
    _0x318b3c = "https://tb.ele.me",
    _0x15253a = "https://tb.ele.me/",
    _0x2a6b9d = "0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM",
    _0x5881a2 = "12574478",
    _0x12a0cf = "2.7.0";
let _0x48cd52 = "602ea051",
    _0x3cf3b6 = "WECHAT_APP",
    _0x11260d = ["201200@eleme_iphone_10.15.33", "200001@wechat_iphone_1.0.0", "2021001110676437@alipay_iphone_10.14.3"],
    _0x39c9bc = [],
    _0x3283ce = [],
    _0xd48d11 = [],
    _0xd3d908 = [];
try {
    fs = require("fs");
} catch (_0x1f358b) { }
if (fs) {
    try {
        _0x39c9bc = JSON.parse(fs.readFileSync("./elm_id_chd_simple.json", "utf-8"));
    } catch { }
    try {
        _0x3283ce = JSON.parse(fs.readFileSync("./elm_id_chd_pageview.json", "utf-8"));
    } catch { }
    try {
        _0xd48d11 = JSON.parse(fs.readFileSync("./elm_id_tkj_simple.json", "utf-8"));
    } catch { }
    try {
        _0xd3d908 = JSON.parse(fs.readFileSync("./elm_id_tkj_pageview.json", "utf-8"));
    } catch { }
}
const _0x26e12d = 10000,
    _0x20039c = 3000,
    _0x38fcc2 = 20000,
    _0x369859 = 5000,
    _0x646bd6 = {
        "CHD": "吃货豆",
        "INTEGRAL_PROPERTY": "提款卡"
    };
let _0x198267 = [];


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


class _0x4e0854 {
    constructor() {
        this.index = $.userIdx++;
        this.name = "";
        this.valid = true;
        const _0x32527b = {
            "limit": 0
        };
        const _0xad0a29 = {
            "retry": _0x32527b,
            "timeout": DEFAULT_TIMEOUT,
            "followRedirect": false
        };
        this.got = got.extend(_0xad0a29);
    }
    ["log"](_0x56659e, _0xddd0e9 = {}) {
        var _0x32a0f2 = "",
            _0x5f28b1 = $.userCount.toString().length;
        if (this.index) {
            _0x32a0f2 += "账号[" + $.padStr(this.index, _0x5f28b1) + "]";
        }
        if (this.name) {
            _0x32a0f2 += "[" + this.name + "]";
        }
        $.log(_0x32a0f2 + _0x56659e, _0xddd0e9);
    }
    async ["request"](_0x2646dc) {
        var _0x2e9dee = null,
            _0x457ec6 = 0,
            _0x46b36a = _0x2646dc.fn || _0x2646dc.url;
        _0x2646dc.method = _0x2646dc?.["method"]?.["toUpperCase"]() || "GET";
        if (_0x5db887) {
            if (!_0x593008) {
                var _0x2c19a5 = require("https-proxy-agent");
                _0x593008 = new _0x2c19a5(_0x5db887);
            }
            const _0xb84f01 = {
                "http": _0x593008,
                "https": _0x593008
            };
            _0x2646dc.agent = _0xb84f01;
            const _0x5d2e63 = {
                "rejectUnauthorized": false
            };
            _0x2646dc.https = _0x5d2e63;
        }
        while (_0x457ec6++ < DEFAULT_RETRY) {
            try {
                await this.got(_0x2646dc).then(_0x44eaf1 => {
                    _0x2e9dee = _0x44eaf1;
                }, _0x17ef6e => {
                    _0x2e9dee = _0x17ef6e.response;
                });
                if ((_0x2e9dee?.["statusCode"] / 100 | 0) <= 4) {
                    break;
                }
            } catch (_0x4b5a57) {
                _0x4b5a57.name == "TimeoutError" ? this.log("[" + _0x46b36a + "]请求超时，重试第" + _0x457ec6 + "次") : this.log("[" + _0x46b36a + "]请求错误(" + _0x4b5a57.message + ")，重试第" + _0x457ec6 + "次");
            }
        }
        const _0x3edd00 = {
            "statusCode": -1,
            "headers": null,
            "result": null
        };
        if (_0x2e9dee == null) {
            return Promise.resolve(_0x3edd00);
        }
        if (_0x2646dc.debugIn) {
            $.log(_0x2e9dee.request.options.headers);
            if (_0x2646dc.json) {
                $.log(_0x2646dc.json);
            }
            if (_0x2646dc.form) {
                $.log(_0x2646dc.form);
            }
            if (_0x2646dc.body) {
                $.log(_0x2646dc.body);
            }
        }
        let {
            statusCode: _0x133e24,
            headers: _0x29dec4,
            body: _0x3624c7
        } = _0x2e9dee;
        if (_0x3624c7) {
            try {
                _0x3624c7 = JSON.parse(_0x3624c7);
            } catch { }
        }
        _0x2646dc.debugOut && ($.log(_0x29dec4), $.log(JSON.stringify(_0x3624c7)));
        const _0x14dffc = {
            "statusCode": _0x133e24,
            "headers": _0x29dec4,
            "result": _0x3624c7
        };
        return Promise.resolve(_0x14dffc);
    }
}
let _0x2d650d = new _0x4e0854();
class _0x5d3aa8 extends _0x4e0854 {
    constructor(_0xd89a39) {
        super();
        _0xd89a39 = _0xd89a39.replace(/ /g, "");
        this.cookieJar = new _0x320f4b();
        for (let _0x6ba927 of _0xd89a39.split(";").filter(_0x2ca23f => _0x2ca23f)) {
            let _0x3a7f38 = _0x6ba927.split("=");
            if (!_0x3a7f38[0]) {
                continue;
            }
            this[_0x3a7f38[0]] = _0x3a7f38[1] || "";
        }
        this.task_list = [];
        this.latitude = "22.52" + $.randomString(4, "0123456789");
        this.longitude = "114.07" + $.randomString(4, "0123456789");
        this.ua = "140#" + $.randomString(60, _0x2a6b9d);
        this.umidtoken = $.randomString(68, _0x2a6b9d);
        _0x13fc1e.length >= this.index ? this.grabCouponFlagEnv = Number(_0x13fc1e[this.index - 1]) : this.grabCouponFlagEnv = 0;
        const _0x1e4862 = {
            "Connection": "keep-alive",
            "User-Agent": _0x2d85c9,
            "Origin": _0x318b3c,
            "Referer": _0x15253a
        };
        const _0x271afc = {
            "limit": 0
        };
        const _0x3514bb = {
            "headers": _0x1e4862,
            "retry": _0x271afc,
            "timeout": DEFAULT_TIMEOUT,
            "followRedirect": false
        };
        this.got = got.extend(_0x3514bb);
        const _0x355833 = {
            "x-shard": "shardid=1",
            "Referer": "https://r.ele.me/",
            "Origin": "https://r.ele.me"
        };
        this.cashback_header = _0x355833;
    }
    ["getSign"](_0x21181c, _0x297180) {
        let _0x5ccc93 = this.cookieJar.getCookieStringSync("https://mtop.ele.me"),
            _0x53f27a = _0x5ccc93.match(/_m_h5_tk=(\w+)_\w+/);
        this.md5Salt = _0x53f27a ? _0x53f27a[1] : "4c260d5bf8993f39571ba378979cb915";
        let _0x2dfedd = [this.md5Salt, _0x21181c.toString(), _0x5881a2, JSON.stringify(_0x297180)];
        return _0xce197e(_0x2dfedd.join("&"));
    }
    ["get_params"](_0x4b2f90, _0x2c3db1, _0x6ca801 = {}) {
        const _0xa8b714 = {
            "IEuxh": "object",
            "wHRnx": "string",
            "HacPH": "true",
            "aDLcs": "jsonp"
        };
        let _0x1f915a = Date.now(),
            _0x4730cb = {};
        for (let _0x52cd36 in _0x2c3db1) {
            typeof _0x2c3db1[_0x52cd36] == _0xa8b714.IEuxh ? _0x4730cb[_0x52cd36] = JSON.stringify(_0x2c3db1[_0x52cd36]) : _0x4730cb[_0x52cd36] = _0x2c3db1[_0x52cd36];
        }
        let _0x42e9f1 = {
            "jsv": _0x12a0cf,
            "appKey": _0x5881a2,
            "t": _0x1f915a,
            "sign": this.getSign(_0x1f915a, _0x4730cb),
            "api": _0x4b2f90,
            "v": "1.0",
            "ecode": "1",
            "type": "json",
            "valueType": _0xa8b714.wHRnx,
            "needLogin": _0xa8b714.HacPH,
            "LoginRequest": _0xa8b714.HacPH,
            "ttid": _0x11260d[0] || "",
            "dataType": _0xa8b714.aDLcs,
            "data": JSON.stringify(_0x4730cb)
        };
        Object.assign(_0x42e9f1, _0x6ca801);
        return _0x42e9f1;
    }
    async ["refresh_ck"](_0x30e193 = {}) {
        this.valid = false;
        try {
            let _0x1ddcb0 = "mtop.alsc.user.session.exchange.apply";
            const _0x571a27 = {
                "clientType": "weixin"
            };
            let _0x5e8444 = this.get_params(_0x1ddcb0, _0x571a27);
            const _0x587105 = {
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
            let _0x5b0168 = {
                "x-smallstc": JSON.stringify(_0x587105)
            };
            const _0x3394b2 = {
                "fn": "refresh_ck",
                "method": "get",
                "url": "https://mtop.ele.me/h5/" + _0x1ddcb0 + "/1.0",
                "searchParams": _0x5e8444,
                "headers": _0x5b0168,
                "cookieJar": this.cookieJar
            };
            let {
                result: _0x4a65e6
            } = await this.request(_0x3394b2),
                _0x491023 = _0x4a65e6?.["ret"][0] || "";
            if (_0x491023.includes("SUCCESS")) {
                this.valid = true;
                this.expireTime = $.time("yyyy-MM-dd hh:mm:ss", Number(_0x4a65e6.data.expiredTime) || 0);
                this.log("刷新CK成功");
                await this.set_cookie(_0x4a65e6.data.exchangeSessionValue);
            } else {
                if ((_0x491023.includes("FAIL_SYS_TOKEN_EMPTY") || _0x491023.includes("FAIL_SYS_TOKEN_EMPTY")) && !_0x30e193.expire_retry) {
                    let _0x41cd64 = Object.assign({}, _0x30e193);
                    _0x41cd64.expire_retry = true;
                    await this.refresh_ck(_0x41cd64);
                } else {
                    if (_0x491023.includes("FAIL_SYS_SESSION_EXPIRED")) {
                        await expireNotify(this.UTUSER,this.index);
                        this.log("CK过期")//, {"notify": true});
                    } else {
                        this.log("刷新CK失败: " + _0x491023);
                    }
                }
            }
        } catch (_0x1308f3) {
            $.log(_0x1308f3);
        } finally {
            return Promise.resolve();
        }
    }
    async ["set_cookie"](_0x59725a) {
        try {
            const _0x29947e = {
                "exchangeSessionValue": _0x59725a
            };
            const _0x43b85b = {
                "fn": "set_cookie",
                "method": "post",
                "url": "https://alsc-session.ele.me/set_cookie",
                "json": _0x29947e,
                "cookieJar": this.cookieJar
            };
            await this.request(_0x43b85b);
        } catch (_0x211726) {
            $.log(_0x211726);
        } finally {
            return Promise.resolve();
        }
    }
    async ["user_mini"](_0x1efb0b = {}) {
        try {
            const _0x586f4d = {
                "fn": "user_mini",
                "method": "get",
                "url": "https://restapi.ele.me/eus/v4/user_mini",
                "cookieJar": this.cookieJar
            };
            let {
                result: _0x248230
            } = await this.request(_0x586f4d);
            _0x248230?.["mobile"] ? this.name = _0x248230.mobile : this.log("获取账号失败");

            if(!_0x248230?.["mobile"]){
                await expireNotify(this.UTUSER,this.index);
            }

        } catch (_0x5cff28) {
            $.log(_0x5cff28);
        } finally {
            return Promise.resolve();
        }
    }
    async ["foodieRecords"](_0x14c51a = {}) {
        try {
            const _0x35f746 = {
                "fn": "foodieRecords",
                "method": "get",
                "url": "https://h5.ele.me/restapi/svip_biz/v1/supervip/foodie/records",
                "cookieJar": this.cookieJar,
                "searchParams": {}
            };
            _0x35f746.searchParams.offset = 0;
            _0x35f746.searchParams.limit = _0x14c51a.limit || 100;
            _0x35f746.searchParams.longitude = this.longitude;
            _0x35f746.searchParams.latitude = this.latitude;
            let {
                result: _0x17e699
            } = await this.request(_0x35f746);
            if (_0x17e699.success == true) {
                let _0x37d320 = $.time("yyyy-MM-dd");
                this.pea = parseInt(_0x17e699.peaCount) || 0;
                this.todayBean = 0;
                if (_0x17e699.records && _0x17e699.records.length > 0) {
                    for (let _0x2c5ec7 of _0x17e699.records) {
                        _0x2c5ec7.createdTime.includes(_0x37d320) && _0x2c5ec7.optType == 1 && (this.todayBean += parseInt(_0x2c5ec7.count));
                    }
                }
                this.monthAccountInfo = _0x17e699.monthAccountInfo;
            } else {
                this.log("查询吃货豆收支失败: " + _0x17e699.message);
            }
        } catch (_0x497f31) {
            $.log(_0x497f31);
        } finally {
            return Promise.resolve();
        }
    }
    async ["get_foodie_record"](_0x4b5b4b = {}) {
        try {
            let _0xb38090 = "867018",
                _0x392aff = "mtop.alibaba.svip.langrisser.query";
            const _0x3b2e3e = {
                "needHead": true,
                "month": ""
            };
            const _0x561ae9 = {
                "backup": false,
                "count": 1,
                "data": _0x3b2e3e,
                "resId": _0xb38090
            };
            const _0x187e2b = {
                "lgrsRequestItems": [_0x561ae9],
                "longitude": this.longitude,
                "latitude": this.latitude
            };
            let _0x4681e5 = this.get_params(_0x392aff, _0x187e2b);
            const _0xf456ac = {
                "fn": "get_foodie_record",
                "method": "get",
                "url": "https://mtop.ele.me/h5/" + _0x392aff + "/1.0",
                "searchParams": _0x4681e5,
                "cookieJar": this.cookieJar
            };
            let {
                result: _0x2ca685
            } = await this.request(_0xf456ac),
                _0xa29492 = _0x2ca685?.["ret"][0] || "";
            if (_0xa29492.includes("SUCCESS")) {
                let _0x5b74e4 = _0x2ca685?.["data"]?.["data"][_0xb38090]?.["data"][0] || {};
                this.pea = parseInt(_0x5b74e4.peaCount) || 0;
                let _0x629f97 = _0x5b74e4?.["accountMonthRecords"] || [];
                for (let _0x51abd3 of _0x629f97) { }
            } else {
                this.log("查询吃货豆出错: " + _0xa29492);
            }
        } catch (_0x4621c6) {
            $.log(_0x4621c6);
        } finally {
            return Promise.resolve();
        }
    }
    async ["init_check"]() {
        await this.user_mini();
        await this.foodieRecords();
        this.log("吃货豆: " + this.pea + ", CK过期时间: " + this.expireTime);
    }
    async ["supportor"](_0x5f559b = {}) {
        try {
            let _0x327361 = "mtop.me.ele.alsc.alpac.recommend.support",
                _0x45420d = {
                    "requestId": $.randomString(32).toLowerCase(),
                    "ttid": "200001@wechat_ios_1.0.0",
                    "channel": _0x3cf3b6,
                    "unionId": "",
                    "ownerId": _0x48cd52,
                    "fromOfficialAccount": false,
                    "bizType": 1,
                    "referCode": "",
                    "referId": "",
                    "referChannelCode": "",
                    "referChannelType": "",
                    "templateId": ["wxqFTeTYUFXbV3j4Jo-EQioceVmliHRQjEZP0POCr3k"],
                    "v": "2.9",
                    "actId": _0x5f559b?.["actid"]?.["toString"]() || "1"
                },
                _0xbff192 = this.get_params(_0x327361, _0x45420d);
            const _0x30d99c = {
                "fn": "supportor",
                "method": "get",
                "url": "https://mtop.ele.me/h5/" + _0x327361 + "/1.0",
                "searchParams": _0xbff192,
                "cookieJar": this.cookieJar
            };
            let {
                result: _0x145d3e
            } = await this.request(_0x30d99c),
                _0x5ba89c = _0x145d3e?.["ret"][0] || "";
            if (_0x5ba89c.includes("SUCCESS")) {
                if (_0x145d3e?.["data"]?.["code"] == 0) {
                    let _0x40bcbb = _0x145d3e.data.data;
                    this.log(": " + _0x40bcbb.subTitle + " -- " + (_0x40bcbb.couponCondition ? _0x40bcbb.couponCondition / 100 : "无门槛") + "减" + _0x40bcbb.couponAmount / 100);
                } else {
                    this.log("领取红包失败: " + _0x145d3e?.["data"]?.["message"]);
                }
            } else {
                this.log("领取红包出错: " + _0x5ba89c);
            }
        } catch (_0x23ab77) {
            $.log(_0x23ab77);
        } finally {
            return Promise.resolve();
        }
    }
    async ["getSignList"](_0x1a9885 = {}) {
        const _0x37a814 = {
            "AMuYi": "mtop.alibaba.svip.langrisser.query",
            "LqkHU": "biz_card_main",
            "eYxfV": "getSignList",
            "zxYCK": "get",
            "KZiRz": "SUCCESS",
            "oBaiP": "HAS_SIGN"
        };
        try {
            let _0x367d1d = "797010",
                _0x3f6469 = _0x37a814.AMuYi;
            const _0x2ca5c2 = {
                "firstLoad": true
            };
            const _0x5c84a9 = {
                "data": _0x2ca5c2,
                "resId": _0x367d1d
            };
            const _0x174709 = {
                "callSource": _0x37a814.LqkHU,
                "lgrsRequestItems": [_0x5c84a9],
                "latitude": this.latitude,
                "longitude": this.longitude
            };
            let _0xa907e = this.get_params(_0x3f6469, _0x174709);
            const _0x2fbb4a = {
                "fn": _0x37a814.eYxfV,
                "method": _0x37a814.zxYCK,
                "url": "https://mtop.ele.me/h5/" + _0x3f6469 + "/1.0",
                "searchParams": _0xa907e,
                "cookieJar": this.cookieJar
            };
            let {
                result: _0x4acec3
            } = await this.request(_0x2fbb4a),
                _0x3b636b = _0x4acec3?.["ret"][0] || "";
            if (_0x3b636b.includes(_0x37a814.KZiRz)) {
                let _0x217e99 = _0x4acec3.data.data[_0x367d1d],
                    _0x5d09eb = _0x217e99.data.filter(_0x146b01 => _0x146b01.isToday)[0],
                    _0x32b1b4 = _0x5d09eb?.["signStatus"] === _0x37a814.oBaiP;
                this.log("已连续签到" + (_0x217e99?.["extend"]?.["continuousSignDays"] || 0) + "天，今天" + (_0x32b1b4 ? "已" : "未") + "签到");
                if (!_0x32b1b4) {
                    await this.signIn();
                }
            } else {
                this.log("查询签到信息出错: " + _0x3b636b);
            }
        } catch (_0x3d7c0e) {
            $.log(_0x3d7c0e);
        } finally {
            return Promise.resolve();
        }
    }
    async ["signIn"](_0x1c2655 = {}) {
        const _0x2074f0 = {
            "BGMru": "svip_sign_scene",
            "Tvxlz": "signIn",
            "VcEpS": "get",
            "qeyiU": "SUCCESS"
        };
        try {
            let _0x8fb348 = "mtop.koubei.interactioncenter.sign.component.recordsignin";
            const _0xc0fe9f = {
                "bizScene": _0x2074f0.BGMru,
                "asac": _0x1c2655.asac || "2A227051WYEVFLNT5WTFAM",
                "latitude": this.latitude,
                "longitude": this.longitude
            };
            let _0x1bde62 = this.get_params(_0x8fb348, _0xc0fe9f);
            const _0x2e0c3 = {
                "fn": _0x2074f0.Tvxlz,
                "method": _0x2074f0.VcEpS,
                "url": "https://mtop.ele.me/h5/" + _0x8fb348 + "/1.0",
                "searchParams": _0x1bde62,
                "cookieJar": this.cookieJar
            };
            let {
                result: _0x2a0616
            } = await this.request(_0x2e0c3),
                _0x134aec = _0x2a0616?.["ret"][0] || "";
            _0x134aec.includes(_0x2074f0.qeyiU) ? this.log("签到: " + _0x2a0616?.["data"]?.["data"]?.["ext"]?.["rewardValue"] + "吃货豆") : this.log("签到出错: " + _0x134aec);
        } catch (_0x490ea5) {
            $.log(_0x490ea5);
        } finally {
            return Promise.resolve();
        }
    }
    async ["querytask"](_0x3b946f) {
        const _0x247a7d = {
            "aBCvT": "mtop.ele.biz.growth.task.core.querytask",
            "nXoVv": "HAVANA_COMMON",
            "HAfWs": "querytask",
            "kiDax": "get"
        };
        try {
            let _0x13bf95 = _0x247a7d.aBCvT;
            const _0x384eb2 = {
                "lng": this.longitude,
                "lat": this.latitude
            };
            let _0x49fb57 = {
                "missionCollectionId": _0x3b946f.missionCollectionId,
                "missionId": _0x3b946f.missionDefId,
                "bizScene": "svip",
                "accountPlan": _0x247a7d.nXoVv,
                "locationInfos": JSON.stringify([JSON.stringify(_0x384eb2)])
            },
                _0x1fa797 = this.get_params(_0x13bf95, _0x49fb57);
            const _0x3d1ace = {
                "fn": _0x247a7d.HAfWs,
                "method": _0x247a7d.kiDax,
                "url": "https://mtop.ele.me/h5/" + _0x13bf95 + "/1.0/",
                "searchParams": _0x1fa797,
                "cookieJar": this.cookieJar
            };
            let {
                result: _0x51ecf1
            } = await this.request(_0x3d1ace);
        } catch (_0x521844) {
            $.log(_0x521844);
        } finally {
            return Promise.resolve();
        }
    }
    async ["getChdTaskList"](_0x6998bc, _0x9cb728 = {}) {
        const _0x77bb07 = {
            "JXtjn": "224166",
            "Xozlm": "mtop.alibaba.svip.langrisser.query",
            "SxYIE": "getChdTaskList",
            "CYJFI": "SUCCESS"
        };
        let _0x4d4fee = [];
        try {
            let _0x53286c = _0x77bb07.JXtjn,
                _0x28c529 = _0x77bb07.Xozlm;
            const _0x49c328 = {
                "resId": _0x53286c
            };
            const _0x3f67cf = {
                "source": "mtop"
            };
            const _0x32a5e2 = {
                "callSource": "biz_card_main",
                "lgrsRequestItems": [_0x49c328],
                "extra": _0x3f67cf,
                "latitude": this.latitude,
                "longitude": this.longitude
            };
            const _0x4217a5 = {
                "ttid": _0x6998bc
            };
            let _0x196c7c = this.get_params(_0x28c529, _0x32a5e2, _0x4217a5);
            const _0x108871 = {
                "fn": _0x77bb07.SxYIE,
                "method": "get",
                "url": "https://mtop.ele.me/h5/" + _0x28c529 + "/1.0",
                "searchParams": _0x196c7c,
                "cookieJar": this.cookieJar
            };
            let {
                result: _0x2e8e8b
            } = await this.request(_0x108871),
                _0x4b584a = _0x2e8e8b?.["ret"][0] || "";
            _0x4b584a.includes(_0x77bb07.CYJFI) ? _0x4d4fee = _0x2e8e8b.data.data[_0x53286c].data : this.log("获取吃货豆任务出错: " + _0x4b584a);
        } catch (_0x4185e3) {
            $.log(_0x4185e3);
        } finally {
            return Promise.resolve(_0x4d4fee);
        }
    }
    async ["doTask"](_0x268f90) {
        try {
            let _0x4a33a2 = "[" + _0x268f90.missionDefId + ":" + _0x268f90.missionCollectionId + ":" + _0x268f90.missionType + "]",
                _0x202cd5 = "223166",
                _0x2edbc3 = "mtop.alibaba.svip.langrisser.act";
            const _0x5380fb = {
                "callSource": "biz_code_main",
                "resId": _0x202cd5,
                "source": "mtop",
                "extra": {},
                "latitude": this.latitude,
                "longitude": this.longitude
            };
            _0x5380fb.extra.missionDefId = _0x268f90.missionDefId;
            _0x5380fb.extra.missionCollectionId = _0x268f90.missionCollectionId;
            _0x5380fb.extra.missionType = _0x268f90.missionType;
            _0x5380fb.extra.source = "mtop";
            _0x5380fb.extra.missionXId = _0x268f90.missionXId || "";
            let _0x1c1450 = this.get_params(_0x2edbc3, _0x5380fb);
            const _0x2238ba = {
                "fn": "doTask",
                "method": "get",
                "url": "https://mtop.ele.me/h5/" + _0x2edbc3 + "/1.0",
                "searchParams": _0x1c1450,
                "cookieJar": this.cookieJar
            };
            let {
                result: _0x58bbba
            } = await this.request(_0x2238ba),
                _0x50329c = _0x58bbba?.["ret"][0] || "";
            if (_0x50329c.includes("SUCCESS")) {
                if (_0x268f90.missionType == "SIMPLESIGNIN") {
                    if (_0x58bbba?.["data"]?.["success"]) {
                        this.log("完成任务" + _0x4a33a2 + ": " + (_0x58bbba?.["data"]?.["extend"]?.["value"] || "空气") + (_0x646bd6[_0x58bbba?.["data"]?.["extend"]?.["subType"]] || ""));
                        if (!(_0x268f90.is_tkj_task && _0x268f90.pre_task == "PAGEVIEW")) {
                            let _0x46c249 = (Math.random() * _0x20039c | 0) + _0x26e12d;
                            this.log("等待" + _0x46c249 / 1000 + "秒...");
                            await $.wait(_0x46c249);
                        }
                    } else {
                        this.log("完成任务" + _0x4a33a2 + "失败[" + _0x58bbba?.["data"]?.["msgCode"] + "]: " + _0x58bbba?.["data"]?.["msgInfo"]);
                        if (!(_0x268f90.is_tkj_task && _0x268f90.pre_task == "PAGEVIEW")) {
                            let _0x30fbf9 = (Math.random() * 2000 | 0) + 1000;
                            this.log("等待" + _0x30fbf9 / 1000 + "秒...");
                            await $.wait(_0x30fbf9);
                        }
                    }
                } else {
                    if (!_0x268f90.is_tkj_task) {
                        if (_0x58bbba?.["data"]?.["msgCode"] == 0) {
                            this.log("开始浏览15s任务" + _0x4a33a2 + "...");
                            let _0x40113d = (Math.random() * _0x369859 | 0) + _0x38fcc2;
                            this.log("等待" + _0x40113d / 1000 + "秒...");
                            await $.wait(_0x40113d);
                            await this.pageview(_0x268f90);
                        } else {
                            this.log("开始浏览15s任务" + _0x4a33a2 + "失败: " + _0x58bbba?.["data"]?.["msgInfo"]);
                            let _0x466f2c = (Math.random() * 2000 | 0) + 1000;
                            this.log("等待" + _0x466f2c / 1000 + "秒...");
                            await $.wait(_0x466f2c);
                        }
                    }
                }
            } else {
                this.log("完成任务" + _0x4a33a2 + "出错: " + _0x50329c);
                let _0x55d829 = (Math.random() * 2000 | 0) + 1000;
                this.log("等待" + _0x55d829 / 1000 + "秒...");
                await $.wait(_0x55d829);
            }
        } catch (_0x973a0e) {
            $.log(_0x973a0e);
        } finally {
            return Promise.resolve();
        }
    }
    async ["pageview"](_0x302e89) {
        try {
            let _0x311e3b = "[" + _0x302e89.missionDefId + ":" + _0x302e89.missionCollectionId + ":" + _0x302e89.missionType + "]",
                _0x1f07b6 = "mtop.ele.biz.growth.task.event.pageview",
                _0x432332 = {
                    "collectionId": _0x302e89.missionCollectionId,
                    "missionId": _0x302e89.missionDefId,
                    "actionCode": _0x302e89.missionType,
                    "pageFrom": _0x302e89.pageSpm || "a2ogi.15063444",
                    "viewTime": Number(_0x302e89.pageStageTime) || 15,
                    "bizScene": "svip",
                    "accountPlan": "HAVANA_COMMON",
                    "sync": true,
                    "asac": _0x302e89.asac || "2A21119A45TTVAEXP40N7N",
                    "ua": this.ua,
                    "umidtoken": this.umidtoken
                },
                _0x234ce2 = this.get_params(_0x1f07b6, _0x432332);
            const _0x4cd62e = {
                "fn": "pageview",
                "method": "get",
                "url": "https://mtop.ele.me/h5/" + _0x1f07b6 + "/1.0",
                "searchParams": _0x234ce2,
                "cookieJar": this.cookieJar
            };
            let {
                result: _0x2f4e79
            } = await this.request(_0x4cd62e),
                _0x4f746e = _0x2f4e79?.["ret"][0] || "";
            if (_0x4f746e.includes("SUCCESS")) {
                if (_0x302e89.is_tkj_task) {
                    this.log("开始进行浏览15s任务" + _0x311e3b);
                    let _0x104b2b = (Math.random() * _0x369859 | 0) + _0x38fcc2;
                    this.log("等待" + _0x104b2b / 1000 + "秒...");
                    await $.wait(_0x104b2b);
                    _0x302e89.pre_task = _0x302e89.missionType;
                    _0x302e89.missionType = "SIMPLESIGNIN";
                    await this.doTask(_0x302e89);
                } else {
                    this.log("浏览15s任务" + _0x311e3b + "完成");
                }
            } else {
                this.log("浏览15s任务" + _0x311e3b + "完成出错: " + _0x4f746e);
            }
        } catch (_0x57bc80) {
            $.log(_0x57bc80);
        } finally {
            return Promise.resolve();
        }
    }
    async ["userprize"](_0x4416bc) {
        try {
            let _0x3f4248 = "mtop.koubei.interaction.center.dailyatm.userprize";
            const _0x382516 = {
                "lng": this.longitude,
                "lat": this.latitude,
                "city": "440300"
            };
            let _0x128c54 = {
                "bizScene": "daily_atm",
                "locationInfos": JSON.stringify([JSON.stringify(_0x382516)]),
                "actId": "20210322200313000125480674",
                "accountPlan": "HAVANA_COMMON"
            },
                _0x5dae41 = this.get_params(_0x3f4248, _0x128c54);
            const _0xe7d983 = {
                "fn": "userprize",
                "method": "get",
                "url": "https://mtop.ele.me/h5/" + _0x3f4248 + "/1.0",
                "searchParams": _0x5dae41,
                "cookieJar": this.cookieJar
            };
            let {
                result: _0x1082d7
            } = await this.request(_0xe7d983),
                _0xb9949a = _0x1082d7?.["ret"][0] || "";
            if (_0xb9949a.includes("SUCCESS")) {
                if (_0x4416bc == "receive") {
                    _0x1082d7?.["data"]?.["data"]?.["isToReceive"] ? (this.log("可以瓜分" + _0x1082d7?.["data"]?.["data"]?.["toReceive"]?.["amount"] + "元"), await this.receivemoney(_0x1082d7.data.data.toReceive.amount)) : this.log("现在不能瓜分");
                } else {
                    _0x4416bc == "withdraw" && (this.log("提款机余额: " + _0x1082d7?.["data"]?.["data"]?.["drawAmount"] + "元"), _0x1082d7?.["data"]?.["data"]?.["drawAmount"] > 0 && (await this.withdraw(_0x1082d7?.["data"]?.["data"]?.["drawAmount"])));
                }
            } else {
                this.log("查询提款机出错: " + _0xb9949a);
            }
        } catch (_0x3b2812) {
            $.log(_0x3b2812);
        } finally {
            return Promise.resolve();
        }
    }
    async ["receivemoney"](_0x2a34be) {
        const _0x14bcc7 = {
            "NMytl": "mtop.koubei.interaction.center.dailyatm.receivemoney",
            "Ntobf": "daily_atm",
            "kMziu": "440300",
            "TmdmU": "2A21315L64SAZBMEONXFT2",
            "xNHFz": "receivemoney",
            "zGslf": "get",
            "BiJId": "SUCCESS"
        };
        try {
            let _0x397926 = _0x14bcc7.NMytl,
                _0x1ead3d = {
                    "bizScene": _0x14bcc7.Ntobf,
                    "locationInfos": JSON.stringify([JSON.stringify({
                        "lng": this.longitude,
                        "lat": this.latitude,
                        "city": _0x14bcc7.kMziu
                    })]),
                    "actId": "20210322200313000125480674",
                    "accountPlan": "HAVANA_COMMON",
                    "amount": _0x2a34be,
                    "asac": _0x14bcc7.TmdmU,
                    "ua": this.ua,
                    "umidtoken": this.umidtoken
                },
                _0x457a36 = this.get_params(_0x397926, _0x1ead3d);
            const _0x50783b = {
                "fn": _0x14bcc7.xNHFz,
                "method": _0x14bcc7.zGslf,
                "url": "https://mtop.ele.me/h5/" + _0x397926 + "/1.0",
                "searchParams": _0x457a36,
                "cookieJar": this.cookieJar
            };
            let {
                result: _0x2a5d5a
            } = await this.request(_0x50783b),
                _0x4b5283 = _0x2a5d5a?.["ret"][0] || "";
            _0x4b5283.includes(_0x14bcc7.BiJId) ? this.log("提款机瓜分获得: " + _0x2a34be + "元") : this.log("提款机瓜分出错: " + _0x4b5283);
        } catch (_0x2f1cea) {
            $.log(_0x2f1cea);
        } finally {
            return Promise.resolve();
        }
    }
    async ["withdraw"](_0x79fa3) {
        const _0x1812ee = {
            "UJrRJ": "daily_atm",
            "FCCov": "2A21315L64SAZBMEONXFT2",
            "lsIjF": "20210322203950034352625786",
            "fXJSc": "withdraw",
            "UdLPD": "get",
            "bHZVn": "SUCCESS"
        };
        try {
            let _0x314fb7 = "mtop.koubei.interaction.center.dailyatm.withdraw";
            const _0x5ef96 = {
                "lng": this.longitude,
                "lat": this.latitude,
                "city": "440300"
            };
            let _0x5537c6 = {
                "bizScene": _0x1812ee.UJrRJ,
                "locationInfos": JSON.stringify([JSON.stringify(_0x5ef96)]),
                "actId": "20210322200313000125480674",
                "accountPlan": "HAVANA_COMMON",
                "withDrawAmount": _0x79fa3,
                "asac": _0x1812ee.FCCov,
                "rightId": _0x1812ee.lsIjF
            },
                _0x314b95 = this.get_params(_0x314fb7, _0x5537c6);
            const _0x1baa5b = {
                "fn": _0x1812ee.fXJSc,
                "method": _0x1812ee.UdLPD,
                "url": "https://mtop.ele.me/h5/" + _0x314fb7 + "/1.0",
                "searchParams": _0x314b95,
                "cookieJar": this.cookieJar
            };
            let {
                result: _0x469874
            } = await this.request(_0x1baa5b),
                _0x2afc4d = _0x469874?.["ret"][0] || "";
            _0x2afc4d.includes(_0x1812ee.bHZVn) ? this.log("提款机提现" + _0x79fa3 + "元成功") : this.log("提款机提现出错: " + _0x2afc4d);
        } catch (_0x16f740) {
            $.log(_0x16f740);
        } finally {
            return Promise.resolve();
        }
    }
    async ["dailyAtmTaskinfo"]() {
        const _0x998b70 = {
            "xTmzI": "mtop.koubei.interaction.center.dailyatm.taskinfo",
            "YmMiU": "daily_atm",
            "lsZUP": "20210322200313000125480674",
            "aCoqr": "HAVANA_COMMON",
            "PMjSP": "get",
            "ljLug": "SUCCESS"
        };
        try {
            let _0xb7d6e1 = _0x998b70.xTmzI;
            const _0x3c2923 = {
                "lng": this.longitude,
                "lat": this.latitude,
                "city": "440300"
            };
            let _0x2b5ef5 = {
                "bizScene": _0x998b70.YmMiU,
                "locationInfos": JSON.stringify([JSON.stringify(_0x3c2923)]),
                "actId": _0x998b70.lsZUP,
                "accountPlan": _0x998b70.aCoqr
            },
                _0x26370a = this.get_params(_0xb7d6e1, _0x2b5ef5);
            const _0x182deb = {
                "fn": "dailyAtmTaskinfo",
                "method": _0x998b70.PMjSP,
                "url": "https://mtop.ele.me/h5/" + _0xb7d6e1 + "/1.0",
                "searchParams": _0x26370a,
                "cookieJar": this.cookieJar
            };
            let {
                result: _0x5d72d9
            } = await this.request(_0x182deb),
                _0x240e3b = _0x5d72d9?.["ret"][0] || "";
            if (_0x240e3b.includes(_0x998b70.ljLug)) {
                let _0x2b818f = _0x5d72d9.data.data;
                this.cardNums = _0x2b818f.cardNums;
                this.multiple = _0x2b818f.multiple;
            } else {
                this.log("查询现金提款机出错: " + _0x240e3b);
            }
        } catch (_0x2e89a7) {
            $.log(_0x2e89a7);
        } finally {
            return Promise.resolve();
        }
    }
    async ["divide_chd_interact"]() {
        try {
            let _0x3b14c9 = "507426",
                _0x4e8207 = "mtop.alibaba.svip.langrisser.query";
            const _0x3da48d = {
                "channel": "",
                "foodiePeaBizType": "",
                "peasId": ""
            };
            const _0x50560c = {
                "data": _0x3da48d,
                "resId": _0x3b14c9
            };
            let _0x465f27 = {
                "callSource": "biz_hui_yuan",
                "lgrsRequestItems": JSON.stringify([_0x50560c]),
                "latitude": this.latitude,
                "longitude": this.longitude
            },
                _0x5c5ebe = this.get_params(_0x4e8207, _0x465f27);
            const _0x53c446 = {
                "fn": "divide_chd_interact",
                "method": "get",
                "url": "https://mtop.ele.me/h5/" + _0x4e8207 + "/1.0",
                "searchParams": _0x5c5ebe,
                "cookieJar": this.cookieJar
            };
            let {
                result: _0x3591c9
            } = await this.request(_0x53c446),
                _0x542784 = _0x3591c9?.["ret"][0] || "";
            if (_0x542784.includes("SUCCESS")) {
                let _0x5a20aa = _0x3591c9?.["data"]?.["data"][_0x3b14c9]?.["data"] || [];
                _0x5a20aa.length > 0 ? await this.collect_order_chd() : this.log("没有可领取的下单吃货豆奖励");
            } else {
                this.log("查询下单吃货豆奖励出错: " + _0x542784);
            }
        } catch (_0x592cc2) {
            $.log(_0x592cc2);
        } finally {
            return Promise.resolve();
        }
    }
    async ["collect_order_chd"]() {
        try {
            let _0x563d73 = "528646",
                _0x53a623 = "mtop.alibaba.svip.langrisser.query";
            const _0x246c84 = {
                "resId": _0x563d73,
                "latitude": this.latitude,
                "longitude": this.longitude
            };
            let _0x294c3f = this.get_params(_0x53a623, _0x246c84);
            const _0x2ab6a2 = {
                "fn": "collect_order_chd",
                "method": "get",
                "url": "https://mtop.ele.me/h5/" + _0x53a623 + "/1.0",
                "searchParams": _0x294c3f,
                "cookieJar": this.cookieJar
            };
            let {
                result: _0x418c75
            } = await this.request(_0x2ab6a2),
                _0x15fa08 = _0x418c75?.["ret"][0] || "";
            if (_0x15fa08.includes("SUCCESS")) {
                let _0xfb9973 = _0x418c75?.["data"]?.["extend"]?.["drawSuccessPeas"] || "";
                this.log("领取到下单奖励: " + (_0xfb9973 ? _0xfb9973 + "吃货豆" : "空气"));
            } else {
                this.log("领取下单吃货豆奖励出错: " + _0x15fa08);
            }
        } catch (_0x3af776) {
            $.log(_0x3af776);
        } finally {
            return Promise.resolve();
        }
    }
    ["add_to_task_list"](_0x3365cd, _0x52d00c) {
        let _0x54c21b = _0x52d00c.filter(_0x3b650f => _0x3b650f.missionDefId == _0x3365cd.missionDefId && _0x3b650f.missionCollectionId == _0x3365cd.missionCollectionId && _0x3b650f.missionType == _0x3365cd.missionType);
        _0x54c21b.length == 0 && _0x52d00c.push(_0x3365cd);
    }
    async ["get_chd_task_list"](_0x4ceef6, _0x5c1739) {
        const _0x42a9bd = {
            "ZyRcU": "TODO"
        };
        let _0x37b35f = await this.getChdTaskList(_0x4ceef6);
        for (let _0x39795a of _0x37b35f) {
            this.add_to_task_list(_0x39795a, this.task_list);
            let _0x3e833c = Object.assign({}, _0x39795a);
            _0x3e833c.rewardStatus = _0x42a9bd.ZyRcU;
            this.add_to_task_list(_0x3e833c, _0x5c1739);
        }
    }
    async ["userChdGetTask"]() {
        const _0x898c14 = {
            "hbVbx": "SIMPLESIGNIN",
            "sshKZ": "TODO",
            "uDIhM": "PAGEVIEW",
            "xsubS": "a2ogi.15063444"
        };
        let _0x56cee8 = _0x198267;
        for (let _0x443333 of _0x11260d) {
            await this.get_chd_task_list(_0x443333, _0x56cee8);
        }
        let _0x8b4b46 = [].concat(_0x39c9bc);
        for (let _0x26837d of _0x8b4b46.sort(function (_0xeb7f2, _0x3fe236) {
            return Math.random() - 0.5;
        })) {
            const _0x3a847c = {
                "missionDefId": _0x26837d.missionDefId,
                "missionCollectionId": _0x26837d.missionCollectionId,
                "missionType": _0x898c14.hbVbx,
                "rewardStatus": _0x898c14.sshKZ
            };
            this.add_to_task_list(_0x3a847c, _0x56cee8);
        }
        let _0x3844af = [].concat(_0x3283ce);
        for (let _0x471d92 of _0x3844af.sort(function (_0x4a831f, _0x4e1f59) {
            return Math.random() - 0.5;
        })) {
            const _0x11d381 = {
                "missionDefId": _0x471d92.missionDefId,
                "missionCollectionId": _0x471d92.missionCollectionId,
                "missionType": _0x898c14.uDIhM,
                "pageSpm": _0x471d92.pageFrom || _0x898c14.xsubS,
                "rewardStatus": _0x898c14.sshKZ
            };
            this.add_to_task_list(_0x11d381, _0x56cee8);
        }
    }
    async ["userChdDoTask"]() {
        for (let _0x405cd1 of _0x198267.sort(function () {
            return Math.random() - 0.5;
        })) {
            let _0x3ac27b = this.task_list.filter(_0x37f7ce => _0x37f7ce.missionDefId == _0x405cd1.missionDefId && _0x37f7ce.missionCollectionId == _0x405cd1.missionCollectionId && _0x37f7ce.missionType == _0x405cd1.missionType);
            _0x3ac27b.length > 0 ? _0x3ac27b[0].rewardStatus == "TODO" && (await this.doTask(_0x3ac27b[0])) : await this.doTask(_0x405cd1);
        }
    }
    async ["userTkjTask"]() {
        let _0x1f0764 = [].concat(_0xd48d11);
        for (let _0x57e430 of _0x1f0764.sort(function (_0x27866a, _0x3c1141) {
            return Math.random() - 0.5;
        })) {
            const _0x5b3470 = {
                "missionDefId": _0x57e430.missionDefId,
                "missionCollectionId": _0x57e430.missionCollectionId,
                "missionType": "SIMPLESIGNIN",
                "is_tkj_task": true
            };
            await this.doTask(_0x5b3470);
        }
        let _0x1177bd = [].concat(_0xd3d908);
        for (let _0x2dccfa of _0x1177bd.sort(function (_0x561f4b, _0x4b35fb) {
            return Math.random() - 0.5;
        })) {
            const _0x2816da = {
                "missionDefId": _0x2dccfa.missionDefId,
                "missionCollectionId": _0x2dccfa.missionCollectionId,
                "missionType": "PAGEVIEW",
                "pageSpm": _0x2dccfa.pageFrom || "a2ogi.15063444",
                "is_tkj_task": true
            };
            await this.pageview(_0x2816da);
        }
    }
    async ["userTkjWithdrawTask"]() {
        const _0x33aea6 = {
            "BVZtB": "receive",
            "mXAEP": "withdraw"
        };
        await this.userprize(_0x33aea6.BVZtB);
        await this.userprize(_0x33aea6.mXAEP);
    }
    async ["queryCashbackTasks"]() {
        try {
            const _0x4be609 = {
                "welfareCode": "cash_back-1"
            };
            const _0x55312e = {
                "fn": "queryCashbackTasks",
                "method": "get",
                "url": "https://httpizza.ele.me/ele-fin-promotion-activity/bonus/queryTasks",
                "searchParams": _0x4be609,
                "cookieJar": this.cookieJar,
                "headers": this.cashback_header
            };
            let {
                result: _0x182fb1
            } = await this.request(_0x55312e);
            if (_0x182fb1.code == "000") {
                let _0x5cc945 = true;
                for (let _0x4691e5 of _0x182fb1.data.filter(_0x1498fb => _0x1498fb.taskType == "view")) {
                    let _0x503f5a = _0x4691e5.status == "issue_success";
                    !_0x503f5a && (_0x5cc945 = false, await this.receiveAndFinishTask(_0x4691e5));
                }
                _0x5cc945 && this.log("所有笔笔返任务已完成");
            } else {
                let _0x4b0aa6 = _0x182fb1.msg || _0x182fb1.message;
                this.log("查询笔笔返任务列表失败: " + _0x4b0aa6);
            }
        } catch (_0x1c6963) {
            $.log(_0x1c6963);
        } finally {
            return Promise.resolve();
        }
    }
    async ["receiveAndFinishTask"](_0x1b3247) {
        try {
            let _0x30fecc = {
                "fn": "receiveAndFinishTask",
                "method": "post",
                "url": "https://httpizza.ele.me/ele-fin-promotion-activity/bonus/receiveAndFinishTask",
                "cookieJar": this.cookieJar,
                "headers": this.cashback_header,
                "json": {
                    "taskId": _0x1b3247.taskId.toString(),
                    "scene": "saving-pot",
                    "welfareCode": "cash_back-1"
                }
            },
                {
                    result: _0x6873a
                } = await this.request(_0x30fecc);
            if (_0x6873a.code == "000") {
                this.log("完成任务[" + _0x1b3247.taskName + "]获得" + _0x1b3247.bonusNum / 100 + "元");
            } else {
                let _0x21612d = _0x6873a.msg || _0x6873a.message;
                this.log("完成任务[" + _0x1b3247.taskName + "]失败: " + _0x21612d);
            }
        } catch (_0x9fd43) {
            $.log(_0x9fd43);
        } finally {
            return Promise.resolve();
        }
    }
    async ["queryCashbackBalance"]() {
        try {
            const _0x5dd2be = {
                "bizCode": "cashback"
            };
            const _0xf38e7e = {
                "fn": "queryCashbackBalance",
                "method": "get",
                "url": "https://httpizza.ele.me/ele-fin-promotion-activity/bonus/queryBalance",
                "searchParams": _0x5dd2be,
                "cookieJar": this.cookieJar,
                "headers": this.cashback_header
            };
            let {
                result: _0x31a285
            } = await this.request(_0xf38e7e);
            if (_0x31a285.code == "0000") {
                let _0x3b907c = _0x31a285.result;
                this.log("笔笔返余额: " + _0x31a285.result / 100 + "元");
                if (_0x3b907c > 0) {
                    await this.cashbackWithdraw(_0x3b907c);
                }
            } else {
                let _0x596609 = _0x31a285.msg || _0x31a285.message;
                this.log("查询笔笔返余额失败: " + _0x596609);
            }
        } catch (_0x1e15df) {
            $.log(_0x1e15df);
        } finally {
            return Promise.resolve();
        }
    }
    async ["cashbackWithdraw"](_0xa4366) {
        try {
            const _0x8e8f5b = {
                "fn": "cashbackWithdraw",
                "method": "post",
                "url": "https://httpizza.ele.me/ele-fin-promotion-activity/bonus/accountWithdrawal",
                "cookieJar": this.cookieJar,
                "headers": this.cashback_header,
                "json": {}
            };
            _0x8e8f5b.json.amount = _0xa4366;
            _0x8e8f5b.json.bizCode = "cashback";
            _0x8e8f5b.json.subSceneCode = "cash_back_wd";
            _0x8e8f5b.json.remark = "笔笔返零钱奖励提现";
            let {
                result: _0x5aefcd
            } = await this.request(_0x8e8f5b);
            if (_0x5aefcd.code == "0000") {
                this.log("笔笔返提现" + _0x5aefcd.result.amount / 100 + "元到钱包");
            } else {
                let _0x38deee = _0x5aefcd.msg || _0x5aefcd.message;
                this.log("笔笔返提现" + this.cashbackBalance / 100 + "元失败: " + _0x38deee);
            }
        } catch (_0x2fd44c) {
            $.log(_0x2fd44c);
        } finally {
            return Promise.resolve();
        }
    }
    async ["queryWalletBalance"]() {
        const _0x152862 = {
            "FpSAb": "queryWalletBalance",
            "jUqBg": "get"
        };
        try {
            const _0x85ede0 = {
                "fn": _0x152862.FpSAb,
                "method": _0x152862.jUqBg,
                "url": "https://wallet.ele.me/api/storedcard/queryBalance",
                "cookieJar": this.cookieJar
            };
            let {
                result: _0x3b7ca5
            } = await this.request(_0x85ede0);
            _0x3b7ca5.code == "000" ? this.walletMoney = _0x3b7ca5.data.otherAccount.availableAmount : this.log("查询钱包余额失败");
        } catch (_0x29f62c) {
            $.log(_0x29f62c);
        } finally {
            return Promise.resolve();
        }
    }
    async ["get_x5check_ele"]() {
        const _0x40c72d = {
            "FaBIZ": "get_x5check_ele",
            "JcLSd": "get",
            "zXyQM": "0.0.4"
        };
        try {
            const _0x2bfe33 = {
                "fn": _0x40c72d.FaBIZ,
                "method": _0x40c72d.JcLSd,
                "url": "https://restapi.ele.me/member/v2/users/1613668433/location",
                "searchParams": {},
                "cookieJar": this.cookieJar
            };
            _0x2bfe33.searchParams["_bx-m"] = _0x40c72d.zXyQM;
            _0x2bfe33.searchParams.longitude = this.longitude;
            _0x2bfe33.searchParams.latitude = this.latitude;
            await this.request(_0x2bfe33);
        } catch (_0x43310c) {
            $.log(_0x43310c);
        } finally {
            return Promise.resolve();
        }
    }
    async ["grabCouponReq"]() {
        try {
            const _0x4bc3e0 = {
                "costFoodiePea": 1000
            };
            const _0x394f66 = {
                "tagCode": "43002",
                "supplyInst": "43002|178006",
                "extra": _0x4bc3e0
            };
            let _0x59caa7 = {
                "fn": "grabCouponReq",
                "method": "get",
                "url": "https://h5.ele.me/restapi/biz.svip_scene/svip/engine/xSupply",
                "cookieJar": this.cookieJar,
                "searchParams": {
                    "params[]": JSON.stringify(_0x394f66),
                    "bizCode": "biz_code_main",
                    "longitude": this.longitude,
                    "latitude": this.latitude
                }
            },
                {
                    result: _0x25c6a7
                } = await this.request(_0x59caa7);
            if (_0x25c6a7.code == 200) {
                for (let _0x22a3b3 of _0x25c6a7?.["data"] || []) {
                    if (_0x22a3b3.xstatus == 1) {
                        if (_0x22a3b3.attribute.msgCode == 0) {
                            const _0xb89f96 = {
                                "time": true,
                                "notify": true
                            };
                            this.log("抢到了无门槛减10券", _0xb89f96);
                        } else {
                            const _0x1458a2 = {
                                "time": true
                            };
                            this.log("抢券失败: " + _0x22a3b3.xmessage, _0x1458a2);
                        }
                    } else {
                        const _0x1b87c1 = {
                            "time": true
                        };
                        this.log("抢券失败: " + _0x22a3b3.xmessage, _0x1b87c1);
                    }
                }
            } else {
                let _0x167897 = _0x25c6a7.message ? _0x25c6a7.message : _0x25c6a7.ret ? _0x25c6a7.ret.join(",") : "";
                const _0x5678c7 = {
                    "time": true
                };
                this.log("抢券失败: " + _0x167897, _0x5678c7);
            }
        } catch (_0x5702bb) {
            $.log(_0x5702bb);
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
        let _0x3a668f = "============= 账号[" + this.index + "] =============\n";
        if (this.name) {
            _0x3a668f += "手机：" + this.name + "\n";
        }
        if (this.expireTime) {
            _0x3a668f += "CK过期时间: " + this.expireTime + "\n";
        }
        if (this.walletMoney) {
            _0x3a668f += "钱包余额：" + this.walletMoney / 100 + "元\n";
        }
        if (this.cardNums !== undefined) {
            _0x3a668f += "提款卡：" + (this.cardNums || 0) + "张，明天可以瓜分" + (this.multiple || 0) + "倍\n";
        }
        if (this.pea) {
            _0x3a668f += "吃货豆：" + this.pea + "\n";
        }
        if (this.todayBean) {
            _0x3a668f += "今日吃货豆收入：" + this.todayBean + "吃货豆\n";
        }
        if (this.monthAccountInfo) {
            _0x3a668f += "月收入：\n";
            for (let _0x4b6346 in this.monthAccountInfo) {
                let _0x487425 = this.monthAccountInfo[_0x4b6346];
                _0x3a668f += "-- " + _0x4b6346 + "，收入" + _0x487425.plusCount + "豆" + (_0x487425.useCount ? "，支出" + _0x487425.useCount + "豆" : "") + (_0x487425.expireCount ? "，月底将过期" + _0x487425.expireCount + "豆" : "") + "\n";
            }
        }
        const _0x160434 = {
            "notify": true
        };
        $.log(_0x3a668f, _0x160434);
    }
}
!(async () => {
    $.log("最大并发数: " + MAX_THREAD);
    $.log("抢券时间: " + _0x20c5ce);
    $.log("");
    if (!(await _0x13dbad())) {
        return;
    }
    await _0x5490cd();
    $.read_env(_0x5d3aa8);
    $.log("\n-------------- 刷新CK --------------");
    await $.threadTask("refresh_ck", MAX_THREAD);
    let _0x30b0d4 = $.userList.filter(_0x31578a => _0x31578a.valid);
    if (_0x30b0d4.length == 0) {
        return;
    }
    $.log("\n-------------- 查询账号 --------------");
    await $.threadTask("init_check", MAX_THREAD);
    $.log("\n-------------- 领红包 --------------");
    await $.threadTask("supportor", MAX_THREAD);
    $.log("\n-------------- 抢券 --------------");
    await _0x406c56();
    $.log("\n-------------- 领取下单奖励 --------------");
    await $.threadTask("divide_chd_interact", MAX_THREAD);
    $.log("\n-------------- 吃货豆签到 --------------");
    await $.threadTask("getSignList", MAX_THREAD);
    $.log("\n-------------- 吃货豆任务 --------------");
    await $.threadTask("userChdGetTask", MAX_THREAD);
    await $.threadTask("userChdDoTask", MAX_THREAD);
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
})().catch(_0x181eae => $.log(_0x181eae)).finally(() => $.exitNow());
async function _0x406c56() {
    let _0x5b44f6 = $.userList.filter(_0x1cdf96 => _0x1cdf96.valid && (_0x1cdf96.grabCoupon || _0x1cdf96.grabCouponFlagEnv));
    if (_0x5b44f6.length) {
        for (let _0x57482c of _0x5b44f6) {
            _0x57482c.pea < 1000 ? _0x57482c.log("吃货豆不足1000，无法抢券") : _0x57482c.log("准备抢券");
        }
        let _0x5360e2 = _0x5b44f6.filter(_0x17d30c => _0x17d30c.pea >= 1000);
        if (_0x5360e2.length) {
            $.log("抢券时间配置为: " + _0x20c5ce);
            let _0x127264 = new Date(),
                _0x2a6e95 = _0x127264.getFullYear(),
                _0x1889bb = _0x127264.getMonth(),
                _0x1d8409 = _0x127264.getDate(),
                _0x1e4f83 = _0x20c5ce.split(":"),
                _0x3c4381 = parseInt(_0x1e4f83[0]),
                _0x2f4bad = parseInt(_0x1e4f83[1]),
                _0x25af74 = parseInt(_0x1e4f83[2] || 0),
                _0x59e38d = parseInt(_0x1e4f83[3] || 0);
            if (!(_0x3c4381 >= 0 && _0x3c4381 < 24 && _0x2f4bad >= 0 && _0x2f4bad < 60 && _0x25af74 >= 0 && _0x25af74 < 60 && _0x59e38d >= 0 && _0x59e38d < 1000)) {
                $.log("设置的抢券时间格式数字有误: " + _0x20c5ce + "，将改用默认的抢券时间：" + _0x180779);
                _0x1e4f83 = _0x180779.split(":");
                _0x3c4381 = parseInt(_0x1e4f83[0]);
                _0x2f4bad = parseInt(_0x1e4f83[1]);
                _0x25af74 = parseInt(_0x1e4f83[2]);
                _0x59e38d = parseInt(_0x1e4f83[3]);
            }
            let _0x1d1f1c = new Date(_0x2a6e95, _0x1889bb, _0x1d8409, _0x3c4381, _0x2f4bad, _0x25af74, _0x59e38d).getTime(),
                _0x19545c = new Date(_0x2a6e95, _0x1889bb, _0x1d8409, _0x527141[0], _0x527141[1], _0x527141[2], _0x527141[3]).getTime(),
                _0x575138 = Date.now(),
                _0x3c2f43 = _0x1d1f1c - _0x575138;
            if (_0x3c2f43 <= 0) {
                $.log("已到抢券时间，不等待");
            } else {
                if (_0x3c2f43 > _0x283667 * 60 * 1000) {
                    $.log("离抢券时间大于" + _0x283667 + "分钟，不等待");
                } else {
                    $.log("离抢券时间还有" + Math.ceil(_0x3c2f43 / 1000) + "秒，开始等待...");
                    while (_0x575138 < _0x1d1f1c) {
                        _0x3c2f43 = _0x1d1f1c - _0x575138;
                        let _0x584fff = $.getMin(_0x3c2f43, _0xa79336);
                        await $.wait(_0x584fff);
                        _0x575138 = Date.now();
                    }
                }
            }
            $.log("\n现在时间[" + $.time("hh:mm:ss.S") + "]，开始抢券");
            taskall = [];
            for (let _0x5900ed = 0; _0x5900ed < _0x47a9cc; _0x5900ed++) {
                for (let _0x47917d of _0x5360e2) {
                    taskall.push(_0x47917d.grabCouponReq());
                }
                _0x575138 = Date.now();
                if (_0x575138 >= _0x19545c) {
                    break;
                } else {
                    await $.wait(_0xc8bf7b);
                }
            }
            await Promise.all(taskall);
        } else {
            $.log("没有可以抢券的账号");
        }
    } else {
        $.log("没有配置要抢券的账号\n需要抢券的账号请在对应CK后面加上 grabCoupon=1;\n或在变量ELM_GrabCoupon里面对应账号位置填上1(&隔开)");
    }
}
async function _0x13dbad() {
    let _0x29c1f0 = false;
    try {
        const _0x52c4e2 = {
            "fn": "auth",
            "method": "get",
            "url": _0x2f2e4c
        };
        let {
            statusCode: _0x594582,
            result: _0x3afa05
        } = await _0x2d650d.request(_0x52c4e2);
        if (_0x594582 != 200) {
            return Promise.resolve();
        }
        if (_0x3afa05?.["code"] == 0) {
            _0x3afa05 = JSON.parse(_0x3afa05.data.file.data);
            if (_0x3afa05?.["commonNotify"] && _0x3afa05.commonNotify.length > 0) {
                const _0x32956d = {
                    "notify": true
                };
                $.log(_0x3afa05.commonNotify.join("\n") + "\n", _0x32956d);
            }
            //_0x3afa05?.["commonMsg"] && _0x3afa05.commonMsg.length > 0 && $.log(_0x3afa05.commonMsg.join("\n") + "\n");
            if (_0x3afa05[_0x229345]) {
                let _0x246f76 = _0x3afa05[_0x229345];
                _0x246f76.status == 0 ? _0x5c1a93 >= _0x246f76.version ? (_0x29c1f0 = true,$.log(_0x246f76.msg[_0x246f76.status]), $.log(_0x246f76.updateMsg), $.log("现在运行的脚本版本是：" + _0x5c1a93 + "，最新脚本版本：" + _0x246f76.latestVersion)) : $.log(_0x246f76.versionMsg) : $.log(_0x246f76.msg[_0x246f76.status]);
            } else {
                $.log(_0x3afa05.errorMsg);
            }
        }
    } catch (_0x3b192d) {
        $.log(_0x3b192d);
    } finally {
        return Promise.resolve(_0x29c1f0);
    }
}
async function _0x5490cd() {
    let _0xcb9c21 = false;
    try {
        const _0x1d60cf = {
            "fn": "auth",
            "method": "get",
            "url": _0xaf016e
        };
        let {
            statusCode: _0xe00359,
            result: _0x5e5dcd
        } = await _0x2d650d.request(_0x1d60cf);
        if (_0xe00359 != 200) {
            return Promise.resolve();
        }
        if (_0x5e5dcd?.["code"] == 0) {
            _0x5e5dcd = JSON.parse(_0x5e5dcd.data.file.data);
            _0x48cd52 = _0x5e5dcd?.["ownerId"] || _0x48cd52;
            _0x3cf3b6 = _0x5e5dcd?.["share_app"] || _0x3cf3b6;
            for (let _0x4f7c25 of _0x5e5dcd.chdTask.simple) {
                !_0x39c9bc.filter(_0x3a663d => _0x3a663d.missionDefId == _0x4f7c25.missionDefId && _0x3a663d.missionCollectionId == _0x4f7c25.missionCollectionId).length && _0x39c9bc.push(_0x4f7c25);
            }
            for (let _0x89c4be of _0x5e5dcd.chdTask.pageview) {
                !_0x3283ce.filter(_0x4d5776 => _0x4d5776.missionDefId == _0x89c4be.missionDefId && _0x4d5776.missionCollectionId == _0x89c4be.missionCollectionId).length && _0x3283ce.push(_0x89c4be);
            }
            for (let _0x288605 of _0x5e5dcd.tkjTask.simple) {
                !_0xd48d11.filter(_0x2b069a => _0x2b069a.missionDefId == _0x288605.missionDefId && _0x2b069a.missionCollectionId == _0x288605.missionCollectionId).length && _0xd48d11.push(_0x288605);
            }
            for (let _0x7c2d87 of _0x5e5dcd.tkjTask.pageview) {
                !_0xd3d908.filter(_0x5eb6bc => _0x5eb6bc.missionDefId == _0x7c2d87.missionDefId && _0x5eb6bc.missionCollectionId == _0x7c2d87.missionCollectionId).length && _0xd3d908.push(_0x7c2d87);
            }
        }
    } catch (_0x3e5941) {
        $.log(_0x3e5941);
    } finally {
        return Promise.resolve(_0xcb9c21);
    }
}

function _0xce197e(_0x516975) {
    function _0x2db725(_0x123e97, _0x486108) {
        return _0x123e97 << _0x486108 | _0x123e97 >>> 32 - _0x486108;
    }
    function _0x460dc1(_0x49ec00, _0x189e48) {
        var _0x1dc304, _0x7433ce, _0x1ba7d5, _0x5045f9, _0x13c5d2;
        _0x1ba7d5 = 2147483648 & _0x49ec00;
        _0x5045f9 = 2147483648 & _0x189e48;
        _0x1dc304 = 1073741824 & _0x49ec00;
        _0x7433ce = 1073741824 & _0x189e48;
        _0x13c5d2 = (1073741823 & _0x49ec00) + (1073741823 & _0x189e48);
        return _0x1dc304 & _0x7433ce ? 2147483648 ^ _0x13c5d2 ^ _0x1ba7d5 ^ _0x5045f9 : _0x1dc304 | _0x7433ce ? 1073741824 & _0x13c5d2 ? 3221225472 ^ _0x13c5d2 ^ _0x1ba7d5 ^ _0x5045f9 : 1073741824 ^ _0x13c5d2 ^ _0x1ba7d5 ^ _0x5045f9 : _0x13c5d2 ^ _0x1ba7d5 ^ _0x5045f9;
    }
    function _0x425d8d(_0x18feb3, _0x43f537, _0x122e6d) {
        return _0x18feb3 & _0x43f537 | ~_0x18feb3 & _0x122e6d;
    }
    function _0x526589(_0x11d28d, _0x25437f, _0x3a3af3) {
        return _0x11d28d & _0x3a3af3 | _0x25437f & ~_0x3a3af3;
    }
    function _0x39a4a2(_0x49b7f2, _0x48b817, _0x54e441) {
        return _0x49b7f2 ^ _0x48b817 ^ _0x54e441;
    }
    function _0x53fae9(_0x5ca1c7, _0x54eee6, _0x1dfffd) {
        return _0x54eee6 ^ (_0x5ca1c7 | ~_0x1dfffd);
    }
    function _0x4d049e(_0x5b0ae1, _0x1a1156, _0x574db1, _0x109e7e, _0x5710f0, _0x36fe21, _0x465df6) {
        _0x5b0ae1 = _0x460dc1(_0x5b0ae1, _0x460dc1(_0x460dc1(_0x425d8d(_0x1a1156, _0x574db1, _0x109e7e), _0x5710f0), _0x465df6));
        return _0x460dc1(_0x2db725(_0x5b0ae1, _0x36fe21), _0x1a1156);
    }
    function _0x293f58(_0x460c4a, _0x3684d0, _0x15b08a, _0x500916, _0x25204e, _0x255140, _0x2654a5) {
        _0x460c4a = _0x460dc1(_0x460c4a, _0x460dc1(_0x460dc1(_0x526589(_0x3684d0, _0x15b08a, _0x500916), _0x25204e), _0x2654a5));
        return _0x460dc1(_0x2db725(_0x460c4a, _0x255140), _0x3684d0);
    }
    function _0xce4294(_0x54403c, _0x162166, _0x2dc488, _0x156040, _0x583e06, _0x38b21c, _0x32388b) {
        _0x54403c = _0x460dc1(_0x54403c, _0x460dc1(_0x460dc1(_0x39a4a2(_0x162166, _0x2dc488, _0x156040), _0x583e06), _0x32388b));
        return _0x460dc1(_0x2db725(_0x54403c, _0x38b21c), _0x162166);
    }
    function _0x43f73b(_0x77320e, _0x53e72e, _0x1503fb, _0x182f59, _0x59e5fa, _0x5e7c18, _0xf4d6f) {
        _0x77320e = _0x460dc1(_0x77320e, _0x460dc1(_0x460dc1(_0x53fae9(_0x53e72e, _0x1503fb, _0x182f59), _0x59e5fa), _0xf4d6f));
        return _0x460dc1(_0x2db725(_0x77320e, _0x5e7c18), _0x53e72e);
    }
    function _0x148694(_0x2defd0) {
        for (var _0x7a2279, _0x385363 = _0x2defd0.length, _0x4924fe = _0x385363 + 8, _0x25ad16 = (_0x4924fe - _0x4924fe % 64) / 64, _0x40781a = 16 * (_0x25ad16 + 1), _0x42d34a = new Array(_0x40781a - 1), _0x3098d7 = 0, _0x197e70 = 0; _0x385363 > _0x197e70;) {
            _0x7a2279 = (_0x197e70 - _0x197e70 % 4) / 4;
            _0x3098d7 = _0x197e70 % 4 * 8;
            _0x42d34a[_0x7a2279] = _0x42d34a[_0x7a2279] | _0x2defd0.charCodeAt(_0x197e70) << _0x3098d7;
            _0x197e70++;
        }
        _0x7a2279 = (_0x197e70 - _0x197e70 % 4) / 4;
        _0x3098d7 = _0x197e70 % 4 * 8;
        _0x42d34a[_0x7a2279] = _0x42d34a[_0x7a2279] | 128 << _0x3098d7;
        _0x42d34a[_0x40781a - 2] = _0x385363 << 3;
        _0x42d34a[_0x40781a - 1] = _0x385363 >>> 29;
        return _0x42d34a;
    }
    function _0x5d01aa(_0xb92ba0) {
        var _0x56b44f,
            _0x4d2a3d,
            _0x19b675 = "",
            _0x551ee4 = "";
        for (_0x4d2a3d = 0; 3 >= _0x4d2a3d; _0x4d2a3d++) {
            _0x56b44f = _0xb92ba0 >>> 8 * _0x4d2a3d & 255;
            _0x551ee4 = "0" + _0x56b44f.toString(16);
            _0x19b675 += _0x551ee4.substr(_0x551ee4.length - 2, 2);
        }
        return _0x19b675;
    }
    function _0x6f406a(_0x1d0b9e) {
        _0x1d0b9e = _0x1d0b9e.replace(/\r\n/g, "\n");
        for (var _0x545048 = "", _0x364e02 = 0; _0x364e02 < _0x1d0b9e.length; _0x364e02++) {
            var _0x4a8c59 = _0x1d0b9e.charCodeAt(_0x364e02);
            128 > _0x4a8c59 ? _0x545048 += String.fromCharCode(_0x4a8c59) : _0x4a8c59 > 127 && 2048 > _0x4a8c59 ? (_0x545048 += String.fromCharCode(_0x4a8c59 >> 6 | 192), _0x545048 += String.fromCharCode(63 & _0x4a8c59 | 128)) : (_0x545048 += String.fromCharCode(_0x4a8c59 >> 12 | 224), _0x545048 += String.fromCharCode(_0x4a8c59 >> 6 & 63 | 128), _0x545048 += String.fromCharCode(63 & _0x4a8c59 | 128));
        }
        return _0x545048;
    }
    var _0x31003f,
        _0x1c27b0,
        _0x461c56,
        _0x18a0ef,
        _0x30e9cb,
        _0x8bf4b7,
        _0x142cab,
        _0x247e42,
        _0xb8d13e,
        _0x2f0602 = [],
        _0x595216 = 7,
        _0x3a2bde = 12,
        _0x3a1f32 = 17,
        _0x133367 = 22,
        _0x375891 = 5,
        _0x3652b1 = 9,
        _0x190fa5 = 14,
        _0x5763c6 = 20,
        _0x42d65b = 4,
        _0x2cd628 = 11,
        _0xd57406 = 16,
        _0x117ed0 = 23,
        _0x526550 = 6,
        _0x171230 = 10,
        _0x4a956f = 15,
        _0x423310 = 21;
    for (_0x516975 = _0x6f406a(_0x516975), _0x2f0602 = _0x148694(_0x516975), _0x8bf4b7 = 1732584193, _0x142cab = 4023233417, _0x247e42 = 2562383102, _0xb8d13e = 271733878, _0x31003f = 0; _0x31003f < _0x2f0602.length; _0x31003f += 16) {
        _0x1c27b0 = _0x8bf4b7;
        _0x461c56 = _0x142cab;
        _0x18a0ef = _0x247e42;
        _0x30e9cb = _0xb8d13e;
        _0x8bf4b7 = _0x4d049e(_0x8bf4b7, _0x142cab, _0x247e42, _0xb8d13e, _0x2f0602[_0x31003f + 0], _0x595216, 3614090360);
        _0xb8d13e = _0x4d049e(_0xb8d13e, _0x8bf4b7, _0x142cab, _0x247e42, _0x2f0602[_0x31003f + 1], _0x3a2bde, 3905402710);
        _0x247e42 = _0x4d049e(_0x247e42, _0xb8d13e, _0x8bf4b7, _0x142cab, _0x2f0602[_0x31003f + 2], _0x3a1f32, 606105819);
        _0x142cab = _0x4d049e(_0x142cab, _0x247e42, _0xb8d13e, _0x8bf4b7, _0x2f0602[_0x31003f + 3], _0x133367, 3250441966);
        _0x8bf4b7 = _0x4d049e(_0x8bf4b7, _0x142cab, _0x247e42, _0xb8d13e, _0x2f0602[_0x31003f + 4], _0x595216, 4118548399);
        _0xb8d13e = _0x4d049e(_0xb8d13e, _0x8bf4b7, _0x142cab, _0x247e42, _0x2f0602[_0x31003f + 5], _0x3a2bde, 1200080426);
        _0x247e42 = _0x4d049e(_0x247e42, _0xb8d13e, _0x8bf4b7, _0x142cab, _0x2f0602[_0x31003f + 6], _0x3a1f32, 2821735955);
        _0x142cab = _0x4d049e(_0x142cab, _0x247e42, _0xb8d13e, _0x8bf4b7, _0x2f0602[_0x31003f + 7], _0x133367, 4249261313);
        _0x8bf4b7 = _0x4d049e(_0x8bf4b7, _0x142cab, _0x247e42, _0xb8d13e, _0x2f0602[_0x31003f + 8], _0x595216, 1770035416);
        _0xb8d13e = _0x4d049e(_0xb8d13e, _0x8bf4b7, _0x142cab, _0x247e42, _0x2f0602[_0x31003f + 9], _0x3a2bde, 2336552879);
        _0x247e42 = _0x4d049e(_0x247e42, _0xb8d13e, _0x8bf4b7, _0x142cab, _0x2f0602[_0x31003f + 10], _0x3a1f32, 4294925233);
        _0x142cab = _0x4d049e(_0x142cab, _0x247e42, _0xb8d13e, _0x8bf4b7, _0x2f0602[_0x31003f + 11], _0x133367, 2304563134);
        _0x8bf4b7 = _0x4d049e(_0x8bf4b7, _0x142cab, _0x247e42, _0xb8d13e, _0x2f0602[_0x31003f + 12], _0x595216, 1804603682);
        _0xb8d13e = _0x4d049e(_0xb8d13e, _0x8bf4b7, _0x142cab, _0x247e42, _0x2f0602[_0x31003f + 13], _0x3a2bde, 4254626195);
        _0x247e42 = _0x4d049e(_0x247e42, _0xb8d13e, _0x8bf4b7, _0x142cab, _0x2f0602[_0x31003f + 14], _0x3a1f32, 2792965006);
        _0x142cab = _0x4d049e(_0x142cab, _0x247e42, _0xb8d13e, _0x8bf4b7, _0x2f0602[_0x31003f + 15], _0x133367, 1236535329);
        _0x8bf4b7 = _0x293f58(_0x8bf4b7, _0x142cab, _0x247e42, _0xb8d13e, _0x2f0602[_0x31003f + 1], _0x375891, 4129170786);
        _0xb8d13e = _0x293f58(_0xb8d13e, _0x8bf4b7, _0x142cab, _0x247e42, _0x2f0602[_0x31003f + 6], _0x3652b1, 3225465664);
        _0x247e42 = _0x293f58(_0x247e42, _0xb8d13e, _0x8bf4b7, _0x142cab, _0x2f0602[_0x31003f + 11], _0x190fa5, 643717713);
        _0x142cab = _0x293f58(_0x142cab, _0x247e42, _0xb8d13e, _0x8bf4b7, _0x2f0602[_0x31003f + 0], _0x5763c6, 3921069994);
        _0x8bf4b7 = _0x293f58(_0x8bf4b7, _0x142cab, _0x247e42, _0xb8d13e, _0x2f0602[_0x31003f + 5], _0x375891, 3593408605);
        _0xb8d13e = _0x293f58(_0xb8d13e, _0x8bf4b7, _0x142cab, _0x247e42, _0x2f0602[_0x31003f + 10], _0x3652b1, 38016083);
        _0x247e42 = _0x293f58(_0x247e42, _0xb8d13e, _0x8bf4b7, _0x142cab, _0x2f0602[_0x31003f + 15], _0x190fa5, 3634488961);
        _0x142cab = _0x293f58(_0x142cab, _0x247e42, _0xb8d13e, _0x8bf4b7, _0x2f0602[_0x31003f + 4], _0x5763c6, 3889429448);
        _0x8bf4b7 = _0x293f58(_0x8bf4b7, _0x142cab, _0x247e42, _0xb8d13e, _0x2f0602[_0x31003f + 9], _0x375891, 568446438);
        _0xb8d13e = _0x293f58(_0xb8d13e, _0x8bf4b7, _0x142cab, _0x247e42, _0x2f0602[_0x31003f + 14], _0x3652b1, 3275163606);
        _0x247e42 = _0x293f58(_0x247e42, _0xb8d13e, _0x8bf4b7, _0x142cab, _0x2f0602[_0x31003f + 3], _0x190fa5, 4107603335);
        _0x142cab = _0x293f58(_0x142cab, _0x247e42, _0xb8d13e, _0x8bf4b7, _0x2f0602[_0x31003f + 8], _0x5763c6, 1163531501);
        _0x8bf4b7 = _0x293f58(_0x8bf4b7, _0x142cab, _0x247e42, _0xb8d13e, _0x2f0602[_0x31003f + 13], _0x375891, 2850285829);
        _0xb8d13e = _0x293f58(_0xb8d13e, _0x8bf4b7, _0x142cab, _0x247e42, _0x2f0602[_0x31003f + 2], _0x3652b1, 4243563512);
        _0x247e42 = _0x293f58(_0x247e42, _0xb8d13e, _0x8bf4b7, _0x142cab, _0x2f0602[_0x31003f + 7], _0x190fa5, 1735328473);
        _0x142cab = _0x293f58(_0x142cab, _0x247e42, _0xb8d13e, _0x8bf4b7, _0x2f0602[_0x31003f + 12], _0x5763c6, 2368359562);
        _0x8bf4b7 = _0xce4294(_0x8bf4b7, _0x142cab, _0x247e42, _0xb8d13e, _0x2f0602[_0x31003f + 5], _0x42d65b, 4294588738);
        _0xb8d13e = _0xce4294(_0xb8d13e, _0x8bf4b7, _0x142cab, _0x247e42, _0x2f0602[_0x31003f + 8], _0x2cd628, 2272392833);
        _0x247e42 = _0xce4294(_0x247e42, _0xb8d13e, _0x8bf4b7, _0x142cab, _0x2f0602[_0x31003f + 11], _0xd57406, 1839030562);
        _0x142cab = _0xce4294(_0x142cab, _0x247e42, _0xb8d13e, _0x8bf4b7, _0x2f0602[_0x31003f + 14], _0x117ed0, 4259657740);
        _0x8bf4b7 = _0xce4294(_0x8bf4b7, _0x142cab, _0x247e42, _0xb8d13e, _0x2f0602[_0x31003f + 1], _0x42d65b, 2763975236);
        _0xb8d13e = _0xce4294(_0xb8d13e, _0x8bf4b7, _0x142cab, _0x247e42, _0x2f0602[_0x31003f + 4], _0x2cd628, 1272893353);
        _0x247e42 = _0xce4294(_0x247e42, _0xb8d13e, _0x8bf4b7, _0x142cab, _0x2f0602[_0x31003f + 7], _0xd57406, 4139469664);
        _0x142cab = _0xce4294(_0x142cab, _0x247e42, _0xb8d13e, _0x8bf4b7, _0x2f0602[_0x31003f + 10], _0x117ed0, 3200236656);
        _0x8bf4b7 = _0xce4294(_0x8bf4b7, _0x142cab, _0x247e42, _0xb8d13e, _0x2f0602[_0x31003f + 13], _0x42d65b, 681279174);
        _0xb8d13e = _0xce4294(_0xb8d13e, _0x8bf4b7, _0x142cab, _0x247e42, _0x2f0602[_0x31003f + 0], _0x2cd628, 3936430074);
        _0x247e42 = _0xce4294(_0x247e42, _0xb8d13e, _0x8bf4b7, _0x142cab, _0x2f0602[_0x31003f + 3], _0xd57406, 3572445317);
        _0x142cab = _0xce4294(_0x142cab, _0x247e42, _0xb8d13e, _0x8bf4b7, _0x2f0602[_0x31003f + 6], _0x117ed0, 76029189);
        _0x8bf4b7 = _0xce4294(_0x8bf4b7, _0x142cab, _0x247e42, _0xb8d13e, _0x2f0602[_0x31003f + 9], _0x42d65b, 3654602809);
        _0xb8d13e = _0xce4294(_0xb8d13e, _0x8bf4b7, _0x142cab, _0x247e42, _0x2f0602[_0x31003f + 12], _0x2cd628, 3873151461);
        _0x247e42 = _0xce4294(_0x247e42, _0xb8d13e, _0x8bf4b7, _0x142cab, _0x2f0602[_0x31003f + 15], _0xd57406, 530742520);
        _0x142cab = _0xce4294(_0x142cab, _0x247e42, _0xb8d13e, _0x8bf4b7, _0x2f0602[_0x31003f + 2], _0x117ed0, 3299628645);
        _0x8bf4b7 = _0x43f73b(_0x8bf4b7, _0x142cab, _0x247e42, _0xb8d13e, _0x2f0602[_0x31003f + 0], _0x526550, 4096336452);
        _0xb8d13e = _0x43f73b(_0xb8d13e, _0x8bf4b7, _0x142cab, _0x247e42, _0x2f0602[_0x31003f + 7], _0x171230, 1126891415);
        _0x247e42 = _0x43f73b(_0x247e42, _0xb8d13e, _0x8bf4b7, _0x142cab, _0x2f0602[_0x31003f + 14], _0x4a956f, 2878612391);
        _0x142cab = _0x43f73b(_0x142cab, _0x247e42, _0xb8d13e, _0x8bf4b7, _0x2f0602[_0x31003f + 5], _0x423310, 4237533241);
        _0x8bf4b7 = _0x43f73b(_0x8bf4b7, _0x142cab, _0x247e42, _0xb8d13e, _0x2f0602[_0x31003f + 12], _0x526550, 1700485571);
        _0xb8d13e = _0x43f73b(_0xb8d13e, _0x8bf4b7, _0x142cab, _0x247e42, _0x2f0602[_0x31003f + 3], _0x171230, 2399980690);
        _0x247e42 = _0x43f73b(_0x247e42, _0xb8d13e, _0x8bf4b7, _0x142cab, _0x2f0602[_0x31003f + 10], _0x4a956f, 4293915773);
        _0x142cab = _0x43f73b(_0x142cab, _0x247e42, _0xb8d13e, _0x8bf4b7, _0x2f0602[_0x31003f + 1], _0x423310, 2240044497);
        _0x8bf4b7 = _0x43f73b(_0x8bf4b7, _0x142cab, _0x247e42, _0xb8d13e, _0x2f0602[_0x31003f + 8], _0x526550, 1873313359);
        _0xb8d13e = _0x43f73b(_0xb8d13e, _0x8bf4b7, _0x142cab, _0x247e42, _0x2f0602[_0x31003f + 15], _0x171230, 4264355552);
        _0x247e42 = _0x43f73b(_0x247e42, _0xb8d13e, _0x8bf4b7, _0x142cab, _0x2f0602[_0x31003f + 6], _0x4a956f, 2734768916);
        _0x142cab = _0x43f73b(_0x142cab, _0x247e42, _0xb8d13e, _0x8bf4b7, _0x2f0602[_0x31003f + 13], _0x423310, 1309151649);
        _0x8bf4b7 = _0x43f73b(_0x8bf4b7, _0x142cab, _0x247e42, _0xb8d13e, _0x2f0602[_0x31003f + 4], _0x526550, 4149444226);
        _0xb8d13e = _0x43f73b(_0xb8d13e, _0x8bf4b7, _0x142cab, _0x247e42, _0x2f0602[_0x31003f + 11], _0x171230, 3174756917);
        _0x247e42 = _0x43f73b(_0x247e42, _0xb8d13e, _0x8bf4b7, _0x142cab, _0x2f0602[_0x31003f + 2], _0x4a956f, 718787259);
        _0x142cab = _0x43f73b(_0x142cab, _0x247e42, _0xb8d13e, _0x8bf4b7, _0x2f0602[_0x31003f + 9], _0x423310, 3951481745);
        _0x8bf4b7 = _0x460dc1(_0x8bf4b7, _0x1c27b0);
        _0x142cab = _0x460dc1(_0x142cab, _0x461c56);
        _0x247e42 = _0x460dc1(_0x247e42, _0x18a0ef);
        _0xb8d13e = _0x460dc1(_0xb8d13e, _0x30e9cb);
    }
    var _0x236383 = _0x5d01aa(_0x8bf4b7) + _0x5d01aa(_0x142cab) + _0x5d01aa(_0x247e42) + _0x5d01aa(_0xb8d13e);
    return _0x236383.toLowerCase();
}

function Env(name) {
    return new class {
        constructor(name) {
            this.name = name;
            this.startTime = Date.now();
            this.log(`[${this.name}]开始运行\n`, {time: true});
            this.notifyStr = [];
            this.notifyFlag = true;
            this.userIdx = 0;
            this.userList = [];
            this.userCount = 0;
        }
        log(msg, options = {}) {
            let opt = {console: true};
            Object.assign(opt, options);
            if (opt.time) {
                let fmt = opt.fmt || 'hh:mm:ss';
                msg = `[${this.time(fmt)}]` + msg;
            }
            if (opt.notify) this.notifyStr.push(msg);
            if (opt.console) console.log(msg);
        }
        read_env(Class) {
            let envStrList = ckNames.map(x => process.env[x]);
            for (let env_str of envStrList.filter(x => !!x)) {
                let sp = envSplitor.filter(x => env_str.includes(x));
                let splitor = sp.length > 0 ? sp[0] : envSplitor[0];
                for (let ck of env_str.split(splitor).filter(x => !!x)) {
                    this.userList.push(new Class(ck));
                }
            }
            this.userCount = this.userList.length;
            if (!this.userCount) {
                this.log(`未找到变量，请检查变量${ckNames.map(x => '['+x+']').join('或')}`, {notify: true});
                return false;
            }
            this.log(`共找到${this.userCount}个账号`);
            return true;
        }
        async threads(taskName, conf, opt = {}) {
            while (conf.idx < $.userList.length) {
                let user = $.userList[conf.idx++];
                if(!user.valid) continue;
                await user[taskName](opt);
            }
        }
        async threadTask(taskName, thread) {
            let taskAll = [];
            let taskConf = {idx:0};
            while(thread--) taskAll.push(this.threads(taskName, taskConf));
            await Promise.all(taskAll);
        }
        time(t, x = null) {
            let xt = x ? new Date(x) : new Date;
            let e = {
                "M+": xt.getMonth() + 1,
                "d+": xt.getDate(),
                "h+": xt.getHours(),
                "m+": xt.getMinutes(),
                "s+": xt.getSeconds(),
                "q+": Math.floor((xt.getMonth() + 3) / 3),
                "S": this.padStr(xt.getMilliseconds(), 3)
            };
            /(y+)/.test(t) && (t = t.replace(RegExp.$1, (xt.getFullYear() + "").substr(4 - RegExp.$1.length)));
            for(let s in e) new RegExp("(" + s + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[s] : ("00" + e[s]).substr(("" + e[s]).length)));
            return t;
        }
        async showmsg() {
            if(!this.notifyFlag) return;
            if(!this.notifyStr.length) return;
            var notify = require('./sendNotify');
            this.log('\n============== 推送 ==============');
            await notify.sendNotify(this.name, this.notifyStr.join('\n'));
        }
        padStr(num, length, opt = {}) {
            let padding = opt.padding || '0';
            let mode = opt.mode || 'l';
            let numStr = String(num);
            let numPad = (length > numStr.length) ? (length - numStr.length) : 0;
            let pads = '';
            for (let i=0; i < numPad; i++) {
                pads += padding;
            }
            if (mode == 'r') {
                numStr = numStr + pads;
            } else {
                numStr = pads + numStr;
            }
            return numStr;
        }
        json2str(obj, c, encode = false) {
            let ret = [];
            for (let keys of Object.keys(obj).sort()) {
                let v = obj[keys];
                if(v && encode) v = encodeURIComponent(v);
                ret.push(keys + '=' + v);
            }
            return ret.join(c);
        }
        str2json(str, decode = false) {
            let ret = {};
            for (let item of str.split('&')) {
                if(!item) continue;
                let idx = item.indexOf('=');
                if(idx == -1) continue;
                let k = item.substr(0, idx);
                let v = item.substr(idx + 1);
                if(decode) v = decodeURIComponent(v);
                ret[k] = v;
            }
            return ret;
        }
        randomPattern(pattern, charset = 'abcdef0123456789') {
            let str = '';
            for (let chars of pattern) {
                if (chars == 'x') {
                    str += charset.charAt(Math.floor(Math.random() * charset.length));
                } else if (chars == 'X') {
                    str += charset.charAt(Math.floor(Math.random() * charset.length)).toUpperCase();
                } else {
                    str += chars;
                }
            }
            return str;
        }
        randomString(len, charset = 'abcdef0123456789') {
            let str = '';
            for (let i = 0; i < len; i++) {
                str += charset.charAt(Math.floor(Math.random() * charset.length));
            }
            return str;
        }
        randomList(a) {
            let idx = Math.floor(Math.random() * a.length);
            return a[idx];
        }
        wait(t) {
            return new Promise(e => setTimeout(e, t));
        }
        async exitNow() {
            await this.showmsg();
            let e = Date.now();
            let s = (e - this.startTime) / 1000;
            this.log('');
            this.log(`[${this.name}]运行结束，共运行了${s}秒`, {time: true});
            process.exit(0);
        }
    }
    (name)
}