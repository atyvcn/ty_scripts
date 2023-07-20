let window =this;
const XMLHttpRequest = require('xhr2');
document = {
    cookie: "",
}
window.document = document;
location = {
    hash: "",
    host: "market.waimai.meituan.com",
    hostname: "market.waimai.meituan.com",
    href: "https://market.waimai.meituan.com/gd/wm/3axN8G?gdSource=wx_wallet&gundam_id=3axN8G&activity_id=&*=wxshare&userId=2823154065&token=AgHEJEBizhrZfjeW-rDq2BO9OBqxbJ4M8sc3J6jjzNNxrHvDOKHQuY2qFWAyKADUQd2MwuycerDsBgAAAADFGAAAI_Kae0DB_vKEJ35Pfk3kkCbcb8RvjuG1zAueS0-Ndm82Xsayq-rf6qILOYetCk19&wm_latitude=32225718&wm_longitude=118747638&pickedCityName=&pickedAddress=%E6%96%B0%E5%8D%8E%E4%BA%94%E6%9D%91-45%E5%8F%B7%E6%A5%BC",
    origin: "https://market.waimai.meituan.com",
    pathname: "/gd/wm/3axN8G",
    port: "",
    protocol: "https:"
};
window.location = location;
screen = {
    width: 412, height: 846, availWidth: 412, availHeight: 846, colorDepth: 24, pixelDepth: 24, orientation: {
        type: "portrait-primary"
    }
}
window.screen = screen;
let guardRaptor = {
    report: function(name, ncode, scode, dur, sample, key) {
        try {
            if (guardOwl || function(appkey) {
                try {
                    window.Owl && window.Owl.OWL && (appkey && void 0 !== appkey || (appkey = window.location.host),
                        customTags.appkey = appkey,
                        customTags.host = window.location.host,
                        customTags.version = gVer,
                        guardOwl = new window.Owl.OWL({
                            project: "com.sankuai.jsprotect.h5guard",
                            devMode: !1,
                            webVersion: gVer,
                            resource: {
                                sampleApi: 1
                            },
                            setCustomTags: getCustomTags,
                            pageUrl: window.location.host
                        }))
                } catch (error) {
                    guardOwl = void 0
                }
            }(key),
            key && (customTags.appkey = key),
                !ratioRule(sample))
                return;
            guardOwl && guardOwl.addApi({
                name: name,
                networkCode: ncode,
                statusCode: scode,
                responseTime: dur
            })
        } catch (e) {}
    }
}
var c, A = [1, 0, 36, 12, 6, 23, 1, 17, 36, 12, 6, 24, 1, 17, 151, 13, 167, 98, 162, 29, 88, 6, 0, 123, 14, 79, 36, 12, 6, 25, 1, 17, 4, 13, 16, 13, 2, 29, 33, 13, 79, 14, 4, 13, 24, 5, 36, 12, 6, 25, 1, 17, 4, 13, 64, 68, 12, 36, 12, 6, 27, 1, 17, 5, 36, 12, 6, 28, 1, 17, 4, 13, 5, 6, 0, 6, 2, 152, 144, 41, 13, 1, 17, 148, 6, 2, 61, 0, 127, 16, 13, 54, 68, 12, 36, 12, 6, 27, 1, 17, 5, 36, 12, 6, 30, 1, 17, 4, 13, 5, 0, 1, 17, 41, 13, 5, 36, 12, 6, 30, 1, 17, 4, 13, 5, 0, 6, 1, 41, 13, 1, 17, 41, 13, 1, 17, 133, 63, 36, 12, 6, 32, 1, 17, 4, 13, 63, 9, 93, 32, 13, 1, 17, 26, 13, 6, 2, 58, 13, 109, 20, 36, 12, 6, 33, 1, 17, 4, 13, 20, 38, 1, 17, 13, 147, 13, 177, 20, 47, 143, 24, 79, 21, 0, 0, 21, 0, 57, 13, 21, 256, 1, 6, 32, 13, 23, 6, 86, 6, 65, 21, 0, 2, 6, 13, 21, 256, 1, 6, 19, 18, 20, 13, 22, 6, 58, 6, 64, 13, 64, 11, 29, 21, 25, 81, 72, 22, 6, 27, 6, 22, 6, 58, 6, 21, 31, 58, 6, 21, 256, 27, 6, 66, 6, 20, 13, 22, 6, 89, 6, 20, 18, 22, 6, 23, 6, 5, 68, 6, 86, 6, 61, 38, 29, 20, 5, 26, 9, 75, 12, 3, 9, 72, 11, 16, 25, 158, 39, 58, 1, 223, 79, 146, 2, 1, 22, 16, 0, 85, 16, 1540483477, 19, 146, 16, 4, 183, 1, 34, 9, 211, 58, 1, 16, 255, 20, 1, 9, 0, 58, 1, 16, 255, 20, 1, 16, 8, 63, 1, 41, 1, 9, 0, 58, 1, 16, 255, 20, 1, 16, 16, 63, 1, 41, 1, 9, 0, 58, 1, 16, 255, 20, 1, 16, 24, 63, 1, 41, 1, 47, 1, 17, 16, 65535, 20, 1, 33, 67, 1, 17, 16, 16, 76, 1, 33, 67, 1, 16, 65535, 20, 1, 16, 16, 63, 1, 14, 1, 47, 1, 17, 16, 24, 76, 1, 4, 1, 17, 16, 65535, 20, 1, 33, 67, 1, 17, 16, 16, 76, 1, 33, 67, 1, 16, 65535, 20, 1, 16, 16, 63, 1, 14, 1, 47, 1, 6, 16, 65535, 20, 1, 33, 67, 1, 6, 16, 16, 76, 1, 33, 67, 1, 16, 65535, 20, 1, 16, 16, 63, 1, 14, 1, 17, 2, 1, 32, 1, 16, 4, 147, 1, 0, 1, 156, 51, 6, 16, 13, 76, 1, 36, 1, 6, 16, 65535, 20, 1, 33, 67, 1, 6, 16, 16, 76, 1, 33, 67, 1, 16, 65535, 20, 1, 16, 16, 63, 1, 14, 1, 32, 1, 6, 16, 15, 76, 1, 36, 1, 6, 16, 0, 76, 1, 33, 2, 1, 192, 10, 243, 14, 4294967295, 151, 5, 1160, 322, 2, 282, 6, 15, 416, 903, 489, 992, 79, 2, 14, 347, 6, 15, 0, 5, 79, 2, 14, 6, 6, 15, 0, 5, 46, 240, 79, 2, 14, 2578, 6, 15, 0, 5, 240, 508, 6, 15, 24, 44, 853, 240, 79, 2, 14, 2578, 6, 15, 0, 5, 240, 1139, 6, 15, 366, 245, 2, 679, 6, 15, 1105, 1042, 816, 68, 79, 2, 14, 33, 6, 15, 0, 5, 68, 32, 79, 2, 14, 3241, 6, 15, 0, 5, 6, 15, 5, 68, 79, 2, 14, 33, 6, 15, 0, 5, 68, 32, 79, 2, 14, 3234, 6, 15, 0, 5, 6, 15, 5, 68, 79, 2, 14, 33, 6, 15, 0, 5, 68, 32, 79, 2, 14, 3245, 6, 15, 0, 5, 6, 15, 5, 68, 79, 2, 14, 33, 6, 15, 0, 5, 68, 32, 79, 2, 14, 3247, 6, 15, 0, 5, 6, 15, 5, 941, 2, 170, 2, 419, 211, 79, 2, 14, 263, 6, 15, 0, 5, 211, 68, 6, 15, 125, 126, 6, 15, 1144, 567, 2, 163, 243, 125, 126, 852, 322, 2, 113, 6, 15, 882, 1115, 2, 385, 6, 15, 79, 2, 14, 22, 6, 15, 0, 5, 466, 567, 2, 321, 243, 125, 126, 495, 322, 2, 224, 6, 15, 460, 84, 1003, 245, 2, 240, 79, 2, 14, 3250, 6, 15, 0, 5, 240, 113, 224, 113, 282, 29, 5, 113, 224, 29, 5, 282, 29, 5, 61, 126, 6, 15, 6, 15, 76, 42, 2, 25, 79, 2, 14, 993, 6, 15, 0, 5, 25, 354, 6, 15, 79, 2, 14, 993, 6, 15, 0, 5, 25, 79, 2, 14, 993, 6, 15, 0, 5, 25, 354, 6, 15, 188, 6, 15, 6, 15, 529, 5, 543, 245, 2, 240, 79, 2, 14, 3250, 6, 15, 0, 5, 240, 113, 224, 113, 282, 29, 5, 113, 224, 29, 5, 61, 126, 6, 15, 6, 15, 76, 42, 2, 25, 79, 2, 14, 993, 6, 15, 0, 5, 25, 354, 6, 15, 79, 2, 14, 993, 6, 15, 0, 5, 25, 79, 2, 14, 993, 6, 15, 0, 5, 25, 354, 6, 15, 188, 6, 15, 6, 15, 529, 5, 574, 19, 369, 387, 5, 243, 542, 5, 874, 884, 5, 308, 699, 5, 101, 649, 5, 14, 4, 599, 5, 224, 14, 0, 1017, 5, 75, 232, 79, 2, 14, 3256, 6, 15, 0, 5, 232, 79, 2, 14, 3257, 6, 15, 0, 5, 13, 5, 232, 79, 2, 14, 3258, 6, 15, 0, 5, 13, 5, 608, 13, 5, 27, 13, 5, 694, 13, 5, 361, 240, 79, 2, 14, 3265, 6, 15, 0, 5, 240, 1112, 6, 15, 984, 282, 232, 79, 2, 14, 3261, 6, 15, 0, 5, 270, 5, 282, 14, 32, 232, 79, 2, 14, 3261, 6, 15, 0, 5, 924, 5, 270, 5, 432, 5, 674, 28, 14, 0, 0, 5, 788, 29, 5, 746, 5, 28, 14, 1, 0, 5, 27, 29, 5, 1102, 5, 28, 14, 2, 0, 5, 27, 29, 5, 788, 29, 5, 1084, 5, 28, 14, 3, 0, 5, 28, 14, 0, 0, 5, 29, 5, 892, 5, 240, 79, 2, 14, 3250, 6, 15, 0, 5, 240, 28, 6, 15, 597, 944, 26, 5, 1042, 1028, 944, 1038, 14, 0, 493, 56, 60, 79, 2, 14, 25, 6, 15, 0, 5, 4, 5, 1140, 729, 2, 79, 2, 14, 27, 6, 15, 60, 79, 2, 14, 30, 6, 15, 0, 5, 60, 56, 6, 15, 13, 5, 60, 79, 2, 14, 30, 6, 15, 0, 5, 60, 56, 14, 1, 13, 5, 6, 15, 13, 5, 6, 15, 676, 45, 79, 2, 14, 33, 6, 15, 0, 5, 45, 616, 6, 15, 5, 14, 2, 797, 5, 1095, 14, 0, 488, 20, 14, 4294967295, 114, 5, 165, 742, 2, 20, 6, 15, 302, 5, 5, 531, 45, 14, 0, 0, 5, 45, 14, 4, 0, 5, 29, 5, 17, 14, 0, 0, 5, 29, 5, 451, 5, 45, 14, 1, 0, 5, 45, 14, 5, 0, 5, 29, 5, 17, 14, 1, 0, 5, 29, 5, 900, 5, 45, 14, 2, 0, 5, 45, 14, 6, 0, 5, 29, 5, 17, 14, 2, 0, 5, 29, 5, 726, 5, 45, 14, 3, 0, 5, 45, 14, 7, 0, 5, 29, 5, 17, 14, 3, 0, 5, 29, 5, 120, 5, 45, 14, 4, 0, 5, 45, 14, 5, 0, 5, 29, 5, 45, 14, 0, 0, 5, 29, 5, 14, 189, 151, 5, 91, 5, 45, 14, 5, 0, 5, 45, 14, 6, 0, 5, 29, 5, 45, 14, 1, 0, 5, 29, 5, 14, 219, 151, 5, 1157, 5, 45, 14, 6, 0, 5, 45, 14, 7, 0, 5, 29, 5, 45, 14, 2, 0, 5, 29, 5, 14, 126, 151, 5, 572, 5, 298, 79, 2, 14, 3275, 6, 15, 0, 5, 765, 36, 14, 0, 0, 5, 14, 1, 171, 5, 119, 14, 64, 365, 5, 5, 531, 36, 14, 1, 0, 5, 14, 1, 171, 5, 119, 14, 2, 365, 5, 5, 531, 36, 14, 2, 0, 5, 14, 1, 171, 5, 119, 14, 32, 594, 5, 5, 531, 36, 14, 3, 0, 5, 14, 1, 171, 5, 119, 14, 4, 594, 5, 5, 531, 36, 14, 4, 0, 5, 14, 1, 171, 5, 119, 14, 128, 525, 5, 5, 531, 36, 14, 5, 0, 5, 14, 1, 171, 5, 119, 14, 1, 525, 5, 5, 531, 45, 14, 9, 0, 5, 45, 14, 10, 0, 5, 29, 5, 45, 14, 11, 0, 5, 29, 5, 45, 14, 12, 0, 5, 29, 5, 45, 14, 13, 0, 5, 29, 5, 45, 14, 14, 0, 5, 29, 5, 45, 14, 15, 0, 5, 29, 5, 521, 5, 50, 1055, 14, 0, 493, 56, 45, 79, 2, 14, 25, 6, 15, 0, 5, 4, 5, 540, 50, 172, 45, 56, 0, 5, 14, 16, 4, 5, 1114, 255, 45, 56, 0, 5, 79, 2, 14, 49, 6, 15, 0, 5, 45, 56, 0, 5, 14, 16, 6, 15, 13, 5, 327, 5, 5, 252, 45, 56, 0, 5, 79, 2, 14, 49, 6, 15, 0, 5, 45, 56, 0, 5, 14, 16, 6, 15, 327, 5, 5, 148, 141, 5, 1066, 5, 781, 244, 26, 5, 211, 79, 2, 14, 263, 6, 15, 0, 5, 211, 232, 6, 15, 399, 1133, 547, 217, 822, 5, 560, 5, 5, 867, 179, 2, 217, 6, 15, 721, 50, 782, 79, 2, 14, 3285, 6, 15, 804, 13, 5, 527, 43, 79, 2, 14, 303, 6, 15, 0, 5, 43, 207, 6, 15, 404, 181, 1118, 274, 5, 833, 43, 79, 2, 14, 1289, 6, 15, 0, 5, 43, 181, 14, 1, 13, 5, 6, 15, 539, 10, 293, 13, 5, 239, 5, 5, 646, 293, 239, 5, 5, 5, 620, 207, 293, 13, 5, 239, 5, 5, 43, 663, 13, 5, 1018, 5, 43, 727, 5, 381, 5, 5, 959];
function _defineProperty(obj, key, value) {
    return key in obj ? Object.defineProperty(obj, key, {
        value: value, enumerable: !0, configurable: !0, writable: !0
    }) : obj[key] = value, obj;
}
var db = (_defineProperty(d7 = {}, 'siua', ['k0', 'k1', 'k7', 'k9', 'k12', 'k25', 'k27', 'k30', 'k35', 'k39', 'k40', 'k41', 'k42', 'k43', 'k47', 'k48', 'k49', 'k50', 'k60', 'k61', 'sessionId', 'isShort']),
    _defineProperty(d7, 'siua_short', ['k25', 'k27', 'k50', 'k61', 'sessionId', 'isShort']),
    d7)
    , dc = {};
