/*
美团

领外卖券，和一些可兑换现金到美团钱包的任务

打开微信-美团团购小程序或美团/美团外卖APP捉包
青龙把*.meituan.com包里的userId(可选，用于区别多账号捉包),token填到MT_CK里，多账号换行或者@隔开。格式：
export MT_CK='userId=12345678&token=ccccccccccccccccc'
userId可以删掉不填

变量:
MT_CK: 必填，账号cookie，多账号换行或者@或者&隔开，格式: userId=12345678&token=ccccccccccccccccc
meituanNotify：可选，推送开关，填0为不推送，填1或其他推送。默认为0
meituanDrawKeyword：可选，抽奖的关键词，留空的话就不抽奖。默认为空
meituanPosition： 可选，虚拟定位坐标，注意长度，格式: 113233330,23166670 (如113.233330,23.166670需要转换为113233330,23166670，即保留6位小数点)

cron: 26 0,7-21/2 * * *

重写：(打开美团APP)
[task_local]
#美团
26 0,7-21/2 * * * https://raw.githubusercontent.com/leafTheFish/DeathNote/main/meituan.js, tag=美团, enabled=true
[rewrite_local]
http://gaea.meituan.com/mop/entry/forbidden/resource url script-request-header https://raw.githubusercontent.com/leafTheFish/DeathNote/main/meituan.js
*/
const {TYQLDG_API,CkToJson,JsonToCK}=require('./basic/tyqldg');

const $ = new Env("美团");
let envSplitor = ["\n", "&", "@"],//支持多种分割，但要保证变量里不存在这个字符
envPrefix = "MT_",
env_name="MT_CK",
eid=0,
    _0x2ab163,
    _0x11337c,
    _0x14d34e,
    _0x7c8055 = "1140" + $.randomString(5, "0123456789") + ",225" + $.randomString(5, "0123456789");
const _0x44f917 = "\"i2HKpOmsirDPavelVfQBZN8/5kOBesUP9GCPlVqsCpwKlBfnt3lxxF9P4M4rZ5z77Q7v55DJz2I0qyKMRTk8FPBz+TY6oJ+N1ZYZJe8VWMTlI/K0qEKE1EShYO5pN0mINUo4j4xhjFu/mqthmN7smCzzXR2/JZMa0B1e7/MtIIX5xYdr0zN8CeuUZK5i4iaveQcLy7EiBcFjadfEwQuViUMEC6N4JvO7eet/7ctdd+4BgIuLoK+4dCnJfhMEt/4vLfQfD+On2Tof34z+pwJhZhqWWUxMKJfecH6Kf6mYKRlBgomm9v4DT1JGR+ryMxCGT6kg0p0fFnCd87xi3kzgPpzKtzF0cw4sSnMgzaBFNFYqAuDdvsOphkuKaYVPmRkcV/oaelAc02IK4GHc1voNzY1ntC6f1r4Z+o5jluX7QOweHXno3FjveUk2HL4yIbpTmTVO/SXwfx3sb3XgeRezUF4/g8tPIuW+ZR7xXX4cJiDX3rcKg+9KgQvSmOiUtV1hZPgbYQLP9pCH5WciMHzMFzz3Mf4Idx5uzXO2W1R2Ch68yzAwOYUSr2LSABGLXE9+3fDzewIGmlNY0PEqok+yBmwIOBldPkILoms+sXDZMR+m+6S1NjQw2ovLGpvJhvxXT6I5vZJUs6paa6zMSCWQ24//sRsh0RwCSwpx+27PHU4cTdM9st82Ubb42612n6k3CaGGncWscaoeqzsjQQz4z7ed7Dj4TcR5rj905O70EeRdfdxaFXcmFGLlQcdSuv+NAB2o2uMeNBVYhRR6oiuxw49F6KkskCf3QiZNEEdB4Mipq4tnQfaAfqECp7X2JaSgGDplLQ0X9NuC12FuaWLmYDGDW6qR+76mfA+ZwkgnynFfLQAlOq6DSdbDVW2xSBmbK4i0v4L4T6SS8V6JuazOGHTK7aZP6srWGVoLE3FM7oo6dI3RsW7HK5BLERyEggYHozPn9+qWzDNYSjSNAdcYryjplDS30baqLBmiGIa/1JuB0P7OrBcx0kznibWDjPiyBQswu/CMxQV/eRLjJoNLjlPsv87GT7kYJB89SYE4Z313fm9FkNR2ywG4feSUFO/AO3hDV/HMLeA87FcBW8XnQklc0S0azqkTBTahrJRUUtUl9CaGA4OD7BNTti7fxRCOdhDj37C3w6JrGGn5SHOQBgJk9/LtplzUFT0t406zqEux5HlXP+MbgtbzSddne77P4FUyRH3jtRuOBwp6MntF4eQ8nG5INlTNaEGimkm6c9Ehu2Wa5h2RJTCUBhDLxBOGCkb+vTkfM/ut5xuR/Z9rXwDIqDKBtdZPBfLm/fjUb/Gsxk7dfjlXwcuGomUWaapvwxOQUGGUfY/oEXfo+VPHnKKtBLt9ZT46/kfzra0cdeiCFy+16cT+jfanj/QW+fWdLqXlvcHjvXacEJv1ME7g9657hgF6YY7SsCKUIk4S9QTdt7bykf0384/HsuBg/jnh\"";
let _0x5dd227 = ($.isNode() ? process.env.meituanDrawKeyword : $.getdata("meituanDrawKeyword")) || "",
    _0xc59899 = ($.isNode() ? process.env.meituanNotify : $.getdata("meituanNotify")) || 0,
    MT_CK = ($.isNode() ? process.env[env_name] : $.getdata(env_name)) || "",
    _0x816848 = ($.isNode() ? process.env.meituanPosition : $.getdata("meituanPosition")) || _0x7c8055,
    _0x4fe04f = ($.isNode() ? process.env.meituanFingerprint : $.getdata("meituanFingerprint")) || _0x44f917,
    cookiesArr = [],
    _0x1e2331 = 0,
    _0x25c2e9 = 0;
var _0x1e75f5 = {
    "ttsq": "9khEyiqt2tKFyZSjvqphkQ",
    "ttsqqd": "_p2QL78Fao6bsexHzofp-w",
    "sqqd": "06hFC-C1WGiAQYUGya5QJA",
    "sqqd2": "5IFmI13NeO7kRPW1jUj7Lw",
    "xsqhb": "Gh1tkq-wvFU2xEP_ZPzHPQ"
};
var _0x5ad599 = {
    "sqqd": 1001,
    "ttsq": 1000,
    "ttsqqd": 1000
};
var _0xe252cb = {
    "sqqd": 258648,
    "ttsqqd": 72209,
    "ttsqqdCoupon": 189885
};
let _0x47f950 = 100219,
    _0x509ff9 = 184008;
const _0x1b070f = {
    "v1": "639aa13035",
    "v2": "9587270bb85c"
};
let _0x51608a = _0x816848.split(","),
    _0x51f6ce = _0x51608a[0],
    _0x182382 = _0x51608a[1],
    _0x417218 = parseInt(_0x51f6ce) / 1000000,
    _0x4415f2 = parseInt(_0x182382) / 1000000;
const _0x37bd01 = {
    "gundamId": 20625,
    "grabKey": "8118D12974B546C6A56D961286B08EA9",
    "defaultGrabKey": "E28198A627324F85B4FF89FA10D093EC",
    "actualLongitude": _0x51f6ce,
    "actualLatitude": _0x182382,
    "needTj": true,
    "couponConfigIdOrderCommaString": "454458979,457894980,457898696,457896862,454504717,454544651,454543164,454506523,454464935",
    "couponAllConfigIdOrderString": "",
    "rubikCouponKey": ""
};
const _0xca2d91 = {
    "gundamId": 165001,
    "grabKey": "AD317E383B064F84ACE3A8DCDC8C2572,84EF5089EDD7412C8A19E0732D43C6A3,901DC3575DD64CE794B0FB2837741686,CE755ADFE77B4CFE8F1B38F9F952DD5E,34BCA492BAEA4D2E8CD0394B31D5CB26",
    "defaultGrabKey": "E28198A627324F85B4FF89FA10D093EC",
    "actualLongitude": _0x51f6ce,
    "actualLatitude": _0x182382,
    "needTj": true,
    "couponConfigIdOrderCommaString": "",
    "couponAllConfigIdOrderString": ""
};
const _0x4f7807 = {
    "gundamId": 111535,
    "grabKey": "B7F5515BE076436A804BDDFBF273A1D2",
    "defaultGrabKey": "B7F5515BE076436A804BDDFBF273A1D2",
    "actualLongitude": _0x51f6ce,
    "actualLatitude": _0x182382,
    "needTj": true,
    "couponConfigIdOrderCommaString": "",
    "couponAllConfigIdOrderString": "",
    "rubikCouponKey": ""
};
const _0x4593e7 = {
    "gundamId": 282986,
    "grabKey": "4F695512504F476581B24DEFCDB9CADC,7AEC5EC7C32248A78297CC5313B8635D,8F901BB5700E480E86CD37348FCF1664,9673F7C692E84D8EA69BE3AE1C26D8CD",
    "defaultGrabKey": "",
    "actualLongitude": _0x51f6ce,
    "actualLatitude": _0x182382,
    "needTj": true,
    "couponConfigIdOrderCommaString": "",
    "couponAllConfigIdOrderString": "",
    "rubikCouponKey": ""
};
let _0x1e0f56 = [_0x37bd01, _0xca2d91, _0x4f7807, _0x4593e7],
    _0x428978 = ["FDEB1AD842FA43448D4268A204E797BE", "367E29A7374244E58CE7222865734B31", "8499AFC6BE4E4D63BF0A73E5F28EC016"],
    _0x12b7b7 = ["FDEB1AD842FA43448D4268A204E797BE"],
    _0x29b8bc = ["154038A50CCF447A9D19EE0044184D73", "104C82C279DF417C8597D8082DF62257", "D78770DA2D224116A28EA9C3448FED5B"],
    _0x5ae464 = "NnOIp-QOs8SiYF1dcSlL5r8phPrCf6qkH7evMyjIoup2NXxNCLYcBbd3bqpv2X2IwEEJb5qoWglfkm_BFMSF_P37OScxhIfzAWgvmEjhdwJlyDXeFPZ0XwraweVp2EDxHrRbGOZeH8QVXwCoLxaUGBeOtuA0cEaD1RsGuHC_D2E",
    _0x2312f4 = "",
    _0x4cb509 = {},
    _0x4926ff = {},
    _0x11b552 = {};
const _0x1755b0 = {
    "name": "小程序-每日赚钱",
    "taskIdKeys": ["1fff834702"],
    "cubePageId": 184008
};
const _0x586084 = {
    "name": "APP-团团神券-许愿卡",
    "taskIdKeys": ["1309a6ab9c", "ea4218ea27", "5aab034f17"],
    "cubePageId": 88888889
};
const _0x39c62c = {
    "name": "APP-团团神券-魔法石",
    "taskIdKeys": ["a941c20450", "cdcc8a8195", "eb03206b17", "5c919dfbd8", "8f53427c39", "f749a47257", "4d609dde67", "3e5cbc8120"],
    "cubePageId": 88888889
};
const _0x4bf6a8 = {
    "name": "APP-连续签到-1",
    "taskIdKeys": ["7317a4bd81"],
    "cubePageId": 168199
};
const _0x1c7b8c = {
    "name": "APP-连续签到-2",
    "taskIdKeys": ["d980fa6b5c", "f7c63644d4", "5cb453b183"],
    "cubePageId": 189459
};
const _0x1f355e = {
    "wxMrzq": _0x1755b0,
    "appTtsqStone": _0x586084,
    "appTtsqCard": _0x39c62c,
    "app7day1": _0x4bf6a8,
    "app7day2": _0x1c7b8c
};
const _0x4db903 = {
    "App": "美团APP",
    "Wx": "微信小程序"
};
let _0x3f1e6e = [];
const _0x294c48 = {
    "NORMAL_CARD": "普通卡",
    "SENIOR_CARD": "稀有卡"
};
const _0x46b865 = {
    "EAT": "吃",
    "LIVE": "住",
    "WALK": "行",
    "TRAVEL": "游",
    "SHOP": "购",
    "ENTERTAIN": "娱"
};
let _0x2bfd19 = [
    {
        "name": "签到",
        "taskGroupKey": "coin_sign",
        "taskKey": "sign_day",
        "taskType": 10,
        "awardUuids": ""
    },
    {
        "name": "浏览外卖",
        "taskGroupKey": "coin_view",
        "taskKey": "waimai_view",
        "taskType": 10,
        "awardUuids": "perAward-1551117023273074714"
    },
    {
        "name": "浏览QQ充值",
        "taskGroupKey": "coin_view",
        "taskKey": "qq_view",
        "taskType": 10,
        "awardUuids": "perAward-1551119410285301819"
    },
    {
        "name": "浏览流量充值",
        "taskGroupKey": "coin_view",
        "taskKey": "flow_view",
        "taskType": 10,
        "awardUuids": "perAward-1551121142243356687"
    },
    {
        "name": "浏览买菜",
        "taskGroupKey": "cz_mc_view",
        "taskKey": "cz_maicai_page",
        "taskType": 10,
        "awardUuids": "perAward-1551117642033745986"
    }
],
    _0x444752 = 5,
    _0x4009bd = 200,
    _0x220d85 = 800,
    _0xf1dcf5 = 1.13,
    _0x5c7c58 = 0,
    _0x46f152 = "https://127.0.0.1/";


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
    //$.logAndNotify("账号[" + this.index + "]获取信息失败，token可能失效: " + _0x4914e7.error);
}

