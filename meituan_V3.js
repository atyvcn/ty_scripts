/*
美团 v3.06

美团V3仅支持青龙等nodejs环境, 不支持圈X
自动领券和完成一些活动任务

APP每日赚钱: 默认会每日自动随机, 要关闭随机提现的话设置变量 MT_AutoWithdraw 为 false
export MT_AutoWithdraw="false"
关闭自动提现可以存金币到50元余额再提现, 但是50元提现会审核2天, 可能会黑

自行捉包把meituan.com里面的token(一般在请求头里)填到变量 MT_CK 中, 多账号换行或&或@隔开
export MT_CK="token=AgGZIgsYHyxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"

cron: 2 0,7,11,17,21 * * *
*/
const Env = require('./basic/Env.js');
const { TYQLDG_API, base64_encode } = require('./basic/tyqldg');

const $ = new Env('美团'),
    got = require("got");
let mtgsig_leaf = null,
    _0x257c4f = null;
const envPrefix = "MT_",
    envSplitor = ["\n", "&"],
    ckNames = [envPrefix + "CK"];
try {
    mtgsig_leaf = require("./mtgsig_leaf");
} catch {
    _0x257c4f = process.env[envPrefix + "Sign"] || "https://service.leafxxx.win/meituan";
}
const MT_AutoWithdraw = process.env[envPrefix + "AutoWithdraw"] || "true",
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
let _0x3cfdd4 = null;
const _0x42eb97 = null;
const _0x2abb79 = 3.06,
    _0x28a796 = "meituan",
    _0x215118 = "https://leafxcy.coding.net/api/user/leafxcy/project/validcode/shared-depot/validCode/git/blob/master/code.json",
    _0xee41a8 = "https://leafxcy.coding.net/api/user/leafxcy/project/validcode/shared-depot/validCode/git/blob/master/" + _0x28a796 + ".json",
    _0x347a6d = "Mozilla/5.0 (iPhone; CPU iPhone OS 16_1_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.33(0x18002129) NetType/WIFI Language/zh_CN",
    _0x5bbfab = "wxde8ac0a21135c07d",
    _0x2802a0 = "1399386702",
    _0x36a1ed = "2.30.3",
    _0x20eb5a = "iphone",
    _0x402c8b = "AwQAAABJAgAAAAEAAAAyAAAAPLgC95WH3MyqngAoyM/hf1hEoKrGdo0pJ5DI44e1wGF9AT3PH7Wes03actC2n/GVnwfURonD78PewMUppAAAADgCEZv2akitiLnGkQIH6r67N1V9EUFpKyBOQRSRKpv9Awnm6LwnygipNjcIwXXJZEv5ddnUSW8vZQ==",
    _0x1a125f = "0123456789",
    _0x127e3b = "qwertyuiopasdfghjklzxcvbnm",
    _0x28dac8 = _0x1a125f + _0x127e3b + _0x127e3b.toUpperCase();
let _0x593f5a = "114.07" + $.randomString(12, _0x1a125f),
    _0xae0cf4 = "22.52" + $.randomString(13, _0x1a125f),
    inviteCode = "NnOIp-QOs8SiYF1dcSlL5r8phPrCf6qkH7evMyjIoureqol0OXXaopfjjblE0yPge-nmlRKIDEgmTxF7oaoA4OfQjhGdF522KA_poICzK21VFORrK_ggku9ewgI6-qR5VCf7Blcp0wY6_CtAKvFkqFYXG42pu_6MtY7K6RDMjic",
    gundomConfV4 = [],
    _0x1a5bd9 = [];
const _0x205205 = 600,
    _0x4ee345 = 10,
    _0x594d89 = ["1005", "1007"];
let _0x13fffc = ["631682c504", "bb88750009", "9f90f45850", "90e9ecbe6a", "b6bfd8c1bc", "d4caf84940", "8decbc4c98", "c6026478e4", "4353a111e9", "7ceb1c14a7", "89515f0102", "63bec5af07", "1c8df37ffe", "36eedbe86c", "6ab415d70c", "3c309c7f26", "66c2938e1d", "3497a4fd05", "7f1f7ec5a4", "2fb53287b2", "2b0ada0dd7", "495070b239", "176f400a8f", "672129ff6d", "a479497fa6", "97ea404b56", "320ffa53e7", "6ccbda387f", "6f2d5f144f", "563983d5f1", "6f70050a62", "dfd9c44d7f", "6d5461c6dd", "a7331f5c94", "8d3891bef9", "eb6094dcaa", "11c95cc416", "351c3f4810", "67bd2e0988", "cdb75f714d", "3a6eba11a1", "76f9dc2980", "30644bcb35", "d1a1d62e6c", "8af63652ba", "075eb403be", "361ba45eff", "cfbb835838", "e26f305436", "ed33f82fa9", "e36bae3f8f", "6696ff7825", "b7719de06c", "2ab24bbc57", "2d98ddf8ac", "406fb78bfd", "9b84c4503a", "55ce3f059d", "cd06f8210b", "f6706f9b33", "34a718f16a", "f5e2218b18", "c7f6a889ff", "2583c8ba46", "45e325543c", "a162c96304"],
    _0x56e09e = ["b24pg8jaFTeNadCXq0lb3A", "yLm-IynkBUQLt09kALFv8Q", "Ox5_0TfqOg6b3UfkKS3rUg", "TADnCANwheP5AKOjx3NpgA"],
    _0x27902d = ["06hFC-C1WGiAQYUGya5QJA", "5IFmI13NeO7kRPW1jUj7Lw", "ySJ2HpgexeI0TJcLkA_5Ug"],
    _0x87951 = ["KXGjpKrk2h_43vUrIKbzDA", "l3emawQka8JjlE6LMyYT3g", "r9348AwSwnwP715csHvDqw", "XVsZc3p1O1jd-uTG4EjyXw", "9khEyiqt2tKFyZSjvqphkQ", "_p2QL78Fao6bsexHzofp-w", "jXL-9iEaRTsv-FZdpX4Z4g"];
const _0x75508b = {
    "name": "APP-天天领金币",
    "cubePageId": 184008,
    "taskIdKeys": ["e8e72a2c8d", "ea69bee3c0", "129328922f", "15b494e7bc", "d36be8140b", "77c78d45cc"]
};
const _0x693d82 = {
    "name": "APP-每日赚钱",
    "cubePageId": 10000003,
    "taskIdKeys": ["b6e6e96128", "710d92816e", "fc43b223be"]
};
const _0x2d2864 = {
    "name": "WX-每日赚钱",
    "cubePageId": 184008,
    "taskIdKeys": ["1fff834702"]
};
const _0x252862 = {
    "name": "APP-团团神券-魔法石",
    "cubePageId": 88888889,
    "taskIdKeys": ["a941c20450", "cdcc8a8195", "eb03206b17", "5c919dfbd8", "8f53427c39", "f749a47257", "4d609dde67", "3e5cbc8120", "532e764346", "7613d02997"]
};
const _0x2e38b8 = {
    "name": "WX-天天赚钱",
    "cubePageId": 123,
    "taskIdKeys": _0x13fffc
};
const _0x3cd9b1 = [_0x75508b, _0x693d82, _0x2d2864, _0x252862, _0x2e38b8],
    _0x1a54cd = {
        "NORMAL_CARD": "普通卡",
        "SENIOR_CARD": "稀有卡"
    };
const _0x344466 = {
    "EAT": "吃",
    "LIVE": "住",
    "WALK": "行",
    "TRAVEL": "游",
    "SHOP": "购",
    "ENTERTAIN": "娱"
};

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