function createCommonjsModule(fn, module) {
    return fn(module = {
        exports: {}
    }, module.exports), module.exports;
}
var sjcl_1 = createCommonjsModule(function (module) {
        var fH = {
            cipher: {}, hash: {}, keyexchange: {}, mode: {}, misc: {}, codec: {}, exception: {
                corrupt: function (fK) {
                    this.toString = function () {
                        return "CORRUPT: " + this.message;
                    }, this.message = fK;
                }, invalid: function (fL) {
                    this.toString = function () {
                        return "INVALID: " + this.message;
                    }, this.message = fL;
                }, bug: function (fN) {
                    this.toString = function () {
                        return "BUG: " + this.message;
                    }, this.message = fN;
                }, notReady: function (fO) {
                    this.toString = function () {
                        return "NOT READY: " + this.message;
                    }, this.message = fO;
                }
            }
        };

        function fI(fQ, fR, fT) {
            if (4 !== fR.length) throw new fH.exception.invalid("11");
            var fU = fQ.g[fT], fV = fR[0] ^ fU[0], fW = fR[fT ? 3 : 1] ^ fU[1], fX = fR[2] ^ fU[2];
            fR = fR[fT ? 1 : 3] ^ fU[3];
            var fY, fZ, g0, g2, g1 = fU.length / 4 - 2, g3 = 4, g4 = [0, 0, 0, 0];
            fQ = (fY = fQ.a[fT])[0];
            var g5 = fY[1], g6 = fY[2], g7 = fY[3], g8 = fY[4];
            for (g2 = 0; g2 < g1; g2++) fY = fQ[fV >>> 24] ^ g5[fW >> 16 & 255] ^ g6[fX >> 8 & 255] ^ g7[255 & fR] ^ fU[g3], fZ = fQ[fW >>> 24] ^ g5[fX >> 16 & 255] ^ g6[fR >> 8 & 255] ^ g7[255 & fV] ^ fU[g3 + 1], g0 = fQ[fX >>> 24] ^ g5[fR >> 16 & 255] ^ g6[fV >> 8 & 255] ^ g7[255 & fW] ^ fU[g3 + 2], fR = fQ[fR >>> 24] ^ g5[fV >> 16 & 255] ^ g6[fW >> 8 & 255] ^ g7[255 & fX] ^ fU[g3 + 3], g3 += 4, fV = fY, fW = fZ, fX = g0;
            for (g2 = 0; 4 > g2; g2++) g4[fT ? 3 & -g2 : g2] = g8[fV >>> 24] << 24 ^ g8[fW >> 16 & 255] << 16 ^ g8[fX >> 8 & 255] << 8 ^ g8[255 & fR] ^ fU[g3++], fY = fV, fV = fW, fW = fX, fX = fR, fR = fY;
            return g4;
        }

        fH.cipher.aes = function (fO) {
            if (!this.a[0][0][0]) {
                var fU, fV, fW, fZ, g0, g1, g2, fP = this.a[0], fQ = this.a[1], fR = fP[4], fT = fQ[4], fX = [],
                    fY = [];
                for (fU = 0; 256 > fU; fU++) fY[(fX[fU] = fU << 1 ^ 283 * (fU >> 7)) ^ fU] = fU;
                for (fV = fW = 0; !fR[fV]; fV ^= fZ || 1, fW = fY[fW] || 1) for (g1 = (g1 = fW ^ fW << 1 ^ fW << 2 ^ fW << 3 ^ fW << 4) >> 8 ^ 255 & g1 ^ 99, fR[fV] = g1, fT[g1] = fV, g2 = 16843009 * (g0 = fX[fU = fX[fZ = fX[fV]]]) ^ 65537 * fU ^ 257 * fZ ^ 16843008 * fV, g0 = 257 * fX[g1] ^ 16843008 * g1, fU = 0; 4 > fU; fU++) fP[fU][fV] = g0 = g0 << 24 ^ g0 >>> 8, fQ[fU][g1] = g2 = g2 << 24 ^ g2 >>> 8;
                for (fU = 0; 5 > fU; fU++) fP[fU] = fP[fU].slice(0), fQ[fU] = fQ[fU].slice(0);
            }
            if (fP = this.a[0][4], fQ = this.a[1], fX = 1, 4 !== (fW = fO.length) && 6 !== fW && 8 !== fW) throw new fH.exception.invalid("10");
            for (this.g = [fT = fO.slice(0), fV = []], fO = fW; fO < 4 * fW + 28; fO++) fR = fT[fO - 1], (0 == fO % fW || 8 === fW && 4 == fO % fW) && (fR = fP[fR >>> 24] << 24 ^ fP[fR >> 16 & 255] << 16 ^ fP[fR >> 8 & 255] << 8 ^ fP[255 & fR], 0 == fO % fW && (fR = fR << 8 ^ fR >>> 24 ^ fX << 24, fX = fX << 1 ^ 283 * (fX >> 7))), fT[fO] = fT[fO - fW] ^ fR;
            for (fW = 0; fO; fW++, fO--) fR = fT[3 & fW ? fO : fO - 4], fV[fW] = 4 >= fO || 4 > fW ? fR : fQ[0][fP[fR >>> 24]] ^ fQ[1][fP[fR >> 16 & 255]] ^ fQ[2][fP[fR >> 8 & 255]] ^ fQ[3][fP[255 & fR]];
        }, fH.cipher.aes.prototype = {
            encrypt: function (fP) {
                return fI(this, fP, 0);
            }, decrypt: function (fQ) {
                return fI(this, fQ, 1);
            }, a: [[[], [], [], [], []], [[], [], [], [], []]]
        }, fH.bitArray = {
            bitSlice: function (fR, fT, fU) {
                return fR = fH.bitArray.c(fR.slice(fT / 32), 32 - (31 & fT)).slice(1), void 0 === fU ? fR : fH.bitArray.clamp(fR, fU - fT);
            }, extract: function (fT, fU, fV) {
                var fW = Math.floor(-fU - fV & 31);
                return (-32 & (fU + fV - 1 ^ fU) ? fT[fU / 32 | 0] << 32 - fW ^ fT[fU / 32 + 1 | 0] >>> fW : fT[fU / 32 | 0] >>> fW) & (1 << fV) - 1;
            }, concat: function (fU, fV) {
                if (0 === fU.length || 0 === fV.length) return fU.concat(fV);
                var fW = fU[fU.length - 1], fX = fH.bitArray.getPartial(fW);
                return 32 === fX ? fU.concat(fV) : fH.bitArray.c(fV, fX, 0 | fW, fU.slice(0, fU.length - 1));
            }, bitLength: function (fV) {
                var fW = fV.length;
                return 0 === fW ? 0 : 32 * (fW - 1) + fH.bitArray.getPartial(fV[fW - 1]);
            }, clamp: function (fW, fX) {
                if (32 * fW.length < fX) return fW;
                var fY = (fW = fW.slice(0, Math.ceil(fX / 32))).length;
                return fX &= 31, 0 < fY && fX && (fW[fY - 1] = fH.bitArray.partial(fX, fW[fY - 1] & 2147483648 >> fX - 1, 1)), fW;
            }, partial: function (fX, fY, fZ) {
                return 32 === fX ? fY : (fZ ? 0 | fY : fY << 32 - fX) + 1099511627776 * fX;
            }, getPartial: function (fY) {
                return Math.round(fY / 1099511627776) || 32;
            }, equal: function (fZ, g0) {
                if (fH.bitArray.bitLength(fZ) !== fH.bitArray.bitLength(g0)) return !1;
                var g2, g1 = 0;
                for (g2 = 0; g2 < fZ.length; g2++) g1 |= fZ[g2] ^ g0[g2];
                return 0 === g1;
            }, c: function (g0, g1, g2, g3) {
                var g4;
                for (g4 = 0, void 0 === g3 && (g3 = []); 32 <= g1; g1 -= 32) g3.push(g2), g2 = 0;
                if (0 === g1) return g3.concat(g0);
                for (g4 = 0; g4 < g0.length; g4++) g3.push(g2 | g0[g4] >>> g1), g2 = g0[g4] << 32 - g1;
                return g4 = g0.length ? g0[g0.length - 1] : 0, g0 = fH.bitArray.getPartial(g4), g3.push(fH.bitArray.partial(g1 + g0 & 31, 32 < g1 + g0 ? g2 : g3.pop(), 1)), g3;
            }, f: function (g1, g2) {
                return [g1[0] ^ g2[0], g1[1] ^ g2[1], g1[2] ^ g2[2], g1[3] ^ g2[3]];
            }, byteswapM: function (g2) {
                var g3, g4;
                for (g3 = 0; g3 < g2.length; ++g3) g4 = g2[g3], g2[g3] = g4 >>> 24 | g4 >>> 8 & 65280 | (65280 & g4) << 8 | g4 << 24;
                return g2;
            }
        }, fH.codec.utf8String = {
            fromBits: function (g3) {
                var g6, g7, g4 = "", g5 = fH.bitArray.bitLength(g3);
                for (g6 = 0; g6 < g5 / 8; g6++) 0 == (3 & g6) && (g7 = g3[g6 / 4]), g4 += String.fromCharCode(g7 >>> 8 >>> 8 >>> 8), g7 <<= 8;
                return decodeURIComponent(escape(g4));
            }, toBits: function (g4) {
                g4 = unescape(encodeURIComponent(g4));
                var g6, g5 = [], g7 = 0;
                for (g6 = 0; g6 < g4.length; g6++) g7 = g7 << 8 | g4.charCodeAt(g6), 3 == (3 & g6) && (g5.push(g7), g7 = 0);
                return 3 & g6 && g5.push(fH.bitArray.partial(8 * (3 & g6), g7)), g5;
            }
        }, fH.codec.base64 = {
            b: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", fromBits: function (g5, g6, g7) {
                var g8 = "", g9 = 0, ga = fH.codec.base64.b, gb = 0, gc = fH.bitArray.bitLength(g5);
                for (g7 && (ga = ga.substr(0, 62) + "-_"), g7 = 0; 6 * g8.length < gc;) g8 += ga.charAt((gb ^ g5[g7] >>> g9) >>> 26), 6 > g9 ? (gb = g5[g7] << 6 - g9, g9 += 26, g7++) : (gb <<= 6, g9 -= 6);
                for (; 3 & g8.length && !g6;) g8 += "=";
                return g8;
            }, toBits: function (g6, g7) {
                g6 = g6.replace(/\s|=/g, "");
                var g9, gd, g8 = [], ga = 0, gb = fH.codec.base64.b, gc = 0;
                for (g7 && (gb = gb.substr(0, 62) + "-_"), g9 = 0; g9 < g6.length; g9++) {
                    if (0 > (gd = gb.indexOf(g6.charAt(g9)))) throw new fH.exception.invalid("12");
                    26 < ga ? (ga -= 26, g8.push(gc ^ gd >>> ga), gc = gd << 32 - ga) : gc ^= gd << 32 - (ga += 6);
                }
                return 56 & ga && g8.push(fH.bitArray.partial(56 & ga, gc, 1)), g8;
            }
        }, fH.codec.base64url = {
            fromBits: function (g7) {
                return fH.codec.base64.fromBits(g7, 1, 1);
            }, toBits: function (g8) {
                return fH.codec.base64.toBits(g8, 1);
            }
        }, fH.codec.bytes = {
            fromBits: function (g9) {
                var gc, gd, ga = [], gb = fH.bitArray.bitLength(g9);
                for (gc = 0; gc < gb / 8; gc++) 0 == (3 & gc) && (gd = g9[gc / 4]), ga.push(gd >>> 24), gd <<= 8;
                return ga;
            }, toBits: function (ga) {
                var gc, gb = [], gd = 0;
                for (gc = 0; gc < ga.length; gc++) gd = gd << 8 | ga[gc], 3 == (3 & gc) && (gb.push(gd), gd = 0);
                return 3 & gc && gb.push(fH.bitArray.partial(8 * (3 & gc), gd)), gb;
            }
        }, void 0 === fH.beware && (fH.beware = {}), fH.beware.o = function () {
            fH.mode.cbc = {
                name: "cbc", encrypt: function (gb, gc, gd, gf) {
                    if (gf && gf.length) throw new fH.exception.invalid("1");
                    if (128 !== fH.bitArray.bitLength(gd)) throw new fH.exception.invalid("2");
                    var gh = fH.bitArray, gi = gh.f, gj = gh.bitLength(gc), gk = 0, gl = [];
                    if (7 & gj) throw new fH.exception.invalid("3");
                    for (gf = 0; gk + 128 <= gj; gf += 4, gk += 128) gd = gb.encrypt(gi(gd, gc.slice(gf, gf + 4))), gl.splice(gf, 0, gd[0], gd[1], gd[2], gd[3]);
                    return gj = 16843009 * (16 - (gj >> 3 & 15)), gd = gb.encrypt(gi(gd, gh.concat(gc, [gj, gj, gj, gj]).slice(gf, gf + 4))), gl.splice(gf, 0, gd[0], gd[1], gd[2], gd[3]), gl;
                }, decrypt: function (gc, gd, gf, gh) {
                    if (gh && gh.length) throw new fH.exception.invalid("4");
                    if (128 !== fH.bitArray.bitLength(gf)) throw new fH.exception.invalid("5");
                    if (127 & fH.bitArray.bitLength(gd) || !gd.length) throw new fH.exception.corrupt("6");
                    var gk, gi = fH.bitArray, gj = gi.f, gl = [];
                    for (gh = 0; gh < gd.length; gh += 4) gk = gd.slice(gh, gh + 4), gf = gj(gf, gc.decrypt(gk)), gl.splice(gh, 0, gf[0], gf[1], gf[2], gf[3]), gf = gk;
                    if (0 === (gk = 255 & gl[gh - 1]) || 16 < gk) throw new fH.exception.corrupt("7");
                    if (gf = 16843009 * gk, !gi.equal(gi.bitSlice([gf, gf, gf, gf], 0, 8 * gk), gi.bitSlice(gl, 32 * gl.length - 8 * gk, 32 * gl.length))) throw new fH.exception.corrupt("9");
                    return gi.bitSlice(gl, 0, 32 * gl.length - 8 * gk);
                }
            };
        }, module.exports && (module.exports = fH);
    }), q = {}, t = {}, z = {}, B = location["href"], C = screen["width"], D = screen["height"],
    F = screen["availHeight"], H = screen["availWidth"],
    I = screen["orientation"] ? screen["orientation"]["type"] : "null", J = screen["pixelDepth"],
    K = screen["colorDepth"], L = [], N = [], O = [], P = [], Q = [], R = [], T = 0, U = 0, V = 0, W = 0, X = [],
    Y = [], Z = [], a0 = [], a2 = 0, a3 = 0;
sjcl_1["beware"].o();
    function gP(hq, hr) {
    for (var hs = !1, ht = 0, hv = Object['keys'](hq); ht < hv['length']; ht++) {
        var hw = hv[ht];
        if (('content-type' === hw['toLowerCase']() || 'contenttype' === hw['toLowerCase']()) && (hs = !0,
        hq[hw] && hq[hw]['toLowerCase']()['startsWith'](hr)))
            return !0
    }
    return hr === 'application/json' && !hs
};
function _typeof(obj) {
    "@babel/helpers - typeof";
    return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
                return typeof obj
            }
            : function(obj) {
                return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj
            }
    )(obj)
}
var g3 = {
    b1: 0,
    b5: 0
}, g4 = ""
    , g5 = ""
    , g6 = []
    , g7 = '2.0.0'
    , g8 = '1.1'
    , g9 = 'H5dfp_' + '2.0.0' + '_tttt_'
    , ga = 'ZmserbBoHQtNP+wOcza/LpngG8yJq42KWYj0DSfdikx3VT16IlUAFM97hECvuRX5'
    , gb = 0
    , gc = !1
    , gd = !1
    , gf = !1;
window['H5guardCount'] = 0;
var gh = ""
    , gj = !1
    , gk = {}
    , gl = !1
    , gm = !1
    , go = !1;
sjcl_1['beware'].o();
for (var gp1 = _defineProperty({}, 'k1', g7), gq = 0, gr = ga['length']; gq < gr; ++gq)
    g6[gq] = ga[gq];
const gp = {
    "k1": "2.0.0",
    "k5": Date.now(),
    "sessionId": "20a95d6ab54343a98b7e62d4eea6c74d",
    "k2": "",
    "k3": "",
    "k9": "complete|1685526161554|1685526161554|1685526161385",
    "k12": [
        800,
        1445
    ],
    "k25": "Win32",
    "k27": "",
    "k30": "",
    "k48": -480,
    "k49": "Asia/Shanghai",
    "k68": [
        0,
        0,
        0,
        0,
        0
    ],
    "k50": "008eca200",
    "k61": 0,
    "k0": 1685526165,
    "isShort": 1,
    "k47": [
        0.98,
        true,
        "Infinity"
    ],
    "k35": "124.04347527516074",
    "k39": "Google Inc. (AMD)",
    "k40": "ANGLE (AMD, AMD Radeon(TM) Graphics Direct3D11 vs_5_0 ps_5_0, D3D11)",
    "k41": "WebKit",
    "k42": "WebKit WebGL",
    "k43": "WebGL 1.0 (OpenGL ES 2.0 Chromium)",
    "k60": "fffffffff8",
    "k7": "",
    "k62": "",
    "k63": "",
    "k52": [],
    "k53": [],
    "k54": [],
    "k55": [],
    "k56": [],
    "k57": [],
    "k58": [],
    "k59": [],
    "k6": [
        "https://market.waimai.meituan.com/gd/single.html",
        "https://passport.meituan.com/"
    ],
    "k8": "ffffffffffffffffffffff3ffffffffffdfbfffffffffffffffffffffffffc",
    "k11": [
        [
            400,
            722
        ],
        [
            400,
            722
        ],
        24,
        24
    ],
    "k13": 1,
    "k14": 1,
    "k15": 0,
    "k16": 0,
    "k17": 2.0000000298023224,
    "k18": 0,
    "k19": null,
    "k20": [
        "zh-CN",
        "zh"
    ],
    "k21": "zh-CN",
    "k22": 8,
    "k23": 16,
    "k24": "1",
    "k26": [],
    "k28": null,
    "k29": null,
    "k31": 1,
    "k32": "Google Inc.",
    "k33": "yes",
    "k34": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAArZJREFUSEu1l01oE0EUx3+jFi1FUMGvVtCDREtBlHpSjHrSgyiINxGsRq1iD54r0or0KijaNCrWg+SmSHvw1qjgwQ9URIQo6KEWURAlYO2lI2931kw2u8kkXQcC2ey895v/mzdvXhRaa2QURuBOL9z2ntzHZ2A0C4On3G0A5YFHh6Cn34cerWMf5b8EFIGX7mzFRFazu9e3mAB2NQEWE4E/Aqbc4ArwQy3jE7CuSXAAHzeL+OdmIXDSPOWAGe97Jbi8hHh6va2UkBdscxdwB/DFGMn3LcA+4BjQYn6vB3YKeVdIcZzOlcAlIAPUA4sPSbKaieYKDhbUBWx3SJ6pFIxLiN6ZyYeBZYDs8SEg7ajYZrnASwsgfw24YuA2WJKrUcXBAtLAxhrKZZ/zfcAP4C6QFLjV+JpXA54bAR4nDBbeDqAzBuwptt8lpVh8rgX2xICrznKS4DYT7ii2FJDiQeAZMBmxx2uayGobFFTCMDx/Hkr3Y47TDHSHS6bDEa2YEgWuCnPIabtfDStrdSPguFBLUklyRY1uPLXmkshqMNdiI+Co5JKbKepaXAzsBEStGQqkAxkC+hvBVh8nL6FCLgSYKqu03xqw/CQH3lG5bJDcXKJAnEsDEIRXnlebj6UwrMoCy6u3wABwz029tWduBlWhDpu9NnApee+Bb2bCCujohEwaBuScbm6UF95jR/uzwFXHuXWmqb1L9J+HP5H+JH7YjUAy3DGl0S0bBnlRfM4mXjm0PnMHj6HUfslPf2h9HTg9d781PQyj1BmZUQb78OPAzf8Ez6DUrcB3JdiHrwIuJKh+GLiIUl9tQdXgcujXAyeAHmB5g1H4jv+H6AZKfRTbI29omz9N+9JZJi9vYzoebJO0li5Lqq2UjAMxi3hgmtoCSj2x55x7SuuvRaSk79SzfMht5fdf3ZG9LKdxNP8AAAAASUVORK5CYII=",
    "k36": "2806dbc263f8b02a0fc38da28311dbcb",
    "k37": "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Mobile Safari/537.36",
    "k38": 4,
    "k46": "srgb",
    "k51": "1|1|1",
    "k64": {
        "parse": {
            "function": "function parse() { [native code] }",
            "toString": {
                "ret": "function toString() { [native code] }"
            }
        },
        "stringify": {
            "function": "function stringify() { [native code] }",
            "toString": {
                "ret": "function toString() { [native code] }"
            }
        },
        "decodeURI": {
            "function": "function decodeURI() { [native code] }",
            "toString": {
                "ret": "function toString() { [native code] }"
            }
        },
        "decodeURIComponent": {
            "function": "function decodeURIComponent() { [native code] }",
            "toString": {
                "ret": "function toString() { [native code] }"
            }
        },
        "encodeURI": {
            "function": "function encodeURI() { [native code] }",
            "toString": {
                "ret": "function toString() { [native code] }"
            }
        },
        "encodeURIComponent": {
            "function": "function encodeURIComponent() { [native code] }",
            "toString": {
                "ret": "function toString() { [native code] }"
            }
        },
        "escape": {
            "function": "function escape() { [native code] }",
            "toString": {
                "ret": "function toString() { [native code] }"
            }
        },
        "unescape": {
            "function": "function unescape() { [native code] }",
            "toString": {
                "ret": "function toString() { [native code] }"
            }
        },
        "atob": {
            "function": "function atob() { [native code] }",
            "toString": {
                "ret": "function toString() { [native code] }"
            }
        },
        "btoa": {
            "function": "function btoa() { [native code] }",
            "toString": {
                "ret": "function toString() { [native code] }"
            }
        }
    },
    "k65": [
        "https://s3.meituan.net/v1/mss_eb9ea9cfff9840198c3ae909b17b4270/production/owl/gd.js",
        "//lx.meituan.net/lx.js",
        "//s3.meituan.net/v1/mss_eb9ea9cfff9840198c3ae909b17b4270/production/logan-websdk/async_dependencies.787c36adfcd0290faef6.js",
        "//s3plus.meituan.net/v1/mss_3bdfec648fc242aa88aace768b85ae32/warden/3.1.3/warden.min.js",
        "//s3.meituan.net/v1/mss_eb9ea9cfff9840198c3ae909b17b4270/production/logan-websdk/vendors~report_log~save_log.864e47638dbacdfab069.js",
        "//s3.meituan.net/v1/mss_eb9ea9cfff9840198c3ae909b17b4270/production/logan-websdk/vendors~save_log.de08abe17dc35c49636f.js",
        "//s3.meituan.net/v1/mss_eb9ea9cfff9840198c3ae909b17b4270/production/logan-websdk/vendors~encryption.b734ef077fa7005e8674.js",
        "https://s3plus.meituan.net/v1/mss_91f3b645703642ce914d9ce3610eaf4c/gundampage/chunk/gdcNewTicketWall-3e75b9d0258a4743ec04.js",
        "https://s3plus.meituan.net/v1/mss_91f3b645703642ce914d9ce3610eaf4c/gundampage/chunk/gdcWmImage-b5c4c40ebc92f96b9f1a.js",
        "https://s3plus.meituan.net/v1/mss_91f3b645703642ce914d9ce3610eaf4c/gundampage/chunk/gdcWmGiftBox-947cfabeadf78f78d995.js",
        "https://s3plus.meituan.net/v1/mss_91f3b645703642ce914d9ce3610eaf4c/gundampage/chunk/gdcWmNewShopfood-3d0315713967d079ddfd.js",
        "https://s3plus.meituan.net/v1/mss_91f3b645703642ce914d9ce3610eaf4c/gundampage/chunk/gdcFooterRule-40fd34f033f0d3a5daf6.js",
        "//s3.meituan.net/v1/mss_eb9ea9cfff9840198c3ae909b17b4270/production/logan-websdk/logan_2.1.4.js",
        "https://s0.meituan.net/bs/knb/v1.7.5:js/knb.js",
        "https://s3plus.meituan.net/v1/mss_91f3b645703642ce914d9ce3610eaf4c/gundampage/gundam-20181107-v1-babel-polyfill-6.26.0.js",
        "https://s3plus.meituan.net/v1/mss_91f3b645703642ce914d9ce3610eaf4c/gundampage/gundam-20181107-v1-vue-2.5.17.js",
        "https://s3plus.meituan.net/v1/mss_91f3b645703642ce914d9ce3610eaf4c/gundampage/gundam-20181107-v1-vuex-3.0.1.js",
        "https://s3plus.meituan.net/v1/mss_91f3b645703642ce914d9ce3610eaf4c/gundampage/gundam-20181107-v1-axios-0.18.0.js",
        "https://s3plus.meituan.net/v1/mss_91f3b645703642ce914d9ce3610eaf4c/gundampage/gundam-20181107-v1-intersection-observer-0.5.1.js",
        "https://s3plus.meituan.net/v1/mss_91f3b645703642ce914d9ce3610eaf4c/gundampage/gundam-20181107-v1-vue-router-3.0.1.js",
        "https://s3plus.meituan.net/v1/mss_91f3b645703642ce914d9ce3610eaf4c/gundampage/gundam-20181127-v1-fastclick-1.0.6.js",
        "https://s3plus.meituan.net/v1/mss_e6aa2b2c35b3432988a7a61f7ed79d37/h5guard/H5guard.js",
        "https://s3plus.meituan.net/v1/mss_91f3b645703642ce914d9ce3610eaf4c/gundampage/gundam-20230330-1.14.6-core.js",
        "https://s3plus.meituan.net/v1/mss_91f3b645703642ce914d9ce3610eaf4c/gundampage/app.1685446136503436fefaaad08a1054aa00f8dfdd560a9.js",
        "https://s3plus.meituan.net/v1/mss_91f3b645703642ce914d9ce3610eaf4c/gundampage/lottie.min-5.7.6.js"
    ],
    "k66": {
        "Window": {
            "function": "function Window() { [native code] }",
            "typeof": "function",
            "Object": {
                "type": "[object Function]"
            },
            "toString": {
                "ret": "function toString() { [native code] }"
            }
        },
        "Navigator": {
            "function": "function Navigator() { [native code] }",
            "typeof": "function",
            "Object": {
                "type": "[object Function]"
            },
            "toString": {
                "ret": "function toString() { [native code] }"
            }
        },
        "window": {
            "function": "[object Window]",
            "typeof": "object",
            "Object": {
                "type": "[object Window]",
                "PropertyDescriptor": {
                    "writable": false,
                    "enumerable": false,
                    "configurable": false
                }
            },
            "toString": {
                "ret": "function toString() { [native code] }"
            }
        },
        "navigator": {
            "function": "[object Navigator]",
            "typeof": "object",
            "Object": {
                "type": "[object Navigator]"
            },
            "toString": {
                "ret": "function toString() { [native code] }"
            }
        }
    },
    "k67": {
        "location": false,
        "document": false,
        "top": false
    }
};
var hH, gN = 'application/x-www-form-urlencoded', gO = 'application/json', gY = (function() {
    for (var ht, hv, hq = 3988292384, hr = 256, hs = []; hr--; hs[hr] = ht >>> 0)
        for (hv = 8,
                 ht = hr; hv--; )
            ht = 1 & ht ? ht >>> 1 ^ hq : ht >>> 1
}(),
    function(hr) {
        return [hr >> 24 & 255, hr >> 16 & 255, hr >> 8 & 255, 255 & hr]
    });