class _0x153f00 {
    constructor(ck) {
        this.index = ++_0x1e2331;
        this.name = this.index;
        this.valid = false;
        Object.assign(this, CkToJson(ck));//$.str2json(ck)
        this.mobile = "";
        this.unoinid = $.randomString(51);
        this.uuid = this.uuid || "0000000000000" + this.unoinid.toUpperCase();
        this.cookie = {
            "token": this.token,
            "uuid": this.uuid
        };
        this.taskName = "未开始";
        this.ddjyqAccessToken = "";
        this.accountInfo = {};
        this.coupon = [];
        this.drawList = [];
        const _0x554ac = {
            "NORMAL_CARD": 0,
            "SENIOR_CARD": 0,
            "TOTAL": 0
        };
        const _0x1da433 = {
            "cardList": _0x554ac,
            "exchangeChance": false
        };
        this.card = _0x1da433;
        const _0x4ef3cb = {
            "stoneList": {},
            "exchangeChance": false
        };
        this.stone = _0x4ef3cb;
    }
    ["getRiskForm"](_0x5c4e41, _0x4d2de4) {
        const _0x2dc51d = {
            "sqLbs": "0,0",
            "YAIAv": "12.0.202"
        };
        const _0x13e0ed = {
            "userid": this.userId,
            "uuid": this.uuid,
            "touchPoint": _0x2dc51d.sqLbs,
            "fingerprint": _0x4fe04f,
            "h5Fingerprint": "",
            "location": _0x4415f2 + "_" + _0x417218,
            "platform": 5,
            "version": _0x2dc51d.YAIAv,
            "campaignPlatform": 3,
            "isVisitedPage": 0,
            "partner": 2,
            "cubeCampaignId": _0x5c4e41,
            "cubeCampaignName": _0x4d2de4,
            "app": 0,
            "sourceUserid": 0
        };
        return _0x581fa7.encode(JSON.stringify(_0x13e0ed));
    }
    async ["commonGetUserTasks"](_0x1aff9b) {
        let _0x26ca8d = "https://cube.meituan.com/topcube/api/toc/task/getUserTasks",
            _0x7f462c = "{\"userId\":\"" + this.userId + "\",\"userType\":\"MEI_TUAN\",\"uuid\":\"" + this.uuid + "\",\"taskIdKeys\":" + JSON.stringify(_0x1aff9b.taskIdKeys) + "}",
            _0x2bca25 = _0x27b41d(_0x26ca8d, this.cookie, _0x7f462c);
        await _0x381231("post", _0x2bca25);
        let _0x54d4cb = _0x2ab163;
        if (!_0x54d4cb) {
            return;
        }
        if (_0x54d4cb.code == 0) {
            for (let _0x2c41eb of _0x54d4cb.data) {
                if (_0x2c41eb.code != 1007) {
                    if (!_0x2c41eb.taskRuleVos || _0x2c41eb.taskRuleVos.length == 0) {
                        console.log("任务[" + _0x2c41eb.title + "] -- " + _0x2c41eb.msg);
                        continue;
                    }
                    if (_0x2c41eb.title.indexOf("下单") > -1) {
                        continue;
                    }
                    let _0x44ac35 = _0x2c41eb.extend ? true : false;
                    if (_0x44ac35 && _0x2c41eb.extend.isSignInToday == 1) {
                        console.log("任务[" + _0x2c41eb.title + "] -- 已完成");
                        continue;
                    }
                    for (let _0x596bfb of _0x2c41eb.taskRuleVos) {
                        if (_0x596bfb.status == "PRIZE_SUCC" || _0x596bfb.status == "DELETE" || _0x596bfb.status == "PRIZE_FAIL") {
                            !_0x44ac35 && console.log("任务[" + _0x2c41eb.title + "] -- 已完成");
                        } else {
                            if (_0x596bfb.status == "CAN_RECEIVE") {
                                console.log("任务[" + _0x2c41eb.title + "] -- 可领取奖励");
                                await this.commonUpdateUserTask(_0x2c41eb.taskIdKey, _0x596bfb.taskRuleIdKey, _0x1aff9b.cubePageId, _0x2c41eb.taskNo, _0x596bfb.taskRuleNo);
                                if (_0x44ac35) {
                                    break;
                                }
                            } else {
                                console.log("任务[" + _0x2c41eb.title + "] -- 未完成");
                                let _0x57235a = JSON.parse(_0x596bfb.ruleConfig);
                                if (_0x57235a.limitTime) {
                                    let _0x2477ca = _0x596bfb.preCompleteTime,
                                        _0xc18349 = _0x57235a.limitTime,
                                        _0x85022 = _0x2477ca + _0xc18349 * 1000,
                                        _0x34ed08 = _0x596bfb.currentTime;
                                    if (_0x34ed08 >= _0x85022) {
                                        await this.commonStartUserTask(_0x596bfb.taskIdKey, _0x596bfb.taskRuleIdKey, _0x1aff9b.cubePageId);
                                    } else {
                                        let _0x19b0fe = new Date(_0x85022);
                                        console.log("[" + _0x2c41eb.title + "]任务冷却中，" + $.padStr(_0x19b0fe.getHours(), 2) + ":" + $.padStr(_0x19b0fe.getMinutes(), 2) + ":" + $.padStr(_0x19b0fe.getSeconds(), 2) + "后可再次完成");
                                    }
                                    _0x2477ca = _0x34ed08;
                                } else {
                                    if (_0x57235a.staySeconds) {
                                        let _0x5e8881 = _0x57235a.staySeconds || 0;
                                        await this.commonStartUserTask(_0x596bfb.taskIdKey, _0x596bfb.taskRuleIdKey, _0x1aff9b.cubePageId, _0x5e8881);
                                    } else {
                                        if (_0x57235a.timeLimits) {
                                            for (let _0x2ebdb7 of _0x57235a.timeLimits) {
                                                let _0xf9207b = _0x2ebdb7.startTime / 3600 / 1000,
                                                    _0x5d2db5 = _0x2ebdb7.endTime / 3600 / 1000,
                                                    _0x5847f1 = new Date().getHours();
                                                _0x5847f1 >= _0xf9207b && _0x5847f1 < _0x5d2db5 ? await this.commonStartUserTask(_0x596bfb.taskIdKey, _0x596bfb.taskRuleIdKey, _0x1aff9b.cubePageId) : console.log("[" + _0x2c41eb.title + "]任务未到时间，" + _0xf9207b + "到" + _0x5d2db5 + "点间可完成");
                                            }
                                        } else {
                                            await this.commonStartUserTask(_0x596bfb.taskIdKey, _0x596bfb.taskRuleIdKey, _0x1aff9b.cubePageId);
                                        }
                                    }
                                }
                                if (_0x44ac35) {
                                    break;
                                }
                            }
                        }
                    }
                } else {
                    console.log("任务[" + _0x2c41eb.title + "] -- " + _0x2c41eb.msg);
                }
            }
        } else {
            console.log("查询列表失败: " + _0x54d4cb.msg);
        }
    }
    async ["commonStartUserTask"](_0xcf3eb6, _0x53ee85, _0x350648, _0x246663) {
        let _0xc47ee3 = "https://cube.meituan.com/topcube/api/toc/task/startUserTask?k=" + _0x350648,
            _0x3e3826 = "{\"taskIdKey\":\"" + _0xcf3eb6 + "\",\"taskRuleIdKey\":\"" + _0x53ee85 + "\",\"cubePageId\":" + _0x350648 + ",\"userId\":\"" + this.userId + "\",\"uuid\":\"" + this.uuid + "\",\"mini_program_token\":\"" + this.token + "\",\"userType\":\"MEI_TUAN\",\"sourceType\":\"MEI_TUAN\",\"cityId\":30,\"riskForm\":\"" + this.getRiskForm(_0x350648, "") + "\"}",
            _0x304aa5 = _0x27b41d(_0xc47ee3, this.cookie, _0x3e3826);
        await _0x381231("post", _0x304aa5);
        let _0x3bdbea = _0x2ab163;
        if (!_0x3bdbea) {
            return;
        }
        _0x3bdbea.code == 0 ? (_0x246663 > 0 && (console.log("等待" + _0x246663 + "秒完成任务..."), await $.wait(_0x246663 * 1000 + 1000)), await this.commonUpdateUserTask(_0xcf3eb6, _0x53ee85, _0x350648, _0x3bdbea.taskNo, _0x3bdbea.taskRuleNo, _0x3bdbea.actionNo)) : (console.log("完成任务失败: " + _0x3bdbea.msg), _0x3bdbea?.["msg"]?.["includes"]("活动已完成") && (await this.commonUpdateUserTask(_0xcf3eb6, _0x53ee85, _0x350648, _0x3bdbea.taskNo, _0x3bdbea.taskRuleNo, _0x3bdbea.actionNo)));
    }
    async ["commonUpdateUserTask"](_0x9fad16, _0x559536, _0x498e40, _0x1e28bf, _0x3beadc, _0x134606) {
        let _0x346299 = "https://cube.meituan.com/topcube/api/toc/task/updateUserTask?k=" + _0x498e40,
            _0x839494 = "{\"taskIdKey\":\"" + _0x9fad16 + "\",\"taskRuleIdKey\":\"" + _0x559536 + "\",\"cubePageId\":" + _0x498e40 + ",\"userId\":\"" + this.userId + "\",\"uuid\":\"" + this.uuid + "\",\"mini_program_token\":\"" + this.token + "\",\"userType\":\"MEI_TUAN\",\"sourceType\":\"MEI_TUAN\",\"cityId\":30,\"taskNo\":\"" + _0x1e28bf + "\",\"taskRuleNo\":\"" + _0x3beadc + "\",\"actionNo\":\"" + _0x134606 + "\",\"riskForm\":\"" + this.getRiskForm(_0x498e40, "") + "\"}",
            _0x493964 = _0x27b41d(_0x346299, this.cookie, _0x839494);
        await _0x381231("post", _0x493964);
        let _0x57d7c9 = _0x2ab163;
        if (!_0x57d7c9) {
            return;
        }
        if (_0x57d7c9.code == 0) {
            if (_0x57d7c9?.["prizeList"]?.["length"]) {
                for (let _0x57fd90 of _0x57d7c9.prizeList || []) {
                    if (_0x57fd90?.["sendCouponResultList"]?.["length"]) {
                        let _0x2d04a6 = [];
                        for (let _0x140626 of _0x57fd90.sendCouponResultList) {
                            _0x2d04a6.push((_0x140626.useCondition || "无门槛") + "减" + _0x140626.couponValue + _0x140626.couponTypeDesc);
                        }
                        console.log("领取任务奖励获得" + _0x2d04a6.join("，"));
                    } else {
                        if (_0x57fd90?.["sendMagicStoneResult"]?.["stoneList"]?.["length"]) {
                            let _0x58ce30 = [];
                            for (let _0x399865 of _0x57fd90.sendMagicStoneResult.stoneList) {
                                _0x58ce30.push(_0x399865.amount + "个[" + (_0x46b865[_0x399865.magicStonePrizeType] || _0x399865.magicStonePrizeType) + "]");
                            }
                            console.log("领取任务奖励获得" + _0x58ce30.join("，"));
                        } else {
                            if (_0x57fd90?.["sendMagicCardResult"]?.["cardList"]?.["length"]) {
                                let _0x42ab19 = [];
                                for (let _0x204786 of _0x57fd90.sendMagicCardResult.cardList) {
                                    _0x42ab19.push(_0x204786.amount + "张[" + (_0x294c48[_0x204786.type] || _0x204786.type) + "]");
                                }
                                console.log("领取任务奖励获得" + _0x42ab19.join("，"));
                            } else {
                                console.log("领取任务奖励获得" + _0x57fd90.number + "金币");
                            }
                        }
                    }
                }
            } else {
                await this.commonSendTaskPrize(_0x9fad16, _0x559536, _0x498e40, _0x1e28bf, _0x3beadc);
            }
        } else {
            console.log("领取任务奖励失败: " + _0x57d7c9.msg);
        }
    }
    async ["commonSendTaskPrize"](_0x11014c, _0x1d639d, _0x2b1a0f, _0x20ca93, _0x565440) {
        let _0xc443f8 = "https://cube.meituan.com/topcube/api/toc/task/sendTaskPrize?k=" + _0x2b1a0f,
            _0x62307d = "{\"userId\":" + this.userId + ",\"userType\":\"MEI_TUAN\",\"uuid\":\"" + this.uuid + "\",\"taskIdKey\":\"" + _0x11014c + "\",\"taskRuleIdKey\":\"" + _0x1d639d + "\",\"taskNo\":\"" + _0x20ca93 + "\",\"taskRuleNo\":\"" + _0x565440 + "\",\"cubePageId\":0,\"riskForm\":\"" + this.getRiskForm(_0x2b1a0f, "") + "\",\"mini_program_token\":\"" + this.token + "\"}",
            _0x72ef24 = _0x27b41d(_0xc443f8, this.cookie, _0x62307d);
        await _0x381231("post", _0x72ef24);
        let _0x424f0f = _0x2ab163;
        if (!_0x424f0f) {
            return;
        }
        if (_0x424f0f.code == 0) {
            for (let _0x211796 of _0x424f0f.prizeList || []) {
                if (_0x211796?.["sendCouponResultList"]?.["length"]) {
                    let _0x3a6238 = [];
                    for (let _0x5c654f of _0x211796.sendCouponResultList) {
                        _0x3a6238.push((_0x5c654f.useCondition || "无门槛") + "减" + _0x5c654f.couponValue + _0x5c654f.couponTypeDesc);
                    }
                    console.log("领取任务奖励获得" + _0x3a6238.join("，"));
                } else {
                    if (_0x211796?.["sendMagicStoneResult"]?.["stoneList"]?.["length"]) {
                        let _0x1666da = [];
                        for (let _0x3d401d of _0x211796.sendMagicStoneResult.stoneList) {
                            _0x1666da.push(_0x3d401d.amount + "个[" + (_0x46b865[_0x3d401d.magicStonePrizeType] || _0x3d401d.magicStonePrizeType) + "]");
                        }
                        console.log("领取任务奖励获得" + _0x1666da.join("，"));
                    } else {
                        if (_0x211796?.["sendMagicCardResult"]?.["cardList"]?.["length"]) {
                            let _0x51aeb6 = [];
                            for (let _0x2170c2 of _0x211796.sendMagicCardResult.cardList) {
                                _0x51aeb6.push(_0x2170c2.amount + "张[" + (_0x294c48[_0x2170c2.type] || _0x2170c2.type) + "]");
                            }
                            console.log("领取任务奖励获得" + _0x51aeb6.join("，"));
                        } else {
                            console.log("领取任务奖励获得" + _0x211796.number + "金币");
                        }
                    }
                }
            }
        } else {
            console.log("领取任务奖励失败: " + _0x424f0f.msg);
        }
    }
    async ["getInfo"]() {
        let url = "https://open.meituan.com/user/v1/info?fields=id%2Cusername%2Cavatartype%2Cavatarurl%2Cnickname%2Cemail%2Ccity%2Ccityid%2Cmobile%2CisBindedMobile",
            _0x19b0e2 = "",
            _0x1347fe = _0x27b41d(url, this.cookie, _0x19b0e2);
        await _0x381231("get", _0x1347fe);
        let _0x2c48f = _0x2ab163;
        if (!_0x2c48f) {
            return;
        }
        if (_0x2c48f.error) {
            await expireNotify(this.userId,this.index);//$.logAndNotify
            console.log("账号[" + this.index + "]获取信息失败，token可能失效: " + _0x2c48f.error.message);
        } else {
            this.mobile = _0x2c48f.user.mobile;
            this.userId = _0x2c48f.user.id;
            this.name = _0x2c48f.user.username;
            this.valid = true;
            console.log("账户：" + this.name);
            console.log("手机：" + this.mobile);
            console.log("userId：" + this.userId);
        }
    }
    async ["getInfoFullPhoneNum"]() {
        let _0x411d14 = "https://i.meituan.com/wrapapi/getLoginedUserInfo?token=" + this.token,
            _0xb8ad25 = "",
            _0x109e51 = _0x27b41d(_0x411d14, this.cookie, _0xb8ad25);
        await _0x381231("get", _0x109e51);
        let _0x4914e7 = _0x2ab163;
        if (!_0x4914e7) {
            return;
        }
        if (_0x4914e7.error) {
            await expireNotify(this.userId,this.index);
            console.log("账号[" + this.index + "]获取信息失败，token可能失效: " + _0x4914e7.error);
        } else {
            this.mobile = _0x4914e7.mobile;
            this.userId = _0x4914e7.userId;
            this.name = _0x4914e7.nickName;
            this.valid = true;
            console.log("账号[" + this.index + "][" + this.mobile + "]登录成功");
        }
    }
    async ["ttsqGundamSign"]() {
        let _0x375b9b = "https://mediacps.meituan.com/gundam/sign",
            _0x5eb298 = "",
            _0x106cf1 = _0x27b41d(_0x375b9b, this.cookie, _0x5eb298);
        await _0x381231("get", _0x106cf1);
    }
    async ["ttsqCoupon"](_0x842e6) {
        let _0x5b2006 = "https://mediacps.meituan.com/gundam/gundamGrabV3",
            _0x4ced65 = _0x27b41d(_0x5b2006, this.cookie, _0x842e6);
        await _0x381231("post", _0x4ced65);
        let _0x117902 = _0x2ab163;
        if (!_0x117902) {
            return;
        }
        if (_0x117902.code == 0) {
            for (let _0x226d6a of _0x117902.data.allCoupons) {
                let _0x4f6404 = "[" + _0x226d6a.couponName + "]：" + _0x226d6a.amountLimit + "减" + _0x226d6a.couponAmount;
                this.coupon.push(_0x4f6404);
                console.log(_0x4f6404);
            }
        } else {
            let _0x26fce2 = _0x117902.msg || _0x117902.message;
            console.log("领券失败: " + _0x26fce2);
        }
    }
    async ["ttsqInviteFetchCoupon"]() {
        let _0x514d79 = "https://promotion-waimai.meituan.com/invite/fetchcoupon?ctype=wxapp&fpPlatform=13&isMini=1&token=" + this.token + "&inviteCode=" + _0x5ae464,
            _0x565a7c = "",
            _0x13bddd = _0x27b41d(_0x514d79, this.cookie, _0x565a7c);
        await _0x381231("get", _0x13bddd);
        let _0x464aec = _0x2ab163;
        if (!_0x464aec) {
            return;
        }
        if ((_0x464aec.code == 0 || _0x464aec.code == 1) && (_0x464aec.subcode == 0 || _0x464aec.subcode == 2)) {
            for (let _0x22706a of _0x464aec.data.couponList) {
                let _0x3100a6 = "[" + _0x22706a.couponTitle + "]：" + _0x22706a.priceLimit + "减" + _0x22706a.couponValue;
                this.coupon.push(_0x3100a6);
                console.log(_0x3100a6);
            }
        } else {
            let _0x4ee359 = _0x464aec.msg || _0x464aec.message;
            console.log("领券失败: " + _0x4ee359);
        }
    }
    async ["ttsqLotteryFetchCoupon"](_0x3627c5) {
        let _0x2afdbc = "https://promotion.waimai.meituan.com/lottery/limitcouponcomponent/fetchcoupon?couponReferId=" + _0x3627c5 + "&actualLng=" + _0x417218 + "&actualLat=" + _0x4415f2 + "&geoType=2&gdPageId=222888&utmSource=70200&utmCampaign=wmsq-2132",
            _0x319848 = "",
            _0x1db5cc = _0x27b41d(_0x2afdbc, this.cookie, _0x319848);
        await _0x381231("get", _0x1db5cc);
        let _0xef96cb = _0x2ab163;
        if (!_0xef96cb) {
            return;
        }
        if (_0xef96cb.code == 0) {
            let _0x231d17 = "[" + _0xef96cb.data.couponName + "]：" + _0xef96cb.data.priceLimit + "减" + _0xef96cb.data.couponValue;
            this.coupon.push(_0x231d17);
            console.log(_0x231d17);
        } else {
            let _0x181dd6 = _0xef96cb.msg || _0xef96cb.message;
            console.log("领券失败: " + _0x181dd6);
        }
    }
    async ["ttsqMainpage"]() {
        let _0xdb49a3 = "https://marketing.waimai.meituan.com/o/wxapp/resource/position/tianJiang",
            _0x196d61 = "isJustLogin=false&openId=" + $.randomString(28) + "&userIdCanceled=0&uuidCanceled=0&lch=1001&wm_actual_latitude=" + _0x182382 + "&wm_actual_longitude=" + _0x51f6ce + "&waimai_sign=%2F&req_time=" + Date.now() + "&wm_logintoken=" + this.token + "&wm_appversion=8.6.8&wm_visitid=f006baf7-9a42-41e6-ad1c-7fdac138da70&wm_uuid=" + this.uuid + "&wm_dplatform=ios&wm_dversion=8.0.18&wm_dtype=iPhone%2012%3CiPhone13%2C2%3E&wm_ctype=wxapp",
            _0x51593e = _0x27b41d(_0xdb49a3, this.cookie, _0x196d61);
        _0x51593e.headers["Content-Type"] = "application/x-www-form-urlencoded";
        await _0x381231("post", _0x51593e);
        let _0xeeba85 = _0x2ab163;
        if (!_0xeeba85) {
            return;
        }
        if (_0xeeba85.code == 0) {
            if (_0xeeba85.data.couponInfo && _0xeeba85.data.couponInfo.coupons) {
                for (let _0x1f66e1 of _0xeeba85.data.couponInfo.coupons) {
                    let _0x4a41f9 = "[" + _0x1f66e1.couponDisplayName + "]: 满" + _0x1f66e1.orderAmountLimit + "减" + _0x1f66e1.couponAmountOrDiscount;
                    this.coupon.push(_0x4a41f9);
                    console.log(_0x4a41f9);
                }
            }
        } else {
            console.log("进入外卖首页失败: " + _0xeeba85.msg);
        }
    }
    async ["ttsqEntry"]() {
        let _0x188852 = "https://promotion.waimai.meituan.com/playcenter/common/v1/entry?activityViewId=" + _0x1e75f5.ttsq + "&actionCodes=" + _0x5ad599.ttsq + "&querySignupConfig=1&lat=" + _0x4415f2 + "&lng=" + _0x417218,
            _0x1210fd = "",
            _0x5982f6 = _0x27b41d(_0x188852, this.cookie, _0x1210fd);
        await _0x381231("get", _0x5982f6);
        let _0x5b46b5 = _0x2ab163;
        if (!_0x5b46b5) {
            return;
        }
        if (_0x5b46b5.code == 0) {
            if (_0x5b46b5.data.actionInfoList) {
                for (let _0x7e5580 of _0x5b46b5.data.actionInfoList) {
                    if (_0x7e5580.awardShowList) {
                        for (let _0x511876 of _0x7e5580.awardShowList) {
                            console.log("准备开天天神券宝箱...");
                            await this.ttsqDoAction();
                        }
                    }
                }
            }
        } else {
            console.log("进入天天神券页失败: " + _0x5b46b5.msg);
        }
    }
    async ["ttsqDoAction"]() {
        let _0x1e09c0 = "https://promotion.waimai.meituan.com/playcenter/common/v1/doaction",
            _0x3c1381 = "{\"activityViewId\":\"" + _0x1e75f5.ttsq + "\",\"actionCode\":" + _0x5ad599.ttsq + ",\"lat\":\"\",\"lng\":\"\",\"gdId\":26403,\"instanceId\":\"16469982716770.9182823538736367\",\"fpPlatform\":13,\"utmSource\":\"\",\"utmCampaign\":\"\",\"mtFingerprint\":\"\"}",
            _0x56e02a = _0x27b41d(_0x1e09c0, this.cookie, _0x3c1381);
        await _0x381231("post", _0x56e02a);
        let _0x1e1b02 = _0x2ab163;
        if (!_0x1e1b02) {
            return;
        }
        if (_0x1e1b02.code == 0) {
            for (let _0x5806e6 of _0x1e1b02.data.prizeInfoList) {
                let _0x1909cb = "[" + _0x5806e6.couponInfo.couponTitle + "]: 满" + _0x5806e6.couponInfo.priceLimit + "减" + _0x5806e6.couponInfo.couponValue;
                this.coupon.push(_0x1909cb);
                console.log(_0x1909cb);
            }
        } else {
            console.log("开天天神券宝箱失败: " + _0x1e1b02.msg);
        }
    }
    async ["ttsqSign"]() {
        let _0x3be88c = "https://promotion.waimai.meituan.com/playcenter/common/v1/treasurebox/signup/circle/record?isMini=1&ctype=wm_wxapp&isInDpEnv=0&activityViewId=" + _0x1e75f5.ttsq,
            _0x3d901b = "",
            _0x307511 = _0x27b41d(_0x3be88c, this.cookie, _0x3d901b);
        await _0x381231("get", _0x307511);
        let _0x1294df = _0x2ab163;
        if (!_0x1294df) {
            return;
        }
        if (_0x1294df.code == 0) {
            console.log("天天神券已连续签到" + _0x1294df.data.signUpNum + "天");
            for (let _0x2b2fab of _0x1294df.data.rewardStatus) {
                _0x2b2fab.status == 1 && (await this.ttsqBox(_0x2b2fab.stageDayNum));
            }
        } else {
            console.log("天天神券查询签到情况失败: " + _0x1294df.msg);
        }
    }
    async ["ttsqBox"](_0x49da1f) {
        let _0x337a27 = "https://promotion.waimai.meituan.com/playcenter/common/v1/treasurebox/signup/stage/reward/get?isMini=0&ctype=mtiphone&isInDpEnv=0",
            _0x410991 = "{\"activityViewId\":\"" + _0x1e75f5.ttsq + "\",\"actionCode\":" + _0x5ad599.ttsq + ",\"lat\":\"\",\"lng\":\"\",\"fpPlatform\":5,\"bizParams\":\"{\\\"signUpDayNum\\\":" + _0x49da1f + "}\",\"utmSource\":\"AppStore\",\"utmCampaign\":\"AgroupBgroupG\",\"gdId\":26403,\"mtFingerprint\":\"\"}",
            _0x589dcd = _0x27b41d(_0x337a27, this.cookie, _0x410991);
        await _0x381231("post", _0x589dcd);
        let _0x2d6490 = _0x2ab163;
        if (!_0x2d6490) {
            return;
        }
        if (_0x2d6490.code == 0) {
            for (let _0xc75340 of _0x2d6490.data.prizeInfoList) {
                let _0x233638 = "[" + _0xc75340.couponInfo.couponTitle + "]: 满" + _0xc75340.couponInfo.priceLimit + "减" + _0xc75340.couponInfo.couponValue;
                console.log("天天神券领取签到宝箱获得" + _0x233638);
                this.coupon.push(_0x233638);
            }
        } else {
            console.log("天天神券领取签到宝箱失败: " + _0x2d6490.msg);
        }
    }
    async ["ttsqMyCoupon"]() {
        let _0xbd6a2 = "https://promotion.waimai.meituan.com/playcenter/common/v1/mycoupons/shenquan?isMini=0&ctype=mtiphone&isInDpEnv=0",
            _0x35d15c = "",
            _0x5d3cfc = _0x27b41d(_0xbd6a2, this.cookie, _0x35d15c);
        await _0x381231("get", _0x5d3cfc);
        let _0x30abab = _0x2ab163;
        if (!_0x30abab) {
            return;
        }
        if (_0x30abab.code == 0) {
            console.log("\n卡包里的神券：");
            for (let _0x53fedc of _0x30abab.data) {
                let _0x43ac58 = _0x53fedc.couponName + ": 满" + _0x53fedc.orderAmountLimit / 100 + "减" + _0x53fedc.couponAmount / 100;
                console.log(_0x43ac58);
            }
        } else {
            console.log("天天神券查询失败: " + _0x30abab.msg);
        }
    }
    async ["ttsqAppTask"]() {
        await this.ttsqInviteFetchCoupon();
        await this.ttsqGundamSign();
        for (let _0x9dc876 of _0x1e0f56) {
            _0x9dc876.actualLongitude = _0x51f6ce;
            _0x9dc876.actualLatitude = _0x182382;
            await this.ttsqCoupon(JSON.stringify(_0x9dc876));
        }
        await this.ttsqSign();
        await this.ttsqEntry();
    }
    async ["xsqhbCorepage"]() {
        let _0x2fa4f5 = "https://i.waimai.meituan.com/cfeplay/playcenter/batchgrabred/corepage",
            _0x42a060 = "parActivityId=" + _0x1e75f5.xsqhb + "&wm_ctype=mtandroid&wm_latitude=&wm_longitude=&token=" + this.token,
            _0x221085 = _0x27b41d(_0x2fa4f5, this.cookie, _0x42a060);
        _0x221085.headers["Content-Type"] = "application/x-www-form-urlencoded";
        await _0x381231("post", _0x221085);
        let _0x58afb6 = _0x2ab163;
        if (!_0x58afb6) {
            return;
        }
        if (_0x58afb6.code == 0) {
            let _0x158c8e = _0x58afb6?.["data"]?.["batchId"];
            _0x158c8e && (await this.xsqhbDrawlottery(_0x158c8e));
        } else {
            let _0x3dfe9c = _0x58afb6.msg || _0x58afb6.message;
            console.log("限时抢红包进入主页失败: " + _0x3dfe9c);
        }
    }
    async ["xsqhbDrawlottery"](_0x3d234a) {
        let _0x5efd2c = "https://i.waimai.meituan.com/cfeplay/playcenter/batchgrabred/drawlottery",
            _0x8c108 = "parActivityId=" + _0x1e75f5.xsqhb + "&wm_ctype=mtandroid&wm_latitude=&wm_longitude=&token=" + this.token + "&batchId=" + _0x3d234a + "&isShareLink=true&propType=1&propId=2",
            _0x53999c = _0x27b41d(_0x5efd2c, this.cookie, _0x8c108);
        _0x53999c.headers["Content-Type"] = "application/x-www-form-urlencoded";
        await _0x381231("post", _0x53999c);
        let _0x24ec0b = _0x2ab163;
        if (!_0x24ec0b) {
            return;
        }
        if (_0x24ec0b.code == 0) {
            let _0x9294a9 = "[" + _0x24ec0b.data.name + "]：" + _0x24ec0b.data.priceLimitdesc + "减" + _0x24ec0b.data.showPriceNumberYuan;
            console.log(_0x9294a9);
            _0x24ec0b.data.showPriceNumber < 500 ? await this.xsqhbRedToBean(_0x3d234a) : this.coupon.push(_0x9294a9);
        } else {
            let _0x1fa3db = _0x24ec0b.msg || _0x24ec0b.message;
            console.log("限时抢红包抢红包失败: " + _0x1fa3db);
        }
    }
    async ["xsqhbAcceptRed"](_0x245de0) {
        let _0x106987 = "https://i.waimai.meituan.com/cfeplay/playcenter/batchgrabred/acceptRed",
            _0x4f6724 = "parActivityId=" + _0x1e75f5.xsqhb + "&wm_ctype=mtandroid&wm_latitude=&wm_longitude=&token=" + this.token + "&batchId=" + _0x245de0,
            _0x59f868 = _0x27b41d(_0x106987, this.cookie, _0x4f6724);
        _0x59f868.headers["Content-Type"] = "application/x-www-form-urlencoded";
        await _0x381231("post", _0x59f868);
        let _0x46052e = _0x2ab163;
        if (!_0x46052e) {
            return;
        }
        console.log(JSON.stringify(_0x46052e));
        if (_0x46052e.code == 0) {
            console.log("限时抢红包领取红包成功");
        } else {
            let _0x26ae33 = _0x46052e.msg || _0x46052e.message;
            console.log("限时抢红包领取红包失败: " + _0x26ae33);
        }
    }
    async ["xsqhbRedToBean"](_0x4cc5ff) {
        let _0x47174e = "https://i.waimai.meituan.com/cfeplay/playcenter/batchgrabred/redToBean",
            _0x2ad232 = "parActivityId=" + _0x1e75f5.xsqhb + "&wm_ctype=mtandroid&wm_latitude=&wm_longitude=&token=" + this.token + "&batchId=" + _0x4cc5ff,
            _0x4f8729 = _0x27b41d(_0x47174e, this.cookie, _0x2ad232);
        _0x4f8729.headers["Content-Type"] = "application/x-www-form-urlencoded";
        await _0x381231("post", _0x4f8729);
        let _0x2b2a1f = _0x2ab163;
        if (!_0x2b2a1f) {
            return;
        }
        console.log(JSON.stringify(_0x2b2a1f));
        if (_0x2b2a1f.code == 0) {
            console.log("限时抢红包转换红包豆成功");
        } else {
            let _0x510c8d = _0x2b2a1f.msg || _0x2b2a1f.message;
            console.log("限时抢红包转换红包豆失败: " + _0x510c8d);
        }
    }
    async ["xsqhbDrawPoints"]() {
        let _0x9776e6 = "https://i.waimai.meituan.com/cfeplay/playcenter/batchgrabred/drawPoints/v2",
            _0x1c0bfa = "token=" + this.token,
            _0x831a6b = _0x27b41d(_0x9776e6, this.cookie, _0x1c0bfa);
        _0x831a6b.headers["Content-Type"] = "application/x-www-form-urlencoded";
        await _0x381231("post", _0x831a6b);
        let _0x51d673 = _0x2ab163;
        if (!_0x51d673) {
            return;
        }
        if (_0x51d673.code == 0) {
            console.log("限时抢红包定时抢红包豆: " + _0x51d673.msg);
        } else {
            let _0x4e2c6f = _0x51d673.msg || _0x51d673.message || "可能已抢完或未到冷却时间";
            console.log("限时抢红包定时抢红包豆失败: " + _0x4e2c6f);
        }
    }
    async ["xsqhbSendTaskRedBean"]() {
        let _0x507c2d = "https://i.waimai.meituan.com/cfeplay/playcenter/batchgrabred/sendTaskRedBean",
            _0x32c2e0 = "parActivityId=" + _0x1e75f5.xsqhb + "&wm_ctype=mtandroid&wm_latitude=&wm_longitude=&token=" + this.token + "&portraitId=498",
            _0x1d54fa = _0x27b41d(_0x507c2d, this.cookie, _0x32c2e0);
        _0x1d54fa.headers["Content-Type"] = "application/x-www-form-urlencoded";
        await _0x381231("post", _0x1d54fa);
        let _0x4c6826 = _0x2ab163;
        if (!_0x4c6826) {
            return;
        }
        if (_0x4c6826.code == 0) {
            console.log("限时抢红包领取到每日红包豆" + _0x4c6826.sendBeanCount + "个");
        } else {
            let _0x337422 = _0x4c6826.msg || _0x4c6826.message;
            console.log("限时抢红包领取每日红包豆失败: " + _0x337422);
        }
    }
    async ["xsqhbDoAction"]() {
        let _0x4a95df = "https://i.waimai.meituan.com/cfeplay/playcenter/batchgrabred/doAction",
            _0xd8e82e = "parActivityId=" + _0x1e75f5.xsqhb + "&wm_ctype=mtandroid&wm_latitude=&wm_longitude=&token=" + this.token + "&action=SiginInGetProp",
            _0x4da4f7 = _0x27b41d(_0x4a95df, this.cookie, _0xd8e82e);
        _0x4da4f7.headers["Content-Type"] = "application/x-www-form-urlencoded";
        await _0x381231("post", _0x4da4f7);
        let _0x34e3f1 = _0x2ab163;
        if (!_0x34e3f1) {
            return;
        }
        if (_0x34e3f1.code == 0) {
            console.log("限时抢红包每日签到成功");
        } else {
            let _0x10a498 = _0x34e3f1.msg || _0x34e3f1.message;
            console.log("限时抢红包每日签到失败: " + _0x10a498);
        }
    }
    async ["xsqhbMyRedBeanRecords"]() {
        let _0x88fd87 = "https://i.waimai.meituan.com/cfeplay/playcenter/batchgrabred/myRedBeanRecords",
            _0x25d391 = "parActivityId=" + _0x1e75f5.xsqhb + "&wm_ctype=mtandroid&wm_latitude=&wm_longitude=&token=" + this.token + "&userPortraitId=498&pageNum=1",
            _0x11c7f1 = _0x27b41d(_0x88fd87, this.cookie, _0x25d391);
        _0x11c7f1.headers["Content-Type"] = "application/x-www-form-urlencoded";
        await _0x381231("post", _0x11c7f1);
        let _0x3b1bd0 = _0x2ab163;
        if (!_0x3b1bd0) {
            return;
        }
        if (_0x3b1bd0.code == 0) {
            this.accountInfo.xsqhbRedBean = _0x3b1bd0.data.totalObtainAmount;
            console.log("红包豆余额: " + _0x3b1bd0.data.totalObtainAmount);
        } else {
            let _0x22d4fa = _0x3b1bd0.msg || _0x3b1bd0.message;
            console.log("限时抢红包查询红包豆失败: " + _0x22d4fa);
        }
    }
    async ["xsqhbAppTask"]() {
        const _0x2aa38b = {
            "JYMet": "4|2|5|1|0|3",
            "MellK": "活动限定位开放，自己尝试修改定位刷入口吧"
        };
    }
    async ["ddjyqLogin"]() {
        let _0x16ab4a = "https://game.meituan.com/mgc/gamecenter/sign/login",
            _0x2bffed = "{\"mtUserId\":" + this.userId + ",\"mtDeviceId\":\"" + this.unoinid + "\",\"mtToken\":\"" + this.token + "\",\"nonceStr\":\"" + $.randomString(16) + "\"}",
            _0x30fc32 = _0x27b41d(_0x16ab4a, this.cookie, _0x2bffed);
        await _0x381231("post", _0x30fc32);
        let _0xcf74d6 = _0x2ab163;
        if (!_0xcf74d6) {
            return;
        }
        if (_0xcf74d6.code == 0) {
            this.ddjyqAccessToken = _0xcf74d6.data.loginAccountResponse.accessToken;
            this.accountInfo.ddjyqApp = _0xcf74d6.data.money / 100;
            console.log("账户余额" + _0xcf74d6.data.money / 100 + "元");
            let _0x5be58b = [];
            for (let _0x4132e5 of _0xcf74d6.data.mgcTaskQueryResponse.taskInfoList) {
                let _0x3b0805 = _0x4132e5.dailyFinishTimes,
                    _0x5f447a = _0x4132e5.mgcTaskBaseInfo.maxLimit;
                console.log(_0x4132e5.mgcTaskBaseInfo.viewTitle + " " + _0x3b0805 + "/" + _0x5f447a);
                _0x3b0805 < _0x5f447a && _0x2312f4.indexOf(_0x4132e5.id) > -1 && _0x5be58b.push(_0x4132e5.id);
            }
            for (let _0x2d6e23 of _0x5be58b) {
                await this.ddjyqFinishMgcTaskAndReceiveReward(_0x2d6e23);
            }
        } else {
            console.log("登录失败: " + _0xcf74d6.msg);
        }
    }
    async ["ddjyqFinishMgcTaskAndReceiveReward"](_0x3fd573) {
        let _0x37b188 = "https://game.meituan.com/mgc/gamecenter/sign/finishMgcTaskAndReceiveReward",
            _0x4287a9 = "{\"accessToken\":\"" + this.ddjyqAccessToken + "\",\"taskId\":\"" + _0x3fd573 + "\"}",
            _0x184240 = _0x27b41d(_0x37b188, this.cookie, _0x4287a9);
        await _0x381231("post", _0x184240);
        let _0x52ee3f = _0x2ab163;
        if (!_0x52ee3f) {
            return;
        }
        let _0x202632 = "完成任务[id=" + _0x3fd573 + "]";
        if (_0x3fd573 == 195) {
            _0x202632 = "提现到美团钱包";
        }
        _0x52ee3f.code == 0 ? console.log(_0x202632 + "成功：" + _0x52ee3f.data.changedValue / 100 + "元") : console.log(_0x202632 + "失败: " + _0x52ee3f.msg);
    }
    async ["ddjyqAppTask"]() {
        const _0x3692b3 = {
            "hhfdA": "余额可随机提现到钱包(前几次无条件，后面需下单解锁)"
        };
        console.log(_0x3692b3.hhfdA);
        await this.ddjyqLogin();
    }
    async ["ttsqqdWxSignRecord"]() {
        let _0x3316f4 = "https://promotion.waimai.meituan.com/playcenter/common/v1/treasurebox/signup/circle/record?isMini=1&ctype=wm_wxapp&isInDpEnv=0&activityViewId=" + _0x1e75f5.ttsqqd,
            _0x3e516f = "",
            _0x44f1b4 = _0x27b41d(_0x3316f4, this.cookie, _0x3e516f);
        await _0x381231("get", _0x44f1b4);
        let _0x1be1fa = _0x2ab163;
        if (!_0x1be1fa) {
            return;
        }
        if (_0x1be1fa.code == 0) {
            let _0x2e96b4 = $.time("yyyy-MM-dd"),
                _0x29fa68 = _0x2e96b4 == _0x1be1fa?.["data"]?.["lastSignUpDay"];
            console.log("天天神券小程序签到：今天" + (_0x29fa68 ? "已" : "未") + "签到，本周期已签到" + _0x1be1fa.data.signUpNum + "天");
            if (!_0x29fa68) {
                await this.ttsqqdWxDoAction();
            }
            for (let _0x524b89 of _0x1be1fa.data.rewardStatus.filter(_0x144dbc => _0x144dbc.status == 1)) {
                await this.ttsqqdStageReward(_0x524b89.stageDayNum);
            }
        } else {
            console.log("查询天天神券小程序签到: " + _0x1be1fa.msg);
        }
    }
    async ["ttsqqdStageReward"](_0x5c6254) {
        let _0x17f5b3 = "https://promotion.waimai.meituan.com/playcenter/common/v1/treasurebox/signup/stage/reward/get?isMini=1&ctype=wm_wxapp&isInDpEnv=0",
            _0x57530c = "{\"activityViewId\":\"" + _0x1e75f5.ttsqqd + "\",\"actionCode\":" + _0x5ad599.ttsqqd + ",\"lat\":" + _0x4415f2 + ",\"lng\":" + _0x417218 + ",\"gdId\":" + _0xe252cb.ttsqqd + ",\"instanceId\":\"" + Date.now() + "0." + $.randomString(16, "0123456789") + "\",\"mtFingerprint\":\"\",\"bizParams\":\"{\\\"signUpDayNum\\\":" + _0x5c6254 + "}\",\"fpPlatform\":13,\"codeVersion\":1,\"utmSource\":\"\",\"utmCampaign\":\"\"}",
            _0x24b89f = _0x27b41d(_0x17f5b3, this.cookie, _0x57530c);
        await _0x381231("post", _0x24b89f);
        let _0x5e9110 = _0x2ab163;
        if (!_0x5e9110) {
            return;
        }
        if (_0x5e9110.code == 0) {
            for (let _0x34aa25 of _0x5e9110.data.prizeInfoList) {
                let _0x3082e7 = "[" + _0x34aa25.couponInfo.couponTitle + "]: 满" + _0x34aa25.couponInfo.priceLimit + "减" + _0x34aa25.couponInfo.couponValue;
                this.coupon.push(_0x3082e7);
                console.log(_0x3082e7);
            }
        } else {
            console.log("天天神券小程序开连续签到宝箱失败: " + _0x5e9110.msg);
        }
    }
    async ["ttsqqdWxDoAction"]() {
        let _0x573a96 = "https://promotion.waimai.meituan.com/playcenter/common/v1/doaction?isMini=1&ctype=wm_wxapp&isInDpEnv=0",
            _0x38b898 = "{\"activityViewId\":\"" + _0x1e75f5.ttsqqd + "\",\"actionCode\":" + _0x5ad599.ttsqqd + ",\"lat\":" + _0x4415f2 + ",\"lng\":" + _0x417218 + ",\"gdId\":" + _0xe252cb.ttsqqd + ",\"instanceId\":\"" + Date.now() + "0." + $.randomString(16, "0123456789") + "\",\"mtFingerprint\":\"\"}",
            _0x557443 = _0x27b41d(_0x573a96, this.cookie, _0x38b898);
        await _0x381231("post", _0x557443);
        let _0x15280e = _0x2ab163;
        if (!_0x15280e) {
            return;
        }
        if (_0x15280e.code == 0) {
            for (let _0x510654 of _0x15280e.data.prizeInfoList) {
                let _0x4b420d = "[" + _0x510654.couponInfo.couponTitle + "]: 满" + _0x510654.couponInfo.priceLimit + "减" + _0x510654.couponInfo.couponValue;
                this.coupon.push(_0x4b420d);
                console.log(_0x4b420d);
            }
        } else {
            console.log("天天神券小程序签到失败: " + _0x15280e.msg);
        }
    }
    async ["ttsqqdLotteryFetchCoupon"](_0x3bd4d0) {
        let _0x38d53c = encodeURIComponent(_0x3bd4d0.join(",")).toUpperCase(),
            _0x1b7922 = "https://promotion.waimai.meituan.com/lottery/couponcomponent/batchfetchcomponentcoupon/v2?couponReferIds=" + _0x38d53c + "&actualLng=" + _0x417218 + "&actualLat=" + _0x4415f2 + "&geoType=2&isInDpEnv=0&gdPageId=" + _0xe252cb.ttsqqd + "&instanceId=" + Date.now() + "0." + $.randomString(16, "0123456789") + "&utmSource=&utmCampaign=&needFetchedByUUID=1",
            _0x122e48 = "{\"cType\":\"wx_wallet\",\"fpPlatform\":13,\"wxOpenId\":\"\",\"appVersion\":\"\",\"mtFingerprint\":\"\"}",
            _0xa85bba = _0x27b41d(_0x1b7922, this.cookie, _0x122e48);
        await _0x381231("post", _0xa85bba);
        let _0x31d342 = _0x2ab163;
        if (!_0x31d342) {
            return;
        }
        if (_0x31d342.code == 0) {
            for (let _0x5bd900 of _0x31d342.data) {
                if (_0x5bd900.code == 0) {
                    let _0xb87d3b = "[" + _0x5bd900.data.couponName + "]：" + _0x5bd900.data.priceLimit + "减" + _0x5bd900.data.couponValue;
                    this.coupon.push(_0xb87d3b);
                    console.log(_0xb87d3b);
                } else {
                    !_0x5bd900?.["msg"]?.["includes"]("已获得") && console.log("天天神券小程序领券失败：" + _0x5bd900.msg);
                }
            }
        } else {
            let _0x11d295 = _0x31d342.msg || _0x31d342.message;
            console.log("天天神券小程序领券失败: " + _0x11d295);
        }
    }
    async ["ttsqqdFetchcomponentcoupon"](_0x3577d9) {
        let _0x1abc76 = "https://promotion.waimai.meituan.com/lottery/couponcomponent/fetchcomponentcoupon/v2?couponReferId=" + _0x3577d9 + "&actualLng=" + _0x417218 + "&actualLat=" + _0x4415f2 + "&geoType=2&isInDpEnv=0&gdPageId=" + _0xe252cb.ttsqqdCoupon + "&instanceId=" + Date.now() + "0." + $.randomString(16, "0123456789") + "&utmSource=&utmCampaign=&needFetchedByUUID=1&sceneId=2",
            _0x3a9378 = "{\"cType\":\"wm_wxapp\",\"fpPlatform\":13,\"wxOpenId\":\"\",\"appVersion\":\"\",\"mtFingerprint\":\"\"}",
            _0xa338ab = _0x27b41d(_0x1abc76, this.cookie, _0x3a9378);
        await _0x381231("post", _0xa338ab);
        let _0x17baba = _0x2ab163;
        if (!_0x17baba) {
            return;
        }
        if (_0x17baba.code == 0) {
            for (let _0x5f3352 of _0x17baba.data) {
                let _0x4c8106 = "[" + _0x5f3352.couponName + "]：" + _0x5f3352.priceLimit + "减" + _0x5f3352.couponValue;
                this.coupon.push(_0x4c8106);
                console.log(_0x4c8106);
            }
        } else {
            let _0x534f23 = _0x17baba.msg || _0x17baba.message;
            console.log("天天神券小程序领券失败: " + _0x534f23);
        }
    }
    async ["ttsqqdWxTask"]() {
        await this.ttsqqdWxSignRecord();
        await this.ttsqqdLotteryFetchCoupon(_0x29b8bc);
        for (let _0x16aa12 of _0x12b7b7) {
            await this.ttsqqdFetchcomponentcoupon(_0x16aa12);
        }
    }
    async ["sqqdWxGetStatus"](_0x119f5f, _0x85e338) {
        let _0x11b784 = "https://promotion.waimai.meituan.com/playcenter/common/v1/clock-in/status?isMini=1&ctype=" + _0x85e338 + "&isInDpEnv=0&activityViewId=" + _0x119f5f,
            _0x111362 = "",
            _0x39123d = _0x27b41d(_0x11b784, this.cookie, _0x111362);
        await _0x381231("get", _0x39123d);
        let _0x1420a5 = _0x2ab163;
        if (!_0x1420a5) {
            return;
        }
        if (_0x1420a5.code == 0) {
            let _0xeb9f28 = new Date().getDay();
            for (let _0xdd51d3 of _0x1420a5.data.clockInStatus) {
                if (_0xdd51d3.dayOfWeek % 7 == _0xeb9f28) {
                    console.log("社群签到：今天" + (_0xdd51d3.status ? "已" : "未") + "签到，本周已签到" + _0x1420a5.data.clockInNum + "天");
                    if (!_0xdd51d3.status) {
                        await this.sqqdWxSign(_0x119f5f);
                    }
                    break;
                }
            }
            _0x1420a5.data.lotteryStatus == 1 && (await this.sqqdWxDoAction(_0x119f5f));
        } else {
            console.log("查询列表失败: " + _0x1420a5.msg);
        }
    }
    async ["sqqdWxDoAction"](_0x598ca8) {
        let _0x1024e4 = "https://promotion.waimai.meituan.com/playcenter/common/v1/doaction",
            _0x54bf00 = "{\"activityViewId\":\"" + _0x598ca8 + "\",\"actionCode\":" + _0x5ad599.sqqd + ",\"lat\":" + _0x4415f2 + ",\"lng\":" + _0x417218 + ",\"gdId\":" + _0xe252cb.sqqd + ",\"instanceId\":\"" + Date.now() + "0." + $.randomString(16, "0123456789") + "\"}",
            _0xead409 = _0x27b41d(_0x1024e4, this.cookie, _0x54bf00);
        await _0x381231("post", _0xead409);
        let _0x57852d = _0x2ab163;
        if (!_0x57852d) {
            return;
        }
        if (_0x57852d.code == 0) {
            for (let _0x2a7545 of _0x57852d.data.prizeInfoList) {
                let _0x321cd9 = "[" + _0x2a7545.couponInfo.couponTitle + "]: 满" + _0x2a7545.couponInfo.priceLimit + "减" + _0x2a7545.couponInfo.couponValue;
                this.coupon.push(_0x321cd9);
                console.log(_0x321cd9);
            }
        } else {
            console.log("社群签到领取周日宝箱失败: " + _0x57852d.msg);
        }
    }
    async ["sqqdWxSign"](_0x5ac763, _0x51fe18) {
        let _0x1318ce = "https://promotion.waimai.meituan.com/playcenter/common/v1/clock-in?isMini=1&ctype=" + _0x51fe18 + "&isInDpEnv=0",
            _0x1f1a48 = "{\"activityViewId\":\"" + _0x5ac763 + "\",\"actionCode\":" + _0x5ad599.sqqd + ",\"lat\":" + _0x4415f2 + ",\"lng\":" + _0x417218 + ",\"gdId\":" + _0xe252cb.sqqd + ",\"instanceId\":\"" + Date.now() + "0." + $.randomString(16, "0123456789") + "\"}",
            _0x336d97 = _0x27b41d(_0x1318ce, this.cookie, _0x1f1a48);
        await _0x381231("post", _0x336d97);
        let _0xb7acf5 = _0x2ab163;
        if (!_0xb7acf5) {
            return;
        }
        if (_0xb7acf5.code == 0) {
            for (let _0xd9a5df of _0xb7acf5.data.prizeInfoList) {
                let _0x158501 = "[" + _0xd9a5df.couponInfo.couponTitle + "]: 满" + _0xd9a5df.couponInfo.priceLimit + "减" + _0xd9a5df.couponInfo.couponValue;
                this.coupon.push(_0x158501);
                console.log("签到成功领取到" + _0x158501);
            }
        } else {
            console.log("完成任务失败: " + _0xb7acf5.msg);
        }
    }
    async ["sqqdWxTask"]() {
        const _0x3018d5 = {
            "ukFuo": "wm_wxapp",
            "BTMSy": "mt_mp"
        };
        await this.sqqdWxGetStatus(_0x1e75f5.sqqd, _0x3018d5.ukFuo);
        await this.sqqdWxGetStatus(_0x1e75f5.sqqd2, _0x3018d5.BTMSy);
    }
    async ["cyfGetLotteryNum"]() {
        let _0x1b8355 = "https://mgm.meituan.com/marketing/cardsCollect/api/cardLotteryNum",
            _0xe8045e = "{\"activityId\":\"1116\",\"topicIdList\":[\"1380101169187258449\",\"1380101260094521416\",\"1412292930126868547\"]}",
            _0x440a4d = _0x27b41d(_0x1b8355, this.cookie, _0xe8045e);
        await _0x381231("post", _0x440a4d);
        let _0x449c4c = _0x2ab163;
        if (!_0x449c4c) {
            return;
        }
        if (_0x449c4c.lotteryNum >= 0) {
            console.log("还有" + _0x449c4c.lotteryNum + "次抽奖机会");
            if (_0x449c4c.lotteryNum > 0) {
                for (let _0x5b9896 = 0; _0x5b9896 < _0x449c4c.lotteryNum; _0x5b9896++) {
                    await this.cyfLottery(_0x449c4c.poolIdList);
                }
            }
        } else {
            console.log("查询抽月符次数失败: " + _0x449c4c.msg);
        }
    }
    async ["cyfLottery"](_0x1cbc86) {
        let _0x3eafce = "https://mgm.meituan.com/marketing/cardsCollect/api/lotteryfrompool",
            _0x2482cb = "{\"poolList\":" + JSON.stringify(_0x1cbc86) + "}",
            _0xa20fd7 = _0x27b41d(_0x3eafce, this.cookie, _0x2482cb);
        await _0x381231("post", _0xa20fd7);
        let _0x4180f9 = _0x2ab163;
        if (!_0x4180f9) {
            return;
        }
        _0x4180f9?.["prizeInfo"]?.["name"] ? (console.log("抽到了月符[" + _0x4180f9.prizeInfo.name + "]"), await this.cyfGetCardInfo(_0x4180f9.lotteryAwardSerialNo.value)) : console.log("抽月符失败: " + _0x4180f9.msg);
    }
    async ["cyfGetCardInfo"](_0x4e501b) {
        let _0x28ddab = "https://mgm.meituan.com/marketing/cardsCollect/api/getCardInfo?lotteryAwardSerialNo=" + _0x4e501b,
            _0x405afe = "",
            _0x346b21 = _0x27b41d(_0x28ddab, this.cookie, _0x405afe);
        await _0x381231("get", _0x346b21);
        let _0x1d9ea5 = _0x2ab163;
        if (!_0x1d9ea5) {
            return;
        }
        _0x1d9ea5.code == 0 ? await this.cyfDrawCardId(_0x1d9ea5.userCardInfo.cardId) : console.log("查询月符编号失败: " + _0x1d9ea5.message);
    }
    async ["cyfDrawCardId"](_0x139982) {
        let _0xe68f20 = "https://mgm.meituan.com/marketing/cardsCollect/api/draw?cardId=" + _0x139982,
            _0x348416 = "",
            _0x557dc3 = _0x27b41d(_0xe68f20, this.cookie, _0x348416);
        await _0x381231("get", _0x557dc3);
        let _0x28d80e = _0x2ab163;
        if (!_0x28d80e) {
            return;
        }
        if (_0x28d80e?.["bingo"]?.["value"]) {
            let _0x233ce9 = "[" + _0x28d80e.prizeInfo.name + "]";
            this.coupon.push("月符券：" + _0x233ce9);
            console.log("月符抽券抽到了：" + _0x233ce9);
        } else {
            console.log("月符抽券失败: " + _0x28d80e.message);
        }
    }
    async ["cyfSaveAccess"]() {
        let _0x1fe03b = "https://mgm.meituan.com/marketing/cardsCollect/api/saveAccess",
            _0x3b2449 = "{\"playerId\":1}",
            _0x132b32 = _0x27b41d(_0x1fe03b, this.cookie, _0x3b2449);
        await _0x381231("post", _0x132b32);
    }
    async ["cyfSaveShare"]() {
        let _0x3a49d5 = "https://mgm.meituan.com/marketing/cardsCollect/api/saveShare",
            _0x1c0958 = "{\"playerId\":1,\"shareWay\":1,\"shareContentType\":1,\"shareContentId\":\"29\"}",
            _0x593be5 = _0x27b41d(_0x3a49d5, this.cookie, _0x1c0958);
        await _0x381231("post", _0x593be5);
    }
    async ["cyfAppTask"]() {
        await this.cyfSaveAccess();
        await this.cyfSaveShare();
        await this.cyfGetLotteryNum();
    }
    async ["lxqdGetUserTasks"](_0x265414) {
        let _0xc213a4 = "https://cube.meituan.com/topcube/api/toc/task/getUserTasks",
            _0x18a45d = "{\"userId\":\"" + this.userId + "\",\"userType\":\"MEI_TUAN\",\"uuid\":\"" + this.uuid + "\",\"taskIdKeys\":" + JSON.stringify(_0x265414) + "}",
            _0x5b0509 = _0x27b41d(_0xc213a4, this.cookie, _0x18a45d);
        await _0x381231("post", _0x5b0509);
        let _0x4433fd = _0x2ab163;
        if (!_0x4433fd) {
            return;
        }
        if (_0x4433fd.code == 0) {
            for (let _0x2e49fb of _0x4433fd.data) {
                if (_0x2e49fb.code != 1007) {
                    if (!_0x2e49fb.taskRuleVos || _0x2e49fb.taskRuleVos.length == 0) {
                        console.log("任务[" + _0x2e49fb.title + "] -- " + _0x2e49fb.msg);
                        continue;
                    }
                    if (_0x2e49fb.title.indexOf("小程序下单") > -1) {
                        continue;
                    }
                    let _0x46bd92 = _0x2e49fb.extend ? true : false;
                    if (_0x46bd92 && _0x2e49fb.extend.isSignInToday == 1) {
                        console.log("任务[" + _0x2e49fb.title + "] -- 已完成");
                        continue;
                    }
                    for (let _0x57bb36 of _0x2e49fb.taskRuleVos) {
                        if (_0x57bb36.status == "PRIZE_SUCC" || _0x57bb36.status == "DELETE") {
                            !_0x46bd92 && console.log("任务[" + _0x2e49fb.title + "] -- 已完成");
                        } else {
                            if (_0x57bb36.status == "CAN_RECEIVE") {
                                console.log("任务[" + _0x2e49fb.title + "] -- 可领取奖励");
                                await this.lxqdUpdateUserTask(_0x2e49fb.taskIdKey, _0x57bb36.taskRuleIdKey, 168199, _0x2e49fb.taskNo, _0x57bb36.taskRuleNo);
                                if (_0x46bd92) {
                                    break;
                                }
                            } else {
                                console.log("任务[" + _0x2e49fb.title + "] -- 未完成");
                                await this.lxqdStartUserTask(_0x57bb36.taskIdKey, _0x57bb36.taskRuleIdKey, 168199);
                                if (_0x46bd92) {
                                    break;
                                }
                            }
                        }
                    }
                } else {
                    console.log("任务[" + _0x2e49fb.title + "] -- " + _0x2e49fb.msg);
                }
            }
        } else {
            console.log("查询列表失败: " + _0x4433fd.msg);
        }
    }
    async ["lxqdStartUserTask"](_0xdaabd5, _0x4bebdd, _0x36f068, _0x1bba43) {
        let _0x77daa0 = "https://cube.meituan.com/topcube/api/toc/task/startUserTask?k=" + _0x36f068,
            _0x44908a = "{\"taskIdKey\":\"" + _0xdaabd5 + "\",\"taskRuleIdKey\":\"" + _0x4bebdd + "\",\"cubePageId\":" + _0x36f068 + ",\"userId\":\"" + this.userId + "\",\"uuid\":\"" + this.uuid + "\",\"mini_program_token\":\"" + this.token + "\",\"userType\":\"MEI_TUAN\",\"sourceType\":\"MEI_TUAN\",\"cityId\":30,\"riskForm\":\"e30=\"}",
            _0x37e732 = _0x27b41d(_0x77daa0, this.cookie, _0x44908a);
        await _0x381231("post", _0x37e732);
        let _0x55879 = _0x2ab163;
        if (!_0x55879) {
            return;
        }
        _0x55879.code == 0 ? (_0x1bba43 > 0 && (console.log("等待" + _0x1bba43 + "秒完成任务..."), await $.wait(_0x1bba43 * 1000 + 1000)), await this.lxqdUpdateUserTask(_0xdaabd5, _0x4bebdd, _0x36f068, _0x55879.taskNo, _0x55879.taskRuleNo, _0x55879.actionNo)) : console.log("完成任务失败: " + _0x55879.msg);
    }
    async ["lxqdUpdateUserTask"](_0x5a2df1, _0x9a8dbc, _0x38605a, _0x3755be, _0x31cf00, _0x3a055f) {
        let _0x54c331 = "https://cube.meituan.com/topcube/api/toc/task/updateUserTask?k=" + _0x38605a,
            _0x342f6b = "{\"taskIdKey\":\"" + _0x5a2df1 + "\",\"taskRuleIdKey\":\"" + _0x9a8dbc + "\",\"cubePageId\":" + _0x38605a + ",\"userId\":\"" + this.userId + "\",\"uuid\":\"" + this.uuid + "\",\"mini_program_token\":\"" + this.token + "\",\"userType\":\"MEI_TUAN\",\"sourceType\":\"MEI_TUAN\",\"cityId\":30,\"taskNo\":\"" + _0x3755be + "\",\"taskRuleNo\":\"" + _0x31cf00 + "\",\"actionNo\":\"" + _0x3a055f + "\",\"riskForm\":\"e30=\"}",
            _0x1c4921 = _0x27b41d(_0x54c331, this.cookie, _0x342f6b);
        await _0x381231("post", _0x1c4921);
        let _0x4ac2ad = _0x2ab163;
        if (!_0x4ac2ad) {
            return;
        }
        if (_0x4ac2ad.code == 0) {
            if (_0x4ac2ad.prizeList && _0x4ac2ad.prizeList.length > 0) {
                for (let _0x57b8d4 of _0x4ac2ad.prizeList) {
                    console.log("领取任务奖励获得" + _0x57b8d4.number / 100 + "元");
                }
            }
        } else {
            console.log("领取任务奖励失败: " + _0x4ac2ad.msg);
        }
    }
    async ["lxqdAppTask"]() {
        console.log("自动提现到美团钱包");
        await this.commonGetUserTasks(_0x4926ff.sign);
    }
    async ["lxqd2AppTask"]() {
        for (let _0x200dec in _0x1f355e) {
            console.log("----------- [" + _0x1f355e[_0x200dec].name + "] -----------");
            await this.commonGetUserTasks(_0x1f355e[_0x200dec]);
        }
    }
    async ["tuantuansqGetUserTasks"](_0x4624eb) {
        let _0x3eab73 = "https://cube.meituan.com/topcube/api/toc/task/getUserTasks",
            _0x56ddde = "{\"userId\":\"" + this.userId + "\",\"userType\":\"MEI_TUAN\",\"uuid\":\"" + this.uuid + "\",\"taskIdKeys\":" + JSON.stringify(_0x4624eb) + "}",
            _0x50689c = _0x27b41d(_0x3eab73, this.cookie, _0x56ddde);
        await _0x381231("post", _0x50689c);
        let _0x31eda2 = _0x2ab163;
        if (!_0x31eda2) {
            return;
        }
        if (_0x31eda2.code == 0) {
            for (let _0xb7e6ac of _0x31eda2.data) {
                if (_0xb7e6ac.code != 1007) {
                    if (!_0xb7e6ac.taskRuleVos || _0xb7e6ac.taskRuleVos.length == 0) {
                        console.log("任务[" + _0xb7e6ac.title + "] -- " + _0xb7e6ac.msg);
                        continue;
                    }
                    if (_0xb7e6ac.title.indexOf("下单奖励") > -1) {
                        continue;
                    }
                    let _0x378298 = _0xb7e6ac.extend ? true : false;
                    if (_0x378298 && _0xb7e6ac.extend.isSignInToday == 1) {
                        console.log("任务[" + _0xb7e6ac.title + "] -- 已完成");
                        continue;
                    }
                    for (let _0x47a806 of _0xb7e6ac.taskRuleVos) {
                        if (_0x47a806.status == "PRIZE_SUCC" || _0x47a806.status == "DELETE") {
                            !_0x378298 && console.log("任务[" + _0xb7e6ac.title + "] -- 已完成");
                        } else {
                            if (_0x47a806.status == "CAN_RECEIVE") {
                                console.log("任务[" + _0xb7e6ac.title + "] -- 可领取奖励");
                                await this.tuantuansqSendTaskPrize(_0xb7e6ac.taskIdKey, _0x47a806.taskRuleIdKey, 88888889, _0xb7e6ac.taskNo, _0x47a806.taskRuleNo);
                                if (_0x378298) {
                                    break;
                                }
                            } else {
                                console.log("任务[" + _0xb7e6ac.title + "] -- 未完成");
                                let _0x45f948 = JSON.parse(_0x47a806.ruleConfig);
                                if (_0x45f948.limitTime) {
                                    let _0x491b8f = _0x47a806.preCompleteTime,
                                        _0xf3c414 = _0x45f948.limitTime,
                                        _0x440b79 = _0x491b8f + _0xf3c414 * 1000,
                                        _0x11bb21 = _0x47a806.currentTime;
                                    if (_0x11bb21 >= _0x440b79) {
                                        await this.tuantuansqStartUserTask(_0x47a806.taskIdKey, _0x47a806.taskRuleIdKey, 88888889);
                                    } else {
                                        let _0x285673 = new Date(_0x440b79);
                                        console.log("[" + _0xb7e6ac.title + "]任务冷却中，" + $.padStr(_0x285673.getHours(), 2) + ":" + $.padStr(_0x285673.getMinutes(), 2) + ":" + $.padStr(_0x285673.getSeconds(), 2) + "后可再次完成");
                                    }
                                    _0x491b8f = _0x11bb21;
                                } else {
                                    if (_0x45f948.staySeconds) {
                                        let _0x23c427 = _0x45f948.staySeconds || 0;
                                        await this.tuantuansqStartUserTask(_0x47a806.taskIdKey, _0x47a806.taskRuleIdKey, 88888889, _0x23c427);
                                    } else {
                                        if (_0x45f948.timeLimits) {
                                            for (let _0x9854bb of _0x45f948.timeLimits) {
                                                let _0x3ef1d2 = _0x9854bb.startTime / 3600 / 1000,
                                                    _0x46d7ed = _0x9854bb.endTime / 3600 / 1000,
                                                    _0x2c7d9b = new Date().getHours();
                                                _0x2c7d9b >= _0x3ef1d2 && _0x2c7d9b < _0x46d7ed ? await this.tuantuansqStartUserTask(_0x47a806.taskIdKey, _0x47a806.taskRuleIdKey, 88888889) : console.log("[" + _0xb7e6ac.title + "]任务未到时间，" + _0x3ef1d2 + "到" + _0x46d7ed + "点间可完成");
                                            }
                                        } else {
                                            await this.tuantuansqStartUserTask(_0x47a806.taskIdKey, _0x47a806.taskRuleIdKey, 88888889);
                                        }
                                    }
                                }
                                if (_0x378298) {
                                    break;
                                }
                            }
                        }
                    }
                } else {
                    console.log("任务[" + _0xb7e6ac.title + "] -- " + _0xb7e6ac.msg);
                }
            }
        } else {
            console.log("查询列表失败: " + _0x31eda2.msg);
        }
    }
    async ["tuantuansqStartUserTask"](_0x597df0, _0x343c00, _0x8770f8, _0x4318f4 = 0) {
        let _0x4527a4 = "https://cube.meituan.com/topcube/api/toc/task/startUserTask?k=" + _0x8770f8,
            _0x52a057 = "{\"taskIdKey\":\"" + _0x597df0 + "\",\"taskRuleIdKey\":\"" + _0x343c00 + "\",\"cubePageId\":" + _0x8770f8 + ",\"userId\":\"" + this.userId + "\",\"uuid\":\"" + this.uuid + "\",\"mini_program_token\":\"" + this.token + "\",\"userType\":\"MEI_TUAN\",\"sourceType\":\"MEI_TUAN\",\"cityId\":30,\"riskForm\":\"" + this.getRiskForm(_0x8770f8, "tuantuanshenquan") + "\"}",
            _0x4f5dab = _0x27b41d(_0x4527a4, this.cookie, _0x52a057);
        await _0x381231("post", _0x4f5dab);
        let _0x25bcdc = _0x2ab163;
        if (!_0x25bcdc) {
            return;
        }
        _0x25bcdc.code == 0 ? (_0x4318f4 > 0 && (console.log("等待" + _0x4318f4 + "秒完成任务..."), await $.wait(_0x4318f4 * 1000 + 1000)), await this.tuantuansqUpdateUserTask(_0x597df0, _0x343c00, _0x8770f8, _0x25bcdc.taskNo, _0x25bcdc.taskRuleNo, _0x25bcdc.actionNo)) : console.log("完成任务失败: " + _0x25bcdc.msg);
    }
    async ["tuantuansqUpdateUserTask"](_0xa1d43, _0x284d29, _0x288555, _0xd126d, _0x115f9b, _0x2d31d4) {
        let _0x55e770 = "https://cube.meituan.com/topcube/api/toc/task/updateUserTask?k=" + _0x288555,
            _0x336d42 = "{\"taskIdKey\":\"" + _0xa1d43 + "\",\"taskRuleIdKey\":\"" + _0x284d29 + "\",\"cubePageId\":" + _0x288555 + ",\"userId\":\"" + this.userId + "\",\"uuid\":\"" + this.uuid + "\",\"mini_program_token\":\"" + this.token + "\",\"userType\":\"MEI_TUAN\",\"sourceType\":\"MEI_TUAN\",\"cityId\":30,\"taskNo\":\"" + _0xd126d + "\",\"taskRuleNo\":\"" + _0x115f9b + "\",\"actionNo\":\"" + _0x2d31d4 + "\",\"riskForm\":\"" + this.getRiskForm(_0x288555, "tuantuanshenquan") + "\"}",
            _0x2d5a61 = _0x27b41d(_0x55e770, this.cookie, _0x336d42);
        await _0x381231("post", _0x2d5a61);
        let _0x1d6177 = _0x2ab163;
        if (!_0x1d6177) {
            return;
        }
        if (_0x1d6177.code == 0) {
            if (!_0x1d6177.prizeList) {
                await this.tuantuansqSendTaskPrize(_0xa1d43, _0x284d29, _0x288555, _0xd126d, _0x115f9b);
            } else {
                for (let _0x367422 of _0x1d6177.prizeList) {
                    if (_0x367422?.["sendMagicStoneResult"]?.["stoneList"]) {
                        let _0x1b5592 = [];
                        for (let _0x5628aa of _0x367422.sendMagicStoneResult.stoneList) {
                            _0x1b5592.push(_0x5628aa.amount + "个[" + (_0x46b865[_0x5628aa.magicStonePrizeType] || _0x5628aa.magicStonePrizeType) + "]");
                        }
                        console.log("领取任务奖励获得" + _0x1b5592.join("，"));
                    }
                    if (_0x367422?.["sendMagicCardResult"]?.["cardList"]) {
                        let _0x356fb9 = [];
                        for (let _0x45ade4 of _0x367422.sendMagicCardResult.cardList) {
                            _0x356fb9.push(_0x45ade4.amount + "张[" + (_0x294c48[_0x45ade4.type] || _0x45ade4.type) + "]");
                        }
                        console.log("领取任务奖励获得" + _0x356fb9.join("，"));
                    }
                }
            }
        } else {
            console.log("领取任务奖励失败: " + _0x1d6177.msg);
        }
    }
    async ["tuantuansqSendTaskPrize"](_0x541c78, _0x4d1053, _0x294e22, _0x31fd16, _0x38c5e4) {
        let _0x5cf5eb = "https://cube.meituan.com/topcube/api/toc/task/sendTaskPrize",
            _0x4463b0 = "{\"userId\":" + this.userId + ",\"userType\":\"MEI_TUAN\",\"uuid\":\"" + this.uuid + "\",\"taskIdKey\":\"" + _0x541c78 + "\",\"taskRuleIdKey\":\"" + _0x4d1053 + "\",\"taskNo\":\"" + _0x31fd16 + "\",\"taskRuleNo\":\"" + _0x38c5e4 + "\",\"cubePageId\":0,\"riskForm\":\"" + this.getRiskForm(_0x294e22, "tuantuanshenquan") + "\",\"mini_program_token\":\"" + this.token + "\"}",
            _0xf729eb = _0x27b41d(_0x5cf5eb, this.cookie, _0x4463b0);
        await _0x381231("post", _0xf729eb);
        let _0xa3d7af = _0x2ab163;
        if (!_0xa3d7af) {
            return;
        }
        if (_0xa3d7af.code == 0) {
            if (_0xa3d7af.prizeList) {
                for (let _0x44df36 of _0xa3d7af.prizeList) {
                    if (_0x44df36?.["sendMagicStoneResult"]?.["stoneList"]) {
                        let _0x529b3e = [];
                        for (let _0xce6059 of _0x44df36.sendMagicStoneResult.stoneList) {
                            _0x529b3e.push(_0xce6059.amount + "个[" + (_0x46b865[_0xce6059.magicStonePrizeType] || _0xce6059.magicStonePrizeType) + "]");
                        }
                        console.log("领取任务奖励获得" + _0x529b3e.join("，"));
                    }
                    if (_0x44df36?.["sendMagicCardResult"]?.["cardList"]) {
                        let _0x373192 = [];
                        for (let _0x1a9eca of _0x44df36.sendMagicCardResult.cardList) {
                            _0x373192.push(_0x1a9eca.amount + "张[" + (_0x294c48[_0x1a9eca.type] || _0x1a9eca.type) + "]");
                        }
                        console.log("领取任务奖励获得" + _0x373192.join("，"));
                    }
                }
            }
        } else {
            console.log("领取任务奖励失败: " + _0xa3d7af.msg);
        }
    }
    async ["tuantuansqCardGetBalance"]() {
        let _0xcf6cea = "https://cube.meituan.com/topcube/api/toc/tuantuanCouponV2/balance",
            _0x13be43 = "{\"activityKey\":\"a807ca7cecdb\",\"userId\":" + this.userId + ",\"sourceType\":\"MEI_TUAN\",\"userType\":\"MEI_TUAN\",\"mini_program_token\":\"" + this.token + "\",\"uuid\":\"" + this.uuid + "\"}",
            _0x5994c6 = _0x27b41d(_0xcf6cea, this.cookie, _0x13be43);
        await _0x381231("post", _0x5994c6);
        let _0x3c183e = _0x2ab163;
        if (!_0x3c183e) {
            return;
        }
        if (_0x3c183e.code == 0) {
            if (_0x3c183e.data && _0x3c183e.data.length > 0) {
                for (let _0x38bf3d of _0x3c183e.data) {
                    this.card.cardList[_0x38bf3d.type] = _0x38bf3d.amount;
                    this.card.cardList.TOTAL += _0x38bf3d.amount;
                    console.log("[" + (_0x294c48[_0x38bf3d.type] || _0x38bf3d.type) + "]: " + _0x38bf3d.amount + "张");
                }
            } else {
                console.log("没有卡了");
            }
        } else {
            console.log("查询许愿卡数量失败: " + _0x3c183e.msg);
        }
    }
    async ["tuantuansqCardPreExchangeCoupon"]() {
        let _0xd992b3 = "https://cube.meituan.com/topcube/api/toc/tuantuanCouponV2/preExchangeCoupon",
            _0x161245 = "{\"activityKey\":\"a807ca7cecdb\",\"userId\":" + this.userId + ",\"sourceType\":\"MEI_TUAN\",\"userType\":\"MEI_TUAN\",\"mini_program_token\":\"" + this.token + "\",\"uuid\":\"" + this.uuid + "\"}",
            _0x30f2b7 = _0x27b41d(_0xd992b3, this.cookie, _0x161245);
        await _0x381231("post", _0x30f2b7);
        let _0x345440 = _0x2ab163;
        if (!_0x345440) {
            return;
        }
        if (_0x345440.code == 0) {
            this.card.exchangeChance = true;
        } else {
            _0x345440.code == 1 ? (this.card.exchangeChance = false, console.log("魔法卡合成机会已用完")) : console.log("查询魔法卡合成次数机会失败: " + _0x345440.msg);
        }
    }
    async ["tuantuansqCardExchangeCoupon"](_0x30283, _0x1f1b77) {
        let _0x42cb86 = [],
            _0x26bf45 = 0,
            _0x35e2c0 = 0,
            _0x370ae6 = [];
        if (this.card.cardList.SENIOR_CARD > 0) {
            _0x26bf45 = $.getMin(this.card.cardList.SENIOR_CARD, 3);
            const _0x17baab = {
                "cardType": "SENIOR_CARD",
                "cardCount": _0x26bf45
            };
            _0x42cb86.push(_0x17baab);
            _0x370ae6.push(_0x26bf45 + "张稀有卡");
        }
        if (_0x26bf45 < 3) {
            _0x35e2c0 = 3 - _0x26bf45;
            const _0x40ffc9 = {
                "cardType": "NORMAL_CARD",
                "cardCount": _0x35e2c0
            };
            _0x42cb86.push(_0x40ffc9);
            _0x370ae6.push(_0x35e2c0 + "张普通卡");
        }
        console.log("准备用" + _0x370ae6.join("，") + "合成优惠券...");
        let _0x84554d = "https://cube.meituan.com/topcube/api/toc/tuantuanCouponV2/exchangeCoupon",
            _0x9b7232 = "{\"wishLabelIds\":[" + _0x30283 + "],\"cards\":" + JSON.stringify(_0x42cb86) + ",\"activityKey\":\"a807ca7cecdb\",\"userId\":" + this.userId + ",\"sourceType\":\"MEI_TUAN\",\"userType\":\"MEI_TUAN\",\"mini_program_token\":\"" + this.token + "\",\"uuid\":\"" + this.uuid + "\",\"riskForm\":\"" + this.getRiskForm(_0x1f1b77, "tuantuanshenquan") + "\"}",
            _0x382cd3 = _0x27b41d(_0x84554d, this.cookie, _0x9b7232);
        await _0x381231("post", _0x382cd3);
        let _0x23f419 = _0x2ab163;
        if (!_0x23f419) {
            return;
        }
        this.card.cardList.SENIOR_CARD -= _0x26bf45;
        this.card.cardList.NORMAL_CARD -= _0x35e2c0;
        this.card.cardList.TOTAL -= _0x26bf45;
        this.card.cardList.TOTAL -= _0x35e2c0;
        if (_0x23f419.code == 0) {
            let _0x4bef34 = "[" + _0x23f419.data.couponTitle + "]: " + _0x23f419.data.couponUseCondition + "减" + _0x23f419.data.couponValue;
            this.coupon.push(_0x4bef34);
            console.log(_0x4bef34);
        } else {
            console.log("魔法卡合成优惠券失败: " + _0x23f419.msg);
        }
    }
    async ["tuantuansqAppTask"]() {
        console.log("每天魔法卡合成优惠券，入口：APP-我的-团团神券-集卡牌(默认)");
        await this.tuantuansqGetUserTasks(_0x11b552.task);
        await this.tuantuansqCardGetBalance();
        await this.tuantuansqCardPreExchangeCoupon();
        for (let _0x3238f6 = 0; _0x3238f6 < 4 && this.card.cardList.TOTAL >= 3 && this.card.exchangeChance; _0x3238f6++) {
            await this.tuantuansqCardExchangeCoupon(1, 88888889);
            await this.tuantuansqCardPreExchangeCoupon();
        }
    }
    async ["tuantuansqStoneGetBalance"]() {
        let _0x45a19b = "https://cube.meituan.com/topcube/api/toc/tuantuanCoupon/getUserMultiTokenBalance",
            _0x2fbedc = "{\"userId\":" + this.userId + ",\"sourceType\":\"MEI_TUAN\",\"userType\":\"MEI_TUAN\",\"mini_program_token\":\"" + this.token + "\",\"uuid\":\"" + this.uuid + "\"}",
            _0xe2d226 = _0x27b41d(_0x45a19b, this.cookie, _0x2fbedc);
        await _0x381231("post", _0xe2d226);
        let _0x5827ba = _0x2ab163;
        if (!_0x5827ba) {
            return;
        }
        if (_0x5827ba.code == 0) {
            if (_0x5827ba.data && _0x5827ba.data.length > 0) {
                const _0x488423 = {
                    "TOTAL": 0
                };
                for (let _0x467d64 of _0x5827ba.data) {
                    _0x488423[_0x467d64.magicStonePrizeType] = _0x467d64.amount;
                    _0x488423.TOTAL += _0x467d64.amount;
                    console.log("[" + (_0x46b865[_0x467d64.magicStonePrizeType] || _0x467d64.magicStonePrizeType) + "]: " + _0x467d64.amount + "个");
                }
                let _0x25b65c = Object.keys(_0x488423).sort((_0x59279d, _0x32653c) => {
                    return _0x488423[_0x32653c] - _0x488423[_0x59279d];
                });
                for (let _0x29f2b0 of _0x25b65c) {
                    this.stone.stoneList[_0x29f2b0] = _0x488423[_0x29f2b0];
                }
            } else {
                console.log("没有魔法石了");
            }
        } else {
            console.log("查询魔法石数量失败: " + _0x5827ba.msg);
        }
    }
    async ["tuantuansqStonePreExchangeCoupon"]() {
        let _0xc46c55 = "https://cube.meituan.com/topcube/api/toc/tuantuanCoupon/preExchangeCoupon",
            _0x492721 = "{\"activityKey\":\"a807ca7cecdb\",\"userId\":" + this.userId + ",\"sourceType\":\"MEI_TUAN\",\"userType\":\"MEI_TUAN\",\"mini_program_token\":\"" + this.token + "\",\"uuid\":\"" + this.uuid + "\"}",
            _0x3753c3 = _0x27b41d(_0xc46c55, this.cookie, _0x492721);
        await _0x381231("post", _0x3753c3);
        let _0x3facb2 = _0x2ab163;
        if (!_0x3facb2) {
            return;
        }
        if (_0x3facb2.code == 0) {
            this.stone.exchangeChance = true;
        } else {
            _0x3facb2.code == 1 ? (this.stone.exchangeChance = false, console.log("魔法石合成机会已用完")) : console.log("查询魔法石合成次数机会失败: " + _0x3facb2.msg);
        }
    }
    async ["tuantuansqStoneExchangeCoupon"](_0x142699, _0x3f343b) {
        let _0x387bca = [],
            _0x599c52 = [],
            _0x46c29b = 0,
            _0x35fa75 = 0;
        for (let _0xb2d104 in this.stone.stoneList) {
            if (_0xb2d104 == "TOTAL") {
                continue;
            }
            let _0x4b9302 = Math.ceil(this.stone.stoneList[_0xb2d104] / 3);
            if (_0x4b9302 == 0) {
                continue;
            }
            _0x46c29b += _0x4b9302;
            _0x35fa75++;
            const _0x2d6b36 = {
                "stoneType": _0xb2d104,
                "stoneCount": _0x4b9302
            };
            _0x387bca.push(_0x2d6b36);
            _0x599c52.push(_0x4b9302 + "个[" + _0x46b865[_0xb2d104] + "]");
            if (_0x35fa75 >= 2) {
                break;
            }
        }
        if (_0x35fa75 < 2) {
            this.stone.exchangeChance = false;
            console.log("魔法石种类不足，不合成");
            return;
        }
        if (_0x46c29b < 2) {
            this.stone.exchangeChance = false;
            console.log("魔法石数量不足，不合成");
            return;
        }
        console.log("准备用" + _0x599c52.join("，") + "合成优惠券...");
        let _0x40071c = "https://cube.meituan.com/topcube/api/toc/tuantuanCoupon/exchangeCoupon",
            _0xeb793d = "{\"wishLabelIds\":[" + _0x142699 + "],\"stones\":" + JSON.stringify(_0x387bca) + ",\"activityKey\":\"a807ca7cecdb\",\"userId\":" + this.userId + ",\"sourceType\":\"MEI_TUAN\",\"userType\":\"MEI_TUAN\",\"mini_program_token\":\"" + this.token + "\",\"uuid\":\"" + this.uuid + "\",\"riskForm\":\"" + this.getRiskForm(_0x3f343b, "tuantuanshenquan") + "\"}",
            _0x43e386 = _0x27b41d(_0x40071c, this.cookie, _0xeb793d);
        await _0x381231("post", _0x43e386);
        let _0x59e414 = _0x2ab163;
        if (!_0x59e414) {
            return;
        }
        for (let _0x348d14 of _0x387bca) {
            let _0x228031 = _0x348d14.stoneType;
            this.stone.stoneList[_0x228031] -= _0x348d14.stoneCount;
            this.stone.stoneList.TOTAL -= _0x348d14.stoneCount;
        }
        if (_0x59e414.code == 0) {
            let _0x3372cc = "[" + _0x59e414.data.couponTitle + "]: " + _0x59e414.data.couponUseCondition + "减" + _0x59e414.data.couponValue;
            this.coupon.push(_0x3372cc);
            console.log(_0x3372cc);
        } else {
            console.log("魔法石合成优惠券失败: " + _0x59e414.msg);
        }
    }
    async ["tuantuansqStoneAppTask"]() {
        console.log("每天魔法石合成优惠券，入口：APP-我的-团团神券-集宝石");
        await this.tuantuansqGetUserTasks(_0x11b552.zsTask);
        await this.tuantuansqStoneGetBalance();
        await this.tuantuansqStonePreExchangeCoupon();
        for (let _0xfbf8ba = 0; _0xfbf8ba < 4 && this.stone.stoneList.TOTAL >= 2 && this.stone.exchangeChance; _0xfbf8ba++) {
            let _0x15eec7 = Math.floor(Math.random() * 2);
            await this.tuantuansqStoneExchangeCoupon(_0x15eec7, 88888889);
            await this.tuantuansqStonePreExchangeCoupon();
        }
    }
    async ["mrzqQueryUserRewardTask"](_0xbfecf5) {
        let _0xcd9168 = "https://cube.meituan.com/topcube/api/toc/calendar/queryUserRewardTask",
            _0xfda9b3 = "{\"userId\":\"" + this.userId + "\",\"sourceType\":\"MEI_TUAN\",\"mini_program_token\":\"" + this.token + "\",\"activitySecret\":\"" + _0xbfecf5 + "\"}",
            _0x1331db = _0x27b41d(_0xcd9168, this.cookie, _0xfda9b3);
        await _0x381231("post", _0x1331db);
        let _0x57ff82 = _0x2ab163;
        if (!_0x57ff82) {
            return;
        }
        if (_0x57ff82.code == 0) {
            for (let _0x328866 of _0x57ff82.data.getUserTaskResp.data) {
                let _0x34a006 = _0x328866.taskRuleVos.filter(_0x4cfb75 => _0x4cfb75.status != "PRIZE_SUCC");
                if (!_0x34a006.length) {
                    continue;
                }
                let _0x4e9ab3 = _0x34a006[0],
                    _0x3c8131 = JSON.parse(_0x4e9ab3.ruleConfig),
                    _0x5be0e7 = _0x3c8131.staySeconds || 0;
                console.log("准备完成任务[" + _0x328866.title + "]...");
                await this.mrzqStartUserTask(_0x4e9ab3.taskIdKey, _0x4e9ab3.taskRuleIdKey, 10000003, _0x5be0e7);
            }
        } else {
            console.log("查询列表失败: " + _0x57ff82.msg);
        }
    }
    async ["mrzqGetTaskList"](_0x1ef4b7) {
        let _0x1bc181 = "https://cube.meituan.com/topcube/api/toc/gold/getTaskList?k=" + _0x509ff9,
            _0x476b47 = "{\"userId\":" + this.userId + ",\"sourceType\":\"MEI_TUAN\",\"userType\":\"MEI_TUAN\",\"uuid\":\"" + this.uuid + "\",\"mini_program_token\":\"" + this.token + "\",\"token\":\"" + this.token + "\",\"cityId\":30,\"activitySecretKey\":\"" + _0x1ef4b7 + "\"}",
            _0x33ced0 = _0x27b41d(_0x1bc181, this.cookie, _0x476b47);
        await _0x381231("post", _0x33ced0);
        let _0x307b4a = _0x2ab163;
        if (!_0x307b4a) {
            return;
        }
        if (_0x307b4a.code == 0) {
            for (let _0x443984 of _0x307b4a.data) {
                for (let _0x5220ea of _0x443984.taskVos) {
                    let _0x515390 = _0x5220ea.taskRuleVos.filter(_0x1c7da1 => _0x1c7da1.status == "INIT");
                    if (!_0x515390.length) {
                        continue;
                    }
                    let _0x4f00f4 = _0x515390[0],
                        _0x5d71bc = JSON.parse(_0x4f00f4.ruleConfig),
                        _0x59ea48 = _0x5d71bc.staySeconds || 0;
                    console.log("准备完成任务[" + _0x5220ea.title + "]...");
                    await this.mrzqStartUserTask(_0x4f00f4.taskIdKey, _0x4f00f4.taskRuleIdKey, _0x509ff9, _0x59ea48);
                }
            }
        } else {
            console.log("查询列表失败: " + _0x307b4a.msg);
        }
    }
    async ["mrzqStartUserTask"](_0x882e53, _0x345bb8, _0x4f3df2, _0x1b960e) {
        let _0x3543de = "https://cube.meituan.com/topcube/api/toc/task/startUserTask?k=" + _0x4f3df2,
            _0xec5258 = "{\"taskIdKey\":\"" + _0x882e53 + "\",\"taskRuleIdKey\":\"" + _0x345bb8 + "\",\"cubePageId\":" + _0x4f3df2 + ",\"userId\":\"" + this.userId + "\",\"uuid\":\"" + this.uuid + "\",\"mini_program_token\":\"" + this.token + "\",\"userType\":\"MEI_TUAN\",\"sourceType\":\"MEI_TUAN\",\"cityId\":30,\"riskForm\":\"" + this.getRiskForm(_0x4f3df2, "") + "\"}",
            _0x1adec4 = _0x27b41d(_0x3543de, this.cookie, _0xec5258);
        await _0x381231("post", _0x1adec4);
        let _0x1a1002 = _0x2ab163;
        if (!_0x1a1002) {
            return;
        }
        _0x1a1002.code == 0 ? (_0x1b960e > 0 && (console.log("等待" + _0x1b960e + "秒完成任务..."), await $.wait(_0x1b960e * 1000 + 1000)), await this.mrzqUpdateUserTask(_0x882e53, _0x345bb8, _0x4f3df2, _0x1a1002.taskNo, _0x1a1002.taskRuleNo, _0x1a1002.actionNo)) : console.log("完成任务失败: " + _0x1a1002.msg);
    }
    async ["mrzqUpdateUserTask"](_0x4e7a1d, _0x2b9f41, _0x15da79, _0x2ed6c3, _0x2cfd18, _0x3d749b) {
        let _0x1ad4e3 = "https://cube.meituan.com/topcube/api/toc/task/updateUserTask?k=" + _0x15da79,
            _0xc579ff = "{\"taskIdKey\":\"" + _0x4e7a1d + "\",\"taskRuleIdKey\":\"" + _0x2b9f41 + "\",\"cubePageId\":" + _0x15da79 + ",\"userId\":\"" + this.userId + "\",\"uuid\":\"" + this.uuid + "\",\"mini_program_token\":\"" + this.token + "\",\"userType\":\"MEI_TUAN\",\"sourceType\":\"MEI_TUAN\",\"cityId\":30,\"taskNo\":\"" + _0x2ed6c3 + "\",\"taskRuleNo\":\"" + _0x2cfd18 + "\",\"actionNo\":\"" + _0x3d749b + "\",\"riskForm\":\"" + this.getRiskForm(_0x15da79, "") + "\"}",
            _0x425053 = _0x27b41d(_0x1ad4e3, this.cookie, _0xc579ff);
        await _0x381231("post", _0x425053);
        let _0x52ba7e = _0x2ab163;
        if (!_0x52ba7e) {
            return;
        }
        if (_0x52ba7e.code == 0) {
            for (let _0x181184 of _0x52ba7e.prizeList) {
                console.log("领取任务奖励获得" + _0x181184.number + "金币");
            }
        } else {
            console.log("领取任务奖励失败: " + _0x52ba7e.msg);
        }
    }
    async ["mrzqUserRewardAmount"](_0x36e577) {
        let _0x1dee32 = "https://cube.meituan.com/topcube/api/toc/calendar/queryUserRewardAmount",
            _0x47ca99 = "{\"activitySecret\":\"" + _0x36e577 + "\",\"userId\":\"" + this.userId + "\",\"mini_program_token\":\"" + this.token + "\",\"sourceType\":\"MEI_TUAN\"}",
            _0x2c3c2a = _0x27b41d(_0x1dee32, this.cookie, _0x47ca99);
        await _0x381231("post", _0x2c3c2a);
        let _0x5bcd3e = _0x2ab163;
        if (!_0x5bcd3e) {
            return;
        }
        _0x5bcd3e.code == 0 ? (this.accountInfo.mrzqApp = _0x5bcd3e.data.userRewardAmount, console.log("金币余额：" + _0x5bcd3e.data.userRewardAmount)) : console.log("查询金币余额失败: " + _0x5bcd3e.msg);
    }
    async ["mrzqAppTask"]() {
        const _0x4c81bf = {
            "MODrg": "金币可兑现到美团钱包或兑换美团支付满减券"
        };
        console.log(_0x4c81bf.MODrg);
        await this.mrzqQueryUserRewardTask(_0x1b070f.v1);
        await this.mrzqUserRewardAmount(_0x1b070f.v1);
    }
    async ["mrzqWxGetUserTasks"](_0x3d2f28) {
        let _0x5c861c = "https://cube.meituan.com/topcube/api/toc/task/getUserTasks",
            _0x59796e = "{\"userId\":" + this.userId + ",\"userType\":\"MEI_TUAN\",\"uuid\":\"" + this.uuid + "\",\"taskIdKeys\":" + JSON.stringify(_0x3d2f28) + ",\"sourceType\":\"MEI_TUAN\",\"mini_program_token\":\"" + this.token + "\",\"inviter\":\"\",\"inviterTaskIdKey\":\"\"}",
            _0x2e7332 = _0x27b41d(_0x5c861c, this.cookie, _0x59796e);
        _0x2e7332.headers["Content-Type"] = "application/json";
        await _0x381231("post", _0x2e7332);
        let _0x2467cc = _0x2ab163;
        if (!_0x2467cc) {
            return;
        }
        if (_0x2467cc.code == 0) {
            for (let _0x4cbb2c of _0x2467cc.data) {
                if (_0x4cbb2c.code != 1007) {
                    if (!_0x4cbb2c.taskRuleVos || _0x4cbb2c.taskRuleVos.length == 0) {
                        console.log("任务[" + _0x4cbb2c.title + "] -- " + _0x4cbb2c.msg);
                        continue;
                    }
                    if (_0x4cbb2c.title.indexOf("小程序下单") > -1) {
                        continue;
                    }
                    let _0x47c932 = _0x4cbb2c.extend ? true : false;
                    if (_0x47c932 && _0x4cbb2c.extend.isSignInToday == 1) {
                        console.log("任务[" + _0x4cbb2c.title + "] -- 已完成");
                        continue;
                    }
                    for (let _0x455e14 of _0x4cbb2c.taskRuleVos) {
                        if (_0x455e14.status == "PRIZE_SUCC" || _0x455e14.status == "DELETE") {
                            !_0x47c932 && console.log("任务[" + _0x4cbb2c.title + "] -- 已完成");
                        } else {
                            if (_0x455e14.status == "CAN_RECEIVE") {
                                console.log("任务[" + _0x4cbb2c.title + "] -- 可领取奖励");
                                await this.mrzqWxSendTaskPrize(_0x4cbb2c.taskIdKey, _0x455e14.taskRuleIdKey, 0, _0x4cbb2c.taskNo, _0x455e14.taskRuleNo);
                                if (_0x47c932) {
                                    break;
                                }
                            } else {
                                console.log("任务[" + _0x4cbb2c.title + "] -- 未完成");
                                await this.mrzqWxStartUserTask(_0x4cbb2c.taskIdKey, _0x455e14.taskRuleIdKey, 123);
                                if (_0x47c932) {
                                    break;
                                }
                            }
                        }
                    }
                } else {
                    console.log("任务[" + _0x4cbb2c.title + "] -- " + _0x4cbb2c.msg);
                }
            }
        } else {
            console.log("查询列表失败: " + _0x2467cc.msg);
        }
    }
    async ["mrzqWxStartUserTask"](_0x2340f4, _0x1d658c, _0x1bd0a1) {
        let _0x46b5c2 = "https://cube.meituan.com/topcube/api/toc/task/startUserTask",
            _0x2ffd5c = "{\"openId\":\"\",\"userId\":\"" + this.userId + "\",\"mini_program_token\":\"" + this.token + "\",\"uuid\":\"" + this.uuid + "\",\"userType\":\"MEI_TUAN\",\"taskIdKey\":\"" + _0x2340f4 + "\",\"taskRuleIdKey\":\"" + _0x1d658c + "\",\"cubePageId\":" + _0x1bd0a1 + ",\"sourceType\":\"MEI_TUAN\",\"riskForm\":\"" + this.getRiskForm(_0x1bd0a1, "") + "\"}",
            _0x2cc016 = _0x27b41d(_0x46b5c2, this.cookie, _0x2ffd5c);
        await _0x381231("post", _0x2cc016);
        let _0xf66189 = _0x2ab163;
        if (!_0xf66189) {
            return;
        }
        _0xf66189.code == 0 ? (console.log("完成任务成功"), await this.mrzqWxUpdateUserTask(_0x2340f4, _0x1d658c, _0x1bd0a1, _0xf66189.taskNo, _0xf66189.taskRuleNo, _0xf66189.actionNo)) : (console.log("完成任务失败: " + _0xf66189.msg), _0xf66189.msg.indexOf("活动已完成") > -1 && (await this.mrzqWxUpdateUserTask(_0x2340f4, _0x1d658c, _0x1bd0a1, _0xf66189.taskNo, _0xf66189.taskRuleNo, _0xf66189.actionNo)));
    }
    async ["mrzqWxUpdateUserTask"](_0x5366fd, _0x1c209a, _0x2f05bb, _0x54a2cc, _0x1ee83e, _0x5dca8e) {
        let _0x422342 = "https://cube.meituan.com/topcube/api/toc/task/updateUserTask",
            _0x3fe20f = "{\"openId\":\"\",\"taskIdKey\":\"" + _0x5366fd + "\",\"taskRuleIdKey\":\"" + _0x1c209a + "\",\"cubePageId\":0,\"userId\":\"" + this.userId + "\",\"uuid\":\"" + this.uuid + "\",\"mini_program_token\":\"" + this.token + "\",\"userType\":\"MEI_TUAN\",\"sourceType\":\"MEI_TUAN\",\"taskNo\":\"" + _0x54a2cc + "\",\"taskRuleNo\":\"" + _0x1ee83e + "\",\"actionNo\":\"" + _0x5dca8e + "\",\"riskForm\":\"" + this.getRiskForm(_0x2f05bb, "") + "\"}",
            _0x3e779a = _0x27b41d(_0x422342, this.cookie, _0x3fe20f);
        await _0x381231("post", _0x3e779a);
        let _0x152296 = _0x2ab163;
        if (!_0x152296) {
            return;
        }
        if (_0x152296.code == 0) {
            if (_0x152296.prizeList && _0x152296.prizeList.length > 0) {
                for (let _0xecc98 of _0x152296.prizeList) {
                    console.log("领取任务奖励获得" + _0xecc98.number + "金币");
                }
            } else {
                console.log("更新任务状态成功");
                await this.mrzqWxSendTaskPrize(_0x5366fd, _0x1c209a, _0x2f05bb, _0x54a2cc, _0x1ee83e);
            }
        } else {
            console.log("更新任务状态失败: " + _0x152296.msg);
        }
    }
    async ["mrzqWxSendTaskPrize"](_0x35f93b, _0x7396d, _0x50ae3c, _0x509a19, _0x1457d9) {
        let _0x223285 = "https://cube.meituan.com/topcube/api/toc/task/sendTaskPrize",
            _0x95f25c = "{\"userId\":" + this.userId + ",\"userType\":\"MEI_TUAN\",\"uuid\":\"" + this.uuid + "\",\"taskIdKey\":\"" + _0x35f93b + "\",\"taskRuleIdKey\":\"" + _0x7396d + "\",\"taskNo\":\"" + _0x509a19 + "\",\"taskRuleNo\":\"" + _0x1457d9 + "\",\"cubePageId\":0,\"riskForm\":\"" + this.getRiskForm(_0x50ae3c, "") + "\",\"mini_program_token\":\"" + this.token + "\"}",
            _0x370c84 = _0x27b41d(_0x223285, this.cookie, _0x95f25c);
        await _0x381231("post", _0x370c84);
        let _0x53bff8 = _0x2ab163;
        if (!_0x53bff8) {
            return;
        }
        if (_0x53bff8.code == 0) {
            for (let _0x232079 of _0x53bff8.prizeList) {
                console.log("领取任务奖励获得" + _0x232079.number + "金币");
            }
        } else {
            console.log("领取任务奖励失败: " + _0x53bff8.msg);
        }
    }
    async ["mrzqWxGetPoints"]() {
        let _0x17902a = "https://web.meituan.com/web/user/points?token=" + this.token + "&userId=" + this.userId,
            _0x33f948 = "",
            _0x4f2a05 = _0x27b41d(_0x17902a, this.cookie, _0x33f948);
        await _0x381231("get", _0x4f2a05);
        let _0x490a7d = _0x2ab163;
        if (!_0x490a7d) {
            return;
        }
        _0x490a7d.code == 0 ? (this.accountInfo.mrzqWx = _0x490a7d.data.count, console.log("金币余额：" + _0x490a7d.data.count)) : console.log("查询金币余额失败: " + _0x490a7d.msg);
    }
    async ["mrzqWxTask"]() {
        console.log("金币可兑现到微信或兑换美团外卖券");
        let _0x41754e = 5,
            _0x46e170 = _0x4cb509.task.length;
        for (let _0x5f3417 = 0; _0x5f3417 < _0x4cb509.task.length; _0x5f3417 += _0x41754e) {
            let _0x403654 = [];
            for (let _0x4d35da = 0; _0x4d35da < _0x41754e; _0x4d35da++) {
                _0x5f3417 + _0x4d35da < _0x46e170 && _0x403654.push(_0x4cb509.task[_0x5f3417 + _0x4d35da]);
            }
            _0x403654.length > 0 && (await this.mrzqWxGetUserTasks(_0x403654));
        }
        await this.mrzqWxGetPoints();
    }
    async ["mrcjWxGetActivityList"]() {
        let _0x35c9d4 = "https://fe-openapi.meituan.com/api/redenv/activityList?cityId=30",
            _0x14d0bf = "",
            _0x2b2e61 = _0x27b41d(_0x35c9d4, this.cookie, _0x14d0bf);
        await _0x381231("get", _0x2b2e61);
        let _0x3fea4c = _0x2ab163;
        if (!_0x3fea4c) {
            return;
        }
        if (_0x3fea4c.code == 0) {
            let _0x3dc697 = new Date().getTime(),
                _0x54f9d5 = _0x5dd227.split("&");
            console.log("=>去参加抽奖...");
            for (let _0x3763bf of _0x3fea4c.data.list) {
                if (_0x3763bf.join == false && _0x3763bf.openTime > _0x3dc697) {
                    for (let _0x4bd696 of _0x54f9d5) {
                        if (_0x3763bf.awardName.search(_0x4bd696) > -1) {
                            await this.mrcjWxJoinActivity(_0x3763bf.activityId, _0x3763bf.awardName);
                            await $.wait(5000);
                            break;
                        }
                    }
                }
            }
        } else {
            console.log("查询抽奖列表失败: " + _0x3fea4c.msg);
        }
    }
    async ["mrcjWxGetMyActivityList"]() {
        let _0x4d99bf = "https://fe-openapi.meituan.com/api/redenv/my?token=" + this.token,
            _0x11dfc9 = "",
            _0x1f0df4 = _0x27b41d(_0x4d99bf, this.cookie, _0x11dfc9);
        await _0x381231("get", _0x1f0df4);
        let _0x1ee2e3 = _0x2ab163;
        if (!_0x1ee2e3) {
            return;
        }
        if (_0x1ee2e3.code == 0) {
            console.log("=>已参加的抽奖活动：");
            for (let _0x3dc29d of _0x1ee2e3.data.myJoinList) {
                console.log(_0x3dc29d.name);
            }
            console.log("=>已中奖的抽奖活动：");
            for (let _0x1544ef of _0x1ee2e3.data.myAwardList) {
                if (_0x1544ef.expireTime < Date.now()) {
                    continue;
                }
                let _0x17345c = new Date(_0x1544ef.expireTime).toLocaleString(),
                    _0x5c9d82 = _0x1544ef.name + "，过期时间：" + _0x17345c;
                this.drawList.push(_0x5c9d82);
                console.log(_0x5c9d82);
            }
        } else {
            console.log("查询已参加的抽奖列表失败: " + _0x1ee2e3.msg);
        }
    }
    async ["mrcjWxJoinActivity"](_0x164828, _0xcae08d) {
        let _0x2133a0 = "https://fe-openapi.meituan.com/api/redenv/join",
            _0x228712 = "{\"code\":\"\",\"activityId\":" + _0x164828 + ",\"ip\":\"\",\"uuid\":\"" + this.uuid + "\",\"appletsFingerprint\":\"\"}",
            _0x50097a = _0x27b41d(_0x2133a0, this.cookie, _0x228712);
        await _0x381231("post", _0x50097a);
        let _0x4eced2 = _0x2ab163;
        if (!_0x4eced2) {
            return;
        }
        _0x4eced2.code == 0 ? console.log("成功参加抽奖活动[" + _0xcae08d + "]") : console.log("参加抽奖活动[" + _0xcae08d + "]失败: " + _0x4eced2.msg);
    }
    async ["mrcjWxCheckActivity"](_0x1ab284) {
        let _0x2d8e78 = "https://fe-openapi.meituan.com/api/redenv/activityDetail?activityId=" + _0x1ab284,
            _0x292a32 = "",
            _0x293381 = _0x27b41d(_0x2d8e78, this.cookie, _0x292a32);
        await _0x381231("get", _0x293381);
        let _0x1730fe = _0x2ab163;
        if (!_0x1730fe) {
            return;
        }
        if (_0x1730fe.code == 0) {
            if (_0x1730fe.data.win) {
                console.log("[" + _0x1730fe.data.awardName + "]恭喜中奖！");
            } else {
                if (_0x1730fe.data.supplyAwardInfo) {
                    let _0x1f3926 = JSON.parse(_0x1730fe.data.supplyAwardInfo);
                    _0x1f3926.length > 0 ? console.log("[" + _0x1730fe.data.awardName + "]没有中奖，得到安慰奖: " + _0x1f3926[0].title + "，" + _0x1f3926[0].condition) : console.log("[" + _0x1730fe.data.awardName + "]没有中奖");
                } else {
                    console.log("[" + _0x1730fe.data.awardName + "]没有中奖");
                }
            }
        } else {
            console.log("查询抽奖活动[" + _0x1ab284 + "]结果失败: " + _0x1730fe.msg);
        }
    }
    async ["mrcjWxTask"]() {
        const _0x1ccfab = {
            "ybGgh": "如果需要抽奖请设置变量，多个关键词用&连接，支持正则",
            "LEPfo": "没有设置关键词变量meituanDrawKeyword"
        };
        console.log(_0x1ccfab.ybGgh);
        if (!_0x5dd227) {
            console.log(_0x1ccfab.LEPfo);
            return;
        }
        await this.mrcjWxGetActivityList();
        await this.mrcjWxGetMyActivityList();
    }
    async ["mtqbWxMainpage"]() {
        let _0x475ee7 = "https://npay.meituan.com/conch/walletv3/wechat-mainpage",
            _0x537981 = "token=" + this.token,
            _0x3a50f9 = _0x27b41d(_0x475ee7, this.cookie, _0x537981);
        _0x3a50f9.headers["Content-Type"] = "application/x-www-form-urlencoded";
        await _0x381231("post", _0x3a50f9);
        let _0x1f6b29 = _0x2ab163;
        if (!_0x1f6b29) {
            return;
        }
        _0x1f6b29.status == "success" ? (this.accountInfo.mtqb = _0x1f6b29.data.assetInfoList[0].subTitle, console.log("美团钱包余额: " + _0x1f6b29.data.assetInfoList[0].subTitle + "元")) : console.log("查询美团钱包余额失败: " + _0x1f6b29.error.message);
    }
    async ["mtqbWxTask"]() {
        await this.mtqbWxMainpage();
    }
    async ["zmlWxMainpage"]() {
        let _0x50a5a0 = "https://wx.waimai.meituan.com/weapp/v1/wlwc/aggregationpage",
            _0x145792 = "firstInit=true&wm_visitid=892319ae-edba-45a0-8c6f-79a4f35e3116&wm_uuid=" + this.uuid + "&wm_longitude=" + _0x51f6ce + "&wm_latitude=" + _0x182382 + "&wm_appversion=8.6.8&wm_logintoken=" + this.token + "&openIdCipher=AwQAAABJAgAAAAEAAAAyAAAAPLgC95WH3MyqngAoyM%2Fhf1hEoKrGdo0pJ5DI44e1wGF9AT3PH7Wes03actC2n%2FGVnwfURonD78PewMUppAAAADilzSKQNsGsANCcAOfkzXSyXDo0Fe7uoMaEVq9kWussZeJXc0VKjG%2B8p9BVykTVjD6llukPjRjBsA%3D%3D&open_id=oOpUI0axUjNf5hrYNu47FvHlyuyE",
            _0x434896 = _0x27b41d(_0x50a5a0, this.cookie, _0x145792);
        _0x434896.headers["Content-Type"] = "application/x-www-form-urlencoded";
        await _0x381231("post", _0x434896);
        let _0x898afc = _0x2ab163;
        if (!_0x898afc) {
            return;
        }
        if (_0x898afc.code == 0) {
            this.accountInfo.zmlWx = _0x898afc.data.user_points.valid_points;
            console.log("现在有" + _0x898afc.data.user_points.valid_points + "米粒，" + _0x898afc.data.user_points.subtitle);
            if (_0x898afc.data.popWindow) {
                for (let _0x5a9ffc of _0x898afc.data.popWindow.module_list) {
                    console.log(_0x5a9ffc.json_data.main_title);
                    await this.zmlWxSignin();
                }
            }
            _0x898afc.data.dinner_time_sign_in.state == 2 && (await this.zmlWxDinnerSignin());
        } else {
            console.log("赚米粒进入主页失败: " + _0x898afc.msg);
        }
    }
    async ["zmlWxSignin"]() {
        let _0x55a4af = "https://wx.waimai.meituan.com/weapp/v1/wlwc/signintask/signin",
            _0x170e57 = "wm_uuid=" + this.uuid + "&wm_longitude=" + _0x51f6ce + "&wm_latitude=" + _0x182382 + "&wm_appversion=8.6.8&wm_logintoken=" + this.token + "&userToken=" + this.token + "&waimai_sign=%2F&wm_actual_longitude=" + _0x51f6ce + "&wm_actual_latitude=" + _0x182382 + "&userid=" + this.userId + "&user_id=" + this.userId + "&uuid=" + this.uuid + "&openIdCipher=AwQAAABJAgAAAAEAAAAyAAAAPLgC95WH3MyqngAoyM%2Fhf1hEoKrGdo0pJ5DI44e1wGF9AT3PH7Wes03actC2n%2FGVnwfURonD78PewMUppAAAADilzSKQNsGsANCcAOfkzXSyXDo0Fe7uoMaEVq9kWussZeJXc0VKjG%2B8p9BVykTVjD6llukPjRjBsA%3D%3D&open_id=oOpUI0axUjNf5hrYNu47FvHlyuyE",
            _0x1a7f89 = _0x27b41d(_0x55a4af, this.cookie, _0x170e57);
        _0x1a7f89.headers["Content-Type"] = "application/x-www-form-urlencoded";
        await _0x381231("post", _0x1a7f89);
        let _0x14e57b = _0x2ab163;
        if (!_0x14e57b) {
            return;
        }
        if (_0x14e57b.code == 0) {
            let _0x5cf48d = JSON.parse(_0x14e57b.data.awardDetail);
            console.log("赚米粒签到成功，获得" + _0x5cf48d.amount + "米粒");
        } else {
            console.log("赚米粒签到失败: " + _0x14e57b.msg);
        }
    }
    async ["zmlWxDinnerSignin"]() {
        let _0xa4d9b3 = "https://wx.waimai.meituan.com/weapp/v1/wlwc/dinnersignin/sign",
            _0x4752af = "wm_uuid=" + this.uuid + "&wm_longitude=" + _0x51f6ce + "&wm_latitude=" + _0x182382 + "&wm_logintoken=" + this.token + "&openIdCipher=AwQAAABJAgAAAAEAAAAyAAAAPLgC95WH3MyqngAoyM%2Fhf1hEoKrGdo0pJ5DI44e1wGF9AT3PH7Wes03actC2n%2FGVnwfURonD78PewMUppAAAADg8sODqtM0klOHM5qT3xIEbfZIZbs4oYSkQtGae1fsp8eBguaCpG8i2xSJViRrVTTctzVEXYx4lkQ%3D%3D&open_id=oOpUI0T-pA2NgboBqHAMMv7b7IcE",
            _0x4d2434 = _0x27b41d(_0xa4d9b3, this.cookie, _0x4752af);
        _0x4d2434.headers["Content-Type"] = "application/x-www-form-urlencoded";
        await _0x381231("post", _0x4d2434);
        let _0x203baf = _0x2ab163;
        if (!_0x203baf) {
            return;
        }
        _0x203baf.code == 0 ? (this.accountInfo.zmlWx = _0x203baf.data.current_points, console.log("领取到三餐奖励：" + _0x203baf.data.get_points + "米粒，当前米粒：" + _0x203baf.data.current_points)) : console.log("领取三餐米粒失败: " + _0x203baf.msg);
    }
    async ["zmlWxTask"]() {
        const _0x43175d = {
            "HUZbV": "米粒可以在美团外卖兑换红包"
        };
        console.log(_0x43175d.HUZbV);
        await this.zmlWxMainpage();
    }
    async ["qtqdMainpage"](_0x575655) {
        let _0x474814 = "https://i.meituan.com/evolve/signin/mySign/" + _0x575655,
            _0x3d512d = "",
            _0x517515 = _0x27b41d(_0x474814, this.cookie, _0x3d512d);
        await _0x381231("get", _0x517515);
        let _0x29e00d = _0x2ab163;
        if (!_0x29e00d) {
            return;
        }
        if (_0x29e00d.code == 0) {
            for (let _0x12b03b of _0x29e00d.data) {
                console.log("七天签到周期已签到" + _0x12b03b.circleSignInCount + "天，今天" + (_0x12b03b.todaySignin ? "已" : "未") + "签到");
                if (!_0x12b03b.todaySignin) {
                    await this.qtqdDoSign();
                }
            }
        } else {
            console.log("获取七天签到状态失败: " + _0x29e00d.msg);
        }
    }
    async ["qtqdDoSign"]() {
        let _0xab9bd2 = "https://wx.waimai.meituan.com/weapp/v1/wlwc/signintask/signin",
            _0x10362c = "{\"riskRequest\":\"{\\\"fingerprint\\\":\\\"123\\\",\\\"uuid\\\":\\\"" + this.uuid + "\\\",\\\"version\\\":\\\"11.20.205\\\",\\\"platform\\\":5,\\\"app\\\":\\\"0\\\",\\\"campaignPlatform\\\":\\\"14\\\",\\\"campaignType\\\":\\\"1\\\",\\\"h5Fingerprint\\\":\\\"123\\\"}\",\"code\":\"\"}",
            _0x4ea893 = _0x27b41d(_0xab9bd2, this.cookie, _0x10362c);
        await _0x381231("post", _0x4ea893);
        let _0x544757 = _0x2ab163;
        if (!_0x544757) {
            return;
        }
        if (_0x544757.code == 0) {
            console.log("七天签到成功，今天可领取: (请到APP手动选择一张领取)");
            for (let _0x4bb52a of _0x544757.data) {
                for (let _0x562ed4 of _0x4bb52a.signInAwardRecords) {
                    if (_0x562ed4.type == 1) {
                        let _0x4fa4ce = JSON.parse(_0x544757.data.info);
                        console.log("[" + _0x4fa4ce.name + "]: " + _0x4fa4ce.condition + "减" + _0x4fa4ce.amount);
                    }
                }
            }
        } else {
            console.log("七天签到失败: " + _0x544757.msg);
        }
    }
    async ["qtqdReceiveCoupon"](_0x3d3d4c, _0x262689) {
        let _0x5ebeb2 = "https://i.meituan.com/evolve/signin/receiveCoupon",
            _0x1c5fcb = "{\"riskRequest\":\"{\\\"fingerprint\\\":\\\"123\\\",\\\"uuid\\\":\\\"" + this.uuid + "\\\",\\\"version\\\":\\\"11.20.205\\\",\\\"platform\\\":5,\\\"app\\\":\\\"0\\\",\\\"campaignPlatform\\\":\\\"14\\\",\\\"campaignType\\\":\\\"1\\\",\\\"h5Fingerprint\\\":\\\"123\\\"}\",\"activityId\":" + _0x3d3d4c + ",\"id\":" + _0x262689 + "}",
            _0x756fc3 = _0x27b41d(_0x5ebeb2, this.cookie, _0x1c5fcb);
        _0x756fc3.headers["Content-Type"] = "application/x-www-form-urlencoded";
        await _0x381231("post", _0x756fc3);
        let _0x394b7b = _0x2ab163;
        if (!_0x394b7b) {
            return;
        }
        if (_0x394b7b.code == 0) {
            let _0x1dae93 = JSON.parse(_0x394b7b.data.info),
                _0x5e3cdc = "[" + _0x1dae93.name + "]: " + _0x1dae93.condition + "减" + _0x1dae93.amount;
            this.coupon.push(_0x5e3cdc);
            console.log(_0x5e3cdc);
        } else {
            console.log("领取三餐米粒失败: " + _0x394b7b.msg);
        }
    }
    async ["qtqdAppTask"]() {
        const _0x517514 = {
            "tYSHB": "入口：美团APP-领红包"
        };
        console.log(_0x517514.tYSHB);
        await this.qtqdMainpage(_0x47f950);
    }
    async ["czjMainpage"]() {
        let _0x19faed = "https://coin.meituan.com/coins/entrance";
        const _0x4c7e5b = {
            "cityId": "30",
            "uuid": this.uuid,
            "userId": this.userId,
            "token": this.token,
            "app": "group",
            "entry": "",
            "version": "12.0.202",
            "platform": "iphone",
            "stid": "",
            "utm_term": "12.0.202",
            "utm_medium": "iphone",
            "utm_source": "AppStore",
            "utm_content": this.uuid,
            "utm_campaign": "",
            "tyId": 0,
            "riskParams": {}
        };
        _0x4c7e5b.riskParams.uuid = this.uuid;
        _0x4c7e5b.riskParams.ip = "";
        _0x4c7e5b.riskParams.platform = 5;
        _0x4c7e5b.riskParams.fingerprint = "";
        _0x4c7e5b.riskParams.version = "12.0.202";
        _0x4c7e5b.riskParams.app = 0;
        let _0x571e2e = JSON.stringify(_0x4c7e5b),
            _0x807a3 = _0x27b41d(_0x19faed, this.cookie, _0x571e2e);
        _0x807a3.headers.coinType = 1;
        await _0x381231("post", _0x807a3);
        let _0x31df35 = _0x2ab163;
        if (!_0x31df35) {
            return;
        }
        if (_0x31df35.code == 0) {
            console.log("充值金余额：" + _0x31df35.data.user.coins + " ≈ " + _0x31df35.data.user.coinsValue + "元");
            for (let _0x35e47b of _0x2bfd19) {
                await this.czjTaskReport(_0x35e47b);
            }
        } else {
            console.log("获取充值金余额失败: " + _0x31df35.message);
        }
    }
    async ["czjTaskReport"](_0x253cf0) {
        let _0x2d1a25 = "https://apimobile.meituan.com/task/trigger/report";
        const _0x3f9962 = {
            "drawTime": 1
        };
        const _0x17bc8c = {
            "cityId": "30",
            "uuid": this.uuid,
            "userId": this.userId,
            "token": this.token,
            "app": "group",
            "entry": "",
            "version": "12.0.202",
            "platform": "iphone",
            "stid": "",
            "utm_term": "12.0.202",
            "utm_medium": "iphone",
            "utm_source": "AppStore",
            "utm_content": this.uuid,
            "utm_campaign": "",
            "activityId": 0,
            "taskGroupKey": _0x253cf0.taskGroupKey,
            "taskKey": _0x253cf0.taskKey,
            "taskType": _0x253cf0.taskType,
            "userAction": _0x3f9962,
            "riskParams": {}
        };
        _0x17bc8c.riskParams.uuid = this.uuid;
        _0x17bc8c.riskParams.ip = "";
        _0x17bc8c.riskParams.platform = 5;
        _0x17bc8c.riskParams.fingerprint = "";
        _0x17bc8c.riskParams.version = "12.0.202";
        _0x17bc8c.riskParams.app = 0;
        let _0x149b2e = JSON.stringify(_0x17bc8c),
            _0x2067a2 = _0x27b41d(_0x2d1a25, this.cookie, _0x149b2e);
        _0x2067a2.headers.coinType = 1;
        await _0x381231("post", _0x2067a2);
        let _0x34494b = _0x2ab163;
        if (!_0x34494b) {
            return;
        }
        if (_0x34494b.code == 0) {
            if (_0x34494b?.["data"]?.["awardVosMap"]?.["length"]) {
                let _0x4a0b68 = _0x34494b.data.awardVosMap[0].awardInfo ? _0x34494b.data.awardVosMap[0].awardInfo + "充值金" : _0x34494b.data.awardVosMap[0].awardName;
                console.log("完成任务[" + _0x253cf0.name + "]获得" + _0x4a0b68);
            } else {
                console.log("完成任务[" + _0x253cf0.name + "]成功");
                await this.czjTaskReceiveAward(_0x253cf0);
            }
        } else {
            console.log("完成任务[" + _0x253cf0.name + "]失败: " + _0x34494b.msg);
        }
    }
    async ["czjTaskReceiveAward"](_0x4809ff) {
        let _0x1cf18a = "https://apimobile.meituan.com/task/entrance/receiveAward";
        const _0x1dd2d9 = {
            "drawTime": 1
        };
        const _0x5ce01d = {
            "cityId": "30",
            "uuid": this.uuid,
            "userId": this.userId,
            "token": this.token,
            "app": "group",
            "entry": "",
            "version": "12.0.202",
            "platform": "iphone",
            "stid": "",
            "utm_term": "12.0.202",
            "utm_medium": "iphone",
            "utm_source": "AppStore",
            "utm_content": this.uuid,
            "utm_campaign": "",
            "activityId": 0,
            "taskGroupKey": _0x4809ff.taskGroupKey,
            "taskKey": _0x4809ff.taskKey,
            "awardUuids": [_0x4809ff.awardUuids],
            "userAction": _0x1dd2d9,
            "riskParams": {}
        };
        _0x5ce01d.riskParams.uuid = this.uuid;
        _0x5ce01d.riskParams.ip = "";
        _0x5ce01d.riskParams.platform = 5;
        _0x5ce01d.riskParams.fingerprint = "";
        _0x5ce01d.riskParams.version = "12.0.202";
        _0x5ce01d.riskParams.app = 0;
        let _0x8f5b0c = JSON.stringify(_0x5ce01d),
            _0x575b63 = _0x27b41d(_0x1cf18a, this.cookie, _0x8f5b0c);
        _0x575b63.headers.coinType = 1;
        await _0x381231("post", _0x575b63);
        let _0x3c7a03 = _0x2ab163;
        if (!_0x3c7a03) {
            return;
        }
        if (_0x3c7a03.code == 0) {
            if (_0x3c7a03?.["data"]?.["awardVosMap"]?.["length"]) {
                let _0x1192e2 = _0x3c7a03.data.awardVosMap[0].awardInfo ? _0x3c7a03.data.awardVosMap[0].awardInfo + "充值金" : _0x3c7a03.data.awardVosMap[0].awardName;
                console.log("领取任务[" + _0x4809ff.name + "]奖励获得" + _0x1192e2);
            } else {
                console.log("领取任务[" + _0x4809ff.name + "]奖励失败");
            }
        } else {
            console.log("领取任务[" + _0x4809ff.name + "]奖励失败: " + _0x3c7a03.msg);
        }
    }
    async ["czjAppTask"]() {
        const _0x1520d2 = {
            "lSpbn": "入口：美团APP-手机充值"
        };
        console.log(_0x1520d2.lSpbn);
        await this.czjMainpage();
    }
    async ["printInfo"]() {
        $.logAndNotify("\n---------- 账号[" + this.index + "] " + this.name + " ----------");
        $.logAndNotify("手机：" + this.mobile);
        if (this.coupon.length > 0) {
            $.logAndNotify("----------- 满减券 -----------");
            if (this.coupon.length >= 8) {
                $.logAndNotify("领到的满减券过多，不推送，请自行登录APP或查看脚本日志");
            } else {
                for (let _0x334b68 of this.coupon) {
                    $.logAndNotify(_0x334b68);
                }
            }
        }
        if (this.drawList.length > 0) {
            $.logAndNotify("----------- 抽奖 -----------");
            for (let _0x3788e7 of this.drawList) {
                $.logAndNotify(_0x3788e7);
            }
        }
        $.logAndNotify("------------------------------");
        if (this.accountInfo.xsqhbRedBean) {
            $.logAndNotify("限时抢红包-APP 账户余额：" + this.accountInfo.xsqhbRedBean + "红包豆");
        }
        if (this.accountInfo.ddjyqApp) {
            $.logAndNotify("点点就有钱-APP 账户余额：" + this.accountInfo.ddjyqApp + "元");
        }
        if (this.accountInfo.mrzqApp) {
            $.logAndNotify("每日赚钱-APP 账户余额：" + this.accountInfo.mrzqApp + "金币");
        }
        if (this.accountInfo.mrzqWx) {
            $.logAndNotify("每日赚钱-微信 账户余额：" + this.accountInfo.mrzqWx + "金币");
        }
        if (this.accountInfo.zmlWx) {
            $.logAndNotify("赚米粒 账户余额：" + this.accountInfo.zmlWx + "米粒");
        }
        if (this.accountInfo.mtqb) {
            $.logAndNotify("美团钱包 账户余额：" + this.accountInfo.mtqb + "元");
        }
    }
    async ["userTask"]() {
        console.log("\n================== 账号[" + this.index + "] ==================");
        for (let _0x4bbb3c of _0x3f1e6e) {
            let _0x3b0c2e = "" + _0x4bbb3c.block + _0x4bbb3c.type + "Task";
            if (!this[_0x3b0c2e]) {
                continue;
            }
            console.log("\n---------- " + _0x4bbb3c.name + "--" + _0x4db903[_0x4bbb3c.type] + " ----------");
            await this[_0x3b0c2e]();
        }
    }
}
!(async () => {
        await _0x45ac8e();
        if (_0x5c7c58 == false) {
            return;
        }
        await _0x36dbba();
        if (!(await _0x1889a0())) {
            return;
        }
        console.log("\n-------- 运行任务列表 --------");
        for (let _0x5b8694 of _0x3f1e6e) {
            console.log(_0x5b8694.name + "--" + _0x4db903[_0x5b8694.type]);
        }
        console.log("-----------------------------");
        for (let _0x4f5137 of cookiesArr) {
            await _0x4f5137.getInfoFullPhoneNum();
        }
        let _0x3b4a21 = cookiesArr.filter(_0xb1d93e => _0xb1d93e.valid);
        if (_0x3b4a21.length) {
            for (let _0x2a3deb of _0x3b4a21) {
                await _0x2a3deb.userTask();
            }
            for (let _0x4709d3 of _0x3b4a21) {
                await _0x4709d3.printInfo();
            }
        }
        _0xc59899 == 1 && (await $.showmsg());
})().catch(_0x21df19 => console.log(_0x21df19)).finally(() => $.done());

