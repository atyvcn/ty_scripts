# -*- coding: utf-8 -*
'''
TY云任务
'''
import base64  # 用于编解码
import json  # 用于Json解析
import os  # 用于导入系统变量
import sys  # 实现 sys.exit
import logging  # 用于日志输出
import time  # 时间
import re  # 正则过滤

TYQLDG_MODE = 0
# 0 = Default / 1 = Debug!

if "TYQLDG_DEBUG" in os.environ or TYQLDG_MODE:  # 判断调试模式变量
    logging.basicConfig(level=logging.DEBUG, format='%(message)s')  # 设置日志为 Debug等级输出
    logger = logging.getLogger(__name__)  # 主模块
    logger.debug("\nDEBUG模式开启!\n")  # 消息输出
else:  # 判断分支
    logging.basicConfig(level=logging.INFO, format='%(message)s')  # Info级日志
    logger = logging.getLogger(__name__)  # 主模块

try:  # 异常捕捉
    import requests  # 导入HTTP模块
except Exception as e:  # 异常捕捉
    logger.info(str(e) + "\n缺少requests模块, 请执行命令：pip3 install requests\n")  # 日志输出
    sys.exit(1)  # 退出脚本
os.environ['no_proxy'] = '*'  # 禁用代理
requests.packages.urllib3.disable_warnings()  # 抑制错误
try:  # 异常捕捉
    from notify import send  # 导入青龙消息通知模块
except Exception as err:  # 异常捕捉
    logger.debug(str(err))  # 调试日志输出
    logger.info("无推送文件")  # 标准日志输出


def notify_send(title,env_name,name,message):
    if "TYQLDG_SEND" in os.environ and os.environ["TYQLDG_SEND"] == 'disable':
        return True
    else:
        try:  # 异常捕捉
            res = api.post(url=notify_api,params={},data=json.dumps({"title":title,"message":message,"name":name,"env_name":env_name}))
        except Exception as err:  # 异常捕捉
            logger.debug(str(err))  # 调试日志输出
            logger.info("发信失败：TY接口错误")  # 标准日志输出
            return False
        else:  # 判断分支
            data=json.loads(res.text)
            if data["code"]==200:
                logger.info(data["msg"])
            return True

def ql_send(title,text):
    if "TYQLDG_SEND" in os.environ and os.environ["TYQLDG_SEND"] == 'disable':
        return True
    else:
        try:  # 异常捕捉
            send(title, text)  # 消息发送
        except Exception as err:  # 异常捕捉
            logger.debug(str(err))  # Debug日志输出
            logger.info("通知发送失败")  # 标准日志输出




def serch_ck(userName):  # 方法 搜索 userName
    for i in range(len(ckData)):  # For循环 变量[ckData]的数量
        row=ckData[i]
        #if "userName" not in row: continue # userName未定义就跳过
        if userName==row['userName']:  # 判断envlist取值['value']
            return True, row  # 返回 -> True[Bool], Array
    return False, row


def post_cookie(data):  # 方法 读取变量
    try:  # 异常捕捉
        #id,_id,Index,EIndex,uid,userName,nickName,eid,value,sid,state,add_date,up_date
        res = api.post(url=ck_api,params={},data=json.dumps(data))
    except Exception as err:  # 异常捕捉
        logger.debug(str(err))  # 调试日志输出
        logger.info("\nTY接口错误")  # 标准日志输出
        sys.exit(1)  # 脚本退出
    else:  # 判断分支
        return json.loads(res.text);# 使用Json模块提取值[data]



def Date2time(t):  # 方法 获取url
    s_t = time.strptime(t, "%Y-%m-%d %H:%M:%S")  # 返回元祖
    return int(time.mktime(s_t))

def ql_disable(id):
    Data = post_cookie({"ac":"state","id":id,"state":0})
    logger.info(Data["msg"])


