/*
美团 v3.13

美团V3仅支持青龙等nodejs环境, 不支持圈X
自动领券和完成一些活动任务
建议按推荐定时跑, 每天10点15点17点有券可以抽

3.13 开启小团币
小团币一天貌似要跑5轮左右才会拿满金币

APP每日赚钱: 默认会每日自动随机, 要关闭随机提现的话设置变量 MT_AutoWithdraw 为 false
不想运行每日赚钱的, 设置变量 MT_MrzqTask 为 false: export MT_MrzqTask="false"
不想运行抽月符的, 设置变量 MT_CyfTask 为 false: export MT_CyfTask="false"
不想运行小团币的, 设置变量 MT_XtbTask 为 false: export MT_CyfTask="false"

自行捉包把meituan.com里面的token(一般在请求头里)填到变量 MT_Cookie 中, 多账号换行或&或@隔开
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

const _0x341dc5 = 15000,
  _0x11bf64 = 3,
  _0xe26294 = process.env[envPrefix + "AutoWithdraw"] || "true",
  _0x123762 = process.env[envPrefix + "MrzqTask"] || "true",
  _0x35fa61 = process.env[envPrefix + "CyfTask"] || "true",
  _0x7f3856 = process.env[envPrefix + "XtbTask"] || "true";
const _0x26f06f = false,
  _0x297fa3 = 3.13,
  _0x3e749d = "meituan",
  _0x46e230 = "https://leafxcy.coding.net/api/user/leafxcy/project/validcode/shared-depot/validCode/git/blob/master/code.json",
  _0x99e92f = "https://leafxcy.coding.net/api/user/leafxcy/project/validcode/shared-depot/validCode/git/blob/master/" + _0x3e749d + ".json",
  _0x30d1d6 = "Mozilla/5.0 (iPhone; CPU iPhone OS 16_1_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.33(0x18002129) NetType/WIFI Language/zh_CN",
  _0x3e12e6 = "wxde8ac0a21135c07d",
  _0x1f9627 = "1399386702",
  _0x3f868e = "2.30.3",
  _0x511da7 = "iphone",
  _0x960eb4 = "AwQAAABJAgAAAAEAAAAyAAAAPLgC95WH3MyqngAoyM/hf1hEoKrGdo0pJ5DI44e1wGF9AT3PH7Wes03actC2n/GVnwfURonD78PewMUppAAAADgCEZv2akitiLnGkQIH6r67N1V9EUFpKyBOQRSRKpv9Awnm6LwnygipNjcIwXXJZEv5ddnUSW8vZQ==",
  _0x4d9786 = "0123456789",
  _0x62b846 = "qwertyuiopasdfghjklzxcvbnm",
  _0x1c0875 = _0x4d9786 + _0x62b846 + _0x62b846.toUpperCase();
let _0x4321a7 = "114.07" + $.randomString(12, _0x4d9786),
  _0x4b66ab = "22.52" + $.randomString(13, _0x4d9786),
  inviteCode = "NnOIp-QOs8SiYF1dcSlL5r8phPrCf6qkH7evMyjIoureqol0OXXaopfjjblE0yPge-nmlRKIDEgmTxF7oaoA4OfQjhGdF522KA_poICzK21VFORrK_ggku9ewgI6-qR5VCf7Blcp0wY6_CtAKvFkqFYXG42pu_6MtY7K6RDMjic",
  inviteCode2 = "NnOIp-QOs8SiYF1dcSlL5r8phPrCf6qkH7evMyjIoureqol0OXXaopfjjblE0yPgFQmJJWVFWc4CivexLwFRdcbcHaALd6__chOQeI55cEbhOmMc4oO8cWhZxYuQm9DsSt1nfKeLK2Rz8ExgU4PovBpOFx_LiHkpyxZNebiIkCE",
  _0x42faf0 = [],
  _0x217615 = [];
const _0x4af5b5 = 600,
  _0x2369ca = 10,
  _0x5c25de = ["1005", "1007"];
let _0x3cd0c7 = ["631682c504", "bb88750009", "9f90f45850", "90e9ecbe6a", "b6bfd8c1bc", "d4caf84940", "8decbc4c98", "c6026478e4", "4353a111e9", "7ceb1c14a7", "89515f0102", "63bec5af07", "1c8df37ffe", "36eedbe86c", "6ab415d70c", "3c309c7f26", "66c2938e1d", "3497a4fd05", "7f1f7ec5a4", "2fb53287b2", "2b0ada0dd7", "495070b239", "176f400a8f", "672129ff6d", "a479497fa6", "97ea404b56", "320ffa53e7", "6ccbda387f", "6f2d5f144f", "563983d5f1", "6f70050a62", "dfd9c44d7f", "6d5461c6dd", "a7331f5c94", "8d3891bef9", "eb6094dcaa", "11c95cc416", "351c3f4810", "67bd2e0988", "cdb75f714d", "3a6eba11a1", "76f9dc2980", "30644bcb35", "d1a1d62e6c", "8af63652ba", "075eb403be", "361ba45eff", "cfbb835838", "e26f305436", "ed33f82fa9", "e36bae3f8f", "6696ff7825", "b7719de06c", "2ab24bbc57", "2d98ddf8ac", "406fb78bfd", "9b84c4503a", "55ce3f059d", "cd06f8210b", "f6706f9b33", "34a718f16a", "f5e2218b18", "c7f6a889ff", "2583c8ba46", "45e325543c", "a162c96304"],
  _0x1c21c8 = ["b24pg8jaFTeNadCXq0lb3A", "yLm-IynkBUQLt09kALFv8Q", "Ox5_0TfqOg6b3UfkKS3rUg", "1THsbmQsYTIbi5N066B1zg", "TADnCANwheP5AKOjx3NpgA", "G_2Eu_n12fvbBgf3gBd2-A"],
  _0x529b0b = ["06hFC-C1WGiAQYUGya5QJA", "5IFmI13NeO7kRPW1jUj7Lw", "ySJ2HpgexeI0TJcLkA_5Ug"],
  _0x445696 = ["ZCSW0XVhcm3NZ8yeoGXeaA", "KXGjpKrk2h_43vUrIKbzDA", "l3emawQka8JjlE6LMyYT3g", "r9348AwSwnwP715csHvDqw", "XVsZc3p1O1jd-uTG4EjyXw", "9khEyiqt2tKFyZSjvqphkQ", "_p2QL78Fao6bsexHzofp-w", "jXL-9iEaRTsv-FZdpX4Z4g"],
  _0x454ca5 = ["WdtEnEpZZScQjcZdnOMyRw"],
  _0x6c61f0 = [];
const _0x4a443e = {
  name: "APP-天天领金币",
  cubePageId: 184008,
  taskIdKeys: ["e8e72a2c8d", "ea69bee3c0", "129328922f", "15b494e7bc", "d36be8140b", "77c78d45cc"]
};
const _0x90b93 = {
  name: "APP-每日赚钱",
  cubePageId: 10000003,
  taskIdKeys: ["b6e6e96128", "710d92816e", "fc43b223be"]
};
const _0x2debde = {
  name: "WX-每日赚钱",
  cubePageId: 184008,
  taskIdKeys: ["1fff834702"]
};
const _0xc54422 = {
  name: "APP-团团神券-魔法石",
  cubePageId: 88888889,
  taskIdKeys: ["a941c20450", "cdcc8a8195", "eb03206b17", "5c919dfbd8", "8f53427c39", "f749a47257", "4d609dde67", "3e5cbc8120", "532e764346", "7613d02997"]
};
const _0x40f04f = {
  name: "WX-天天赚钱",
  cubePageId: 123,
  taskIdKeys: _0x3cd0c7
};
const _0x316612 = [_0x4a443e, _0x90b93, _0x2debde, _0xc54422, _0x40f04f],
  _0x4a9b97 = {
    NORMAL_CARD: "普通卡",
    SENIOR_CARD: "稀有卡"
  };
const _0x500717 = {
  EAT: "吃",
  LIVE: "住",
  WALK: "行",
  TRAVEL: "游",
  SHOP: "购",
  ENTERTAIN: "娱"
};
const _0x11f997 = [15169, 15170, 15171, 15172, 15173];
let _0x356ad9 = [];

class _0x21bb7b {
  constructor() {
    this.index = $.userIdx++;
    this.name = "";
    this.valid = false;
    const _0x4805d1 = {
      limit: 0
    };
    const _0x228d94 = {
      Connection: "keep-alive"
    };
    const _0x3561cb = {
      retry: _0x4805d1,
      timeout: _0x341dc5,
      followRedirect: false,
      headers: _0x228d94
    };
    this.got = got.extend(_0x3561cb);
  }
  log(_0x15f1c9, _0x5d7414 = {}) {
    var _0x216e9d = "",
      _0x42ce1c = $.userCount.toString().length;
    if (this.index) {
      _0x216e9d += "账号[" + $.padStr(this.index, _0x42ce1c) + "]";
    }
    if (this.name) {
      _0x216e9d += "[" + this.name + "]";
    }
    if (_0x5d7414?.["act"]) {
      _0x216e9d += "[" + _0x5d7414.act + "]";
    }
    $.log(_0x216e9d + _0x15f1c9, _0x5d7414);
  }
  async request(_0x972277) {
    const _0xfc1607 = ["ECONNRESET", "EADDRINUSE", "ENOTFOUND", "EAI_AGAIN"],
      _0x130fd5 = ["TimeoutError"];
    var _0x167aa4 = null,
      _0x1f53b6 = 0,
      _0x1467f3 = _0x972277.fn || _0x972277.url;
    _0x972277.method = _0x972277?.["method"]?.["toUpperCase"]() || "GET";
    let _0x5782b7;
    while (_0x1f53b6 < _0x11bf64) {
      try {
        _0x1f53b6++;
        _0x5782b7 = null;
        let _0x5b1804 = null,
          _0x3f422f = _0x972277?.["timeout"] || this.got?.["defaults"]?.["options"]?.["timeout"]?.["request"] || _0x341dc5,
          _0x1ae7e1 = false;
        await new Promise(async _0x537957 => {
          setTimeout(() => {
            _0x1ae7e1 = true;
            _0x537957();
          }, _0x3f422f);
          await this.got(_0x972277).then(_0xed20d2 => {
            _0x167aa4 = _0xed20d2;
          }, _0xf23f25 => {
            _0x5b1804 = _0xf23f25;
            _0x167aa4 = _0xf23f25.response;
            _0x5782b7 = _0x5b1804?.["code"];
          });
          _0x537957();
        });
        if (_0x1ae7e1) {
          this.log("[" + _0x1467f3 + "]请求超时(" + _0x3f422f / 1000 + "秒)，重试第" + _0x1f53b6 + "次");
        } else {
          if (_0x130fd5.includes(_0x5b1804?.["name"])) {
            this.log("[" + _0x1467f3 + "]请求超时(" + _0x5b1804.code + ")，重试第" + _0x1f53b6 + "次");
          } else {
            if (_0xfc1607.includes(_0x5b1804?.["code"])) {
              this.log("[" + _0x1467f3 + "]请求错误(" + _0x5b1804.code + ")，重试第" + _0x1f53b6 + "次");
            } else {
              let _0x2a8743 = _0x167aa4?.["statusCode"] || 999,
                _0x278a87 = _0x2a8743 / 100 | 0;
              if (_0x278a87 > 3) {
                this.log("请求[" + _0x1467f3 + "]返回[" + _0x2a8743 + "]");
              }
              if (_0x278a87 <= 4) {
                break;
              }
            }
          }
        }
      } catch (_0x3950ee) {
        _0x3950ee.name == "TimeoutError" ? this.log("[" + _0x1467f3 + "]请求超时，重试第" + _0x1f53b6 + "次") : this.log("[" + _0x1467f3 + "]请求错误(" + _0x3950ee.message + ")，重试第" + _0x1f53b6 + "次");
      }
    }
    const _0x18d42e = {
      statusCode: _0x5782b7 || -1,
      headers: null,
      result: null
    };
    if (_0x167aa4 == null) {
      return Promise.resolve(_0x18d42e);
    }
    let {
      statusCode: _0xd99953,
      headers: _0x4daed8,
      body: _0x217a15
    } = _0x167aa4;
    if (_0x217a15) {
      try {
        _0x217a15 = JSON.parse(_0x217a15);
      } catch {}
    }
    const _0x4d39f2 = {
      statusCode: _0xd99953,
      headers: _0x4daed8,
      result: _0x217a15
    };
    return Promise.resolve(_0x4d39f2);
  }
}
let _0x1f2798 = new _0x21bb7b();
class UserClass extends _0x21bb7b {
  constructor(ck) {
    super();
    Object.assign(this, $.CkToJson(ck));
    this.t_earnDaily = 0;
    this.init_xtb_coin = 0;
    this.xtb_coin = 0;
    this.uuid = $.randomPattern("186ebxxxxxxxx-22e49fxxxxxxxx-0-0-186ebxxxxxxxx");
    this.openid = $.randomString(7, _0x1c0875) + "-" + $.randomString(20, _0x1c0875);
    this.cookie = "token=" + this.token + "; mt_c_token=" + this.token + "; openid=" + this.openid + ";";
    this.valid_fp = false;
    this.fp = "H5dfp_1.8.2_tttt_CziTmz1LjARvHzKKzoDtmdBgc6Df5b+sgrXDtVBPjiCayshtLKt1gh8PjGGT";
    //MTS && (this.h5guard = new MTS(this.cookie, _0x30d1d6));
    MTS && (this.h5guard = MTS);
    this.got = this.got.extend({
      headers: {
        "User-Agent": _0x30d1d6,
        token: this.token,
        mtoken: this.token,
        openid: this.openid,
        uuid: this.uuid,
        "M-APPKEY": "wxmp_mt-weapp",
        clientversion: _0x3f868e,
        utm_medium: _0x511da7,
        openIdCipher: _0x960eb4,
        cookie: this.cookie
      }
    });
  }
  notify_coupon(_0x204b7c, _0x186385 = "领券", _0x23903d = {}) {
    const _0x16ef92 = {
      notify: true
    };
    let _0x11c8b6 = Object.assign(_0x16ef92, _0x23903d);
    for (let _0x401634 of _0x204b7c) {
      this.log(_0x186385 + ": " + _0x401634, _0x11c8b6);
    }
  }
  async get_mtgsig(url, data) {
    const _0x29e888 = {
      a1: "1.1",
      a2: 1700365130585,
      a3: "1vyxz7555u245u5x11v5790z818348w9813323332u797958u759zuy9",
      a5: "6feqh9xQjtiJ3UHNHIFs",
      a6: "hs1.4a4gsvX1s4RLQYqBR3sFhAetGq48eVYBW6Cn/alJLXhKJmvseSxVGkCW67PIGmh1ll21TL1+x/WxxCGvlTdlaUpb5NxEMCD7bPltS8KSHdzc=",
      x0: 4,
      d1: "b6d3aab11db3c6cd661a8221ab606c78"
    };
    let Req = {
      headers: {
        mtgsig: JSON.stringify(_0x29e888)
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
    }
    return Req;
  }
  async getfp(_0x175378 = false) {
    if (!this.valid_fp) {
      if (this.h5guard && _0x175378) {
        //this.fp = this.h5guard.getfp();
        this.fp = MTS.mtFingerprint();
        this.valid_fp = true;
      } else {}
    }
    return this.fp;
  }
  async get_app_riskForm(_0x336585 = false) {
    let _0x600f27 = await this.getfp(_0x336585);
    const _0x531abe = {
      ip: "",
      fingerprint: _0x600f27,
      cityId: "30",
      platform: 5,
      app: 0,
      version: "12.8.202",
      uuid: ""
    };
    return _0x531abe;
  }
  async get_riskForm(_0x4a2aeb = false) {
    let _0x4d0381 = await this.getfp(_0x4a2aeb);
    const _0x11eb8c = {
      openid: this.openid,
      appid: _0x3e12e6,
      mchid: _0x1f9627
    };
    let _0x457112 = {
      uuid: this.uuid,
      userid: this.userId,
      openid: this.openid,
      expoId: _0x960eb4,
      ip: "",
      partner: 0,
      wxRiskLevel: JSON.stringify(_0x11eb8c),
      platform: 13,
      appletsFingerprint: _0x4d0381,
      wechatFingerprint: _0x4d0381
    };
    return _0x457112;
  }
  async encode_riskForm(_0x1000df = false) {
    let _0x309d35 = await this.get_riskForm(_0x1000df);
    return base64_encode(JSON.stringify(_0x309d35));
  }
  async getLoginedUserInfo(_0xea21a5 = {}) {
    let _0x5ebbd7 = false;
    try {
      const _0x5183aa = {
        token: this.token
      };
      const _0x30b711 = {
        fn: "getLoginedUserInfo",
        method: "get",
        url: "https://i.meituan.com/wrapapi/getLoginedUserInfo",
        searchParams: _0x5183aa
      };
      let {
        result: _0x46ace7
      } = await this.request(_0x30b711);
      if (_0x46ace7?.["mobile"]) {
        _0x5ebbd7 = true;
        this.valid = true;
        this.name = _0x46ace7.mobile;
        this.userId = Number(_0x46ace7.userId);
        this.log("登录成功");
      } else {
        this.log("获取账号信息失败, ck可能失效");//, {"notify": true}
        await expireNotify(this.userId, this.index);
      }
    } catch (_0xf1fd32) {
      console.log(_0xf1fd32);
    } finally {
      return _0x5ebbd7;
    }
  }
  async inviteFetchcoupon(_0x2064e3 = {}) {
    try {
      const _0x4334b3 = {
        ctype: "wxapp",
        fpPlatform: 13,
        isMini: 1,
        token: this.token,
        inviteCode: this.name!="nyqty" ? inviteCode :  inviteCode2
      };
      const _0x3ab346 = {
        fn: "inviteFetchcoupon",
        method: "get",
        url: "https://promotion-waimai.meituan.com/invite/fetchcoupon",
        searchParams: _0x4334b3
      };
      let {
          result: _0x1d1c41
        } = await this.request(_0x3ab346),
        _0x519881 = $.get(_0x1d1c41, "code", -1),
        _0x3c8c11 = $.get(_0x1d1c41, "subcode", -1);
      if ((_0x519881 == 0 || _0x519881 == 1) && (_0x3c8c11 == 0 || _0x3c8c11 == 2)) {
        let _0x1a45cb = _0x1d1c41?.["data"]?.["couponList"]?.["map"](_0xc6b42 => "[" + _0xc6b42.couponTitle + "]" + (_0xc6b42.priceLimit || "无门槛") + "减" + _0xc6b42.couponValue);
        this.notify_coupon(_0x1a45cb);
      } else {
        let _0x143e89 = _0x1d1c41?.["msg"] || _0x1d1c41?.["message"] || "";
        this.log("领券失败[" + _0x519881 + "]: " + _0x143e89);
      }
    } catch (_0x3b5971) {
      console.log(_0x3b5971);
    }
  }
  async gundamGrabV4(_0x23819a, _0x2733d7 = {}) {
    try {
      const _0x5c50ea = {
        fn: "gundamGrabV4",
        method: "post",
        url: "https://mediacps.meituan.com/gundam/gundamGrabV4",
        json: _0x23819a,
        headers: {}
      };
      _0x5c50ea.headers.Origin = "https://market.waimai.meituan.com";
      _0x5c50ea.headers.Referer = "https://market.waimai.meituan.com/";
      let {
          result: _0x10b70a
        } = await this.request(_0x5c50ea),
        _0x58c6b7 = $.get(_0x10b70a, "code", -1);
      if (_0x58c6b7 == 0) {
        let _0x815e75 = _0x10b70a?.["data"]?.["allCoupons"]?.["map"](_0x4989bf => "[" + _0x4989bf.couponName + "]" + (_0x4989bf.amountLimit || "无门槛") + "减" + _0x4989bf.couponAmount);
        this.notify_coupon(_0x815e75);
      } else {
        let _0x3e37f2 = _0x10b70a?.["msg"] || _0x10b70a?.["message"] || "";
        this.log("领券失败[" + _0x58c6b7 + "]: " + _0x3e37f2);
      }
    } catch (_0x274e2c) {
      console.log(_0x274e2c);
    }
  }
  async turntableDraw(_0x44509d, _0x59bab0 = {}) {
    try {
      let _0x8be4b9 = {
          fn: "turntableDraw",
          method: "post",
          url: "https://promotion.waimai.meituan.com/lottery/turntable/draw",
          searchParams: {
            actualLat: _0x4b66ab,
            actualLng: _0x4321a7,
            initialLat: _0x4b66ab,
            initialLng: _0x4321a7,
            cType: $.get(_0x59bab0, "cType", "wm_wxapp"),
            wm_appversion: $.get(_0x59bab0, "wm_appversion", "9.19.6"),
            gdPageId: $.get(_0x59bab0, "gdPageId", "460584"),
            token: this.token,
            userId: this.userId,
            uuid: this.uuid
          },
          json: {
            activityViewId: _0x44509d,
            appType: 0,
            deviceType: 2,
            wxOpenId: this.openid,
            fpPlatform: 5,
            mtFingerprint: ""
          }
        },
        {
          result: _0x3c0bab
        } = await this.request(_0x8be4b9),
        _0x257c3e = $.get(_0x3c0bab, "code", -1);
      if (_0x257c3e == 0) {
        let _0x4c76a4 = [];
        for (let _0x591cfa of _0x3c0bab?.["data"]?.["awards"]) {
          _0x591cfa.couponType == 1 ? _0x4c76a4.push("[" + _0x591cfa.name + "]" + (_0x591cfa.orderAmountLimit || "无门槛") + "减" + _0x591cfa.amount) : _0x4c76a4.push(_0x591cfa.desc);
        }
        const _0xddea06 = {
          act: _0x44509d
        };
        this.notify_coupon(_0x4c76a4, "社群抽奖", _0xddea06);
      } else {
        let _0x5602ee = _0x3c0bab?.["msg"] || _0x3c0bab?.["message"] || "";
        if (!_0x5602ee?.["includes"]("可抽奖次数不足") || _0x26f06f) {
          const _0x30e157 = {
            act: _0x44509d
          };
          this.log("社群抽奖失败[" + _0x257c3e + "]: " + _0x5602ee, _0x30e157);
        }
      }
    } catch (_0x2d9afc) {
      console.log(_0x2d9afc);
    }
  }
  async signupRecord(_0x49d8c9, _0x533afd = {}) {
    try {
      let _0x13c369 = {
          fn: "signupRecord",
          method: "get",
          url: "https://promotion.waimai.meituan.com/playcenter/common/v1/treasurebox/signup/circle/record",
          searchParams: {
            activityViewId: _0x49d8c9,
            isInDpEnv: 0,
            isMini: 1,
            cType: $.get(_0x533afd, "cType", "wm_wxapp")
          }
        },
        {
          result: _0x73dc85
        } = await this.request(_0x13c369),
        _0x292ed1 = $.get(_0x73dc85, "code", -1);
      if (_0x292ed1 == 0) {
        this.log("[" + _0x49d8c9 + "]已连续签到" + (_0x73dc85?.["data"]?.["signUpNum"] || 0) + "天");
        for (let _0x11a9b2 of _0x73dc85?.["data"]?.["rewardStatus"]?.["filter"](_0x3f540e => _0x3f540e.status == 1)) {
          await this.signupGetBox(_0x49d8c9, _0x11a9b2.stageDayNum);
        }
      } else {
        let _0x37c5ff = _0x73dc85?.["msg"] || _0x73dc85?.["message"] || "";
        if (!_0x37c5ff?.["includes"]("活动失效") || _0x26f06f) {
          const _0x179d6d = {
            act: _0x49d8c9
          };
          this.log("查询签到失败[" + _0x292ed1 + "]: " + _0x37c5ff, _0x179d6d);
        }
      }
    } catch (_0x3596ff) {
      console.log(_0x3596ff);
    }
  }
  async signupGetBox(_0x33a576, _0x13ea1d, _0x405475 = {}) {
    try {
      const _0x5895ed = {
        signUpDayNum: _0x13ea1d
      };
      let _0xcbcc1a = {
          fn: "signupGetBox",
          method: "post",
          url: "https://promotion.waimai.meituan.com/playcenter/common/v1/treasurebox/signup/stage/reward/get",
          searchParams: {
            isInDpEnv: 0,
            isMini: 1,
            cType: $.get(_0x405475, "cType", "wm_wxapp")
          },
          json: {
            activityViewId: _0x33a576,
            actionCode: 1000,
            lat: _0x4b66ab,
            lng: _0x4321a7,
            fpPlatform: 13,
            bizParams: JSON.stringify(_0x5895ed),
            utmSource: "",
            utmCampaign: "",
            gdId: 421412,
            codeVersion: 1,
            mtFingerprint: ""
          }
        },
        {
          result: _0x58ee50
        } = await this.request(_0xcbcc1a),
        _0x12b259 = $.get(_0x58ee50, "code", -1);
      if (_0x12b259 == 0) {
        let _0x177292 = _0x58ee50?.["data"]?.["prizeInfoList"]?.["map"](_0x2e7550 => "[" + _0x2e7550.couponInfo.couponTitle + "]" + (_0x2e7550.couponInfo.priceLimit || "无门槛") + "减" + _0x2e7550.couponInfo.couponValue);
        const _0x3923a8 = {
          act: _0x33a576
        };
        this.notify_coupon(_0x177292, "开签到宝箱", _0x3923a8);
      } else {
        let _0x5d11e7 = _0x58ee50?.["msg"] || _0x58ee50?.["message"] || "";
        if (!_0x5d11e7?.["includes"]("预发失败") || _0x26f06f) {
          const _0x517955 = {
            act: _0x33a576
          };
          this.log("开签到宝箱失败[" + _0x12b259 + "]: " + _0x5d11e7, _0x517955);
        }
      }
    } catch (_0x103343) {
      console.log(_0x103343);
    }
  }
  async ttsqEntry(_0x4d5521, _0x5ecd09 = {}) {
    try {
      const _0x15f934 = {
        activityViewId: _0x4d5521,
        actionCodes: 1000,
        querySignupConfig: 1,
        lat: _0x4b66ab,
        lng: _0x4321a7
      };
      const _0x41d1b7 = {
        fn: "signupRecord",
        method: "get",
        url: "https://promotion.waimai.meituan.com/playcenter/common/v1/entry",
        searchParams: _0x15f934
      };
      let {
          result: _0x2e740b
        } = await this.request(_0x41d1b7),
        _0x11d360 = $.get(_0x2e740b, "code", -1);
      if (_0x11d360 == 0) {
        if (_0x2e740b.data.actionInfoList) {
          for (let _0x56f24c of _0x2e740b.data.actionInfoList) {
            await this.ttsqDoAction(_0x4d5521, _0x56f24c.actionCode || 1000);
          }
        }
      } else {
        let _0x7bed4b = _0x2e740b?.["msg"] || _0x2e740b?.["message"] || "";
        const _0x170a9c = {
          act: _0x4d5521
        };
        this.log("查询天天神券宝箱失败[" + _0x11d360 + "]: " + _0x7bed4b, _0x170a9c);
      }
    } catch (_0x30e48a) {
      console.log(_0x30e48a);
    }
  }
  async ttsqDoAction(_0x1aa29a, _0x429d78, _0x1ebd2f = {}) {
    try {
      let _0x12aa59 = {
          fn: "ttsqDoAction",
          method: "post",
          url: "https://promotion.waimai.meituan.com/playcenter/common/v1/doaction",
          json: {
            activityViewId: _0x1aa29a,
            actionCode: parseInt(_0x429d78 || 1000),
            lat: _0x4b66ab,
            lng: _0x4321a7,
            gdId: 26403,
            fpPlatform: 13,
            utmSource: "",
            utmCampaign: "",
            mtFingerprint: ""
          }
        },
        {
          result: _0x3ab684
        } = await this.request(_0x12aa59),
        _0x4a41d4 = $.get(_0x3ab684, "code", -1);
      if (_0x4a41d4 == 0) {
        let _0x4f98b2 = _0x3ab684?.["data"]?.["prizeInfoList"]?.["map"](_0x4e0fb0 => _0x4e0fb0.awardType >= 0 ? "[" + _0x4e0fb0.couponInfo.couponTitle + "]" + (_0x4e0fb0.couponInfo.priceLimit || "无门槛") + "减" + _0x4e0fb0.couponInfo.couponValue : "")?.["filter"](_0xe7b30 => _0xe7b30);
        const _0x1758f8 = {
          act: _0x1aa29a
        };
        this.notify_coupon(_0x4f98b2, "开天天神券宝箱", _0x1758f8);
      } else {
        let _0x9faaab = _0x3ab684?.["msg"] || _0x3ab684?.["message"] || "";
        if (!_0x9faaab?.["includes"]("动作不满足执行条件") || _0x26f06f) {
          const _0x125d2d = {
            act: _0x1aa29a
          };
          this.log("开天天神券宝箱失败[" + _0x4a41d4 + "]: " + _0x9faaab, _0x125d2d);
        }
      }
    } catch (_0x362ffd) {
      console.log(_0x362ffd);
    }
  }
  async ttsqEntryLottery(_0x4ebbf0, _0x5a2363 = {}) {
    try {
      const _0x5682e3 = {
        fn: "signupRecord",
        method: "get",
        url: "https://promotion.waimai.meituan.com/playcenter/common/v1/entry",
        searchParams: {}
      };
      _0x5682e3.searchParams.isMini = 1;
      _0x5682e3.searchParams.ctype = "wm_wxapp";
      _0x5682e3.searchParams.isInDpEnv = 0;
      _0x5682e3.searchParams.activityViewId = _0x4ebbf0;
      _0x5682e3.searchParams.actionCodes = 1001;
      _0x5682e3.searchParams.lat = _0x4b66ab;
      _0x5682e3.searchParams.lng = _0x4321a7;
      let {
          result: _0x5849a0
        } = await this.request(_0x5682e3),
        _0x1a95e2 = $.get(_0x5849a0, "code", -1);
      if (_0x1a95e2 == 0) {
        if (_0x5849a0.data.actionInfoList) {
          for (let _0x145c38 of _0x5849a0.data.actionInfoList) {
            await this.ttsqDoActionLottery(_0x4ebbf0, _0x145c38.actionCode || 1001);
          }
        }
      } else {
        let _0x31094d = _0x5849a0?.["msg"] || _0x5849a0?.["message"] || "";
        const _0x192b32 = {
          act: _0x4ebbf0
        };
        this.log("查询天天神券抽奖失败[" + _0x1a95e2 + "]: " + _0x31094d, _0x192b32);
      }
    } catch (_0x3690cb) {
      console.log(_0x3690cb);
    }
  }
  async ttsqDoActionLottery(_0x5d4612, _0x44196e, _0x5076a7 = {}) {
    try {
      let _0x3bf676 = {
          fn: "ttsqDoAction",
          method: "post",
          url: "https://promotion.waimai.meituan.com/playcenter/common/v1/doaction",
          json: {
            activityViewId: _0x5d4612,
            actionCode: parseInt(_0x44196e || 1001),
            lat: _0x4b66ab,
            lng: _0x4321a7,
            gdId: 436181,
            instanceId: "16703954295670.59854316222808620"
          }
        },
        {
          result: _0x154689
        } = await this.request(_0x3bf676),
        _0x4acff9 = $.get(_0x154689, "code", -1);
      if (_0x4acff9 == 0) {
        let _0x3ec1b0 = _0x154689?.["data"]?.["prizeInfoList"]?.["map"](_0x4f2e08 => _0x4f2e08.awardType >= 0 ? "[" + (_0x4f2e08?.["couponInfo"]?.["couponTitle"] || "") + "]" + (_0x4f2e08?.["couponInfo"]?.["priceLimit"] || "无门槛") + "减" + (_0x4f2e08?.["couponInfo"]?.["couponValue"] || "") : "")?.["filter"](_0x18148b => _0x18148b);
        const _0x1249c3 = {
          act: _0x5d4612
        };
        this.notify_coupon(_0x3ec1b0, "天天神券抽奖", _0x1249c3);
      } else {
        let _0x54b6a5 = _0x154689?.["msg"] || _0x154689?.["message"] || "";
        if (!_0x54b6a5?.["includes"]("动作不满足执行条件") || _0x26f06f) {
          const _0x20afad = {
            act: _0x5d4612
          };
          this.log("天天神券抽奖失败[" + _0x4acff9 + "]: " + _0x54b6a5, _0x20afad);
        }
      }
    } catch (_0x7db928) {
      console.log(_0x7db928);
    }
  }
  async clockInStatus(_0x562193, _0x484682 = {}) {
    try {
      let _0x47bf75 = {
          fn: "clockInStatus",
          method: "get",
          url: "https://promotion.waimai.meituan.com/playcenter/common/v1/clock-in/status",
          searchParams: {
            activityViewId: _0x562193,
            ctype: $.get(_0x484682, "ctype", "wm_wxapp"),
            isInDpEnv: 0
          }
        },
        {
          result: _0x6e6ec7
        } = await this.request(_0x47bf75),
        _0x541475 = $.get(_0x6e6ec7, "code", -1);
      if (_0x541475 == 0) {
        let _0x3ec37a = new Date().getDay();
        for (let _0x358a2e of _0x6e6ec7.data.clockInStatus) {
          if (_0x358a2e.dayOfWeek % 7 == _0x3ec37a) {
            const _0x382860 = {
              act: _0x562193
            };
            this.log("今天社群" + (_0x358a2e.status ? "已" : "未") + "签到, 本周已签到" + _0x6e6ec7.data.clockInNum + "天", _0x382860);
            if (!_0x358a2e.status) {
              await this.clockInSign(_0x562193);
            }
            break;
          }
        }
        _0x6e6ec7.data.lotteryStatus == 1 && (await this.ttsqDoAction(_0x562193, 1001));
      } else {
        let _0x227321 = _0x6e6ec7?.["msg"] || _0x6e6ec7?.["message"] || "";
        const _0x2697bc = {
          act: _0x562193
        };
        this.log("查询社群签到失败[" + _0x541475 + "]: " + _0x227321, _0x2697bc);
      }
    } catch (_0x4d47dd) {
      console.log(_0x4d47dd);
    }
  }
  async clockInSign(_0x27f140, _0x99e370 = {}) {
    try {
      const _0x1e159e = {
        activityViewId: _0x27f140,
        actionCode: 1001,
        lat: _0x4b66ab,
        lng: _0x4321a7
      };
      let _0x205ba8 = {
          fn: "clockInSign",
          method: "post",
          url: "https://promotion.waimai.meituan.com/playcenter/common/v1/clock-in",
          searchParams: {
            isMini: 1,
            ctype: $.get(_0x99e370, "ctype", "wm_wxapp"),
            isInDpEnv: 0
          },
          json: _0x1e159e
        },
        {
          result: _0x2e29e8
        } = await this.request(_0x205ba8),
        _0x4a7827 = $.get(_0x2e29e8, "code", -1);
      if (_0x4a7827 == 0) {
        let _0x15bf1c = _0x2e29e8?.["data"]?.["prizeInfoList"]?.["map"](_0x4893f0 => "[" + _0x4893f0.couponInfo.couponTitle + "]" + (_0x4893f0.couponInfo.priceLimit || "无门槛") + "减" + _0x4893f0.couponInfo.couponValue);
        const _0x5e775a = {
          act: _0x27f140
        };
        this.notify_coupon(_0x15bf1c, "社群签到领券", _0x5e775a);
      } else {
        let _0x2f71c8 = _0x2e29e8?.["msg"] || _0x2e29e8?.["message"] || "";
        const _0x88fbf3 = {
          act: _0x27f140
        };
        this.log("社群签到失败[" + _0x4a7827 + "]: " + _0x2f71c8, _0x88fbf3);
      }
    } catch (_0x6c17fa) {
      console.log(_0x6c17fa);
    }
  }
  async cardLotteryNum(_0x30b0eb = {}) {
    try {
      const _0x3ea3ea = {
        fn: "cardLotteryNum",
        method: "post",
        url: "https://mgm.meituan.com/marketing/cardsCollect/api/cardLotteryNum",
        json: {}
      };
      _0x3ea3ea.json.activityId = "1116";
      _0x3ea3ea.json.topicIdList = ["1380101169187258449", "1380101260094521416", "1412292930126868547"];
      let {
        result: _0x24106f
      } = await this.request(_0x3ea3ea);
      if (_0x24106f?.["lotteryNum"] >= 0) {
        let _0x52335b = _0x24106f.lotteryNum;
        this.log("有" + _0x52335b + "次抽月符机会");
        while (_0x52335b-- > 0) {
          await this.lotteryfrompool(_0x24106f.poolIdList);
        }
      } else {
        let _0x465e0f = _0x24106f?.["msg"] || _0x24106f?.["message"] || "";
        this.log("查询抽月符次数失败: " + _0x465e0f);
      }
    } catch (_0x16d3f2) {
      console.log(_0x16d3f2);
    }
  }
  async cardSaveAccess(_0x44fbb1 = {}) {
    try {
      const _0x4edc4e = {
        playerId: 1
      };
      const _0x367086 = {
        fn: "cardSaveAccess",
        method: "post",
        url: "https://mgm.meituan.com/marketing/cardsCollect/api/saveAccess",
        json: _0x4edc4e
      };
      await this.request(_0x367086);
    } catch (_0x181366) {
      console.log(_0x181366);
    }
  }
  async cardSaveShare(_0x38ffa7 = {}) {
    try {
      const _0x4e156e = {
        playerId: 1,
        shareWay: 1,
        shareContentType: 1,
        shareContentId: "29"
      };
      const _0x1fadf6 = {
        fn: "cyfSaveShare",
        method: "post",
        url: "https://mgm.meituan.com/marketing/cardsCollect/api/saveShare",
        json: _0x4e156e
      };
      await this.request(_0x1fadf6);
    } catch (_0x552bc2) {
      console.log(_0x552bc2);
    }
  }
  async lotteryfrompool(_0x55ff67, _0x241fe5 = {}) {
    try {
      const _0x1a26bf = {
        poolList: _0x55ff67
      };
      const _0x4ccb6c = {
        fn: "lotteryfrompool",
        method: "post",
        url: "https://mgm.meituan.com/marketing/cardsCollect/api/lotteryfrompool",
        json: _0x1a26bf
      };
      let {
        result: _0xe1f993
      } = await this.request(_0x4ccb6c);
      if (_0xe1f993?.["prizeInfo"]?.["name"]) {
        this.log("抽到月符: [" + _0xe1f993?.["prizeInfo"]?.["name"] + "]");
        await this.getCardInfo(_0xe1f993?.["lotteryAwardSerialNo"]?.["value"]);
      } else {
        let _0x2eb4ac = _0xe1f993?.["msg"] || _0xe1f993?.["message"] || "";
        this.log("抽月符失败: " + _0x2eb4ac);
      }
    } catch (_0x26f706) {
      console.log(_0x26f706);
    }
  }
  async getCardInfo(_0x283275, _0x284daa = {}) {
    try {
      const _0x1479a4 = {
        lotteryAwardSerialNo: _0x283275
      };
      const _0x373156 = {
        fn: "getCardInfo",
        method: "get",
        url: "https://mgm.meituan.com/marketing/cardsCollect/api/getCardInfo",
        searchParams: _0x1479a4
      };
      let {
          result: _0x3d5136
        } = await this.request(_0x373156),
        _0x2594c3 = $.get(_0x3d5136, "code", -1);
      if (_0x2594c3 == 0) {
        await this.getCardDraw(_0x3d5136?.["userCardInfo"]?.["cardId"]);
      } else {
        let _0x4ba961 = _0x3d5136?.["msg"] || _0x3d5136?.["message"] || "";
        this.log("查询月符抽奖卡号失败[" + _0x2594c3 + "]: " + _0x4ba961);
      }
    } catch (_0xa845a1) {
      console.log(_0xa845a1);
    }
  }
  async getCardDraw(_0x32de6f, _0x1afef9 = {}) {
    try {
      const _0x32bf74 = {
        cardId: _0x32de6f
      };
      const _0x2e3bef = {
        fn: "getCardDraw",
        method: "get",
        url: "https://mgm.meituan.com/marketing/cardsCollect/api/draw",
        searchParams: _0x32bf74
      };
      let {
        result: _0x1280a6
      } = await this.request(_0x2e3bef);
      if (_0x1280a6?.["bingo"]?.["value"]) {
        this.log("月符抽奖: " + _0x1280a6?.["prizeInfo"]?.["name"]);
      } else {
        let _0x21716f = _0x1280a6?.["msg"] || _0x1280a6?.["message"] || "";
        this.log("查询月符抽奖结果失败: " + _0x21716f);
      }
    } catch (_0x3cb273) {
      console.log(_0x3cb273);
    }
  }
  async getUserTasks(_0x4aa5d4, _0x453435 = {}) {
    try {
      const _0x1dd029 = {
        fn: "getUserTasks",
        method: "post",
        url: "https://cube.meituan.com/topcube/api/toc/task/getUserTasks",
        json: {}
      };
      _0x1dd029.json.uuid = this.uuid;
      _0x1dd029.json.userId = this.userId;
      _0x1dd029.json.browseAreaTrue = true;
      _0x1dd029.json.cityId = 30;
      _0x1dd029.json.taskIdKeys = _0x4aa5d4.taskIdKeys;
      _0x1dd029.json.userType = "MEI_TUAN";
      _0x1dd029.json.sourceType = "MEI_TUAN";
      _0x1dd029.json.mini_program_token = this.token;
      _0x1dd029.json.inviter = "";
      _0x1dd029.json.inviterTaskIdKey = "";
      let {
        result: _0x4dfced
      } = await this.request(_0x1dd029);
      if (_0x4dfced?.["code"] == 0) {
        for (let _0x164c77 of _0x4dfced.data) {
          if (!_0x5c25de.includes(_0x164c77?.["code"]?.["toString"]())) {
            if (!_0x164c77?.["taskRuleVos"]?.["length"]) {
              $.log("任务[" + _0x164c77.title + "] -- " + _0x164c77.msg);
              continue;
            }
            if (_0x164c77?.["title"]?.["includes"]("小程序下单")) {
              continue;
            }
            let _0x37cd59 = _0x164c77?.["extend"] ? true : false;
            if (_0x37cd59 && _0x164c77?.["extend"]?.["isSignInToday"] == 1) {
              $.log("任务[" + _0x164c77.title + "] -- 已完成");
              continue;
            }
            let _0x5d1e8f = false;
            if (_0x164c77.taskConf) {
              let _0x2aae4a = JSON.parse(_0x164c77.taskConf);
              _0x2aae4a.isCheckNgSignature && (_0x5d1e8f = true);
            }
            for (let _0x181e72 of _0x164c77.taskRuleVos) {
              if (_0x181e72.status == "PRIZE_SUCC" || _0x181e72.status == "DELETE") {
                !_0x37cd59 && $.log("任务[" + _0x164c77.title + "] -- 已完成");
              } else {
                if (_0x181e72?.["status"] == "CAN_RECEIVE") {
                  $.log("任务[" + _0x164c77.title + "] -- 可领取奖励");
                  const _0x45d1ba = {
                    need_sign: _0x5d1e8f
                  };
                  await this.sendTaskPrize(_0x4aa5d4, _0x164c77, _0x181e72, {}, _0x45d1ba);
                  if (_0x37cd59) {
                    break;
                  }
                } else {
                  $.log("任务[" + _0x164c77.title + "] -- 未完成");
                  let _0x19225c = true,
                    _0x577e1a = JSON.parse(_0x181e72.ruleConfig);
                  if (_0x577e1a.limitTime) {
                    let _0x255d09 = (_0x181e72.preCompleteTime || 0) + _0x577e1a.limitTime * 1000;
                    Date.now() < _0x255d09 && (_0x19225c = false, $.log("任务[" + _0x164c77.title + "]冷却中, [" + $.time("hh:mm:ss", _0x255d09) + "]后可完成"));
                  } else {
                    if (_0x577e1a?.["timeLimits"]?.["length"]) {
                      let _0x35cc28 = new Date($.time("yyyy-MM-dd 00:00:00")).getTime(),
                        _0x1ed7ab = Date.now();
                      for (let _0x4ddd4f of _0x577e1a.timeLimits) {
                        let {
                          startTime: _0x558268,
                          endTime: _0x14c964
                        } = _0x4ddd4f;
                        _0x558268 += _0x35cc28;
                        _0x14c964 += _0x35cc28;
                        (_0x1ed7ab < _0x558268 || _0x1ed7ab >= _0x14c964) && (_0x19225c = false, $.log("任务[" + _0x164c77.title + "]不在时间段中: " + $.time("hh:mm:ss", _0x558268) + "到" + $.time("hh:mm:ss", _0x14c964)));
                      }
                    }
                  }
                  if (_0x19225c) {
                    const _0x1a433f = {
                      need_sign: _0x5d1e8f
                    };
                    await this.startUserTask(_0x4aa5d4, _0x164c77, _0x181e72, _0x1a433f);
                  }
                  if (_0x37cd59) {
                    break;
                  }
                }
              }
            }
          }
        }
      } else {
        let _0x19678d = _0x4dfced?.["msg"] || _0x4dfced?.["desc"] || "";
        this.log("查询任务列表失败: " + _0x19678d);
      }
    } catch (_0x2db96d) {
      console.log(_0x2db96d);
    }
  }
  async startUserTask(_0x334123, _0x510080, _0x5b19df, _0x125bcc = {}) {
    try {
      let _0x4549df = _0x125bcc?.["need_sign"],
        _0x589416 = "https://cube.meituan.com/topcube/api/toc/task/startUserTask",
        _0x50e8e7 = {
          uuid: this.uuid,
          userId: this.userId,
          cityId: 30,
          riskForm: await this.encode_riskForm(_0x4549df),
          taskIdKey: _0x510080.taskIdKey,
          taskRuleIdKey: _0x5b19df.taskRuleIdKey,
          cubePageId: _0x334123.cubePageId,
          userType: "MEI_TUAN",
          sourceType: "MEI_TUAN",
          mini_program_token: this.token
        };
      const _0x10d4db = {
        fn: "startUserTask",
        method: "post",
        url: _0x589416,
        json: _0x50e8e7
      };
      if (_0x4549df) {
        let {
          headers: _0x2d9f2a
        } = await this.get_mtgsig(_0x589416, _0x50e8e7);
        const _0x2c9f78 = {
          mtgsig: _0x2d9f2a.mtgsig
        };
        _0x10d4db.headers = _0x2c9f78;
      }
      let {
        result: _0x10d5a8
      } = await this.request(_0x10d4db);
      if (_0x10d5a8?.["code"] == 0) {
        let _0x1b7ba2 = JSON.parse(_0x5b19df.ruleConfig);
        if (_0x1b7ba2.staySeconds) {
          let _0xac3396 = _0x1b7ba2.staySeconds * 1000;
          this.log("等待" + _0x1b7ba2.staySeconds + "秒后完成任务..");
          await $.wait(_0xac3396);
        } else {
          this.log("完成任务[" + _0x510080.title + "]成功");
        }
        const _0x4bded3 = {
          need_sign: _0x4549df
        };
        await this.updateUserTask(_0x334123, _0x510080, _0x5b19df, _0x10d5a8, _0x4bded3);
      } else {
        let _0x3fdaec = _0x10d5a8?.["msg"] || _0x10d5a8?.["desc"] || "";
        this.log("完成任务[" + _0x510080.title + "]失败: " + _0x3fdaec);
        if (_0x3fdaec?.["includes"]("活动已完成")) {
          const _0x1b0614 = {
            need_sign: _0x4549df
          };
          await this.updateUserTask(_0x334123, _0x510080, _0x5b19df, {}, _0x1b0614);
        }
      }
    } catch (_0x3b7e14) {
      console.log(_0x3b7e14);
    }
  }
  async process_task_prize(_0x44e048) {
    let _0x5aef41 = [];
    for (let _0x5c8282 of _0x44e048) {
      if (_0x5c8282.number) {
        _0x5aef41.push(_0x5c8282.number + "金币");
      } else {
        if (_0x5c8282?.["sendMagicCardResult"]?.["cardList"]?.["length"]) {
          for (let _0x5867b5 of _0x5c8282.sendMagicCardResult.cardList) {
            _0x5aef41.push("[" + (_0x4a9b97[_0x5867b5.type] || _0x5867b5.type) + "]x" + _0x5867b5.amount);
          }
        } else {
          if (_0x5c8282?.["sendMagicStoneResult"]?.["stoneList"]?.["length"]) {
            for (let _0x1f3d4 of _0x5c8282.sendMagicStoneResult.stoneList) {
              _0x5aef41.push("[" + (_0x500717[_0x1f3d4.magicStonePrizeType] || _0x1f3d4.magicStonePrizeType) + "]x" + _0x1f3d4.amount);
            }
          } else {
            if (_0x5c8282?.["sendCouponResultList"]?.["length"]) {
              for (let _0x5ef094 of _0x5c8282.sendCouponResultList) {
                _0x5aef41.push((_0x5ef094.useCondition || "无门槛") + "减" + _0x5ef094.couponValue + _0x5ef094.couponTypeDesc + "券");
              }
            }
          }
        }
      }
    }
    return _0x5aef41;
  }
  async updateUserTask(_0x1720e9, _0x6dce13, _0x4c9b31, _0x327412 = {}, _0x4f3fd4 = {}) {
    try {
      let _0x2563c2 = _0x4f3fd4?.["need_sign"],
        {
          actionNo = "",
          taskNo = "",
          taskRuleNo = ""
        } = _0x327412;
      taskNo = taskNo || _0x6dce13?.["taskNo"] || "";
      taskRuleNo = taskRuleNo || _0x4c9b31?.["taskRuleNo"] || "";
      let _0x5820f9 = "https://cube.meituan.com/topcube/api/toc/task/updateUserTask",
        _0x3e26f9 = {
          uuid: this.uuid,
          userId: this.userId,
          cityId: 30,
          taskNo: taskNo,
          actionNo: actionNo,
          riskForm: await this.encode_riskForm(_0x2563c2),
          taskIdKey: _0x6dce13.taskIdKey,
          taskRuleNo: taskRuleNo,
          taskRuleIdKey: _0x4c9b31.taskRuleIdKey,
          cubePageId: _0x1720e9.cubePageId,
          userType: "MEI_TUAN",
          sourceType: "MEI_TUAN",
          mini_program_token: this.token
        };
      const _0x246d19 = {
        fn: "updateUserTask",
        method: "post",
        url: _0x5820f9,
        json: _0x3e26f9
      };
      if (_0x2563c2) {
        let {
          headers: _0x5dafcf
        } = await this.get_mtgsig(_0x5820f9, _0x3e26f9);
        const _0x4285d = {
          mtgsig: _0x5dafcf.mtgsig
        };
        _0x246d19.headers = _0x4285d;
      }
      let {
        result: _0x5d4fdc
      } = await this.request(_0x246d19);
      if (_0x5d4fdc?.["code"] == 0) {
        if (_0x5d4fdc?.["prizeList"]?.["length"]) {
          let _0x7319be = await this.process_task_prize(_0x5d4fdc.prizeList);
          this.log("领取任务[" + _0x6dce13.title + "]奖励获得: " + _0x7319be.join(","));
        } else {
          this.log("更新任务[" + _0x6dce13.title + "]状态成功");
          const _0x247e08 = {
            need_sign: _0x2563c2
          };
          await this.sendTaskPrize(_0x1720e9, _0x6dce13, _0x4c9b31, _0x327412, _0x247e08);
        }
      } else {
        let _0x41780a = _0x5d4fdc?.["msg"] || _0x5d4fdc?.["desc"] || "";
        this.log("更新任务[" + _0x6dce13.title + "]状态失败: " + _0x41780a);
      }
    } catch (_0x116940) {
      console.log(_0x116940);
    }
  }
  async sendTaskPrize(_0x38a5a4, _0x274c08, _0x16bf9a, _0x22079f = {}, _0x19b7fd = {}) {
    try {
      let _0x5359a6 = _0x19b7fd?.["need_sign"],
        {
          actionNo = "",
          taskNo = "",
          taskRuleNo = ""
        } = _0x22079f;
      taskNo = taskNo || _0x274c08?.["taskNo"] || "";
      taskRuleNo = taskRuleNo || _0x16bf9a?.["taskRuleNo"] || "";
      let _0x114417 = "https://cube.meituan.com/topcube/api/toc/task/sendTaskPrize",
        _0x1bf3ae = {
          uuid: this.uuid,
          userId: this.userId,
          cityId: 30,
          taskNo: taskNo,
          actionNo: actionNo,
          riskForm: await this.encode_riskForm(_0x5359a6),
          taskIdKey: _0x274c08.taskIdKey,
          taskRuleNo: taskRuleNo,
          taskRuleIdKey: _0x16bf9a.taskRuleIdKey,
          cubePageId: _0x38a5a4.cubePageId,
          userType: "MEI_TUAN",
          sourceType: "MEI_TUAN",
          mini_program_token: this.token
        };
      const _0x2d30e1 = {
        fn: "sendTaskPrize",
        method: "post",
        url: _0x114417,
        json: _0x1bf3ae
      };
      if (_0x5359a6) {
        let {
          headers: _0x46ae51
        } = await this.get_mtgsig(_0x114417, _0x1bf3ae);
        const _0x502425 = {
          mtgsig: _0x46ae51.mtgsig
        };
        _0x2d30e1.headers = _0x502425;
      }
      let {
        result: _0x3b0c13
      } = await this.request(_0x2d30e1);
      if (_0x3b0c13?.["code"] == 0) {
        if (_0x3b0c13?.["prizeList"]?.["length"]) {
          let _0x43da3e = await this.process_task_prize(_0x3b0c13.prizeList);
          this.log("领取任务[" + _0x274c08.title + "]奖励获得: " + _0x43da3e.join(","));
        } else {
          this.log("没有领取到任务[" + _0x274c08.title + "]奖励");
        }
      } else {
        let _0x6ec7a1 = _0x3b0c13?.["msg"] || _0x3b0c13?.["desc"] || "";
        this.log("领取任务[" + _0x274c08.title + "]奖励失败: " + _0x6ec7a1);
      }
    } catch (_0x1cca0b) {
      console.log(_0x1cca0b);
    }
  }
  async goldHomePage(_0x380656, _0x2d2875 = {}) {
    try {
      let _0x47e827 = "https://cube.meituan.com/topcube/api/toc/gold/homePage";
      const _0x3bcc65 = {
        activitySecretKey: _0x380656,
        sourceType: "MEI_TUAN",
        userId: this.userId,
        mini_program_token: this.token,
        uuid: this.uuid
      };
      const _0x359090 = {
        fn: "goldHomePage",
        method: "post",
        url: _0x47e827,
        json: _0x3bcc65
      };
      let {
        result: _0x1bf9c6
      } = await this.request(_0x359090);
      if (_0x1bf9c6?.["code"] == 0) {
        for (let _0x46da99 of _0x1bf9c6?.["data"]?.["redPackets"]?.["filter"](_0x113fe9 => _0x113fe9.status == "LOCK_UNRECEIVED")) {
          await this.receiveRedPacket(_0x380656, _0x46da99);
        }
      } else {
        let _0x2b201a = _0x1bf9c6?.["msg"] || _0x1bf9c6?.["desc"] || "";
        this.log("查询开红包次数失败: " + _0x2b201a);
      }
    } catch (_0x14bdc6) {
      console.log(_0x14bdc6);
    }
  }
  async receiveRedPacket(_0x3ce179, _0x48fd81, _0x5229af = {}) {
    try {
      let _0x384a40 = "https://cube.meituan.com/topcube/api/toc/gold/receiveRedPacket",
        _0x3f890e = {
          activitySecretKey: _0x3ce179,
          id: _0x48fd81.id,
          sourceType: "MEI_TUAN",
          userId: this.userId,
          mini_program_token: this.token,
          uuid: this.uuid,
          riskForm: await this.encode_riskForm()
        },
        {
          headers: _0x38fa3f
        } = await this.get_mtgsig(_0x384a40, _0x3f890e);
      const _0x2bd7d2 = {
        mtgsig: _0x38fa3f.mtgsig
      };
      const _0x8af4d3 = {
        fn: "receiveRedPacket",
        method: "post",
        url: _0x384a40,
        json: _0x3f890e,
        headers: _0x2bd7d2
      };
      let {
        result: _0x5a9c27
      } = await this.request(_0x8af4d3);
      if (_0x5a9c27?.["code"] == 0) {
        this.log("开红包获得" + _0x48fd81.amount + "金币");
      } else {
        let _0x579f56 = _0x5a9c27?.["msg"] || _0x5a9c27?.["desc"] || "";
        this.log("开红包[" + _0x48fd81.id + "]失败: " + _0x579f56);
      }
    } catch (_0x560207) {
      console.log(_0x560207);
    }
  }
  async earnDailyLogin(_0x48fa13 = {}) {
    try {
      let _0x4bed75 = _0x48fa13.gameType || 10402;
      const _0x3cc2e2 = {
        cityId: "30"
      };
      let _0x5a088c = {
          fn: "earnDailyLogin",
          method: "get",
          url: "https://game.meituan.com/earn-daily/login/loginMgc",
          searchParams: {
            gameType: _0x4bed75,
            mtToken: this.token,
            mtUserId: this.userId,
            mtDeviceId: this.uuid,
            nonceStr: $.randomString(16),
            externalStr: JSON.stringify(_0x3cc2e2)
          }
        },
        {
          result: _0x5f459d
        } = await this.request(_0x5a088c),
        _0x4f7034 = $.get(_0x5f459d, "code", -1);
      if (_0x4f7034 == 0) {
        this.acToken = _0x5f459d?.["response"]?.["accessToken"];
      } else {
        let _0x324bc1 = _0x5f459d?.["msg"] || _0x5f459d?.["desc"] || "";
        this.log("登录游戏[" + _0x4bed75 + "]失败[" + _0x4f7034 + "]: " + _0x324bc1);
      }
    } catch (_0x3d2759) {
      console.log(_0x3d2759);
    }
  }
  async earnDailyPost(_0xc84411 = {}) {
    let _0xb9158 = {};
    try {
      let _0x5145a8 = _0xc84411.protocolId,
        _0x2ec1df = _0xc84411.data || {};
      const _0x480598 = {
        yodaReady: "h5",
        csecplatform: 4,
        csecversion: "2.1.1"
      };
      let _0x582ece = {
        fn: "earnDailyPost",
        method: "post",
        url: "https://game.meituan.com/earn-daily/msg/post",
        headers: {
          Origin: "https://awp.meituan.com",
          Referer: "https://awp.meituan.com/"
        },
        searchParams: _0x480598,
        json: {
          acToken: this.acToken,
          riskParams: await this.get_app_riskForm(),
          protocolId: _0x5145a8,
          data: _0x2ec1df
        }
      };
      await $.wait_gap_interval(this.t_earnDaily, _0x4af5b5);
      _0xb9158 = await this.request(_0x582ece);
      this.t_earnDaily = Date.now();
    } catch (_0x1d7b1c) {
      console.log(_0x1d7b1c);
    } finally {
      return _0xb9158;
    }
  }
  async earnDaily_task_list(_0x282bca = {}) {
    try {
      const _0x2af32 = {
        acToken: this.acToken
      };
      const _0x5bc9bd = {
        protocolId: 1001,
        data: _0x2af32
      };
      {
        let {
            result: _0x1eb5f1
          } = await this.earnDailyPost(_0x5bc9bd),
          _0x35f124 = $.get(_0x1eb5f1, "code", -1);
        if (_0x35f124 == 200) {
          for (let _0x542374 of _0x1eb5f1?.["data"]?.["signInPopModel"]?.["rewardModelList"] || []) {
            _0x542374.current && _0x542374.state == 1 && (await this.earnDaily_sign());
          }
          for (let _0x5ab74c of _0x1eb5f1?.["data"]?.["taskInfoList"] || []) {
            switch (_0x5ab74c.id) {
              case 780:
              case 15099:
              case 15278:
                break;
              default:
                _0x5ab74c.dailyRewardTimes < _0x5ab74c.dailyFinishTimes && (await this.earnDaily_get_reward(_0x5ab74c));
                for (let _0x8aeb6f = _0x5ab74c.dailyFinishTimes; _0x8aeb6f < _0x5ab74c.mgcTaskBaseInfo.curPeriodMaxFinishTimes; _0x8aeb6f++) {
                  await this.earnDaily_do_task(_0x5ab74c);
                }
                break;
            }
          }
        } else {
          let _0x36167a = _0x1eb5f1?.["msg"] || _0x1eb5f1?.["desc"] || "";
          this.log("查询任务失败[" + _0x35f124 + "]: " + _0x36167a);
        }
      }
      {
        let {
            result: _0x12472c
          } = await this.earnDailyPost(_0x5bc9bd),
          _0x1c164d = $.get(_0x12472c, "code", -1);
        if (_0x1c164d == 200) {
          let _0x4ee802 = _0x12472c?.["data"]?.["playerBaseModel"]?.["redPacketInfo"]?.["leftRedPacketAmount"] || 0;
          this.log("可以开" + _0x4ee802 + "次红包");
          while (_0x4ee802-- > 0) {
            await this.earnDaily_redbag();
          }
        } else {
          let _0x2255f1 = _0x12472c?.["msg"] || _0x12472c?.["desc"] || "";
          this.log("查询红包次数失败[" + _0x1c164d + "]: " + _0x2255f1);
        }
      }
      {
        let {
            result: _0x5d7f6d
          } = await this.earnDailyPost(_0x5bc9bd),
          _0x1e1b6a = $.get(_0x5d7f6d, "code", -1);
        if (_0x1e1b6a == 200) {
          this.cash = _0x5d7f6d?.["data"]?.["playerBaseModel"]?.["activityCycleInfo"]?.["cashToken"] || 0;
          this.coin = _0x5d7f6d?.["data"]?.["playerBaseModel"]?.["activityCycleInfo"]?.["coinToken"] || 0;
          this.coin > 0 && (await this.earnDaily_coinInfo());
          const _0x3849a6 = {
            notify: true
          };
          this.log("每日赚钱余额: " + (this.cash / 100).toFixed(2) + "元, " + this.coin + "金币", _0x3849a6);
        } else {
          let _0x39c35b = _0x5d7f6d?.["msg"] || _0x5d7f6d?.["desc"] || "";
          this.log("查询每日赚钱余额失败[" + _0x1e1b6a + "]: " + _0x39c35b);
        }
      }
      await this.earnDaily_get_withdraw_list();
    } catch (_0x11a6a1) {
      console.log(_0x11a6a1);
    }
  }
  async earnDaily_coinInfo(_0x2746e1 = {}) {
    try {
      const _0x24f8cf = {
        protocolId: 1015
      };
      let {
          result: _0x99889a
        } = await this.earnDailyPost(_0x24f8cf),
        _0x2d8e3b = $.get(_0x99889a, "code", -1);
      if (_0x2d8e3b == 200) {
        let _0x3d1b7b = _0x99889a?.["data"]?.["exchangeInfoList"]?.["filter"](_0x3ecb38 => _0x3ecb38.name == "翻红包现金");
        if (!_0x3d1b7b.length) {
          return;
        }
        let _0x4f2d04 = _0x3d1b7b[0];
        this.coin >= _0x4f2d04.price && (await this.earnDaily_coinExchange(_0x4f2d04));
      } else {
        let _0x594293 = _0x99889a?.["msg"] || _0x99889a?.["desc"] || "";
        this.log("查询金币兑换失败[" + _0x2d8e3b + "]: " + _0x594293);
      }
    } catch (_0x5acc75) {
      console.log(_0x5acc75);
    }
  }
  async earnDaily_coinExchange(_0x5e98c6, _0x2b0e42 = {}) {
    try {
      const _0x87c5bf = {
        skuId: _0x5e98c6.skuId
      };
      const _0x43536c = {
        protocolId: 1016,
        data: _0x87c5bf
      };
      let {
          result: _0x2c47f9
        } = await this.earnDailyPost(_0x43536c),
        _0xac3a76 = $.get(_0x2c47f9, "code", -1);
      if (_0xac3a76 == 200) {
        this.cash = _0x2c47f9?.["data"]?.["activityCycleInfo"]?.["cashToken"] || 0;
        this.coin = _0x2c47f9?.["data"]?.["activityCycleInfo"]?.["coinToken"] || 0;
        this.log("使用" + _0x5e98c6.price + "金币兑换余额成功: 剩余" + this.coin + "金币");
        let _0x34afd2 = _0x2c47f9?.["data"]?.["exchangeInfoList"]?.["filter"](_0x20567d => _0x20567d.name == "翻红包现金");
        if (!_0x34afd2.length) {
          return;
        }
        let _0x151046 = _0x34afd2[0];
        this.coin >= _0x151046.price && (await this.earnDaily_coinExchange(_0x151046));
      } else {
        let _0x2e5d74 = _0x2c47f9?.["msg"] || _0x2c47f9?.["desc"] || "";
        this.log("使用" + _0x5e98c6.price + "金币兑换余额失败[" + _0xac3a76 + "]: " + _0x2e5d74);
      }
    } catch (_0x41f62d) {
      console.log(_0x41f62d);
    }
  }
  async earnDaily_sign(_0x4bd800 = {}) {
    try {
      const _0x5b9184 = {
        protocolId: 1007
      };
      let {
          result: _0xeff01d
        } = await this.earnDailyPost(_0x5b9184),
        _0x27d28a = $.get(_0xeff01d, "code", -1);
      if (_0x27d28a == 200) {
        this.log("签到成功: " + (_0xeff01d?.["data"]?.["remitNotificationModelList"]?.["map"](_0x53e643 => _0x53e643.content)?.["join"](",") || ""));
      } else {
        let _0x22ed98 = _0xeff01d?.["msg"] || _0xeff01d?.["desc"] || "";
        this.log("签到失败[" + _0x27d28a + "]: " + _0x22ed98);
      }
    } catch (_0x274ba7) {
      console.log(_0x274ba7);
    }
  }
  async earnDaily_do_task(_0xd1946c, _0x4e3c0c = {}) {
    try {
      const _0x4566bc = {
        taskId: _0xd1946c.id
      };
      const _0x43ec3e = {
        protocolId: 1004,
        data: _0x4566bc
      };
      let {
          result: _0x5891f2
        } = await this.earnDailyPost(_0x43ec3e),
        _0x29a2cc = $.get(_0x5891f2, "code", -1);
      if (_0x29a2cc == 200) {
        this.log("完成任务[" + (_0xd1946c?.["mgcTaskBaseInfo"]?.["viewTitle"] || _0xd1946c?.["id"]) + "]成功");
        await this.earnDaily_get_reward(_0xd1946c);
      } else {
        let _0x225d7d = _0x5891f2?.["msg"] || _0x5891f2?.["desc"] || "";
        this.log("完成任务[" + (_0xd1946c?.["mgcTaskBaseInfo"]?.["viewTitle"] || _0xd1946c?.["id"]) + "]失败[" + _0x29a2cc + "]: " + _0x225d7d);
      }
    } catch (_0x315649) {
      console.log(_0x315649);
    }
  }
  async earnDaily_get_reward(_0x297c11, _0x3360e7 = {}) {
    try {
      const _0x34f9bc = {
        taskId: _0x297c11.id
      };
      const _0x43ee40 = {
        protocolId: 1005,
        data: _0x34f9bc
      };
      let {
          result: _0x470632
        } = await this.earnDailyPost(_0x43ee40),
        _0x25b6fd = $.get(_0x470632, "code", -1);
      if (_0x25b6fd == 200) {
        this.log("领取任务[" + _0x297c11.mgcTaskBaseInfo.viewTitle + "]奖励成功");
      } else {
        let _0x5a3dc9 = _0x470632?.["msg"] || _0x470632?.["desc"] || "";
        this.log("领取任务[" + _0x297c11.mgcTaskBaseInfo.viewTitle + "]奖励失败[" + _0x25b6fd + "]: " + _0x5a3dc9);
      }
    } catch (_0x5ac7d8) {
      console.log(_0x5ac7d8);
    }
  }
  async earnDaily_redbag(_0x17b2c2 = {}) {
    try {
      const _0x598d7c = {
        protocolId: 1008
      };
      let {
          result: _0x42826c
        } = await this.earnDailyPost(_0x598d7c),
        _0x2f35ed = $.get(_0x42826c, "code", -1);
      if (_0x2f35ed == 200) {
        let _0x1b3563 = _0x42826c?.["data"]?.["rewardModelList"]?.["filter"](_0x725820 => _0x725820.rewarded) || [];
        if (_0x1b3563.length) {
          let _0x33579a = _0x1b3563[0];
          if (_0x33579a.resourceType == 1) {
            this.log("开红包获得: " + (_0x33579a.amount / 100).toFixed(2) + "元");
          } else {
            _0x33579a.resourceType == 2 ? this.log("开红包获得: " + _0x33579a.amount + "金币") : this.log("开红包获得: " + JSON.stringify(_0x33579a));
          }
        }
      } else {
        let _0x2e9c0c = _0x42826c?.["msg"] || _0x42826c?.["desc"] || "";
        this.log("开红包失败[" + _0x2f35ed + "]: " + _0x2e9c0c);
      }
    } catch (_0x2fa158) {
      console.log(_0x2fa158);
    }
  }
  async earnDaily_draw(_0x3d7cc7 = {}) {
    try {
      const _0x20b41a = {
        protocolId: 1010
      };
      let {
          result: _0x2c63e9
        } = await this.earnDailyPost(_0x20b41a),
        _0x3bd2cf = $.get(_0x2c63e9, "code", -1);
      if (_0x3bd2cf == 200) {
        let _0x30d8ec = _0x2c63e9?.["data"]?.["currentReward"];
        if (_0x30d8ec?.["rewardedCouponModel"]) {
          this.log("转盘抽奖: " + _0x30d8ec.rewardedCouponModel?.["useRule"] + _0x30d8ec.rewardedCouponModel?.["name"]);
          return;
        }
        switch (_0x30d8ec?.["resourceType"]) {
          case 1:
            let _0x4891f9 = ((_0x30d8ec?.["amount"] || 0) / 100).toFixed(2);
            this.log("转盘抽奖: " + _0x4891f9 + "元余额");
            break;
          case 2:
            this.log("转盘抽奖: " + _0x30d8ec?.["amount"] + "金币");
            break;
          case 3:
            this.log("转盘抽奖: 随机提现机会");
            break;
          default:
            this.log("转盘抽奖: " + JSON.stringify(_0x2c63e9));
            break;
        }
      } else {
        let _0x2d8635 = _0x2c63e9?.["msg"] || _0x2c63e9?.["desc"] || "";
        this.log("转盘抽奖失败[" + _0x3bd2cf + "]: " + _0x2d8635);
      }
    } catch (_0x19704a) {
      console.log(_0x19704a);
    }
  }
  async earnDaily_get_withdraw_list(_0x13ece5 = {}) {
    try {
      const _0x31740c = {
        protocolId: 1012
      };
      let {
          result: _0x370eff
        } = await this.earnDailyPost(_0x31740c),
        _0x1ca539 = $.get(_0x370eff, "code", -1);
      if (_0x1ca539 == 200) {
        let _0x416c01 = _0x370eff?.["data"]?.["activityCycleInfo"]?.["cashToken"] || 0,
          _0x2f40d0 = (_0x416c01 / 100).toFixed(2);
        this.log("红包余额: " + _0x2f40d0 + "元");
        let _0x2258dc = (_0x370eff?.["data"]?.["cashList"] || []).sort(function (_0x24ae42, _0x24512e) {
          return _0x24512e.amount - _0x24ae42.amount;
        });
        if (_0xe26294 == "false" || !_0xe26294) {
          _0x2258dc = _0x2258dc.filter(_0x14e351 => _0x14e351.amount == 5000);
        }
        for (let _0x14d0fb of _0x2258dc) {
          if (_0x14d0fb.amount > _0x416c01) {
            continue;
          }
          if (await this.earnDaily_withdraw(_0x14d0fb)) {
            break;
          }
        }
      } else {
        let _0x229738 = _0x370eff?.["msg"] || _0x370eff?.["desc"] || "";
        this.log("查询提现列表失败[" + _0x1ca539 + "]: " + _0x229738);
      }
    } catch (_0x24ace7) {
      console.log(_0x24ace7);
    }
  }
  async earnDaily_withdraw(_0xff34bb, _0x3e5114 = {}) {
    let _0x5cfb53 = false;
    try {
      let _0x3d8def = (_0xff34bb.amount / 100).toFixed(2);
      const _0x3be5ad = {
        id: _0xff34bb.id,
        amount: _0xff34bb.amount
      };
      const _0x1e8889 = {
        protocolId: 1013,
        data: _0x3be5ad
      };
      let {
          result: _0x41a377
        } = await this.earnDailyPost(_0x1e8889),
        _0x571d96 = $.get(_0x41a377, "code", -1);
      if (_0x571d96 == 200) {
        _0x5cfb53 = true;
        const _0x20d81c = {
          notify: true
        };
        this.log("提现[" + _0x3d8def + "元]到钱包成功", _0x20d81c);
      } else {
        let _0x18583b = _0x41a377?.["msg"] || _0x41a377?.["desc"] || "";
        _0x571d96 == 1017 ? (_0x5cfb53 = true, this.log("提现[" + _0x3d8def + "元]失败[" + _0x571d96 + "]: 可能今天已提现过")) : this.log("提现[" + _0x3d8def + "元]失败[" + _0x571d96 + "]: " + _0x18583b);
      }
    } catch (_0x3d82e1) {
      console.log(_0x3d82e1);
    } finally {
      return _0x5cfb53;
    }
  }
  async c_task(_0x4ea285, _0x56769d = {}) {
    try {
      let _0x2cc193 = Math.random() * 100 + 2400 | 0;
      const _0x58ffe7 = {
        Referer: "https://click.meituan.com/t?t=1&c=2&p=" + _0x4ea285
      };
      let _0x224429 = {
        fn: "get_task",
        method: "post",
        url: "https://click.meituan.com/cps/clickReferralLink",
        headers: _0x58ffe7,
        json: {
          p: _0x4ea285,
          t: "1",
          c: "2",
          sessionId: "187a" + $.randomPattern("xxxxxxx-xxx-xxx-xxx"),
          referrer: "",
          fingerprintFromH5: "eJxVV" + $.randomString(_0x2cc193, _0x1c0875)
        }
      };
      await this.request(_0x224429);
    } catch (_0x3d4974) {
      console.log(_0x3d4974);
    }
  }
  async walletMainpage(_0x2be8bf = {}) {
    try {
      const _0x3702fa = {
        fn: "walletMainpage",
        method: "post",
        url: "https://npay.meituan.com/conch/walletV5/mainpage",
        form: {}
      };
      _0x3702fa.form.token = this.token;
      _0x3702fa.form.nb_app = "group";
      _0x3702fa.form.nb_appversion = "12.9.203";
      _0x3702fa.form.nb_channel = "common";
      _0x3702fa.form.nb_ci = "30";
      _0x3702fa.form.nb_location = "0_0";
      _0x3702fa.form.nb_osversion = "16.1.2";
      _0x3702fa.form.nb_platform = "iOS";
      _0x3702fa.form.utmSource = "AppStore";
      _0x3702fa.form.from = "mine_qianbaorukou_qianbao";
      _0x3702fa.form.popWindowOldChain = "false";
      let {
          result: _0x179697
        } = await this.request(_0x3702fa),
        _0x4ab468 = $.get(_0x179697, "status", -1);
      if (_0x4ab468 == "success") {
        let _0xbd6651 = [];
        for (let _0x238718 of _0x179697?.["data"]?.["AssetArea"]?.["otherAssetAreaDTOList"] || []) {
          switch (_0x238718.title) {
            case "余额":
              _0xbd6651.push("钱包余额: " + (_0x238718?.["subTitle"] || 0) + "元");
              break;
            case "立减金":
              _0xbd6651.push("立减金: " + (_0x238718?.["subTitle"] || 0) + "元");
              break;
          }
        }
        if (_0xbd6651.length) {
          const _0x4087b4 = {
            notify: true
          };
          this.log(_0xbd6651.join(", "), _0x4087b4);
        }
      } else {
        let _0x353cc2 = _0x179697?.["error"]?.["message"] || "";
        this.log("查询钱包失败[" + _0x4ab468 + "]: " + _0x353cc2);
      }
    } catch (_0x250873) {
      console.log(_0x250873);
    }
  }
  async refTask() {
    if (!_0x356ad9?.["length"]) {
      return;
    }
    let _0xde2b0 = _0x356ad9.sort(function () {
        return Math.random() - 0.5;
      }),
      _0x5dd14b = _0xde2b0.length,
      _0x1c4203 = Math.min(3, _0x5dd14b);
    _0xde2b0 = _0xde2b0.slice(0, _0x1c4203);
    for (let _0x8872ea of _0xde2b0) {
      await this.c_task(_0x8872ea);
    }
  }
  async batchfetchcomponentcouponV2(_0x563916) {
    try {
      let {
        refIds: _0x58da1d,
        instanceId: _0x4afad9,
        gdPageId: _0x298916,
        pageId: _0x1ac31f
      } = _0x563916;
      const _0x39ba5d = {
        cType: "wm_wxapp",
        fpPlatform: 13,
        wxOpenId: "",
        appVersion: "12.9.206",
        mtFingerprint: this.fp
      };
      let _0x23204a = {
          couponReferIds: _0x58da1d.join(","),
          geoType: 2,
          actualLng: _0x4321a7,
          actualLat: _0x4b66ab,
          isInDpEnv: 0,
          gdPageId: _0x298916,
          pageId: _0x1ac31f,
          version: 1,
          instanceId: _0x4afad9,
          componentId: _0x4afad9,
          utmSource: "",
          utmCampaign: "",
          needFetchedByUUID: 1
        },
        _0x6b6b20 = new URL("https://promotion.waimai.meituan.com/lottery/couponcomponent/batchfetchcomponentcoupon/v2");
      for (let _0x5d6fdb in _0x23204a) {
        _0x6b6b20.searchParams.append(_0x5d6fdb, _0x23204a[_0x5d6fdb]);
      }
      let {
        headers: _0x3e913d
      } = await this.get_mtgsig(_0x6b6b20.toString(), _0x39ba5d);
      const _0x4c3dd8 = {
        mtgsig: _0x3e913d.mtgsig
      };
      const _0x374293 = {
        fn: "batchfetchcomponentcouponV2",
        method: "post",
        url: _0x6b6b20,
        json: _0x39ba5d,
        headers: _0x4c3dd8
      };
      let {
        result: _0x5aad1f
      } = await this.request(_0x374293);
      if (_0x5aad1f?.["code"] == 0) {
        let _0x96fab9 = _0x5aad1f?.["data"]?.["filter"](_0x50b08e => _0x50b08e.code == 0)?.["map"](_0x5e86fa => "[" + _0x5e86fa.data.couponName + "]" + (_0x5e86fa.data.priceLimit || "无门槛") + "减" + _0x5e86fa.data.couponValue);
        if (_0x96fab9.length) {
          this.notify_coupon(_0x96fab9);
        }
      } else {
        let _0x42f14d = _0x5aad1f?.["msg"] || _0x5aad1f?.["desc"] || "";
        this.log("集合领券失败: " + _0x42f14d);
      }
    } catch (_0x15b122) {
      console.log(_0x15b122);
    }
  }
  async popupcomponent_popup(_0x4831f2, _0x1b9b4f = {}) {
    try {
      const _0x488cf5 = {
        recordId: _0x4831f2,
        geoType: 2
      };
      const _0x1e33f7 = {
        fn: "popupcomponent_popup",
        method: "post",
        url: "https://promotion.waimai.meituan.com/popupcomponent/popup",
        form: _0x488cf5
      };
      let {
          result: _0x5a8c28
        } = await this.request(_0x1e33f7),
        _0x2d7cf7 = $.get(_0x5a8c28, "code", -1);
      if (_0x2d7cf7 == 0) {
        let _0x463c47 = _0x5a8c28?.["data"]?.["couponList"]?.["map"](_0x90ea67 => _0x90ea67.couponValue ? "[" + (_0x90ea67?.["couponTitle"] || "") + "]" + (_0x90ea67?.["priceLimit"] || "无门槛") + "减" + (_0x90ea67?.["couponValue"] || "") : "")?.["filter"](_0x38760f => _0x38760f);
        const _0x564f4e = {
          act: _0x4831f2
        };
        this.notify_coupon(_0x463c47, "弹窗领券", _0x564f4e);
      } else {
        let _0x28fd67 = _0x5a8c28?.["msg"] || _0x5a8c28?.["message"] || "";
        const _0x30be4f = {
          act: _0x4831f2
        };
        this.log("弹窗领券失败[" + _0x2d7cf7 + "]: " + _0x28fd67, _0x30be4f);
      }
    } catch (_0x1cd93f) {
      console.log(_0x1cd93f);
    }
  }
  async xtb_login(_0x2bff41 = {}) {
    let _0xc8bd26 = false;
    try {
      let _0x47a3b7 = {
          fn: "xtb_login",
          method: "post",
          url: "https://game.meituan.com/mgc/gamecenter/front/api/v1/login",
          json: {
            mtToken: this.token,
            deviceUUID: "00000000000009CA0059F154C483C94A1C5D33AF2E440B167295905247822960",
            mtUserId: this.userId,
            idempotentString: $.randomString(16, _0x4d9786 + _0x62b846)
          }
        },
        {
          result: _0x52efa2
        } = await this.request($.copy(_0x47a3b7));
      if (_0x52efa2?.["data"]?.["loginInfo"]?.["accessToken"]) {
        const _0x12d5b0 = {
          actoken: _0x52efa2?.["data"]?.["loginInfo"]?.["accessToken"]
        };
        const _0x419245 = {
          headers: _0x12d5b0
        };
        this.got = this.got.extend(_0x419245);
        _0xc8bd26 = true;
      } else {
        this.log("小团币游戏中心登录失败");
      }
    } catch (_0x2cf2fb) {
      console.log(_0x2cf2fb);
    } finally {
      return _0xc8bd26;
    }
  }
  async xtb_queryXtbCount(_0x18f81e = {}) {
    const _0x578d1a = {
      succ: false,
      previous: 0,
      coin: 0
    };
    let _0x1fdb70 = _0x578d1a;
    try {
      const _0x1e141b = {
        sceneId: 3,
        gameId: 10102,
        yodaReady: "h5",
        csecplatform: 4,
        csecversion: "2.1.0"
      };
      const _0x1fde3b = {
        fn: "xtb_queryMgcTaskInfo",
        method: "get",
        url: "https://game.meituan.com/mgc/gamecenter/skuExchange/resource/counts",
        searchParams: _0x1e141b
      };
      let {
          statusCode: _0x5386dc,
          result: _0x25d32c
        } = await this.request($.copy(_0x1fde3b)),
        _0x4a380c = $.get(_0x25d32c, "code", _0x5386dc);
      if (_0x4a380c == 0) {
        let _0x82147e = (_0x25d32c?.["data"] || []).filter(_0x260e6a => _0x260e6a.resourceName == "小团币")?.[0];
        if (_0x82147e) {
          this.first_get_xtb_count && (this.init_xtb_coin = _0x82147e.count);
          const _0x52de36 = {
            succ: true,
            previous: this.xtb_coin,
            coin: _0x82147e.count
          };
          _0x1fdb70 = _0x52de36;
          this.xtb_coin = _0x82147e.count;
        }
      } else {
        let _0x232ce3 = _0x25d32c?.["msg"] || _0x25d32c?.["message"] || "";
        this.log("查询小团币失败[" + _0x4a380c + "]: " + _0x232ce3);
      }
    } catch (_0x3a4a93) {
      console.log(_0x3a4a93);
    } finally {
      return _0x1fdb70;
    }
  }
  async xtb_queryMgcTaskInfo(_0x1c197d = {}) {
    try {
      let _0x1af70f = "https://game.meituan.com/mgc/gamecenter/front/api/v1/mgcUser/task/queryMgcTaskInfo",
        _0x3d7ce6 = {
          externalStr: "",
          riskParams: await this.get_riskForm()
        };
      const _0x53fe48 = {
        fn: "xtb_queryMgcTaskInfo",
        method: "post",
        url: _0x1af70f,
        searchParams: {},
        json: _0x3d7ce6
      };
      let {
        headers: _0x392d48
      } = await this.get_mtgsig(_0x1af70f, _0x3d7ce6);
      const _0x47ab44 = {
        mtgsig: _0x392d48.mtgsig
      };
      Object.assign(_0x53fe48.searchParams, _0x47ab44);
      let {
          statusCode: _0x3f37bf,
          result: _0x3b5a89
        } = await this.request($.copy(_0x53fe48)),
        _0x2a8488 = $.get(_0x3b5a89, "code", _0x3f37bf);
      if (_0x2a8488 == 0) {
        let _0x1931b6 = _0x3b5a89?.["data"]?.["taskList"] || [];
        !_0x1931b6?.["length"] && this.log("此账号没有获取到任务, 可能黑号");
        for (let _0x1ab7d4 of _0x1931b6) {
          if (_0x11f997.includes(_0x1ab7d4.id)) {
            continue;
          }
          let _0x9b98e7 = _0x1ab7d4?.["mgcTaskBaseInfo"]?.["maxLimit"];
          if (_0x9b98e7 > 100) {
            continue;
          }
          let _0x509ab7 = false;
          switch (_0x1ab7d4.status) {
            case 2:
              {
                _0x509ab7 = await this.xtb_finishAndReceiveReward(_0x1ab7d4);
                break;
              }
            case 3:
              {
                _0x509ab7 = await this.xtb_receiveMgcTaskReward(_0x1ab7d4);
                break;
              }
          }
          if (_0x509ab7) {
            let _0x155e91 = Math.floor(Math.random() * 3000) + 2000;
            await $.wait(_0x155e91);
          }
        }
      } else {
        let _0x7df935 = _0x3b5a89?.["msg"] || _0x3b5a89?.["message"] || "";
        this.log("查询小团币任务失败[" + _0x2a8488 + "]: " + _0x7df935);
      }
    } catch (_0x1760d1) {
      console.log(_0x1760d1);
    }
  }
  async xtb_finishV2(_0x52afac, _0x2bb0fd = {}) {
    try {
      let _0xd85170 = JSON.parse(_0x52afac?.["mgcTaskBaseInfo"]?.["viewExtraJson"]),
        _0x444de1 = "https://game.meituan.com/mgc/gamecenter/common/mtUser/mgcUser/task/finishV2",
        _0x19fd12 = {
          externalStr: "",
          riskParams: "",
          mgcId: "347102809968379",
          gameid: _0xd85170?.["gameid"],
          taskTag: _0xd85170?.["taskTag"],
          taskId: base64_encode("mgc-gamecenter" + _0x52afac.id)
        };
      const _0x412222 = {
        fn: "xtb_finishV2",
        method: "get",
        url: _0x444de1,
        searchParams: _0x19fd12
      };
      let {
          statusCode: _0xdb6e95,
          result: _0x519961
        } = await this.request($.copy(_0x412222)),
        _0x568b91 = $.get(_0x519961, "code", _0xdb6e95);
      if (_0x568b91 == 0) {
        this.log("完成任务[" + _0x52afac.id + "]成功");
      } else {
        let _0x417ce6 = _0x519961?.["msg"] || _0x519961?.["message"] || "";
        this.log("完成任务[" + _0x52afac.id + "]失败[" + _0x568b91 + "]: " + _0x417ce6);
      }
    } catch (_0xa813dd) {
      console.log(_0xa813dd);
    }
  }
  async xtb_receiveMgcTaskReward(_0x52417f, _0x4f2265 = {}) {
    let _0x307ca6 = false;
    try {
      let _0x1de0e9 = "https://game.meituan.com/mgc/gamecenter/front/api/v1/mgcUser/task/receiveMgcTaskReward",
        _0x10684d = {
          taskId: _0x52417f.id,
          externalStr: "",
          riskParams: await this.get_riskForm()
        };
      const _0x486b99 = {
        fn: "xtb_receiveMgcTaskReward",
        method: "post",
        url: _0x1de0e9,
        json: _0x10684d
      };
      let {
          statusCode: _0x23405b,
          result: _0x45089f
        } = await this.request($.copy(_0x486b99)),
        _0x44d6bd = $.get(_0x45089f, "code", _0x23405b);
      if (_0x44d6bd == 0) {
        _0x307ca6 = true;
        let {
          succ: _0x365ea7,
          previous: _0x3bb24c,
          coin: _0xd57039
        } = await this.xtb_queryXtbCount();
        if (_0x365ea7) {
          let _0x3c5d62 = _0xd57039 - _0x3bb24c;
          this.log("领取任务[" + _0x52417f.id + "]奖励成功: " + _0x3c5d62 + "小团币");
        } else {
          this.log("领取任务[" + _0x52417f.id + "]奖励成功");
        }
      } else {
        let _0x489412 = _0x45089f?.["msg"] || _0x45089f?.["message"] || "";
        this.log("领取任务[" + _0x52417f.id + "]奖励失败[" + _0x44d6bd + "]: " + _0x489412);
      }
    } catch (_0x987fab) {
      console.log(_0x987fab);
    } finally {
      return _0x307ca6;
    }
  }
  async xtb_finishAndReceiveReward(_0x1796d6, _0x25bc2b = {}) {
    let _0x29078b = false;
    try {
      let _0x14004f = "https://game.meituan.com/mgc/gamecenter/front/api/v1/mgcUser/task/finishAndReceiveReward",
        _0x8612ba = {
          taskId: base64_encode("mgc-gamecenter" + _0x1796d6.id),
          externalStr: "",
          riskParams: await this.get_riskForm()
        };
      const _0x1b5073 = {
        fn: "xtb_finishAndReceiveReward",
        method: "post",
        url: _0x14004f,
        json: _0x8612ba
      };
      let {
          statusCode: _0x37cf6b,
          result: _0x1338a4
        } = await this.request($.copy(_0x1b5073)),
        _0x3a1481 = $.get(_0x1338a4, "code", _0x37cf6b);
      if (_0x3a1481 == 0) {
        _0x29078b = true;
        let {
          succ: _0xb3f134,
          previous: _0x5b6186,
          coin: _0x33564b
        } = await this.xtb_queryXtbCount();
        if (_0xb3f134) {
          let _0x4f4f22 = _0x33564b - _0x5b6186;
          this.log("领取任务[" + _0x1796d6.id + "]奖励成功: " + _0x4f4f22 + "小团币");
        } else {
          this.log("领取任务[" + _0x1796d6.id + "]奖励成功");
        }
      } else {
        let _0x3cab5e = _0x1338a4?.["msg"] || _0x1338a4?.["message"] || "";
        this.log("领取任务[" + _0x1796d6.id + "]奖励失败[" + _0x3a1481 + "]: " + _0x3cab5e);
      }
    } catch (_0x530ad0) {
      console.log(_0x530ad0);
    } finally {
      return _0x29078b;
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
    for (let _0x4d2124 of _0x6c61f0) {
      await this.popupcomponent_popup(_0x4d2124);
    }
    for (let _0x54a33f of _0x42faf0) {
      await this.gundamGrabV4(_0x54a33f);
    }
    for (let _0x152b89 of _0x217615) {
      await this.batchfetchcomponentcouponV2(_0x152b89);
    }
    for (let _0x38b01b of _0x445696) {
      await this.signupRecord(_0x38b01b);
      await this.ttsqEntry(_0x38b01b);
    }
    for (let _0x2781c3 of _0x454ca5) {
      await this.ttsqEntryLottery(_0x2781c3);
    }
  }
  async wxSqsqTask() {
    $.log("---------------- WX-社群神券 ----------------");
    for (let _0x1b11fc of _0x1c21c8) {
      await this.turntableDraw(_0x1b11fc);
    }
  }
  async wxSqSignTask() {
    $.log("---------------- WX-社群签到 ----------------");
    for (let _0x290706 of _0x529b0b) {
      await this.clockInStatus(_0x290706);
    }
  }
  async appCyfTask() {
    $.log("---------------- APP-抽月符 ----------------");
    await this.cardSaveAccess();
    await this.cardSaveShare();
    await this.cardLotteryNum();
  }
  async appXtbTask() {
    if (!(await this.xtb_login())) {
      return;
    }
    await this.xtb_queryXtbCount();
    await this.xtb_queryMgcTaskInfo();
  }
  async commonTask() {
    $.log("---------------- 集合任务 ----------------");
    for (let _0x1bbd39 of _0x316612) {
      $.log("============== " + _0x1bbd39.name + " ==============");
      if (_0x1bbd39.taskIdKeys.length > _0x2369ca) {
        const _0x35bd64 = {
          cubePageId: _0x1bbd39.cubePageId,
          taskIdKeys: []
        };
        for (let _0x5536e3 of _0x1bbd39.taskIdKeys) {
          _0x35bd64.taskIdKeys.push(_0x5536e3);
          _0x35bd64.taskIdKeys.length >= _0x2369ca && (await this.getUserTasks(_0x35bd64), _0x35bd64.taskIdKeys = []);
        }
        if (_0x35bd64.taskIdKeys.length > 0) {
          await this.getUserTasks(_0x35bd64);
        }
      } else {
        await this.getUserTasks(_0x1bbd39);
      }
    }
    await this.goldHomePage("9587270bb85c");
  }
  async notifyTask() {
    let {
      succ: _0x14f74d,
      coin: _0x2c0b49
    } = await this.xtb_queryXtbCount();
    if (_0x14f74d) {
      const _0x4c7c79 = {
        notify: true
      };
      this.log("小团币: " + _0x2c0b49, _0x4c7c79);
    }
    await this.walletMainpage();
  }
  async userTask() {
    const _0x315693 = {
      notify: true
    };
    $.log("\n---------------- 账号[" + this.index + "] ----------------", _0x315693);
    if (!(await this.getLoginedUserInfo())) {
      return;
    }
    await this.refTask();
    await this.ttsqTask();
    await this.wxSqSignTask();
    await this.wxSqsqTask();
    _0x123762 != "false" && (await this.appMrzqTask());
    _0x35fa61 != "false" && (await this.appCyfTask());
  }
}
!(async () => {
  if (!(await _0x3c531f())) {
    return;
  }
  await _0x55c7c9();
  $.read_env(UserClass, ckNames, envSplitor);
  $.log("\n-------------------------------------");
  let _0x1b1a16 = _0xe26294 == "false" ? "不随机提现" : "每日随机提现";
  $.log("APP每日赚钱设置为: " + _0x1b1a16);
  let _0x50d10f = _0x123762 == "false" ? "关闭" : "开启";
  $.log("微信每日赚钱任务开关设置为: " + _0x50d10f);
  let _0x33832f = _0x35fa61 == "false" ? "关闭" : "开启";
  $.log("抽月符任务开关设置为: " + _0x33832f);
  let _0x3a945a = _0x7f3856 == "false" ? "关闭" : "开启";
  $.log("小团币任务开关设置为: " + _0x3a945a);
  $.log("-------------------------------------");
  for (let _0x42ec50 of $.userList) {
    await _0x42ec50.userTask();
  }
  let _0x763b55 = $.userList.filter(_0x5a6482 => _0x5a6482.valid);
  if (_0x763b55.length) {
    if (_0x7f3856 != "false") {
      $.log("\n---------------- APP-小团币 ----------------");
      let _0x8b2e61 = _0x763b55.map(_0x4d11cd => _0x4d11cd.appXtbTask());
      await Promise.all(_0x8b2e61);
    }
    const _0x32c0f7 = {
      notify: true
    };
    $.log("\n---------------- 汇总推送 ----------------", _0x32c0f7);
    for (let _0x30986a of _0x763b55) {
      await _0x30986a.notifyTask();
    }
  }
})().catch(_0x114eac => $.log(_0x114eac)).finally(() => $.exitNow());
async function _0x3c531f() {
  let _0x3b8f7d = false;
  try {
    const _0x16de38 = {
      fn: "auth",
      method: "get",
      url: _0x46e230
    };
    let {
      statusCode: _0x4fda82,
      result: _0x126e82
    } = await _0x1f2798.request(_0x16de38);
    if (_0x4fda82 != 200) {
      return Promise.resolve();
    }
    if (_0x126e82?.["code"] == 0) {
      _0x126e82 = JSON.parse(_0x126e82.data.file.data);
      /*if (_0x126e82?.["commonNotify"] && _0x126e82.commonNotify.length > 0) {
        const _0x15a557 = {
          notify: true
        };
        $.log(_0x126e82.commonNotify.join("\n") + "\n", _0x15a557);
      }
      _0x126e82?.["commonMsg"] && _0x126e82.commonMsg.length > 0 && $.log(_0x126e82.commonMsg.join("\n") + "\n");
      */
      if (_0x126e82[_0x3e749d]) {
        let _0x5565f5 = _0x126e82[_0x3e749d];
        _0x5565f5.status == 0 ? _0x297fa3 >= _0x5565f5.version ? (_0x3b8f7d = true, /*$.log(_0x5565f5.msg[_0x5565f5.status]),*/ $.log(_0x5565f5.updateMsg), $.log("现在运行的脚本版本是：" + _0x297fa3.toFixed(2) + "，最新脚本版本：" + _0x5565f5.latestVersion.toFixed(2))) : $.log(_0x5565f5.versionMsg) : $.log(_0x5565f5.msg[_0x5565f5.status]);
      } else {
        $.log(_0x126e82.errorMsg);
      }
    }
  } catch (_0x13870e) {
    $.log(_0x13870e);
  } finally {
    return _0x3b8f7d;
  }
}
async function _0x55c7c9() {
  let _0x4bdcb4 = false;
  try {
    const _0x3996d3 = {
      fn: "auth",
      method: "get",
      url: _0x99e92f
    };
    let {
      statusCode: _0x1d148a,
      result: _0x418327
    } = await _0x1f2798.request(_0x3996d3);
    if (_0x1d148a != 200) {
      return Promise.resolve();
    }
    if (_0x418327?.["code"] == 0) {
      _0x418327 = JSON.parse(_0x418327.data.file.data);
      inviteCode = _0x418327?.["inviteCode"] || inviteCode;
      for (let _0xa59222 of _0x418327?.["mrzqTaskId_all"] || []) {
        !_0x3cd0c7.includes(_0xa59222) && _0x3cd0c7.push(_0xa59222);
      }
      for (let _0xa16976 of _0x418327?.["commonTaskConf"] || []) {
        _0x316612.filter(_0x45c191 => _0x45c191.name == _0xa16976.name)?.["length"] == 0 && _0x316612.push(_0xa16976);
      }
      if (_0x418327?.["gundomConfV4"]?.["length"]) {
        _0x42faf0 = _0x418327.gundomConfV4;
      }
      if (_0x418327?.["batchConf"]?.["length"]) {
        _0x217615 = _0x418327.batchConf;
      }
      if (_0x418327?.["pid_list"]?.["length"]) {
        _0x356ad9 = _0x418327.pid_list;
      }
      for (let _0x4dbf7f of _0x418327?.["sqsqIdList"] || []) {
        !_0x1c21c8.includes(_0x4dbf7f) && _0x1c21c8.push(_0x4dbf7f);
      }
      for (let _0x5e1c6f of _0x418327?.["sqSignIdList"] || []) {
        !_0x529b0b.includes(_0x5e1c6f) && _0x529b0b.push(_0x5e1c6f);
      }
      for (let _0x17f715 of _0x418327?.["ttsqSignIdList"] || []) {
        !_0x445696.includes(_0x17f715) && _0x445696.push(_0x17f715);
      }
    }
  } catch (_0x1e0ad2) {
    $.log(_0x1e0ad2);
  } finally {
    return _0x4bdcb4;
  }
}
