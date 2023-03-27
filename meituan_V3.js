/*
美团 v3.01

新版美团仅支持青龙等nodejs环境, 不支持圈X
自动领券和完成一些活动任务
已删除大部分失效和不能提现的活动,新增了一些领券

自行捉包把meituan.com里面的token(一般在请求头里)填到变量 meituanCookie 中, 多账号换行或&或@隔开
export meituanCookie="AgGZIgsYHyxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
定时建议至少7点11点17点各跑一次拿三餐奖励, 多跑几次也没事

cron: 31 2,7,11,17,21 * * *

*/
const Env = require('./basic/Env.js');
const {TYQLDG_API,base64_encode}=require('./basic/tyqldg');
const $ = new Env("美团"),
  got = require('got'),
  envPrefix = "MT_",
  envSplitor = ["\n", "&", "@"],//支持多种分割，但要保证变量里不存在这个字符
  ckNames = [envPrefix + "CK"],//可以支持多变量
  env_name=envPrefix + "CK",
  DEFAULT_TIMEOUT = 8000,
  MAX_THREAD = parseInt(process.env[envPrefix+'Thread']) || 50; //默认最大并发数
  DEFAULT_RETRY = 3;
let HPA = null;
const MT_Proxy = process.env[envPrefix + "Proxy"] || process.env.LEAF_DEBUG_PROXY || "";
let eid=0;

$.get=function(result, name, value = "") {
  let value1 = value;
  result?.["hasOwnProperty"](name) && (value1 = result[name]);
  return value1;
}

const _0x3e0dfd = 3.01,
  _0x52c339 = "meituan",
  _0x298947 = "https://leafxcy.coding.net/api/user/leafxcy/project/validcode/shared-depot/validCode/git/blob/master/code.json",
  _0x5c9df6 = "https://leafxcy.coding.net/api/user/leafxcy/project/validcode/shared-depot/validCode/git/blob/master/" + _0x52c339 + ".json",
  _0x3e9d3a = "Mozilla/5.0 (iPhone; CPU iPhone OS 16_1_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.33(0x18002129) NetType/WIFI Language/zh_CN",
  _0x2e5517 = "wxde8ac0a21135c07d",
  _0x26aec5 = "1399386702",
  _0x104579 = "2.30.3",
  _0x4d7d32 = "iphone",
  _0x4a5d2e = "AwQAAABJAgAAAAEAAAAyAAAAPLgC95WH3MyqngAoyM/hf1hEoKrGdo0pJ5DI44e1wGF9AT3PH7Wes03actC2n/GVnwfURonD78PewMUppAAAADgCEZv2akitiLnGkQIH6r67N1V9EUFpKyBOQRSRKpv9Awnm6LwnygipNjcIwXXJZEv5ddnUSW8vZQ==",
  _0x5d980e = "0123456789",
  _0x30200b = "qwertyuiopasdfghjklzxcvbnm",
  _0x9a194 = _0x5d980e + _0x30200b + _0x30200b.toUpperCase();
let _0x19ee04 = "114.07" + $.randomString(12, _0x5d980e),
  _0x3991a8 = "22.52" + $.randomString(13, _0x5d980e),
  _0x178c4e = "NnOIp-QOs8SiYF1dcSlL5r8phPrCf6qkH7evMyjIoup2NXxNCLYcBbd3bqpv2X2IwEEJb5qoWglfkm_BFMSF_P37OScxhIfzAWgvmEjhdwJlyDXeFPZ0XwraweVp2EDxHrRbGOZeH8QVXwCoLxaUGBeOtuA0cEaD1RsGuHC_D2E",
  _0x116ef9 = [];
const _0x333897 = 600,
  _0x4d20ef = 10,
  _0x23dca1 = ["1005", "1007"];
let _0x2a4572 = ["631682c504", "bb88750009", "9f90f45850", "90e9ecbe6a", "b6bfd8c1bc", "d4caf84940", "8decbc4c98", "c6026478e4", "4353a111e9", "7ceb1c14a7", "89515f0102", "63bec5af07", "1c8df37ffe", "36eedbe86c", "6ab415d70c", "3c309c7f26", "66c2938e1d", "3497a4fd05", "7f1f7ec5a4", "2fb53287b2", "2b0ada0dd7", "495070b239", "176f400a8f", "672129ff6d", "a479497fa6", "97ea404b56", "320ffa53e7", "6ccbda387f", "6f2d5f144f", "563983d5f1", "6f70050a62", "dfd9c44d7f", "6d5461c6dd", "a7331f5c94", "8d3891bef9", "eb6094dcaa", "11c95cc416", "351c3f4810", "67bd2e0988", "cdb75f714d", "3a6eba11a1", "76f9dc2980", "30644bcb35", "d1a1d62e6c", "8af63652ba", "075eb403be", "361ba45eff", "cfbb835838", "e26f305436", "ed33f82fa9", "e36bae3f8f", "6696ff7825", "b7719de06c", "2ab24bbc57", "2d98ddf8ac", "406fb78bfd", "9b84c4503a", "55ce3f059d", "cd06f8210b", "f6706f9b33", "34a718f16a", "f5e2218b18", "c7f6a889ff", "2583c8ba46", "45e325543c", "a162c96304"];
const _0x406043 = {
  "name": "APP-每日赚钱",
  "cubePageId": 10000003,
  "taskIdKeys": ["b6e6e96128", "710d92816e", "fc43b223be"]
};
const _0x53d89b = {
  "name": "WX-每日赚钱",
  "cubePageId": 184008,
  "taskIdKeys": ["1fff834702"]
};
const _0x45346e = {
  "name": "APP-团团神券-魔法石",
  "cubePageId": 88888889,
  "taskIdKeys": ["a941c20450", "cdcc8a8195", "eb03206b17", "5c919dfbd8", "8f53427c39", "f749a47257", "4d609dde67", "3e5cbc8120", "532e764346", "7613d02997"]
};
const _0x20440f = {
  "name": "WX-天天赚钱",
  "cubePageId": 123,
  "taskIdKeys": _0x2a4572
};
const _0x560dbc = [_0x406043, _0x53d89b, _0x45346e, _0x20440f],
  _0x272767 = {
    "NORMAL_CARD": "普通卡",
    "SENIOR_CARD": "稀有卡"
  };
const _0x5b99a8 = {
  "EAT": "吃",
  "LIVE": "住",
  "WALK": "行",
  "TRAVEL": "游",
  "SHOP": "购",
  "ENTERTAIN": "娱"
};

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

