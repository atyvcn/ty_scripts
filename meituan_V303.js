/*
美团 v3.03

美团V3仅支持青龙等nodejs环境, 不支持圈X
自动领券和完成一些活动任务

APP每日赚钱: 默认会每日自动随机, 要关闭随机提现的话设置变量 MT_AutoWithdraw 为 false
export MT_AutoWithdraw="false"
关闭自动提现可以存金币到50元余额再提现, 但是50元提现会审核2天, 可能会黑

自行捉包把meituan.com里面的token(一般在请求头里)填到变量 meituanCookie 中, 多账号换行或&或@隔开
export MT_Cookie="AgGZIgsYHyxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"

cron: 0 0,7,11,17,21 * * *
const $ = new Env("美团");
*/
const Env = require('./basic/Env.js');
const { TYQLDG_API, base64_encode } = require('./basic/tyqldg');

const $ = new Env('美团'),
    got = require("got"),
    envPrefix = "MT_",
    envSplitor = ["\n", "&", "@"],
    ckNames = [envPrefix + "CK"],
    env_name = envPrefix + "CK",
    MT_AutoWithdraw = process.env[envPrefix + "AutoWithdraw"] || "true",
    DEFAULT_TIMEOUT = 8000,
    DEFAULT_RETRY = 3;
let eid = 0;

$.get = function (result, name, value = "") {
    let value1 = value;
    result?.["hasOwnProperty"](name) && (value1 = result[name]);
    return value1;
}
$.wait_gap_interval = async function (_0x58be0e, _0x285f22) {
    let _0x505076 = Date.now() - _0x58be0e;
    _0x505076 < _0x285f22 && (await this.wait(_0x285f22 - _0x505076));
}

let _0x1c5c56 = null;
const _0xe8e625 = null;
const _0x426ebd = 3.03,
    _0x5a1316 = "meituan",
    _0xa0c420 = "https://leafxcy.coding.net/api/user/leafxcy/project/validcode/shared-depot/validCode/git/blob/master/code.json",
    _0x386a83 = "https://leafxcy.coding.net/api/user/leafxcy/project/validcode/shared-depot/validCode/git/blob/master/" + _0x5a1316 + ".json",
    _0x34add3 = "Mozilla/5.0 (iPhone; CPU iPhone OS 16_1_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.33(0x18002129) NetType/WIFI Language/zh_CN",
    _0x5b4927 = "wxde8ac0a21135c07d",
    _0x127f19 = "1399386702",
    _0x3b355f = "2.30.3",
    _0x133b2a = "iphone",
    _0x5c2dab = "AwQAAABJAgAAAAEAAAAyAAAAPLgC95WH3MyqngAoyM/hf1hEoKrGdo0pJ5DI44e1wGF9AT3PH7Wes03actC2n/GVnwfURonD78PewMUppAAAADgCEZv2akitiLnGkQIH6r67N1V9EUFpKyBOQRSRKpv9Awnm6LwnygipNjcIwXXJZEv5ddnUSW8vZQ==",
    _0x46ec7d = "0123456789",
    _0x2904e8 = "qwertyuiopasdfghjklzxcvbnm",
    _0x7ddba3 = _0x46ec7d + _0x2904e8 + _0x2904e8.toUpperCase();
let _0x526f9f = "114.07" + $.randomString(12, _0x46ec7d),
    _0x28c015 = "22.52" + $.randomString(13, _0x46ec7d),
    _0xbde454 = "NnOIp-QOs8SiYF1dcSlL5r8phPrCf6qkH7evMyjIoup2NXxNCLYcBbd3bqpv2X2IwEEJb5qoWglfkm_BFMSF_P37OScxhIfzAWgvmEjhdwJlyDXeFPZ0XwraweVp2EDxHrRbGOZeH8QVXwCoLxaUGBeOtuA0cEaD1RsGuHC_D2E",
    _0x35ed61 = [];
const _0xba841e = 600,
    _0x430b21 = 10,
    _0x4d5629 = ["1005", "1007"];
let _0x228cf0 = ["631682c504", "bb88750009", "9f90f45850", "90e9ecbe6a", "b6bfd8c1bc", "d4caf84940", "8decbc4c98", "c6026478e4", "4353a111e9", "7ceb1c14a7", "89515f0102", "63bec5af07", "1c8df37ffe", "36eedbe86c", "6ab415d70c", "3c309c7f26", "66c2938e1d", "3497a4fd05", "7f1f7ec5a4", "2fb53287b2", "2b0ada0dd7", "495070b239", "176f400a8f", "672129ff6d", "a479497fa6", "97ea404b56", "320ffa53e7", "6ccbda387f", "6f2d5f144f", "563983d5f1", "6f70050a62", "dfd9c44d7f", "6d5461c6dd", "a7331f5c94", "8d3891bef9", "eb6094dcaa", "11c95cc416", "351c3f4810", "67bd2e0988", "cdb75f714d", "3a6eba11a1", "76f9dc2980", "30644bcb35", "d1a1d62e6c", "8af63652ba", "075eb403be", "361ba45eff", "cfbb835838", "e26f305436", "ed33f82fa9", "e36bae3f8f", "6696ff7825", "b7719de06c", "2ab24bbc57", "2d98ddf8ac", "406fb78bfd", "9b84c4503a", "55ce3f059d", "cd06f8210b", "f6706f9b33", "34a718f16a", "f5e2218b18", "c7f6a889ff", "2583c8ba46", "45e325543c", "a162c96304"],
    _0x1176be = ["b24pg8jaFTeNadCXq0lb3A", "yLm-IynkBUQLt09kALFv8Q", "Ox5_0TfqOg6b3UfkKS3rUg", "TADnCANwheP5AKOjx3NpgA"],
    _0xc2d1bf = ["06hFC-C1WGiAQYUGya5QJA", "5IFmI13NeO7kRPW1jUj7Lw", "ySJ2HpgexeI0TJcLkA_5Ug"],
    _0x21b1ef = ["KXGjpKrk2h_43vUrIKbzDA", "l3emawQka8JjlE6LMyYT3g", "r9348AwSwnwP715csHvDqw", "XVsZc3p1O1jd-uTG4EjyXw", "9khEyiqt2tKFyZSjvqphkQ", "_p2QL78Fao6bsexHzofp-w", "jXL-9iEaRTsv-FZdpX4Z4g"];
const _0x216a75 = {
    "name": "APP-每日赚钱",
    "cubePageId": 10000003,
    "taskIdKeys": ["b6e6e96128", "710d92816e", "fc43b223be"]
};
const _0x3c2dc2 = {
    "name": "WX-每日赚钱",
    "cubePageId": 184008,
    "taskIdKeys": ["1fff834702"]
};
const _0x5ccdb4 = {
    "name": "APP-团团神券-魔法石",
    "cubePageId": 88888889,
    "taskIdKeys": ["a941c20450", "cdcc8a8195", "eb03206b17", "5c919dfbd8", "8f53427c39", "f749a47257", "4d609dde67", "3e5cbc8120", "532e764346", "7613d02997"]
};
const _0x3139b1 = {
    "name": "WX-天天赚钱",
    "cubePageId": 123,
    "taskIdKeys": _0x228cf0
};
const _0x17aeb3 = [_0x216a75, _0x3c2dc2, _0x5ccdb4, _0x3139b1],
    _0x2bd695 = {
        "NORMAL_CARD": "普通卡",
        "SENIOR_CARD": "稀有卡"
    };
const _0x59a1dc = {
    "EAT": "吃",
    "LIVE": "住",
    "WALK": "行",
    "TRAVEL": "游",
    "SHOP": "购",
    "ENTERTAIN": "娱"
};
let _0x5c1205 = [];

async function expireNotify(userName, index) {
    let json = { "userName": userName, "title": `${$.name}账号cookie已失效`, "message": `${$.name}账号${index} ${userName}\n请重新登录获取cookie`, "disable": true };
    if (eid) json.eid = eid; else json.env_name = env_name;
    let NotifyData = await TYQLDG_API("notify", json);
    if (NotifyData) {
        if (NotifyData.code == 200) {
            if (!eid && NotifyData.eid) eid = NotifyData.eid;
        }
        console.log(NotifyData.msg);
    }
}