def ql_AddUp(uid):
    for count in range(tryCount):  # for循环 [tryCount]
        count += 1  # 自增
        return_ws = getToken(ws)  # 使用 WSKEY 请求获取 JD_COOKIE bool jd_ck
        if return_ws[0]:  # 判断 [return_ws]返回值 Bool类型
            break  # 中断循环
        if count < tryCount:  # 判断循环次
            logger.info("{0} 秒后重试，剩余次数：{1}".format(sleepTime, tryCount - count))  # 标准日志输出
            time.sleep(sleepTime)  # 脚本休眠 使用变量 [sleepTime]
    if return_ws[0]:  # 判断 [return_ws]返回值 Bool类型
        nt_key = str(return_ws[1])  # 从 return_ws[1] 取出 -> nt_key
        logger.info("wskey转换成功")  # 标准日志输出
        Data = post_cookie({"ac":"addUp","check":True,"eid":ckEid,"uid":uid,"value":nt_key,"uid":uid,"nickName":""})
        logger.info(Data["msg"])
    else:  # 判断分支
        if "WSKEY_AUTO_DISABLE" in os.environ:  # 从系统变量中获取 WSKEY_AUTO_DISABLE
            logger.info("{0}  账号失效".format(userName))  # 标准日志输出
            text = "账号: {0} WsKey疑似失效".format(userName)  # 设置推送内容
        else:  # 判断分支
            logger.info("{0}  账号禁用".format(userName))  # 标准日志输出
            ql_disable(row["id"])  # 执行方法[ql_disable] 传递 eid
            text = "账号: {0} WsKey疑似失效, 已禁用Cookie".format(userName)  # 设置推送内容
            notify_send(userName,text)
            #ql_send(text)
    logger.info("暂停{0}秒\n".format(sleepTime))  # 标准日志输出
    time.sleep(sleepTime)  # 脚本休眠


if __name__ == '__main__':  # Python主函数执行入口
    if "TYQLDG_URL" in os.environ and "TYQLDG_TOKEN" in os.environ:  # 判断 TYQLDG_URL和TYQLDG_TOKEN是否存在于环境变量
        TYQLDG_URL = os.environ['TYQLDG_URL']
        TYQLDG_TOKEN = os.environ['TYQLDG_TOKEN']
        if TYQLDG_URL[:4]=="http" and len(TYQLDG_TOKEN) > 5:  # 判断TYQLDG_URL和TYQLDG_TOKEN是否有效
            api = requests.session()  # 设置 request session方法
            api.headers.update({"authorization": "Bearer " + os.environ['TYQLDG_TOKEN']})  # 增加 HTTP头认证
            api.headers.update({"Accept-Encoding": "gzip, deflate"})  # 增加 HTTP头认证
            api.headers.update({"Content-Type": "application/json;charset=UTF-8"})  # 增加 HTTP头 json 类型
        else:  # 判断分支
            logger.info("TYQLDG_URL或TYQLDG_TOKEN变量为空")  # 标准日志输出
            sys.exit(1)  # 脚本退出
    else:  # 判断分支
        logger.info("未添加变量TYQLDG_URL或TYQLDG_TOKEN")  # 标准日志输出
        sys.exit(0)  # 脚本退出

    notify_api='{0}/api/notify.php?access_token={1}'.format(TYQLDG_URL,TYQLDG_TOKEN)
    ck_api='{0}/api/cookie.php?access_token={1}'.format(TYQLDG_URL,TYQLDG_TOKEN)
    #print(str(base64.b64decode(url_t).decode()) + 'api/genToken');sys.exit(1)  # 脚本退出
    Data = post_cookie({"ac":"list","env_name":"JD_WSCK","field":"id,uid,userName,value,up_date","state":1})
    if Data["code"]==200 :
        wskeyData=Data["data"]
        wskeyEid=Data["eid"]
        logger.info("获取WSCK共{0}个账号".format(len(wskeyData)))
    else:
        logger.info("获取出错了！")  # 标准日志输出
        logger.info(Data["msg"])
        sys.exit(0)  # 退出脚本 [未启用]
    
    Data = post_cookie({"ac":"list","env_name":"JD_COOKIE","field":"userName,value,up_date","state":1})
    ckEid=Data["eid"]
    ckData=Data["data"]
    logger.info("获取{0}个京东账号\n--------------------\n".format(len(ckData)))

    for i in range(len(wskeyData)):  # For循环 变量[wskeyData]的数量
        row=wskeyData[i]
        userName=row["userName"]
        ws=row["value"]
        if userName:
            logger.info("\n账号{0} {1}".format(i+1,userName))  # 标准日志输出
            return_serch = serch_ck(userName)  # 变量 pt_pin 搜索获取 key eid
            if return_serch[0]:  # bool: True 搜索到账号
                logger.info("检索成功")
                if not check_ck(return_serch[1]):  # bool: False 判定 JD_COOKIE 有效性
                    ql_AddUp(row["uid"])
            else:  # 判断分支
                logger.info("新wskey")  # 标准日志分支
                ql_AddUp(row["uid"])
        else:  # 判断分支
            logger.info("WSKEY格式错误\n--------------------\n")  # 标准日志输出
    logger.info("\n执行完成\n--------------------")  # 标准日志输出
    sys.exit(0)  # 脚本退出