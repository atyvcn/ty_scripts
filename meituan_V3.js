/*
美团 v3.02

新版美团仅支持青龙等nodejs环境, 不支持圈X
自动领券和完成一些活动任务
已删除大部分失效和不能提现的活动,新增了一些领券

自行捉包把meituan.com里面的token(一般在请求头里)填到变量 meituanCookie 中, 多账号换行或&或@隔开
export meituanCookie="AgGZIgsYHyxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
定时建议至少7点11点17点各跑一次拿三餐奖励, 多跑几次也没事

cron: 31 2,7,11,17,21 * * *
*/
const Env = require('./basic/Env.js');
const { TYQLDG_API, base64_encode } = require('./basic/tyqldg');

const $ = Env("美团"),
  got = require('got'),
  envPrefix = "MT_",
  envSplitor = ["\n", "&", "@"],//支持多种分割，但要保证变量里不存在这个字符
  ckNames = [envPrefix + "CK"],//可以支持多变量
  env_name = envPrefix + "CK",
  DEFAULT_TIMEOUT = 8000,
  MAX_THREAD = parseInt(process.env[envPrefix + 'Thread']) || 50; //默认最大并发数
DEFAULT_RETRY = 3;
let HPA = null;
const MT_Proxy = process.env[envPrefix + "Proxy"] || process.env.LEAF_DEBUG_PROXY || "";
let eid = 0;
$.get = function (result, name, value = "") {
  let value1 = value;
  result?.["hasOwnProperty"](name) && (value1 = result[name]);
  return value1;
}

const _0x2caf33 = 3.02,
  _0x1fedb3 = "meituan",
  _0x21c5b6 = "https://leafxcy.coding.net/api/user/leafxcy/project/validcode/shared-depot/validCode/git/blob/master/code.json",
  _0x3a50ed = "https://leafxcy.coding.net/api/user/leafxcy/project/validcode/shared-depot/validCode/git/blob/master/" + _0x1fedb3 + ".json",
  _0x293335 = "Mozilla/5.0 (iPhone; CPU iPhone OS 16_1_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.33(0x18002129) NetType/WIFI Language/zh_CN",
  _0xd13a28 = "wxde8ac0a21135c07d",
  _0xd0a826 = "1399386702",
  _0x4e5fa1 = "2.30.3",
  _0x407521 = "iphone",
  _0x1f5729 = "AwQAAABJAgAAAAEAAAAyAAAAPLgC95WH3MyqngAoyM/hf1hEoKrGdo0pJ5DI44e1wGF9AT3PH7Wes03actC2n/GVnwfURonD78PewMUppAAAADgCEZv2akitiLnGkQIH6r67N1V9EUFpKyBOQRSRKpv9Awnm6LwnygipNjcIwXXJZEv5ddnUSW8vZQ==",
  _0x10e72f = "0123456789",
  _0x6c1b2a = "qwertyuiopasdfghjklzxcvbnm",
  _0xb1e84 = _0x10e72f + _0x6c1b2a + _0x6c1b2a.toUpperCase();
let _0x42d3c4 = "114.07" + $.randomString(12, _0x10e72f),
  _0x2fa7e9 = "22.52" + $.randomString(13, _0x10e72f),
  _0x514e86 = "NnOIp-QOs8SiYF1dcSlL5r8phPrCf6qkH7evMyjIoup2NXxNCLYcBbd3bqpv2X2IwEEJb5qoWglfkm_BFMSF_P37OScxhIfzAWgvmEjhdwJlyDXeFPZ0XwraweVp2EDxHrRbGOZeH8QVXwCoLxaUGBeOtuA0cEaD1RsGuHC_D2E",
  _0x4ccb50 = [];
const _0x395fca = 600,
  _0x4be557 = 10,
  _0x352b52 = ["1005", "1007"];
let _0x2edc7e = ["631682c504", "bb88750009", "9f90f45850", "90e9ecbe6a", "b6bfd8c1bc", "d4caf84940", "8decbc4c98", "c6026478e4", "4353a111e9", "7ceb1c14a7", "89515f0102", "63bec5af07", "1c8df37ffe", "36eedbe86c", "6ab415d70c", "3c309c7f26", "66c2938e1d", "3497a4fd05", "7f1f7ec5a4", "2fb53287b2", "2b0ada0dd7", "495070b239", "176f400a8f", "672129ff6d", "a479497fa6", "97ea404b56", "320ffa53e7", "6ccbda387f", "6f2d5f144f", "563983d5f1", "6f70050a62", "dfd9c44d7f", "6d5461c6dd", "a7331f5c94", "8d3891bef9", "eb6094dcaa", "11c95cc416", "351c3f4810", "67bd2e0988", "cdb75f714d", "3a6eba11a1", "76f9dc2980", "30644bcb35", "d1a1d62e6c", "8af63652ba", "075eb403be", "361ba45eff", "cfbb835838", "e26f305436", "ed33f82fa9", "e36bae3f8f", "6696ff7825", "b7719de06c", "2ab24bbc57", "2d98ddf8ac", "406fb78bfd", "9b84c4503a", "55ce3f059d", "cd06f8210b", "f6706f9b33", "34a718f16a", "f5e2218b18", "c7f6a889ff", "2583c8ba46", "45e325543c", "a162c96304"],
  _0x316734 = ["b24pg8jaFTeNadCXq0lb3A", "yLm-IynkBUQLt09kALFv8Q", "Ox5_0TfqOg6b3UfkKS3rUg", "TADnCANwheP5AKOjx3NpgA"],
  _0x2fab9a = ["06hFC-C1WGiAQYUGya5QJA", "5IFmI13NeO7kRPW1jUj7Lw", "ySJ2HpgexeI0TJcLkA_5Ug"],
  _0x50a79a = ["XVsZc3p1O1jd-uTG4EjyXw", "9khEyiqt2tKFyZSjvqphkQ", "_p2QL78Fao6bsexHzofp-w"];
const _0x47da96 = {
  "name": "APP-每日赚钱",
  "cubePageId": 10000003,
  "taskIdKeys": ["b6e6e96128", "710d92816e", "fc43b223be"]
};
const _0x18d406 = {
  "name": "WX-每日赚钱",
  "cubePageId": 184008,
  "taskIdKeys": ["1fff834702"]
};
const _0xc4a04c = {
  "name": "APP-团团神券-魔法石",
  "cubePageId": 88888889,
  "taskIdKeys": ["a941c20450", "cdcc8a8195", "eb03206b17", "5c919dfbd8", "8f53427c39", "f749a47257", "4d609dde67", "3e5cbc8120", "532e764346", "7613d02997"]
};
const _0x562d75 = {
  "name": "WX-天天赚钱",
  "cubePageId": 123,
  "taskIdKeys": _0x2edc7e
};
const _0x445f38 = [_0x47da96, _0x18d406, _0xc4a04c, _0x562d75],
  _0x183cfc = {
    "NORMAL_CARD": "普通卡",
    "SENIOR_CARD": "稀有卡"
  };