class _0x5e3975 {
  constructor() {
    this.index = $.userIdx++;
    this.name = "";
    this.valid = true;
    const _0x3a1da6 = {
      "limit": 0
    };
    const _0x3388df = {
      "Connection": "keep-alive"
    };
    const _0x4eaead = {
      "retry": _0x3a1da6,
      "timeout": DEFAULT_TIMEOUT,
      "followRedirect": false,
      "headers": _0x3388df
    };
    this.got = got.extend(_0x4eaead);
  }
  ["log"](_0x5e3914, _0x575827 = {}) {
    var msg = "",
      _0x540abc = $.userCount.toString().length;
    if (this.index) {
      msg += "账号[" + $.padStr(this.index, _0x540abc) + "]";
    }
    if (this.name) {
      msg += "[" + this.name + "]";
    }
    $.log(msg + _0x5e3914, _0x575827);
  }
  async ["request"](opt) {
    var _0x1b82d1 = {
      "statusCode": -1,
      "headers": null,
      "result": null
    };
    try {
      var _0x5bddbb = null,
        error = 0,
        _0x455ad3 = opt.fn || opt.url;
      opt.method = opt?.["method"]?.["toUpperCase"]() || "GET";
      if (MT_Proxy) {
        if (!HPA) {
          var HttpsProxyAgent = require("https-proxy-agent");
          HPA = new HttpsProxyAgent(MT_Proxy);
        }
        const _0x343f39 = {
          "http": HPA,
          "https": HPA
        };
        opt.agent = _0x343f39;
        const _0x1556f8 = {
          "rejectUnauthorized": false
        };
        opt.https = _0x1556f8;
      }
      while (error++ < DEFAULT_RETRY) {
        try {
          await this.got(opt).then(_0x3021a5 => {
            _0x5bddbb = _0x3021a5;
          }, _0x3fdd66 => {
            _0x5bddbb = _0x3fdd66.response;
          });
          if ((_0x5bddbb?.["statusCode"] / 100 | 0) <= 4) {
            break;
          }
        } catch (_0x32e443) {
          _0x32e443.name == "TimeoutError" ? this.log("[" + _0x455ad3 + "]请求超时，重试第" + error + "次") : this.log("[" + _0x455ad3 + "]请求错误(" + _0x32e443.message + ")，重试第" + error + "次");
        }
      }
      if (_0x5bddbb) {
        let {statusCode,headers,body} = _0x5bddbb;
        if (body) {
          try {
            body = JSON.parse(body);
          } catch {}
        }
        _0x1b82d1 = {
          statusCode,
          headers,
          "result": body
        };
      }
    } catch (_0xe55e1) {
      console.log(_0xe55e1);
    } finally {
      return _0x1b82d1;
    }
  }
}
let _0x2097af = new _0x5e3975();
class _0x4edad2 extends _0x5e3975 {
  constructor(ck) {
    super();
    Object.assign(this,$.CkToJson(ck));
    this.t_earnDaily = 0;
    this.uuid = $.randomPattern("186ebxxxxxxxx-22e49fxxxxxxxx-0-0-186ebxxxxxxxx");
    this.openid = $.randomString(7, _0x9a194) + "-" + $.randomString(20, _0x9a194);
    this.got = this.got.extend({
      "headers": {
        "User-Agent": _0x3e9d3a,
        "token": this.token,
        "openid": this.openid,
        "uuid": this.uuid,
        "M-APPKEY": "wxmp_mt-weapp",
        "clientversion": _0x104579,
        "utm_medium": _0x4d7d32,
        "openIdCipher": _0x4a5d2e,
        "cookie": "token=" + this.token + "; openid=" + this.openid + ";"
      }
    });
  }
  ["notify_coupon"](_0x35ee39, _0x3957dd = "领券") {
    for (let _0x26a3af of _0x35ee39) {
      this.log(_0x3957dd + ": " + _0x26a3af, {"notify": true});
    }
  }
  ["get_app_riskForm"]() {
    let _0x3f1250 = "i2HKpOmsirDPavelVfQBZGFXhdmmuk1eGNzKY";
    const _0xef37a2 = {
      "ip": "",
      "fingerprint": _0x3f1250,
      "cityId": "30",
      "platform": 5,
      "app": 0,
      "version": "12.8.202",
      "uuid": ""
    };
    return _0xef37a2;
  }
  ["get_riskForm"]() {
    let _0x4253bc = "WX__ver1.2.0_CCCC_dfwOgF35EQNYzVh8i27kXL04k6XTiM6";
    const _0x362545 = {
      "openid": this.openid,
      "appid": _0x2e5517,
      "mchid": _0x26aec5
    };
    let _0x29d7d1 = {
      "uuid": this.uuid,
      "userid": this.userId,
      "openid": this.openid,
      "expoId": _0x4a5d2e,
      "ip": "",
      "partner": 0,
      "wxRiskLevel": JSON.stringify(_0x362545),
      "platform": 13,
      "appletsFingerprint": _0x4253bc,
      "wechatFingerprint": _0x4253bc
    };
    return _0x29d7d1;
  }
  ["encode_riskForm"]() {
    return base64_encode(JSON.stringify(this.get_riskForm()));
  }
  async ["getLoginedUserInfo"](_0x117358 = {}) {
    let _0x23662a = false;
    try {
      let {result} = await this.request({
        "fn": "getLoginedUserInfo",
        "method": "get",
        "url": "https://i.meituan.com/wrapapi/getLoginedUserInfo",
        "searchParams": {"token": this.token}
      });
      if (result?.["mobile"]) {
        _0x23662a = true;
        this.name = result.mobile;
        this.userId = Number(result.userId);
        this.name = result.nickName;//mobile;
        this.log("登录成功");
      } else {
        this.log("获取账号信息失败, ck可能失效");//, {"notify": true}
        await expireNotify(this.userId,this.index);
      }
    } catch (_0x3a5d06) {
      console.log(_0x3a5d06);
    } finally {
      return _0x23662a;
    }
  }
  async ["inviteFetchcoupon"](_0x48096c = {}) {
    try {
      const _0x361db2 = {
        "ctype": "wxapp",
        "fpPlatform": 13,
        "isMini": 1,
        "token": this.token,
        "inviteCode": _0x178c4e
      };
      const _0x231330 = {
        "fn": "inviteFetchcoupon",
        "method": "get",
        "url": "https://promotion-waimai.meituan.com/invite/fetchcoupon",
        "searchParams": _0x361db2
      };
      let {
          result: result
        } = await this.request(_0x231330),
        _0x31f75a = $.get(result, "code", -1),
        _0x261cbd = $.get(result, "subcode", -1);
      if ((_0x31f75a == 0 || _0x31f75a == 1) && (_0x261cbd == 0 || _0x261cbd == 2)) {
        let _0x590d06 = result?.["data"]?.["couponList"]?.["map"](_0x4003e2 => "[" + _0x4003e2.couponTitle + "]" + (_0x4003e2.priceLimit || "无门槛") + "减" + _0x4003e2.couponValue);
        this.notify_coupon(_0x590d06);
      } else {
        let _0x3b568f = result?.["msg"] || result?.["message"] || "";
        this.log("领券失败[" + _0x31f75a + "]: " + _0x3b568f);
      }
    } catch (_0x3c5a62) {
      console.log(_0x3c5a62);
    }
  }
  async ["gundamGrabV4"](_0x38c699, _0x2b0a3b = {}) {
    try {
      const _0x452cfe = {
        "fn": "gundamGrabV4",
        "method": "post",
        "url": "https://mediacps.meituan.com/gundam/gundamGrabV4",
        "json": _0x38c699,
        "headers": {}
      };
      _0x452cfe.headers.Origin = "https://market.waimai.meituan.com";
      _0x452cfe.headers.Referer = "https://market.waimai.meituan.com/";
      let {result} = await this.request(_0x452cfe),
        _0x40a30b = $.get(result, "code", -1);
      if (_0x40a30b == 0) {
        let _0xf1be9a = result?.["data"]?.["allCoupons"]?.["map"](_0x446e86 => "[" + _0x446e86.couponName + "]" + (_0x446e86.amountLimit || "无门槛") + "减" + _0x446e86.couponAmount);
        this.notify_coupon(_0xf1be9a);
      } else {
        let _0x3fe993 = result?.["msg"] || result?.["message"] || "";
        this.log("领券失败[" + _0x40a30b + "]: " + _0x3fe993);
      }
    } catch (_0x26ebfc) {
      console.log(_0x26ebfc);
    }
  }
  async ["turntableDraw"](_0x365e9c, _0x37a234 = {}) {
    try {
      let _0xc8653e = {
          "fn": "turntableDraw",
          "method": "post",
          "url": "https://promotion.waimai.meituan.com/lottery/turntable/draw",
          "searchParams": {
            "actualLat": _0x3991a8,
            "actualLng": _0x19ee04,
            "initialLat": _0x3991a8,
            "initialLng": _0x19ee04,
            "cType": $.get(_0x37a234, "cType", "wm_wxapp"),
            "wm_appversion": $.get(_0x37a234, "wm_appversion", "9.19.6"),
            "gdPageId": $.get(_0x37a234, "gdPageId", "460584"),
            "token": this.token,
            "userId": this.userId,
            "uuid": this.uuid
          },
          "json": {
            "activityViewId": _0x365e9c,
            "appType": 0,
            "deviceType": 2,
            "wxOpenId": this.openid,
            "fpPlatform": 5,
            "mtFingerprint": ""
          }
        },
        {
          result: _0x9bc05a
        } = await this.request(_0xc8653e),
        _0x429558 = $.get(_0x9bc05a, "code", -1);
      if (_0x429558 == 0) {
        let _0x2791b8 = [];
        for (let _0x4aac42 of _0x9bc05a?.["data"]?.["awards"]) {
          _0x4aac42.couponType == 1 ? _0x2791b8.push("[" + _0x4aac42.name + "]" + (_0x4aac42.orderAmountLimit || "无门槛") + "减" + _0x4aac42.amount) : _0x2791b8.push(_0x4aac42.desc);
        }
        this.notify_coupon(_0x2791b8, "社群抽奖");
      } else {
        let _0x5d9556 = _0x9bc05a?.["msg"] || _0x9bc05a?.["message"] || "";
        this.log("社群抽奖失败[" + _0x429558 + "]: " + _0x5d9556);
      }
    } catch (_0xcc49fc) {
      console.log(_0xcc49fc);
    }
  }
  async ["signupRecord"](_0x484b57, _0x2bd8f3 = {}) {
    try {
      let _0x36f41f = {
          "fn": "signupRecord",
          "method": "get",
          "url": "https://promotion.waimai.meituan.com/playcenter/common/v1/treasurebox/signup/circle/record",
          "searchParams": {
            "activityViewId": _0x484b57,
            "isInDpEnv": 0,
            "isMini": 1,
            "cType": $.get(_0x2bd8f3, "cType", "wm_wxapp")
          }
        },
        {
          result: _0x29d78c
        } = await this.request(_0x36f41f),
        _0xaf9b5c = $.get(_0x29d78c, "code", -1);
      if (_0xaf9b5c == 0) {
        this.log("已连续签到" + (_0x29d78c?.["data"]?.["signUpNum"] || 0) + "天");
        for (let _0x2b7444 of _0x29d78c?.["data"]?.["rewardStatus"]?.["filter"](_0x45b1d4 => _0x45b1d4.status == 1)) {
          await this.ttsqGetBox(_0x484b57, _0x2b7444.stageDayNum);
        }
      } else {
        let _0x134c44 = _0x29d78c?.["msg"] || _0x29d78c?.["message"] || "";
        this.log("查询签到失败[" + _0xaf9b5c + "]: " + _0x134c44);
      }
    } catch (_0x37ed7a) {
      console.log(_0x37ed7a);
    }
  }
  async ["signupGetBox"](_0x1b1217, _0x45b659, _0x1853ff = {}) {
    try {
      const _0x488382 = {
        "signUpDayNum": _0x45b659
      };
      let _0x27a7fa = {
          "fn": "signupGetBox",
          "method": "get",
          "url": "https://promotion.waimai.meituan.com/playcenter/common/v1/treasurebox/signup/stage/reward/get",
          "searchParams": {
            "isInDpEnv": 0,
            "isMini": 1,
            "cType": $.get(_0x1853ff, "cType", "mtiphone")
          },
          "json": {
            "activityViewId": _0x1b1217,
            "actionCode": actionCode,
            "lat": _0x3991a8,
            "lng": _0x19ee04,
            "fpPlatform": 5,
            "bizParams": JSON.stringify(_0x488382),
            "utmSource": "AppStore",
            "utmCampaign": "AgroupBgroupG",
            "gdId": 26403,
            "mtFingerprint": ""
          }
        },
        {
          result: _0x285c5b
        } = await this.request(_0x27a7fa),
        _0xbefd35 = $.get(_0x285c5b, "code", -1);
      if (_0xbefd35 == 0) {
        let _0x18d201 = _0x285c5b?.["data"]?.["prizeInfoList"]?.["map"](_0x13d297 => "[" + _0x13d297.couponInfo.couponTitle + "]" + (_0x13d297.couponInfo.priceLimit || "无门槛") + "减" + _0x13d297.couponInfo.couponValue);
        this.notify_coupon(_0x18d201, "开签到宝箱");
      } else {
        let _0x32543b = _0x285c5b?.["msg"] || _0x285c5b?.["message"] || "";
        this.log("开签到宝箱失败[" + _0xbefd35 + "]: " + _0x32543b);
      }
    } catch (_0x2e0ae7) {
      console.log(_0x2e0ae7);
    }
  }
  async ["ttsqEntry"](_0x44936a, _0x49f00e = {}) {
    try {
      const _0x207923 = {
        "activityViewId": _0x44936a,
        "actionCodes": 1000,
        "querySignupConfig": 1,
        "lat": _0x3991a8,
        "lng": _0x19ee04
      };
      const _0x31f457 = {
        "fn": "signupRecord",
        "method": "get",
        "url": "https://promotion.waimai.meituan.com/playcenter/common/v1/entry",
        "searchParams": _0x207923
      };
      let {
          result: _0x28e7f9
        } = await this.request(_0x31f457),
        _0x1c82c3 = $.get(_0x28e7f9, "code", -1);
      if (_0x1c82c3 == 0) {
        if (_0x28e7f9.data.actionInfoList) {
          for (let _0x59ed67 of _0x28e7f9.data.actionInfoList) {
            if (_0x59ed67.awardShowList) {
              for (let _0x1859d4 of _0x59ed67.awardShowList) {
                await this.ttsqDoAction(_0x44936a, _0x59ed67.actionCode);
              }
            }
          }
        }
      } else {
        let _0x16c826 = _0x28e7f9?.["msg"] || _0x28e7f9?.["message"] || "";
        this.log("查询天天神券宝箱失败[" + _0x1c82c3 + "]: " + _0x16c826);
      }
    } catch (_0x2521f0) {
      console.log(_0x2521f0);
    }
  }
  async ["ttsqDoAction"](_0xf76ff5, _0x1c7bb3, _0x3a029b = {}) {
    try {
      const _0x239c93 = {
        "activityViewId": _0xf76ff5,
        "actionCode": _0x1c7bb3,
        "lat": _0x3991a8,
        "lng": _0x19ee04,
        "gdId": 26403,
        "fpPlatform": 13,
        "utmSource": "",
        "utmCampaign": "",
        "mtFingerprint": ""
      };
      const _0x1b238b = {
        "fn": "ttsqDoAction",
        "method": "post",
        "url": "https://promotion.waimai.meituan.com/playcenter/common/v1/doaction",
        "json": _0x239c93
      };
      let {
          result: _0x38982e
        } = await this.request(_0x1b238b),
        _0x47a3b5 = $.get(_0x38982e, "code", -1);
      if (_0x47a3b5 == 0) {
        let _0xd69bad = _0x38982e?.["data"]?.["prizeInfoList"]?.["map"](_0x156b8a => "[" + _0x156b8a.couponInfo.couponTitle + "]" + (_0x156b8a.couponInfo.priceLimit || "无门槛") + "减" + _0x156b8a.couponInfo.couponValue);
        this.notify_coupon(_0xd69bad, "开天天神券宝箱");
      } else {
        let _0x2f2955 = _0x38982e?.["msg"] || _0x38982e?.["message"] || "";
        this.log("开天天神券宝箱失败[" + _0x47a3b5 + "]: " + _0x2f2955);
      }
    } catch (_0x12d743) {
      console.log(_0x12d743);
    }
  }
  async ["clockInStatus"](_0x4d0ef3, _0x75e286 = {}) {
    try {
      let _0x481ef5 = {
          "fn": "clockInStatus",
          "method": "get",
          "url": "https://promotion.waimai.meituan.com/playcenter/common/v1/clock-in/status",
          "searchParams": {
            "activityViewId": _0x4d0ef3,
            "ctype": $.get(_0x75e286, "ctype", "wm_wxapp"),
            "isInDpEnv": 0
          }
        },
        {
          result: _0x132305
        } = await this.request(_0x481ef5),
        _0x488c60 = $.get(_0x132305, "code", -1);
      if (_0x488c60 == 0) {
        let _0x28cc81 = new Date().getDay();
        for (let _0x450b1b of _0x132305.data.clockInStatus) {
          if (_0x450b1b.dayOfWeek % 7 == _0x28cc81) {
            this.log("今天社群" + (_0x450b1b.status ? "已" : "未") + "签到, 本周已签到" + _0x132305.data.clockInNum + "天");
            if (!_0x450b1b.status) {
              await this.clockInSign(_0x4d0ef3);
            }
            break;
          }
        }
        _0x132305.data.lotteryStatus == 1 && (await this.ttsqDoAction(_0x4d0ef3));
      } else {
        let _0xe736d7 = _0x132305?.["msg"] || _0x132305?.["message"] || "";
        this.log("查询社群签到失败[" + _0x488c60 + "]: " + _0xe736d7);
      }
    } catch (_0x45a18c) {
      console.log(_0x45a18c);
    }
  }
  async ["clockInSign"](_0x256a54, _0x16a62e = {}) {
    try {
      const _0x13f450 = {
        "activityViewId": _0x256a54,
        "actionCode": 1000,
        "lat": _0x3991a8,
        "lng": _0x19ee04
      };
      let _0x4ba32c = {
          "fn": "clockInSign",
          "method": "post",
          "url": "https://promotion.waimai.meituan.com/playcenter/common/v1/clock-in",
          "searchParams": {
            "isMini": 1,
            "ctype": $.get(_0x16a62e, "ctype", "wm_wxapp"),
            "isInDpEnv": 0
          },
          "json": _0x13f450
        },
        {
          result: _0x5a07cd
        } = await this.request(_0x4ba32c),
        _0x2a642e = $.get(_0x5a07cd, "code", -1);
      if (_0x2a642e == 0) {
        let _0x16e91a = _0x5a07cd?.["data"]?.["prizeInfoList"]?.["map"](_0x182d32 => "[" + _0x182d32.couponInfo.couponTitle + "]" + (_0x182d32.couponInfo.priceLimit || "无门槛") + "减" + _0x182d32.couponInfo.couponValue);
        this.notify_coupon(_0x16e91a);
      } else {
        let _0x5c6505 = _0x5a07cd?.["msg"] || _0x5a07cd?.["message"] || "";
        this.log("社群签到失败[" + _0x2a642e + "]: " + _0x5c6505);
      }
    } catch (_0x23e6d9) {
      console.log(_0x23e6d9);
    }
  }
  async ["cardLotteryNum"](_0xdad749 = {}) {
    try {
      const _0x30bf0d = {
        "fn": "cardLotteryNum",
        "method": "post",
        "url": "https://mgm.meituan.com/marketing/cardsCollect/api/cardLotteryNum",
        "json": {}
      };
      _0x30bf0d.json.activityId = "1116";
      _0x30bf0d.json.topicIdList = ["1380101169187258449", "1380101260094521416", "1412292930126868547"];
      let {
        result: _0x299c8f
      } = await this.request(_0x30bf0d);
      if (_0x299c8f?.["lotteryNum"] >= 0) {
        let _0xb3ce77 = _0x299c8f.lotteryNum;
        this.log("有" + _0xb3ce77 + "次抽月符机会");
        while (_0xb3ce77-- > 0) {
          await this.lotteryfrompool(_0x299c8f.poolIdList);
        }
      } else {
        let _0x278e7f = _0x299c8f?.["msg"] || _0x299c8f?.["message"] || "";
        this.log("查询抽月符次数失败: " + _0x278e7f);
      }
    } catch (_0x11a7e4) {
      console.log(_0x11a7e4);
    }
  }
  async ["cardSaveAccess"](_0x1fc371 = {}) {
    try {
      const _0x327a0e = {
        "playerId": 1
      };
      const _0x4e6036 = {
        "fn": "cardSaveAccess",
        "method": "post",
        "url": "https://mgm.meituan.com/marketing/cardsCollect/api/saveAccess",
        "json": _0x327a0e
      };
      await this.request(_0x4e6036);
    } catch (_0x57669a) {
      console.log(_0x57669a);
    }
  }
  async ["cardSaveShare"](_0x53c01a = {}) {
    try {
      const _0x322e21 = {
        "playerId": 1,
        "shareWay": 1,
        "shareContentType": 1,
        "shareContentId": "29"
      };
      const _0x50cb55 = {
        "fn": "cyfSaveShare",
        "method": "post",
        "url": "https://mgm.meituan.com/marketing/cardsCollect/api/saveShare",
        "json": _0x322e21
      };
      await this.request(_0x50cb55);
    } catch (_0xbce8ab) {
      console.log(_0xbce8ab);
    }
  }
  async ["lotteryfrompool"](_0x74cd07, _0x4b637a = {}) {
    try {
      const _0x5e96ed = {
        "poolList": _0x74cd07
      };
      const _0x5c1d59 = {
        "fn": "lotteryfrompool",
        "method": "post",
        "url": "https://mgm.meituan.com/marketing/cardsCollect/api/lotteryfrompool",
        "json": _0x5e96ed
      };
      let {
        result: _0x13b625
      } = await this.request(_0x5c1d59);
      if (_0x13b625?.["prizeInfo"]?.["name"]) {
        this.log("抽到月符: [" + _0x13b625?.["prizeInfo"]?.["name"] + "]");
        await this.getCardInfo(_0x13b625?.["lotteryAwardSerialNo"]?.["value"]);
      } else {
        let _0xc1d5fc = _0x13b625?.["msg"] || _0x13b625?.["message"] || "";
        this.log("抽月符失败: " + _0xc1d5fc);
      }
    } catch (_0x27ba28) {
      console.log(_0x27ba28);
    }
  }
  async ["getCardInfo"](_0xaccc6, _0x252ab5 = {}) {
    try {
      const _0x11a591 = {
        "lotteryAwardSerialNo": _0xaccc6
      };
      const _0x467680 = {
        "fn": "getCardInfo",
        "method": "get",
        "url": "https://mgm.meituan.com/marketing/cardsCollect/api/getCardInfo",
        "searchParams": _0x11a591
      };
      let {
          result: _0x4e5090
        } = await this.request(_0x467680),
        _0x31cbb4 = $.get(_0x4e5090, "code", -1);
      if (_0x31cbb4 == 0) {
        await this.getCardDraw(_0x4e5090?.["userCardInfo"]?.["cardId"]);
      } else {
        let _0x3a365b = _0x4e5090?.["msg"] || _0x4e5090?.["message"] || "";
        this.log("查询月符抽奖卡号失败[" + _0x31cbb4 + "]: " + _0x3a365b);
      }
    } catch (_0x3ff650) {
      console.log(_0x3ff650);
    }
  }
  async ["getCardDraw"](_0x1b44de, _0x3cf550 = {}) {
    try {
      const _0x29656f = {
        "cardId": _0x1b44de
      };
      const _0x552b95 = {
        "fn": "getCardDraw",
        "method": "get",
        "url": "https://mgm.meituan.com/marketing/cardsCollect/api/draw",
        "searchParams": _0x29656f
      };
      let {
        result: _0x25b567
      } = await this.request(_0x552b95);
      if (_0x25b567?.["bingo"]?.["value"]) {
        this.log("月符抽奖: " + _0x25b567?.["prizeInfo"]?.["name"]);
      } else {
        let _0x4aa27d = _0x25b567?.["msg"] || _0x25b567?.["message"] || "";
        this.log("查询月符抽奖结果失败: " + _0x4aa27d);
      }
    } catch (_0x3cf614) {
      console.log(_0x3cf614);
    }
  }
  async ["getUserTasks"](_0x1b90a5, _0x241799 = {}) {
    try {
      const _0x27efb9 = {
        "fn": "getUserTasks",
        "method": "post",
        "url": "https://cube.meituan.com/topcube/api/toc/task/getUserTasks",
        "json": {}
      };
      _0x27efb9.json.uuid = this.uuid;
      _0x27efb9.json.userId = this.userId;
      _0x27efb9.json.browseAreaTrue = true;
      _0x27efb9.json.cityId = 30;
      _0x27efb9.json.taskIdKeys = _0x1b90a5.taskIdKeys;
      _0x27efb9.json.userType = "MEI_TUAN";
      _0x27efb9.json.sourceType = "MEI_TUAN";
      _0x27efb9.json.mini_program_token = this.token;
      _0x27efb9.json.inviter = "";
      _0x27efb9.json.inviterTaskIdKey = "";
      let {
        result: _0x196d36
      } = await this.request(_0x27efb9);
      if (_0x196d36?.["code"] == 0) {
        for (let _0x2a7d67 of _0x196d36.data) {
          if (!_0x23dca1.includes(_0x2a7d67?.["code"]?.["toString"]())) {
            if (_0x2a7d67.taskConf) {
              let _0x34dce0 = JSON.parse(_0x2a7d67.taskConf);
              if (_0x34dce0.isCheckNgSignature) {
                $.log("任务[" + _0x2a7d67.title + "] -- 有强验证, 跳过");
                continue;
              }
            }
            if (!_0x2a7d67?.["taskRuleVos"]?.["length"]) {
              $.log("任务[" + _0x2a7d67.title + "] -- " + _0x2a7d67.msg);
              continue;
            }
            if (_0x2a7d67?.["title"]?.["includes"]("小程序下单")) {
              continue;
            }
            let _0x3ae532 = _0x2a7d67?.["extend"] ? true : false;
            if (_0x3ae532 && _0x2a7d67?.["extend"]?.["isSignInToday"] == 1) {
              $.log("任务[" + _0x2a7d67.title + "] -- 已完成");
              continue;
            }
            for (let _0x4414b5 of _0x2a7d67.taskRuleVos) {
              if (_0x4414b5.status == "PRIZE_SUCC" || _0x4414b5.status == "DELETE") {
                !_0x3ae532 && $.log("任务[" + _0x2a7d67.title + "] -- 已完成");
              } else {
                if (_0x4414b5?.["status"] == "CAN_RECEIVE") {
                  $.log("任务[" + _0x2a7d67.title + "] -- 可领取奖励");
                  await this.sendTaskPrize(_0x1b90a5, _0x2a7d67, _0x4414b5);
                  if (_0x3ae532) {
                    break;
                  }
                } else {
                  $.log("任务[" + _0x2a7d67.title + "] -- 未完成");
                  let _0x179b4a = true,
                    _0x4c50d2 = JSON.parse(_0x4414b5.ruleConfig);
                  if (_0x4c50d2.limitTime) {
                    let _0x2b7ae3 = (_0x4414b5.preCompleteTime || 0) + _0x4c50d2.limitTime * 1000;
                    Date.now() < _0x2b7ae3 && (_0x179b4a = false, $.log("任务[" + _0x2a7d67.title + "]冷却中, [" + $.time("hh:mm:ss", _0x2b7ae3) + "]后可完成"));
                  } else {
                    if (_0x4c50d2?.["timeLimits"]?.["length"]) {
                      let _0x4c5403 = new Date($.time("yyyy-MM-dd 00:00:00")).getTime(),
                        _0x218496 = Date.now();
                      for (let _0x45fc54 of _0x4c50d2.timeLimits) {
                        let {
                          startTime: _0x56141e,
                          endTime: _0x129788
                        } = _0x45fc54;
                        _0x56141e += _0x4c5403;
                        _0x129788 += _0x4c5403;
                        (_0x218496 < _0x56141e || _0x218496 >= _0x129788) && (_0x179b4a = false, $.log("任务[" + _0x2a7d67.title + "]不在时间段中: " + $.time("hh:mm:ss", _0x56141e) + "到" + $.time("hh:mm:ss", _0x129788)));
                      }
                    }
                  }
                  _0x179b4a && (await this.startUserTask(_0x1b90a5, _0x2a7d67, _0x4414b5));
                  if (_0x3ae532) {
                    break;
                  }
                }
              }
            }
          }
        }
      } else {
        let _0x304b2c = _0x196d36?.["msg"] || _0x196d36?.["desc"] || "";
        this.log("查询任务列表失败: " + _0x304b2c);
      }
    } catch (_0x30ed1f) {
      console.log(_0x30ed1f);
    }
  }
  async ["startUserTask"](_0x419f1f, _0x455e88, _0x3226f5, _0x3dc77e = {}) {
    try {
      let _0x470545 = {
          "fn": "startUserTask",
          "method": "post",
          "url": "https://cube.meituan.com/topcube/api/toc/task/startUserTask",
          "json": {
            "uuid": this.uuid,
            "userId": this.userId,
            "cityId": 30,
            "riskForm": this.encode_riskForm(),
            "taskIdKey": _0x455e88.taskIdKey,
            "taskRuleIdKey": _0x3226f5.taskRuleIdKey,
            "cubePageId": _0x419f1f.cubePageId,
            "userType": "MEI_TUAN",
            "sourceType": "MEI_TUAN",
            "mini_program_token": this.token
          },
          "headers": {
            "M-TRACEID": "32358943431" + $.randomString(8, _0x5d980e)
          }
        },
        {
          result: _0x6f419
        } = await this.request(_0x470545);
      if (_0x6f419?.["code"] == 0) {
        let _0x3b7e38 = JSON.parse(_0x3226f5.ruleConfig);
        if (_0x3b7e38.staySeconds) {
          let _0x569fcb = _0x3b7e38.staySeconds * 1000;
          this.log("等待" + _0x3b7e38.staySeconds + "秒后完成任务..");
          await $.wait(_0x569fcb);
        } else {
          this.log("完成任务[" + _0x455e88.title + "]成功");
        }
        await this.updateUserTask(_0x419f1f, _0x455e88, _0x3226f5, _0x6f419);
      } else {
        let _0x293a28 = _0x6f419?.["msg"] || _0x6f419?.["desc"] || "";
        this.log("完成任务[" + _0x455e88.title + "]失败: " + _0x293a28);
        _0x293a28?.["includes"]("活动已完成") && (await this.updateUserTask(_0x419f1f, _0x455e88, _0x3226f5));
      }
    } catch (_0x3f3fa8) {
      console.log(_0x3f3fa8);
    }
  }
  ["process_task_prize"](_0x4da909) {
    let _0x4babbe = [];
    for (let _0xf1ae3 of _0x4da909) {
      if (_0xf1ae3.number) {
        _0x4babbe.push(_0xf1ae3.number + "金币");
      } else {
        if (_0xf1ae3?.["sendMagicCardResult"]?.["cardList"]?.["length"]) {
          for (let _0x3e2bd0 of _0xf1ae3.sendMagicCardResult.cardList) {
            _0x4babbe.push("[" + (_0x272767[_0x3e2bd0.type] || _0x3e2bd0.type) + "]x" + _0x3e2bd0.amount);
          }
        } else {
          if (_0xf1ae3?.["sendMagicStoneResult"]?.["stoneList"]?.["length"]) {
            for (let _0x215c73 of _0xf1ae3.sendMagicStoneResult.stoneList) {
              _0x4babbe.push("[" + (_0x5b99a8[_0x215c73.magicStonePrizeType] || _0x215c73.magicStonePrizeType) + "]x" + _0x215c73.amount);
            }
          } else {
            if (_0xf1ae3?.["sendCouponResultList"]?.["length"]) {
              for (let _0x33f728 of _0xf1ae3.sendCouponResultList) {
                _0x4babbe.push((_0x33f728.useCondition || "无门槛") + "减" + _0x33f728.couponValue + _0x33f728.couponTypeDesc + "券");
              }
            }
          }
        }
      }
    }
    return _0x4babbe;
  }
  async ["updateUserTask"](_0x4e2ce3, _0x223433, _0x42f7cf, _0x16b319 = {}, _0x23940a = {}) {
    try {
      let {
        actionNo = "",
        taskNo = "",
        taskRuleNo = ""
      } = _0x16b319;
      taskNo = taskNo || _0x223433?.["taskNo"] || "";
      taskRuleNo = taskRuleNo || _0x42f7cf?.["taskRuleNo"] || "";
      let _0x493d1d = {
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
            "taskIdKey": _0x223433.taskIdKey,
            "taskRuleNo": taskRuleNo,
            "taskRuleIdKey": _0x42f7cf.taskRuleIdKey,
            "cubePageId": _0x4e2ce3.cubePageId,
            "userType": "MEI_TUAN",
            "sourceType": "MEI_TUAN",
            "mini_program_token": this.token
          }
        },
        {
          result: _0x2352ad
        } = await this.request(_0x493d1d);
      if (_0x2352ad?.["code"] == 0) {
        if (_0x2352ad?.["prizeList"]?.["length"]) {
          let _0x43f7a4 = this.process_task_prize(_0x2352ad.prizeList);
          this.log("领取任务[" + _0x223433.title + "]奖励获得: " + _0x43f7a4.join(","));
        } else {
          this.log("更新任务[" + _0x223433.title + "]状态成功");
          await this.sendTaskPrize(_0x4e2ce3, _0x223433, _0x42f7cf, _0x16b319);
        }
      } else {
        let _0xd43821 = _0x2352ad?.["msg"] || _0x2352ad?.["desc"] || "";
        this.log("更新任务[" + _0x223433.title + "]状态失败: " + _0xd43821);
      }
    } catch (_0x571601) {
      console.log(_0x571601);
    }
  }
  async ["sendTaskPrize"](_0x479042, _0x39bbc0, _0x44d42e, _0x5b5869 = {}, _0x135d49 = {}) {
    try {
      let {
        actionNo = "",
        taskNo = "",
        taskRuleNo = ""
      } = _0x5b5869;
      taskNo = taskNo || _0x39bbc0?.["taskNo"] || "";
      taskRuleNo = taskRuleNo || _0x44d42e?.["taskRuleNo"] || "";
      let _0x154b55 = {
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
            "taskIdKey": _0x39bbc0.taskIdKey,
            "taskRuleNo": taskRuleNo,
            "taskRuleIdKey": _0x44d42e.taskRuleIdKey,
            "cubePageId": _0x479042.cubePageId,
            "userType": "MEI_TUAN",
            "sourceType": "MEI_TUAN",
            "mini_program_token": this.token
          }
        },
        {
          result: _0xe24e5
        } = await this.request(_0x154b55);
      if (_0xe24e5?.["code"] == 0) {
        if (_0xe24e5?.["prizeList"]?.["length"]) {
          let _0x2c5882 = this.process_task_prize(_0xe24e5.prizeList);
          this.log("领取任务[" + _0x39bbc0.title + "]奖励获得: " + _0x2c5882.join(","));
        } else {
          this.log("没有领取到任务[" + _0x39bbc0.title + "]奖励");
        }
      } else {
        let _0x320e62 = _0xe24e5?.["msg"] || _0xe24e5?.["desc"] || "";
        this.log("领取任务[" + _0x39bbc0.title + "]奖励失败: " + _0x320e62);
      }
    } catch (_0x1bfe1f) {
      console.log(_0x1bfe1f);
    }
  }
  async ["earnDailyLogin"](_0x1c34f6 = {}) {
    try {
      let _0x32e94a = _0x1c34f6.gameType || 10402;
      const _0x114cbc = {
        "cityId": "30"
      };
      let _0x19859b = {
          "fn": "earnDailyLogin",
          "method": "get",
          "url": "https://game.meituan.com/earn-daily/login/loginMgc",
          "searchParams": {
            "gameType": _0x32e94a,
            "mtToken": this.token,
            "mtUserId": this.userId,
            "mtDeviceId": this.uuid,
            "nonceStr": $.randomString(16),
            "externalStr": JSON.stringify(_0x114cbc)
          }
        },
        {
          result: _0x3bbe4a
        } = await this.request(_0x19859b),
        _0x8e2250 = $.get(_0x3bbe4a, "code", -1);
      if (_0x8e2250 == 0) {
        this.acToken = _0x3bbe4a?.["response"]?.["accessToken"];
      } else {
        let _0x5c8388 = _0x3bbe4a?.["msg"] || _0x3bbe4a?.["desc"] || "";
        this.log("登录游戏[" + _0x32e94a + "]失败[" + _0x8e2250 + "]: " + _0x5c8388);
      }
    } catch (_0x35137b) {
      console.log(_0x35137b);
    }
  }
  async ["earnDailyPost"](_0x19d10b = {}) {
    let _0x2d0574 = {};
    try {
      let _0xccdedf = _0x19d10b.protocolId,
        _0x52c616 = _0x19d10b.data || {};
      const _0xac99ac = {
        "Origin": "https://awp.meituan.com",
        "Referer": "https://awp.meituan.com/"
      };
      let _0x2d7cd5 = {
        "fn": "earnDailyPost",
        "method": "post",
        "url": "https://game.meituan.com/earn-daily/msg/post",
        "json": {
          "acToken": this.acToken,
          "riskParams": this.get_app_riskForm(),
          "protocolId": _0xccdedf,
          "data": _0x52c616
        },
        "headers": _0xac99ac
      };

      let t = Date.now() - this.t_earnDaily;
      t < _0x333897 && (await $.wait(_0x333897 - t));

      _0x2d0574 = await this.request(_0x2d7cd5);
      this.t_earnDaily = Date.now();
    } catch (_0x5d0b88) {
      console.log(_0x5d0b88);
    } finally {
      return _0x2d0574;
    }
  }
  async ["earnDaily_task_list"](_0x9aa306 = {}) {
    try {
      const _0x32915f = {
        "acToken": this.acToken
      };
      const _0x348959 = {
        "protocolId": 1001,
        "data": _0x32915f
      };
      {
        let {
            result: _0x12b5de
          } = await this.earnDailyPost(_0x348959),
          _0x13ea38 = $.get(_0x12b5de, "code", -1);
        if (_0x13ea38 == 200) {
          for (let _0x5d3081 of _0x12b5de?.["data"]?.["signInPopModel"]?.["rewardModelList"] || []) {
            _0x5d3081.current && _0x5d3081.state == 1 && (await this.earnDaily_sign());
          }
          for (let _0x72dc22 of _0x12b5de?.["data"]?.["taskInfoList"] || []) {
            switch (_0x72dc22.id) {
              case 15099:
                break;
              default:
                _0x72dc22.dailyRewardTimes < _0x72dc22.dailyFinishTimes && (await this.earnDaily_get_reward(_0x72dc22));
                for (let _0x5cb577 = _0x72dc22.dailyFinishTimes; _0x5cb577 < _0x72dc22.mgcTaskBaseInfo.curPeriodMaxFinishTimes; _0x5cb577++) {
                  await this.earnDaily_do_task(_0x72dc22);
                }
                break;
            }
          }
        } else {
          let _0x112dab = _0x12b5de?.["msg"] || _0x12b5de?.["desc"] || "";
          this.log("查询任务失败[" + _0x13ea38 + "]: " + _0x112dab);
        }
      }
      {
        let {
            result: _0x1324da
          } = await this.earnDailyPost(_0x348959),
          _0x531d98 = $.get(_0x1324da, "code", -1);
        if (_0x531d98 == 200) {
          let _0xd972d7 = _0x1324da?.["data"]?.["playerBaseModel"]?.["redPacketInfo"]?.["leftRedPacketAmount"] || 0;
          this.log("可以开" + _0xd972d7 + "次红包");
          while (_0xd972d7-- > 0) {
            await this.earnDaily_redbag();
          }
        } else {
          let _0x238d47 = _0x1324da?.["msg"] || _0x1324da?.["desc"] || "";
          this.log("查询红包次数失败[" + _0x531d98 + "]: " + _0x238d47);
        }
      }
      {
        let {
            result: _0x4f0232
          } = await this.earnDailyPost(_0x348959),
          _0x396c24 = $.get(_0x4f0232, "code", -1);
        if (_0x396c24 == 200) {
          let _0x1a7a70 = _0x4f0232?.["data"]?.["playerBaseModel"]?.["lotteryInfo"]?.["leftLotteryTimesAmount"] || 0;
          this.log("可以抽奖" + _0x1a7a70 + "次");
          while (_0x1a7a70-- > 0) {
            await this.earnDaily_draw();
          }
        } else {
          let _0x4cbf35 = _0x4f0232?.["msg"] || _0x4f0232?.["desc"] || "";
          this.log("查询转盘次数失败[" + _0x396c24 + "]: " + _0x4cbf35);
        }
      }
      await this.earnDaily_get_withdraw_list();
    } catch (_0x35ca18) {
      console.log(_0x35ca18);
    }
  }
  async ["earnDaily_sign"](_0xeda478 = {}) {
    try {
      const _0x4d8a67 = {
        "protocolId": 1007
      };
      let {
          result: _0x52130b
        } = await this.earnDailyPost(_0x4d8a67),
        _0x1aeeb0 = $.get(_0x52130b, "code", -1);
      if (_0x1aeeb0 == 200) {
        this.log("签到成功: " + (_0x52130b?.["data"]?.["remitNotificationModelList"]?.["map"](_0x277781 => _0x277781.content)?.["join"](",") || ""));
      } else {
        let _0x3bea10 = _0x52130b?.["msg"] || _0x52130b?.["desc"] || "";
        this.log("签到失败[" + _0x1aeeb0 + "]: " + _0x3bea10);
      }
    } catch (_0x36aa60) {
      console.log(_0x36aa60);
    }
  }
  async ["earnDaily_do_task"](_0x4e8569, _0x10110e = {}) {
    try {
      const _0x4e5b14 = {
        "taskId": _0x4e8569.id
      };
      const _0x5c91dd = {
        "protocolId": 1004,
        "data": _0x4e5b14
      };
      let {
          result: _0x375939
        } = await this.earnDailyPost(_0x5c91dd),
        _0x4e3d85 = $.get(_0x375939, "code", -1);
      if (_0x4e3d85 == 200) {
        this.log("完成任务[" + _0x4e8569.mgcTaskBaseInfo.viewTitle + "]成功");
        await this.earnDaily_get_reward(_0x4e8569);
      } else {
        let _0x398e35 = _0x375939?.["msg"] || _0x375939?.["desc"] || "";
        this.log("完成任务[" + _0x4e8569.mgcTaskBaseInfo.viewTitle + "]失败[" + _0x4e3d85 + "]: " + _0x398e35);
      }
    } catch (_0x168371) {
      console.log(_0x168371);
    }
  }
  async ["earnDaily_get_reward"](_0x110c69, _0x5b986e = {}) {
    try {
      const _0x5e461e = {
        "taskId": _0x110c69.id
      };
      const _0x5caf38 = {
        "protocolId": 1005,
        "data": _0x5e461e
      };
      let {
          result: _0x5ad4c6
        } = await this.earnDailyPost(_0x5caf38),
        _0x1ed0df = $.get(_0x5ad4c6, "code", -1);
      if (_0x1ed0df == 200) {
        this.log("领取任务[" + _0x110c69.mgcTaskBaseInfo.viewTitle + "]奖励成功");
      } else {
        let _0x474c87 = _0x5ad4c6?.["msg"] || _0x5ad4c6?.["desc"] || "";
        this.log("领取任务[" + _0x110c69.mgcTaskBaseInfo.viewTitle + "]奖励失败[" + _0x1ed0df + "]: " + _0x474c87);
      }
    } catch (_0x19d446) {
      console.log(_0x19d446);
    }
  }
  async ["earnDaily_redbag"](_0x3379cc = {}) {
    try {
      const _0x3972bf = {
        "protocolId": 1008
      };
      let {
          result: _0x1825fb
        } = await this.earnDailyPost(_0x3972bf),
        _0x5be8a5 = $.get(_0x1825fb, "code", -1);
      if (_0x5be8a5 == 200) {
        this.log("开红包获得: " + _0x1825fb?.["data"]?.["rewardModelList"]?.["filter"](_0x57abf7 => _0x57abf7.rewarded)?.["map"](_0x290164 => "" + (_0x290164.amount / 100).toFixed(2) + "元")?.["join"](","));
      } else {
        let _0x13308b = _0x1825fb?.["msg"] || _0x1825fb?.["desc"] || "";
        this.log("开红包失败[" + _0x5be8a5 + "]: " + _0x13308b);
      }
    } catch (_0x5dee11) {
      console.log(_0x5dee11);
    }
  }
  async ["earnDaily_draw"](_0x1db834 = {}) {
    try {
      const _0x39fe50 = {
        "protocolId": 1010
      };
      let {
          result: _0x31349b
        } = await this.earnDailyPost(_0x39fe50),
        _0xd55d2 = $.get(_0x31349b, "code", -1);
      if (_0xd55d2 == 200) {
        let _0xe59ed5 = _0x31349b?.["data"]?.["currentReward"];
        if (_0xe59ed5?.["rewardedCouponModel"]) {
          this.log("转盘抽奖: " + _0xe59ed5.rewardedCouponModel?.["useRule"] + _0xe59ed5.rewardedCouponModel?.["name"]);
          return;
        }
        switch (_0xe59ed5?.["resourceType"]) {
          case 1:
            let _0x16f783 = ((_0xe59ed5?.["amount"] || 0) / 100).toFixed(2);
            this.log("转盘抽奖: " + _0x16f783 + "元余额");
            break;
          case 3:
            this.log("转盘抽奖: 随机提现机会");
            break;
          default:
            this.log("转盘抽奖: " + JSON.stringify(_0x31349b));
            break;
        }
      } else {
        let _0x48c683 = _0x31349b?.["msg"] || _0x31349b?.["desc"] || "";
        this.log("转盘抽奖失败[" + _0xd55d2 + "]: " + _0x48c683);
      }
    } catch (_0x889f2f) {
      console.log(_0x889f2f);
    }
  }
  async ["earnDaily_get_withdraw_list"](_0x1c0e04 = {}) {
    try {
      const _0x15f97d = {
        "protocolId": 1012
      };
      let {
          result: _0x39897c
        } = await this.earnDailyPost(_0x15f97d),
        _0x4ce196 = $.get(_0x39897c, "code", -1);
      if (_0x4ce196 == 200) {
        let _0x2fc3e7 = _0x39897c?.["data"]?.["activityCycleInfo"]?.["cashToken"] || 0,
          _0x4e9050 = (_0x2fc3e7 / 100).toFixed(2);
        this.log("红包余额: " + _0x4e9050 + "元");
        let _0x1da3ed = [];
        _0x1da3ed = _0x1da3ed.concat(_0x39897c?.["data"]?.["cashList"] || []);
        _0x1da3ed = _0x1da3ed.sort(function (_0x56a77d, _0x5abc4e) {
          return _0x5abc4e.amount - _0x56a77d.amount;
        });
        for (let _0x333e48 of _0x1da3ed) {
          if (_0x333e48.amount > _0x2fc3e7) {
            continue;
          }
          if (await this.earnDaily_withdraw(_0x333e48)) {
            break;
          }
        }
      } else {
        let _0x14e202 = _0x39897c?.["msg"] || _0x39897c?.["desc"] || "";
        this.log("查询提现列表失败[" + _0x4ce196 + "]: " + _0x14e202);
      }
    } catch (_0x1f5dbc) {
      console.log(_0x1f5dbc);
    }
  }
  async ["earnDaily_withdraw"](_0x58f868, _0x43a129 = {}) {
    let _0x22a49f = false;
    try {
      let _0x1190a7 = (_0x58f868.amount / 100).toFixed(2);
      const _0x1536e3 = {
        "id": _0x58f868.id,
        "amount": _0x58f868.amount
      };
      const _0x264f14 = {
        "protocolId": 1013,
        "data": _0x1536e3
      };
      let {
          result: _0x9f33e7
        } = await this.earnDailyPost(_0x264f14),
        _0x56a482 = $.get(_0x9f33e7, "code", -1);
      if (_0x56a482 == 200) {
        _0x22a49f = true;
        this.log("提现[" + _0x1190a7 + "元]到钱包成功", {"notify": true});
      } else {
        let _0x3dd81a = _0x9f33e7?.["msg"] || _0x9f33e7?.["desc"] || "";
        _0x56a482 == 1017 ? (_0x22a49f = true, this.log("提现[" + _0x1190a7 + "元]失败[" + _0x56a482 + "]: 可能今天已提现过")) : this.log("提现[" + _0x1190a7 + "元]失败[" + _0x56a482 + "]: " + _0x3dd81a);
      }
    } catch (_0x55451a) {
      console.log(_0x55451a);
    } finally {
      return _0x22a49f;
    }
  }
  async ["appMrzqTask"]() {
    $.log("---------------- APP-每日赚钱 ----------------");
    await this.earnDailyLogin();
    await this.earnDaily_task_list();
  }
  async ["appTtsqTask"]() {
    $.log("---------------- APP-天天神券 ----------------");
    await this.inviteFetchcoupon();
    for (let _0x6616b6 of _0x116ef9) {
      await this.gundamGrabV4(_0x6616b6);
    }
    await this.signupRecord("9khEyiqt2tKFyZSjvqphkQ");
    await this.ttsqEntry("9khEyiqt2tKFyZSjvqphkQ");
  }
  async ["wxSqsqTask"]() {
    $.log("---------------- WX-社群神券 ----------------");
    await this.turntableDraw("b24pg8jaFTeNadCXq0lb3A");
    await this.turntableDraw("yLm-IynkBUQLt09kALFv8Q");
  }
  async ["wxSqSignTask"]() {
    $.log("---------------- WX-社群签到 ----------------");
    await this.clockInStatus("06hFC-C1WGiAQYUGya5QJA");
    await this.clockInStatus("5IFmI13NeO7kRPW1jUj7Lw");
  }
  async ["appCyfTask"]() {
    $.log("---------------- APP-抽月符 ----------------");
    await this.cardSaveAccess();
    await this.cardSaveShare();
    await this.cardLotteryNum();
  }
  async ["commonTask"]() {
    $.log("---------------- 集合任务 ----------------");
    for (let _0x32c9e3 of _0x560dbc) {
      $.log("============== " + _0x32c9e3.name + " ==============");
      if (_0x32c9e3.taskIdKeys.length > _0x4d20ef) {
        const _0xb3835a = {
          "cubePageId": _0x32c9e3.cubePageId,
          "taskIdKeys": []
        };
        for (let _0x2e9cef of _0x32c9e3.taskIdKeys) {
          _0xb3835a.taskIdKeys.push(_0x2e9cef);
          _0xb3835a.taskIdKeys.length >= _0x4d20ef && (await this.getUserTasks(_0xb3835a), _0xb3835a.taskIdKeys = []);
        }
        if (_0xb3835a.taskIdKeys.length > 0) {
          await this.getUserTasks(_0xb3835a);
        }
      } else {
        await this.getUserTasks(_0x32c9e3);
      }
    }
  }
  async ["userTask"]() {
    $.log("\n---------------- 账号[" + this.index + "] ----------------", {"notify": true});
    if (!(await this.getLoginedUserInfo())) {
      return;
    }
    await this.appTtsqTask();
    await this.wxSqSignTask();
    await this.wxSqsqTask();
    await this.commonTask();
    await this.appMrzqTask();
    await this.appCyfTask();
  }
}
!(async () => {
  if (!(await _0x586be7())) {
    return;
  }
  await _0x39fdab();
  //UserClass
  $.read_env(_0x4edad2,ckNames,envSplitor);
  for (let _0x6fabcf of $.userList) {
    await _0x6fabcf.userTask();
  }
})().catch(_0x559840 => $.log(_0x559840)).finally(() => $.exitNow());
async function _0x586be7() {
  let _0x53d747 = false;
  try {
    const _0x1f0a59 = {
      "fn": "auth",
      "method": "get",
      "url": _0x298947
    };
    let {
      statusCode: _0x51bd83,
      result: _0x3ec886
    } = await _0x2097af.request(_0x1f0a59);
    if (_0x51bd83 != 200) {
      return Promise.resolve();
    }
    if (_0x3ec886?.["code"] == 0) {
      _0x3ec886 = JSON.parse(_0x3ec886.data.file.data);
      //if (_0x3ec886?.["commonNotify"] && _0x3ec886.commonNotify.length > 0) $.log(_0x3ec886.commonNotify.join("\n") + "\n", {"notify": true});
      //_0x3ec886?.["commonMsg"] && _0x3ec886.commonMsg.length > 0 && $.log(_0x3ec886.commonMsg.join("\n") + "\n");
      if (_0x3ec886[_0x52c339]) {
        let _0x5b2052 = _0x3ec886[_0x52c339];
        _0x5b2052.status == 0 ? _0x3e0dfd >= _0x5b2052.version ? (_0x53d747 = true, 
          /*$.log(_0x5b2052.msg[_0x5b2052.status]),*/ $.log(_0x5b2052.updateMsg), $.log("现在运行的脚本版本是：" + _0x3e0dfd + "，最新脚本版本：" + _0x5b2052.latestVersion)) : $.log(_0x5b2052.versionMsg) : $.log(_0x5b2052.msg[_0x5b2052.status]);
      } else {
        $.log(_0x3ec886.errorMsg);
      }
    }
  } catch (_0x2c479e) {
    $.log(_0x2c479e);
  } finally {
    return _0x53d747;
  }
}
async function _0x39fdab() {
  let _0x37255c = false;
  try {
    const _0x49c9f5 = {
      "fn": "auth",
      "method": "get",
      "url": _0x5c9df6
    };
    let {
      statusCode: _0x4b0f67,
      result: _0x7dd38
    } = await _0x2097af.request(_0x49c9f5);
    if (_0x4b0f67 != 200) {
      return Promise.resolve();
    }
    if (_0x7dd38?.["code"] == 0) {
      _0x7dd38 = JSON.parse(_0x7dd38.data.file.data);
      _0x178c4e = _0x7dd38?.["inviteCode"] || _0x178c4e;
      for (let _0x32fca8 of _0x7dd38?.["mrzqTaskId_all"] || []) {
        !_0x2a4572.includes(_0x32fca8) && _0x2a4572.push(_0x32fca8);
      }
      for (let _0x23a6d9 of _0x7dd38?.["commonTaskConf"] || []) {
        _0x560dbc.filter(_0x4088b9 => _0x4088b9.name == _0x23a6d9.name)?.["length"] == 0 && _0x560dbc.push(_0x23a6d9);
      }
      if (_0x7dd38?.["gundomConfV4"]?.["length"]) {
        _0x116ef9 = _0x7dd38.gundomConfV4;
      }
    }
  } catch (_0x2c98ac) {
    $.log(_0x2c98ac);
  } finally {
    return _0x37255c;
  }
}