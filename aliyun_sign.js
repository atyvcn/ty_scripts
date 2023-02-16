/*
cron "15 13 * * *" aliyun_sign.js, tag=阿里云盘签到
by、梦创星河
*/

const Env=require('./basic/Env'),
{mt_rand,TYQLDG_API,CkToObj,ObjToCK,}=require('./basic/tyqldg'),
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
        e=CkToObj(cookiesArr[i]);
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

            let json={"userName":$.UserName,"title":`${$.name}cookie已失效 - ${$.UserName}`,"message":`阿里网盘账号${$.index} ${$.UserName}\n请重新登录获取cookie`,"disable":true};
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
            let json={"ac":"update","check":false,"rectify":false,"value":ObjToCK(e),"userName":user_id,"nickName":nick_name};
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
        let SigninData =await post({
            url: 'https://member.aliyundrive.com/v1/activity/sign_in_list',
            body: queryBody,
            headers: {
                Authorization: 'Bearer ' + access_token,
                'Content-Type': 'application/json'
            },
            timeout: 5000
        })
        const sendMessage = [remarks]
        if (!SigninData.success) {
            sendMessage.push('签到失败')
        }
        sendMessage.push('签到成功')
        const { signInLogs, signInCount } = SigninData.result
        //if l['status'] != 'miss':  v.status === 'normal'
        const signedArray = signInLogs.filter(v => v.status != 'miss') // 已签到信息组
        const currentSignInfo = signedArray[signedArray.length - 1] // 当天签到信息
        sendMessage.push(`本月累计签到 ${signInCount} 天`)
        //   当天签到是否有奖励
        if (currentSignInfo.reward) sendMessage.push(`本次签到获得${currentSignInfo.notice}`)

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