const _0x57f7f8 = {
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

class _0x444224 {
  constructor() {
    this.index = $.userIdx++;
    this.name = "";
    this.valid = true;
    const _0x5efc18 = {
      "limit": 0
    };
    const _0x155ae5 = {
      "Connection": "keep-alive"
    };
    const _0x5d100c = {
      "retry": _0x5efc18,
      "timeout": DEFAULT_TIMEOUT,
      "followRedirect": false,
      "headers": _0x155ae5
    };
    this.got = got.extend(_0x5d100c);
  }
  ["log"](_0x4a15d5, _0x480a5f = {}) {
    var _0x5b997b = "",
      _0x2aac50 = $.userCount.toString().length;
    if (this.index) {
      _0x5b997b += "账号[" + $.padStr(this.index, _0x2aac50) + "]";
    }
    if (this.name) {
      _0x5b997b += "[" + this.name + "]";
    }
    $.log(_0x5b997b + _0x4a15d5, _0x480a5f);
  }
  async ["request"](_0x5bf3c3) {
    const _0x35d5e5 = {
      "statusCode": -1,
      "headers": null,
      "result": null
    };
    try {
      var _0x1ac701 = null,
        _0x1b4c2d = 0,
        _0x301ce6 = _0x5bf3c3.fn || _0x5bf3c3.url;
      _0x5bf3c3.method = _0x5bf3c3?.["method"]?.["toUpperCase"]() || "GET";
      if (MT_Proxy) {
        if (!HPA) {
          var _0xc51c39 = require("https-proxy-agent");
          HPA = new _0xc51c39(MT_Proxy);
        }
        const _0x2f7e55 = {
          "http": HPA,
          "https": HPA
        };
        _0x5bf3c3.agent = _0x2f7e55;
        const _0x33bc35 = {
          "rejectUnauthorized": false
        };
        _0x5bf3c3.https = _0x33bc35;
      }
      while (_0x1b4c2d++ < DEFAULT_RETRY) {
        try {
          await this.got(_0x5bf3c3).then(_0x11a55e => {
            _0x1ac701 = _0x11a55e;
          }, _0x16e632 => {
            _0x1ac701 = _0x16e632.response;
          });
          if ((_0x1ac701?.["statusCode"] / 100 | 0) <= 4) {
            break;
          }
        } catch (_0x402fbf) {
          _0x402fbf.name == "TimeoutError" ? this.log("[" + _0x301ce6 + "]请求超时，重试第" + _0x1b4c2d + "次") : this.log("[" + _0x301ce6 + "]请求错误(" + _0x402fbf.message + ")，重试第" + _0x1b4c2d + "次");
        }
      }
      if (_0x1ac701) {
        let {
          statusCode: _0x5927bc,
          headers: _0x3436bf,
          body: _0x5abb9b
        } = _0x1ac701;
        if (_0x5abb9b) {
          try {
            _0x5abb9b = JSON.parse(_0x5abb9b);
          } catch { }
        }
        const _0x13f1fb = {
          "statusCode": _0x5927bc,
          "headers": _0x3436bf,
          "result": _0x5abb9b
        };
        _0x35d5e5 = _0x13f1fb;
      }
    } catch (_0x95884b) {
      console.log(_0x95884b);
    } finally {
      return _0x35d5e5;
    }
  }
}
let _0xebb1c9 = new _0x444224();
class UserClass extends _0x444224 {
  constructor(ck) {
    super();
    Object.assign(this, $.CkToJson(ck));
    this.t_earnDaily = 0;
    this.uuid = $.randomPattern("186ebxxxxxxxx-22e49fxxxxxxxx-0-0-186ebxxxxxxxx");
    this.openid = $.randomString(7, _0xb1e84) + "-" + $.randomString(20, _0xb1e84);
    this.got = this.got.extend({
      "headers": {
        "User-Agent": _0x293335,
        "token": this.token,
        "openid": this.openid,
        "uuid": this.uuid,
        "M-APPKEY": "wxmp_mt-weapp",
        "clientversion": _0x4e5fa1,
        "utm_medium": _0x407521,
        "openIdCipher": _0x1f5729,
        "cookie": "token=" + this.token + "; openid=" + this.openid + ";"
      }
    });
  }
  ["notify_coupon"](_0x2c702d, _0x22f1bc = "领券") {
    for (let _0x3707e6 of _0x2c702d) {
      const _0x477d58 = {
        "notify": true
      };
      this.log(_0x22f1bc + ": " + _0x3707e6, _0x477d58);
    }
  }
  ["get_app_riskForm"]() {
    let _0x1b6560 = "i2HKpOmsirDPavelVfQBZGFXhdmmuk1eGNzKY";
    const _0x9b4db1 = {
      "ip": "",
      "fingerprint": _0x1b6560,
      "cityId": "30",
      "platform": 5,
      "app": 0,
      "version": "12.8.202",
      "uuid": ""
    };
    return _0x9b4db1;
  }
  ["get_riskForm"]() {
    let _0x3c4434 = "WX__ver1.2.0_CCCC_dfwOgF35EQNYzVh8i27kXL04k6XTiM6";
    const _0x13c02a = {
      "openid": this.openid,
      "appid": _0xd13a28,
      "mchid": _0xd0a826
    };
    let _0x5288b0 = {
      "uuid": this.uuid,
      "userid": this.userId,
      "openid": this.openid,
      "expoId": _0x1f5729,
      "ip": "",
      "partner": 0,
      "wxRiskLevel": JSON.stringify(_0x13c02a),
      "platform": 13,
      "appletsFingerprint": _0x3c4434,
      "wechatFingerprint": _0x3c4434
    };
    return _0x5288b0;
  }
  ["encode_riskForm"]() {
    return base64_encode(JSON.stringify(this.get_riskForm()));
  }
  async ["getLoginedUserInfo"](_0x3cb5df = {}) {
    let _0x463977 = false;
    try {
      const _0x543c89 = {
        "token": this.token
      };
      const _0x4f040e = {
        "fn": "getLoginedUserInfo",
        "method": "get",
        "url": "https://i.meituan.com/wrapapi/getLoginedUserInfo",
        "searchParams": _0x543c89
      };
      let { result } = await this.request(_0x4f040e);
      if (result?.["mobile"]) {
        _0x463977 = true;
        this.name = result.nickName;//mobile;
        this.userId = Number(result.userId);
        this.log("登录成功");
      } else {
        this.log("获取账号信息失败, ck可能失效");//, {"notify": true}
        await expireNotify(this.userId, this.index);
      }
    } catch (_0x308b59) {
      console.log(_0x308b59);
    } finally {
      return _0x463977;
    }
  }
  async ["inviteFetchcoupon"](_0x2fe073 = {}) {
    try {
      const _0x1ce213 = {
        "fn": "inviteFetchcoupon",
        "method": "get",
        "url": "https://promotion-waimai.meituan.com/invite/fetchcoupon",
        "searchParams": {}
      };
      _0x1ce213.searchParams.ctype = "wxapp";
      _0x1ce213.searchParams.fpPlatform = 13;
      _0x1ce213.searchParams.isMini = 1;
      _0x1ce213.searchParams.token = this.token;
      _0x1ce213.searchParams.inviteCode = _0x514e86;
      let {
        result: _0x6973b3
      } = await this.request(_0x1ce213),
        _0xfcf87c = $.get(_0x6973b3, "code", -1),
        _0x8f183a = $.get(_0x6973b3, "subcode", -1);
      if ((_0xfcf87c == 0 || _0xfcf87c == 1) && (_0x8f183a == 0 || _0x8f183a == 2)) {
        let _0x2e391d = _0x6973b3?.["data"]?.["couponList"]?.["map"](_0x1a394c => "[" + _0x1a394c.couponTitle + "]" + (_0x1a394c.priceLimit || "无门槛") + "减" + _0x1a394c.couponValue);
        this.notify_coupon(_0x2e391d);
      } else {
        let _0x446502 = _0x6973b3?.["msg"] || _0x6973b3?.["message"] || "";
        this.log("领券失败[" + _0xfcf87c + "]: " + _0x446502);
      }
    } catch (_0x56d86c) {
      console.log(_0x56d86c);
    }
  }
  async ["gundamGrabV4"](_0xa5695e, _0xa1fea5 = {}) {
    try {
      const _0x441cc1 = {
        "fn": "gundamGrabV4",
        "method": "post",
        "url": "https://mediacps.meituan.com/gundam/gundamGrabV4",
        "json": _0xa5695e,
        "headers": {}
      };
      _0x441cc1.headers.Origin = "https://market.waimai.meituan.com";
      _0x441cc1.headers.Referer = "https://market.waimai.meituan.com/";
      let {
        result: _0xe4d7da
      } = await this.request(_0x441cc1),
        _0x4aede7 = $.get(_0xe4d7da, "code", -1);
      if (_0x4aede7 == 0) {
        let _0x5a8e96 = _0xe4d7da?.["data"]?.["allCoupons"]?.["map"](_0xf826a3 => "[" + _0xf826a3.couponName + "]" + (_0xf826a3.amountLimit || "无门槛") + "减" + _0xf826a3.couponAmount);
        this.notify_coupon(_0x5a8e96);
      } else {
        let _0x2a4144 = _0xe4d7da?.["msg"] || _0xe4d7da?.["message"] || "";
        this.log("领券失败[" + _0x4aede7 + "]: " + _0x2a4144);
      }
    } catch (_0x5a329b) {
      console.log(_0x5a329b);
    }
  }
  async ["turntableDraw"](_0x400f6f, _0x3d8474 = {}) {
    try {
      let _0x47bdef = {
        "fn": "turntableDraw",
        "method": "post",
        "url": "https://promotion.waimai.meituan.com/lottery/turntable/draw",
        "searchParams": {
          "actualLat": _0x2fa7e9,
          "actualLng": _0x42d3c4,
          "initialLat": _0x2fa7e9,
          "initialLng": _0x42d3c4,
          "cType": $.get(_0x3d8474, "cType", "wm_wxapp"),
          "wm_appversion": $.get(_0x3d8474, "wm_appversion", "9.19.6"),
          "gdPageId": $.get(_0x3d8474, "gdPageId", "460584"),
          "token": this.token,
          "userId": this.userId,
          "uuid": this.uuid
        },
        "json": {
          "activityViewId": _0x400f6f,
          "appType": 0,
          "deviceType": 2,
          "wxOpenId": this.openid,
          "fpPlatform": 5,
          "mtFingerprint": ""
        }
      },
        { result } = await this.request(_0x47bdef),
        _0x36da06 = $.get(result, "code", -1);
      if (_0x36da06 == 0) {
        let _0x1bb956 = [];
        for (let _0x33fcab of result?.["data"]?.["awards"]) {
          _0x33fcab.couponType == 1 ? _0x1bb956.push("[" + _0x33fcab.name + "]" + (_0x33fcab.orderAmountLimit || "无门槛") + "减" + _0x33fcab.amount) : _0x1bb956.push(_0x33fcab.desc);
        }
        this.notify_coupon(_0x1bb956, "社群抽奖");
      } else {
        let _0x1afae8 = result?.["msg"] || result?.["message"] || "";
        this.log("社群抽奖失败[" + _0x36da06 + "]: " + _0x1afae8);
      }
    } catch (_0x224f6b) {
      console.log(_0x224f6b);
    }
  }
  async ["signupRecord"](_0x309184, _0x1abae5 = {}) {
    try {
      let _0x47ae47 = {
        "fn": "signupRecord",
        "method": "get",
        "url": "https://promotion.waimai.meituan.com/playcenter/common/v1/treasurebox/signup/circle/record",
        "searchParams": {
          "activityViewId": _0x309184,
          "isInDpEnv": 0,
          "isMini": 1,
          "cType": $.get(_0x1abae5, "cType", "wm_wxapp")
        }
      },
        {
          result: _0x486c5b
        } = await this.request(_0x47ae47),
        _0x331878 = $.get(_0x486c5b, "code", -1);
      if (_0x331878 == 0) {
        this.log("已连续签到" + (_0x486c5b?.["data"]?.["signUpNum"] || 0) + "天");
        for (let _0x25b03e of _0x486c5b?.["data"]?.["rewardStatus"]?.["filter"](_0x193ce7 => _0x193ce7.status == 1)) {
          await this.signupGetBox(_0x309184, _0x25b03e.stageDayNum);
        }
      } else {
        let _0x38d312 = _0x486c5b?.["msg"] || _0x486c5b?.["message"] || "";
        this.log("查询签到失败[" + _0x331878 + "]: " + _0x38d312);
      }
    } catch (_0x27a796) {
      console.log(_0x27a796);
    }
  }
  async ["signupGetBox"](_0x4c6ecb, _0x2db353, _0x2a49b2 = {}) {
    try {
      const _0x391285 = {
        "signUpDayNum": _0x2db353
      };
      let _0xff0731 = {
        "fn": "signupGetBox",
        "method": "post",
        "url": "https://promotion.waimai.meituan.com/playcenter/common/v1/treasurebox/signup/stage/reward/get",
        "searchParams": {
          "isInDpEnv": 0,
          "isMini": 1,
          "cType": $.get(_0x2a49b2, "cType", "wm_wxapp")
        },
        "json": {
          "activityViewId": _0x4c6ecb,
          "actionCode": 1000,
          "lat": _0x2fa7e9,
          "lng": _0x42d3c4,
          "fpPlatform": 13,
          "bizParams": JSON.stringify(_0x391285),
          "utmSource": "",
          "utmCampaign": "",
          "gdId": 421412,
          "codeVersion": 1,
          "mtFingerprint": ""
        }
      },
        {
          result: _0x539f46
        } = await this.request(_0xff0731),
        _0x5563d5 = $.get(_0x539f46, "code", -1);
      if (_0x5563d5 == 0) {
        let _0xd8d4b0 = _0x539f46?.["data"]?.["prizeInfoList"]?.["map"](_0x184ff5 => "[" + _0x184ff5.couponInfo.couponTitle + "]" + (_0x184ff5.couponInfo.priceLimit || "无门槛") + "减" + _0x184ff5.couponInfo.couponValue);
        this.notify_coupon(_0xd8d4b0, "开签到宝箱");
      } else {
        let _0x19da7c = _0x539f46?.["msg"] || _0x539f46?.["message"] || "";
        this.log("开签到宝箱失败[" + _0x5563d5 + "]: " + _0x19da7c);
      }
    } catch (_0x1ef2f8) {
      console.log(_0x1ef2f8);
    }
  }
  async ["ttsqEntry"](_0x39909e, _0x5af9b0 = {}) {
    try {
      const _0x3aa6cf = {
        "activityViewId": _0x39909e,
        "actionCodes": 1000,
        "querySignupConfig": 1,
        "lat": _0x2fa7e9,
        "lng": _0x42d3c4
      };
      const _0x188a51 = {
        "fn": "signupRecord",
        "method": "get",
        "url": "https://promotion.waimai.meituan.com/playcenter/common/v1/entry",
        "searchParams": _0x3aa6cf
      };
      let {
        result: _0x83dae0
      } = await this.request(_0x188a51),
        _0x3cd3de = $.get(_0x83dae0, "code", -1);
      if (_0x3cd3de == 0) {
        if (_0x83dae0.data.actionInfoList) {
          for (let _0x58b712 of _0x83dae0.data.actionInfoList) {
            for (let _0x13520e of _0x58b712?.["awardShowList"] || []) {
              await this.ttsqDoAction(_0x39909e, _0x58b712.actionCode || 1000);
            }
          }
        }
      } else {
        let _0x1fbaaa = _0x83dae0?.["msg"] || _0x83dae0?.["message"] || "";
        this.log("查询天天神券宝箱失败[" + _0x3cd3de + "]: " + _0x1fbaaa);
      }
    } catch (_0x2758b7) {
      console.log(_0x2758b7);
    }
  }
  async ["ttsqDoAction"](_0x503cd8, _0x2a1f1d, _0x35c202 = {}) {
    try {
      let _0x3181b5 = {
        "fn": "ttsqDoAction",
        "method": "post",
        "url": "https://promotion.waimai.meituan.com/playcenter/common/v1/doaction",
        "json": {
          "activityViewId": _0x503cd8,
          "actionCode": _0x2a1f1d || 1000,
          "lat": _0x2fa7e9,
          "lng": _0x42d3c4,
          "gdId": 26403,
          "fpPlatform": 13,
          "utmSource": "",
          "utmCampaign": "",
          "mtFingerprint": ""
        }
      },
        {
          result: _0x563fba
        } = await this.request(_0x3181b5),
        _0x2fbf47 = $.get(_0x563fba, "code", -1);
      if (_0x2fbf47 == 0) {
        let _0x453caa = _0x563fba?.["data"]?.["prizeInfoList"]?.["map"](_0x559d20 => _0x559d20.awardType >= 0 ? "[" + _0x559d20.couponInfo.couponTitle + "]" + (_0x559d20.couponInfo.priceLimit || "无门槛") + "减" + _0x559d20.couponInfo.couponValue : "")?.["filter"](_0x372d49 => _0x372d49);
        this.notify_coupon(_0x453caa, "开天天神券宝箱");
      } else {
        let _0x4cea65 = _0x563fba?.["msg"] || _0x563fba?.["message"] || "";
        this.log("开天天神券宝箱失败[" + _0x2fbf47 + "]: " + _0x4cea65);
      }
    } catch (_0x52752b) {
      console.log(_0x52752b);
    }
  }
  async ["clockInStatus"](_0x1385ce, _0x4353a1 = {}) {
    try {
      let _0x45750b = {
        "fn": "clockInStatus",
        "method": "get",
        "url": "https://promotion.waimai.meituan.com/playcenter/common/v1/clock-in/status",
        "searchParams": {
          "activityViewId": _0x1385ce,
          "ctype": $.get(_0x4353a1, "ctype", "wm_wxapp"),
          "isInDpEnv": 0
        }
      },
        {
          result: _0x250ead
        } = await this.request(_0x45750b),
        _0x3eb944 = $.get(_0x250ead, "code", -1);
      if (_0x3eb944 == 0) {
        let _0x3cce5a = new Date().getDay();
        for (let _0x18a7d3 of _0x250ead.data.clockInStatus) {
          if (_0x18a7d3.dayOfWeek % 7 == _0x3cce5a) {
            this.log("今天社群" + (_0x18a7d3.status ? "已" : "未") + "签到, 本周已签到" + _0x250ead.data.clockInNum + "天");
            if (!_0x18a7d3.status) {
              await this.clockInSign(_0x1385ce);
            }
            break;
          }
        }
        _0x250ead.data.lotteryStatus == 1 && (await this.ttsqDoAction(_0x1385ce, 1001));
      } else {
        let _0x11bbae = _0x250ead?.["msg"] || _0x250ead?.["message"] || "";
        this.log("查询社群签到失败[" + _0x3eb944 + "]: " + _0x11bbae);
      }
    } catch (_0x47a8c8) {
      console.log(_0x47a8c8);
    }
  }
  async ["clockInSign"](_0x2455a1, _0x1794bb = {}) {
    try {
      const _0x5dd1f7 = {
        "activityViewId": _0x2455a1,
        "actionCode": 1001,
        "lat": _0x2fa7e9,
        "lng": _0x42d3c4
      };
      let _0x19f36c = {
        "fn": "clockInSign",
        "method": "post",
        "url": "https://promotion.waimai.meituan.com/playcenter/common/v1/clock-in",
        "searchParams": {
          "isMini": 1,
          "ctype": $.get(_0x1794bb, "ctype", "wm_wxapp"),
          "isInDpEnv": 0
        },
        "json": _0x5dd1f7
      },
        {
          result: _0x15b190
        } = await this.request(_0x19f36c),
        _0x27011b = $.get(_0x15b190, "code", -1);
      if (_0x27011b == 0) {
        let _0x1e7fd0 = _0x15b190?.["data"]?.["prizeInfoList"]?.["map"](_0x51fa5e => "[" + _0x51fa5e.couponInfo.couponTitle + "]" + (_0x51fa5e.couponInfo.priceLimit || "无门槛") + "减" + _0x51fa5e.couponInfo.couponValue);
        this.notify_coupon(_0x1e7fd0);
      } else {
        let _0x33d4be = _0x15b190?.["msg"] || _0x15b190?.["message"] || "";
        this.log("社群签到失败[" + _0x27011b + "]: " + _0x33d4be);
      }
    } catch (_0x334913) {
      console.log(_0x334913);
    }
  }
  async ["cardLotteryNum"](_0x12394c = {}) {
    try {
      const _0x11422b = {
        "fn": "cardLotteryNum",
        "method": "post",
        "url": "https://mgm.meituan.com/marketing/cardsCollect/api/cardLotteryNum",
        "json": {}
      };
      _0x11422b.json.activityId = "1116";
      _0x11422b.json.topicIdList = ["1380101169187258449", "1380101260094521416", "1412292930126868547"];
      let {
        result: _0x4ec760
      } = await this.request(_0x11422b);
      if (_0x4ec760?.["lotteryNum"] >= 0) {
        let _0x4bdeb4 = _0x4ec760.lotteryNum;
        this.log("有" + _0x4bdeb4 + "次抽月符机会");
        while (_0x4bdeb4-- > 0) {
          await this.lotteryfrompool(_0x4ec760.poolIdList);
        }
      } else {
        let _0x287bd1 = _0x4ec760?.["msg"] || _0x4ec760?.["message"] || "";
        this.log("查询抽月符次数失败: " + _0x287bd1);
      }
    } catch (_0x488496) {
      console.log(_0x488496);
    }
  }
  async ["cardSaveAccess"](_0xf9e590 = {}) {
    try {
      const _0xdcdc7f = {
        "playerId": 1
      };
      const _0x2f058b = {
        "fn": "cardSaveAccess",
        "method": "post",
        "url": "https://mgm.meituan.com/marketing/cardsCollect/api/saveAccess",
        "json": _0xdcdc7f
      };
      await this.request(_0x2f058b);
    } catch (_0x155b2f) {
      console.log(_0x155b2f);
    }
  }
  async ["cardSaveShare"](_0x4c2766 = {}) {
    try {
      const _0x542dc0 = {
        "playerId": 1,
        "shareWay": 1,
        "shareContentType": 1,
        "shareContentId": "29"
      };
      const _0x1b4bce = {
        "fn": "cyfSaveShare",
        "method": "post",
        "url": "https://mgm.meituan.com/marketing/cardsCollect/api/saveShare",
        "json": _0x542dc0
      };
      await this.request(_0x1b4bce);
    } catch (_0xb601a2) {
      console.log(_0xb601a2);
    }
  }
  async ["lotteryfrompool"](_0x13b16f, _0x4a28b4 = {}) {
    try {
      const _0x1eeaf6 = {
        "poolList": _0x13b16f
      };
      const _0x25ff32 = {
        "fn": "lotteryfrompool",
        "method": "post",
        "url": "https://mgm.meituan.com/marketing/cardsCollect/api/lotteryfrompool",
        "json": _0x1eeaf6
      };
      let {
        result: _0xdcf0d4
      } = await this.request(_0x25ff32);
      if (_0xdcf0d4?.["prizeInfo"]?.["name"]) {
        this.log("抽到月符: [" + _0xdcf0d4?.["prizeInfo"]?.["name"] + "]");
        await this.getCardInfo(_0xdcf0d4?.["lotteryAwardSerialNo"]?.["value"]);
      } else {
        let _0xd5b5fb = _0xdcf0d4?.["msg"] || _0xdcf0d4?.["message"] || "";
        this.log("抽月符失败: " + _0xd5b5fb);
      }
    } catch (_0x5dbc65) {
      console.log(_0x5dbc65);
    }
  }
  async ["getCardInfo"](_0x3548d0, _0xd879a0 = {}) {
    try {
      const _0x5c8949 = {
        "lotteryAwardSerialNo": _0x3548d0
      };
      const _0x5ee83f = {
        "fn": "getCardInfo",
        "method": "get",
        "url": "https://mgm.meituan.com/marketing/cardsCollect/api/getCardInfo",
        "searchParams": _0x5c8949
      };
      let {
        result: _0x559dd9
      } = await this.request(_0x5ee83f),
        _0x10cb4f = $.get(_0x559dd9, "code", -1);
      if (_0x10cb4f == 0) {
        await this.getCardDraw(_0x559dd9?.["userCardInfo"]?.["cardId"]);
      } else {
        let _0x405893 = _0x559dd9?.["msg"] || _0x559dd9?.["message"] || "";
        this.log("查询月符抽奖卡号失败[" + _0x10cb4f + "]: " + _0x405893);
      }
    } catch (_0x10925f) {
      console.log(_0x10925f);
    }
  }
  async ["getCardDraw"](_0x227d17, _0x4ad399 = {}) {
    try {
      const _0x52e1d6 = {
        "cardId": _0x227d17
      };
      const _0x505915 = {
        "fn": "getCardDraw",
        "method": "get",
        "url": "https://mgm.meituan.com/marketing/cardsCollect/api/draw",
        "searchParams": _0x52e1d6
      };
      let {
        result: _0x2727fd
      } = await this.request(_0x505915);
      if (_0x2727fd?.["bingo"]?.["value"]) {
        this.log("月符抽奖: " + _0x2727fd?.["prizeInfo"]?.["name"]);
      } else {
        let _0x27f5f7 = _0x2727fd?.["msg"] || _0x2727fd?.["message"] || "";
        this.log("查询月符抽奖结果失败: " + _0x27f5f7);
      }
    } catch (_0x4b5379) {
      console.log(_0x4b5379);
    }
  }
  async ["getUserTasks"](_0x532409, _0x5d8963 = {}) {
    try {
      const _0x24f839 = {
        "fn": "getUserTasks",
        "method": "post",
        "url": "https://cube.meituan.com/topcube/api/toc/task/getUserTasks",
        "json": {}
      };
      _0x24f839.json.uuid = this.uuid;
      _0x24f839.json.userId = this.userId;
      _0x24f839.json.browseAreaTrue = true;
      _0x24f839.json.cityId = 30;
      _0x24f839.json.taskIdKeys = _0x532409.taskIdKeys;
      _0x24f839.json.userType = "MEI_TUAN";
      _0x24f839.json.sourceType = "MEI_TUAN";
      _0x24f839.json.mini_program_token = this.token;
      _0x24f839.json.inviter = "";
      _0x24f839.json.inviterTaskIdKey = "";
      let {
        result: _0x8e746a
      } = await this.request(_0x24f839);
      if (_0x8e746a?.["code"] == 0) {
        for (let _0x134d02 of _0x8e746a.data) {
          if (!_0x352b52.includes(_0x134d02?.["code"]?.["toString"]())) {
            if (_0x134d02.taskConf) {
              let _0x42b9c4 = JSON.parse(_0x134d02.taskConf);
              if (_0x42b9c4.isCheckNgSignature) {
                $.log("任务[" + _0x134d02.title + "] -- 有强验证, 跳过");
                continue;
              }
            }
            if (!_0x134d02?.["taskRuleVos"]?.["length"]) {
              $.log("任务[" + _0x134d02.title + "] -- " + _0x134d02.msg);
              continue;
            }
            if (_0x134d02?.["title"]?.["includes"]("小程序下单")) {
              continue;
            }
            let _0x17417c = _0x134d02?.["extend"] ? true : false;
            if (_0x17417c && _0x134d02?.["extend"]?.["isSignInToday"] == 1) {
              $.log("任务[" + _0x134d02.title + "] -- 已完成");
              continue;
            }
            for (let _0x1b3de5 of _0x134d02.taskRuleVos) {
              if (_0x1b3de5.status == "PRIZE_SUCC" || _0x1b3de5.status == "DELETE") {
                !_0x17417c && $.log("任务[" + _0x134d02.title + "] -- 已完成");
              } else {
                if (_0x1b3de5?.["status"] == "CAN_RECEIVE") {
                  $.log("任务[" + _0x134d02.title + "] -- 可领取奖励");
                  await this.sendTaskPrize(_0x532409, _0x134d02, _0x1b3de5);
                  if (_0x17417c) {
                    break;
                  }
                } else {
                  $.log("任务[" + _0x134d02.title + "] -- 未完成");
                  let _0x287da7 = true,
                    _0x49d2b7 = JSON.parse(_0x1b3de5.ruleConfig);
                  if (_0x49d2b7.limitTime) {
                    let _0x1dac5a = (_0x1b3de5.preCompleteTime || 0) + _0x49d2b7.limitTime * 1000;
                    Date.now() < _0x1dac5a && (_0x287da7 = false, $.log("任务[" + _0x134d02.title + "]冷却中, [" + $.time("hh:mm:ss", _0x1dac5a) + "]后可完成"));
                  } else {
                    if (_0x49d2b7?.["timeLimits"]?.["length"]) {
                      let _0x7a40ea = new Date($.time("yyyy-MM-dd 00:00:00")).getTime(),
                        _0x2dc4f8 = Date.now();
                      for (let _0x49eeb6 of _0x49d2b7.timeLimits) {
                        let {
                          startTime: _0x9f21b6,
                          endTime: _0x3cd80e
                        } = _0x49eeb6;
                        _0x9f21b6 += _0x7a40ea;
                        _0x3cd80e += _0x7a40ea;
                        (_0x2dc4f8 < _0x9f21b6 || _0x2dc4f8 >= _0x3cd80e) && (_0x287da7 = false, $.log("任务[" + _0x134d02.title + "]不在时间段中: " + $.time("hh:mm:ss", _0x9f21b6) + "到" + $.time("hh:mm:ss", _0x3cd80e)));
                      }
                    }
                  }
                  _0x287da7 && (await this.startUserTask(_0x532409, _0x134d02, _0x1b3de5));
                  if (_0x17417c) {
                    break;
                  }
                }
              }
            }
          }
        }
      } else {
        let _0x39c4b2 = _0x8e746a?.["msg"] || _0x8e746a?.["desc"] || "";
        this.log("查询任务列表失败: " + _0x39c4b2);
      }
    } catch (_0x35e473) {
      console.log(_0x35e473);
    }
  }
  async ["startUserTask"](_0x2f525e, _0x5efea1, _0x1dcddf, _0x3de0ae = {}) {
    try {
      let _0x4c3846 = {
        "fn": "startUserTask",
        "method": "post",
        "url": "https://cube.meituan.com/topcube/api/toc/task/startUserTask",
        "json": {
          "uuid": this.uuid,
          "userId": this.userId,
          "cityId": 30,
          "riskForm": this.encode_riskForm(),
          "taskIdKey": _0x5efea1.taskIdKey,
          "taskRuleIdKey": _0x1dcddf.taskRuleIdKey,
          "cubePageId": _0x2f525e.cubePageId,
          "userType": "MEI_TUAN",
          "sourceType": "MEI_TUAN",
          "mini_program_token": this.token
        },
        "headers": {
          "M-TRACEID": "32358943431" + $.randomString(8, _0x10e72f)
        }
      },
        {
          result: _0x5fe9cb
        } = await this.request(_0x4c3846);
      if (_0x5fe9cb?.["code"] == 0) {
        let _0x5ebd01 = JSON.parse(_0x1dcddf.ruleConfig);
        if (_0x5ebd01.staySeconds) {
          let _0x523a41 = _0x5ebd01.staySeconds * 1000;
          this.log("等待" + _0x5ebd01.staySeconds + "秒后完成任务..");
          await $.wait(_0x523a41);
        } else {
          this.log("完成任务[" + _0x5efea1.title + "]成功");
        }
        await this.updateUserTask(_0x2f525e, _0x5efea1, _0x1dcddf, _0x5fe9cb);
      } else {
        let _0x28a988 = _0x5fe9cb?.["msg"] || _0x5fe9cb?.["desc"] || "";
        this.log("完成任务[" + _0x5efea1.title + "]失败: " + _0x28a988);
        _0x28a988?.["includes"]("活动已完成") && (await this.updateUserTask(_0x2f525e, _0x5efea1, _0x1dcddf));
      }
    } catch (_0x22496a) {
      console.log(_0x22496a);
    }
  }
  ["process_task_prize"](_0x334b6c) {
    let _0x11b443 = [];
    for (let _0x3d6d96 of _0x334b6c) {
      if (_0x3d6d96.number) {
        _0x11b443.push(_0x3d6d96.number + "金币");
      } else {
        if (_0x3d6d96?.["sendMagicCardResult"]?.["cardList"]?.["length"]) {
          for (let _0x5055dc of _0x3d6d96.sendMagicCardResult.cardList) {
            _0x11b443.push("[" + (_0x183cfc[_0x5055dc.type] || _0x5055dc.type) + "]x" + _0x5055dc.amount);
          }
        } else {
          if (_0x3d6d96?.["sendMagicStoneResult"]?.["stoneList"]?.["length"]) {
            for (let _0x31da11 of _0x3d6d96.sendMagicStoneResult.stoneList) {
              _0x11b443.push("[" + (_0x57f7f8[_0x31da11.magicStonePrizeType] || _0x31da11.magicStonePrizeType) + "]x" + _0x31da11.amount);
            }
          } else {
            if (_0x3d6d96?.["sendCouponResultList"]?.["length"]) {
              for (let _0xc40b4e of _0x3d6d96.sendCouponResultList) {
                _0x11b443.push((_0xc40b4e.useCondition || "无门槛") + "减" + _0xc40b4e.couponValue + _0xc40b4e.couponTypeDesc + "券");
              }
            }
          }
        }
      }
    }
    return _0x11b443;
  }
  async ["updateUserTask"](_0x57a905, _0xbdae15, _0x30ea9d, _0x5715cf = {}, _0x372a40 = {}) {
    try {
      let {
        actionNo = "",
        taskNo = "",
        taskRuleNo = ""
      } = _0x5715cf;
      taskNo = taskNo || _0xbdae15?.["taskNo"] || "";
      taskRuleNo = taskRuleNo || _0x30ea9d?.["taskRuleNo"] || "";
      let _0x410195 = {
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
          "taskIdKey": _0xbdae15.taskIdKey,
          "taskRuleNo": taskRuleNo,
          "taskRuleIdKey": _0x30ea9d.taskRuleIdKey,
          "cubePageId": _0x57a905.cubePageId,
          "userType": "MEI_TUAN",
          "sourceType": "MEI_TUAN",
          "mini_program_token": this.token
        }
      },
        {
          result: _0x981e2
        } = await this.request(_0x410195);
      if (_0x981e2?.["code"] == 0) {
        if (_0x981e2?.["prizeList"]?.["length"]) {
          let _0x2c515f = this.process_task_prize(_0x981e2.prizeList);
          this.log("领取任务[" + _0xbdae15.title + "]奖励获得: " + _0x2c515f.join(","));
        } else {
          this.log("更新任务[" + _0xbdae15.title + "]状态成功");
          await this.sendTaskPrize(_0x57a905, _0xbdae15, _0x30ea9d, _0x5715cf);
        }
      } else {
        let _0x4dff67 = _0x981e2?.["msg"] || _0x981e2?.["desc"] || "";
        this.log("更新任务[" + _0xbdae15.title + "]状态失败: " + _0x4dff67);
      }
    } catch (_0x1ef1e8) {
      console.log(_0x1ef1e8);
    }
  }
  async ["sendTaskPrize"](_0x325da3, _0x30e265, _0x4c12fe, _0x51b391 = {}, _0x46cd4f = {}) {
    try {
      let {
        actionNo = "",
        taskNo = "",
        taskRuleNo = ""
      } = _0x51b391;
      taskNo = taskNo || _0x30e265?.["taskNo"] || "";
      taskRuleNo = taskRuleNo || _0x4c12fe?.["taskRuleNo"] || "";
      let _0x4d513c = {
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
          "taskIdKey": _0x30e265.taskIdKey,
          "taskRuleNo": taskRuleNo,
          "taskRuleIdKey": _0x4c12fe.taskRuleIdKey,
          "cubePageId": _0x325da3.cubePageId,
          "userType": "MEI_TUAN",
          "sourceType": "MEI_TUAN",
          "mini_program_token": this.token
        }
      },
        {
          result: _0x3f00c5
        } = await this.request(_0x4d513c);
      if (_0x3f00c5?.["code"] == 0) {
        if (_0x3f00c5?.["prizeList"]?.["length"]) {
          let _0x33afe2 = this.process_task_prize(_0x3f00c5.prizeList);
          this.log("领取任务[" + _0x30e265.title + "]奖励获得: " + _0x33afe2.join(","));
        } else {
          this.log("没有领取到任务[" + _0x30e265.title + "]奖励");
        }
      } else {
        let _0x5dc3db = _0x3f00c5?.["msg"] || _0x3f00c5?.["desc"] || "";
        this.log("领取任务[" + _0x30e265.title + "]奖励失败: " + _0x5dc3db);
      }
    } catch (_0x558cb4) {
      console.log(_0x558cb4);
    }
  }
  async ["earnDailyLogin"](_0x9bf4e4 = {}) {
    try {
      let _0x23e046 = _0x9bf4e4.gameType || 10402;
      const _0xb8da64 = {
        "cityId": "30"
      };
      let _0x2f99e6 = {
        "fn": "earnDailyLogin",
        "method": "get",
        "url": "https://game.meituan.com/earn-daily/login/loginMgc",
        "searchParams": {
          "gameType": _0x23e046,
          "mtToken": this.token,
          "mtUserId": this.userId,
          "mtDeviceId": this.uuid,
          "nonceStr": $.randomString(16),
          "externalStr": JSON.stringify(_0xb8da64)
        }
      },
        {
          result: _0x2514de
        } = await this.request(_0x2f99e6),
        _0x1c4f2d = $.get(_0x2514de, "code", -1);
      if (_0x1c4f2d == 0) {
        this.acToken = _0x2514de?.["response"]?.["accessToken"];
      } else {
        let _0x3be7ae = _0x2514de?.["msg"] || _0x2514de?.["desc"] || "";
        this.log("登录游戏[" + _0x23e046 + "]失败[" + _0x1c4f2d + "]: " + _0x3be7ae);
      }
    } catch (_0x447147) {
      console.log(_0x447147);
    }
  }
  async ["earnDailyPost"](_0x4ef2d0 = {}) {
    let _0x474b0f = {};
    try {
      let _0x58c9e5 = _0x4ef2d0.protocolId,
        _0x2e7e0a = _0x4ef2d0.data || {},
        _0x50b61d = {
          "fn": "earnDailyPost",
          "method": "post",
          "url": "https://game.meituan.com/earn-daily/msg/post",
          "json": {
            "acToken": this.acToken,
            "riskParams": this.get_app_riskForm(),
            "protocolId": _0x58c9e5,
            "data": _0x2e7e0a
          },
          "headers": {
            "Origin": "https://awp.meituan.com",
            "Referer": "https://awp.meituan.com/"
          }
        };
      await $.wait_gap_interval(this.t_earnDaily, _0x395fca);
      _0x474b0f = await this.request(_0x50b61d);
      this.t_earnDaily = Date.now();
    } catch (_0xef46bd) {
      console.log(_0xef46bd);
    } finally {
      return _0x474b0f;
    }
  }
  async ["earnDaily_task_list"](_0x1c9ffd = {}) {
    try {
      const _0x2c4830 = {
        "acToken": this.acToken
      };
      const _0x450135 = {
        "protocolId": 1001,
        "data": _0x2c4830
      };
      {
        let {
          result: _0x9b6629
        } = await this.earnDailyPost(_0x450135),
          _0x87ff56 = $.get(_0x9b6629, "code", -1);
        if (_0x87ff56 == 200) {
          for (let _0x31b905 of _0x9b6629?.["data"]?.["signInPopModel"]?.["rewardModelList"] || []) {
            _0x31b905.current && _0x31b905.state == 1 && (await this.earnDaily_sign());
          }
          for (let _0x512c48 of _0x9b6629?.["data"]?.["taskInfoList"] || []) {
            switch (_0x512c48.id) {
              case 15099:
                break;
              default:
                _0x512c48.dailyRewardTimes < _0x512c48.dailyFinishTimes && (await this.earnDaily_get_reward(_0x512c48));
                for (let _0x499598 = _0x512c48.dailyFinishTimes; _0x499598 < _0x512c48.mgcTaskBaseInfo.curPeriodMaxFinishTimes; _0x499598++) {
                  await this.earnDaily_do_task(_0x512c48);
                }
                break;
            }
          }
        } else {
          let _0x2baf47 = _0x9b6629?.["msg"] || _0x9b6629?.["desc"] || "";
          this.log("查询任务失败[" + _0x87ff56 + "]: " + _0x2baf47);
        }
      }
      {
        let {
          result: _0x1d5ced
        } = await this.earnDailyPost(_0x450135),
          _0x49c90f = $.get(_0x1d5ced, "code", -1);
        if (_0x49c90f == 200) {
          let _0x52ec57 = _0x1d5ced?.["data"]?.["playerBaseModel"]?.["redPacketInfo"]?.["leftRedPacketAmount"] || 0;
          this.log("可以开" + _0x52ec57 + "次红包");
          while (_0x52ec57-- > 0) {
            await this.earnDaily_redbag();
          }
        } else {
          let _0x30a654 = _0x1d5ced?.["msg"] || _0x1d5ced?.["desc"] || "";
          this.log("查询红包次数失败[" + _0x49c90f + "]: " + _0x30a654);
        }
      }
      {
        let {
          result: _0xc7ef1e
        } = await this.earnDailyPost(_0x450135),
          _0x511751 = $.get(_0xc7ef1e, "code", -1);
        if (_0x511751 == 200) {
          let _0x3a42c2 = _0xc7ef1e?.["data"]?.["playerBaseModel"]?.["lotteryInfo"]?.["leftLotteryTimesAmount"] || 0;
          this.log("可以抽奖" + _0x3a42c2 + "次");
          while (_0x3a42c2-- > 0) {
            await this.earnDaily_draw();
          }
        } else {
          let _0x268526 = _0xc7ef1e?.["msg"] || _0xc7ef1e?.["desc"] || "";
          this.log("查询转盘次数失败[" + _0x511751 + "]: " + _0x268526);
        }
      }
      await this.earnDaily_get_withdraw_list();
    } catch (_0x5d8a25) {
      console.log(_0x5d8a25);
    }
  }
  async ["earnDaily_sign"](_0x302466 = {}) {
    try {
      const _0xd567e9 = {
        "protocolId": 1007
      };
      let {
        result: _0x55706d
      } = await this.earnDailyPost(_0xd567e9),
        _0x39420c = $.get(_0x55706d, "code", -1);
      if (_0x39420c == 200) {
        this.log("签到成功: " + (_0x55706d?.["data"]?.["remitNotificationModelList"]?.["map"](_0x1f7b1a => _0x1f7b1a.content)?.["join"](",") || ""));
      } else {
        let _0xf1ca75 = _0x55706d?.["msg"] || _0x55706d?.["desc"] || "";
        this.log("签到失败[" + _0x39420c + "]: " + _0xf1ca75);
      }
    } catch (_0x5d2fda) {
      console.log(_0x5d2fda);
    }
  }
  async ["earnDaily_do_task"](_0x16d346, _0x27f4c8 = {}) {
    try {
      const _0x3c2940 = {
        "taskId": _0x16d346.id
      };
      const _0x5200f2 = {
        "protocolId": 1004,
        "data": _0x3c2940
      };
      let {
        result: _0x3484e3
      } = await this.earnDailyPost(_0x5200f2),
        _0x42c658 = $.get(_0x3484e3, "code", -1);
      if (_0x42c658 == 200) {
        this.log("完成任务[" + _0x16d346.mgcTaskBaseInfo.viewTitle + "]成功");
        await this.earnDaily_get_reward(_0x16d346);
      } else {
        let _0x356209 = _0x3484e3?.["msg"] || _0x3484e3?.["desc"] || "";
        this.log("完成任务[" + _0x16d346.mgcTaskBaseInfo.viewTitle + "]失败[" + _0x42c658 + "]: " + _0x356209);
      }
    } catch (_0x4c1056) {
      console.log(_0x4c1056);
    }
  }
  async ["earnDaily_get_reward"](_0x55f80c, _0x234977 = {}) {
    try {
      const _0x5b2e92 = {
        "taskId": _0x55f80c.id
      };
      const _0x27de45 = {
        "protocolId": 1005,
        "data": _0x5b2e92
      };
      let {
        result: _0x14bd51
      } = await this.earnDailyPost(_0x27de45),
        _0x541a54 = $.get(_0x14bd51, "code", -1);
      if (_0x541a54 == 200) {
        this.log("领取任务[" + _0x55f80c.mgcTaskBaseInfo.viewTitle + "]奖励成功");
      } else {
        let _0x427607 = _0x14bd51?.["msg"] || _0x14bd51?.["desc"] || "";
        this.log("领取任务[" + _0x55f80c.mgcTaskBaseInfo.viewTitle + "]奖励失败[" + _0x541a54 + "]: " + _0x427607);
      }
    } catch (_0x3b871e) {
      console.log(_0x3b871e);
    }
  }
  async ["earnDaily_redbag"](_0x4839c5 = {}) {
    try {
      const _0x2d41d1 = {
        "protocolId": 1008
      };
      let {
        result: _0x1c409a
      } = await this.earnDailyPost(_0x2d41d1),
        _0x300ad8 = $.get(_0x1c409a, "code", -1);
      if (_0x300ad8 == 200) {
        this.log("开红包获得: " + _0x1c409a?.["data"]?.["rewardModelList"]?.["filter"](_0x4bcef7 => _0x4bcef7.rewarded)?.["map"](_0x192c61 => "" + (_0x192c61.amount / 100).toFixed(2) + "元")?.["join"](","));
      } else {
        let _0x3673ff = _0x1c409a?.["msg"] || _0x1c409a?.["desc"] || "";
        this.log("开红包失败[" + _0x300ad8 + "]: " + _0x3673ff);
      }
    } catch (_0x4aaa38) {
      console.log(_0x4aaa38);
    }
  }
  async ["earnDaily_draw"](_0x4d4a2f = {}) {
    try {
      const _0x3396a4 = {
        "protocolId": 1010
      };
      let {
        result: _0x20bc55
      } = await this.earnDailyPost(_0x3396a4),
        _0x8fb395 = $.get(_0x20bc55, "code", -1);
      if (_0x8fb395 == 200) {
        let _0x135bae = _0x20bc55?.["data"]?.["currentReward"];
        if (_0x135bae?.["rewardedCouponModel"]) {
          this.log("转盘抽奖: " + _0x135bae.rewardedCouponModel?.["useRule"] + _0x135bae.rewardedCouponModel?.["name"]);
          return;
        }
        switch (_0x135bae?.["resourceType"]) {
          case 1:
            let _0x590a6a = ((_0x135bae?.["amount"] || 0) / 100).toFixed(2);
            this.log("转盘抽奖: " + _0x590a6a + "元余额");
            break;
          case 3:
            this.log("转盘抽奖: 随机提现机会");
            break;
          default:
            this.log("转盘抽奖: " + JSON.stringify(_0x20bc55));
            break;
        }
      } else {
        let _0x3fd354 = _0x20bc55?.["msg"] || _0x20bc55?.["desc"] || "";
        this.log("转盘抽奖失败[" + _0x8fb395 + "]: " + _0x3fd354);
      }
    } catch (_0x37803b) {
      console.log(_0x37803b);
    }
  }
  async ["earnDaily_get_withdraw_list"](_0x579d1f = {}) {
    try {
      const _0x29345a = {
        "protocolId": 1012
      };
      let {
        result: _0x441b53
      } = await this.earnDailyPost(_0x29345a),
        _0x2dc507 = $.get(_0x441b53, "code", -1);
      if (_0x2dc507 == 200) {
        let _0xfb937e = _0x441b53?.["data"]?.["activityCycleInfo"]?.["cashToken"] || 0,
          _0x51b5ca = (_0xfb937e / 100).toFixed(2);
        this.log("红包余额: " + _0x51b5ca + "元");
        let _0x2a3bd2 = [];
        _0x2a3bd2 = _0x2a3bd2.concat(_0x441b53?.["data"]?.["cashList"] || []);
        _0x2a3bd2 = _0x2a3bd2.sort(function (_0x4a59da, _0x4c6d8f) {
          return _0x4c6d8f.amount - _0x4a59da.amount;
        });
        for (let _0x2de46f of _0x2a3bd2) {
          if (_0x2de46f.amount > _0xfb937e) {
            continue;
          }
          if (await this.earnDaily_withdraw(_0x2de46f)) {
            break;
          }
        }
      } else {
        let _0x47e7ed = _0x441b53?.["msg"] || _0x441b53?.["desc"] || "";
        this.log("查询提现列表失败[" + _0x2dc507 + "]: " + _0x47e7ed);
      }
    } catch (_0x5017cc) {
      console.log(_0x5017cc);
    }
  }
  async ["earnDaily_withdraw"](_0x3deb40, _0x421a2a = {}) {
    let _0x5241ce = false;
    try {
      let _0x4ec7e2 = (_0x3deb40.amount / 100).toFixed(2);
      const _0x270bb0 = {
        "id": _0x3deb40.id,
        "amount": _0x3deb40.amount
      };
      const _0x34d961 = {
        "protocolId": 1013,
        "data": _0x270bb0
      };
      let {
        result: _0x301882
      } = await this.earnDailyPost(_0x34d961),
        _0x1e8b6a = $.get(_0x301882, "code", -1);
      if (_0x1e8b6a == 200) {
        _0x5241ce = true;
        const _0x382ae1 = {
          "notify": true
        };
        this.log("提现[" + _0x4ec7e2 + "元]到钱包成功", _0x382ae1);
      } else {
        let _0x525bdc = _0x301882?.["msg"] || _0x301882?.["desc"] || "";
        _0x1e8b6a == 1017 ? (_0x5241ce = true, this.log("提现[" + _0x4ec7e2 + "元]失败[" + _0x1e8b6a + "]: 可能今天已提现过")) : this.log("提现[" + _0x4ec7e2 + "元]失败[" + _0x1e8b6a + "]: " + _0x525bdc);
      }
    } catch (_0x289b02) {
      console.log(_0x289b02);
    } finally {
      return _0x5241ce;
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
    for (let _0x2f55a0 of _0x4ccb50) {
      await this.gundamGrabV4(_0x2f55a0);
    }
    for (let _0x28692b of _0x50a79a) {
      await this.signupRecord(_0x28692b);
      await this.ttsqEntry(_0x28692b);
    }
  }
  async ["wxSqsqTask"]() {
    $.log("---------------- WX-社群神券 ----------------");
    for (let _0x36e01e of _0x316734) {
      await this.turntableDraw(_0x36e01e);
    }
  }
  async ["wxSqSignTask"]() {
    $.log("---------------- WX-社群签到 ----------------");
    for (let _0x5c96bc of _0x2fab9a) {
      await this.clockInStatus(_0x5c96bc);
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
    for (let _0x1a1954 of _0x445f38) {
      $.log("============== " + _0x1a1954.name + " ==============");
      if (_0x1a1954.taskIdKeys.length > _0x4be557) {
        const _0x27334c = {
          "cubePageId": _0x1a1954.cubePageId,
          "taskIdKeys": []
        };
        for (let _0x572123 of _0x1a1954.taskIdKeys) {
          _0x27334c.taskIdKeys.push(_0x572123);
          _0x27334c.taskIdKeys.length >= _0x4be557 && (await this.getUserTasks(_0x27334c), _0x27334c.taskIdKeys = []);
        }
        if (_0x27334c.taskIdKeys.length > 0) {
          await this.getUserTasks(_0x27334c);
        }
      } else {
        await this.getUserTasks(_0x1a1954);
      }
    }
  }
  async ["userTask"]() {
    const _0x1d7ca8 = {
      "notify": true
    };
    $.log("\n---------------- 账号[" + this.index + "] ----------------", _0x1d7ca8);
    if (!(await this.getLoginedUserInfo())) {
      return;
    }
    await this.ttsqTask();
    await this.wxSqSignTask();
    await this.wxSqsqTask();
    await this.commonTask();
    await this.appMrzqTask();
    await this.appCyfTask();
  }
}
!(async () => {
  if (!(await _0xff4720())) {
    return;
  }
  await _0x929e31();
  $.read_env(UserClass, ckNames, envSplitor);
  for (let _0x32058d of $.userList) {
    await _0x32058d.userTask();
  }
})().catch(_0x1ba756 => $.log(_0x1ba756)).finally(() => $.exitNow());
async function _0xff4720() {
  let _0x544708 = false;
  try {
    const _0x30ec68 = {
      "fn": "auth",
      "method": "get",
      "url": _0x21c5b6
    };
    let {
      statusCode: _0x4c3078,
      result: _0x139616
    } = await _0xebb1c9.request(_0x30ec68);
    if (_0x4c3078 != 200) {
      return Promise.resolve();
    }
    if (_0x139616?.["code"] == 0) {
      _0x139616 = JSON.parse(_0x139616.data.file.data);
      /*if (_0x139616?.["commonNotify"] && _0x139616.commonNotify.length > 0) {
      const _0x4d23a2 = {
        "notify": true
      };
      $.log(_0x139616.commonNotify.join("\n") + "\n", _0x4d23a2);
      }*/
      //_0x139616?.["commonMsg"] && _0x139616.commonMsg.length > 0 && $.log(_0x139616.commonMsg.join("\n") + "\n");
      if (_0x139616[_0x1fedb3]) {
        let _0x34a9b0 = _0x139616[_0x1fedb3];
        _0x34a9b0.status == 0 ? _0x2caf33 >= _0x34a9b0.version ? (_0x544708 = true, /*$.log(_0x34a9b0.msg[_0x34a9b0.status]),*/ $.log(_0x34a9b0.updateMsg), $.log("现在运行的脚本版本是：" + _0x2caf33 + "，最新脚本版本：" + _0x34a9b0.latestVersion)) : $.log(_0x34a9b0.versionMsg) : $.log(_0x34a9b0.msg[_0x34a9b0.status]);
      } else {
        $.log(_0x139616.errorMsg);
      }
    }
  } catch (_0x256c86) {
    $.log(_0x256c86);
  } finally {
    return _0x544708;
  }
}
async function _0x929e31() {
  let _0x1cb5db = false;
  try {
    const _0x3ed88b = {
      "fn": "auth",
      "method": "get",
      "url": _0x3a50ed
    };
    let {
      statusCode: _0x4cace4,
      result: _0x1d8173
    } = await _0xebb1c9.request(_0x3ed88b);
    if (_0x4cace4 != 200) {
      return Promise.resolve();
    }
    if (_0x1d8173?.["code"] == 0) {
      _0x1d8173 = JSON.parse(_0x1d8173.data.file.data);
      _0x514e86 = _0x1d8173?.["inviteCode"] || _0x514e86;
      for (let _0x254078 of _0x1d8173?.["mrzqTaskId_all"] || []) {
        !_0x2edc7e.includes(_0x254078) && _0x2edc7e.push(_0x254078);
      }
      for (let _0x161497 of _0x1d8173?.["commonTaskConf"] || []) {
        _0x445f38.filter(_0x54c70c => _0x54c70c.name == _0x161497.name)?.["length"] == 0 && _0x445f38.push(_0x161497);
      }
      if (_0x1d8173?.["gundomConfV4"]?.["length"]) {
        _0x4ccb50 = _0x1d8173.gundomConfV4;
      }
      for (let _0x2e121a of _0x1d8173?.["sqsqIdList"] || []) {
        !_0x316734.includes(_0x2e121a) && _0x316734.push(_0x2e121a);
      }
      for (let _0x53cdf1 of _0x1d8173?.["sqSignIdList"] || []) {
        !_0x2fab9a.includes(_0x53cdf1) && _0x2fab9a.push(_0x53cdf1);
      }
      for (let _0x2ab1f0 of _0x1d8173?.["ttsqSignIdList"] || []) {
        !_0x50a79a.includes(_0x2ab1f0) && _0x50a79a.push(_0x2ab1f0);
      }
    }
  } catch (_0x50790c) {
    $.log(_0x50790c);
  } finally {
    return _0x1cb5db;
  }
}