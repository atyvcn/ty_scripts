/*
美团 v3.10

美团V3仅支持青龙等nodejs环境, 不支持圈X
自动领券和完成一些活动任务
建议按推荐定时跑, 每天10点15点17点有券可以抽

3.10已屏蔽集合任务, 默认运行每日赚钱和抽月符
不想运行每日赚钱的, 设置变量 MT_MrzqTask 为 false: export MT_MrzqTask="false"
不想运行抽月符的, 设置变量 MT_CyfTask 为 false: export MT_CyfTask="false"

APP每日赚钱: 默认会每日自动随机, 要关闭随机提现的话设置变量 MT_AutoWithdraw 为 false
export MT_AutoWithdraw="false"
关闭自动提现可以存金币到50元余额再提现, 目前比较难存满, 需要做下单任务

自行捉包把meituan.com里面的token(一般在请求头里)填到变量 MT_CK 中, 多账号换行或&或@隔开
export MT_CK="token=AgGZIgsYHyxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"

cron: 2 0,10,15,17,21 * * *
const $ = new Env("美团");
*/
const Env = require('./basic/Env.js');
const { TYQLDG_API, base64_encode } = require('./basic/tyqldg');
const $ = new Env("美团");
const got = require("got");
const envPrefix = "MT_",
  envSplitor = ["\n", "&", "@"],
  ckNames = [envPrefix + "CK"];
let eid = 0,
env_name=ckNames[0],
MTS = null,
mtgsig_url = process.env[envPrefix + "Sign"] || "https://service.leafxxx.win/meituan";
try {
  MTS = require('./basic/mtgsig.js');
} catch (e) {
  console.log(`本地mtgsig需要安装依赖 xhr2 青龙->依赖管理->NodeJs->新建依赖->名称：xhr2\nNodeJs 原始安装方法：npm i xhr2`);
  console.error(error);
}

const _0x24272f = process.env[envPrefix + "AutoWithdraw"] || "true",
  _0x1bffba = 15000,
  _0x5c27c5 = 3,
  _0x1ab535 = process.env[envPrefix + "MrzqTask"] || true,
  _0x4186a1 = process.env[envPrefix + "CyfTask"] || true;

$.get = function (result, name, value = "") {
    let value1 = value;
    result?.["hasOwnProperty"](name) && (value1 = result[name]);
    return value1;
}
$.wait_gap_interval = async function (_0x58be0e, _0x285f22) {
    let _0x505076 = Date.now() - _0x58be0e;
    _0x505076 < _0x285f22 && (await this.wait(_0x285f22 - _0x505076));
}

const _0x248ef1 = 3.1,
  _0x16ef55 = "meituan",
  _0x383c14 = "https://leafxcy.coding.net/api/user/leafxcy/project/validcode/shared-depot/validCode/git/blob/master/code.json",
  _0x208778 = "https://leafxcy.coding.net/api/user/leafxcy/project/validcode/shared-depot/validCode/git/blob/master/" + _0x16ef55 + ".json",
  _0x4fb4a4 = "Mozilla/5.0 (iPhone; CPU iPhone OS 16_1_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.33(0x18002129) NetType/WIFI Language/zh_CN",
  _0xce2e16 = "wxde8ac0a21135c07d",
  _0x285ebb = "1399386702",
  _0xe10cd4 = "2.30.3",
  _0x53bbe1 = "iphone",
  _0x4ee8f8 = "AwQAAABJAgAAAAEAAAAyAAAAPLgC95WH3MyqngAoyM/hf1hEoKrGdo0pJ5DI44e1wGF9AT3PH7Wes03actC2n/GVnwfURonD78PewMUppAAAADgCEZv2akitiLnGkQIH6r67N1V9EUFpKyBOQRSRKpv9Awnm6LwnygipNjcIwXXJZEv5ddnUSW8vZQ==",
  _0x28eea2 = "0123456789",
  _0x1d7efe = "qwertyuiopasdfghjklzxcvbnm",
  _0x3e1750 = _0x28eea2 + _0x1d7efe + _0x1d7efe.toUpperCase();
let _0x1ad6e9 = "114.07" + $.randomString(12, _0x28eea2),
  _0x122d4f = "22.52" + $.randomString(13, _0x28eea2),
  inviteCode = "NnOIp-QOs8SiYF1dcSlL5r8phPrCf6qkH7evMyjIoureqol0OXXaopfjjblE0yPge-nmlRKIDEgmTxF7oaoA4OfQjhGdF522KA_poICzK21VFORrK_ggku9ewgI6-qR5VCf7Blcp0wY6_CtAKvFkqFYXG42pu_6MtY7K6RDMjic",
  inviteCode2 = "NnOIp-QOs8SiYF1dcSlL5r8phPrCf6qkH7evMyjIoureqol0OXXaopfjjblE0yPgFQmJJWVFWc4CivexLwFRdcbcHaALd6__chOQeI55cEbhOmMc4oO8cWhZxYuQm9DsSt1nfKeLK2Rz8ExgU4PovBpOFx_LiHkpyxZNebiIkCE",
  _0xac4efd = [],
  _0x382386 = [];
const _0x3d348c = 600,
  _0x5ea9a5 = 10,
  _0x245c43 = ["1005", "1007"];
let _0x2876dc = ["631682c504", "bb88750009", "9f90f45850", "90e9ecbe6a", "b6bfd8c1bc", "d4caf84940", "8decbc4c98", "c6026478e4", "4353a111e9", "7ceb1c14a7", "89515f0102", "63bec5af07", "1c8df37ffe", "36eedbe86c", "6ab415d70c", "3c309c7f26", "66c2938e1d", "3497a4fd05", "7f1f7ec5a4", "2fb53287b2", "2b0ada0dd7", "495070b239", "176f400a8f", "672129ff6d", "a479497fa6", "97ea404b56", "320ffa53e7", "6ccbda387f", "6f2d5f144f", "563983d5f1", "6f70050a62", "dfd9c44d7f", "6d5461c6dd", "a7331f5c94", "8d3891bef9", "eb6094dcaa", "11c95cc416", "351c3f4810", "67bd2e0988", "cdb75f714d", "3a6eba11a1", "76f9dc2980", "30644bcb35", "d1a1d62e6c", "8af63652ba", "075eb403be", "361ba45eff", "cfbb835838", "e26f305436", "ed33f82fa9", "e36bae3f8f", "6696ff7825", "b7719de06c", "2ab24bbc57", "2d98ddf8ac", "406fb78bfd", "9b84c4503a", "55ce3f059d", "cd06f8210b", "f6706f9b33", "34a718f16a", "f5e2218b18", "c7f6a889ff", "2583c8ba46", "45e325543c", "a162c96304"],
  _0xca3d71 = ["b24pg8jaFTeNadCXq0lb3A", "yLm-IynkBUQLt09kALFv8Q", "Ox5_0TfqOg6b3UfkKS3rUg", "1THsbmQsYTIbi5N066B1zg", "TADnCANwheP5AKOjx3NpgA", "G_2Eu_n12fvbBgf3gBd2-A"],
  _0x1a468c = ["06hFC-C1WGiAQYUGya5QJA", "5IFmI13NeO7kRPW1jUj7Lw", "ySJ2HpgexeI0TJcLkA_5Ug"],
  _0x185e8d = ["ZCSW0XVhcm3NZ8yeoGXeaA", "KXGjpKrk2h_43vUrIKbzDA", "l3emawQka8JjlE6LMyYT3g", "r9348AwSwnwP715csHvDqw", "XVsZc3p1O1jd-uTG4EjyXw", "9khEyiqt2tKFyZSjvqphkQ", "_p2QL78Fao6bsexHzofp-w", "jXL-9iEaRTsv-FZdpX4Z4g"],
  _0x13e7b5 = ["WdtEnEpZZScQjcZdnOMyRw"],
  _0x38a976 = [];
const _0x10dbd = {
  "name": "APP-天天领金币",
  "cubePageId": 184008,
  "taskIdKeys": ["e8e72a2c8d", "ea69bee3c0", "129328922f", "15b494e7bc", "d36be8140b", "77c78d45cc"]
};
const _0x248a1a = {
  "name": "APP-每日赚钱",
  "cubePageId": 10000003,
  "taskIdKeys": ["b6e6e96128", "710d92816e", "fc43b223be"]
};
const _0x4f9d54 = {
  "name": "WX-每日赚钱",
  "cubePageId": 184008,
  "taskIdKeys": ["1fff834702"]
};
const _0x516e5c = {
  "name": "APP-团团神券-魔法石",
  "cubePageId": 88888889,
  "taskIdKeys": ["a941c20450", "cdcc8a8195", "eb03206b17", "5c919dfbd8", "8f53427c39", "f749a47257", "4d609dde67", "3e5cbc8120", "532e764346", "7613d02997"]
};
const _0x4de1a7 = {
  "name": "WX-天天赚钱",
  "cubePageId": 123,
  "taskIdKeys": _0x2876dc
};
const _0x13a177 = [_0x10dbd, _0x248a1a, _0x4f9d54, _0x516e5c, _0x4de1a7],
  _0x53c99f = {
    "NORMAL_CARD": "普通卡",
    "SENIOR_CARD": "稀有卡"
  };
const _0x4f0241 = {
  "EAT": "吃",
  "LIVE": "住",
  "WALK": "行",
  "TRAVEL": "游",
  "SHOP": "购",
  "ENTERTAIN": "娱"
};