async function _0x1889a0() {
    if (MT_CK) {
        let _0x3a4804 = envSplitor[0];
        for (let _0x4b4d43 of envSplitor) {
            if (MT_CK.indexOf(_0x4b4d43) > -1) {
                _0x3a4804 = _0x4b4d43;
                break;
            }
        }
        for (let ck of MT_CK.split(_0x3a4804)) {
            if (ck) {
                cookiesArr.push(new _0x153f00(ck));
            }
        }
        _0x25c2e9 = cookiesArr.length;
    } else {
        console.log("未找到CK");
        return;
    }
    console.log("共找到" + _0x25c2e9 + "个账号");
    return true;
}

async function _0x45ac8e(_0x5a7784 = 0) {
    await _0x381231("get", {
        "url": "https://leafxcy.coding.net/api/user/leafxcy/project/validcode/shared-depot/validCode/git/blob/master/code.json"
    });
    let _0x44f6b0 = _0x2ab163;
    if (!_0x44f6b0) {
        if (_0x5a7784 < _0x444752) {
            await _0x45ac8e(++_0x5a7784);
        }
        return;
    }
    _0x44f6b0?.["code"] == 0 && (_0x44f6b0 = JSON.parse(_0x44f6b0.data.file.data));
    _0x44f6b0?.["commonNotify"] && _0x44f6b0.commonNotify.length > 0 && $.logAndNotify(_0x44f6b0.commonNotify.join("\n") + "\n");
    //_0x44f6b0?.["commonMsg"] && _0x44f6b0.commonMsg.length > 0 && console.log(_0x44f6b0.commonMsg.join("\n") + "\n");
    if (_0x44f6b0["meituan"]) {
        let _0x3c801b = _0x44f6b0["meituan"];
        if (_0x3c801b.status == 0) {
            if (_0xf1dcf5 >= _0x3c801b.version) {
                _0x5c7c58 = true;
                _0x46f152 = "https://leafxcy.coding.net/api/user/leafxcy/project/validcode/shared-depot/validCode/git/blob/master/meituan.json";
                //console.log(_0x3c801b.msg[_0x3c801b.status]);
                console.log(_0x3c801b.updateMsg);
                console.log("现在运行的脚本版本是：" + _0xf1dcf5 + "，最新脚本版本：" + _0x3c801b.latestVersion);
            } else {
                console.log(_0x3c801b.versionMsg);
            }
        } else {
            console.log(_0x3c801b.msg[_0x3c801b.status]);
        }
    } else {
        console.log(_0x44f6b0.errorMsg);
    }
}
async function _0x36dbba(_0x382645 = 0) {
    let _0x19f119 = "";
    const _0x37b298 = {
        "url": _0x46f152
    };
    await _0x381231("get", _0x37b298);
    let _0x584d74 = _0x2ab163;
    if (!_0x584d74) {
        if (_0x382645 < _0x444752) {
            await _0x36dbba(++_0x382645);
        }
        return _0x19f119;
    }
    _0x584d74?.["code"] == 0 && (_0x584d74 = JSON.parse(_0x584d74.data.file.data));
    _0x2312f4 = _0x584d74.ddjyqTaskListStr;
    _0x4cb509.sign = _0x584d74.mrzqSignId;
    _0x4cb509.task = _0x584d74.mrzqTaskId;
    _0x4926ff.sign = _0x584d74.lxqdSignId;
    _0x11b552.task = _0x584d74.tuantuansqTaskId;
    _0x11b552.zsTask = _0x584d74.tuantuansqzsTaskId;
    _0x1e0f56 = _0x584d74.gundomConf || _0x1e0f56;
    _0x3f1e6e = _0x584d74.taskList;
    _0x5ae464 = _0x584d74.inviteCode || _0x5ae464;
    _0x1e75f5 = _0x584d74.activityViewId || _0x1e75f5;
    _0x5ad599 = _0x584d74.actionCode || _0x5ad599;
    _0xe252cb = _0x584d74.gdIdConf || _0xe252cb;
    _0x428978 = _0x584d74.couponReferIdList1 || _0x428978;
    _0x29b8bc = _0x584d74.ttsqqdBatchCouponReferIdList || _0x29b8bc;
    return _0x19f119;
}
function _0x27b41d(_0x39b977, _0x23409e, _0x5d302b = "") {

    let _0x4a4563 = _0x39b977.replace("//", "/").split("/")[1];
    const _0xf9781a = {
        "Host": _0x4a4563,
        "Connection": "keep-alive",
        "token": _0x23409e.token,
        "Cookie": "mt_c_token=" + _0x23409e.token + "; token=" + _0x23409e.token + "; uuid=" + _0x23409e.uuid + ";",
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.18(0x1800123a) NetType/WIFI Language/zh_CN miniProgram/wx2c348cf579062e56"
    };
    const _0x4db787 = {
        "url": _0x39b977,
        "headers": _0xf9781a,
        "timeout": 5000
    };
    _0x5d302b && (
        _0x4db787.body = _0x5d302b, 
        _0x4db787.headers["Content-Type"] = "application/json;charset=utf-8",
        _0x4db787.headers["Content-Length"] = _0x4db787.body ? _0x4db787.body.length : 0
    );
    return _0x4db787;
}
async function _0x381231(_0xbdf3c8, _0x44bb96) {
    _0x2ab163 = null;
    _0x11337c = null;
    _0x14d34e = null;
    return new Promise(_0x4a8582 => {
        $.send(_0xbdf3c8, _0x44bb96, async (_0x536e8e, _0x50dcdb, _0x2cbcfb) => {
            try {
                _0x11337c = _0x50dcdb;
                _0x14d34e = _0x2cbcfb;
                if (_0x536e8e) {
                    console.log(_0xbdf3c8 + "请求失败");
                    console.log(JSON.stringify(_0x536e8e));
                } else {
                    try {
                        _0x2ab163 = JSON.parse(_0x2cbcfb.body);
                    } catch (_0x58aab4) {
                        _0x2ab163 = _0x2cbcfb?.["body"] || "";
                    }
                }
            } catch (_0x4329f0) {
                console.log(_0x4329f0);
            } finally {
                _0x4a8582();
            }
        });
    });
}
function _0x2764c4(_0x57734d, _0x4c87d3, _0x5ec420, _0x54bdf5, _0x29ffef, _0x3d44e8) {
    return CryptoJS[_0x57734d].encrypt(CryptoJS.enc.Utf8.parse(_0x54bdf5), CryptoJS.enc.Utf8.parse(_0x29ffef), {
        "mode": CryptoJS.mode[_0x4c87d3],
        "padding": CryptoJS.pad[_0x5ec420],
        "iv": CryptoJS.enc.Utf8.parse(_0x3d44e8)
    }).ciphertext.toString(CryptoJS.enc.Base64);
}
function _0x5c5858(_0x3f37b4, _0x4d7aa2, _0x51a15e, _0x29689f, _0x24f65a, _0x1714c9) {
    return CryptoJS[_0x3f37b4].decrypt({
        "ciphertext": CryptoJS.enc.Base64.parse(_0x29689f)
    }, CryptoJS.enc.Utf8.parse(_0x24f65a), {
        "mode": CryptoJS.mode[_0x4d7aa2],
        "padding": CryptoJS.pad[_0x51a15e],
        "iv": CryptoJS.enc.Utf8.parse(_0x1714c9)
    }).toString(CryptoJS.enc.Utf8);
}
var _0x581fa7 = {
    "_keyStr": "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    "encode": function (_0x549878) {
        var _0x196762 = "";
        var _0x35c968, _0x32f647, _0x88318a, _0x3cdb3e, _0x2ad83f, _0x239de4, _0x46a165;
        var _0xa5167e = 0;
        _0x549878 = _0x581fa7._utf8_encode(_0x549878);
        while (_0xa5167e < _0x549878.length) {
            _0x35c968 = _0x549878.charCodeAt(_0xa5167e++);
            _0x32f647 = _0x549878.charCodeAt(_0xa5167e++);
            _0x88318a = _0x549878.charCodeAt(_0xa5167e++);
            _0x3cdb3e = _0x35c968 >> 2;
            _0x2ad83f = (_0x35c968 & 3) << 4 | _0x32f647 >> 4;
            _0x239de4 = (_0x32f647 & 15) << 2 | _0x88318a >> 6;
            _0x46a165 = _0x88318a & 63;
            if (isNaN(_0x32f647)) {
                _0x239de4 = _0x46a165 = 64;
            } else {
                isNaN(_0x88318a) && (_0x46a165 = 64);
            }
            _0x196762 = _0x196762 + this._keyStr.charAt(_0x3cdb3e) + this._keyStr.charAt(_0x2ad83f) + this._keyStr.charAt(_0x239de4) + this._keyStr.charAt(_0x46a165);
        }
        return _0x196762;
    },
    "decode": function (_0x495ccb) {
        var _0xe2dc61 = "",
            _0x320688,
            _0xef0e30,
            _0xdd3d27,
            _0xe91a52,
            _0xb55d8a,
            _0x4e63aa,
            _0x15e32d,
            _0x127415 = 0;
        _0x495ccb = _0x495ccb.replace(/[^A-Za-z0-9+/=]/g, "");
        while (_0x127415 < _0x495ccb.length) {
            _0xe91a52 = this._keyStr.indexOf(_0x495ccb.charAt(_0x127415++));
            _0xb55d8a = this._keyStr.indexOf(_0x495ccb.charAt(_0x127415++));
            _0x4e63aa = this._keyStr.indexOf(_0x495ccb.charAt(_0x127415++));
            _0x15e32d = this._keyStr.indexOf(_0x495ccb.charAt(_0x127415++));
            _0x320688 = _0xe91a52 << 2 | _0xb55d8a >> 4;
            _0xef0e30 = (_0xb55d8a & 15) << 4 | _0x4e63aa >> 2;
            _0xdd3d27 = (_0x4e63aa & 3) << 6 | _0x15e32d;
            _0xe2dc61 = _0xe2dc61 + String.fromCharCode(_0x320688);
            _0x4e63aa != 64 && (_0xe2dc61 = _0xe2dc61 + String.fromCharCode(_0xef0e30));
            _0x15e32d != 64 && (_0xe2dc61 = _0xe2dc61 + String.fromCharCode(_0xdd3d27));
        }
        _0xe2dc61 = _0x581fa7._utf8_decode(_0xe2dc61);
        return _0xe2dc61;
    },
    "_utf8_encode": function (_0x4664a1) {
        _0x4664a1 = _0x4664a1.replace(/rn/g, "n");
        var _0x4cae79 = "";
        for (var _0x244f74 = 0; _0x244f74 < _0x4664a1.length; _0x244f74++) {
            var _0x3aaa5a = _0x4664a1.charCodeAt(_0x244f74);
            if (_0x3aaa5a < 128) {
                _0x4cae79 += String.fromCharCode(_0x3aaa5a);
            } else {
                _0x3aaa5a > 127 && _0x3aaa5a < 2048 ? (_0x4cae79 += String.fromCharCode(_0x3aaa5a >> 6 | 192), _0x4cae79 += String.fromCharCode(_0x3aaa5a & 63 | 128)) : (_0x4cae79 += String.fromCharCode(_0x3aaa5a >> 12 | 224), _0x4cae79 += String.fromCharCode(_0x3aaa5a >> 6 & 63 | 128), _0x4cae79 += String.fromCharCode(_0x3aaa5a & 63 | 128));
            }
        }
        return _0x4cae79;
    },
    "_utf8_decode": function (_0x5d0756) {
        var _0x23be66 = "";
        var _0x191896 = 0;
        var _0x241c35 = c1 = c2 = 0;
        while (_0x191896 < _0x5d0756.length) {
            _0x241c35 = _0x5d0756.charCodeAt(_0x191896);
            if (_0x241c35 < 128) {
                _0x23be66 += String.fromCharCode(_0x241c35);
                _0x191896++;
            } else {
                _0x241c35 > 191 && _0x241c35 < 224 ? (c2 = _0x5d0756.charCodeAt(_0x191896 + 1), _0x23be66 += String.fromCharCode((_0x241c35 & 31) << 6 | c2 & 63), _0x191896 += 2) : (c2 = _0x5d0756.charCodeAt(_0x191896 + 1), c3 = _0x5d0756.charCodeAt(_0x191896 + 2), _0x23be66 += String.fromCharCode((_0x241c35 & 15) << 12 | (c2 & 63) << 6 | c3 & 63), _0x191896 += 3);
            }
        }
        return _0x23be66;
    }
};


