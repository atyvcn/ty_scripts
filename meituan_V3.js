/*
美团 v3.09

美团V3仅支持青龙等nodejs环境, 不支持圈X
自动领券和完成一些活动任务

默认不运行集合任务, 运行每日赚钱和抽月符
想运行集合任务的, 设置变量 MT_CommonTask 为 true: export MT_CommonTask="true"
不想运行每日赚钱的, 设置变量 MT_MrzqTask 为 false: export MT_MrzqTask="false"
不想运行抽月符的, 设置变量 MT_CyfTask 为 false: export MT_CyfTask="false"

APP每日赚钱: 默认会每日自动随机, 要关闭随机提现的话设置变量 MT_AutoWithdraw 为 false
export MT_AutoWithdraw="false"
关闭自动提现可以存金币到50元余额再提现, 目前比较难存满, 需要做下单任务

自行捉包把MT_.com里面的token(一般在请求头里)填到变量 MT_CK 中, 多账号换行或&或@隔开
export MT_CK="token=AgGZIgsYHyxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"

cron: 2 0,7,11,17,21 * * *
*/
const Env = require('./basic/Env.js');
const { TYQLDG_API, base64_encode } = require('./basic/tyqldg');
const $ = new Env("美团");
const  got = require("got");
const envPrefix = "MT_",
  envSplitor = ["\n", "&"],
  ckNames = [envPrefix + "CK"];
let eid = 0,
env_name=ckNames[0];
MTS = null,
mtgsig_url = process.env[envPrefix + "Sign"] || "https://service.leafxxx.win/meituan";
try {
  MTS = require('./basic/mtgsig.js');
} catch (e) {
  console.log(`本地mtgsig需要安装依赖 xhr2 青龙->依赖管理->NodeJs->新建依赖->名称：xhr2\nNodeJs 原始安装方法：npm i xhr2`);
  console.error(error);
}

const MT_AutoWithdraw = process.env[envPrefix + "AutoWithdraw"] || "true",
  DEFAULT_TIMEOUT = 15000,
  DEFAULT_RETRY = 3,
  _0x1293cc = process.env[envPrefix + "CommonTask"] || false,
  _0xabc21f = process.env[envPrefix + "MrzqTask"] || true,
  _0x58ec36 = process.env[envPrefix + "CyfTask"] || true;

$.get = function (result, name, value = "") {
    let value1 = value;
    result?.["hasOwnProperty"](name) && (value1 = result[name]);
    return value1;
}
$.wait_gap_interval = async function (_0x58be0e, _0x285f22) {
    let _0x505076 = Date.now() - _0x58be0e;
    _0x505076 < _0x285f22 && (await this.wait(_0x285f22 - _0x505076));
}

const _0x113e79 = 3.09,
  _0x1b8fe7 = "meituan",
  _0x2cc3bf = "https://leafxcy.coding.net/api/user/leafxcy/project/validcode/shared-depot/validCode/git/blob/master/code.json",
  _0x56eef9 = "https://leafxcy.coding.net/api/user/leafxcy/project/validcode/shared-depot/validCode/git/blob/master/" + _0x1b8fe7 + ".json",
  _0x36561b = "Mozilla/5.0 (iPhone; CPU iPhone OS 16_1_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.33(0x18002129) NetType/WIFI Language/zh_CN",
  _0x153429 = "wxde8ac0a21135c07d",
  _0x4ed1be = "1399386702",
  _0x358c06 = "2.30.3",
  _0x15e36e = "iphone",
  _0x5eb39b = "AwQAAABJAgAAAAEAAAAyAAAAPLgC95WH3MyqngAoyM/hf1hEoKrGdo0pJ5DI44e1wGF9AT3PH7Wes03actC2n/GVnwfURonD78PewMUppAAAADgCEZv2akitiLnGkQIH6r67N1V9EUFpKyBOQRSRKpv9Awnm6LwnygipNjcIwXXJZEv5ddnUSW8vZQ==",
  _0x8dc642 = "0123456789",
  _0x563a4a = "qwertyuiopasdfghjklzxcvbnm",
  _0x2fb19d = _0x8dc642 + _0x563a4a + _0x563a4a.toUpperCase();
let _0x4426fe = "114.07" + $.randomString(12, _0x8dc642),
  _0x4bea8c = "22.52" + $.randomString(13, _0x8dc642),
  inviteCode = "NnOIp-QOs8SiYF1dcSlL5r8phPrCf6qkH7evMyjIoureqol0OXXaopfjjblE0yPge-nmlRKIDEgmTxF7oaoA4OfQjhGdF522KA_poICzK21VFORrK_ggku9ewgI6-qR5VCf7Blcp0wY6_CtAKvFkqFYXG42pu_6MtY7K6RDMjic",
  inviteCode2 = "NnOIp-QOs8SiYF1dcSlL5r8phPrCf6qkH7evMyjIoureqol0OXXaopfjjblE0yPgFQmJJWVFWc4CivexLwFRdcbcHaALd6__chOQeI55cEbhOmMc4oO8cWhZxYuQm9DsSt1nfKeLK2Rz8ExgU4PovBpOFx_LiHkpyxZNebiIkCE",
  gundomConfV4 = [],
  _0x4a377c = [];
const _0x18f6a7 = 600,
  _0xe4c33e = 10,
  _0x2c3656 = ["1005", "1007"];
let _0x4f1edf = ["631682c504", "bb88750009", "9f90f45850", "90e9ecbe6a", "b6bfd8c1bc", "d4caf84940", "8decbc4c98", "c6026478e4", "4353a111e9", "7ceb1c14a7", "89515f0102", "63bec5af07", "1c8df37ffe", "36eedbe86c", "6ab415d70c", "3c309c7f26", "66c2938e1d", "3497a4fd05", "7f1f7ec5a4", "2fb53287b2", "2b0ada0dd7", "495070b239", "176f400a8f", "672129ff6d", "a479497fa6", "97ea404b56", "320ffa53e7", "6ccbda387f", "6f2d5f144f", "563983d5f1", "6f70050a62", "dfd9c44d7f", "6d5461c6dd", "a7331f5c94", "8d3891bef9", "eb6094dcaa", "11c95cc416", "351c3f4810", "67bd2e0988", "cdb75f714d", "3a6eba11a1", "76f9dc2980", "30644bcb35", "d1a1d62e6c", "8af63652ba", "075eb403be", "361ba45eff", "cfbb835838", "e26f305436", "ed33f82fa9", "e36bae3f8f", "6696ff7825", "b7719de06c", "2ab24bbc57", "2d98ddf8ac", "406fb78bfd", "9b84c4503a", "55ce3f059d", "cd06f8210b", "f6706f9b33", "34a718f16a", "f5e2218b18", "c7f6a889ff", "2583c8ba46", "45e325543c", "a162c96304"],
  _0x24375d = ["b24pg8jaFTeNadCXq0lb3A", "yLm-IynkBUQLt09kALFv8Q", "Ox5_0TfqOg6b3UfkKS3rUg", "1THsbmQsYTIbi5N066B1zg", "TADnCANwheP5AKOjx3NpgA"],
  _0x3cf4b7 = ["06hFC-C1WGiAQYUGya5QJA", "5IFmI13NeO7kRPW1jUj7Lw", "ySJ2HpgexeI0TJcLkA_5Ug"],
  _0x52aede = ["ZCSW0XVhcm3NZ8yeoGXeaA", "KXGjpKrk2h_43vUrIKbzDA", "l3emawQka8JjlE6LMyYT3g", "r9348AwSwnwP715csHvDqw", "XVsZc3p1O1jd-uTG4EjyXw", "9khEyiqt2tKFyZSjvqphkQ", "_p2QL78Fao6bsexHzofp-w", "jXL-9iEaRTsv-FZdpX4Z4g"],
  _0x5d0b70 = ["WdtEnEpZZScQjcZdnOMyRw"],
  _0x6ec3d9 = ["SvdHO5IlzSTt93xhkGTfZw"];
const _0x344d9b = {
  "name": "APP-天天领金币",
  "cubePageId": 184008,
  "taskIdKeys": ["e8e72a2c8d", "ea69bee3c0", "129328922f", "15b494e7bc", "d36be8140b", "77c78d45cc"]
};
const _0x227098 = {
  "name": "APP-每日赚钱",
  "cubePageId": 10000003,
  "taskIdKeys": ["b6e6e96128", "710d92816e", "fc43b223be"]
};
const _0x38bc43 = {
  "name": "WX-每日赚钱",
  "cubePageId": 184008,
  "taskIdKeys": ["1fff834702"]
};
const _0x2cd2db = {
  "name": "APP-团团神券-魔法石",
  "cubePageId": 88888889,
  "taskIdKeys": ["a941c20450", "cdcc8a8195", "eb03206b17", "5c919dfbd8", "8f53427c39", "f749a47257", "4d609dde67", "3e5cbc8120", "532e764346", "7613d02997"]
};
const _0x3f61a1 = {
  "name": "WX-天天赚钱",
  "cubePageId": 123,
  "taskIdKeys": _0x4f1edf
};
const _0x526b24 = [_0x344d9b, _0x227098, _0x38bc43, _0x2cd2db, _0x3f61a1],
  _0x493039 = {
    "NORMAL_CARD": "普通卡",
    "SENIOR_CARD": "稀有卡"
  };
const _0x285bfa = {
  "EAT": "吃",
  "LIVE": "住",
  "WALK": "行",
  "TRAVEL": "游",
  "SHOP": "购",
  "ENTERTAIN": "娱"
};
let _0x550c3c = [];

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


