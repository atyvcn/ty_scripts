/*
美团 v3.15

美团V3仅支持青龙等nodejs环境, 不支持圈X
自动领券和完成一些活动任务
建议按推荐定时跑, 每天10点15点17点有券可以抽
默认运行每日赚钱, 抽月符
默认每日赚钱不随机提现

APP每日赚钱: 默认会每日自动随机, 要关闭随机提现的话设置变量 meituanAutoWithdraw 为 false
不想运行每日赚钱的, 设置变量 meituanMrzqTask 为 false: export meituanMrzqTask="false"
不想运行抽月符的, 设置变量 meituanCyfTask 为 false: export meituanCyfTask="false"

自行捉包把meituan.com里面的token(一般在请求头里)填到变量 meituanCookie 中, 多账号换行或&或@隔开
export meituanCookie="AgGZIgsYHyxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx#UUID(如需运行小团币)"

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
$.get = function (result, name, value = "") {
  let value1 = value;
  result?.["hasOwnProperty"](name) && (value1 = result[name]);
  return value1;
}
$.wait_gap_interval = async function (_0x58be0e, _0x285f22) {
  let _0x505076 = Date.now() - _0x58be0e;
  _0x505076 < _0x285f22 && (await this.wait(_0x285f22 - _0x505076));
}
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

const _0xb92163 = 15000,
  _0x53a3be = 3,
  _0x38c74a = process.env[envPrefix + "AutoWithdraw"] || "true",
  _0x1c88e4 = process.env[envPrefix + "MrzqTask"] || "true",
  _0x3e7b63 = process.env[envPrefix + "CyfTask"] || "true",
  _0x1cb1a0 = process.env[envPrefix + "AppUuid"] || "";
const _0x2b198e = false,
  _0x280ab6 = 3.15,
  _0x319c9a = "meituan",
  _0x4d8340 = "https://leafxcy.coding.net/api/user/leafxcy/project/validcode/shared-depot/validCode/git/blob/master/code.json",
  _0x49cb2e = "https://leafxcy.coding.net/api/user/leafxcy/project/validcode/shared-depot/validCode/git/blob/master/" + _0x319c9a + ".json",
  _0x219032 = "Mozilla/5.0 (iPhone; CPU iPhone OS 16_1_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.33(0x18002129) NetType/WIFI Language/zh_CN",
  _0x1c524f = "wxde8ac0a21135c07d",
  _0x3f05c7 = "1399386702",
  _0x4b36dc = "2.30.3",
  _0x3e6049 = "iphone",
  _0x5f51ac = "AwQAAABJAgAAAAEAAAAyAAAAPLgC95WH3MyqngAoyM/hf1hEoKrGdo0pJ5DI44e1wGF9AT3PH7Wes03actC2n/GVnwfURonD78PewMUppAAAADgCEZv2akitiLnGkQIH6r67N1V9EUFpKyBOQRSRKpv9Awnm6LwnygipNjcIwXXJZEv5ddnUSW8vZQ==",
  _0x1de3b8 = "0123456789",
  _0x2818e7 = "qwertyuiopasdfghjklzxcvbnm",
  _0x25ef5e = _0x1de3b8 + _0x2818e7 + _0x2818e7.toUpperCase();
let _0xd0a5d9 = "114.07" + $.randomString(12, _0x1de3b8),
  _0x47e694 = "22.52" + $.randomString(13, _0x1de3b8),
  inviteCode = "NnOIp-QOs8SiYF1dcSlL5r8phPrCf6qkH7evMyjIoureqol0OXXaopfjjblE0yPge-nmlRKIDEgmTxF7oaoA4OfQjhGdF522KA_poICzK21VFORrK_ggku9ewgI6-qR5VCf7Blcp0wY6_CtAKvFkqFYXG42pu_6MtY7K6RDMjic",
  inviteCode2 = "NnOIp-QOs8SiYF1dcSlL5r8phPrCf6qkH7evMyjIoureqol0OXXaopfjjblE0yPgFQmJJWVFWc4CivexLwFRdcbcHaALd6__chOQeI55cEbhOmMc4oO8cWhZxYuQm9DsSt1nfKeLK2Rz8ExgU4PovBpOFx_LiHkpyxZNebiIkCE",
  _0x272f72 = [],
  _0x41f50b = [];
const _0x4fa0fe = 600,
  _0x3d99c6 = 10,
  _0x301085 = ["1005", "1007"];
let _0x34548b = ["631682c504", "bb88750009", "9f90f45850", "90e9ecbe6a", "b6bfd8c1bc", "d4caf84940", "8decbc4c98", "c6026478e4", "4353a111e9", "7ceb1c14a7", "89515f0102", "63bec5af07", "1c8df37ffe", "36eedbe86c", "6ab415d70c", "3c309c7f26", "66c2938e1d", "3497a4fd05", "7f1f7ec5a4", "2fb53287b2", "2b0ada0dd7", "495070b239", "176f400a8f", "672129ff6d", "a479497fa6", "97ea404b56", "320ffa53e7", "6ccbda387f", "6f2d5f144f", "563983d5f1", "6f70050a62", "dfd9c44d7f", "6d5461c6dd", "a7331f5c94", "8d3891bef9", "eb6094dcaa", "11c95cc416", "351c3f4810", "67bd2e0988", "cdb75f714d", "3a6eba11a1", "76f9dc2980", "30644bcb35", "d1a1d62e6c", "8af63652ba", "075eb403be", "361ba45eff", "cfbb835838", "e26f305436", "ed33f82fa9", "e36bae3f8f", "6696ff7825", "b7719de06c", "2ab24bbc57", "2d98ddf8ac", "406fb78bfd", "9b84c4503a", "55ce3f059d", "cd06f8210b", "f6706f9b33", "34a718f16a", "f5e2218b18", "c7f6a889ff", "2583c8ba46", "45e325543c", "a162c96304"],
  _0x1887b5 = ["G_2Eu_n12fvbBgf3gBd2-A", "b24pg8jaFTeNadCXq0lb3A", "yLm-IynkBUQLt09kALFv8Q", "7e0uxWtGCDCGrdVeh2DPfQ", "Ox5_0TfqOg6b3UfkKS3rUg", "1THsbmQsYTIbi5N066B1zg", "TADnCANwheP5AKOjx3NpgA"],
  _0x1811a2 = ["06hFC-C1WGiAQYUGya5QJA", "5IFmI13NeO7kRPW1jUj7Lw", "ySJ2HpgexeI0TJcLkA_5Ug"],
  _0x4b210e = ["rYaVHgLhYkvfvSMJFZjksA", "qokyKSW-MmD4P221MPDomg"],
  _0x34fede = ["cFMKbjPquEndkr9Fe64vqQ", "ZCSW0XVhcm3NZ8yeoGXeaA", "KXGjpKrk2h_43vUrIKbzDA", "l3emawQka8JjlE6LMyYT3g", "r9348AwSwnwP715csHvDqw", "XVsZc3p1O1jd-uTG4EjyXw", "9khEyiqt2tKFyZSjvqphkQ", "_p2QL78Fao6bsexHzofp-w", "jXL-9iEaRTsv-FZdpX4Z4g"],
  _0x343738 = ["WdtEnEpZZScQjcZdnOMyRw", "oJz0wfDiwwnDN3oHgwmMcA"],
  _0xfb5652 = [];
const _0x171e85 = {
  name: "APP-天天领金币",
  cubePageId: 184008,
  taskIdKeys: ["e8e72a2c8d", "ea69bee3c0", "129328922f", "15b494e7bc", "d36be8140b", "77c78d45cc"]
};
const _0x31939d = {
  name: "APP-每日赚钱",
  cubePageId: 10000003,
  taskIdKeys: ["b6e6e96128", "710d92816e", "fc43b223be"]
};
const _0x3fb3dc = {
  name: "WX-每日赚钱",
  cubePageId: 184008,
  taskIdKeys: ["1fff834702"]
};
const _0x43cc92 = {
  name: "APP-团团神券-魔法石",
  cubePageId: 88888889,
  taskIdKeys: ["a941c20450", "cdcc8a8195", "eb03206b17", "5c919dfbd8", "8f53427c39", "f749a47257", "4d609dde67", "3e5cbc8120", "532e764346", "7613d02997"]
};
const _0x7b6fac = {
  name: "WX-天天赚钱",
  cubePageId: 123,
  taskIdKeys: _0x34548b
};
const _0x43522d = [_0x171e85, _0x31939d, _0x3fb3dc, _0x43cc92, _0x7b6fac],
  _0x5961aa = {
    NORMAL_CARD: "普通卡",
    SENIOR_CARD: "稀有卡"
  };
const _0xba5a5e = {
  EAT: "吃",
  LIVE: "住",
  WALK: "行",
  TRAVEL: "游",
  SHOP: "购",
  ENTERTAIN: "娱"
};
const _0x10559c = ["I5r2SYd5kTN1l1AkMhwCNA"],
  _0x5a7fc9 = [15169, 15170, 15171, 15172, 15173];
let _0x4fbf00 = [];

class _0x177fac {
  constructor() {
    this.index = $.userIdx++;
    this.name = "";
    this.valid = false;
    const _0x48b6d2 = {
      limit: 0
    };
    const _0x28949c = {
      Connection: "keep-alive"
    };
    const _0x3b86d7 = {
      retry: _0x48b6d2,
      timeout: _0xb92163,
      followRedirect: false,
      headers: _0x28949c
    };
    this.got = got.extend(_0x3b86d7);
  }
  log(_0x5dd9fe, _0x59557b = {}) {
    var _0x3e2a94 = "",
      _0x42b111 = $.userCount.toString().length;
    if (this.index) {
      _0x3e2a94 += "账号[" + $.padStr(this.index, _0x42b111) + "]";
    }
    if (this.name) {
      _0x3e2a94 += "[" + this.name + "]";
    }
    $.log(_0x3e2a94 + _0x5dd9fe, _0x59557b);
  }
  async request(_0x122845) {
    const _0x3ea439 = ["ECONNRESET", "EADDRINUSE", "ENOTFOUND", "EAI_AGAIN"],
      _0xc816ae = ["TimeoutError"];
    var _0x5be326 = null,
      _0x1d6cbd = 0,
      _0x161383 = _0x122845.fn || _0x122845.url;
    _0x122845.method = _0x122845?.["method"]?.["toUpperCase"]() || "GET";
    let _0x36e7da;
    while (_0x1d6cbd < _0x53a3be) {
      try {
        _0x1d6cbd++;
        _0x36e7da = null;
        let _0x279219 = null,
          _0x1d5037 = _0x122845?.["timeout"] || this.got?.["defaults"]?.["options"]?.["timeout"]?.["request"] || _0xb92163,
          _0x4daf79 = false;
        await new Promise(async _0x2f814e => {
          setTimeout(() => {
            _0x4daf79 = true;
            _0x2f814e();
          }, _0x1d5037);
          await this.got(_0x122845).then(_0x11c903 => {
            _0x5be326 = _0x11c903;
          }, _0x215350 => {
            _0x279219 = _0x215350;
            _0x5be326 = _0x215350.response;
            _0x36e7da = _0x279219?.["code"];
          });
          _0x2f814e();
        });
        if (_0x4daf79) {
          this.log("[" + _0x161383 + "]请求超时(" + _0x1d5037 / 1000 + "秒)，重试第" + _0x1d6cbd + "次");
        } else {
          if (_0xc816ae.includes(_0x279219?.["name"])) {
            this.log("[" + _0x161383 + "]请求超时(" + _0x279219.code + ")，重试第" + _0x1d6cbd + "次");
          } else {
            if (_0x3ea439.includes(_0x279219?.["code"])) {
              this.log("[" + _0x161383 + "]请求错误(" + _0x279219.code + ")，重试第" + _0x1d6cbd + "次");
            } else {
              let _0x7fa63 = _0x5be326?.["statusCode"] || 999,
                _0x536915 = _0x7fa63 / 100 | 0;
              if (_0x536915 > 3) {
                this.log("请求[" + _0x161383 + "]返回[" + _0x7fa63 + "]");
              }
              if (_0x536915 <= 4) {
                break;
              }
            }
          }
        }
      } catch (_0x242e8a) {
        _0x242e8a.name == "TimeoutError" ? this.log("[" + _0x161383 + "]请求超时，重试第" + _0x1d6cbd + "次") : this.log("[" + _0x161383 + "]请求错误(" + _0x242e8a.message + ")，重试第" + _0x1d6cbd + "次");
      }
    }
    const _0x2e6ed9 = {
      statusCode: _0x36e7da || -1,
      headers: null,
      result: null
    };
    if (_0x5be326 == null) {
      return Promise.resolve(_0x2e6ed9);
    }
    let {
      statusCode: _0x2710cf,
      headers: _0x2a0a01,
      body: _0x1e9f01
    } = _0x5be326;
    if (_0x1e9f01) {
      try {
        _0x1e9f01 = JSON.parse(_0x1e9f01);
      } catch {}
    }
    const _0x43fc25 = {
      statusCode: _0x2710cf,
      headers: _0x2a0a01,
      result: _0x1e9f01
    };
    return Promise.resolve(_0x43fc25);
  }
}
let _0x2397a8 = new _0x177fac();
class UserClass extends _0x177fac {
  constructor(ck) {
    super();
    Object.assign(this, $.CkToJson(ck));
    //this.specified_app_uuid
    this.t_earnDaily = 0;
    this.init_xtb_coin = 0;
    this.xtb_coin = 0;
    this.run_xtb = false;
    this.uuid = $.randomPattern("186ebxxxxxxxx-22e49fxxxxxxxx-0-0-186ebxxxxxxxx");
    this.app_uuid = "00000000000009CA00" + $.randomString(46).toUpperCase();
    this.openid = $.randomString(7, _0x25ef5e) + "-" + $.randomString(20, _0x25ef5e);
    this.cookie = "token=" + this.token + "; mt_c_token=" + this.token + "; openid=" + this.openid + ";";
    this.valid_fp = false;
    this.fp = "H5dfp_1.8.2_tttt_CziTmz1LjARvHzKKzoDtmdBgc6Df5b+sgrXDtVBPjiCayshtLKt1gh8PjGGT";
    //MTS && (this.h5guard = new MTS(this.cookie, _0x219032));
    MTS && (this.h5guard = MTS);
    this.got = this.got.extend({
      headers: {
        "User-Agent": _0x219032,
        token: this.token,
        mtoken: this.token,
        openid: this.openid,
        uuid: this.uuid,
        "M-APPKEY": "wxmp_mt-weapp",
        clientversion: _0x4b36dc,
        utm_medium: _0x3e6049,
        openIdCipher: _0x5f51ac,
        cookie: this.cookie
      }
    });
  }
  notify_coupon(_0x45cc88, _0x65644e = "领券", _0x5c4bd5 = {}) {
    const _0x2fe03a = {
      notify: true
    };
    let _0x11eabc = Object.assign(_0x2fe03a, _0x5c4bd5);
    for (let _0xa5fc60 of _0x45cc88) {
      this.log(_0x65644e + ": " + _0xa5fc60, _0x11eabc);
    }
  }
  async get_mtgsig(url, data) {
    const _0x366069 = {
      a1: "1.1",
      a2: 1700365130585,
      a3: "1vyxz7555u245u5x11v5790z818348w9813323332u797958u759zuy9",
      a5: "6feqh9xQjtiJ3UHNHIFs",
      a6: "hs1.4a4gsvX1s4RLQYqBR3sFhAetGq48eVYBW6Cn/alJLXhKJmvseSxVGkCW67PIGmh1ll21TL1+x/WxxCGvlTdlaUpb5NxEMCD7bPltS8KSHdzc=",
      x0: 4,
      d1: "b6d3aab11db3c6cd661a8221ab606c78"
    };
    let _0x4f779c = {
      headers: {
        mtgsig: JSON.stringify(_0x366069)
      }
    };
    if (this.h5guard) {
      //_0x4f779c = await this.h5guard.sign(url, data);
      Req=MTS.callMtgsig({
        "url": url,
        "method": "POST",
        "headers": this.got.defaults.options.headers,
        'data': data
      })
    }
    return _0x4f779c;
  }
  async getfp(_0x23a63c = false) {
    if (!this.valid_fp) {
      if (this.h5guard && _0x23a63c) {
        //this.fp = this.h5guard.getfp();
        this.fp = MTS.mtFingerprint();
        this.valid_fp = true;
      }
    }
    return this.fp;
  }
  async get_app_riskForm(_0x51f12a = false) {
    let _0x57f027 = await this.getfp(_0x51f12a);
    const _0x5b2959 = {
      ip: "",
      fingerprint: _0x57f027,
      cityId: "30",
      platform: 5,
      app: 0,
      version: "12.8.202",
      uuid: ""
    };
    return _0x5b2959;
  }
  async get_riskParams(_0x2cadff = true) {
    let _0x7c4f8c = await this.getfp(_0x2cadff);
    const _0x2b192d = {
      uuid: this.specified_app_uuid || _0x1cb1a0 || this.app_uuid,
      platform: 5,
      fingerprint: _0x7c4f8c,
      version: "12.15.404",
      app: 0,
      cityid: "30"
    };
    return _0x2b192d;
  }
  async get_riskForm(_0x47a730 = false) {
    let _0x185900 = await this.getfp(_0x47a730);
    const _0xfdbee5 = {
      openid: this.openid,
      appid: _0x1c524f,
      mchid: _0x3f05c7
    };
    let _0x13f713 = {
      uuid: this.uuid,
      userid: this.userId,
      openid: this.openid,
      expoId: _0x5f51ac,
      ip: "",
      partner: 0,
      wxRiskLevel: JSON.stringify(_0xfdbee5),
      platform: 13,
      appletsFingerprint: _0x185900,
      wechatFingerprint: _0x185900
    };
    return _0x13f713;
  }
  async encode_riskForm(_0x48a5dd = false) {
    let _0xc4672c = await this.get_riskForm(_0x48a5dd);
    return base64_encode(JSON.stringify(_0xc4672c));
  }
  async getLoginedUserInfo(_0x42c975 = {}) {
    let _0xb6eeab = false;
    try {
      const _0x23d7f5 = {
        token: this.token
      };
      const _0x28f826 = {
        fn: "getLoginedUserInfo",
        method: "get",
        url: "https://i.meituan.com/wrapapi/getLoginedUserInfo",
        searchParams: _0x23d7f5
      };
      let {
        result: _0x1dbce0
      } = await this.request(_0x28f826);
      if (_0x1dbce0?.["mobile"]) {
        _0xb6eeab = true;
        this.valid = true;
        this.name = _0x1dbce0.nickName;
        this.userId = Number(_0x1dbce0.userId);
        this.log("登录成功");
      } else {
          this.log("获取账号信息失败, ck可能失效");//, {"notify": true}
          await expireNotify(this.userId, this.index);
      }
    } catch (_0xcb8d47) {
      console.log(_0xcb8d47);
    } finally {
      return _0xb6eeab;
    }
  }
  async inviteFetchcoupon(_0x4ce9a0 = {}) {
    try {
      const _0x37bc53 = {
        fn: "inviteFetchcoupon",
        method: "get",
        url: "https://promotion-waimai.meituan.com/invite/fetchcoupon",
        searchParams: {}
      };
      _0x37bc53.searchParams.ctype = "wxapp";
      _0x37bc53.searchParams.fpPlatform = 13;
      _0x37bc53.searchParams.isMini = 1;
      _0x37bc53.searchParams.token = this.token;
      _0x37bc53.searchParams.inviteCode = this.name!="nyqty" ? inviteCode :  inviteCode2;
      let {
          result: _0x2d9ce8
        } = await this.request(_0x37bc53),
        _0x12c423 = $.get(_0x2d9ce8, "code", -1),
        _0x345d80 = $.get(_0x2d9ce8, "subcode", -1);
      if ((_0x12c423 == 0 || _0x12c423 == 1) && (_0x345d80 == 0 || _0x345d80 == 2)) {
        let _0x36c11f = _0x2d9ce8?.["data"]?.["couponList"]?.["map"](_0x38463e => "[" + _0x38463e.couponTitle + "]" + (_0x38463e.priceLimit || "无门槛") + "减" + _0x38463e.couponValue);
        this.notify_coupon(_0x36c11f);
      } else {
        let _0x473529 = _0x2d9ce8?.["msg"] || _0x2d9ce8?.["message"] || "";
        this.log("领券失败[" + _0x12c423 + "]: " + _0x473529);
      }
    } catch (_0x3eed75) {
      console.log(_0x3eed75);
    }
  }
  async gundamGrabV4(_0x5d7dac, _0xf185c1 = {}) {
    try {
      const _0x4d8c71 = {
        fn: "gundamGrabV4",
        method: "post",
        url: "https://mediacps.meituan.com/gundam/gundamGrabV4",
        json: _0x5d7dac,
        headers: {}
      };
      _0x4d8c71.headers.Origin = "https://market.waimai.meituan.com";
      _0x4d8c71.headers.Referer = "https://market.waimai.meituan.com/";
      let {
          result: _0x4cc9e5
        } = await this.request(_0x4d8c71),
        _0x56878d = $.get(_0x4cc9e5, "code", -1);
      if (_0x56878d == 0) {
        let _0x2e5ed2 = _0x4cc9e5?.["data"]?.["allCoupons"]?.["map"](_0x182601 => "[" + _0x182601.couponName + "]" + (_0x182601.amountLimit || "无门槛") + "减" + _0x182601.couponAmount);
        this.notify_coupon(_0x2e5ed2);
      } else {
        let _0x4eca4 = _0x4cc9e5?.["msg"] || _0x4cc9e5?.["message"] || "";
        this.log("领券失败[" + _0x56878d + "]: " + _0x4eca4);
      }
    } catch (_0x1719a5) {
      console.log(_0x1719a5);
    }
  }
  async turntableInfo(_0x4fea63, _0x50a35f = {}) {
    try {
      let _0x405e1d = {
          fn: "turntableInfo",
          method: "get",
          url: "https://promotion.waimai.meituan.com/lottery/turntable/info",
          searchParams: {
            activityViewId: _0x4fea63,
            gdPageId: $.get(_0x50a35f, "gdPageId", "0"),
            instanceId: $.get(_0x50a35f, "instanceId", ""),
            appType: 0,
            deviceType: 2,
            token: this.token,
            userId: this.userId,
            uuid: this.uuid
          }
        },
        {
          result: _0x368992
        } = await this.request(_0x405e1d),
        _0x39399f = $.get(_0x368992, "code", -1);
      if (_0x39399f == 0) {
        let {
          canDrawCount: _0x58f08b,
          drawStatus: _0x5043e7
        } = _0x368992?.["data"];
        if (_0x5043e7 == 1) {
          const _0x2b1f69 = {
            act: _0x4fea63
          };
          this.log("社群抽奖可以抽" + _0x58f08b + "次", _0x2b1f69);
          while (_0x58f08b-- > 0) {
            await this.turntableDraw(_0x4fea63, _0x50a35f);
          }
        } else {
          const _0x2acf85 = {
            act: _0x4fea63
          };
          this.log("社群抽奖没有抽奖次数或未到时间", _0x2acf85);
        }
      } else {
        let _0x1a4458 = _0x368992?.["msg"] || _0x368992?.["message"] || "";
        const _0x8343ba = {
          act: _0x4fea63
        };
        this.log("查询社群抽奖次数失败[" + _0x39399f + "]: " + _0x1a4458, _0x8343ba);
      }
    } catch (_0x1a413b) {
      console.log(_0x1a413b);
    }
  }
  async turntableDraw(_0x991705, _0x490de3 = {}) {
    try {
      let _0xf1a40f = {
          fn: "turntableDraw",
          method: "post",
          url: "https://promotion.waimai.meituan.com/lottery/turntable/draw",
          searchParams: {
            actualLat: _0x47e694,
            actualLng: _0xd0a5d9,
            initialLat: _0x47e694,
            initialLng: _0xd0a5d9,
            cType: $.get(_0x490de3, "cType", "wm_wxapp"),
            wm_appversion: $.get(_0x490de3, "wm_appversion", "9.19.6"),
            gdPageId: $.get(_0x490de3, "gdPageId", "460584"),
            token: this.token,
            userId: this.userId,
            uuid: this.uuid
          },
          json: {
            activityViewId: _0x991705,
            appType: 0,
            deviceType: 2,
            wxOpenId: this.openid,
            fpPlatform: 5,
            mtFingerprint: ""
          }
        },
        {
          result: _0x275406
        } = await this.request(_0xf1a40f),
        _0x3db113 = $.get(_0x275406, "code", -1);
      if (_0x3db113 == 0) {
        let _0x4c0c0f = [];
        for (let _0xa47cf6 of _0x275406?.["data"]?.["awards"]) {
          _0xa47cf6.couponType == 1 ? _0x4c0c0f.push("[" + _0xa47cf6.name + "]" + (_0xa47cf6.orderAmountLimit || "无门槛") + "减" + _0xa47cf6.amount) : _0x4c0c0f.push(_0xa47cf6.desc);
        }
        const _0x41df92 = {
          act: _0x991705
        };
        this.notify_coupon(_0x4c0c0f, "社群抽奖", _0x41df92);
      } else {
        let _0x281f86 = _0x275406?.["msg"] || _0x275406?.["message"] || "";
        if (!_0x281f86?.["includes"]("系统异常") && !_0x281f86?.["includes"]("可抽奖次数不足") || _0x2b198e) {
          const _0x21bd64 = {
            act: _0x991705
          };
          this.log("社群抽奖失败[" + _0x3db113 + "]: " + _0x281f86, _0x21bd64);
        }
      }
    } catch (_0x52778e) {
      console.log(_0x52778e);
    }
  }
  async signupRecord(_0x294f1a, _0x38c84b = {}) {
    try {
      let _0x325898 = {
          fn: "signupRecord",
          method: "get",
          url: "https://promotion.waimai.meituan.com/playcenter/common/v1/treasurebox/signup/circle/record",
          searchParams: {
            activityViewId: _0x294f1a,
            isInDpEnv: 0,
            isMini: 1,
            cType: $.get(_0x38c84b, "cType", "wm_wxapp")
          }
        },
        {
          result: _0x543162
        } = await this.request(_0x325898),
        _0x34b5b9 = $.get(_0x543162, "code", -1);
      if (_0x34b5b9 == 0) {
        const _0x1d9bad = {
          act: _0x294f1a
        };
        this.log("已连续签到" + (_0x543162?.["data"]?.["signUpNum"] || 0) + "天", _0x1d9bad);
        for (let _0x332f45 of _0x543162?.["data"]?.["rewardStatus"]?.["filter"](_0x224581 => _0x224581.status == 1)) {
          await this.signupGetBox(_0x294f1a, _0x332f45.stageDayNum);
        }
      } else {
        let _0xdd2e35 = _0x543162?.["msg"] || _0x543162?.["message"] || "";
        if (!_0xdd2e35?.["includes"]("活动失效") || _0x2b198e) {
          const _0x3ee4f1 = {
            act: _0x294f1a
          };
          this.log("查询签到失败[" + _0x34b5b9 + "]: " + _0xdd2e35, _0x3ee4f1);
        }
      }
    } catch (_0x113e6e) {
      console.log(_0x113e6e);
    }
  }
  async signupGetBox(_0x57f14a, _0x135657, _0x2f7024 = {}) {
    try {
      const _0x14f7c6 = {
        signUpDayNum: _0x135657
      };
      let _0x9fd88e = {
          fn: "signupGetBox",
          method: "post",
          url: "https://promotion.waimai.meituan.com/playcenter/common/v1/treasurebox/signup/stage/reward/get",
          searchParams: {
            isInDpEnv: 0,
            isMini: 1,
            cType: $.get(_0x2f7024, "cType", "wm_wxapp")
          },
          json: {
            activityViewId: _0x57f14a,
            actionCode: 1000,
            lat: _0x47e694,
            lng: _0xd0a5d9,
            fpPlatform: 13,
            bizParams: JSON.stringify(_0x14f7c6),
            utmSource: "",
            utmCampaign: "",
            gdId: 421412,
            codeVersion: 1,
            mtFingerprint: ""
          }
        },
        {
          result: _0x8a996a
        } = await this.request(_0x9fd88e),
        _0x372e91 = $.get(_0x8a996a, "code", -1);
      if (_0x372e91 == 0) {
        let _0x2fb648 = _0x8a996a?.["data"]?.["prizeInfoList"]?.["map"](_0x3de294 => "[" + _0x3de294.couponInfo.couponTitle + "]" + (_0x3de294.couponInfo.priceLimit || "无门槛") + "减" + _0x3de294.couponInfo.couponValue);
        const _0x10598b = {
          act: _0x57f14a
        };
        this.notify_coupon(_0x2fb648, "开签到宝箱", _0x10598b);
      } else {
        let _0x927fb1 = _0x8a996a?.["msg"] || _0x8a996a?.["message"] || "";
        if (!_0x927fb1?.["includes"]("预发失败") && !_0x927fb1?.["includes"]("动作不满足执行条件") && !_0x927fb1?.["includes"]("发奖失败") || _0x2b198e) {
          const _0x3ed5fd = {
            act: _0x57f14a
          };
          this.log("开签到宝箱失败[" + _0x372e91 + "]: " + _0x927fb1, _0x3ed5fd);
        }
      }
    } catch (_0x4dda97) {
      console.log(_0x4dda97);
    }
  }
  async ttsqEntry(_0x29bdde, _0x33e44e = {}) {
    try {
      const _0x47bf5a = {
        activityViewId: _0x29bdde,
        actionCodes: 1000,
        querySignupConfig: 1,
        lat: _0x47e694,
        lng: _0xd0a5d9
      };
      const _0x33edf4 = {
        fn: "signupRecord",
        method: "get",
        url: "https://promotion.waimai.meituan.com/playcenter/common/v1/entry",
        searchParams: _0x47bf5a
      };
      let {
          result: _0x25f7db
        } = await this.request(_0x33edf4),
        _0x5d00d8 = $.get(_0x25f7db, "code", -1);
      if (_0x5d00d8 == 0) {
        if (_0x25f7db.data.actionInfoList) {
          for (let _0x3ff605 of _0x25f7db.data.actionInfoList) {
            await this.ttsqDoAction(_0x29bdde, _0x3ff605.actionCode || 1000);
          }
        }
      } else {
        let _0x536f12 = _0x25f7db?.["msg"] || _0x25f7db?.["message"] || "";
        const _0x48ec2a = {
          act: _0x29bdde
        };
        this.log("查询天天神券宝箱失败[" + _0x5d00d8 + "]: " + _0x536f12, _0x48ec2a);
      }
    } catch (_0x49154b) {
      console.log(_0x49154b);
    }
  }
  async ttsqDoAction(_0x324109, _0x530c51, _0x9225ec = {}) {
    try {
      let _0x495f9c = {
          fn: "ttsqDoAction",
          method: "post",
          url: "https://promotion.waimai.meituan.com/playcenter/common/v1/doaction",
          json: {
            activityViewId: _0x324109,
            actionCode: parseInt(_0x530c51 || 1000),
            lat: _0x47e694,
            lng: _0xd0a5d9,
            gdId: 26403,
            fpPlatform: 13,
            utmSource: "",
            utmCampaign: "",
            mtFingerprint: ""
          }
        },
        {
          result: _0x5d13b9
        } = await this.request(_0x495f9c),
        _0x2a04b5 = $.get(_0x5d13b9, "code", -1);
      if (_0x2a04b5 == 0) {
        let _0x230744 = _0x5d13b9?.["data"]?.["prizeInfoList"]?.["map"](_0x2f4a42 => _0x2f4a42.awardType >= 0 ? "[" + _0x2f4a42.couponInfo.couponTitle + "]" + (_0x2f4a42.couponInfo.priceLimit || "无门槛") + "减" + _0x2f4a42.couponInfo.couponValue : "")?.["filter"](_0x51ae34 => _0x51ae34);
        const _0x4abc4f = {
          act: _0x324109
        };
        this.notify_coupon(_0x230744, "开天天神券宝箱", _0x4abc4f);
      } else {
        let _0x129870 = _0x5d13b9?.["msg"] || _0x5d13b9?.["message"] || "";
        if (!_0x129870?.["includes"]("预发失败") && !_0x129870?.["includes"]("动作不满足执行条件") && !_0x129870?.["includes"]("发奖失败") || _0x2b198e) {
          const _0x4ea118 = {
            act: _0x324109
          };
          this.log("开天天神券宝箱失败[" + _0x2a04b5 + "]: " + _0x129870, _0x4ea118);
        }
      }
    } catch (_0x512268) {
      console.log(_0x512268);
    }
  }
  async ttsqEntryLottery(_0x327b30, _0x5efa06 = {}) {
    try {
      const _0x582f3d = {
        fn: "signupRecord",
        method: "get",
        url: "https://promotion.waimai.meituan.com/playcenter/common/v1/entry",
        searchParams: {}
      };
      _0x582f3d.searchParams.isMini = 1;
      _0x582f3d.searchParams.ctype = "wm_wxapp";
      _0x582f3d.searchParams.isInDpEnv = 0;
      _0x582f3d.searchParams.activityViewId = _0x327b30;
      _0x582f3d.searchParams.actionCodes = 1001;
      _0x582f3d.searchParams.lat = _0x47e694;
      _0x582f3d.searchParams.lng = _0xd0a5d9;
      let {
          result: _0x36abc8
        } = await this.request(_0x582f3d),
        _0x411d53 = $.get(_0x36abc8, "code", -1);
      if (_0x411d53 == 0) {
        if (_0x36abc8.data.actionInfoList) {
          for (let _0x368e12 of _0x36abc8.data.actionInfoList) {
            await this.ttsqDoActionLottery(_0x327b30, _0x368e12.actionCode || 1001);
          }
        }
      } else {
        let _0x2a2126 = _0x36abc8?.["msg"] || _0x36abc8?.["message"] || "";
        const _0x50a373 = {
          act: _0x327b30
        };
        this.log("查询天天神券抽奖失败[" + _0x411d53 + "]: " + _0x2a2126, _0x50a373);
      }
    } catch (_0x45028d) {
      console.log(_0x45028d);
    }
  }
  async ttsqDoActionLottery(_0x813aac, _0x135ede, _0xfc8559 = {}) {
    try {
      let _0x272764 = {
          fn: "ttsqDoAction",
          method: "post",
          url: "https://promotion.waimai.meituan.com/playcenter/common/v1/doaction",
          json: {
            activityViewId: _0x813aac,
            actionCode: parseInt(_0x135ede || 1001),
            lat: _0x47e694,
            lng: _0xd0a5d9,
            gdId: 436181,
            instanceId: "16703954295670.59854316222808620"
          }
        },
        {
          result: _0x1c6a3b
        } = await this.request(_0x272764),
        _0x5a664c = $.get(_0x1c6a3b, "code", -1);
      if (_0x5a664c == 0) {
        let _0x4b5a44 = _0x1c6a3b?.["data"]?.["prizeInfoList"]?.["map"](_0x41f9ba => _0x41f9ba.awardType >= 0 ? "[" + (_0x41f9ba?.["couponInfo"]?.["couponTitle"] || "") + "]" + (_0x41f9ba?.["couponInfo"]?.["priceLimit"] || "无门槛") + "减" + (_0x41f9ba?.["couponInfo"]?.["couponValue"] || "") : "")?.["filter"](_0xddac68 => _0xddac68);
        const _0x595a72 = {
          act: _0x813aac
        };
        this.notify_coupon(_0x4b5a44, "天天神券抽奖", _0x595a72);
      } else {
        let _0x4e58f1 = _0x1c6a3b?.["msg"] || _0x1c6a3b?.["message"] || "";
        if (!_0x4e58f1?.["includes"]("预发失败") && !_0x4e58f1?.["includes"]("动作不满足执行条件") && !_0x4e58f1?.["includes"]("发奖失败") || _0x2b198e) {
          const _0x4962b9 = {
            act: _0x813aac
          };
          this.log("天天神券抽奖失败[" + _0x5a664c + "]: " + _0x4e58f1, _0x4962b9);
        }
      }
    } catch (_0x40a86d) {
      console.log(_0x40a86d);
    }
  }
  async clockInStatus(_0x54c3db, _0x32d4f8 = {}) {
    try {
      let _0x42fb28 = {
          fn: "clockInStatus",
          method: "get",
          url: "https://promotion.waimai.meituan.com/playcenter/common/v1/clock-in/status",
          searchParams: {
            activityViewId: _0x54c3db,
            ctype: $.get(_0x32d4f8, "ctype", "wm_wxapp"),
            isInDpEnv: 0
          }
        },
        {
          result: _0x263a2a
        } = await this.request(_0x42fb28),
        _0x16d2f5 = $.get(_0x263a2a, "code", -1);
      if (_0x16d2f5 == 0) {
        let _0x17be59 = new Date().getDay();
        for (let _0xae1b3b of _0x263a2a.data.clockInStatus) {
          if (_0xae1b3b.dayOfWeek % 7 == _0x17be59) {
            const _0x1591ee = {
              act: _0x54c3db
            };
            this.log("今天社群" + (_0xae1b3b.status ? "已" : "未") + "签到, 本周已签到" + _0x263a2a.data.clockInNum + "天", _0x1591ee);
            if (!_0xae1b3b.status) {
              await this.clockInSign(_0x54c3db);
            }
            break;
          }
        }
        _0x263a2a.data.lotteryStatus == 1 && (await this.ttsqDoAction(_0x54c3db, 1001));
      } else {
        let _0x96667e = _0x263a2a?.["msg"] || _0x263a2a?.["message"] || "";
        const _0x402fe1 = {
          act: _0x54c3db
        };
        this.log("查询社群签到失败[" + _0x16d2f5 + "]: " + _0x96667e, _0x402fe1);
      }
    } catch (_0x107008) {
      console.log(_0x107008);
    }
  }
  async clockInSign(_0x535932, _0x4edf94 = {}) {
    try {
      const _0xe6656a = {
        activityViewId: _0x535932,
        actionCode: 1001,
        lat: _0x47e694,
        lng: _0xd0a5d9
      };
      let _0x2c0818 = {
          fn: "clockInSign",
          method: "post",
          url: "https://promotion.waimai.meituan.com/playcenter/common/v1/clock-in",
          searchParams: {
            isMini: 1,
            ctype: $.get(_0x4edf94, "ctype", "wm_wxapp"),
            isInDpEnv: 0
          },
          json: _0xe6656a
        },
        {
          result: _0x133e20
        } = await this.request(_0x2c0818),
        _0x2b1a64 = $.get(_0x133e20, "code", -1);
      if (_0x2b1a64 == 0) {
        let _0x52f7ab = _0x133e20?.["data"]?.["prizeInfoList"]?.["map"](_0x3fc524 => "[" + _0x3fc524.couponInfo.couponTitle + "]" + (_0x3fc524.couponInfo.priceLimit || "无门槛") + "减" + _0x3fc524.couponInfo.couponValue);
        const _0x2d0f44 = {
          act: _0x535932
        };
        this.notify_coupon(_0x52f7ab, "社群签到领券", _0x2d0f44);
      } else {
        let _0x25f1e8 = _0x133e20?.["msg"] || _0x133e20?.["message"] || "";
        if (!_0x25f1e8?.["includes"]("预发失败") && !_0x25f1e8?.["includes"]("动作不满足执行条件") && !_0x25f1e8?.["includes"]("发奖失败") || _0x2b198e) {
          const _0x5dd6f1 = {
            act: _0x535932
          };
          this.log("社群签到失败[" + _0x2b1a64 + "]: " + _0x25f1e8, _0x5dd6f1);
        }
      }
    } catch (_0xc07b9) {
      console.log(_0xc07b9);
    }
  }
  async cardLotteryNum(_0x1cceed = {}) {
    try {
      const _0x406896 = {
        fn: "cardLotteryNum",
        method: "post",
        url: "https://mgm.meituan.com/marketing/cardsCollect/api/cardLotteryNum",
        json: {}
      };
      _0x406896.json.activityId = "1116";
      _0x406896.json.topicIdList = ["1380101169187258449", "1380101260094521416", "1412292930126868547"];
      let {
        result: _0x4c453a
      } = await this.request(_0x406896);
      if (_0x4c453a?.["lotteryNum"] >= 0) {
        let _0x58b0f7 = _0x4c453a.lotteryNum;
        this.log("有" + _0x58b0f7 + "次抽月符机会");
        while (_0x58b0f7-- > 0) {
          await this.lotteryfrompool(_0x4c453a.poolIdList);
        }
      } else {
        let _0x2644e2 = _0x4c453a?.["msg"] || _0x4c453a?.["message"] || "";
        this.log("查询抽月符次数失败: " + _0x2644e2);
      }
    } catch (_0x23bbc7) {
      console.log(_0x23bbc7);
    }
  }
  async cardSaveAccess(_0x2cc4c2 = {}) {
    try {
      const _0x254d9d = {
        playerId: 1
      };
      const _0xa9da00 = {
        fn: "cardSaveAccess",
        method: "post",
        url: "https://mgm.meituan.com/marketing/cardsCollect/api/saveAccess",
        json: _0x254d9d
      };
      await this.request(_0xa9da00);
    } catch (_0x1a90a6) {
      console.log(_0x1a90a6);
    }
  }
  async cardSaveShare(_0x2d7d2d = {}) {
    try {
      const _0xfd5d7f = {
        playerId: 1,
        shareWay: 1,
        shareContentType: 1,
        shareContentId: "29"
      };
      const _0x1b2686 = {
        fn: "cyfSaveShare",
        method: "post",
        url: "https://mgm.meituan.com/marketing/cardsCollect/api/saveShare",
        json: _0xfd5d7f
      };
      await this.request(_0x1b2686);
    } catch (_0x351392) {
      console.log(_0x351392);
    }
  }
  async lotteryfrompool(_0x2422b4, _0x24b400 = {}) {
    try {
      const _0x590830 = {
        poolList: _0x2422b4
      };
      const _0x2a04c4 = {
        fn: "lotteryfrompool",
        method: "post",
        url: "https://mgm.meituan.com/marketing/cardsCollect/api/lotteryfrompool",
        json: _0x590830
      };
      let {
        result: _0x48f147
      } = await this.request(_0x2a04c4);
      if (_0x48f147?.["prizeInfo"]?.["name"]) {
        this.log("抽到月符: [" + _0x48f147?.["prizeInfo"]?.["name"] + "]");
        await this.getCardInfo(_0x48f147?.["lotteryAwardSerialNo"]?.["value"]);
      } else {
        let _0x4b144f = _0x48f147?.["msg"] || _0x48f147?.["message"] || "";
        this.log("抽月符失败: " + _0x4b144f);
      }
    } catch (_0x1ef585) {
      console.log(_0x1ef585);
    }
  }
  async getCardInfo(_0xc89102, _0x4700a5 = {}) {
    try {
      const _0x284890 = {
        lotteryAwardSerialNo: _0xc89102
      };
      const _0x18d15f = {
        fn: "getCardInfo",
        method: "get",
        url: "https://mgm.meituan.com/marketing/cardsCollect/api/getCardInfo",
        searchParams: _0x284890
      };
      let {
          result: _0x57ee0c
        } = await this.request(_0x18d15f),
        _0x3296d0 = $.get(_0x57ee0c, "code", -1);
      if (_0x3296d0 == 0) {
        await this.getCardDraw(_0x57ee0c?.["userCardInfo"]?.["cardId"]);
      } else {
        let _0x1cca95 = _0x57ee0c?.["msg"] || _0x57ee0c?.["message"] || "";
        this.log("查询月符抽奖卡号失败[" + _0x3296d0 + "]: " + _0x1cca95);
      }
    } catch (_0x20c1c2) {
      console.log(_0x20c1c2);
    }
  }
  async getCardDraw(_0x4e7777, _0x4fcc4a = {}) {
    try {
      const _0x42e655 = {
        cardId: _0x4e7777
      };
      const _0x4df91c = {
        fn: "getCardDraw",
        method: "get",
        url: "https://mgm.meituan.com/marketing/cardsCollect/api/draw",
        searchParams: _0x42e655
      };
      let {
        result: _0x51e85b
      } = await this.request(_0x4df91c);
      if (_0x51e85b?.["bingo"]?.["value"]) {
        this.log("月符抽奖: " + _0x51e85b?.["prizeInfo"]?.["name"]);
      } else {
        let _0x4811b0 = _0x51e85b?.["msg"] || _0x51e85b?.["message"] || "";
        this.log("查询月符抽奖结果失败: " + _0x4811b0);
      }
    } catch (_0x52648e) {
      console.log(_0x52648e);
    }
  }
  async getUserTasks(_0x572b03, _0x2c08c9 = {}) {
    try {
      const _0x3cb153 = {
        fn: "getUserTasks",
        method: "post",
        url: "https://cube.meituan.com/topcube/api/toc/task/getUserTasks",
        json: {}
      };
      _0x3cb153.json.uuid = this.uuid;
      _0x3cb153.json.userId = this.userId;
      _0x3cb153.json.browseAreaTrue = true;
      _0x3cb153.json.cityId = 30;
      _0x3cb153.json.taskIdKeys = _0x572b03.taskIdKeys;
      _0x3cb153.json.userType = "MEI_TUAN";
      _0x3cb153.json.sourceType = "MEI_TUAN";
      _0x3cb153.json.mini_program_token = this.token;
      _0x3cb153.json.inviter = "";
      _0x3cb153.json.inviterTaskIdKey = "";
      let {
        result: _0x512f42
      } = await this.request(_0x3cb153);
      if (_0x512f42?.["code"] == 0) {
        for (let _0x545780 of _0x512f42.data) {
          if (!_0x301085.includes(_0x545780?.["code"]?.["toString"]())) {
            if (!_0x545780?.["taskRuleVos"]?.["length"]) {
              $.log("任务[" + _0x545780.title + "] -- " + _0x545780.msg);
              continue;
            }
            if (_0x545780?.["title"]?.["includes"]("小程序下单")) {
              continue;
            }
            let _0x2d61ee = _0x545780?.["extend"] ? true : false;
            if (_0x2d61ee && _0x545780?.["extend"]?.["isSignInToday"] == 1) {
              $.log("任务[" + _0x545780.title + "] -- 已完成");
              continue;
            }
            let _0x54d3f1 = false;
            if (_0x545780.taskConf) {
              let _0x4ddd5e = JSON.parse(_0x545780.taskConf);
              _0x4ddd5e.isCheckNgSignature && (_0x54d3f1 = true);
            }
            for (let _0x5f2007 of _0x545780.taskRuleVos) {
              if (_0x5f2007.status == "PRIZE_SUCC" || _0x5f2007.status == "DELETE") {
                !_0x2d61ee && $.log("任务[" + _0x545780.title + "] -- 已完成");
              } else {
                if (_0x5f2007?.["status"] == "CAN_RECEIVE") {
                  $.log("任务[" + _0x545780.title + "] -- 可领取奖励");
                  const _0x49438e = {
                    need_sign: _0x54d3f1
                  };
                  await this.sendTaskPrize(_0x572b03, _0x545780, _0x5f2007, {}, _0x49438e);
                  if (_0x2d61ee) {
                    break;
                  }
                } else {
                  $.log("任务[" + _0x545780.title + "] -- 未完成");
                  let _0x5bde1b = true,
                    _0x2a97b7 = JSON.parse(_0x5f2007.ruleConfig);
                  if (_0x2a97b7.limitTime) {
                    let _0x5bf7ba = (_0x5f2007.preCompleteTime || 0) + _0x2a97b7.limitTime * 1000;
                    Date.now() < _0x5bf7ba && (_0x5bde1b = false, $.log("任务[" + _0x545780.title + "]冷却中, [" + $.time("hh:mm:ss", _0x5bf7ba) + "]后可完成"));
                  } else {
                    if (_0x2a97b7?.["timeLimits"]?.["length"]) {
                      let _0xe2331a = new Date($.time("yyyy-MM-dd 00:00:00")).getTime(),
                        _0x5287c0 = Date.now();
                      for (let _0x2fdb6c of _0x2a97b7.timeLimits) {
                        let {
                          startTime: _0x25fd7e,
                          endTime: _0x3d3750
                        } = _0x2fdb6c;
                        _0x25fd7e += _0xe2331a;
                        _0x3d3750 += _0xe2331a;
                        (_0x5287c0 < _0x25fd7e || _0x5287c0 >= _0x3d3750) && (_0x5bde1b = false, $.log("任务[" + _0x545780.title + "]不在时间段中: " + $.time("hh:mm:ss", _0x25fd7e) + "到" + $.time("hh:mm:ss", _0x3d3750)));
                      }
                    }
                  }
                  if (_0x5bde1b) {
                    const _0x2f9fb8 = {
                      need_sign: _0x54d3f1
                    };
                    await this.startUserTask(_0x572b03, _0x545780, _0x5f2007, _0x2f9fb8);
                  }
                  if (_0x2d61ee) {
                    break;
                  }
                }
              }
            }
          }
        }
      } else {
        let _0x2994ef = _0x512f42?.["msg"] || _0x512f42?.["desc"] || "";
        this.log("查询任务列表失败: " + _0x2994ef);
      }
    } catch (_0x54ee51) {
      console.log(_0x54ee51);
    }
  }
  async startUserTask(_0x20000b, _0x3d3e41, _0x23d1b3, _0x391c74 = {}) {
    try {
      let _0x5aec4c = _0x391c74?.["need_sign"],
        _0x52ff17 = "https://cube.meituan.com/topcube/api/toc/task/startUserTask",
        _0x19b236 = {
          uuid: this.uuid,
          userId: this.userId,
          cityId: 30,
          riskForm: await this.encode_riskForm(_0x5aec4c),
          taskIdKey: _0x3d3e41.taskIdKey,
          taskRuleIdKey: _0x23d1b3.taskRuleIdKey,
          cubePageId: _0x20000b.cubePageId,
          userType: "MEI_TUAN",
          sourceType: "MEI_TUAN",
          mini_program_token: this.token
        };
      const _0x2b54ba = {
        fn: "startUserTask",
        method: "post",
        url: _0x52ff17,
        json: _0x19b236
      };
      if (_0x5aec4c) {
        let {
          headers: _0x323b16
        } = await this.get_mtgsig(_0x52ff17, _0x19b236);
        const _0x5454f3 = {
          mtgsig: _0x323b16.mtgsig
        };
        _0x2b54ba.headers = _0x5454f3;
      }
      let {
        result: _0x1b6fe0
      } = await this.request(_0x2b54ba);
      if (_0x1b6fe0?.["code"] == 0) {
        let _0x2db7d4 = JSON.parse(_0x23d1b3.ruleConfig);
        if (_0x2db7d4.staySeconds) {
          let _0x3bed34 = _0x2db7d4.staySeconds * 1000;
          this.log("等待" + _0x2db7d4.staySeconds + "秒后完成任务..");
          await $.wait(_0x3bed34);
        } else {
          this.log("完成任务[" + _0x3d3e41.title + "]成功");
        }
        const _0x4ea5f5 = {
          need_sign: _0x5aec4c
        };
        await this.updateUserTask(_0x20000b, _0x3d3e41, _0x23d1b3, _0x1b6fe0, _0x4ea5f5);
      } else {
        let _0x174a5d = _0x1b6fe0?.["msg"] || _0x1b6fe0?.["desc"] || "";
        this.log("完成任务[" + _0x3d3e41.title + "]失败: " + _0x174a5d);
        if (_0x174a5d?.["includes"]("活动已完成")) {
          const _0x156ae5 = {
            need_sign: _0x5aec4c
          };
          await this.updateUserTask(_0x20000b, _0x3d3e41, _0x23d1b3, {}, _0x156ae5);
        }
      }
    } catch (_0xac277d) {
      console.log(_0xac277d);
    }
  }
  async process_task_prize(_0x2d1359) {
    let _0x222783 = [];
    for (let _0x46a87c of _0x2d1359) {
      if (_0x46a87c.number) {
        _0x222783.push(_0x46a87c.number + "金币");
      } else {
        if (_0x46a87c?.["sendMagicCardResult"]?.["cardList"]?.["length"]) {
          for (let _0x46e063 of _0x46a87c.sendMagicCardResult.cardList) {
            _0x222783.push("[" + (_0x5961aa[_0x46e063.type] || _0x46e063.type) + "]x" + _0x46e063.amount);
          }
        } else {
          if (_0x46a87c?.["sendMagicStoneResult"]?.["stoneList"]?.["length"]) {
            for (let _0x22aed5 of _0x46a87c.sendMagicStoneResult.stoneList) {
              _0x222783.push("[" + (_0xba5a5e[_0x22aed5.magicStonePrizeType] || _0x22aed5.magicStonePrizeType) + "]x" + _0x22aed5.amount);
            }
          } else {
            if (_0x46a87c?.["sendCouponResultList"]?.["length"]) {
              for (let _0x3df5ce of _0x46a87c.sendCouponResultList) {
                _0x222783.push((_0x3df5ce.useCondition || "无门槛") + "减" + _0x3df5ce.couponValue + _0x3df5ce.couponTypeDesc + "券");
              }
            }
          }
        }
      }
    }
    return _0x222783;
  }
  async updateUserTask(_0x5529b4, _0x1e86bd, _0x3cbb4d, _0x30ff00 = {}, _0x493190 = {}) {
    try {
      let _0x181ead = _0x493190?.["need_sign"],
        {
          actionNo = "",
          taskNo = "",
          taskRuleNo = ""
        } = _0x30ff00;
      taskNo = taskNo || _0x1e86bd?.["taskNo"] || "";
      taskRuleNo = taskRuleNo || _0x3cbb4d?.["taskRuleNo"] || "";
      let _0x5ccf4c = "https://cube.meituan.com/topcube/api/toc/task/updateUserTask",
        _0x99b1dc = {
          uuid: this.uuid,
          userId: this.userId,
          cityId: 30,
          taskNo: taskNo,
          actionNo: actionNo,
          riskForm: await this.encode_riskForm(_0x181ead),
          taskIdKey: _0x1e86bd.taskIdKey,
          taskRuleNo: taskRuleNo,
          taskRuleIdKey: _0x3cbb4d.taskRuleIdKey,
          cubePageId: _0x5529b4.cubePageId,
          userType: "MEI_TUAN",
          sourceType: "MEI_TUAN",
          mini_program_token: this.token
        };
      const _0x58cad7 = {
        fn: "updateUserTask",
        method: "post",
        url: _0x5ccf4c,
        json: _0x99b1dc
      };
      if (_0x181ead) {
        let {
          headers: _0x262458
        } = await this.get_mtgsig(_0x5ccf4c, _0x99b1dc);
        const _0x1a01cf = {
          mtgsig: _0x262458.mtgsig
        };
        _0x58cad7.headers = _0x1a01cf;
      }
      let {
        result: _0x591735
      } = await this.request(_0x58cad7);
      if (_0x591735?.["code"] == 0) {
        if (_0x591735?.["prizeList"]?.["length"]) {
          let _0x2e0833 = await this.process_task_prize(_0x591735.prizeList);
          this.log("领取任务[" + _0x1e86bd.title + "]奖励获得: " + _0x2e0833.join(","));
        } else {
          this.log("更新任务[" + _0x1e86bd.title + "]状态成功");
          const _0x51eda0 = {
            need_sign: _0x181ead
          };
          await this.sendTaskPrize(_0x5529b4, _0x1e86bd, _0x3cbb4d, _0x30ff00, _0x51eda0);
        }
      } else {
        let _0x2be4a4 = _0x591735?.["msg"] || _0x591735?.["desc"] || "";
        this.log("更新任务[" + _0x1e86bd.title + "]状态失败: " + _0x2be4a4);
      }
    } catch (_0x396431) {
      console.log(_0x396431);
    }
  }
  async sendTaskPrize(_0x15b10e, _0x3b8c02, _0x53268, _0x371152 = {}, _0x455a85 = {}) {
    try {
      let _0x3f6c98 = _0x455a85?.["need_sign"],
        {
          actionNo = "",
          taskNo = "",
          taskRuleNo = ""
        } = _0x371152;
      taskNo = taskNo || _0x3b8c02?.["taskNo"] || "";
      taskRuleNo = taskRuleNo || _0x53268?.["taskRuleNo"] || "";
      let _0xb6b3e2 = "https://cube.meituan.com/topcube/api/toc/task/sendTaskPrize",
        _0x54e35 = {
          uuid: this.uuid,
          userId: this.userId,
          cityId: 30,
          taskNo: taskNo,
          actionNo: actionNo,
          riskForm: await this.encode_riskForm(_0x3f6c98),
          taskIdKey: _0x3b8c02.taskIdKey,
          taskRuleNo: taskRuleNo,
          taskRuleIdKey: _0x53268.taskRuleIdKey,
          cubePageId: _0x15b10e.cubePageId,
          userType: "MEI_TUAN",
          sourceType: "MEI_TUAN",
          mini_program_token: this.token
        };
      const _0x378df2 = {
        fn: "sendTaskPrize",
        method: "post",
        url: _0xb6b3e2,
        json: _0x54e35
      };
      if (_0x3f6c98) {
        let {
          headers: _0x3ac4d3
        } = await this.get_mtgsig(_0xb6b3e2, _0x54e35);
        const _0x20f893 = {
          mtgsig: _0x3ac4d3.mtgsig
        };
        _0x378df2.headers = _0x20f893;
      }
      let {
        result: _0x58a145
      } = await this.request(_0x378df2);
      if (_0x58a145?.["code"] == 0) {
        if (_0x58a145?.["prizeList"]?.["length"]) {
          let _0x78f9fe = await this.process_task_prize(_0x58a145.prizeList);
          this.log("领取任务[" + _0x3b8c02.title + "]奖励获得: " + _0x78f9fe.join(","));
        } else {
          this.log("没有领取到任务[" + _0x3b8c02.title + "]奖励");
        }
      } else {
        let _0x1080e1 = _0x58a145?.["msg"] || _0x58a145?.["desc"] || "";
        this.log("领取任务[" + _0x3b8c02.title + "]奖励失败: " + _0x1080e1);
      }
    } catch (_0x407eac) {
      console.log(_0x407eac);
    }
  }
  async goldHomePage(_0x4fd88a, _0x549f13 = {}) {
    try {
      let _0x4f8354 = "https://cube.meituan.com/topcube/api/toc/gold/homePage";
      const _0x4a3ec5 = {
        activitySecretKey: _0x4fd88a,
        sourceType: "MEI_TUAN",
        userId: this.userId,
        mini_program_token: this.token,
        uuid: this.uuid
      };
      const _0x1b60ec = {
        fn: "goldHomePage",
        method: "post",
        url: _0x4f8354,
        json: _0x4a3ec5
      };
      let {
        result: _0x340fd9
      } = await this.request(_0x1b60ec);
      if (_0x340fd9?.["code"] == 0) {
        for (let _0x5ae402 of _0x340fd9?.["data"]?.["redPackets"]?.["filter"](_0x20c1b0 => _0x20c1b0.status == "LOCK_UNRECEIVED")) {
          await this.receiveRedPacket(_0x4fd88a, _0x5ae402);
        }
      } else {
        let _0x1f6fef = _0x340fd9?.["msg"] || _0x340fd9?.["desc"] || "";
        this.log("查询开红包次数失败: " + _0x1f6fef);
      }
    } catch (_0x2324de) {
      console.log(_0x2324de);
    }
  }
  async receiveRedPacket(_0x598fce, _0x4821b5, _0x5758f9 = {}) {
    try {
      let _0x3b3edc = "https://cube.meituan.com/topcube/api/toc/gold/receiveRedPacket",
        _0x511427 = {
          activitySecretKey: _0x598fce,
          id: _0x4821b5.id,
          sourceType: "MEI_TUAN",
          userId: this.userId,
          mini_program_token: this.token,
          uuid: this.uuid,
          riskForm: await this.encode_riskForm()
        },
        {
          headers: _0x25c549
        } = await this.get_mtgsig(_0x3b3edc, _0x511427);
      const _0x955e44 = {
        mtgsig: _0x25c549.mtgsig
      };
      const _0x2fb4ca = {
        fn: "receiveRedPacket",
        method: "post",
        url: _0x3b3edc,
        json: _0x511427,
        headers: _0x955e44
      };
      let {
        result: _0x4aa094
      } = await this.request(_0x2fb4ca);
      if (_0x4aa094?.["code"] == 0) {
        this.log("开红包获得" + _0x4821b5.amount + "金币");
      } else {
        let _0x23850e = _0x4aa094?.["msg"] || _0x4aa094?.["desc"] || "";
        this.log("开红包[" + _0x4821b5.id + "]失败: " + _0x23850e);
      }
    } catch (_0xc5407e) {
      console.log(_0xc5407e);
    }
  }
  async earnDailyLogin(_0x2b7e5d = {}) {
    try {
      let _0x593844 = _0x2b7e5d.gameType || 10402;
      const _0x1a6f5a = {
        cityId: "30"
      };
      let _0x31721d = {
          fn: "earnDailyLogin",
          method: "get",
          url: "https://game.meituan.com/earn-daily/login/loginMgc",
          searchParams: {
            gameType: _0x593844,
            mtToken: this.token,
            mtUserId: this.userId,
            mtDeviceId: this.uuid,
            nonceStr: $.randomString(16),
            externalStr: JSON.stringify(_0x1a6f5a)
          }
        },
        {
          result: _0x18a46a
        } = await this.request(_0x31721d),
        _0x31cc15 = $.get(_0x18a46a, "code", -1);
      if (_0x31cc15 == 0) {
        this.acToken = _0x18a46a?.["response"]?.["accessToken"];
      } else {
        let _0x2e1325 = _0x18a46a?.["msg"] || _0x18a46a?.["desc"] || "";
        this.log("登录游戏[" + _0x593844 + "]失败[" + _0x31cc15 + "]: " + _0x2e1325);
      }
    } catch (_0x3fbe67) {
      console.log(_0x3fbe67);
    }
  }
  async earnDailyPost(_0x4cb76a = {}) {
    let _0x162995 = {};
    try {
      let _0x505a10 = _0x4cb76a.protocolId,
        _0x3887ed = _0x4cb76a.data || {};
      const _0x21f830 = {
        yodaReady: "h5",
        csecplatform: 4,
        csecversion: "2.1.1"
      };
      let _0x46d4c6 = {
        fn: "earnDailyPost",
        method: "post",
        url: "https://game.meituan.com/earn-daily/msg/post",
        headers: {
          Origin: "https://awp.meituan.com",
          Referer: "https://awp.meituan.com/"
        },
        searchParams: _0x21f830,
        json: {
          acToken: this.acToken,
          riskParams: await this.get_app_riskForm(),
          protocolId: _0x505a10,
          data: _0x3887ed
        }
      };
      await $.wait_gap_interval(this.t_earnDaily, _0x4fa0fe);
      _0x162995 = await this.request(_0x46d4c6);
      this.t_earnDaily = Date.now();
    } catch (_0x363b06) {
      console.log(_0x363b06);
    } finally {
      return _0x162995;
    }
  }
  async earnDaily_task_list(_0x69955f = {}) {
    try {
      const _0x52341e = {
        acToken: this.acToken
      };
      const _0x4818b3 = {
        protocolId: 1001,
        data: _0x52341e
      };
      {
        let {
            result: _0x213e02
          } = await this.earnDailyPost(_0x4818b3),
          _0x48ba1a = $.get(_0x213e02, "code", -1);
        if (_0x48ba1a == 200) {
          for (let _0x5f5865 of _0x213e02?.["data"]?.["signInPopModel"]?.["rewardModelList"] || []) {
            _0x5f5865.current && _0x5f5865.state == 1 && (await this.earnDaily_sign());
          }
          for (let _0x253c2d of _0x213e02?.["data"]?.["taskInfoList"] || []) {
            switch (_0x253c2d.id) {
              case 780:
              case 15099:
              case 15278:
                break;
              default:
                _0x253c2d.dailyRewardTimes < _0x253c2d.dailyFinishTimes && (await this.earnDaily_get_reward(_0x253c2d));
                for (let _0x59711e = _0x253c2d.dailyFinishTimes; _0x59711e < _0x253c2d.mgcTaskBaseInfo.curPeriodMaxFinishTimes; _0x59711e++) {
                  await this.earnDaily_do_task(_0x253c2d);
                }
                break;
            }
          }
        } else {
          let _0x4d615f = _0x213e02?.["msg"] || _0x213e02?.["desc"] || "";
          this.log("查询任务失败[" + _0x48ba1a + "]: " + _0x4d615f);
        }
      }
      {
        let {
            result: _0x12b047
          } = await this.earnDailyPost(_0x4818b3),
          _0x139c3c = $.get(_0x12b047, "code", -1);
        if (_0x139c3c == 200) {
          let _0x24816f = _0x12b047?.["data"]?.["playerBaseModel"]?.["redPacketInfo"]?.["leftRedPacketAmount"] || 0;
          this.log("可以开" + _0x24816f + "次红包");
          while (_0x24816f-- > 0) {
            await this.earnDaily_redbag();
          }
        } else {
          let _0x51e6a8 = _0x12b047?.["msg"] || _0x12b047?.["desc"] || "";
          this.log("查询红包次数失败[" + _0x139c3c + "]: " + _0x51e6a8);
        }
      }
      {
        let {
            result: _0x48423e
          } = await this.earnDailyPost(_0x4818b3),
          _0x7fa95d = $.get(_0x48423e, "code", -1);
        if (_0x7fa95d == 200) {
          this.cash = _0x48423e?.["data"]?.["playerBaseModel"]?.["activityCycleInfo"]?.["cashToken"] || 0;
          this.coin = _0x48423e?.["data"]?.["playerBaseModel"]?.["activityCycleInfo"]?.["coinToken"] || 0;
          this.coin > 0 && (await this.earnDaily_coinInfo());
          const _0x33bc89 = {
            notify: true
          };
          this.log("每日赚钱余额: " + (this.cash / 100).toFixed(2) + "元, " + this.coin + "金币", _0x33bc89);
        } else {
          let _0x5684c6 = _0x48423e?.["msg"] || _0x48423e?.["desc"] || "";
          this.log("查询每日赚钱余额失败[" + _0x7fa95d + "]: " + _0x5684c6);
        }
      }
      await this.earnDaily_get_withdraw_list();
    } catch (_0xbddc6c) {
      console.log(_0xbddc6c);
    }
  }
  async earnDaily_coinInfo(_0x149242 = {}) {
    try {
      const _0x322f9c = {
        protocolId: 1015
      };
      let {
          result: _0x56383d
        } = await this.earnDailyPost(_0x322f9c),
        _0x24ec75 = $.get(_0x56383d, "code", -1);
      if (_0x24ec75 == 200) {
        let _0x3d73be = _0x56383d?.["data"]?.["exchangeInfoList"]?.["filter"](_0x15a193 => _0x15a193.name == "翻红包现金");
        if (!_0x3d73be.length) {
          return;
        }
        let _0x348d0b = _0x3d73be[0];
        this.coin >= _0x348d0b.price && (await this.earnDaily_coinExchange(_0x348d0b));
      } else {
        let _0x1c20b5 = _0x56383d?.["msg"] || _0x56383d?.["desc"] || "";
        this.log("查询金币兑换失败[" + _0x24ec75 + "]: " + _0x1c20b5);
      }
    } catch (_0x2e1a90) {
      console.log(_0x2e1a90);
    }
  }
  async earnDaily_coinExchange(_0x48519c, _0x15b062 = {}) {
    try {
      const _0x3e8bd7 = {
        skuId: _0x48519c.skuId
      };
      const _0x5d9bc4 = {
        protocolId: 1016,
        data: _0x3e8bd7
      };
      let {
          result: _0x5948d0
        } = await this.earnDailyPost(_0x5d9bc4),
        _0x3afbe8 = $.get(_0x5948d0, "code", -1);
      if (_0x3afbe8 == 200) {
        this.cash = _0x5948d0?.["data"]?.["activityCycleInfo"]?.["cashToken"] || 0;
        this.coin = _0x5948d0?.["data"]?.["activityCycleInfo"]?.["coinToken"] || 0;
        this.log("使用" + _0x48519c.price + "金币兑换余额成功: 剩余" + this.coin + "金币");
        let _0x141514 = _0x5948d0?.["data"]?.["exchangeInfoList"]?.["filter"](_0x3771fd => _0x3771fd.name == "翻红包现金");
        if (!_0x141514.length) {
          return;
        }
        let _0x4bf2e4 = _0x141514[0];
        this.coin >= _0x4bf2e4.price && (await this.earnDaily_coinExchange(_0x4bf2e4));
      } else {
        let _0xf1e9d3 = _0x5948d0?.["msg"] || _0x5948d0?.["desc"] || "";
        this.log("使用" + _0x48519c.price + "金币兑换余额失败[" + _0x3afbe8 + "]: " + _0xf1e9d3);
      }
    } catch (_0x59b1fd) {
      console.log(_0x59b1fd);
    }
  }
  async earnDaily_sign(_0x591c60 = {}) {
    try {
      const _0x28cc97 = {
        protocolId: 1007
      };
      let {
          result: _0x44751d
        } = await this.earnDailyPost(_0x28cc97),
        _0x55b059 = $.get(_0x44751d, "code", -1);
      if (_0x55b059 == 200) {
        this.log("签到成功: " + (_0x44751d?.["data"]?.["remitNotificationModelList"]?.["map"](_0x38dbd7 => _0x38dbd7.content)?.["join"](",") || ""));
      } else {
        let _0x565e77 = _0x44751d?.["msg"] || _0x44751d?.["desc"] || "";
        this.log("签到失败[" + _0x55b059 + "]: " + _0x565e77);
      }
    } catch (_0x82d089) {
      console.log(_0x82d089);
    }
  }
  async earnDaily_do_task(_0x110d56, _0x6626c0 = {}) {
    try {
      const _0x25bd90 = {
        taskId: _0x110d56.id
      };
      const _0x58ac8a = {
        protocolId: 1004,
        data: _0x25bd90
      };
      let {
          result: _0x199e00
        } = await this.earnDailyPost(_0x58ac8a),
        _0x280a16 = $.get(_0x199e00, "code", -1);
      if (_0x280a16 == 200) {
        this.log("完成任务[" + (_0x110d56?.["mgcTaskBaseInfo"]?.["viewTitle"] || _0x110d56?.["id"]) + "]成功");
        await this.earnDaily_get_reward(_0x110d56);
      } else {
        let _0x39f624 = _0x199e00?.["msg"] || _0x199e00?.["desc"] || "";
        this.log("完成任务[" + (_0x110d56?.["mgcTaskBaseInfo"]?.["viewTitle"] || _0x110d56?.["id"]) + "]失败[" + _0x280a16 + "]: " + _0x39f624);
      }
    } catch (_0x3953ad) {
      console.log(_0x3953ad);
    }
  }
  async earnDaily_get_reward(_0x377e90, _0x2c0af7 = {}) {
    try {
      const _0x3a814a = {
        taskId: _0x377e90.id
      };
      const _0x3723d1 = {
        protocolId: 1005,
        data: _0x3a814a
      };
      let {
          result: _0x1a249e
        } = await this.earnDailyPost(_0x3723d1),
        _0x28d02b = $.get(_0x1a249e, "code", -1);
      if (_0x28d02b == 200) {
        this.log("领取任务[" + _0x377e90.mgcTaskBaseInfo.viewTitle + "]奖励成功");
      } else {
        let _0x2b7d34 = _0x1a249e?.["msg"] || _0x1a249e?.["desc"] || "";
        this.log("领取任务[" + _0x377e90.mgcTaskBaseInfo.viewTitle + "]奖励失败[" + _0x28d02b + "]: " + _0x2b7d34);
      }
    } catch (_0x3a982e) {
      console.log(_0x3a982e);
    }
  }
  async earnDaily_redbag(_0x478718 = {}) {
    try {
      const _0x12f565 = {
        protocolId: 1008
      };
      let {
          result: _0x2fa4ce
        } = await this.earnDailyPost(_0x12f565),
        _0x5665d5 = $.get(_0x2fa4ce, "code", -1);
      if (_0x5665d5 == 200) {
        let _0x5134c0 = _0x2fa4ce?.["data"]?.["rewardModelList"]?.["filter"](_0xcd1696 => _0xcd1696.rewarded) || [];
        if (_0x5134c0.length) {
          let _0x96ff47 = _0x5134c0[0];
          if (_0x96ff47.resourceType == 1) {
            this.log("开红包获得: " + (_0x96ff47.amount / 100).toFixed(2) + "元");
          } else {
            _0x96ff47.resourceType == 2 ? this.log("开红包获得: " + _0x96ff47.amount + "金币") : this.log("开红包获得: " + JSON.stringify(_0x96ff47));
          }
        }
      } else {
        let _0x4a0651 = _0x2fa4ce?.["msg"] || _0x2fa4ce?.["desc"] || "";
        this.log("开红包失败[" + _0x5665d5 + "]: " + _0x4a0651);
      }
    } catch (_0x13d3c0) {
      console.log(_0x13d3c0);
    }
  }
  async earnDaily_draw(_0x135e0d = {}) {
    try {
      const _0x2831f8 = {
        protocolId: 1010
      };
      let {
          result: _0x3d93f0
        } = await this.earnDailyPost(_0x2831f8),
        _0x4850ed = $.get(_0x3d93f0, "code", -1);
      if (_0x4850ed == 200) {
        let _0x466282 = _0x3d93f0?.["data"]?.["currentReward"];
        if (_0x466282?.["rewardedCouponModel"]) {
          this.log("转盘抽奖: " + _0x466282.rewardedCouponModel?.["useRule"] + _0x466282.rewardedCouponModel?.["name"]);
          return;
        }
        switch (_0x466282?.["resourceType"]) {
          case 1:
            let _0x11d1e6 = ((_0x466282?.["amount"] || 0) / 100).toFixed(2);
            this.log("转盘抽奖: " + _0x11d1e6 + "元余额");
            break;
          case 2:
            this.log("转盘抽奖: " + _0x466282?.["amount"] + "金币");
            break;
          case 3:
            this.log("转盘抽奖: 随机提现机会");
            break;
          default:
            this.log("转盘抽奖: " + JSON.stringify(_0x3d93f0));
            break;
        }
      } else {
        let _0x4a2704 = _0x3d93f0?.["msg"] || _0x3d93f0?.["desc"] || "";
        this.log("转盘抽奖失败[" + _0x4850ed + "]: " + _0x4a2704);
      }
    } catch (_0x23e66d) {
      console.log(_0x23e66d);
    }
  }
  async earnDaily_get_withdraw_list(_0x46905e = {}) {
    try {
      const _0x5a385c = {
        protocolId: 1012
      };
      let {
          result: _0x220013
        } = await this.earnDailyPost(_0x5a385c),
        _0x2fd9c9 = $.get(_0x220013, "code", -1);
      if (_0x2fd9c9 == 200) {
        let _0x4edcb7 = _0x220013?.["data"]?.["activityCycleInfo"]?.["cashToken"] || 0,
          _0xf48f6 = (_0x4edcb7 / 100).toFixed(2);
        this.log("红包余额: " + _0xf48f6 + "元");
        let _0x125b05 = (_0x220013?.["data"]?.["cashList"] || []).sort(function (_0x244f7d, _0x508f6c) {
          return _0x508f6c.amount - _0x244f7d.amount;
        });
        if (_0x38c74a == "false" || !_0x38c74a) {
          _0x125b05 = _0x125b05.filter(_0x167223 => _0x167223.amount == 5000);
        }
        for (let _0x202ac2 of _0x125b05) {
          if (_0x202ac2.amount > _0x4edcb7) {
            continue;
          }
          if (await this.earnDaily_withdraw(_0x202ac2)) {
            break;
          }
        }
      } else {
        let _0x39632d = _0x220013?.["msg"] || _0x220013?.["desc"] || "";
        this.log("查询提现列表失败[" + _0x2fd9c9 + "]: " + _0x39632d);
      }
    } catch (_0x104f01) {
      console.log(_0x104f01);
    }
  }
  async earnDaily_withdraw(_0x1d1a9a, _0x5c7167 = {}) {
    let _0x3f7453 = false;
    try {
      let _0x56168c = (_0x1d1a9a.amount / 100).toFixed(2);
      const _0x37a1e7 = {
        id: _0x1d1a9a.id,
        amount: _0x1d1a9a.amount
      };
      const _0x2d287a = {
        protocolId: 1013,
        data: _0x37a1e7
      };
      let {
          result: _0x2ac02b
        } = await this.earnDailyPost(_0x2d287a),
        _0x2800b4 = $.get(_0x2ac02b, "code", -1);
      if (_0x2800b4 == 200) {
        _0x3f7453 = true;
        const _0x5f48e9 = {
          notify: true
        };
        this.log("提现[" + _0x56168c + "元]到钱包成功", _0x5f48e9);
      } else {
        let _0x4b96c8 = _0x2ac02b?.["msg"] || _0x2ac02b?.["desc"] || "";
        _0x2800b4 == 1017 ? (_0x3f7453 = true, this.log("提现[" + _0x56168c + "元]失败[" + _0x2800b4 + "]: 可能今天已提现过")) : this.log("提现[" + _0x56168c + "元]失败[" + _0x2800b4 + "]: " + _0x4b96c8);
      }
    } catch (_0x446427) {
      console.log(_0x446427);
    } finally {
      return _0x3f7453;
    }
  }
  async c_task(_0x65181a, _0x119724 = {}) {
    try {
      let _0xd3b156 = Math.random() * 100 + 2400 | 0;
      const _0x2584b3 = {
        Referer: "https://click.meituan.com/t?t=1&c=2&p=" + _0x65181a
      };
      let _0x55e711 = {
        fn: "get_task",
        method: "post",
        url: "https://click.meituan.com/cps/clickReferralLink",
        headers: _0x2584b3,
        json: {
          p: _0x65181a,
          t: "1",
          c: "2",
          sessionId: "187a" + $.randomPattern("xxxxxxx-xxx-xxx-xxx"),
          referrer: "",
          fingerprintFromH5: "eJxVV" + $.randomString(_0xd3b156, _0x25ef5e)
        }
      };
      await this.request(_0x55e711);
    } catch (_0x45ec43) {
      console.log(_0x45ec43);
    }
  }
  async walletMainpage(_0x133430 = {}) {
    try {
      const _0x4a645f = {
        fn: "walletMainpage",
        method: "post",
        url: "https://npay.meituan.com/conch/walletV5/mainpage",
        form: {}
      };
      _0x4a645f.form.token = this.token;
      _0x4a645f.form.nb_app = "group";
      _0x4a645f.form.nb_appversion = "12.9.203";
      _0x4a645f.form.nb_channel = "common";
      _0x4a645f.form.nb_ci = "30";
      _0x4a645f.form.nb_location = "0_0";
      _0x4a645f.form.nb_osversion = "16.1.2";
      _0x4a645f.form.nb_platform = "iOS";
      _0x4a645f.form.utmSource = "AppStore";
      _0x4a645f.form.from = "mine_qianbaorukou_qianbao";
      _0x4a645f.form.popWindowOldChain = "false";
      let {
          result: _0xbe74a9
        } = await this.request(_0x4a645f),
        _0x2485ce = $.get(_0xbe74a9, "status", -1);
      if (_0x2485ce == "success") {
        let _0x551036 = [];
        for (let _0x5d0947 of _0xbe74a9?.["data"]?.["AssetArea"]?.["otherAssetAreaDTOList"] || []) {
          switch (_0x5d0947.title) {
            case "余额":
              _0x551036.push("钱包余额: " + (_0x5d0947?.["subTitle"] || 0) + "元");
              break;
            case "立减金":
              _0x551036.push("立减金: " + (_0x5d0947?.["subTitle"] || 0) + "元");
              break;
          }
        }
        if (_0x551036.length) {
          const _0x1aa41d = {
            notify: true
          };
          this.log(_0x551036.join(", "), _0x1aa41d);
        }
      } else {
        let _0xea97aa = _0xbe74a9?.["error"]?.["message"] || "";
        this.log("查询钱包失败[" + _0x2485ce + "]: " + _0xea97aa);
      }
    } catch (_0x6e6476) {
      console.log(_0x6e6476);
    }
  }
  async refTask() {
    if (!_0x4fbf00?.["length"]) {
      return;
    }
    let _0x35e610 = _0x4fbf00.sort(function () {
        return Math.random() - 0.5;
      }),
      _0xa43669 = _0x35e610.length,
      _0x10dfc8 = Math.min(3, _0xa43669);
    _0x35e610 = _0x35e610.slice(0, _0x10dfc8);
    for (let _0x4f4afb of _0x35e610) {
      await this.c_task(_0x4f4afb);
    }
  }
  async batchfetchcomponentcouponV2(_0xee02) {
    try {
      let {
        refIds: _0x27ebfa,
        instanceId: _0x192dd7,
        gdPageId: _0x3ea282,
        pageId: _0x27286d
      } = _0xee02;
      const _0x422fa3 = {
        cType: "wm_wxapp",
        fpPlatform: 13,
        wxOpenId: "",
        appVersion: "12.9.206",
        mtFingerprint: this.fp
      };
      let _0xa084f6 = {
          couponReferIds: _0x27ebfa.join(","),
          geoType: 2,
          actualLng: _0xd0a5d9,
          actualLat: _0x47e694,
          isInDpEnv: 0,
          gdPageId: _0x3ea282,
          pageId: _0x27286d,
          version: 1,
          instanceId: _0x192dd7,
          componentId: _0x192dd7,
          utmSource: "",
          utmCampaign: "",
          needFetchedByUUID: 1
        },
        _0x23d203 = new URL("https://promotion.waimai.meituan.com/lottery/couponcomponent/batchfetchcomponentcoupon/v2");
      for (let _0x35448c in _0xa084f6) {
        _0x23d203.searchParams.append(_0x35448c, _0xa084f6[_0x35448c]);
      }
      let {
        headers: _0x1d6802
      } = await this.get_mtgsig(_0x23d203.toString(), _0x422fa3);
      const _0x4a2acc = {
        mtgsig: _0x1d6802.mtgsig
      };
      const _0x498072 = {
        fn: "batchfetchcomponentcouponV2",
        method: "post",
        url: _0x23d203,
        json: _0x422fa3,
        headers: _0x4a2acc
      };
      let {
        result: _0xa39231
      } = await this.request(_0x498072);
      if (_0xa39231?.["code"] == 0) {
        let _0x4c4b20 = _0xa39231?.["data"]?.["filter"](_0x211e1e => _0x211e1e.code == 0)?.["map"](_0x3319c0 => "[" + _0x3319c0.data.couponName + "]" + (_0x3319c0.data.priceLimit || "无门槛") + "减" + _0x3319c0.data.couponValue);
        if (_0x4c4b20.length) {
          this.notify_coupon(_0x4c4b20);
        }
      } else {
        let _0x2a4b0f = _0xa39231?.["msg"] || _0xa39231?.["desc"] || "";
        this.log("集合领券失败: " + _0x2a4b0f);
      }
    } catch (_0x1d84d6) {
      console.log(_0x1d84d6);
    }
  }
  async popupcomponent_popup(_0x4d7def, _0x5745a8 = {}) {
    try {
      const _0x10ed9f = {
        recordId: _0x4d7def,
        geoType: 2
      };
      const _0x5d1736 = {
        fn: "popupcomponent_popup",
        method: "post",
        url: "https://promotion.waimai.meituan.com/popupcomponent/popup",
        form: _0x10ed9f
      };
      let {
          result: _0x120c9b
        } = await this.request(_0x5d1736),
        _0x3dfe93 = $.get(_0x120c9b, "code", -1);
      if (_0x3dfe93 == 0) {
        let _0x5d26e6 = _0x120c9b?.["data"]?.["couponList"]?.["map"](_0x1a68ac => _0x1a68ac.couponValue ? "[" + (_0x1a68ac?.["couponTitle"] || "") + "]" + (_0x1a68ac?.["priceLimit"] || "无门槛") + "减" + (_0x1a68ac?.["couponValue"] || "") : "")?.["filter"](_0x963a1e => _0x963a1e);
        const _0x549d20 = {
          act: _0x4d7def
        };
        this.notify_coupon(_0x5d26e6, "弹窗领券", _0x549d20);
      } else {
        let _0x4129d7 = _0x120c9b?.["msg"] || _0x120c9b?.["message"] || "";
        const _0x22d05f = {
          act: _0x4d7def
        };
        this.log("弹窗领券失败[" + _0x3dfe93 + "]: " + _0x4129d7, _0x22d05f);
      }
    } catch (_0x463030) {
      console.log(_0x463030);
    }
  }
  async xtb_login(_0x4c701e = {}) {
    let _0x58bbf6 = false;
    try {
      let _0x5c88da = {
          fn: "xtb_login",
          method: "post",
          url: "https://game.meituan.com/mgc/gamecenter/front/api/v1/login",
          json: {
            mtToken: this.token,
            deviceUUID: this.specified_app_uuid || _0x1cb1a0,
            mtUserId: this.userId,
            idempotentString: $.randomString(16, _0x1de3b8 + _0x2818e7)
          }
        },
        {
          result: _0x56ed74
        } = await this.request($.copy(_0x5c88da));
      if (_0x56ed74?.["data"]?.["loginInfo"]?.["accessToken"]) {
        const _0xffc103 = {
          actoken: _0x56ed74?.["data"]?.["loginInfo"]?.["accessToken"]
        };
        const _0x26e358 = {
          headers: _0xffc103
        };
        this.got = this.got.extend(_0x26e358);
        _0x58bbf6 = true;
      } else {
        this.log("小团币游戏中心登录失败");
      }
    } catch (_0x12e3ff) {
      console.log(_0x12e3ff);
    } finally {
      return _0x58bbf6;
    }
  }
  async xtb_queryXtbCount(_0x1597b2 = {}) {
    const _0x5bfe12 = {
      succ: false,
      previous: 0,
      coin: 0
    };
    let _0x4b6b6b = _0x5bfe12;
    try {
      const _0x44fe49 = {
        fn: "xtb_queryMgcTaskInfo",
        method: "get",
        url: "https://game.meituan.com/mgc/gamecenter/skuExchange/resource/counts",
        searchParams: {}
      };
      _0x44fe49.searchParams.sceneId = 3;
      _0x44fe49.searchParams.gameId = 10102;
      _0x44fe49.searchParams.yodaReady = "h5";
      _0x44fe49.searchParams.csecplatform = 4;
      _0x44fe49.searchParams.csecversion = "2.1.0";
      let {
          statusCode: _0x2f6a35,
          result: _0x4e8e73
        } = await this.request($.copy(_0x44fe49)),
        _0x4891f3 = $.get(_0x4e8e73, "code", _0x2f6a35);
      if (_0x4891f3 == 0) {
        let _0x7a1415 = (_0x4e8e73?.["data"] || []).filter(_0x2443d3 => _0x2443d3.resourceName == "小团币")?.[0];
        if (_0x7a1415) {
          this.first_get_xtb_count && (this.init_xtb_coin = _0x7a1415.count);
          const _0x46ed40 = {
            succ: true,
            previous: this.xtb_coin,
            coin: _0x7a1415.count
          };
          _0x4b6b6b = _0x46ed40;
          this.xtb_coin = _0x7a1415.count;
        }
      } else {
        let _0x399f50 = _0x4e8e73?.["msg"] || _0x4e8e73?.["message"] || "";
        this.log("查询小团币失败[" + _0x4891f3 + "]: " + _0x399f50);
      }
    } catch (_0x1ac622) {
      console.log(_0x1ac622);
    } finally {
      return _0x4b6b6b;
    }
  }
  async xtb_queryMgcTaskInfo(_0x3133bf = {}) {
    try {
      const _0x9f4181 = {
        yodaReady: "h5",
        csecplatform: 4,
        csecversion: "2.3.1"
      };
      let _0x2f645f = "https://game.meituan.com/mgc/gamecenter/front/api/v1/mgcUser/task/queryMgcTaskInfo",
        _0x137c22 = new URL(_0x2f645f);
      for (let _0x53fcd0 in _0x9f4181) {
        _0x137c22.searchParams.append(_0x53fcd0, _0x9f4181[_0x53fcd0]);
      }
      _0x137c22 = _0x137c22.toString();
      let _0x31c835 = {
          externalStr: "",
          riskParams: await this.get_riskParams()
        },
        {
          headers: _0x4add24
        } = await this.get_mtgsig(_0x137c22, _0x31c835),
        _0x4b7cd1 = _0x4add24?.["mtgsig"];
      const _0xa7c06d = {
        ..._0x9f4181,
        mtgsig: _0x4b7cd1
      };
      const _0x37d121 = {
        fn: "xtb_queryMgcTaskInfo",
        method: "post",
        url: _0x137c22,
        searchParams: _0xa7c06d,
        json: _0x31c835
      };
      let {
          statusCode: _0x4df5c6,
          result: _0x89716
        } = await this.request($.copy(_0x37d121)),
        _0x4728e3 = $.get(_0x89716, "code", _0x4df5c6);
      if (_0x4728e3 == 0) {
        let _0x5635e1 = _0x89716?.["data"]?.["taskList"] || [];
        !_0x5635e1?.["length"] && this.log("此账号没有获取到任务, 可能黑号");
        for (let _0x339f84 of _0x5635e1) {
          if (_0x5a7fc9.includes(_0x339f84.id)) {
            continue;
          }
          let _0x4209ef = _0x339f84?.["mgcTaskBaseInfo"]?.["maxLimit"];
          if (_0x4209ef > 100) {
            continue;
          }
          let _0x31f356 = false;
          switch (_0x339f84.status) {
            case 2:
              {
                _0x31f356 = await this.xtb_finishAndReceiveReward(_0x339f84);
                break;
              }
            case 3:
              {
                _0x31f356 = await this.xtb_receiveMgcTaskReward(_0x339f84);
                break;
              }
          }
          if (_0x31f356) {
            let _0x1c9e5a = Math.floor(Math.random() * 3000) + 2000;
            await $.wait(_0x1c9e5a);
          }
        }
      } else {
        let _0x2d68d3 = _0x89716?.["msg"] || _0x89716?.["message"] || "";
        this.log("查询小团币任务失败[" + _0x4728e3 + "]: " + _0x2d68d3);
      }
    } catch (_0x64cfe3) {
      console.log(_0x64cfe3);
    }
  }
  async xtb_finishV2(_0x57eb15, _0x36e54f = {}) {
    try {
      let _0x3fc8a1 = JSON.parse(_0x57eb15?.["mgcTaskBaseInfo"]?.["viewExtraJson"]),
        _0x8c387a = {
          yodaReady: "h5",
          csecplatform: 4,
          csecversion: "2.3.1",
          externalStr: "",
          riskParams: "",
          mgcId: "347102775203384",
          gameid: _0x3fc8a1?.["gameid"],
          taskTag: _0x3fc8a1?.["taskTag"],
          taskId: base64_encode("mgc-gamecenter" + _0x57eb15.id)
        },
        _0x40e21e = "https://game.meituan.com/mgc/gamecenter/common/mtUser/mgcUser/task/finishV2",
        _0x4a95e9 = new URL(_0x40e21e);
      for (let _0x4bb138 in _0x8c387a) {
        _0x4a95e9.searchParams.append(_0x4bb138, _0x8c387a[_0x4bb138]);
      }
      _0x4a95e9 = _0x4a95e9.toString();
      let _0x35e397 = {},
        {
          headers: _0x363cc0
        } = await this.get_mtgsig(_0x4a95e9, _0x35e397),
        _0x304814 = _0x363cc0?.["mtgsig"];
      const _0x1c31d0 = {
        ..._0x8c387a,
        mtgsig: _0x304814
      };
      const _0x2d057f = {
        fn: "xtb_finishV2",
        method: "get",
        url: _0x4a95e9,
        searchParams: _0x1c31d0
      };
      let {
          statusCode: _0x1359e8,
          result: _0x5bbc8a
        } = await this.request($.copy(_0x2d057f)),
        _0x18fbe5 = $.get(_0x5bbc8a, "code", _0x1359e8);
      if (_0x18fbe5 == 0) {
        this.log("完成任务[" + _0x57eb15.id + "]成功");
      } else {
        let _0x16dee5 = _0x5bbc8a?.["msg"] || _0x5bbc8a?.["message"] || "";
        this.log("完成任务[" + _0x57eb15.id + "]失败[" + _0x18fbe5 + "]: " + _0x16dee5);
      }
    } catch (_0x2ea8b7) {
      console.log(_0x2ea8b7);
    }
  }
  async xtb_receiveMgcTaskReward(_0x18c1d4, _0x394b4e = {}) {
    let _0x45e10d = false;
    try {
      const _0x3b5c04 = {
        yodaReady: "h5",
        csecplatform: 4,
        csecversion: "2.3.1"
      };
      let _0x17723e = "https://game.meituan.com/mgc/gamecenter/front/api/v1/mgcUser/task/receiveMgcTaskReward",
        _0x2368e5 = new URL(_0x17723e);
      for (let _0x3b9639 in _0x3b5c04) {
        _0x2368e5.searchParams.append(_0x3b9639, _0x3b5c04[_0x3b9639]);
      }
      _0x2368e5 = _0x2368e5.toString();
      let _0x274b60 = {
          taskId: _0x18c1d4.id,
          externalStr: "",
          riskParams: await this.get_riskParams()
        },
        {
          headers: _0x5565d0
        } = await this.get_mtgsig(_0x2368e5, _0x274b60),
        _0x414f5c = _0x5565d0?.["mtgsig"];
      const _0xb9abca = {
        ..._0x3b5c04,
        mtgsig: _0x414f5c
      };
      const _0x4988ee = {
        fn: "xtb_receiveMgcTaskReward",
        method: "post",
        url: _0x2368e5,
        json: _0x274b60,
        searchParams: _0xb9abca
      };
      let {
          statusCode: _0x389576,
          result: _0x1f70e4
        } = await this.request($.copy(_0x4988ee)),
        _0x1dd097 = $.get(_0x1f70e4, "code", _0x389576);
      if (_0x1dd097 == 0) {
        _0x45e10d = true;
        let {
          succ: _0x2e50f9,
          previous: _0x10392e,
          coin: _0x2f03f9
        } = await this.xtb_queryXtbCount();
        if (_0x2e50f9) {
          let _0x472bce = _0x2f03f9 - _0x10392e;
          this.log("完成任务[" + _0x18c1d4.id + "]: " + _0x472bce + "小团币");
        } else {
          this.log("完成任务[" + _0x18c1d4.id + "]成功");
        }
      } else {
        let _0x282ad1 = _0x1f70e4?.["msg"] || _0x1f70e4?.["message"] || "";
        !_0x282ad1?.["includes"]("状态异常") && this.log("完成任务[" + _0x18c1d4.id + "]失败[" + _0x1dd097 + "]: " + _0x282ad1);
      }
    } catch (_0x22d4b4) {
      console.log(_0x22d4b4);
    } finally {
      return _0x45e10d;
    }
  }
  async xtb_finishAndReceiveReward(_0x2d607e, _0xb11291 = {}) {
    let _0x2c474a = false;
    try {
      const _0x2af773 = {
        yodaReady: "h5",
        csecplatform: 4,
        csecversion: "2.3.1"
      };
      let _0x184254 = "https://game.meituan.com/mgc/gamecenter/front/api/v1/mgcUser/task/finishAndReceiveReward",
        _0x5a8c1f = new URL(_0x184254);
      for (let _0x2e1ad1 in _0x2af773) {
        _0x5a8c1f.searchParams.append(_0x2e1ad1, _0x2af773[_0x2e1ad1]);
      }
      _0x5a8c1f = _0x5a8c1f.toString();
      let _0x17c92f = {
          taskId: base64_encode("mgc-gamecenter" + _0x2d607e.id),
          externalStr: "",
          riskParams: await this.get_riskParams()
        },
        {
          headers: _0x4f74b9
        } = await this.get_mtgsig(_0x5a8c1f, _0x17c92f),
        _0x21bace = _0x4f74b9?.["mtgsig"];
      const _0x54dc72 = {
        ..._0x2af773,
        mtgsig: _0x21bace
      };
      const _0x39f407 = {
        fn: "xtb_finishAndReceiveReward",
        method: "post",
        url: _0x5a8c1f,
        json: _0x17c92f,
        searchParams: _0x54dc72
      };
      let {
          statusCode: _0x54ccff,
          result: _0x6dbca2
        } = await this.request($.copy(_0x39f407)),
        _0x3aed4b = $.get(_0x6dbca2, "code", _0x54ccff);
      if (_0x3aed4b == 0) {
        _0x2c474a = true;
        let {
          succ: _0x3e7533,
          previous: _0x50c9f2,
          coin: _0x5d8ffc
        } = await this.xtb_queryXtbCount();
        if (_0x3e7533) {
          let _0x45f9b7 = _0x5d8ffc - _0x50c9f2;
          this.log("完成任务[" + _0x2d607e.id + "]: " + _0x45f9b7 + "小团币");
        } else {
          this.log("完成任务[" + _0x2d607e.id + "]成功");
        }
      } else {
        let _0x1ae5eb = _0x6dbca2?.["msg"] || _0x6dbca2?.["message"] || "";
        !_0x1ae5eb?.["includes"]("状态异常") && !_0x1ae5eb?.["includes"]("任务已经完成过") && this.log("完成任务[" + _0x2d607e.id + "]失败[" + _0x3aed4b + "]: " + _0x1ae5eb);
      }
    } catch (_0x108968) {
      console.log(_0x108968);
    } finally {
      return _0x2c474a;
    }
  }
  async signlottery_info(_0x1a7bfd, _0x5198da = {}) {
    try {
      const _0xade058 = {
        activityViewId: _0x1a7bfd
      };
      const _0x446cdf = {
        fn: "signlottery_info",
        method: "get",
        url: "https://promotion.waimai.meituan.com/playcenter/signlottery/info",
        searchParams: _0xade058
      };
      let {
          result: _0x5b44a7
        } = await this.request(_0x446cdf),
        _0x5b9377 = $.get(_0x5b44a7, "code", -1),
        _0x1f4c6a = $.get(_0x5b44a7, "subcode", -1);
      if (_0x5b9377 == 0 && _0x1f4c6a == 0) {
        for (let _0x503575 of _0x5b44a7?.["data"]?.["signRecord"] || []) {
          switch (_0x503575.statusCode) {
            case 1:
              {
                const _0x2ca581 = {
                  act: _0x1a7bfd
                };
                this.log("社群未签到", _0x2ca581);
                await this.signlottery_signIn(_0x1a7bfd);
                break;
              }
            case 2:
              {
                const _0x53f038 = {
                  act: _0x1a7bfd
                };
                this.log("社群已签到", _0x53f038);
                break;
              }
          }
        }
      } else {
        let _0x8b65b5 = _0x5b44a7?.["msg"] || _0x5b44a7?.["message"] || "";
        const _0x48bbc0 = {
          act: _0x1a7bfd
        };
        this.log("查询社群签到失败[" + _0x5b9377 + "]: " + _0x8b65b5, _0x48bbc0);
      }
    } catch (_0x1540e4) {
      console.log(_0x1540e4);
    }
  }
  async signlottery_signIn(_0x4679f0, _0x4bfc6f = {}) {
    try {
      const _0x6d30c = {
        activityViewId: _0x4679f0,
        actualLat: _0x47e694,
        actualLng: _0xd0a5d9,
        mtFingerprint: ""
      };
      const _0x5954da = {
        fn: "signlottery_signIn",
        method: "post",
        url: "https://promotion.waimai.meituan.com/playcenter/signlottery/signIn",
        json: _0x6d30c
      };
      let {
          result: _0x47fb41
        } = await this.request(_0x5954da),
        _0x2804a0 = $.get(_0x47fb41, "code", -1),
        _0x3d480d = $.get(_0x47fb41, "subcode", -1);
      if (_0x2804a0 == 0 && _0x3d480d == 0) {
        let {
          signCount: _0x512f9c,
          signInPrizeInfoList: _0x2e4bfd
        } = _0x47fb41?.["data"];
        const _0x5027ef = {
          act: _0x4679f0
        };
        this.log("社群签到成功, 已签到" + _0x512f9c + "天", _0x5027ef);
        let _0x2b8695 = _0x2e4bfd?.["map"](_0x34313d => "[" + _0x34313d.rightsCouponInfoVO.couponTitle + "]" + (_0x34313d.rightsCouponInfoVO.priceLimit || "无门槛") + "减" + _0x34313d.rightsCouponInfoVO.couponValue);
        if (_0x2b8695?.["length"]) {
          const _0xe513fb = {
            act: _0x4679f0
          };
          this.notify_coupon(_0x2b8695, "签到抽奖", _0xe513fb);
        }
      } else {
        let _0x100b77 = _0x47fb41?.["msg"] || _0x47fb41?.["message"] || "";
        if (!_0x100b77?.["includes"]("预发失败") && !_0x100b77?.["includes"]("动作不满足执行条件") && !_0x100b77?.["includes"]("发奖失败") || _0x2b198e) {
          const _0x54a47b = {
            act: _0x4679f0
          };
          this.log("社群签到失败[" + _0x2804a0 + "]: " + _0x100b77, _0x54a47b);
        }
      }
    } catch (_0x1528ea) {
      console.log(_0x1528ea);
    }
  }
  async generalcoupon_info(_0x3380d7, _0x2d029d = {}) {
    try {
      const _0x5e07c5 = {
        activityViewId: _0x3380d7
      };
      const _0x14361a = {
        fn: "generalcoupon_info",
        method: "get",
        url: "https://promotion.waimai.meituan.com/playcenter/generalcoupon/info",
        searchParams: _0x5e07c5
      };
      let {
          result: _0x2b4999
        } = await this.request(_0x14361a),
        _0x112e88 = $.get(_0x2b4999, "code", -1),
        _0xdc7378 = $.get(_0x2b4999, "subcode", -1);
      if (_0x112e88 == 0 && _0xdc7378 == 0) {
        let _0x4047a3 = [],
          _0x506ab9 = false;
        for (let _0x46f738 of _0x2b4999?.["data"]?.["config"]?.["tabs"] || []) {
          const _0x4861c4 = {
            planCode: _0x46f738.rightsToken,
            rightCodes: []
          };
          for (let _0x20ac59 of (_0x2b4999?.["data"]?.["couponList"] || []).filter(_0x351d6f => _0x351d6f.planCode == _0x46f738.rightsToken)) {
            _0x20ac59.status == 0 ? _0x4861c4.rightCodes.push(_0x20ac59.rightCode) : _0x506ab9 = true;
          }
          _0x4861c4.rightCodes.length && _0x4047a3.push(_0x4861c4);
        }
        if (_0x4047a3.length) {
          await this.generalcoupon_fetch(_0x3380d7, _0x4047a3);
        } else {
          if (_0x506ab9) {
            const _0x40a102 = {
              act: _0x3380d7
            };
            this.log("今天已领过券", _0x40a102);
          } else {
            const _0xec8b2 = {
              act: _0x3380d7
            };
            this.log("没有可以领的券", _0xec8b2);
          }
        }
      } else {
        let _0x5db4a1 = _0x2b4999?.["msg"] || _0x2b4999?.["message"] || "";
        const _0x3e36bf = {
          act: _0x3380d7
        };
        this.log("查询社群可领取的券失败[" + _0x112e88 + "]: " + _0x5db4a1, _0x3e36bf);
      }
    } catch (_0x425d80) {
      console.log(_0x425d80);
    }
  }
  async generalcoupon_fetch(_0x571a65, _0x5cf650, _0x232997 = {}) {
    try {
      const _0x5a748f = {
        fn: "generalcoupon_fetch",
        method: "post",
        url: "https://promotion.waimai.meituan.com/playcenter/generalcoupon/fetch",
        json: {}
      };
      _0x5a748f.json.ctype = "wm_wxapp";
      _0x5a748f.json.fpPlatform = 13;
      _0x5a748f.json.wxOpenId = this.openid;
      _0x5a748f.json.appVersion = "";
      _0x5a748f.json.activityViewId = _0x571a65;
      _0x5a748f.json.tabs = _0x5cf650;
      _0x5a748f.json.gdId = 0;
      _0x5a748f.json.pageId = 0;
      _0x5a748f.json.instanceId = "";
      _0x5a748f.json.mtFingerprint = "";
      let {
          result: _0x1d3fd8
        } = await this.request(_0x5a748f),
        _0x5b5119 = $.get(_0x1d3fd8, "code", -1),
        _0x182576 = $.get(_0x1d3fd8, "subcode", -1);
      if (_0x5b5119 == 0 && _0x182576 == 0) {
        let _0x120c71 = _0x1d3fd8?.["data"]?.["couponList"]?.["map"](_0x3cfd90 => "[" + _0x3cfd90.couponName + "]" + (_0x3cfd90.priceLimit || "无门槛") + "减" + _0x3cfd90.couponValue);
        this.notify_coupon(_0x120c71, "社群领券");
      } else {
        let _0x58781e = _0x1d3fd8?.["msg"] || _0x1d3fd8?.["message"] || "";
        if (!_0x58781e?.["includes"]("领券失败") || _0x2b198e) {
          const _0x316afd = {
            act: _0x571a65
          };
          this.log("社群领券失败[" + _0x5b5119 + "]: " + _0x58781e, _0x316afd);
        }
      }
    } catch (_0x2e71ab) {
      console.log(_0x2e71ab);
    }
  }
  async appMrzqTask() {
    $.log("---------------- APP-每日赚钱 ----------------");
    await this.earnDailyLogin();
    await this.earnDaily_task_list();
  }
  async ttsqTask() {
    $.log("---------------- 天天神券 ----------------");
    await this.inviteFetchcoupon();
    for (let _0x29b0b1 of _0xfb5652) {
      await this.popupcomponent_popup(_0x29b0b1);
    }
    for (let _0x544b0d of _0x272f72) {
      await this.gundamGrabV4(_0x544b0d);
    }
    for (let _0x1ec9cd of _0x41f50b) {
      await this.batchfetchcomponentcouponV2(_0x1ec9cd);
    }
    for (let _0xd798b5 of _0x34fede) {
      await this.signupRecord(_0xd798b5);
      await this.ttsqEntry(_0xd798b5);
    }
    for (let _0x394f2f of _0x343738) {
      await this.ttsqEntryLottery(_0x394f2f);
    }
  }
  async wxSqsqTask() {
    $.log("---------------- WX-社群神券 ----------------");
    for (let _0x1b42e0 of _0x1887b5) {
      await this.turntableInfo(_0x1b42e0);
    }
  }
  async wxSqlqTask() {
    $.log("---------------- WX-社群领券 ----------------");
    for (let _0x4f5157 of _0x10559c) {
      await this.generalcoupon_info(_0x4f5157);
    }
  }
  async wxSqSignTask() {
    $.log("---------------- WX-社群签到 ----------------");
    for (let _0x3ae200 of _0x1811a2) {
      await this.clockInStatus(_0x3ae200);
    }
  }
  async wxSqSignlotteryTask() {
    $.log("---------------- WX-社群签到抽奖 ----------------");
    for (let _0x470a38 of _0x4b210e) {
      await this.signlottery_info(_0x470a38);
    }
  }
  async appCyfTask() {
    $.log("---------------- APP-抽月符 ----------------");
    await this.cardSaveAccess();
    await this.cardSaveShare();
    await this.cardLotteryNum();
  }
  async appXtbTask() {
    if (!this.run_xtb) {
      this.log("没有设置UUID, 不运行小团币");
      return;
    }
    if (!(await this.xtb_login())) {
      return;
    }
    await this.xtb_queryXtbCount();
    await this.xtb_queryMgcTaskInfo();
  }
  async commonTask() {
    $.log("---------------- 集合任务 ----------------");
    for (let _0x3ffad8 of _0x43522d) {
      $.log("============== " + _0x3ffad8.name + " ==============");
      if (_0x3ffad8.taskIdKeys.length > _0x3d99c6) {
        const _0x530163 = {
          cubePageId: _0x3ffad8.cubePageId,
          taskIdKeys: []
        };
        for (let _0x286027 of _0x3ffad8.taskIdKeys) {
          _0x530163.taskIdKeys.push(_0x286027);
          _0x530163.taskIdKeys.length >= _0x3d99c6 && (await this.getUserTasks(_0x530163), _0x530163.taskIdKeys = []);
        }
        if (_0x530163.taskIdKeys.length > 0) {
          await this.getUserTasks(_0x530163);
        }
      } else {
        await this.getUserTasks(_0x3ffad8);
      }
    }
    await this.goldHomePage("9587270bb85c");
  }
  async notifyTask() {
    if (this.run_xtb) {
      let {
        succ: _0x1c3c76,
        coin: _0x21cc74
      } = await this.xtb_queryXtbCount();
      if (_0x1c3c76) {
        const _0xc2d99a = {
          notify: true
        };
        this.log("小团币: " + _0x21cc74, _0xc2d99a);
      }
    }
    await this.walletMainpage();
  }
  async userTask() {
    const _0x294d00 = {
      notify: true
    };
    $.log("\n---------------- 账号[" + this.index + "] ----------------", _0x294d00);
    if (!(await this.getLoginedUserInfo())) {
      return;
    }
    await this.refTask();
    await this.ttsqTask();
    await this.wxSqSignTask();
    await this.wxSqSignlotteryTask();
    await this.wxSqsqTask();
    await this.wxSqlqTask();
    _0x1c88e4 != "false" && (await this.appMrzqTask());
    _0x3e7b63 != "false" && (await this.appCyfTask());
  }
}
!(async () => {
  if (!(await _0x34a34c())) {
    return;
  }
  await _0x91b1a();
  $.read_env(UserClass, ckNames, envSplitor);
  $.log("\n-------------------------------------");
  let _0x1f69f6 = _0x1c88e4 == "false" ? "关闭" : "开启";
  $.log("APP每日赚钱任务开关设置为: " + _0x1f69f6);
  let _0x4df96d = _0x38c74a == "false" ? "不随机提现" : "每日随机提现";
  $.log("APP每日赚钱设置为: " + _0x4df96d);
  let _0x503ba9 = _0x3e7b63 == "false" ? "关闭" : "开启";
  $.log("抽月符任务开关设置为: " + _0x503ba9);
  $.log("-------------------------------------");
  for (let _0xc98986 of $.userList) {
    await _0xc98986.userTask();
  }
  let _0xf91051 = $.userList.filter(_0x1e77fb => _0x1e77fb.valid);
  if (_0xf91051.length) {
    const _0x31e479 = {
      notify: true
    };
    $.log("\n---------------- 汇总推送 ----------------", _0x31e479);
    for (let _0xa7bc85 of _0xf91051) {
      await _0xa7bc85.notifyTask();
    }
  }
})().catch(_0x490160 => $.log(_0x490160)).finally(() => $.exitNow());
async function _0x34a34c() {
  let _0x59494c = false;
  try {
    const _0x5bc2a6 = {
      fn: "auth",
      method: "get",
      url: _0x4d8340
    };
    let {
      statusCode: _0x38d91e,
      result: _0x56486c
    } = await _0x2397a8.request(_0x5bc2a6);
    if (_0x38d91e != 200) {
      return Promise.resolve();
    }
    if (_0x56486c?.["code"] == 0) {
      _0x56486c = JSON.parse(_0x56486c.data.file.data);
      /*if (_0x56486c?.["commonNotify"] && _0x56486c.commonNotify.length > 0) {
        const _0x2a80e5 = {
          notify: true
        };
        $.log(_0x56486c.commonNotify.join("\n") + "\n", _0x2a80e5);
      }
      _0x56486c?.["commonMsg"] && _0x56486c.commonMsg.length > 0 && $.log(_0x56486c.commonMsg.join("\n") + "\n");
      */
      if (_0x56486c[_0x319c9a]) {
        let _0x17c124 = _0x56486c[_0x319c9a];
        _0x17c124.status == 0 ? _0x280ab6 >= _0x17c124.version ? (_0x59494c = true, /*$.log(_0x17c124.msg[_0x17c124.status]),*/ $.log(_0x17c124.updateMsg), $.log("现在运行的脚本版本是：" + _0x280ab6.toFixed(2) + "，最新脚本版本：" + _0x17c124.latestVersion.toFixed(2))) : $.log(_0x17c124.versionMsg) : $.log(_0x17c124.msg[_0x17c124.status]);
      } else {
        $.log(_0x56486c.errorMsg);
      }
    }
  } catch (_0x34fb10) {
    $.log(_0x34fb10);
  } finally {
    return _0x59494c;
  }
}
async function _0x91b1a() {
  let _0x368043 = false;
  try {
    const _0x588e28 = {
      fn: "auth",
      method: "get",
      url: _0x49cb2e
    };
    let {
      statusCode: _0x2a2e0a,
      result: _0x4bb8d4
    } = await _0x2397a8.request(_0x588e28);
    if (_0x2a2e0a != 200) {
      return Promise.resolve();
    }
    if (_0x4bb8d4?.["code"] == 0) {
      _0x4bb8d4 = JSON.parse(_0x4bb8d4.data.file.data);
      //inviteCode = _0x4bb8d4?.["inviteCode"] || inviteCode;
      for (let _0xbb2f97 of _0x4bb8d4?.["mrzqTaskId_all"] || []) {
        !_0x34548b.includes(_0xbb2f97) && _0x34548b.push(_0xbb2f97);
      }
      for (let _0x58b835 of _0x4bb8d4?.["commonTaskConf"] || []) {
        _0x43522d.filter(_0x14bbef => _0x14bbef.name == _0x58b835.name)?.["length"] == 0 && _0x43522d.push(_0x58b835);
      }
      if (_0x4bb8d4?.["gundomConfV4"]?.["length"]) {
        _0x272f72 = _0x4bb8d4.gundomConfV4;
      }
      if (_0x4bb8d4?.["batchConf"]?.["length"]) {
        _0x41f50b = _0x4bb8d4.batchConf;
      }
      if (_0x4bb8d4?.["pid_list"]?.["length"]) {
        _0x4fbf00 = _0x4bb8d4.pid_list;
      }
      for (let _0x4a5d54 of _0x4bb8d4?.["sqsqIdList"] || []) {
        !_0x1887b5.includes(_0x4a5d54) && _0x1887b5.push(_0x4a5d54);
      }
      for (let _0x13c805 of _0x4bb8d4?.["sqSignIdList"] || []) {
        !_0x1811a2.includes(_0x13c805) && _0x1811a2.push(_0x13c805);
      }
      for (let _0x39e768 of _0x4bb8d4?.["ttsqSignIdList"] || []) {
        !_0x34fede.includes(_0x39e768) && _0x34fede.push(_0x39e768);
      }
    }
  } catch (_0x434d3b) {
    $.log(_0x434d3b);
  } finally {
    return _0x368043;
  }
}