/*
cron "15 13 * * *" aliyun_sign.js, tag=阿里云盘签到
by、梦创星河
*/

const {mt_rand,TYQLDG_API,CkToJson,JsonToCK,}=require('./basic/tyqldg'),
$ = new Env('阿里云盘签到')
env_name="ALYP_CK";
let eid=0,cookiesArr=[],cookie='';

if (process.env[env_name]) {
    cookiesArr = process.env[env_name].split('&');
}

!(async () => {
    let CL=cookiesArr.length;
    if (!CL) {
        let url='https://www.aliyundrive.com/er/u/71d93d76e0e54d93998a60d1a19fac9a';
        $.msg($.name,'未配置user_id=xxxxxxxxx;refresh_token=xxxxxxxxx, 程序终止！',url,{'open-url':url});
		return;process.exit(1)
    }
    const messages = []
    for (let i = 0,e; i < CL; i++) {
        e=CkToJson(cookiesArr[i]);
        $.UserName=e.user_id;
        $.index=i+1;
        const queryBody = JSON.stringify({
            grant_type: 'refresh_token',
            refresh_token: e.refresh_token
        })
        // 使用 refresh_token 更新 access_token
        let data =await post({
            url: 'https://auth.aliyundrive.com/v2/account/token',
            body: queryBody,
            headers: { 'Content-Type': 'application/json' },
            timeout: 5000
        })

        const { code, message,access_token,user_id,nick_name,refresh_token,status } = data;//console.log(JSON.stringify(data));data.expire_time  expires_in 两个小时过期
        let remarks =`账号${$.index} ${nick_name?nick_name:$.UserName}`;
        if ( code ) {
            const errorMessage = [remarks, '更新 access_token 失败']
            if (code === 'RefreshTokenExpired' || code === 'InvalidParameter.RefreshToken') errorMessage.push('refresh_token 已过期或无效')
            else errorMessage.push(message)
            console.log(errorMessage.join(', '))

            let json={"userName":$.UserName,"title":`${$.name}账号cookie已失效`,"message":`${$.name}账号${$.index} ${$.UserName}\n请重新登录获取cookie`,"disable":true};
            if(eid) json.eid=eid;else json.env_name=env_name;
            let NotifyData = await TYQLDG_API("notify",json);
            if(NotifyData){
                if(NotifyData.code==200){
                    if( !eid && NotifyData.eid ) eid=NotifyData.eid;
                }
                console.log(NotifyData.msg);
            }
            continue;
        }

        if( refresh_token ){
            e.refresh_token=refresh_token;
            let json={"ac":"update","check":false,"rectify":false,"value":JsonToCK(e),"userName":user_id,"nickName":nick_name};
            if(eid) json.eid=eid;else json.env_name=env_name;
            CookieData = await TYQLDG_API("cookie",json);
            if(CookieData){
                if(CookieData.code==200){
                    if( !eid && CookieData.eid ) eid=CookieData.eid;
                }
                console.log(CookieData.msg);
            }
                
        }

        if(!access_token){
            console.log(remarks, '获取 access_token 失败')
            console.log(data)
            continue;
        }

        $.wait(mt_rand(1000,2000));
        //签到
        const headers={
            //"Authorization": token,
            Authorization: 'Bearer ' + access_token,
            'Content-Type': 'application/json',
            "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 15_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 D/C501C6D2-FAF6-4DA8-B65B-7B8B392901EB"
        };

        let SigninData =await post({
            url: 'https://member.aliyundrive.com/v1/activity/sign_in_list',
            body: queryBody,
            headers,
            timeout: 5000
        })
        const sendMessage = [remarks]
        if (!SigninData.success) {
            sendMessage.push('签到失败')
        }
        sendMessage.push('签到成功')
        const { signInLogs, signInCount } = SigninData.result
        let msg = "";
        const notSignInDaysLists = [];
        const signInDaysLists = [];
        if (signInLogs.length > 0) {
            for (let i = 0; i < signInLogs.length; i++) {
                const signInLogsDict = signInLogs[i];
                const status = signInLogsDict.status || "";
                const day = signInLogsDict.day || "";
                const isReward = signInLogsDict.isReward || false;
                if (status === "") {
                    console.log(`signInLogsDict=${JSON.stringify(signInLogsDict)}`);
                    console.error(`签到信息获取异常:${resp_text}`);
                } else if (status === "miss") {
                    //console.log(`第${day}天未打卡`);
                    notSignInDaysLists.push(day);
                } else if (status === "normal") {
                    let reward = {};
                    if (!isReward) {//签到但未领取奖励
                        //去领取奖励
                        let RewardData =await post({
                            url: 'https://member.aliyundrive.com/v1/activity/sign_in_reward',
                            body:JSON.stringify({'signInDay': day}),
                            headers,
                            timeout: 5000
                        })
                        const result = RewardData.result || {};
                        reward={ "name":result.name || '', "description":result.description || '' };
                        sendMessage.push(`${day==signInCount?"✅" : "☑"}打卡第${day}天，去获得奖励：**[${reward.name || "无奖励"}->${reward.description || ""}]**`)
                    } else {
                        reward = signInLogsDict.reward || {};
                    }
                    signInDaysLists.push(day);
                }
            }
            sendMessage.push(`🔥打卡进度:${signInCount}/${signInLogs.length}`);
        } else {
            console.log(`SigninData=${JSON.stringify(SigninData)}`);
        }
        console.log(sendMessage.join(', '))
        console.log('\n')
        messages.push(sendMessage.join(', '))
        $.wait(1000);
    }
    //if ($.isNode()) await notify.sendNotify(`阿里云盘签到`, messages.join('\n'));
})()
.catch((e) => {
    $.log('', `❌ ${$.name}, 失败! 原因: ${e}!`, '')
})
.finally(() => {
    $.done();
})