function gE(hq) {
    return void 0 === hq && (hq = []),
        hq['map'](function(hr) {
            return function(hq) {
                var hr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
                return "" + hr[hq >>> 4 & 15] + hr[15 & hq]
            }(hr)
        })['join']("")
}
function gH(hq) {
    var hr = encodeURIComponent(hq);
    return hr = (hr = (hr = (hr = (hr = hr['replace'](/!/g, '%21'))['replace'](/'/g, '%27'))['replace'](/\(/g, '%28'))['replace'](/\)/g, '%29'))['replace'](/\*/g, '%2A')
}
function gw(hq, hr) {
    if (arguments['length'] > 2 && void 0 !== arguments[2] && arguments[2])
        for (var ht in hr) {
            var hv = hr[ht];
            void 0 === hv ? hq['push']([gH(ht), 'undefined']) : null === hv ? hq['push']([gH(ht), 'null']) : _typeof(hv) === 'object' ? hq['push']([gH(ht), gH(JSON['stringify'](hr[ht]))]) : hq['push']([gH(ht), gH(hr[ht])])
        }
    else
        hr['forEach'](function(hw) {
            hq['push']([gH(hw[0]), gH(hw[1])])
        })
};
function gx(hq) {
    for (var hr = arguments['length'] > 1 && void 0 !== arguments[1] && arguments[1], hs = [], ht = hq['split']("&"), hv = 0; hv < ht['length']; hv++) {
        var hw = ht[hv]['split']("=");
        if (hw['length'] > 2)
            hw = [hw['shift'](), hw['join']("=")];
        if ("" != hw[0] && !(hw['length'] < 1)) {
            var hz = hw[0];
            if (hz = hz['replace'](/\+/g, " "),
            1 === hw['length'])
                hr ? hs['push']([decodeURIComponent(hz), 'undefined']) : hs['push']([decodeURIComponent(hz), ""]);
            else {
                var hB = hw[1];
                hB = hw[1]['replace'](/\+/g, " "),
                    hs['push']([decodeURIComponent(hz), decodeURIComponent(hB)])
            }
        }
    }
    return hs
};
function gF(hq, hr, hs) {
    for (var ht = 0, hv = 0, hw = [], hx = hs['length'], hy = 0; hy < hx; hy++)
        hv = (hv + hq[ht = (ht + 1) % 256]) % 256,
            hr = hq[ht],
            hq[ht] = hq[hv],
            hq[hv] = hr,
            hw['push'](hs['charCodeAt'](hy) ^ hq[(hq[ht] + hq[hv]) % 256]);
    return hw
}
function gL(hq, hr) {
    return hq[0] < hr[0] ? -1 : hq[0] > hr[0] ? 1 : hq[1] < hr[1] ? -1 : hq[1] > hr[1] ? 1 : 0
};
function gy(hq) {
    for (var hr = encodeURIComponent(hq), hs = [], ht = 0; ht < hr['length']; ht++) {
        var hv = hr['charAt'](ht);
        if ("%" === hv) {
            var hw = hr['charAt'](ht + 1) + hr['charAt'](ht + 2)
                , hx = parseInt(hw, 16);
            hs['push'](hx),
                ht += 2
        } else
            hs['push'](hv['charCodeAt'](0))
    }
    return hs
};
function add32(a, b) {
    return a + b & 4294967295
}
var bK = Uint8Array
    , bL = Uint16Array
    , bN = Uint32Array
    , bO = new bK([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0])
    , bP = new bK([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0])
    , bQ = new bK([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15])
    , bR = function(fO, fP) {
    for (var fQ = new bL(31), fR = 0; fR < 31; ++fR)
        fQ[fR] = fP += 1 << fO[fR - 1];
    var fT = new bN(fQ[30]);
    for (fR = 1; fR < 30; ++fR)
        for (var fU = fQ[fR]; fU < fQ[fR + 1]; ++fU)
            fT[fU] = fU - fQ[fR] << 5 | fR;
    return [fQ, fT]
}
    , bT = bR(bO, 2)
    , bU = bT[0]
    , bV = bT[1];
bU[28] = 258,
    bV[258] = 28;
for (var bX = bR(bP, 0)[1], bY = new bL(32768), bZ = 0; bZ < 32768; ++bZ) {
    var c0 = (43690 & bZ) >>> 1 | (21845 & bZ) << 1;
    c0 = (61680 & (c0 = (52428 & c0) >>> 2 | (13107 & c0) << 2)) >>> 4 | (3855 & c0) << 4,
        bY[bZ] = ((65280 & c0) >>> 8 | (255 & c0) << 8) >>> 1
}
var c1 = function(fO, fP, fQ) {
    for (var fR = fO['length'], fT = 0, fU = new bL(fP); fT < fR; ++fT)
        ++fU[fO[fT] - 1];
    var fW, fV = new bL(fP);
    for (fT = 0; fT < fP; ++fT)
        fV[fT] = fV[fT - 1] + fU[fT - 1] << 1;
    if (fQ) {
        fW = new bL(1 << fP);
        var fX = 15 - fP;
        for (fT = 0; fT < fR; ++fT)
            if (fO[fT])
                for (var fY = fT << 4 | fO[fT], fZ = fP - fO[fT], g0 = fV[fO[fT] - 1]++ << fZ, g1 = g0 | (1 << fZ) - 1; g0 <= g1; ++g0)
                    fW[bY[g0] >>> fX] = fY
    } else
        for (fW = new bL(fR),
                 fT = 0; fT < fR; ++fT)
            fO[fT] && (fW[fT] = bY[fV[fO[fT] - 1]++] >>> 15 - fO[fT]);
    return fW
}, c2 = new bK(288);
for (bZ = 0; bZ < 144; ++bZ)
    c2[bZ] = 8;
for (bZ = 144; bZ < 256; ++bZ)
    c2[bZ] = 9;
for (bZ = 256; bZ < 280; ++bZ)
    c2[bZ] = 7;
for (bZ = 280; bZ < 288; ++bZ)
    c2[bZ] = 8;
var c3 = new bK(32);
for (bZ = 0; bZ < 32; ++bZ)
    c3[bZ] = 5;
var c4 = c1(c2, 9, 0)
    , c5 = c1(c3, 5, 0)
    , c6 = function(fO) {
    return (fO / 8 | 0) + (7 & fO && 1)
}
    , c7 = function(fO, fP, fQ) {
    (null == fP || fP < 0) && (fP = 0),
    (null == fQ || fQ > fO['length']) && (fQ = fO['length']);
    var fR = new (fO instanceof bL ? bL : fO instanceof bN ? bN : bK)(fQ - fP);
    return fR['set'](fO['subarray'](fP, fQ)),
        fR
}
    , c8 = function(fO, fP, fQ) {
    fQ <<= 7 & fP;
    var fR = fP / 8 | 0;
    fO[fR] |= fQ,
        fO[fR + 1] |= fQ >>> 8
}
    , c9 = function(fO, fP, fQ) {
    fQ <<= 7 & fP;
    var fR = fP / 8 | 0;
    fO[fR] |= fQ,
        fO[fR + 1] |= fQ >>> 8,
        fO[fR + 2] |= fQ >>> 16
}
    , ca = function(fO, fP) {
    for (var fQ = [], fR = 0; fR < fO['length']; ++fR)
        fO[fR] && fQ['push']({
            s: fR,
            f: fO[fR]
        });
    var fT = fQ['length']
        , fU = fQ['slice']();
    if (!fT)
        return [ci, 0];
    if (1 == fT) {
        var fV = new bK(fQ[0].s + 1);
        return fV[fQ[0].s] = 1,
            [fV, 1]
    }
    fQ['sort'](function (ga, gb) {
        return ga.f - gb.f
    }),
        fQ['push']({
            s: -1,
            f: 25001
        })};
function d1(fQ) {
    try {
        if (cN['dfpId'] && cN['timestamp'])
            return cN;
        var fR = function () {
            try {
                var fR, fQ = cJ('WEBDFPID');
                return 3 === (fQ = fQ ? fQ['split']("-") : [])['length'] ? (_defineProperty(fR = {}, 'dfpId', fQ[0]),
                    _defineProperty(fR, 'timestamp', fQ[1]),
                    _defineProperty(fR, 'localId', fQ[2]),
                    fR) : void 0
            } catch (fT) {
            }
        }();
        return !fR && (fR = function () {
            try {
                if (window['localStorage']) {
                    var fQ, fR = window['localStorage'], fT = fR['getItem']('dfpId'), fU = fR['getItem']('localId');
                    return _defineProperty(fQ = {}, 'dfpId', fT),
                        _defineProperty(fQ, 'localId', fU),
                        fQ
                }
                return
            } catch (fV) {
            }
        }()),
        (!fR || null == fR['dfpId']) && (fR = function (fQ) {
            try {
                var fR, fT = Date['now'](), fU = ""['concat'](fT)['concat'](cV(7))['concat'](cW());
                return fU = fU['concat'](cX(fU)),
                    cQ = fU,
                    _defineProperty(fR = {}, 'timestamp', fT),
                    _defineProperty(fR, 'localId', fU),
                    _defineProperty(fR, 'dfpId', fU),
                    _defineProperty(fR, 'serverTimeDiff', 0),
                    fR
            } catch (fV) {
            }
        }()),
            d5(cN = fR),
            fR
    } catch (fT) {
    }
}
function d5(fQ) {
    var fR = fQ["dfpId"] + "-" + fQ["timestamp"] + "-" + fQ["localId"];
    if (cI("WEBDFPID", fR, 3650), window["localStorage"]) {
        var fT = window["localStorage"];
        fT["dfpId"] = fQ["dfpId"], fT["localId"] = fQ["localId"];
    }

}
function cI(fP, fQ, fR) {
    var fT = "";
    if (fR) {
        var fU = new Date();
        fU["setTime"](fU["getTime"]() + 24 * fR * 60 * 60 * 1e3), fT = "; expires=" + fU["toUTCString"]();
    }
    var fV = function (fP) {
        return fP["substring"](fP["lastIndexOf"](".", fP["lastIndexOf"](".") - 1) + 1);
    }(location["hostname"]);
    fV && (fV = "." + fV), document["cookie"] = fP + "=" + (fQ || "") + "; Domain=" + fV + ";" + " path=/" + fT;
}
function cJ(fP) {
    for (var fQ = fP + "=", fR = document["cookie"]["split"](";"), fT = 0; fT < fR["length"]; fT++) {
        for (var fU = fR[fT]; " " === fU["charAt"](0);) fU = fU["substring"](1, fU["length"]);
        if (0 === fU["indexOf"](fQ)) return fU["substring"](fQ["length"], fU["length"]);
    }
    return null;
}
var cK, cL = 0, cN = {}, cO = new XMLHttpRequest, cP = (_defineProperty(cK = {}, 'prod', 'https://appsec-mobile.meituan.com/v1/webdfpid'),
    _defineProperty(cK, 'test', 'https://appsec-mobile.sec.test.sankuai.com/v1/webdfpid'),
    _defineProperty(cK, 'env', 'prod'),
    _defineProperty(cK, 'cacheKey', '40a10de2'),
    cK), cQ = "", cR = void 0, cT = 0, cU = 0;
function gQ(hq, hr) {
    for (var hs, ht, hv, hw, u = [], n = Function.prototype.call, G = 180; ;)
        switch (A[G++]) {
            case 0:
                ht = u.pop();
                continue;
            case 1:
                u[u.length - 2] = u[u.length - 2] < u[u.length - 1];
                continue;
            case 2:
                hw = u[u.length - 1];
                continue;
            case 3:
                return;
            case 5:
                u.push(hv);
                continue;
            case 6:
                u.pop();
                continue;
            case 9:
                u[u.length - 5] = n.call(u[u.length - 5], u[u.length - 4], u[u.length - 3], u[u.length - 2], u[u.length - 1]);
                continue;
            case 11:
                u.push(b);
                continue;
            case 12:
                return u.pop();
            case 13:
                u.push(hw);
                continue;
            case 18:
                u.push(ht);
                continue;
            case 19:
                !u.pop() && (G += 52);
                continue;
            case 20:
                u.push(hs);
                continue;
            case 21:
                u.push(A[G++]);
                continue;
            case 22:
                u[u.length - 2] = u[u.length - 2][u[u.length - 1]];
                continue;
            case 23:
                hs[hw] = u[u.length - 1];
                continue;
            case 24:
                u[u.length - 0] = [];
                continue;
            case 26:
                u.push(hr);
                continue;
            case 27:
                u[u.length - 2] = u[u.length - 2] % u[u.length - 1];
                continue;
            case 29:
                u.push(null);
                continue;
            case 32:
                !u.pop() && (G += 6);
                continue;
            case 38:
                u.push(gF);
                continue;
            case 57:
                hw = u.pop();
                continue;
            case 58:
                u[u.length - 2] = u[u.length - 2] + u[u.length - 1];
                continue;
            case 61:
                G -= 58;
                continue;
            case 64:
                u.push(hq);
                continue;
            case 65:
                G -= 12;
                continue;
            case 66:
                ht = u[u.length - 1];
                continue;
            case 68:
                hs[ht] = u[u.length - 1];
                continue;
            case 72:
                u.length -= 2;
                continue;
            case 75:
                u.length -= 4;
                continue;
            case 79:
                hs = u.pop();
                continue;
            case 81:
                u[u.length - 3] = n.call(u[u.length - 3], u[u.length - 2], u[u.length - 1]);
                continue;
            case 86:
                u.push(hw++);
                continue;
            case 89:
                hv = u[u.length - 1];
                continue
        }
}
ck = function () {
    for (var fO = new bN(256), fP = 0; fP < 256; ++fP) {
        for (var fQ = fP, fR = 9; --fR;)
            fQ = (1 & fQ && 3988292384) ^ fQ >>> 1;
        fO[fP] = fQ
    }
    return fO
}()
cl = function () {
    var fO = -1;
    return {
        p: function (fP) {
            for (var fQ = fO, fR = 0; fR < fP['length']; ++fR)
                fQ = ck[255 & fQ ^ fP[fR]] ^ fQ >>> 8;
            fO = fQ
        },
        d: function () {
            return ~fO
        }
    }
}
function gI(hq) {
    return g6[hq >> 18 & 63] + g6[hq >> 12 & 63] + g6[hq >> 6 & 63] + g6[63 & hq]
}
function gJ(hq, hr, hs) {
    for (var ht, hv = [], hw = hr; hw < hs; hw += 3)
        ht = (hq[hw] << 16 & 16711680) + (hq[hw + 1] << 8 & 65280) + (255 & hq[hw + 2]),
            hv['push'](gI(ht));
    return hv['join']("")
}
function gK(hq) {
    for (var hr, hs = hq['length'], ht = hs % 3, hv = [], hx = 0, hy = hs - ht; hx < hy; hx += 16383)
        hv['push'](gJ(hq, hx, hx + 16383 > hy ? hy : hx + 16383));
    return 1 === ht ? (hr = hq[hs - 1],
        hv['push'](g6[hr >> 2] + g6[hr << 4 & 63] + '==')) : 2 === ht && (hr = (hq[hs - 2] << 8) + hq[hs - 1],
        hv['push'](g6[hr >> 10] + g6[hr >> 4 & 63] + g6[hr << 2 & 63] + "=")),
        hv['join']("")
}
function cmn(q, a, b, x, s, t) {
    return add32((a = add32(add32(a, q), add32(x, t))) << s | a >>> 32 - s, b)
}
function ff(a, b, c, d, x, s, t) {
    return cmn(b & c | ~b & d, a, b, x, s, t)
}
function gg(a, b, c, d, x, s, t) {
    return cmn(b & d | c & ~d, a, b, x, s, t)
}
function hh(a, b, c, d, x, s, t) {
    return cmn(b ^ c ^ d, a, b, x, s, t)
}
function ii(a, b, c, d, x, s, t) {
    return cmn(c ^ (b | ~d), a, b, x, s, t)
}
function gB(hq) {
    for (var hr = [], hs = 0; hs < hq['length']; hs += 2) {
        var ht = hq['charAt'](hs) + hq['charAt'](hs + 1)
            , hv = parseInt(ht, 16);
        hr['push'](hv)
    }
    return hr
}
function md5cycle(x, k) {
    var a = x[0]
        , b = x[1]
        , c = x[2]
        , d = x[3];
    b = ii(b = ii(b = ii(b = ii(b = hh(b = hh(b = hh(b = hh(b = gg(b = gg(b = gg(b = gg(b = ff(b = ff(b = ff(b = ff(b, c = ff(c, d = ff(d, a = ff(a, b, c, d, k[0], 7, -680876936), b, c, k[1], 12, -389564586), a, b, k[2], 17, 606105819), d, a, k[3], 22, -1044525330), c = ff(c, d = ff(d, a = ff(a, b, c, d, k[4], 7, -176418897), b, c, k[5], 12, 1200080426), a, b, k[6], 17, -1473231341), d, a, k[7], 22, -45705983), c = ff(c, d = ff(d, a = ff(a, b, c, d, k[8], 7, 1770035416), b, c, k[9], 12, -1958414417), a, b, k[10], 17, -42063), d, a, k[11], 22, -1990404162), c = ff(c, d = ff(d, a = ff(a, b, c, d, k[12], 7, 1804603682), b, c, k[13], 12, -40341101), a, b, k[14], 17, -1502002290), d, a, k[15], 22, 1236535329), c = gg(c, d = gg(d, a = gg(a, b, c, d, k[1], 5, -165796510), b, c, k[6], 9, -1069501632), a, b, k[11], 14, 643717713), d, a, k[0], 20, -373897302), c = gg(c, d = gg(d, a = gg(a, b, c, d, k[5], 5, -701558691), b, c, k[10], 9, 38016083), a, b, k[15], 14, -660478335), d, a, k[4], 20, -405537848), c = gg(c, d = gg(d, a = gg(a, b, c, d, k[9], 5, 568446438), b, c, k[14], 9, -1019803690), a, b, k[3], 14, -187363961), d, a, k[8], 20, 1163531501), c = gg(c, d = gg(d, a = gg(a, b, c, d, k[13], 5, -1444681467), b, c, k[2], 9, -51403784), a, b, k[7], 14, 1735328473), d, a, k[12], 20, -1926607734), c = hh(c, d = hh(d, a = hh(a, b, c, d, k[5], 4, -378558), b, c, k[8], 11, -2022574463), a, b, k[11], 16, 1839030562), d, a, k[14], 23, -35309556), c = hh(c, d = hh(d, a = hh(a, b, c, d, k[1], 4, -1530992060), b, c, k[4], 11, 1272893353), a, b, k[7], 16, -155497632), d, a, k[10], 23, -1094730640), c = hh(c, d = hh(d, a = hh(a, b, c, d, k[13], 4, 681279174), b, c, k[0], 11, -358537222), a, b, k[3], 16, -722521979), d, a, k[6], 23, 76029189), c = hh(c, d = hh(d, a = hh(a, b, c, d, k[9], 4, -640364487), b, c, k[12], 11, -421815835), a, b, k[15], 16, 530742520), d, a, k[2], 23, -995338651), c = ii(c, d = ii(d, a = ii(a, b, c, d, k[0], 6, -198630844), b, c, k[7], 10, 1126891415), a, b, k[14], 15, -1416354905), d, a, k[5], 21, -57434055), c = ii(c, d = ii(d, a = ii(a, b, c, d, k[12], 6, 1700485571), b, c, k[3], 10, -1894986606), a, b, k[10], 15, -1051523), d, a, k[1], 21, -2054922799), c = ii(c, d = ii(d, a = ii(a, b, c, d, k[8], 6, 1873313359), b, c, k[15], 10, -30611744), a, b, k[6], 15, -1560198380), d, a, k[13], 21, 1309151649), c = ii(c, d = ii(d, a = ii(a, b, c, d, k[4], 6, -145523070), b, c, k[11], 10, -1120210379), a, b, k[2], 15, 718787259), d, a, k[9], 21, -343485551),
        x[0] = add32(a, x[0]),
        x[1] = add32(b, x[1]),
        x[2] = add32(c, x[2]),
        x[3] = add32(d, x[3])
};
function md51(s) {
    var i, n = s.length, state = [1732584193, -271733879, -1732584194, 271733878];
    for (i = 64; i <= s.length; i += 64)
        md5cycle(state, md5blk(s.subarray(i - 64, i)));
    s = s.subarray(i - 64);
    var tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (i = 0; i < s.length; i++)
        tail[i >> 2] |= s[i] << (i % 4 << 3);
    if (tail[i >> 2] |= 128 << (i % 4 << 3),
    i > 55)
        for (md5cycle(state, tail),
                 i = 0; i < 16; i++)
            tail[i] = 0;
    return tail[14] = 8 * n,
        md5cycle(state, tail),
        state
}
function md5blk(s) {
    var i, md5blks = [];
    for (i = 0; i < 64; i += 4)
        md5blks[i >> 2] = s[i] + (s[i + 1] << 8) + (s[i + 2] << 16) + (s[i + 3] << 24);
    return md5blks
}
var hex_chr = "0123456789abcdef".split("");
function rhex(n) {
    for (var s = "", j = 0; j < 4; j++)
        s += hex_chr[n >> 8 * j + 4 & 15] + hex_chr[n >> 8 * j & 15];
    return s
}
function hex(x) {
    for (var i = 0; i < x.length; i++)
        x[i] = rhex(x[i]);
    return x.join("")
}
var guardOwl, md5 = {
    md5: function (s) {
        return hex(md51(s))
    },
    md5Array: md51,
    md5ToHex: hex
};
function gU(hq, hr) {
    for (var hs, ht, hv, hw, hx, u = [], n = Function.prototype.call, G = 271; ;)
        switch (A[G++]) {
            case 0:
                u.push(++hv);
                continue;
            case 1:
                u.pop();
                continue;
            case 2:
                u[u.length - 2] = u[u.length - 2] ^ u[u.length - 1];
                continue;
            case 4:
                hw ^= u[u.length - 1];
                continue;
            case 6:
                u.push(ht);
                continue;
            case 9:
                u.push(hq);
                continue;
            case 10:
                return;
            case 11:
                u.push(null);
                continue;
            case 14:
                u[u.length - 2] = u[u.length - 2] + u[u.length - 1];
                continue;
            case 16:
                u.push(A[G++]);
                continue;
            case 17:
                u.push(hw);
                continue;
            case 19:
                hx = u.pop();
                continue;
            case 20:
                u[u.length - 2] = u[u.length - 2] & u[u.length - 1];
                continue;
            case 22:
                ht = u.pop();
                continue;
            case 32:
                ht = u[u.length - 1];
                continue;
            case 33:
                u.push(hx);
                continue;
            case 34:
                !u.pop() && (G += 153);
                continue;
            case 36:
                ht ^= u[u.length - 1];
                continue;
            case 39:
                u.length -= 2;
                continue;
            case 41:
                u[u.length - 2] = u[u.length - 2] | u[u.length - 1];
                continue;
            case 47:
                hw = u[u.length - 1];
                continue;
            case 51:
                switch (hs) {
                    case 3:
                        ht ^= (255 & hq[hv + 2]) << 16;
                    case 2:
                        ht ^= (255 & hq[hv + 1]) << 8;
                    case 1:
                        ht = (65535 & (ht ^= 255 & hq[hv])) * hx + (((ht >>> 16) * hx & 65535) << 16)
                }
                continue;
            case 58:
                u[u.length - 2] = u[u.length - 2][u[u.length - 1]];
                continue;
            case 63:
                u[u.length - 2] = u[u.length - 2] << u[u.length - 1];
                continue;
            case 67:
                u[u.length - 2] = u[u.length - 2] * u[u.length - 1];
                continue;
            case 72:
                u.push(b);
                continue;
            case 76:
                u[u.length - 2] = u[u.length - 2] >>> u[u.length - 1];
                continue;
            case 79:
                u.push(hr);
                continue;
            case 85:
                hv = u.pop();
                continue;
            case 146:
                u.push(hs);
                continue;
            case 147:
                hs -= u[u.length - 1];
                continue;
            case 156:
                G -= 159;
                continue;
            case 158:
                u[u.length - 3] = n.call(u[u.length - 3], u[u.length - 2], u[u.length - 1]);
                continue;
            case 183:
                u[u.length - 2] = u[u.length - 2] >= u[u.length - 1];
                continue;
            case 192:
                return u.pop();
            case 211:
                u.push(hv);
                continue;
            case 223:
                hs = u.pop();
                continue
        }
}
function gC(hq) {
    var hr = [];
    return hr[0] = hq >>> 24 & 255,
        hr[1] = hq >>> 16 & 255,
        hr[2] = hq >>> 8 & 255,
        hr[3] = 255 & hq,
        hr
}
function gW(hq, hr) {
    window.document.cookie = hq.headers.cookie || hq.headers.Cookie;
    ho()
    return function(hq, hr) {
        var hs = Date['now']();

            if (gb += 1,
                g3['b2'] = gb,
                hq) {
                var hv = hq['headers'] || {}
                    , hw = (hq['method'] || 'GET')['toUpperCase']()
                    , hz = (hw !== 'GET' && gP(hv, gN),
                hw !== 'GET' && gP(hv, gO),
                    (new Date)['valueOf']())
                    , hB = hq['url'] || "";
                if (hB['startsWith']("/") && !hB['startsWith']('//') && (hB = location['origin'] + hB),
                hB['startsWith']('//') && (hB = location['protocol'] + hB),
                null === hq['data'] && (hq['data'] = void 0),
                typeof hq['data'] === 'string')
                    var hC = hq['data'];
                else
                    var hC = JSON['stringify'](hq['data']);
                (!hq['headers'] || _typeof(hq['headers']) !== 'object') && (hq['headers'] = {});
                var hE = /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z_]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/['exec'](hB)
                    , hF = "/"
                    , hH = [];
                hE && (hE[5] && (hF += hE[5]),
                hE[6] && (hH = gx(hE[6])));
                var hI = [];
                if (hw === 'GET')
                    if (_typeof(hC) === 'object' && Object['keys'](hC)['length'] > 0) {
                        if (gw(hI, hC, !0),
                        hE && hE[6] && hH['length'] > 0) {
                            var hJ = {};
                            (hH = gx(hE[6], !0))['forEach'](function(hV) {
                                !hC['hasOwnProperty'](hV[0]) && (hJ[hV[0]] = hV[1])
                            }),
                                gw(hI, hJ, !0)
                        }
                    } else
                        gw(hI, hH);
                else
                    gw(hI, hH);
                var hK = "";
                hK = hr ? g4 : g5;
                hj(hK);
                []['concat'](hI);
                hI['sort'](gL);
                var hN = [];
                hI['forEach'](function(hV) {
                    hV[0] == 'mtgsig' || hN['push'](hV[0] + "=" + hV[1])
                });
                var hO = hN['join']("&")
                    , hP = hw + " " + hF + " " + hO
                    , hQ = hC
                    , hR = gy(hP);
                hw !== 'GET' && void 0 != hC && hR['push']['apply'](hR, function(hq) {
                    return hq['length'] > 16200 && (hq = hq['slice'](0, 16200)),
                        hq
                }(gy(hQ))),
                    g3['b3'] = g7,
                    function() {
                        var hV, hW, hX, hZ, i0, i1, i2, i3, i4, i5, i6, i7, i8, i9, ia, ib, ic, ig, ih, ij, ik, il, im, io, iq, ir, it, iv, ip, iw, ix, iy, iz, iB, iC, u = [], n = Function.prototype.call, G = 504;
                        for (; ; )
                            switch (A[G++]) {
                                case 0:
                                    u[u.length - 2] = u[u.length - 2][u[u.length - 1]];
                                    continue;
                                case 2:
                                    u.push(null);
                                    continue;
                                case 4:
                                    u[u.length - 2] = u[u.length - 2] < u[u.length - 1];
                                    continue;
                                case 5:
                                    u.pop();
                                    continue;
                                case 6:
                                    u[u.length - 3] = n.call(u[u.length - 3], u[u.length - 2], u[u.length - 1]);
                                    continue;
                                case 10:
                                    u.push("&");
                                    continue;
                                case 13:
                                    u[u.length - 2] = u[u.length - 2] + u[u.length - 1];
                                    continue;
                                case 14:
                                    u.push(A[G++]);
                                    continue;
                                case 15:
                                    u.length -= 2;
                                    continue;
                                case 17:
                                    u.push(ir);
                                    continue;
                                case 19:
                                    ic = u.pop();
                                    continue;
                                case 20:
                                    u.push(gb);
                                    continue;
                                case 24:
                                    hZ = u.pop();
                                    continue;
                                case 25:
                                    u.push(i6);
                                    continue;
                                case 26:
                                    ic['d1'] = u[u.length - 1];
                                    continue;
                                case 27:
                                    u.push(ig);
                                    continue;
                                case 28:
                                    u.push(ij);
                                    continue;
                                case 29:
                                    u[u.length - 2] = u[u.length - 2] ^ u[u.length - 1];
                                    continue;
                                case 32:
                                    u.push(g3);
                                    continue;
                                case 36:
                                    u.push(it);
                                    continue;
                                case 42:
                                    u.push(gE);
                                    continue;
                                case 43:
                                    u.push(hB);
                                    continue;
                                case 44:
                                    u.push(new Uint8Array(gy(hK)));
                                    continue;
                                case 45:
                                    u.push(im);
                                    continue;
                                case 46:
                                    u.pop();
                                    continue;
                                case 50:
                                    u.push("");
                                    continue;
                                case 56:
                                    u.push(ip);
                                    continue;
                                case 60:
                                    u.push(io);
                                    continue;
                                case 61:
                                    u[u.length - 4] = [u[u.length - 4], u[u.length - 3], u[u.length - 2], u[u.length - 1]];
                                    continue;
                                case 68:
                                    u.push(i3);
                                    continue;
                                case 75:
                                    ig = u.pop();
                                    continue;
                                case 76:
                                    ia = u.pop();
                                    continue;
                                case 79:
                                    u.push(b);
                                    continue;
                                case 84:
                                    u.push(gc);
                                    continue;
                                case 91:
                                    im[9] = u[u.length - 1];
                                    continue;
                                case 101:
                                    u.push(hK);
                                    continue;
                                case 113:
                                    u.push(i5);
                                    continue;
                                case 114:
                                    u[u.length - 2] = u[u.length - 2] != u[u.length - 1];
                                    continue;
                                case 119:
                                    u.pop() || (G += 6);
                                    continue;
                                case 120:
                                    im[15] = u[u.length - 1];
                                    continue;
                                case 125:
                                    u[u.length - 4] = n.call(u[u.length - 4], u[u.length - 3], u[u.length - 2], u[u.length - 1]);
                                    continue;
                                case 126:
                                    u.length -= 3;
                                    continue;
                                case 141:
                                    iv += u[u.length - 1];
                                    continue;
                                case 148:
                                    u.push(iw);
                                    continue;
                                case 151:
                                    u[u.length - 2] = u[u.length - 2] & u[u.length - 1];
                                    continue;
                                case 163:
                                    u.push(hR);
                                    continue;
                                case 165:
                                    u.pop() || (G += 9);
                                    continue;
                                case 170:
                                    u.push(gQ);
                                    continue;
                                case 171:
                                    u[u.length - 2] = u[u.length - 2] == u[u.length - 1];
                                    continue;
                                case 172:
                                    iw = u.pop();
                                    continue;
                                case 179:
                                    u.push(encodeURIComponent);
                                    continue;
                                case 181:
                                    u.push(iC);
                                    continue;
                                case 188:
                                    u.push(ia);
                                    continue;
                                case 207:
                                    u.push("?");
                                    continue;
                                case 211:
                                    u.push(JSON);
                                    continue;
                                case 217:
                                    u.push(ix);
                                    continue;
                                case 224:
                                    u.push(i8);
                                    continue;
                                case 232:
                                    u.push(ic);
                                    continue;
                                case 239:
                                    iz = u[u.length - 1];
                                    continue;
                                case 240:
                                    u.push(md5);
                                    continue;
                                case 243:
                                    u.push(hz);
                                    continue;
                                case 244:
                                    u.push(iv);
                                    continue;
                                case 245:
                                    u.push(gB);
                                    continue;
                                case 252:
                                    G += 23;
                                    continue;
                                case 255:
                                    u.push("0");
                                    continue;
                                case 270:
                                    u[u.length - 2] = u[u.length - 2] << u[u.length - 1];
                                    continue;
                                case 274:
                                    u[u.length - 2] = u[u.length - 2] !== u[u.length - 1];
                                    continue;
                                case 282:
                                    u.push(hV);
                                    continue;
                                case 293:
                                    u.push(iB);
                                    continue;
                                case 298:
                                    u.push(gk);
                                    continue;
                                case 302:
                                    ir = u[u.length - 1];
                                    continue;
                                case 308:
                                    u.push(i4);
                                    continue;
                                case 321:
                                    u.push(new Uint8Array(gy(i4)));
                                    continue;
                                case 322:
                                    u.push(gC);
                                    continue;
                                case 327:
                                    iw = u[u.length - 1];
                                    continue;
                                case 354:
                                    u.push(i9);
                                    continue;
                                case 361:
                                    ih = u.pop();
                                    continue;
                                case 365:
                                    im[9] |= u[u.length - 1];
                                    continue;
                                case 366:
                                    i1 = u.pop();
                                    continue;
                                case 369:
                                    u.push(g8);
                                    continue;
                                case 381:
                                    u.push(guardRaptor && guardRaptor['report']('dfp_h5_sign_url_len', 200, 200, iB['length'], .001, gh));
                                    continue;
                                case 385:
                                    u.push(gp);
                                    continue;
                                case 387:
                                    ic['a1'] = u[u.length - 1];
                                    continue;
                                case 399:
                                    ix = u.pop();
                                    continue;
                                case 404:
                                    iC = u.pop();
                                    continue;
                                case 416:
                                    hW = u.pop();
                                    continue;
                                case 419:
                                    u.push(i2);
                                    continue;
                                case 432:
                                    u[u.length - 2] = u[u.length - 2] | u[u.length - 1];
                                    continue;
                                case 451:
                                    im[12] = u[u.length - 1];
                                    continue;
                                case 460:
                                    i9 = u.pop();
                                    continue;
                                case 466:
                                    i7 = u.pop();
                                    continue;
                                case 488:
                                    ir = u.pop();
                                    continue;
                                case 489:
                                    hX = u.pop();
                                    continue;
                                case 493:
                                    ip = u.pop();
                                    continue;
                                case 495:
                                    i8 = u.pop();
                                    continue;
                                case 508:
                                    u.push(hX);
                                    continue;
                                case 521:
                                    im[8] = u[u.length - 1];
                                    continue;
                                case 525:
                                    im[11] |= u[u.length - 1];
                                    continue;
                                case 527:
                                    iB = u.pop();
                                    continue;
                                case 529:
                                    ib = u.pop();
                                    continue;
                                case 531:
                                    G += 0;
                                    continue;
                                case 539:
                                    u.pop() || (G += 8);
                                    continue;
                                case 540:
                                    !u.pop() && (G += 67);
                                    continue;
                                case 542:
                                    ic['a2'] = u[u.length - 1];
                                    continue;
                                case 543:
                                    G += 72;
                                    continue;
                                case 547:
                                    u.pop() || (G += 7);
                                    continue;
                                case 560:
                                    u.push(guardRaptor && guardRaptor['report']('dfp_h5_sign_len', 200, 200, JSON['stringify'](ic)['length'], .001, gh));
                                    continue;
                                case 567:
                                    u.push(gU);
                                    continue;
                                case 572:
                                    im[11] = u[u.length - 1];
                                    continue;
                                case 574:
                                    u.push({});
                                    continue;
                                case 594:
                                    im[10] |= u[u.length - 1];
                                    continue;
                                case 597:
                                    il = u.pop();
                                    continue;
                                case 599:
                                    ic['x0'] = u[u.length - 1];
                                    continue;
                                case 608:
                                    u.push(ib);
                                    continue;
                                case 616:
                                    u.push(iq);
                                    continue;
                                case 620:
                                    G += 7;
                                    continue;
                                case 646:
                                    G += 4;
                                    continue;
                                case 649:
                                    ic['a6'] = u[u.length - 1];
                                    continue;
                                case 663:
                                    u.push(iz);
                                    continue;
                                case 674:
                                    ik = u.pop();
                                    continue;
                                case 676:
                                    iq = u.pop();
                                    continue;
                                case 679:
                                    u.push(i1);
                                    continue;
                                case 694:
                                    u.push(hZ);
                                    continue;
                                case 699:
                                    ic['a5'] = u[u.length - 1];
                                    continue;
                                case 721:
                                    iy = u.pop();
                                    continue;
                                case 726:
                                    im[14] = u[u.length - 1];
                                    continue;
                                case 727:
                                    hq['url'] = u[u.length - 1];
                                    continue;
                                case 729:
                                    u.push(parseInt);
                                    continue;
                                case 742:
                                    u.push(gY);
                                    continue;
                                case 746:
                                    ij[0] = u[u.length - 1];
                                    continue;
                                case 765:
                                    it = u.pop();
                                    continue;
                                case 781:
                                    G -= 80;
                                    continue;
                                case 782:
                                    iz = u.pop();
                                    continue;
                                case 788:
                                    u.push(ik);
                                    continue;
                                case 797:
                                    ip += u[u.length - 1];
                                    continue;
                                case 804:
                                    u.push(iy);
                                    continue;
                                case 816:
                                    i3 = u.pop();
                                    continue;
                                case 822:
                                    hq['headers']['mtgsig'] = u[u.length - 1];
                                    continue;
                                case 833:
                                    u.pop() || (G += 32);
                                    continue;
                                case 852:
                                    i5 = u.pop();
                                    continue;
                                case 853:
                                    i0 = u.pop();
                                    continue;
                                case 867:
                                    G += 88;
                                    continue;
                                case 874:
                                    u.push(i7);
                                    continue;
                                case 882:
                                    i6 = u.pop();
                                    continue;
                                case 884:
                                    ic['a3'] = u[u.length - 1];
                                    continue;
                                case 892:
                                    ij[3] = u[u.length - 1];
                                    continue;
                                case 900:
                                    im[13] = u[u.length - 1];
                                    continue;
                                case 903:
                                    u.push(new Uint8Array(gy(hK)['concat'](hW)));
                                    continue;
                                case 924:
                                    u[u.length - 2] = u[u.length - 2] - u[u.length - 1];
                                    continue;
                                case 941:
                                    u.push(gK);
                                    continue;
                                case 944:
                                    u.push(il);
                                    continue;
                                case 959:
                                    return;
                                case 984:
                                    ij = u.pop();
                                    continue;
                                case 992:
                                    u.push(window);
                                    continue;
                                case 1003:
                                    u.pop() || (G += 76);
                                    continue;
                                case 1017:
                                    u[u.length - 2] = u[u.length - 2] >>> u[u.length - 1];
                                    continue;
                                case 1018:
                                    hB = u[u.length - 1];
                                    continue;
                                case 1028:
                                    im = u.pop();
                                    continue;
                                case 1038:
                                    io = u.pop();
                                    continue;
                                case 1042:
                                    u[u.length - 0] = [];
                                    continue;
                                case 1055:
                                    iv = u.pop();
                                    continue;
                                case 1066:
                                    u.push(ip++);
                                    continue;
                                case 1084:
                                    ij[2] = u[u.length - 1];
                                    continue;
                                case 1095:
                                    G -= 77;
                                    continue;
                                case 1102:
                                    ij[1] = u[u.length - 1];
                                    continue;
                                case 1105:
                                    i2 = u.pop();
                                    continue;
                                case 1112:
                                    u.push(new Uint8Array(gy(ih)));
                                    continue;
                                case 1114:
                                    u.pop() || (G += 27);
                                    continue;
                                case 1115:
                                    u.push(d1);
                                    continue;
                                case 1118:
                                    u.push(-1);
                                    continue;
                                case 1133:
                                    u.push(hr);
                                    continue;
                                case 1139:
                                    u.push(i0);
                                    continue;
                                case 1140:
                                    !u.pop() && (G += 64);
                                    continue;
                                case 1144:
                                    i4 = u.pop();
                                    continue;
                                case 1157:
                                    im[10] = u[u.length - 1];
                                    continue;
                                case 1160:
                                    hV = u.pop();
                                    continue
                            }
                    }()
            }
            var hT =hr ? 'dfp_h5_sign' : '3352';
            return guardRaptor && guardRaptor['report'](hT, 200, 200, Date['now']() - hs, .001, gh),
                hq

    }(hq, hr)
}
//====================================
var cs = typeof TextEncoder != 'undefined' && new TextEncoder,
ct = typeof TextDecoder != 'undefined' && new TextDecoder;
c7 = function (fO, fP, fQ) {
    (null == fP || fP < 0) && (fP = 0),
    (null == fQ || fQ > fO['length']) && (fQ = fO['length']);
    var fR = new (fO instanceof bL ? bL : fO instanceof bN ? bN : bK)(fQ - fP);
    return fR['set'](fO['subarray'](fP, fQ)),
        fR
}
c8 = function (fO, fP, fQ) {
    fQ <<= 7 & fP;
    var fR = fP / 8 | 0;
    fO[fR] |= fQ,
        fO[fR + 1] |= fQ >>> 8
}
function cw(fP, fQ) {
    if (fQ) {
        for (var fR = new bK(fP['length']), fT = 0; fT < fP['length']; ++fT)
            fR[fT] = fP['charCodeAt'](fT);
        return fR
    }
    if (cs)
        return cs['encode'](fP);
    var fU = fP['length']
        , fV = new bK(fP['length'] + (fP['length'] >> 1))
        , fW = 0
        , fX = function (g0) {
        fV[fW++] = g0
    };
    for (fT = 0; fT < fU; ++fT) {
        if (fW + 5 > fV['length']) {
            var fY = new bK(fW + 8 + (fU - fT << 1));
            fY['set'](fV),
                fV = fY
        }

        var fZ = fP['charCodeAt'](fT);
        fZ < 128 || fQ ? fX(fZ) : fZ < 2048 ? (fX(192 | fZ >> 6),
            fX(128 | 63 & fZ)) : fZ > 55295 && fZ < 57344 ? (fX(240 | (fZ = 65536 + (1047552 & fZ) | 1023 & fP['charCodeAt'](++fT)) >> 18),
            fX(128 | fZ >> 12 & 63),
            fX(128 | fZ >> 6 & 63),
            fX(128 | 63 & fZ)) : (fX(224 | fZ >> 12),
            fX(128 | fZ >> 6 & 63),
            fX(128 | 63 & fZ))
    }
    return c7(fV, 0, fW)
}
function gt() {
    return window['self'] !== window['top']
}
hp = {};
hp['init'] = hj,
hp['getfp'] = function() {
        var hL = Date['now']();
        try {
            var hN = JSON['parse'](az['stringify'](gp));
            return delete hN['k63'],
                delete hN['k64'],
                delete hN['k65'],
                delete hN['k66'],
                delete hN['k67'],
                delete hN['k68'],
                delete hN['k69'],
                delete hN['k70'],
                delete hN['isShort'],
            hN['k10'] || (Date['now'](),
                hN['k10'] = aZ()),
            hN['k60'] || (Date['now'](),
                hN['k60'] = aX()),
                hN['reload'] = function() {
                    hN['k4'] = (new Date)['getTime'](),
                    hN['k58']['length'] > 30 && (hN['k58'] = hN['k58']['slice'](0, 30)),
                    hN['k59']['length'] > 30 && (hN['k59'] = hN['k59']['slice'](0, 30));
                    try {
                        var hQ = az['stringify'](hN)
                    } catch (hT) {}
                    var hR = g9 + gv(hQ);
                    return guardRaptor && guardRaptor['report']('dfp_h5_finger', 200, 200, Date['now']() - hL, .01, gh),
                    guardRaptor && guardRaptor['report']('dfp_h5_finger_len', 200, 200, hR['length'], .01, gh),
                        hR
                }
                ,
                hN['reload']()
        } catch (hQ) {
            throw dh('H5guard getfp error', hQ['stack']['toString'](), 'error', gh),
            guardRaptor && guardRaptor['report']('dfp_h5_finger', 200, 9401, Date['now']() - hL, .01, gh),
                hQ
        }
    },
hp['getId'] = function() {
        try {
            return d1()['dfpId']
        } catch (hN) {
            throw dh('H5guard getdfpid error', hN['stack']['toString'](), 'error', gh),
                hN
        }
    },
hp['initWithKey'] = function(hO) {
        try {
            if (typeof hO['appKey'] == 'undefined')
                return void alert('请设置appKey');
            if (typeof window['wappKey'] != 'undefined')
                window['wappKey'] = window['wappKey']['concat']("-", hO['appKey']);
            else {
                window['wappKey'] = hO['appKey'];
                try {
                    window['localStorage']['setItem']('guardAppkey', window['wappKey'])
                } catch (hQ) {}
            }
            hj(hO)
        } catch (hR) {
            throw dh('H5guard Init error', hR['stack']['toString'](), 'error', gh),
                hR
        }
    }
function fx(g3, g4, g5, g6, g7, g8, g9) {
    fq = g4,
        fr = g5,
        fs = g6,
        ft = g7,
        fv = g8,
        fw = g9;
    var ga = [0, 1, 7, 9, 12, 25, 27, 30, 35, 40, 41, 42, 43, 47, 48, 49, 50, 61];
    if (g3) {
        var gb = Date['now']();
        fr['k5'] = gb,
            fm = function() {
                for (var g3 = [], g4 = '0123456789abcdef', g5 = 0; g5 < 36; g5++)
                    g3[g5] = g4['substr'](Math['floor'](16 * Math['random']()), 1);
                return g3[14] = "4",
                    g3[19] = g4['substr'](3 & g3[19] | 8, 1),
                    g3[8] = g3[13] = g3[18] = g3[23] = "",
                    g3['join']("")
            }(),
            fr['sessionId'] = fm,
            function(fQ) {
                try {
                    var fR = d1();
                    fR && (fQ['k2'] = fR['localId'],
                        fQ['k3'] = fR['dfpId'],
                        cL = fR['timestamp'] ? Number(fR['timestamp']) : 0)
                } catch (fT) {}
            }(fr);
        for (var gc = 0; gc < ga['length']; gc++)
            fy(ga[gc]);
        setTimeout(function() {
            !fr['k39'] && fy(39),
            !fr['k60'] && (fr['k60'] = aX())
        }, 1e3)
    } else {
        fr['k52'] = [],
            fr['k53'] = [],
            fr['k54'] = [],
            fr['k55'] = [],
            fr['k56'] = [],
            fr['k57'] = [],
            fr['k58'] = [],
            fr['k59'] = [];
        for (var gd = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 36, 35, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 68, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 62, 63, 64, 65, 66, 67], gf = 0; gf < gd['length']; gf++) {
            var gh = gd[gf];
            ga['indexOf'](gh) > -1 && (gd[gf] = -1)
        }
    }
}
hd = function(hH) {
    var hI = !1;
    hH && 1 == hH['xhrHook'] ? hI = !0 : hH && 1 == hH['fetchHook'] && (hI = !0);
    var hJ = [];
    if (hI && (hJ = hH['domains'] ? hH['domains'] : []),
        hJ['push']('appsec-mobile.meituan.com', 'appsec-mobile.sec.test.sankuai.com'),
        typeof window['wDomains'] != 'undefined' ? window['wDomains'] = window['wDomains']['concat'](hJ) : window['wDomains'] = hJ,
        window['xhrHook'] = !0,
        window['fetchHook'] = !0,
        window['xhrHooked'])
        ;
    else {
        try {
            var hK = function(hT) {
                XMLHttpRequest['prototype']['open'] = function() {
                    try {
                        var hU = Date['now']();
                        arguments[1]['startsWith']("/") && !arguments[1]['startsWith']('//') && (arguments[1] = location['origin'] + arguments[1]),
                        arguments[1]['startsWith']('//') && (arguments[1] = location['protocol'] + arguments[1]);
                        var hW = /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z_]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/['exec'](arguments[1])
                            , hX = "";
                        if (hW) {
                            var hY = h4(hW[3], hW[5])
                                , hZ = 1 === hY || 2 === hY
                                , i0 = []
                                , i1 = arguments[1];
                            if (hZ) {
                                var i2 = !1;
                                if (i1 && typeof i1 === 'string') {
                                    var i3 = i1['length'];
                                    i3 > 8192 && guardRaptor && guardRaptor['report']('dfp_h5_url_long', 200, 200, i3, 1, gh),
                                    2 === hY && (i3 > 7692 && i3 < 8192 || i3 > 15884 && i3 < 16384) && (hY = 0,
                                        i2 = !0,
                                        dh('H5guard url length error', i1['substring'](0, 9e3), 'error', gh))
                                }
                                if (!i2) {
                                    hX = hi(arguments[1]);
                                    var i4 = ['appsec-mobile.meituan.com', 'appsec-mobile.sec.test.sankuai.com'];
                                    !(i4['indexOf'](hW[3]) > -1) && (arguments[1] = arguments[1] + hX),
                                    guardRaptor && guardRaptor['report']('dfp_h5_baseSec_xhr', 200, 200, Date['now']() - hU, .001, gh);
                                    for (var i5 = 0; i5 < arguments['length']; i5++)
                                        i0['push'](arguments[i5])
                                }
                            }
                            this['guardReq'] = {
                                url: arguments[1],
                                method: arguments[0],
                                headers: {},
                                openArg: i0,
                                signType: hY,
                                oriUrl: i1,
                                SCaApp: !1
                            }
                        } else
                            this['guardReq'] = {
                                url: arguments[1],
                                method: arguments[0],
                                headers: {}
                            }
                    } catch (i6) {
                        guardRaptor && guardRaptor['report']('dfp_h5_baseSec_xhr', 200, 9401, Date['now']() - hU, .001, gh),
                            dh('H5guard xhr open error', i6['stack']['toString'](), 'error', gh)
                    }
                    return hT['apply'](this, arguments)
                }
            }
                , hL = function(hU) {
                XMLHttpRequest['prototype']['setRequestHeader'] = function() {
                    try {
                        var hV = !1;
                        if (this['guardReq'] && this['guardReq']['url']) {
                            var hW = this['guardReq']['signType'];
                            1 === hW || 2 === hW ? arguments[0] != 'mtgsig' ? (arguments[0] == 'S-Ca-App' && (this['guardReq']['SCaApp'] = !0,
                                dh('H5guard xhr S-Ca-App', this['guardReq']['oriUrl'], 'error', gh)),
                                this['guardReq']['headers'][arguments[0]] = arguments[1]) : (this['guardReq']['signType'] = 1,
                                hV = !0,
                            this['guardReq']['url']['indexOf']('mtgsig=') > -1 && (hV = !1)) : this['guardReq']['headers'][arguments[0]] = arguments[1]
                        }
                    } catch (hX) {
                        dh('H5guard xhr header error', hX['stack']['toString'](), 'error', gh)
                    }
                    if (!hV)
                        return hU['apply'](this, arguments)
                }
            }
        } catch (hU) {}
        if (1 == window['xhrHook'] && !gd || hH && 1 == hH['xhrHook'] && !gd)
                hK(hN = XMLHttpRequest['prototype']['open']),
                    hL(hO = XMLHttpRequest['prototype']['setRequestHeader']);
                var hP = XMLHttpRequest['prototype']['send'];
                XMLHttpRequest['prototype']['send'] = function() {
                    try {
                        if (this['guardReq'] && this['guardReq']['url']) {
                            var hV = 1 === this['guardReq']['signType'] || 2 === this['guardReq']['signType'];
                            if (hV) {
                                var hW = arguments[0]
                                    , hX = !1;
                                if (hW && typeof hW === 'string' || hW && _typeof(hW) === 'object' && (hW instanceof URLSearchParams ? hW = hW['toString']() : hX = h9(hW)),
                                    this['guardReq']['data'] = hW,
                                    this['guardReq']['SCaApp'])
                                    for (var hY in this['guardReq']['openArg'][1] = this['guardReq']['oriUrl'],
                                        this['guardReq']['url'] = this['guardReq']['oriUrl'],
                                        hN['apply'](this, this['guardReq']['openArg']),
                                        this['guardReq']['headers'])
                                        hY && hO['apply'](this, [hY, this['guardReq']['headers'][hY]]);
                                if (hX)
                                    ;
                                else if (typeof this['guardReq']['headers']['mtgsig'] === 'undefined')
                                    try {
                                        var hZ = 1 === this['guardReq']['signType']
                                            , i0 = gW(this['guardReq'], hZ);
                                        if (hZ)
                                            hO['apply'](this, ['mtgsig', i0['headers']['mtgsig']]);
                                        else if (this['guardReq']['SCaApp'])
                                            ;
                                        else
                                            for (var hY in this['guardReq']['openArg'][1] = i0['url'],
                                                hN['apply'](this, this['guardReq']['openArg']),
                                                this['guardReq']['headers'])
                                                hY && hO['apply'](this, [hY, this['guardReq']['headers'][hY]])
                                    } catch (i2) {}
                            }
                            if (hV)
                                try {
                                    if (null == this['onload'])
                                        this['onload'] = function() {
                                            ha(this)
                                        }
                                        ;
                                    else {
                                        var i1 = this['onload'];
                                        this['onload'] = function() {
                                            return ha(this),
                                                i1['apply'](this, arguments)
                                        }
                                    }
                                } catch (i3) {}
                        }
                    } catch (i4) {
                        dh('H5guard  xhr send  error', i4['stack']['toString'](), 'error', gh)
                    }
                    return hP['apply'](this, arguments)
                }

        if (1 == window['xhrHook'] && gd || hH && 1 == hH['xhrHook'] && gd)
            try {
                var hN, hO;
                hK(hN = XMLHttpRequest['prototype']['open']),
                    hL(hO = XMLHttpRequest['prototype']['setRequestHeader']);
                hP = XMLHttpRequest['prototype']['send'];
                XMLHttpRequest['prototype']['send'] = _asyncToGenerator(regenerator['mark'](function hW() {
                    var hX, hY, hZ, i0, i1, i3, i4, i5, i6 = arguments;
                    return regenerator['wrap'](function(i8) {
                        for (; ; )
                            switch (i8['prev'] = i8['next']) {
                                case 0:
                                    if (i8['prev'] = 0,
                                        hX = "",
                                    !this['guardReq'] || !this['guardReq']['url']) {
                                        i8['next'] = 38;
                                        break
                                    }
                                    if (!(hY = 1 === this['guardReq']['signType'] || 2 === this['guardReq']['signType'])) {
                                        i8['next'] = 37;
                                        break
                                    }
                                    if (hZ = i6[0],
                                        i0 = !1,
                                    hZ && typeof hZ === 'string' || hZ && _typeof(hZ) === 'object' && (hZ instanceof URLSearchParams ? hZ = hZ['toString']() : i0 = h9(hZ)),
                                        this['guardReq']['data'] = hZ,
                                        this['guardReq']['SCaApp'])
                                        for (i1 in this['guardReq']['openArg'][1] = this['guardReq']['oriUrl'],
                                            this['guardReq']['url'] = this['guardReq']['oriUrl'],
                                            hN['apply'](this, this['guardReq']['openArg']),
                                            this['guardReq']['headers'])
                                            i1 && hO['apply'](this, [i1, this['guardReq']['headers'][i1]]);
                                    if (!i0) {
                                        i8['next'] = 15;
                                        break
                                    }
                                    i8['next'] = 37;
                                    break;
                                case 15:
                                    if (typeof this['guardReq']['headers']['mtgsig'] !== 'undefined') {
                                        i8['next'] = 37;
                                        break
                                    }
                                    if (!(1 === this['guardReq']['signType'])) {
                                        i8['next'] = 36;
                                        break
                                    }
                                    if (i8['prev'] = 19,
                                        !aW['getCloseKnb']()) {
                                        i8['next'] = 25;
                                        break
                                    }
                                    i3 = gW(this['guardReq'], !0),
                                        hX = i3['headers']['mtgsig'],
                                        i8['next'] = 28;
                                    break;
                                case 25:
                                    return i4 = this['guardReq'],
                                        i8['next'] = 28,
                                        h0(i4, !0)['then'](function(i9) {
                                            hX = i9['headers']['mtgsig']
                                        });
                                case 28:
                                    hO['apply'](this, ['mtgsig', hX]),
                                        i8['next'] = 34;
                                    break;
                                case 31:
                                    i8['prev'] = 31,
                                        i8['t0'] = i8['catch'](19);
                                case 34:
                                    i8['next'] = 37;
                                    break;
                                case 36:
                                    if (this['guardReq']['SCaApp'])
                                        ;
                                    else
                                        for (i1 in i3 = gW(this['guardReq'], !1),
                                            this['guardReq']['openArg'][1] = i3['url'],
                                            hN['apply'](this, this['guardReq']['openArg']),
                                            this['guardReq']['headers'])
                                            i1 && hO['apply'](this, [i1, this['guardReq']['headers'][i1]]);
                                case 37:
                                    if (hY)
                                        try {
                                            null == this['onload'] ? this['onload'] = function() {
                                                    ha(this)
                                                }
                                                : (i5 = this['onload'],
                                                        this['onload'] = function() {
                                                            return ha(this),
                                                                i5['apply'](this, arguments)
                                                        }
                                                )
                                        } catch (i9) {}
                                case 38:
                                    i8['next'] = 44;
                                    break;
                                case 40:
                                    i8['prev'] = 40,
                                        i8['t1'] = i8['catch'](0),
                                        dh('H5guard  xhr native send  error', i8['t1']['stack']['toString'](), 'error', gh);
                                case 44:
                                    return i8['abrupt']('return', hP['apply'](this, i6));
                                case 45:
                                case 'end':
                                    return i8['stop']()
                            }
                    }, hW, this, [[0, 40], [19, 31]])
                }))
            } catch (hX) {
                throw dh('H5guard xhr hook error', hX['stack']['toString'](), 'error', gh),
                    hX
            }
        (1 == window['xhrHook'] || hH && 1 == hH['xhrHook']) && (window['xhrHooked'] = !0)
    }
    if (window['fetchHooked'])
        ;
    else {
        if (1 == window['fetchHook'] || hH && 1 == hH['fetchHook'])
            try {
                if (fetch) {
                    var hQ = fetch;
                    window['fetch'] = _asyncToGenerator(regenerator['mark'](function hY() {
                        var hZ, i0, i1, i2, i3, i4, i5, i6, i7, i8, i9, ia, ib, ic, ig, ih, ij, ik, im, io, ip, iq, ir, it, iv, ix, iy, iz, iB, iC, iD, iF, iI, iL, iN, iO, iP, iQ, iR, iT, iU, iV = arguments;
                        return regenerator['wrap'](function(iX) {
                            for (; ; )
                                switch (iX['prev'] = iX['next']) {
                                    case 0:
                                        if (iX['prev'] = 0,
                                            hZ = Date['now'](),
                                            i0 = !1,
                                            i1 = !1,
                                            !(iV[0]instanceof Request)) {
                                            iX['next'] = 24;
                                            break
                                        }
                                        return i2 = iV[0]['clone'](),
                                            i3 = i2['url'] || "",
                                            i4 = i2['method'] || "",
                                            i5 = i2['headers'] || {},
                                            iX['next'] = 13,
                                            i2['text']();
                                    case 13:
                                        if (i6 = iX['sent'],
                                            i7 = {},
                                        i5 instanceof Headers) {
                                            i8 = fD(i5['entries']());
                                            try {
                                                for (i8.s(); !(i9 = i8.n())['done']; )
                                                    ia = i9['value'],
                                                        ib = ia[0],
                                                        ic = ia[1],
                                                        i7[ib] = ic
                                            } catch (iY) {
                                                i8.e(iY)
                                            } finally {
                                                i8.f()
                                            }
                                            i5 = i7
                                        }
                                        i3['trim']()['startsWith']("/") && !i3['trim']()['startsWith']('//') && (i3 = window['location']['origin'] + i3),
                                        i3['trim']()['startsWith']('//') && (i3 = window['location']['protocol'] + i3),
                                            ig = {
                                                url: i3,
                                                headers: i5,
                                                data: i6,
                                                method: i4
                                            },
                                            ih = i3,
                                            ij = void 0,
                                            iX['next'] = 32;
                                        break;
                                    case 24:
                                        (ih = iV[0]) && _typeof(ih) === 'object' && (ih = ih['toString']()),
                                        ih['trim']()['startsWith']("/") && !ih['trim']()['startsWith']('//') && (ih = window['location']['origin'] + ih),
                                        ih['trim']()['startsWith']('//') && (ih = window['location']['protocol'] + ih),
                                            void 0 === (ij = iV[1]) || null == ij ? ig = {
                                                url: ih
                                            } : ((ik = ij['body']) && typeof ik === 'string' || ik && _typeof(ik) === 'object' && (ik instanceof URLSearchParams ? ik = ik['toString']() : i0 = h9(ik)),
                                                ig = {
                                                    url: ih,
                                                    headers: ij['headers'],
                                                    data: ik,
                                                    method: ij['method']
                                                });
                                    case 32:
                                        if (im = /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z_]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/['exec'](ih),
                                            io = "",
                                            !im) {
                                            iX['next'] = 54;
                                            break
                                        }
                                        if (ip = h4(im[3], im[5]),
                                            i1 = 1 === ip || 2 === ip,
                                            iq = !1,
                                        ig && ig['headers'] && ig['headers']['S-Ca-App'] && (iq = !0,
                                            dh('H5guard fetch S-Ca-App', ig['url'], 'error', gh)),
                                        i1 && !iq && (ir = ig['url'],
                                            it = !1,
                                        ir && typeof ir === 'string' && ((iv = ir['length']) > 8192 && guardRaptor && guardRaptor['report']('dfp_h5_url_long', 200, 200, ih['length'], 1, gh),
                                        2 === ip && (iv > 7692 && iv < 8192 || iv > 15884 && iv < 16384) && (ip = 0,
                                            it = !0,
                                            i1 = !1,
                                            dh('H5guard url length error', ir['substring'](0, 9e3), 'error', gh))),
                                        !it && (io = hi(ig['url']),
                                        !(['appsec-mobile.meituan.com', 'appsec-mobile.sec.test.sankuai.com']['indexOf'](im[3]) > -1) && (ig['url'] = ig['url'] + io,
                                            ih += io),
                                        guardRaptor && guardRaptor['report']('dfp_h5_baseSec_fetch', 200, 200, Date['now']() - hZ, .001, gh))),
                                            !i1) {
                                            iX['next'] = 54;
                                            break
                                        }
                                        if (!i0) {
                                            iX['next'] = 47;
                                            break
                                        }
                                        iX['next'] = 54;
                                        break;
                                    case 47:
                                        return ix = {},
                                            iy = "",
                                            iz = 1 === ip,
                                        ig['headers'] && ig['headers']['mtgsig'] && (iz = !0),
                                            iX['next'] = 53,
                                            h2(ig, iz)['then'](function(iZ) {
                                                ix = iZ['headers']['mtgsig'],
                                                    iy = iZ['url']
                                            });
                                    case 53:
                                        if (iz)
                                            if (iV[0]instanceof Request) {
                                                iB = new Headers(ig['headers']),
                                                    Object['defineProperty'](iV[0], 'headers', {
                                                        writable: !0
                                                    }),
                                                    iV[0]['headers'] = iB,
                                                    iC = fD(iV[0]['headers']['entries']());
                                                try {
                                                    for (iC.s(); !(iD = iC.n())['done']; )
                                                        iD['value']
                                                } catch (iZ) {
                                                    iC.e(iZ)
                                                } finally {
                                                    iC.f()
                                                }
                                            } else {
                                                (typeof ij == 'undefined' || null == ij) && (ij = {
                                                    headers: {}
                                                });
                                                try {
                                                    ij['headers']instanceof Headers ? ij['headers']['append']('mtgsig', ix) : ij['headers'] ? ij['headers']['mtgsig'] = ix : (ij['headers'] = {},
                                                        ij['headers']['mtgsig'] = ix)
                                                } catch (j0) {}
                                            }
                                        else
                                            !iq && (ih = iy);
                                    case 54:
                                        if (i1 ? iV[0]instanceof Request ? (iF = iV[0]['clone'](),
                                        iF['url'] || "",
                                            iI = iF['method'] || "",
                                        iF['headers'] || {},
                                            i6,
                                            iL = iF['mode'] || 'cors',
                                            iN = iF['credentials'],
                                            iO = iF['cache'],
                                            iP = iF['redirect'],
                                            iQ = iF['referrer'],
                                            iR = {},
                                            iT = (iF['method'] || 'GET')['toUpperCase'](),
                                            iR = iT == 'GET' ? new Request(ih,{
                                                method: iI,
                                                headers: iV[0]['headers'],
                                                mode: iL,
                                                credentials: iN,
                                                cache: iO,
                                                redirect: iP,
                                                referrer: iQ
                                            }) : new Request(ih,{
                                                method: iI,
                                                headers: iV[0]['headers'],
                                                body: i6,
                                                mode: iL,
                                                credentials: iN,
                                                cache: iO,
                                                redirect: iP,
                                                referrer: iQ
                                            }),
                                            iV[0] = iR,
                                            iU = hQ['apply'](this, iV)) : iU = hQ(ih, ij) : iU = hQ['apply'](this, iV),
                                        i1 && !hg())
                                            try {
                                                iU['then'](function(j1) {
                                                    try {
                                                        hb(j1)
                                                    } catch (j2) {
                                                        dh('H5guard fetch response handle error', j2['stack']['toString'](), 'error', gh)
                                                    }
                                                })['catch'](function(j1) {})
                                            } catch (j1) {}
                                        if (!i1 || !hg()) {
                                            iX['next'] = 61;
                                            break
                                        }
                                        return iX['abrupt']('return', iU['then'](function() {
                                            var j2 = _asyncToGenerator(regenerator['mark'](function j3(j4) {
                                                var j5, j6, j7, j8;
                                                return regenerator['wrap'](function(ja) {
                                                    for (; ; )
                                                        switch (ja['prev'] = ja['next']) {
                                                            case 0:
                                                                if (ja['prev'] = 0,
                                                                    j4) {
                                                                    ja['next'] = 3;
                                                                    break
                                                                }
                                                                return ja['abrupt']('return', j4);
                                                            case 3:
                                                                if (418 != j4['status']) {
                                                                    ja['next'] = 15;
                                                                    break
                                                                }
                                                                return ja['next'] = 7,
                                                                    hf(j4);
                                                            case 7:
                                                                return j5 = ja['sent'],
                                                                    j6 = j5['clone'](),
                                                                    j7 = j6['clone'](),
                                                                    j8 = j6['clone'](),
                                                                    hb(j7),
                                                                    ja['abrupt']('return', j8);
                                                            case 15:
                                                                return hb(j4),
                                                                    ja['abrupt']('return', j4);
                                                            case 17:
                                                                ja['next'] = 23;
                                                                break;
                                                            case 19:
                                                                return ja['prev'] = 19,
                                                                    ja['t0'] = ja['catch'](0),
                                                                    dh('fetch res hook error', ja['t0']['stack']['toString'](), 'error', gh),
                                                                    ja['abrupt']('return', j4);
                                                            case 23:
                                                            case 'end':
                                                                return ja['stop']()
                                                        }
                                                }, j3, null, [[0, 19]])
                                            }));
                                            return function(j4) {
                                                return j2['apply'](this, arguments)
                                            }
                                        }())['catch'](function(j2) {
                                            throw j2
                                        }));
                                    case 61:
                                        return iX['abrupt']('return', iU);
                                    case 62:
                                        iX['next'] = 70;
                                        break;
                                    case 64:
                                        return iX['prev'] = 64,
                                            iX['t0'] = iX['catch'](0),
                                        guardRaptor && guardRaptor['report']('dfp_h5_baseSec_fetch', 200, 9401, Date['now']() - hZ, .001, gh),
                                            dh('H5guard fetch hook handle error', iX['t0']['stack']['toString'](), 'error', gh),
                                            iX['abrupt']('return', hQ['apply'](this, iV));
                                    case 70:
                                    case 'end':
                                        return iX['stop']()
                                }
                        }, hY, this, [[0, 64]])
                    }))
                }
            } catch (hZ) {}
        (1 == window['fetchHook'] || hH && 1 == hH['fetchHook']) && (window['fetchHooked'] = !0)
    }
}
function ab() {
    Q = [],
        P = [],
        a0 = []
}
var ac = {
    initSensor: function(fH, fI, fJ) {
        q = fH,
            t = fH['GuardRaptor'],
            z = fH['RaptorReport'],
            function(fH, fI, fJ) {
                var fK = 'https://portal-portm.meituan.com/horn?version=v1&from=H5guardTrack' + "&" + 'appKey=' + fH + "&" + 'dfpId=' + fI
                    , fL = Date['now']();
                try {
                    if (window['XMLHttpRequest']) {
                        var fN = new XMLHttpRequest;
                        fN['open']('GET', fK),
                            fN['onload'] = function(fO) {
                                if (4 === fN['readyState'])
                                    if (200 === fN['status'])
                                        try {
                                            var fP = JSON['parse'](fN['responseText']);
                                            if (null != fP['customer']) {
                                                t && t['report']('dfp_h5_bio_horn', 200, 200, Date['now']() - fL, .01, fH);
                                                var fQ = JSON['parse'](function(fH) {
                                                    function fI() {
                                                        for (var fP = ['6314320b202e172f1a1519202b02552a50', 'C5F5FDF5F2F5F3F5F0F5F1F5F6F5F7F5F4'], fQ = [], fR = "", fT = 0; fT < fP['length']; fT++) {
                                                            fR = "";
                                                            for (var fU = fP[fT], fV = fU['length'], fW = parseInt('0x' + fU['substr'](0, 2)), fX = 2; fX < fV; fX += 2) {
                                                                var fY = parseInt('0x' + fU['charAt'](fX) + fU['charAt'](fX + 1));
                                                                fR += String['fromCharCode'](fY ^ fW)
                                                            }
                                                            fQ['push'](fR)
                                                        }
                                                        return fQ
                                                    }
                                                    var fJ = sjcl_1['codec']['utf8String']['toBits'](fI()[0])
                                                        , fK = sjcl_1['codec']['utf8String']['toBits'](fI()[1])
                                                        , fL = new (sjcl_1['cipher']['aes'])(fJ)
                                                        , fN = sjcl_1['codec']['base64']['toBits'](fH);
                                                    return function(fH) {
                                                        for (var fI = "", fJ = 0; fJ < fH['length']; fJ++)
                                                            fI += "%" + fH[fJ]['toString'](16);
                                                        return decodeURIComponent(fI)
                                                    }(sjcl_1['mode']['cbc']['decrypt'](fL, fN, fK))
                                                }(fP['customer']['H5guard_Bioanalysis']))
                                                    , fR = fQ['valid']
                                                    , fT = fQ['start_delay']
                                                    , fU = fQ['move_interval']
                                                    , fV = fQ['freq'];
                                                if (fR) {
                                                    (function(fH, fI) {
                                                            try {
                                                                var fK = function fP(fQ) {
                                                                    a2 = 0,
                                                                        V = Date['now']();
                                                                    var fR = fQ['clientX']
                                                                        , fT = fQ['clientY']
                                                                        , fU = [fR, fT]
                                                                        , fV = fQ['button']
                                                                        , fX = ('mouseup',
                                                                        0);
                                                                    fX = 0 == U ? V - T : V - U,
                                                                        (O = [])['push'](fU, fV, fX);
                                                                    var fY = {
                                                                        mouseclickStart: L,
                                                                        mouseclickTrail: N,
                                                                        mouseclickEnd: O
                                                                    };
                                                                    P['push'](fY),
                                                                        N = [],
                                                                        L = [],
                                                                        O = [],
                                                                        U = 0,
                                                                        document['removeEventListener']('mouseup', fP, !0)
                                                                }
                                                                    , fL = function fQ(fR) {
                                                                    var fT = Date['now']()
                                                                        , fU = fT - a3;
                                                                    a3 = 0;
                                                                    var fV = fR['changedTouches'][0]['clientX']
                                                                        , fW = fR['changedTouches'][0]['clientY']
                                                                        , fX = [fV, fW]
                                                                        , fY = fR['changedTouches'][0]['force']
                                                                        , fZ = [];
                                                                    fZ['push'](fX, fY, fU),
                                                                        Z['push'](fZ);
                                                                    var g0 = {
                                                                        touchpressStart: X,
                                                                        touchmoveTrail: Y,
                                                                        touchpressEnd: Z
                                                                    };
                                                                    a0['push'](g0),
                                                                        X = [],
                                                                        Y = [],
                                                                        Z = [],
                                                                        document['removeEventListener']('touchend', fQ, !0)
                                                                }
                                                                    , fN = 1e3 * fH;
                                                                typeof window['onmousedown'] !== 'undefined' && document['addEventListener']('mousedown', function(fR) {
                                                                    T = Date['now'](),
                                                                        N = [],
                                                                        a2 = 1;
                                                                    var fT = fR['clientX']
                                                                        , fU = fR['clientY']
                                                                        , fV = [fT, fU]
                                                                        , fW = fR['button'];
                                                                    'mousedown',
                                                                        (L = [])['push'](fV, fW, T),
                                                                        U = T,
                                                                        document['addEventListener']('mouseup', fK, !0)
                                                                }),
                                                                typeof window['onmousemove'] !== 'undefined' && document['addEventListener']('mousemove', function(fP) {
                                                                    if (0 == a2) {
                                                                        var fQ = fP['clientX']
                                                                            , fR = fP['clientY']
                                                                            , fT = [fQ, fR]
                                                                            , fV = ('mousemove',
                                                                            Date['now']())
                                                                            , fW = fV - W;
                                                                        W = fV;
                                                                        var fX = [];
                                                                        fW >= fI && (fX['push'](fT, fW),
                                                                            R['push'](fX))
                                                                    } else {
                                                                        var fY = fP['clientX']
                                                                            , fZ = fP['clientY']
                                                                            , g0 = [fY, fZ]
                                                                            , g2 = ('mousemove',
                                                                            Date['now']())
                                                                            , g3 = g2 - U;
                                                                        U = g2;
                                                                        var g4 = [];
                                                                        g4['push'](g0, g3),
                                                                        g3 >= fI && N['push'](g4)
                                                                    }
                                                                }, !0),
                                                                typeof window['ontouchstart'] !== 'undefined' && document['addEventListener']('touchstart', function(fR) {
                                                                    X = [];
                                                                    var fT = Date['now']()
                                                                        , fU = fT - a3;
                                                                    a3 = fT;
                                                                    var fV = fR['touches'][0]['clientX']
                                                                        , fW = fR['touches'][0]['clientY']
                                                                        , fX = [fV, fW]
                                                                        , fY = fR['touches'][0]['force']
                                                                        , fZ = [];
                                                                    fZ['push'](fX, fY, fU),
                                                                        X['push'](fZ),
                                                                        document['addEventListener']('touchmove', function(g0) {
                                                                            var g1 = Date['now']()
                                                                                , g2 = g1 - a3;
                                                                            a3 = g1;
                                                                            var g3 = g0['touches'][0]['clientX']
                                                                                , g4 = g0['touches'][0]['clientY']
                                                                                , g5 = [g3, g4]
                                                                                , g6 = g0['touches'][0]['force']
                                                                                , g7 = [];
                                                                            g7['push'](g5, g6, g2),
                                                                            g2 >= fI && Y['push'](g7)
                                                                        }),
                                                                        document['addEventListener']('touchend', fL, !0)
                                                                }),
                                                                    setInterval(function() {
                                                                        if (R['length'] > 0) {
                                                                            var fR = {
                                                                                mouseclickStart: [],
                                                                                mouseclickTrail: R,
                                                                                mouseclickEnd: []
                                                                            };
                                                                            Q['push'](fR)
                                                                        }
                                                                        R = [],
                                                                            W = 0
                                                                    }, fN)
                                                            } catch (fR) {}
                                                        }
                                                    )(fU, fV),
                                                        setTimeout(function() {
                                                            a9(fJ)
                                                        }, 1e3 * fT);
                                                    var fW = !1;
                                                    try {
                                                        var fY;
                                                        typeof window['onpagehide'] !== 'undefined' && window['addEventListener']('pagehide', function() {
                                                            !fW && (a9(fJ),
                                                                fW = !0)
                                                        }),
                                                        typeof window['onbeforeunload'] !== 'undefined' && window['addEventListener']('beforeunload', function() {
                                                            !fW && (a9(fJ),
                                                                fW = !0)
                                                        }),
                                                            typeof document['hidden'] !== 'undefined' ? ('hidden',
                                                                fY = 'visibilitychange') : typeof document['msHidden'] !== 'undefined' ? ('msHidden',
                                                                fY = 'msvisibilitychange') : typeof document['webkitHidden'] !== 'undefined' && ('webkitHidden',
                                                                fY = 'webkitvisibilitychange'),
                                                            window['addEventListener'](fY, function() {
                                                                !fW && (a9(fJ),
                                                                    fW = !0)
                                                            })
                                                    } catch (fZ) {}
                                                }
                                            } else
                                                t && t['report']('dfp_h5_bio_horn', 200, 9401, Date['now']() - fL, .01, fH)
                                        } catch (g0) {
                                            z('H5guard get horn config1 error', g0['stack']['toString'](), 'error', fH),
                                            t && t['report']('dfp_h5_bio_horn', 200, 9402, Date['now']() - fL, .01, fH)
                                        }
                                    else
                                        z('H5guard get horn config status error', fN['status']['toString'](), 'error', fH),
                                        t && t['report']('dfp_h5_bio_horn', fN['status'], 200, Date['now']() - fL, .01, fH)
                            }
                            ,
                            fN['onerror'] = function(fO) {
                                z('H5guard get horn config onerror', fN['status']['toString'](), 'error', fH),
                                t && t['report']('dfp_h5_bio_horn', 9401, 200, Date['now']() - fL, .01, fH)
                            }
                            ,
                            fN['send']()
                    } else
                        z('H5guard get horn config xhr error', 'not support xhr ', 'error', fH)
                } catch (fO) {
                    z('H5guard get horn config catch error', fO['stack']['toString'](), 'error', fH)
                }
            }(fH['appKey'], fH['dfpId'], fI)
    },
    clearData: ab
}
ad = ac['initSensor']
af = ac['clearData']
ag = Object['freeze']({
    __proto__: null,
    initSensor: ad,
    clearData: af
});
function hj(hK) {
    var hT, hL = Date['now']();

        var hN = function(hR) {
            typeof hR['appKey'] != 'undefined' && typeof window['wappKey'] != 'undefined' && (gh = window['wappKey']),
                window['H5guardCount'] += 1,
                g3['b4'] = gh,
                g3['b5'] = window['H5guardCount'],
            dj(window['location']['href']) && dj(window['location']['host']) && (gc = !0),
                gf = !!gt(),
                gp['k7'] = function() {
                    if (hp && hR['geo'] && !gl && (gl = !0,
                    'geolocation'in navigator)) {
                        var hU = [];
                        try {
                            navigator['geolocation']['getCurrentPosition'](function(hX) {
                                hU['push'](hX['coords']['latitude']),
                                    hU['push'](hX['coords']['longitude'])
                            }, function(hX) {
                                hU['push'](0)
                            })
                        } catch (hV) {}
                        return hU
                    }
                    return ""
                }(),
                hR && typeof hR['openId'] != 'undefined' ? (window['openId'] = hR['openId'],
                    gp['k62'] = hR['openId']) : gp['k62'] = window['openId'] || "",
                gp['k63'] = gh
        };
        if (0 === window['H5guardCount']) {
            Date['now']();
            g3['b1'] = Math['floor'](Date['now']() / 1e3),
                hN(hK),
                fx(!1, gh, gp, gd, dh, guardRaptor, hL),
                ho(),
                hd(hK),
                hT = {
                    GuardRaptor: guardRaptor,
                    RaptorReport: dh,
                    appKey: gh,
                    dfpId: d1(hK)['dfpId']
                },
                ag['initSensor'](hT, gp),
            guardRaptor && guardRaptor['report']('dfp_h5_init', 200, 200, Date['now']() - hL, .01, gh)
        } else
            hN(hK),
                hd(hK)
}
function ho() {
    gp['k0'] = Math['floor'](Date['now']() / 1e3);
    var hP = Date['now']();
    g4 = dg(gp, !1);
    var hQ = Date['now']();
    g5 = dg(gp, !0),
    !gj && (gj = !0,
    guardRaptor && guardRaptor['report']('dfp_h5_siua', 200, 200, hQ - hP, .01, gh),
    guardRaptor && guardRaptor['report']('dfp_h5_siua_len', 200, 200, g4['length'], .01, gh),
    guardRaptor && guardRaptor['report']('dfp_h5_short_siua', 200, 200, Date['now']() - hQ, .01, gh),
    guardRaptor && guardRaptor['report']('dfp_h5_short_siua_len', 200, 200, g5['length'], .01, gh));
    var hR = [];
    gk['check_a'] = hR,
        function (g3, g4) {
            for (var G = 0; ;)
                switch (A[G++]) {
                    case 0:
                        return;
                    case 1:
                        try {
                            g4[0] = 0,
                            (Window['toString']()['replace'](/[\r\n]/g, "")['split'](" ")['join']("") != 'functionWindow(){[nativecode]}' || Window['toString']['toString']()['replace'](/[\r\n]/g, "")['split'](" ")['join']("") != 'functiontoString(){[nativecode]}') && (g4[0] = 1),
                                g4[1] = fo,
                                g4[2] = typeof process !== 'undefined' && process['versions'] && process['versions']['node'] ? 1 : 0,
                                g4[3] = 0,
                            (Navigator['toString']()['replace'](/[\r\n]/g, "")['split'](" ")['join']("") != 'functionNavigator(){[nativecode]}' || Navigator['toString']['toString']()['replace'](/[\r\n]/g, "")['split'](" ")['join']("") != 'functiontoString(){[nativecode]}') && (g4[3] = 1),
                                g4[4] = g3['k27']['length'] ? 1 : 0,
                                g4[5] = 'webdriver' in navigator && navigator['hasOwnProperty']('webdriver') ? 0 : 1
                        } catch (g5) {
                        }
                        continue
                }
        }(gp, hR)
}
function d8(fQ, fR) {
    var fT = typeof Symbol !== 'undefined' && fQ[Symbol['iterator']] || fQ['@@iterator'];
    if (!fT) {
        if (Array['isArray'](fQ) || (fT = function (fQ, fR) {
            if (!fQ)
                return;
            if (typeof fQ === 'string')
                return da(fQ, fR);
            var fT = Object['prototype']['toString']['call'](fQ)['slice'](8, -1);
            fT === 'Object' && fQ['constructor'] && (fT = fQ['constructor']['name']);
            if (fT === 'Map' || fT === 'Set')
                return Array['from'](fQ);
            if (fT === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/['test'](fT))
                return da(fQ, fR)
        }(fQ)) || fR && fQ && typeof fQ['length'] === 'number') {
            fT && (fQ = fT);
            var fU = 0
                , fV = function () {
            };
            return {
                s: fV,
                n: function () {
                    return fU >= fQ['length'] ? {
                        done: !0
                    } : {
                        done: !1,
                        value: fQ[fU++]
                    }
                },
                e: function (g2) {
                    throw g2
                },
                f: fV
            }
        }
        throw new TypeError('Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.')
    }
    var fY, fW = !0, fX = !1;
    return {
        s: function () {
            fT = fT['call'](fQ)
        },
        n: function () {
            var g4 = fT['next']();
            return fW = g4['done'],
                g4
        },
        e: function (g5) {
            fX = !0,
                fY = g5
        },
        f: function () {
            try {
                fW || null == fT['return'] || fT['return']()
            } finally {
                if (fX)
                    throw fY
            }
        }
    }
}
ca = function (fO, fP) {
    for (var fQ = [], fR = 0; fR < fO['length']; ++fR)
        fO[fR] && fQ['push']({
            s: fR,
            f: fO[fR]
        });
    var fT = fQ['length']
        , fU = fQ['slice']();
    if (!fT)
        return [ci, 0];
    if (1 == fT) {
        var fV = new bK(fQ[0].s + 1);
        return fV[fQ[0].s] = 1,
            [fV, 1]
    }
    fQ['sort'](function (ga, gb) {
        return ga.f - gb.f
    }),
        fQ['push']({
            s: -1,
            f: 25001
        });
    var fW = fQ[0]
        , fX = fQ[1]
        , fY = 0
        , fZ = 1
        , g0 = 2;
    for (fQ[0] = {
        s: -1,
        f: fW.f + fX.f,
        l: fW,
        r: fX
    }; fZ != fT - 1;)
        fW = fQ[fQ[fY].f < fQ[g0].f ? fY++ : g0++],
            fX = fQ[fY != fZ && fQ[fY].f < fQ[g0].f ? fY++ : g0++],
            fQ[fZ++] = {
                s: -1,
                f: fW.f + fX.f,
                l: fW,
                r: fX
            };
    var g1 = fU[0].s;
    for (fR = 1; fR < fT; ++fR)
        fU[fR].s > g1 && (g1 = fU[fR].s);
    var g2 = new bL(g1 + 1)
        , g3 = cb(fQ[fZ - 1], g2, 0);
    if (g3 > fP) {
        fR = 0;
        var g4 = 0
            , g5 = g3 - fP
            , g6 = 1 << g5;
        for (fU['sort'](function (ga, gb) {
            return g2[gb.s] - g2[ga.s] || ga.f - gb.f
        }); fR < fT; ++fR) {
            var g7 = fU[fR].s;
            if (!(g2[g7] > fP))
                break;
            g4 += g6 - (1 << g3 - g2[g7]),
                g2[g7] = fP
        }
        for (g4 >>>= g5; g4 > 0;) {
            var g8 = fU[fR].s;
            g2[g8] < fP ? g4 -= 1 << fP - g2[g8]++ - 1 : ++fR
        }
        for (; fR >= 0 && g4; --fR) {
            var g9 = fU[fR].s;
            g2[g9] == fP && (--g2[g9],
                ++g4)
        }
        g3 = fP
    }
    return [new bK(g2), g3]
}
cb = function cb(fO, fP, fQ) {
    return -1 == fO.s ? Math['max'](cb(fO.l, fP, fQ + 1), cb(fO.r, fP, fQ + 1)) : fP[fO.s] = fQ
}
cd = function (fO, fP) {
    for (var fQ = 0, fR = 0; fR < fP['length']; ++fR)
        fQ += fO[fR] * fP[fR];
    return fQ
}
cc = function (fO) {
    for (var fP = fO['length']; fP && !fO[--fP];)
        ;
    for (var fQ = new bL(++fP), fR = 0, fT = fO[0], fU = 1, fV = function (fX) {
        fQ[fR++] = fX
    }, fW = 1; fW <= fP; ++fW)
        if (fO[fW] == fT && fW != fP)
            ++fU;
        else {
            if (!fT && fU > 2) {
                for (; fU > 138; fU -= 138)
                    fV(32754);
                fU > 2 && (fV(fU > 10 ? fU - 11 << 5 | 28690 : fU - 3 << 5 | 12305),
                    fU = 0)
            } else if (fU > 3) {
                for (fV(fT),
                         --fU; fU > 6; fU -= 6)
                    fV(8304);
                fU > 2 && (fV(fU - 3 << 5 | 8208),
                    fU = 0)
            }
            for (; fU--;)
                fV(fT);
            fU = 1,
                fT = fO[fW]
        }
    return [fQ['subarray'](0, fR), fP]
}
cg = function (fO, fP, fQ, fR, fT, fU, fV, fW, fX, fY, fZ) {
    c8(fP, fZ++, fQ),
        ++fT[256];
    for (var g0 = ca(fT, 15), g1 = g0[0], g2 = g0[1], g3 = ca(fU, 15), g4 = g3[0], g5 = g3[1], g6 = cc(g1), g7 = g6[0], g8 = g6[1], g9 = cc(g4), ga = g9[0], gb = g9[1], gc = new bL(19), gd = 0; gd < g7['length']; ++gd)
        gc[31 & g7[gd]]++;
    for (gd = 0; gd < ga['length']; ++gd)
        gc[31 & ga[gd]]++;
    for (var gf = ca(gc, 7), gh = gf[0], gi = gf[1], gj = 19; gj > 4 && !gh[bQ[gj - 1]]; --gj)
        ;
    var go, gp, gq, gr, gk = fY + 5 << 3, gl = cd(fT, c2) + cd(fU, c3) + fV,
        gm = cd(fT, g1) + cd(fU, g4) + fV + 14 + 3 * gj + cd(gc, gh) + (2 * gc[16] + 3 * gc[17] + 7 * gc[18]);
    if (gk <= gl && gk <= gm)
        return cf(fP, fZ, fO['subarray'](fX, fX + fY));
    if (c8(fP, fZ, 1 + (gm < gl)),
        fZ += 2,
    gm < gl) {
        go = c1(g1, g2, 0),
            gp = g1,
            gq = c1(g4, g5, 0),
            gr = g4;
        var gs = c1(gh, gi, 0);
        c8(fP, fZ, g8 - 257),
            c8(fP, fZ + 5, gb - 1),
            c8(fP, fZ + 10, gj - 4),
            fZ += 14;
        for (gd = 0; gd < gj; ++gd)
            c8(fP, fZ + 3 * gd, gh[bQ[gd]]);
        fZ += 3 * gj;
        for (var gt = [g7, ga], gv = 0; gv < 2; ++gv) {
            var gw = gt[gv];
            for (gd = 0; gd < gw['length']; ++gd) {
                var gx = 31 & gw[gd];
                c8(fP, fZ, gs[gx]),
                    fZ += gh[gx],
                gx > 15 && (c8(fP, fZ, gw[gd] >>> 5 & 127),
                    fZ += gw[gd] >>> 12)
            }
        }
    } else
        go = c4,
            gp = c2,
            gq = c5,
            gr = c3;
    for (gd = 0; gd < fW; ++gd)
        if (fR[gd] > 255) {
            gx = fR[gd] >>> 18 & 31;
            c9(fP, fZ, go[gx + 257]),
                fZ += gp[gx + 257],
            gx > 7 && (c8(fP, fZ, fR[gd] >>> 23 & 31),
                fZ += bO[gx]);
            var gy = 31 & fR[gd];
            c9(fP, fZ, gq[gy]),
                fZ += gr[gy],
            gy > 3 && (c9(fP, fZ, fR[gd] >>> 5 & 8191),
                fZ += bP[gy])
        } else
            c9(fP, fZ, go[fR[gd]]),
                fZ += gp[fR[gd]];
    return c9(fP, fZ, go[256]),
    fZ + gp[256]
}
co = function(fO, fP, fQ) {
    for (; fQ; ++fP)
        fO[fP] = fQ,
            fQ >>>= 8
}
cp = function(fO, fP) {
    var fQ = fP['filename'];
    if (fO[0] = 31,
        fO[1] = 139,
        fO[2] = 8,
        fO[8] = fP['level'] < 2 ? 4 : 9 == fP['level'] ? 2 : 0,
        fO[9] = 3,
    0 != fP['mtime'] && co(fO, 4, Math['floor'](new Date(fP['mtime'] || Date['now']()) / 1e3)),
        fQ) {
        fO[3] = 8;
        for (var fR = 0; fR <= fQ['length']; ++fR)
            fO[fR + 10] = fQ['charCodeAt'](fR)
    }
}
var ch = new bN([65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632])
function cq(fO) {
    return 10 + (fO['filename'] && fO['filename']['length'] + 1 || 0)
};
function cm(fO, fP, fQ, fR, fT) {
    for (var bX = bR(bP, 0)[1], bY = new bL(32768), bZ = 0; bZ < 32768; ++bZ) {
        var c0 = (43690 & bZ) >>> 1 | (21845 & bZ) << 1;
        c0 = (61680 & (c0 = (52428 & c0) >>> 2 | (13107 & c0) << 2)) >>> 4 | (3855 & c0) << 4,
            bY[bZ] = ((65280 & c0) >>> 8 | (255 & c0) << 8) >>> 1
    }
    return function (fO, fP, fQ, fR, fT, fU) {
        var fV = fO['length']
            , fW = new bK(fR + fV + 5 * (1 + Math['ceil'](fV / 7e3)) + fT)
            , fX = fW['subarray'](fR, fW['length'] - fT)
            , fY = 0;
        if (!fP || fV < 8)
            for (var fZ = 0; fZ <= fV; fZ += 65535) {
                var g0 = fZ + 65535;
                g0 < fV ? fY = cf(fX, fY, fO['subarray'](fZ, g0)) : (fX[fZ] = fU,
                    fY = cf(fX, fY, fO['subarray'](fZ, fV)))
            }
        else {
            for (var g1 = ch[fP - 1], g2 = g1 >>> 13, g3 = 8191 & g1, g4 = (1 << fQ) - 1, g5 = new bL(32768), g6 = new bL(g4 + 1), g7 = Math['ceil'](fQ / 3), g8 = 2 * g7, g9 = function (gI) {
                return (fO[gI] ^ fO[gI + 1] << g7 ^ fO[gI + 2] << g8) & g4
            }, ga = new bN(25e3), gb = new bL(288), gc = new bL(32), gd = 0, gf = 0, gh = (fZ = 0,
                0), gi = 0, gj = 0; fZ < fV; ++fZ) {
                var gk = g9(fZ)
                    , gl = 32767 & fZ
                    , gm = g6[gk];
                if (g5[gl] = gm,
                    g6[gk] = gl,
                gi <= fZ) {
                    var go = fV - fZ;
                    if ((gd > 7e3 || gh > 24576) && go > 423) {
                        fY = cg(fO, fX, 0, ga, gb, gc, gf, gh, gj, fZ - gj, fY),
                            gh = gd = gf = 0,
                            gj = fZ;
                        for (var gp = 0; gp < 286; ++gp)
                            gb[gp] = 0;
                        for (gp = 0; gp < 30; ++gp)
                            gc[gp] = 0
                    }
                    var gq = 2
                        , gr = 0
                        , gs = g3
                        , gt = gl - gm & 32767;
                    if (go > 2 && gk == g9(fZ - gt))
                        for (var gv = Math['min'](g2, go) - 1, gw = Math['min'](32767, fZ), gx = Math['min'](258, go); gt <= gw && --gs && gl != gm;) {
                            if (fO[fZ + gq] == fO[fZ + gq - gt]) {
                                for (var gy = 0; gy < gx && fO[fZ + gy] == fO[fZ + gy - gt]; ++gy)
                                    ;
                                if (gy > gq) {
                                    if (gq = gy,
                                        gr = gt,
                                    gy > gv)
                                        break;
                                    var gz = Math['min'](gt, gy - 2)
                                        , gB = 0;
                                    for (gp = 0; gp < gz; ++gp) {
                                        var gC = fZ - gt + gp + 32768 & 32767
                                            , gE = gC - g5[gC] + 32768 & 32767;
                                        gE > gB && (gB = gE,
                                            gm = gC)
                                    }
                                }
                            }
                            gt += (gl = gm) - (gm = g5[gl]) + 32768 & 32767
                        }
                    if (gr) {
                        ga[gh++] = 268435456 | bV[gq] << 18 | bX[gr];
                        var gF = 31 & bV[gq]
                            , gH = 31 & bX[gr];
                        gf += bO[gF] + bP[gH],
                            ++gb[257 + gF],
                            ++gc[gH],
                            gi = fZ + gq,
                            ++gd
                    } else
                        ga[gh++] = fO[fZ],
                            ++gb[fO[fZ]]
                }
            }
            fY = cg(fO, fX, fU, ga, gb, gc, gf, gh, gj, fZ - gj, fY),
            !fU && 7 & fY && (fY = cf(fX, fY + 1, ci))
        }
        return c7(fW, 0, fR + c6(fY) + fT)
    }(fO, null == fP['level'] ? 6 : fP['level'], null == fP['mem'] ? Math['ceil'](1.5 * Math['max'](8, Math['min'](13, Math['log'](fO['length'])))) : 12 + fP['mem'], fQ, fR, !fT)
}
function cr(fO, fP) {
    fP || (fP = {});
    var fQ = cl()
        , fR = fO['length'];
    fQ.p(fO);
    var fT = cm(fO, fP, cq(fP), 8)
        , fU = fT['length'];
    return cp(fT, fP),
        co(fT, fU - 8, fQ.d()),
        co(fT, fU - 4, fR),
        fT
}
var fH = {};
fH.bitArray = {
    bitSlice: function (fR, fT, fU) {
        return fR = fH.bitArray.c(fR.slice(fT / 32), 32 - (31 & fT)).slice(1),
            void 0 === fU ? fR : fH.bitArray.clamp(fR, fU - fT)
    },
    extract: function (fT, fU, fV) {
        var fW = Math.floor(-fU - fV & 31);
        return (-32 & (fU + fV - 1 ^ fU) ? fT[fU / 32 | 0] << 32 - fW ^ fT[fU / 32 + 1 | 0] >>> fW : fT[fU / 32 | 0] >>> fW) & (1 << fV) - 1
    },
    concat: function (fU, fV) {
        if (0 === fU.length || 0 === fV.length)
            return fU.concat(fV);
        var fW = fU[fU.length - 1]
            , fX = fH.bitArray.getPartial(fW);
        return 32 === fX ? fU.concat(fV) : fH.bitArray.c(fV, fX, 0 | fW, fU.slice(0, fU.length - 1))
    },
    bitLength: function (fV) {
        var fW = fV.length;
        return 0 === fW ? 0 : 32 * (fW - 1) + fH.bitArray.getPartial(fV[fW - 1])
    },
    clamp: function (fW, fX) {
        if (32 * fW.length < fX)
            return fW;
        var fY = (fW = fW.slice(0, Math.ceil(fX / 32))).length;
        return fX &= 31,
        0 < fY && fX && (fW[fY - 1] = fH.bitArray.partial(fX, fW[fY - 1] & 2147483648 >> fX - 1, 1)),
            fW
    },
    partial: function (fX, fY, fZ) {
        return 32 === fX ? fY : (fZ ? 0 | fY : fY << 32 - fX) + 1099511627776 * fX
    },
    getPartial: function (fY) {
        return Math.round(fY / 1099511627776) || 32
    },
    equal: function (fZ, g0) {
        if (fH.bitArray.bitLength(fZ) !== fH.bitArray.bitLength(g0))
            return !1;
        var g2, g1 = 0;
        for (g2 = 0; g2 < fZ.length; g2++)
            g1 |= fZ[g2] ^ g0[g2];
        return 0 === g1
    },
    c: function (g0, g1, g2, g3) {
        var g4;
        for (g4 = 0,
             void 0 === g3 && (g3 = []); 32 <= g1; g1 -= 32)
            g3.push(g2),
                g2 = 0;
        if (0 === g1)
            return g3.concat(g0);
        for (g4 = 0; g4 < g0.length; g4++)
            g3.push(g2 | g0[g4] >>> g1),
                g2 = g0[g4] << 32 - g1;
        return g4 = g0.length ? g0[g0.length - 1] : 0,
            g0 = fH.bitArray.getPartial(g4),
            g3.push(fH.bitArray.partial(g1 + g0 & 31, 32 < g1 + g0 ? g2 : g3.pop(), 1)),
            g3
    },
    f: function (g1, g2) {
        return [g1[0] ^ g2[0], g1[1] ^ g2[1], g1[2] ^ g2[2], g1[3] ^ g2[3]]
    },
    byteswapM: function (g2) {
        var g3, g4;
        for (g3 = 0; g3 < g2.length; ++g3)
            g4 = g2[g3],
                g2[g3] = g4 >>> 24 | g4 >>> 8 & 65280 | (65280 & g4) << 8 | g4 << 24;
        return g2
    }
};
function dd(fQ) {

    function fR() {
        for (var fX = ['91EBA6DBE4E5A7C8E6E3A3C1F4A4DFF9E9', 'C5F5FDF5F2F5F3F5F0F5F1F5F6F5F7F5F4'], fY = [], fZ = "", g0 = 0; g0 < fX['length']; g0++) {
            fZ = "";
            for (var g1 = fX[g0], g2 = g1['length'], g3 = parseInt('0x' + g1['substr'](0, 2)), g4 = 2; g4 < g2; g4 += 2) {
                var g5 = parseInt('0x' + g1['charAt'](g4) + g1['charAt'](g4 + 1));
                fZ += String['fromCharCode'](g5 ^ g3)
            }
            fY['push'](fZ)
        }
        return fY
    }

    var fT = sjcl_1['codec']['utf8String']['toBits'](fR()[0])
        , fU = sjcl_1['codec']['utf8String']['toBits'](fR()[1])
        , fV = new (sjcl_1['cipher']['aes'])(fT)
        , fW = sjcl_1['mode']['cbc']['encrypt'](fV, fQ, fU);
    return sjcl_1['codec']['base64']['fromBits'](fW)
}
function dg(fQ, fR) {
    var fT = "";
    fR ? (fT = 'hs1.4',
        fQ['isShort'] = 1) : (fT = 'h1.3',
        fQ['isShort'] = 0);
    var fU = {};
    dc = {};
    function fV(fQ, fR) {
        function fT(fU, fV) {
            var fY, fW = [], fX = d8(fV);
            try {
                for (fX.s(); !(fY = fX.n())['done'];) {
                    var fZ = fY['value']
                        , g0 = fU[fZ];
                    dc[fZ] = g0,
                        _typeof(g0) === 'object' && fZ in db ? fW['push'](fT(g0, db[fZ])) : fW['push'](g0)
                }
            } catch (g1) {
                fX.e(g1)
            } finally {
                fX.f()
            }
            return fW
        }

        return fR ? JSON['stringify'](fT(fQ, db['siua_short'])) : JSON['stringify'](fT(fQ, db['siua']))
    }
    (fU = Object['assign'](fU, fQ), fR);
    return fR ? (fV = cw(fV),
        fT += dd(sjcl_1['codec']['bytes']['toBits'](fV))) : (fV = cr(cw(fV)),   //fv不对
        fT += dd(sjcl_1['codec']['bytes']['toBits'](fV))),
        fT
}
function dh(fQ, fR, fT, fU, fV) {
    try {
        if (window['Owl'] && window['Owl']['OWL']) {
            var fW = new (window['Owl']['OWL'])({
                project: 'com.sankuai.jsprotect.h5guard',
                devMode: !1
            });
            !fV && (fV = ""),
                fW['addError']({
                    name: fQ,
                    msg: fR
                }, {
                    level: fT,
                    tags: {
                        fpData: fV,
                        appKey: fU
                    }
                })
        }
    } catch (fX) {
    }
}
var di = ['zuitu.com', 'meituan.net', 'meituan.com', 'stdyun.com', 'maoyan.com', 'mtmos.com', 'maslow.cn', 'mtmss.com', 'mtmssdn.com', 'kooxoo.info', 'kooxoo.net', 'kuxun.com.cn', 'kuxun.com', 'kximg.cn', 'kuxun.cn', 'vip.sankuai.com', 'mosdns.net', 'mosdns.cn', 'kooxoo.com', 'mtmssup.com', 'sankuai.com', 'sankuaiyun.com', 'neixin.com.cn', 'neixin.cn', 'mtmssdn0.com', 'msscdn.com', 'dingdanggj.com', 'iphg.net', 'mtmssup0.com', 'mosmss.com', 'dingdanggj.net', 'kuailvzaixian.com', 'kuailvzaixian.cn', 'kuailvzaixian.com.cn', 'dianping.com.hk', 'mengmai.com', 'guotongbao.com.cn', '51ping.com', 'zhenguo.net', 'zhenguo.com', 'mtyun.com', 'eadtech.cn', 'kooxoo.hk', 'mtyun.io', 'mtyuncdn.com', 'baobaoaichi.cn', 'qiandai.com', 'mtysl.com', 'reichvideo.com', 'iphg.com', 'mosdns.com', 'o2olifestyle.com', 'dpfile.com', 'dper.com', 'dianping.com', 'mtdp.hk', 'dm-selfc.com', 'xiguazaixian.com', 'live-better.io', 'ugk.cc', 'oqn.cc', 'kiu.cc', 'vgy.cc', 'pgi.cc', 'goi.cc', 'ugy.cc', 'hxy.co', 'zha.co', 'gdz.co', 'dpurl.cn', 'zzhkmaoyan.com', 'meituan-dianping.com', 'mtdpgames.com', 'mtgame001.com', 'mtdpgame.com', 'vboard.cn', 'busdatago.com', 'mobike.io', 'mtshangou.com', 'jchunuo.com', 'shanshan666.com'];
function dj(fQ) {
    for (var fR = !1, fT = 0; fT < di['length']; fT++)
        if (fQ['indexOf'](di[fT]) > -1) {
            fR = !0;
            break
        }
    return fR
}
function gv(hq) {
    function hr() {
        for (var hx, hy, hz, hB, hC, hD, hE, hF, hH, u = [], n = Function.prototype.call, G = 2; ; )
            switch (A[G++]) {
                case 0:
                    u.push(hF);
                    continue;
                case 1:
                    u[u.length - 3] = n.call(u[u.length - 3], u[u.length - 2], u[u.length - 1]);
                    continue;
                case 2:
                    !u.pop() && (G += 140);
                    continue;
                case 4:
                    u[u.length - 2] = u[u.length - 2][u[u.length - 1]];
                    continue;
                case 5:
                    u.push(hC);
                    continue;
                case 6:
                    u.push(A[G++]);
                    continue;
                case 9:
                    u.push(hH);
                    continue;
                case 12:
                    u.push(null);
                    continue;
                case 13:
                    u.pop();
                    continue;
                case 14:
                    u.push(hB);
                    continue;
                case 16:
                    u[u.length - 2] = u[u.length - 2] < u[u.length - 1];
                    continue;
                case 17:
                    u.length -= 2;
                    continue;
                case 20:
                    u.push(hy);
                    continue;
                case 24:
                    hC = u.pop();
                    continue;
                case 26:
                    hz += u[u.length - 1];
                    continue;
                case 29:
                    u.push("");
                    continue;
                case 32:
                    u[u.length - 2] = u[u.length - 2] ^ u[u.length - 1];
                    continue;
                case 33:
                    hz = u[u.length - 1];
                    continue;
                case 36:
                    u.push(b);
                    continue;
                case 38:
                    u.push(hz);
                    continue;
                case 41:
                    u[u.length - 2] = u[u.length - 2] + u[u.length - 1];
                    continue;
                case 47:
                    return u.pop();
                case 54:
                    !u.pop() && (G += 68);
                    continue;
                case 58:
                    hF += u[u.length - 1];
                    continue;
                case 61:
                    hF = u.pop();
                    continue;
                case 63:
                    u.push(String);
                    continue;
                case 64:
                    hD = u.pop();
                    continue;
                case 68:
                    u.push(parseInt);
                    continue;
                case 79:
                    u.push(hx);
                    continue;
                case 88:
                    hz = u.pop();
                    continue;
                case 93:
                    u.push(hE);
                    continue;
                case 98:
                    u[u.length - 0] = [];
                    continue;
                case 109:
                    G -= 73;
                    continue;
                case 123:
                    hB = u.pop();
                    continue;
                case 127:
                    u.push(hD);
                    continue;
                case 133:
                    hH = u.pop();
                    continue;
                case 143:
                    return;
                case 144:
                    u.length -= 3;
                    continue;
                case 147:
                    u.push(hB++);
                    continue;
                case 148:
                    hE = u.pop();
                    continue;
                case 151:
                    u[u.length - 2] = [u[u.length - 2], u[u.length - 1]];
                    continue;
                case 152:
                    u[u.length - 4] = n.call(u[u.length - 4], u[u.length - 3], u[u.length - 2], u[u.length - 1]);
                    continue;
                case 162:
                    hy = u.pop();
                    continue;
                case 167:
                    hx = u.pop();
                    continue;
                case 177:
                    G -= 153;
                    continue
            }
    }
    hq = cr(cw(hq)),
        hq = sjcl_1['codec']['bytes']['toBits'](hq);
    var hs = sjcl_1['codec']['utf8String']['toBits'](hr()[0])
        , ht = sjcl_1['codec']['utf8String']['toBits'](hr()[1])
        , hv = new (sjcl_1['cipher']['aes'])(hs)
        , hw = sjcl_1['mode']['cbc']['encrypt'](hv, hq, ht);
    return sjcl_1['codec']['base64']['fromBits'](hw)
}
function mtFingerprint() {
    gp['k4'] = (new Date)['getTime'](),
    gp['k58']['length'] > 30 && (gp['k58'] = gp['k58']['slice'](0, 30)),
    gp['k59']['length'] > 30 && (gp['k59'] = gp['k59']['slice'](0, 30));
    try {
        var hI = JSON['stringify'](gp)
    } catch (hJ) {
        hI = az['stringify'](gp),
            dh('fp JSON Error', 'JSON Error', 'error', gh, hI)
    }
    return g9 + gv(hI)
}
function callMtgsig(reqData) {
    let req = {
        "url": reqData.url,
        "method": reqData.method || "POST",
        "headers": reqData.headers,
        "data": reqData.data || {"cType": "mti", "fpPlatform": 3, "wxOpenId": "", "appVersion": "", "mtFingerprint": mtFingerprint()}
    };
    return gW(req, true);
};

module.exports = {
    callMtgsig,
    mtFingerprint
};