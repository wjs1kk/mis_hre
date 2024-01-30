var CryptoJS=CryptoJS||function(h,u){var f={},g=f.lib={},r=function(){},n=g.Base={extend:function(a){r.prototype=this;var c=new r;a&&c.mixIn(a);c.hasOwnProperty("init")||(c.init=function(){c.$super.init.apply(this,arguments)});c.init.prototype=c;c.$super=this;return c},create:function(){var a=this.extend();a.init.apply(a,arguments);return a},init:function(){},mixIn:function(a){for(var c in a)a.hasOwnProperty(c)&&(this[c]=a[c]);a.hasOwnProperty("toString")&&(this.toString=a.toString)},clone:function(){return this.init.prototype.extend(this)}},
t=g.WordArray=n.extend({init:function(a,c){a=this.words=a||[];this.sigBytes=c!=u?c:4*a.length},toString:function(a){return(a||l).stringify(this)},concat:function(a){var c=this.words,d=a.words,b=this.sigBytes;a=a.sigBytes;this.clamp();if(b%4)for(var e=0;e<a;e++)c[b+e>>>2]|=(d[e>>>2]>>>24-e%4*8&255)<<24-(b+e)%4*8;else if(65535<d.length)for(e=0;e<a;e+=4)c[b+e>>>2]=d[e>>>2];else c.push.apply(c,d);this.sigBytes+=a;return this},clamp:function(){var a=this.words,c=this.sigBytes;a[c>>>2]&=4294967295<<32-
c%4*8;a.length=h.ceil(c/4)},clone:function(){var a=n.clone.call(this);a.words=this.words.slice(0);return a},random:function(a){for(var c=[],d=0;d<a;d+=4)c.push(4294967296*h.random()|0);return new t.init(c,a)}}),m=f.enc={},l=m.Hex={stringify:function(a){var c=a.words;a=a.sigBytes;for(var d=[],b=0;b<a;b++){var e=c[b>>>2]>>>24-b%4*8&255;d.push((e>>>4).toString(16));d.push((e&15).toString(16))}return d.join("")},parse:function(a){for(var c=a.length,d=[],b=0;b<c;b+=2)d[b>>>3]|=parseInt(a.substr(b,2),16)<<
24-b%8*4;return new t.init(d,c/2)}},p=m.Latin1={stringify:function(a){var c=a.words;a=a.sigBytes;for(var d=[],b=0;b<a;b++)d.push(String.fromCharCode(c[b>>>2]>>>24-b%4*8&255));return d.join("")},parse:function(a){for(var c=a.length,d=[],b=0;b<c;b++)d[b>>>2]|=(a.charCodeAt(b)&255)<<24-b%4*8;return new t.init(d,c)}},k=m.Utf8={stringify:function(a){try{return decodeURIComponent(escape(p.stringify(a)))}catch(c){throw Error("Malformed UTF-8 data");}},parse:function(a){return p.parse(unescape(encodeURIComponent(a)))}},
w=g.BufferedBlockAlgorithm=n.extend({reset:function(){this._data=new t.init;this._nDataBytes=0},_append:function(a){"string"==typeof a&&(a=k.parse(a));this._data.concat(a);this._nDataBytes+=a.sigBytes},_process:function(a){var c=this._data,d=c.words,b=c.sigBytes,e=this.blockSize,f=b/(4*e),f=a?h.ceil(f):h.max((f|0)-this._minBufferSize,0);a=f*e;b=h.min(4*a,b);if(a){for(var g=0;g<a;g+=e)this._doProcessBlock(d,g);g=d.splice(0,a);c.sigBytes-=b}return new t.init(g,b)},clone:function(){var a=n.clone.call(this);
a._data=this._data.clone();return a},_minBufferSize:0});g.Hasher=w.extend({cfg:n.extend(),init:function(a){this.cfg=this.cfg.extend(a);this.reset()},reset:function(){w.reset.call(this);this._doReset()},update:function(a){this._append(a);this._process();return this},finalize:function(a){a&&this._append(a);return this._doFinalize()},blockSize:16,_createHelper:function(a){return function(c,d){return(new a.init(d)).finalize(c)}},_createHmacHelper:function(a){return function(c,d){return(new v.HMAC.init(a,
d)).finalize(c)}}});var v=f.algo={};return f}(Math);
(function(h){for(var u=CryptoJS,f=u.lib,g=f.WordArray,r=f.Hasher,f=u.algo,n=[],t=[],m=function(a){return 4294967296*(a-(a|0))|0},l=2,p=0;64>p;){var k;a:{k=l;for(var w=h.sqrt(k),v=2;v<=w;v++)if(!(k%v)){k=!1;break a}k=!0}k&&(8>p&&(n[p]=m(h.pow(l,.5))),t[p]=m(h.pow(l,1/3)),p++);l++}var a=[],f=f.SHA256=r.extend({_doReset:function(){this._hash=new g.init(n.slice(0))},_doProcessBlock:function(c,d){for(var b=this._hash.words,e=b[0],f=b[1],g=b[2],k=b[3],h=b[4],n=b[5],p=b[6],r=b[7],q=0;64>q;q++){if(16>q)a[q]=
c[d+q]|0;else{var l=a[q-15],m=a[q-2];a[q]=((l<<25|l>>>7)^(l<<14|l>>>18)^l>>>3)+a[q-7]+((m<<15|m>>>17)^(m<<13|m>>>19)^m>>>10)+a[q-16]}l=r+((h<<26|h>>>6)^(h<<21|h>>>11)^(h<<7|h>>>25))+(h&n^~h&p)+t[q]+a[q];m=((e<<30|e>>>2)^(e<<19|e>>>13)^(e<<10|e>>>22))+(e&f^e&g^f&g);r=p;p=n;n=h;h=k+l|0;k=g;g=f;f=e;e=l+m|0}b[0]=b[0]+e|0;b[1]=b[1]+f|0;b[2]=b[2]+g|0;b[3]=b[3]+k|0;b[4]=b[4]+h|0;b[5]=b[5]+n|0;b[6]=b[6]+p|0;b[7]=b[7]+r|0},_doFinalize:function(){var a=this._data,d=a.words,b=8*this._nDataBytes,e=8*a.sigBytes;
d[e>>>5]|=128<<24-e%32;d[(e+64>>>9<<4)+14]=h.floor(b/4294967296);d[(e+64>>>9<<4)+15]=b;a.sigBytes=4*d.length;this._process();return this._hash},clone:function(){var a=r.clone.call(this);a._hash=this._hash.clone();return a}});u.SHA256=r._createHelper(f);u.HmacSHA256=r._createHmacHelper(f)})(Math);
(function(){var h=CryptoJS,u=h.enc.Utf8;h.algo.HMAC=h.lib.Base.extend({init:function(f,g){f=this._hasher=new f.init;"string"==typeof g&&(g=u.parse(g));var h=f.blockSize,n=4*h;g.sigBytes>n&&(g=f.finalize(g));g.clamp();for(var t=this._oKey=g.clone(),m=this._iKey=g.clone(),l=t.words,p=m.words,k=0;k<h;k++)l[k]^=1549556828,p[k]^=909522486;t.sigBytes=m.sigBytes=n;this.reset()},reset:function(){var f=this._hasher;f.reset();f.update(this._iKey)},update:function(f){this._hasher.update(f);return this},finalize:function(f){var g=
this._hasher;f=g.finalize(f);g.reset();return g.finalize(this._oKey.clone().concat(f))}})})();