function post(obj) {
    return new Promise((resolve) => {
        $.post(obj, async(err, resp, data) => {
            try {
                if (err) {
                    console.log(`${JSON.stringify(err)}`)
                    console.log(`${obj.url} API请求失败，请检查网路重试`)
                } else {
                    if (safeGet(data)) {
                        data = JSON.parse(data);
                        resolve(data);
                    }
                }
            } catch (e) {
                $.logErr(e, resp)
            } finally {
                resolve(false);
            }
        })
    })
}

function safeGet(data) {
    try {
        if (data && typeof JSON.parse(data) == "object") {
            return true;
        }else return false;
    } catch (e) {
        return false;
    }
}

function Env(t, e) { "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0); class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((e, i) => { s.call(this, t, (t, s, r) => { t ? i(t) : e(s) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`) } isNode() { return "undefined" != typeof module && !!module.exports } isQuanX() { return "undefined" != typeof $task } isSurge() { return "undefined" != typeof $httpClient && "undefined" == typeof $loon } isLoon() { return "undefined" != typeof $loon } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null) { try { return JSON.stringify(t) } catch { return e } } getjson(t, e) { let s = e; const i = this.getdata(t); if (i) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(e => { this.get({ url: t }, (t, s, i) => e(i)) }) } runScript(t, e) { return new Promise(s => { let i = this.getdata("@chavy_boxjs_userCfgs.httpapi"); i = i ? i.replace(/\n/g, "").trim() : i; let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"); r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r; const [o, h] = i.split("@"), n = { url: `http://${h}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron", timeout: r }, headers: { "X-Key": o, Accept: "*/*" } }; this.post(n, (t, e, i) => s(i)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e); if (!s && !i) return {}; { const i = s ? t : e; try { return JSON.parse(this.fs.readFileSync(i)) } catch (t) { return {} } } } } writedata() { if (this.isNode()) { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data); s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r) } } lodash_get(t, e, s) { const i = e.replace(/\[(\d+)\]/g, ".$1").split("."); let r = t; for (const t of i) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, e, s) { return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t) } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ""; if (r) try { const t = JSON.parse(r); e = t ? this.lodash_get(t, i, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}"; try { const e = JSON.parse(h); this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i) } catch (e) { const o = {}; this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i) } } else s = this.setval(t, e); return s } getval(t) { return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null } setval(t, e) { return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null } initGotEnv(t) { this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)) } get(t, e = (() => { })) { t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => { try { if (t.headers["set-cookie"]) { const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString(); s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar } } catch (t) { this.logErr(t) } }).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) })) } post(t, e = (() => { })) { if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.post(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t)); else if (this.isNode()) { this.initGotEnv(t); const { url: s, ...i } = t; this.got.post(s, i).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) }) } } time(t, e = null) { const s = e ? new Date(e) : new Date; let i = { "M+": s.getMonth() + 1, "d+": s.getDate(), "H+": s.getHours(),"h+": s.getHours(), "m+": s.getMinutes(), "s+": s.getSeconds(), "q+": Math.floor((s.getMonth() + 3) / 3), "S+": s.getMilliseconds() }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length))); for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length))); return t } msg(e = t, s = "", i = "", r) { const o = t => { if (!t) return t; if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? { "open-url": t } : this.isSurge() ? { url: t } : void 0; if ("object" == typeof t) { if (this.isLoon()) { let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"]; return { openUrl: e, mediaUrl: s } } if (this.isQuanX()) { let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl; return { "open-url": e, "media-url": s } } if (this.isSurge()) { let e = t.url || t.openUrl || t["open-url"]; return { url: e } } } }; if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) { let t = ["", "==============📣系统通知📣=============="]; t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t) } } log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator)) } logErr(t, e) { const s = !this.isSurge() && !this.isQuanX() && !this.isLoon(); s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t) } wait(t) { return new Promise(e => setTimeout(e, t)) } done(t = {}) { const e = (new Date).getTime(), s = (e - this.startTime) / 1e3; this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t) } }(t, e) }