let _0x191160 = [];
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
class _0x136d29 {
  constructor() {
    this.index = $.userIdx++;
    this.name = "";
    this.valid = true;
    const _0x24ad5a = {
      "limit": 0
    };
    const _0x50a594 = {
      "Connection": "keep-alive"
    };
    const _0x2617fa = {
      "retry": _0x24ad5a,
      "timeout": _0x1bffba,
      "followRedirect": false,
      "headers": _0x50a594
    };
    this.got = got.extend(_0x2617fa);
  }
  ["log"](_0x31f409, _0x1c2397 = {}) {
    var _0x42fa02 = "",
      _0x4a4a3f = $.userCount.toString().length;
    if (this.index) {
      _0x42fa02 += "账号[" + $.padStr(this.index, _0x4a4a3f) + "]";
    }
    if (this.name) {
      _0x42fa02 += "[" + this.name + "]";
    }
    $.log(_0x42fa02 + _0x31f409, _0x1c2397);
  }
  async ["request"](_0xa01529) {
    const _0x5646cf = ["ECONNRESET", "EADDRINUSE", "ENOTFOUND", "EAI_AGAIN"],
      _0x5580eb = ["TimeoutError"];
    var _0x290412 = null,
      _0x54acba = 0,
      _0x2f5065 = _0xa01529.fn || _0xa01529.url;
    _0xa01529.method = _0xa01529?.["method"]?.["toUpperCase"]() || "GET";
    let _0x3114df;
    while (_0x54acba < _0x5c27c5) {
      try {
        _0x54acba++;
        _0x3114df = null;
        let _0x549996 = null,
          _0x302466 = _0xa01529?.["timeout"] || this.got?.["defaults"]?.["options"]?.["timeout"]?.["request"] || _0x1bffba,
          _0x3f42af = false;
        await new Promise(async _0x5a7b2a => {
          setTimeout(() => {
            _0x3f42af = true;
            _0x5a7b2a();
          }, _0x302466);
          await this.got(_0xa01529).then(_0x1f351d => {
            _0x290412 = _0x1f351d;
          }, _0x339569 => {
            _0x549996 = _0x339569;
            _0x290412 = _0x339569.response;
            _0x3114df = _0x549996?.["code"];
          });
          _0x5a7b2a();
        });
        if (_0x3f42af) {
          this.log("[" + _0x2f5065 + "]请求超时(" + _0x302466 / 1000 + "秒)，重试第" + _0x54acba + "次");
        } else {
          if (_0x5580eb.includes(_0x549996?.["name"])) {
            this.log("[" + _0x2f5065 + "]请求超时(" + _0x549996.code + ")，重试第" + _0x54acba + "次");
          } else {
            if (_0x5646cf.includes(_0x549996?.["code"])) {
              this.log("[" + _0x2f5065 + "]请求错误(" + _0x549996.code + ")，重试第" + _0x54acba + "次");
            } else {
              let _0x33c8d4 = _0x290412?.["statusCode"] || 999,
                _0x13568e = _0x33c8d4 / 100 | 0;
              if (_0x13568e > 3) {
                this.log("请求[" + _0x2f5065 + "]返回[" + _0x33c8d4 + "]");
              }
              if (_0x13568e <= 4) {
                break;
              }
            }
          }
        }
      } catch (_0xa89984) {
        _0xa89984.name == "TimeoutError" ? this.log("[" + _0x2f5065 + "]请求超时，重试第" + _0x54acba + "次") : this.log("[" + _0x2f5065 + "]请求错误(" + _0xa89984.message + ")，重试第" + _0x54acba + "次");
      }
    }
    if (_0x290412 == null) {
      return Promise.resolve({
        "statusCode": _0x3114df || -1,
        "headers": null,
        "result": null
      });
    }
    let {
      statusCode: _0x4e0d25,
      headers: _0x5672d4,
      body: _0x4ec571
    } = _0x290412;
    if (_0x4ec571) {
      try {
        _0x4ec571 = JSON.parse(_0x4ec571);
      } catch {}
    }
    const _0x5dfbd1 = {
      "statusCode": _0x4e0d25,
      "headers": _0x5672d4,
      "result": _0x4ec571
    };
    return Promise.resolve(_0x5dfbd1);
  }
}
let _0x51c3b8 = new _0x136d29();
class UserClass extends _0x136d29 {
  constructor(ck) {
    super();
    Object.assign(this, $.CkToJson(ck));
    this.t_earnDaily = 0;
    this.uuid = $.randomPattern("186ebxxxxxxxx-22e49fxxxxxxxx-0-0-186ebxxxxxxxx");
    this.openid = $.randomString(7, _0x3e1750) + "-" + $.randomString(20, _0x3e1750);
    this.cookie = "token=" + this.token + "; mt_c_token=" + this.token + "; openid=" + this.openid + ";";
    this.valid_fp = false;
    this.fp = "H5dfp_1.8.2_tttt_CziTmz1LjARvHzKKzoDtmdBgc6Df5b+sgrXDtVBPjiCayshtLKt1gh8PjGGT";
    //MTS && (this.h5guard = new MTS(this.cookie, _0x36561b));
    MTS && (this.h5guard = MTS);
    this.got = this.got.extend({
      "headers": {
        "User-Agent": _0x4fb4a4,
        "token": this.token,
        "openid": this.openid,
        "uuid": this.uuid,
        "M-APPKEY": "wxmp_mt-weapp",
        "clientversion": _0xe10cd4,
        "utm_medium": _0x53bbe1,
        "openIdCipher": _0x4ee8f8,
        "cookie": this.cookie
      }
    });
  }
  ["notify_coupon"](_0x2b965b, _0x1f51a1 = "领券", _0x2c9b48 = {}) {
    const _0x1ef362 = {
      "notify": true
    };
    let _0x3ecb90 = Object.assign(_0x1ef362, _0x2c9b48);
    for (let _0x152a32 of _0x2b965b) {
      this.log(_0x1f51a1 + ": " + _0x152a32, _0x3ecb90);
    }
  }
  async ["get_mtgsig"](url, data) {
    const _0x12f3d1 = {
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
        "mtgsig": JSON.stringify(_0x12f3d1)
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
        const _0x2ee03d = {
          "url": url,
          "data": data
        };
        let _0x2c581c = {
            "fn": "get_mtgsig",
            "method": "post",
            "url": mtgsig_url + "/mtgsig",
            "json": _0x2ee03d
          },
          {
            result: _0x2de2d2
          } = await this.request(_0x2c581c),
          _0x2c53c7 = _0x2de2d2?.["code"];
        _0x2c53c7 === 0 ? Req = _0x2de2d2.data : this.log("获取mtgsig失败[" + _0x2c53c7 + "]: " + _0x2de2d2?.["msg"]);
      }
    }
    return Req;
  }
  async ["getfp"](_0x377aee = false) {
    if (!this.valid_fp) {
      if (this.h5guard && _0x377aee) {
        //this.fp = this.h5guard.getfp();
        this.fp = MTS.mtFingerprint();
        this.valid_fp = true;
      } else {
        if (mtgsig_url && _0x377aee) {
          const _0x1e8c3a = {
            "fn": "getfp",
            "method": "get",
            "url": mtgsig_url + "/getfp"
          };
          let {
              result: _0xa6ddf5
            } = await this.request(_0x1e8c3a),
            _0xc0fa8e = _0xa6ddf5?.["code"];
          _0xc0fa8e === 0 ? (this.fp = _0xa6ddf5.data, this.valid_fp = true) : this.log("获取fp失败[" + _0xc0fa8e + "]: " + _0xa6ddf5?.["msg"]);
        }
      }
    }
    return this.fp;
  }
  async ["get_app_riskForm"](_0x56ecfc = false) {
    let _0x33c5e1 = await this.getfp(_0x56ecfc);
    const _0x47921b = {
      "ip": "",
      "fingerprint": _0x33c5e1,
      "cityId": "30",
      "platform": 5,
      "app": 0,
      "version": "12.8.202",
      "uuid": ""
    };
    return _0x47921b;
  }
  async ["get_riskForm"](_0x275370 = false) {
    let _0x581d34 = await this.getfp(_0x275370);
    const _0x440166 = {
      "openid": this.openid,
      "appid": _0xce2e16,
      "mchid": _0x285ebb
    };
    let _0x1cb6c3 = {
      "uuid": this.uuid,
      "userid": this.userId,
      "openid": this.openid,
      "expoId": _0x4ee8f8,
      "ip": "",
      "partner": 0,
      "wxRiskLevel": JSON.stringify(_0x440166),
      "platform": 13,
      "appletsFingerprint": _0x581d34,
      "wechatFingerprint": _0x581d34
    };
    return _0x1cb6c3;
  }
  async ["encode_riskForm"](_0x427a5d = false) {
    let _0x501593 = await this.get_riskForm(_0x427a5d);
    return base64_encode(JSON.stringify(_0x501593));
  }
  async ["getLoginedUserInfo"](_0x4ef1fe = {}) {
    let _0x26ac1b = false;
    try {
      const _0x3daa7c = {
        "token": this.token
      };
      const _0xe8bb64 = {
        "fn": "getLoginedUserInfo",
        "method": "get",
        "url": "https://i.meituan.com/wrapapi/getLoginedUserInfo",
        "searchParams": _0x3daa7c
      };
      let {
        result: _0x48e5d7
      } = await this.request(_0xe8bb64);
      if (_0x48e5d7?.["mobile"]) {
        _0x26ac1b = true;
        this.name = _0x48e5d7.nickName;
        this.userId = Number(_0x48e5d7.userId);
        this.log("登录成功");
      } else {
        this.log("获取账号信息失败, ck可能失效");//, {"notify": true}
        await expireNotify(this.userId, this.index);
      }
    } catch (_0x232c57) {
      console.log(_0x232c57);
    } finally {
      return _0x26ac1b;
    }
  }
  async ["inviteFetchcoupon"](_0xe33e39 = {}) {
    try {
      const _0x333fe1 = {
        "ctype": "wxapp",
        "fpPlatform": 13,
        "isMini": 1,
        "token": this.token,
        "inviteCode": this.name!="nyqty" ? inviteCode :  inviteCode2
      };
      const _0x350678 = {
        "fn": "inviteFetchcoupon",
        "method": "get",
        "url": "https://promotion-waimai.meituan.com/invite/fetchcoupon",
        "searchParams": _0x333fe1
      };
      let {
          result: _0x4f7243
        } = await this.request(_0x350678),
        _0x2ea33a = $.get(_0x4f7243, "code", -1),
        _0x57ad77 = $.get(_0x4f7243, "subcode", -1);
      if ((_0x2ea33a == 0 || _0x2ea33a == 1) && (_0x57ad77 == 0 || _0x57ad77 == 2)) {
        let _0x45073c = _0x4f7243?.["data"]?.["couponList"]?.["map"](_0x4f2a40 => "[" + _0x4f2a40.couponTitle + "]" + (_0x4f2a40.priceLimit || "无门槛") + "减" + _0x4f2a40.couponValue);
        this.notify_coupon(_0x45073c);
      } else {
        let _0x143c44 = _0x4f7243?.["msg"] || _0x4f7243?.["message"] || "";
        this.log("领券失败[" + _0x2ea33a + "]: " + _0x143c44);
      }
    } catch (_0x2b0a8d) {
      console.log(_0x2b0a8d);
    }
  }
  async ["gundamGrabV4"](_0x1b2734, _0x707e44 = {}) {
    try {
      const _0x37ca55 = {
        "Origin": "https://market.waimai.meituan.com",
        "Referer": "https://market.waimai.meituan.com/"
      };
      const _0x5e649d = {
        "fn": "gundamGrabV4",
        "method": "post",
        "url": "https://mediacps.meituan.com/gundam/gundamGrabV4",
        "json": _0x1b2734,
        "headers": _0x37ca55
      };
      let {
          result: _0x13afb7
        } = await this.request(_0x5e649d),
        _0x551d30 = $.get(_0x13afb7, "code", -1);
      if (_0x551d30 == 0) {
        let _0x1d7584 = _0x13afb7?.["data"]?.["allCoupons"]?.["map"](_0x4f2dcb => "[" + _0x4f2dcb.couponName + "]" + (_0x4f2dcb.amountLimit || "无门槛") + "减" + _0x4f2dcb.couponAmount);
        this.notify_coupon(_0x1d7584);
      } else {
        let _0x4538a1 = _0x13afb7?.["msg"] || _0x13afb7?.["message"] || "";
        this.log("领券失败[" + _0x551d30 + "]: " + _0x4538a1);
      }
    } catch (_0x5e4f76) {
      console.log(_0x5e4f76);
    }
  }
  async ["turntableDraw"](_0x4325f9, _0x1ebc3d = {}) {
    try {
      let _0x367a00 = {
          "fn": "turntableDraw",
          "method": "post",
          "url": "https://promotion.waimai.meituan.com/lottery/turntable/draw",
          "searchParams": {
            "actualLat": _0x122d4f,
            "actualLng": _0x1ad6e9,
            "initialLat": _0x122d4f,
            "initialLng": _0x1ad6e9,
            "cType": $.get(_0x1ebc3d, "cType", "wm_wxapp"),
            "wm_appversion": $.get(_0x1ebc3d, "wm_appversion", "9.19.6"),
            "gdPageId": $.get(_0x1ebc3d, "gdPageId", "460584"),
            "token": this.token,
            "userId": this.userId,
            "uuid": this.uuid
          },
          "json": {
            "activityViewId": _0x4325f9,
            "appType": 0,
            "deviceType": 2,
            "wxOpenId": this.openid,
            "fpPlatform": 5,
            "mtFingerprint": ""
          }
        },
        {
          result: _0x44d8ba
        } = await this.request(_0x367a00),
        _0x2ae530 = $.get(_0x44d8ba, "code", -1);
      if (_0x2ae530 == 0) {
        let _0x377830 = [];
        for (let _0x4504f5 of _0x44d8ba?.["data"]?.["awards"]) {
          _0x4504f5.couponType == 1 ? _0x377830.push("[" + _0x4504f5.name + "]" + (_0x4504f5.orderAmountLimit || "无门槛") + "减" + _0x4504f5.amount) : _0x377830.push(_0x4504f5.desc);
        }
        const _0x44b71f = {
          "act": _0x4325f9
        };
        this.notify_coupon(_0x377830, "社群抽奖", _0x44b71f);
      } else {
        let _0x5a4264 = _0x44d8ba?.["msg"] || _0x44d8ba?.["message"] || "";
        const _0x103c75 = {
          "act": _0x4325f9
        };
        this.log("社群抽奖失败[" + _0x2ae530 + "]: " + _0x5a4264, _0x103c75);
      }
    } catch (_0x35c95d) {
      console.log(_0x35c95d);
    }
  }
  async ["signupRecord"](_0x31e016, _0x48c814 = {}) {
    try {
      let _0xb3e7c5 = {
          "fn": "signupRecord",
          "method": "get",
          "url": "https://promotion.waimai.meituan.com/playcenter/common/v1/treasurebox/signup/circle/record",
          "searchParams": {
            "activityViewId": _0x31e016,
            "isInDpEnv": 0,
            "isMini": 1,
            "cType": $.get(_0x48c814, "cType", "wm_wxapp")
          }
        },
        {
          result: _0xd23aed
        } = await this.request(_0xb3e7c5),
        _0x3bb58b = $.get(_0xd23aed, "code", -1);
      if (_0x3bb58b == 0) {
        const _0x57c5b1 = {
          "act": _0x31e016
        };
        this.log("已连续签到" + (_0xd23aed?.["data"]?.["signUpNum"] || 0) + "天", _0x57c5b1);
        for (let _0x16c25c of _0xd23aed?.["data"]?.["rewardStatus"]?.["filter"](_0x188c2c => _0x188c2c.status == 1)) {
          await this.signupGetBox(_0x31e016, _0x16c25c.stageDayNum);
        }
      } else {
        let _0x1cef46 = _0xd23aed?.["msg"] || _0xd23aed?.["message"] || "";
        const _0x52cbe0 = {
          "act": _0x31e016
        };
        this.log("查询签到失败[" + _0x3bb58b + "]: " + _0x1cef46, _0x52cbe0);
      }
    } catch (_0xbc9979) {
      console.log(_0xbc9979);
    }
  }
  async ["signupGetBox"](_0x8b158f, _0x378c37, _0x309572 = {}) {
    try {
      const _0x354aaf = {
        "signUpDayNum": _0x378c37
      };
      let _0x111302 = {
          "fn": "signupGetBox",
          "method": "post",
          "url": "https://promotion.waimai.meituan.com/playcenter/common/v1/treasurebox/signup/stage/reward/get",
          "searchParams": {
            "isInDpEnv": 0,
            "isMini": 1,
            "cType": $.get(_0x309572, "cType", "wm_wxapp")
          },
          "json": {
            "activityViewId": _0x8b158f,
            "actionCode": 1000,
            "lat": _0x122d4f,
            "lng": _0x1ad6e9,
            "fpPlatform": 13,
            "bizParams": JSON.stringify(_0x354aaf),
            "utmSource": "",
            "utmCampaign": "",
            "gdId": 421412,
            "codeVersion": 1,
            "mtFingerprint": ""
          }
        },
        {
          result: _0x338dfc
        } = await this.request(_0x111302),
        _0x451dc1 = $.get(_0x338dfc, "code", -1);
      if (_0x451dc1 == 0) {
        let _0x3488b1 = _0x338dfc?.["data"]?.["prizeInfoList"]?.["map"](_0x2c1d13 => "[" + _0x2c1d13.couponInfo.couponTitle + "]" + (_0x2c1d13.couponInfo.priceLimit || "无门槛") + "减" + _0x2c1d13.couponInfo.couponValue);
        const _0x3a70ff = {
          "act": _0x8b158f
        };
        this.notify_coupon(_0x3488b1, "开签到宝箱", _0x3a70ff);
      } else {
        let _0x2473c6 = _0x338dfc?.["msg"] || _0x338dfc?.["message"] || "";
        const _0xb3f953 = {
          "act": _0x8b158f
        };
        this.log("开签到宝箱失败[" + _0x451dc1 + "]: " + _0x2473c6, _0xb3f953);
      }
    } catch (_0x2911bc) {
      console.log(_0x2911bc);
    }
  }
  async ["ttsqEntry"](_0x13e7d6, _0x2a0cd7 = {}) {
    try {
      const _0x3ca497 = {
        "activityViewId": _0x13e7d6,
        "actionCodes": 1000,
        "querySignupConfig": 1,
        "lat": _0x122d4f,
        "lng": _0x1ad6e9
      };
      const _0x5b1676 = {
        "fn": "signupRecord",
        "method": "get",
        "url": "https://promotion.waimai.meituan.com/playcenter/common/v1/entry",
        "searchParams": _0x3ca497
      };
      let {
          result: _0x4d5a79
        } = await this.request(_0x5b1676),
        _0x24e8b1 = $.get(_0x4d5a79, "code", -1);
      if (_0x24e8b1 == 0) {
        if (_0x4d5a79.data.actionInfoList) {
          for (let _0x5d0573 of _0x4d5a79.data.actionInfoList) {
            await this.ttsqDoAction(_0x13e7d6, _0x5d0573.actionCode || 1000);
          }
        }
      } else {
        let _0x5eddcd = _0x4d5a79?.["msg"] || _0x4d5a79?.["message"] || "";
        const _0x1fc677 = {
          "act": _0x13e7d6
        };
        this.log("查询天天神券宝箱失败[" + _0x24e8b1 + "]: " + _0x5eddcd, _0x1fc677);
      }
    } catch (_0x18fcdd) {
      console.log(_0x18fcdd);
    }
  }
  async ["ttsqDoAction"](_0x2a3a57, _0x2dbddc, _0x563904 = {}) {
    try {
      let _0x43606c = {
          "fn": "ttsqDoAction",
          "method": "post",
          "url": "https://promotion.waimai.meituan.com/playcenter/common/v1/doaction",
          "json": {
            "activityViewId": _0x2a3a57,
            "actionCode": parseInt(_0x2dbddc || 1000),
            "lat": _0x122d4f,
            "lng": _0x1ad6e9,
            "gdId": 26403,
            "fpPlatform": 13,
            "utmSource": "",
            "utmCampaign": "",
            "mtFingerprint": ""
          }
        },
        {
          result: _0x3c6d25
        } = await this.request(_0x43606c),
        _0x321e72 = $.get(_0x3c6d25, "code", -1);
      if (_0x321e72 == 0) {
        let _0xe6c5e1 = _0x3c6d25?.["data"]?.["prizeInfoList"]?.["map"](_0x36482e => _0x36482e.awardType >= 0 ? "[" + _0x36482e.couponInfo.couponTitle + "]" + (_0x36482e.couponInfo.priceLimit || "无门槛") + "减" + _0x36482e.couponInfo.couponValue : "")?.["filter"](_0x20876c => _0x20876c);
        const _0x44a940 = {
          "act": _0x2a3a57
        };
        this.notify_coupon(_0xe6c5e1, "开天天神券宝箱", _0x44a940);
      } else {
        let _0x468b10 = _0x3c6d25?.["msg"] || _0x3c6d25?.["message"] || "";
        const _0x2a451d = {
          "act": _0x2a3a57
        };
        this.log("开天天神券宝箱失败[" + _0x321e72 + "]: " + _0x468b10, _0x2a451d);
      }
    } catch (_0x309e1d) {
      console.log(_0x309e1d);
    }
  }
  async ["ttsqEntryLottery"](_0x1062a0, _0x5703a1 = {}) {
    try {
      const _0x13af77 = {
        "isMini": 1,
        "ctype": "wm_wxapp",
        "isInDpEnv": 0,
        "activityViewId": _0x1062a0,
        "actionCodes": 1001,
        "lat": _0x122d4f,
        "lng": _0x1ad6e9
      };
      const _0x5413fd = {
        "fn": "signupRecord",
        "method": "get",
        "url": "https://promotion.waimai.meituan.com/playcenter/common/v1/entry",
        "searchParams": _0x13af77
      };
      let {
          result: _0x2c445c
        } = await this.request(_0x5413fd),
        _0x4e3fca = $.get(_0x2c445c, "code", -1);
      if (_0x4e3fca == 0) {
        if (_0x2c445c.data.actionInfoList) {
          for (let _0x3397f1 of _0x2c445c.data.actionInfoList) {
            await this.ttsqDoActionLottery(_0x1062a0, _0x3397f1.actionCode || 1001);
          }
        }
      } else {
        let _0x2d13e2 = _0x2c445c?.["msg"] || _0x2c445c?.["message"] || "";
        const _0x34f3db = {
          "act": _0x1062a0
        };
        this.log("查询天天神券抽奖失败[" + _0x4e3fca + "]: " + _0x2d13e2, _0x34f3db);
      }
    } catch (_0x588bd0) {
      console.log(_0x588bd0);
    }
  }
  async ["ttsqDoActionLottery"](_0x204c0d, _0x4fd803, _0x2d7b83 = {}) {
    try {
      let _0x2f3f66 = {
          "fn": "ttsqDoAction",
          "method": "post",
          "url": "https://promotion.waimai.meituan.com/playcenter/common/v1/doaction",
          "json": {
            "activityViewId": _0x204c0d,
            "actionCode": parseInt(_0x4fd803 || 1001),
            "lat": _0x122d4f,
            "lng": _0x1ad6e9,
            "gdId": 436181,
            "instanceId": "16703954295670.59854316222808620"
          }
        },
        {
          result: _0x235999
        } = await this.request(_0x2f3f66),
        _0x1a0b7a = $.get(_0x235999, "code", -1);
      if (_0x1a0b7a == 0) {
        let _0x28f90f = _0x235999?.["data"]?.["prizeInfoList"]?.["map"](_0x2bfa60 => _0x2bfa60.awardType >= 0 ? "[" + (_0x2bfa60?.["couponInfo"]?.["couponTitle"] || "") + "]" + (_0x2bfa60?.["couponInfo"]?.["priceLimit"] || "无门槛") + "减" + (_0x2bfa60?.["couponInfo"]?.["couponValue"] || "") : "")?.["filter"](_0x211695 => _0x211695);
        const _0x35012e = {
          "act": _0x204c0d
        };
        this.notify_coupon(_0x28f90f, "天天神券抽奖", _0x35012e);
      } else {
        let _0x5287b9 = _0x235999?.["msg"] || _0x235999?.["message"] || "";
        const _0x4f79c2 = {
          "act": _0x204c0d
        };
        this.log("天天神券抽奖失败[" + _0x1a0b7a + "]: " + _0x5287b9, _0x4f79c2);
      }
    } catch (_0x4b5675) {
      console.log(_0x4b5675);
    }
  }
  async ["clockInStatus"](_0x5127ed, _0x544f5c = {}) {
    try {
      let _0x2d8bde = {
          "fn": "clockInStatus",
          "method": "get",
          "url": "https://promotion.waimai.meituan.com/playcenter/common/v1/clock-in/status",
          "searchParams": {
            "activityViewId": _0x5127ed,
            "ctype": $.get(_0x544f5c, "ctype", "wm_wxapp"),
            "isInDpEnv": 0
          }
        },
        {
          result: _0x236eb0
        } = await this.request(_0x2d8bde),
        _0x4b6a31 = $.get(_0x236eb0, "code", -1);
      if (_0x4b6a31 == 0) {
        let _0x4a3be7 = new Date().getDay();
        for (let _0x21e801 of _0x236eb0.data.clockInStatus) {
          if (_0x21e801.dayOfWeek % 7 == _0x4a3be7) {
            const _0x513cc2 = {
              "act": _0x5127ed
            };
            this.log("今天社群" + (_0x21e801.status ? "已" : "未") + "签到, 本周已签到" + _0x236eb0.data.clockInNum + "天", _0x513cc2);
            if (!_0x21e801.status) {
              await this.clockInSign(_0x5127ed);
            }
            break;
          }
        }
        _0x236eb0.data.lotteryStatus == 1 && (await this.ttsqDoAction(_0x5127ed, 1001));
      } else {
        let _0x528b29 = _0x236eb0?.["msg"] || _0x236eb0?.["message"] || "";
        const _0x205063 = {
          "act": _0x5127ed
        };
        this.log("查询社群签到失败[" + _0x4b6a31 + "]: " + _0x528b29, _0x205063);
      }
    } catch (_0x2e5319) {
      console.log(_0x2e5319);
    }
  }
  async ["clockInSign"](_0xac8d92, _0x55143d = {}) {
    try {
      const _0x53e611 = {
        "activityViewId": _0xac8d92,
        "actionCode": 1001,
        "lat": _0x122d4f,
        "lng": _0x1ad6e9
      };
      let _0x115320 = {
          "fn": "clockInSign",
          "method": "post",
          "url": "https://promotion.waimai.meituan.com/playcenter/common/v1/clock-in",
          "searchParams": {
            "isMini": 1,
            "ctype": $.get(_0x55143d, "ctype", "wm_wxapp"),
            "isInDpEnv": 0
          },
          "json": _0x53e611
        },
        {
          result: _0x217976
        } = await this.request(_0x115320),
        _0x3d7c45 = $.get(_0x217976, "code", -1);
      if (_0x3d7c45 == 0) {
        let _0x276431 = _0x217976?.["data"]?.["prizeInfoList"]?.["map"](_0x52cc37 => "[" + _0x52cc37.couponInfo.couponTitle + "]" + (_0x52cc37.couponInfo.priceLimit || "无门槛") + "减" + _0x52cc37.couponInfo.couponValue);
        const _0x3d1680 = {
          "act": _0xac8d92
        };
        this.notify_coupon(_0x276431, "社群签到领券", _0x3d1680);
      } else {
        let _0x459bb9 = _0x217976?.["msg"] || _0x217976?.["message"] || "";
        const _0x1fff86 = {
          "act": _0xac8d92
        };
        this.log("社群签到失败[" + _0x3d7c45 + "]: " + _0x459bb9, _0x1fff86);
      }
    } catch (_0x1e0ba2) {
      console.log(_0x1e0ba2);
    }
  }
  async ["cardLotteryNum"](_0x4da984 = {}) {
    try {
      const _0x3f1588 = {
        "fn": "cardLotteryNum",
        "method": "post",
        "url": "https://mgm.meituan.com/marketing/cardsCollect/api/cardLotteryNum",
        "json": {}
      };
      _0x3f1588.json.activityId = "1116";
      _0x3f1588.json.topicIdList = ["1380101169187258449", "1380101260094521416", "1412292930126868547"];
      let {
        result: _0x5bcb71
      } = await this.request(_0x3f1588);
      if (_0x5bcb71?.["lotteryNum"] >= 0) {
        let _0x5f5adc = _0x5bcb71.lotteryNum;
        this.log("有" + _0x5f5adc + "次抽月符机会");
        while (_0x5f5adc-- > 0) {
          await this.lotteryfrompool(_0x5bcb71.poolIdList);
        }
      } else {
        let _0x4d5c1e = _0x5bcb71?.["msg"] || _0x5bcb71?.["message"] || "";
        this.log("查询抽月符次数失败: " + _0x4d5c1e);
      }
    } catch (_0x4962b1) {
      console.log(_0x4962b1);
    }
  }
  async ["cardSaveAccess"](_0x555d25 = {}) {
    try {
      const _0x53f3fd = {
        "playerId": 1
      };
      const _0x25782e = {
        "fn": "cardSaveAccess",
        "method": "post",
        "url": "https://mgm.meituan.com/marketing/cardsCollect/api/saveAccess",
        "json": _0x53f3fd
      };
      await this.request(_0x25782e);
    } catch (_0x3ff300) {
      console.log(_0x3ff300);
    }
  }
  async ["cardSaveShare"](_0x1438b9 = {}) {
    try {
      const _0xdf5b31 = {
        "playerId": 1,
        "shareWay": 1,
        "shareContentType": 1,
        "shareContentId": "29"
      };
      const _0xddec60 = {
        "fn": "cyfSaveShare",
        "method": "post",
        "url": "https://mgm.meituan.com/marketing/cardsCollect/api/saveShare",
        "json": _0xdf5b31
      };
      await this.request(_0xddec60);
    } catch (_0x5b26fb) {
      console.log(_0x5b26fb);
    }
  }
  async ["lotteryfrompool"](_0x4cdd00, _0x22c4f4 = {}) {
    try {
      const _0x33835b = {
        "poolList": _0x4cdd00
      };
      const _0x4e6b76 = {
        "fn": "lotteryfrompool",
        "method": "post",
        "url": "https://mgm.meituan.com/marketing/cardsCollect/api/lotteryfrompool",
        "json": _0x33835b
      };
      let {
        result: _0x4f6e9f
      } = await this.request(_0x4e6b76);
      if (_0x4f6e9f?.["prizeInfo"]?.["name"]) {
        this.log("抽到月符: [" + _0x4f6e9f?.["prizeInfo"]?.["name"] + "]");
        await this.getCardInfo(_0x4f6e9f?.["lotteryAwardSerialNo"]?.["value"]);
      } else {
        let _0x583acc = _0x4f6e9f?.["msg"] || _0x4f6e9f?.["message"] || "";
        this.log("抽月符失败: " + _0x583acc);
      }
    } catch (_0x2ec235) {
      console.log(_0x2ec235);
    }
  }
  async ["getCardInfo"](_0x4a6db3, _0x1069ee = {}) {
    try {
      const _0x539c34 = {
        "lotteryAwardSerialNo": _0x4a6db3
      };
      const _0x1c468a = {
        "fn": "getCardInfo",
        "method": "get",
        "url": "https://mgm.meituan.com/marketing/cardsCollect/api/getCardInfo",
        "searchParams": _0x539c34
      };
      let {
          result: _0x2ccc79
        } = await this.request(_0x1c468a),
        _0x3d6e5d = $.get(_0x2ccc79, "code", -1);
      if (_0x3d6e5d == 0) {
        await this.getCardDraw(_0x2ccc79?.["userCardInfo"]?.["cardId"]);
      } else {
        let _0x3f91a3 = _0x2ccc79?.["msg"] || _0x2ccc79?.["message"] || "";
        this.log("查询月符抽奖卡号失败[" + _0x3d6e5d + "]: " + _0x3f91a3);
      }
    } catch (_0x3cbbbd) {
      console.log(_0x3cbbbd);
    }
  }
  async ["getCardDraw"](_0xff61c6, _0x44ae4f = {}) {
    try {
      const _0x195b44 = {
        "cardId": _0xff61c6
      };
      const _0x5ac0b0 = {
        "fn": "getCardDraw",
        "method": "get",
        "url": "https://mgm.meituan.com/marketing/cardsCollect/api/draw",
        "searchParams": _0x195b44
      };
      let {
        result: _0x5d2829
      } = await this.request(_0x5ac0b0);
      if (_0x5d2829?.["bingo"]?.["value"]) {
        this.log("月符抽奖: " + _0x5d2829?.["prizeInfo"]?.["name"]);
      } else {
        let _0x1a8978 = _0x5d2829?.["msg"] || _0x5d2829?.["message"] || "";
        this.log("查询月符抽奖结果失败: " + _0x1a8978);
      }
    } catch (_0x4192ed) {
      console.log(_0x4192ed);
    }
  }
  async ["getUserTasks"](_0x8f054c, _0x437670 = {}) {
    try {
      const _0x16f8ba = {
        "fn": "getUserTasks",
        "method": "post",
        "url": "https://cube.meituan.com/topcube/api/toc/task/getUserTasks",
        "json": {}
      };
      _0x16f8ba.json.uuid = this.uuid;
      _0x16f8ba.json.userId = this.userId;
      _0x16f8ba.json.browseAreaTrue = true;
      _0x16f8ba.json.cityId = 30;
      _0x16f8ba.json.taskIdKeys = _0x8f054c.taskIdKeys;
      _0x16f8ba.json.userType = "MEI_TUAN";
      _0x16f8ba.json.sourceType = "MEI_TUAN";
      _0x16f8ba.json.mini_program_token = this.token;
      _0x16f8ba.json.inviter = "";
      _0x16f8ba.json.inviterTaskIdKey = "";
      let {
        result: _0x354b7c
      } = await this.request(_0x16f8ba);
      if (_0x354b7c?.["code"] == 0) {
        for (let _0x562a31 of _0x354b7c.data) {
          if (!_0x245c43.includes(_0x562a31?.["code"]?.["toString"]())) {
            if (!_0x562a31?.["taskRuleVos"]?.["length"]) {
              $.log("任务[" + _0x562a31.title + "] -- " + _0x562a31.msg);
              continue;
            }
            if (_0x562a31?.["title"]?.["includes"]("小程序下单")) {
              continue;
            }
            let _0x47b190 = _0x562a31?.["extend"] ? true : false;
            if (_0x47b190 && _0x562a31?.["extend"]?.["isSignInToday"] == 1) {
              $.log("任务[" + _0x562a31.title + "] -- 已完成");
              continue;
            }
            let _0x2d496d = false;
            if (_0x562a31.taskConf) {
              let _0x4a5e84 = JSON.parse(_0x562a31.taskConf);
              _0x4a5e84.isCheckNgSignature && (_0x2d496d = true);
            }
            for (let _0x4ffec1 of _0x562a31.taskRuleVos) {
              if (_0x4ffec1.status == "PRIZE_SUCC" || _0x4ffec1.status == "DELETE") {
                !_0x47b190 && $.log("任务[" + _0x562a31.title + "] -- 已完成");
              } else {
                if (_0x4ffec1?.["status"] == "CAN_RECEIVE") {
                  $.log("任务[" + _0x562a31.title + "] -- 可领取奖励");
                  const _0x32026b = {
                    "need_sign": _0x2d496d
                  };
                  await this.sendTaskPrize(_0x8f054c, _0x562a31, _0x4ffec1, {}, _0x32026b);
                  if (_0x47b190) {
                    break;
                  }
                } else {
                  $.log("任务[" + _0x562a31.title + "] -- 未完成");
                  let _0x28cc04 = true,
                    _0x471337 = JSON.parse(_0x4ffec1.ruleConfig);
                  if (_0x471337.limitTime) {
                    let _0x1dd17e = (_0x4ffec1.preCompleteTime || 0) + _0x471337.limitTime * 1000;
                    Date.now() < _0x1dd17e && (_0x28cc04 = false, $.log("任务[" + _0x562a31.title + "]冷却中, [" + $.time("hh:mm:ss", _0x1dd17e) + "]后可完成"));
                  } else {
                    if (_0x471337?.["timeLimits"]?.["length"]) {
                      let _0x1e5ad1 = new Date($.time("yyyy-MM-dd 00:00:00")).getTime(),
                        _0x2f7d43 = Date.now();
                      for (let _0x20de21 of _0x471337.timeLimits) {
                        let {
                          startTime: _0x4e1496,
                          endTime: _0x1c1120
                        } = _0x20de21;
                        _0x4e1496 += _0x1e5ad1;
                        _0x1c1120 += _0x1e5ad1;
                        (_0x2f7d43 < _0x4e1496 || _0x2f7d43 >= _0x1c1120) && (_0x28cc04 = false, $.log("任务[" + _0x562a31.title + "]不在时间段中: " + $.time("hh:mm:ss", _0x4e1496) + "到" + $.time("hh:mm:ss", _0x1c1120)));
                      }
                    }
                  }
                  if (_0x28cc04) {
                    const _0x4acf17 = {
                      "need_sign": _0x2d496d
                    };
                    await this.startUserTask(_0x8f054c, _0x562a31, _0x4ffec1, _0x4acf17);
                  }
                  if (_0x47b190) {
                    break;
                  }
                }
              }
            }
          }
        }
      } else {
        let _0x197af3 = _0x354b7c?.["msg"] || _0x354b7c?.["desc"] || "";
        this.log("查询任务列表失败: " + _0x197af3);
      }
    } catch (_0x3c9ad1) {
      console.log(_0x3c9ad1);
    }
  }
  async ["startUserTask"](_0x4cd378, _0x295288, _0x3592b5, _0x5899fb = {}) {
    try {
      let _0x2c9847 = _0x5899fb?.["need_sign"],
        _0x49dfa0 = "https://cube.meituan.com/topcube/api/toc/task/startUserTask",
        _0x4dcd89 = {
          "uuid": this.uuid,
          "userId": this.userId,
          "cityId": 30,
          "riskForm": await this.encode_riskForm(_0x2c9847),
          "taskIdKey": _0x295288.taskIdKey,
          "taskRuleIdKey": _0x3592b5.taskRuleIdKey,
          "cubePageId": _0x4cd378.cubePageId,
          "userType": "MEI_TUAN",
          "sourceType": "MEI_TUAN",
          "mini_program_token": this.token
        };
      const _0x1ae7bc = {
        "fn": "startUserTask",
        "method": "post",
        "url": _0x49dfa0,
        "json": _0x4dcd89
      };
      if (_0x2c9847) {
        let {
          headers: _0x33fcb0
        } = await this.get_mtgsig(_0x49dfa0, _0x4dcd89);
        const _0x49338c = {
          "mtgsig": _0x33fcb0.mtgsig
        };
        _0x1ae7bc.headers = _0x49338c;
      }
      let {
        result: _0x46236f
      } = await this.request(_0x1ae7bc);
      if (_0x46236f?.["code"] == 0) {
        let _0x47e552 = JSON.parse(_0x3592b5.ruleConfig);
        if (_0x47e552.staySeconds) {
          let _0x939726 = _0x47e552.staySeconds * 1000;
          this.log("等待" + _0x47e552.staySeconds + "秒后完成任务..");
          await $.wait(_0x939726);
        } else {
          this.log("完成任务[" + _0x295288.title + "]成功");
        }
        const _0x5afbca = {
          "need_sign": _0x2c9847
        };
        await this.updateUserTask(_0x4cd378, _0x295288, _0x3592b5, _0x46236f, _0x5afbca);
      } else {
        let _0x48e991 = _0x46236f?.["msg"] || _0x46236f?.["desc"] || "";
        this.log("完成任务[" + _0x295288.title + "]失败: " + _0x48e991);
        if (_0x48e991?.["includes"]("活动已完成")) {
          const _0x4b1ed9 = {
            "need_sign": _0x2c9847
          };
          await this.updateUserTask(_0x4cd378, _0x295288, _0x3592b5, {}, _0x4b1ed9);
        }
      }
    } catch (_0x1df245) {
      console.log(_0x1df245);
    }
  }
  async ["process_task_prize"](_0x17ca37) {
    let _0x40211b = [];
    for (let _0x542608 of _0x17ca37) {
      if (_0x542608.number) {
        _0x40211b.push(_0x542608.number + "金币");
      } else {
        if (_0x542608?.["sendMagicCardResult"]?.["cardList"]?.["length"]) {
          for (let _0x574113 of _0x542608.sendMagicCardResult.cardList) {
            _0x40211b.push("[" + (_0x53c99f[_0x574113.type] || _0x574113.type) + "]x" + _0x574113.amount);
          }
        } else {
          if (_0x542608?.["sendMagicStoneResult"]?.["stoneList"]?.["length"]) {
            for (let _0x4bf5de of _0x542608.sendMagicStoneResult.stoneList) {
              _0x40211b.push("[" + (_0x4f0241[_0x4bf5de.magicStonePrizeType] || _0x4bf5de.magicStonePrizeType) + "]x" + _0x4bf5de.amount);
            }
          } else {
            if (_0x542608?.["sendCouponResultList"]?.["length"]) {
              for (let _0x2183da of _0x542608.sendCouponResultList) {
                _0x40211b.push((_0x2183da.useCondition || "无门槛") + "减" + _0x2183da.couponValue + _0x2183da.couponTypeDesc + "券");
              }
            }
          }
        }
      }
    }
    return _0x40211b;
  }
  async ["updateUserTask"](_0x52c0b1, _0x25b910, _0x2b577c, _0x50621a = {}, _0x2ebe3b = {}) {
    try {
      let _0x2803f2 = _0x2ebe3b?.["need_sign"],
        {
          actionNo = "",
          taskNo = "",
          taskRuleNo = ""
        } = _0x50621a;
      taskNo = taskNo || _0x25b910?.["taskNo"] || "";
      taskRuleNo = taskRuleNo || _0x2b577c?.["taskRuleNo"] || "";
      let _0x3827d9 = "https://cube.meituan.com/topcube/api/toc/task/updateUserTask",
        _0x28478f = {
          "uuid": this.uuid,
          "userId": this.userId,
          "cityId": 30,
          "taskNo": taskNo,
          "actionNo": actionNo,
          "riskForm": await this.encode_riskForm(_0x2803f2),
          "taskIdKey": _0x25b910.taskIdKey,
          "taskRuleNo": taskRuleNo,
          "taskRuleIdKey": _0x2b577c.taskRuleIdKey,
          "cubePageId": _0x52c0b1.cubePageId,
          "userType": "MEI_TUAN",
          "sourceType": "MEI_TUAN",
          "mini_program_token": this.token
        };
      const _0x3bb6d6 = {
        "fn": "updateUserTask",
        "method": "post",
        "url": _0x3827d9,
        "json": _0x28478f
      };
      if (_0x2803f2) {
        let {
          headers: _0x5e5b0b
        } = await this.get_mtgsig(_0x3827d9, _0x28478f);
        const _0x37f6b6 = {
          "mtgsig": _0x5e5b0b.mtgsig
        };
        _0x3bb6d6.headers = _0x37f6b6;
      }
      let {
        result: _0xd1c4d1
      } = await this.request(_0x3bb6d6);
      if (_0xd1c4d1?.["code"] == 0) {
        if (_0xd1c4d1?.["prizeList"]?.["length"]) {
          let _0x1e4695 = await this.process_task_prize(_0xd1c4d1.prizeList);
          this.log("领取任务[" + _0x25b910.title + "]奖励获得: " + _0x1e4695.join(","));
        } else {
          this.log("更新任务[" + _0x25b910.title + "]状态成功");
          const _0x4331c9 = {
            "need_sign": _0x2803f2
          };
          await this.sendTaskPrize(_0x52c0b1, _0x25b910, _0x2b577c, _0x50621a, _0x4331c9);
        }
      } else {
        let _0x475449 = _0xd1c4d1?.["msg"] || _0xd1c4d1?.["desc"] || "";
        this.log("更新任务[" + _0x25b910.title + "]状态失败: " + _0x475449);
      }
    } catch (_0x131d72) {
      console.log(_0x131d72);
    }
  }
  async ["sendTaskPrize"](_0xe028f0, _0x2a183b, _0x16834f, _0x3bd329 = {}, _0x2b0b43 = {}) {
    try {
      let _0x4cb75c = _0x2b0b43?.["need_sign"],
        {
          actionNo = "",
          taskNo = "",
          taskRuleNo = ""
        } = _0x3bd329;
      taskNo = taskNo || _0x2a183b?.["taskNo"] || "";
      taskRuleNo = taskRuleNo || _0x16834f?.["taskRuleNo"] || "";
      let _0xa095b2 = "https://cube.meituan.com/topcube/api/toc/task/sendTaskPrize",
        _0x2aaefa = {
          "uuid": this.uuid,
          "userId": this.userId,
          "cityId": 30,
          "taskNo": taskNo,
          "actionNo": actionNo,
          "riskForm": await this.encode_riskForm(_0x4cb75c),
          "taskIdKey": _0x2a183b.taskIdKey,
          "taskRuleNo": taskRuleNo,
          "taskRuleIdKey": _0x16834f.taskRuleIdKey,
          "cubePageId": _0xe028f0.cubePageId,
          "userType": "MEI_TUAN",
          "sourceType": "MEI_TUAN",
          "mini_program_token": this.token
        };
      const _0x175ec8 = {
        "fn": "sendTaskPrize",
        "method": "post",
        "url": _0xa095b2,
        "json": _0x2aaefa
      };
      if (_0x4cb75c) {
        let {
          headers: _0x4aa005
        } = await this.get_mtgsig(_0xa095b2, _0x2aaefa);
        const _0x228594 = {
          "mtgsig": _0x4aa005.mtgsig
        };
        _0x175ec8.headers = _0x228594;
      }
      let {
        result: _0x3d2251
      } = await this.request(_0x175ec8);
      if (_0x3d2251?.["code"] == 0) {
        if (_0x3d2251?.["prizeList"]?.["length"]) {
          let _0x24516a = await this.process_task_prize(_0x3d2251.prizeList);
          this.log("领取任务[" + _0x2a183b.title + "]奖励获得: " + _0x24516a.join(","));
        } else {
          this.log("没有领取到任务[" + _0x2a183b.title + "]奖励");
        }
      } else {
        let _0x886d8f = _0x3d2251?.["msg"] || _0x3d2251?.["desc"] || "";
        this.log("领取任务[" + _0x2a183b.title + "]奖励失败: " + _0x886d8f);
      }
    } catch (_0x560434) {
      console.log(_0x560434);
    }
  }
  async ["goldHomePage"](_0x1ead16, _0x4c4cb2 = {}) {
    try {
      let _0x5397d0 = "https://cube.meituan.com/topcube/api/toc/gold/homePage";
      const _0x55e660 = {
        "activitySecretKey": _0x1ead16,
        "sourceType": "MEI_TUAN",
        "userId": this.userId,
        "mini_program_token": this.token,
        "uuid": this.uuid
      };
      const _0x4ab855 = {
        "fn": "goldHomePage",
        "method": "post",
        "url": _0x5397d0,
        "json": _0x55e660
      };
      let {
        result: _0x1c5543
      } = await this.request(_0x4ab855);
      if (_0x1c5543?.["code"] == 0) {
        for (let _0x3d5987 of _0x1c5543?.["data"]?.["redPackets"]?.["filter"](_0x138b32 => _0x138b32.status == "LOCK_UNRECEIVED")) {
          await this.receiveRedPacket(_0x1ead16, _0x3d5987);
        }
      } else {
        let _0x35f31b = _0x1c5543?.["msg"] || _0x1c5543?.["desc"] || "";
        this.log("查询开红包次数失败: " + _0x35f31b);
      }
    } catch (_0x112368) {
      console.log(_0x112368);
    }
  }
  async ["receiveRedPacket"](_0x324e98, _0x42d0ba, _0x4ca27e = {}) {
    try {
      let _0x1d32cc = "https://cube.meituan.com/topcube/api/toc/gold/receiveRedPacket",
        _0x852dd4 = {
          "activitySecretKey": _0x324e98,
          "id": _0x42d0ba.id,
          "sourceType": "MEI_TUAN",
          "userId": this.userId,
          "mini_program_token": this.token,
          "uuid": this.uuid,
          "riskForm": await this.encode_riskForm()
        },
        {
          headers: _0x1ad3c3
        } = await this.get_mtgsig(_0x1d32cc, _0x852dd4);
      const _0x1affc8 = {
        "mtgsig": _0x1ad3c3.mtgsig
      };
      const _0x3367e7 = {
        "fn": "receiveRedPacket",
        "method": "post",
        "url": _0x1d32cc,
        "json": _0x852dd4,
        "headers": _0x1affc8
      };
      let {
        result: _0x462365
      } = await this.request(_0x3367e7);
      if (_0x462365?.["code"] == 0) {
        this.log("开红包获得" + _0x42d0ba.amount + "金币");
      } else {
        let _0x44def0 = _0x462365?.["msg"] || _0x462365?.["desc"] || "";
        this.log("开红包[" + _0x42d0ba.id + "]失败: " + _0x44def0);
      }
    } catch (_0x379211) {
      console.log(_0x379211);
    }
  }
  async ["earnDailyLogin"](_0x4766e3 = {}) {
    try {
      let _0x357423 = _0x4766e3.gameType || 10402;
      const _0x25d616 = {
        "cityId": "30"
      };
      let _0x3fed59 = {
          "fn": "earnDailyLogin",
          "method": "get",
          "url": "https://game.meituan.com/earn-daily/login/loginMgc",
          "searchParams": {
            "gameType": _0x357423,
            "mtToken": this.token,
            "mtUserId": this.userId,
            "mtDeviceId": this.uuid,
            "nonceStr": $.randomString(16),
            "externalStr": JSON.stringify(_0x25d616)
          }
        },
        {
          result: _0x381f06
        } = await this.request(_0x3fed59),
        _0x19ed3b = $.get(_0x381f06, "code", -1);
      if (_0x19ed3b == 0) {
        this.acToken = _0x381f06?.["response"]?.["accessToken"];
      } else {
        let _0x2afb7f = _0x381f06?.["msg"] || _0x381f06?.["desc"] || "";
        this.log("登录游戏[" + _0x357423 + "]失败[" + _0x19ed3b + "]: " + _0x2afb7f);
      }
    } catch (_0x4641df) {
      console.log(_0x4641df);
    }
  }
  async ["earnDailyPost"](_0x7576f8 = {}) {
    let _0x22377e = {};
    try {
      let _0x482841 = _0x7576f8.protocolId,
        _0x1211ff = _0x7576f8.data || {},
        _0x51dc67 = {
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
            "protocolId": _0x482841,
            "data": _0x1211ff
          }
        };
      await $.wait_gap_interval(this.t_earnDaily, _0x3d348c);
      _0x22377e = await this.request(_0x51dc67);
      this.t_earnDaily = Date.now();
    } catch (_0x965c07) {
      console.log(_0x965c07);
    } finally {
      return _0x22377e;
    }
  }
  async ["earnDaily_task_list"](_0x50fe73 = {}) {
    try {
      const _0x1dd680 = {
        "acToken": this.acToken
      };
      const _0x28d049 = {
        "protocolId": 1001,
        "data": _0x1dd680
      };
      {
        let {
            result: _0x920568
          } = await this.earnDailyPost(_0x28d049),
          _0x4c735f = $.get(_0x920568, "code", -1);
        if (_0x4c735f == 200) {
          for (let _0x17af31 of _0x920568?.["data"]?.["signInPopModel"]?.["rewardModelList"] || []) {
            _0x17af31.current && _0x17af31.state == 1 && (await this.earnDaily_sign());
          }
          for (let _0x398d15 of _0x920568?.["data"]?.["taskInfoList"] || []) {
            switch (_0x398d15.id) {
              case 780:
              case 15099:
              case 15278:
                break;
              default:
                _0x398d15.dailyRewardTimes < _0x398d15.dailyFinishTimes && (await this.earnDaily_get_reward(_0x398d15));
                for (let _0x40312a = _0x398d15.dailyFinishTimes; _0x40312a < _0x398d15.mgcTaskBaseInfo.curPeriodMaxFinishTimes; _0x40312a++) {
                  await this.earnDaily_do_task(_0x398d15);
                }
                break;
            }
          }
        } else {
          let _0x3b3151 = _0x920568?.["msg"] || _0x920568?.["desc"] || "";
          this.log("查询任务失败[" + _0x4c735f + "]: " + _0x3b3151);
        }
      }
      {
        let {
            result: _0x50d08b
          } = await this.earnDailyPost(_0x28d049),
          _0x55cbb9 = $.get(_0x50d08b, "code", -1);
        if (_0x55cbb9 == 200) {
          let _0xbadb46 = _0x50d08b?.["data"]?.["playerBaseModel"]?.["redPacketInfo"]?.["leftRedPacketAmount"] || 0;
          this.log("可以开" + _0xbadb46 + "次红包");
          while (_0xbadb46-- > 0) {
            await this.earnDaily_redbag();
          }
        } else {
          let _0x51242b = _0x50d08b?.["msg"] || _0x50d08b?.["desc"] || "";
          this.log("查询红包次数失败[" + _0x55cbb9 + "]: " + _0x51242b);
        }
      }
      {
        let {
            result: _0x354708
          } = await this.earnDailyPost(_0x28d049),
          _0x266248 = $.get(_0x354708, "code", -1);
        if (_0x266248 == 200) {
          this.cash = _0x354708?.["data"]?.["playerBaseModel"]?.["activityCycleInfo"]?.["cashToken"] || 0;
          this.coin = _0x354708?.["data"]?.["playerBaseModel"]?.["activityCycleInfo"]?.["coinToken"] || 0;
          this.coin > 0 && (await this.earnDaily_coinInfo());
          const _0x5dcf78 = {
            "notify": true
          };
          this.log("每日赚钱余额: " + (this.cash / 100).toFixed(2) + "元, " + this.coin + "金币", _0x5dcf78);
        } else {
          let _0x10ad77 = _0x354708?.["msg"] || _0x354708?.["desc"] || "";
          this.log("查询每日赚钱余额失败[" + _0x266248 + "]: " + _0x10ad77);
        }
      }
      await this.earnDaily_get_withdraw_list();
    } catch (_0x183a30) {
      console.log(_0x183a30);
    }
  }
  async ["earnDaily_coinInfo"](_0x4f919c = {}) {
    try {
      const _0x577c01 = {
        "protocolId": 1015
      };
      let {
          result: _0x54598d
        } = await this.earnDailyPost(_0x577c01),
        _0x4074f8 = $.get(_0x54598d, "code", -1);
      if (_0x4074f8 == 200) {
        let _0x579cec = _0x54598d?.["data"]?.["exchangeInfoList"]?.["filter"](_0x1e9bf8 => _0x1e9bf8.name == "翻红包现金");
        if (!_0x579cec.length) {
          return;
        }
        let _0x2706e9 = _0x579cec[0];
        this.coin >= _0x2706e9.price && (await this.earnDaily_coinExchange(_0x2706e9));
      } else {
        let _0x28443e = _0x54598d?.["msg"] || _0x54598d?.["desc"] || "";
        this.log("查询金币兑换失败[" + _0x4074f8 + "]: " + _0x28443e);
      }
    } catch (_0x107323) {
      console.log(_0x107323);
    }
  }
  async ["earnDaily_coinExchange"](_0x2efce9, _0x16c18c = {}) {
    try {
      const _0x433dc2 = {
        "skuId": _0x2efce9.skuId
      };
      const _0x26f8a2 = {
        "protocolId": 1016,
        "data": _0x433dc2
      };
      let {
          result: _0x186606
        } = await this.earnDailyPost(_0x26f8a2),
        _0x49c5dc = $.get(_0x186606, "code", -1);
      if (_0x49c5dc == 200) {
        this.cash = _0x186606?.["data"]?.["activityCycleInfo"]?.["cashToken"] || 0;
        this.coin = _0x186606?.["data"]?.["activityCycleInfo"]?.["coinToken"] || 0;
        this.log("使用" + _0x2efce9.price + "金币兑换余额成功: 剩余" + this.coin + "金币");
        let _0xbb75dc = _0x186606?.["data"]?.["exchangeInfoList"]?.["filter"](_0x3f3972 => _0x3f3972.name == "翻红包现金");
        if (!_0xbb75dc.length) {
          return;
        }
        let _0x369b86 = _0xbb75dc[0];
        this.coin >= _0x369b86.price && (await this.earnDaily_coinExchange(_0x369b86));
      } else {
        let _0x995513 = _0x186606?.["msg"] || _0x186606?.["desc"] || "";
        this.log("使用" + _0x2efce9.price + "金币兑换余额失败[" + _0x49c5dc + "]: " + _0x995513);
      }
    } catch (_0x235996) {
      console.log(_0x235996);
    }
  }
  async ["earnDaily_sign"](_0x5b8ec6 = {}) {
    try {
      const _0x379558 = {
        "protocolId": 1007
      };
      let {
          result: _0x3b9236
        } = await this.earnDailyPost(_0x379558),
        _0x491eb4 = $.get(_0x3b9236, "code", -1);
      if (_0x491eb4 == 200) {
        this.log("签到成功: " + (_0x3b9236?.["data"]?.["remitNotificationModelList"]?.["map"](_0x39e7ac => _0x39e7ac.content)?.["join"](",") || ""));
      } else {
        let _0x241aff = _0x3b9236?.["msg"] || _0x3b9236?.["desc"] || "";
        this.log("签到失败[" + _0x491eb4 + "]: " + _0x241aff);
      }
    } catch (_0x3489f0) {
      console.log(_0x3489f0);
    }
  }
  async ["earnDaily_do_task"](_0x365201, _0x5530db = {}) {
    try {
      const _0x237ca6 = {
        "taskId": _0x365201.id
      };
      const _0x57388c = {
        "protocolId": 1004,
        "data": _0x237ca6
      };
      let {
          result: _0x315dba
        } = await this.earnDailyPost(_0x57388c),
        _0x3b2738 = $.get(_0x315dba, "code", -1);
      if (_0x3b2738 == 200) {
        this.log("完成任务[" + (_0x365201?.["mgcTaskBaseInfo"]?.["viewTitle"] || _0x365201?.["id"]) + "]成功");
        await this.earnDaily_get_reward(_0x365201);
      } else {
        let _0x4d3e9c = _0x315dba?.["msg"] || _0x315dba?.["desc"] || "";
        this.log("完成任务[" + (_0x365201?.["mgcTaskBaseInfo"]?.["viewTitle"] || _0x365201?.["id"]) + "]失败[" + _0x3b2738 + "]: " + _0x4d3e9c);
      }
    } catch (_0x3029ea) {
      console.log(_0x3029ea);
    }
  }
  async ["earnDaily_get_reward"](_0x1d822b, _0x592449 = {}) {
    try {
      const _0x5f4031 = {
        "taskId": _0x1d822b.id
      };
      const _0x25d812 = {
        "protocolId": 1005,
        "data": _0x5f4031
      };
      let {
          result: _0x5de4e2
        } = await this.earnDailyPost(_0x25d812),
        _0x1b9aed = $.get(_0x5de4e2, "code", -1);
      if (_0x1b9aed == 200) {
        this.log("领取任务[" + _0x1d822b.mgcTaskBaseInfo.viewTitle + "]奖励成功");
      } else {
        let _0x5281a2 = _0x5de4e2?.["msg"] || _0x5de4e2?.["desc"] || "";
        this.log("领取任务[" + _0x1d822b.mgcTaskBaseInfo.viewTitle + "]奖励失败[" + _0x1b9aed + "]: " + _0x5281a2);
      }
    } catch (_0x9a38d8) {
      console.log(_0x9a38d8);
    }
  }
  async ["earnDaily_redbag"](_0x1e06d8 = {}) {
    try {
      const _0x95ffcc = {
        "protocolId": 1008
      };
      let {
          result: _0x181933
        } = await this.earnDailyPost(_0x95ffcc),
        _0x1d555e = $.get(_0x181933, "code", -1);
      if (_0x1d555e == 200) {
        let _0x49599e = _0x181933?.["data"]?.["rewardModelList"]?.["filter"](_0x251205 => _0x251205.rewarded) || [];
        if (_0x49599e.length) {
          let _0x2d6def = _0x49599e[0];
          if (_0x2d6def.resourceType == 1) {
            this.log("开红包获得: " + (_0x2d6def.amount / 100).toFixed(2) + "元");
          } else {
            _0x2d6def.resourceType == 2 ? this.log("开红包获得: " + _0x2d6def.amount + "金币") : this.log("开红包获得: " + JSON.stringify(_0x2d6def));
          }
        }
      } else {
        let _0x41e8c6 = _0x181933?.["msg"] || _0x181933?.["desc"] || "";
        this.log("开红包失败[" + _0x1d555e + "]: " + _0x41e8c6);
      }
    } catch (_0x4b3a53) {
      console.log(_0x4b3a53);
    }
  }
  async ["earnDaily_draw"](_0xc897ee = {}) {
    try {
      const _0x16af82 = {
        "protocolId": 1010
      };
      let {
          result: _0x140e19
        } = await this.earnDailyPost(_0x16af82),
        _0x36e6ff = $.get(_0x140e19, "code", -1);
      if (_0x36e6ff == 200) {
        let _0x7a4481 = _0x140e19?.["data"]?.["currentReward"];
        if (_0x7a4481?.["rewardedCouponModel"]) {
          this.log("转盘抽奖: " + _0x7a4481.rewardedCouponModel?.["useRule"] + _0x7a4481.rewardedCouponModel?.["name"]);
          return;
        }
        switch (_0x7a4481?.["resourceType"]) {
          case 1:
            let _0x49e4dc = ((_0x7a4481?.["amount"] || 0) / 100).toFixed(2);
            this.log("转盘抽奖: " + _0x49e4dc + "元余额");
            break;
          case 2:
            this.log("转盘抽奖: " + _0x7a4481?.["amount"] + "金币");
            break;
          case 3:
            this.log("转盘抽奖: 随机提现机会");
            break;
          default:
            this.log("转盘抽奖: " + JSON.stringify(_0x140e19));
            break;
        }
      } else {
        let _0x3484d0 = _0x140e19?.["msg"] || _0x140e19?.["desc"] || "";
        this.log("转盘抽奖失败[" + _0x36e6ff + "]: " + _0x3484d0);
      }
    } catch (_0x59c250) {
      console.log(_0x59c250);
    }
  }
  async ["earnDaily_get_withdraw_list"](_0x2868b9 = {}) {
    try {
      const _0x251d7a = {
        "protocolId": 1012
      };
      let {
          result: _0x52f2c9
        } = await this.earnDailyPost(_0x251d7a),
        _0x2319dd = $.get(_0x52f2c9, "code", -1);
      if (_0x2319dd == 200) {
        let _0x369ad7 = _0x52f2c9?.["data"]?.["activityCycleInfo"]?.["cashToken"] || 0,
          _0x240213 = (_0x369ad7 / 100).toFixed(2);
        this.log("红包余额: " + _0x240213 + "元");
        let _0x48e22f = (_0x52f2c9?.["data"]?.["cashList"] || []).sort(function (_0x3b5b67, _0x5c295a) {
          return _0x5c295a.amount - _0x3b5b67.amount;
        });
        if (_0x24272f == "false" || !_0x24272f) {
          _0x48e22f = _0x48e22f.filter(_0x775048 => _0x775048.amount == 5000);
        }
        for (let _0x1fc209 of _0x48e22f) {
          if (_0x1fc209.amount > _0x369ad7) {
            continue;
          }
          if (await this.earnDaily_withdraw(_0x1fc209)) {
            break;
          }
        }
      } else {
        let _0x303e82 = _0x52f2c9?.["msg"] || _0x52f2c9?.["desc"] || "";
        this.log("查询提现列表失败[" + _0x2319dd + "]: " + _0x303e82);
      }
    } catch (_0x45e88b) {
      console.log(_0x45e88b);
    }
  }
  async ["earnDaily_withdraw"](_0x2ca30e, _0x37e270 = {}) {
    let _0x15a23d = false;
    try {
      let _0x1015a7 = (_0x2ca30e.amount / 100).toFixed(2);
      const _0x116130 = {
        "id": _0x2ca30e.id,
        "amount": _0x2ca30e.amount
      };
      const _0x594f26 = {
        "protocolId": 1013,
        "data": _0x116130
      };
      let {
          result: _0x25871b
        } = await this.earnDailyPost(_0x594f26),
        _0x1f0a4f = $.get(_0x25871b, "code", -1);
      if (_0x1f0a4f == 200) {
        _0x15a23d = true;
        const _0x18b3ce = {
          "notify": true
        };
        this.log("提现[" + _0x1015a7 + "元]到钱包成功", _0x18b3ce);
      } else {
        let _0x2e794f = _0x25871b?.["msg"] || _0x25871b?.["desc"] || "";
        _0x1f0a4f == 1017 ? (_0x15a23d = true, this.log("提现[" + _0x1015a7 + "元]失败[" + _0x1f0a4f + "]: 可能今天已提现过")) : this.log("提现[" + _0x1015a7 + "元]失败[" + _0x1f0a4f + "]: " + _0x2e794f);
      }
    } catch (_0x583fe3) {
      console.log(_0x583fe3);
    } finally {
      return _0x15a23d;
    }
  }
  async ["c_task"](_0x563253, _0x44b039 = {}) {
    try {
      let _0x3076b8 = Math.random() * 100 + 2400 | 0;
      const _0x40ecb4 = {
        "Referer": "https://click.meituan.com/t?t=1&c=2&p=" + _0x563253
      };
      let _0x23f21f = {
        "fn": "get_task",
        "method": "post",
        "url": "https://click.meituan.com/cps/clickReferralLink",
        "headers": _0x40ecb4,
        "json": {
          "p": _0x563253,
          "t": "1",
          "c": "2",
          "sessionId": "187a" + $.randomPattern("xxxxxxx-xxx-xxx-xxx"),
          "referrer": "",
          "fingerprintFromH5": "eJxVV" + $.randomString(_0x3076b8, _0x3e1750)
        }
      };
      await this.request(_0x23f21f);
    } catch (_0x1780de) {
      console.log(_0x1780de);
    }
  }
  async ["walletMainpage"](_0x544ded = {}) {
    try {
      const _0x44ab15 = {
        "token": this.token,
        "nb_app": "group",
        "nb_appversion": "12.9.203",
        "nb_channel": "common",
        "nb_ci": "30",
        "nb_location": "0_0",
        "nb_osversion": "16.1.2",
        "nb_platform": "iOS",
        "utmSource": "AppStore",
        "from": "mine_qianbaorukou_qianbao",
        "popWindowOldChain": "false"
      };
      const _0x320bbb = {
        "fn": "walletMainpage",
        "method": "post",
        "url": "https://npay.meituan.com/conch/walletV5/mainpage",
        "form": _0x44ab15
      };
      let {
          result: _0x27af34
        } = await this.request(_0x320bbb),
        _0x41fb56 = $.get(_0x27af34, "status", -1);
      if (_0x41fb56 == "success") {
        let _0xdf2dd1 = [];
        for (let _0x1bdb3b of _0x27af34?.["data"]?.["AssetArea"]?.["otherAssetAreaDTOList"] || []) {
          switch (_0x1bdb3b.title) {
            case "余额":
              _0xdf2dd1.push("钱包余额: " + (_0x1bdb3b?.["subTitle"] || 0) + "元");
              break;
            case "立减金":
              _0xdf2dd1.push("立减金: " + (_0x1bdb3b?.["subTitle"] || 0) + "元");
              break;
          }
        }
        if (_0xdf2dd1.length) {
          const _0x8fdbff = {
            "notify": true
          };
          this.log(_0xdf2dd1.join(", "), _0x8fdbff);
        }
      } else {
        let _0x2c193b = _0x27af34?.["error"]?.["message"] || "";
        this.log("查询钱包失败[" + _0x41fb56 + "]: " + _0x2c193b);
      }
    } catch (_0x36f4c8) {
      console.log(_0x36f4c8);
    }
  }
  async ["refTask"]() {
    if (!_0x191160?.["length"]) {
      return;
    }
    let _0x502a26 = _0x191160.sort(function () {
        return Math.random() - 0.5;
      }),
      _0x3da1d1 = _0x502a26.length,
      _0x22dc87 = Math.min(3, _0x3da1d1);
    _0x502a26 = _0x502a26.slice(0, _0x22dc87);
    for (let _0x2fd3a1 of _0x502a26) {
      await this.c_task(_0x2fd3a1);
    }
  }
  async ["batchfetchcomponentcouponV2"](_0x4a4c1c) {
    try {
      let {
        refIds: _0x3bae60,
        instanceId: _0x498f5e,
        gdPageId: _0x4d9c18,
        pageId: _0x3962ea
      } = _0x4a4c1c;
      const _0x4b04cd = {
        "cType": "wm_wxapp",
        "fpPlatform": 13,
        "wxOpenId": "",
        "appVersion": "12.9.206",
        "mtFingerprint": this.fp
      };
      let _0x244231 = {
          "couponReferIds": _0x3bae60.join(","),
          "geoType": 2,
          "actualLng": _0x1ad6e9,
          "actualLat": _0x122d4f,
          "isInDpEnv": 0,
          "gdPageId": _0x4d9c18,
          "pageId": _0x3962ea,
          "version": 1,
          "instanceId": _0x498f5e,
          "componentId": _0x498f5e,
          "utmSource": "",
          "utmCampaign": "",
          "needFetchedByUUID": 1
        },
        _0x6679a0 = new URL("https://promotion.waimai.meituan.com/lottery/couponcomponent/batchfetchcomponentcoupon/v2");
      for (let _0x49b961 in _0x244231) {
        _0x6679a0.searchParams.append(_0x49b961, _0x244231[_0x49b961]);
      }
      let {
        headers: _0x3fecbc
      } = await this.get_mtgsig(_0x6679a0.toString(), _0x4b04cd);
      const _0xc61fa5 = {
        "mtgsig": _0x3fecbc.mtgsig
      };
      const _0x561eb7 = {
        "fn": "batchfetchcomponentcouponV2",
        "method": "post",
        "url": _0x6679a0,
        "json": _0x4b04cd,
        "headers": _0xc61fa5
      };
      let {
        result: _0x2061d8
      } = await this.request(_0x561eb7);
      if (_0x2061d8?.["code"] == 0) {
        let _0x27d531 = _0x2061d8?.["data"]?.["filter"](_0x45a43a => _0x45a43a.code == 0)?.["map"](_0x395ab5 => "[" + _0x395ab5.data.couponName + "]" + (_0x395ab5.data.priceLimit || "无门槛") + "减" + _0x395ab5.data.couponValue);
        if (_0x27d531.length) {
          this.notify_coupon(_0x27d531);
        }
      } else {
        let _0x579b15 = _0x2061d8?.["msg"] || _0x2061d8?.["desc"] || "";
        this.log("集合领券失败: " + _0x579b15);
      }
    } catch (_0x341ac3) {
      console.log(_0x341ac3);
    }
  }
  async ["popupcomponent_popup"](_0x37c749, _0x26f176 = {}) {
    try {
      const _0x5df8a5 = {
        "recordId": _0x37c749,
        "geoType": 2
      };
      const _0x2f7084 = {
        "fn": "popupcomponent_popup",
        "method": "post",
        "url": "https://promotion.waimai.meituan.com/popupcomponent/popup",
        "form": _0x5df8a5
      };
      let {
          result: _0x2adb66
        } = await this.request(_0x2f7084),
        _0x3ebc3d = $.get(_0x2adb66, "code", -1);
      if (_0x3ebc3d == 0) {
        let _0x8a0ad = _0x2adb66?.["data"]?.["couponList"]?.["map"](_0x4b777e => _0x4b777e.couponValue ? "[" + (_0x4b777e?.["couponTitle"] || "") + "]" + (_0x4b777e?.["priceLimit"] || "无门槛") + "减" + (_0x4b777e?.["couponValue"] || "") : "")?.["filter"](_0x2a745d => _0x2a745d);
        const _0x19a75d = {
          "act": _0x37c749
        };
        this.notify_coupon(_0x8a0ad, "弹窗领券", _0x19a75d);
      } else {
        let _0xb73ca7 = _0x2adb66?.["msg"] || _0x2adb66?.["message"] || "";
        const _0x2693f8 = {
          "act": _0x37c749
        };
        this.log("弹窗领券失败[" + _0x3ebc3d + "]: " + _0xb73ca7, _0x2693f8);
      }
    } catch (_0x5eef5a) {
      console.log(_0x5eef5a);
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
    for (let _0xc4b8c6 of _0x38a976) {
      await this.popupcomponent_popup(_0xc4b8c6);
    }
    for (let _0x451fe3 of _0xac4efd) {
      await this.gundamGrabV4(_0x451fe3);
    }
    for (let _0x4fc8ea of _0x382386) {
      await this.batchfetchcomponentcouponV2(_0x4fc8ea);
    }
    for (let _0x5d0a73 of _0x185e8d) {
      await this.signupRecord(_0x5d0a73);
      await this.ttsqEntry(_0x5d0a73);
    }
    for (let _0x35f10d of _0x13e7b5) {
      await this.ttsqEntryLottery(_0x35f10d);
    }
  }
  async ["wxSqsqTask"]() {
    $.log("---------------- WX-社群神券 ----------------");
    for (let _0x1af099 of _0xca3d71) {
      await this.turntableDraw(_0x1af099);
    }
  }
  async ["wxSqSignTask"]() {
    $.log("---------------- WX-社群签到 ----------------");
    for (let _0x45acfb of _0x1a468c) {
      await this.clockInStatus(_0x45acfb);
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
    for (let _0x589f24 of _0x13a177) {
      $.log("============== " + _0x589f24.name + " ==============");
      if (_0x589f24.taskIdKeys.length > _0x5ea9a5) {
        const _0x34089b = {
          "cubePageId": _0x589f24.cubePageId,
          "taskIdKeys": []
        };
        for (let _0x247dfe of _0x589f24.taskIdKeys) {
          _0x34089b.taskIdKeys.push(_0x247dfe);
          _0x34089b.taskIdKeys.length >= _0x5ea9a5 && (await this.getUserTasks(_0x34089b), _0x34089b.taskIdKeys = []);
        }
        if (_0x34089b.taskIdKeys.length > 0) {
          await this.getUserTasks(_0x34089b);
        }
      } else {
        await this.getUserTasks(_0x589f24);
      }
    }
    await this.goldHomePage("9587270bb85c");
  }
  async ["notifyTask"]() {
    $.log("---------------- 汇总推送 ----------------");
    await this.walletMainpage();
  }
  async ["userTask"]() {
    const _0x20a108 = {
      "notify": true
    };
    $.log("\n---------------- 账号[" + this.index + "] ----------------", _0x20a108);
    if (!(await this.getLoginedUserInfo())) {
      return;
    }
    await this.refTask();
    await this.ttsqTask();
    await this.wxSqSignTask();
    await this.wxSqsqTask();
    _0x1ab535 && _0x1ab535 != "false" && (await this.appMrzqTask());
    _0x4186a1 && _0x4186a1 != "false" && (await this.appCyfTask());
    await this.notifyTask();
  }
}
!(async () => {
  if (!(await _0x42c427())) {
    return;
  }
  await _0x26a723();
  $.read_env(UserClass, ckNames, envSplitor);
  _0x24272f == "false" || !_0x24272f ? $.log("APP每日赚钱设置为: 不随机提现") : $.log("APP每日赚钱设置为: 每日随机提现");
  _0x1ab535 == "false" ? $.log("每日赚钱任务开关设置为: 关闭") : $.log("每日赚钱任务开关设置为: 开启");
  _0x4186a1 == "false" ? $.log("抽月符任务开关设置为: 关闭") : $.log("抽月符任务开关设置为: 开启");
  $.log("-------------------------------------");
  for (let _0xd035a7 of $.userList) {
    await _0xd035a7.userTask();
  }
})().catch(_0x29622a => $.log(_0x29622a)).finally(() => $.exitNow());
async function _0x42c427() {
  let _0x114d85 = false;
  try {
    const _0x25ee6e = {
      "fn": "auth",
      "method": "get",
      "url": _0x383c14
    };
    let {
      statusCode: _0x4e2cab,
      result: _0x4edf42
    } = await _0x51c3b8.request(_0x25ee6e);
    if (_0x4e2cab != 200) {
      return Promise.resolve();
    }
    if (_0x4edf42?.["code"] == 0) {
      _0x4edf42 = JSON.parse(_0x4edf42.data.file.data);
      /*if (_0x4edf42?.["commonNotify"] && _0x4edf42.commonNotify.length > 0) {
        const _0x1ab29c = {
          "notify": true
        };
        $.log(_0x4edf42.commonNotify.join("\n") + "\n", _0x1ab29c);
      }
      _0x4edf42?.["commonMsg"] && _0x4edf42.commonMsg.length > 0 && $.log(_0x4edf42.commonMsg.join("\n") + "\n");
      */
      if (_0x4edf42[_0x16ef55]) {
        let _0x467447 = _0x4edf42[_0x16ef55];
        _0x467447.status == 0 ? _0x248ef1 >= _0x467447.version ? (_0x114d85 = true, /*$.log(_0x467447.msg[_0x467447.status]), */$.log(_0x467447.updateMsg), $.log("现在运行的脚本版本是：" + _0x248ef1.toFixed(2) + "，最新脚本版本：" + _0x467447.latestVersion.toFixed(2))) : $.log(_0x467447.versionMsg) : $.log(_0x467447.msg[_0x467447.status]);
      } else {
        $.log(_0x4edf42.errorMsg);
      }
    }
  } catch (_0x372ef8) {
    $.log(_0x372ef8);
  } finally {
    return _0x114d85;
  }
}
async function _0x26a723() {
  let _0x541f16 = false;
  try {
    const _0x172276 = {
      "fn": "auth",
      "method": "get",
      "url": _0x208778
    };
    let {
      statusCode: _0x4cd832,
      result: _0x36b907
    } = await _0x51c3b8.request(_0x172276);
    if (_0x4cd832 != 200) {
      return Promise.resolve();
    }
    if (_0x36b907?.["code"] == 0) {
      _0x36b907 = JSON.parse(_0x36b907.data.file.data);
      //inviteCode = _0x36b907?.["inviteCode"] || inviteCode;
      for (let _0xe9f428 of _0x36b907?.["mrzqTaskId_all"] || []) {
        !_0x2876dc.includes(_0xe9f428) && _0x2876dc.push(_0xe9f428);
      }
      for (let _0x46e603 of _0x36b907?.["commonTaskConf"] || []) {
        _0x13a177.filter(_0x144011 => _0x144011.name == _0x46e603.name)?.["length"] == 0 && _0x13a177.push(_0x46e603);
      }
      if (_0x36b907?.["gundomConfV4"]?.["length"]) {
        _0xac4efd = _0x36b907.gundomConfV4;
      }
      if (_0x36b907?.["batchConf"]?.["length"]) {
        _0x382386 = _0x36b907.batchConf;
      }
      if (_0x36b907?.["pid_list"]?.["length"]) {
        _0x191160 = _0x36b907.pid_list;
      }
      for (let _0x4cc007 of _0x36b907?.["sqsqIdList"] || []) {
        !_0xca3d71.includes(_0x4cc007) && _0xca3d71.push(_0x4cc007);
      }
      for (let _0x12c437 of _0x36b907?.["sqSignIdList"] || []) {
        !_0x1a468c.includes(_0x12c437) && _0x1a468c.push(_0x12c437);
      }
      for (let _0x8733a6 of _0x36b907?.["ttsqSignIdList"] || []) {
        !_0x185e8d.includes(_0x8733a6) && _0x185e8d.push(_0x8733a6);
      }
    }
  } catch (_0x188cfe) {
    $.log(_0x188cfe);
  } finally {
    return _0x541f16;
  }
}