class _0x26caa4 {
  constructor() {
    this.index = $.userIdx++;
    this.name = "";
    this.valid = true;
    const _0x28c02e = {
      "limit": 0
    };
    const _0x37655b = {
      "Connection": "keep-alive"
    };
    const _0xeb9396 = {
      "retry": _0x28c02e,
      "timeout": DEFAULT_TIMEOUT,
      "followRedirect": false,
      "headers": _0x37655b
    };
    this.got = got.extend(_0xeb9396);
  }
  ["log"](_0x5d56fa, _0x4bba93 = {}) {
    var _0x1d3030 = "",
      _0x1cb3cd = $.userCount.toString().length;
    if (this.index) {
      _0x1d3030 += "账号[" + $.padStr(this.index, _0x1cb3cd) + "]";
    }
    if (this.name) {
      _0x1d3030 += "[" + this.name + "]";
    }
    $.log(_0x1d3030 + _0x5d56fa, _0x4bba93);
  }
  async ["request"](_0x29a6e8) {
    const _0x48fab4 = ["ECONNRESET", "EADDRINUSE", "ENOTFOUND", "EAI_AGAIN"],
      _0xf0745d = ["TimeoutError"];
    var _0x48de0a = null,
      _0x3f1fab = 0,
      _0x577286 = _0x29a6e8.fn || _0x29a6e8.url;
    _0x29a6e8.method = _0x29a6e8?.["method"]?.["toUpperCase"]() || "GET";
    let _0x2f9d49;
    while (_0x3f1fab < DEFAULT_RETRY) {
      try {
        _0x3f1fab++;
        _0x2f9d49 = null;
        let _0x141eab = null,
          _0x3bf846 = _0x29a6e8?.["timeout"] || this.got?.["defaults"]?.["options"]?.["timeout"]?.["request"] || DEFAULT_TIMEOUT,
          _0x294a4d = false;
        await new Promise(async _0x106a01 => {
          setTimeout(() => {
            _0x294a4d = true;
            _0x106a01();
          }, _0x3bf846);
          await this.got(_0x29a6e8).then(_0x51ac38 => {
            _0x48de0a = _0x51ac38;
          }, _0x5e2408 => {
            _0x141eab = _0x5e2408;
            _0x48de0a = _0x5e2408.response;
            _0x2f9d49 = _0x141eab?.["code"];
          });
          _0x106a01();
        });
        if (_0x294a4d) {
          this.log("[" + _0x577286 + "]请求超时(" + _0x3bf846 / 1000 + "秒)，重试第" + _0x3f1fab + "次");
        } else {
          if (_0xf0745d.includes(_0x141eab?.["name"])) {
            this.log("[" + _0x577286 + "]请求超时(" + _0x141eab.code + ")，重试第" + _0x3f1fab + "次");
          } else {
            if (_0x48fab4.includes(_0x141eab?.["code"])) {
              this.log("[" + _0x577286 + "]请求错误(" + _0x141eab.code + ")，重试第" + _0x3f1fab + "次");
            } else {
              let _0x2e28f6 = _0x48de0a?.["statusCode"] || 999,
                _0x422d5a = _0x2e28f6 / 100 | 0;
              if (_0x422d5a > 3) {
                this.log("请求[" + _0x577286 + "]返回[" + _0x2e28f6 + "]");
              }
              if (_0x422d5a <= 4) {
                break;
              }
            }
          }
        }
      } catch (_0x1980ba) {
        _0x1980ba.name == "TimeoutError" ? this.log("[" + _0x577286 + "]请求超时，重试第" + _0x3f1fab + "次") : this.log("[" + _0x577286 + "]请求错误(" + _0x1980ba.message + ")，重试第" + _0x3f1fab + "次");
      }
    }
    if (_0x48de0a == null) {
      return Promise.resolve({
        "statusCode": _0x2f9d49 || -1,
        "headers": null,
        "result": null
      });
    }
    let {
      statusCode: _0x4a6fe2,
      headers: _0x41e142,
      body: _0x25d171
    } = _0x48de0a;
    if (_0x25d171) {
      try {
        _0x25d171 = JSON.parse(_0x25d171);
      } catch {}
    }
    const _0x573db5 = {
      "statusCode": _0x4a6fe2,
      "headers": _0x41e142,
      "result": _0x25d171
    };
    return Promise.resolve(_0x573db5);
  }
}
let _0x315f3b = new _0x26caa4();
class UserClass extends _0x26caa4 {
  constructor(ck) {
    super();
    Object.assign(this, $.CkToJson(ck));
    this.t_earnDaily = 0;
    this.uuid = $.randomPattern("186ebxxxxxxxx-22e49fxxxxxxxx-0-0-186ebxxxxxxxx");
    this.openid = $.randomString(7, _0x2fb19d) + "-" + $.randomString(20, _0x2fb19d);
    this.cookie = "token=" + this.token + "; mt_c_token=" + this.token + "; openid=" + this.openid + ";";
    this.valid_fp = false;
    this.fp = "H5dfp_1.8.2_tttt_CziTmz1LjARvHzKKzoDtmdBgc6Df5b+sgrXDtVBPjiCayshtLKt1gh8PjGGT";
    //MTS && (this.h5guard = new MTS(this.cookie, _0x36561b));
    MTS && (this.h5guard = MTS);
    this.got = this.got.extend({
      "headers": {
        "User-Agent": _0x36561b,
        "token": this.token,
        "openid": this.openid,
        "uuid": this.uuid,
        "M-APPKEY": "wxmp_mt-weapp",
        "clientversion": _0x358c06,
        "utm_medium": _0x15e36e,
        "openIdCipher": _0x5eb39b,
        "cookie": this.cookie
      }
    });
  }
  ["notify_coupon"](_0x56c70e, _0x516d92 = "领券", _0x4cebbe = {}) {
    const _0x5e5b41 = {
      "notify": true
    };
    let _0xe6e9af = Object.assign(_0x5e5b41, _0x4cebbe);
    for (let _0x288110 of _0x56c70e) {
      this.log(_0x516d92 + ": " + _0x288110, _0xe6e9af);
    }
  }
  async ["get_mtgsig"](url, data) {
    const _0x1a236b = {
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
    let Req = {
      "headers": {
        "mtgsig": JSON.stringify(_0x1a236b)
      }
    };
    if (this.h5guard) {
      //Req = await this.h5guard.sign(url, data);
      Req=MTS.callMtgsig({
        "url": url,
        "method": "POST",
        "headers": this.got.defaults.options.headers,
        'data': data
      })
    } else {
      if (mtgsig_url) {
        const _0x553d74 = {
          "fn": "get_mtgsig",
          "method": "post",
          "url": mtgsig_url + "/mtgsig",
          "json": {
            "url": url,
            "data": data
          }
        };
        let {
            result: _0x25e3a3
          } = await this.request(_0x553d74),
          _0x1dac8a = _0x25e3a3?.["code"];
        _0x1dac8a === 0 ? Req = _0x25e3a3.data : this.log("获取mtgsig失败[" + _0x1dac8a + "]: " + _0x25e3a3?.["msg"]);
      }
    }
    return Req;
  }
  async ["getfp"](_0x34bb95 = false) {
    if (!this.valid_fp) {
      if (this.h5guard && _0x34bb95) {
        //this.fp = this.h5guard.getfp();
        this.fp = MTS.mtFingerprint();
        this.valid_fp = true;
      } else {
        if (mtgsig_url && _0x34bb95) {
          let _0x426082 = {
              "fn": "getfp",
              "method": "get",
              "url": mtgsig_url + "/getfp"
            },
            {
              result: _0x120170
            } = await this.request(_0x426082),
            _0x4b340b = _0x120170?.["code"];
          _0x4b340b === 0 ? (this.fp = _0x120170.data, this.valid_fp = true) : this.log("获取fp失败[" + _0x4b340b + "]: " + _0x120170?.["msg"]);
        }
      }
    }
    return this.fp;
  }
  async ["get_app_riskForm"](_0x4e0add = false) {
    let _0x3dcbf2 = await this.getfp(_0x4e0add);
    const _0x5bf6be = {
      "ip": "",
      "fingerprint": _0x3dcbf2,
      "cityId": "30",
      "platform": 5,
      "app": 0,
      "version": "12.8.202",
      "uuid": ""
    };
    return _0x5bf6be;
  }
  async ["get_riskForm"](_0x435f78 = false) {
    let _0xdbb9b8 = await this.getfp(_0x435f78);
    const _0x587c77 = {
      "openid": this.openid,
      "appid": _0x153429,
      "mchid": _0x4ed1be
    };
    let _0x1740fc = {
      "uuid": this.uuid,
      "userid": this.userId,
      "openid": this.openid,
      "expoId": _0x5eb39b,
      "ip": "",
      "partner": 0,
      "wxRiskLevel": JSON.stringify(_0x587c77),
      "platform": 13,
      "appletsFingerprint": _0xdbb9b8,
      "wechatFingerprint": _0xdbb9b8
    };
    return _0x1740fc;
  }
  async ["encode_riskForm"](_0x16ea26 = false) {
    let _0x191445 = await this.get_riskForm(_0x16ea26);
    return base64_encode(JSON.stringify(_0x191445));
  }
  async ["getLoginedUserInfo"](_0x4a5682 = {}) {
    let _0x53ac81 = false;
    try {
      const _0x359a56 = {
        "token": this.token
      };
      const _0x4ca1ee = {
        "fn": "getLoginedUserInfo",
        "method": "get",
        "url": "https://i.meituan.com/wrapapi/getLoginedUserInfo",
        "searchParams": _0x359a56
      };
      let {
        result: _0x25d330
      } = await this.request(_0x4ca1ee);
      if (_0x25d330?.["mobile"]) {
        _0x53ac81 = true;
        this.name = _0x25d330.nickName;
        this.userId = Number(_0x25d330.userId);
        this.log("登录成功");
      } else {
        this.log("获取账号信息失败, ck可能失效");//, {"notify": true}
        await expireNotify(this.userId, this.index);
      }
    } catch (_0x322181) {
      console.log(_0x322181);
    } finally {
      return _0x53ac81;
    }
  }
  async ["inviteFetchcoupon"](_0x5b92fd = {}) {
    try {
      const _0x359752 = {
        "ctype": "wxapp",
        "fpPlatform": 13,
        "isMini": 1,
        "token": this.token,
        "inviteCode": this.name!="nyqty" ? inviteCode :  inviteCode2
      };
      const _0x24dff8 = {
        "fn": "inviteFetchcoupon",
        "method": "get",
        "url": "https://promotion-waimai.meituan.com/invite/fetchcoupon",
        "searchParams": _0x359752
      };
      let {
          result: _0x49c5ad
        } = await this.request(_0x24dff8),
        _0x467603 = $.get(_0x49c5ad, "code", -1),
        _0x509011 = $.get(_0x49c5ad, "subcode", -1);
      if ((_0x467603 == 0 || _0x467603 == 1) && (_0x509011 == 0 || _0x509011 == 2)) {
        let _0xafa2fc = _0x49c5ad?.["data"]?.["couponList"]?.["map"](_0x41cb13 => "[" + _0x41cb13.couponTitle + "]" + (_0x41cb13.priceLimit || "无门槛") + "减" + _0x41cb13.couponValue);
        this.notify_coupon(_0xafa2fc);
      } else {
        let _0x1909df = _0x49c5ad?.["msg"] || _0x49c5ad?.["message"] || "";
        this.log("领券失败[" + _0x467603 + "]: " + _0x1909df);
      }
    } catch (_0x28ee9f) {
      console.log(_0x28ee9f);
    }
  }
  async ["gundamGrabV4"](_0xa663a, _0x266b0 = {}) {
    try {
      const _0xa39ecd = {
        "fn": "gundamGrabV4",
        "method": "post",
        "url": "https://mediacps.meituan.com/gundam/gundamGrabV4",
        "json": _0xa663a,
        "headers": {}
      };
      _0xa39ecd.headers.Origin = "https://market.waimai.meituan.com";
      _0xa39ecd.headers.Referer = "https://market.waimai.meituan.com/";
      let {
          result: _0x7cd790
        } = await this.request(_0xa39ecd),
        _0x74147f = $.get(_0x7cd790, "code", -1);
      if (_0x74147f == 0) {
        let _0x794e28 = _0x7cd790?.["data"]?.["allCoupons"]?.["map"](_0x6c3ad3 => "[" + _0x6c3ad3.couponName + "]" + (_0x6c3ad3.amountLimit || "无门槛") + "减" + _0x6c3ad3.couponAmount);
        this.notify_coupon(_0x794e28);
      } else {
        let _0x2b21dd = _0x7cd790?.["msg"] || _0x7cd790?.["message"] || "";
        this.log("领券失败[" + _0x74147f + "]: " + _0x2b21dd);
      }
    } catch (_0x385c91) {
      console.log(_0x385c91);
    }
  }
  async ["turntableDraw"](_0xe238e7, _0x37a678 = {}) {
    try {
      let _0x393c6d = {
          "fn": "turntableDraw",
          "method": "post",
          "url": "https://promotion.waimai.meituan.com/lottery/turntable/draw",
          "searchParams": {
            "actualLat": _0x4bea8c,
            "actualLng": _0x4426fe,
            "initialLat": _0x4bea8c,
            "initialLng": _0x4426fe,
            "cType": $.get(_0x37a678, "cType", "wm_wxapp"),
            "wm_appversion": $.get(_0x37a678, "wm_appversion", "9.19.6"),
            "gdPageId": $.get(_0x37a678, "gdPageId", "460584"),
            "token": this.token,
            "userId": this.userId,
            "uuid": this.uuid
          },
          "json": {
            "activityViewId": _0xe238e7,
            "appType": 0,
            "deviceType": 2,
            "wxOpenId": this.openid,
            "fpPlatform": 5,
            "mtFingerprint": ""
          }
        },
        {
          result: _0x3ac118
        } = await this.request(_0x393c6d),
        _0x27965d = $.get(_0x3ac118, "code", -1);
      if (_0x27965d == 0) {
        let _0x193757 = [];
        for (let _0x275b21 of _0x3ac118?.["data"]?.["awards"]) {
          _0x275b21.couponType == 1 ? _0x193757.push("[" + _0x275b21.name + "]" + (_0x275b21.orderAmountLimit || "无门槛") + "减" + _0x275b21.amount) : _0x193757.push(_0x275b21.desc);
        }
        const _0x1c8de3 = {
          "act": _0xe238e7
        };
        this.notify_coupon(_0x193757, "社群抽奖", _0x1c8de3);
      } else {
        let _0x2f5e2c = _0x3ac118?.["msg"] || _0x3ac118?.["message"] || "";
        const _0x18654e = {
          "act": _0xe238e7
        };
        this.log("社群抽奖失败[" + _0x27965d + "]: " + _0x2f5e2c, _0x18654e);
      }
    } catch (_0x239551) {
      console.log(_0x239551);
    }
  }
  async ["signupRecord"](_0xa09243, _0x2d21cc = {}) {
    try {
      let _0x5444ea = {
          "fn": "signupRecord",
          "method": "get",
          "url": "https://promotion.waimai.meituan.com/playcenter/common/v1/treasurebox/signup/circle/record",
          "searchParams": {
            "activityViewId": _0xa09243,
            "isInDpEnv": 0,
            "isMini": 1,
            "cType": $.get(_0x2d21cc, "cType", "wm_wxapp")
          }
        },
        {
          result: _0x1857c0
        } = await this.request(_0x5444ea),
        _0x185041 = $.get(_0x1857c0, "code", -1);
      if (_0x185041 == 0) {
        const _0x1b3874 = {
          "act": _0xa09243
        };
        this.log("已连续签到" + (_0x1857c0?.["data"]?.["signUpNum"] || 0) + "天", _0x1b3874);
        for (let _0x5f33ec of _0x1857c0?.["data"]?.["rewardStatus"]?.["filter"](_0x3b4ba8 => _0x3b4ba8.status == 1)) {
          await this.signupGetBox(_0xa09243, _0x5f33ec.stageDayNum);
        }
      } else {
        let _0x129e07 = _0x1857c0?.["msg"] || _0x1857c0?.["message"] || "";
        const _0x407802 = {
          "act": _0xa09243
        };
        this.log("查询签到失败[" + _0x185041 + "]: " + _0x129e07, _0x407802);
      }
    } catch (_0x4601d3) {
      console.log(_0x4601d3);
    }
  }
  async ["signupGetBox"](_0x3ed97, _0x1993af, _0x3af97f = {}) {
    try {
      const _0x189f1d = {
        "signUpDayNum": _0x1993af
      };
      let _0x5ad946 = {
          "fn": "signupGetBox",
          "method": "post",
          "url": "https://promotion.waimai.meituan.com/playcenter/common/v1/treasurebox/signup/stage/reward/get",
          "searchParams": {
            "isInDpEnv": 0,
            "isMini": 1,
            "cType": $.get(_0x3af97f, "cType", "wm_wxapp")
          },
          "json": {
            "activityViewId": _0x3ed97,
            "actionCode": 1000,
            "lat": _0x4bea8c,
            "lng": _0x4426fe,
            "fpPlatform": 13,
            "bizParams": JSON.stringify(_0x189f1d),
            "utmSource": "",
            "utmCampaign": "",
            "gdId": 421412,
            "codeVersion": 1,
            "mtFingerprint": ""
          }
        },
        {
          result: _0x18668b
        } = await this.request(_0x5ad946),
        _0x2a2778 = $.get(_0x18668b, "code", -1);
      if (_0x2a2778 == 0) {
        let _0xcd6c57 = _0x18668b?.["data"]?.["prizeInfoList"]?.["map"](_0x590b34 => "[" + _0x590b34.couponInfo.couponTitle + "]" + (_0x590b34.couponInfo.priceLimit || "无门槛") + "减" + _0x590b34.couponInfo.couponValue);
        const _0x6f0f22 = {
          "act": _0x3ed97
        };
        this.notify_coupon(_0xcd6c57, "开签到宝箱", _0x6f0f22);
      } else {
        let _0x151d45 = _0x18668b?.["msg"] || _0x18668b?.["message"] || "";
        const _0x210e47 = {
          "act": _0x3ed97
        };
        this.log("开签到宝箱失败[" + _0x2a2778 + "]: " + _0x151d45, _0x210e47);
      }
    } catch (_0x12bd71) {
      console.log(_0x12bd71);
    }
  }
  async ["ttsqEntry"](_0x56d1f7, _0x11bcd1 = {}) {
    try {
      const _0x1714bb = {
        "activityViewId": _0x56d1f7,
        "actionCodes": 1000,
        "querySignupConfig": 1,
        "lat": _0x4bea8c,
        "lng": _0x4426fe
      };
      const _0x55e1af = {
        "fn": "signupRecord",
        "method": "get",
        "url": "https://promotion.waimai.meituan.com/playcenter/common/v1/entry",
        "searchParams": _0x1714bb
      };
      let {
          result: _0xe571a8
        } = await this.request(_0x55e1af),
        _0x153399 = $.get(_0xe571a8, "code", -1);
      if (_0x153399 == 0) {
        if (_0xe571a8.data.actionInfoList) {
          for (let _0x4906aa of _0xe571a8.data.actionInfoList) {
            await this.ttsqDoAction(_0x56d1f7, _0x4906aa.actionCode || 1000);
          }
        }
      } else {
        let _0x4378ec = _0xe571a8?.["msg"] || _0xe571a8?.["message"] || "";
        const _0x1c4644 = {
          "act": _0x56d1f7
        };
        this.log("查询天天神券宝箱失败[" + _0x153399 + "]: " + _0x4378ec, _0x1c4644);
      }
    } catch (_0x12b2c8) {
      console.log(_0x12b2c8);
    }
  }
  async ["ttsqDoAction"](_0x5b48dd, _0x276125, _0x2869a = {}) {
    try {
      let _0x50ca9a = {
          "fn": "ttsqDoAction",
          "method": "post",
          "url": "https://promotion.waimai.meituan.com/playcenter/common/v1/doaction",
          "json": {
            "activityViewId": _0x5b48dd,
            "actionCode": parseInt(_0x276125 || 1000),
            "lat": _0x4bea8c,
            "lng": _0x4426fe,
            "gdId": 26403,
            "fpPlatform": 13,
            "utmSource": "",
            "utmCampaign": "",
            "mtFingerprint": ""
          }
        },
        {
          result: _0x559c17
        } = await this.request(_0x50ca9a),
        _0x506d8c = $.get(_0x559c17, "code", -1);
      if (_0x506d8c == 0) {
        let _0x2705a6 = _0x559c17?.["data"]?.["prizeInfoList"]?.["map"](_0xe8c837 => _0xe8c837.awardType >= 0 ? "[" + _0xe8c837.couponInfo.couponTitle + "]" + (_0xe8c837.couponInfo.priceLimit || "无门槛") + "减" + _0xe8c837.couponInfo.couponValue : "")?.["filter"](_0x4f6fab => _0x4f6fab);
        const _0x4c50ab = {
          "act": _0x5b48dd
        };
        this.notify_coupon(_0x2705a6, "开天天神券宝箱", _0x4c50ab);
      } else {
        let _0x5182d6 = _0x559c17?.["msg"] || _0x559c17?.["message"] || "";
        const _0x54a902 = {
          "act": _0x5b48dd
        };
        this.log("开天天神券宝箱失败[" + _0x506d8c + "]: " + _0x5182d6, _0x54a902);
      }
    } catch (_0x4307e0) {
      console.log(_0x4307e0);
    }
  }
  async ["ttsqEntryLottery"](_0xd21da0, _0x430b52 = {}) {
    try {
      const _0x1f8f0a = {
        "fn": "signupRecord",
        "method": "get",
        "url": "https://promotion.waimai.meituan.com/playcenter/common/v1/entry",
        "searchParams": {}
      };
      _0x1f8f0a.searchParams.isMini = 1;
      _0x1f8f0a.searchParams.ctype = "wm_wxapp";
      _0x1f8f0a.searchParams.isInDpEnv = 0;
      _0x1f8f0a.searchParams.activityViewId = _0xd21da0;
      _0x1f8f0a.searchParams.actionCodes = 1001;
      _0x1f8f0a.searchParams.lat = _0x4bea8c;
      _0x1f8f0a.searchParams.lng = _0x4426fe;
      let {
          result: _0x1704fc
        } = await this.request(_0x1f8f0a),
        _0x4ceac7 = $.get(_0x1704fc, "code", -1);
      if (_0x4ceac7 == 0) {
        if (_0x1704fc.data.actionInfoList) {
          for (let _0x30ea1d of _0x1704fc.data.actionInfoList) {
            await this.ttsqDoActionLottery(_0xd21da0, _0x30ea1d.actionCode || 1001);
          }
        }
      } else {
        let _0x54061d = _0x1704fc?.["msg"] || _0x1704fc?.["message"] || "";
        const _0x4e2e2e = {
          "act": _0xd21da0
        };
        this.log("查询天天神券抽奖失败[" + _0x4ceac7 + "]: " + _0x54061d, _0x4e2e2e);
      }
    } catch (_0x12ee8e) {
      console.log(_0x12ee8e);
    }
  }
  async ["ttsqDoActionLottery"](_0x5037cf, _0x104230, _0x3198d = {}) {
    try {
      let _0x2131be = {
          "fn": "ttsqDoAction",
          "method": "post",
          "url": "https://promotion.waimai.meituan.com/playcenter/common/v1/doaction",
          "json": {
            "activityViewId": _0x5037cf,
            "actionCode": parseInt(_0x104230 || 1001),
            "lat": _0x4bea8c,
            "lng": _0x4426fe,
            "gdId": 436181,
            "instanceId": "16703954295670.59854316222808620"
          }
        },
        {
          result: _0x595d55
        } = await this.request(_0x2131be),
        _0x3260e3 = $.get(_0x595d55, "code", -1);
      if (_0x3260e3 == 0) {
        let _0x385f19 = _0x595d55?.["data"]?.["prizeInfoList"]?.["map"](_0x5ef4b5 => _0x5ef4b5.awardType >= 0 ? "[" + (_0x5ef4b5?.["couponInfo"]?.["couponTitle"] || "") + "]" + (_0x5ef4b5?.["couponInfo"]?.["priceLimit"] || "无门槛") + "减" + (_0x5ef4b5?.["couponInfo"]?.["couponValue"] || "") : "")?.["filter"](_0x58c510 => _0x58c510);
        const _0x5ca70f = {
          "act": _0x5037cf
        };
        this.notify_coupon(_0x385f19, "天天神券抽奖", _0x5ca70f);
      } else {
        let _0x5c3896 = _0x595d55?.["msg"] || _0x595d55?.["message"] || "";
        const _0x3f8e6e = {
          "act": _0x5037cf
        };
        this.log("天天神券抽奖失败[" + _0x3260e3 + "]: " + _0x5c3896, _0x3f8e6e);
      }
    } catch (_0x5e94f3) {
      console.log(_0x5e94f3);
    }
  }
  async ["clockInStatus"](_0x100bc4, _0x18db25 = {}) {
    try {
      let _0x2ba74b = {
          "fn": "clockInStatus",
          "method": "get",
          "url": "https://promotion.waimai.meituan.com/playcenter/common/v1/clock-in/status",
          "searchParams": {
            "activityViewId": _0x100bc4,
            "ctype": $.get(_0x18db25, "ctype", "wm_wxapp"),
            "isInDpEnv": 0
          }
        },
        {
          result: _0x5ac166
        } = await this.request(_0x2ba74b),
        _0x5b416c = $.get(_0x5ac166, "code", -1);
      if (_0x5b416c == 0) {
        let _0x17c902 = new Date().getDay();
        for (let _0x3e7348 of _0x5ac166.data.clockInStatus) {
          if (_0x3e7348.dayOfWeek % 7 == _0x17c902) {
            const _0x405362 = {
              "act": _0x100bc4
            };
            this.log("今天社群" + (_0x3e7348.status ? "已" : "未") + "签到, 本周已签到" + _0x5ac166.data.clockInNum + "天", _0x405362);
            if (!_0x3e7348.status) {
              await this.clockInSign(_0x100bc4);
            }
            break;
          }
        }
        _0x5ac166.data.lotteryStatus == 1 && (await this.ttsqDoAction(_0x100bc4, 1001));
      } else {
        let _0x225250 = _0x5ac166?.["msg"] || _0x5ac166?.["message"] || "";
        const _0x2591f0 = {
          "act": _0x100bc4
        };
        this.log("查询社群签到失败[" + _0x5b416c + "]: " + _0x225250, _0x2591f0);
      }
    } catch (_0x30d8cb) {
      console.log(_0x30d8cb);
    }
  }
  async ["clockInSign"](_0x3c4a56, _0x5ef13b = {}) {
    try {
      const _0xe80b34 = {
        "activityViewId": _0x3c4a56,
        "actionCode": 1001,
        "lat": _0x4bea8c,
        "lng": _0x4426fe
      };
      let _0x58b444 = {
          "fn": "clockInSign",
          "method": "post",
          "url": "https://promotion.waimai.meituan.com/playcenter/common/v1/clock-in",
          "searchParams": {
            "isMini": 1,
            "ctype": $.get(_0x5ef13b, "ctype", "wm_wxapp"),
            "isInDpEnv": 0
          },
          "json": _0xe80b34
        },
        {
          result: _0x101357
        } = await this.request(_0x58b444),
        _0x2ee532 = $.get(_0x101357, "code", -1);
      if (_0x2ee532 == 0) {
        let _0x1634d5 = _0x101357?.["data"]?.["prizeInfoList"]?.["map"](_0x2d043e => "[" + _0x2d043e.couponInfo.couponTitle + "]" + (_0x2d043e.couponInfo.priceLimit || "无门槛") + "减" + _0x2d043e.couponInfo.couponValue);
        const _0x284faf = {
          "act": _0x3c4a56
        };
        this.notify_coupon(_0x1634d5, "社群签到领券", _0x284faf);
      } else {
        let _0x4bb726 = _0x101357?.["msg"] || _0x101357?.["message"] || "";
        const _0x346144 = {
          "act": _0x3c4a56
        };
        this.log("社群签到失败[" + _0x2ee532 + "]: " + _0x4bb726, _0x346144);
      }
    } catch (_0x3d9fe0) {
      console.log(_0x3d9fe0);
    }
  }
  async ["cardLotteryNum"](_0x3a9107 = {}) {
    try {
      const _0x224ae9 = {
        "activityId": "1116",
        "topicIdList": ["1380101169187258449", "1380101260094521416", "1412292930126868547"]
      };
      const _0x30aca5 = {
        "fn": "cardLotteryNum",
        "method": "post",
        "url": "https://mgm.meituan.com/marketing/cardsCollect/api/cardLotteryNum",
        "json": _0x224ae9
      };
      let {
        result: _0x3a0404
      } = await this.request(_0x30aca5);
      if (_0x3a0404?.["lotteryNum"] >= 0) {
        let _0x3ab4a5 = _0x3a0404.lotteryNum;
        this.log("有" + _0x3ab4a5 + "次抽月符机会");
        while (_0x3ab4a5-- > 0) {
          await this.lotteryfrompool(_0x3a0404.poolIdList);
        }
      } else {
        let _0x220d62 = _0x3a0404?.["msg"] || _0x3a0404?.["message"] || "";
        this.log("查询抽月符次数失败: " + _0x220d62);
      }
    } catch (_0x586426) {
      console.log(_0x586426);
    }
  }
  async ["cardSaveAccess"](_0x10e10d = {}) {
    try {
      const _0x316df6 = {
        "playerId": 1
      };
      const _0x5deda9 = {
        "fn": "cardSaveAccess",
        "method": "post",
        "url": "https://mgm.meituan.com/marketing/cardsCollect/api/saveAccess",
        "json": _0x316df6
      };
      await this.request(_0x5deda9);
    } catch (_0x105dc1) {
      console.log(_0x105dc1);
    }
  }
  async ["cardSaveShare"](_0x133a1a = {}) {
    try {
      const _0x24a23b = {
        "playerId": 1,
        "shareWay": 1,
        "shareContentType": 1,
        "shareContentId": "29"
      };
      const _0x2a7742 = {
        "fn": "cyfSaveShare",
        "method": "post",
        "url": "https://mgm.meituan.com/marketing/cardsCollect/api/saveShare",
        "json": _0x24a23b
      };
      await this.request(_0x2a7742);
    } catch (_0x1c675d) {
      console.log(_0x1c675d);
    }
  }
  async ["lotteryfrompool"](_0x551d42, _0x121f34 = {}) {
    try {
      const _0x2e26e2 = {
        "poolList": _0x551d42
      };
      const _0x17d1c1 = {
        "fn": "lotteryfrompool",
        "method": "post",
        "url": "https://mgm.meituan.com/marketing/cardsCollect/api/lotteryfrompool",
        "json": _0x2e26e2
      };
      let {
        result: _0x4bacb3
      } = await this.request(_0x17d1c1);
      if (_0x4bacb3?.["prizeInfo"]?.["name"]) {
        this.log("抽到月符: [" + _0x4bacb3?.["prizeInfo"]?.["name"] + "]");
        await this.getCardInfo(_0x4bacb3?.["lotteryAwardSerialNo"]?.["value"]);
      } else {
        let _0x4a0030 = _0x4bacb3?.["msg"] || _0x4bacb3?.["message"] || "";
        this.log("抽月符失败: " + _0x4a0030);
      }
    } catch (_0x34cfb4) {
      console.log(_0x34cfb4);
    }
  }
  async ["getCardInfo"](_0x27815e, _0x1b9b8b = {}) {
    try {
      const _0x30d9ff = {
        "lotteryAwardSerialNo": _0x27815e
      };
      const _0x36e401 = {
        "fn": "getCardInfo",
        "method": "get",
        "url": "https://mgm.meituan.com/marketing/cardsCollect/api/getCardInfo",
        "searchParams": _0x30d9ff
      };
      let {
          result: _0x57c7f2
        } = await this.request(_0x36e401),
        _0x5923cb = $.get(_0x57c7f2, "code", -1);
      if (_0x5923cb == 0) {
        await this.getCardDraw(_0x57c7f2?.["userCardInfo"]?.["cardId"]);
      } else {
        let _0xcbf8ff = _0x57c7f2?.["msg"] || _0x57c7f2?.["message"] || "";
        this.log("查询月符抽奖卡号失败[" + _0x5923cb + "]: " + _0xcbf8ff);
      }
    } catch (_0x1ee65d) {
      console.log(_0x1ee65d);
    }
  }
  async ["getCardDraw"](_0x4a4480, _0xc75e35 = {}) {
    try {
      const _0x27b809 = {
        "cardId": _0x4a4480
      };
      const _0x36f47a = {
        "fn": "getCardDraw",
        "method": "get",
        "url": "https://mgm.meituan.com/marketing/cardsCollect/api/draw",
        "searchParams": _0x27b809
      };
      let {
        result: _0x3ca5c6
      } = await this.request(_0x36f47a);
      if (_0x3ca5c6?.["bingo"]?.["value"]) {
        this.log("月符抽奖: " + _0x3ca5c6?.["prizeInfo"]?.["name"]);
      } else {
        let _0x3ca258 = _0x3ca5c6?.["msg"] || _0x3ca5c6?.["message"] || "";
        this.log("查询月符抽奖结果失败: " + _0x3ca258);
      }
    } catch (_0x4bb6d0) {
      console.log(_0x4bb6d0);
    }
  }
  async ["getUserTasks"](_0x38a0af, _0x12a490 = {}) {
    try {
      const _0x5b6240 = {
        "fn": "getUserTasks",
        "method": "post",
        "url": "https://cube.meituan.com/topcube/api/toc/task/getUserTasks",
        "json": {}
      };
      _0x5b6240.json.uuid = this.uuid;
      _0x5b6240.json.userId = this.userId;
      _0x5b6240.json.browseAreaTrue = true;
      _0x5b6240.json.cityId = 30;
      _0x5b6240.json.taskIdKeys = _0x38a0af.taskIdKeys;
      _0x5b6240.json.userType = "MEI_TUAN";
      _0x5b6240.json.sourceType = "MEI_TUAN";
      _0x5b6240.json.mini_program_token = this.token;
      _0x5b6240.json.inviter = "";
      _0x5b6240.json.inviterTaskIdKey = "";
      let {
        result: _0x3a0c84
      } = await this.request(_0x5b6240);
      if (_0x3a0c84?.["code"] == 0) {
        for (let _0x2d384c of _0x3a0c84.data) {
          if (!_0x2c3656.includes(_0x2d384c?.["code"]?.["toString"]())) {
            if (!_0x2d384c?.["taskRuleVos"]?.["length"]) {
              $.log("任务[" + _0x2d384c.title + "] -- " + _0x2d384c.msg);
              continue;
            }
            if (_0x2d384c?.["title"]?.["includes"]("小程序下单")) {
              continue;
            }
            let _0x204d77 = _0x2d384c?.["extend"] ? true : false;
            if (_0x204d77 && _0x2d384c?.["extend"]?.["isSignInToday"] == 1) {
              $.log("任务[" + _0x2d384c.title + "] -- 已完成");
              continue;
            }
            let _0x5b18d8 = false;
            if (_0x2d384c.taskConf) {
              let _0x4ece38 = JSON.parse(_0x2d384c.taskConf);
              _0x4ece38.isCheckNgSignature && (_0x5b18d8 = true);
            }
            for (let _0x358561 of _0x2d384c.taskRuleVos) {
              if (_0x358561.status == "PRIZE_SUCC" || _0x358561.status == "DELETE") {
                !_0x204d77 && $.log("任务[" + _0x2d384c.title + "] -- 已完成");
              } else {
                if (_0x358561?.["status"] == "CAN_RECEIVE") {
                  $.log("任务[" + _0x2d384c.title + "] -- 可领取奖励");
                  const _0x2e8f40 = {
                    "need_sign": _0x5b18d8
                  };
                  await this.sendTaskPrize(_0x38a0af, _0x2d384c, _0x358561, {}, _0x2e8f40);
                  if (_0x204d77) {
                    break;
                  }
                } else {
                  $.log("任务[" + _0x2d384c.title + "] -- 未完成");
                  let _0x37b320 = true,
                    _0x4f729b = JSON.parse(_0x358561.ruleConfig);
                  if (_0x4f729b.limitTime) {
                    let _0x2108be = (_0x358561.preCompleteTime || 0) + _0x4f729b.limitTime * 1000;
                    Date.now() < _0x2108be && (_0x37b320 = false, $.log("任务[" + _0x2d384c.title + "]冷却中, [" + $.time("hh:mm:ss", _0x2108be) + "]后可完成"));
                  } else {
                    if (_0x4f729b?.["timeLimits"]?.["length"]) {
                      let _0x25b217 = new Date($.time("yyyy-MM-dd 00:00:00")).getTime(),
                        _0x272289 = Date.now();
                      for (let _0x22695f of _0x4f729b.timeLimits) {
                        let {
                          startTime: _0x310451,
                          endTime: _0x38eaae
                        } = _0x22695f;
                        _0x310451 += _0x25b217;
                        _0x38eaae += _0x25b217;
                        (_0x272289 < _0x310451 || _0x272289 >= _0x38eaae) && (_0x37b320 = false, $.log("任务[" + _0x2d384c.title + "]不在时间段中: " + $.time("hh:mm:ss", _0x310451) + "到" + $.time("hh:mm:ss", _0x38eaae)));
                      }
                    }
                  }
                  if (_0x37b320) {
                    const _0x33aaa6 = {
                      "need_sign": _0x5b18d8
                    };
                    await this.startUserTask(_0x38a0af, _0x2d384c, _0x358561, _0x33aaa6);
                  }
                  if (_0x204d77) {
                    break;
                  }
                }
              }
            }
          }
        }
      } else {
        let _0x4827dc = _0x3a0c84?.["msg"] || _0x3a0c84?.["desc"] || "";
        this.log("查询任务列表失败: " + _0x4827dc);
      }
    } catch (_0x33e032) {
      console.log(_0x33e032);
    }
  }
  async ["startUserTask"](_0x1d51d6, _0x5f0eb2, _0x9730bc, _0x205348 = {}) {
    try {
      let _0x192d26 = _0x205348?.["need_sign"],
        _0x1420a7 = "https://cube.meituan.com/topcube/api/toc/task/startUserTask",
        _0x437fcd = {
          "uuid": this.uuid,
          "userId": this.userId,
          "cityId": 30,
          "riskForm": await this.encode_riskForm(_0x192d26),
          "taskIdKey": _0x5f0eb2.taskIdKey,
          "taskRuleIdKey": _0x9730bc.taskRuleIdKey,
          "cubePageId": _0x1d51d6.cubePageId,
          "userType": "MEI_TUAN",
          "sourceType": "MEI_TUAN",
          "mini_program_token": this.token
        };
      const _0x1d52b8 = {
        "fn": "startUserTask",
        "method": "post",
        "url": _0x1420a7,
        "json": _0x437fcd
      };
      if (_0x192d26) {
        let {
          headers: _0x1d0ecb
        } = await this.get_mtgsig(_0x1420a7, _0x437fcd);
        const _0x479e8f = {
          "mtgsig": _0x1d0ecb.mtgsig
        };
        _0x1d52b8.headers = _0x479e8f;
      }
      let {
        result: _0x57b43a
      } = await this.request(_0x1d52b8);
      if (_0x57b43a?.["code"] == 0) {
        let _0x46761f = JSON.parse(_0x9730bc.ruleConfig);
        if (_0x46761f.staySeconds) {
          let _0x418fc2 = _0x46761f.staySeconds * 1000;
          this.log("等待" + _0x46761f.staySeconds + "秒后完成任务..");
          await $.wait(_0x418fc2);
        } else {
          this.log("完成任务[" + _0x5f0eb2.title + "]成功");
        }
        const _0x1a1e3c = {
          "need_sign": _0x192d26
        };
        await this.updateUserTask(_0x1d51d6, _0x5f0eb2, _0x9730bc, _0x57b43a, _0x1a1e3c);
      } else {
        let _0x342d74 = _0x57b43a?.["msg"] || _0x57b43a?.["desc"] || "";
        this.log("完成任务[" + _0x5f0eb2.title + "]失败: " + _0x342d74);
        if (_0x342d74?.["includes"]("活动已完成")) {
          const _0x45830b = {
            "need_sign": _0x192d26
          };
          await this.updateUserTask(_0x1d51d6, _0x5f0eb2, _0x9730bc, {}, _0x45830b);
        }
      }
    } catch (_0x5d427e) {
      console.log(_0x5d427e);
    }
  }
  async ["process_task_prize"](_0x1e32b8) {
    let _0x18ce40 = [];
    for (let _0x5b0a7d of _0x1e32b8) {
      if (_0x5b0a7d.number) {
        _0x18ce40.push(_0x5b0a7d.number + "金币");
      } else {
        if (_0x5b0a7d?.["sendMagicCardResult"]?.["cardList"]?.["length"]) {
          for (let _0x23500d of _0x5b0a7d.sendMagicCardResult.cardList) {
            _0x18ce40.push("[" + (_0x493039[_0x23500d.type] || _0x23500d.type) + "]x" + _0x23500d.amount);
          }
        } else {
          if (_0x5b0a7d?.["sendMagicStoneResult"]?.["stoneList"]?.["length"]) {
            for (let _0x48eac4 of _0x5b0a7d.sendMagicStoneResult.stoneList) {
              _0x18ce40.push("[" + (_0x285bfa[_0x48eac4.magicStonePrizeType] || _0x48eac4.magicStonePrizeType) + "]x" + _0x48eac4.amount);
            }
          } else {
            if (_0x5b0a7d?.["sendCouponResultList"]?.["length"]) {
              for (let _0x3fda40 of _0x5b0a7d.sendCouponResultList) {
                _0x18ce40.push((_0x3fda40.useCondition || "无门槛") + "减" + _0x3fda40.couponValue + _0x3fda40.couponTypeDesc + "券");
              }
            }
          }
        }
      }
    }
    return _0x18ce40;
  }
  async ["updateUserTask"](_0x5b93e7, _0x26ef59, _0x57f63d, _0x4efac7 = {}, _0x2e33fa = {}) {
    try {
      let _0x442c46 = _0x2e33fa?.["need_sign"],
        {
          actionNo = "",
          taskNo = "",
          taskRuleNo = ""
        } = _0x4efac7;
      taskNo = taskNo || _0x26ef59?.["taskNo"] || "";
      taskRuleNo = taskRuleNo || _0x57f63d?.["taskRuleNo"] || "";
      let _0x3598cb = "https://cube.meituan.com/topcube/api/toc/task/updateUserTask",
        _0x514d55 = {
          "uuid": this.uuid,
          "userId": this.userId,
          "cityId": 30,
          "taskNo": taskNo,
          "actionNo": actionNo,
          "riskForm": await this.encode_riskForm(_0x442c46),
          "taskIdKey": _0x26ef59.taskIdKey,
          "taskRuleNo": taskRuleNo,
          "taskRuleIdKey": _0x57f63d.taskRuleIdKey,
          "cubePageId": _0x5b93e7.cubePageId,
          "userType": "MEI_TUAN",
          "sourceType": "MEI_TUAN",
          "mini_program_token": this.token
        };
      const _0x2310e6 = {
        "fn": "updateUserTask",
        "method": "post",
        "url": _0x3598cb,
        "json": _0x514d55
      };
      if (_0x442c46) {
        let {
          headers: _0x23a18c
        } = await this.get_mtgsig(_0x3598cb, _0x514d55);
        const _0x4b7339 = {
          "mtgsig": _0x23a18c.mtgsig
        };
        _0x2310e6.headers = _0x4b7339;
      }
      let {
        result: _0x579527
      } = await this.request(_0x2310e6);
      if (_0x579527?.["code"] == 0) {
        if (_0x579527?.["prizeList"]?.["length"]) {
          let _0x18f2c8 = await this.process_task_prize(_0x579527.prizeList);
          this.log("领取任务[" + _0x26ef59.title + "]奖励获得: " + _0x18f2c8.join(","));
        } else {
          this.log("更新任务[" + _0x26ef59.title + "]状态成功");
          const _0x5e4dad = {
            "need_sign": _0x442c46
          };
          await this.sendTaskPrize(_0x5b93e7, _0x26ef59, _0x57f63d, _0x4efac7, _0x5e4dad);
        }
      } else {
        let _0x24161a = _0x579527?.["msg"] || _0x579527?.["desc"] || "";
        this.log("更新任务[" + _0x26ef59.title + "]状态失败: " + _0x24161a);
      }
    } catch (_0x19e4ca) {
      console.log(_0x19e4ca);
    }
  }
  async ["sendTaskPrize"](_0x143d0d, _0x5603af, _0x2b2a72, _0x5c1657 = {}, _0x302c91 = {}) {
    try {
      let _0x10873e = _0x302c91?.["need_sign"],
        {
          actionNo = "",
          taskNo = "",
          taskRuleNo = ""
        } = _0x5c1657;
      taskNo = taskNo || _0x5603af?.["taskNo"] || "";
      taskRuleNo = taskRuleNo || _0x2b2a72?.["taskRuleNo"] || "";
      let _0x275141 = "https://cube.meituan.com/topcube/api/toc/task/sendTaskPrize",
        _0x40f140 = {
          "uuid": this.uuid,
          "userId": this.userId,
          "cityId": 30,
          "taskNo": taskNo,
          "actionNo": actionNo,
          "riskForm": await this.encode_riskForm(_0x10873e),
          "taskIdKey": _0x5603af.taskIdKey,
          "taskRuleNo": taskRuleNo,
          "taskRuleIdKey": _0x2b2a72.taskRuleIdKey,
          "cubePageId": _0x143d0d.cubePageId,
          "userType": "MEI_TUAN",
          "sourceType": "MEI_TUAN",
          "mini_program_token": this.token
        };
      const _0x27668a = {
        "fn": "sendTaskPrize",
        "method": "post",
        "url": _0x275141,
        "json": _0x40f140
      };
      if (_0x10873e) {
        let {
          headers: _0x580498
        } = await this.get_mtgsig(_0x275141, _0x40f140);
        const _0x4c255d = {
          "mtgsig": _0x580498.mtgsig
        };
        _0x27668a.headers = _0x4c255d;
      }
      let {
        result: _0x38cfdf
      } = await this.request(_0x27668a);
      if (_0x38cfdf?.["code"] == 0) {
        if (_0x38cfdf?.["prizeList"]?.["length"]) {
          let _0x1e1028 = await this.process_task_prize(_0x38cfdf.prizeList);
          this.log("领取任务[" + _0x5603af.title + "]奖励获得: " + _0x1e1028.join(","));
        } else {
          this.log("没有领取到任务[" + _0x5603af.title + "]奖励");
        }
      } else {
        let _0x4ae304 = _0x38cfdf?.["msg"] || _0x38cfdf?.["desc"] || "";
        this.log("领取任务[" + _0x5603af.title + "]奖励失败: " + _0x4ae304);
      }
    } catch (_0xee193d) {
      console.log(_0xee193d);
    }
  }
  async ["goldHomePage"](_0x43474c, _0x10bc75 = {}) {
    try {
      let _0x184d04 = "https://cube.meituan.com/topcube/api/toc/gold/homePage";
      const _0x2be400 = {
        "activitySecretKey": _0x43474c,
        "sourceType": "MEI_TUAN",
        "userId": this.userId,
        "mini_program_token": this.token,
        "uuid": this.uuid
      };
      const _0x4a1295 = {
        "fn": "goldHomePage",
        "method": "post",
        "url": _0x184d04,
        "json": _0x2be400
      };
      let {
        result: _0x4a97e3
      } = await this.request(_0x4a1295);
      if (_0x4a97e3?.["code"] == 0) {
        for (let _0x545dc of _0x4a97e3?.["data"]?.["redPackets"]?.["filter"](_0x1b8bf0 => _0x1b8bf0.status == "LOCK_UNRECEIVED")) {
          await this.receiveRedPacket(_0x43474c, _0x545dc);
        }
      } else {
        let _0x3a27fd = _0x4a97e3?.["msg"] || _0x4a97e3?.["desc"] || "";
        this.log("查询开红包次数失败: " + _0x3a27fd);
      }
    } catch (_0x2450b1) {
      console.log(_0x2450b1);
    }
  }
  async ["receiveRedPacket"](_0x4409d9, _0x32d2e7, _0x40be96 = {}) {
    try {
      let _0x1f4f6d = "https://cube.meituan.com/topcube/api/toc/gold/receiveRedPacket",
        _0x1da537 = {
          "activitySecretKey": _0x4409d9,
          "id": _0x32d2e7.id,
          "sourceType": "MEI_TUAN",
          "userId": this.userId,
          "mini_program_token": this.token,
          "uuid": this.uuid,
          "riskForm": await this.encode_riskForm()
        },
        {
          headers: _0x2b941a
        } = await this.get_mtgsig(_0x1f4f6d, _0x1da537);
      const _0x414e1a = {
        "mtgsig": _0x2b941a.mtgsig
      };
      const _0x1476b3 = {
        "fn": "receiveRedPacket",
        "method": "post",
        "url": _0x1f4f6d,
        "json": _0x1da537,
        "headers": _0x414e1a
      };
      let {
        result: _0x530b89
      } = await this.request(_0x1476b3);
      if (_0x530b89?.["code"] == 0) {
        this.log("开红包获得" + _0x32d2e7.amount + "金币");
      } else {
        let _0x3d3dbc = _0x530b89?.["msg"] || _0x530b89?.["desc"] || "";
        this.log("开红包[" + _0x32d2e7.id + "]失败: " + _0x3d3dbc);
      }
    } catch (_0x20f4d6) {
      console.log(_0x20f4d6);
    }
  }
  async ["earnDailyLogin"](_0x4ef411 = {}) {
    try {
      let _0x156a6e = _0x4ef411.gameType || 10402;
      const _0x45ff60 = {
        "cityId": "30"
      };
      let _0x4b59a1 = {
          "fn": "earnDailyLogin",
          "method": "get",
          "url": "https://game.meituan.com/earn-daily/login/loginMgc",
          "searchParams": {
            "gameType": _0x156a6e,
            "mtToken": this.token,
            "mtUserId": this.userId,
            "mtDeviceId": this.uuid,
            "nonceStr": $.randomString(16),
            "externalStr": JSON.stringify(_0x45ff60)
          }
        },
        {
          result: _0x1fc643
        } = await this.request(_0x4b59a1),
        _0x30704d = $.get(_0x1fc643, "code", -1);
      if (_0x30704d == 0) {
        this.acToken = _0x1fc643?.["response"]?.["accessToken"];
      } else {
        let _0x28ba26 = _0x1fc643?.["msg"] || _0x1fc643?.["desc"] || "";
        this.log("登录游戏[" + _0x156a6e + "]失败[" + _0x30704d + "]: " + _0x28ba26);
      }
    } catch (_0x596ff3) {
      console.log(_0x596ff3);
    }
  }
  async ["earnDailyPost"](_0x2471ec = {}) {
    let _0xc59b3a = {};
    try {
      let _0x573b27 = _0x2471ec.protocolId,
        _0xdaae02 = _0x2471ec.data || {},
        _0x1ce76e = {
          "fn": "earnDailyPost",
          "method": "post",
          "url": "https://game.meituan.com/earn-daily/msg/post",
          "headers": {
            "Origin": "https://awp.meituan.com",
            "Referer": "https://awp.meituan.com/"
          },
          "searchParams": {
            "yodaReady": "h5",
            "csecplatform": 4,
            "csecversion": "2.1.1"
          },
          "json": {
            "acToken": this.acToken,
            "riskParams": await this.get_app_riskForm(),
            "protocolId": _0x573b27,
            "data": _0xdaae02
          }
        };
      await $.wait_gap_interval(this.t_earnDaily, _0x18f6a7);
      _0xc59b3a = await this.request(_0x1ce76e);
      this.t_earnDaily = Date.now();
    } catch (_0x361939) {
      console.log(_0x361939);
    } finally {
      return _0xc59b3a;
    }
  }
  async ["earnDaily_task_list"](_0x14804d = {}) {
    try {
      const _0x111a57 = {
        "acToken": this.acToken
      };
      const _0x5ed5a7 = {
        "protocolId": 1001,
        "data": _0x111a57
      };
      {
        let {
            result: _0x1016a3
          } = await this.earnDailyPost(_0x5ed5a7),
          _0x49e29a = $.get(_0x1016a3, "code", -1);
        if (_0x49e29a == 200) {
          for (let _0x413f59 of _0x1016a3?.["data"]?.["signInPopModel"]?.["rewardModelList"] || []) {
            _0x413f59.current && _0x413f59.state == 1 && (await this.earnDaily_sign());
          }
          for (let _0xd9c960 of _0x1016a3?.["data"]?.["taskInfoList"] || []) {
            switch (_0xd9c960.id) {
              case 780:
              case 15099:
              case 15278:
                break;
              default:
                _0xd9c960.dailyRewardTimes < _0xd9c960.dailyFinishTimes && (await this.earnDaily_get_reward(_0xd9c960));
                for (let _0x232ca1 = _0xd9c960.dailyFinishTimes; _0x232ca1 < _0xd9c960.mgcTaskBaseInfo.curPeriodMaxFinishTimes; _0x232ca1++) {
                  await this.earnDaily_do_task(_0xd9c960);
                }
                break;
            }
          }
        } else {
          let _0x10636b = _0x1016a3?.["msg"] || _0x1016a3?.["desc"] || "";
          this.log("查询任务失败[" + _0x49e29a + "]: " + _0x10636b);
        }
      }
      {
        let {
            result: _0x2bdc68
          } = await this.earnDailyPost(_0x5ed5a7),
          _0x55c2c2 = $.get(_0x2bdc68, "code", -1);
        if (_0x55c2c2 == 200) {
          let _0x4437d7 = _0x2bdc68?.["data"]?.["playerBaseModel"]?.["redPacketInfo"]?.["leftRedPacketAmount"] || 0;
          this.log("可以开" + _0x4437d7 + "次红包");
          while (_0x4437d7-- > 0) {
            await this.earnDaily_redbag();
          }
        } else {
          let _0x7b4ebf = _0x2bdc68?.["msg"] || _0x2bdc68?.["desc"] || "";
          this.log("查询红包次数失败[" + _0x55c2c2 + "]: " + _0x7b4ebf);
        }
      }
      {
        let {
            result: _0x53a895
          } = await this.earnDailyPost(_0x5ed5a7),
          _0x1758ec = $.get(_0x53a895, "code", -1);
        if (_0x1758ec == 200) {
          this.cash = _0x53a895?.["data"]?.["playerBaseModel"]?.["activityCycleInfo"]?.["cashToken"] || 0;
          this.coin = _0x53a895?.["data"]?.["playerBaseModel"]?.["activityCycleInfo"]?.["coinToken"] || 0;
          this.coin > 0 && (await this.earnDaily_coinInfo());
          const _0x5ddf86 = {
            "notify": true
          };
          this.log("每日赚钱余额: " + (this.cash / 100).toFixed(2) + "元, " + this.coin + "金币", _0x5ddf86);
        } else {
          let _0x321c95 = _0x53a895?.["msg"] || _0x53a895?.["desc"] || "";
          this.log("查询每日赚钱余额失败[" + _0x1758ec + "]: " + _0x321c95);
        }
      }
      await this.earnDaily_get_withdraw_list();
    } catch (_0x16c26c) {
      console.log(_0x16c26c);
    }
  }
  async ["earnDaily_coinInfo"](_0x3589c3 = {}) {
    try {
      const _0x3ee108 = {
        "protocolId": 1015
      };
      let {
          result: _0x2042c3
        } = await this.earnDailyPost(_0x3ee108),
        _0x99abea = $.get(_0x2042c3, "code", -1);
      if (_0x99abea == 200) {
        let _0x38a80c = _0x2042c3?.["data"]?.["exchangeInfoList"]?.["filter"](_0x37c095 => _0x37c095.name == "翻红包现金");
        if (!_0x38a80c.length) {
          return;
        }
        let _0x31574c = _0x38a80c[0];
        this.coin >= _0x31574c.price && (await this.earnDaily_coinExchange(_0x31574c));
      } else {
        let _0x435098 = _0x2042c3?.["msg"] || _0x2042c3?.["desc"] || "";
        this.log("查询金币兑换失败[" + _0x99abea + "]: " + _0x435098);
      }
    } catch (_0x20db7f) {
      console.log(_0x20db7f);
    }
  }
  async ["earnDaily_coinExchange"](_0x3d55e9, _0x3baac6 = {}) {
    try {
      const _0x2e81bd = {
        "skuId": _0x3d55e9.skuId
      };
      const _0x372eb3 = {
        "protocolId": 1016,
        "data": _0x2e81bd
      };
      let {
          result: _0x5994bc
        } = await this.earnDailyPost(_0x372eb3),
        _0x46557c = $.get(_0x5994bc, "code", -1);
      if (_0x46557c == 200) {
        this.cash = _0x5994bc?.["data"]?.["activityCycleInfo"]?.["cashToken"] || 0;
        this.coin = _0x5994bc?.["data"]?.["activityCycleInfo"]?.["coinToken"] || 0;
        this.log("使用" + _0x3d55e9.price + "金币兑换余额成功: 剩余" + this.coin + "金币");
        let _0x22466c = _0x5994bc?.["data"]?.["exchangeInfoList"]?.["filter"](_0x3b4cbd => _0x3b4cbd.name == "翻红包现金");
        if (!_0x22466c.length) {
          return;
        }
        let _0x2a246a = _0x22466c[0];
        this.coin >= _0x2a246a.price && (await this.earnDaily_coinExchange(_0x2a246a));
      } else {
        let _0x2ad4a0 = _0x5994bc?.["msg"] || _0x5994bc?.["desc"] || "";
        this.log("使用" + _0x3d55e9.price + "金币兑换余额失败[" + _0x46557c + "]: " + _0x2ad4a0);
      }
    } catch (_0x19c170) {
      console.log(_0x19c170);
    }
  }
  async ["earnDaily_sign"](_0x1215a6 = {}) {
    try {
      const _0x512b41 = {
        "protocolId": 1007
      };
      let {
          result: _0x27f5e5
        } = await this.earnDailyPost(_0x512b41),
        _0x4d0206 = $.get(_0x27f5e5, "code", -1);
      if (_0x4d0206 == 200) {
        this.log("签到成功: " + (_0x27f5e5?.["data"]?.["remitNotificationModelList"]?.["map"](_0x3bd396 => _0x3bd396.content)?.["join"](",") || ""));
      } else {
        let _0x235f6f = _0x27f5e5?.["msg"] || _0x27f5e5?.["desc"] || "";
        this.log("签到失败[" + _0x4d0206 + "]: " + _0x235f6f);
      }
    } catch (_0x9fd730) {
      console.log(_0x9fd730);
    }
  }
  async ["earnDaily_do_task"](_0x18a326, _0x496dd0 = {}) {
    try {
      const _0x3deb41 = {
        "taskId": _0x18a326.id
      };
      const _0x8c9e6f = {
        "protocolId": 1004,
        "data": _0x3deb41
      };
      let {
          result: _0x54c9e8
        } = await this.earnDailyPost(_0x8c9e6f),
        _0x290b4f = $.get(_0x54c9e8, "code", -1);
      if (_0x290b4f == 200) {
        this.log("完成任务[" + (_0x18a326?.["mgcTaskBaseInfo"]?.["viewTitle"] || _0x18a326?.["id"]) + "]成功");
        await this.earnDaily_get_reward(_0x18a326);
      } else {
        let _0x4b44f6 = _0x54c9e8?.["msg"] || _0x54c9e8?.["desc"] || "";
        this.log("完成任务[" + (_0x18a326?.["mgcTaskBaseInfo"]?.["viewTitle"] || _0x18a326?.["id"]) + "]失败[" + _0x290b4f + "]: " + _0x4b44f6);
      }
    } catch (_0x6aae1c) {
      console.log(_0x6aae1c);
    }
  }
  async ["earnDaily_get_reward"](_0x10cea5, _0x11a2d3 = {}) {
    try {
      const _0xad007d = {
        "taskId": _0x10cea5.id
      };
      const _0x52f9f3 = {
        "protocolId": 1005,
        "data": _0xad007d
      };
      let {
          result: _0x180532
        } = await this.earnDailyPost(_0x52f9f3),
        _0x1275ba = $.get(_0x180532, "code", -1);
      if (_0x1275ba == 200) {
        this.log("领取任务[" + _0x10cea5.mgcTaskBaseInfo.viewTitle + "]奖励成功");
      } else {
        let _0x53e4b1 = _0x180532?.["msg"] || _0x180532?.["desc"] || "";
        this.log("领取任务[" + _0x10cea5.mgcTaskBaseInfo.viewTitle + "]奖励失败[" + _0x1275ba + "]: " + _0x53e4b1);
      }
    } catch (_0x2d70d2) {
      console.log(_0x2d70d2);
    }
  }
  async ["earnDaily_redbag"](_0xb37f9 = {}) {
    try {
      const _0x1ed1c2 = {
        "protocolId": 1008
      };
      let {
          result: _0x4477b3
        } = await this.earnDailyPost(_0x1ed1c2),
        _0x80f12 = $.get(_0x4477b3, "code", -1);
      if (_0x80f12 == 200) {
        let _0x4cdc95 = _0x4477b3?.["data"]?.["rewardModelList"]?.["filter"](_0xd09db8 => _0xd09db8.rewarded) || [];
        if (_0x4cdc95.length) {
          let _0x2e28cd = _0x4cdc95[0];
          if (_0x2e28cd.resourceType == 1) {
            this.log("开红包获得: " + (_0x2e28cd.amount / 100).toFixed(2) + "元");
          } else {
            _0x2e28cd.resourceType == 2 ? this.log("开红包获得: " + _0x2e28cd.amount + "金币") : this.log("开红包获得: " + JSON.stringify(_0x2e28cd));
          }
        }
      } else {
        let _0x1ed67d = _0x4477b3?.["msg"] || _0x4477b3?.["desc"] || "";
        this.log("开红包失败[" + _0x80f12 + "]: " + _0x1ed67d);
      }
    } catch (_0x22e415) {
      console.log(_0x22e415);
    }
  }
  async ["earnDaily_draw"](_0x2f7cc5 = {}) {
    try {
      const _0x214eeb = {
        "protocolId": 1010
      };
      let {
          result: _0x3529ee
        } = await this.earnDailyPost(_0x214eeb),
        _0x3aa18c = $.get(_0x3529ee, "code", -1);
      if (_0x3aa18c == 200) {
        let _0x4a7c13 = _0x3529ee?.["data"]?.["currentReward"];
        if (_0x4a7c13?.["rewardedCouponModel"]) {
          this.log("转盘抽奖: " + _0x4a7c13.rewardedCouponModel?.["useRule"] + _0x4a7c13.rewardedCouponModel?.["name"]);
          return;
        }
        switch (_0x4a7c13?.["resourceType"]) {
          case 1:
            let _0x5b2b53 = ((_0x4a7c13?.["amount"] || 0) / 100).toFixed(2);
            this.log("转盘抽奖: " + _0x5b2b53 + "元余额");
            break;
          case 2:
            this.log("转盘抽奖: " + _0x4a7c13?.["amount"] + "金币");
            break;
          case 3:
            this.log("转盘抽奖: 随机提现机会");
            break;
          default:
            this.log("转盘抽奖: " + JSON.stringify(_0x3529ee));
            break;
        }
      } else {
        let _0x33cfc5 = _0x3529ee?.["msg"] || _0x3529ee?.["desc"] || "";
        this.log("转盘抽奖失败[" + _0x3aa18c + "]: " + _0x33cfc5);
      }
    } catch (_0x1b52af) {
      console.log(_0x1b52af);
    }
  }
  async ["earnDaily_get_withdraw_list"](_0x5ce2c1 = {}) {
    try {
      const _0x53f82c = {
        "protocolId": 1012
      };
      let {
          result: _0x1bf82e
        } = await this.earnDailyPost(_0x53f82c),
        _0x21a29c = $.get(_0x1bf82e, "code", -1);
      if (_0x21a29c == 200) {
        let _0x1f5227 = _0x1bf82e?.["data"]?.["activityCycleInfo"]?.["cashToken"] || 0,
          _0x220a20 = (_0x1f5227 / 100).toFixed(2);
        this.log("红包余额: " + _0x220a20 + "元");
        let _0x27f533 = (_0x1bf82e?.["data"]?.["cashList"] || []).sort(function (_0x564968, _0xe0f69) {
          return _0xe0f69.amount - _0x564968.amount;
        });
        if (MT_AutoWithdraw == "false" || !MT_AutoWithdraw) {
          _0x27f533 = _0x27f533.filter(_0x2bd110 => _0x2bd110.amount == 5000);
        }
        for (let _0x35b099 of _0x27f533) {
          if (_0x35b099.amount > _0x1f5227) {
            continue;
          }
          if (await this.earnDaily_withdraw(_0x35b099)) {
            break;
          }
        }
      } else {
        let _0x413e3d = _0x1bf82e?.["msg"] || _0x1bf82e?.["desc"] || "";
        this.log("查询提现列表失败[" + _0x21a29c + "]: " + _0x413e3d);
      }
    } catch (_0x1afbfe) {
      console.log(_0x1afbfe);
    }
  }
  async ["earnDaily_withdraw"](_0x66c883, _0x147232 = {}) {
    let _0x1185b0 = false;
    try {
      let _0x844974 = (_0x66c883.amount / 100).toFixed(2);
      const _0x5d611a = {
        "id": _0x66c883.id,
        "amount": _0x66c883.amount
      };
      const _0x2ad0f4 = {
        "protocolId": 1013,
        "data": _0x5d611a
      };
      let {
          result: _0x7c6ad8
        } = await this.earnDailyPost(_0x2ad0f4),
        _0x1014d7 = $.get(_0x7c6ad8, "code", -1);
      if (_0x1014d7 == 200) {
        _0x1185b0 = true;
        const _0x18d81e = {
          "notify": true
        };
        this.log("提现[" + _0x844974 + "元]到钱包成功", _0x18d81e);
      } else {
        let _0x4180fb = _0x7c6ad8?.["msg"] || _0x7c6ad8?.["desc"] || "";
        _0x1014d7 == 1017 ? (_0x1185b0 = true, this.log("提现[" + _0x844974 + "元]失败[" + _0x1014d7 + "]: 可能今天已提现过")) : this.log("提现[" + _0x844974 + "元]失败[" + _0x1014d7 + "]: " + _0x4180fb);
      }
    } catch (_0x222dc2) {
      console.log(_0x222dc2);
    } finally {
      return _0x1185b0;
    }
  }
  async ["c_task"](_0x327225, _0x27e1d0 = {}) {
    try {
      let _0x5f166d = Math.random() * 100 + 2400 | 0;
      const _0x45f353 = {
        "Referer": "https://click.meituan.com/t?t=1&c=2&p=" + _0x327225
      };
      let _0x10effc = {
        "fn": "get_task",
        "method": "post",
        "url": "https://click.meituan.com/cps/clickReferralLink",
        "headers": _0x45f353,
        "json": {
          "p": _0x327225,
          "t": "1",
          "c": "2",
          "sessionId": "187a" + $.randomPattern("xxxxxxx-xxx-xxx-xxx"),
          "referrer": "",
          "fingerprintFromH5": "eJxVV" + $.randomString(_0x5f166d, _0x2fb19d)
        }
      };
      await this.request(_0x10effc);
    } catch (_0x382b75) {
      console.log(_0x382b75);
    }
  }
  async ["walletMainpage"](_0xd4398d = {}) {
    try {
      const _0x104cda = {
        "fn": "walletMainpage",
        "method": "post",
        "url": "https://npay.meituan.com/conch/walletV5/mainpage",
        "form": {}
      };
      _0x104cda.form.token = this.token;
      _0x104cda.form.nb_app = "group";
      _0x104cda.form.nb_appversion = "12.9.203";
      _0x104cda.form.nb_channel = "common";
      _0x104cda.form.nb_ci = "30";
      _0x104cda.form.nb_location = "0_0";
      _0x104cda.form.nb_osversion = "16.1.2";
      _0x104cda.form.nb_platform = "iOS";
      _0x104cda.form.utmSource = "AppStore";
      _0x104cda.form.from = "mine_qianbaorukou_qianbao";
      _0x104cda.form.popWindowOldChain = "false";
      let {
          result: _0x5ebbc4
        } = await this.request(_0x104cda),
        _0x1122bd = $.get(_0x5ebbc4, "status", -1);
      if (_0x1122bd == "success") {
        let _0x50aa26 = [];
        for (let _0x388197 of _0x5ebbc4?.["data"]?.["AssetArea"]?.["otherAssetAreaDTOList"] || []) {
          switch (_0x388197.title) {
            case "余额":
              _0x50aa26.push("钱包余额: " + (_0x388197?.["subTitle"] || 0) + "元");
              break;
            case "立减金":
              _0x50aa26.push("立减金: " + (_0x388197?.["subTitle"] || 0) + "元");
              break;
          }
        }
        if (_0x50aa26.length) {
          const _0x4daf9c = {
            "notify": true
          };
          this.log(_0x50aa26.join(", "), _0x4daf9c);
        }
      } else {
        let _0x263353 = _0x5ebbc4?.["error"]?.["message"] || "";
        this.log("查询钱包失败[" + _0x1122bd + "]: " + _0x263353);
      }
    } catch (_0x434cd1) {
      console.log(_0x434cd1);
    }
  }
  async ["refTask"]() {
    if (!_0x550c3c?.["length"]) {
      return;
    }
    let _0xbe7284 = _0x550c3c.sort(function () {
        return Math.random() - 0.5;
      }),
      _0x3fce51 = _0xbe7284.length,
      _0x5d5167 = Math.min(3, _0x3fce51);
    _0xbe7284 = _0xbe7284.slice(0, _0x5d5167);
    for (let _0x48b440 of _0xbe7284) {
      await this.c_task(_0x48b440);
    }
  }
  async ["batchfetchcomponentcouponV2"](_0xa99480) {
    try {
      let {
        refIds: _0x1e6c53,
        instanceId: _0x4941f1,
        gdPageId: _0x42ed5b,
        pageId: _0x43ba0
      } = _0xa99480;
      const _0x30fe61 = {
        "cType": "wm_wxapp",
        "fpPlatform": 13,
        "wxOpenId": "",
        "appVersion": "12.9.206",
        "mtFingerprint": this.fp
      };
      let _0x2f3280 = {
          "couponReferIds": _0x1e6c53.join(","),
          "geoType": 2,
          "actualLng": _0x4426fe,
          "actualLat": _0x4bea8c,
          "isInDpEnv": 0,
          "gdPageId": _0x42ed5b,
          "pageId": _0x43ba0,
          "version": 1,
          "instanceId": _0x4941f1,
          "componentId": _0x4941f1,
          "utmSource": "",
          "utmCampaign": "",
          "needFetchedByUUID": 1
        },
        _0x57383b = new URL("https://promotion.waimai.meituan.com/lottery/couponcomponent/batchfetchcomponentcoupon/v2");
      for (let _0x2d6009 in _0x2f3280) {
        _0x57383b.searchParams.append(_0x2d6009, _0x2f3280[_0x2d6009]);
      }
      let {
        headers: _0x5bae2c
      } = await this.get_mtgsig(_0x57383b.toString(), _0x30fe61);
      const _0x88b594 = {
        "mtgsig": _0x5bae2c.mtgsig
      };
      const _0x5a68bc = {
        "fn": "batchfetchcomponentcouponV2",
        "method": "post",
        "url": _0x57383b,
        "json": _0x30fe61,
        "headers": _0x88b594
      };
      let {
        result: _0x23c235
      } = await this.request(_0x5a68bc);
      if (_0x23c235?.["code"] == 0) {
        let _0x424b42 = _0x23c235?.["data"]?.["filter"](_0x3d4664 => _0x3d4664.code == 0)?.["map"](_0x1e1931 => "[" + _0x1e1931.data.couponName + "]" + (_0x1e1931.data.priceLimit || "无门槛") + "减" + _0x1e1931.data.couponValue);
        if (_0x424b42.length) {
          this.notify_coupon(_0x424b42);
        }
      } else {
        let _0xf4100b = _0x23c235?.["msg"] || _0x23c235?.["desc"] || "";
        this.log("集合领券失败: " + _0xf4100b);
      }
    } catch (_0x14ccfb) {
      console.log(_0x14ccfb);
    }
  }
  async ["popupcomponent_popup"](_0x32fa4a, _0x2ec59e = {}) {
    try {
      const _0x515972 = {
        "recordId": _0x32fa4a,
        "geoType": 2
      };
      const _0x252836 = {
        "fn": "popupcomponent_popup",
        "method": "post",
        "url": "https://promotion.waimai.meituan.com/popupcomponent/popup",
        "form": _0x515972
      };
      let {
          result: _0x4c6b7c
        } = await this.request(_0x252836),
        _0x47b076 = $.get(_0x4c6b7c, "code", -1);
      if (_0x47b076 == 0) {
        let _0x22a43c = _0x4c6b7c?.["data"]?.["couponList"]?.["map"](_0x4203fe => _0x4203fe.couponValue ? "[" + (_0x4203fe?.["couponTitle"] || "") + "]" + (_0x4203fe?.["priceLimit"] || "无门槛") + "减" + (_0x4203fe?.["couponValue"] || "") : "")?.["filter"](_0x49841c => _0x49841c);
        const _0x727bc = {
          "act": _0x32fa4a
        };
        this.notify_coupon(_0x22a43c, "弹窗领券", _0x727bc);
      } else {
        let _0x1beb49 = _0x4c6b7c?.["msg"] || _0x4c6b7c?.["message"] || "";
        const _0x54ff42 = {
          "act": _0x32fa4a
        };
        this.log("弹窗领券失败[" + _0x47b076 + "]: " + _0x1beb49, _0x54ff42);
      }
    } catch (_0x4e9a6d) {
      console.log(_0x4e9a6d);
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
    for (let _0xf55cf3 of _0x6ec3d9) {
      await this.popupcomponent_popup(_0xf55cf3);
    }
    for (let _0x18912c of gundomConfV4) {
      await this.gundamGrabV4(_0x18912c);
    }
    for (let _0x55b453 of _0x4a377c) {
      await this.batchfetchcomponentcouponV2(_0x55b453);
    }
    for (let _0x42e01c of _0x52aede) {
      await this.signupRecord(_0x42e01c);
      await this.ttsqEntry(_0x42e01c);
    }
    for (let _0x5d02bb of _0x5d0b70) {
      await this.ttsqEntryLottery(_0x5d02bb);
    }
  }
  async ["wxSqsqTask"]() {
    $.log("---------------- WX-社群神券 ----------------");
    for (let _0x471bfa of _0x24375d) {
      await this.turntableDraw(_0x471bfa);
    }
  }
  async ["wxSqSignTask"]() {
    $.log("---------------- WX-社群签到 ----------------");
    for (let _0x236724 of _0x3cf4b7) {
      await this.clockInStatus(_0x236724);
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
    for (let _0x574b9f of _0x526b24) {
      $.log("============== " + _0x574b9f.name + " ==============");
      if (_0x574b9f.taskIdKeys.length > _0xe4c33e) {
        const _0x4ad6b6 = {
          "cubePageId": _0x574b9f.cubePageId,
          "taskIdKeys": []
        };
        for (let _0x5eaa5e of _0x574b9f.taskIdKeys) {
          _0x4ad6b6.taskIdKeys.push(_0x5eaa5e);
          _0x4ad6b6.taskIdKeys.length >= _0xe4c33e && (await this.getUserTasks(_0x4ad6b6), _0x4ad6b6.taskIdKeys = []);
        }
        if (_0x4ad6b6.taskIdKeys.length > 0) {
          await this.getUserTasks(_0x4ad6b6);
        }
      } else {
        await this.getUserTasks(_0x574b9f);
      }
    }
    await this.goldHomePage("9587270bb85c");
  }
  async ["notifyTask"]() {
    $.log("---------------- 汇总推送 ----------------");
    await this.walletMainpage();
  }
  async ["userTask"]() {
    const _0x239277 = {
      "notify": true
    };
    $.log("\n---------------- 账号[" + this.index + "] ----------------", _0x239277);
    if (!(await this.getLoginedUserInfo())) {
      return;
    }
    await this.refTask();
    await this.ttsqTask();
    await this.wxSqSignTask();
    await this.wxSqsqTask();
    _0x1293cc != "false" && (await this.commonTask());
    _0xabc21f != "false" && (await this.appMrzqTask());
    _0x58ec36 != "false" && (await this.appCyfTask());
    await this.notifyTask();
  }
}
!(async () => {
  if (!(await _0x4af099())) {
    return;
  }
  await _0xb3274d();
  $.read_env(UserClass, ckNames, envSplitor);
  $.log("\n-------------------------------------");
  MT_AutoWithdraw == "false" || !MT_AutoWithdraw ? $.log("APP每日赚钱设置为: 不随机提现") : $.log("APP每日赚钱设置为: 每日随机提现");
  _0x1293cc == "false" ? $.log("集合任务开关设置为: 关闭") : $.log("集合任务开关设置为: 开启");
  _0xabc21f == "false" ? $.log("每日赚钱任务开关设置为: 关闭") : $.log("每日赚钱任务开关设置为: 开启");
  _0x58ec36 == "false" ? $.log("抽月符任务开关设置为: 关闭") : $.log("抽月符任务开关设置为: 开启");
  $.log("-------------------------------------");
  for (let _0xe3719 of $.userList) {
    await _0xe3719.userTask();
  }
})().catch(_0x17eeca => $.log(_0x17eeca)).finally(() => $.exitNow());
async function _0x4af099() {
  let _0x1b082f = false;
  try {
    const _0x1cd95e = {
      "fn": "auth",
      "method": "get",
      "url": _0x2cc3bf
    };
    let {
      statusCode: _0x3db624,
      result: _0x14484f
    } = await _0x315f3b.request(_0x1cd95e);
    if (_0x3db624 != 200) {
      return Promise.resolve();
    }
    if (_0x14484f?.["code"] == 0) {
      _0x14484f = JSON.parse(_0x14484f.data.file.data);
      /*if (_0x14484f?.["commonNotify"] && _0x14484f.commonNotify.length > 0) {
        const _0x5e8dd8 = {
          "notify": true
        };
        $.log(_0x14484f.commonNotify.join("\n") + "\n", _0x5e8dd8);
      }
      _0x14484f?.["commonMsg"] && _0x14484f.commonMsg.length > 0 && $.log(_0x14484f.commonMsg.join("\n") + "\n");
      */
      if (_0x14484f[_0x1b8fe7]) {
        let _0x3ed022 = _0x14484f[_0x1b8fe7];
        _0x3ed022.status == 0 ? _0x113e79 >= _0x3ed022.version ? (_0x1b082f = true, /*$.log(_0x3ed022.msg[_0x3ed022.status]),*/ $.log(_0x3ed022.updateMsg), $.log("现在运行的脚本版本是：" + _0x113e79 + "，最新脚本版本：" + _0x3ed022.latestVersion)) : $.log(_0x3ed022.versionMsg) : $.log(_0x3ed022.msg[_0x3ed022.status]);
      } else {
        $.log(_0x14484f.errorMsg);
      }
    }
  } catch (_0x2e20e4) {
    $.log(_0x2e20e4);
  } finally {
    return _0x1b082f;
  }
}
async function _0xb3274d() {
  let _0x31b111 = false;
  try {
    const _0x367df5 = {
      "fn": "auth",
      "method": "get",
      "url": _0x56eef9
    };
    let {
      statusCode: _0x3f9364,
      result: _0x3765d5
    } = await _0x315f3b.request(_0x367df5);
    if (_0x3f9364 != 200) {
      return Promise.resolve();
    }
    if (_0x3765d5?.["code"] == 0) {
      _0x3765d5 = JSON.parse(_0x3765d5.data.file.data);
      //inviteCode = _0x3765d5?.["inviteCode"] || inviteCode;
      for (let _0x5e97e3 of _0x3765d5?.["mrzqTaskId_all"] || []) {
        !_0x4f1edf.includes(_0x5e97e3) && _0x4f1edf.push(_0x5e97e3);
      }
      for (let _0x39409b of _0x3765d5?.["commonTaskConf"] || []) {
        _0x526b24.filter(_0xfd1041 => _0xfd1041.name == _0x39409b.name)?.["length"] == 0 && _0x526b24.push(_0x39409b);
      }
      if (_0x3765d5?.["gundomConfV4"]?.["length"]) {
        gundomConfV4 = _0x3765d5.gundomConfV4;
      }
      if (_0x3765d5?.["batchConf"]?.["length"]) {
        _0x4a377c = _0x3765d5.batchConf;
      }
      if (_0x3765d5?.["pid_list"]?.["length"]) {
        _0x550c3c = _0x3765d5.pid_list;
      }
      for (let _0x293564 of _0x3765d5?.["sqsqIdList"] || []) {
        !_0x24375d.includes(_0x293564) && _0x24375d.push(_0x293564);
      }
      for (let _0x3c931b of _0x3765d5?.["sqSignIdList"] || []) {
        !_0x3cf4b7.includes(_0x3c931b) && _0x3cf4b7.push(_0x3c931b);
      }
      for (let _0x39fe89 of _0x3765d5?.["ttsqSignIdList"] || []) {
        !_0x52aede.includes(_0x39fe89) && _0x52aede.push(_0x39fe89);
      }
    }
  } catch (_0xf3f121) {
    $.log(_0xf3f121);
  } finally {
    return _0x31b111;
  }
}