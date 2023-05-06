/*
美团 v3.03

美团V3仅支持青龙等nodejs环境, 不支持圈X
自动领券和完成一些活动任务

APP每日赚钱: 默认会每日自动随机, 要关闭随机提现的话设置变量 MT_AutoWithdraw 为 false
export MT_AutoWithdraw="false"
关闭自动提现可以存金币到50元余额再提现, 但是50元提现会审核2天, 可能会黑

自行捉包把meituan.com里面的token(一般在请求头里)填到变量 meituanCookie 中, 多账号换行或&或@隔开
export MT_Cookie="token=AgGZIgsYHyxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"

cron: 0 0,7,11,17,21 * * *
*/

const Env = require('./basic/Env.js');
const { TYQLDG_API, base64_encode } = require('./basic/tyqldg');

const $ = new Env('美团'),
    got = require("got"),
    envPrefix = "MT_",
    envSplitor = ["\n", "&", "@"],
    ckNames = [envPrefix + "Cookie"],
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

let _0x463db6 = null;
const _0x5ef51f = null;
const _0x119b7d = 3.04,
    _0x424ee5 = "meituan",
    _0x820924 = "https://leafxcy.coding.net/api/user/leafxcy/project/validcode/shared-depot/validCode/git/blob/master/code.json",
    _0x5da39e = "https://leafxcy.coding.net/api/user/leafxcy/project/validcode/shared-depot/validCode/git/blob/master/" + _0x424ee5 + ".json",
    _0x43012d = "Mozilla/5.0 (iPhone; CPU iPhone OS 16_1_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.33(0x18002129) NetType/WIFI Language/zh_CN",
    _0x33e5a3 = "wxde8ac0a21135c07d",
    _0x300470 = "1399386702",
    _0x1d9226 = "2.30.3",
    _0x5a5285 = "iphone",
    _0x17004f = "AwQAAABJAgAAAAEAAAAyAAAAPLgC95WH3MyqngAoyM/hf1hEoKrGdo0pJ5DI44e1wGF9AT3PH7Wes03actC2n/GVnwfURonD78PewMUppAAAADgCEZv2akitiLnGkQIH6r67N1V9EUFpKyBOQRSRKpv9Awnm6LwnygipNjcIwXXJZEv5ddnUSW8vZQ==",
    _0x3d8be2 = "0123456789",
    _0x5c8386 = "qwertyuiopasdfghjklzxcvbnm",
    _0xf141a2 = _0x3d8be2 + _0x5c8386 + _0x5c8386.toUpperCase();
let _0x5c6278 = "114.07" + $.randomString(12, _0x3d8be2),
    _0x108d6c = "22.52" + $.randomString(13, _0x3d8be2),
    inviteCode = "NnOIp-QOs8SiYF1dcSlL5r8phPrCf6qkH7evMyjIoureqol0OXXaopfjjblE0yPge-nmlRKIDEgmTxF7oaoA4OfQjhGdF522KA_poICzK21VFORrK_ggku9ewgI6-qR5VCf7Blcp0wY6_CtAKvFkqFYXG42pu_6MtY7K6RDMjic",
    _0x106ac6 = [];
const _0x41fe89 = 600,
    _0x39dba5 = 10,
    _0x477d3f = ["1005", "1007"];
let _0x35520c = ["631682c504", "bb88750009", "9f90f45850", "90e9ecbe6a", "b6bfd8c1bc", "d4caf84940", "8decbc4c98", "c6026478e4", "4353a111e9", "7ceb1c14a7", "89515f0102", "63bec5af07", "1c8df37ffe", "36eedbe86c", "6ab415d70c", "3c309c7f26", "66c2938e1d", "3497a4fd05", "7f1f7ec5a4", "2fb53287b2", "2b0ada0dd7", "495070b239", "176f400a8f", "672129ff6d", "a479497fa6", "97ea404b56", "320ffa53e7", "6ccbda387f", "6f2d5f144f", "563983d5f1", "6f70050a62", "dfd9c44d7f", "6d5461c6dd", "a7331f5c94", "8d3891bef9", "eb6094dcaa", "11c95cc416", "351c3f4810", "67bd2e0988", "cdb75f714d", "3a6eba11a1", "76f9dc2980", "30644bcb35", "d1a1d62e6c", "8af63652ba", "075eb403be", "361ba45eff", "cfbb835838", "e26f305436", "ed33f82fa9", "e36bae3f8f", "6696ff7825", "b7719de06c", "2ab24bbc57", "2d98ddf8ac", "406fb78bfd", "9b84c4503a", "55ce3f059d", "cd06f8210b", "f6706f9b33", "34a718f16a", "f5e2218b18", "c7f6a889ff", "2583c8ba46", "45e325543c", "a162c96304"],
    _0x582d0d = ["b24pg8jaFTeNadCXq0lb3A", "yLm-IynkBUQLt09kALFv8Q", "Ox5_0TfqOg6b3UfkKS3rUg", "TADnCANwheP5AKOjx3NpgA"],
    _0x203e0d = ["06hFC-C1WGiAQYUGya5QJA", "5IFmI13NeO7kRPW1jUj7Lw", "ySJ2HpgexeI0TJcLkA_5Ug"],
    _0x278155 = ["KXGjpKrk2h_43vUrIKbzDA", "l3emawQka8JjlE6LMyYT3g", "r9348AwSwnwP715csHvDqw", "XVsZc3p1O1jd-uTG4EjyXw", "9khEyiqt2tKFyZSjvqphkQ", "_p2QL78Fao6bsexHzofp-w", "jXL-9iEaRTsv-FZdpX4Z4g"];
const _0x5c84c1 = {
    "name": "APP-每日赚钱",
    "cubePageId": 10000003,
    "taskIdKeys": ["b6e6e96128", "710d92816e", "fc43b223be"]
};
const _0x1e4830 = {
    "name": "WX-每日赚钱",
    "cubePageId": 184008,
    "taskIdKeys": ["1fff834702"]
};
const _0xfdf5cc = {
    "name": "APP-团团神券-魔法石",
    "cubePageId": 88888889,
    "taskIdKeys": ["a941c20450", "cdcc8a8195", "eb03206b17", "5c919dfbd8", "8f53427c39", "f749a47257", "4d609dde67", "3e5cbc8120", "532e764346", "7613d02997"]
};
const _0x16a48f = {
    "name": "WX-天天赚钱",
    "cubePageId": 123,
    "taskIdKeys": _0x35520c
};
const _0xbd4499 = [_0x5c84c1, _0x1e4830, _0xfdf5cc, _0x16a48f],
    _0x5cdf0f = {
        "NORMAL_CARD": "普通卡",
        "SENIOR_CARD": "稀有卡"
    };
const _0x48cc80 = {
    "EAT": "吃",
    "LIVE": "住",
    "WALK": "行",
    "TRAVEL": "游",
    "SHOP": "购",
    "ENTERTAIN": "娱"
};
let _0x5b0f1f = [];

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

