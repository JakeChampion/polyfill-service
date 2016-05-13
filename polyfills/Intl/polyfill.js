!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):e.IntlPolyfill=r()}(this,function(){"use strict";function e(e){if("function"==typeof Math.log10)return Math.floor(Math.log10(e));var r=Math.round(Math.log(e)*Math.LOG10E);return r-(Number("1e"+r)>e)}function r(e){for(var n in e)(e instanceof r||re.call(e,n))&&ne(this,n,{value:e[n],enumerable:!0,writable:!0,configurable:!0})}function n(){ne(this,"length",{writable:!0,value:0}),arguments.length&&oe.apply(this,ie.call(arguments))}function t(){for(var e=/[.?*+^$[\]\\(){}|-]/g,r=RegExp.lastMatch||"",t=RegExp.multiline?"m":"",a={input:RegExp.input},i=new n,s=!1,o={},l=1;9>=l;l++)s=(o["$"+l]=RegExp["$"+l])||s;if(r=r.replace(e,"\\$&"),s)for(var c=1;9>=c;c++){var u=o["$"+c];u?(u=u.replace(e,"\\$&"),r=r.replace(u,"("+u+")")):r="()"+r,oe.call(i,r.slice(0,r.indexOf("(")+1)),r=r.slice(r.indexOf("(")+1)}return a.exp=new RegExp(le.call(i,"")+r,t),a}function a(e){if(null===e)throw new TypeError("Cannot convert null or undefined to object");return Object(e)}function i(e){return re.call(e,"__getInternalProperties")?e.__getInternalProperties(me):ae(null)}function s(e){Ee=e}function o(e){for(var r=e.length;r--;){var n=e.charAt(r);n>="a"&&"z">=n&&(e=e.slice(0,r)+n.toUpperCase()+e.slice(r+1))}return e}function l(e){return Fe.test(e)?je.test(e)?!1:!Se.test(e):!1}function c(e){var r=void 0,n=void 0;e=e.toLowerCase(),n=e.split("-");for(var t=1,a=n.length;a>t;t++)if(2===n[t].length)n[t]=n[t].toUpperCase();else if(4===n[t].length)n[t]=n[t].charAt(0).toUpperCase()+n[t].slice(1);else if(1===n[t].length&&"x"!==n[t])break;e=le.call(n,"-"),(r=e.match(Ne))&&r.length>1&&(r.sort(),e=e.replace(RegExp("(?:"+Ne.source+")+","i"),le.call(r,""))),re.call(Oe.tags,e)&&(e=Oe.tags[e]),n=e.split("-");for(var i=1,s=n.length;s>i;i++)re.call(Oe.subtags,n[i])?n[i]=Oe.subtags[n[i]]:re.call(Oe.extLang,n[i])&&(n[i]=Oe.extLang[n[i]][0],1===i&&Oe.extLang[n[1]][1]===n[0]&&(n=ie.call(n,i++),s-=1));return le.call(n,"-")}function u(){return Ee}function g(e){var r=String(e),n=o(r);return Le.test(n)!==!1}function m(e){if(void 0===e)return new n;var r=new n;e="string"==typeof e?[e]:e;for(var t=a(e),i=t.length,s=0;i>s;){var o=String(s),u=o in t;if(u){var g=t[o];if(null===g||"string"!=typeof g&&"object"!==("undefined"==typeof g?"undefined":J["typeof"](g)))throw new TypeError("String or Object type expected");var m=String(g);if(!l(m))throw new RangeError("'"+m+"' is not a structurally valid language tag");m=c(m),-1===te.call(r,m)&&oe.call(r,m)}s++}return r}function f(e,r){for(var n=r;n;){if(te.call(e,n)>-1)return n;var t=n.lastIndexOf("-");if(0>t)return;t>=2&&"-"===n.charAt(t-2)&&(t-=2),n=n.substring(0,t)}}function v(e,n){for(var t=0,a=n.length,i=void 0,s=void 0,o=void 0;a>t&&!i;)s=n[t],o=String(s).replace(Te,""),i=f(e,o),t++;var l=new r;if(void 0!==i){if(l["[[locale]]"]=i,String(s)!==String(o)){var c=s.match(Te)[0],g=s.indexOf("-u-");l["[[extension]]"]=c,l["[[extensionIndex]]"]=g}}else l["[[locale]]"]=u();return l}function h(e,r){return v(e,r)}function d(e,n,t,a,i){if(0===e.length)throw new ReferenceError("No locale data has been provided for this object yet.");var s=t["[[localeMatcher]]"],o=void 0;o="lookup"===s?v(e,n):h(e,n);var l=o["[[locale]]"],u=void 0,g=void 0;if(re.call(o,"[[extension]]")){var m=o["[[extension]]"],f=String.prototype.split;u=f.call(m,"-"),g=u.length}var d=new r;d["[[dataLocale]]"]=l;for(var p="-u",y=0,b=a.length;b>y;){var w=a[y],D=i[l],x=D[w],z=x[0],k="",F=te;if(void 0!==u){var j=F.call(u,w);if(-1!==j)if(g>j+1&&u[j+1].length>2){var S=u[j+1],N=F.call(x,S);-1!==N&&(z=S,k="-"+w+"-"+z)}else{var E=F(x,"true");-1!==E&&(z="true")}}if(re.call(t,"[["+w+"]]")){var O=t["[["+w+"]]"];-1!==F.call(x,O)&&O!==z&&(z=O,k="")}d["[["+w+"]]"]=z,p+=k,y++}if(p.length>2){var L=l.indexOf("-x-");if(-1===L)l+=p;else{var T=l.substring(0,L),P=l.substring(L);l=T+p+P}l=c(l)}return d["[[locale]]"]=l,d}function p(e,r){for(var t=r.length,a=new n,i=0;t>i;){var s=r[i],o=String(s).replace(Te,""),l=f(e,o);void 0!==l&&oe.call(a,s),i++}var c=ie.call(a);return c}function y(e,r){return p(e,r)}function b(e,n,t){var i=void 0,s=void 0;if(void 0!==t&&(t=new r(a(t)),i=t.localeMatcher,void 0!==i&&(i=String(i),"lookup"!==i&&"best fit"!==i)))throw new RangeError('matcher should be "lookup" or "best fit"');s=void 0===i||"best fit"===i?y(e,n):p(e,n);for(var o in s)re.call(s,o)&&ne(s,o,{writable:!1,configurable:!1,value:s[o]});return ne(s,"length",{writable:!1}),s}function w(e,r,n,t,a){var i=e[r];if(void 0!==i){if(i="boolean"===n?Boolean(i):"string"===n?String(i):i,void 0!==t&&-1===te.call(t,i))throw new RangeError("'"+i+"' is not an allowed value for `"+r+"`");return i}return a}function D(e,r,n,t,a){var i=e[r];if(void 0!==i){if(i=Number(i),isNaN(i)||n>i||i>t)throw new RangeError("Value is not a number or outside accepted range");return Math.floor(i)}return a}function x(){var e=arguments[0],r=arguments[1];return this&&this!==Pe?z(a(this),e,r):new Pe.NumberFormat(e,r)}function z(e,s,o){var l=i(e),c=t();if(l["[[initializedIntlObject]]"]===!0)throw new TypeError("`this` object has already been initialized as an Intl object");ne(e,"__getInternalProperties",{value:function(){return arguments[0]===me?l:void 0}}),l["[[initializedIntlObject]]"]=!0;var u=m(s);o=void 0===o?{}:a(o);var f=new r,v=w(o,"localeMatcher","string",new n("lookup","best fit"),"best fit");f["[[localeMatcher]]"]=v;var h=ge.NumberFormat["[[localeData]]"],p=d(ge.NumberFormat["[[availableLocales]]"],u,f,ge.NumberFormat["[[relevantExtensionKeys]]"],h);l["[[locale]]"]=p["[[locale]]"],l["[[numberingSystem]]"]=p["[[nu]]"],l["[[dataLocale]]"]=p["[[dataLocale]]"];var y=p["[[dataLocale]]"],b=w(o,"style","string",new n("decimal","percent","currency"),"decimal");l["[[style]]"]=b;var x=w(o,"currency","string");if(void 0!==x&&!g(x))throw new RangeError("'"+x+"' is not a valid currency code");if("currency"===b&&void 0===x)throw new TypeError("Currency code is required when style is currency");var z=void 0;"currency"===b&&(x=x.toUpperCase(),l["[[currency]]"]=x,z=k(x));var j=w(o,"currencyDisplay","string",new n("code","symbol","name"),"symbol");"currency"===b&&(l["[[currencyDisplay]]"]=j);var S=D(o,"minimumIntegerDigits",1,21,1);l["[[minimumIntegerDigits]]"]=S;var N="currency"===b?z:0,E=D(o,"minimumFractionDigits",0,20,N);l["[[minimumFractionDigits]]"]=E;var O="currency"===b?Math.max(E,z):"percent"===b?Math.max(E,0):Math.max(E,3),L=D(o,"maximumFractionDigits",E,20,O);l["[[maximumFractionDigits]]"]=L;var T=o.minimumSignificantDigits,P=o.maximumSignificantDigits;void 0===T&&void 0===P||(T=D(o,"minimumSignificantDigits",1,21,1),P=D(o,"maximumSignificantDigits",T,21,21),l["[[minimumSignificantDigits]]"]=T,l["[[maximumSignificantDigits]]"]=P);var _=w(o,"useGrouping","boolean",void 0,!0);l["[[useGrouping]]"]=_;var I=h[y],M=I.patterns,q=M[b];return l["[[positivePattern]]"]=q.positivePattern,l["[[negativePattern]]"]=q.negativePattern,l["[[boundFormat]]"]=void 0,l["[[initializedNumberFormat]]"]=!0,ee&&(e.format=F.call(e)),c.exp.test(c.input),e}function k(e){return void 0!==_e[e]?_e[e]:2}function F(){var e=null!==this&&"object"===J["typeof"](this)&&i(this);if(!e||!e["[[initializedNumberFormat]]"])throw new TypeError("`this` value for format() is not an initialized Intl.NumberFormat object.");if(void 0===e["[[boundFormat]]"]){var r=function(e){return N(this,Number(e))},n=ue.call(r,this);e["[[boundFormat]]"]=n}return e["[[boundFormat]]"]}function j(e,r){var n=S(e,r),t=[],a=0;for(var i in n){var s=n[i],o={};o.type=s["[[type]]"],o.value=s["[[value]]"],t[a]=o,a+=1}return t}function S(e,r){var t=i(e),a=t["[[dataLocale]]"],s=t["[[numberingSystem]]"],o=ge.NumberFormat["[[localeData]]"][a],l=o.symbols[s]||o.symbols.latn,c=void 0;!isNaN(r)&&0>r?(r=-r,c=t["[[negativePattern]]"]):c=t["[[positivePattern]]"];for(var u=new n,g=c.indexOf("{",0),m=0,f=0,v=c.length;g>-1&&v>g;){if(m=c.indexOf("}",g),-1===m)throw new Error;if(g>f){var h=c.substring(f,g);oe.call(u,{"[[type]]":"literal","[[value]]":h})}var d=c.substring(g+1,m);if("number"===d)if(isNaN(r)){var p=l.nan;oe.call(u,{"[[type]]":"nan","[[value]]":p})}else if(isFinite(r)){"percent"===t["[[style]]"]&&isFinite(r)&&(r*=100);var y=void 0;y=re.call(t,"[[minimumSignificantDigits]]")&&re.call(t,"[[maximumSignificantDigits]]")?E(r,t["[[minimumSignificantDigits]]"],t["[[maximumSignificantDigits]]"]):O(r,t["[[minimumIntegerDigits]]"],t["[[minimumFractionDigits]]"],t["[[maximumFractionDigits]]"]),Ie[s]?!function(){var e=Ie[s];y=String(y).replace(/\d/g,function(r){return e[r]})}():y=String(y);var b=void 0,w=void 0,D=y.indexOf(".",0);if(D>0?(b=y.substring(0,D),w=y.substring(D+1,D.length)):(b=y,w=void 0),t["[[useGrouping]]"]===!0){var x=l.group,z=new n,k=o.patterns.primaryGroupSize||3,F=o.patterns.secondaryGroupSize||k;if(b.length>k){var j=b.length-k,S=j%F,N=b.slice(0,S);for(N.length&&oe.call(z,N);j>S;)oe.call(z,b.slice(S,S+F)),S+=F;oe.call(z,b.slice(j))}else oe.call(z,b);if(0===z.length)throw new Error;for(;z.length;){var L=ce.call(z);oe.call(u,{"[[type]]":"integer","[[value]]":L}),z.length&&oe.call(u,{"[[type]]":"group","[[value]]":x})}}else oe.call(u,{"[[type]]":"integer","[[value]]":b});if(void 0!==w){var T=l.decimal;oe.call(u,{"[[type]]":"decimal","[[value]]":T}),oe.call(u,{"[[type]]":"fraction","[[value]]":w})}}else{var P=l.infinity;oe.call(u,{"[[type]]":"infinity","[[value]]":P})}else if("plusSign"===d){var _=l.plusSign;oe.call(u,{"[[type]]":"plusSign","[[value]]":_})}else if("minusSign"===d){var I=l.minusSign;oe.call(u,{"[[type]]":"minusSign","[[value]]":I})}else if("percentSign"===d&&"percent"===t["[[style]]"]){var M=l.percentSign;oe.call(u,{"[[type]]":"literal","[[value]]":M})}else if("currency"===d&&"currency"===t["[[style]]"]){var q=t["[[currency]]"],R=void 0;"code"===t["[[currencyDisplay]]"]?R=q:"symbol"===t["[[currencyDisplay]]"]?R=o.currencies[q]||q:"name"===t["[[currencyDisplay]]"]&&(R=q),oe.call(u,{"[[type]]":"currency","[[value]]":R})}else{var A=c.substring(g,m);oe.call(u,{"[[type]]":"literal","[[value]]":A})}f=m+1,g=c.indexOf("{",f)}if(v>f){var G=c.substring(f,v);oe.call(u,{"[[type]]":"literal","[[value]]":G})}return u}function N(e,r){var n=S(e,r),t="";for(var a in n){var i=n[a];t+=i["[[value]]"]}return t}function E(r,n,t){var a=t,i=void 0,s=void 0;if(0===r)i=le.call(Array(a+1),"0"),s=0;else{s=e(Math.abs(r));var o=Math.round(Math.exp(Math.abs(s-a+1)*Math.LN10));i=String(Math.round(0>s-a+1?r*o:r/o))}if(s>=a)return i+le.call(Array(s-a+1+1),"0");if(s===a-1)return i;if(s>=0?i=i.slice(0,s+1)+"."+i.slice(s+1):0>s&&(i="0."+le.call(Array(-(s+1)+1),"0")+i),i.indexOf(".")>=0&&t>n){for(var l=t-n;l>0&&"0"===i.charAt(i.length-1);)i=i.slice(0,-1),l--;"."===i.charAt(i.length-1)&&(i=i.slice(0,-1))}return i}function O(e,r,n,t){var a=t,i=Math.pow(10,a)*e,s=0===i?"0":i.toFixed(0),o=void 0,l=(o=s.indexOf("e"))>-1?s.slice(o+1):0;l&&(s=s.slice(0,o).replace(".",""),s+=le.call(Array(l-(s.length-1)+1),"0"));var c=void 0;if(0!==a){var u=s.length;if(a>=u){var g=le.call(Array(a+1-u+1),"0");s=g+s,u=a+1}var m=s.substring(0,u-a),f=s.substring(u-a,s.length);s=m+"."+f,c=m.length}else c=s.length;for(var v=t-n;v>0&&"0"===s.slice(-1);)s=s.slice(0,-1),v--;if("."===s.slice(-1)&&(s=s.slice(0,-1)),r>c){var h=le.call(Array(r-c+1),"0");s=h+s}return s}function L(e){for(var r=0;r<Ge.length;r+=1)if(e.hasOwnProperty(Ge[r]))return!1;return!0}function T(e){for(var r=0;r<Ae.length;r+=1)if(e.hasOwnProperty(Ae[r]))return!1;return!0}function P(e,r){for(var n={_:{}},t=0;t<Ae.length;t+=1)e[Ae[t]]&&(n[Ae[t]]=e[Ae[t]]),e._[Ae[t]]&&(n._[Ae[t]]=e._[Ae[t]]);for(var a=0;a<Ge.length;a+=1)r[Ge[a]]&&(n[Ge[a]]=r[Ge[a]]),r._[Ge[a]]&&(n._[Ge[a]]=r._[Ge[a]]);return n}function _(e){return e.pattern12=e.extendedPattern.replace(/'([^']*)'/g,function(e,r){return r?r:"'"}),e.pattern=e.pattern12.replace("{ampm}","").replace(qe,""),e}function I(e,r){switch(e.charAt(0)){case"G":return r.era=["short","short","short","long","narrow"][e.length-1],"{era}";case"y":case"Y":case"u":case"U":case"r":return r.year=2===e.length?"2-digit":"numeric","{year}";case"Q":case"q":return r.quarter=["numeric","2-digit","short","long","narrow"][e.length-1],"{quarter}";case"M":case"L":return r.month=["numeric","2-digit","short","long","narrow"][e.length-1],"{month}";case"w":return r.week=2===e.length?"2-digit":"numeric","{weekday}";case"W":return r.week="numeric","{weekday}";case"d":return r.day=2===e.length?"2-digit":"numeric","{day}";case"D":case"F":case"g":return r.day="numeric","{day}";case"E":return r.weekday=["short","short","short","long","narrow","short"][e.length-1],"{weekday}";case"e":return r.weekday=["numeric","2-digit","short","long","narrow","short"][e.length-1],"{weekday}";case"c":return r.weekday=["numeric",void 0,"short","long","narrow","short"][e.length-1],"{weekday}";case"a":case"b":case"B":return r.hour12=!0,"{ampm}";case"h":case"H":return r.hour=2===e.length?"2-digit":"numeric","{hour}";case"k":case"K":return r.hour12=!0,r.hour=2===e.length?"2-digit":"numeric","{hour}";case"m":return r.minute=2===e.length?"2-digit":"numeric","{minute}";case"s":return r.second=2===e.length?"2-digit":"numeric","{second}";case"S":case"A":return r.second="numeric","{second}";case"z":case"Z":case"O":case"v":case"V":case"X":case"x":return r.timeZoneName=e.length<4?"short":"long","{timeZoneName}"}}function M(e,r){if(!Re.test(r)){var n={originalPattern:r,_:{}};return n.extendedPattern=r.replace(Me,function(e){return I(e,n._)}),e.replace(Me,function(e){return I(e,n)}),_(n)}}function q(e){var r=e.availableFormats,n=e.timeFormats,t=e.dateFormats,a=[],i=void 0,s=void 0,o=void 0,l=void 0,c=void 0,u=[],g=[];for(i in r)r.hasOwnProperty(i)&&(s=r[i],o=M(i,s),o&&(a.push(o),L(o)?g.push(o):T(o)&&u.push(o)));for(i in n)n.hasOwnProperty(i)&&(s=n[i],o=M(i,s),o&&(a.push(o),u.push(o)));for(i in t)t.hasOwnProperty(i)&&(s=t[i],o=M(i,s),o&&(a.push(o),g.push(o)));for(l=0;l<u.length;l+=1)for(c=0;c<g.length;c+=1)s="long"===g[c].month?g[c].weekday?e.full:e["long"]:"short"===g[c].month?e.medium:e["short"],o=P(g[c],u[l]),o.originalPattern=s,o.extendedPattern=s.replace("{0}",u[l].extendedPattern).replace("{1}",g[c].extendedPattern).replace(/^[,\s]+|[,\s]+$/gi,""),a.push(_(o));return a}function R(e,r,n,t,a){var i=e[r]&&e[r][n]?e[r][n]:e.gregory[n],s={narrow:["short","long"],"short":["long","narrow"],"long":["short","narrow"]},o=re.call(i,t)?i[t]:re.call(i,s[t][0])?i[s[t][0]]:i[s[t][1]];return null!==a?o[a]:o}function A(){var e=arguments[0],r=arguments[1];return this&&this!==Pe?G(a(this),e,r):new Pe.DateTimeFormat(e,r)}function G(e,a,s){var l=i(e),c=t();if(l["[[initializedIntlObject]]"]===!0)throw new TypeError("`this` object has already been initialized as an Intl object");ne(e,"__getInternalProperties",{value:function(){return arguments[0]===me?l:void 0}}),l["[[initializedIntlObject]]"]=!0;var u=m(a);s=Z(s,"any","date");var g=new r,f=w(s,"localeMatcher","string",new n("lookup","best fit"),"best fit");g["[[localeMatcher]]"]=f;var v=ge.DateTimeFormat,h=v["[[localeData]]"],p=d(v["[[availableLocales]]"],u,g,v["[[relevantExtensionKeys]]"],h);l["[[locale]]"]=p["[[locale]]"],l["[[calendar]]"]=p["[[ca]]"],l["[[numberingSystem]]"]=p["[[nu]]"],l["[[dataLocale]]"]=p["[[dataLocale]]"];var y=p["[[dataLocale]]"],b=s.timeZone;if(void 0!==b&&(b=o(b),"UTC"!==b))throw new RangeError("timeZone is not supported.");l["[[timeZone]]"]=b,g=new r;for(var D in Ze)if(re.call(Ze,D)){var x=w(s,D,"string",Ze[D]);g["[["+D+"]]"]=x}var z=void 0,k=h[y],F=C(k.formats);if(f=w(s,"formatMatcher","string",new n("basic","best fit"),"best fit"),k.formats=F,"basic"===f)z=B(g,F);else{var j=w(s,"hour12","boolean");g.hour12=void 0===j?k.hour12:j,z=U(g,F)}for(var S in Ze)if(re.call(Ze,S)&&re.call(z,S)){var N=z[S];N=z._&&re.call(z._,S)?z._[S]:N,l["[["+S+"]]"]=N}var E=void 0,O=w(s,"hour12","boolean");if(l["[[hour]]"])if(O=void 0===O?k.hour12:O,l["[[hour12]]"]=O,O===!0){var L=k.hourNo0;l["[[hourNo0]]"]=L,E=z.pattern12}else E=z.pattern;else E=z.pattern;return l["[[pattern]]"]=E,l["[[boundFormat]]"]=void 0,l["[[initializedDateTimeFormat]]"]=!0,ee&&(e.format=K.call(e)),c.exp.test(c.input),e}function C(e){return"[object Array]"===Object.prototype.toString.call(e)?e:q(e)}function Z(e,n,t){if(void 0===e)e=null;else{var i=a(e);e=new r;for(var s in i)e[s]=i[s]}var o=ae;e=o(e);var l=!0;return"date"!==n&&"any"!==n||void 0===e.weekday&&void 0===e.year&&void 0===e.month&&void 0===e.day||(l=!1),"time"!==n&&"any"!==n||void 0===e.hour&&void 0===e.minute&&void 0===e.second||(l=!1),!l||"date"!==t&&"all"!==t||(e.year=e.month=e.day="numeric"),!l||"time"!==t&&"all"!==t||(e.hour=e.minute=e.second="numeric"),e}function B(e,r){for(var n=120,t=20,a=8,i=6,s=6,o=3,l=-(1/0),c=void 0,u=0,g=r.length;g>u;){var m=r[u],f=0;for(var v in Ze)if(re.call(Ze,v)){var h=e["[["+v+"]]"],d=re.call(m,v)?m[v]:void 0;if(void 0===h&&void 0!==d)f-=t;else if(void 0!==h&&void 0===d)f-=n;else{var p=["2-digit","numeric","narrow","short","long"],y=te.call(p,h),b=te.call(p,d),w=Math.max(Math.min(b-y,2),-2);2===w?f-=i:1===w?f-=o:-1===w?f-=s:-2===w&&(f-=a)}}f>l&&(l=f,c=m),u++}return c}function U(e,r){for(var n=120,t=20,a=8,i=6,s=6,o=3,l=1,c=-(1/0),u=void 0,g=0,m=r.length;m>g;){var f=r[g],v=0;for(var h in Ze)if(re.call(Ze,h)){var d=e["[["+h+"]]"],p=re.call(f,h)?f[h]:void 0;if(void 0===d&&void 0!==p)v-=t;else if(void 0!==d&&void 0===p)v-=n;else{var y=["2-digit","numeric","narrow","short","long"],b=te.call(y,d),w=te.call(y,p),D=Math.max(Math.min(w-b,2),-2);1>=w&&b>=2||w>=2&&1>=b?D>0?v-=i:0>D&&(v-=a):D>1?v-=o:-1>D&&(v-=s)}}f._.hour12!==e.hour12&&(v-=l),v>c&&(c=v,u=f),g++}return u}function K(){var e=null!==this&&"object"===J["typeof"](this)&&i(this);if(!e||!e["[[initializedDateTimeFormat]]"])throw new TypeError("`this` value for format() is not an initialized Intl.DateTimeFormat object.");if(void 0===e["[[boundFormat]]"]){var r=function(){var e=Number(0===arguments.length?Date.now():arguments[0]);return H(this,e)},n=ue.call(r,this);e["[[boundFormat]]"]=n}return e["[[boundFormat]]"]}function Y(){var e=null!==this&&"object"===J["typeof"](this)&&i(this);if(!e||!e["[[initializedDateTimeFormat]]"])throw new TypeError("`this` value for formatToParts() is not an initialized Intl.DateTimeFormat object.");if(void 0===e["[[boundFormatToParts]]"]){var r=function(){var e=Number(0===arguments.length?Date.now():arguments[0]);return X(this,e)},n=ue.call(r,this);e["[[boundFormatToParts]]"]=n}return e["[[boundFormatToParts]]"]}function $(e,r){if(!isFinite(r))throw new RangeError("Invalid valid date passed to format");var a=e.__getInternalProperties(me);t();for(var i=a["[[locale]]"],s=new Pe.NumberFormat([i],{useGrouping:!1}),o=new Pe.NumberFormat([i],{minimumIntegerDigits:2,useGrouping:!1}),l=V(r,a["[[calendar]]"],a["[[timeZone]]"]),c=a["[[pattern]]"],u=new n,g=0,m=c.indexOf("{"),f=0,v=a["[[dataLocale]]"],h=ge.DateTimeFormat["[[localeData]]"][v].calendars,d=a["[[calendar]]"];-1!==m;){var p=void 0;if(f=c.indexOf("}",m),-1===f)throw new Error("Unclosed pattern");m>g&&oe.call(u,{type:"literal",value:c.substring(g,m)});var y=c.substring(m+1,f);if(Ze.hasOwnProperty(y)){var b=a["[["+y+"]]"],w=l["[["+y+"]]"];if("year"===y&&0>=w?w=1-w:"month"===y?w++:"hour"===y&&a["[[hour12]]"]===!0&&(w%=12,0===w&&a["[[hourNo0]]"]===!0&&(w=12)),"numeric"===b)p=N(s,w);else if("2-digit"===b)p=N(o,w),p.length>2&&(p=p.slice(-2));else if(b in Ce)switch(y){case"month":p=R(h,d,"months",b,l["[["+y+"]]"]);break;case"weekday":try{p=R(h,d,"days",b,l["[["+y+"]]"])}catch(D){throw new Error("Could not find weekday data for locale "+i)}break;case"timeZoneName":p="";break;case"era":try{p=R(h,d,"eras",b,l["[["+y+"]]"])}catch(D){throw new Error("Could not find era data for locale "+i)}break;default:p=l["[["+y+"]]"]}oe.call(u,{type:y,value:p})}else if("ampm"===y){var x=l["[[hour]]"];p=R(h,d,"dayPeriods",x>11?"pm":"am",null),oe.call(u,{type:"dayPeriod",value:p})}else oe.call(u,{type:"literal",value:c.substring(m,f+1)});g=f+1,m=c.indexOf("{",g)}return f<c.length-1&&oe.call(u,{type:"literal",value:c.substr(f+1)}),u}function H(e,r){var n=$(e,r),t="";for(var a in n)t+=n[a].value;return t}function X(e,r){var n=$(e,r),t=[];for(var a in n)t.push({type:n[a].type,value:n[a].value});return t}function V(e,n,t){var a=new Date(e),i="get"+(t||"");return new r({"[[weekday]]":a[i+"Day"](),"[[era]]":+(a[i+"FullYear"]()>=0),"[[year]]":a[i+"FullYear"](),"[[month]]":a[i+"Month"](),"[[day]]":a[i+"Date"](),"[[hour]]":a[i+"Hours"](),"[[minute]]":a[i+"Minutes"](),"[[second]]":a[i+"Seconds"](),"[[inDST]]":!1})}function W(e,r){if(!e.number)throw new Error("Object passed doesn't contain locale data for Intl.NumberFormat");var n=void 0,t=[r],a=r.split("-");for(a.length>2&&4===a[1].length&&oe.call(t,a[0]+"-"+a[2]);n=ce.call(t);)oe.call(ge.NumberFormat["[[availableLocales]]"],n),ge.NumberFormat["[[localeData]]"][n]=e.number,e.date&&(e.date.nu=e.number.nu,oe.call(ge.DateTimeFormat["[[availableLocales]]"],n),ge.DateTimeFormat["[[localeData]]"][n]=e.date);void 0===Ee&&s(r)}var J={};J["typeof"]="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};var Q=function(){var e={};try{return Object.defineProperty(e,"a",{}),"a"in e}catch(r){return!1}}(),ee=!Q&&!Object.prototype.__defineGetter__,re=Object.prototype.hasOwnProperty,ne=Q?Object.defineProperty:function(e,r,n){"get"in n&&e.__defineGetter__?e.__defineGetter__(r,n.get):(!re.call(e,r)||"value"in n)&&(e[r]=n.value)},te=Array.prototype.indexOf||function(e){var r=this;if(!r.length)return-1;for(var n=arguments[1]||0,t=r.length;t>n;n++)if(r[n]===e)return n;return-1},ae=Object.create||function(e,r){function n(){}var t=void 0;n.prototype=e,t=new n;for(var a in r)re.call(r,a)&&ne(t,a,r[a]);return t},ie=Array.prototype.slice,se=Array.prototype.concat,oe=Array.prototype.push,le=Array.prototype.join,ce=Array.prototype.shift,ue=Function.prototype.bind||function(e){var r=this,n=ie.call(arguments,1);return 1===r.length?function(){return r.apply(e,se.call(n,ie.call(arguments)))}:function(){return r.apply(e,se.call(n,ie.call(arguments)))}},ge=ae(null),me=Math.random();r.prototype=ae(null),n.prototype=ae(null);var fe="[a-z]{3}(?:-[a-z]{3}){0,2}",ve="(?:[a-z]{2,3}(?:-"+fe+")?|[a-z]{4}|[a-z]{5,8})",he="[a-z]{4}",de="(?:[a-z]{2}|\\d{3})",pe="(?:[a-z0-9]{5,8}|\\d[a-z0-9]{3})",ye="[0-9a-wy-z]",be=ye+"(?:-[a-z0-9]{2,8})+",we="x(?:-[a-z0-9]{1,8})+",De="(?:en-GB-oed|i-(?:ami|bnn|default|enochian|hak|klingon|lux|mingo|navajo|pwn|tao|tay|tsu)|sgn-(?:BE-FR|BE-NL|CH-DE))",xe="(?:art-lojban|cel-gaulish|no-bok|no-nyn|zh-(?:guoyu|hakka|min|min-nan|xiang))",ze="(?:"+De+"|"+xe+")",ke=ve+"(?:-"+he+")?(?:-"+de+")?(?:-"+pe+")*(?:-"+be+")*(?:-"+we+")?",Fe=RegExp("^(?:"+ke+"|"+we+"|"+ze+")$","i"),je=RegExp("^(?!x).*?-("+pe+")-(?:\\w{4,8}-(?!x-))*\\1\\b","i"),Se=RegExp("^(?!x).*?-("+ye+")-(?:\\w+-(?!x-))*\\1\\b","i"),Ne=RegExp("-"+be,"ig"),Ee=void 0,Oe={tags:{"art-lojban":"jbo","i-ami":"ami","i-bnn":"bnn","i-hak":"hak","i-klingon":"tlh","i-lux":"lb","i-navajo":"nv","i-pwn":"pwn","i-tao":"tao","i-tay":"tay","i-tsu":"tsu","no-bok":"nb","no-nyn":"nn","sgn-BE-FR":"sfb","sgn-BE-NL":"vgt","sgn-CH-DE":"sgg","zh-guoyu":"cmn","zh-hakka":"hak","zh-min-nan":"nan","zh-xiang":"hsn","sgn-BR":"bzs","sgn-CO":"csn","sgn-DE":"gsg","sgn-DK":"dsl","sgn-ES":"ssp","sgn-FR":"fsl","sgn-GB":"bfi","sgn-GR":"gss","sgn-IE":"isg","sgn-IT":"ise","sgn-JP":"jsl","sgn-MX":"mfs","sgn-NI":"ncs","sgn-NL":"dse","sgn-NO":"nsl","sgn-PT":"psr","sgn-SE":"swl","sgn-US":"ase","sgn-ZA":"sfs","zh-cmn":"cmn","zh-cmn-Hans":"cmn-Hans","zh-cmn-Hant":"cmn-Hant","zh-gan":"gan","zh-wuu":"wuu","zh-yue":"yue"},subtags:{BU:"MM",DD:"DE",FX:"FR",TP:"TL",YD:"YE",ZR:"CD",heploc:"alalc97","in":"id",iw:"he",ji:"yi",jw:"jv",mo:"ro",ayx:"nun",bjd:"drl",ccq:"rki",cjr:"mom",cka:"cmr",cmk:"xch",drh:"khk",drw:"prs",gav:"dev",hrr:"jal",ibi:"opa",kgh:"kml",lcq:"ppr",mst:"mry",myt:"mry",sca:"hle",tie:"ras",tkk:"twm",tlw:"weo",tnf:"prs",ybd:"rki",yma:"lrr"},extLang:{aao:["aao","ar"],abh:["abh","ar"],abv:["abv","ar"],acm:["acm","ar"],acq:["acq","ar"],acw:["acw","ar"],acx:["acx","ar"],acy:["acy","ar"],adf:["adf","ar"],ads:["ads","sgn"],aeb:["aeb","ar"],aec:["aec","ar"],aed:["aed","sgn"],aen:["aen","sgn"],afb:["afb","ar"],afg:["afg","sgn"],ajp:["ajp","ar"],apc:["apc","ar"],apd:["apd","ar"],arb:["arb","ar"],arq:["arq","ar"],ars:["ars","ar"],ary:["ary","ar"],arz:["arz","ar"],ase:["ase","sgn"],asf:["asf","sgn"],asp:["asp","sgn"],asq:["asq","sgn"],asw:["asw","sgn"],auz:["auz","ar"],avl:["avl","ar"],ayh:["ayh","ar"],ayl:["ayl","ar"],ayn:["ayn","ar"],ayp:["ayp","ar"],bbz:["bbz","ar"],bfi:["bfi","sgn"],bfk:["bfk","sgn"],bjn:["bjn","ms"],bog:["bog","sgn"],bqn:["bqn","sgn"],bqy:["bqy","sgn"],btj:["btj","ms"],bve:["bve","ms"],bvl:["bvl","sgn"],bvu:["bvu","ms"],bzs:["bzs","sgn"],cdo:["cdo","zh"],cds:["cds","sgn"],cjy:["cjy","zh"],cmn:["cmn","zh"],coa:["coa","ms"],cpx:["cpx","zh"],csc:["csc","sgn"],csd:["csd","sgn"],cse:["cse","sgn"],csf:["csf","sgn"],csg:["csg","sgn"],csl:["csl","sgn"],csn:["csn","sgn"],csq:["csq","sgn"],csr:["csr","sgn"],czh:["czh","zh"],czo:["czo","zh"],doq:["doq","sgn"],dse:["dse","sgn"],dsl:["dsl","sgn"],dup:["dup","ms"],ecs:["ecs","sgn"],esl:["esl","sgn"],esn:["esn","sgn"],eso:["eso","sgn"],eth:["eth","sgn"],fcs:["fcs","sgn"],fse:["fse","sgn"],fsl:["fsl","sgn"],fss:["fss","sgn"],gan:["gan","zh"],gds:["gds","sgn"],gom:["gom","kok"],gse:["gse","sgn"],gsg:["gsg","sgn"],gsm:["gsm","sgn"],gss:["gss","sgn"],gus:["gus","sgn"],hab:["hab","sgn"],haf:["haf","sgn"],hak:["hak","zh"],hds:["hds","sgn"],hji:["hji","ms"],hks:["hks","sgn"],hos:["hos","sgn"],hps:["hps","sgn"],hsh:["hsh","sgn"],hsl:["hsl","sgn"],hsn:["hsn","zh"],icl:["icl","sgn"],ils:["ils","sgn"],inl:["inl","sgn"],ins:["ins","sgn"],ise:["ise","sgn"],isg:["isg","sgn"],isr:["isr","sgn"],jak:["jak","ms"],jax:["jax","ms"],jcs:["jcs","sgn"],jhs:["jhs","sgn"],jls:["jls","sgn"],jos:["jos","sgn"],jsl:["jsl","sgn"],jus:["jus","sgn"],kgi:["kgi","sgn"],knn:["knn","kok"],kvb:["kvb","ms"],kvk:["kvk","sgn"],kvr:["kvr","ms"],kxd:["kxd","ms"],lbs:["lbs","sgn"],lce:["lce","ms"],lcf:["lcf","ms"],liw:["liw","ms"],lls:["lls","sgn"],lsg:["lsg","sgn"],lsl:["lsl","sgn"],lso:["lso","sgn"],lsp:["lsp","sgn"],lst:["lst","sgn"],lsy:["lsy","sgn"],ltg:["ltg","lv"],lvs:["lvs","lv"],lzh:["lzh","zh"],max:["max","ms"],mdl:["mdl","sgn"],meo:["meo","ms"],mfa:["mfa","ms"],mfb:["mfb","ms"],mfs:["mfs","sgn"],min:["min","ms"],mnp:["mnp","zh"],mqg:["mqg","ms"],mre:["mre","sgn"],msd:["msd","sgn"],msi:["msi","ms"],msr:["msr","sgn"],mui:["mui","ms"],mzc:["mzc","sgn"],mzg:["mzg","sgn"],mzy:["mzy","sgn"],nan:["nan","zh"],nbs:["nbs","sgn"],ncs:["ncs","sgn"],nsi:["nsi","sgn"],nsl:["nsl","sgn"],nsp:["nsp","sgn"],nsr:["nsr","sgn"],nzs:["nzs","sgn"],okl:["okl","sgn"],orn:["orn","ms"],ors:["ors","ms"],pel:["pel","ms"],pga:["pga","ar"],pks:["pks","sgn"],prl:["prl","sgn"],prz:["prz","sgn"],psc:["psc","sgn"],psd:["psd","sgn"],pse:["pse","ms"],psg:["psg","sgn"],psl:["psl","sgn"],pso:["pso","sgn"],psp:["psp","sgn"],psr:["psr","sgn"],pys:["pys","sgn"],rms:["rms","sgn"],rsi:["rsi","sgn"],rsl:["rsl","sgn"],sdl:["sdl","sgn"],sfb:["sfb","sgn"],sfs:["sfs","sgn"],sgg:["sgg","sgn"],sgx:["sgx","sgn"],shu:["shu","ar"],slf:["slf","sgn"],sls:["sls","sgn"],sqk:["sqk","sgn"],sqs:["sqs","sgn"],ssh:["ssh","ar"],ssp:["ssp","sgn"],ssr:["ssr","sgn"],svk:["svk","sgn"],swc:["swc","sw"],swh:["swh","sw"],swl:["swl","sgn"],syy:["syy","sgn"],tmw:["tmw","ms"],tse:["tse","sgn"],tsm:["tsm","sgn"],tsq:["tsq","sgn"],tss:["tss","sgn"],tsy:["tsy","sgn"],tza:["tza","sgn"],ugn:["ugn","sgn"],ugy:["ugy","sgn"],ukl:["ukl","sgn"],uks:["uks","sgn"],urk:["urk","ms"],uzn:["uzn","uz"],uzs:["uzs","uz"],vgt:["vgt","sgn"],vkk:["vkk","ms"],vkt:["vkt","ms"],vsi:["vsi","sgn"],vsl:["vsl","sgn"],vsv:["vsv","sgn"],wuu:["wuu","zh"],xki:["xki","sgn"],xml:["xml","sgn"],xmm:["xmm","ms"],xms:["xms","sgn"],yds:["yds","sgn"],ysl:["ysl","sgn"],yue:["yue","zh"],zib:["zib","sgn"],zlm:["zlm","ms"],zmi:["zmi","ms"],zsl:["zsl","sgn"],zsm:["zsm","ms"]}},Le=/^[A-Z]{3}$/,Te=/-u(?:-[0-9a-z]{2,8})+/gi,Pe={};Pe.getCanonicalLocales=function(e){var r=m(e),n=[];for(var t in r)n.push(r[t]);return n};var _e={BHD:3,BYR:0,XOF:0,BIF:0,XAF:0,CLF:4,CLP:0,KMF:0,DJF:0,XPF:0,GNF:0,ISK:0,IQD:3,JPY:0,JOD:3,KRW:0,KWD:3,LYD:3,OMR:3,PYG:0,RWF:0,TND:3,UGX:0,UYI:0,VUV:0,VND:0};ne(Pe,"NumberFormat",{configurable:!0,writable:!0,value:x}),ne(Pe.NumberFormat,"prototype",{writable:!1}),ge.NumberFormat={"[[availableLocales]]":[],"[[relevantExtensionKeys]]":["nu"],"[[localeData]]":{}},ne(Pe.NumberFormat,"supportedLocalesOf",{configurable:!0,writable:!0,value:ue.call(function(e){if(!re.call(this,"[[availableLocales]]"))throw new TypeError("supportedLocalesOf() is not a constructor");var r=t(),n=arguments[1],a=this["[[availableLocales]]"],i=m(e);return r.exp.test(r.input),b(a,i,n)},ge.NumberFormat)}),ne(Pe.NumberFormat.prototype,"format",{configurable:!0,get:F}),Pe.NumberFormat.prototype.formatToParts=function(e){var r=null!==this&&"object"===J["typeof"](this)&&i(this);if(!r||!r["[[initializedNumberFormat]]"])throw new TypeError("`this` value for formatToParts() is not an initialized Intl.NumberFormat object.");var n=Number(e);return j(this,n)};var Ie={arab:["٠","١","٢","٣","٤","٥","٦","٧","٨","٩"],arabext:["۰","۱","۲","۳","۴","۵","۶","۷","۸","۹"],bali:["᭐","᭑","᭒","᭓","᭔","᭕","᭖","᭗","᭘","᭙"],beng:["০","১","২","৩","৪","৫","৬","৭","৮","৯"],deva:["०","१","२","३","४","५","६","७","८","९"],fullwide:["０","１","２","３","４","５","６","７","８","９"],gujr:["૦","૧","૨","૩","૪","૫","૬","૭","૮","૯"],guru:["੦","੧","੨","੩","੪","੫","੬","੭","੮","੯"],hanidec:["〇","一","二","三","四","五","六","七","八","九"],khmr:["០","១","២","៣","៤","៥","៦","៧","៨","៩"],knda:["೦","೧","೨","೩","೪","೫","೬","೭","೮","೯"],laoo:["໐","໑","໒","໓","໔","໕","໖","໗","໘","໙"],latn:["0","1","2","3","4","5","6","7","8","9"],limb:["᥆","᥇","᥈","᥉","᥊","᥋","᥌","᥍","᥎","᥏"],mlym:["൦","൧","൨","൩","൪","൫","൬","൭","൮","൯"],mong:["᠐","᠑","᠒","᠓","᠔","᠕","᠖","᠗","᠘","᠙"],mymr:["၀","၁","၂","၃","၄","၅","၆","၇","၈","၉"],orya:["୦","୧","୨","୩","୪","୫","୬","୭","୮","୯"],tamldec:["௦","௧","௨","௩","௪","௫","௬","௭","௮","௯"],telu:["౦","౧","౨","౩","౪","౫","౬","౭","౮","౯"],thai:["๐","๑","๒","๓","๔","๕","๖","๗","๘","๙"],tibt:["༠","༡","༢","༣","༤","༥","༦","༧","༨","༩"]};ne(Pe.NumberFormat.prototype,"resolvedOptions",{configurable:!0,writable:!0,value:function(){var e=void 0,n=new r,t=["locale","numberingSystem","style","currency","currencyDisplay","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","useGrouping"],a=null!==this&&"object"===J["typeof"](this)&&i(this);if(!a||!a["[[initializedNumberFormat]]"])throw new TypeError("`this` value for resolvedOptions() is not an initialized Intl.NumberFormat object.");for(var s=0,o=t.length;o>s;s++)re.call(a,e="[["+t[s]+"]]")&&(n[t[s]]={value:a[e],writable:!0,configurable:!0,enumerable:!0});return ae({},n)}});var Me=/(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g,qe=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,Re=/[rqQASjJgwWIQq]/,Ae=["weekday","era","year","month","day","weekday","quarter"],Ge=["hour","minute","second","hour12","timeZoneName"],Ce=ae(null,{narrow:{},"short":{},"long":{}});ne(Pe,"DateTimeFormat",{configurable:!0,writable:!0,value:A}),ne(A,"prototype",{writable:!1});var Ze={weekday:["narrow","short","long"],era:["narrow","short","long"],year:["2-digit","numeric"],month:["2-digit","numeric","narrow","short","long"],day:["2-digit","numeric"],hour:["2-digit","numeric"],minute:["2-digit","numeric"],second:["2-digit","numeric"],timeZoneName:["short","long"]};ge.DateTimeFormat={"[[availableLocales]]":[],"[[relevantExtensionKeys]]":["ca","nu"],"[[localeData]]":{}},ne(Pe.DateTimeFormat,"supportedLocalesOf",{configurable:!0,writable:!0,value:ue.call(function(e){if(!re.call(this,"[[availableLocales]]"))throw new TypeError("supportedLocalesOf() is not a constructor");var r=t(),n=arguments[1],a=this["[[availableLocales]]"],i=m(e);return r.exp.test(r.input),b(a,i,n)},ge.NumberFormat)}),
ne(Pe.DateTimeFormat.prototype,"format",{configurable:!0,get:K}),ne(Pe.DateTimeFormat.prototype,"formatToParts",{configurable:!0,get:Y}),ne(Pe.DateTimeFormat.prototype,"resolvedOptions",{writable:!0,configurable:!0,value:function(){var e=void 0,n=new r,t=["locale","calendar","numberingSystem","timeZone","hour12","weekday","era","year","month","day","hour","minute","second","timeZoneName"],a=null!==this&&"object"===J["typeof"](this)&&i(this);if(!a||!a["[[initializedDateTimeFormat]]"])throw new TypeError("`this` value for resolvedOptions() is not an initialized Intl.DateTimeFormat object.");for(var s=0,o=t.length;o>s;s++)re.call(a,e="[["+t[s]+"]]")&&(n[t[s]]={value:a[e],writable:!0,configurable:!0,enumerable:!0});return ae({},n)}});var Be=Pe.__localeSensitiveProtos={Number:{},Date:{}};if(Be.Number.toLocaleString=function(){if("[object Number]"!==Object.prototype.toString.call(this))throw new TypeError("`this` value must be a number for Number.prototype.toLocaleString()");return N(new x(arguments[0],arguments[1]),this)},Be.Date.toLocaleString=function(){if("[object Date]"!==Object.prototype.toString.call(this))throw new TypeError("`this` value must be a Date instance for Date.prototype.toLocaleString()");var e=+this;if(isNaN(e))return"Invalid Date";var r=arguments[0],n=arguments[1];n=Z(n,"any","all");var t=new A(r,n);return H(t,e)},Be.Date.toLocaleDateString=function(){if("[object Date]"!==Object.prototype.toString.call(this))throw new TypeError("`this` value must be a Date instance for Date.prototype.toLocaleDateString()");var e=+this;if(isNaN(e))return"Invalid Date";var r=arguments[0],n=arguments[1];n=Z(n,"date","date");var t=new A(r,n);return H(t,e)},Be.Date.toLocaleTimeString=function(){if("[object Date]"!==Object.prototype.toString.call(this))throw new TypeError("`this` value must be a Date instance for Date.prototype.toLocaleTimeString()");var e=+this;if(isNaN(e))return"Invalid Date";var r=arguments[0],n=arguments[1];n=Z(n,"time","time");var t=new A(r,n);return H(t,e)},ne(Pe,"__applyLocaleSensitivePrototypes",{writable:!0,configurable:!0,value:function(){ne(Number.prototype,"toLocaleString",{writable:!0,configurable:!0,value:Be.Number.toLocaleString}),ne(Date.prototype,"toLocaleString",{writable:!0,configurable:!0,value:Be.Date.toLocaleString});for(var e in Be.Date)re.call(Be.Date,e)&&ne(Date.prototype,e,{writable:!0,configurable:!0,value:Be.Date[e]})}}),ne(Pe,"__addLocaleData",{value:function(e){if(!l(e.locale))throw new Error("Object passed doesn't identify itself with a valid language tag");W(e,e.locale)}}),"undefined"!=typeof Intl)try{Intl=Pe,Pe.__applyLocaleSensitivePrototypes()}catch(Ue){}return Pe});
//# sourceMappingURL=Intl.min.js.map