class _0x1ceac5 {
    constructor() {
        this.index = $.userIdx++;
        this.name = "";
        this.valid = true;
        const _0x272b30 = {
            "limit": 0
        };
        const _0x3d3559 = {
            "Connection": "keep-alive"
        };
        const _0x1586fa = {
            "retry": _0x272b30,
            "timeout": DEFAULT_TIMEOUT,
            "followRedirect": false,
            "headers": _0x3d3559
        };
        this.got = got.extend(_0x1586fa);
    }
    ["log"](_0x469119, _0x27d901 = {}) {
        var _0x22316c = "",
            _0x26b0de = $.userCount.toString().length;
        if (this.index) {
            _0x22316c += "账号[" + $.padStr(this.index, _0x26b0de) + "]";
        }
        if (this.name) {
            _0x22316c += "[" + this.name + "]";
        }
        $.log(_0x22316c + _0x469119, _0x27d901);
    }
    async ["request"](_0x23f755) {
        var _0x18fc53 = {
            "statusCode": -1,
            "headers": null,
            "result": null
        };
        try {
            var _0x356328 = null,
                _0x12dac6 = 0,
                _0x3dfb78 = _0x23f755.fn || _0x23f755.url;
            _0x23f755.method = _0x23f755?.["method"]?.["toUpperCase"]() || "GET";
            while (_0x12dac6++ < DEFAULT_RETRY) {
                try {
                    await this.got(_0x23f755).then(_0x7e67a9 => {
                        _0x356328 = _0x7e67a9;
                    }, _0x500780 => {
                        _0x356328 = _0x500780.response;
                    });
                    if ((_0x356328?.["statusCode"] / 100 | 0) <= 4) {
                        break;
                    }
                } catch (_0x4b1c90) {
                    _0x4b1c90.name == "TimeoutError" ? this.log("[" + _0x3dfb78 + "]请求超时，重试第" + _0x12dac6 + "次") : this.log("[" + _0x3dfb78 + "]请求错误(" + _0x4b1c90.message + ")，重试第" + _0x12dac6 + "次");
                }
            }
            if (_0x356328) {
                let {
                    statusCode: _0x324dd8,
                    headers: _0x1171b1,
                    body: _0x59ebc5
                } = _0x356328;
                if (_0x59ebc5) {
                    try {
                        _0x59ebc5 = JSON.parse(_0x59ebc5);
                    } catch { }
                }
                _0x18fc53 = {
                    "statusCode": _0x324dd8,
                    "headers": _0x1171b1,
                    "result": _0x59ebc5
                };
            }
        } catch (_0x5156be) {
            console.log(_0x5156be);
        } finally {
            return _0x18fc53;
        }
    }
}
let _0x543eac = new _0x1ceac5();
class UserClass extends _0x1ceac5 {
    constructor(ck) {
        super();
        Object.assign(this, $.CkToJson(ck));
        this.t_earnDaily = 0;
        this.uuid = $.randomPattern("186ebxxxxxxxx-22e49fxxxxxxxx-0-0-186ebxxxxxxxx");
        this.openid = $.randomString(7, _0x7ddba3) + "-" + $.randomString(20, _0x7ddba3);
        this.got = this.got.extend({
            "headers": {
                "User-Agent": _0x34add3,
                "token": this.token,
                "openid": this.openid,
                "uuid": this.uuid,
                "M-APPKEY": "wxmp_mt-weapp",
                "clientversion": _0x3b355f,
                "utm_medium": _0x133b2a,
                "openIdCipher": _0x5c2dab,
                "cookie": "token=" + this.token + "; openid=" + this.openid + ";"
            }
        });
    }
    ["notify_coupon"](_0x29857c, _0x4869d2 = "领券") {
        for (let _0x2e4652 of _0x29857c) {
            const _0x41b20d = {
                "notify": true
            };
            this.log(_0x4869d2 + ": " + _0x2e4652, _0x41b20d);
        }
    }
    ["get_app_riskForm"]() {
        let _0x531292 = "i2HKpOmsirDPavelVfQBZGFXhdmmuk1eGNzKY";
        const _0x1359f9 = {
            "ip": "",
            "fingerprint": _0x531292,
            "cityId": "30",
            "platform": 5,
            "app": 0,
            "version": "12.8.202",
            "uuid": ""
        };
        return _0x1359f9;
    }
    ["get_riskForm"]() {
        let _0x3324f0 = "WX__ver1.2.0_CCCC_dfwOgF35EQNYzVh8i27kXL04k6XTiM6";
        const _0x4c4529 = {
            "openid": this.openid,
            "appid": _0x5b4927,
            "mchid": _0x127f19
        };
        let _0x559230 = {
            "uuid": this.uuid,
            "userid": this.userId,
            "openid": this.openid,
            "expoId": _0x5c2dab,
            "ip": "",
            "partner": 0,
            "wxRiskLevel": JSON.stringify(_0x4c4529),
            "platform": 13,
            "appletsFingerprint": _0x3324f0,
            "wechatFingerprint": _0x3324f0
        };
        return _0x559230;
    }
    ["encode_riskForm"]() {
        return base64_encode(JSON.stringify(this.get_riskForm()));
    }
    async ["getLoginedUserInfo"](_0x35681b = {}) {
        let _0x49659e = false;
        try {
            const _0x15afcf = {
                "token": this.token
            };
            const _0x230731 = {
                "fn": "getLoginedUserInfo",
                "method": "get",
                "url": "https://i.meituan.com/wrapapi/getLoginedUserInfo",
                "searchParams": _0x15afcf
            };
            let {result} = await this.request(_0x230731);
            if (result?.["mobile"]) {
                _0x49659e = true;
                this.name = result.nickName;//mobile;
                this.userId = Number(result.userId);
                this.log("登录成功");
            } else {
                this.log("获取账号信息失败, ck可能失效");//, {"notify": true}
                await expireNotify(this.userId, this.index);
            }
        } catch (_0x59ae8c) {
            console.log(_0x59ae8c);
        } finally {
            return _0x49659e;
        }
    }
    async ["inviteFetchcoupon"](_0x2ef46e = {}) {
        try {
            const _0x3cbdd1 = {
                "fn": "inviteFetchcoupon",
                "method": "get",
                "url": "https://promotion-waimai.meituan.com/invite/fetchcoupon",
                "searchParams": {}
            };
            _0x3cbdd1.searchParams.ctype = "wxapp";
            _0x3cbdd1.searchParams.fpPlatform = 13;
            _0x3cbdd1.searchParams.isMini = 1;
            _0x3cbdd1.searchParams.token = this.token;
            _0x3cbdd1.searchParams.inviteCode = _0xbde454;
            let {
                result: _0x3455a6
            } = await this.request(_0x3cbdd1),
                _0x401b13 = $.get(_0x3455a6, "code", -1),
                _0x325d08 = $.get(_0x3455a6, "subcode", -1);
            if ((_0x401b13 == 0 || _0x401b13 == 1) && (_0x325d08 == 0 || _0x325d08 == 2)) {
                let _0x28bf24 = _0x3455a6?.["data"]?.["couponList"]?.["map"](_0x5e37b9 => "[" + _0x5e37b9.couponTitle + "]" + (_0x5e37b9.priceLimit || "无门槛") + "减" + _0x5e37b9.couponValue);
                this.notify_coupon(_0x28bf24);
            } else {
                let _0x54807e = _0x3455a6?.["msg"] || _0x3455a6?.["message"] || "";
                this.log("领券失败[" + _0x401b13 + "]: " + _0x54807e);
            }
        } catch (_0x1170b6) {
            console.log(_0x1170b6);
        }
    }
    async ["gundamGrabV4"](_0x3aa2cc, _0x411caf = {}) {
        try {
            const _0xaf177e = {
                "fn": "gundamGrabV4",
                "method": "post",
                "url": "https://mediacps.meituan.com/gundam/gundamGrabV4",
                "json": _0x3aa2cc,
                "headers": {}
            };
            _0xaf177e.headers.Origin = "https://market.waimai.meituan.com";
            _0xaf177e.headers.Referer = "https://market.waimai.meituan.com/";
            let {
                result: _0x3fbe4e
            } = await this.request(_0xaf177e),
                _0x33b1db = $.get(_0x3fbe4e, "code", -1);
            if (_0x33b1db == 0) {
                let _0x127157 = _0x3fbe4e?.["data"]?.["allCoupons"]?.["map"](_0x16f057 => "[" + _0x16f057.couponName + "]" + (_0x16f057.amountLimit || "无门槛") + "减" + _0x16f057.couponAmount);
                this.notify_coupon(_0x127157);
            } else {
                let _0x55042c = _0x3fbe4e?.["msg"] || _0x3fbe4e?.["message"] || "";
                this.log("领券失败[" + _0x33b1db + "]: " + _0x55042c);
            }
        } catch (_0x790f6f) {
            console.log(_0x790f6f);
        }
    }
    async ["turntableDraw"](_0x374e29, _0x4aeb53 = {}) {
        try {
            let _0x5e8e17 = {
                "fn": "turntableDraw",
                "method": "post",
                "url": "https://promotion.waimai.meituan.com/lottery/turntable/draw",
                "searchParams": {
                    "actualLat": _0x28c015,
                    "actualLng": _0x526f9f,
                    "initialLat": _0x28c015,
                    "initialLng": _0x526f9f,
                    "cType": $.get(_0x4aeb53, "cType", "wm_wxapp"),
                    "wm_appversion": $.get(_0x4aeb53, "wm_appversion", "9.19.6"),
                    "gdPageId": $.get(_0x4aeb53, "gdPageId", "460584"),
                    "token": this.token,
                    "userId": this.userId,
                    "uuid": this.uuid
                },
                "json": {
                    "activityViewId": _0x374e29,
                    "appType": 0,
                    "deviceType": 2,
                    "wxOpenId": this.openid,
                    "fpPlatform": 5,
                    "mtFingerprint": ""
                }
            },
                {
                    result: _0x3773ac
                } = await this.request(_0x5e8e17),
                _0x1707cd = $.get(_0x3773ac, "code", -1);
            if (_0x1707cd == 0) {
                let _0x4d6125 = [];
                for (let _0x30f8e2 of _0x3773ac?.["data"]?.["awards"]) {
                    _0x30f8e2.couponType == 1 ? _0x4d6125.push("[" + _0x30f8e2.name + "]" + (_0x30f8e2.orderAmountLimit || "无门槛") + "减" + _0x30f8e2.amount) : _0x4d6125.push(_0x30f8e2.desc);
                }
                this.notify_coupon(_0x4d6125, "社群抽奖");
            } else {
                let _0x3bc33a = _0x3773ac?.["msg"] || _0x3773ac?.["message"] || "";
                this.log("社群抽奖失败[" + _0x1707cd + "]: " + _0x3bc33a);
            }
        } catch (_0x5aa178) {
            console.log(_0x5aa178);
        }
    }
    async ["signupRecord"](_0x156dbd, _0x4aaddf = {}) {
        try {
            let _0x534229 = {
                "fn": "signupRecord",
                "method": "get",
                "url": "https://promotion.waimai.meituan.com/playcenter/common/v1/treasurebox/signup/circle/record",
                "searchParams": {
                    "activityViewId": _0x156dbd,
                    "isInDpEnv": 0,
                    "isMini": 1,
                    "cType": $.get(_0x4aaddf, "cType", "wm_wxapp")
                }
            },
                {
                    result: _0x18ecd7
                } = await this.request(_0x534229),
                _0x35ced4 = $.get(_0x18ecd7, "code", -1);
            if (_0x35ced4 == 0) {
                this.log("已连续签到" + (_0x18ecd7?.["data"]?.["signUpNum"] || 0) + "天");
                for (let _0x25b254 of _0x18ecd7?.["data"]?.["rewardStatus"]?.["filter"](_0x4858da => _0x4858da.status == 1)) {
                    await this.signupGetBox(_0x156dbd, _0x25b254.stageDayNum);
                }
            } else {
                let _0x32ee9f = _0x18ecd7?.["msg"] || _0x18ecd7?.["message"] || "";
                this.log("查询签到失败[" + _0x35ced4 + "]: " + _0x32ee9f);
            }
        } catch (_0x85af65) {
            console.log(_0x85af65);
        }
    }
    async ["signupGetBox"](_0x137b1c, _0x816dfb, _0x37fed9 = {}) {
        try {
            const _0x435b51 = {
                "signUpDayNum": _0x816dfb
            };
            let _0xa47678 = {
                "fn": "signupGetBox",
                "method": "post",
                "url": "https://promotion.waimai.meituan.com/playcenter/common/v1/treasurebox/signup/stage/reward/get",
                "searchParams": {
                    "isInDpEnv": 0,
                    "isMini": 1,
                    "cType": $.get(_0x37fed9, "cType", "wm_wxapp")
                },
                "json": {
                    "activityViewId": _0x137b1c,
                    "actionCode": 1000,
                    "lat": _0x28c015,
                    "lng": _0x526f9f,
                    "fpPlatform": 13,
                    "bizParams": JSON.stringify(_0x435b51),
                    "utmSource": "",
                    "utmCampaign": "",
                    "gdId": 421412,
                    "codeVersion": 1,
                    "mtFingerprint": ""
                }
            },
                {
                    result: _0x3ff7e4
                } = await this.request(_0xa47678),
                _0x40ef6b = $.get(_0x3ff7e4, "code", -1);
            if (_0x40ef6b == 0) {
                let _0x371ec2 = _0x3ff7e4?.["data"]?.["prizeInfoList"]?.["map"](_0x5f76eb => "[" + _0x5f76eb.couponInfo.couponTitle + "]" + (_0x5f76eb.couponInfo.priceLimit || "无门槛") + "减" + _0x5f76eb.couponInfo.couponValue);
                this.notify_coupon(_0x371ec2, "开签到宝箱");
            } else {
                let _0x6eee9a = _0x3ff7e4?.["msg"] || _0x3ff7e4?.["message"] || "";
                this.log("开签到宝箱失败[" + _0x40ef6b + "]: " + _0x6eee9a);
            }
        } catch (_0x2c1713) {
            console.log(_0x2c1713);
        }
    }
    async ["ttsqEntry"](_0x367790, _0x38214d = {}) {
        try {
            const _0x11de27 = {
                "activityViewId": _0x367790,
                "actionCodes": 1000,
                "querySignupConfig": 1,
                "lat": _0x28c015,
                "lng": _0x526f9f
            };
            const _0x3df2c8 = {
                "fn": "signupRecord",
                "method": "get",
                "url": "https://promotion.waimai.meituan.com/playcenter/common/v1/entry",
                "searchParams": _0x11de27
            };
            let {
                result: _0x1a6172
            } = await this.request(_0x3df2c8),
                _0x2b7720 = $.get(_0x1a6172, "code", -1);
            if (_0x2b7720 == 0) {
                if (_0x1a6172.data.actionInfoList) {
                    for (let _0xeca4ba of _0x1a6172.data.actionInfoList) {
                        await this.ttsqDoAction(_0x367790, _0xeca4ba.actionCode || 1000);
                    }
                }
            } else {
                let _0x10f15d = _0x1a6172?.["msg"] || _0x1a6172?.["message"] || "";
                this.log("查询天天神券宝箱失败[" + _0x2b7720 + "]: " + _0x10f15d);
            }
        } catch (_0x11ec60) {
            console.log(_0x11ec60);
        }
    }
    async ["ttsqDoAction"](_0x463e17, _0x131176, _0x118b6f = {}) {
        try {
            let _0x26b031 = {
                "fn": "ttsqDoAction",
                "method": "post",
                "url": "https://promotion.waimai.meituan.com/playcenter/common/v1/doaction",
                "json": {
                    "activityViewId": _0x463e17,
                    "actionCode": _0x131176 || 1000,
                    "lat": _0x28c015,
                    "lng": _0x526f9f,
                    "gdId": 26403,
                    "fpPlatform": 13,
                    "utmSource": "",
                    "utmCampaign": "",
                    "mtFingerprint": ""
                }
            },
                {
                    result: _0x2be282
                } = await this.request(_0x26b031),
                _0x140d35 = $.get(_0x2be282, "code", -1);
            if (_0x140d35 == 0) {
                let _0x5adaba = _0x2be282?.["data"]?.["prizeInfoList"]?.["map"](_0x5ca548 => _0x5ca548.awardType >= 0 ? "[" + _0x5ca548.couponInfo.couponTitle + "]" + (_0x5ca548.couponInfo.priceLimit || "无门槛") + "减" + _0x5ca548.couponInfo.couponValue : "")?.["filter"](_0xe1e4e0 => _0xe1e4e0);
                this.notify_coupon(_0x5adaba, "开天天神券宝箱");
            } else {
                let _0x3fdbe8 = _0x2be282?.["msg"] || _0x2be282?.["message"] || "";
                this.log("开天天神券宝箱失败[" + _0x140d35 + "]: " + _0x3fdbe8);
            }
        } catch (_0x19bbf6) {
            console.log(_0x19bbf6);
        }
    }
    async ["clockInStatus"](_0x40bcc2, _0x44b200 = {}) {
        try {
            let _0x525433 = {
                "fn": "clockInStatus",
                "method": "get",
                "url": "https://promotion.waimai.meituan.com/playcenter/common/v1/clock-in/status",
                "searchParams": {
                    "activityViewId": _0x40bcc2,
                    "ctype": $.get(_0x44b200, "ctype", "wm_wxapp"),
                    "isInDpEnv": 0
                }
            },
                {
                    result: _0x2d0a2c
                } = await this.request(_0x525433),
                _0x284c2b = $.get(_0x2d0a2c, "code", -1);
            if (_0x284c2b == 0) {
                let _0x2c90f1 = new Date().getDay();
                for (let _0x418254 of _0x2d0a2c.data.clockInStatus) {
                    if (_0x418254.dayOfWeek % 7 == _0x2c90f1) {
                        this.log("今天社群" + (_0x418254.status ? "已" : "未") + "签到, 本周已签到" + _0x2d0a2c.data.clockInNum + "天");
                        if (!_0x418254.status) {
                            await this.clockInSign(_0x40bcc2);
                        }
                        break;
                    }
                }
                _0x2d0a2c.data.lotteryStatus == 1 && (await this.ttsqDoAction(_0x40bcc2, 1001));
            } else {
                let _0x2d7f22 = _0x2d0a2c?.["msg"] || _0x2d0a2c?.["message"] || "";
                this.log("查询社群签到失败[" + _0x284c2b + "]: " + _0x2d7f22);
            }
        } catch (_0x21830a) {
            console.log(_0x21830a);
        }
    }
    async ["clockInSign"](_0x1bacd8, _0x4350e7 = {}) {
        try {
            const _0x27d89e = {
                "activityViewId": _0x1bacd8,
                "actionCode": 1001,
                "lat": _0x28c015,
                "lng": _0x526f9f
            };
            let _0x4fa2d2 = {
                "fn": "clockInSign",
                "method": "post",
                "url": "https://promotion.waimai.meituan.com/playcenter/common/v1/clock-in",
                "searchParams": {
                    "isMini": 1,
                    "ctype": $.get(_0x4350e7, "ctype", "wm_wxapp"),
                    "isInDpEnv": 0
                },
                "json": _0x27d89e
            },
                {
                    result: _0x437883
                } = await this.request(_0x4fa2d2),
                _0x546b73 = $.get(_0x437883, "code", -1);
            if (_0x546b73 == 0) {
                let _0x1cdcf7 = _0x437883?.["data"]?.["prizeInfoList"]?.["map"](_0x2db85b => "[" + _0x2db85b.couponInfo.couponTitle + "]" + (_0x2db85b.couponInfo.priceLimit || "无门槛") + "减" + _0x2db85b.couponInfo.couponValue);
                this.notify_coupon(_0x1cdcf7);
            } else {
                let _0x38e888 = _0x437883?.["msg"] || _0x437883?.["message"] || "";
                this.log("社群签到失败[" + _0x546b73 + "]: " + _0x38e888);
            }
        } catch (_0x5b3547) {
            console.log(_0x5b3547);
        }
    }
    async ["cardLotteryNum"](_0x45dad5 = {}) {
        try {
            const _0x34daa9 = {
                "activityId": "1116",
                "topicIdList": ["1380101169187258449", "1380101260094521416", "1412292930126868547"]
            };
            const _0x3151a7 = {
                "fn": "cardLotteryNum",
                "method": "post",
                "url": "https://mgm.meituan.com/marketing/cardsCollect/api/cardLotteryNum",
                "json": _0x34daa9
            };
            let {
                result: _0x32cf8f
            } = await this.request(_0x3151a7);
            if (_0x32cf8f?.["lotteryNum"] >= 0) {
                let _0x422000 = _0x32cf8f.lotteryNum;
                this.log("有" + _0x422000 + "次抽月符机会");
                while (_0x422000-- > 0) {
                    await this.lotteryfrompool(_0x32cf8f.poolIdList);
                }
            } else {
                let _0x2a99a2 = _0x32cf8f?.["msg"] || _0x32cf8f?.["message"] || "";
                this.log("查询抽月符次数失败: " + _0x2a99a2);
            }
        } catch (_0x51fe79) {
            console.log(_0x51fe79);
        }
    }
    async ["cardSaveAccess"](_0x42eed9 = {}) {
        try {
            const _0x1cb478 = {
                "playerId": 1
            };
            const _0x20f5ee = {
                "fn": "cardSaveAccess",
                "method": "post",
                "url": "https://mgm.meituan.com/marketing/cardsCollect/api/saveAccess",
                "json": _0x1cb478
            };
            await this.request(_0x20f5ee);
        } catch (_0x28f46d) {
            console.log(_0x28f46d);
        }
    }
    async ["cardSaveShare"](_0x5da3a7 = {}) {
        try {
            const _0x2502c8 = {
                "playerId": 1,
                "shareWay": 1,
                "shareContentType": 1,
                "shareContentId": "29"
            };
            const _0x3be5a9 = {
                "fn": "cyfSaveShare",
                "method": "post",
                "url": "https://mgm.meituan.com/marketing/cardsCollect/api/saveShare",
                "json": _0x2502c8
            };
            await this.request(_0x3be5a9);
        } catch (_0x568331) {
            console.log(_0x568331);
        }
    }
    async ["lotteryfrompool"](_0x12f735, _0x586eb6 = {}) {
        try {
            const _0x965780 = {
                "poolList": _0x12f735
            };
            const _0xd6483f = {
                "fn": "lotteryfrompool",
                "method": "post",
                "url": "https://mgm.meituan.com/marketing/cardsCollect/api/lotteryfrompool",
                "json": _0x965780
            };
            let {
                result: _0x6da4e3
            } = await this.request(_0xd6483f);
            if (_0x6da4e3?.["prizeInfo"]?.["name"]) {
                this.log("抽到月符: [" + _0x6da4e3?.["prizeInfo"]?.["name"] + "]");
                await this.getCardInfo(_0x6da4e3?.["lotteryAwardSerialNo"]?.["value"]);
            } else {
                let _0x37c271 = _0x6da4e3?.["msg"] || _0x6da4e3?.["message"] || "";
                this.log("抽月符失败: " + _0x37c271);
            }
        } catch (_0x36ad47) {
            console.log(_0x36ad47);
        }
    }
    async ["getCardInfo"](_0x4c56e5, _0x12ff15 = {}) {
        try {
            const _0x321734 = {
                "lotteryAwardSerialNo": _0x4c56e5
            };
            const _0x5718fd = {
                "fn": "getCardInfo",
                "method": "get",
                "url": "https://mgm.meituan.com/marketing/cardsCollect/api/getCardInfo",
                "searchParams": _0x321734
            };
            let {
                result: _0x4ff9dc
            } = await this.request(_0x5718fd),
                _0x29533a = $.get(_0x4ff9dc, "code", -1);
            if (_0x29533a == 0) {
                await this.getCardDraw(_0x4ff9dc?.["userCardInfo"]?.["cardId"]);
            } else {
                let _0x2c1b9c = _0x4ff9dc?.["msg"] || _0x4ff9dc?.["message"] || "";
                this.log("查询月符抽奖卡号失败[" + _0x29533a + "]: " + _0x2c1b9c);
            }
        } catch (_0x10d88a) {
            console.log(_0x10d88a);
        }
    }
    async ["getCardDraw"](_0x5c481c, _0x199b78 = {}) {
        try {
            const _0x281dd7 = {
                "cardId": _0x5c481c
            };
            const _0x20e3a3 = {
                "fn": "getCardDraw",
                "method": "get",
                "url": "https://mgm.meituan.com/marketing/cardsCollect/api/draw",
                "searchParams": _0x281dd7
            };
            let {
                result: _0x252c23
            } = await this.request(_0x20e3a3);
            if (_0x252c23?.["bingo"]?.["value"]) {
                this.log("月符抽奖: " + _0x252c23?.["prizeInfo"]?.["name"]);
            } else {
                let _0x30dc81 = _0x252c23?.["msg"] || _0x252c23?.["message"] || "";
                this.log("查询月符抽奖结果失败: " + _0x30dc81);
            }
        } catch (_0x40f3e2) {
            console.log(_0x40f3e2);
        }
    }
    async ["getUserTasks"](_0x2adc57, _0x30642b = {}) {
        try {
            const _0x50799d = {
                "uuid": this.uuid,
                "userId": this.userId,
                "browseAreaTrue": true,
                "cityId": 30,
                "taskIdKeys": _0x2adc57.taskIdKeys,
                "userType": "MEI_TUAN",
                "sourceType": "MEI_TUAN",
                "mini_program_token": this.token,
                "inviter": "",
                "inviterTaskIdKey": ""
            };
            const _0x11c826 = {
                "fn": "getUserTasks",
                "method": "post",
                "url": "https://cube.meituan.com/topcube/api/toc/task/getUserTasks",
                "json": _0x50799d
            };
            let {
                result: _0x3daee9
            } = await this.request(_0x11c826);
            if (_0x3daee9?.["code"] == 0) {
                for (let _0x119046 of _0x3daee9.data) {
                    if (!_0x4d5629.includes(_0x119046?.["code"]?.["toString"]())) {
                        if (_0x119046.taskConf) {
                            let _0x3b588a = JSON.parse(_0x119046.taskConf);
                            if (_0x3b588a.isCheckNgSignature) {
                                $.log("任务[" + _0x119046.title + "] -- 有强验证, 跳过");
                                continue;
                            }
                        }
                        if (!_0x119046?.["taskRuleVos"]?.["length"]) {
                            $.log("任务[" + _0x119046.title + "] -- " + _0x119046.msg);
                            continue;
                        }
                        if (_0x119046?.["title"]?.["includes"]("小程序下单")) {
                            continue;
                        }
                        let _0x21f844 = _0x119046?.["extend"] ? true : false;
                        if (_0x21f844 && _0x119046?.["extend"]?.["isSignInToday"] == 1) {
                            $.log("任务[" + _0x119046.title + "] -- 已完成");
                            continue;
                        }
                        for (let _0xdd5f59 of _0x119046.taskRuleVos) {
                            if (_0xdd5f59.status == "PRIZE_SUCC" || _0xdd5f59.status == "DELETE") {
                                !_0x21f844 && $.log("任务[" + _0x119046.title + "] -- 已完成");
                            } else {
                                if (_0xdd5f59?.["status"] == "CAN_RECEIVE") {
                                    $.log("任务[" + _0x119046.title + "] -- 可领取奖励");
                                    await this.sendTaskPrize(_0x2adc57, _0x119046, _0xdd5f59);
                                    if (_0x21f844) {
                                        break;
                                    }
                                } else {
                                    $.log("任务[" + _0x119046.title + "] -- 未完成");
                                    let _0xc2d53d = true,
                                        _0x3b93c8 = JSON.parse(_0xdd5f59.ruleConfig);
                                    if (_0x3b93c8.limitTime) {
                                        let _0x1cba73 = (_0xdd5f59.preCompleteTime || 0) + _0x3b93c8.limitTime * 1000;
                                        Date.now() < _0x1cba73 && (_0xc2d53d = false, $.log("任务[" + _0x119046.title + "]冷却中, [" + $.time("hh:mm:ss", _0x1cba73) + "]后可完成"));
                                    } else {
                                        if (_0x3b93c8?.["timeLimits"]?.["length"]) {
                                            let _0x535313 = new Date($.time("yyyy-MM-dd 00:00:00")).getTime(),
                                                _0xbf291d = Date.now();
                                            for (let _0x589e2a of _0x3b93c8.timeLimits) {
                                                let {
                                                    startTime: _0x2bb3d9,
                                                    endTime: _0xd167fd
                                                } = _0x589e2a;
                                                _0x2bb3d9 += _0x535313;
                                                _0xd167fd += _0x535313;
                                                (_0xbf291d < _0x2bb3d9 || _0xbf291d >= _0xd167fd) && (_0xc2d53d = false, $.log("任务[" + _0x119046.title + "]不在时间段中: " + $.time("hh:mm:ss", _0x2bb3d9) + "到" + $.time("hh:mm:ss", _0xd167fd)));
                                            }
                                        }
                                    }
                                    _0xc2d53d && (await this.startUserTask(_0x2adc57, _0x119046, _0xdd5f59));
                                    if (_0x21f844) {
                                        break;
                                    }
                                }
                            }
                        }
                    }
                }
            } else {
                let _0x1bd359 = _0x3daee9?.["msg"] || _0x3daee9?.["desc"] || "";
                this.log("查询任务列表失败: " + _0x1bd359);
            }
        } catch (_0x2f5784) {
            console.log(_0x2f5784);
        }
    }
    async ["startUserTask"](_0x322fad, _0x43c073, _0x509519, _0x30c81b = {}) {
        try {
            let _0x59e2cd = {
                "fn": "startUserTask",
                "method": "post",
                "url": "https://cube.meituan.com/topcube/api/toc/task/startUserTask",
                "json": {
                    "uuid": this.uuid,
                    "userId": this.userId,
                    "cityId": 30,
                    "riskForm": this.encode_riskForm(),
                    "taskIdKey": _0x43c073.taskIdKey,
                    "taskRuleIdKey": _0x509519.taskRuleIdKey,
                    "cubePageId": _0x322fad.cubePageId,
                    "userType": "MEI_TUAN",
                    "sourceType": "MEI_TUAN",
                    "mini_program_token": this.token
                },
                "headers": {
                    "M-TRACEID": "32358943431" + $.randomString(8, _0x46ec7d)
                }
            },
                {
                    result: _0x31db3a
                } = await this.request(_0x59e2cd);
            if (_0x31db3a?.["code"] == 0) {
                let _0x1a449e = JSON.parse(_0x509519.ruleConfig);
                if (_0x1a449e.staySeconds) {
                    let _0x29f313 = _0x1a449e.staySeconds * 1000;
                    this.log("等待" + _0x1a449e.staySeconds + "秒后完成任务..");
                    await $.wait(_0x29f313);
                } else {
                    this.log("完成任务[" + _0x43c073.title + "]成功");
                }
                await this.updateUserTask(_0x322fad, _0x43c073, _0x509519, _0x31db3a);
            } else {
                let _0x1603ed = _0x31db3a?.["msg"] || _0x31db3a?.["desc"] || "";
                this.log("完成任务[" + _0x43c073.title + "]失败: " + _0x1603ed);
                _0x1603ed?.["includes"]("活动已完成") && (await this.updateUserTask(_0x322fad, _0x43c073, _0x509519));
            }
        } catch (_0x2d359d) {
            console.log(_0x2d359d);
        }
    }
    ["process_task_prize"](_0x1bd4e8) {
        let _0x10f302 = [];
        for (let _0xd862f5 of _0x1bd4e8) {
            if (_0xd862f5.number) {
                _0x10f302.push(_0xd862f5.number + "金币");
            } else {
                if (_0xd862f5?.["sendMagicCardResult"]?.["cardList"]?.["length"]) {
                    for (let _0xf6514c of _0xd862f5.sendMagicCardResult.cardList) {
                        _0x10f302.push("[" + (_0x2bd695[_0xf6514c.type] || _0xf6514c.type) + "]x" + _0xf6514c.amount);
                    }
                } else {
                    if (_0xd862f5?.["sendMagicStoneResult"]?.["stoneList"]?.["length"]) {
                        for (let _0x255dea of _0xd862f5.sendMagicStoneResult.stoneList) {
                            _0x10f302.push("[" + (_0x59a1dc[_0x255dea.magicStonePrizeType] || _0x255dea.magicStonePrizeType) + "]x" + _0x255dea.amount);
                        }
                    } else {
                        if (_0xd862f5?.["sendCouponResultList"]?.["length"]) {
                            for (let _0x43cc81 of _0xd862f5.sendCouponResultList) {
                                _0x10f302.push((_0x43cc81.useCondition || "无门槛") + "减" + _0x43cc81.couponValue + _0x43cc81.couponTypeDesc + "券");
                            }
                        }
                    }
                }
            }
        }
        return _0x10f302;
    }
    async ["updateUserTask"](_0x4f0310, _0x1afcef, _0x235d23, _0x598867 = {}, _0x120e46 = {}) {
        try {
            let {
                actionNo = "",
                taskNo = "",
                taskRuleNo = ""
            } = _0x598867;
            taskNo = taskNo || _0x1afcef?.["taskNo"] || "";
            taskRuleNo = taskRuleNo || _0x235d23?.["taskRuleNo"] || "";
            let _0x18004d = {
                "fn": "updateUserTask",
                "method": "post",
                "url": "https://cube.meituan.com/topcube/api/toc/task/updateUserTask",
                "json": {
                    "uuid": this.uuid,
                    "userId": this.userId,
                    "cityId": 30,
                    "taskNo": taskNo,
                    "actionNo": actionNo,
                    "riskForm": this.encode_riskForm(),
                    "taskIdKey": _0x1afcef.taskIdKey,
                    "taskRuleNo": taskRuleNo,
                    "taskRuleIdKey": _0x235d23.taskRuleIdKey,
                    "cubePageId": _0x4f0310.cubePageId,
                    "userType": "MEI_TUAN",
                    "sourceType": "MEI_TUAN",
                    "mini_program_token": this.token
                }
            },
                {
                    result: _0x19f48b
                } = await this.request(_0x18004d);
            if (_0x19f48b?.["code"] == 0) {
                if (_0x19f48b?.["prizeList"]?.["length"]) {
                    let _0x20a677 = this.process_task_prize(_0x19f48b.prizeList);
                    this.log("领取任务[" + _0x1afcef.title + "]奖励获得: " + _0x20a677.join(","));
                } else {
                    this.log("更新任务[" + _0x1afcef.title + "]状态成功");
                    await this.sendTaskPrize(_0x4f0310, _0x1afcef, _0x235d23, _0x598867);
                }
            } else {
                let _0x1f23bb = _0x19f48b?.["msg"] || _0x19f48b?.["desc"] || "";
                this.log("更新任务[" + _0x1afcef.title + "]状态失败: " + _0x1f23bb);
            }
        } catch (_0x1e7d33) {
            console.log(_0x1e7d33);
        }
    }
    async ["sendTaskPrize"](_0x283f8b, _0x240091, _0x58a291, _0x1fad79 = {}, _0x371c7b = {}) {
        try {
            let {
                actionNo = "",
                taskNo = "",
                taskRuleNo = ""
            } = _0x1fad79;
            taskNo = taskNo || _0x240091?.["taskNo"] || "";
            taskRuleNo = taskRuleNo || _0x58a291?.["taskRuleNo"] || "";
            let _0x3c9173 = {
                "fn": "sendTaskPrize",
                "method": "post",
                "url": "https://cube.meituan.com/topcube/api/toc/task/sendTaskPrize",
                "json": {
                    "uuid": this.uuid,
                    "userId": this.userId,
                    "cityId": 30,
                    "taskNo": taskNo,
                    "actionNo": actionNo,
                    "riskForm": this.encode_riskForm(),
                    "taskIdKey": _0x240091.taskIdKey,
                    "taskRuleNo": taskRuleNo,
                    "taskRuleIdKey": _0x58a291.taskRuleIdKey,
                    "cubePageId": _0x283f8b.cubePageId,
                    "userType": "MEI_TUAN",
                    "sourceType": "MEI_TUAN",
                    "mini_program_token": this.token
                }
            },
                {
                    result: _0x398309
                } = await this.request(_0x3c9173);
            if (_0x398309?.["code"] == 0) {
                if (_0x398309?.["prizeList"]?.["length"]) {
                    let _0x1adec0 = this.process_task_prize(_0x398309.prizeList);
                    this.log("领取任务[" + _0x240091.title + "]奖励获得: " + _0x1adec0.join(","));
                } else {
                    this.log("没有领取到任务[" + _0x240091.title + "]奖励");
                }
            } else {
                let _0x4a16ec = _0x398309?.["msg"] || _0x398309?.["desc"] || "";
                this.log("领取任务[" + _0x240091.title + "]奖励失败: " + _0x4a16ec);
            }
        } catch (_0x23ee98) {
            console.log(_0x23ee98);
        }
    }
    async ["earnDailyLogin"](_0x548525 = {}) {
        try {
            let _0x34cf83 = _0x548525.gameType || 10402;
            const _0x546a62 = {
                "cityId": "30"
            };
            let _0x2b9f1e = {
                "fn": "earnDailyLogin",
                "method": "get",
                "url": "https://game.meituan.com/earn-daily/login/loginMgc",
                "searchParams": {
                    "gameType": _0x34cf83,
                    "mtToken": this.token,
                    "mtUserId": this.userId,
                    "mtDeviceId": this.uuid,
                    "nonceStr": $.randomString(16),
                    "externalStr": JSON.stringify(_0x546a62)
                }
            },
                {
                    result: _0xd1d6f5
                } = await this.request(_0x2b9f1e),
                _0x5112ea = $.get(_0xd1d6f5, "code", -1);
            if (_0x5112ea == 0) {
                this.acToken = _0xd1d6f5?.["response"]?.["accessToken"];
            } else {
                let _0x135612 = _0xd1d6f5?.["msg"] || _0xd1d6f5?.["desc"] || "";
                this.log("登录游戏[" + _0x34cf83 + "]失败[" + _0x5112ea + "]: " + _0x135612);
            }
        } catch (_0x441644) {
            console.log(_0x441644);
        }
    }
    async ["earnDailyPost"](_0x63ebd1 = {}) {
        let _0x22958d = {};
        try {
            let _0x35ab4f = _0x63ebd1.protocolId,
                _0x575630 = _0x63ebd1.data || {},
                _0x491889 = {
                    "fn": "earnDailyPost",
                    "method": "post",
                    "url": "https://game.meituan.com/earn-daily/msg/post",
                    "json": {
                        "acToken": this.acToken,
                        "riskParams": this.get_app_riskForm(),
                        "protocolId": _0x35ab4f,
                        "data": _0x575630
                    },
                    "headers": {
                        "Origin": "https://awp.meituan.com",
                        "Referer": "https://awp.meituan.com/"
                    }
                };
            await $.wait_gap_interval(this.t_earnDaily, _0xba841e);
            _0x22958d = await this.request(_0x491889);
            this.t_earnDaily = Date.now();
        } catch (_0x3a6fbe) {
            console.log(_0x3a6fbe);
        } finally {
            return _0x22958d;
        }
    }
    async ["earnDaily_task_list"](_0x187993 = {}) {
        try {
            const _0x39531f = {
                "acToken": this.acToken
            };
            const _0x32f911 = {
                "protocolId": 1001,
                "data": _0x39531f
            };
            {
                let {
                    result: _0x592747
                } = await this.earnDailyPost(_0x32f911),
                    _0x2ea240 = $.get(_0x592747, "code", -1);
                if (_0x2ea240 == 200) {
                    for (let _0x1fee60 of _0x592747?.["data"]?.["signInPopModel"]?.["rewardModelList"] || []) {
                        _0x1fee60.current && _0x1fee60.state == 1 && (await this.earnDaily_sign());
                    }
                    for (let _0x2e5b3a of _0x592747?.["data"]?.["taskInfoList"] || []) {
                        switch (_0x2e5b3a.id) {
                            case 780:
                            case 15099:
                            case 15278:
                                break;
                            default:
                                _0x2e5b3a.dailyRewardTimes < _0x2e5b3a.dailyFinishTimes && (await this.earnDaily_get_reward(_0x2e5b3a));
                                for (let _0x331130 = _0x2e5b3a.dailyFinishTimes; _0x331130 < _0x2e5b3a.mgcTaskBaseInfo.curPeriodMaxFinishTimes; _0x331130++) {
                                    await this.earnDaily_do_task(_0x2e5b3a);
                                }
                                break;
                        }
                    }
                } else {
                    let _0x4d87e9 = _0x592747?.["msg"] || _0x592747?.["desc"] || "";
                    this.log("查询任务失败[" + _0x2ea240 + "]: " + _0x4d87e9);
                }
            }
            {
                let {
                    result: _0x2dcf01
                } = await this.earnDailyPost(_0x32f911),
                    _0x40af9f = $.get(_0x2dcf01, "code", -1);
                if (_0x40af9f == 200) {
                    let _0x350caa = _0x2dcf01?.["data"]?.["playerBaseModel"]?.["redPacketInfo"]?.["leftRedPacketAmount"] || 0;
                    this.log("可以开" + _0x350caa + "次红包");
                    while (_0x350caa-- > 0) {
                        await this.earnDaily_redbag();
                    }
                } else {
                    let _0x260ef6 = _0x2dcf01?.["msg"] || _0x2dcf01?.["desc"] || "";
                    this.log("查询红包次数失败[" + _0x40af9f + "]: " + _0x260ef6);
                }
            }
            {
                let {
                    result: _0x5e46fe
                } = await this.earnDailyPost(_0x32f911),
                    _0x1c505c = $.get(_0x5e46fe, "code", -1);
                if (_0x1c505c == 200) {
                    let _0x33e40b = _0x5e46fe?.["data"]?.["playerBaseModel"]?.["lotteryInfo"]?.["leftLotteryTimesAmount"] || 0;
                    this.log("可以抽奖" + _0x33e40b + "次");
                    while (_0x33e40b-- > 0) {
                        await this.earnDaily_draw();
                    }
                } else {
                    let _0x1aae56 = _0x5e46fe?.["msg"] || _0x5e46fe?.["desc"] || "";
                    this.log("查询转盘次数失败[" + _0x1c505c + "]: " + _0x1aae56);
                }
            }
            {
                let {
                    result: _0x2abf23
                } = await this.earnDailyPost(_0x32f911),
                    _0x3083c2 = $.get(_0x2abf23, "code", -1);
                if (_0x3083c2 == 200) {
                    this.cash = _0x2abf23?.["data"]?.["playerBaseModel"]?.["activityCycleInfo"]?.["cashToken"] || 0;
                    this.coin = _0x2abf23?.["data"]?.["playerBaseModel"]?.["activityCycleInfo"]?.["coinToken"] || 0;
                    this.coin > 0 && (await this.earnDaily_coinInfo());
                    const _0xdfa2fb = {
                        "notify": true
                    };
                    this.log("每日赚钱余额: " + (this.cash / 100).toFixed(2) + "元, " + this.coin + "金币", _0xdfa2fb);
                } else {
                    let _0x45c2a2 = _0x2abf23?.["msg"] || _0x2abf23?.["desc"] || "";
                    this.log("查询转盘次数失败[" + _0x3083c2 + "]: " + _0x45c2a2);
                }
            }
            await this.earnDaily_get_withdraw_list();
        } catch (_0x3a8bed) {
            console.log(_0x3a8bed);
        }
    }
    async ["earnDaily_coinInfo"](_0x199e6a = {}) {
        try {
            const _0x5139a6 = {
                "protocolId": 1015
            };
            let {
                result: _0x27d6c3
            } = await this.earnDailyPost(_0x5139a6),
                _0x44c40c = $.get(_0x27d6c3, "code", -1);
            if (_0x44c40c == 200) {
                let _0x5bc440 = _0x27d6c3?.["data"]?.["exchangeInfoList"]?.["filter"](_0xde586a => _0xde586a.name == "翻红包现金");
                if (!_0x5bc440.length) {
                    return;
                }
                let _0x44807f = _0x5bc440[0];
                this.coin >= _0x44807f.price && (await this.earnDaily_coinExchange(_0x44807f));
            } else {
                let _0x2cee1d = _0x27d6c3?.["msg"] || _0x27d6c3?.["desc"] || "";
                this.log("查询金币兑换失败[" + _0x44c40c + "]: " + _0x2cee1d);
            }
        } catch (_0x21d674) {
            console.log(_0x21d674);
        }
    }
    async ["earnDaily_coinExchange"](_0x58cef9, _0x254573 = {}) {
        try {
            const _0x19a5e7 = {
                "skuId": _0x58cef9.skuId
            };
            const _0x5e6e89 = {
                "protocolId": 1016,
                "data": _0x19a5e7
            };
            let {
                result: _0x1a6288
            } = await this.earnDailyPost(_0x5e6e89),
                _0x45bf5e = $.get(_0x1a6288, "code", -1);
            if (_0x45bf5e == 200) {
                this.cash = _0x1a6288?.["data"]?.["activityCycleInfo"]?.["cashToken"] || 0;
                this.coin = _0x1a6288?.["data"]?.["activityCycleInfo"]?.["coinToken"] || 0;
                this.log("使用" + _0x58cef9.price + "金币兑换余额成功: 剩余" + this.coin + "金币");
                let _0x78234f = _0x1a6288?.["data"]?.["exchangeInfoList"]?.["filter"](_0x340d60 => _0x340d60.name == "翻红包现金");
                if (!_0x78234f.length) {
                    return;
                }
                let _0x25d721 = _0x78234f[0];
                this.coin >= _0x25d721.price && (await this.earnDaily_coinExchange(_0x25d721));
            } else {
                let _0x12dcd7 = _0x1a6288?.["msg"] || _0x1a6288?.["desc"] || "";
                this.log("使用" + _0x58cef9.price + "金币兑换余额失败[" + _0x45bf5e + "]: " + _0x12dcd7);
            }
        } catch (_0x36fa79) {
            console.log(_0x36fa79);
        }
    }
    async ["earnDaily_sign"](_0x3d5e41 = {}) {
        try {
            const _0xb6e087 = {
                "protocolId": 1007
            };
            let {
                result: _0x504512
            } = await this.earnDailyPost(_0xb6e087),
                _0x4e4621 = $.get(_0x504512, "code", -1);
            if (_0x4e4621 == 200) {
                this.log("签到成功: " + (_0x504512?.["data"]?.["remitNotificationModelList"]?.["map"](_0x587cf8 => _0x587cf8.content)?.["join"](",") || ""));
            } else {
                let _0xe08767 = _0x504512?.["msg"] || _0x504512?.["desc"] || "";
                this.log("签到失败[" + _0x4e4621 + "]: " + _0xe08767);
            }
        } catch (_0xb20080) {
            console.log(_0xb20080);
        }
    }
    async ["earnDaily_do_task"](_0x35ed09, _0xc19b42 = {}) {
        try {
            const _0x48b1da = {
                "taskId": _0x35ed09.id
            };
            const _0x1661fa = {
                "protocolId": 1004,
                "data": _0x48b1da
            };
            let {
                result: _0x21b730
            } = await this.earnDailyPost(_0x1661fa),
                _0xae2c = $.get(_0x21b730, "code", -1);
            if (_0xae2c == 200) {
                this.log("完成任务[" + (_0x35ed09?.["mgcTaskBaseInfo"]?.["viewTitle"] || _0x35ed09?.["id"]) + "]成功");
                await this.earnDaily_get_reward(_0x35ed09);
            } else {
                let _0x26329b = _0x21b730?.["msg"] || _0x21b730?.["desc"] || "";
                this.log("完成任务[" + (_0x35ed09?.["mgcTaskBaseInfo"]?.["viewTitle"] || _0x35ed09?.["id"]) + "]失败[" + _0xae2c + "]: " + _0x26329b);
            }
        } catch (_0x1635d2) {
            console.log(_0x1635d2);
        }
    }
    async ["earnDaily_get_reward"](_0x1ac71d, _0x1c1902 = {}) {
        try {
            const _0x2b6238 = {
                "taskId": _0x1ac71d.id
            };
            const _0x317cad = {
                "protocolId": 1005,
                "data": _0x2b6238
            };
            let {
                result: _0x3cf580
            } = await this.earnDailyPost(_0x317cad),
                _0x177b0e = $.get(_0x3cf580, "code", -1);
            if (_0x177b0e == 200) {
                this.log("领取任务[" + _0x1ac71d.mgcTaskBaseInfo.viewTitle + "]奖励成功");
            } else {
                let _0x4e2d8a = _0x3cf580?.["msg"] || _0x3cf580?.["desc"] || "";
                this.log("领取任务[" + _0x1ac71d.mgcTaskBaseInfo.viewTitle + "]奖励失败[" + _0x177b0e + "]: " + _0x4e2d8a);
            }
        } catch (_0x56b390) {
            console.log(_0x56b390);
        }
    }
    async ["earnDaily_redbag"](_0x1c7105 = {}) {
        try {
            const _0x254903 = {
                "protocolId": 1008
            };
            let {
                result: _0x34ab51
            } = await this.earnDailyPost(_0x254903),
                _0x2b62b5 = $.get(_0x34ab51, "code", -1);
            if (_0x2b62b5 == 200) {
                this.log("开红包获得: " + _0x34ab51?.["data"]?.["rewardModelList"]?.["filter"](_0x26756d => _0x26756d.rewarded)?.["map"](_0xbdddb8 => "" + (_0xbdddb8.amount / 100).toFixed(2) + "元")?.["join"](","));
            } else {
                let _0x1c129b = _0x34ab51?.["msg"] || _0x34ab51?.["desc"] || "";
                this.log("开红包失败[" + _0x2b62b5 + "]: " + _0x1c129b);
            }
        } catch (_0x441771) {
            console.log(_0x441771);
        }
    }
    async ["earnDaily_draw"](_0x55ce4d = {}) {
        try {
            const _0x562e2c = {
                "protocolId": 1010
            };
            let {
                result: _0xb8aef8
            } = await this.earnDailyPost(_0x562e2c),
                _0x431812 = $.get(_0xb8aef8, "code", -1);
            if (_0x431812 == 200) {
                let _0x257695 = _0xb8aef8?.["data"]?.["currentReward"];
                if (_0x257695?.["rewardedCouponModel"]) {
                    this.log("转盘抽奖: " + _0x257695.rewardedCouponModel?.["useRule"] + _0x257695.rewardedCouponModel?.["name"]);
                    return;
                }
                switch (_0x257695?.["resourceType"]) {
                    case 1:
                        let _0x1c7324 = ((_0x257695?.["amount"] || 0) / 100).toFixed(2);
                        this.log("转盘抽奖: " + _0x1c7324 + "元余额");
                        break;
                    case 3:
                        this.log("转盘抽奖: 随机提现机会");
                        break;
                    default:
                        this.log("转盘抽奖: " + JSON.stringify(_0xb8aef8));
                        break;
                }
            } else {
                let _0x2c2581 = _0xb8aef8?.["msg"] || _0xb8aef8?.["desc"] || "";
                this.log("转盘抽奖失败[" + _0x431812 + "]: " + _0x2c2581);
            }
        } catch (_0x12f8c1) {
            console.log(_0x12f8c1);
        }
    }
    async ["earnDaily_get_withdraw_list"](_0x10e92c = {}) {
        try {
            const _0x416c96 = {
                "protocolId": 1012
            };
            let {
                result: _0x2e6e74
            } = await this.earnDailyPost(_0x416c96),
                _0xc82cdf = $.get(_0x2e6e74, "code", -1);
            if (_0xc82cdf == 200) {
                let _0x5f0b9d = _0x2e6e74?.["data"]?.["activityCycleInfo"]?.["cashToken"] || 0,
                    _0x5cddaa = (_0x5f0b9d / 100).toFixed(2);
                this.log("红包余额: " + _0x5cddaa + "元");
                let _0x1eb119 = (_0x2e6e74?.["data"]?.["cashList"] || []).sort(function (_0x35785e, _0x44d9a3) {
                    return _0x44d9a3.amount - _0x35785e.amount;
                });
                if (MT_AutoWithdraw == "false" || !MT_AutoWithdraw) {
                    _0x1eb119 = _0x1eb119.filter(_0x5df5fe => _0x5df5fe.amount == 5000);
                }
                for (let _0x28b38c of _0x1eb119) {
                    if (_0x28b38c.amount > _0x5f0b9d) {
                        continue;
                    }
                    if (await this.earnDaily_withdraw(_0x28b38c)) {
                        break;
                    }
                }
            } else {
                let _0x1bb0bf = _0x2e6e74?.["msg"] || _0x2e6e74?.["desc"] || "";
                this.log("查询提现列表失败[" + _0xc82cdf + "]: " + _0x1bb0bf);
            }
        } catch (_0x7ec38e) {
            console.log(_0x7ec38e);
        }
    }
    async ["earnDaily_withdraw"](_0x4eea60, _0x2a2f1c = {}) {
        let _0x2eb0d7 = false;
        try {
            let _0x481698 = (_0x4eea60.amount / 100).toFixed(2);
            const _0x9a59af = {
                "id": _0x4eea60.id,
                "amount": _0x4eea60.amount
            };
            const _0x23ce4d = {
                "protocolId": 1013,
                "data": _0x9a59af
            };
            let {
                result: _0x2de092
            } = await this.earnDailyPost(_0x23ce4d),
                _0x4a8527 = $.get(_0x2de092, "code", -1);
            if (_0x4a8527 == 200) {
                _0x2eb0d7 = true;
                const _0x535719 = {
                    "notify": true
                };
                this.log("提现[" + _0x481698 + "元]到钱包成功", _0x535719);
            } else {
                let _0x8cb3e = _0x2de092?.["msg"] || _0x2de092?.["desc"] || "";
                _0x4a8527 == 1017 ? (_0x2eb0d7 = true, this.log("提现[" + _0x481698 + "元]失败[" + _0x4a8527 + "]: 可能今天已提现过")) : this.log("提现[" + _0x481698 + "元]失败[" + _0x4a8527 + "]: " + _0x8cb3e);
            }
        } catch (_0x392905) {
            console.log(_0x392905);
        } finally {
            return _0x2eb0d7;
        }
    }
    async ["c_task"](_0x2fba09, _0x45337b = {}) {
        try {
            let _0x5b3fae = Math.random() * 100 + 2400 | 0;
            const _0x473d3c = {
                "Referer": "https://click.meituan.com/t?t=1&c=2&p=" + _0x2fba09
            };
            let _0x520bae = {
                "fn": "get_task",
                "method": "post",
                "url": "https://click.meituan.com/cps/clickReferralLink",
                "headers": _0x473d3c,
                "json": {
                    "p": _0x2fba09,
                    "t": "1",
                    "c": "2",
                    "sessionId": "187a" + $.randomPattern("xxxxxxx-xxx-xxx-xxx"),
                    "referrer": "",
                    "fingerprintFromH5": "eJxVV" + $.randomString(_0x5b3fae, _0x7ddba3)
                }
            };
            await this.request(_0x520bae);
        } catch (_0x45b8ed) {
            console.log(_0x45b8ed);
        }
    }
    async ["walletMainpage"](_0xaa2e76 = {}) {
        try {
            const _0x43ec57 = {
                "fn": "walletMainpage",
                "method": "post",
                "url": "https://npay.meituan.com/conch/walletV5/mainpage",
                "form": {}
            };
            _0x43ec57.form.token = this.token;
            _0x43ec57.form.nb_app = "group";
            _0x43ec57.form.nb_appversion = "12.9.203";
            _0x43ec57.form.nb_channel = "common";
            _0x43ec57.form.nb_ci = "30";
            _0x43ec57.form.nb_location = "0_0";
            _0x43ec57.form.nb_osversion = "16.1.2";
            _0x43ec57.form.nb_platform = "iOS";
            _0x43ec57.form.utmSource = "AppStore";
            _0x43ec57.form.from = "mine_qianbaorukou_qianbao";
            _0x43ec57.form.popWindowOldChain = "false";
            let {
                result: _0x41c1a8
            } = await this.request(_0x43ec57),
                _0x3251e2 = $.get(_0x41c1a8, "status", -1);
            if (_0x3251e2 == "success") {
                let _0x617fdf = [];
                for (let _0x2adbd8 of _0x41c1a8?.["data"]?.["AssetArea"]?.["otherAssetAreaDTOList"] || []) {
                    switch (_0x2adbd8.title) {
                        case "余额":
                            _0x617fdf.push("钱包余额: " + (_0x2adbd8?.["subTitle"] || 0) + "元");
                            break;
                        case "立减金":
                            _0x617fdf.push("立减金: " + (_0x2adbd8?.["subTitle"] || 0) + "元");
                            break;
                    }
                }
                if (_0x617fdf.length) {
                    const _0x12481c = {
                        "notify": true
                    };
                    this.log(_0x617fdf.join(", "), _0x12481c);
                }
            } else {
                let _0x349cfd = _0x41c1a8?.["error"]?.["message"] || "";
                this.log("查询钱包失败[" + _0x3251e2 + "]: " + _0x349cfd);
            }
        } catch (_0x335a72) {
            console.log(_0x335a72);
        }
    }
    async ["refTask"]() {
        if (!_0x5c1205?.["length"]) {
            return;
        }
        let _0x59da27 = _0x5c1205.sort(function () {
            return Math.random() - 0.5;
        }),
            _0xb26718 = _0x59da27.length,
            _0x4eaa56 = Math.min(3, _0xb26718);
        _0x59da27 = _0x59da27.slice(0, _0x4eaa56);
        for (let _0x504483 of _0x59da27) {
            await this.c_task(_0x504483);
        }
    }
    async ["appMrzqTask"]() {
        $.log("---------------- APP-每日赚钱 ----------------");
        await this.earnDailyLogin();
        await this.earnDaily_task_list();
    }
    async ["ttsqTask"]() {
        $.log("---------------- 天天神券 ----------------");
        await this.inviteFetchcoupon();
        for (let _0x6ea63e of _0x35ed61) {
            await this.gundamGrabV4(_0x6ea63e);
        }
        for (let _0xe70ced of _0x21b1ef) {
            await this.signupRecord(_0xe70ced);
            await this.ttsqEntry(_0xe70ced);
        }
    }
    async ["wxSqsqTask"]() {
        $.log("---------------- WX-社群神券 ----------------");
        for (let _0x26bfe3 of _0x1176be) {
            await this.turntableDraw(_0x26bfe3);
        }
    }
    async ["wxSqSignTask"]() {
        $.log("---------------- WX-社群签到 ----------------");
        for (let _0x154d8a of _0xc2d1bf) {
            await this.clockInStatus(_0x154d8a);
        }
    }
    async ["appCyfTask"]() {
        $.log("---------------- APP-抽月符 ----------------");
        await this.cardSaveAccess();
        await this.cardSaveShare();
        await this.cardLotteryNum();
    }
    async ["commonTask"]() {
        $.log("---------------- 集合任务 ----------------");
        for (let _0x39d313 of _0x17aeb3) {
            $.log("============== " + _0x39d313.name + " ==============");
            if (_0x39d313.taskIdKeys.length > _0x430b21) {
                const _0x13f118 = {
                    "cubePageId": _0x39d313.cubePageId,
                    "taskIdKeys": []
                };
                for (let _0x435ca9 of _0x39d313.taskIdKeys) {
                    _0x13f118.taskIdKeys.push(_0x435ca9);
                    _0x13f118.taskIdKeys.length >= _0x430b21 && (await this.getUserTasks(_0x13f118), _0x13f118.taskIdKeys = []);
                }
                if (_0x13f118.taskIdKeys.length > 0) {
                    await this.getUserTasks(_0x13f118);
                }
            } else {
                await this.getUserTasks(_0x39d313);
            }
        }
    }
    async ["notifyTask"]() {
        $.log("---------------- 汇总推送 ----------------");
        await this.walletMainpage();
    }
    async ["userTask"]() {
        const _0x404763 = {
            "notify": true
        };
        $.log("\n---------------- 账号[" + this.index + "] ----------------", _0x404763);
        if (!(await this.getLoginedUserInfo())) {
            return;
        }
        await this.refTask();
        await this.ttsqTask();
        await this.wxSqSignTask();
        await this.wxSqsqTask();
        await this.commonTask();
        await this.appMrzqTask();
        await this.appCyfTask();
        await this.notifyTask();
    }
}
!(async () => {
    if (!(await _0x2af4b5())) {
        return;
    }
    await _0x5b1565();
    $.read_env(UserClass, ckNames, envSplitor);
    $.log("\n-------------------------------------");
    MT_AutoWithdraw == "false" || !MT_AutoWithdraw ? $.log("APP每日赚钱设置为: 不随机提现") : $.log("APP每日赚钱设置为: 每日随机提现");
    $.log("-------------------------------------");
    for (let _0x132c6f of $.userList) {
        await _0x132c6f.userTask();
    }
})().catch(_0x105a2b => $.log(_0x105a2b)).finally(() => $.exitNow());
async function _0x2af4b5() {
    let _0x467776 = false;
    try {
        const _0x14e28f = {
            "fn": "auth",
            "method": "get",
            "url": _0xa0c420
        };
        let {
            statusCode: _0x3d99e8,
            result: _0x5156f2
        } = await _0x543eac.request(_0x14e28f);
        if (_0x3d99e8 != 200) {
            return Promise.resolve();
        }
        if (_0x5156f2?.["code"] == 0) {
            _0x5156f2 = JSON.parse(_0x5156f2.data.file.data);
            /*if (_0x5156f2?.["commonNotify"] && _0x5156f2.commonNotify.length > 0) {
                const _0x35d35e = {
                    "notify": true
                };
                $.log(_0x5156f2.commonNotify.join("\n") + "\n", _0x35d35e);
            }
            _0x5156f2?.["commonMsg"] && _0x5156f2.commonMsg.length > 0 && $.log(_0x5156f2.commonMsg.join("\n") + "\n");
            */
            if (_0x5156f2[_0x5a1316]) {
                let _0x293740 = _0x5156f2[_0x5a1316];
                _0x293740.status == 0 ? _0x426ebd >= _0x293740.version ? (_0x467776 = true, /*$.log(_0x293740.msg[_0x293740.status]),*/ $.log(_0x293740.updateMsg), $.log("现在运行的脚本版本是：" + _0x426ebd + "，最新脚本版本：" + _0x293740.latestVersion)) : $.log(_0x293740.versionMsg) : $.log(_0x293740.msg[_0x293740.status]);
            } else {
                $.log(_0x5156f2.errorMsg);
            }
        }
    } catch (_0x1c6903) {
        $.log(_0x1c6903);
    } finally {
        return _0x467776;
    }
}
async function _0x5b1565() {
    let _0x4a3645 = false;
    try {
        const _0x40a91a = {
            "fn": "auth",
            "method": "get",
            "url": _0x386a83
        };
        let {
            statusCode: _0x383d75,
            result: _0x32e322
        } = await _0x543eac.request(_0x40a91a);
        if (_0x383d75 != 200) {
            return Promise.resolve();
        }
        if (_0x32e322?.["code"] == 0) {
            _0x32e322 = JSON.parse(_0x32e322.data.file.data);
            _0xbde454 = _0x32e322?.["inviteCode"] || _0xbde454;
            for (let _0x5b9f36 of _0x32e322?.["mrzqTaskId_all"] || []) {
                !_0x228cf0.includes(_0x5b9f36) && _0x228cf0.push(_0x5b9f36);
            }
            for (let _0x2fbace of _0x32e322?.["commonTaskConf"] || []) {
                _0x17aeb3.filter(_0x5aa661 => _0x5aa661.name == _0x2fbace.name)?.["length"] == 0 && _0x17aeb3.push(_0x2fbace);
            }
            if (_0x32e322?.["gundomConfV4"]?.["length"]) {
                _0x35ed61 = _0x32e322.gundomConfV4;
            }
            if (_0x32e322?.["pid_list"]?.["length"]) {
                _0x5c1205 = _0x32e322.pid_list;
            }
            for (let _0x5b1fe7 of _0x32e322?.["sqsqIdList"] || []) {
                !_0x1176be.includes(_0x5b1fe7) && _0x1176be.push(_0x5b1fe7);
            }
            for (let _0x12c459 of _0x32e322?.["sqSignIdList"] || []) {
                !_0xc2d1bf.includes(_0x12c459) && _0xc2d1bf.push(_0x12c459);
            }
            for (let _0x2a8e8a of _0x32e322?.["ttsqSignIdList"] || []) {
                !_0x21b1ef.includes(_0x2a8e8a) && _0x21b1ef.push(_0x2a8e8a);
            }
        }
    } catch (_0x208ffe) {
        $.log(_0x208ffe);
    } finally {
        return _0x4a3645;
    }
}