class _0xbcfc {
    constructor() {
        this.index = $.userIdx++;
        this.name = "";
        this.valid = true;
        const _0x53b000 = {
            "limit": 0
        };
        const _0x111b1f = {
            "Connection": "keep-alive"
        };
        const _0x7ca178 = {
            "retry": _0x53b000,
            "timeout": DEFAULT_TIMEOUT,
            "followRedirect": false,
            "headers": _0x111b1f
        };
        this.got = got.extend(_0x7ca178);
    }
    ["log"](_0xaa847e, _0x1daac6 = {}) {
        var _0x44f2a8 = "",
            _0x2e0e3b = $.userCount.toString().length;
        if (this.index) {
            _0x44f2a8 += "账号[" + $.padStr(this.index, _0x2e0e3b) + "]";
        }
        if (this.name) {
            _0x44f2a8 += "[" + this.name + "]";
        }
        $.log(_0x44f2a8 + _0xaa847e, _0x1daac6);
    }
    async ["request"](_0x5c7de2) {
        var _0x368144 = {
            "statusCode": -1,
            "headers": null,
            "result": null
        };
        try {
            var _0x5c0369 = null,
                _0x4ef1c4 = 0,
                _0x3d732c = _0x5c7de2.fn || _0x5c7de2.url;
            _0x5c7de2.method = _0x5c7de2?.["method"]?.["toUpperCase"]() || "GET";
            while (_0x4ef1c4++ < DEFAULT_RETRY) {
                try {
                    await this.got(_0x5c7de2).then(_0x7ac671 => {
                        _0x5c0369 = _0x7ac671;
                    }, _0x122ba8 => {
                        _0x5c0369 = _0x122ba8.response;
                    });
                    if ((_0x5c0369?.["statusCode"] / 100 | 0) <= 4) {
                        break;
                    }
                } catch (_0x19c820) {
                    _0x19c820.name == "TimeoutError" ? this.log("[" + _0x3d732c + "]请求超时，重试第" + _0x4ef1c4 + "次") : this.log("[" + _0x3d732c + "]请求错误(" + _0x19c820.message + ")，重试第" + _0x4ef1c4 + "次");
                }
            }
            if (_0x5c0369) {
                let {
                    statusCode: _0x5d8938,
                    headers: _0x5a5d8a,
                    body: _0x7496a8
                } = _0x5c0369;
                if (_0x7496a8) {
                    try {
                        _0x7496a8 = JSON.parse(_0x7496a8);
                    } catch { }
                }
                const _0x5ae9db = {
                    "statusCode": _0x5d8938,
                    "headers": _0x5a5d8a,
                    "result": _0x7496a8
                };
                _0x368144 = _0x5ae9db;
            }
        } catch (_0x229dbd) {
            console.log(_0x229dbd);
        } finally {
            return _0x368144;
        }
    }
}
let _0x1e44af = new _0xbcfc();
class _0x40467a extends _0xbcfc {
    constructor(_0x58e804) {
        super();
        Object.assign(this, $.CkToJson(ck));
        this.t_earnDaily = 0;
        this.uuid = $.randomPattern("186ebxxxxxxxx-22e49fxxxxxxxx-0-0-186ebxxxxxxxx");
        this.openid = $.randomString(7, _0xf141a2) + "-" + $.randomString(20, _0xf141a2);
        this.got = this.got.extend({
            "headers": {
                "User-Agent": _0x43012d,
                "token": this.token,
                "openid": this.openid,
                "uuid": this.uuid,
                "M-APPKEY": "wxmp_mt-weapp",
                "clientversion": _0x1d9226,
                "utm_medium": _0x5a5285,
                "openIdCipher": _0x17004f,
                "cookie": "token=" + this.token + "; openid=" + this.openid + ";"
            }
        });
    }
    ["notify_coupon"](_0x54716b, _0x7b734b = "领券") {
        for (let _0x1f2a30 of _0x54716b) {
            const _0x354a10 = {
                "notify": true
            };
            this.log(_0x7b734b + ": " + _0x1f2a30, _0x354a10);
        }
    }
    ["get_app_riskForm"]() {
        let _0x49f6e1 = "i2HKpOmsirDPavelVfQBZGFXhdmmuk1eGNzKY";
        const _0x389ed0 = {
            "ip": "",
            "fingerprint": _0x49f6e1,
            "cityId": "30",
            "platform": 5,
            "app": 0,
            "version": "12.8.202",
            "uuid": ""
        };
        return _0x389ed0;
    }
    ["get_riskForm"]() {
        let _0x57478d = "WX__ver1.2.0_CCCC_dfwOgF35EQNYzVh8i27kXL04k6XTiM6";
        const _0x5dffa4 = {
            "openid": this.openid,
            "appid": _0x33e5a3,
            "mchid": _0x300470
        };
        let _0x4ef62a = {
            "uuid": this.uuid,
            "userid": this.userId,
            "openid": this.openid,
            "expoId": _0x17004f,
            "ip": "",
            "partner": 0,
            "wxRiskLevel": JSON.stringify(_0x5dffa4),
            "platform": 13,
            "appletsFingerprint": _0x57478d,
            "wechatFingerprint": _0x57478d
        };
        return _0x4ef62a;
    }
    ["encode_riskForm"]() {
        return base64_encode(JSON.stringify(this.get_riskForm()));
    }
    async ["getLoginedUserInfo"](_0xaaff64 = {}) {
        let _0x20af48 = false;
        try {
            const _0xf29517 = {
                "token": this.token
            };
            const _0xab3247 = {
                "fn": "getLoginedUserInfo",
                "method": "get",
                "url": "https://i.meituan.com/wrapapi/getLoginedUserInfo",
                "searchParams": _0xf29517
            };
            let {result} = await this.request(_0xab3247);
            if (result?.["mobile"]) {
                _0x20af48 = true;
                this.name = result.nickName;//mobile;
                this.userId = Number(result.userId);
                this.log("登录成功");
            } else {
                this.log("获取账号信息失败, ck可能失效");//, {"notify": true}
                await expireNotify(this.userId, this.index);
            }
        } catch (_0x37d09b) {
            console.log(_0x37d09b);
        } finally {
            return _0x20af48;
        }
    }
    async ["inviteFetchcoupon"](_0x3aaab5 = {}) {
        try {
            const _0x489de4 = {
                "fn": "inviteFetchcoupon",
                "method": "get",
                "url": "https://promotion-waimai.meituan.com/invite/fetchcoupon",
                "searchParams": {}
            };
            _0x489de4.searchParams.ctype = "wxapp";
            _0x489de4.searchParams.fpPlatform = 13;
            _0x489de4.searchParams.isMini = 1;
            _0x489de4.searchParams.token = this.token;
            _0x489de4.searchParams.inviteCode = inviteCode;
            let {
                result: _0x2ff5a8
            } = await this.request(_0x489de4),
                _0x1372ad = $.get(_0x2ff5a8, "code", -1),
                _0x5f4b52 = $.get(_0x2ff5a8, "subcode", -1);
            if ((_0x1372ad == 0 || _0x1372ad == 1) && (_0x5f4b52 == 0 || _0x5f4b52 == 2)) {
                let _0x1f437a = _0x2ff5a8?.["data"]?.["couponList"]?.["map"](_0x3a198c => "[" + _0x3a198c.couponTitle + "]" + (_0x3a198c.priceLimit || "无门槛") + "减" + _0x3a198c.couponValue);
                this.notify_coupon(_0x1f437a);
            } else {
                let _0x562de1 = _0x2ff5a8?.["msg"] || _0x2ff5a8?.["message"] || "";
                this.log("领券失败[" + _0x1372ad + "]: " + _0x562de1);
            }
        } catch (_0x19252b) {
            console.log(_0x19252b);
        }
    }
    async ["gundamGrabV4"](_0x20bea9, _0x3fdb62 = {}) {
        try {
            const _0x35ec2c = {
                "fn": "gundamGrabV4",
                "method": "post",
                "url": "https://mediacps.meituan.com/gundam/gundamGrabV4",
                "json": _0x20bea9,
                "headers": {}
            };
            _0x35ec2c.headers.Origin = "https://market.waimai.meituan.com";
            _0x35ec2c.headers.Referer = "https://market.waimai.meituan.com/";
            let {
                result: _0x5800f5
            } = await this.request(_0x35ec2c),
                _0x41a10d = $.get(_0x5800f5, "code", -1);
            if (_0x41a10d == 0) {
                let _0x3939bd = _0x5800f5?.["data"]?.["allCoupons"]?.["map"](_0xcf7c98 => "[" + _0xcf7c98.couponName + "]" + (_0xcf7c98.amountLimit || "无门槛") + "减" + _0xcf7c98.couponAmount);
                this.notify_coupon(_0x3939bd);
            } else {
                let _0x58fe8f = _0x5800f5?.["msg"] || _0x5800f5?.["message"] || "";
                this.log("领券失败[" + _0x41a10d + "]: " + _0x58fe8f);
            }
        } catch (_0x53cf14) {
            console.log(_0x53cf14);
        }
    }
    async ["turntableDraw"](_0x3d576d, _0x238ff9 = {}) {
        try {
            let _0x512745 = {
                "fn": "turntableDraw",
                "method": "post",
                "url": "https://promotion.waimai.meituan.com/lottery/turntable/draw",
                "searchParams": {
                    "actualLat": _0x108d6c,
                    "actualLng": _0x5c6278,
                    "initialLat": _0x108d6c,
                    "initialLng": _0x5c6278,
                    "cType": $.get(_0x238ff9, "cType", "wm_wxapp"),
                    "wm_appversion": $.get(_0x238ff9, "wm_appversion", "9.19.6"),
                    "gdPageId": $.get(_0x238ff9, "gdPageId", "460584"),
                    "token": this.token,
                    "userId": this.userId,
                    "uuid": this.uuid
                },
                "json": {
                    "activityViewId": _0x3d576d,
                    "appType": 0,
                    "deviceType": 2,
                    "wxOpenId": this.openid,
                    "fpPlatform": 5,
                    "mtFingerprint": ""
                }
            },
                {
                    result: _0x16d1e9
                } = await this.request(_0x512745),
                _0x53c4aa = $.get(_0x16d1e9, "code", -1);
            if (_0x53c4aa == 0) {
                let _0x2b8b15 = [];
                for (let _0xfa8dfd of _0x16d1e9?.["data"]?.["awards"]) {
                    _0xfa8dfd.couponType == 1 ? _0x2b8b15.push("[" + _0xfa8dfd.name + "]" + (_0xfa8dfd.orderAmountLimit || "无门槛") + "减" + _0xfa8dfd.amount) : _0x2b8b15.push(_0xfa8dfd.desc);
                }
                this.notify_coupon(_0x2b8b15, "社群抽奖");
            } else {
                let _0x5cd11c = _0x16d1e9?.["msg"] || _0x16d1e9?.["message"] || "";
                this.log("社群抽奖失败[" + _0x53c4aa + "]: " + _0x5cd11c);
            }
        } catch (_0x22195d) {
            console.log(_0x22195d);
        }
    }
    async ["signupRecord"](_0x3fa13d, _0x1b3b86 = {}) {
        try {
            let _0x47024f = {
                "fn": "signupRecord",
                "method": "get",
                "url": "https://promotion.waimai.meituan.com/playcenter/common/v1/treasurebox/signup/circle/record",
                "searchParams": {
                    "activityViewId": _0x3fa13d,
                    "isInDpEnv": 0,
                    "isMini": 1,
                    "cType": $.get(_0x1b3b86, "cType", "wm_wxapp")
                }
            },
                {
                    result: _0x124748
                } = await this.request(_0x47024f),
                _0x294038 = $.get(_0x124748, "code", -1);
            if (_0x294038 == 0) {
                this.log("已连续签到" + (_0x124748?.["data"]?.["signUpNum"] || 0) + "天");
                for (let _0x21bd44 of _0x124748?.["data"]?.["rewardStatus"]?.["filter"](_0x4ac456 => _0x4ac456.status == 1)) {
                    await this.signupGetBox(_0x3fa13d, _0x21bd44.stageDayNum);
                }
            } else {
                let _0x2756d3 = _0x124748?.["msg"] || _0x124748?.["message"] || "";
                this.log("查询签到失败[" + _0x294038 + "]: " + _0x2756d3);
            }
        } catch (_0x32b787) {
            console.log(_0x32b787);
        }
    }
    async ["signupGetBox"](_0x57979c, _0x31e8d0, _0x26e4e8 = {}) {
        try {
            const _0x79dd1 = {
                "signUpDayNum": _0x31e8d0
            };
            let _0x491bd4 = {
                "fn": "signupGetBox",
                "method": "post",
                "url": "https://promotion.waimai.meituan.com/playcenter/common/v1/treasurebox/signup/stage/reward/get",
                "searchParams": {
                    "isInDpEnv": 0,
                    "isMini": 1,
                    "cType": $.get(_0x26e4e8, "cType", "wm_wxapp")
                },
                "json": {
                    "activityViewId": _0x57979c,
                    "actionCode": 1000,
                    "lat": _0x108d6c,
                    "lng": _0x5c6278,
                    "fpPlatform": 13,
                    "bizParams": JSON.stringify(_0x79dd1),
                    "utmSource": "",
                    "utmCampaign": "",
                    "gdId": 421412,
                    "codeVersion": 1,
                    "mtFingerprint": ""
                }
            },
                {
                    result: _0x209c92
                } = await this.request(_0x491bd4),
                _0x3c0f5e = $.get(_0x209c92, "code", -1);
            if (_0x3c0f5e == 0) {
                let _0xc6bb5b = _0x209c92?.["data"]?.["prizeInfoList"]?.["map"](_0x484ef7 => "[" + _0x484ef7.couponInfo.couponTitle + "]" + (_0x484ef7.couponInfo.priceLimit || "无门槛") + "减" + _0x484ef7.couponInfo.couponValue);
                this.notify_coupon(_0xc6bb5b, "开签到宝箱");
            } else {
                let _0x2c3129 = _0x209c92?.["msg"] || _0x209c92?.["message"] || "";
                this.log("开签到宝箱失败[" + _0x3c0f5e + "]: " + _0x2c3129);
            }
        } catch (_0x221dd9) {
            console.log(_0x221dd9);
        }
    }
    async ["ttsqEntry"](_0x25f69b, _0x56ddbd = {}) {
        try {
            const _0x3014c0 = {
                "activityViewId": _0x25f69b,
                "actionCodes": 1000,
                "querySignupConfig": 1,
                "lat": _0x108d6c,
                "lng": _0x5c6278
            };
            const _0x2a7ed4 = {
                "fn": "signupRecord",
                "method": "get",
                "url": "https://promotion.waimai.meituan.com/playcenter/common/v1/entry",
                "searchParams": _0x3014c0
            };
            let {
                result: _0x59e411
            } = await this.request(_0x2a7ed4),
                _0x10064a = $.get(_0x59e411, "code", -1);
            if (_0x10064a == 0) {
                if (_0x59e411.data.actionInfoList) {
                    for (let _0xe0d657 of _0x59e411.data.actionInfoList) {
                        await this.ttsqDoAction(_0x25f69b, _0xe0d657.actionCode || 1000);
                    }
                }
            } else {
                let _0x263d0d = _0x59e411?.["msg"] || _0x59e411?.["message"] || "";
                this.log("查询天天神券宝箱失败[" + _0x10064a + "]: " + _0x263d0d);
            }
        } catch (_0x12e58f) {
            console.log(_0x12e58f);
        }
    }
    async ["ttsqDoAction"](_0x340a9e, _0x5b40bc, _0xec5ed9 = {}) {
        try {
            let _0x42a633 = {
                "fn": "ttsqDoAction",
                "method": "post",
                "url": "https://promotion.waimai.meituan.com/playcenter/common/v1/doaction",
                "json": {
                    "activityViewId": _0x340a9e,
                    "actionCode": _0x5b40bc || 1000,
                    "lat": _0x108d6c,
                    "lng": _0x5c6278,
                    "gdId": 26403,
                    "fpPlatform": 13,
                    "utmSource": "",
                    "utmCampaign": "",
                    "mtFingerprint": ""
                }
            },
                {
                    result: _0x1e3810
                } = await this.request(_0x42a633),
                _0x197a20 = $.get(_0x1e3810, "code", -1);
            if (_0x197a20 == 0) {
                let _0x999c84 = _0x1e3810?.["data"]?.["prizeInfoList"]?.["map"](_0x5358c6 => _0x5358c6.awardType >= 0 ? "[" + _0x5358c6.couponInfo.couponTitle + "]" + (_0x5358c6.couponInfo.priceLimit || "无门槛") + "减" + _0x5358c6.couponInfo.couponValue : "")?.["filter"](_0x13620d => _0x13620d);
                this.notify_coupon(_0x999c84, "开天天神券宝箱");
            } else {
                let _0x1ebeb2 = _0x1e3810?.["msg"] || _0x1e3810?.["message"] || "";
                this.log("开天天神券宝箱失败[" + _0x197a20 + "]: " + _0x1ebeb2);
            }
        } catch (_0x26b793) {
            console.log(_0x26b793);
        }
    }
    async ["clockInStatus"](_0x326509, _0x213d83 = {}) {
        try {
            let _0x8050cf = {
                "fn": "clockInStatus",
                "method": "get",
                "url": "https://promotion.waimai.meituan.com/playcenter/common/v1/clock-in/status",
                "searchParams": {
                    "activityViewId": _0x326509,
                    "ctype": $.get(_0x213d83, "ctype", "wm_wxapp"),
                    "isInDpEnv": 0
                }
            },
                {
                    result: _0x5bc2f7
                } = await this.request(_0x8050cf),
                _0x2f2586 = $.get(_0x5bc2f7, "code", -1);
            if (_0x2f2586 == 0) {
                let _0x24699c = new Date().getDay();
                for (let _0x4f58a0 of _0x5bc2f7.data.clockInStatus) {
                    if (_0x4f58a0.dayOfWeek % 7 == _0x24699c) {
                        this.log("今天社群" + (_0x4f58a0.status ? "已" : "未") + "签到, 本周已签到" + _0x5bc2f7.data.clockInNum + "天");
                        if (!_0x4f58a0.status) {
                            await this.clockInSign(_0x326509);
                        }
                        break;
                    }
                }
                _0x5bc2f7.data.lotteryStatus == 1 && (await this.ttsqDoAction(_0x326509, 1001));
            } else {
                let _0x54fcc2 = _0x5bc2f7?.["msg"] || _0x5bc2f7?.["message"] || "";
                this.log("查询社群签到失败[" + _0x2f2586 + "]: " + _0x54fcc2);
            }
        } catch (_0x1ef26) {
            console.log(_0x1ef26);
        }
    }
    async ["clockInSign"](_0x5ba7b0, _0x5aa8a6 = {}) {
        try {
            const _0x3027e6 = {
                "activityViewId": _0x5ba7b0,
                "actionCode": 1001,
                "lat": _0x108d6c,
                "lng": _0x5c6278
            };
            let _0xb58f54 = {
                "fn": "clockInSign",
                "method": "post",
                "url": "https://promotion.waimai.meituan.com/playcenter/common/v1/clock-in",
                "searchParams": {
                    "isMini": 1,
                    "ctype": $.get(_0x5aa8a6, "ctype", "wm_wxapp"),
                    "isInDpEnv": 0
                },
                "json": _0x3027e6
            },
                {
                    result: _0x3c5dbd
                } = await this.request(_0xb58f54),
                _0x4c0887 = $.get(_0x3c5dbd, "code", -1);
            if (_0x4c0887 == 0) {
                let _0x3de967 = _0x3c5dbd?.["data"]?.["prizeInfoList"]?.["map"](_0x21e85c => "[" + _0x21e85c.couponInfo.couponTitle + "]" + (_0x21e85c.couponInfo.priceLimit || "无门槛") + "减" + _0x21e85c.couponInfo.couponValue);
                this.notify_coupon(_0x3de967);
            } else {
                let _0x496673 = _0x3c5dbd?.["msg"] || _0x3c5dbd?.["message"] || "";
                this.log("社群签到失败[" + _0x4c0887 + "]: " + _0x496673);
            }
        } catch (_0x4e14e9) {
            console.log(_0x4e14e9);
        }
    }
    async ["cardLotteryNum"](_0x5597b4 = {}) {
        try {
            const _0x4c51c7 = {
                "fn": "cardLotteryNum",
                "method": "post",
                "url": "https://mgm.meituan.com/marketing/cardsCollect/api/cardLotteryNum",
                "json": {}
            };
            _0x4c51c7.json.activityId = "1116";
            _0x4c51c7.json.topicIdList = ["1380101169187258449", "1380101260094521416", "1412292930126868547"];
            let {
                result: _0x37cbee
            } = await this.request(_0x4c51c7);
            if (_0x37cbee?.["lotteryNum"] >= 0) {
                let _0x18f7b1 = _0x37cbee.lotteryNum;
                this.log("有" + _0x18f7b1 + "次抽月符机会");
                while (_0x18f7b1-- > 0) {
                    await this.lotteryfrompool(_0x37cbee.poolIdList);
                }
            } else {
                let _0x1d03c8 = _0x37cbee?.["msg"] || _0x37cbee?.["message"] || "";
                this.log("查询抽月符次数失败: " + _0x1d03c8);
            }
        } catch (_0x53949) {
            console.log(_0x53949);
        }
    }
    async ["cardSaveAccess"](_0x5cf03e = {}) {
        try {
            const _0x4b3234 = {
                "playerId": 1
            };
            const _0x7b7a6 = {
                "fn": "cardSaveAccess",
                "method": "post",
                "url": "https://mgm.meituan.com/marketing/cardsCollect/api/saveAccess",
                "json": _0x4b3234
            };
            await this.request(_0x7b7a6);
        } catch (_0x1dde5e) {
            console.log(_0x1dde5e);
        }
    }
    async ["cardSaveShare"](_0x2730b3 = {}) {
        try {
            const _0x28b5bf = {
                "playerId": 1,
                "shareWay": 1,
                "shareContentType": 1,
                "shareContentId": "29"
            };
            const _0x5449b1 = {
                "fn": "cyfSaveShare",
                "method": "post",
                "url": "https://mgm.meituan.com/marketing/cardsCollect/api/saveShare",
                "json": _0x28b5bf
            };
            await this.request(_0x5449b1);
        } catch (_0x2472b7) {
            console.log(_0x2472b7);
        }
    }
    async ["lotteryfrompool"](_0x594391, _0x55d4cb = {}) {
        try {
            const _0x301a2e = {
                "poolList": _0x594391
            };
            const _0x27cda2 = {
                "fn": "lotteryfrompool",
                "method": "post",
                "url": "https://mgm.meituan.com/marketing/cardsCollect/api/lotteryfrompool",
                "json": _0x301a2e
            };
            let {
                result: _0x591779
            } = await this.request(_0x27cda2);
            if (_0x591779?.["prizeInfo"]?.["name"]) {
                this.log("抽到月符: [" + _0x591779?.["prizeInfo"]?.["name"] + "]");
                await this.getCardInfo(_0x591779?.["lotteryAwardSerialNo"]?.["value"]);
            } else {
                let _0x69ea15 = _0x591779?.["msg"] || _0x591779?.["message"] || "";
                this.log("抽月符失败: " + _0x69ea15);
            }
        } catch (_0x1fb0c7) {
            console.log(_0x1fb0c7);
        }
    }
    async ["getCardInfo"](_0x156bfe, _0x2bdfae = {}) {
        try {
            const _0x51bb60 = {
                "lotteryAwardSerialNo": _0x156bfe
            };
            const _0x3f0871 = {
                "fn": "getCardInfo",
                "method": "get",
                "url": "https://mgm.meituan.com/marketing/cardsCollect/api/getCardInfo",
                "searchParams": _0x51bb60
            };
            let {
                result: _0x302ec3
            } = await this.request(_0x3f0871),
                _0x278a8e = $.get(_0x302ec3, "code", -1);
            if (_0x278a8e == 0) {
                await this.getCardDraw(_0x302ec3?.["userCardInfo"]?.["cardId"]);
            } else {
                let _0x54297f = _0x302ec3?.["msg"] || _0x302ec3?.["message"] || "";
                this.log("查询月符抽奖卡号失败[" + _0x278a8e + "]: " + _0x54297f);
            }
        } catch (_0x2ff77e) {
            console.log(_0x2ff77e);
        }
    }
    async ["getCardDraw"](_0x5b38dd, _0x22d5a5 = {}) {
        try {
            const _0xe424b3 = {
                "cardId": _0x5b38dd
            };
            const _0xcbc7b1 = {
                "fn": "getCardDraw",
                "method": "get",
                "url": "https://mgm.meituan.com/marketing/cardsCollect/api/draw",
                "searchParams": _0xe424b3
            };
            let {
                result: _0x4157df
            } = await this.request(_0xcbc7b1);
            if (_0x4157df?.["bingo"]?.["value"]) {
                this.log("月符抽奖: " + _0x4157df?.["prizeInfo"]?.["name"]);
            } else {
                let _0x56243d = _0x4157df?.["msg"] || _0x4157df?.["message"] || "";
                this.log("查询月符抽奖结果失败: " + _0x56243d);
            }
        } catch (_0x3eedc9) {
            console.log(_0x3eedc9);
        }
    }
    async ["getUserTasks"](_0x4bf08f, _0x2ba382 = {}) {
        try {
            const _0x176d0e = {
                "fn": "getUserTasks",
                "method": "post",
                "url": "https://cube.meituan.com/topcube/api/toc/task/getUserTasks",
                "json": {}
            };
            _0x176d0e.json.uuid = this.uuid;
            _0x176d0e.json.userId = this.userId;
            _0x176d0e.json.browseAreaTrue = true;
            _0x176d0e.json.cityId = 30;
            _0x176d0e.json.taskIdKeys = _0x4bf08f.taskIdKeys;
            _0x176d0e.json.userType = "MEI_TUAN";
            _0x176d0e.json.sourceType = "MEI_TUAN";
            _0x176d0e.json.mini_program_token = this.token;
            _0x176d0e.json.inviter = "";
            _0x176d0e.json.inviterTaskIdKey = "";
            let {
                result: _0x1e7029
            } = await this.request(_0x176d0e);
            if (_0x1e7029?.["code"] == 0) {
                for (let _0x4f5b6c of _0x1e7029.data) {
                    if (!_0x477d3f.includes(_0x4f5b6c?.["code"]?.["toString"]())) {
                        if (_0x4f5b6c.taskConf) {
                            let _0x34798b = JSON.parse(_0x4f5b6c.taskConf);
                            if (_0x34798b.isCheckNgSignature) {
                                $.log("任务[" + _0x4f5b6c.title + "] -- 有强验证, 跳过");
                                continue;
                            }
                        }
                        if (!_0x4f5b6c?.["taskRuleVos"]?.["length"]) {
                            $.log("任务[" + _0x4f5b6c.title + "] -- " + _0x4f5b6c.msg);
                            continue;
                        }
                        if (_0x4f5b6c?.["title"]?.["includes"]("小程序下单")) {
                            continue;
                        }
                        let _0x2b0420 = _0x4f5b6c?.["extend"] ? true : false;
                        if (_0x2b0420 && _0x4f5b6c?.["extend"]?.["isSignInToday"] == 1) {
                            $.log("任务[" + _0x4f5b6c.title + "] -- 已完成");
                            continue;
                        }
                        for (let _0x38d9c9 of _0x4f5b6c.taskRuleVos) {
                            if (_0x38d9c9.status == "PRIZE_SUCC" || _0x38d9c9.status == "DELETE") {
                                !_0x2b0420 && $.log("任务[" + _0x4f5b6c.title + "] -- 已完成");
                            } else {
                                if (_0x38d9c9?.["status"] == "CAN_RECEIVE") {
                                    $.log("任务[" + _0x4f5b6c.title + "] -- 可领取奖励");
                                    await this.sendTaskPrize(_0x4bf08f, _0x4f5b6c, _0x38d9c9);
                                    if (_0x2b0420) {
                                        break;
                                    }
                                } else {
                                    $.log("任务[" + _0x4f5b6c.title + "] -- 未完成");
                                    let _0x37aa0a = true,
                                        _0x1177bb = JSON.parse(_0x38d9c9.ruleConfig);
                                    if (_0x1177bb.limitTime) {
                                        let _0xe88bd8 = (_0x38d9c9.preCompleteTime || 0) + _0x1177bb.limitTime * 1000;
                                        Date.now() < _0xe88bd8 && (_0x37aa0a = false, $.log("任务[" + _0x4f5b6c.title + "]冷却中, [" + $.time("hh:mm:ss", _0xe88bd8) + "]后可完成"));
                                    } else {
                                        if (_0x1177bb?.["timeLimits"]?.["length"]) {
                                            let _0x1263c2 = new Date($.time("yyyy-MM-dd 00:00:00")).getTime(),
                                                _0x811c6e = Date.now();
                                            for (let _0x26ee5b of _0x1177bb.timeLimits) {
                                                let {
                                                    startTime: _0x5e03f2,
                                                    endTime: _0x26d315
                                                } = _0x26ee5b;
                                                _0x5e03f2 += _0x1263c2;
                                                _0x26d315 += _0x1263c2;
                                                (_0x811c6e < _0x5e03f2 || _0x811c6e >= _0x26d315) && (_0x37aa0a = false, $.log("任务[" + _0x4f5b6c.title + "]不在时间段中: " + $.time("hh:mm:ss", _0x5e03f2) + "到" + $.time("hh:mm:ss", _0x26d315)));
                                            }
                                        }
                                    }
                                    _0x37aa0a && (await this.startUserTask(_0x4bf08f, _0x4f5b6c, _0x38d9c9));
                                    if (_0x2b0420) {
                                        break;
                                    }
                                }
                            }
                        }
                    }
                }
            } else {
                let _0x806540 = _0x1e7029?.["msg"] || _0x1e7029?.["desc"] || "";
                this.log("查询任务列表失败: " + _0x806540);
            }
        } catch (_0x54efa9) {
            console.log(_0x54efa9);
        }
    }
    async ["startUserTask"](_0x3e2cee, _0x5899fa, _0x3d8cfa, _0x2a3a62 = {}) {
        try {
            let _0x1afb09 = {
                "fn": "startUserTask",
                "method": "post",
                "url": "https://cube.meituan.com/topcube/api/toc/task/startUserTask",
                "json": {
                    "uuid": this.uuid,
                    "userId": this.userId,
                    "cityId": 30,
                    "riskForm": this.encode_riskForm(),
                    "taskIdKey": _0x5899fa.taskIdKey,
                    "taskRuleIdKey": _0x3d8cfa.taskRuleIdKey,
                    "cubePageId": _0x3e2cee.cubePageId,
                    "userType": "MEI_TUAN",
                    "sourceType": "MEI_TUAN",
                    "mini_program_token": this.token
                },
                "headers": {
                    "M-TRACEID": "32358943431" + $.randomString(8, _0x3d8be2)
                }
            },
                {
                    result: _0x15d982
                } = await this.request(_0x1afb09);
            if (_0x15d982?.["code"] == 0) {
                let _0x2f4600 = JSON.parse(_0x3d8cfa.ruleConfig);
                if (_0x2f4600.staySeconds) {
                    let _0x534fa8 = _0x2f4600.staySeconds * 1000;
                    this.log("等待" + _0x2f4600.staySeconds + "秒后完成任务..");
                    await $.wait(_0x534fa8);
                } else {
                    this.log("完成任务[" + _0x5899fa.title + "]成功");
                }
                await this.updateUserTask(_0x3e2cee, _0x5899fa, _0x3d8cfa, _0x15d982);
            } else {
                let _0x376d09 = _0x15d982?.["msg"] || _0x15d982?.["desc"] || "";
                this.log("完成任务[" + _0x5899fa.title + "]失败: " + _0x376d09);
                _0x376d09?.["includes"]("活动已完成") && (await this.updateUserTask(_0x3e2cee, _0x5899fa, _0x3d8cfa));
            }
        } catch (_0x1b4b78) {
            console.log(_0x1b4b78);
        }
    }
    ["process_task_prize"](_0x321a64) {
        let _0x1c1eb7 = [];
        for (let _0x8fd61b of _0x321a64) {
            if (_0x8fd61b.number) {
                _0x1c1eb7.push(_0x8fd61b.number + "金币");
            } else {
                if (_0x8fd61b?.["sendMagicCardResult"]?.["cardList"]?.["length"]) {
                    for (let _0x1a3866 of _0x8fd61b.sendMagicCardResult.cardList) {
                        _0x1c1eb7.push("[" + (_0x5cdf0f[_0x1a3866.type] || _0x1a3866.type) + "]x" + _0x1a3866.amount);
                    }
                } else {
                    if (_0x8fd61b?.["sendMagicStoneResult"]?.["stoneList"]?.["length"]) {
                        for (let _0x3247a1 of _0x8fd61b.sendMagicStoneResult.stoneList) {
                            _0x1c1eb7.push("[" + (_0x48cc80[_0x3247a1.magicStonePrizeType] || _0x3247a1.magicStonePrizeType) + "]x" + _0x3247a1.amount);
                        }
                    } else {
                        if (_0x8fd61b?.["sendCouponResultList"]?.["length"]) {
                            for (let _0x4ddef3 of _0x8fd61b.sendCouponResultList) {
                                _0x1c1eb7.push((_0x4ddef3.useCondition || "无门槛") + "减" + _0x4ddef3.couponValue + _0x4ddef3.couponTypeDesc + "券");
                            }
                        }
                    }
                }
            }
        }
        return _0x1c1eb7;
    }
    async ["updateUserTask"](_0x3190e2, _0x317088, _0x1a0692, _0x38818a = {}, _0x515abc = {}) {
        try {
            let {
                actionNo = "",
                taskNo = "",
                taskRuleNo = ""
            } = _0x38818a;
            taskNo = taskNo || _0x317088?.["taskNo"] || "";
            taskRuleNo = taskRuleNo || _0x1a0692?.["taskRuleNo"] || "";
            let _0xe1f0b7 = {
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
                    "taskIdKey": _0x317088.taskIdKey,
                    "taskRuleNo": taskRuleNo,
                    "taskRuleIdKey": _0x1a0692.taskRuleIdKey,
                    "cubePageId": _0x3190e2.cubePageId,
                    "userType": "MEI_TUAN",
                    "sourceType": "MEI_TUAN",
                    "mini_program_token": this.token
                }
            },
                {
                    result: _0x592ed8
                } = await this.request(_0xe1f0b7);
            if (_0x592ed8?.["code"] == 0) {
                if (_0x592ed8?.["prizeList"]?.["length"]) {
                    let _0x53460e = this.process_task_prize(_0x592ed8.prizeList);
                    this.log("领取任务[" + _0x317088.title + "]奖励获得: " + _0x53460e.join(","));
                } else {
                    this.log("更新任务[" + _0x317088.title + "]状态成功");
                    await this.sendTaskPrize(_0x3190e2, _0x317088, _0x1a0692, _0x38818a);
                }
            } else {
                let _0xdef6a9 = _0x592ed8?.["msg"] || _0x592ed8?.["desc"] || "";
                this.log("更新任务[" + _0x317088.title + "]状态失败: " + _0xdef6a9);
            }
        } catch (_0x1d07f2) {
            console.log(_0x1d07f2);
        }
    }
    async ["sendTaskPrize"](_0x34b899, _0x39cbd3, _0x5228c8, _0x3c6c25 = {}, _0x32d091 = {}) {
        try {
            let {
                actionNo = "",
                taskNo = "",
                taskRuleNo = ""
            } = _0x3c6c25;
            taskNo = taskNo || _0x39cbd3?.["taskNo"] || "";
            taskRuleNo = taskRuleNo || _0x5228c8?.["taskRuleNo"] || "";
            let _0xcc1ec5 = {
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
                    "taskIdKey": _0x39cbd3.taskIdKey,
                    "taskRuleNo": taskRuleNo,
                    "taskRuleIdKey": _0x5228c8.taskRuleIdKey,
                    "cubePageId": _0x34b899.cubePageId,
                    "userType": "MEI_TUAN",
                    "sourceType": "MEI_TUAN",
                    "mini_program_token": this.token
                }
            },
                {
                    result: _0x23a66c
                } = await this.request(_0xcc1ec5);
            if (_0x23a66c?.["code"] == 0) {
                if (_0x23a66c?.["prizeList"]?.["length"]) {
                    let _0x305daa = this.process_task_prize(_0x23a66c.prizeList);
                    this.log("领取任务[" + _0x39cbd3.title + "]奖励获得: " + _0x305daa.join(","));
                } else {
                    this.log("没有领取到任务[" + _0x39cbd3.title + "]奖励");
                }
            } else {
                let _0x1a996f = _0x23a66c?.["msg"] || _0x23a66c?.["desc"] || "";
                this.log("领取任务[" + _0x39cbd3.title + "]奖励失败: " + _0x1a996f);
            }
        } catch (_0x3897cc) {
            console.log(_0x3897cc);
        }
    }
    async ["earnDailyLogin"](_0x5e0e36 = {}) {
        try {
            let _0x4338f8 = _0x5e0e36.gameType || 10402;
            const _0x689f86 = {
                "cityId": "30"
            };
            let _0x93fc34 = {
                "fn": "earnDailyLogin",
                "method": "get",
                "url": "https://game.meituan.com/earn-daily/login/loginMgc",
                "searchParams": {
                    "gameType": _0x4338f8,
                    "mtToken": this.token,
                    "mtUserId": this.userId,
                    "mtDeviceId": this.uuid,
                    "nonceStr": $.randomString(16),
                    "externalStr": JSON.stringify(_0x689f86)
                }
            },
                {
                    result: _0x349aed
                } = await this.request(_0x93fc34),
                _0x4ba054 = $.get(_0x349aed, "code", -1);
            if (_0x4ba054 == 0) {
                this.acToken = _0x349aed?.["response"]?.["accessToken"];
            } else {
                let _0x26b3d4 = _0x349aed?.["msg"] || _0x349aed?.["desc"] || "";
                this.log("登录游戏[" + _0x4338f8 + "]失败[" + _0x4ba054 + "]: " + _0x26b3d4);
            }
        } catch (_0x55fa24) {
            console.log(_0x55fa24);
        }
    }
    async ["earnDailyPost"](_0x5e0b5b = {}) {
        let _0x290043 = {};
        try {
            let _0x48aa91 = _0x5e0b5b.protocolId,
                _0x518ad5 = _0x5e0b5b.data || {},
                _0x4ead5d = {
                    "fn": "earnDailyPost",
                    "method": "post",
                    "url": "https://game.meituan.com/earn-daily/msg/post",
                    "json": {
                        "acToken": this.acToken,
                        "riskParams": this.get_app_riskForm(),
                        "protocolId": _0x48aa91,
                        "data": _0x518ad5
                    },
                    "headers": {
                        "Origin": "https://awp.meituan.com",
                        "Referer": "https://awp.meituan.com/"
                    }
                };
            await $.wait_gap_interval(this.t_earnDaily, _0x41fe89);
            _0x290043 = await this.request(_0x4ead5d);
            this.t_earnDaily = Date.now();
        } catch (_0x2b4be6) {
            console.log(_0x2b4be6);
        } finally {
            return _0x290043;
        }
    }
    async ["earnDaily_task_list"](_0x1a8cfc = {}) {
        try {
            const _0x5eab2d = {
                "acToken": this.acToken
            };
            const _0x550ddc = {
                "protocolId": 1001,
                "data": _0x5eab2d
            };
            {
                let {
                    result: _0x385971
                } = await this.earnDailyPost(_0x550ddc),
                    _0x9c3753 = $.get(_0x385971, "code", -1);
                if (_0x9c3753 == 200) {
                    for (let _0x3cf3cb of _0x385971?.["data"]?.["signInPopModel"]?.["rewardModelList"] || []) {
                        _0x3cf3cb.current && _0x3cf3cb.state == 1 && (await this.earnDaily_sign());
                    }
                    for (let _0x364ec3 of _0x385971?.["data"]?.["taskInfoList"] || []) {
                        switch (_0x364ec3.id) {
                            case 780:
                            case 15099:
                            case 15278:
                                break;
                            default:
                                _0x364ec3.dailyRewardTimes < _0x364ec3.dailyFinishTimes && (await this.earnDaily_get_reward(_0x364ec3));
                                for (let _0xca8e15 = _0x364ec3.dailyFinishTimes; _0xca8e15 < _0x364ec3.mgcTaskBaseInfo.curPeriodMaxFinishTimes; _0xca8e15++) {
                                    await this.earnDaily_do_task(_0x364ec3);
                                }
                                break;
                        }
                    }
                } else {
                    let _0xd6de2f = _0x385971?.["msg"] || _0x385971?.["desc"] || "";
                    this.log("查询任务失败[" + _0x9c3753 + "]: " + _0xd6de2f);
                }
            }
            {
                let {
                    result: _0x5b06ff
                } = await this.earnDailyPost(_0x550ddc),
                    _0x88e681 = $.get(_0x5b06ff, "code", -1);
                if (_0x88e681 == 200) {
                    let _0x3154aa = _0x5b06ff?.["data"]?.["playerBaseModel"]?.["redPacketInfo"]?.["leftRedPacketAmount"] || 0;
                    this.log("可以开" + _0x3154aa + "次红包");
                    while (_0x3154aa-- > 0) {
                        await this.earnDaily_redbag();
                    }
                } else {
                    let _0x2e0beb = _0x5b06ff?.["msg"] || _0x5b06ff?.["desc"] || "";
                    this.log("查询红包次数失败[" + _0x88e681 + "]: " + _0x2e0beb);
                }
            }
            {
                let {
                    result: _0x50c707
                } = await this.earnDailyPost(_0x550ddc),
                    _0x5c1e9b = $.get(_0x50c707, "code", -1);
                if (_0x5c1e9b == 200) {
                    let _0x587f4f = _0x50c707?.["data"]?.["playerBaseModel"]?.["lotteryInfo"]?.["leftLotteryTimesAmount"] || 0;
                    this.log("可以抽奖" + _0x587f4f + "次");
                    while (_0x587f4f-- > 0) {
                        await this.earnDaily_draw();
                    }
                } else {
                    let _0x22430f = _0x50c707?.["msg"] || _0x50c707?.["desc"] || "";
                    this.log("查询转盘次数失败[" + _0x5c1e9b + "]: " + _0x22430f);
                }
            }
            {
                let {
                    result: _0x2675e9
                } = await this.earnDailyPost(_0x550ddc),
                    _0x593e0a = $.get(_0x2675e9, "code", -1);
                if (_0x593e0a == 200) {
                    this.cash = _0x2675e9?.["data"]?.["playerBaseModel"]?.["activityCycleInfo"]?.["cashToken"] || 0;
                    this.coin = _0x2675e9?.["data"]?.["playerBaseModel"]?.["activityCycleInfo"]?.["coinToken"] || 0;
                    this.coin > 0 && (await this.earnDaily_coinInfo());
                    const _0x20dd7f = {
                        "notify": true
                    };
                    this.log("每日赚钱余额: " + (this.cash / 100).toFixed(2) + "元, " + this.coin + "金币", _0x20dd7f);
                } else {
                    let _0x2a778b = _0x2675e9?.["msg"] || _0x2675e9?.["desc"] || "";
                    this.log("查询转盘次数失败[" + _0x593e0a + "]: " + _0x2a778b);
                }
            }
            await this.earnDaily_get_withdraw_list();
        } catch (_0x1650a2) {
            console.log(_0x1650a2);
        }
    }
    async ["earnDaily_coinInfo"](_0xc87da8 = {}) {
        try {
            const _0x4bdbbf = {
                "protocolId": 1015
            };
            let {
                result: _0x468b83
            } = await this.earnDailyPost(_0x4bdbbf),
                _0xa98d8d = $.get(_0x468b83, "code", -1);
            if (_0xa98d8d == 200) {
                let _0x4c825f = _0x468b83?.["data"]?.["exchangeInfoList"]?.["filter"](_0x381d9c => _0x381d9c.name == "翻红包现金");
                if (!_0x4c825f.length) {
                    return;
                }
                let _0x2638ce = _0x4c825f[0];
                this.coin >= _0x2638ce.price && (await this.earnDaily_coinExchange(_0x2638ce));
            } else {
                let _0x240d3b = _0x468b83?.["msg"] || _0x468b83?.["desc"] || "";
                this.log("查询金币兑换失败[" + _0xa98d8d + "]: " + _0x240d3b);
            }
        } catch (_0x2c05d5) {
            console.log(_0x2c05d5);
        }
    }
    async ["earnDaily_coinExchange"](_0x1d05a6, _0x843041 = {}) {
        try {
            const _0x1cdc79 = {
                "skuId": _0x1d05a6.skuId
            };
            const _0xfc7cb = {
                "protocolId": 1016,
                "data": _0x1cdc79
            };
            let {
                result: _0x4d4ee4
            } = await this.earnDailyPost(_0xfc7cb),
                _0x5f0e74 = $.get(_0x4d4ee4, "code", -1);
            if (_0x5f0e74 == 200) {
                this.cash = _0x4d4ee4?.["data"]?.["activityCycleInfo"]?.["cashToken"] || 0;
                this.coin = _0x4d4ee4?.["data"]?.["activityCycleInfo"]?.["coinToken"] || 0;
                this.log("使用" + _0x1d05a6.price + "金币兑换余额成功: 剩余" + this.coin + "金币");
                let _0x47fc83 = _0x4d4ee4?.["data"]?.["exchangeInfoList"]?.["filter"](_0xff8efb => _0xff8efb.name == "翻红包现金");
                if (!_0x47fc83.length) {
                    return;
                }
                let _0x2042e0 = _0x47fc83[0];
                this.coin >= _0x2042e0.price && (await this.earnDaily_coinExchange(_0x2042e0));
            } else {
                let _0x108d71 = _0x4d4ee4?.["msg"] || _0x4d4ee4?.["desc"] || "";
                this.log("使用" + _0x1d05a6.price + "金币兑换余额失败[" + _0x5f0e74 + "]: " + _0x108d71);
            }
        } catch (_0x3e05a4) {
            console.log(_0x3e05a4);
        }
    }
    async ["earnDaily_sign"](_0xc548fe = {}) {
        try {
            const _0x538d50 = {
                "protocolId": 1007
            };
            let {
                result: _0x428c09
            } = await this.earnDailyPost(_0x538d50),
                _0x5654f6 = $.get(_0x428c09, "code", -1);
            if (_0x5654f6 == 200) {
                this.log("签到成功: " + (_0x428c09?.["data"]?.["remitNotificationModelList"]?.["map"](_0xa358bb => _0xa358bb.content)?.["join"](",") || ""));
            } else {
                let _0x57e276 = _0x428c09?.["msg"] || _0x428c09?.["desc"] || "";
                this.log("签到失败[" + _0x5654f6 + "]: " + _0x57e276);
            }
        } catch (_0xa7ddf4) {
            console.log(_0xa7ddf4);
        }
    }
    async ["earnDaily_do_task"](_0x1ce975, _0x14c8e3 = {}) {
        try {
            const _0x56cfd9 = {
                "taskId": _0x1ce975.id
            };
            const _0x4354ba = {
                "protocolId": 1004,
                "data": _0x56cfd9
            };
            let {
                result: _0x71aa2b
            } = await this.earnDailyPost(_0x4354ba),
                _0x4f3aee = $.get(_0x71aa2b, "code", -1);
            if (_0x4f3aee == 200) {
                this.log("完成任务[" + (_0x1ce975?.["mgcTaskBaseInfo"]?.["viewTitle"] || _0x1ce975?.["id"]) + "]成功");
                await this.earnDaily_get_reward(_0x1ce975);
            } else {
                let _0x4efe5a = _0x71aa2b?.["msg"] || _0x71aa2b?.["desc"] || "";
                this.log("完成任务[" + (_0x1ce975?.["mgcTaskBaseInfo"]?.["viewTitle"] || _0x1ce975?.["id"]) + "]失败[" + _0x4f3aee + "]: " + _0x4efe5a);
            }
        } catch (_0x46c09c) {
            console.log(_0x46c09c);
        }
    }
    async ["earnDaily_get_reward"](_0x3539b7, _0x1717f0 = {}) {
        try {
            const _0x3fa4f6 = {
                "taskId": _0x3539b7.id
            };
            const _0x271551 = {
                "protocolId": 1005,
                "data": _0x3fa4f6
            };
            let {
                result: _0x4fa014
            } = await this.earnDailyPost(_0x271551),
                _0x5e63fb = $.get(_0x4fa014, "code", -1);
            if (_0x5e63fb == 200) {
                this.log("领取任务[" + _0x3539b7.mgcTaskBaseInfo.viewTitle + "]奖励成功");
            } else {
                let _0x516f7b = _0x4fa014?.["msg"] || _0x4fa014?.["desc"] || "";
                this.log("领取任务[" + _0x3539b7.mgcTaskBaseInfo.viewTitle + "]奖励失败[" + _0x5e63fb + "]: " + _0x516f7b);
            }
        } catch (_0x4dc7af) {
            console.log(_0x4dc7af);
        }
    }
    async ["earnDaily_redbag"](_0x1c2d1a = {}) {
        try {
            const _0x27e57f = {
                "protocolId": 1008
            };
            let {
                result: _0x9f0b2f
            } = await this.earnDailyPost(_0x27e57f),
                _0x788a70 = $.get(_0x9f0b2f, "code", -1);
            if (_0x788a70 == 200) {
                let _0x3b634b = _0x9f0b2f?.["data"]?.["rewardModelList"]?.["filter"](_0x29db97 => _0x29db97.rewarded) || [];
                if (_0x3b634b.length) {
                    let _0x40c12d = _0x3b634b[0];
                    if (_0x40c12d.resourceType == 1) {
                        this.log("开红包获得: " + (_0x40c12d.amount / 100).toFixed(2) + "元");
                    } else {
                        _0x40c12d.resourceType == 2 ? this.log("开红包获得: " + _0x40c12d.amount + "金币") : this.log("开红包获得: " + JSON.stringify(_0x40c12d));
                    }
                }
            } else {
                let _0x1dd7bc = _0x9f0b2f?.["msg"] || _0x9f0b2f?.["desc"] || "";
                this.log("开红包失败[" + _0x788a70 + "]: " + _0x1dd7bc);
            }
        } catch (_0x5ba8fb) {
            console.log(_0x5ba8fb);
        }
    }
    async ["earnDaily_draw"](_0x24ea84 = {}) {
        try {
            const _0x1bb414 = {
                "protocolId": 1010
            };
            let {
                result: _0x316b6f
            } = await this.earnDailyPost(_0x1bb414),
                _0x477b0a = $.get(_0x316b6f, "code", -1);
            if (_0x477b0a == 200) {
                let _0x3b1dc6 = _0x316b6f?.["data"]?.["currentReward"];
                if (_0x3b1dc6?.["rewardedCouponModel"]) {
                    this.log("转盘抽奖: " + _0x3b1dc6.rewardedCouponModel?.["useRule"] + _0x3b1dc6.rewardedCouponModel?.["name"]);
                    return;
                }
                switch (_0x3b1dc6?.["resourceType"]) {
                    case 1:
                        let _0x2894d8 = ((_0x3b1dc6?.["amount"] || 0) / 100).toFixed(2);
                        this.log("转盘抽奖: " + _0x2894d8 + "元余额");
                        break;
                    case 2:
                        this.log("转盘抽奖: " + _0x3b1dc6?.["amount"] + "金币");
                        break;
                    case 3:
                        this.log("转盘抽奖: 随机提现机会");
                        break;
                    default:
                        this.log("转盘抽奖: " + JSON.stringify(_0x316b6f));
                        break;
                }
            } else {
                let _0x30bf7d = _0x316b6f?.["msg"] || _0x316b6f?.["desc"] || "";
                this.log("转盘抽奖失败[" + _0x477b0a + "]: " + _0x30bf7d);
            }
        } catch (_0x372de1) {
            console.log(_0x372de1);
        }
    }
    async ["earnDaily_get_withdraw_list"](_0x2737e3 = {}) {
        try {
            const _0x379504 = {
                "protocolId": 1012
            };
            let {
                result: _0x6c407f
            } = await this.earnDailyPost(_0x379504),
                _0x115531 = $.get(_0x6c407f, "code", -1);
            if (_0x115531 == 200) {
                let _0x246e2f = _0x6c407f?.["data"]?.["activityCycleInfo"]?.["cashToken"] || 0,
                    _0x2706ee = (_0x246e2f / 100).toFixed(2);
                this.log("红包余额: " + _0x2706ee + "元");
                let _0x35cbd0 = (_0x6c407f?.["data"]?.["cashList"] || []).sort(function (_0x1982a0, _0x387bb3) {
                    return _0x387bb3.amount - _0x1982a0.amount;
                });
                if (MT_AutoWithdraw == "false" || !MT_AutoWithdraw) {
                    _0x35cbd0 = _0x35cbd0.filter(_0x1e2faa => _0x1e2faa.amount == 5000);
                }
                for (let _0x31b507 of _0x35cbd0) {
                    if (_0x31b507.amount > _0x246e2f) {
                        continue;
                    }
                    if (await this.earnDaily_withdraw(_0x31b507)) {
                        break;
                    }
                }
            } else {
                let _0x1bdf41 = _0x6c407f?.["msg"] || _0x6c407f?.["desc"] || "";
                this.log("查询提现列表失败[" + _0x115531 + "]: " + _0x1bdf41);
            }
        } catch (_0x230d3d) {
            console.log(_0x230d3d);
        }
    }
    async ["earnDaily_withdraw"](_0x39a10b, _0x5323b0 = {}) {
        let _0x1ff106 = false;
        try {
            let _0x554574 = (_0x39a10b.amount / 100).toFixed(2);
            const _0x167246 = {
                "id": _0x39a10b.id,
                "amount": _0x39a10b.amount
            };
            const _0x5e6eb4 = {
                "protocolId": 1013,
                "data": _0x167246
            };
            let {
                result: _0x3d410a
            } = await this.earnDailyPost(_0x5e6eb4),
                _0x5a87dc = $.get(_0x3d410a, "code", -1);
            if (_0x5a87dc == 200) {
                _0x1ff106 = true;
                const _0x145566 = {
                    "notify": true
                };
                this.log("提现[" + _0x554574 + "元]到钱包成功", _0x145566);
            } else {
                let _0x1f30d7 = _0x3d410a?.["msg"] || _0x3d410a?.["desc"] || "";
                _0x5a87dc == 1017 ? (_0x1ff106 = true, this.log("提现[" + _0x554574 + "元]失败[" + _0x5a87dc + "]: 可能今天已提现过")) : this.log("提现[" + _0x554574 + "元]失败[" + _0x5a87dc + "]: " + _0x1f30d7);
            }
        } catch (_0x5bff22) {
            console.log(_0x5bff22);
        } finally {
            return _0x1ff106;
        }
    }
    async ["c_task"](_0x6ddb62, _0x20f53f = {}) {
        try {
            let _0x1cd1c8 = Math.random() * 100 + 2400 | 0;
            const _0x2223e0 = {
                "Referer": "https://click.meituan.com/t?t=1&c=2&p=" + _0x6ddb62
            };
            let _0x465b68 = {
                "fn": "get_task",
                "method": "post",
                "url": "https://click.meituan.com/cps/clickReferralLink",
                "headers": _0x2223e0,
                "json": {
                    "p": _0x6ddb62,
                    "t": "1",
                    "c": "2",
                    "sessionId": "187a" + $.randomPattern("xxxxxxx-xxx-xxx-xxx"),
                    "referrer": "",
                    "fingerprintFromH5": "eJxVV" + $.randomString(_0x1cd1c8, _0xf141a2)
                }
            };
            await this.request(_0x465b68);
        } catch (_0x541ba0) {
            console.log(_0x541ba0);
        }
    }
    async ["walletMainpage"](_0x3b3b17 = {}) {
        try {
            const _0x4574e4 = {
                "fn": "walletMainpage",
                "method": "post",
                "url": "https://npay.meituan.com/conch/walletV5/mainpage",
                "form": {}
            };
            _0x4574e4.form.token = this.token;
            _0x4574e4.form.nb_app = "group";
            _0x4574e4.form.nb_appversion = "12.9.203";
            _0x4574e4.form.nb_channel = "common";
            _0x4574e4.form.nb_ci = "30";
            _0x4574e4.form.nb_location = "0_0";
            _0x4574e4.form.nb_osversion = "16.1.2";
            _0x4574e4.form.nb_platform = "iOS";
            _0x4574e4.form.utmSource = "AppStore";
            _0x4574e4.form.from = "mine_qianbaorukou_qianbao";
            _0x4574e4.form.popWindowOldChain = "false";
            let {
                result: _0x5cdea6
            } = await this.request(_0x4574e4),
                _0x401c93 = $.get(_0x5cdea6, "status", -1);
            if (_0x401c93 == "success") {
                let _0x37bad7 = [];
                for (let _0x3d0552 of _0x5cdea6?.["data"]?.["AssetArea"]?.["otherAssetAreaDTOList"] || []) {
                    switch (_0x3d0552.title) {
                        case "余额":
                            _0x37bad7.push("钱包余额: " + (_0x3d0552?.["subTitle"] || 0) + "元");
                            break;
                        case "立减金":
                            _0x37bad7.push("立减金: " + (_0x3d0552?.["subTitle"] || 0) + "元");
                            break;
                    }
                }
                if (_0x37bad7.length) {
                    const _0x317045 = {
                        "notify": true
                    };
                    this.log(_0x37bad7.join(", "), _0x317045);
                }
            } else {
                let _0x39dff4 = _0x5cdea6?.["error"]?.["message"] || "";
                this.log("查询钱包失败[" + _0x401c93 + "]: " + _0x39dff4);
            }
        } catch (_0x32f019) {
            console.log(_0x32f019);
        }
    }
    async ["refTask"]() {
        if (!_0x5b0f1f?.["length"]) {
            return;
        }
        let _0x3893d7 = _0x5b0f1f.sort(function () {
            return Math.random() - 0.5;
        }),
            _0x5d6a0d = _0x3893d7.length,
            _0x46c58b = Math.min(3, _0x5d6a0d);
        _0x3893d7 = _0x3893d7.slice(0, _0x46c58b);
        for (let _0x410a63 of _0x3893d7) {
            await this.c_task(_0x410a63);
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
        for (let _0x3e114e of _0x106ac6) {
            await this.gundamGrabV4(_0x3e114e);
        }
        for (let _0x5aa7e6 of _0x278155) {
            await this.signupRecord(_0x5aa7e6);
            await this.ttsqEntry(_0x5aa7e6);
        }
    }
    async ["wxSqsqTask"]() {
        $.log("---------------- WX-社群神券 ----------------");
        for (let _0x1372e7 of _0x582d0d) {
            await this.turntableDraw(_0x1372e7);
        }
    }
    async ["wxSqSignTask"]() {
        $.log("---------------- WX-社群签到 ----------------");
        for (let _0x143e4b of _0x203e0d) {
            await this.clockInStatus(_0x143e4b);
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
        for (let _0x3c39a6 of _0xbd4499) {
            $.log("============== " + _0x3c39a6.name + " ==============");
            if (_0x3c39a6.taskIdKeys.length > _0x39dba5) {
                const _0x68fb74 = {
                    "cubePageId": _0x3c39a6.cubePageId,
                    "taskIdKeys": []
                };
                for (let _0x1b3920 of _0x3c39a6.taskIdKeys) {
                    _0x68fb74.taskIdKeys.push(_0x1b3920);
                    _0x68fb74.taskIdKeys.length >= _0x39dba5 && (await this.getUserTasks(_0x68fb74), _0x68fb74.taskIdKeys = []);
                }
                if (_0x68fb74.taskIdKeys.length > 0) {
                    await this.getUserTasks(_0x68fb74);
                }
            } else {
                await this.getUserTasks(_0x3c39a6);
            }
        }
    }
    async ["notifyTask"]() {
        $.log("---------------- 汇总推送 ----------------");
        await this.walletMainpage();
    }
    async ["userTask"]() {
        const _0x28b92c = {
            "notify": true
        };
        $.log("\n---------------- 账号[" + this.index + "] ----------------", _0x28b92c);
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
    if (!(await _0x4350f8())) {
        return;
    }
    await _0x3fa481();
    $.read_env(UserClass, ckNames, envSplitor);
    $.log("\n-------------------------------------");
    MT_AutoWithdraw == "false" || !MT_AutoWithdraw ? $.log("APP每日赚钱设置为: 不随机提现") : $.log("APP每日赚钱设置为: 每日随机提现");
    $.log("-------------------------------------");
    for (let _0x3e02e0 of $.userList) {
        await _0x3e02e0.userTask();
    }
})().catch(_0x473c3e => $.log(_0x473c3e)).finally(() => $.exitNow());
async function _0x4350f8() {
    let _0x5d45c9 = false;
    try {
        const _0x52bbee = {
            "fn": "auth",
            "method": "get",
            "url": _0x820924
        };
        let {
            statusCode: _0x2af991,
            result: _0x52d8b8
        } = await _0x1e44af.request(_0x52bbee);
        if (_0x2af991 != 200) {
            return Promise.resolve();
        }
        if (_0x52d8b8?.["code"] == 0) {
            _0x52d8b8 = JSON.parse(_0x52d8b8.data.file.data);
            /*
            if (_0x52d8b8?.["commonNotify"] && _0x52d8b8.commonNotify.length > 0) {
                const _0x29c9e8 = {
                    "notify": true
                };
                $.log(_0x52d8b8.commonNotify.join("\n") + "\n", _0x29c9e8);
            }
            _0x52d8b8?.["commonMsg"] && _0x52d8b8.commonMsg.length > 0 && $.log(_0x52d8b8.commonMsg.join("\n") + "\n");
            */
            if (_0x52d8b8[_0x424ee5]) {
                let _0x5d6dd6 = _0x52d8b8[_0x424ee5];
                _0x5d6dd6.status == 0 ? _0x119b7d >= _0x5d6dd6.version ? (_0x5d45c9 = true, /*$.log(_0x5d6dd6.msg[_0x5d6dd6.status]),*/ $.log(_0x5d6dd6.updateMsg), $.log("现在运行的脚本版本是：" + _0x119b7d + "，最新脚本版本：" + _0x5d6dd6.latestVersion)) : $.log(_0x5d6dd6.versionMsg) : $.log(_0x5d6dd6.msg[_0x5d6dd6.status]);
            } else {
                $.log(_0x52d8b8.errorMsg);
            }
        }
    } catch (_0x3692a9) {
        $.log(_0x3692a9);
    } finally {
        return _0x5d45c9;
    }
}
async function _0x3fa481() {
    let _0x5b3168 = false;
    try {
        const _0x195053 = {
            "fn": "auth",
            "method": "get",
            "url": _0x5da39e
        };
        let {
            statusCode: _0x145357,
            result: _0x174282
        } = await _0x1e44af.request(_0x195053);
        if (_0x145357 != 200) {
            return Promise.resolve();
        }
        if (_0x174282?.["code"] == 0) {
            _0x174282 = JSON.parse(_0x174282.data.file.data);
            //inviteCode = _0x174282?.["inviteCode"] || inviteCode;
            for (let _0x1a4617 of _0x174282?.["mrzqTaskId_all"] || []) {
                !_0x35520c.includes(_0x1a4617) && _0x35520c.push(_0x1a4617);
            }
            for (let _0x9e745 of _0x174282?.["commonTaskConf"] || []) {
                _0xbd4499.filter(_0x210d41 => _0x210d41.name == _0x9e745.name)?.["length"] == 0 && _0xbd4499.push(_0x9e745);
            }
            if (_0x174282?.["gundomConfV4"]?.["length"]) {
                _0x106ac6 = _0x174282.gundomConfV4;
            }
            if (_0x174282?.["pid_list"]?.["length"]) {
                _0x5b0f1f = _0x174282.pid_list;
            }
            for (let _0x24a258 of _0x174282?.["sqsqIdList"] || []) {
                !_0x582d0d.includes(_0x24a258) && _0x582d0d.push(_0x24a258);
            }
            for (let _0x4df782 of _0x174282?.["sqSignIdList"] || []) {
                !_0x203e0d.includes(_0x4df782) && _0x203e0d.push(_0x4df782);
            }
            for (let _0x115682 of _0x174282?.["ttsqSignIdList"] || []) {
                !_0x278155.includes(_0x115682) && _0x278155.push(_0x115682);
            }
        }
    } catch (_0x1f316a) {
        $.log(_0x1f316a);
    } finally {
        return _0x5b3168;
    }
}