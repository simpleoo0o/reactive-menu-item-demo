import{M as Oe,O as we,ak as Zt,S as ne,ai as ie,j as z,c as E,T as H,A as Se,D as Z,a1 as wt,an as Ft,at as At,ao as Ot,aV as ke,o as P,a as J,a6 as ye,a5 as C,d as f,ad as Ke,ay as St,i as fe,aA as _e,z as Et,k as ze,v as Tt,az as Ht,$ as Xt,b as L,F as Qt,a0 as Ge,V as er,aE as tr,aW as rr,x as Ve,w as N,h as B,a7 as re,ac as Fe,e as nr,t as oe,f as U,g as se,aX as ir,af as xt,ap as ar,P as ce,L as Ie,aF as or,a8 as ee,av as sr,ab as lr,aS as fr,aY as rt,q as ur}from"./index-cc596057.js";import{j as qt,k as dr,l as cr,o as pr,m as It,n as jt,s as vr,a as gr,p as mr,U as nt,b as Je,q as Ae,r as Pt,c as yr,S as hr,g as br,h as wr,f as $e,C as Ce,I as Ne}from"./validator-46f8484c.js";import{p as Ye,q as Fr,r as _t,i as Vt,s as Ar,S as it,a as $t,v as Ct,k as Ze,w as je,h as Or,j as Sr,l as Er}from"./use-form-item-f5642b9c.js";var at=Object.create,Tr=function(){function t(){}return function(e){if(!Ye(e))return{};if(at)return at(e);t.prototype=e;var r=new t;return t.prototype=void 0,r}}();const xr=Tr;function qr(t,e){var r=-1,n=t.length;for(e||(e=Array(n));++r<n;)e[r]=t[r];return e}function Ir(t,e){for(var r=-1,n=t==null?0:t.length;++r<n&&e(t[r],r,t)!==!1;);return t}function Ee(t,e,r,n){var i=!r;r||(r={});for(var o=-1,a=e.length;++o<a;){var s=e[o],d=n?n(r[s],t[s],s,r,t):void 0;d===void 0&&(d=t[s]),i?Fr(r,s,d):_t(r,s,d)}return r}function jr(t){var e=[];if(t!=null)for(var r in Object(t))e.push(r);return e}var Pr=Object.prototype,_r=Pr.hasOwnProperty;function Vr(t){if(!Ye(t))return jr(t);var e=qt(t),r=[];for(var n in t)n=="constructor"&&(e||!_r.call(t,n))||r.push(n);return r}function He(t){return dr(t)?cr(t,!0):Vr(t)}var $r=pr(Object.getPrototypeOf,Object);const Nt=$r;function Me(){if(!arguments.length)return[];var t=arguments[0];return Vt(t)?t:[t]}function Cr(t,e){return t&&Ee(e,It(e),t)}function Nr(t,e){return t&&Ee(e,He(e),t)}var Mt=typeof exports=="object"&&exports&&!exports.nodeType&&exports,ot=Mt&&typeof module=="object"&&module&&!module.nodeType&&module,Mr=ot&&ot.exports===Mt,st=Mr?Ar.Buffer:void 0,lt=st?st.allocUnsafe:void 0;function Br(t,e){if(e)return t.slice();var r=t.length,n=lt?lt(r):new t.constructor(r);return t.copy(n),n}function Lr(t,e){return Ee(t,jt(t),e)}var Rr=Object.getOwnPropertySymbols,Wr=Rr?function(t){for(var e=[];t;)gr(e,jt(t)),t=Nt(t);return e}:vr;const Bt=Wr;function Dr(t,e){return Ee(t,Bt(t),e)}function Ur(t){return mr(t,He,Bt)}var kr=Object.prototype,Kr=kr.hasOwnProperty;function zr(t){var e=t.length,r=new t.constructor(e);return e&&typeof t[0]=="string"&&Kr.call(t,"index")&&(r.index=t.index,r.input=t.input),r}function Xe(t){var e=new t.constructor(t.byteLength);return new nt(e).set(new nt(t)),e}function Gr(t,e){var r=e?Xe(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)}var Jr=/\w*$/;function Yr(t){var e=new t.constructor(t.source,Jr.exec(t));return e.lastIndex=t.lastIndex,e}var ft=it?it.prototype:void 0,ut=ft?ft.valueOf:void 0;function Zr(t){return ut?Object(ut.call(t)):{}}function Hr(t,e){var r=e?Xe(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)}var Xr="[object Boolean]",Qr="[object Date]",en="[object Map]",tn="[object Number]",rn="[object RegExp]",nn="[object Set]",an="[object String]",on="[object Symbol]",sn="[object ArrayBuffer]",ln="[object DataView]",fn="[object Float32Array]",un="[object Float64Array]",dn="[object Int8Array]",cn="[object Int16Array]",pn="[object Int32Array]",vn="[object Uint8Array]",gn="[object Uint8ClampedArray]",mn="[object Uint16Array]",yn="[object Uint32Array]";function hn(t,e,r){var n=t.constructor;switch(e){case sn:return Xe(t);case Xr:case Qr:return new n(+t);case ln:return Gr(t,r);case fn:case un:case dn:case cn:case pn:case vn:case gn:case mn:case yn:return Hr(t,r);case en:return new n;case tn:case an:return new n(t);case rn:return Yr(t);case nn:return new n;case on:return Zr(t)}}function bn(t){return typeof t.constructor=="function"&&!qt(t)?xr(Nt(t)):{}}var wn="[object Map]";function Fn(t){return $t(t)&&Je(t)==wn}var dt=Ae&&Ae.isMap,An=dt?Pt(dt):Fn;const On=An;var Sn="[object Set]";function En(t){return $t(t)&&Je(t)==Sn}var ct=Ae&&Ae.isSet,Tn=ct?Pt(ct):En;const xn=Tn;var qn=1,In=2,jn=4,Lt="[object Arguments]",Pn="[object Array]",_n="[object Boolean]",Vn="[object Date]",$n="[object Error]",Rt="[object Function]",Cn="[object GeneratorFunction]",Nn="[object Map]",Mn="[object Number]",Wt="[object Object]",Bn="[object RegExp]",Ln="[object Set]",Rn="[object String]",Wn="[object Symbol]",Dn="[object WeakMap]",Un="[object ArrayBuffer]",kn="[object DataView]",Kn="[object Float32Array]",zn="[object Float64Array]",Gn="[object Int8Array]",Jn="[object Int16Array]",Yn="[object Int32Array]",Zn="[object Uint8Array]",Hn="[object Uint8ClampedArray]",Xn="[object Uint16Array]",Qn="[object Uint32Array]",x={};x[Lt]=x[Pn]=x[Un]=x[kn]=x[_n]=x[Vn]=x[Kn]=x[zn]=x[Gn]=x[Jn]=x[Yn]=x[Nn]=x[Mn]=x[Wt]=x[Bn]=x[Ln]=x[Rn]=x[Wn]=x[Zn]=x[Hn]=x[Xn]=x[Qn]=!0;x[$n]=x[Rt]=x[Dn]=!1;function he(t,e,r,n,i,o){var a,s=e&qn,d=e&In,A=e&jn;if(r&&(a=i?r(t,n,i,o):r(t)),a!==void 0)return a;if(!Ye(t))return t;var v=Vt(t);if(v){if(a=zr(t),!s)return qr(t,a)}else{var m=Je(t),w=m==Rt||m==Cn;if(yr(t))return Br(t,s);if(m==Wt||m==Lt||w&&!i){if(a=d||w?{}:bn(t),!s)return d?Dr(t,Nr(a,t)):Lr(t,Cr(a,t))}else{if(!x[m])return i?t:{};a=hn(t,m,s)}}o||(o=new hr);var q=o.get(t);if(q)return q;o.set(t,a),xn(t)?t.forEach(function(y){a.add(he(y,e,r,y,t,o))}):On(t)&&t.forEach(function(y,u){a.set(u,he(y,e,r,u,t,o))});var j=A?d?Ur:br:d?He:It,p=v?void 0:j(t);return Ir(p||t,function(y,u){p&&(u=y,y=t[u]),_t(a,u,he(y,e,r,u,t,o))}),a}var ei=4;function pt(t){return he(t,ei)}const ti=Oe({size:{type:String,values:Ct},disabled:Boolean}),ri=Oe({...ti,model:Object,rules:{type:we(Object)},labelPosition:{type:String,values:["left","right","top"],default:"right"},requireAsteriskPosition:{type:String,values:["left","right"],default:"left"},labelWidth:{type:[String,Number],default:""},labelSuffix:{type:String,default:""},inline:Boolean,inlineMessage:Boolean,statusIcon:Boolean,showMessage:{type:Boolean,default:!0},validateOnRuleChange:{type:Boolean,default:!0},hideRequiredAsterisk:Boolean,scrollToError:Boolean,scrollIntoViewOptions:{type:[Object,Boolean]}}),ni={validate:(t,e,r)=>(Zt(t)||ne(t))&&ie(e)&&ne(r)};function ii(){const t=z([]),e=E(()=>{if(!t.value.length)return"0";const o=Math.max(...t.value);return o?`${o}px`:""});function r(o){const a=t.value.indexOf(o);return a===-1&&e.value,a}function n(o,a){if(o&&a){const s=r(a);t.value.splice(s,1,o)}else o&&t.value.push(o)}function i(o){const a=r(o);a>-1&&t.value.splice(a,1)}return{autoLabelWidth:e,registerLabelWidth:n,deregisterLabelWidth:i}}const pe=(t,e)=>{const r=Me(e);return r.length>0?t.filter(n=>n.prop&&r.includes(n.prop)):t},ai="ElForm",oi=H({name:ai}),si=H({...oi,props:ri,emits:ni,setup(t,{expose:e,emit:r}){const n=t,i=[],o=Ze(),a=Se("form"),s=E(()=>{const{labelPosition:h,inline:l}=n;return[a.b(),a.m(o.value||"default"),{[a.m(`label-${h}`)]:h,[a.m("inline")]:l}]}),d=h=>{i.push(h)},A=h=>{h.prop&&i.splice(i.indexOf(h),1)},v=(h=[])=>{n.model&&pe(i,h).forEach(l=>l.resetField())},m=(h=[])=>{pe(i,h).forEach(l=>l.clearValidate())},w=E(()=>!!n.model),q=h=>{if(i.length===0)return[];const l=pe(i,h);return l.length?l:[]},j=async h=>y(void 0,h),p=async(h=[])=>{if(!w.value)return!1;const l=q(h);if(l.length===0)return!0;let b={};for(const O of l)try{await O.validate("")}catch(T){b={...b,...T}}return Object.keys(b).length===0?!0:Promise.reject(b)},y=async(h=[],l)=>{const b=!St(l);try{const O=await p(h);return O===!0&&(l==null||l(O)),O}catch(O){if(O instanceof Error)throw O;const T=O;return n.scrollToError&&u(Object.keys(T)[0]),l==null||l(!1,T),b&&Promise.reject(T)}},u=h=>{var l;const b=pe(i,h)[0];b&&((l=b.$el)==null||l.scrollIntoView(n.scrollIntoViewOptions))};return Z(()=>n.rules,()=>{n.validateOnRuleChange&&j().catch(h=>wt())},{deep:!0}),Ft(ke,At({...Ot(n),emit:r,resetFields:v,clearValidate:m,validateField:y,addField:d,removeField:A,...ii()})),e({validate:j,validateField:y,resetFields:v,clearValidate:m,scrollToField:u}),(h,l)=>(P(),J("form",{class:C(f(s))},[ye(h.$slots,"default")],2))}});var li=Ke(si,[["__file","/home/runner/work/element-plus/element-plus/packages/components/form/src/form.vue"]]);function Y(){return Y=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},Y.apply(this,arguments)}function fi(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,ue(t,e)}function Be(t){return Be=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(r){return r.__proto__||Object.getPrototypeOf(r)},Be(t)}function ue(t,e){return ue=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,i){return n.__proto__=i,n},ue(t,e)}function ui(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function be(t,e,r){return ui()?be=Reflect.construct.bind():be=function(i,o,a){var s=[null];s.push.apply(s,o);var d=Function.bind.apply(i,s),A=new d;return a&&ue(A,a.prototype),A},be.apply(null,arguments)}function di(t){return Function.toString.call(t).indexOf("[native code]")!==-1}function Le(t){var e=typeof Map=="function"?new Map:void 0;return Le=function(n){if(n===null||!di(n))return n;if(typeof n!="function")throw new TypeError("Super expression must either be null or a function");if(typeof e<"u"){if(e.has(n))return e.get(n);e.set(n,i)}function i(){return be(n,arguments,Be(this).constructor)}return i.prototype=Object.create(n.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),ue(i,n)},Le(t)}var ci=/%[sdj%]/g,pi=function(){};typeof process<"u"&&process.env;function Re(t){if(!t||!t.length)return null;var e={};return t.forEach(function(r){var n=r.field;e[n]=e[n]||[],e[n].push(r)}),e}function R(t){for(var e=arguments.length,r=new Array(e>1?e-1:0),n=1;n<e;n++)r[n-1]=arguments[n];var i=0,o=r.length;if(typeof t=="function")return t.apply(null,r);if(typeof t=="string"){var a=t.replace(ci,function(s){if(s==="%%")return"%";if(i>=o)return s;switch(s){case"%s":return String(r[i++]);case"%d":return Number(r[i++]);case"%j":try{return JSON.stringify(r[i++])}catch{return"[Circular]"}break;default:return s}});return a}return t}function vi(t){return t==="string"||t==="url"||t==="hex"||t==="email"||t==="date"||t==="pattern"}function _(t,e){return!!(t==null||e==="array"&&Array.isArray(t)&&!t.length||vi(e)&&typeof t=="string"&&!t)}function gi(t,e,r){var n=[],i=0,o=t.length;function a(s){n.push.apply(n,s||[]),i++,i===o&&r(n)}t.forEach(function(s){e(s,a)})}function vt(t,e,r){var n=0,i=t.length;function o(a){if(a&&a.length){r(a);return}var s=n;n=n+1,s<i?e(t[s],o):r([])}o([])}function mi(t){var e=[];return Object.keys(t).forEach(function(r){e.push.apply(e,t[r]||[])}),e}var gt=function(t){fi(e,t);function e(r,n){var i;return i=t.call(this,"Async Validation Error")||this,i.errors=r,i.fields=n,i}return e}(Le(Error));function yi(t,e,r,n,i){if(e.first){var o=new Promise(function(w,q){var j=function(u){return n(u),u.length?q(new gt(u,Re(u))):w(i)},p=mi(t);vt(p,r,j)});return o.catch(function(w){return w}),o}var a=e.firstFields===!0?Object.keys(t):e.firstFields||[],s=Object.keys(t),d=s.length,A=0,v=[],m=new Promise(function(w,q){var j=function(y){if(v.push.apply(v,y),A++,A===d)return n(v),v.length?q(new gt(v,Re(v))):w(i)};s.length||(n(v),w(i)),s.forEach(function(p){var y=t[p];a.indexOf(p)!==-1?vt(y,r,j):gi(y,r,j)})});return m.catch(function(w){return w}),m}function hi(t){return!!(t&&t.message!==void 0)}function bi(t,e){for(var r=t,n=0;n<e.length;n++){if(r==null)return r;r=r[e[n]]}return r}function mt(t,e){return function(r){var n;return t.fullFields?n=bi(e,t.fullFields):n=e[r.field||t.fullField],hi(r)?(r.field=r.field||t.fullField,r.fieldValue=n,r):{message:typeof r=="function"?r():r,fieldValue:n,field:r.field||t.fullField}}}function yt(t,e){if(e){for(var r in e)if(e.hasOwnProperty(r)){var n=e[r];typeof n=="object"&&typeof t[r]=="object"?t[r]=Y({},t[r],n):t[r]=n}}return t}var Dt=function(e,r,n,i,o,a){e.required&&(!n.hasOwnProperty(e.field)||_(r,a||e.type))&&i.push(R(o.messages.required,e.fullField))},wi=function(e,r,n,i,o){(/^\s+$/.test(r)||r==="")&&i.push(R(o.messages.whitespace,e.fullField))},ve,Fi=function(){if(ve)return ve;var t="[a-fA-F\\d:]",e=function(b){return b&&b.includeBoundaries?"(?:(?<=\\s|^)(?="+t+")|(?<="+t+")(?=\\s|$))":""},r="(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}",n="[a-fA-F\\d]{1,4}",i=(`
(?:
(?:`+n+":){7}(?:"+n+`|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8
(?:`+n+":){6}(?:"+r+"|:"+n+`|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4
(?:`+n+":){5}(?::"+r+"|(?::"+n+`){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4
(?:`+n+":){4}(?:(?::"+n+"){0,1}:"+r+"|(?::"+n+`){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4
(?:`+n+":){3}(?:(?::"+n+"){0,2}:"+r+"|(?::"+n+`){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4
(?:`+n+":){2}(?:(?::"+n+"){0,3}:"+r+"|(?::"+n+`){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4
(?:`+n+":){1}(?:(?::"+n+"){0,4}:"+r+"|(?::"+n+`){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4
(?::(?:(?::`+n+"){0,5}:"+r+"|(?::"+n+`){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4
)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1
`).replace(/\s*\/\/.*$/gm,"").replace(/\n/g,"").trim(),o=new RegExp("(?:^"+r+"$)|(?:^"+i+"$)"),a=new RegExp("^"+r+"$"),s=new RegExp("^"+i+"$"),d=function(b){return b&&b.exact?o:new RegExp("(?:"+e(b)+r+e(b)+")|(?:"+e(b)+i+e(b)+")","g")};d.v4=function(l){return l&&l.exact?a:new RegExp(""+e(l)+r+e(l),"g")},d.v6=function(l){return l&&l.exact?s:new RegExp(""+e(l)+i+e(l),"g")};var A="(?:(?:[a-z]+:)?//)",v="(?:\\S+(?::\\S*)?@)?",m=d.v4().source,w=d.v6().source,q="(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)",j="(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*",p="(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))",y="(?::\\d{2,5})?",u='(?:[/?#][^\\s"]*)?',h="(?:"+A+"|www\\.)"+v+"(?:localhost|"+m+"|"+w+"|"+q+j+p+")"+y+u;return ve=new RegExp("(?:^"+h+"$)","i"),ve},ht={email:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,hex:/^#?([a-f0-9]{6}|[a-f0-9]{3})$/i},ae={integer:function(e){return ae.number(e)&&parseInt(e,10)===e},float:function(e){return ae.number(e)&&!ae.integer(e)},array:function(e){return Array.isArray(e)},regexp:function(e){if(e instanceof RegExp)return!0;try{return!!new RegExp(e)}catch{return!1}},date:function(e){return typeof e.getTime=="function"&&typeof e.getMonth=="function"&&typeof e.getYear=="function"&&!isNaN(e.getTime())},number:function(e){return isNaN(e)?!1:typeof e=="number"},object:function(e){return typeof e=="object"&&!ae.array(e)},method:function(e){return typeof e=="function"},email:function(e){return typeof e=="string"&&e.length<=320&&!!e.match(ht.email)},url:function(e){return typeof e=="string"&&e.length<=2048&&!!e.match(Fi())},hex:function(e){return typeof e=="string"&&!!e.match(ht.hex)}},Ai=function(e,r,n,i,o){if(e.required&&r===void 0){Dt(e,r,n,i,o);return}var a=["integer","float","array","regexp","object","method","email","number","date","url","hex"],s=e.type;a.indexOf(s)>-1?ae[s](r)||i.push(R(o.messages.types[s],e.fullField,e.type)):s&&typeof r!==e.type&&i.push(R(o.messages.types[s],e.fullField,e.type))},Oi=function(e,r,n,i,o){var a=typeof e.len=="number",s=typeof e.min=="number",d=typeof e.max=="number",A=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,v=r,m=null,w=typeof r=="number",q=typeof r=="string",j=Array.isArray(r);if(w?m="number":q?m="string":j&&(m="array"),!m)return!1;j&&(v=r.length),q&&(v=r.replace(A,"_").length),a?v!==e.len&&i.push(R(o.messages[m].len,e.fullField,e.len)):s&&!d&&v<e.min?i.push(R(o.messages[m].min,e.fullField,e.min)):d&&!s&&v>e.max?i.push(R(o.messages[m].max,e.fullField,e.max)):s&&d&&(v<e.min||v>e.max)&&i.push(R(o.messages[m].range,e.fullField,e.min,e.max))},te="enum",Si=function(e,r,n,i,o){e[te]=Array.isArray(e[te])?e[te]:[],e[te].indexOf(r)===-1&&i.push(R(o.messages[te],e.fullField,e[te].join(", ")))},Ei=function(e,r,n,i,o){if(e.pattern){if(e.pattern instanceof RegExp)e.pattern.lastIndex=0,e.pattern.test(r)||i.push(R(o.messages.pattern.mismatch,e.fullField,r,e.pattern));else if(typeof e.pattern=="string"){var a=new RegExp(e.pattern);a.test(r)||i.push(R(o.messages.pattern.mismatch,e.fullField,r,e.pattern))}}},F={required:Dt,whitespace:wi,type:Ai,range:Oi,enum:Si,pattern:Ei},Ti=function(e,r,n,i,o){var a=[],s=e.required||!e.required&&i.hasOwnProperty(e.field);if(s){if(_(r,"string")&&!e.required)return n();F.required(e,r,i,a,o,"string"),_(r,"string")||(F.type(e,r,i,a,o),F.range(e,r,i,a,o),F.pattern(e,r,i,a,o),e.whitespace===!0&&F.whitespace(e,r,i,a,o))}n(a)},xi=function(e,r,n,i,o){var a=[],s=e.required||!e.required&&i.hasOwnProperty(e.field);if(s){if(_(r)&&!e.required)return n();F.required(e,r,i,a,o),r!==void 0&&F.type(e,r,i,a,o)}n(a)},qi=function(e,r,n,i,o){var a=[],s=e.required||!e.required&&i.hasOwnProperty(e.field);if(s){if(r===""&&(r=void 0),_(r)&&!e.required)return n();F.required(e,r,i,a,o),r!==void 0&&(F.type(e,r,i,a,o),F.range(e,r,i,a,o))}n(a)},Ii=function(e,r,n,i,o){var a=[],s=e.required||!e.required&&i.hasOwnProperty(e.field);if(s){if(_(r)&&!e.required)return n();F.required(e,r,i,a,o),r!==void 0&&F.type(e,r,i,a,o)}n(a)},ji=function(e,r,n,i,o){var a=[],s=e.required||!e.required&&i.hasOwnProperty(e.field);if(s){if(_(r)&&!e.required)return n();F.required(e,r,i,a,o),_(r)||F.type(e,r,i,a,o)}n(a)},Pi=function(e,r,n,i,o){var a=[],s=e.required||!e.required&&i.hasOwnProperty(e.field);if(s){if(_(r)&&!e.required)return n();F.required(e,r,i,a,o),r!==void 0&&(F.type(e,r,i,a,o),F.range(e,r,i,a,o))}n(a)},_i=function(e,r,n,i,o){var a=[],s=e.required||!e.required&&i.hasOwnProperty(e.field);if(s){if(_(r)&&!e.required)return n();F.required(e,r,i,a,o),r!==void 0&&(F.type(e,r,i,a,o),F.range(e,r,i,a,o))}n(a)},Vi=function(e,r,n,i,o){var a=[],s=e.required||!e.required&&i.hasOwnProperty(e.field);if(s){if(r==null&&!e.required)return n();F.required(e,r,i,a,o,"array"),r!=null&&(F.type(e,r,i,a,o),F.range(e,r,i,a,o))}n(a)},$i=function(e,r,n,i,o){var a=[],s=e.required||!e.required&&i.hasOwnProperty(e.field);if(s){if(_(r)&&!e.required)return n();F.required(e,r,i,a,o),r!==void 0&&F.type(e,r,i,a,o)}n(a)},Ci="enum",Ni=function(e,r,n,i,o){var a=[],s=e.required||!e.required&&i.hasOwnProperty(e.field);if(s){if(_(r)&&!e.required)return n();F.required(e,r,i,a,o),r!==void 0&&F[Ci](e,r,i,a,o)}n(a)},Mi=function(e,r,n,i,o){var a=[],s=e.required||!e.required&&i.hasOwnProperty(e.field);if(s){if(_(r,"string")&&!e.required)return n();F.required(e,r,i,a,o),_(r,"string")||F.pattern(e,r,i,a,o)}n(a)},Bi=function(e,r,n,i,o){var a=[],s=e.required||!e.required&&i.hasOwnProperty(e.field);if(s){if(_(r,"date")&&!e.required)return n();if(F.required(e,r,i,a,o),!_(r,"date")){var d;r instanceof Date?d=r:d=new Date(r),F.type(e,d,i,a,o),d&&F.range(e,d.getTime(),i,a,o)}}n(a)},Li=function(e,r,n,i,o){var a=[],s=Array.isArray(r)?"array":typeof r;F.required(e,r,i,a,o,s),n(a)},Pe=function(e,r,n,i,o){var a=e.type,s=[],d=e.required||!e.required&&i.hasOwnProperty(e.field);if(d){if(_(r,a)&&!e.required)return n();F.required(e,r,i,s,o,a),_(r,a)||F.type(e,r,i,s,o)}n(s)},Ri=function(e,r,n,i,o){var a=[],s=e.required||!e.required&&i.hasOwnProperty(e.field);if(s){if(_(r)&&!e.required)return n();F.required(e,r,i,a,o)}n(a)},le={string:Ti,method:xi,number:qi,boolean:Ii,regexp:ji,integer:Pi,float:_i,array:Vi,object:$i,enum:Ni,pattern:Mi,date:Bi,url:Pe,hex:Pe,email:Pe,required:Li,any:Ri};function We(){return{default:"Validation error on field %s",required:"%s is required",enum:"%s must be one of %s",whitespace:"%s cannot be empty",date:{format:"%s date %s is invalid for format %s",parse:"%s date could not be parsed, %s is invalid ",invalid:"%s date %s is invalid"},types:{string:"%s is not a %s",method:"%s is not a %s (function)",array:"%s is not an %s",object:"%s is not an %s",number:"%s is not a %s",date:"%s is not a %s",boolean:"%s is not a %s",integer:"%s is not an %s",float:"%s is not a %s",regexp:"%s is not a valid %s",email:"%s is not a valid %s",url:"%s is not a valid %s",hex:"%s is not a valid %s"},string:{len:"%s must be exactly %s characters",min:"%s must be at least %s characters",max:"%s cannot be longer than %s characters",range:"%s must be between %s and %s characters"},number:{len:"%s must equal %s",min:"%s cannot be less than %s",max:"%s cannot be greater than %s",range:"%s must be between %s and %s"},array:{len:"%s must be exactly %s in length",min:"%s cannot be less than %s in length",max:"%s cannot be greater than %s in length",range:"%s must be between %s and %s in length"},pattern:{mismatch:"%s value %s does not match pattern %s"},clone:function(){var e=JSON.parse(JSON.stringify(this));return e.clone=this.clone,e}}}var De=We(),de=function(){function t(r){this.rules=null,this._messages=De,this.define(r)}var e=t.prototype;return e.define=function(n){var i=this;if(!n)throw new Error("Cannot configure a schema with no rules");if(typeof n!="object"||Array.isArray(n))throw new Error("Rules must be an object");this.rules={},Object.keys(n).forEach(function(o){var a=n[o];i.rules[o]=Array.isArray(a)?a:[a]})},e.messages=function(n){return n&&(this._messages=yt(We(),n)),this._messages},e.validate=function(n,i,o){var a=this;i===void 0&&(i={}),o===void 0&&(o=function(){});var s=n,d=i,A=o;if(typeof d=="function"&&(A=d,d={}),!this.rules||Object.keys(this.rules).length===0)return A&&A(null,s),Promise.resolve(s);function v(p){var y=[],u={};function h(b){if(Array.isArray(b)){var O;y=(O=y).concat.apply(O,b)}else y.push(b)}for(var l=0;l<p.length;l++)h(p[l]);y.length?(u=Re(y),A(y,u)):A(null,s)}if(d.messages){var m=this.messages();m===De&&(m=We()),yt(m,d.messages),d.messages=m}else d.messages=this.messages();var w={},q=d.keys||Object.keys(this.rules);q.forEach(function(p){var y=a.rules[p],u=s[p];y.forEach(function(h){var l=h;typeof l.transform=="function"&&(s===n&&(s=Y({},s)),u=s[p]=l.transform(u)),typeof l=="function"?l={validator:l}:l=Y({},l),l.validator=a.getValidationMethod(l),l.validator&&(l.field=p,l.fullField=l.fullField||p,l.type=a.getType(l),w[p]=w[p]||[],w[p].push({rule:l,value:u,source:s,field:p}))})});var j={};return yi(w,d,function(p,y){var u=p.rule,h=(u.type==="object"||u.type==="array")&&(typeof u.fields=="object"||typeof u.defaultField=="object");h=h&&(u.required||!u.required&&p.value),u.field=p.field;function l(T,M){return Y({},M,{fullField:u.fullField+"."+T,fullFields:u.fullFields?[].concat(u.fullFields,[T]):[T]})}function b(T){T===void 0&&(T=[]);var M=Array.isArray(T)?T:[T];!d.suppressWarning&&M.length&&t.warning("async-validator:",M),M.length&&u.message!==void 0&&(M=[].concat(u.message));var c=M.map(mt(u,s));if(d.first&&c.length)return j[u.field]=1,y(c);if(!h)y(c);else{if(u.required&&!p.value)return u.message!==void 0?c=[].concat(u.message).map(mt(u,s)):d.error&&(c=[d.error(u,R(d.messages.required,u.field))]),y(c);var I={};u.defaultField&&Object.keys(p.value).map(function(D){I[D]=u.defaultField}),I=Y({},I,p.rule.fields);var k={};Object.keys(I).forEach(function(D){var W=I[D],Te=Array.isArray(W)?W:[W];k[D]=Te.map(l.bind(null,D))});var G=new t(k);G.messages(d.messages),p.rule.options&&(p.rule.options.messages=d.messages,p.rule.options.error=d.error),G.validate(p.value,p.rule.options||d,function(D){var W=[];c&&c.length&&W.push.apply(W,c),D&&D.length&&W.push.apply(W,D),y(W.length?W:null)})}}var O;if(u.asyncValidator)O=u.asyncValidator(u,p.value,b,p.source,d);else if(u.validator){try{O=u.validator(u,p.value,b,p.source,d)}catch(T){console.error==null||console.error(T),d.suppressValidatorError||setTimeout(function(){throw T},0),b(T.message)}O===!0?b():O===!1?b(typeof u.message=="function"?u.message(u.fullField||u.field):u.message||(u.fullField||u.field)+" fails"):O instanceof Array?b(O):O instanceof Error&&b(O.message)}O&&O.then&&O.then(function(){return b()},function(T){return b(T)})},function(p){v(p)},s)},e.getType=function(n){if(n.type===void 0&&n.pattern instanceof RegExp&&(n.type="pattern"),typeof n.validator!="function"&&n.type&&!le.hasOwnProperty(n.type))throw new Error(R("Unknown rule type %s",n.type));return n.type||"string"},e.getValidationMethod=function(n){if(typeof n.validator=="function")return n.validator;var i=Object.keys(n),o=i.indexOf("message");return o!==-1&&i.splice(o,1),i.length===1&&i[0]==="required"?le.required:le[this.getType(n)]||void 0},t}();de.register=function(e,r){if(typeof r!="function")throw new Error("Cannot register a validator by type, validator is not a function");le[e]=r};de.warning=pi;de.messages=De;de.validators=le;const Wi=["","error","validating","success"],Di=Oe({label:String,labelWidth:{type:[String,Number],default:""},prop:{type:we([String,Array])},required:{type:Boolean,default:void 0},rules:{type:we([Object,Array])},error:String,validateStatus:{type:String,values:Wi},for:String,inlineMessage:{type:[String,Boolean],default:""},showMessage:{type:Boolean,default:!0},size:{type:String,values:Ct}}),bt="ElLabelWrap";var Ui=H({name:bt,props:{isAutoWidth:Boolean,updateAll:Boolean},setup(t,{slots:e}){const r=fe(ke,void 0),n=fe(_e);n||Et(bt,"usage: <el-form-item><label-wrap /></el-form-item>");const i=Se("form"),o=z(),a=z(0),s=()=>{var v;if((v=o.value)!=null&&v.firstElementChild){const m=window.getComputedStyle(o.value.firstElementChild).width;return Math.ceil(Number.parseFloat(m))}else return 0},d=(v="update")=>{Ge(()=>{e.default&&t.isAutoWidth&&(v==="update"?a.value=s():v==="remove"&&(r==null||r.deregisterLabelWidth(a.value)))})},A=()=>d("update");return ze(()=>{A()}),Tt(()=>{d("remove")}),Ht(()=>A()),Z(a,(v,m)=>{t.updateAll&&(r==null||r.registerLabelWidth(v,m))}),Xt(E(()=>{var v,m;return(m=(v=o.value)==null?void 0:v.firstElementChild)!=null?m:null}),A),()=>{var v,m;if(!e)return null;const{isAutoWidth:w}=t;if(w){const q=r==null?void 0:r.autoLabelWidth,j=n==null?void 0:n.hasLabel,p={};if(j&&q&&q!=="auto"){const y=Math.max(0,Number.parseInt(q,10)-a.value),u=r.labelPosition==="left"?"marginRight":"marginLeft";y&&(p[u]=`${y}px`)}return L("div",{ref:o,class:[i.be("item","label-wrap")],style:p},[(v=e.default)==null?void 0:v.call(e)])}else return L(Qt,{ref:o},[(m=e.default)==null?void 0:m.call(e)])}}});const ki=["role","aria-labelledby"],Ki=H({name:"ElFormItem"}),zi=H({...Ki,props:Di,setup(t,{expose:e}){const r=t,n=er(),i=fe(ke,void 0),o=fe(_e,void 0),a=Ze(void 0,{formItem:!1}),s=Se("form-item"),d=tr().value,A=z([]),v=z(""),m=rr(v,100),w=z(""),q=z();let j,p=!1;const y=E(()=>{if((i==null?void 0:i.labelPosition)==="top")return{};const g=Ve(r.labelWidth||(i==null?void 0:i.labelWidth)||"");return g?{width:g}:{}}),u=E(()=>{if((i==null?void 0:i.labelPosition)==="top"||i!=null&&i.inline)return{};if(!r.label&&!r.labelWidth&&I)return{};const g=Ve(r.labelWidth||(i==null?void 0:i.labelWidth)||"");return!r.label&&!n.label?{marginLeft:g}:{}}),h=E(()=>[s.b(),s.m(a.value),s.is("error",v.value==="error"),s.is("validating",v.value==="validating"),s.is("success",v.value==="success"),s.is("required",Te.value||r.required),s.is("no-asterisk",i==null?void 0:i.hideRequiredAsterisk),(i==null?void 0:i.requireAsteriskPosition)==="right"?"asterisk-right":"asterisk-left",{[s.m("feedback")]:i==null?void 0:i.statusIcon}]),l=E(()=>ie(r.inlineMessage)?r.inlineMessage:(i==null?void 0:i.inlineMessage)||!1),b=E(()=>[s.e("error"),{[s.em("error","inline")]:l.value}]),O=E(()=>r.prop?ne(r.prop)?r.prop:r.prop.join("."):""),T=E(()=>!!(r.label||n.label)),M=E(()=>r.for||A.value.length===1?A.value[0]:void 0),c=E(()=>!M.value&&T.value),I=!!o,k=E(()=>{const g=i==null?void 0:i.model;if(!(!g||!r.prop))return je(g,r.prop).value}),G=E(()=>{const{required:g}=r,S=[];r.rules&&S.push(...Me(r.rules));const $=i==null?void 0:i.rules;if($&&r.prop){const V=je($,r.prop).value;V&&S.push(...Me(V))}if(g!==void 0){const V=S.map((K,Q)=>[K,Q]).filter(([K])=>Object.keys(K).includes("required"));if(V.length>0)for(const[K,Q]of V)K.required!==g&&(S[Q]={...K,required:g});else S.push({required:g})}return S}),D=E(()=>G.value.length>0),W=g=>G.value.filter($=>!$.trigger||!g?!0:Array.isArray($.trigger)?$.trigger.includes(g):$.trigger===g).map(({trigger:$,...V})=>V),Te=E(()=>G.value.some(g=>g.required)),kt=E(()=>{var g;return m.value==="error"&&r.showMessage&&((g=i==null?void 0:i.showMessage)!=null?g:!0)}),Qe=E(()=>`${r.label||""}${(i==null?void 0:i.labelSuffix)||""}`),X=g=>{v.value=g},Kt=g=>{var S,$;const{errors:V,fields:K}=g;(!V||!K)&&console.error(g),X("error"),w.value=V?($=(S=V==null?void 0:V[0])==null?void 0:S.message)!=null?$:`${r.prop} is required`:"",i==null||i.emit("validate",r.prop,!1,w.value)},zt=()=>{X("success"),i==null||i.emit("validate",r.prop,!0,"")},Gt=async g=>{const S=O.value;return new de({[S]:g}).validate({[S]:k.value},{firstFields:!0}).then(()=>(zt(),!0)).catch(V=>(Kt(V),Promise.reject(V)))},et=async(g,S)=>{if(p||!r.prop)return!1;const $=St(S);if(!D.value)return S==null||S(!1),!1;const V=W(g);return V.length===0?(S==null||S(!0),!0):(X("validating"),Gt(V).then(()=>(S==null||S(!0),!0)).catch(K=>{const{fields:Q}=K;return S==null||S(!1,Q),$?!1:Promise.reject(Q)}))},xe=()=>{X(""),w.value="",p=!1},tt=async()=>{const g=i==null?void 0:i.model;if(!g||!r.prop)return;const S=je(g,r.prop);p=!0,S.value=pt(j),await Ge(),xe(),p=!1},Jt=g=>{A.value.includes(g)||A.value.push(g)},Yt=g=>{A.value=A.value.filter(S=>S!==g)};Z(()=>r.error,g=>{w.value=g||"",X(g?"error":"")},{immediate:!0}),Z(()=>r.validateStatus,g=>X(g||""));const qe=At({...Ot(r),$el:q,size:a,validateState:v,labelId:d,inputIds:A,isGroup:c,hasLabel:T,addInputId:Jt,removeInputId:Yt,resetField:tt,clearValidate:xe,validate:et});return Ft(_e,qe),ze(()=>{r.prop&&(i==null||i.addField(qe),j=pt(k.value))}),Tt(()=>{i==null||i.removeField(qe)}),e({size:a,validateMessage:w,validateState:v,validate:et,clearValidate:xe,resetField:tt}),(g,S)=>{var $;return P(),J("div",{ref_key:"formItemRef",ref:q,class:C(f(h)),role:f(c)?"group":void 0,"aria-labelledby":f(c)?f(d):void 0},[L(f(Ui),{"is-auto-width":f(y).width==="auto","update-all":(($=f(i))==null?void 0:$.labelWidth)==="auto"},{default:N(()=>[f(T)?(P(),B(re(f(M)?"label":"div"),{key:0,id:f(d),for:f(M),class:C(f(s).e("label")),style:Fe(f(y))},{default:N(()=>[ye(g.$slots,"label",{label:f(Qe)},()=>[nr(oe(f(Qe)),1)])]),_:3},8,["id","for","class","style"])):U("v-if",!0)]),_:3},8,["is-auto-width","update-all"]),se("div",{class:C(f(s).e("content")),style:Fe(f(u))},[ye(g.$slots,"default"),L(ir,{name:`${f(s).namespace.value}-zoom-in-top`},{default:N(()=>[f(kt)?ye(g.$slots,"error",{key:0,error:w.value},()=>[se("div",{class:C(f(b))},oe(w.value),3)]):U("v-if",!0)]),_:3},8,["name"])],6)],10,ki)}}});var Ut=Ke(zi,[["__file","/home/runner/work/element-plus/element-plus/packages/components/form/src/form-item.vue"]]);const Gi=xt(li,{FormItem:Ut}),ge=ar(Ut),Ji=Oe({modelValue:{type:[Boolean,String,Number],default:!1},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},size:{type:String,validator:wr},width:{type:[String,Number],default:""},inlinePrompt:{type:Boolean,default:!1},inactiveActionIcon:{type:ce},activeActionIcon:{type:ce},activeIcon:{type:ce},inactiveIcon:{type:ce},activeText:{type:String,default:""},inactiveText:{type:String,default:""},activeValue:{type:[Boolean,String,Number],default:!0},inactiveValue:{type:[Boolean,String,Number],default:!1},activeColor:{type:String,default:""},inactiveColor:{type:String,default:""},borderColor:{type:String,default:""},name:{type:String,default:""},validateEvent:{type:Boolean,default:!0},beforeChange:{type:we(Function)},id:String,tabindex:{type:[String,Number]},value:{type:[Boolean,String,Number],default:!1}}),Yi={[$e]:t=>ie(t)||ne(t)||Ie(t),[Ce]:t=>ie(t)||ne(t)||Ie(t),[Ne]:t=>ie(t)||ne(t)||Ie(t)},Zi=["onClick"],Hi=["id","aria-checked","aria-disabled","name","true-value","false-value","disabled","tabindex","onKeydown"],Xi=["aria-hidden"],Qi=["aria-hidden"],ea=["aria-hidden"],Ue="ElSwitch",ta=H({name:Ue}),ra=H({...ta,props:Ji,emits:Yi,setup(t,{expose:e,emit:r}){const n=t,i=ur(),{formItem:o}=Or(),a=Ze(),s=Se("switch");(c=>{c.forEach(I=>{fr({from:I[0],replacement:I[1],scope:Ue,version:"2.3.0",ref:"https://element-plus.org/en-US/component/switch.html#attributes",type:"Attribute"},E(()=>{var k;return!!((k=i.vnode.props)!=null&&k[I[2]])}))})})([['"value"','"model-value" or "v-model"',"value"],['"active-color"',"CSS var `--el-switch-on-color`","activeColor"],['"inactive-color"',"CSS var `--el-switch-off-color`","inactiveColor"],['"border-color"',"CSS var `--el-switch-border-color`","borderColor"]]);const{inputId:A}=Sr(n,{formItemContext:o}),v=Er(E(()=>n.loading)),m=z(n.modelValue!==!1),w=z(),q=z(),j=E(()=>[s.b(),s.m(a.value),s.is("disabled",v.value),s.is("checked",l.value)]),p=E(()=>[s.e("label"),s.em("label","left"),s.is("active",!l.value)]),y=E(()=>[s.e("label"),s.em("label","right"),s.is("active",l.value)]),u=E(()=>({width:Ve(n.width)}));Z(()=>n.modelValue,()=>{m.value=!0}),Z(()=>n.value,()=>{m.value=!1});const h=E(()=>m.value?n.modelValue:n.value),l=E(()=>h.value===n.activeValue);[n.activeValue,n.inactiveValue].includes(h.value)||(r($e,n.inactiveValue),r(Ce,n.inactiveValue),r(Ne,n.inactiveValue)),Z(l,c=>{var I;w.value.checked=c,n.validateEvent&&((I=o==null?void 0:o.validate)==null||I.call(o,"change").catch(k=>wt()))});const b=()=>{const c=l.value?n.inactiveValue:n.activeValue;r($e,c),r(Ce,c),r(Ne,c),Ge(()=>{w.value.checked=l.value})},O=()=>{if(v.value)return;const{beforeChange:c}=n;if(!c){b();return}const I=c();[rt(I),ie(I)].includes(!0)||Et(Ue,"beforeChange must return type `Promise<boolean>` or `boolean`"),rt(I)?I.then(G=>{G&&b()}).catch(G=>{}):I&&b()},T=E(()=>s.cssVarBlock({...n.activeColor?{"on-color":n.activeColor}:null,...n.inactiveColor?{"off-color":n.inactiveColor}:null,...n.borderColor?{"border-color":n.borderColor}:null})),M=()=>{var c,I;(I=(c=w.value)==null?void 0:c.focus)==null||I.call(c)};return ze(()=>{w.value.checked=l.value}),e({focus:M,checked:l}),(c,I)=>(P(),J("div",{class:C(f(j)),style:Fe(f(T)),onClick:lr(O,["prevent"])},[se("input",{id:f(A),ref_key:"input",ref:w,class:C(f(s).e("input")),type:"checkbox",role:"switch","aria-checked":f(l),"aria-disabled":f(v),name:c.name,"true-value":c.activeValue,"false-value":c.inactiveValue,disabled:f(v),tabindex:c.tabindex,onChange:b,onKeydown:or(O,["enter"])},null,42,Hi),!c.inlinePrompt&&(c.inactiveIcon||c.inactiveText)?(P(),J("span",{key:0,class:C(f(p))},[c.inactiveIcon?(P(),B(f(ee),{key:0},{default:N(()=>[(P(),B(re(c.inactiveIcon)))]),_:1})):U("v-if",!0),!c.inactiveIcon&&c.inactiveText?(P(),J("span",{key:1,"aria-hidden":f(l)},oe(c.inactiveText),9,Xi)):U("v-if",!0)],2)):U("v-if",!0),se("span",{ref_key:"core",ref:q,class:C(f(s).e("core")),style:Fe(f(u))},[c.inlinePrompt?(P(),J("div",{key:0,class:C(f(s).e("inner"))},[c.activeIcon||c.inactiveIcon?(P(),B(f(ee),{key:0,class:C(f(s).is("icon"))},{default:N(()=>[(P(),B(re(f(l)?c.activeIcon:c.inactiveIcon)))]),_:1},8,["class"])):c.activeText||c.inactiveText?(P(),J("span",{key:1,class:C(f(s).is("text")),"aria-hidden":!f(l)},oe(f(l)?c.activeText:c.inactiveText),11,Qi)):U("v-if",!0)],2)):U("v-if",!0),se("div",{class:C(f(s).e("action"))},[c.loading?(P(),B(f(ee),{key:0,class:C(f(s).is("loading"))},{default:N(()=>[L(f(sr))]),_:1},8,["class"])):c.activeActionIcon&&f(l)?(P(),B(f(ee),{key:1},{default:N(()=>[(P(),B(re(c.activeActionIcon)))]),_:1})):c.inactiveActionIcon&&!f(l)?(P(),B(f(ee),{key:2},{default:N(()=>[(P(),B(re(c.inactiveActionIcon)))]),_:1})):U("v-if",!0)],2)],6),!c.inlinePrompt&&(c.activeIcon||c.activeText)?(P(),J("span",{key:1,class:C(f(y))},[c.activeIcon?(P(),B(f(ee),{key:0},{default:N(()=>[(P(),B(re(c.activeIcon)))]),_:1})):U("v-if",!0),!c.activeIcon&&c.activeText?(P(),J("span",{key:1,"aria-hidden":!f(l)},oe(c.activeText),9,ea)):U("v-if",!0)],2)):U("v-if",!0)],14,Zi))}});var na=Ke(ra,[["__file","/home/runner/work/element-plus/element-plus/packages/components/switch/src/switch.vue"]]);const me=xt(na),sa={__name:"MenuConfig",setup(t){const e=fe("reactiveMenuData");return(r,n)=>(P(),B(f(Gi),{ref:"form",model:f(e).config,"label-width":"120px"},{default:N(()=>[L(f(ge),{label:"autoIndex"},{default:N(()=>[L(f(me),{modelValue:f(e).config.autoIndex,"onUpdate:modelValue":n[0]||(n[0]=i=>f(e).config.autoIndex=i)},null,8,["modelValue"])]),_:1}),L(f(ge),{label:"selfJump"},{default:N(()=>[L(f(me),{modelValue:f(e).config.selfJump,"onUpdate:modelValue":n[1]||(n[1]=i=>f(e).config.selfJump=i)},null,8,["modelValue"])]),_:1}),L(f(ge),{label:"disableMock"},{default:N(()=>[L(f(me),{modelValue:f(e).config.disableMock,"onUpdate:modelValue":n[2]||(n[2]=i=>f(e).config.disableMock=i)},null,8,["modelValue"])]),_:1}),L(f(ge),{label:"resetId"},{default:N(()=>[L(f(me),{modelValue:f(e).config.resetId,"onUpdate:modelValue":n[3]||(n[3]=i=>f(e).config.resetId=i),disabled:""},null,8,["modelValue"])]),_:1})]),_:1},8,["model"]))}};export{sa as default};