let _0x41a27d = [];
class _0x3c8f2b {
    constructor() {
        this.index = $.userIdx++;
        this.name = "";
        this.valid = true;
        const _0x1196a4 = {
            "limit": 0
        };
        const _0x32b2b5 = {
            "Connection": "keep-alive"
        };
        const _0x2fc2d1 = {
            "retry": _0x1196a4,
            "timeout": DEFAULT_TIMEOUT,
            "followRedirect": false,
            "headers": _0x32b2b5
        };
        this.got = got.extend(_0x2fc2d1);
    }
    ["log"](_0x542ecb, _0x3bfe52 = {}) {
        var _0x3552fc = "",
            _0x30d1dd = $.userCount.toString().length;
        if (this.index) {
            _0x3552fc += "账号[" + $.padStr(this.index, _0x30d1dd) + "]";
        }
        if (this.name) {
            _0x3552fc += "[" + this.name + "]";
        }
        $.log(_0x3552fc + _0x542ecb, _0x3bfe52);
    }
    async ["request"](_0x126868) {
        var _0x253a07 = {
            "statusCode": -1,
            "headers": null,
            "result": null
        };
        try {
            var _0x110358 = null,
                _0x11f991 = 0,
                _0x334afc = _0x126868.fn || _0x126868.url;
            _0x126868.method = _0x126868?.["method"]?.["toUpperCase"]() || "GET";
            while (_0x11f991++ < DEFAULT_RETRY) {
                try {
                    await this.got(_0x126868).then(_0x2b9d21 => {
                        _0x110358 = _0x2b9d21;
                    }, _0x1084e9 => {
                        _0x110358 = _0x1084e9.response;
                    });
                    if ((_0x110358?.["statusCode"] / 100 | 0) <= 4) {
                        break;
                    }
                } catch (_0x5baa63) {
                    _0x5baa63.name == "TimeoutError" ? this.log("[" + _0x334afc + "]请求超时，重试第" + _0x11f991 + "次") : this.log("[" + _0x334afc + "]请求错误(" + _0x5baa63.message + ")，重试第" + _0x11f991 + "次");
                }
            }
            if (_0x110358) {
                let {
                    statusCode: _0x1af904,
                    headers: _0xf58b7a,
                    body: _0x502594
                } = _0x110358;
                if (_0x502594) {
                    try {
                        _0x502594 = JSON.parse(_0x502594);
                    } catch { }
                }
                const _0x984f2d = {
                    "statusCode": _0x1af904,
                    "headers": _0xf58b7a,
                    "result": _0x502594
                };
                _0x253a07 = _0x984f2d;
            }
        } catch (_0x42e8be) {
            console.log(_0x42e8be);
        } finally {
            return _0x253a07;
        }
    }
}
let _0x2e8604 = new _0x3c8f2b();
class UserClass extends _0x3c8f2b {
    constructor(ck) {
        super();
        Object.assign(this, $.CkToJson(ck));
        this.t_earnDaily = 0;
        this.uuid = $.randomPattern("186ebxxxxxxxx-22e49fxxxxxxxx-0-0-186ebxxxxxxxx");
        this.openid = $.randomString(7, _0x28dac8) + "-" + $.randomString(20, _0x28dac8);
        this.valid_fp = false;
        this.fp = "H5dfp_1.8.2_tttt_CziTmz1LjARvHzKKzoDtmdBgc6Df5b+sgrXDtVBPjiCayshtLKt1gh8PjGGT";
        this.got = this.got.extend({
            "headers": {
                "User-Agent": _0x347a6d,
                "token": this.token,
                "openid": this.openid,
                "uuid": this.uuid,
                "M-APPKEY": "wxmp_mt-weapp",
                "clientversion": _0x36a1ed,
                "utm_medium": _0x20eb5a,
                "openIdCipher": _0x402c8b,
                "cookie": "token=" + this.token + "; openid=" + this.openid + ";"
            }
        });
    }
    ["notify_coupon"](_0x625402, _0x399642 = "领券") {
        for (let _0x38627b of _0x625402) {
            const _0x4d9252 = {
                "notify": true
            };
            this.log(_0x399642 + ": " + _0x38627b, _0x4d9252);
        }
    }
    async ["get_mtgsig"](_0x1f45c4, _0x39fa1c) {
        const _0x3ade2a = {
            "a1": "1.0",
            "a2": 1683336538151,
            "a3": "",
            "a4": "e89b599e99d425ef9e599be8ef25d499b97136065654e29f",
            "a5": "x/c9ZOZB6k6qqeSXpnhgQHk10zsLs2P22bVEnqeWTCdS0G8wXXNHHB6PaFz62LgJtRc4Lu5vZyf1myzp4XmzEAVicki=",
            "a6": "h1.2u/+0UE3UaX2BwH/cq+aMlU6JnfjhiyRXBdPnx91/XnpBun5KRP6kFHfWi/qhCha44AnOvCaQILwM7ibGAySCrZ0hgXd8HUtnbb9nT2ORXe6j4o23Mb64cPb8jNk9l6aRm6Si9qO6m4s7xFsCmF6UmI0gzprOVZ5CRRDUehMvUhVPpxIL6INfDcS1HebILXdNo/CpFzC9q6zKdq1kk4TeUmhEx3EDNqDZExihZB0qepT9L8W5NsbJs8kHXdLXx5/C1wlLccXt9HpR1PrEnevp9OWLXJQQj+4ipJuwceKb3bv2Ff4n+XviJf2+YK7dPvAT/7LVDObfZBpFhSrTUrWpTG8ubX7tq/OlxexIYqxmwTKJumqG8hIIkaBqE27Y3JNL2dYuRRCdtB2EAFA9lFi/vPzmDsYMzGMTCevh7DDaIeY=",
            "a7": "",
            "x0": 4,
            "d1": "d00459adac4117271a05b410d8275ade"
        };
        let _0x10a914 = {
            "headers": {
                "mtgsig": JSON.stringify(_0x3ade2a)
            }
        };
        if (mtgsig_leaf) {
            _0x10a914 = mtgsig_leaf.get_mtgsig(_0x1f45c4, _0x39fa1c);
        } else {
            if (_0x257c4f) {
                const _0x540b6e = {
                    "url": _0x1f45c4,
                    "data": _0x39fa1c
                };
                const _0x1faefd = {
                    "fn": "get_mtgsig",
                    "method": "post",
                    "url": _0x257c4f + "/mtgsig",
                    "json": _0x540b6e
                };
                let {
                    result: _0x37659f
                } = await this.request(_0x1faefd),
                    _0x188d0f = _0x37659f?.["code"];
                _0x188d0f === 0 ? _0x10a914 = _0x37659f.data : this.log("获取mtgsig失败[" + _0x188d0f + "]: " + _0x37659f?.["msg"]);
            }
        }
        return _0x10a914;
    }
    async ["getfp"](_0x57e7b6 = false) {
        if (!this.valid_fp) {
            if (mtgsig_leaf && _0x57e7b6) {
                this.fp = mtgsig_leaf.getMTFingerprint();
                this.valid_fp = true;
            } else {
                if (_0x257c4f && _0x57e7b6) {
                    let _0x3c19f1 = {
                        "fn": "getfp",
                        "method": "get",
                        "url": _0x257c4f + "/getfp"
                    },
                        {
                            result: _0x3af405
                        } = await this.request(_0x3c19f1),
                        _0x34b21d = _0x3af405?.["code"];
                    _0x34b21d === 0 ? (this.fp = _0x3af405.data, this.valid_fp = true) : this.log("获取fp失败[" + _0x34b21d + "]: " + _0x3af405?.["msg"]);
                }
            }
        }
        return this.fp;
    }
    async ["get_app_riskForm"](_0x4ad001 = false) {
        let _0x534eca = await this.getfp(_0x4ad001);
        const _0x5ed7f8 = {
            "ip": "",
            "fingerprint": _0x534eca,
            "cityId": "30",
            "platform": 5,
            "app": 0,
            "version": "12.8.202",
            "uuid": ""
        };
        return _0x5ed7f8;
    }
    async ["get_riskForm"](_0xae24b7 = false) {
        let _0x2af7b4 = await this.getfp(_0xae24b7);
        const _0x50b393 = {
            "openid": this.openid,
            "appid": _0x5bbfab,
            "mchid": _0x2802a0
        };
        let _0x373d64 = {
            "uuid": this.uuid,
            "userid": this.userId,
            "openid": this.openid,
            "expoId": _0x402c8b,
            "ip": "",
            "partner": 0,
            "wxRiskLevel": JSON.stringify(_0x50b393),
            "platform": 13,
            "appletsFingerprint": _0x2af7b4,
            "wechatFingerprint": _0x2af7b4
        };
        return _0x373d64;
    }
    async ["encode_riskForm"](_0x5eacbf = false) {
        let _0x543bf7 = await this.get_riskForm(_0x5eacbf);
        return base64_encode(JSON.stringify(_0x543bf7));
    }
    async ["getLoginedUserInfo"](_0x4c7918 = {}) {
        let _0x1cdab6 = false;
        try {
            const _0x3f4e03 = {
                "token": this.token
            };
            const _0x1d1c54 = {
                "fn": "getLoginedUserInfo",
                "method": "get",
                "url": "https://i.meituan.com/wrapapi/getLoginedUserInfo",
                "searchParams": _0x3f4e03
            };
            let { result } = await this.request(_0x1d1c54);
            if (result?.["mobile"]) {
                _0x1cdab6 = true;
                this.name = result.nickName;//mobile;
                this.userId = Number(result.userId);
                this.log("登录成功");
            } else {
                this.log("获取账号信息失败, ck可能失效");//, {"notify": true}
                await expireNotify(this.userId, this.index);
            }
        } catch (_0x3b8a3c) {
            console.log(_0x3b8a3c);
        } finally {
            return _0x1cdab6;
        }
    }
    async ["inviteFetchcoupon"](_0x46ddea = {}) {
        try {
            const _0x937d5f = {
                "fn": "inviteFetchcoupon",
                "method": "get",
                "url": "https://promotion-waimai.meituan.com/invite/fetchcoupon",
                "searchParams": {}
            };
            _0x937d5f.searchParams.ctype = "wxapp";
            _0x937d5f.searchParams.fpPlatform = 13;
            _0x937d5f.searchParams.isMini = 1;
            _0x937d5f.searchParams.token = this.token;
            _0x937d5f.searchParams.inviteCode = this.name == "nyqty" ? "NnOIp-QOs8SiYF1dcSlL5r8phPrCf6qkH7evMyjIoup2NXxNCLYcBbd3bqpv2X2Isa4sAcwwtgMW1R1eMkRlyETf6P5c6xL_sqJlwVhRVvg7xRINt5TQ85mSulLMxdBYgcXM_UYwGoZo7b5C7uiD5Q" : inviteCode;
            let {
                result: _0xe5b5bf
            } = await this.request(_0x937d5f),
                _0x5c9b33 = $.get(_0xe5b5bf, "code", -1),
                _0x421eb8 = $.get(_0xe5b5bf, "subcode", -1);
            if ((_0x5c9b33 == 0 || _0x5c9b33 == 1) && (_0x421eb8 == 0 || _0x421eb8 == 2)) {
                let _0x5d67e6 = _0xe5b5bf?.["data"]?.["couponList"]?.["map"](_0x3b3fe2 => "[" + _0x3b3fe2.couponTitle + "]" + (_0x3b3fe2.priceLimit || "无门槛") + "减" + _0x3b3fe2.couponValue);
                this.notify_coupon(_0x5d67e6);
            } else {
                let _0x7d8dc1 = _0xe5b5bf?.["msg"] || _0xe5b5bf?.["message"] || "";
                this.log("领券失败[" + _0x5c9b33 + "]: " + _0x7d8dc1);
            }
        } catch (_0x4bfb5b) {
            console.log(_0x4bfb5b);
        }
    }
    async ["gundamGrabV4"](_0xeb4fa3, _0x1b0f16 = {}) {
        try {
            const _0x476751 = {
                "fn": "gundamGrabV4",
                "method": "post",
                "url": "https://mediacps.meituan.com/gundam/gundamGrabV4",
                "json": _0xeb4fa3,
                "headers": {}
            };
            _0x476751.headers.Origin = "https://market.waimai.meituan.com";
            _0x476751.headers.Referer = "https://market.waimai.meituan.com/";
            let {
                result: _0x55ae94
            } = await this.request(_0x476751),
                _0x138f9c = $.get(_0x55ae94, "code", -1);
            if (_0x138f9c == 0) {
                let _0x481a56 = _0x55ae94?.["data"]?.["allCoupons"]?.["map"](_0xb148ca => "[" + _0xb148ca.couponName + "]" + (_0xb148ca.amountLimit || "无门槛") + "减" + _0xb148ca.couponAmount);
                this.notify_coupon(_0x481a56);
            } else {
                let _0x32c2a7 = _0x55ae94?.["msg"] || _0x55ae94?.["message"] || "";
                this.log("领券失败[" + _0x138f9c + "]: " + _0x32c2a7);
            }
        } catch (_0x34d679) {
            console.log(_0x34d679);
        }
    }
    async ["turntableDraw"](_0x46898e, _0xab3a39 = {}) {
        try {
            let _0x383ad1 = {
                "fn": "turntableDraw",
                "method": "post",
                "url": "https://promotion.waimai.meituan.com/lottery/turntable/draw",
                "searchParams": {
                    "actualLat": _0xae0cf4,
                    "actualLng": _0x593f5a,
                    "initialLat": _0xae0cf4,
                    "initialLng": _0x593f5a,
                    "cType": $.get(_0xab3a39, "cType", "wm_wxapp"),
                    "wm_appversion": $.get(_0xab3a39, "wm_appversion", "9.19.6"),
                    "gdPageId": $.get(_0xab3a39, "gdPageId", "460584"),
                    "token": this.token,
                    "userId": this.userId,
                    "uuid": this.uuid
                },
                "json": {
                    "activityViewId": _0x46898e,
                    "appType": 0,
                    "deviceType": 2,
                    "wxOpenId": this.openid,
                    "fpPlatform": 5,
                    "mtFingerprint": ""
                }
            },
                {
                    result: _0x4d74b3
                } = await this.request(_0x383ad1),
                _0x356953 = $.get(_0x4d74b3, "code", -1);
            if (_0x356953 == 0) {
                let _0x30eeab = [];
                for (let _0x5024ad of _0x4d74b3?.["data"]?.["awards"]) {
                    _0x5024ad.couponType == 1 ? _0x30eeab.push("[" + _0x5024ad.name + "]" + (_0x5024ad.orderAmountLimit || "无门槛") + "减" + _0x5024ad.amount) : _0x30eeab.push(_0x5024ad.desc);
                }
                this.notify_coupon(_0x30eeab, "社群抽奖");
            } else {
                let _0xd949ba = _0x4d74b3?.["msg"] || _0x4d74b3?.["message"] || "";
                this.log("社群抽奖失败[" + _0x356953 + "]: " + _0xd949ba);
            }
        } catch (_0x191922) {
            console.log(_0x191922);
        }
    }
    async ["signupRecord"](_0x58b9a1, _0x4a2737 = {}) {
        try {
            let _0x434c5b = {
                "fn": "signupRecord",
                "method": "get",
                "url": "https://promotion.waimai.meituan.com/playcenter/common/v1/treasurebox/signup/circle/record",
                "searchParams": {
                    "activityViewId": _0x58b9a1,
                    "isInDpEnv": 0,
                    "isMini": 1,
                    "cType": $.get(_0x4a2737, "cType", "wm_wxapp")
                }
            },
                {
                    result: _0xc429fd
                } = await this.request(_0x434c5b),
                _0x4ad261 = $.get(_0xc429fd, "code", -1);
            if (_0x4ad261 == 0) {
                this.log("已连续签到" + (_0xc429fd?.["data"]?.["signUpNum"] || 0) + "天");
                for (let _0x258426 of _0xc429fd?.["data"]?.["rewardStatus"]?.["filter"](_0xa441f => _0xa441f.status == 1)) {
                    await this.signupGetBox(_0x58b9a1, _0x258426.stageDayNum);
                }
            } else {
                let _0x1d4035 = _0xc429fd?.["msg"] || _0xc429fd?.["message"] || "";
                this.log("查询签到失败[" + _0x4ad261 + "]: " + _0x1d4035);
            }
        } catch (_0x2e1f7b) {
            console.log(_0x2e1f7b);
        }
    }
    async ["signupGetBox"](_0x4ea98d, _0x476d8f, _0x220acf = {}) {
        try {
            const _0x3d1c5e = {
                "signUpDayNum": _0x476d8f
            };
            let _0x12b4e9 = {
                "fn": "signupGetBox",
                "method": "post",
                "url": "https://promotion.waimai.meituan.com/playcenter/common/v1/treasurebox/signup/stage/reward/get",
                "searchParams": {
                    "isInDpEnv": 0,
                    "isMini": 1,
                    "cType": $.get(_0x220acf, "cType", "wm_wxapp")
                },
                "json": {
                    "activityViewId": _0x4ea98d,
                    "actionCode": 1000,
                    "lat": _0xae0cf4,
                    "lng": _0x593f5a,
                    "fpPlatform": 13,
                    "bizParams": JSON.stringify(_0x3d1c5e),
                    "utmSource": "",
                    "utmCampaign": "",
                    "gdId": 421412,
                    "codeVersion": 1,
                    "mtFingerprint": ""
                }
            },
                {
                    result: _0x395272
                } = await this.request(_0x12b4e9),
                _0x16e48d = $.get(_0x395272, "code", -1);
            if (_0x16e48d == 0) {
                let _0x508af4 = _0x395272?.["data"]?.["prizeInfoList"]?.["map"](_0x14ed8c => "[" + _0x14ed8c.couponInfo.couponTitle + "]" + (_0x14ed8c.couponInfo.priceLimit || "无门槛") + "减" + _0x14ed8c.couponInfo.couponValue);
                this.notify_coupon(_0x508af4, "开签到宝箱");
            } else {
                let _0x4782e1 = _0x395272?.["msg"] || _0x395272?.["message"] || "";
                this.log("开签到宝箱失败[" + _0x16e48d + "]: " + _0x4782e1);
            }
        } catch (_0x2ec759) {
            console.log(_0x2ec759);
        }
    }
    async ["ttsqEntry"](_0x44a201, _0x3bec4a = {}) {
        try {
            const _0x355512 = {
                "activityViewId": _0x44a201,
                "actionCodes": 1000,
                "querySignupConfig": 1,
                "lat": _0xae0cf4,
                "lng": _0x593f5a
            };
            const _0x48f172 = {
                "fn": "signupRecord",
                "method": "get",
                "url": "https://promotion.waimai.meituan.com/playcenter/common/v1/entry",
                "searchParams": _0x355512
            };
            let {
                result: _0x13cfe6
            } = await this.request(_0x48f172),
                _0x1c4d53 = $.get(_0x13cfe6, "code", -1);
            if (_0x1c4d53 == 0) {
                if (_0x13cfe6.data.actionInfoList) {
                    for (let _0x2f27cd of _0x13cfe6.data.actionInfoList) {
                        await this.ttsqDoAction(_0x44a201, _0x2f27cd.actionCode || 1000);
                    }
                }
            } else {
                let _0x1f4ddd = _0x13cfe6?.["msg"] || _0x13cfe6?.["message"] || "";
                this.log("查询天天神券宝箱失败[" + _0x1c4d53 + "]: " + _0x1f4ddd);
            }
        } catch (_0x44b821) {
            console.log(_0x44b821);
        }
    }
    async ["ttsqDoAction"](_0xba3949, _0x35ceaf, _0x395556 = {}) {
        try {
            const _0x2752cf = {
                "activityViewId": _0xba3949,
                "actionCode": _0x35ceaf || 1000,
                "lat": _0xae0cf4,
                "lng": _0x593f5a,
                "gdId": 26403,
                "fpPlatform": 13,
                "utmSource": "",
                "utmCampaign": "",
                "mtFingerprint": ""
            };
            const _0x4ac363 = {
                "fn": "ttsqDoAction",
                "method": "post",
                "url": "https://promotion.waimai.meituan.com/playcenter/common/v1/doaction",
                "json": _0x2752cf
            };
            let {
                result: _0x1c8730
            } = await this.request(_0x4ac363),
                _0x1c97c2 = $.get(_0x1c8730, "code", -1);
            if (_0x1c97c2 == 0) {
                let _0x1b7a7f = _0x1c8730?.["data"]?.["prizeInfoList"]?.["map"](_0x1c6932 => _0x1c6932.awardType >= 0 ? "[" + _0x1c6932.couponInfo.couponTitle + "]" + (_0x1c6932.couponInfo.priceLimit || "无门槛") + "减" + _0x1c6932.couponInfo.couponValue : "")?.["filter"](_0x3ff1d1 => _0x3ff1d1);
                this.notify_coupon(_0x1b7a7f, "开天天神券宝箱");
            } else {
                let _0x50348c = _0x1c8730?.["msg"] || _0x1c8730?.["message"] || "";
                this.log("开天天神券宝箱失败[" + _0x1c97c2 + "]: " + _0x50348c);
            }
        } catch (_0x147db0) {
            console.log(_0x147db0);
        }
    }
    async ["clockInStatus"](_0x45da98, _0x435115 = {}) {
        try {
            let _0x7d049f = {
                "fn": "clockInStatus",
                "method": "get",
                "url": "https://promotion.waimai.meituan.com/playcenter/common/v1/clock-in/status",
                "searchParams": {
                    "activityViewId": _0x45da98,
                    "ctype": $.get(_0x435115, "ctype", "wm_wxapp"),
                    "isInDpEnv": 0
                }
            },
                {
                    result: _0xaf50b
                } = await this.request(_0x7d049f),
                _0x262e35 = $.get(_0xaf50b, "code", -1);
            if (_0x262e35 == 0) {
                let _0x2f7ccc = new Date().getDay();
                for (let _0x3e7232 of _0xaf50b.data.clockInStatus) {
                    if (_0x3e7232.dayOfWeek % 7 == _0x2f7ccc) {
                        this.log("今天社群" + (_0x3e7232.status ? "已" : "未") + "签到, 本周已签到" + _0xaf50b.data.clockInNum + "天");
                        if (!_0x3e7232.status) {
                            await this.clockInSign(_0x45da98);
                        }
                        break;
                    }
                }
                _0xaf50b.data.lotteryStatus == 1 && (await this.ttsqDoAction(_0x45da98, 1001));
            } else {
                let _0x55746e = _0xaf50b?.["msg"] || _0xaf50b?.["message"] || "";
                this.log("查询社群签到失败[" + _0x262e35 + "]: " + _0x55746e);
            }
        } catch (_0x4d7423) {
            console.log(_0x4d7423);
        }
    }
    async ["clockInSign"](_0x5a9b18, _0xb31496 = {}) {
        try {
            const _0xc1f9f9 = {
                "activityViewId": _0x5a9b18,
                "actionCode": 1001,
                "lat": _0xae0cf4,
                "lng": _0x593f5a
            };
            let _0x40912e = {
                "fn": "clockInSign",
                "method": "post",
                "url": "https://promotion.waimai.meituan.com/playcenter/common/v1/clock-in",
                "searchParams": {
                    "isMini": 1,
                    "ctype": $.get(_0xb31496, "ctype", "wm_wxapp"),
                    "isInDpEnv": 0
                },
                "json": _0xc1f9f9
            },
                {
                    result: _0x4f9b9f
                } = await this.request(_0x40912e),
                _0x5f081e = $.get(_0x4f9b9f, "code", -1);
            if (_0x5f081e == 0) {
                let _0x56114d = _0x4f9b9f?.["data"]?.["prizeInfoList"]?.["map"](_0x30cb39 => "[" + _0x30cb39.couponInfo.couponTitle + "]" + (_0x30cb39.couponInfo.priceLimit || "无门槛") + "减" + _0x30cb39.couponInfo.couponValue);
                this.notify_coupon(_0x56114d);
            } else {
                let _0x5c7a09 = _0x4f9b9f?.["msg"] || _0x4f9b9f?.["message"] || "";
                this.log("社群签到失败[" + _0x5f081e + "]: " + _0x5c7a09);
            }
        } catch (_0x15018a) {
            console.log(_0x15018a);
        }
    }
    async ["cardLotteryNum"](_0x140cf9 = {}) {
        try {
            const _0x44a1c0 = {
                "fn": "cardLotteryNum",
                "method": "post",
                "url": "https://mgm.meituan.com/marketing/cardsCollect/api/cardLotteryNum",
                "json": {}
            };
            _0x44a1c0.json.activityId = "1116";
            _0x44a1c0.json.topicIdList = ["1380101169187258449", "1380101260094521416", "1412292930126868547"];
            let {
                result: _0x4c970f
            } = await this.request(_0x44a1c0);
            if (_0x4c970f?.["lotteryNum"] >= 0) {
                let _0x495632 = _0x4c970f.lotteryNum;
                this.log("有" + _0x495632 + "次抽月符机会");
                while (_0x495632-- > 0) {
                    await this.lotteryfrompool(_0x4c970f.poolIdList);
                }
            } else {
                let _0x421540 = _0x4c970f?.["msg"] || _0x4c970f?.["message"] || "";
                this.log("查询抽月符次数失败: " + _0x421540);
            }
        } catch (_0x30fd92) {
            console.log(_0x30fd92);
        }
    }
    async ["cardSaveAccess"](_0x42063b = {}) {
        try {
            const _0x46c444 = {
                "playerId": 1
            };
            const _0x3c2644 = {
                "fn": "cardSaveAccess",
                "method": "post",
                "url": "https://mgm.meituan.com/marketing/cardsCollect/api/saveAccess",
                "json": _0x46c444
            };
            await this.request(_0x3c2644);
        } catch (_0x32ad48) {
            console.log(_0x32ad48);
        }
    }
    async ["cardSaveShare"](_0x131716 = {}) {
        try {
            const _0x254b4d = {
                "playerId": 1,
                "shareWay": 1,
                "shareContentType": 1,
                "shareContentId": "29"
            };
            const _0x9b2943 = {
                "fn": "cyfSaveShare",
                "method": "post",
                "url": "https://mgm.meituan.com/marketing/cardsCollect/api/saveShare",
                "json": _0x254b4d
            };
            await this.request(_0x9b2943);
        } catch (_0x8f437c) {
            console.log(_0x8f437c);
        }
    }
    async ["lotteryfrompool"](_0x15dcdc, _0x4a1fb7 = {}) {
        try {
            const _0x2dbcae = {
                "poolList": _0x15dcdc
            };
            const _0x148ee8 = {
                "fn": "lotteryfrompool",
                "method": "post",
                "url": "https://mgm.meituan.com/marketing/cardsCollect/api/lotteryfrompool",
                "json": _0x2dbcae
            };
            let {
                result: _0x2fe7dc
            } = await this.request(_0x148ee8);
            if (_0x2fe7dc?.["prizeInfo"]?.["name"]) {
                this.log("抽到月符: [" + _0x2fe7dc?.["prizeInfo"]?.["name"] + "]");
                await this.getCardInfo(_0x2fe7dc?.["lotteryAwardSerialNo"]?.["value"]);
            } else {
                let _0x8609d3 = _0x2fe7dc?.["msg"] || _0x2fe7dc?.["message"] || "";
                this.log("抽月符失败: " + _0x8609d3);
            }
        } catch (_0x40c3b7) {
            console.log(_0x40c3b7);
        }
    }
    async ["getCardInfo"](_0x29d7e9, _0x348cad = {}) {
        try {
            const _0x58d16d = {
                "lotteryAwardSerialNo": _0x29d7e9
            };
            const _0x2a27e9 = {
                "fn": "getCardInfo",
                "method": "get",
                "url": "https://mgm.meituan.com/marketing/cardsCollect/api/getCardInfo",
                "searchParams": _0x58d16d
            };
            let {
                result: _0x2b9a9b
            } = await this.request(_0x2a27e9),
                _0xd1d54d = $.get(_0x2b9a9b, "code", -1);
            if (_0xd1d54d == 0) {
                await this.getCardDraw(_0x2b9a9b?.["userCardInfo"]?.["cardId"]);
            } else {
                let _0xee9a15 = _0x2b9a9b?.["msg"] || _0x2b9a9b?.["message"] || "";
                this.log("查询月符抽奖卡号失败[" + _0xd1d54d + "]: " + _0xee9a15);
            }
        } catch (_0x509ef9) {
            console.log(_0x509ef9);
        }
    }
    async ["getCardDraw"](_0x5a6b63, _0x2b6561 = {}) {
        try {
            const _0x5344de = {
                "cardId": _0x5a6b63
            };
            const _0x582382 = {
                "fn": "getCardDraw",
                "method": "get",
                "url": "https://mgm.meituan.com/marketing/cardsCollect/api/draw",
                "searchParams": _0x5344de
            };
            let {
                result: _0x507aa4
            } = await this.request(_0x582382);
            if (_0x507aa4?.["bingo"]?.["value"]) {
                this.log("月符抽奖: " + _0x507aa4?.["prizeInfo"]?.["name"]);
            } else {
                let _0x562c16 = _0x507aa4?.["msg"] || _0x507aa4?.["message"] || "";
                this.log("查询月符抽奖结果失败: " + _0x562c16);
            }
        } catch (_0x587e25) {
            console.log(_0x587e25);
        }
    }
    async ["getUserTasks"](_0x13b7df, _0x908ed1 = {}) {
        try {
            const _0x330760 = {
                "fn": "getUserTasks",
                "method": "post",
                "url": "https://cube.meituan.com/topcube/api/toc/task/getUserTasks",
                "json": {}
            };
            _0x330760.json.uuid = this.uuid;
            _0x330760.json.userId = this.userId;
            _0x330760.json.browseAreaTrue = true;
            _0x330760.json.cityId = 30;
            _0x330760.json.taskIdKeys = _0x13b7df.taskIdKeys;
            _0x330760.json.userType = "MEI_TUAN";
            _0x330760.json.sourceType = "MEI_TUAN";
            _0x330760.json.mini_program_token = this.token;
            _0x330760.json.inviter = "";
            _0x330760.json.inviterTaskIdKey = "";
            let {
                result: _0x207a92
            } = await this.request(_0x330760);
            if (_0x207a92?.["code"] == 0) {
                for (let _0x3d01ff of _0x207a92.data) {
                    if (!_0x594d89.includes(_0x3d01ff?.["code"]?.["toString"]())) {
                        if (!_0x3d01ff?.["taskRuleVos"]?.["length"]) {
                            $.log("任务[" + _0x3d01ff.title + "] -- " + _0x3d01ff.msg);
                            continue;
                        }
                        if (_0x3d01ff?.["title"]?.["includes"]("小程序下单")) {
                            continue;
                        }
                        let _0x47b447 = _0x3d01ff?.["extend"] ? true : false;
                        if (_0x47b447 && _0x3d01ff?.["extend"]?.["isSignInToday"] == 1) {
                            $.log("任务[" + _0x3d01ff.title + "] -- 已完成");
                            continue;
                        }
                        let _0x44d8d5 = false;
                        if (_0x3d01ff.taskConf) {
                            let _0x168cf6 = JSON.parse(_0x3d01ff.taskConf);
                            _0x168cf6.isCheckNgSignature && (_0x44d8d5 = true);
                        }
                        for (let _0x1a92fa of _0x3d01ff.taskRuleVos) {
                            if (_0x1a92fa.status == "PRIZE_SUCC" || _0x1a92fa.status == "DELETE") {
                                !_0x47b447 && $.log("任务[" + _0x3d01ff.title + "] -- 已完成");
                            } else {
                                if (_0x1a92fa?.["status"] == "CAN_RECEIVE") {
                                    $.log("任务[" + _0x3d01ff.title + "] -- 可领取奖励");
                                    const _0x538b14 = {
                                        "need_sign": _0x44d8d5
                                    };
                                    await this.sendTaskPrize(_0x13b7df, _0x3d01ff, _0x1a92fa, {}, _0x538b14);
                                    if (_0x47b447) {
                                        break;
                                    }
                                } else {
                                    $.log("任务[" + _0x3d01ff.title + "] -- 未完成");
                                    let _0x504f0b = true,
                                        _0x3c2de1 = JSON.parse(_0x1a92fa.ruleConfig);
                                    if (_0x3c2de1.limitTime) {
                                        let _0x29f66c = (_0x1a92fa.preCompleteTime || 0) + _0x3c2de1.limitTime * 1000;
                                        Date.now() < _0x29f66c && (_0x504f0b = false, $.log("任务[" + _0x3d01ff.title + "]冷却中, [" + $.time("hh:mm:ss", _0x29f66c) + "]后可完成"));
                                    } else {
                                        if (_0x3c2de1?.["timeLimits"]?.["length"]) {
                                            let _0x5153b1 = new Date($.time("yyyy-MM-dd 00:00:00")).getTime(),
                                                _0x104d95 = Date.now();
                                            for (let _0x230968 of _0x3c2de1.timeLimits) {
                                                let {
                                                    startTime: _0x3605d7,
                                                    endTime: _0x3ba783
                                                } = _0x230968;
                                                _0x3605d7 += _0x5153b1;
                                                _0x3ba783 += _0x5153b1;
                                                (_0x104d95 < _0x3605d7 || _0x104d95 >= _0x3ba783) && (_0x504f0b = false, $.log("任务[" + _0x3d01ff.title + "]不在时间段中: " + $.time("hh:mm:ss", _0x3605d7) + "到" + $.time("hh:mm:ss", _0x3ba783)));
                                            }
                                        }
                                    }
                                    if (_0x504f0b) {
                                        const _0x21b423 = {
                                            "need_sign": _0x44d8d5
                                        };
                                        await this.startUserTask(_0x13b7df, _0x3d01ff, _0x1a92fa, _0x21b423);
                                    }
                                    if (_0x47b447) {
                                        break;
                                    }
                                }
                            }
                        }
                    }
                }
            } else {
                let _0xbe46d1 = _0x207a92?.["msg"] || _0x207a92?.["desc"] || "";
                this.log("查询任务列表失败: " + _0xbe46d1);
            }
        } catch (_0x382705) {
            console.log(_0x382705);
        }
    }
    async ["startUserTask"](_0x5599d6, _0x12e53a, _0xefd22b, _0x5920b3 = {}) {
        try {
            let _0x47d8d2 = _0x5920b3?.["need_sign"],
                _0x145101 = "https://cube.meituan.com/topcube/api/toc/task/startUserTask",
                _0x351047 = {
                    "uuid": this.uuid,
                    "userId": this.userId,
                    "cityId": 30,
                    "riskForm": await this.encode_riskForm(_0x47d8d2),
                    "taskIdKey": _0x12e53a.taskIdKey,
                    "taskRuleIdKey": _0xefd22b.taskRuleIdKey,
                    "cubePageId": _0x5599d6.cubePageId,
                    "userType": "MEI_TUAN",
                    "sourceType": "MEI_TUAN",
                    "mini_program_token": this.token
                };
            const _0x2b64f2 = {
                "fn": "startUserTask",
                "method": "post",
                "url": _0x145101,
                "json": _0x351047
            };
            if (_0x47d8d2) {
                let {
                    headers: _0x2ece8b
                } = await this.get_mtgsig(_0x145101, _0x351047);
                const _0x17e701 = {
                    "mtgsig": _0x2ece8b.mtgsig
                };
                _0x2b64f2.headers = _0x17e701;
            }
            let {
                result: _0x1eddec
            } = await this.request(_0x2b64f2);
            if (_0x1eddec?.["code"] == 0) {
                let _0x242516 = JSON.parse(_0xefd22b.ruleConfig);
                if (_0x242516.staySeconds) {
                    let _0x46fc7a = _0x242516.staySeconds * 1000;
                    this.log("等待" + _0x242516.staySeconds + "秒后完成任务..");
                    await $.wait(_0x46fc7a);
                } else {
                    this.log("完成任务[" + _0x12e53a.title + "]成功");
                }
                const _0x156094 = {
                    "need_sign": _0x47d8d2
                };
                await this.updateUserTask(_0x5599d6, _0x12e53a, _0xefd22b, _0x1eddec, _0x156094);
            } else {
                let _0x351728 = _0x1eddec?.["msg"] || _0x1eddec?.["desc"] || "";
                this.log("完成任务[" + _0x12e53a.title + "]失败: " + _0x351728);
                if (_0x351728?.["includes"]("活动已完成")) {
                    const _0x364202 = {
                        "need_sign": _0x47d8d2
                    };
                    await this.updateUserTask(_0x5599d6, _0x12e53a, _0xefd22b, {}, _0x364202);
                }
            }
        } catch (_0x703a40) {
            console.log(_0x703a40);
        }
    }
    async ["process_task_prize"](_0x18eb30) {
        let _0x4c4751 = [];
        for (let _0x337e98 of _0x18eb30) {
            if (_0x337e98.number) {
                _0x4c4751.push(_0x337e98.number + "金币");
            } else {
                if (_0x337e98?.["sendMagicCardResult"]?.["cardList"]?.["length"]) {
                    for (let _0x42ff4f of _0x337e98.sendMagicCardResult.cardList) {
                        _0x4c4751.push("[" + (_0x1a54cd[_0x42ff4f.type] || _0x42ff4f.type) + "]x" + _0x42ff4f.amount);
                    }
                } else {
                    if (_0x337e98?.["sendMagicStoneResult"]?.["stoneList"]?.["length"]) {
                        for (let _0x38ab4d of _0x337e98.sendMagicStoneResult.stoneList) {
                            _0x4c4751.push("[" + (_0x344466[_0x38ab4d.magicStonePrizeType] || _0x38ab4d.magicStonePrizeType) + "]x" + _0x38ab4d.amount);
                        }
                    } else {
                        if (_0x337e98?.["sendCouponResultList"]?.["length"]) {
                            for (let _0x3b5a62 of _0x337e98.sendCouponResultList) {
                                _0x4c4751.push((_0x3b5a62.useCondition || "无门槛") + "减" + _0x3b5a62.couponValue + _0x3b5a62.couponTypeDesc + "券");
                            }
                        }
                    }
                }
            }
        }
        return _0x4c4751;
    }
    async ["updateUserTask"](_0x5c578f, _0x10ba56, _0x240a13, _0x2a1f9c = {}, _0x5daf59 = {}) {
        try {
            let _0x925df4 = _0x5daf59?.["need_sign"],
                {
                    actionNo = "",
                    taskNo = "",
                    taskRuleNo = ""
                } = _0x2a1f9c;
            taskNo = taskNo || _0x10ba56?.["taskNo"] || "";
            taskRuleNo = taskRuleNo || _0x240a13?.["taskRuleNo"] || "";
            let _0x1a7066 = "https://cube.meituan.com/topcube/api/toc/task/updateUserTask",
                _0x294fe4 = {
                    "uuid": this.uuid,
                    "userId": this.userId,
                    "cityId": 30,
                    "taskNo": taskNo,
                    "actionNo": actionNo,
                    "riskForm": await this.encode_riskForm(_0x925df4),
                    "taskIdKey": _0x10ba56.taskIdKey,
                    "taskRuleNo": taskRuleNo,
                    "taskRuleIdKey": _0x240a13.taskRuleIdKey,
                    "cubePageId": _0x5c578f.cubePageId,
                    "userType": "MEI_TUAN",
                    "sourceType": "MEI_TUAN",
                    "mini_program_token": this.token
                };
            const _0x22b775 = {
                "fn": "updateUserTask",
                "method": "post",
                "url": _0x1a7066,
                "json": _0x294fe4
            };
            if (_0x925df4) {
                let {
                    headers: _0x14e177
                } = await this.get_mtgsig(_0x1a7066, _0x294fe4);
                const _0x53c9f7 = {
                    "mtgsig": _0x14e177.mtgsig
                };
                _0x22b775.headers = _0x53c9f7;
            }
            let {
                result: _0x1b661c
            } = await this.request(_0x22b775);
            if (_0x1b661c?.["code"] == 0) {
                if (_0x1b661c?.["prizeList"]?.["length"]) {
                    let _0x15b855 = await this.process_task_prize(_0x1b661c.prizeList);
                    this.log("领取任务[" + _0x10ba56.title + "]奖励获得: " + _0x15b855.join(","));
                } else {
                    this.log("更新任务[" + _0x10ba56.title + "]状态成功");
                    const _0x2e7716 = {
                        "need_sign": _0x925df4
                    };
                    await this.sendTaskPrize(_0x5c578f, _0x10ba56, _0x240a13, _0x2a1f9c, _0x2e7716);
                }
            } else {
                let _0x3974bf = _0x1b661c?.["msg"] || _0x1b661c?.["desc"] || "";
                this.log("更新任务[" + _0x10ba56.title + "]状态失败: " + _0x3974bf);
            }
        } catch (_0x2f93d6) {
            console.log(_0x2f93d6);
        }
    }
    async ["sendTaskPrize"](_0x20ab50, _0x5d7a07, _0x513619, _0x55d605 = {}, _0x4808a1 = {}) {
        try {
            let _0x3475e2 = _0x4808a1?.["need_sign"],
                {
                    actionNo = "",
                    taskNo = "",
                    taskRuleNo = ""
                } = _0x55d605;
            taskNo = taskNo || _0x5d7a07?.["taskNo"] || "";
            taskRuleNo = taskRuleNo || _0x513619?.["taskRuleNo"] || "";
            let _0x4ddbc7 = "https://cube.meituan.com/topcube/api/toc/task/sendTaskPrize",
                _0x50fa88 = {
                    "uuid": this.uuid,
                    "userId": this.userId,
                    "cityId": 30,
                    "taskNo": taskNo,
                    "actionNo": actionNo,
                    "riskForm": await this.encode_riskForm(_0x3475e2),
                    "taskIdKey": _0x5d7a07.taskIdKey,
                    "taskRuleNo": taskRuleNo,
                    "taskRuleIdKey": _0x513619.taskRuleIdKey,
                    "cubePageId": _0x20ab50.cubePageId,
                    "userType": "MEI_TUAN",
                    "sourceType": "MEI_TUAN",
                    "mini_program_token": this.token
                };
            const _0x25e123 = {
                "fn": "sendTaskPrize",
                "method": "post",
                "url": _0x4ddbc7,
                "json": _0x50fa88
            };
            if (_0x3475e2) {
                let {
                    headers: _0x23ead5
                } = await this.get_mtgsig(_0x4ddbc7, _0x50fa88);
                const _0x1d9c22 = {
                    "mtgsig": _0x23ead5.mtgsig
                };
                _0x25e123.headers = _0x1d9c22;
            }
            let {
                result: _0x2790a6
            } = await this.request(_0x25e123);
            if (_0x2790a6?.["code"] == 0) {
                if (_0x2790a6?.["prizeList"]?.["length"]) {
                    let _0x4f14a0 = await this.process_task_prize(_0x2790a6.prizeList);
                    this.log("领取任务[" + _0x5d7a07.title + "]奖励获得: " + _0x4f14a0.join(","));
                } else {
                    this.log("没有领取到任务[" + _0x5d7a07.title + "]奖励");
                }
            } else {
                let _0x55dc6 = _0x2790a6?.["msg"] || _0x2790a6?.["desc"] || "";
                this.log("领取任务[" + _0x5d7a07.title + "]奖励失败: " + _0x55dc6);
            }
        } catch (_0x30f578) {
            console.log(_0x30f578);
        }
    }
    async ["goldHomePage"](_0x41634e, _0xf2784c = {}) {
        try {
            let _0x5946fa = "https://cube.meituan.com/topcube/api/toc/gold/homePage";
            const _0x3c3fb1 = {
                "activitySecretKey": _0x41634e,
                "sourceType": "MEI_TUAN",
                "userId": this.userId,
                "mini_program_token": this.token,
                "uuid": this.uuid
            };
            const _0x1c5f88 = {
                "fn": "goldHomePage",
                "method": "post",
                "url": _0x5946fa,
                "json": _0x3c3fb1
            };
            let {
                result: _0x26a151
            } = await this.request(_0x1c5f88);
            if (_0x26a151?.["code"] == 0) {
                for (let _0x3e7a7f of _0x26a151?.["data"]?.["redPackets"]?.["filter"](_0x27739a => _0x27739a.status == "LOCK_UNRECEIVED")) {
                    await this.receiveRedPacket(_0x41634e, _0x3e7a7f);
                }
            } else {
                let _0x14f73a = _0x26a151?.["msg"] || _0x26a151?.["desc"] || "";
                this.log("查询开红包次数失败: " + _0x14f73a);
            }
        } catch (_0x46af51) {
            console.log(_0x46af51);
        }
    }
    async ["receiveRedPacket"](_0x53147b, _0x6cb500, _0x2fb04e = {}) {
        try {
            let _0xb19179 = "https://cube.meituan.com/topcube/api/toc/gold/receiveRedPacket",
                _0x4cff92 = {
                    "activitySecretKey": _0x53147b,
                    "id": _0x6cb500.id,
                    "sourceType": "MEI_TUAN",
                    "userId": this.userId,
                    "mini_program_token": this.token,
                    "uuid": this.uuid,
                    "riskForm": await this.encode_riskForm()
                },
                {
                    headers: _0x54bf83
                } = await this.get_mtgsig(_0xb19179, _0x4cff92);
            const _0x4bdd9c = {
                "mtgsig": _0x54bf83.mtgsig
            };
            const _0x3f0a08 = {
                "fn": "receiveRedPacket",
                "method": "post",
                "url": _0xb19179,
                "json": _0x4cff92,
                "headers": _0x4bdd9c
            };
            let {
                result: _0x4dd8ea
            } = await this.request(_0x3f0a08);
            if (_0x4dd8ea?.["code"] == 0) {
                this.log("开红包获得" + _0x6cb500.amount + "金币");
            } else {
                let _0x3c0c5d = _0x4dd8ea?.["msg"] || _0x4dd8ea?.["desc"] || "";
                this.log("开红包[" + _0x6cb500.id + "]失败: " + _0x3c0c5d);
            }
        } catch (_0x57d271) {
            console.log(_0x57d271);
        }
    }
    async ["earnDailyLogin"](_0x3baf3b = {}) {
        try {
            let _0x20e7b9 = _0x3baf3b.gameType || 10402;
            const _0x1563d4 = {
                "cityId": "30"
            };
            let _0x2ad732 = {
                "fn": "earnDailyLogin",
                "method": "get",
                "url": "https://game.meituan.com/earn-daily/login/loginMgc",
                "searchParams": {
                    "gameType": _0x20e7b9,
                    "mtToken": this.token,
                    "mtUserId": this.userId,
                    "mtDeviceId": this.uuid,
                    "nonceStr": $.randomString(16),
                    "externalStr": JSON.stringify(_0x1563d4)
                }
            },
                {
                    result: _0x15d2eb
                } = await this.request(_0x2ad732),
                _0x335c30 = $.get(_0x15d2eb, "code", -1);
            if (_0x335c30 == 0) {
                this.acToken = _0x15d2eb?.["response"]?.["accessToken"];
            } else {
                let _0x5bd75d = _0x15d2eb?.["msg"] || _0x15d2eb?.["desc"] || "";
                this.log("登录游戏[" + _0x20e7b9 + "]失败[" + _0x335c30 + "]: " + _0x5bd75d);
            }
        } catch (_0x46e087) {
            console.log(_0x46e087);
        }
    }
    async ["earnDailyPost"](_0x456e57 = {}) {
        let _0x2d53b4 = {};
        try {
            let _0xd5ac3b = _0x456e57.protocolId,
                _0x5d8af7 = _0x456e57.data || {},
                _0x5f45ff = {
                    "fn": "earnDailyPost",
                    "method": "post",
                    "url": "https://game.meituan.com/earn-daily/msg/post",
                    "json": {
                        "acToken": this.acToken,
                        "riskParams": await this.get_app_riskForm(),
                        "protocolId": _0xd5ac3b,
                        "data": _0x5d8af7
                    },
                    "headers": {
                        "Origin": "https://awp.meituan.com",
                        "Referer": "https://awp.meituan.com/"
                    }
                };
            await $.wait_gap_interval(this.t_earnDaily, _0x205205);
            _0x2d53b4 = await this.request(_0x5f45ff);
            this.t_earnDaily = Date.now();
        } catch (_0xe44301) {
            console.log(_0xe44301);
        } finally {
            return _0x2d53b4;
        }
    }
    async ["earnDaily_task_list"](_0x29fc17 = {}) {
        try {
            const _0x8e86e9 = {
                "acToken": this.acToken
            };
            const _0x50ac4b = {
                "protocolId": 1001,
                "data": _0x8e86e9
            };
            {
                let {
                    result: _0x4b433f
                } = await this.earnDailyPost(_0x50ac4b),
                    _0x11379e = $.get(_0x4b433f, "code", -1);
                if (_0x11379e == 200) {
                    for (let _0x30cb4b of _0x4b433f?.["data"]?.["signInPopModel"]?.["rewardModelList"] || []) {
                        _0x30cb4b.current && _0x30cb4b.state == 1 && (await this.earnDaily_sign());
                    }
                    for (let _0xd94372 of _0x4b433f?.["data"]?.["taskInfoList"] || []) {
                        switch (_0xd94372.id) {
                            case 780:
                            case 15099:
                            case 15278:
                                break;
                            default:
                                _0xd94372.dailyRewardTimes < _0xd94372.dailyFinishTimes && (await this.earnDaily_get_reward(_0xd94372));
                                for (let _0x5abacb = _0xd94372.dailyFinishTimes; _0x5abacb < _0xd94372.mgcTaskBaseInfo.curPeriodMaxFinishTimes; _0x5abacb++) {
                                    await this.earnDaily_do_task(_0xd94372);
                                }
                                break;
                        }
                    }
                } else {
                    let _0x28a716 = _0x4b433f?.["msg"] || _0x4b433f?.["desc"] || "";
                    this.log("查询任务失败[" + _0x11379e + "]: " + _0x28a716);
                }
            }
            {
                let {
                    result: _0x40d102
                } = await this.earnDailyPost(_0x50ac4b),
                    _0x571ba7 = $.get(_0x40d102, "code", -1);
                if (_0x571ba7 == 200) {
                    let _0x18d0a1 = _0x40d102?.["data"]?.["playerBaseModel"]?.["redPacketInfo"]?.["leftRedPacketAmount"] || 0;
                    this.log("可以开" + _0x18d0a1 + "次红包");
                    while (_0x18d0a1-- > 0) {
                        await this.earnDaily_redbag();
                    }
                } else {
                    let _0x85c59c = _0x40d102?.["msg"] || _0x40d102?.["desc"] || "";
                    this.log("查询红包次数失败[" + _0x571ba7 + "]: " + _0x85c59c);
                }
            }
            {
                let {
                    result: _0x10b875
                } = await this.earnDailyPost(_0x50ac4b),
                    _0x552b96 = $.get(_0x10b875, "code", -1);
                if (_0x552b96 == 200) {
                    let _0x4f5bcf = _0x10b875?.["data"]?.["playerBaseModel"]?.["lotteryInfo"]?.["leftLotteryTimesAmount"] || 0;
                    this.log("可以抽奖" + _0x4f5bcf + "次");
                    while (_0x4f5bcf-- > 0) {
                        await this.earnDaily_draw();
                    }
                } else {
                    let _0x128733 = _0x10b875?.["msg"] || _0x10b875?.["desc"] || "";
                    this.log("查询转盘次数失败[" + _0x552b96 + "]: " + _0x128733);
                }
            }
            {
                let {
                    result: _0x26bc53
                } = await this.earnDailyPost(_0x50ac4b),
                    _0x7641e8 = $.get(_0x26bc53, "code", -1);
                if (_0x7641e8 == 200) {
                    this.cash = _0x26bc53?.["data"]?.["playerBaseModel"]?.["activityCycleInfo"]?.["cashToken"] || 0;
                    this.coin = _0x26bc53?.["data"]?.["playerBaseModel"]?.["activityCycleInfo"]?.["coinToken"] || 0;
                    this.coin > 0 && (await this.earnDaily_coinInfo());
                    const _0x3c7a60 = {
                        "notify": true
                    };
                    this.log("每日赚钱余额: " + (this.cash / 100).toFixed(2) + "元, " + this.coin + "金币", _0x3c7a60);
                } else {
                    let _0x34e8f9 = _0x26bc53?.["msg"] || _0x26bc53?.["desc"] || "";
                    this.log("查询转盘次数失败[" + _0x7641e8 + "]: " + _0x34e8f9);
                }
            }
            await this.earnDaily_get_withdraw_list();
        } catch (_0x2d5a4a) {
            console.log(_0x2d5a4a);
        }
    }
    async ["earnDaily_coinInfo"](_0x5382c2 = {}) {
        try {
            const _0x9dbe56 = {
                "protocolId": 1015
            };
            let {
                result: _0x11818f
            } = await this.earnDailyPost(_0x9dbe56),
                _0x120b6b = $.get(_0x11818f, "code", -1);
            if (_0x120b6b == 200) {
                let _0x1d9deb = _0x11818f?.["data"]?.["exchangeInfoList"]?.["filter"](_0x46fae0 => _0x46fae0.name == "翻红包现金");
                if (!_0x1d9deb.length) {
                    return;
                }
                let _0x2d46a2 = _0x1d9deb[0];
                this.coin >= _0x2d46a2.price && (await this.earnDaily_coinExchange(_0x2d46a2));
            } else {
                let _0xe65ca0 = _0x11818f?.["msg"] || _0x11818f?.["desc"] || "";
                this.log("查询金币兑换失败[" + _0x120b6b + "]: " + _0xe65ca0);
            }
        } catch (_0x2efbe8) {
            console.log(_0x2efbe8);
        }
    }
    async ["earnDaily_coinExchange"](_0x5e04a9, _0x3207ed = {}) {
        try {
            const _0x46a0fd = {
                "skuId": _0x5e04a9.skuId
            };
            const _0x3b2206 = {
                "protocolId": 1016,
                "data": _0x46a0fd
            };
            let {
                result: _0x46b073
            } = await this.earnDailyPost(_0x3b2206),
                _0x515a97 = $.get(_0x46b073, "code", -1);
            if (_0x515a97 == 200) {
                this.cash = _0x46b073?.["data"]?.["activityCycleInfo"]?.["cashToken"] || 0;
                this.coin = _0x46b073?.["data"]?.["activityCycleInfo"]?.["coinToken"] || 0;
                this.log("使用" + _0x5e04a9.price + "金币兑换余额成功: 剩余" + this.coin + "金币");
                let _0x3bfd4c = _0x46b073?.["data"]?.["exchangeInfoList"]?.["filter"](_0x1eabad => _0x1eabad.name == "翻红包现金");
                if (!_0x3bfd4c.length) {
                    return;
                }
                let _0x56f913 = _0x3bfd4c[0];
                this.coin >= _0x56f913.price && (await this.earnDaily_coinExchange(_0x56f913));
            } else {
                let _0x2526d8 = _0x46b073?.["msg"] || _0x46b073?.["desc"] || "";
                this.log("使用" + _0x5e04a9.price + "金币兑换余额失败[" + _0x515a97 + "]: " + _0x2526d8);
            }
        } catch (_0x52a9a6) {
            console.log(_0x52a9a6);
        }
    }
    async ["earnDaily_sign"](_0x290dff = {}) {
        try {
            const _0x21a74c = {
                "protocolId": 1007
            };
            let {
                result: _0xca3b3e
            } = await this.earnDailyPost(_0x21a74c),
                _0x55f9e7 = $.get(_0xca3b3e, "code", -1);
            if (_0x55f9e7 == 200) {
                this.log("签到成功: " + (_0xca3b3e?.["data"]?.["remitNotificationModelList"]?.["map"](_0x1f12ea => _0x1f12ea.content)?.["join"](",") || ""));
            } else {
                let _0x137a48 = _0xca3b3e?.["msg"] || _0xca3b3e?.["desc"] || "";
                this.log("签到失败[" + _0x55f9e7 + "]: " + _0x137a48);
            }
        } catch (_0x50e9e7) {
            console.log(_0x50e9e7);
        }
    }
    async ["earnDaily_do_task"](_0x5ef227, _0x280137 = {}) {
        try {
            const _0x1f81c2 = {
                "taskId": _0x5ef227.id
            };
            const _0xbfe545 = {
                "protocolId": 1004,
                "data": _0x1f81c2
            };
            let {
                result: _0xf7a3e7
            } = await this.earnDailyPost(_0xbfe545),
                _0x2ca958 = $.get(_0xf7a3e7, "code", -1);
            if (_0x2ca958 == 200) {
                this.log("完成任务[" + (_0x5ef227?.["mgcTaskBaseInfo"]?.["viewTitle"] || _0x5ef227?.["id"]) + "]成功");
                await this.earnDaily_get_reward(_0x5ef227);
            } else {
                let _0x3396ba = _0xf7a3e7?.["msg"] || _0xf7a3e7?.["desc"] || "";
                this.log("完成任务[" + (_0x5ef227?.["mgcTaskBaseInfo"]?.["viewTitle"] || _0x5ef227?.["id"]) + "]失败[" + _0x2ca958 + "]: " + _0x3396ba);
            }
        } catch (_0x495fe2) {
            console.log(_0x495fe2);
        }
    }
    async ["earnDaily_get_reward"](_0x586f29, _0x49f226 = {}) {
        try {
            const _0x1a7697 = {
                "taskId": _0x586f29.id
            };
            const _0x52574a = {
                "protocolId": 1005,
                "data": _0x1a7697
            };
            let {
                result: _0x5e6b56
            } = await this.earnDailyPost(_0x52574a),
                _0x31115b = $.get(_0x5e6b56, "code", -1);
            if (_0x31115b == 200) {
                this.log("领取任务[" + _0x586f29.mgcTaskBaseInfo.viewTitle + "]奖励成功");
            } else {
                let _0x5f1b6f = _0x5e6b56?.["msg"] || _0x5e6b56?.["desc"] || "";
                this.log("领取任务[" + _0x586f29.mgcTaskBaseInfo.viewTitle + "]奖励失败[" + _0x31115b + "]: " + _0x5f1b6f);
            }
        } catch (_0x3c2781) {
            console.log(_0x3c2781);
        }
    }
    async ["earnDaily_redbag"](_0x3ff946 = {}) {
        try {
            const _0x24c87c = {
                "protocolId": 1008
            };
            let {
                result: _0x5d77ca
            } = await this.earnDailyPost(_0x24c87c),
                _0x423b5f = $.get(_0x5d77ca, "code", -1);
            if (_0x423b5f == 200) {
                let _0x3f301b = _0x5d77ca?.["data"]?.["rewardModelList"]?.["filter"](_0x23d6ec => _0x23d6ec.rewarded) || [];
                if (_0x3f301b.length) {
                    let _0x426f0d = _0x3f301b[0];
                    if (_0x426f0d.resourceType == 1) {
                        this.log("开红包获得: " + (_0x426f0d.amount / 100).toFixed(2) + "元");
                    } else {
                        _0x426f0d.resourceType == 2 ? this.log("开红包获得: " + _0x426f0d.amount + "金币") : this.log("开红包获得: " + JSON.stringify(_0x426f0d));
                    }
                }
            } else {
                let _0x133d49 = _0x5d77ca?.["msg"] || _0x5d77ca?.["desc"] || "";
                this.log("开红包失败[" + _0x423b5f + "]: " + _0x133d49);
            }
        } catch (_0x4d8d75) {
            console.log(_0x4d8d75);
        }
    }
    async ["earnDaily_draw"](_0x3f22fa = {}) {
        try {
            const _0x3771b4 = {
                "protocolId": 1010
            };
            let {
                result: _0x5ec0cc
            } = await this.earnDailyPost(_0x3771b4),
                _0x574e08 = $.get(_0x5ec0cc, "code", -1);
            if (_0x574e08 == 200) {
                let _0x54a512 = _0x5ec0cc?.["data"]?.["currentReward"];
                if (_0x54a512?.["rewardedCouponModel"]) {
                    this.log("转盘抽奖: " + _0x54a512.rewardedCouponModel?.["useRule"] + _0x54a512.rewardedCouponModel?.["name"]);
                    return;
                }
                switch (_0x54a512?.["resourceType"]) {
                    case 1:
                        let _0x6d326e = ((_0x54a512?.["amount"] || 0) / 100).toFixed(2);
                        this.log("转盘抽奖: " + _0x6d326e + "元余额");
                        break;
                    case 2:
                        this.log("转盘抽奖: " + _0x54a512?.["amount"] + "金币");
                        break;
                    case 3:
                        this.log("转盘抽奖: 随机提现机会");
                        break;
                    default:
                        this.log("转盘抽奖: " + JSON.stringify(_0x5ec0cc));
                        break;
                }
            } else {
                let _0x3350be = _0x5ec0cc?.["msg"] || _0x5ec0cc?.["desc"] || "";
                this.log("转盘抽奖失败[" + _0x574e08 + "]: " + _0x3350be);
            }
        } catch (_0x3b3ce7) {
            console.log(_0x3b3ce7);
        }
    }
    async ["earnDaily_get_withdraw_list"](_0x13f34a = {}) {
        try {
            const _0x57a3f7 = {
                "protocolId": 1012
            };
            let {
                result: _0xb01793
            } = await this.earnDailyPost(_0x57a3f7),
                _0x27cb00 = $.get(_0xb01793, "code", -1);
            if (_0x27cb00 == 200) {
                let _0x1c5284 = _0xb01793?.["data"]?.["activityCycleInfo"]?.["cashToken"] || 0,
                    _0x1d80fb = (_0x1c5284 / 100).toFixed(2);
                this.log("红包余额: " + _0x1d80fb + "元");
                let _0x189f74 = (_0xb01793?.["data"]?.["cashList"] || []).sort(function (_0x3bd7f3, _0x6c8308) {
                    return _0x6c8308.amount - _0x3bd7f3.amount;
                });
                if (MT_AutoWithdraw == "false" || !MT_AutoWithdraw) {
                    _0x189f74 = _0x189f74.filter(_0x202eac => _0x202eac.amount == 5000);
                }
                for (let _0x4760b7 of _0x189f74) {
                    if (_0x4760b7.amount > _0x1c5284) {
                        continue;
                    }
                    if (await this.earnDaily_withdraw(_0x4760b7)) {
                        break;
                    }
                }
            } else {
                let _0x1fa770 = _0xb01793?.["msg"] || _0xb01793?.["desc"] || "";
                this.log("查询提现列表失败[" + _0x27cb00 + "]: " + _0x1fa770);
            }
        } catch (_0x2b8f3a) {
            console.log(_0x2b8f3a);
        }
    }
    async ["earnDaily_withdraw"](_0x4304fe, _0x3accb7 = {}) {
        let _0x3ffd5c = false;
        try {
            let _0x10197b = (_0x4304fe.amount / 100).toFixed(2);
            const _0x3ec4f8 = {
                "id": _0x4304fe.id,
                "amount": _0x4304fe.amount
            };
            const _0x5d796b = {
                "protocolId": 1013,
                "data": _0x3ec4f8
            };
            let {
                result: _0x112717
            } = await this.earnDailyPost(_0x5d796b),
                _0x4308b5 = $.get(_0x112717, "code", -1);
            if (_0x4308b5 == 200) {
                _0x3ffd5c = true;
                const _0x2f08f0 = {
                    "notify": true
                };
                this.log("提现[" + _0x10197b + "元]到钱包成功", _0x2f08f0);
            } else {
                let _0x4d77f0 = _0x112717?.["msg"] || _0x112717?.["desc"] || "";
                _0x4308b5 == 1017 ? (_0x3ffd5c = true, this.log("提现[" + _0x10197b + "元]失败[" + _0x4308b5 + "]: 可能今天已提现过")) : this.log("提现[" + _0x10197b + "元]失败[" + _0x4308b5 + "]: " + _0x4d77f0);
            }
        } catch (_0x541627) {
            console.log(_0x541627);
        } finally {
            return _0x3ffd5c;
        }
    }
    async ["c_task"](_0x8a4c45, _0x4e5549 = {}) {
        try {
            let _0x54a549 = Math.random() * 100 + 2400 | 0;
            const _0x36e947 = {
                "Referer": "https://click.meituan.com/t?t=1&c=2&p=" + _0x8a4c45
            };
            let _0x2f5b5c = {
                "fn": "get_task",
                "method": "post",
                "url": "https://click.meituan.com/cps/clickReferralLink",
                "headers": _0x36e947,
                "json": {
                    "p": _0x8a4c45,
                    "t": "1",
                    "c": "2",
                    "sessionId": "187a" + $.randomPattern("xxxxxxx-xxx-xxx-xxx"),
                    "referrer": "",
                    "fingerprintFromH5": "eJxVV" + $.randomString(_0x54a549, _0x28dac8)
                }
            };
            await this.request(_0x2f5b5c);
        } catch (_0x1d0338) {
            console.log(_0x1d0338);
        }
    }
    async ["walletMainpage"](_0xe21b0c = {}) {
        try {
            const _0x3769a6 = {
                "fn": "walletMainpage",
                "method": "post",
                "url": "https://npay.meituan.com/conch/walletV5/mainpage",
                "form": {}
            };
            _0x3769a6.form.token = this.token;
            _0x3769a6.form.nb_app = "group";
            _0x3769a6.form.nb_appversion = "12.9.203";
            _0x3769a6.form.nb_channel = "common";
            _0x3769a6.form.nb_ci = "30";
            _0x3769a6.form.nb_location = "0_0";
            _0x3769a6.form.nb_osversion = "16.1.2";
            _0x3769a6.form.nb_platform = "iOS";
            _0x3769a6.form.utmSource = "AppStore";
            _0x3769a6.form.from = "mine_qianbaorukou_qianbao";
            _0x3769a6.form.popWindowOldChain = "false";
            let {
                result: _0x8f1bd4
            } = await this.request(_0x3769a6),
                _0x1bf871 = $.get(_0x8f1bd4, "status", -1);
            if (_0x1bf871 == "success") {
                let _0x3fbff6 = [];
                for (let _0x38af86 of _0x8f1bd4?.["data"]?.["AssetArea"]?.["otherAssetAreaDTOList"] || []) {
                    switch (_0x38af86.title) {
                        case "余额":
                            _0x3fbff6.push("钱包余额: " + (_0x38af86?.["subTitle"] || 0) + "元");
                            break;
                        case "立减金":
                            _0x3fbff6.push("立减金: " + (_0x38af86?.["subTitle"] || 0) + "元");
                            break;
                    }
                }
                if (_0x3fbff6.length) {
                    const _0x4ccb97 = {
                        "notify": true
                    };
                    this.log(_0x3fbff6.join(", "), _0x4ccb97);
                }
            } else {
                let _0x4dd86d = _0x8f1bd4?.["error"]?.["message"] || "";
                this.log("查询钱包失败[" + _0x1bf871 + "]: " + _0x4dd86d);
            }
        } catch (_0x54db1e) {
            console.log(_0x54db1e);
        }
    }
    async ["refTask"]() {
        if (!_0x41a27d?.["length"]) {
            return;
        }
        let _0x3df2b4 = _0x41a27d.sort(function () {
            return Math.random() - 0.5;
        }),
            _0x532575 = _0x3df2b4.length,
            _0xd2fcb1 = Math.min(3, _0x532575);
        _0x3df2b4 = _0x3df2b4.slice(0, _0xd2fcb1);
        for (let _0x4d8026 of _0x3df2b4) {
            await this.c_task(_0x4d8026);
        }
    }
    async ["batchfetchcomponentcouponV2"](_0x5bddea) {
        try {
            let {
                refIds: _0x2681e2,
                instanceId: _0x121f29,
                gdPageId: _0x2a08e8,
                pageId: _0x4cd9d6
            } = _0x5bddea;
            const _0x23cb78 = {
                "cType": "wm_wxapp",
                "fpPlatform": 13,
                "wxOpenId": "",
                "appVersion": "12.9.206",
                "mtFingerprint": this.fp
            };
            let _0x338425 = {
                "couponReferIds": _0x2681e2.join(","),
                "geoType": 2,
                "actualLng": _0x593f5a,
                "actualLat": _0xae0cf4,
                "isInDpEnv": 0,
                "gdPageId": _0x2a08e8,
                "pageId": _0x4cd9d6,
                "version": 1,
                "instanceId": _0x121f29,
                "componentId": _0x121f29,
                "utmSource": "",
                "utmCampaign": "",
                "needFetchedByUUID": 1
            },
                _0x450a2a = new URL("https://promotion.waimai.meituan.com/lottery/couponcomponent/batchfetchcomponentcoupon/v2");
            for (let _0x2268aa in _0x338425) {
                _0x450a2a.searchParams.append(_0x2268aa, _0x338425[_0x2268aa]);
            }
            let {
                headers: _0x3c1d0b
            } = await this.get_mtgsig(_0x450a2a.toString(), _0x23cb78);
            const _0x24a6b2 = {
                "mtgsig": _0x3c1d0b.mtgsig
            };
            const _0x5d7a79 = {
                "fn": "batchfetchcomponentcouponV2",
                "method": "post",
                "url": _0x450a2a,
                "json": _0x23cb78,
                "headers": _0x24a6b2
            };
            let {
                result: _0x16572e
            } = await this.request(_0x5d7a79);
            if (_0x16572e?.["code"] == 0) {
                let _0x5a9a96 = _0x16572e?.["data"]?.["filter"](_0x3b236c => _0x3b236c.code == 0)?.["map"](_0x56e7d5 => "[" + _0x56e7d5.data.couponName + "]" + (_0x56e7d5.data.priceLimit || "无门槛") + "减" + _0x56e7d5.data.couponValue);
                if (_0x5a9a96.length) {
                    this.notify_coupon(_0x5a9a96);
                }
            } else {
                let _0x129d9d = _0x16572e?.["msg"] || _0x16572e?.["desc"] || "";
                this.log("集合领券失败: " + _0x129d9d);
            }
        } catch (_0x287696) {
            console.log(_0x287696);
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
        for (let _0x46c5d6 of gundomConfV4) {
            await this.gundamGrabV4(_0x46c5d6);
        }
        for (let _0x4dc412 of _0x1a5bd9) {
            await this.batchfetchcomponentcouponV2(_0x4dc412);
        }
        for (let _0x577a48 of _0x87951) {
            await this.signupRecord(_0x577a48);
            await this.ttsqEntry(_0x577a48);
        }
    }
    async ["wxSqsqTask"]() {
        $.log("---------------- WX-社群神券 ----------------");
        for (let _0x222ba7 of _0x56e09e) {
            await this.turntableDraw(_0x222ba7);
        }
    }
    async ["wxSqSignTask"]() {
        $.log("---------------- WX-社群签到 ----------------");
        for (let _0x18b2b7 of _0x27902d) {
            await this.clockInStatus(_0x18b2b7);
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
        for (let _0x2bb125 of _0x3cd9b1) {
            $.log("============== " + _0x2bb125.name + " ==============");
            if (_0x2bb125.taskIdKeys.length > _0x4ee345) {
                const _0x3f5a9d = {
                    "cubePageId": _0x2bb125.cubePageId,
                    "taskIdKeys": []
                };
                for (let _0x10d5e7 of _0x2bb125.taskIdKeys) {
                    _0x3f5a9d.taskIdKeys.push(_0x10d5e7);
                    _0x3f5a9d.taskIdKeys.length >= _0x4ee345 && (await this.getUserTasks(_0x3f5a9d), _0x3f5a9d.taskIdKeys = []);
                }
                if (_0x3f5a9d.taskIdKeys.length > 0) {
                    await this.getUserTasks(_0x3f5a9d);
                }
            } else {
                await this.getUserTasks(_0x2bb125);
            }
        }
        await this.goldHomePage("9587270bb85c");
    }
    async ["notifyTask"]() {
        $.log("---------------- 汇总推送 ----------------");
        await this.walletMainpage();
    }
    async ["userTask"]() {
        const _0x444dab = {
            "notify": true
        };
        $.log("\n---------------- 账号[" + this.index + "] ----------------", _0x444dab);
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
    if (!(await _0x3d84ca())) {
        return;
    }
    await _0x5699f2();
    $.read_env(UserClass, ckNames, envSplitor);
    $.log("\n-------------------------------------");
    MT_AutoWithdraw == "false" || !MT_AutoWithdraw ? $.log("APP每日赚钱设置为: 不随机提现") : $.log("APP每日赚钱设置为: 每日随机提现");
    $.log("-------------------------------------");
    for (let _0x4f9b55 of $.userList) {
        await _0x4f9b55.userTask();
    }
})().catch(_0x8983a => $.log(_0x8983a)).finally(() => $.exitNow());
async function _0x3d84ca() {
    let _0x49b725 = false;
    try {
        const _0x48d921 = {
            "fn": "auth",
            "method": "get",
            "url": _0x215118
        };
        let {
            statusCode: _0x3430f6,
            result: _0x41ae21
        } = await _0x2e8604.request(_0x48d921);
        if (_0x3430f6 != 200) {
            return Promise.resolve();
        }
        if (_0x41ae21?.["code"] == 0) {
            _0x41ae21 = JSON.parse(_0x41ae21.data.file.data);
            /*
            if (_0x41ae21?.["commonNotify"] && _0x41ae21.commonNotify.length > 0) {
              const _0x2ccafc = {
                "notify": true
              };
              $.log(_0x41ae21.commonNotify.join("\n") + "\n", _0x2ccafc);
            }
            _0x41ae21?.["commonMsg"] && _0x41ae21.commonMsg.length > 0 && $.log(_0x41ae21.commonMsg.join("\n") + "\n");
            */
            if (_0x41ae21[_0x28a796]) {
                let _0x23b16f = _0x41ae21[_0x28a796];
                _0x23b16f.status == 0 ? _0x2abb79 >= _0x23b16f.version ? (_0x49b725 = true, /*$.log(_0x23b16f.msg[_0x23b16f.status]),*/ $.log(_0x23b16f.updateMsg), $.log("现在运行的脚本版本是：" + _0x2abb79 + "，最新脚本版本：" + _0x23b16f.latestVersion)) : $.log(_0x23b16f.versionMsg) : $.log(_0x23b16f.msg[_0x23b16f.status]);
            } else {
                $.log(_0x41ae21.errorMsg);
            }
        }
    } catch (_0x29cb18) {
        $.log(_0x29cb18);
    } finally {
        return _0x49b725;
    }
}
async function _0x5699f2() {
    let _0x477d5d = false;
    try {
        const _0x522f69 = {
            "fn": "auth",
            "method": "get",
            "url": _0xee41a8
        };
        let {
            statusCode: _0x583999,
            result: _0x240cc6
        } = await _0x2e8604.request(_0x522f69);
        if (_0x583999 != 200) {
            return Promise.resolve();
        }
        if (_0x240cc6?.["code"] == 0) {
            _0x240cc6 = JSON.parse(_0x240cc6.data.file.data);
            //inviteCode = _0x240cc6?.["inviteCode"] || inviteCode;
            for (let _0x3ef1c2 of _0x240cc6?.["mrzqTaskId_all"] || []) {
                !_0x13fffc.includes(_0x3ef1c2) && _0x13fffc.push(_0x3ef1c2);
            }
            for (let _0xf97fe2 of _0x240cc6?.["commonTaskConf"] || []) {
                _0x3cd9b1.filter(_0x3494f8 => _0x3494f8.name == _0xf97fe2.name)?.["length"] == 0 && _0x3cd9b1.push(_0xf97fe2);
            }
            if (_0x240cc6?.["gundomConfV4"]?.["length"]) {
                gundomConfV4 = _0x240cc6.gundomConfV4;
            }
            if (_0x240cc6?.["batchConf"]?.["length"]) {
                _0x1a5bd9 = _0x240cc6.batchConf;
            }
            if (_0x240cc6?.["pid_list"]?.["length"]) {
                _0x41a27d = _0x240cc6.pid_list;
            }
            for (let _0x226773 of _0x240cc6?.["sqsqIdList"] || []) {
                !_0x56e09e.includes(_0x226773) && _0x56e09e.push(_0x226773);
            }
            for (let _0x886e81 of _0x240cc6?.["sqSignIdList"] || []) {
                !_0x27902d.includes(_0x886e81) && _0x27902d.push(_0x886e81);
            }
            for (let _0x3f94b2 of _0x240cc6?.["ttsqSignIdList"] || []) {
                !_0x87951.includes(_0x3f94b2) && _0x87951.push(_0x3f94b2);
            }
        }
    } catch (_0x3da6e9) {
        $.log(_0x3da6e9);
    } finally {
        return _0x477d5d;
    }
}