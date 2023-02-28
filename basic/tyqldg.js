const got = require('got');

const TYQLDG={
    async TYQLDG_API(type,json){
        if( TYQLDG_URL && TYQLDG_URL.substring(0,4)=="http" && TYQLDG_TOKEN.length>5 ){
            const headers = {
                "authorization": "Bearer " + TYQLDG_TOKEN,
                "Accept-Encoding": "gzip, deflate",
                //"Content-Type": "application/json;charset=UTF-8"
            };
            return await got({ method: 'post', url: `${TYQLDG_URL}/api/${type}.php?access_token=${TYQLDG_TOKEN}`,
            responseType: 'json',json, headers}).json();
        }else{
            console.log(`TYQLDG_URL或者TYQLDG_TOKEN 未配置！`);
            return false;
        }
    },
    CkToJson(cookie){
        if( cookie.indexOf("=") ){
            var Obj = {},
            arr = cookie.split(";");
            for(let i=0,v,l=arr.length;i<l;i++){
                if( v=arr[i].trim() ){
                    let n=v.indexOf("=");
                    if( n!==-1 ) Obj[v.substr(0,n)]=v.substr(n+1);
                }
            }
            return Obj;
        }else return false;  
    },
    JsonToCK(Obj){
        if( typeof Obj !='object' ) return false;
        var cka = [];
        for(key in Obj) {
            cka.push(key + "=" + Obj[key]);
        }
        return cka.length?cka.join("; ")+";":"";
    },
    getUUID(x = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx", t = 0) {
        if( typeof x == "number" ) x=new Array(x).join('x')
        return x.replace(/[xy]/g, function (x) {
        var r = (16 * Math.random()) | 0,
            n = "x" == x ? r : (3 & r) | 8;
            return (uuid = t ? n.toString(36).toUpperCase() : n.toString(36)), uuid;
        });
    },
    mt_rand(min, max) {
        return Math.min(Math.floor(min + Math.random() * (max - min)), max);
    },
    isset(e) {
        return typeof e != "undefined";
    },
    array_rand(e){
        return this.mt_rand(0, e.length-1);
    },
    base64_decode(string){
        return Buffer.from(string, 'base64').toString();
    },
    base64_encode(string){
        // 默认用 utf-8 编码格式解释字符串
        return Buffer.from(string).toString('base64');
    }
}

module.exports = TYQLDG;