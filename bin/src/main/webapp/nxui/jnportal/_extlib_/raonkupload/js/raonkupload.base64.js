var RaonKBase64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",_trans_unitDelimiter:"\x0B",_trans_unitAttributeDelimiter:"\f",encode:function(b){var c="",a,d,e,g,h,f,k=0;for(b=RaonKBase64._utf8_encode(b);k<b.length;)a=b.charCodeAt(k++),d=b.charCodeAt(k++),e=b.charCodeAt(k++),g=a>>2,a=(a&3)<<4|d>>4,h=(d&15)<<2|e>>6,f=e&63,isNaN(d)?h=f=64:isNaN(e)&&(f=64),c=c+this._keyStr.charAt(g)+this._keyStr.charAt(a)+this._keyStr.charAt(h)+this._keyStr.charAt(f);return c},decode:function(b){var c=
"",a,d,e,g,h,f=0;for(b=b.replace(/[^A-Za-z0-9\+\/\=]/g,"");f<b.length;)a=this._keyStr.indexOf(b.charAt(f++)),d=this._keyStr.indexOf(b.charAt(f++)),g=this._keyStr.indexOf(b.charAt(f++)),h=this._keyStr.indexOf(b.charAt(f++)),a=a<<2|d>>4,d=(d&15)<<4|g>>2,e=(g&3)<<6|h,c+=String.fromCharCode(a),64!=g&&(c+=String.fromCharCode(d)),64!=h&&(c+=String.fromCharCode(e));return c=RaonKBase64._utf8_decode(c)},_utf8_encode:function(b){b=b.replace(/\r\n/g,"\n");for(var c="",a=0;a<b.length;a++){var d=b.charCodeAt(a);
128>d?c+=String.fromCharCode(d):(127<d&&2048>d?c+=String.fromCharCode(d>>6|192):(c+=String.fromCharCode(d>>12|224),c+=String.fromCharCode(d>>6&63|128)),c+=String.fromCharCode(d&63|128))}return c},_utf8_decode:function(b){for(var c="",a=0,d=c1=c2=0;a<b.length;)d=b.charCodeAt(a),128>d?(c+=String.fromCharCode(d),a++):191<d&&224>d?(c2=b.charCodeAt(a+1),c+=String.fromCharCode((d&31)<<6|c2&63),a+=2):(c2=b.charCodeAt(a+1),c3=b.charCodeAt(a+2),c+=String.fromCharCode((d&15)<<12|(c2&63)<<6|c3&63),a+=3);return c},
makeEncryptParam:function(b){b=RaonKBase64.encode(b);b=RaonKBase64.insertAt(b,8,"r");b=RaonKBase64.insertAt(b,6,"a");b=RaonKBase64.insertAt(b,9,"o");b=RaonKBase64.insertAt(b,7,"n");b=RaonKBase64.insertAt(b,8,"w");b=RaonKBase64.insertAt(b,6,"i");b=RaonKBase64.insertAt(b,9,"z");return b=b.replace(/[+]/g,"%2B")},makeEncryptParam2:function(b,c){var a=c,d=b.keyValue,d=d.substring(0,15),d=CryptoJS.enc.Utf8.parse(d);d.sigBytes=16;a=CryptoJS.enc.Utf8.parse(a);a=CryptoJS.AES.encrypt(a,d,{iv:d});d=CryptoJS.enc.Base64._map;
CryptoJS.enc.Base64._map="hituvabcdejklmnopqrxyzsfgwBCDEANOPQRSFGHIJKLYZMTUVWX5890167234+/=";a=CryptoJS.enc.Base64.stringify(a.ciphertext);CryptoJS.enc.Base64._map=d;return a=a.replace(/[+]/g,"%2B")},makeDecryptReponseMessage:function(b,c){var a,d=function(a,b){var c=a.split("");c.splice(b,1);return c=c.join("")};a=b.replace(/ /g,"");a=a.replace(/\r/g,"");a=a.replace(/\n/g,"");a=a.replace(/%2B/g,"+");if(0==a.indexOf("_"))try{a=a.substring(1);var e=c.keyValue,e=e.substring(0,14),e=CryptoJS.enc.Utf8.parse(e);
e.sigBytes=16;var g=CryptoJS.enc.Base64._map;CryptoJS.enc.Base64._map="hituvabcdejklmnopqrxyzsfgwBCDEANOPQRSFGHIJKLYZMTUVWX5890167234+/=";a=CryptoJS.enc.Base64.parse(a);CryptoJS.enc.Base64._map=g;a=CryptoJS.AES.decrypt({ciphertext:a},e,{iv:e}).toString(CryptoJS.enc.Utf8)}catch(h){a="C012|response data decrypt error"}else a=d(a,9),a=d(a,6),a=d(a,8),a=d(a,7),a=d(a,9),a=d(a,6),a=d(a,8),a=RaonKBase64.decode(a);return a},insertAt:function(b,c,a){return String.prototype.insertAt?b.insertAt(c,a):b.substr(0,
c)+a+b.substr(c)},parseDataFromServer:function(b){var c=b.toLowerCase().indexOf("<raonk>");-1<c&&(b=b.substring(c+7));c=b.toLowerCase().indexOf("</raonk>");-1<c&&(b=b.substring(0,c));return b},makeEncryptParamFinal:function(b,c){var a={name:"",value:""};if("1">=b.encryptParam)b.createKey?(a.name="k10",a.value=b.keyValue+RaonKBase64.makeEncryptParam(c)):(a.name="k00",a.value=RaonKBase64.makeEncryptParam(c));else if("2"==b.encryptParam)try{b.createKey?(a.name="k11",a.value=b.keyValue+RaonKBase64.makeEncryptParam2(b,
c)):(a.name="k01",a.value=RaonKBase64.makeEncryptParam2(b,c))}catch(d){b.createKey?(a.name="k10",a.value=b.keyValue+RaonKBase64.makeEncryptParam(c)):(a.name="k00",a.value=RaonKBase64.makeEncryptParam(c))}return a}};