function Env(name, e) {
    "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
    return new class {
        constructor(name, e) {
            this.name = name;
            this.notifyStr = "";
            this.startTime = new Date().getTime();
            Object.assign(this, e);
            console.log(this.name + " 开始运行：\n");
        }
        ["isNode"]() {
            return "undefined" != typeof module && !!module.exports;
        }
        ["isQuanX"]() {
            return "undefined" != typeof $task;
        }
        ["isSurge"]() {
            return "undefined" != typeof $httpClient && "undefined" == typeof $loon;
        }
        ["isLoon"]() {
            return "undefined" != typeof $loon;
        }
        ["getdata"](_0x43e994) {
            let _0x3c1e21 = this.getval(_0x43e994);
            if (/^@/.test(_0x43e994)) {
                const [, _0x4bd224, _0x181593] = /^@(.*?)\.(.*?)$/.exec(_0x43e994),
                    _0x507508 = _0x4bd224 ? this.getval(_0x4bd224) : "";
                if (_0x507508) {
                    try {
                        const _0x5a51e5 = JSON.parse(_0x507508);
                        _0x3c1e21 = _0x5a51e5 ? this.lodash_get(_0x5a51e5, _0x181593, "") : _0x3c1e21;
                    } catch (_0x17cb16) {
                        _0x3c1e21 = "";
                    }
                }
            }
            return _0x3c1e21;
        }
        ["setdata"](_0x2be493, _0x12b580) {
            let _0x2f2b97 = !1;
            if (/^@/.test(_0x12b580)) {
                const [, _0x3e278c, _0xadd3e6] = /^@(.*?)\.(.*?)$/.exec(_0x12b580),
                    _0x43dcfa = this.getval(_0x3e278c),
                    _0x392bd2 = _0x3e278c ? "null" === _0x43dcfa ? null : _0x43dcfa || "{}" : "{}";
                try {
                    const _0x2bbbd7 = JSON.parse(_0x392bd2);
                    this.lodash_set(_0x2bbbd7, _0xadd3e6, _0x2be493);
                    _0x2f2b97 = this.setval(JSON.stringify(_0x2bbbd7), _0x3e278c);
                } catch (_0x1ef063) {
                    const _0x67de43 = {};
                    this.lodash_set(_0x67de43, _0xadd3e6, _0x2be493);
                    _0x2f2b97 = this.setval(JSON.stringify(_0x67de43), _0x3e278c);
                }
            } else {
                _0x2f2b97 = this.setval(_0x2be493, _0x12b580);
            }
            return _0x2f2b97;
        }
        ["getval"](_0x289596) {
            return this.isSurge() || this.isLoon() ? $persistentStore.read(_0x289596) : this.isQuanX() ? $prefs.valueForKey(_0x289596) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x289596]) : this.data && this.data[_0x289596] || null;
        }
        ["setval"](_0x45d15d, _0x49253f) {
            return this.isSurge() || this.isLoon() ? $persistentStore.write(_0x45d15d, _0x49253f) : this.isQuanX() ? $prefs.setValueForKey(_0x45d15d, _0x49253f) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x49253f] = _0x45d15d, this.writedata(), !0) : this.data && this.data[_0x49253f] || null;
        }
        ["send"](_0x2a2089, _0x188c53, _0x13ab8d = () => { }) {
            if (_0x2a2089 != "get" && _0x2a2089 != "post" && _0x2a2089 != "put" && _0x2a2089 != "delete") {
                console.log("无效的http方法：" + _0x2a2089);
                return;
            }
            if (_0x2a2089 == "get" && _0x188c53.headers) {
                delete _0x188c53.headers["Content-Type"];
                delete _0x188c53.headers["Content-Length"];
            } else {
                if (_0x188c53.body && _0x188c53.headers) {
                    if (!_0x188c53.headers["Content-Type"]) {
                        _0x188c53.headers["Content-Type"] = "application/x-www-form-urlencoded";
                    }
                }
            }
            if (this.isSurge() || this.isLoon()) {
                if (this.isSurge() && this.isNeedRewrite) {
                    _0x188c53.headers = _0x188c53.headers || {};
                    const _0x462343 = {
                        "X-Surge-Skip-Scripting": !1
                    };
                    Object.assign(_0x188c53.headers, _0x462343);
                }
                const _0x4926d3 = {
                    "method": _0x2a2089,
                    "url": _0x188c53.url,
                    "headers": _0x188c53.headers,
                    "timeout": _0x188c53.timeout,
                    "data": _0x188c53.body
                };
                if (_0x2a2089 == "get") {
                    delete _0x4926d3.data;
                }
                $axios(_0x4926d3).then(_0x9afa35 => {
                    const {
                        status: _0xa15d92,
                        request: _0x28a0a2,
                        headers: _0x3af3a3,
                        data: _0x1c18be
                    } = _0x9afa35,
                        _0x3b5624 = {
                            "statusCode": _0xa15d92,
                            "headers": _0x3af3a3,
                            "body": _0x1c18be
                        };
                    _0x13ab8d(null, _0x28a0a2, _0x3b5624);
                }).catch(_0x280055 => console.log(_0x280055));
            } else {
                if (this.isQuanX()) {
                    const _0x107485 = {
                        "hints": !1
                    };
                    _0x188c53.method = _0x2a2089.toUpperCase();
                    this.isNeedRewrite && (_0x188c53.opts = _0x188c53.opts || {}, Object.assign(_0x188c53.opts, _0x107485));
                    $task.fetch(_0x188c53).then(_0x573173 => {
                        const {
                            statusCode: _0x5c808f,
                            request: _0x10a79a,
                            headers: _0x596fae,
                            body: _0x3cf4df
                        } = _0x573173,
                            _0x4fcd15 = {
                                "statusCode": _0x5c808f,
                                "headers": _0x596fae,
                                "body": _0x3cf4df
                            };
                        _0x13ab8d(null, _0x10a79a, _0x4fcd15);
                    }, _0x3aea61 => _0x13ab8d(_0x3aea61));
                } else {
                    if (this.isNode()) {
                        this.got = this.got ? this.got : require("got");
                        const {
                            url: _0x477ca9,
                            ..._0xda2df4
                        } = _0x188c53,
                            _0x514d29 = {
                                "followRedirect": false
                            };
                        this.instance = this.got.extend(_0x514d29);
                        this.instance[_0x2a2089](_0x477ca9, _0xda2df4).then(_0x53b3ad => {
                            const {
                                statusCode: _0x3738ac,
                                request: _0x12c8b6,
                                headers: _0x10814b,
                                body: _0x472631
                            } = _0x53b3ad,
                                _0x511243 = {
                                    "statusCode": _0x3738ac,
                                    "headers": _0x10814b,
                                    "body": _0x472631
                                };
                            _0x13ab8d(null, _0x12c8b6, _0x511243);
                        }, _0x3a73d8 => {
                            const {
                                message: _0x2f1a54,
                                response: _0x4e8be1
                            } = _0x3a73d8;
                            _0x13ab8d(_0x2f1a54, _0x4e8be1, _0x4e8be1 && _0x4e8be1.body);
                        });
                    }
                }
            }
        }
        ["time"](_0x3e55df) {
            let _0x9db7d7 = {
                "M+": new Date().getMonth() + 1,
                "d+": new Date().getDate(),
                "h+": new Date().getHours(),
                "m+": new Date().getMinutes(),
                "s+": new Date().getSeconds(),
                "q+": Math.floor((new Date().getMonth() + 3) / 3),
                "S": new Date().getMilliseconds()
            };
            /(y+)/.test(_0x3e55df) && (_0x3e55df = _0x3e55df.replace(RegExp.$1, (new Date().getFullYear() + "").substr(4 - RegExp.$1.length)));
            for (let _0x2d708d in _0x9db7d7) new RegExp("(" + _0x2d708d + ")").test(_0x3e55df) && (_0x3e55df = _0x3e55df.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x9db7d7[_0x2d708d] : ("00" + _0x9db7d7[_0x2d708d]).substr(("" + _0x9db7d7[_0x2d708d]).length)));
            return _0x3e55df;
        }
        async ["showmsg"]() {
            if (!this.notifyStr) {
                return;
            }
            let _0x29fa41 = this.name + " 运行通知\n\n" + this.notifyStr;
            if ($.isNode()) {
                var _0x41d2fe = require("./sendNotify");
                console.log("\n============== 推送 ==============");
                await _0x41d2fe.sendNotify(this.name, _0x29fa41);
            } else {
                this.msg(_0x29fa41);
            }
        }
        ["logAndNotify"](_0x4f8414) {
            console.log(_0x4f8414);
            this.notifyStr += _0x4f8414;
            this.notifyStr += "\n";
        }
        ["msg"](_0x477575 = t, _0x247d89 = "", _0x6b939b = "", _0x57b63f) {
            const _0x4f0c99 = {
                "XErQz": "string",
                "fkjwP": "object",
                "ACPCE": "open-url",
                "NLrOo": "media-url"
            };
            const _0x51b05a = _0x23b3d7 => {
                if (!_0x23b3d7) {
                    return _0x23b3d7;
                }
                if (_0x4f0c99.XErQz == typeof _0x23b3d7) {
                    return this.isLoon() ? _0x23b3d7 : this.isQuanX() ? {
                        "open-url": _0x23b3d7
                    } : this.isSurge() ? {
                        "url": _0x23b3d7
                    } : void 0;
                }
                if (_0x4f0c99.fkjwP == typeof _0x23b3d7) {
                    if (this.isLoon()) {
                        let _0xc6bc3e = _0x23b3d7.openUrl || _0x23b3d7.url || _0x23b3d7[_0x4f0c99.ACPCE],
                            _0x57d7d9 = _0x23b3d7.mediaUrl || _0x23b3d7["media-url"];
                        const _0x13c574 = {
                            "openUrl": _0xc6bc3e,
                            "mediaUrl": _0x57d7d9
                        };
                        return _0x13c574;
                    }
                    if (this.isQuanX()) {
                        let _0x4be40d = _0x23b3d7[_0x4f0c99.ACPCE] || _0x23b3d7.url || _0x23b3d7.openUrl,
                            _0x9e08fb = _0x23b3d7[_0x4f0c99.NLrOo] || _0x23b3d7.mediaUrl;
                        const _0x336ca0 = {
                            "open-url": _0x4be40d,
                            "media-url": _0x9e08fb
                        };
                        return _0x336ca0;
                    }
                    if (this.isSurge()) {
                        let _0x532e3a = _0x23b3d7.url || _0x23b3d7.openUrl || _0x23b3d7[_0x4f0c99.ACPCE];
                        const _0x2d6efd = {
                            "url": _0x532e3a
                        };
                        return _0x2d6efd;
                    }
                }
            };
            this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(_0x477575, _0x247d89, _0x6b939b, _0x51b05a(_0x57b63f)) : this.isQuanX() && $notify(_0x477575, _0x247d89, _0x6b939b, _0x51b05a(_0x57b63f)));
            let _0x348998 = ["", "============== 系统通知 =============="];
            _0x348998.push(_0x477575);
            _0x247d89 && _0x348998.push(_0x247d89);
            _0x6b939b && _0x348998.push(_0x6b939b);
            console.log(_0x348998.join("\n"));
        }
        ["getMin"](_0x584f61, _0x14a848) {
            return _0x584f61 < _0x14a848 ? _0x584f61 : _0x14a848;
        }
        ["getMax"](_0x326a94, _0xd4c322) {
            return _0x326a94 < _0xd4c322 ? _0xd4c322 : _0x326a94;
        }
        ["padStr"](_0x4fb47b, _0x198e2b, _0x2d8d98 = "0") {
            let _0x151857 = String(_0x4fb47b),
                _0x5d65f2 = _0x198e2b > _0x151857.length ? _0x198e2b - _0x151857.length : 0,
                _0x195195 = "";
            for (let _0x412dff = 0; _0x412dff < _0x5d65f2; _0x412dff++) {
                _0x195195 += _0x2d8d98;
            }
            _0x195195 += _0x151857;
            return _0x195195;
        }
        ["randomString"](_0x4c1baf, _0x303c56 = "abcdef0123456789") {
            let _0x5ef918 = "";
            for (let _0x3eb1ff = 0; _0x3eb1ff < _0x4c1baf; _0x3eb1ff++) {
                _0x5ef918 += _0x303c56.charAt(Math.floor(Math.random() * _0x303c56.length));
            }
            return _0x5ef918;
        }
        ["wait"](_0x40e207) {
            return new Promise(_0x496e38 => setTimeout(_0x496e38, _0x40e207));
        }
        ["done"](_0x16f986 = {}) {
            const _0x4d7ead = new Date().getTime(),
                _0x38e990 = (_0x4d7ead - this.startTime) / 1000;
            console.log("\n" + this.name + " 运行结束，共运行了 " + _0x38e990 + " 秒！");
            if (this.isSurge() || this.isQuanX() || this.isLoon()) {
                $done(_0x16f986);
            }
        }
    }(name, e);
}