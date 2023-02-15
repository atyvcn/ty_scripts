const got = require('got');

let TYQLDG_MODE = 0,
//TYQLDG_SEND=!(isset(process.env.TYQLDG_SEND) && process.env.TYQLDG_SEND=='disable'),
TYQLDG_URL=process.env.TYQLDG_URL,TYQLDG_TOKEN=process.env.TYQLDG_TOKEN;
//0 = Default / 1 = Debug!
if( isset(process.env.TYQLDG_MODE) ){
    TYQLDG_MODE=process.env.TYQLDG_MODE;
}else if( process.env.TYQLDG_DEBUG ){
    TYQLDG_MODE=1;
}
if( TYQLDG_MODE==1 ) console.log = () => { };
/*
    const TYQLDG_API = got.extend({
        method:"post",
        prefixUrl: TYQLDG_URL+"/api/",
        searchParams: {access_token: TYQLDG_TOKEN},
        responseType: 'json',
        json: true,
        headers: {
            "authorization": "Bearer " + TYQLDG_TOKEN,
            "Accept-Encoding": "gzip, deflate",
            "Content-Type": "application/json;charset=UTF-8"
        },
        retry: { limit: 0 },
    });

        json:{a:1}, //application/json时使用 支持类型 object| Array | number | string | boolean | null
        body:form,//multipart/form-data时使用 多个参数继续append即可。
        form:{a:1}, //application/x-www-form-urlencoded时使用 类型只能是对象object
    let data = await TYQLDG_API({ url: "cookie.php", json: {"ac":"list","env_name":"JD_WSCK","field":"id,uid,userName,value,up_date","state":1} }).json();

    got('https://jsonplaceholder.typicode.com/todos/1', { json: true })
        .then(res => {
        console.log(res.body.id);
        console.log(res.body.title);
        }).catch(err => {
        console.log(err.response.body);
        });
*/

async function TYQLDG_API(type,json){
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
};

async function post(url,data){
	const headers = {
        "Accept": "application/json, text/plain, */*",
        "Content-Type": "application/x-www-form-urlencoded",
	};
	var {body} = await got({ method: 'post', url: url, form: data, headers: headers });//.json();
	return JSON.parse(body);
};


function CkToObj(cookie){
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
}

function ObjToCK(Obj){
	if( typeof Obj !='object' ) return false;
	var cka = [];
    for(key in Obj) {
        cka.push(key + "=" + Obj[key]);
    }
	return cka.length?cka.join("; ")+";":"";
}

function getUUID(x = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx", t = 0) {
    if( typeof x == "number" ) x=new Array(x).join('x')
    return x.replace(/[xy]/g, function (x) {
      var r = (16 * Math.random()) | 0,
        n = "x" == x ? r : (3 & r) | 8;
        return (uuid = t ? n.toString(36).toUpperCase() : n.toString(36)), uuid;
    });
}

function mt_rand(min, max) {
    return Math.min(Math.floor(min + Math.random() * (max - min)), max);
}

function isset(e) {
    return typeof e != "undefined";
}

function array_rand(e){
    return mt_rand(0, e.length-1);
}

function base64_decode(string){
    return Buffer.from(string, 'base64').toString();
}

function base64_encode(string){
    // 默认用 utf-8 编码格式解释字符串
    return Buffer.from(string).toString('base64');
}

module.exports = {
    TYQLDG_API,
    post,
    CkToObj,ObjToCK,
    getUUID,
    mt_rand,
    isset,
    array_rand,
    base64_decode,
    base64_encode,
};