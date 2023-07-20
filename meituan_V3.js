/*
美团 v3.07

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
  DEFAULT_TIMEOUT = 8000,
  DEFAULT_RETRY = 3;
$.get = function (result, name, value = "") {
    let value1 = value;
    result?.["hasOwnProperty"](name) && (value1 = result[name]);
    return value1;
}
$.wait_gap_interval = async function (_0x58be0e, _0x285f22) {
    let _0x505076 = Date.now() - _0x58be0e;
    _0x505076 < _0x285f22 && (await this.wait(_0x285f22 - _0x505076));
}

let _0xf6b9da = null;
const _0x2f9f59 = null;
const _0xdc3dbc = 3.07,
  _0x3d6478 = "meituan",
  _0x513190 = "https://leafxcy.coding.net/api/user/leafxcy/project/validcode/shared-depot/validCode/git/blob/master/code.json",
  _0x17053c = "https://leafxcy.coding.net/api/user/leafxcy/project/validcode/shared-depot/validCode/git/blob/master/" + _0x3d6478 + ".json",
  _0x42afcc = "Mozilla/5.0 (iPhone; CPU iPhone OS 16_1_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.33(0x18002129) NetType/WIFI Language/zh_CN",
  _0x29b8ac = "wxde8ac0a21135c07d",
  _0x1209ea = "1399386702",
  _0x3b2ebc = "2.30.3",
  _0x4b1eb0 = "iphone",
  _0xf7a395 = "AwQAAABJAgAAAAEAAAAyAAAAPLgC95WH3MyqngAoyM/hf1hEoKrGdo0pJ5DI44e1wGF9AT3PH7Wes03actC2n/GVnwfURonD78PewMUppAAAADgCEZv2akitiLnGkQIH6r67N1V9EUFpKyBOQRSRKpv9Awnm6LwnygipNjcIwXXJZEv5ddnUSW8vZQ==",
  _0x5c3347 = "0123456789",
  _0x46489a = "qwertyuiopasdfghjklzxcvbnm",
  _0x2aa4a6 = _0x5c3347 + _0x46489a + _0x46489a.toUpperCase();
let _0x64fc4 = "114.07" + $.randomString(12, _0x5c3347),
  _0x28fa6d = "22.52" + $.randomString(13, _0x5c3347),
  inviteCode = "NnOIp-QOs8SiYF1dcSlL5r8phPrCf6qkH7evMyjIoureqol0OXXaopfjjblE0yPge-nmlRKIDEgmTxF7oaoA4OfQjhGdF522KA_poICzK21VFORrK_ggku9ewgI6-qR5VCf7Blcp0wY6_CtAKvFkqFYXG42pu_6MtY7K6RDMjic",
  inviteCode2 = "NnOIp-QOs8SiYF1dcSlL5r8phPrCf6qkH7evMyjIoureqol0OXXaopfjjblE0yPgFQmJJWVFWc4CivexLwFRdcbcHaALd6__chOQeI55cEbhOmMc4oO8cWhZxYuQm9DsSt1nfKeLK2Rz8ExgU4PovBpOFx_LiHkpyxZNebiIkCE",
  gundomConfV4 = [],
  _0x595085 = [];
const _0x486934 = 600,
  _0x53cb09 = 10,
  _0x4caacb = ["1005", "1007"];
let _0x41fdb5 = ["631682c504", "bb88750009", "9f90f45850", "90e9ecbe6a", "b6bfd8c1bc", "d4caf84940", "8decbc4c98", "c6026478e4", "4353a111e9", "7ceb1c14a7", "89515f0102", "63bec5af07", "1c8df37ffe", "36eedbe86c", "6ab415d70c", "3c309c7f26", "66c2938e1d", "3497a4fd05", "7f1f7ec5a4", "2fb53287b2", "2b0ada0dd7", "495070b239", "176f400a8f", "672129ff6d", "a479497fa6", "97ea404b56", "320ffa53e7", "6ccbda387f", "6f2d5f144f", "563983d5f1", "6f70050a62", "dfd9c44d7f", "6d5461c6dd", "a7331f5c94", "8d3891bef9", "eb6094dcaa", "11c95cc416", "351c3f4810", "67bd2e0988", "cdb75f714d", "3a6eba11a1", "76f9dc2980", "30644bcb35", "d1a1d62e6c", "8af63652ba", "075eb403be", "361ba45eff", "cfbb835838", "e26f305436", "ed33f82fa9", "e36bae3f8f", "6696ff7825", "b7719de06c", "2ab24bbc57", "2d98ddf8ac", "406fb78bfd", "9b84c4503a", "55ce3f059d", "cd06f8210b", "f6706f9b33", "34a718f16a", "f5e2218b18", "c7f6a889ff", "2583c8ba46", "45e325543c", "a162c96304"],
  _0x2b7b9e = ["b24pg8jaFTeNadCXq0lb3A", "yLm-IynkBUQLt09kALFv8Q", "Ox5_0TfqOg6b3UfkKS3rUg", "TADnCANwheP5AKOjx3NpgA"],
  _0x5bf518 = ["06hFC-C1WGiAQYUGya5QJA", "5IFmI13NeO7kRPW1jUj7Lw", "ySJ2HpgexeI0TJcLkA_5Ug"],
  _0x571dcc = ["KXGjpKrk2h_43vUrIKbzDA", "l3emawQka8JjlE6LMyYT3g", "r9348AwSwnwP715csHvDqw", "XVsZc3p1O1jd-uTG4EjyXw", "9khEyiqt2tKFyZSjvqphkQ", "_p2QL78Fao6bsexHzofp-w", "jXL-9iEaRTsv-FZdpX4Z4g"];
const _0x292772 = {
  "name": "APP-天天领金币",
  "cubePageId": 184008,
  "taskIdKeys": ["e8e72a2c8d", "ea69bee3c0", "129328922f", "15b494e7bc", "d36be8140b", "77c78d45cc"]
};
const _0x31c9c9 = {
  "name": "APP-每日赚钱",
  "cubePageId": 10000003,
  "taskIdKeys": ["b6e6e96128", "710d92816e", "fc43b223be"]
};
const _0x2488a5 = {
  "name": "WX-每日赚钱",
  "cubePageId": 184008,
  "taskIdKeys": ["1fff834702"]
};
const _0x136fa7 = {
  "name": "APP-团团神券-魔法石",
  "cubePageId": 88888889,
  "taskIdKeys": ["a941c20450", "cdcc8a8195", "eb03206b17", "5c919dfbd8", "8f53427c39", "f749a47257", "4d609dde67", "3e5cbc8120", "532e764346", "7613d02997"]
};
const _0x1e4622 = {
  "name": "WX-天天赚钱",
  "cubePageId": 123,
  "taskIdKeys": _0x41fdb5
};
const _0x54d1ac = [_0x292772, _0x31c9c9, _0x2488a5, _0x136fa7, _0x1e4622],
  _0x5970db = {
    "NORMAL_CARD": "普通卡",
    "SENIOR_CARD": "稀有卡"
  };
const _0x21a996 = {
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

let _0x45daeb = [];
class _0xef6898 {
  constructor() {
    this.index = $.userIdx++;
    this.name = "";
    this.valid = true;
    const _0x16000a = {
      "limit": 0
    };
    const _0x5e8099 = {
      "Connection": "keep-alive"
    };
    const _0x5f8121 = {
      "retry": _0x16000a,
      "timeout": DEFAULT_TIMEOUT,
      "followRedirect": false,
      "headers": _0x5e8099
    };
    this.got = got.extend(_0x5f8121);
  }
  ["log"](_0x16717b, _0xb4de7e = {}) {
    var _0x1542e2 = "",
      _0x24174d = $.userCount.toString().length;
    if (this.index) {
      _0x1542e2 += "账号[" + $.padStr(this.index, _0x24174d) + "]";
    }
    if (this.name) {
      _0x1542e2 += "[" + this.name + "]";
    }
    $.log(_0x1542e2 + _0x16717b, _0xb4de7e);
  }
  async ["request"](_0xf7cefe) {
    var _0x16beb2 = {
      "statusCode": -1,
      "headers": null,
      "result": null
    };
    try {
      var _0x20d15f = null,
        _0x6f1b8c = 0,
        _0x395e31 = _0xf7cefe.fn || _0xf7cefe.url;
      _0xf7cefe.method = _0xf7cefe?.["method"]?.["toUpperCase"]() || "GET";
      while (_0x6f1b8c++ < DEFAULT_RETRY) {
        try {
          await this.got(_0xf7cefe).then(_0x1921cb => {
            _0x20d15f = _0x1921cb;
          }, _0x1932bf => {
            _0x20d15f = _0x1932bf.response;
          });
          if ((_0x20d15f?.["statusCode"] / 100 | 0) <= 4) {
            break;
          }
        } catch (_0x47d66d) {
          _0x47d66d.name == "TimeoutError" ? this.log("[" + _0x395e31 + "]请求超时，重试第" + _0x6f1b8c + "次") : this.log("[" + _0x395e31 + "]请求错误(" + _0x47d66d.message + ")，重试第" + _0x6f1b8c + "次");
        }
      }
      if (_0x20d15f) {
        let {
          statusCode: _0x478f43,
          headers: _0x45ec2c,
          body: _0x5eddfd
        } = _0x20d15f;
        if (_0x5eddfd) {
          try {
            _0x5eddfd = JSON.parse(_0x5eddfd);
          } catch {}
        }
        const _0x2e32b2 = {
          "statusCode": _0x478f43,
          "headers": _0x45ec2c,
          "result": _0x5eddfd
        };
        _0x16beb2 = _0x2e32b2;
      }
    } catch (_0x1391ea) {
      console.log(_0x1391ea);
    } finally {
      return _0x16beb2;
    }
  }
}
let _0x1a5917 = new _0xef6898();
class UserClass extends _0xef6898 {
  constructor(ck) {
    super();
    Object.assign(this, $.CkToJson(ck));
    this.t_earnDaily = 0;
    this.uuid = $.randomPattern("186ebxxxxxxxx-22e49fxxxxxxxx-0-0-186ebxxxxxxxx");
    this.openid = $.randomString(7, _0x2aa4a6) + "-" + $.randomString(20, _0x2aa4a6);
    this.valid_fp = false;
    this.fp = "H5dfp_1.8.2_tttt_CziTmz1LjARvHzKKzoDtmdBgc6Df5b+sgrXDtVBPjiCayshtLKt1gh8PjGGT";
    this.got = this.got.extend({
      "headers": {
        "User-Agent": _0x42afcc,
        "token": this.token,
        "openid": this.openid,
        "uuid": this.uuid,
        "M-APPKEY": "wxmp_mt-weapp",
        "clientversion": _0x3b2ebc,
        "utm_medium": _0x4b1eb0,
        "openIdCipher": _0xf7a395,
        "cookie": "openid=" + this.openid + "; "+ck.trim()
      }
    });
  }
  ["notify_coupon"](_0x210b7a, _0xf6bbac = "领券") {
    for (let _0x4c7206 of _0x210b7a) {
      const _0x562138 = {
        "notify": true
      };
      this.log(_0xf6bbac + ": " + _0x4c7206, _0x562138);
    }
  }
  async ["get_mtgsig"](url, data) {
    const _0xdbd457 = {
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
        "mtgsig": JSON.stringify(_0xdbd457)
      }
    };
    if (MTS) {
      Req=MTS.callMtgsig({
        "url": url,
        "method": "POST",
        "headers": this.got.defaults.options.headers,
        'data': data
      })

    } else {
      if (mtgsig_url) {
        const _0x34465a = {
          "url": url,
          "data": data
        };
        let _0x211846 = {
            "fn": "get_mtgsig",
            "method": "post",
            "url": mtgsig_url + "/mtgsig",
            "json": _0x34465a
          },
          {
            result: _0x2b3d78
          } = await this.request(_0x211846),
          _0x137412 = _0x2b3d78?.["code"];
        _0x137412 === 0 ? Req = _0x2b3d78.data : this.log("获取mtgsig失败[" + _0x137412 + "]: " + _0x2b3d78?.["msg"]);
      }
    }
    return Req;
  }
  async ["getfp"](_0x2ec54d = false) {
    if (!this.valid_fp) {
      if (MTS && _0x2ec54d) {
        this.fp = MTS.mtFingerprint();
        this.valid_fp = true;
      } else {
        if (mtgsig_url && _0x2ec54d) {
          let _0x48a6ed = {
              "fn": "getfp",
              "method": "get",
              "url": mtgsig_url + "/getfp"
            },
            {
              result: _0x4d5ddf
            } = await this.request(_0x48a6ed),
            _0x50d705 = _0x4d5ddf?.["code"];
          _0x50d705 === 0 ? (this.fp = _0x4d5ddf.data, this.valid_fp = true) : this.log("获取fp失败[" + _0x50d705 + "]: " + _0x4d5ddf?.["msg"]);
        }
      }
    }
    return this.fp;
  }
  async ["get_app_riskForm"](_0x58937b = false) {
    let _0x3d868b = await this.getfp(_0x58937b);
    const _0x519e37 = {
      "ip": "",
      "fingerprint": _0x3d868b,
      "cityId": "30",
      "platform": 5,
      "app": 0,
      "version": "12.8.202",
      "uuid": ""
    };
    return _0x519e37;
  }
  async ["get_riskForm"](_0x4b448d = false) {
    let _0x49830b = await this.getfp(_0x4b448d);
    const _0x444973 = {
      "openid": this.openid,
      "appid": _0x29b8ac,
      "mchid": _0x1209ea
    };
    let _0x5ba60c = {
      "uuid": this.uuid,
      "userid": this.userId,
      "openid": this.openid,
      "expoId": _0xf7a395,
      "ip": "",
      "partner": 0,
      "wxRiskLevel": JSON.stringify(_0x444973),
      "platform": 13,
      "appletsFingerprint": _0x49830b,
      "wechatFingerprint": _0x49830b
    };
    return _0x5ba60c;
  }
  async ["encode_riskForm"](_0x4b5fbc = false) {
    let _0x5218a9 = await this.get_riskForm(_0x4b5fbc);
    return base64_encode(JSON.stringify(_0x5218a9));
  }
  async ["getLoginedUserInfo"](_0x2de665 = {}) {
    let _0x46008d = false;
    try {
      const _0x509e62 = {
        "fn": "getLoginedUserInfo",
        "method": "get",
        "url": "https://i.meituan.com/wrapapi/getLoginedUserInfo",
        "searchParams": {"token": this.token}
      };
      let {result} = await this.request(_0x509e62);
      if (result?.["mobile"]) {
        _0x46008d = true;
        this.name = result.nickName;//mobile;
        this.userId = Number(result.userId);
        this.log("登录成功");
      } else {
        this.log("获取账号信息失败, ck可能失效");//, {"notify": true}
        await expireNotify(this.userId, this.index);
      }
    } catch (_0x1e2307) {
      console.log(_0x1e2307);
    } finally {
      return _0x46008d;
    }
  }
  async ["inviteFetchcoupon"](_0x273b09 = {}) {
    try {
      const _0x1024c0 = {
        "fn": "inviteFetchcoupon",
        "method": "get",
        "url": "https://promotion-waimai.meituan.com/invite/fetchcoupon",
        "searchParams": {}
      };
      _0x1024c0.searchParams.ctype = "wxapp";
      _0x1024c0.searchParams.fpPlatform = 13;
      _0x1024c0.searchParams.isMini = 1;
      _0x1024c0.searchParams.token = this.token;
      _0x1024c0.searchParams.inviteCode = this.name!="nyqty" ? inviteCode :  inviteCode2;
      let {
          result: _0x4fd263
        } = await this.request(_0x1024c0),
        _0x24ceee = $.get(_0x4fd263, "code", -1),
        _0x61433b = $.get(_0x4fd263, "subcode", -1);
      if ((_0x24ceee == 0 || _0x24ceee == 1) && (_0x61433b == 0 || _0x61433b == 2)) {
        let _0x264b88 = _0x4fd263?.["data"]?.["couponList"]?.["map"](_0x3462e4 => "[" + _0x3462e4.couponTitle + "]" + (_0x3462e4.priceLimit || "无门槛") + "减" + _0x3462e4.couponValue);
        this.notify_coupon(_0x264b88);
      } else {
        let _0x4e9387 = _0x4fd263?.["msg"] || _0x4fd263?.["message"] || "";
        this.log("领券失败[" + _0x24ceee + "]: " + _0x4e9387);
      }
    } catch (_0x524836) {
      console.log(_0x524836);
    }
  }
  async ["gundamGrabV4"](_0x35a066, _0x1d962e = {}) {
    try {
      const _0x24c98f = {
        "fn": "gundamGrabV4",
        "method": "post",
        "url": "https://mediacps.meituan.com/gundam/gundamGrabV4",
        "json": _0x35a066,
        "headers": {}
      };
      _0x24c98f.headers.Origin = "https://market.waimai.meituan.com";
      _0x24c98f.headers.Referer = "https://market.waimai.meituan.com/";
      let {
          result: _0x132f7d
        } = await this.request(_0x24c98f),
        _0x52203d = $.get(_0x132f7d, "code", -1);
      if (_0x52203d == 0) {
        let _0x188bf2 = _0x132f7d?.["data"]?.["allCoupons"]?.["map"](_0x537ce2 => "[" + _0x537ce2.couponName + "]" + (_0x537ce2.amountLimit || "无门槛") + "减" + _0x537ce2.couponAmount);
        this.notify_coupon(_0x188bf2);
      } else {
        let _0x19d9f7 = _0x132f7d?.["msg"] || _0x132f7d?.["message"] || "";
        this.log("领券失败[" + _0x52203d + "]: " + _0x19d9f7);
      }
    } catch (_0x2fbf09) {
      console.log(_0x2fbf09);
    }
  }
  async ["turntableDraw"](_0x9e1cca, _0x430bd1 = {}) {
    try {
      let _0x150111 = {
          "fn": "turntableDraw",
          "method": "post",
          "url": "https://promotion.waimai.meituan.com/lottery/turntable/draw",
          "searchParams": {
            "actualLat": _0x28fa6d,
            "actualLng": _0x64fc4,
            "initialLat": _0x28fa6d,
            "initialLng": _0x64fc4,
            "cType": $.get(_0x430bd1, "cType", "wm_wxapp"),
            "wm_appversion": $.get(_0x430bd1, "wm_appversion", "9.19.6"),
            "gdPageId": $.get(_0x430bd1, "gdPageId", "460584"),
            "token": this.token,
            "userId": this.userId,
            "uuid": this.uuid
          },
          "json": {
            "activityViewId": _0x9e1cca,
            "appType": 0,
            "deviceType": 2,
            "wxOpenId": this.openid,
            "fpPlatform": 5,
            "mtFingerprint": ""
          }
        },
        {
          result: _0x49dc9f
        } = await this.request(_0x150111),
        _0x3c1e32 = $.get(_0x49dc9f, "code", -1);
      if (_0x3c1e32 == 0) {
        let _0x4ebe20 = [];
        for (let _0x179f37 of _0x49dc9f?.["data"]?.["awards"]) {
          _0x179f37.couponType == 1 ? _0x4ebe20.push("[" + _0x179f37.name + "]" + (_0x179f37.orderAmountLimit || "无门槛") + "减" + _0x179f37.amount) : _0x4ebe20.push(_0x179f37.desc);
        }
        this.notify_coupon(_0x4ebe20, "社群抽奖");
      } else {
        let _0x1c56c3 = _0x49dc9f?.["msg"] || _0x49dc9f?.["message"] || "";
        this.log("社群抽奖失败[" + _0x3c1e32 + "]: " + _0x1c56c3);
      }
    } catch (_0x1018bd) {
      console.log(_0x1018bd);
    }
  }
  async ["signupRecord"](_0xc24886, _0x2890bc = {}) {
    try {
      let _0x499786 = {
          "fn": "signupRecord",
          "method": "get",
          "url": "https://promotion.waimai.meituan.com/playcenter/common/v1/treasurebox/signup/circle/record",
          "searchParams": {
            "activityViewId": _0xc24886,
            "isInDpEnv": 0,
            "isMini": 1,
            "cType": $.get(_0x2890bc, "cType", "wm_wxapp")
          }
        },
        {
          result: _0x576312
        } = await this.request(_0x499786),
        _0x259aba = $.get(_0x576312, "code", -1);
      if (_0x259aba == 0) {
        this.log("已连续签到" + (_0x576312?.["data"]?.["signUpNum"] || 0) + "天");
        for (let _0x18fdcc of _0x576312?.["data"]?.["rewardStatus"]?.["filter"](_0x2589c6 => _0x2589c6.status == 1)) {
          await this.signupGetBox(_0xc24886, _0x18fdcc.stageDayNum);
        }
      } else {
        let _0x3b56e9 = _0x576312?.["msg"] || _0x576312?.["message"] || "";
        this.log("查询签到失败[" + _0x259aba + "]: " + _0x3b56e9);
      }
    } catch (_0x267af6) {
      console.log(_0x267af6);
    }
  }
  async ["signupGetBox"](_0x3d844c, _0x202050, _0x5da13c = {}) {
    try {
      const _0x1b1491 = {
        "signUpDayNum": _0x202050
      };
      let _0x16bf54 = {
          "fn": "signupGetBox",
          "method": "post",
          "url": "https://promotion.waimai.meituan.com/playcenter/common/v1/treasurebox/signup/stage/reward/get",
          "searchParams": {
            "isInDpEnv": 0,
            "isMini": 1,
            "cType": $.get(_0x5da13c, "cType", "wm_wxapp")
          },
          "json": {
            "activityViewId": _0x3d844c,
            "actionCode": 1000,
            "lat": _0x28fa6d,
            "lng": _0x64fc4,
            "fpPlatform": 13,
            "bizParams": JSON.stringify(_0x1b1491),
            "utmSource": "",
            "utmCampaign": "",
            "gdId": 421412,
            "codeVersion": 1,
            "mtFingerprint": ""
          }
        },
        {
          result: _0x31f741
        } = await this.request(_0x16bf54),
        _0x5ed0d4 = $.get(_0x31f741, "code", -1);
      if (_0x5ed0d4 == 0) {
        let _0x1f86f7 = _0x31f741?.["data"]?.["prizeInfoList"]?.["map"](_0x50283a => "[" + _0x50283a.couponInfo.couponTitle + "]" + (_0x50283a.couponInfo.priceLimit || "无门槛") + "减" + _0x50283a.couponInfo.couponValue);
        this.notify_coupon(_0x1f86f7, "开签到宝箱");
      } else {
        let _0x261b2e = _0x31f741?.["msg"] || _0x31f741?.["message"] || "";
        this.log("开签到宝箱失败[" + _0x5ed0d4 + "]: " + _0x261b2e);
      }
    } catch (_0x4f95cf) {
      console.log(_0x4f95cf);
    }
  }
  async ["ttsqEntry"](_0x4f03f0, _0x17b940 = {}) {
    try {
      const _0x32993d = {
        "activityViewId": _0x4f03f0,
        "actionCodes": 1000,
        "querySignupConfig": 1,
        "lat": _0x28fa6d,
        "lng": _0x64fc4
      };
      const _0x27f58c = {
        "fn": "signupRecord",
        "method": "get",
        "url": "https://promotion.waimai.meituan.com/playcenter/common/v1/entry",
        "searchParams": _0x32993d
      };
      let {
          result: _0x39669d
        } = await this.request(_0x27f58c),
        _0x4d6e66 = $.get(_0x39669d, "code", -1);
      if (_0x4d6e66 == 0) {
        if (_0x39669d.data.actionInfoList) {
          for (let _0x3115c5 of _0x39669d.data.actionInfoList) {
            await this.ttsqDoAction(_0x4f03f0, _0x3115c5.actionCode || 1000);
          }
        }
      } else {
        let _0x41dffa = _0x39669d?.["msg"] || _0x39669d?.["message"] || "";
        this.log("查询天天神券宝箱失败[" + _0x4d6e66 + "]: " + _0x41dffa);
      }
    } catch (_0xb9b497) {
      console.log(_0xb9b497);
    }
  }
  async ["ttsqDoAction"](_0x1b9ca5, _0xb6e8e6, _0x1f9973 = {}) {
    try {
      let _0x5a9163 = {
          "fn": "ttsqDoAction",
          "method": "post",
          "url": "https://promotion.waimai.meituan.com/playcenter/common/v1/doaction",
          "json": {
            "activityViewId": _0x1b9ca5,
            "actionCode": _0xb6e8e6 || 1000,
            "lat": _0x28fa6d,
            "lng": _0x64fc4,
            "gdId": 26403,
            "fpPlatform": 13,
            "utmSource": "",
            "utmCampaign": "",
            "mtFingerprint": ""
          }
        },
        {
          result: _0x125b45
        } = await this.request(_0x5a9163),
        _0x1c133a = $.get(_0x125b45, "code", -1);
      if (_0x1c133a == 0) {
        let _0x2bda8f = _0x125b45?.["data"]?.["prizeInfoList"]?.["map"](_0x4f5528 => _0x4f5528.awardType >= 0 ? "[" + _0x4f5528.couponInfo.couponTitle + "]" + (_0x4f5528.couponInfo.priceLimit || "无门槛") + "减" + _0x4f5528.couponInfo.couponValue : "")?.["filter"](_0x2b503f => _0x2b503f);
        this.notify_coupon(_0x2bda8f, "开天天神券宝箱");
      } else {
        let _0x140ecb = _0x125b45?.["msg"] || _0x125b45?.["message"] || "";
        this.log("开天天神券宝箱失败[" + _0x1c133a + "]: " + _0x140ecb);
      }
    } catch (_0x420380) {
      console.log(_0x420380);
    }
  }
  async ["clockInStatus"](_0x342008, _0x220685 = {}) {
    try {
      let _0x30aa1c = {
          "fn": "clockInStatus",
          "method": "get",
          "url": "https://promotion.waimai.meituan.com/playcenter/common/v1/clock-in/status",
          "searchParams": {
            "activityViewId": _0x342008,
            "ctype": $.get(_0x220685, "ctype", "wm_wxapp"),
            "isInDpEnv": 0
          }
        },
        {
          result: _0x403472
        } = await this.request(_0x30aa1c),
        _0x19b3cf = $.get(_0x403472, "code", -1);
      if (_0x19b3cf == 0) {
        let _0x3b9086 = new Date().getDay();
        for (let _0x54e1fb of _0x403472.data.clockInStatus) {
          if (_0x54e1fb.dayOfWeek % 7 == _0x3b9086) {
            this.log("今天社群" + (_0x54e1fb.status ? "已" : "未") + "签到, 本周已签到" + _0x403472.data.clockInNum + "天");
            if (!_0x54e1fb.status) {
              await this.clockInSign(_0x342008);
            }
            break;
          }
        }
        _0x403472.data.lotteryStatus == 1 && (await this.ttsqDoAction(_0x342008, 1001));
      } else {
        let _0x3cce2c = _0x403472?.["msg"] || _0x403472?.["message"] || "";
        this.log("查询社群签到失败[" + _0x19b3cf + "]: " + _0x3cce2c);
      }
    } catch (_0x19d92e) {
      console.log(_0x19d92e);
    }
  }
  async ["clockInSign"](_0x2e6528, _0xd82a78 = {}) {
    try {
      const _0x334e48 = {
        "activityViewId": _0x2e6528,
        "actionCode": 1001,
        "lat": _0x28fa6d,
        "lng": _0x64fc4
      };
      let _0xa62fce = {
          "fn": "clockInSign",
          "method": "post",
          "url": "https://promotion.waimai.meituan.com/playcenter/common/v1/clock-in",
          "searchParams": {
            "isMini": 1,
            "ctype": $.get(_0xd82a78, "ctype", "wm_wxapp"),
            "isInDpEnv": 0
          },
          "json": _0x334e48
        },
        {
          result: _0x2e207f
        } = await this.request(_0xa62fce),
        _0x306f74 = $.get(_0x2e207f, "code", -1);
      if (_0x306f74 == 0) {
        let _0x145866 = _0x2e207f?.["data"]?.["prizeInfoList"]?.["map"](_0xcff8b4 => "[" + _0xcff8b4.couponInfo.couponTitle + "]" + (_0xcff8b4.couponInfo.priceLimit || "无门槛") + "减" + _0xcff8b4.couponInfo.couponValue);
        this.notify_coupon(_0x145866);
      } else {
        let _0x24eda0 = _0x2e207f?.["msg"] || _0x2e207f?.["message"] || "";
        this.log("社群签到失败[" + _0x306f74 + "]: " + _0x24eda0);
      }
    } catch (_0x2e1062) {
      console.log(_0x2e1062);
    }
  }
  async ["cardLotteryNum"](_0x20b8b4 = {}) {
    try {
      const _0x3c92d0 = {
        "fn": "cardLotteryNum",
        "method": "post",
        "url": "https://mgm.meituan.com/marketing/cardsCollect/api/cardLotteryNum",
        "json": {}
      };
      _0x3c92d0.json.activityId = "1116";
      _0x3c92d0.json.topicIdList = ["1380101169187258449", "1380101260094521416", "1412292930126868547"];
      let {
        result: _0x5a9455
      } = await this.request(_0x3c92d0);
      if (_0x5a9455?.["lotteryNum"] >= 0) {
        let _0x32f01b = _0x5a9455.lotteryNum;
        this.log("有" + _0x32f01b + "次抽月符机会");
        while (_0x32f01b-- > 0) {
          await this.lotteryfrompool(_0x5a9455.poolIdList);
        }
      } else {
        let _0x53fb73 = _0x5a9455?.["msg"] || _0x5a9455?.["message"] || "";
        this.log("查询抽月符次数失败: " + _0x53fb73);
      }
    } catch (_0x3b569d) {
      console.log(_0x3b569d);
    }
  }
  async ["cardSaveAccess"](_0x56577e = {}) {
    try {
      const _0x24df3c = {
        "playerId": 1
      };
      const _0x100581 = {
        "fn": "cardSaveAccess",
        "method": "post",
        "url": "https://mgm.meituan.com/marketing/cardsCollect/api/saveAccess",
        "json": _0x24df3c
      };
      await this.request(_0x100581);
    } catch (_0x265d19) {
      console.log(_0x265d19);
    }
  }
  async ["cardSaveShare"](_0x3d797b = {}) {
    try {
      const _0x3deca5 = {
        "playerId": 1,
        "shareWay": 1,
        "shareContentType": 1,
        "shareContentId": "29"
      };
      const _0x807e67 = {
        "fn": "cyfSaveShare",
        "method": "post",
        "url": "https://mgm.meituan.com/marketing/cardsCollect/api/saveShare",
        "json": _0x3deca5
      };
      await this.request(_0x807e67);
    } catch (_0x49a2a1) {
      console.log(_0x49a2a1);
    }
  }
  async ["lotteryfrompool"](_0x6a3525, _0x2a7d97 = {}) {
    try {
      const _0x462e79 = {
        "poolList": _0x6a3525
      };
      const _0x3abbd9 = {
        "fn": "lotteryfrompool",
        "method": "post",
        "url": "https://mgm.meituan.com/marketing/cardsCollect/api/lotteryfrompool",
        "json": _0x462e79
      };
      let {
        result: _0x400d08
      } = await this.request(_0x3abbd9);
      if (_0x400d08?.["prizeInfo"]?.["name"]) {
        this.log("抽到月符: [" + _0x400d08?.["prizeInfo"]?.["name"] + "]");
        await this.getCardInfo(_0x400d08?.["lotteryAwardSerialNo"]?.["value"]);
      } else {
        let _0x139959 = _0x400d08?.["msg"] || _0x400d08?.["message"] || "";
        this.log("抽月符失败: " + _0x139959);
      }
    } catch (_0x1bb274) {
      console.log(_0x1bb274);
    }
  }
  async ["getCardInfo"](_0x1ffebb, _0x26acdc = {}) {
    try {
      const _0x2cf767 = {
        "lotteryAwardSerialNo": _0x1ffebb
      };
      const _0x31068c = {
        "fn": "getCardInfo",
        "method": "get",
        "url": "https://mgm.meituan.com/marketing/cardsCollect/api/getCardInfo",
        "searchParams": _0x2cf767
      };
      let {
          result: _0xe892d2
        } = await this.request(_0x31068c),
        _0x452b6b = $.get(_0xe892d2, "code", -1);
      if (_0x452b6b == 0) {
        await this.getCardDraw(_0xe892d2?.["userCardInfo"]?.["cardId"]);
      } else {
        let _0x326fb4 = _0xe892d2?.["msg"] || _0xe892d2?.["message"] || "";
        this.log("查询月符抽奖卡号失败[" + _0x452b6b + "]: " + _0x326fb4);
      }
    } catch (_0x13b0f9) {
      console.log(_0x13b0f9);
    }
  }
  async ["getCardDraw"](_0x2acb96, _0x568b24 = {}) {
    try {
      const _0x4423cf = {
        "cardId": _0x2acb96
      };
      const _0x12be5e = {
        "fn": "getCardDraw",
        "method": "get",
        "url": "https://mgm.meituan.com/marketing/cardsCollect/api/draw",
        "searchParams": _0x4423cf
      };
      let {
        result: _0x224630
      } = await this.request(_0x12be5e);
      if (_0x224630?.["bingo"]?.["value"]) {
        this.log("月符抽奖: " + _0x224630?.["prizeInfo"]?.["name"]);
      } else {
        let _0x126b08 = _0x224630?.["msg"] || _0x224630?.["message"] || "";
        this.log("查询月符抽奖结果失败: " + _0x126b08);
      }
    } catch (_0x57da16) {
      console.log(_0x57da16);
    }
  }
  async ["getUserTasks"](_0x7212b4, _0x47057f = {}) {
    try {
      const _0x1cbcdf = {
        "fn": "getUserTasks",
        "method": "post",
        "url": "https://cube.meituan.com/topcube/api/toc/task/getUserTasks",
        "json": {}
      };
      _0x1cbcdf.json.uuid = this.uuid;
      _0x1cbcdf.json.userId = this.userId;
      _0x1cbcdf.json.browseAreaTrue = true;
      _0x1cbcdf.json.cityId = 30;
      _0x1cbcdf.json.taskIdKeys = _0x7212b4.taskIdKeys;
      _0x1cbcdf.json.userType = "MEI_TUAN";
      _0x1cbcdf.json.sourceType = "MEI_TUAN";
      _0x1cbcdf.json.mini_program_token = this.token;
      _0x1cbcdf.json.inviter = "";
      _0x1cbcdf.json.inviterTaskIdKey = "";
      let {
        result: _0x846e37
      } = await this.request(_0x1cbcdf);
      if (_0x846e37?.["code"] == 0) {
        for (let _0x5ee79a of _0x846e37.data) {
          if (!_0x4caacb.includes(_0x5ee79a?.["code"]?.["toString"]())) {
            if (!_0x5ee79a?.["taskRuleVos"]?.["length"]) {
              $.log("任务[" + _0x5ee79a.title + "] -- " + _0x5ee79a.msg);
              continue;
            }
            if (_0x5ee79a?.["title"]?.["includes"]("小程序下单")) {
              continue;
            }
            let _0x35faf2 = _0x5ee79a?.["extend"] ? true : false;
            if (_0x35faf2 && _0x5ee79a?.["extend"]?.["isSignInToday"] == 1) {
              $.log("任务[" + _0x5ee79a.title + "] -- 已完成");
              continue;
            }
            let _0x55c5fb = false;
            if (_0x5ee79a.taskConf) {
              let _0x20b38c = JSON.parse(_0x5ee79a.taskConf);
              _0x20b38c.isCheckNgSignature && (_0x55c5fb = true);
            }
            for (let _0x824677 of _0x5ee79a.taskRuleVos) {
              if (_0x824677.status == "PRIZE_SUCC" || _0x824677.status == "DELETE") {
                !_0x35faf2 && $.log("任务[" + _0x5ee79a.title + "] -- 已完成");
              } else {
                if (_0x824677?.["status"] == "CAN_RECEIVE") {
                  $.log("任务[" + _0x5ee79a.title + "] -- 可领取奖励");
                  const _0x9975b4 = {
                    "need_sign": _0x55c5fb
                  };
                  await this.sendTaskPrize(_0x7212b4, _0x5ee79a, _0x824677, {}, _0x9975b4);
                  if (_0x35faf2) {
                    break;
                  }
                } else {
                  $.log("任务[" + _0x5ee79a.title + "] -- 未完成");
                  let _0x101d99 = true,
                    _0x2f4d51 = JSON.parse(_0x824677.ruleConfig);
                  if (_0x2f4d51.limitTime) {
                    let _0x55b499 = (_0x824677.preCompleteTime || 0) + _0x2f4d51.limitTime * 1000;
                    Date.now() < _0x55b499 && (_0x101d99 = false, $.log("任务[" + _0x5ee79a.title + "]冷却中, [" + $.time("hh:mm:ss", _0x55b499) + "]后可完成"));
                  } else {
                    if (_0x2f4d51?.["timeLimits"]?.["length"]) {
                      let _0x29b9a0 = new Date($.time("yyyy-MM-dd 00:00:00")).getTime(),
                        _0x52dba5 = Date.now();
                      for (let _0x4982c2 of _0x2f4d51.timeLimits) {
                        let {
                          startTime: _0x104eea,
                          endTime: _0x31346d
                        } = _0x4982c2;
                        _0x104eea += _0x29b9a0;
                        _0x31346d += _0x29b9a0;
                        (_0x52dba5 < _0x104eea || _0x52dba5 >= _0x31346d) && (_0x101d99 = false, $.log("任务[" + _0x5ee79a.title + "]不在时间段中: " + $.time("hh:mm:ss", _0x104eea) + "到" + $.time("hh:mm:ss", _0x31346d)));
                      }
                    }
                  }
                  if (_0x101d99) {
                    const _0x2676ed = {
                      "need_sign": _0x55c5fb
                    };
                    await this.startUserTask(_0x7212b4, _0x5ee79a, _0x824677, _0x2676ed);
                  }
                  if (_0x35faf2) {
                    break;
                  }
                }
              }
            }
          }
        }
      } else {
        let _0x4c92e8 = _0x846e37?.["msg"] || _0x846e37?.["desc"] || "";
        this.log("查询任务列表失败: " + _0x4c92e8);
      }
    } catch (_0x255c64) {
      console.log(_0x255c64);
    }
  }
  async ["startUserTask"](_0x8b746, _0x143ba4, _0x500a5b, _0x553726 = {}) {
    try {
      let _0x189552 = _0x553726?.["need_sign"],
        _0x13a813 = "https://cube.meituan.com/topcube/api/toc/task/startUserTask",
        _0x4f6cb2 = {
          "uuid": this.uuid,
          "userId": this.userId,
          "cityId": 30,
          "riskForm": await this.encode_riskForm(_0x189552),
          "taskIdKey": _0x143ba4.taskIdKey,
          "taskRuleIdKey": _0x500a5b.taskRuleIdKey,
          "cubePageId": _0x8b746.cubePageId,
          "userType": "MEI_TUAN",
          "sourceType": "MEI_TUAN",
          "mini_program_token": this.token
        };
      const _0x7ef788 = {
        "fn": "startUserTask",
        "method": "post",
        "url": _0x13a813,
        "json": _0x4f6cb2
      };
      if (_0x189552) {
        let {
          headers: _0x2c5ef1
        } = await this.get_mtgsig(_0x13a813, _0x4f6cb2);
        const _0x25070 = {
          "mtgsig": _0x2c5ef1.mtgsig
        };
        _0x7ef788.headers = _0x25070;
      }
      let {
        result: _0x539155
      } = await this.request(_0x7ef788);
      if (_0x539155?.["code"] == 0) {
        let _0x38f378 = JSON.parse(_0x500a5b.ruleConfig);
        if (_0x38f378.staySeconds) {
          let _0x818608 = _0x38f378.staySeconds * 1000;
          this.log("等待" + _0x38f378.staySeconds + "秒后完成任务..");
          await $.wait(_0x818608);
        } else {
          this.log("完成任务[" + _0x143ba4.title + "]成功");
        }
        const _0x4402fd = {
          "need_sign": _0x189552
        };
        await this.updateUserTask(_0x8b746, _0x143ba4, _0x500a5b, _0x539155, _0x4402fd);
      } else {
        let _0x3e3d59 = _0x539155?.["msg"] || _0x539155?.["desc"] || "";
        this.log("完成任务[" + _0x143ba4.title + "]失败: " + _0x3e3d59);
        if (_0x3e3d59?.["includes"]("活动已完成")) {
          const _0x3da7b6 = {
            "need_sign": _0x189552
          };
          await this.updateUserTask(_0x8b746, _0x143ba4, _0x500a5b, {}, _0x3da7b6);
        }
      }
    } catch (_0x48c992) {
      console.log(_0x48c992);
    }
  }
  async ["process_task_prize"](_0x133b8c) {
    let _0x3463b8 = [];
    for (let _0x262e64 of _0x133b8c) {
      if (_0x262e64.number) {
        _0x3463b8.push(_0x262e64.number + "金币");
      } else {
        if (_0x262e64?.["sendMagicCardResult"]?.["cardList"]?.["length"]) {
          for (let _0x8a5bdc of _0x262e64.sendMagicCardResult.cardList) {
            _0x3463b8.push("[" + (_0x5970db[_0x8a5bdc.type] || _0x8a5bdc.type) + "]x" + _0x8a5bdc.amount);
          }
        } else {
          if (_0x262e64?.["sendMagicStoneResult"]?.["stoneList"]?.["length"]) {
            for (let _0x14cb18 of _0x262e64.sendMagicStoneResult.stoneList) {
              _0x3463b8.push("[" + (_0x21a996[_0x14cb18.magicStonePrizeType] || _0x14cb18.magicStonePrizeType) + "]x" + _0x14cb18.amount);
            }
          } else {
            if (_0x262e64?.["sendCouponResultList"]?.["length"]) {
              for (let _0x3db0a0 of _0x262e64.sendCouponResultList) {
                _0x3463b8.push((_0x3db0a0.useCondition || "无门槛") + "减" + _0x3db0a0.couponValue + _0x3db0a0.couponTypeDesc + "券");
              }
            }
          }
        }
      }
    }
    return _0x3463b8;
  }
  async ["updateUserTask"](_0x2762d7, _0x2c64f3, _0x57c7a5, _0x577e7e = {}, _0x1bca9d = {}) {
    try {
      let _0x263a32 = _0x1bca9d?.["need_sign"],
        {
          actionNo = "",
          taskNo = "",
          taskRuleNo = ""
        } = _0x577e7e;
      taskNo = taskNo || _0x2c64f3?.["taskNo"] || "";
      taskRuleNo = taskRuleNo || _0x57c7a5?.["taskRuleNo"] || "";
      let _0x36f3de = "https://cube.meituan.com/topcube/api/toc/task/updateUserTask",
        _0x53262b = {
          "uuid": this.uuid,
          "userId": this.userId,
          "cityId": 30,
          "taskNo": taskNo,
          "actionNo": actionNo,
          "riskForm": await this.encode_riskForm(_0x263a32),
          "taskIdKey": _0x2c64f3.taskIdKey,
          "taskRuleNo": taskRuleNo,
          "taskRuleIdKey": _0x57c7a5.taskRuleIdKey,
          "cubePageId": _0x2762d7.cubePageId,
          "userType": "MEI_TUAN",
          "sourceType": "MEI_TUAN",
          "mini_program_token": this.token
        };
      const _0x26fd82 = {
        "fn": "updateUserTask",
        "method": "post",
        "url": _0x36f3de,
        "json": _0x53262b
      };
      if (_0x263a32) {
        let {
          headers: _0x559173
        } = await this.get_mtgsig(_0x36f3de, _0x53262b);
        const _0x4be3fb = {
          "mtgsig": _0x559173.mtgsig
        };
        _0x26fd82.headers = _0x4be3fb;
      }
      let {
        result: _0x4c2c93
      } = await this.request(_0x26fd82);
      if (_0x4c2c93?.["code"] == 0) {
        if (_0x4c2c93?.["prizeList"]?.["length"]) {
          let _0x5c1d5a = await this.process_task_prize(_0x4c2c93.prizeList);
          this.log("领取任务[" + _0x2c64f3.title + "]奖励获得: " + _0x5c1d5a.join(","));
        } else {
          this.log("更新任务[" + _0x2c64f3.title + "]状态成功");
          const _0x582859 = {
            "need_sign": _0x263a32
          };
          await this.sendTaskPrize(_0x2762d7, _0x2c64f3, _0x57c7a5, _0x577e7e, _0x582859);
        }
      } else {
        let _0x1f2e98 = _0x4c2c93?.["msg"] || _0x4c2c93?.["desc"] || "";
        this.log("更新任务[" + _0x2c64f3.title + "]状态失败: " + _0x1f2e98);
      }
    } catch (_0x3765f5) {
      console.log(_0x3765f5);
    }
  }
  async ["sendTaskPrize"](_0x68f1fe, _0x9a8cb3, _0x4f57f3, _0xd82ebd = {}, _0x498157 = {}) {
    try {
      let _0x154312 = _0x498157?.["need_sign"],
        {
          actionNo = "",
          taskNo = "",
          taskRuleNo = ""
        } = _0xd82ebd;
      taskNo = taskNo || _0x9a8cb3?.["taskNo"] || "";
      taskRuleNo = taskRuleNo || _0x4f57f3?.["taskRuleNo"] || "";
      let _0x35cb58 = "https://cube.meituan.com/topcube/api/toc/task/sendTaskPrize",
        _0x83066e = {
          "uuid": this.uuid,
          "userId": this.userId,
          "cityId": 30,
          "taskNo": taskNo,
          "actionNo": actionNo,
          "riskForm": await this.encode_riskForm(_0x154312),
          "taskIdKey": _0x9a8cb3.taskIdKey,
          "taskRuleNo": taskRuleNo,
          "taskRuleIdKey": _0x4f57f3.taskRuleIdKey,
          "cubePageId": _0x68f1fe.cubePageId,
          "userType": "MEI_TUAN",
          "sourceType": "MEI_TUAN",
          "mini_program_token": this.token
        };
      const _0x175b62 = {
        "fn": "sendTaskPrize",
        "method": "post",
        "url": _0x35cb58,
        "json": _0x83066e
      };
      if (_0x154312) {
        let {
          headers: _0x109cfc
        } = await this.get_mtgsig(_0x35cb58, _0x83066e);
        const _0x283a31 = {
          "mtgsig": _0x109cfc.mtgsig
        };
        _0x175b62.headers = _0x283a31;
      }
      let {
        result: _0x23cf0a
      } = await this.request(_0x175b62);
      if (_0x23cf0a?.["code"] == 0) {
        if (_0x23cf0a?.["prizeList"]?.["length"]) {
          let _0x1e6b81 = await this.process_task_prize(_0x23cf0a.prizeList);
          this.log("领取任务[" + _0x9a8cb3.title + "]奖励获得: " + _0x1e6b81.join(","));
        } else {
          this.log("没有领取到任务[" + _0x9a8cb3.title + "]奖励");
        }
      } else {
        let _0x2dfccd = _0x23cf0a?.["msg"] || _0x23cf0a?.["desc"] || "";
        this.log("领取任务[" + _0x9a8cb3.title + "]奖励失败: " + _0x2dfccd);
      }
    } catch (_0x112e0b) {
      console.log(_0x112e0b);
    }
  }
  async ["goldHomePage"](_0xf7cf67, _0x257d9f = {}) {
    try {
      let _0x48c350 = "https://cube.meituan.com/topcube/api/toc/gold/homePage";
      const _0x320fda = {
        "activitySecretKey": _0xf7cf67,
        "sourceType": "MEI_TUAN",
        "userId": this.userId,
        "mini_program_token": this.token,
        "uuid": this.uuid
      };
      const _0x19d044 = {
        "fn": "goldHomePage",
        "method": "post",
        "url": _0x48c350,
        "json": _0x320fda
      };
      let {
        result: _0xec2152
      } = await this.request(_0x19d044);
      if (_0xec2152?.["code"] == 0) {
        for (let _0x49f700 of _0xec2152?.["data"]?.["redPackets"]?.["filter"](_0x39c649 => _0x39c649.status == "LOCK_UNRECEIVED")) {
          await this.receiveRedPacket(_0xf7cf67, _0x49f700);
        }
      } else {
        let _0x3a1750 = _0xec2152?.["msg"] || _0xec2152?.["desc"] || "";
        this.log("查询开红包次数失败: " + _0x3a1750);
      }
    } catch (_0x35ab1b) {
      console.log(_0x35ab1b);
    }
  }
  async ["receiveRedPacket"](_0x42464c, _0x540414, _0x4885a0 = {}) {
    try {
      let _0x3c5268 = "https://cube.meituan.com/topcube/api/toc/gold/receiveRedPacket",
        _0x14c172 = {
          "activitySecretKey": _0x42464c,
          "id": _0x540414.id,
          "sourceType": "MEI_TUAN",
          "userId": this.userId,
          "mini_program_token": this.token,
          "uuid": this.uuid,
          "riskForm": await this.encode_riskForm()
        },
        {
          headers: _0x4b4603
        } = await this.get_mtgsig(_0x3c5268, _0x14c172);
      const _0x25d2b2 = {
        "mtgsig": _0x4b4603.mtgsig
      };
      const _0x587da3 = {
        "fn": "receiveRedPacket",
        "method": "post",
        "url": _0x3c5268,
        "json": _0x14c172,
        "headers": _0x25d2b2
      };
      let {
        result: _0x3c6649
      } = await this.request(_0x587da3);
      if (_0x3c6649?.["code"] == 0) {
        this.log("开红包获得" + _0x540414.amount + "金币");
      } else {
        let _0xd699c0 = _0x3c6649?.["msg"] || _0x3c6649?.["desc"] || "";
        this.log("开红包[" + _0x540414.id + "]失败: " + _0xd699c0);
      }
    } catch (_0x39d22f) {
      console.log(_0x39d22f);
    }
  }
  async ["earnDailyLogin"](_0x31cbe1 = {}) {
    try {
      let _0x65d3a2 = _0x31cbe1.gameType || 10402;
      const _0xcc42a0 = {
        "cityId": "30"
      };
      let _0x23824c = {
          "fn": "earnDailyLogin",
          "method": "get",
          "url": "https://game.meituan.com/earn-daily/login/loginMgc",
          "searchParams": {
            "gameType": _0x65d3a2,
            "mtToken": this.token,
            "mtUserId": this.userId,
            "mtDeviceId": this.uuid,
            "nonceStr": $.randomString(16),
            "externalStr": JSON.stringify(_0xcc42a0)
          }
        },
        {
          result: _0x1155c3
        } = await this.request(_0x23824c),
        _0x249170 = $.get(_0x1155c3, "code", -1);
      if (_0x249170 == 0) {
        this.acToken = _0x1155c3?.["response"]?.["accessToken"];
      } else {
        let _0x1f844c = _0x1155c3?.["msg"] || _0x1155c3?.["desc"] || "";
        this.log("登录游戏[" + _0x65d3a2 + "]失败[" + _0x249170 + "]: " + _0x1f844c);
      }
    } catch (_0x50bc1e) {
      console.log(_0x50bc1e);
    }
  }
  async ["earnDailyPost"](_0x39afc1 = {}) {
    let _0x1dd0bc = {};
    try {
      let _0x2a7a99 = _0x39afc1.protocolId,
        _0x1bfea0 = _0x39afc1.data || {},
        _0x2ebe42 = {
          "fn": "earnDailyPost",
          "method": "post",
          "url": "https://game.meituan.com/earn-daily/msg/post",
          "json": {
            "acToken": this.acToken,
            "riskParams": await this.get_app_riskForm(),
            "protocolId": _0x2a7a99,
            "data": _0x1bfea0
          },
          "headers": {
            "Origin": "https://awp.meituan.com",
            "Referer": "https://awp.meituan.com/"
          }
        };
      await $.wait_gap_interval(this.t_earnDaily, _0x486934);
      _0x1dd0bc = await this.request(_0x2ebe42);
      this.t_earnDaily = Date.now();
    } catch (_0x5993aa) {
      console.log(_0x5993aa);
    } finally {
      return _0x1dd0bc;
    }
  }
  async ["earnDaily_task_list"](_0x4c1858 = {}) {
    try {
      const _0x3fa335 = {
        "acToken": this.acToken
      };
      const _0x2e174e = {
        "protocolId": 1001,
        "data": _0x3fa335
      };
      {
        let {
            result: _0x29404c
          } = await this.earnDailyPost(_0x2e174e),
          _0x516916 = $.get(_0x29404c, "code", -1);
        if (_0x516916 == 200) {
          for (let _0x423ba4 of _0x29404c?.["data"]?.["signInPopModel"]?.["rewardModelList"] || []) {
            _0x423ba4.current && _0x423ba4.state == 1 && (await this.earnDaily_sign());
          }
          for (let _0x2695a8 of _0x29404c?.["data"]?.["taskInfoList"] || []) {
            switch (_0x2695a8.id) {
              case 780:
              case 15099:
              case 15278:
                break;
              default:
                _0x2695a8.dailyRewardTimes < _0x2695a8.dailyFinishTimes && (await this.earnDaily_get_reward(_0x2695a8));
                for (let _0x114efa = _0x2695a8.dailyFinishTimes; _0x114efa < _0x2695a8.mgcTaskBaseInfo.curPeriodMaxFinishTimes; _0x114efa++) {
                  await this.earnDaily_do_task(_0x2695a8);
                }
                break;
            }
          }
        } else {
          let _0x13e1cd = _0x29404c?.["msg"] || _0x29404c?.["desc"] || "";
          this.log("查询任务失败[" + _0x516916 + "]: " + _0x13e1cd);
        }
      }
      {
        let {
            result: _0x22e9bb
          } = await this.earnDailyPost(_0x2e174e),
          _0x4228a8 = $.get(_0x22e9bb, "code", -1);
        if (_0x4228a8 == 200) {
          let _0x4cc980 = _0x22e9bb?.["data"]?.["playerBaseModel"]?.["redPacketInfo"]?.["leftRedPacketAmount"] || 0;
          this.log("可以开" + _0x4cc980 + "次红包");
          while (_0x4cc980-- > 0) {
            await this.earnDaily_redbag();
          }
        } else {
          let _0x216bb6 = _0x22e9bb?.["msg"] || _0x22e9bb?.["desc"] || "";
          this.log("查询红包次数失败[" + _0x4228a8 + "]: " + _0x216bb6);
        }
      }
      {
        let {
            result: _0x21dfc7
          } = await this.earnDailyPost(_0x2e174e),
          _0xf74ab8 = $.get(_0x21dfc7, "code", -1);
        if (_0xf74ab8 == 200) {
          this.cash = _0x21dfc7?.["data"]?.["playerBaseModel"]?.["activityCycleInfo"]?.["cashToken"] || 0;
          this.coin = _0x21dfc7?.["data"]?.["playerBaseModel"]?.["activityCycleInfo"]?.["coinToken"] || 0;
          this.coin > 0 && (await this.earnDaily_coinInfo());
          const _0xd1f2a6 = {
            "notify": true
          };
          this.log("每日赚钱余额: " + (this.cash / 100).toFixed(2) + "元, " + this.coin + "金币", _0xd1f2a6);
        } else {
          let _0x15e522 = _0x21dfc7?.["msg"] || _0x21dfc7?.["desc"] || "";
          this.log("查询每日赚钱余额失败[" + _0xf74ab8 + "]: " + _0x15e522);
        }
      }
      await this.earnDaily_get_withdraw_list();
    } catch (_0xa0c6e3) {
      console.log(_0xa0c6e3);
    }
  }
  async ["earnDaily_coinInfo"](_0x43d504 = {}) {
    try {
      const _0x2a4b19 = {
        "protocolId": 1015
      };
      let {
          result: _0x2c6062
        } = await this.earnDailyPost(_0x2a4b19),
        _0x3755dd = $.get(_0x2c6062, "code", -1);
      if (_0x3755dd == 200) {
        let _0x2a191d = _0x2c6062?.["data"]?.["exchangeInfoList"]?.["filter"](_0x185606 => _0x185606.name == "翻红包现金");
        if (!_0x2a191d.length) {
          return;
        }
        let _0x3c4426 = _0x2a191d[0];
        this.coin >= _0x3c4426.price && (await this.earnDaily_coinExchange(_0x3c4426));
      } else {
        let _0x29eca4 = _0x2c6062?.["msg"] || _0x2c6062?.["desc"] || "";
        this.log("查询金币兑换失败[" + _0x3755dd + "]: " + _0x29eca4);
      }
    } catch (_0x2e637a) {
      console.log(_0x2e637a);
    }
  }
  async ["earnDaily_coinExchange"](_0x400c08, _0x4004e2 = {}) {
    try {
      const _0x28a1ff = {
        "skuId": _0x400c08.skuId
      };
      const _0x11a642 = {
        "protocolId": 1016,
        "data": _0x28a1ff
      };
      let {
          result: _0x4b18c7
        } = await this.earnDailyPost(_0x11a642),
        _0x15bdd4 = $.get(_0x4b18c7, "code", -1);
      if (_0x15bdd4 == 200) {
        this.cash = _0x4b18c7?.["data"]?.["activityCycleInfo"]?.["cashToken"] || 0;
        this.coin = _0x4b18c7?.["data"]?.["activityCycleInfo"]?.["coinToken"] || 0;
        this.log("使用" + _0x400c08.price + "金币兑换余额成功: 剩余" + this.coin + "金币");
        let _0x22d941 = _0x4b18c7?.["data"]?.["exchangeInfoList"]?.["filter"](_0x26f421 => _0x26f421.name == "翻红包现金");
        if (!_0x22d941.length) {
          return;
        }
        let _0x197c55 = _0x22d941[0];
        this.coin >= _0x197c55.price && (await this.earnDaily_coinExchange(_0x197c55));
      } else {
        let _0x5e2517 = _0x4b18c7?.["msg"] || _0x4b18c7?.["desc"] || "";
        this.log("使用" + _0x400c08.price + "金币兑换余额失败[" + _0x15bdd4 + "]: " + _0x5e2517);
      }
    } catch (_0x4503c1) {
      console.log(_0x4503c1);
    }
  }
  async ["earnDaily_sign"](_0x3492c1 = {}) {
    try {
      const _0x51c358 = {
        "protocolId": 1007
      };
      let {
          result: _0x19cad0
        } = await this.earnDailyPost(_0x51c358),
        _0x315fa3 = $.get(_0x19cad0, "code", -1);
      if (_0x315fa3 == 200) {
        this.log("签到成功: " + (_0x19cad0?.["data"]?.["remitNotificationModelList"]?.["map"](_0x2f0b50 => _0x2f0b50.content)?.["join"](",") || ""));
      } else {
        let _0x22cd74 = _0x19cad0?.["msg"] || _0x19cad0?.["desc"] || "";
        this.log("签到失败[" + _0x315fa3 + "]: " + _0x22cd74);
      }
    } catch (_0x4cab81) {
      console.log(_0x4cab81);
    }
  }
  async ["earnDaily_do_task"](_0x36fd84, _0x5adea6 = {}) {
    try {
      const _0x3f481c = {
        "taskId": _0x36fd84.id
      };
      const _0x3c4b35 = {
        "protocolId": 1004,
        "data": _0x3f481c
      };
      let {
          result: _0xe9107c
        } = await this.earnDailyPost(_0x3c4b35),
        _0x517bc7 = $.get(_0xe9107c, "code", -1);
      if (_0x517bc7 == 200) {
        this.log("完成任务[" + (_0x36fd84?.["mgcTaskBaseInfo"]?.["viewTitle"] || _0x36fd84?.["id"]) + "]成功");
        await this.earnDaily_get_reward(_0x36fd84);
      } else {
        let _0x836a4d = _0xe9107c?.["msg"] || _0xe9107c?.["desc"] || "";
        this.log("完成任务[" + (_0x36fd84?.["mgcTaskBaseInfo"]?.["viewTitle"] || _0x36fd84?.["id"]) + "]失败[" + _0x517bc7 + "]: " + _0x836a4d);
      }
    } catch (_0x318b8f) {
      console.log(_0x318b8f);
    }
  }
  async ["earnDaily_get_reward"](_0xdf0855, _0x599d22 = {}) {
    try {
      const _0x555f4e = {
        "taskId": _0xdf0855.id
      };
      const _0x2015fb = {
        "protocolId": 1005,
        "data": _0x555f4e
      };
      let {
          result: _0x449e45
        } = await this.earnDailyPost(_0x2015fb),
        _0x482302 = $.get(_0x449e45, "code", -1);
      if (_0x482302 == 200) {
        this.log("领取任务[" + _0xdf0855.mgcTaskBaseInfo.viewTitle + "]奖励成功");
      } else {
        let _0xdcece2 = _0x449e45?.["msg"] || _0x449e45?.["desc"] || "";
        this.log("领取任务[" + _0xdf0855.mgcTaskBaseInfo.viewTitle + "]奖励失败[" + _0x482302 + "]: " + _0xdcece2);
      }
    } catch (_0x568a8c) {
      console.log(_0x568a8c);
    }
  }
  async ["earnDaily_redbag"](_0x4f9b34 = {}) {
    try {
      const _0x483bc2 = {
        "protocolId": 1008
      };
      let {
          result: _0x40587e
        } = await this.earnDailyPost(_0x483bc2),
        _0x45c231 = $.get(_0x40587e, "code", -1);
      if (_0x45c231 == 200) {
        let _0x1f6077 = _0x40587e?.["data"]?.["rewardModelList"]?.["filter"](_0x2dc9b3 => _0x2dc9b3.rewarded) || [];
        if (_0x1f6077.length) {
          let _0x1b310b = _0x1f6077[0];
          if (_0x1b310b.resourceType == 1) {
            this.log("开红包获得: " + (_0x1b310b.amount / 100).toFixed(2) + "元");
          } else {
            _0x1b310b.resourceType == 2 ? this.log("开红包获得: " + _0x1b310b.amount + "金币") : this.log("开红包获得: " + JSON.stringify(_0x1b310b));
          }
        }
      } else {
        let _0x2ebeb6 = _0x40587e?.["msg"] || _0x40587e?.["desc"] || "";
        this.log("开红包失败[" + _0x45c231 + "]: " + _0x2ebeb6);
      }
    } catch (_0x5baedc) {
      console.log(_0x5baedc);
    }
  }
  async ["earnDaily_draw"](_0x53d629 = {}) {
    try {
      const _0x857b6c = {
        "protocolId": 1010
      };
      let {
          result: _0x560fa1
        } = await this.earnDailyPost(_0x857b6c),
        _0x5ba44f = $.get(_0x560fa1, "code", -1);
      if (_0x5ba44f == 200) {
        let _0xfc9508 = _0x560fa1?.["data"]?.["currentReward"];
        if (_0xfc9508?.["rewardedCouponModel"]) {
          this.log("转盘抽奖: " + _0xfc9508.rewardedCouponModel?.["useRule"] + _0xfc9508.rewardedCouponModel?.["name"]);
          return;
        }
        switch (_0xfc9508?.["resourceType"]) {
          case 1:
            let _0x3422b0 = ((_0xfc9508?.["amount"] || 0) / 100).toFixed(2);
            this.log("转盘抽奖: " + _0x3422b0 + "元余额");
            break;
          case 2:
            this.log("转盘抽奖: " + _0xfc9508?.["amount"] + "金币");
            break;
          case 3:
            this.log("转盘抽奖: 随机提现机会");
            break;
          default:
            this.log("转盘抽奖: " + JSON.stringify(_0x560fa1));
            break;
        }
      } else {
        let _0x4a07e7 = _0x560fa1?.["msg"] || _0x560fa1?.["desc"] || "";
        this.log("转盘抽奖失败[" + _0x5ba44f + "]: " + _0x4a07e7);
      }
    } catch (_0x5b6c59) {
      console.log(_0x5b6c59);
    }
  }
  async ["earnDaily_get_withdraw_list"](_0x3f41ab = {}) {
    try {
      const _0x5df8b6 = {
        "protocolId": 1012
      };
      let {
          result: _0x1d9ae8
        } = await this.earnDailyPost(_0x5df8b6),
        _0x1127db = $.get(_0x1d9ae8, "code", -1);
      if (_0x1127db == 200) {
        let _0x2a202a = _0x1d9ae8?.["data"]?.["activityCycleInfo"]?.["cashToken"] || 0,
          _0x2f10fa = (_0x2a202a / 100).toFixed(2);
        this.log("红包余额: " + _0x2f10fa + "元");
        let _0x279df0 = (_0x1d9ae8?.["data"]?.["cashList"] || []).sort(function (_0x2b87d7, _0x543a98) {
          return _0x543a98.amount - _0x2b87d7.amount;
        });
        if (MT_AutoWithdraw == "false" || !MT_AutoWithdraw) {
          _0x279df0 = _0x279df0.filter(_0x5c6836 => _0x5c6836.amount == 5000);
        }
        for (let _0x4a9222 of _0x279df0) {
          if (_0x4a9222.amount > _0x2a202a) {
            continue;
          }
          if (await this.earnDaily_withdraw(_0x4a9222)) {
            break;
          }
        }
      } else {
        let _0x23b64b = _0x1d9ae8?.["msg"] || _0x1d9ae8?.["desc"] || "";
        this.log("查询提现列表失败[" + _0x1127db + "]: " + _0x23b64b);
      }
    } catch (_0x5b6a9e) {
      console.log(_0x5b6a9e);
    }
  }
  async ["earnDaily_withdraw"](_0x53b1c1, _0xb14cb7 = {}) {
    let _0x3a3861 = false;
    try {
      let _0x5a46ff = (_0x53b1c1.amount / 100).toFixed(2);
      const _0x1987ac = {
        "id": _0x53b1c1.id,
        "amount": _0x53b1c1.amount
      };
      const _0x79063c = {
        "protocolId": 1013,
        "data": _0x1987ac
      };
      let {
          result: _0x39b925
        } = await this.earnDailyPost(_0x79063c),
        _0x22a5d4 = $.get(_0x39b925, "code", -1);
      if (_0x22a5d4 == 200) {
        _0x3a3861 = true;
        const _0x325dae = {
          "notify": true
        };
        this.log("提现[" + _0x5a46ff + "元]到钱包成功", _0x325dae);
      } else {
        let _0x5904dd = _0x39b925?.["msg"] || _0x39b925?.["desc"] || "";
        _0x22a5d4 == 1017 ? (_0x3a3861 = true, this.log("提现[" + _0x5a46ff + "元]失败[" + _0x22a5d4 + "]: 可能今天已提现过")) : this.log("提现[" + _0x5a46ff + "元]失败[" + _0x22a5d4 + "]: " + _0x5904dd);
      }
    } catch (_0x1da8a3) {
      console.log(_0x1da8a3);
    } finally {
      return _0x3a3861;
    }
  }
  async ["c_task"](_0x2367ad, _0x3a1a35 = {}) {
    try {
      let _0x5cc81c = Math.random() * 100 + 2400 | 0;
      const _0x5a32e8 = {
        "Referer": "https://click.meituan.com/t?t=1&c=2&p=" + _0x2367ad
      };
      let _0x236b96 = {
        "fn": "get_task",
        "method": "post",
        "url": "https://click.meituan.com/cps/clickReferralLink",
        "headers": _0x5a32e8,
        "json": {
          "p": _0x2367ad,
          "t": "1",
          "c": "2",
          "sessionId": "187a" + $.randomPattern("xxxxxxx-xxx-xxx-xxx"),
          "referrer": "",
          "fingerprintFromH5": "eJxVV" + $.randomString(_0x5cc81c, _0x2aa4a6)
        }
      };
      await this.request(_0x236b96);
    } catch (_0x11ede5) {
      console.log(_0x11ede5);
    }
  }
  async ["walletMainpage"](_0x4e4e21 = {}) {
    try {
      const _0x4056fb = {
        "fn": "walletMainpage",
        "method": "post",
        "url": "https://npay.meituan.com/conch/walletV5/mainpage",
        "form": {}
      };
      _0x4056fb.form.token = this.token;
      _0x4056fb.form.nb_app = "group";
      _0x4056fb.form.nb_appversion = "12.9.203";
      _0x4056fb.form.nb_channel = "common";
      _0x4056fb.form.nb_ci = "30";
      _0x4056fb.form.nb_location = "0_0";
      _0x4056fb.form.nb_osversion = "16.1.2";
      _0x4056fb.form.nb_platform = "iOS";
      _0x4056fb.form.utmSource = "AppStore";
      _0x4056fb.form.from = "mine_qianbaorukou_qianbao";
      _0x4056fb.form.popWindowOldChain = "false";
      let {
          result: _0x1979e9
        } = await this.request(_0x4056fb),
        _0x402803 = $.get(_0x1979e9, "status", -1);
      if (_0x402803 == "success") {
        let _0x4f3fab = [];
        for (let _0x52f523 of _0x1979e9?.["data"]?.["AssetArea"]?.["otherAssetAreaDTOList"] || []) {
          switch (_0x52f523.title) {
            case "余额":
              _0x4f3fab.push("钱包余额: " + (_0x52f523?.["subTitle"] || 0) + "元");
              break;
            case "立减金":
              _0x4f3fab.push("立减金: " + (_0x52f523?.["subTitle"] || 0) + "元");
              break;
          }
        }
        if (_0x4f3fab.length) {
          const _0x507adf = {
            "notify": true
          };
          this.log(_0x4f3fab.join(", "), _0x507adf);
        }
      } else {
        let _0x48709c = _0x1979e9?.["error"]?.["message"] || "";
        this.log("查询钱包失败[" + _0x402803 + "]: " + _0x48709c);
      }
    } catch (_0x135e13) {
      console.log(_0x135e13);
    }
  }
  async ["refTask"]() {
    if (!_0x45daeb?.["length"]) {
      return;
    }
    let _0x18e421 = _0x45daeb.sort(function () {
        return Math.random() - 0.5;
      }),
      _0x1484af = _0x18e421.length,
      _0x26ce9e = Math.min(3, _0x1484af);
    _0x18e421 = _0x18e421.slice(0, _0x26ce9e);
    for (let _0x5f2f4b of _0x18e421) {
      await this.c_task(_0x5f2f4b);
    }
  }
  async ["batchfetchcomponentcouponV2"](_0x5c468a) {
    try {
      let {
        refIds: _0x1b4c72,
        instanceId: _0x3b723e,
        gdPageId: _0x95cc02,
        pageId: _0x5ef37e
      } = _0x5c468a;
      const _0x214501 = {
        "cType": "wm_wxapp",
        "fpPlatform": 13,
        "wxOpenId": "",
        "appVersion": "12.9.206",
        "mtFingerprint": this.fp
      };
      let _0x4346c8 = {
          "couponReferIds": _0x1b4c72.join(","),
          "geoType": 2,
          "actualLng": _0x64fc4,
          "actualLat": _0x28fa6d,
          "isInDpEnv": 0,
          "gdPageId": _0x95cc02,
          "pageId": _0x5ef37e,
          "version": 1,
          "instanceId": _0x3b723e,
          "componentId": _0x3b723e,
          "utmSource": "",
          "utmCampaign": "",
          "needFetchedByUUID": 1
        },
        _0x4d7569 = new URL("https://promotion.waimai.meituan.com/lottery/couponcomponent/batchfetchcomponentcoupon/v2");
      for (let _0x1d10cb in _0x4346c8) {
        _0x4d7569.searchParams.append(_0x1d10cb, _0x4346c8[_0x1d10cb]);
      }
      let {
        headers: _0x33b8a1
      } = await this.get_mtgsig(_0x4d7569.toString(), _0x214501);
      const _0x2f4455 = {
        "mtgsig": _0x33b8a1.mtgsig
      };
      const _0x22758d = {
        "fn": "batchfetchcomponentcouponV2",
        "method": "post",
        "url": _0x4d7569,
        "json": _0x214501,
        "headers": _0x2f4455
      };
      let {
        result: _0x59414e
      } = await this.request(_0x22758d);
      if (_0x59414e?.["code"] == 0) {
        let _0x51fe88 = _0x59414e?.["data"]?.["filter"](_0x1740cf => _0x1740cf.code == 0)?.["map"](_0x585d4c => "[" + _0x585d4c.data.couponName + "]" + (_0x585d4c.data.priceLimit || "无门槛") + "减" + _0x585d4c.data.couponValue);
        if (_0x51fe88.length) {
          this.notify_coupon(_0x51fe88);
        }
      } else {
        let _0x20be5a = _0x59414e?.["msg"] || _0x59414e?.["desc"] || "";
        this.log("集合领券失败: " + _0x20be5a);
      }
    } catch (_0x56c079) {
      console.log(_0x56c079);
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
    for (let _0x5c99ae of gundomConfV4) {
      await this.gundamGrabV4(_0x5c99ae);
    }
    for (let _0x2432b0 of _0x595085) {
      await this.batchfetchcomponentcouponV2(_0x2432b0);
    }
    for (let _0x52b3e6 of _0x571dcc) {
      await this.signupRecord(_0x52b3e6);
      await this.ttsqEntry(_0x52b3e6);
    }
  }
  async ["wxSqsqTask"]() {
    $.log("---------------- WX-社群神券 ----------------");
    for (let _0x168eb7 of _0x2b7b9e) {
      await this.turntableDraw(_0x168eb7);
    }
  }
  async ["wxSqSignTask"]() {
    $.log("---------------- WX-社群签到 ----------------");
    for (let _0x43d28e of _0x5bf518) {
      await this.clockInStatus(_0x43d28e);
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
    for (let _0x8fa7f1 of _0x54d1ac) {
      $.log("============== " + _0x8fa7f1.name + " ==============");
      if (_0x8fa7f1.taskIdKeys.length > _0x53cb09) {
        const _0x4331d2 = {
          "cubePageId": _0x8fa7f1.cubePageId,
          "taskIdKeys": []
        };
        for (let _0x144145 of _0x8fa7f1.taskIdKeys) {
          _0x4331d2.taskIdKeys.push(_0x144145);
          _0x4331d2.taskIdKeys.length >= _0x53cb09 && (await this.getUserTasks(_0x4331d2), _0x4331d2.taskIdKeys = []);
        }
        if (_0x4331d2.taskIdKeys.length > 0) {
          await this.getUserTasks(_0x4331d2);
        }
      } else {
        await this.getUserTasks(_0x8fa7f1);
      }
    }
    await this.goldHomePage("9587270bb85c");
  }
  async ["notifyTask"]() {
    $.log("---------------- 汇总推送 ----------------");
    await this.walletMainpage();
  }
  async ["userTask"]() {
    const _0x23818f = {
      "notify": true
    };
    $.log("\n---------------- 账号[" + this.index + "] ----------------", _0x23818f);
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
  if (!(await _0x189357())) {
    return;
  }
  await _0x34194a();
  $.read_env(UserClass, ckNames, envSplitor);
  $.log("\n-------------------------------------");
  MT_AutoWithdraw == "false" || !MT_AutoWithdraw ? $.log("APP每日赚钱设置为: 不随机提现") : $.log("APP每日赚钱设置为: 每日随机提现");
  $.log("-------------------------------------");
  for (let _0x5c00e0 of $.userList) {
    await _0x5c00e0.userTask();
  }
})().catch(_0x372529 => $.log(_0x372529)).finally(() => $.exitNow());
async function _0x189357() {
  let _0x544182 = false;
  try {
    const _0x4070e0 = {
      "fn": "auth",
      "method": "get",
      "url": _0x513190
    };
    let {
      statusCode: _0x1ec46a,
      result: _0x5979e9
    } = await _0x1a5917.request(_0x4070e0);
    if (_0x1ec46a != 200) {
      return Promise.resolve();
    }
    if (_0x5979e9?.["code"] == 0) {
      _0x5979e9 = JSON.parse(_0x5979e9.data.file.data);
      /*if (_0x5979e9?.["commonNotify"] && _0x5979e9.commonNotify.length > 0) {
        const _0x5eefa2 = {
          "notify": true
        };
        $.log(_0x5979e9.commonNotify.join("\n") + "\n", _0x5eefa2);
      }
      _0x5979e9?.["commonMsg"] && _0x5979e9.commonMsg.length > 0 && $.log(_0x5979e9.commonMsg.join("\n") + "\n");
      */
      if (_0x5979e9[_0x3d6478]) {
        let _0x9f8332 = _0x5979e9[_0x3d6478];
        _0x9f8332.status == 0 ? _0xdc3dbc >= _0x9f8332.version ? (_0x544182 = true, /*$.log(_0x9f8332.msg[_0x9f8332.status]), */$.log(_0x9f8332.updateMsg), $.log("现在运行的脚本版本是：" + _0xdc3dbc + "，最新脚本版本：" + _0x9f8332.latestVersion)) : $.log(_0x9f8332.versionMsg) : $.log(_0x9f8332.msg[_0x9f8332.status]);
      } else {
        $.log(_0x5979e9.errorMsg);
      }
    }
  } catch (_0x4178b9) {
    $.log(_0x4178b9);
  } finally {
    return _0x544182;
  }
}
async function _0x34194a() {
  let _0x5a65b6 = false;
  try {
    const _0x54a19b = {
      "fn": "auth",
      "method": "get",
      "url": _0x17053c
    };
    let {
      statusCode: _0xb3eeca,
      result: _0x59481f
    } = await _0x1a5917.request(_0x54a19b);
    if (_0xb3eeca != 200) {
      return Promise.resolve();
    }
    if (_0x59481f?.["code"] == 0) {
      _0x59481f = JSON.parse(_0x59481f.data.file.data);
      //inviteCode = _0x59481f?.["inviteCode"] || inviteCode;
      for (let _0x4f14eb of _0x59481f?.["mrzqTaskId_all"] || []) {
        !_0x41fdb5.includes(_0x4f14eb) && _0x41fdb5.push(_0x4f14eb);
      }
      for (let _0x29c609 of _0x59481f?.["commonTaskConf"] || []) {
        _0x54d1ac.filter(_0x1dd96b => _0x1dd96b.name == _0x29c609.name)?.["length"] == 0 && _0x54d1ac.push(_0x29c609);
      }
      if (_0x59481f?.["gundomConfV4"]?.["length"]) {
        gundomConfV4 = _0x59481f.gundomConfV4;
      }
      let add={"gundamId":20625,"instanceId":"16807827427780.5322617288978357","needTj":true,"couponConfigIdOrderCommaString":"7097426641545,7117066535561,7115417977481,7096869323401,7088212804233,7116455346825,7152499753609,7152679518857,7150719664777,7116965347977,6561273283209,6560732021385,4679618396809,4674534769289,4674535031433,4679536411273,4672551977609,2189245219456,3375301526153,3375301722761,3371138220681,3371014881929,3372360729225,620969479,5346931376777,2237835510400,2235023557248,4066658157193,3924566606473,3927917527689,4449821000329,6382949171849,511616988,626467836,621999795,626418652,624362708,1708877283968,1723741504128,5360270377609,5361278190217,5361210294921,5358330643081,511177309,511566737,4575685378697,4401006183049,3242152428169,3801984336521,622936736,603844019,345822793,516213972,3458690974345,622197908,622936732,622740453,622936733,3755289674377,613887410,617540192,588083964,572445327,621999591","couponAllConfigIdOrderString":"7097426641545,7117066535561,7115417977481,7096869323401,7088212804233,7116455346825,7152499753609,7152679518857,7150719664777,7116965347977,6561273283209,6560732021385,4679618396809,4674534769289,4674535031433,4679536411273,4672551977609,2189245219456,3375301526153,3375301722761,3371138220681,3371014881929,3372360729225,620969479,5346931376777,2237835510400,2235023557248,4066658157193,3924566606473,3927917527689,4449821000329,6382949171849,511616988,626467836,621999795,626418652,624362708,1708877283968,1723741504128,5360270377609,5361278190217,5361210294921,5358330643081,511177309,511566737,4575685378697,4401006183049,3242152428169,3801984336521,622936736,603844019,345822793,516213972,3458690974345,622197908,622936732,622740453,622936733,3755289674377,613887410,617540192,588083964,572445327,621999591","rubikCouponKey":"PrizePool-200043026","platform":3,"app":-1,"h5Fingerprint":"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"}
      gundomConfV4.unshift(add);
      //美团外卖品质好店 外卖也要吃好的！点击领券下单！http://dpurl.cn/L4H14u9z
      if (_0x59481f?.["batchConf"]?.["length"]) {
        _0x595085 = _0x59481f.batchConf;
      }
      if (_0x59481f?.["pid_list"]?.["length"]) {
        _0x45daeb = _0x59481f.pid_list;
      }
      for (let _0x79615f of _0x59481f?.["sqsqIdList"] || []) {
        !_0x2b7b9e.includes(_0x79615f) && _0x2b7b9e.push(_0x79615f);
      }
      for (let _0x3633bb of _0x59481f?.["sqSignIdList"] || []) {
        !_0x5bf518.includes(_0x3633bb) && _0x5bf518.push(_0x3633bb);
      }
      for (let _0x5a5b65 of _0x59481f?.["ttsqSignIdList"] || []) {
        !_0x571dcc.includes(_0x5a5b65) && _0x571dcc.push(_0x5a5b65);
      }
    }
  } catch (_0x2d786f) {
    $.log(_0x2d786f);
  } finally {
    return _0x5a65b6;
  }
}