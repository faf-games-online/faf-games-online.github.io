var Yf=Object.defineProperty,Xf=Object.defineProperties;var e1=Object.getOwnPropertyDescriptors;var ll=Object.getOwnPropertySymbols;var t1=Object.prototype.hasOwnProperty,n1=Object.prototype.propertyIsEnumerable;var cl=(e,t,n)=>t in e?Yf(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Se=(e,t)=>{for(var n in t||(t={}))t1.call(t,n)&&cl(e,n,t[n]);if(ll)for(var n of ll(t))n1.call(t,n)&&cl(e,n,t[n]);return e},Bo=(e,t)=>Xf(e,e1(t));function Sn(e,t){const n=Object.create(null),r=e.split(",");for(let o=0;o<r.length;o++)n[r[o]]=!0;return t?o=>!!n[o.toLowerCase()]:o=>!!n[o]}const r1="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",o1=Sn(r1);function Nd(e){return!!e||e===""}function Qi(e){if(Y(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],o=Te(r)?s1(r):Qi(r);if(o)for(const i in o)t[i]=o[i]}return t}else{if(Te(e))return e;if(Oe(e))return e}}const i1=/;(?![^(]*\))/g,a1=/:(.+)/;function s1(e){const t={};return e.split(i1).forEach(n=>{if(n){const r=n.split(a1);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Ki(e){let t="";if(Te(e))t=e;else if(Y(e))for(let n=0;n<e.length;n++){const r=Ki(e[n]);r&&(t+=r+" ")}else if(Oe(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}function k9(e){if(!e)return null;let{class:t,style:n}=e;return t&&!Te(t)&&(e.class=Ki(t)),n&&(e.style=Qi(n)),e}const u1="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",l1="svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",c1=Sn(u1),d1=Sn(l1);function p1(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=Lo(e[r],t[r]);return n}function Lo(e,t){if(e===t)return!0;let n=dl(e),r=dl(t);if(n||r)return n&&r?e.getTime()===t.getTime():!1;if(n=lo(e),r=lo(t),n||r)return e===t;if(n=Y(e),r=Y(t),n||r)return n&&r?p1(e,t):!1;if(n=Oe(e),r=Oe(t),n||r){if(!n||!r)return!1;const o=Object.keys(e).length,i=Object.keys(t).length;if(o!==i)return!1;for(const a in e){const s=e.hasOwnProperty(a),u=t.hasOwnProperty(a);if(s&&!u||!s&&u||!Lo(e[a],t[a]))return!1}}return String(e)===String(t)}function hu(e,t){return e.findIndex(n=>Lo(n,t))}const v9=e=>Te(e)?e:e==null?"":Y(e)||Oe(e)&&(e.toString===qd||!ae(e.toString))?JSON.stringify(e,Hd,2):String(e),Hd=(e,t)=>t&&t.__v_isRef?Hd(e,t.value):Nn(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,o])=>(n[`${r} =>`]=o,n),{})}:zr(t)?{[`Set(${t.size})`]:[...t.values()]}:Oe(t)&&!Y(t)&&!Zd(t)?String(t):t,ke=Object.freeze({}),yr=Object.freeze([]),st=()=>{},Vd=()=>!1,f1=/^on[^a-z]/,Oo=e=>f1.test(e),Ci=e=>e.startsWith("onUpdate:"),Re=Object.assign,gu=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},h1=Object.prototype.hasOwnProperty,fe=(e,t)=>h1.call(e,t),Y=Array.isArray,Nn=e=>Ao(e)==="[object Map]",zr=e=>Ao(e)==="[object Set]",dl=e=>Ao(e)==="[object Date]",ae=e=>typeof e=="function",Te=e=>typeof e=="string",lo=e=>typeof e=="symbol",Oe=e=>e!==null&&typeof e=="object",mu=e=>Oe(e)&&ae(e.then)&&ae(e.catch),qd=Object.prototype.toString,Ao=e=>qd.call(e),bu=e=>Ao(e).slice(8,-1),Zd=e=>Ao(e)==="[object Object]",wu=e=>Te(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,ri=Sn(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),g1=Sn("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"),Yi=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},m1=/-(\w)/g,Zt=Yi(e=>e.replace(m1,(t,n)=>n?n.toUpperCase():"")),b1=/\B([A-Z])/g,kn=Yi(e=>e.replace(b1,"-$1").toLowerCase()),Jn=Yi(e=>e.charAt(0).toUpperCase()+e.slice(1)),Tn=Yi(e=>e?`on${Jn(e)}`:""),co=(e,t)=>!Object.is(e,t),fr=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Ei=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Si=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let pl;const Gd=()=>pl||(pl=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});function ss(e,...t){console.warn(`[Vue warn] ${e}`,...t)}let Bt;class Wd{constructor(t=!1){this.active=!0,this.effects=[],this.cleanups=[],!t&&Bt&&(this.parent=Bt,this.index=(Bt.scopes||(Bt.scopes=[])).push(this)-1)}run(t){if(this.active){const n=Bt;try{return Bt=this,t()}finally{Bt=n}}else ss("cannot run an inactive effect scope.")}on(){Bt=this}off(){Bt=this.parent}stop(t){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(this.parent&&!t){const o=this.parent.scopes.pop();o&&o!==this&&(this.parent.scopes[this.index]=o,o.index=this.index)}this.active=!1}}}function Jd(e){return new Wd(e)}function w1(e,t=Bt){t&&t.active&&t.effects.push(e)}const yu=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Qd=e=>(e.w&vn)>0,Kd=e=>(e.n&vn)>0,y1=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=vn},x1=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const o=t[r];Qd(o)&&!Kd(o)?o.delete(e):t[n++]=o,o.w&=~vn,o.n&=~vn}t.length=n}},us=new WeakMap;let Yr=0,vn=1;const ls=30;let nt;const Hn=Symbol("iterate"),cs=Symbol("Map key iterate");class xu{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,w1(this,r)}run(){if(!this.active)return this.fn();let t=nt,n=xn;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=nt,nt=this,xn=!0,vn=1<<++Yr,Yr<=ls?y1(this):fl(this),this.fn()}finally{Yr<=ls&&x1(this),vn=1<<--Yr,nt=this.parent,xn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){nt===this?this.deferStop=!0:this.active&&(fl(this),this.onStop&&this.onStop(),this.active=!1)}}function fl(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let xn=!0;const Yd=[];function ir(){Yd.push(xn),xn=!1}function ar(){const e=Yd.pop();xn=e===void 0?!0:e}function bt(e,t,n){if(xn&&nt){let r=us.get(e);r||us.set(e,r=new Map);let o=r.get(n);o||r.set(n,o=yu()),Xd(o,{effect:nt,target:e,type:t,key:n})}}function Xd(e,t){let n=!1;Yr<=ls?Kd(e)||(e.n|=vn,n=!Qd(e)):n=!e.has(nt),n&&(e.add(nt),nt.deps.push(e),nt.onTrack&&nt.onTrack(Object.assign({effect:nt},t)))}function rn(e,t,n,r,o,i){const a=us.get(e);if(!a)return;let s=[];if(t==="clear")s=[...a.values()];else if(n==="length"&&Y(e))a.forEach((l,c)=>{(c==="length"||c>=r)&&s.push(l)});else switch(n!==void 0&&s.push(a.get(n)),t){case"add":Y(e)?wu(n)&&s.push(a.get("length")):(s.push(a.get(Hn)),Nn(e)&&s.push(a.get(cs)));break;case"delete":Y(e)||(s.push(a.get(Hn)),Nn(e)&&s.push(a.get(cs)));break;case"set":Nn(e)&&s.push(a.get(Hn));break}const u={target:e,type:t,key:n,newValue:r,oldValue:o,oldTarget:i};if(s.length===1)s[0]&&ds(s[0],u);else{const l=[];for(const c of s)c&&l.push(...c);ds(yu(l),u)}}function ds(e,t){const n=Y(e)?e:[...e];for(const r of n)r.computed&&hl(r,t);for(const r of n)r.computed||hl(r,t)}function hl(e,t){(e!==nt||e.allowRecurse)&&(e.onTrigger&&e.onTrigger(Re({effect:e},t)),e.scheduler?e.scheduler():e.run())}const k1=Sn("__proto__,__v_isRef,__isVue"),ep=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(lo)),v1=Xi(),_1=Xi(!1,!0),C1=Xi(!0),E1=Xi(!0,!0),gl=S1();function S1(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=le(this);for(let i=0,a=this.length;i<a;i++)bt(r,"get",i+"");const o=r[t](...n);return o===-1||o===!1?r[t](...n.map(le)):o}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){ir();const r=le(this)[t].apply(this,n);return ar(),r}}),e}function Xi(e=!1,t=!1){return function(r,o,i){if(o==="__v_isReactive")return!e;if(o==="__v_isReadonly")return e;if(o==="__v_isShallow")return t;if(o==="__v_raw"&&i===(e?t?up:sp:t?ap:ip).get(r))return r;const a=Y(r);if(!e&&a&&fe(gl,o))return Reflect.get(gl,o,i);const s=Reflect.get(r,o,i);return(lo(o)?ep.has(o):k1(o))||(e||bt(r,"get",o),t)?s:$e(s)?a&&wu(o)?s:s.value:Oe(s)?e?na(s):Mr(s):s}}const L1=tp(),O1=tp(!0);function tp(e=!1){return function(n,r,o,i){let a=n[r];if(Qn(a)&&$e(a)&&!$e(o))return!1;if(!e&&!Qn(o)&&(ps(o)||(o=le(o),a=le(a)),!Y(n)&&$e(a)&&!$e(o)))return a.value=o,!0;const s=Y(n)&&wu(r)?Number(r)<n.length:fe(n,r),u=Reflect.set(n,r,o,i);return n===le(i)&&(s?co(o,a)&&rn(n,"set",r,o,a):rn(n,"add",r,o)),u}}function A1(e,t){const n=fe(e,t),r=e[t],o=Reflect.deleteProperty(e,t);return o&&n&&rn(e,"delete",t,void 0,r),o}function $1(e,t){const n=Reflect.has(e,t);return(!lo(t)||!ep.has(t))&&bt(e,"has",t),n}function T1(e){return bt(e,"iterate",Y(e)?"length":Hn),Reflect.ownKeys(e)}const np={get:v1,set:L1,deleteProperty:A1,has:$1,ownKeys:T1},rp={get:C1,set(e,t){return ss(`Set operation on key "${String(t)}" failed: target is readonly.`,e),!0},deleteProperty(e,t){return ss(`Delete operation on key "${String(t)}" failed: target is readonly.`,e),!0}},P1=Re({},np,{get:_1,set:O1}),z1=Re({},rp,{get:E1}),ku=e=>e,ea=e=>Reflect.getPrototypeOf(e);function No(e,t,n=!1,r=!1){e=e.__v_raw;const o=le(e),i=le(t);n||(t!==i&&bt(o,"get",t),bt(o,"get",i));const{has:a}=ea(o),s=r?ku:n?vu:po;if(a.call(o,t))return s(e.get(t));if(a.call(o,i))return s(e.get(i));e!==o&&e.get(t)}function Ho(e,t=!1){const n=this.__v_raw,r=le(n),o=le(e);return t||(e!==o&&bt(r,"has",e),bt(r,"has",o)),e===o?n.has(e):n.has(e)||n.has(o)}function Vo(e,t=!1){return e=e.__v_raw,!t&&bt(le(e),"iterate",Hn),Reflect.get(e,"size",e)}function ml(e){e=le(e);const t=le(this);return ea(t).has.call(t,e)||(t.add(e),rn(t,"add",e,e)),this}function bl(e,t){t=le(t);const n=le(this),{has:r,get:o}=ea(n);let i=r.call(n,e);i?op(n,r,e):(e=le(e),i=r.call(n,e));const a=o.call(n,e);return n.set(e,t),i?co(t,a)&&rn(n,"set",e,t,a):rn(n,"add",e,t),this}function wl(e){const t=le(this),{has:n,get:r}=ea(t);let o=n.call(t,e);o?op(t,n,e):(e=le(e),o=n.call(t,e));const i=r?r.call(t,e):void 0,a=t.delete(e);return o&&rn(t,"delete",e,void 0,i),a}function yl(){const e=le(this),t=e.size!==0,n=Nn(e)?new Map(e):new Set(e),r=e.clear();return t&&rn(e,"clear",void 0,void 0,n),r}function qo(e,t){return function(r,o){const i=this,a=i.__v_raw,s=le(a),u=t?ku:e?vu:po;return!e&&bt(s,"iterate",Hn),a.forEach((l,c)=>r.call(o,u(l),u(c),i))}}function Zo(e,t,n){return function(...r){const o=this.__v_raw,i=le(o),a=Nn(i),s=e==="entries"||e===Symbol.iterator&&a,u=e==="keys"&&a,l=o[e](...r),c=n?ku:t?vu:po;return!t&&bt(i,"iterate",u?cs:Hn),{next(){const{value:d,done:p}=l.next();return p?{value:d,done:p}:{value:s?[c(d[0]),c(d[1])]:c(d),done:p}},[Symbol.iterator](){return this}}}}function ln(e){return function(...t){{const n=t[0]?`on key "${t[0]}" `:"";console.warn(`${Jn(e)} operation ${n}failed: target is readonly.`,le(this))}return e==="delete"?!1:this}}function M1(){const e={get(i){return No(this,i)},get size(){return Vo(this)},has:Ho,add:ml,set:bl,delete:wl,clear:yl,forEach:qo(!1,!1)},t={get(i){return No(this,i,!1,!0)},get size(){return Vo(this)},has:Ho,add:ml,set:bl,delete:wl,clear:yl,forEach:qo(!1,!0)},n={get(i){return No(this,i,!0)},get size(){return Vo(this,!0)},has(i){return Ho.call(this,i,!0)},add:ln("add"),set:ln("set"),delete:ln("delete"),clear:ln("clear"),forEach:qo(!0,!1)},r={get(i){return No(this,i,!0,!0)},get size(){return Vo(this,!0)},has(i){return Ho.call(this,i,!0)},add:ln("add"),set:ln("set"),delete:ln("delete"),clear:ln("clear"),forEach:qo(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=Zo(i,!1,!1),n[i]=Zo(i,!0,!1),t[i]=Zo(i,!1,!0),r[i]=Zo(i,!0,!0)}),[e,n,t,r]}const[R1,D1,I1,F1]=M1();function ta(e,t){const n=t?e?F1:I1:e?D1:R1;return(r,o,i)=>o==="__v_isReactive"?!e:o==="__v_isReadonly"?e:o==="__v_raw"?r:Reflect.get(fe(n,o)&&o in r?n:r,o,i)}const U1={get:ta(!1,!1)},j1={get:ta(!1,!0)},B1={get:ta(!0,!1)},N1={get:ta(!0,!0)};function op(e,t,n){const r=le(n);if(r!==n&&t.call(e,r)){const o=bu(e);console.warn(`Reactive ${o} contains both the raw and reactive versions of the same object${o==="Map"?" as keys":""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`)}}const ip=new WeakMap,ap=new WeakMap,sp=new WeakMap,up=new WeakMap;function H1(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function V1(e){return e.__v_skip||!Object.isExtensible(e)?0:H1(bu(e))}function Mr(e){return Qn(e)?e:ra(e,!1,np,U1,ip)}function q1(e){return ra(e,!1,P1,j1,ap)}function na(e){return ra(e,!0,rp,B1,sp)}function br(e){return ra(e,!0,z1,N1,up)}function ra(e,t,n,r,o){if(!Oe(e))return console.warn(`value cannot be made reactive: ${String(e)}`),e;if(e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=o.get(e);if(i)return i;const a=V1(e);if(a===0)return e;const s=new Proxy(e,a===2?r:n);return o.set(e,s),s}function Vt(e){return Qn(e)?Vt(e.__v_raw):!!(e&&e.__v_isReactive)}function Qn(e){return!!(e&&e.__v_isReadonly)}function ps(e){return!!(e&&e.__v_isShallow)}function Li(e){return Vt(e)||Qn(e)}function le(e){const t=e&&e.__v_raw;return t?le(t):e}function At(e){return Ei(e,"__v_skip",!0),e}const po=e=>Oe(e)?Mr(e):e,vu=e=>Oe(e)?na(e):e;function lp(e){xn&&nt&&(e=le(e),Xd(e.dep||(e.dep=yu()),{target:e,type:"get",key:"value"}))}function cp(e,t){e=le(e),e.dep&&ds(e.dep,{target:e,type:"set",key:"value",newValue:t})}function $e(e){return!!(e&&e.__v_isRef===!0)}function Rr(e){return dp(e,!1)}function Z1(e){return dp(e,!0)}function dp(e,t){return $e(e)?e:new G1(e,t)}class G1{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:le(t),this._value=n?t:po(t)}get value(){return lp(this),this._value}set value(t){t=this.__v_isShallow?t:le(t),co(t,this._rawValue)&&(this._rawValue=t,this._value=this.__v_isShallow?t:po(t),cp(this,t))}}function xr(e){return $e(e)?e.value:e}const W1={get:(e,t,n)=>xr(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const o=e[t];return $e(o)&&!$e(n)?(o.value=n,!0):Reflect.set(e,t,n,r)}};function pp(e){return Vt(e)?e:new Proxy(e,W1)}function xl(e){Li(e)||console.warn("toRefs() expects a reactive object but received a plain one.");const t=Y(e)?new Array(e.length):{};for(const n in e)t[n]=oi(e,n);return t}class J1{constructor(t,n,r){this._object=t,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}}function oi(e,t,n){const r=e[t];return $e(r)?r:new J1(e,t,n)}class Q1{constructor(t,n,r,o){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new xu(t,()=>{this._dirty||(this._dirty=!0,cp(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!o,this.__v_isReadonly=r}get value(){const t=le(this);return lp(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function K1(e,t,n=!1){let r,o;const i=ae(e);i?(r=e,o=()=>{console.warn("Write operation failed: computed value is readonly")}):(r=e.get,o=e.set);const a=new Q1(r,o,i||!o,n);return t&&!n&&(a.effect.onTrack=t.onTrack,a.effect.onTrigger=t.onTrigger),a}const Vn=[];function ii(e){Vn.push(e)}function ai(){Vn.pop()}function j(e,...t){ir();const n=Vn.length?Vn[Vn.length-1].component:null,r=n&&n.appContext.config.warnHandler,o=Y1();if(r)tn(r,n,11,[e+t.join(""),n&&n.proxy,o.map(({vnode:i})=>`at <${fa(n,i.type)}>`).join(`
`),o]);else{const i=[`[Vue warn]: ${e}`,...t];o.length&&i.push(`
`,...X1(o)),console.warn(...i)}ar()}function Y1(){let e=Vn[Vn.length-1];if(!e)return[];const t=[];for(;e;){const n=t[0];n&&n.vnode===e?n.recurseCount++:t.push({vnode:e,recurseCount:0});const r=e.component&&e.component.parent;e=r&&r.vnode}return t}function X1(e){const t=[];return e.forEach((n,r)=>{t.push(...r===0?[]:[`
`],...eh(n))}),t}function eh({vnode:e,recurseCount:t}){const n=t>0?`... (${t} recursive calls)`:"",r=e.component?e.component.parent==null:!1,o=` at <${fa(e.component,e.type,r)}`,i=">"+n;return e.props?[o,...th(e.props),i]:[o+i]}function th(e){const t=[],n=Object.keys(e);return n.slice(0,3).forEach(r=>{t.push(...fp(r,e[r]))}),n.length>3&&t.push(" ..."),t}function fp(e,t,n){return Te(t)?(t=JSON.stringify(t),n?t:[`${e}=${t}`]):typeof t=="number"||typeof t=="boolean"||t==null?n?t:[`${e}=${t}`]:$e(t)?(t=fp(e,le(t.value),!0),n?t:[`${e}=Ref<`,t,">"]):ae(t)?[`${e}=fn${t.name?`<${t.name}>`:""}`]:(t=le(t),n?t:[`${e}=`,t])}const _u={sp:"serverPrefetch hook",bc:"beforeCreate hook",c:"created hook",bm:"beforeMount hook",m:"mounted hook",bu:"beforeUpdate hook",u:"updated",bum:"beforeUnmount hook",um:"unmounted hook",a:"activated hook",da:"deactivated hook",ec:"errorCaptured hook",rtc:"renderTracked hook",rtg:"renderTriggered hook",[0]:"setup function",[1]:"render function",[2]:"watcher getter",[3]:"watcher callback",[4]:"watcher cleanup function",[5]:"native event handler",[6]:"component event handler",[7]:"vnode hook",[8]:"directive hook",[9]:"transition hook",[10]:"app errorHandler",[11]:"app warnHandler",[12]:"ref function",[13]:"async component loader",[14]:"scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"};function tn(e,t,n,r){let o;try{o=r?e(...r):e()}catch(i){oa(i,t,n)}return o}function Pt(e,t,n,r){if(ae(e)){const i=tn(e,t,n,r);return i&&mu(i)&&i.catch(a=>{oa(a,t,n)}),i}const o=[];for(let i=0;i<e.length;i++)o.push(Pt(e[i],t,n,r));return o}function oa(e,t,n,r=!0){const o=t?t.vnode:null;if(t){let i=t.parent;const a=t.proxy,s=_u[n];for(;i;){const l=i.ec;if(l){for(let c=0;c<l.length;c++)if(l[c](e,a,s)===!1)return}i=i.parent}const u=t.appContext.config.errorHandler;if(u){tn(u,null,10,[e,a,s]);return}}nh(e,n,o,r)}function nh(e,t,n,r=!0){{const o=_u[t];if(n&&ii(n),j(`Unhandled error${o?` during execution of ${o}`:""}`),n&&ai(),r)throw e;console.error(e)}}let Oi=!1,fs=!1;const mt=[];let en=0;const to=[];let hr=null,Pn=0;const no=[];let Qt=null,zn=0;const hp=Promise.resolve();let Cu=null,hs=null;const rh=100;function Ai(e){const t=Cu||hp;return e?t.then(this?e.bind(this):e):t}function oh(e){let t=en+1,n=mt.length;for(;t<n;){const r=t+n>>>1;fo(mt[r])<e?t=r+1:n=r}return t}function Eu(e){(!mt.length||!mt.includes(e,Oi&&e.allowRecurse?en+1:en))&&e!==hs&&(e.id==null?mt.push(e):mt.splice(oh(e.id),0,e),gp())}function gp(){!Oi&&!fs&&(fs=!0,Cu=hp.then(yp))}function ih(e){const t=mt.indexOf(e);t>en&&mt.splice(t,1)}function mp(e,t,n,r){Y(e)?n.push(...e):(!t||!t.includes(e,e.allowRecurse?r+1:r))&&n.push(e),gp()}function ah(e){mp(e,hr,to,Pn)}function bp(e){mp(e,Qt,no,zn)}function ia(e,t=null){if(to.length){for(hs=t,hr=[...new Set(to)],to.length=0,e=e||new Map,Pn=0;Pn<hr.length;Pn++)Su(e,hr[Pn])||hr[Pn]();hr=null,Pn=0,hs=null,ia(e,t)}}function wp(e){if(ia(),no.length){const t=[...new Set(no)];if(no.length=0,Qt){Qt.push(...t);return}for(Qt=t,e=e||new Map,Qt.sort((n,r)=>fo(n)-fo(r)),zn=0;zn<Qt.length;zn++)Su(e,Qt[zn])||Qt[zn]();Qt=null,zn=0}}const fo=e=>e.id==null?1/0:e.id;function yp(e){fs=!1,Oi=!0,e=e||new Map,ia(e),mt.sort((n,r)=>fo(n)-fo(r));const t=n=>Su(e,n);try{for(en=0;en<mt.length;en++){const n=mt[en];if(n&&n.active!==!1){if(t(n))continue;tn(n,null,14)}}}finally{en=0,mt.length=0,wp(e),Oi=!1,Cu=null,(mt.length||to.length||no.length)&&yp(e)}}function Su(e,t){if(!e.has(t))e.set(t,1);else{const n=e.get(t);if(n>rh){const r=t.ownerInstance,o=r&&Mu(r.type);return j(`Maximum recursive updates exceeded${o?` in component <${o}>`:""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`),!0}else e.set(t,n+1)}}let qn=!1;const gr=new Set;Gd().__VUE_HMR_RUNTIME__={createRecord:Ta(xp),rerender:Ta(lh),reload:Ta(ch)};const Kn=new Map;function sh(e){const t=e.type.__hmrId;let n=Kn.get(t);n||(xp(t,e.type),n=Kn.get(t)),n.instances.add(e)}function uh(e){Kn.get(e.type.__hmrId).instances.delete(e)}function xp(e,t){return Kn.has(e)?!1:(Kn.set(e,{initialDef:ro(t),instances:new Set}),!0)}function ro(e){return Yp(e)?e.__vccOpts:e}function lh(e,t){const n=Kn.get(e);!n||(n.initialDef.render=t,[...n.instances].forEach(r=>{t&&(r.render=t,ro(r.type).render=t),r.renderCache=[],qn=!0,r.update(),qn=!1}))}function ch(e,t){const n=Kn.get(e);if(!n)return;t=ro(t),kl(n.initialDef,t);const r=[...n.instances];for(const o of r){const i=ro(o.type);gr.has(i)||(i!==n.initialDef&&kl(i,t),gr.add(i)),o.appContext.optionsCache.delete(o.type),o.ceReload?(gr.add(i),o.ceReload(t.styles),gr.delete(i)):o.parent?(Eu(o.parent.update),o.parent.type.__asyncLoader&&o.parent.ceReload&&o.parent.ceReload(t.styles)):o.appContext.reload?o.appContext.reload():typeof window!="undefined"?window.location.reload():console.warn("[HMR] Root or manually mounted instance modified. Full reload required.")}bp(()=>{for(const o of r)gr.delete(ro(o.type))})}function kl(e,t){Re(e,t);for(const n in e)n!=="__file"&&!(n in t)&&delete e[n]}function Ta(e){return(t,n)=>{try{return e(t,n)}catch(r){console.error(r),console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.")}}}let Dn,Xr=[],gs=!1;function $o(e,...t){Dn?Dn.emit(e,...t):gs||Xr.push({event:e,args:t})}function kp(e,t){var n,r;Dn=e,Dn?(Dn.enabled=!0,Xr.forEach(({event:o,args:i})=>Dn.emit(o,...i)),Xr=[]):typeof window!="undefined"&&window.HTMLElement&&!(!((r=(n=window.navigator)===null||n===void 0?void 0:n.userAgent)===null||r===void 0)&&r.includes("jsdom"))?((t.__VUE_DEVTOOLS_HOOK_REPLAY__=t.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(i=>{kp(i,t)}),setTimeout(()=>{Dn||(t.__VUE_DEVTOOLS_HOOK_REPLAY__=null,gs=!0,Xr=[])},3e3)):(gs=!0,Xr=[])}function dh(e,t){$o("app:init",e,t,{Fragment:xt,Text:la,Comment:lt,Static:li})}function ph(e){$o("app:unmount",e)}const fh=Lu("component:added"),vp=Lu("component:updated"),hh=Lu("component:removed");function Lu(e){return t=>{$o(e,t.appContext.app,t.uid,t.parent?t.parent.uid:void 0,t)}}const gh=_p("perf:start"),mh=_p("perf:end");function _p(e){return(t,n,r)=>{$o(e,t.appContext.app,t.uid,t,n,r)}}function bh(e,t,n){$o("component:emit",e.appContext.app,e,t,n)}function wh(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||ke;{const{emitsOptions:c,propsOptions:[d]}=e;if(c)if(!(t in c))(!d||!(Tn(t)in d))&&j(`Component emitted event "${t}" but it is neither declared in the emits option nor as an "${Tn(t)}" prop.`);else{const p=c[t];ae(p)&&(p(...n)||j(`Invalid event arguments: event validation failed for event "${t}".`))}}let o=n;const i=t.startsWith("update:"),a=i&&t.slice(7);if(a&&a in r){const c=`${a==="modelValue"?"model":a}Modifiers`,{number:d,trim:p}=r[c]||ke;p&&(o=n.map(f=>f.trim())),d&&(o=n.map(Si))}bh(e,t,o);{const c=t.toLowerCase();c!==t&&r[Tn(c)]&&j(`Event "${c}" is emitted in component ${fa(e,e.type)} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${kn(t)}" instead of "${t}".`)}let s,u=r[s=Tn(t)]||r[s=Tn(Zt(t))];!u&&i&&(u=r[s=Tn(kn(t))]),u&&Pt(u,e,6,o);const l=r[s+"Once"];if(l){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,Pt(l,e,6,o)}}function Cp(e,t,n=!1){const r=t.emitsCache,o=r.get(e);if(o!==void 0)return o;const i=e.emits;let a={},s=!1;if(!ae(e)){const u=l=>{const c=Cp(l,t,!0);c&&(s=!0,Re(a,c))};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}return!i&&!s?(r.set(e,null),null):(Y(i)?i.forEach(u=>a[u]=null):Re(a,i),r.set(e,a),a)}function aa(e,t){return!e||!Oo(t)?!1:(t=t.slice(2).replace(/Once$/,""),fe(e,t[0].toLowerCase()+t.slice(1))||fe(e,kn(t))||fe(e,t))}let Ue=null,sa=null;function $i(e){const t=Ue;return Ue=e,sa=e&&e.type.__scopeId||null,t}function _9(e){sa=e}function C9(){sa=null}function yh(e,t=Ue,n){if(!t||e._n)return e;const r=(...o)=>{r._d&&zl(-1);const i=$i(t),a=e(...o);return $i(i),r._d&&zl(1),vp(t),a};return r._n=!0,r._c=!0,r._d=!0,r}let ms=!1;function Ti(){ms=!0}function Pa(e){const{type:t,vnode:n,proxy:r,withProxy:o,props:i,propsOptions:[a],slots:s,attrs:u,emit:l,render:c,renderCache:d,data:p,setupState:f,ctx:h,inheritAttrs:m}=e;let C,x;const _=$i(e);ms=!1;try{if(n.shapeFlag&4){const H=o||r;C=$t(c.call(H,H,d,i,f,p,h)),x=u}else{const H=t;u===i&&Ti(),C=$t(H.length>1?H(i,{get attrs(){return Ti(),u},slots:s,emit:l}):H(i,null)),x=t.props?u:kh(u)}}catch(H){io.length=0,oa(H,e,1),C=ut(lt)}let I=C,q;if(C.patchFlag>0&&C.patchFlag&2048&&([I,q]=xh(C)),x&&m!==!1){const H=Object.keys(x),{shapeFlag:D}=I;if(H.length){if(D&7)a&&H.some(Ci)&&(x=vh(x,a)),I=_n(I,x);else if(!ms&&I.type!==lt){const W=Object.keys(u),v=[],E=[];for(let P=0,N=W.length;P<N;P++){const Q=W[P];Oo(Q)?Ci(Q)||v.push(Q[2].toLowerCase()+Q.slice(3)):E.push(Q)}E.length&&j(`Extraneous non-props attributes (${E.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`),v.length&&j(`Extraneous non-emits event listeners (${v.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`)}}}return n.dirs&&(vl(I)||j("Runtime directive used on component with non-element root node. The directives will not function as intended."),I=_n(I),I.dirs=I.dirs?I.dirs.concat(n.dirs):n.dirs),n.transition&&(vl(I)||j("Component inside <Transition> renders non-element root node that cannot be animated."),I.transition=n.transition),q?q(I):C=I,$i(_),C}const xh=e=>{const t=e.children,n=e.dynamicChildren,r=Ep(t);if(!r)return[e,void 0];const o=t.indexOf(r),i=n?n.indexOf(r):-1,a=s=>{t[o]=s,n&&(i>-1?n[i]=s:s.patchFlag>0&&(e.dynamicChildren=[...n,s]))};return[$t(r),a]};function Ep(e){let t;for(let n=0;n<e.length;n++){const r=e[n];if(vr(r)){if(r.type!==lt||r.children==="v-if"){if(t)return;t=r}}else return}return t}const kh=e=>{let t;for(const n in e)(n==="class"||n==="style"||Oo(n))&&((t||(t={}))[n]=e[n]);return t},vh=(e,t)=>{const n={};for(const r in e)(!Ci(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n},vl=e=>e.shapeFlag&7||e.type===lt;function _h(e,t,n){const{props:r,children:o,component:i}=e,{props:a,children:s,patchFlag:u}=t,l=i.emitsOptions;if((o||s)&&qn||t.dirs||t.transition)return!0;if(n&&u>=0){if(u&1024)return!0;if(u&16)return r?_l(r,a,l):!!a;if(u&8){const c=t.dynamicProps;for(let d=0;d<c.length;d++){const p=c[d];if(a[p]!==r[p]&&!aa(l,p))return!0}}}else return(o||s)&&(!s||!s.$stable)?!0:r===a?!1:r?a?_l(r,a,l):!0:!!a;return!1}function _l(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let o=0;o<r.length;o++){const i=r[o];if(t[i]!==e[i]&&!aa(n,i))return!0}return!1}function Ch({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const Eh=e=>e.__isSuspense;function Sh(e,t){t&&t.pendingBranch?Y(e)?t.effects.push(...e):t.effects.push(e):bp(e)}function si(e,t){if(!Ie)j("provide() can only be used inside setup().");else{let n=Ie.provides;const r=Ie.parent&&Ie.parent.provides;r===n&&(n=Ie.provides=Object.create(r)),n[e]=t}}function zt(e,t,n=!1){const r=Ie||Ue;if(r){const o=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(o&&e in o)return o[e];if(arguments.length>1)return n&&ae(t)?t.call(r.proxy):t;j(`injection "${String(e)}" not found.`)}else j("inject() can only be used inside setup() or functional components.")}function Lh(e,t){return Ou(e,null,t)}const Cl={};function Zn(e,t,n){return ae(t)||j("`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."),Ou(e,t,n)}function Ou(e,t,{immediate:n,deep:r,flush:o,onTrack:i,onTrigger:a}=ke){t||(n!==void 0&&j('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'),r!==void 0&&j('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'));const s=_=>{j("Invalid watch source: ",_,"A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.")},u=Ie;let l,c=!1,d=!1;if($e(e)?(l=()=>e.value,c=ps(e)):Vt(e)?(l=()=>e,r=!0):Y(e)?(d=!0,c=e.some(_=>Vt(_)||ps(_)),l=()=>e.map(_=>{if($e(_))return _.value;if(Vt(_))return Un(_);if(ae(_))return tn(_,u,2);s(_)})):ae(e)?t?l=()=>tn(e,u,2):l=()=>{if(!(u&&u.isUnmounted))return p&&p(),Pt(e,u,3,[f])}:(l=st,s(e)),t&&r){const _=l;l=()=>Un(_())}let p,f=_=>{p=x.onStop=()=>{tn(_,u,4)}};if(go)return f=st,t?n&&Pt(t,u,3,[l(),d?[]:void 0,f]):l(),st;let h=d?[]:Cl;const m=()=>{if(!!x.active)if(t){const _=x.run();(r||c||(d?_.some((I,q)=>co(I,h[q])):co(_,h)))&&(p&&p(),Pt(t,u,3,[_,h===Cl?void 0:h,f]),h=_)}else x.run()};m.allowRecurse=!!t;let C;o==="sync"?C=m:o==="post"?C=()=>at(m,u&&u.suspense):C=()=>ah(m);const x=new xu(l,C);return x.onTrack=i,x.onTrigger=a,t?n?m():h=x.run():o==="post"?at(x.run.bind(x),u&&u.suspense):x.run(),()=>{x.stop(),u&&u.scope&&gu(u.scope.effects,x)}}function Oh(e,t,n){const r=this.proxy,o=Te(e)?e.includes(".")?Sp(r,e):()=>r[e]:e.bind(r,r);let i;ae(t)?i=t:(i=t.handler,n=t);const a=Ie;_r(this);const s=Ou(o,i.bind(r),n);return a?_r(a):Gn(),s}function Sp(e,t){const n=t.split(".");return()=>{let r=e;for(let o=0;o<n.length&&r;o++)r=r[n[o]];return r}}function Un(e,t){if(!Oe(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),$e(e))Un(e.value,t);else if(Y(e))for(let n=0;n<e.length;n++)Un(e[n],t);else if(zr(e)||Nn(e))e.forEach(n=>{Un(n,t)});else if(Zd(e))for(const n in e)Un(e[n],t);return e}function Lp(e){return ae(e)?{setup:e,name:e.name}:e}const oo=e=>!!e.type.__asyncLoader,Au=e=>e.type.__isKeepAlive;function Ah(e,t){Op(e,"a",t)}function $h(e,t){Op(e,"da",t)}function Op(e,t,n=Ie){const r=e.__wdc||(e.__wdc=()=>{let o=n;for(;o;){if(o.isDeactivated)return;o=o.parent}return e()});if(ua(t,r,n),n){let o=n.parent;for(;o&&o.parent;)Au(o.parent.vnode)&&Th(r,t,n,o),o=o.parent}}function Th(e,t,n,r){const o=ua(t,e,r,!0);$u(()=>{gu(r[t],o)},n)}function ua(e,t,n=Ie,r=!1){if(n){const o=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...a)=>{if(n.isUnmounted)return;ir(),_r(n);const s=Pt(t,n,e,a);return Gn(),ar(),s});return r?o.unshift(i):o.push(i),i}else{const o=Tn(_u[e].replace(/ hook$/,""));j(`${o} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`)}}const on=e=>(t,n=Ie)=>(!go||e==="sp")&&ua(e,t,n),Ph=on("bm"),zh=on("m"),Mh=on("bu"),Rh=on("u"),Ap=on("bum"),$u=on("um"),Dh=on("sp"),Ih=on("rtg"),Fh=on("rtc");function Uh(e,t=Ie){ua("ec",e,t)}function $p(e){g1(e)&&j("Do not use built-in directive ids as custom directive id: "+e)}function E9(e,t){const n=Ue;if(n===null)return j("withDirectives can only be used inside render functions."),e;const r=pa(n)||n.proxy,o=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[a,s,u,l=ke]=t[i];ae(a)&&(a={mounted:a,updated:a}),a.deep&&Un(s),o.push({dir:a,instance:r,value:s,oldValue:void 0,arg:u,modifiers:l})}return e}function On(e,t,n,r){const o=e.dirs,i=t&&t.dirs;for(let a=0;a<o.length;a++){const s=o[a];i&&(s.oldValue=i[a].value);let u=s.dir[r];u&&(ir(),Pt(u,n,8,[e.el,s,e,t]),ar())}}const Pi="components";function S9(e,t){return Pp(Pi,e,!0,t)||e}const Tp=Symbol();function L9(e){return Te(e)?Pp(Pi,e,!1)||e:e||Tp}function Pp(e,t,n=!0,r=!1){const o=Ue||Ie;if(o){const i=o.type;if(e===Pi){const s=Mu(i);if(s&&(s===t||s===Zt(t)||s===Jn(Zt(t))))return i}const a=El(o[e]||i[e],t)||El(o.appContext[e],t);if(!a&&r)return i;if(n&&!a){const s=e===Pi?`
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.`:"";j(`Failed to resolve ${e.slice(0,-1)}: ${t}${s}`)}return a}else j(`resolve${Jn(e.slice(0,-1))} can only be used in render() or setup().`)}function El(e,t){return e&&(e[t]||e[Zt(t)]||e[Jn(Zt(t))])}function O9(e,t,n,r){let o;const i=n&&n[r];if(Y(e)||Te(e)){o=new Array(e.length);for(let a=0,s=e.length;a<s;a++)o[a]=t(e[a],a,void 0,i&&i[a])}else if(typeof e=="number"){Number.isInteger(e)||j(`The v-for range expect an integer value but got ${e}.`),o=new Array(e);for(let a=0;a<e;a++)o[a]=t(a+1,a,void 0,i&&i[a])}else if(Oe(e))if(e[Symbol.iterator])o=Array.from(e,(a,s)=>t(a,s,void 0,i&&i[s]));else{const a=Object.keys(e);o=new Array(a.length);for(let s=0,u=a.length;s<u;s++){const l=a[s];o[s]=t(e[l],l,s,i&&i[s])}}else o=[];return n&&(n[r]=o),o}function A9(e,t,n={},r,o){if(Ue.isCE||Ue.parent&&oo(Ue.parent)&&Ue.parent.isCE)return ut("slot",t==="default"?null:{name:t},r&&r());let i=e[t];i&&i.length>1&&(j("SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."),i=()=>[]),i&&i._c&&(i._d=!1),Vp();const a=i&&zp(i(n)),s=Zp(xt,{key:n.key||`_${t}`},a||(r?r():[]),a&&e._===1?64:-2);return!o&&s.scopeId&&(s.slotScopeIds=[s.scopeId+"-s"]),i&&i._c&&(i._d=!0),s}function zp(e){return e.some(t=>vr(t)?!(t.type===lt||t.type===xt&&!zp(t.children)):!0)?e:null}const bs=e=>e?Qp(e)?pa(e)||e.proxy:bs(e.parent):null,kr=Re(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>br(e.props),$attrs:e=>br(e.attrs),$slots:e=>br(e.slots),$refs:e=>br(e.refs),$parent:e=>bs(e.parent),$root:e=>bs(e.root),$emit:e=>e.emit,$options:e=>Dp(e),$forceUpdate:e=>e.f||(e.f=()=>Eu(e.update)),$nextTick:e=>e.n||(e.n=Ai.bind(e.proxy)),$watch:e=>Oh.bind(e)}),Tu=e=>e==="_"||e==="$",Mp={get({_:e},t){const{ctx:n,setupState:r,data:o,props:i,accessCache:a,type:s,appContext:u}=e;if(t==="__isVue")return!0;if(r!==ke&&r.__isScriptSetup&&fe(r,t))return r[t];let l;if(t[0]!=="$"){const f=a[t];if(f!==void 0)switch(f){case 1:return r[t];case 2:return o[t];case 4:return n[t];case 3:return i[t]}else{if(r!==ke&&fe(r,t))return a[t]=1,r[t];if(o!==ke&&fe(o,t))return a[t]=2,o[t];if((l=e.propsOptions[0])&&fe(l,t))return a[t]=3,i[t];if(n!==ke&&fe(n,t))return a[t]=4,n[t];ws&&(a[t]=0)}}const c=kr[t];let d,p;if(c)return t==="$attrs"&&(bt(e,"get",t),Ti()),c(e);if((d=s.__cssModules)&&(d=d[t]))return d;if(n!==ke&&fe(n,t))return a[t]=4,n[t];if(p=u.config.globalProperties,fe(p,t))return p[t];Ue&&(!Te(t)||t.indexOf("__v")!==0)&&(o!==ke&&Tu(t[0])&&fe(o,t)?j(`Property ${JSON.stringify(t)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`):e===Ue&&j(`Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`))},set({_:e},t,n){const{data:r,setupState:o,ctx:i}=e;return o!==ke&&fe(o,t)?(o[t]=n,!0):r!==ke&&fe(r,t)?(r[t]=n,!0):fe(e.props,t)?(j(`Attempting to mutate prop "${t}". Props are readonly.`,e),!1):t[0]==="$"&&t.slice(1)in e?(j(`Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`,e),!1):(t in e.appContext.config.globalProperties?Object.defineProperty(i,t,{enumerable:!0,configurable:!0,value:n}):i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:o,propsOptions:i}},a){let s;return!!n[a]||e!==ke&&fe(e,a)||t!==ke&&fe(t,a)||(s=i[0])&&fe(s,a)||fe(r,a)||fe(kr,a)||fe(o.config.globalProperties,a)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:fe(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};Mp.ownKeys=e=>(j("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."),Reflect.ownKeys(e));function jh(e){const t={};return Object.defineProperty(t,"_",{configurable:!0,enumerable:!1,get:()=>e}),Object.keys(kr).forEach(n=>{Object.defineProperty(t,n,{configurable:!0,enumerable:!1,get:()=>kr[n](e),set:st})}),t}function Bh(e){const{ctx:t,propsOptions:[n]}=e;n&&Object.keys(n).forEach(r=>{Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>e.props[r],set:st})})}function Nh(e){const{ctx:t,setupState:n}=e;Object.keys(le(n)).forEach(r=>{if(!n.__isScriptSetup){if(Tu(r[0])){j(`setup() return property ${JSON.stringify(r)} should not start with "$" or "_" which are reserved prefixes for Vue internals.`);return}Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>n[r],set:st})}})}function Hh(){const e=Object.create(null);return(t,n)=>{e[n]?j(`${t} property "${n}" is already defined in ${e[n]}.`):e[n]=t}}let ws=!0;function Vh(e){const t=Dp(e),n=e.proxy,r=e.ctx;ws=!1,t.beforeCreate&&Sl(t.beforeCreate,e,"bc");const{data:o,computed:i,methods:a,watch:s,provide:u,inject:l,created:c,beforeMount:d,mounted:p,beforeUpdate:f,updated:h,activated:m,deactivated:C,beforeDestroy:x,beforeUnmount:_,destroyed:I,unmounted:q,render:H,renderTracked:D,renderTriggered:W,errorCaptured:v,serverPrefetch:E,expose:P,inheritAttrs:N,components:Q,directives:K,filters:Ve}=t,De=Hh();{const[de]=e.propsOptions;if(de)for(const ie in de)De("Props",ie)}if(l&&qh(l,r,De,e.appContext.config.unwrapInjectedRef),a)for(const de in a){const ie=a[de];ae(ie)?(Object.defineProperty(r,de,{value:ie.bind(n),configurable:!0,enumerable:!0,writable:!0}),De("Methods",de)):j(`Method "${de}" has type "${typeof ie}" in the component definition. Did you reference the function correctly?`)}if(o){ae(o)||j("The data option must be a function. Plain object usage is no longer supported.");const de=o.call(n,n);if(mu(de)&&j("data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."),!Oe(de))j("data() should return an object.");else{e.data=Mr(de);for(const ie in de)De("Data",ie),Tu(ie[0])||Object.defineProperty(r,ie,{configurable:!0,enumerable:!0,get:()=>de[ie],set:st})}}if(ws=!0,i)for(const de in i){const ie=i[de],be=ae(ie)?ie.bind(n,n):ae(ie.get)?ie.get.bind(n,n):st;be===st&&j(`Computed property "${de}" has no getter.`);const Ct=!ae(ie)&&ae(ie.set)?ie.set.bind(n):()=>{j(`Write operation failed: computed property "${de}" is readonly.`)},Xe=kt({get:be,set:Ct});Object.defineProperty(r,de,{enumerable:!0,configurable:!0,get:()=>Xe.value,set:gt=>Xe.value=gt}),De("Computed",de)}if(s)for(const de in s)Rp(s[de],r,n,de);if(u){const de=ae(u)?u.call(n):u;Reflect.ownKeys(de).forEach(ie=>{si(ie,de[ie])})}c&&Sl(c,e,"c");function pe(de,ie){Y(ie)?ie.forEach(be=>de(be.bind(n))):ie&&de(ie.bind(n))}if(pe(Ph,d),pe(zh,p),pe(Mh,f),pe(Rh,h),pe(Ah,m),pe($h,C),pe(Uh,v),pe(Fh,D),pe(Ih,W),pe(Ap,_),pe($u,q),pe(Dh,E),Y(P))if(P.length){const de=e.exposed||(e.exposed={});P.forEach(ie=>{Object.defineProperty(de,ie,{get:()=>n[ie],set:be=>n[ie]=be})})}else e.exposed||(e.exposed={});H&&e.render===st&&(e.render=H),N!=null&&(e.inheritAttrs=N),Q&&(e.components=Q),K&&(e.directives=K)}function qh(e,t,n=st,r=!1){Y(e)&&(e=ys(e));for(const o in e){const i=e[o];let a;Oe(i)?"default"in i?a=zt(i.from||o,i.default,!0):a=zt(i.from||o):a=zt(i),$e(a)?r?Object.defineProperty(t,o,{enumerable:!0,configurable:!0,get:()=>a.value,set:s=>a.value=s}):(j(`injected property "${o}" is a ref and will be auto-unwrapped and no longer needs \`.value\` in the next minor release. To opt-in to the new behavior now, set \`app.config.unwrapInjectedRef = true\` (this config is temporary and will not be needed in the future.)`),t[o]=a):t[o]=a,n("Inject",o)}}function Sl(e,t,n){Pt(Y(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function Rp(e,t,n,r){const o=r.includes(".")?Sp(n,r):()=>n[r];if(Te(e)){const i=t[e];ae(i)?Zn(o,i):j(`Invalid watch handler specified by key "${e}"`,i)}else if(ae(e))Zn(o,e.bind(n));else if(Oe(e))if(Y(e))e.forEach(i=>Rp(i,t,n,r));else{const i=ae(e.handler)?e.handler.bind(n):t[e.handler];ae(i)?Zn(o,i,e):j(`Invalid watch handler specified by key "${e.handler}"`,i)}else j(`Invalid watch option: "${r}"`,e)}function Dp(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:o,optionsCache:i,config:{optionMergeStrategies:a}}=e.appContext,s=i.get(t);let u;return s?u=s:!o.length&&!n&&!r?u=t:(u={},o.length&&o.forEach(l=>zi(u,l,a,!0)),zi(u,t,a)),i.set(t,u),u}function zi(e,t,n,r=!1){const{mixins:o,extends:i}=t;i&&zi(e,i,n,!0),o&&o.forEach(a=>zi(e,a,n,!0));for(const a in t)if(r&&a==="expose")j('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');else{const s=Zh[a]||n&&n[a];e[a]=s?s(e[a],t[a]):t[a]}return e}const Zh={data:Ll,props:Mn,emits:Mn,methods:Mn,computed:Mn,beforeCreate:tt,created:tt,beforeMount:tt,mounted:tt,beforeUpdate:tt,updated:tt,beforeDestroy:tt,beforeUnmount:tt,destroyed:tt,unmounted:tt,activated:tt,deactivated:tt,errorCaptured:tt,serverPrefetch:tt,components:Mn,directives:Mn,watch:Wh,provide:Ll,inject:Gh};function Ll(e,t){return t?e?function(){return Re(ae(e)?e.call(this,this):e,ae(t)?t.call(this,this):t)}:t:e}function Gh(e,t){return Mn(ys(e),ys(t))}function ys(e){if(Y(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function tt(e,t){return e?[...new Set([].concat(e,t))]:t}function Mn(e,t){return e?Re(Re(Object.create(null),e),t):t}function Wh(e,t){if(!e)return t;if(!t)return e;const n=Re(Object.create(null),e);for(const r in t)n[r]=tt(e[r],t[r]);return n}function Jh(e,t,n,r=!1){const o={},i={};Ei(i,ca,1),e.propsDefaults=Object.create(null),Ip(e,t,o,i);for(const a in e.propsOptions[0])a in o||(o[a]=void 0);Up(t||{},o,e),n?e.props=r?o:q1(o):e.type.props?e.props=o:e.props=i,e.attrs=i}function Qh(e,t,n,r){const{props:o,attrs:i,vnode:{patchFlag:a}}=e,s=le(o),[u]=e.propsOptions;let l=!1;if(!(e.type.__hmrId||e.parent&&e.parent.type.__hmrId)&&(r||a>0)&&!(a&16)){if(a&8){const c=e.vnode.dynamicProps;for(let d=0;d<c.length;d++){let p=c[d];if(aa(e.emitsOptions,p))continue;const f=t[p];if(u)if(fe(i,p))f!==i[p]&&(i[p]=f,l=!0);else{const h=Zt(p);o[h]=xs(u,s,h,f,e,!1)}else f!==i[p]&&(i[p]=f,l=!0)}}}else{Ip(e,t,o,i)&&(l=!0);let c;for(const d in s)(!t||!fe(t,d)&&((c=kn(d))===d||!fe(t,c)))&&(u?n&&(n[d]!==void 0||n[c]!==void 0)&&(o[d]=xs(u,s,d,void 0,e,!0)):delete o[d]);if(i!==s)for(const d in i)(!t||!fe(t,d)&&!0)&&(delete i[d],l=!0)}l&&rn(e,"set","$attrs"),Up(t||{},o,e)}function Ip(e,t,n,r){const[o,i]=e.propsOptions;let a=!1,s;if(t)for(let u in t){if(ri(u))continue;const l=t[u];let c;o&&fe(o,c=Zt(u))?!i||!i.includes(c)?n[c]=l:(s||(s={}))[c]=l:aa(e.emitsOptions,u)||(!(u in r)||l!==r[u])&&(r[u]=l,a=!0)}if(i){const u=le(n),l=s||ke;for(let c=0;c<i.length;c++){const d=i[c];n[d]=xs(o,u,d,l[d],e,!fe(l,d))}}return a}function xs(e,t,n,r,o,i){const a=e[n];if(a!=null){const s=fe(a,"default");if(s&&r===void 0){const u=a.default;if(a.type!==Function&&ae(u)){const{propsDefaults:l}=o;n in l?r=l[n]:(_r(o),r=l[n]=u.call(null,t),Gn())}else r=u}a[0]&&(i&&!s?r=!1:a[1]&&(r===""||r===kn(n))&&(r=!0))}return r}function Fp(e,t,n=!1){const r=t.propsCache,o=r.get(e);if(o)return o;const i=e.props,a={},s=[];let u=!1;if(!ae(e)){const c=d=>{u=!0;const[p,f]=Fp(d,t,!0);Re(a,p),f&&s.push(...f)};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}if(!i&&!u)return r.set(e,yr),yr;if(Y(i))for(let c=0;c<i.length;c++){Te(i[c])||j("props must be strings when using array syntax.",i[c]);const d=Zt(i[c]);Ol(d)&&(a[d]=ke)}else if(i){Oe(i)||j("invalid props options",i);for(const c in i){const d=Zt(c);if(Ol(d)){const p=i[c],f=a[d]=Y(p)||ae(p)?{type:p}:p;if(f){const h=$l(Boolean,f.type),m=$l(String,f.type);f[0]=h>-1,f[1]=m<0||h<m,(h>-1||fe(f,"default"))&&s.push(d)}}}}const l=[a,s];return r.set(e,l),l}function Ol(e){return e[0]!=="$"?!0:(j(`Invalid prop name: "${e}" is a reserved property.`),!1)}function ks(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function Al(e,t){return ks(e)===ks(t)}function $l(e,t){return Y(t)?t.findIndex(n=>Al(n,e)):ae(t)&&Al(t,e)?0:-1}function Up(e,t,n){const r=le(t),o=n.propsOptions[0];for(const i in o){let a=o[i];a!=null&&Kh(i,r[i],a,!fe(e,i)&&!fe(e,kn(i)))}}function Kh(e,t,n,r){const{type:o,required:i,validator:a}=n;if(i&&r){j('Missing required prop: "'+e+'"');return}if(!(t==null&&!n.required)){if(o!=null&&o!==!0){let s=!1;const u=Y(o)?o:[o],l=[];for(let c=0;c<u.length&&!s;c++){const{valid:d,expectedType:p}=Xh(t,u[c]);l.push(p||""),s=d}if(!s){j(eg(e,t,l));return}}a&&!a(t)&&j('Invalid prop: custom validator check failed for prop "'+e+'".')}}const Yh=Sn("String,Number,Boolean,Function,Symbol,BigInt");function Xh(e,t){let n;const r=ks(t);if(Yh(r)){const o=typeof e;n=o===r.toLowerCase(),!n&&o==="object"&&(n=e instanceof t)}else r==="Object"?n=Oe(e):r==="Array"?n=Y(e):r==="null"?n=e===null:n=e instanceof t;return{valid:n,expectedType:r}}function eg(e,t,n){let r=`Invalid prop: type check failed for prop "${e}". Expected ${n.map(Jn).join(" | ")}`;const o=n[0],i=bu(t),a=Tl(t,o),s=Tl(t,i);return n.length===1&&Pl(o)&&!tg(o,i)&&(r+=` with value ${a}`),r+=`, got ${i} `,Pl(i)&&(r+=`with value ${s}.`),r}function Tl(e,t){return t==="String"?`"${e}"`:t==="Number"?`${Number(e)}`:`${e}`}function Pl(e){return["string","number","boolean"].some(n=>e.toLowerCase()===n)}function tg(...e){return e.some(t=>t.toLowerCase()==="boolean")}const jp=e=>e[0]==="_"||e==="$stable",Pu=e=>Y(e)?e.map($t):[$t(e)],ng=(e,t,n)=>{if(t._n)return t;const r=yh((...o)=>(Ie&&j(`Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`),Pu(t(...o))),n);return r._c=!1,r},Bp=(e,t,n)=>{const r=e._ctx;for(const o in e){if(jp(o))continue;const i=e[o];if(ae(i))t[o]=ng(o,i,r);else if(i!=null){j(`Non-function value encountered for slot "${o}". Prefer function slots for better performance.`);const a=Pu(i);t[o]=()=>a}}},Np=(e,t)=>{Au(e.vnode)||j("Non-function value encountered for default slot. Prefer function slots for better performance.");const n=Pu(t);e.slots.default=()=>n},rg=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=le(t),Ei(t,"_",n)):Bp(t,e.slots={})}else e.slots={},t&&Np(e,t);Ei(e.slots,ca,1)},og=(e,t,n)=>{const{vnode:r,slots:o}=e;let i=!0,a=ke;if(r.shapeFlag&32){const s=t._;s?qn?Re(o,t):n&&s===1?i=!1:(Re(o,t),!n&&s===1&&delete o._):(i=!t.$stable,Bp(t,o)),a=t}else t&&(Np(e,t),a={default:1});if(i)for(const s in o)!jp(s)&&!(s in a)&&delete o[s]};function Hp(){return{app:null,config:{isNativeTag:Vd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ig=0;function ag(e,t){return function(r,o=null){ae(r)||(r=Object.assign({},r)),o!=null&&!Oe(o)&&(j("root props passed to app.mount() must be an object."),o=null);const i=Hp(),a=new Set;let s=!1;const u=i.app={_uid:ig++,_component:r,_props:o,_container:null,_context:i,_instance:null,version:Rl,get config(){return i.config},set config(l){j("app.config cannot be replaced. Modify individual options instead.")},use(l,...c){return a.has(l)?j("Plugin has already been applied to target app."):l&&ae(l.install)?(a.add(l),l.install(u,...c)):ae(l)?(a.add(l),l(u,...c)):j('A plugin must either be a function or an object with an "install" function.'),u},mixin(l){return i.mixins.includes(l)?j("Mixin has already been applied to target app"+(l.name?`: ${l.name}`:"")):i.mixins.push(l),u},component(l,c){return _s(l,i.config),c?(i.components[l]&&j(`Component "${l}" has already been registered in target app.`),i.components[l]=c,u):i.components[l]},directive(l,c){return $p(l),c?(i.directives[l]&&j(`Directive "${l}" has already been registered in target app.`),i.directives[l]=c,u):i.directives[l]},mount(l,c,d){if(s)j("App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`");else{l.__vue_app__&&j("There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first.");const p=ut(r,o);return p.appContext=i,i.reload=()=>{e(_n(p),l,d)},c&&t?t(p,l):e(p,l,d),s=!0,u._container=l,l.__vue_app__=u,u._instance=p.component,dh(u,Rl),pa(p.component)||p.component.proxy}},unmount(){s?(e(null,u._container),u._instance=null,ph(u),delete u._container.__vue_app__):j("Cannot unmount an app that is not mounted.")},provide(l,c){return l in i.provides&&j(`App already provides property with key "${String(l)}". It will be overwritten with the new value.`),i.provides[l]=c,u}};return u}}function vs(e,t,n,r,o=!1){if(Y(e)){e.forEach((p,f)=>vs(p,t&&(Y(t)?t[f]:t),n,r,o));return}if(oo(r)&&!o)return;const i=r.shapeFlag&4?pa(r.component)||r.component.proxy:r.el,a=o?null:i,{i:s,r:u}=e;if(!s){j("Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.");return}const l=t&&t.r,c=s.refs===ke?s.refs={}:s.refs,d=s.setupState;if(l!=null&&l!==u&&(Te(l)?(c[l]=null,fe(d,l)&&(d[l]=null)):$e(l)&&(l.value=null)),ae(u))tn(u,s,12,[a,c]);else{const p=Te(u),f=$e(u);if(p||f){const h=()=>{if(e.f){const m=p?c[u]:u.value;o?Y(m)&&gu(m,i):Y(m)?m.includes(i)||m.push(i):p?(c[u]=[i],fe(d,u)&&(d[u]=c[u])):(u.value=[i],e.k&&(c[e.k]=u.value))}else p?(c[u]=a,fe(d,u)&&(d[u]=a)):$e(u)?(u.value=a,e.k&&(c[e.k]=a)):j("Invalid template ref type:",u,`(${typeof u})`)};a?(h.id=-1,at(h,n)):h()}else j("Invalid template ref type:",u,`(${typeof u})`)}}let Nr,gn;function Kt(e,t){e.appContext.config.performance&&Mi()&&gn.mark(`vue-${t}-${e.uid}`),gh(e,t,Mi()?gn.now():Date.now())}function Yt(e,t){if(e.appContext.config.performance&&Mi()){const n=`vue-${t}-${e.uid}`,r=n+":end";gn.mark(r),gn.measure(`<${fa(e,e.type)}> ${t}`,n,r),gn.clearMarks(n),gn.clearMarks(r)}mh(e,t,Mi()?gn.now():Date.now())}function Mi(){return Nr!==void 0||(typeof window!="undefined"&&window.performance?(Nr=!0,gn=window.performance):Nr=!1),Nr}function sg(){const e=[];if(e.length){const t=e.length>1;console.warn(`Feature flag${t?"s":""} ${e.join(", ")} ${t?"are":"is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`)}}const at=Sh;function ug(e){return lg(e)}function lg(e,t){sg();const n=Gd();n.__VUE__=!0,kp(n.__VUE_DEVTOOLS_GLOBAL_HOOK__,n);const{insert:r,remove:o,patchProp:i,createElement:a,createText:s,createComment:u,setText:l,setElementText:c,parentNode:d,nextSibling:p,setScopeId:f=st,cloneNode:h,insertStaticContent:m}=e,C=(g,b,L,M=null,z=null,w=null,k=!1,y=null,O=qn?!1:!!b.dynamicChildren)=>{if(g===b)return;g&&!Hr(g,b)&&(M=ge(g),wt(g,z,w,!0),g=null),b.patchFlag===-2&&(O=!1,b.dynamicChildren=null);const{type:A,ref:B,shapeFlag:U}=b;switch(A){case la:x(g,b,L,M);break;case lt:_(g,b,L,M);break;case li:g==null?I(b,L,M,k):q(g,b,L,k);break;case xt:Ve(g,b,L,M,z,w,k,y,O);break;default:U&1?W(g,b,L,M,z,w,k,y,O):U&6?De(g,b,L,M,z,w,k,y,O):U&64||U&128?A.process(g,b,L,M,z,w,k,y,O,ne):j("Invalid VNode type:",A,`(${typeof A})`)}B!=null&&z&&vs(B,g&&g.ref,w,b||g,!b)},x=(g,b,L,M)=>{if(g==null)r(b.el=s(b.children),L,M);else{const z=b.el=g.el;b.children!==g.children&&l(z,b.children)}},_=(g,b,L,M)=>{g==null?r(b.el=u(b.children||""),L,M):b.el=g.el},I=(g,b,L,M)=>{[g.el,g.anchor]=m(g.children,b,L,M,g.el,g.anchor)},q=(g,b,L,M)=>{if(b.children!==g.children){const z=p(g.anchor);D(g),[b.el,b.anchor]=m(b.children,L,z,M)}else b.el=g.el,b.anchor=g.anchor},H=({el:g,anchor:b},L,M)=>{let z;for(;g&&g!==b;)z=p(g),r(g,L,M),g=z;r(b,L,M)},D=({el:g,anchor:b})=>{let L;for(;g&&g!==b;)L=p(g),o(g),g=L;o(b)},W=(g,b,L,M,z,w,k,y,O)=>{k=k||b.type==="svg",g==null?v(b,L,M,z,w,k,y,O):N(g,b,z,w,k,y,O)},v=(g,b,L,M,z,w,k,y)=>{let O,A;const{type:B,props:U,shapeFlag:V,transition:ee,patchFlag:me,dirs:_e}=g;{if(O=g.el=a(g.type,w,U&&U.is,U),V&8?c(O,g.children):V&16&&P(g.children,O,null,M,z,w&&B!=="foreignObject",k,y),_e&&On(g,null,M,"created"),U){for(const Ae in U)Ae!=="value"&&!ri(Ae)&&i(O,Ae,null,U[Ae],w,g.children,M,z,G);"value"in U&&i(O,"value",null,U.value),(A=U.onVnodeBeforeMount)&&Ut(A,M,g)}E(O,g,g.scopeId,k,M)}Object.defineProperty(O,"__vnode",{value:g,enumerable:!1}),Object.defineProperty(O,"__vueParentComponent",{value:M,enumerable:!1}),_e&&On(g,null,M,"beforeMount");const Ee=(!z||z&&!z.pendingBranch)&&ee&&!ee.persisted;Ee&&ee.beforeEnter(O),r(O,b,L),((A=U&&U.onVnodeMounted)||Ee||_e)&&at(()=>{A&&Ut(A,M,g),Ee&&ee.enter(O),_e&&On(g,null,M,"mounted")},z)},E=(g,b,L,M,z)=>{if(L&&f(g,L),M)for(let w=0;w<M.length;w++)f(g,M[w]);if(z){let w=z.subTree;if(w.patchFlag>0&&w.patchFlag&2048&&(w=Ep(w.children)||w),b===w){const k=z.vnode;E(g,k,k.scopeId,k.slotScopeIds,z.parent)}}},P=(g,b,L,M,z,w,k,y,O=0)=>{for(let A=O;A<g.length;A++){const B=g[A]=y?fn(g[A]):$t(g[A]);C(null,B,b,L,M,z,w,k,y)}},N=(g,b,L,M,z,w,k)=>{const y=b.el=g.el;let{patchFlag:O,dynamicChildren:A,dirs:B}=b;O|=g.patchFlag&16;const U=g.props||ke,V=b.props||ke;let ee;L&&An(L,!1),(ee=V.onVnodeBeforeUpdate)&&Ut(ee,L,b,g),B&&On(b,g,L,"beforeUpdate"),L&&An(L,!0),qn&&(O=0,k=!1,A=null);const me=z&&b.type!=="foreignObject";if(A?(Q(g.dynamicChildren,A,y,L,M,me,w),L&&L.type.__hmrId&&ui(g,b)):k||Ct(g,b,y,null,L,M,me,w,!1),O>0){if(O&16)K(y,b,U,V,L,M,z);else if(O&2&&U.class!==V.class&&i(y,"class",null,V.class,z),O&4&&i(y,"style",U.style,V.style,z),O&8){const _e=b.dynamicProps;for(let Ee=0;Ee<_e.length;Ee++){const Ae=_e[Ee],St=U[Ae],sr=V[Ae];(sr!==St||Ae==="value")&&i(y,Ae,St,sr,z,g.children,L,M,G)}}O&1&&g.children!==b.children&&c(y,b.children)}else!k&&A==null&&K(y,b,U,V,L,M,z);((ee=V.onVnodeUpdated)||B)&&at(()=>{ee&&Ut(ee,L,b,g),B&&On(b,g,L,"updated")},M)},Q=(g,b,L,M,z,w,k)=>{for(let y=0;y<b.length;y++){const O=g[y],A=b[y],B=O.el&&(O.type===xt||!Hr(O,A)||O.shapeFlag&70)?d(O.el):L;C(O,A,B,null,M,z,w,k,!0)}},K=(g,b,L,M,z,w,k)=>{if(L!==M){for(const y in M){if(ri(y))continue;const O=M[y],A=L[y];O!==A&&y!=="value"&&i(g,y,A,O,k,b.children,z,w,G)}if(L!==ke)for(const y in L)!ri(y)&&!(y in M)&&i(g,y,L[y],null,k,b.children,z,w,G);"value"in M&&i(g,"value",L.value,M.value)}},Ve=(g,b,L,M,z,w,k,y,O)=>{const A=b.el=g?g.el:s(""),B=b.anchor=g?g.anchor:s("");let{patchFlag:U,dynamicChildren:V,slotScopeIds:ee}=b;(qn||U&2048)&&(U=0,O=!1,V=null),ee&&(y=y?y.concat(ee):ee),g==null?(r(A,L,M),r(B,L,M),P(b.children,L,B,z,w,k,y,O)):U>0&&U&64&&V&&g.dynamicChildren?(Q(g.dynamicChildren,V,L,z,w,k,y),z&&z.type.__hmrId?ui(g,b):(b.key!=null||z&&b===z.subTree)&&ui(g,b,!0)):Ct(g,b,L,B,z,w,k,y,O)},De=(g,b,L,M,z,w,k,y,O)=>{b.slotScopeIds=y,g==null?b.shapeFlag&512?z.ctx.activate(b,L,M,k,O):pe(b,L,M,z,w,k,O):de(g,b,O)},pe=(g,b,L,M,z,w,k)=>{const y=g.component=xg(g,M,z);if(y.type.__hmrId&&sh(y),ii(g),Kt(y,"mount"),Au(g)&&(y.ctx.renderer=ne),Kt(y,"init"),vg(y),Yt(y,"init"),y.asyncDep){if(z&&z.registerDep(y,ie),!g.el){const O=y.subTree=ut(lt);_(null,O,b,L)}return}ie(y,g,b,L,z,w,k),ai(),Yt(y,"mount")},de=(g,b,L)=>{const M=b.component=g.component;if(_h(g,b,L))if(M.asyncDep&&!M.asyncResolved){ii(b),be(M,b,L),ai();return}else M.next=b,ih(M.update),M.update();else b.el=g.el,M.vnode=b},ie=(g,b,L,M,z,w,k)=>{const y=()=>{if(g.isMounted){let{next:B,bu:U,u:V,parent:ee,vnode:me}=g,_e=B,Ee;ii(B||g.vnode),An(g,!1),B?(B.el=me.el,be(g,B,k)):B=me,U&&fr(U),(Ee=B.props&&B.props.onVnodeBeforeUpdate)&&Ut(Ee,ee,B,me),An(g,!0),Kt(g,"render");const Ae=Pa(g);Yt(g,"render");const St=g.subTree;g.subTree=Ae,Kt(g,"patch"),C(St,Ae,d(St.el),ge(St),g,z,w),Yt(g,"patch"),B.el=Ae.el,_e===null&&Ch(g,Ae.el),V&&at(V,z),(Ee=B.props&&B.props.onVnodeUpdated)&&at(()=>Ut(Ee,ee,B,me),z),vp(g),ai()}else{let B;const{el:U,props:V}=b,{bm:ee,m:me,parent:_e}=g,Ee=oo(b);if(An(g,!1),ee&&fr(ee),!Ee&&(B=V&&V.onVnodeBeforeMount)&&Ut(B,_e,b),An(g,!0),U&&ve){const Ae=()=>{Kt(g,"render"),g.subTree=Pa(g),Yt(g,"render"),Kt(g,"hydrate"),ve(U,g.subTree,g,z,null),Yt(g,"hydrate")};Ee?b.type.__asyncLoader().then(()=>!g.isUnmounted&&Ae()):Ae()}else{Kt(g,"render");const Ae=g.subTree=Pa(g);Yt(g,"render"),Kt(g,"patch"),C(null,Ae,L,M,g,z,w),Yt(g,"patch"),b.el=Ae.el}if(me&&at(me,z),!Ee&&(B=V&&V.onVnodeMounted)){const Ae=b;at(()=>Ut(B,_e,Ae),z)}(b.shapeFlag&256||_e&&oo(_e.vnode)&&_e.vnode.shapeFlag&256)&&g.a&&at(g.a,z),g.isMounted=!0,fh(g),b=L=M=null}},O=g.effect=new xu(y,()=>Eu(A),g.scope),A=g.update=()=>O.run();A.id=g.uid,An(g,!0),O.onTrack=g.rtc?B=>fr(g.rtc,B):void 0,O.onTrigger=g.rtg?B=>fr(g.rtg,B):void 0,A.ownerInstance=g,A()},be=(g,b,L)=>{b.component=g;const M=g.vnode.props;g.vnode=b,g.next=null,Qh(g,b.props,M,L),og(g,b.children,L),ir(),ia(void 0,g.update),ar()},Ct=(g,b,L,M,z,w,k,y,O=!1)=>{const A=g&&g.children,B=g?g.shapeFlag:0,U=b.children,{patchFlag:V,shapeFlag:ee}=b;if(V>0){if(V&128){gt(A,U,L,M,z,w,k,y,O);return}else if(V&256){Xe(A,U,L,M,z,w,k,y,O);return}}ee&8?(B&16&&G(A,z,w),U!==A&&c(L,U)):B&16?ee&16?gt(A,U,L,M,z,w,k,y,O):G(A,z,w,!0):(B&8&&c(L,""),ee&16&&P(U,L,M,z,w,k,y,O))},Xe=(g,b,L,M,z,w,k,y,O)=>{g=g||yr,b=b||yr;const A=g.length,B=b.length,U=Math.min(A,B);let V;for(V=0;V<U;V++){const ee=b[V]=O?fn(b[V]):$t(b[V]);C(g[V],ee,L,null,z,w,k,y,O)}A>B?G(g,z,w,!0,!1,U):P(b,L,M,z,w,k,y,O,U)},gt=(g,b,L,M,z,w,k,y,O)=>{let A=0;const B=b.length;let U=g.length-1,V=B-1;for(;A<=U&&A<=V;){const ee=g[A],me=b[A]=O?fn(b[A]):$t(b[A]);if(Hr(ee,me))C(ee,me,L,null,z,w,k,y,O);else break;A++}for(;A<=U&&A<=V;){const ee=g[U],me=b[V]=O?fn(b[V]):$t(b[V]);if(Hr(ee,me))C(ee,me,L,null,z,w,k,y,O);else break;U--,V--}if(A>U){if(A<=V){const ee=V+1,me=ee<B?b[ee].el:M;for(;A<=V;)C(null,b[A]=O?fn(b[A]):$t(b[A]),L,me,z,w,k,y,O),A++}}else if(A>V)for(;A<=U;)wt(g[A],z,w,!0),A++;else{const ee=A,me=A,_e=new Map;for(A=me;A<=V;A++){const et=b[A]=O?fn(b[A]):$t(b[A]);et.key!=null&&(_e.has(et.key)&&j("Duplicate keys found during update:",JSON.stringify(et.key),"Make sure keys are unique."),_e.set(et.key,A))}let Ee,Ae=0;const St=V-me+1;let sr=!1,al=0;const Br=new Array(St);for(A=0;A<St;A++)Br[A]=0;for(A=ee;A<=U;A++){const et=g[A];if(Ae>=St){wt(et,z,w,!0);continue}let Ft;if(et.key!=null)Ft=_e.get(et.key);else for(Ee=me;Ee<=V;Ee++)if(Br[Ee-me]===0&&Hr(et,b[Ee])){Ft=Ee;break}Ft===void 0?wt(et,z,w,!0):(Br[Ft-me]=A+1,Ft>=al?al=Ft:sr=!0,C(et,b[Ft],L,null,z,w,k,y,O),Ae++)}const sl=sr?cg(Br):yr;for(Ee=sl.length-1,A=St-1;A>=0;A--){const et=me+A,Ft=b[et],ul=et+1<B?b[et+1].el:M;Br[A]===0?C(null,Ft,L,ul,z,w,k,y,O):sr&&(Ee<0||A!==sl[Ee]?Et(Ft,L,ul,2):Ee--)}}},Et=(g,b,L,M,z=null)=>{const{el:w,type:k,transition:y,children:O,shapeFlag:A}=g;if(A&6){Et(g.component.subTree,b,L,M);return}if(A&128){g.suspense.move(b,L,M);return}if(A&64){k.move(g,b,L,ne);return}if(k===xt){r(w,b,L);for(let U=0;U<O.length;U++)Et(O[U],b,L,M);r(g.anchor,b,L);return}if(k===li){H(g,b,L);return}if(M!==2&&A&1&&y)if(M===0)y.beforeEnter(w),r(w,b,L),at(()=>y.enter(w),z);else{const{leave:U,delayLeave:V,afterLeave:ee}=y,me=()=>r(w,b,L),_e=()=>{U(w,()=>{me(),ee&&ee()})};V?V(w,me,_e):_e()}else r(w,b,L)},wt=(g,b,L,M=!1,z=!1)=>{const{type:w,props:k,ref:y,children:O,dynamicChildren:A,shapeFlag:B,patchFlag:U,dirs:V}=g;if(y!=null&&vs(y,null,L,g,!0),B&256){b.ctx.deactivate(g);return}const ee=B&1&&V,me=!oo(g);let _e;if(me&&(_e=k&&k.onVnodeBeforeUnmount)&&Ut(_e,b,g),B&6)Z(g.component,L,M);else{if(B&128){g.suspense.unmount(L,M);return}ee&&On(g,null,b,"beforeUnmount"),B&64?g.type.remove(g,b,L,z,ne,M):A&&(w!==xt||U>0&&U&64)?G(A,b,L,!1,!0):(w===xt&&U&384||!z&&B&16)&&G(O,b,L),M&&$(g)}(me&&(_e=k&&k.onVnodeUnmounted)||ee)&&at(()=>{_e&&Ut(_e,b,g),ee&&On(g,null,b,"unmounted")},L)},$=g=>{const{type:b,el:L,anchor:M,transition:z}=g;if(b===xt){g.patchFlag>0&&g.patchFlag&2048&&z&&!z.persisted?g.children.forEach(k=>{k.type===lt?o(k.el):$(k)}):J(L,M);return}if(b===li){D(g);return}const w=()=>{o(L),z&&!z.persisted&&z.afterLeave&&z.afterLeave()};if(g.shapeFlag&1&&z&&!z.persisted){const{leave:k,delayLeave:y}=z,O=()=>k(L,w);y?y(g.el,w,O):O()}else w()},J=(g,b)=>{let L;for(;g!==b;)L=p(g),o(g),g=L;o(b)},Z=(g,b,L)=>{g.type.__hmrId&&uh(g);const{bum:M,scope:z,update:w,subTree:k,um:y}=g;M&&fr(M),z.stop(),w&&(w.active=!1,wt(k,g,b,L)),y&&at(y,b),at(()=>{g.isUnmounted=!0},b),b&&b.pendingBranch&&!b.isUnmounted&&g.asyncDep&&!g.asyncResolved&&g.suspenseId===b.pendingId&&(b.deps--,b.deps===0&&b.resolve()),hh(g)},G=(g,b,L,M=!1,z=!1,w=0)=>{for(let k=w;k<g.length;k++)wt(g[k],b,L,M,z)},ge=g=>g.shapeFlag&6?ge(g.component.subTree):g.shapeFlag&128?g.suspense.next():p(g.anchor||g.el),Le=(g,b,L)=>{g==null?b._vnode&&wt(b._vnode,null,null,!0):C(b._vnode||null,g,b,null,null,null,L),wp(),b._vnode=g},ne={p:C,um:wt,m:Et,r:$,mt:pe,mc:P,pc:Ct,pbc:Q,n:ge,o:e};let se,ve;return t&&([se,ve]=t(ne)),{render:Le,hydrate:se,createApp:ag(Le,se)}}function An({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function ui(e,t,n=!1){const r=e.children,o=t.children;if(Y(r)&&Y(o))for(let i=0;i<r.length;i++){const a=r[i];let s=o[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=o[i]=fn(o[i]),s.el=a.el),n||ui(a,s)),s.type===lt&&!s.el&&(s.el=a.el)}}function cg(e){const t=e.slice(),n=[0];let r,o,i,a,s;const u=e.length;for(r=0;r<u;r++){const l=e[r];if(l!==0){if(o=n[n.length-1],e[o]<l){t[r]=o,n.push(r);continue}for(i=0,a=n.length-1;i<a;)s=i+a>>1,e[n[s]]<l?i=s+1:a=s;l<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,a=n[i-1];i-- >0;)n[i]=a,a=t[a];return n}const dg=e=>e.__isTeleport,xt=Symbol("Fragment"),la=Symbol("Text"),lt=Symbol("Comment"),li=Symbol("Static"),io=[];let Tt=null;function Vp(e=!1){io.push(Tt=e?null:[])}function pg(){io.pop(),Tt=io[io.length-1]||null}let ho=1;function zl(e){ho+=e}function qp(e){return e.dynamicChildren=ho>0?Tt||yr:null,pg(),ho>0&&Tt&&Tt.push(e),e}function $9(e,t,n,r,o,i){return qp(Wp(e,t,n,r,o,i,!0))}function Zp(e,t,n,r,o){return qp(ut(e,t,n,r,o,!0))}function vr(e){return e?e.__v_isVNode===!0:!1}function Hr(e,t){return t.shapeFlag&6&&gr.has(t.type)?!1:e.type===t.type&&e.key===t.key}const fg=(...e)=>hg(...e),ca="__vInternal",Gp=({key:e})=>e!=null?e:null,ci=({ref:e,ref_key:t,ref_for:n})=>e!=null?Te(e)||$e(e)||ae(e)?{i:Ue,r:e,k:t,f:!!n}:e:null;function Wp(e,t=null,n=null,r=0,o=null,i=e===xt?0:1,a=!1,s=!1){const u={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Gp(t),ref:t&&ci(t),scopeId:sa,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:o,dynamicChildren:null,appContext:null};return s?(zu(u,n),i&128&&e.normalize(u)):n&&(u.shapeFlag|=Te(n)?8:16),u.key!==u.key&&j("VNode created with invalid key (NaN). VNode type:",u.type),ho>0&&!a&&Tt&&(u.patchFlag>0||i&6)&&u.patchFlag!==32&&Tt.push(u),u}const ut=fg;function hg(e,t=null,n=null,r=0,o=null,i=!1){if((!e||e===Tp)&&(e||j(`Invalid vnode type when creating vnode: ${e}.`),e=lt),vr(e)){const s=_n(e,t,!0);return n&&zu(s,n),ho>0&&!i&&Tt&&(s.shapeFlag&6?Tt[Tt.indexOf(e)]=s:Tt.push(s)),s.patchFlag|=-2,s}if(Yp(e)&&(e=e.__vccOpts),t){t=gg(t);let{class:s,style:u}=t;s&&!Te(s)&&(t.class=Ki(s)),Oe(u)&&(Li(u)&&!Y(u)&&(u=Re({},u)),t.style=Qi(u))}const a=Te(e)?1:Eh(e)?128:dg(e)?64:Oe(e)?4:ae(e)?2:0;return a&4&&Li(e)&&(e=le(e),j("Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",`
Component that was made reactive: `,e)),Wp(e,t,n,r,o,a,i,!0)}function gg(e){return e?Li(e)||ca in e?Re({},e):e:null}function _n(e,t,n=!1){const{props:r,ref:o,patchFlag:i,children:a}=e,s=t?bg(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&Gp(s),ref:t&&t.ref?n&&o?Y(o)?o.concat(ci(t)):[o,ci(t)]:ci(t):o,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:i===-1&&Y(a)?a.map(Jp):a,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==xt?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&_n(e.ssContent),ssFallback:e.ssFallback&&_n(e.ssFallback),el:e.el,anchor:e.anchor}}function Jp(e){const t=_n(e);return Y(e.children)&&(t.children=e.children.map(Jp)),t}function mg(e=" ",t=0){return ut(la,null,e,t)}function T9(e="",t=!1){return t?(Vp(),Zp(lt,null,e)):ut(lt,null,e)}function $t(e){return e==null||typeof e=="boolean"?ut(lt):Y(e)?ut(xt,null,e.slice()):typeof e=="object"?fn(e):ut(la,null,String(e))}function fn(e){return e.el===null||e.memo?e:_n(e)}function zu(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(Y(t))n=16;else if(typeof t=="object")if(r&65){const o=t.default;o&&(o._c&&(o._d=!1),zu(e,o()),o._c&&(o._d=!0));return}else{n=32;const o=t._;!o&&!(ca in t)?t._ctx=Ue:o===3&&Ue&&(Ue.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else ae(t)?(t={default:t,_ctx:Ue},n=32):(t=String(t),r&64?(n=16,t=[mg(t)]):n=8);e.children=t,e.shapeFlag|=n}function bg(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const o in r)if(o==="class")t.class!==r.class&&(t.class=Ki([t.class,r.class]));else if(o==="style")t.style=Qi([t.style,r.style]);else if(Oo(o)){const i=t[o],a=r[o];a&&i!==a&&!(Y(i)&&i.includes(a))&&(t[o]=i?[].concat(i,a):a)}else o!==""&&(t[o]=r[o])}return t}function Ut(e,t,n,r=null){Pt(e,t,7,[n,r])}const wg=Hp();let yg=0;function xg(e,t,n){const r=e.type,o=(t?t.appContext:e.appContext)||wg,i={uid:yg++,vnode:e,type:r,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,scope:new Wd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Fp(r,o),emitsOptions:Cp(r,o),emit:null,emitted:null,propsDefaults:ke,inheritAttrs:r.inheritAttrs,ctx:ke,data:ke,props:ke,attrs:ke,slots:ke,refs:ke,setupState:ke,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx=jh(i),i.root=t?t.root:i,i.emit=wh.bind(null,i),e.ce&&e.ce(i),i}let Ie=null;const da=()=>Ie||Ue,_r=e=>{Ie=e,e.scope.on()},Gn=()=>{Ie&&Ie.scope.off(),Ie=null},kg=Sn("slot,component");function _s(e,t){const n=t.isNativeTag||Vd;(kg(e)||n(e))&&j("Do not use built-in or reserved HTML elements as component id: "+e)}function Qp(e){return e.vnode.shapeFlag&4}let go=!1;function vg(e,t=!1){go=t;const{props:n,children:r}=e.vnode,o=Qp(e);Jh(e,n,o,t),rg(e,r);const i=o?_g(e,t):void 0;return go=!1,i}function _g(e,t){var n;const r=e.type;{if(r.name&&_s(r.name,e.appContext.config),r.components){const i=Object.keys(r.components);for(let a=0;a<i.length;a++)_s(i[a],e.appContext.config)}if(r.directives){const i=Object.keys(r.directives);for(let a=0;a<i.length;a++)$p(i[a])}r.compilerOptions&&Cg()&&j('"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.')}e.accessCache=Object.create(null),e.proxy=At(new Proxy(e.ctx,Mp)),Bh(e);const{setup:o}=r;if(o){const i=e.setupContext=o.length>1?Sg(e):null;_r(e),ir();const a=tn(o,e,0,[br(e.props),i]);if(ar(),Gn(),mu(a)){if(a.then(Gn,Gn),t)return a.then(s=>{Ml(e,s,t)}).catch(s=>{oa(s,e,0)});if(e.asyncDep=a,!e.suspense){const s=(n=r.name)!==null&&n!==void 0?n:"Anonymous";j(`Component <${s}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`)}}else Ml(e,a,t)}else Kp(e,t)}function Ml(e,t,n){ae(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Oe(t)?(vr(t)&&j("setup() should not return VNodes directly - return a render function instead."),e.devtoolsRawSetupState=t,e.setupState=pp(t),Nh(e)):t!==void 0&&j(`setup() should return an object. Received: ${t===null?"null":typeof t}`),Kp(e,n)}let Cs;const Cg=()=>!Cs;function Kp(e,t,n){const r=e.type;if(!e.render){if(!t&&Cs&&!r.render){const o=r.template;if(o){Kt(e,"compile");const{isCustomElement:i,compilerOptions:a}=e.appContext.config,{delimiters:s,compilerOptions:u}=r,l=Re(Re({isCustomElement:i,delimiters:s},a),u);r.render=Cs(o,l),Yt(e,"compile")}}e.render=r.render||st}_r(e),ir(),Vh(e),ar(),Gn(),!r.render&&e.render===st&&!t&&(r.template?j('Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'):j("Component is missing template or render function."))}function Eg(e){return new Proxy(e.attrs,{get(t,n){return Ti(),bt(e,"get","$attrs"),t[n]},set(){return j("setupContext.attrs is readonly."),!1},deleteProperty(){return j("setupContext.attrs is readonly."),!1}})}function Sg(e){const t=r=>{e.exposed&&j("expose() should be called only once per setup()."),e.exposed=r||{}};let n;return Object.freeze({get attrs(){return n||(n=Eg(e))},get slots(){return br(e.slots)},get emit(){return(r,...o)=>e.emit(r,...o)},expose:t})}function pa(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(pp(At(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in kr)return kr[n](e)}}))}const Lg=/(?:^|[-_])(\w)/g,Og=e=>e.replace(Lg,t=>t.toUpperCase()).replace(/[-_]/g,"");function Mu(e){return ae(e)&&e.displayName||e.name}function fa(e,t,n=!1){let r=Mu(t);if(!r&&t.__file){const o=t.__file.match(/([^/\\]+)\.\w+$/);o&&(r=o[1])}if(!r&&e&&e.parent){const o=i=>{for(const a in i)if(i[a]===t)return a};r=o(e.components||e.parent.type.components)||o(e.appContext.components)}return r?Og(r):n?"App":"Anonymous"}function Yp(e){return ae(e)&&"__vccOpts"in e}const kt=(e,t)=>K1(e,t,go);function Xp(e,t,n){const r=arguments.length;return r===2?Oe(t)&&!Y(t)?vr(t)?ut(e,null,[t]):ut(e,t):ut(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&vr(n)&&(n=[n]),ut(e,t,n))}function za(e){return!!(e&&e.__v_isShallow)}function Ag(){if(typeof window=="undefined")return;const e={style:"color:#3ba776"},t={style:"color:#0b1bc9"},n={style:"color:#b62e24"},r={style:"color:#9d288c"},o={header(d){return Oe(d)?d.__isVue?["div",e,"VueInstance"]:$e(d)?["div",{},["span",e,c(d)],"<",s(d.value),">"]:Vt(d)?["div",{},["span",e,za(d)?"ShallowReactive":"Reactive"],"<",s(d),`>${Qn(d)?" (readonly)":""}`]:Qn(d)?["div",{},["span",e,za(d)?"ShallowReadonly":"Readonly"],"<",s(d),">"]:null:null},hasBody(d){return d&&d.__isVue},body(d){if(d&&d.__isVue)return["div",{},...i(d.$)]}};function i(d){const p=[];d.type.props&&d.props&&p.push(a("props",le(d.props))),d.setupState!==ke&&p.push(a("setup",d.setupState)),d.data!==ke&&p.push(a("data",le(d.data)));const f=u(d,"computed");f&&p.push(a("computed",f));const h=u(d,"inject");return h&&p.push(a("injected",h)),p.push(["div",{},["span",{style:r.style+";opacity:0.66"},"$ (internal): "],["object",{object:d}]]),p}function a(d,p){return p=Re({},p),Object.keys(p).length?["div",{style:"line-height:1.25em;margin-bottom:0.6em"},["div",{style:"color:#476582"},d],["div",{style:"padding-left:1.25em"},...Object.keys(p).map(f=>["div",{},["span",r,f+": "],s(p[f],!1)])]]:["span",{}]}function s(d,p=!0){return typeof d=="number"?["span",t,d]:typeof d=="string"?["span",n,JSON.stringify(d)]:typeof d=="boolean"?["span",r,d]:Oe(d)?["object",{object:p?le(d):d}]:["span",n,String(d)]}function u(d,p){const f=d.type;if(ae(f))return;const h={};for(const m in d.ctx)l(f,m,p)&&(h[m]=d.ctx[m]);return h}function l(d,p,f){const h=d[f];if(Y(h)&&h.includes(p)||Oe(h)&&p in h||d.extends&&l(d.extends,p,f)||d.mixins&&d.mixins.some(m=>l(m,p,f)))return!0}function c(d){return za(d)?"ShallowRef":d.effect?"ComputedRef":"Ref"}window.devtoolsFormatters?window.devtoolsFormatters.push(o):window.devtoolsFormatters=[o]}const Rl="3.2.36",$g="http://www.w3.org/2000/svg",In=typeof document!="undefined"?document:null,Dl=In&&In.createElement("template"),Tg={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const o=t?In.createElementNS($g,e):In.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&o.setAttribute("multiple",r.multiple),o},createText:e=>In.createTextNode(e),createComment:e=>In.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>In.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,r,o,i){const a=n?n.previousSibling:t.lastChild;if(o&&(o===i||o.nextSibling))for(;t.insertBefore(o.cloneNode(!0),n),!(o===i||!(o=o.nextSibling)););else{Dl.innerHTML=r?`<svg>${e}</svg>`:e;const s=Dl.content;if(r){const u=s.firstChild;for(;u.firstChild;)s.appendChild(u.firstChild);s.removeChild(u)}t.insertBefore(s,n)}return[a?a.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function Pg(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function zg(e,t,n){const r=e.style,o=Te(n);if(n&&!o){for(const i in n)Es(r,i,n[i]);if(t&&!Te(t))for(const i in t)n[i]==null&&Es(r,i,"")}else{const i=r.display;o?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const Il=/\s*!important$/;function Es(e,t,n){if(Y(n))n.forEach(r=>Es(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=Mg(e,t);Il.test(n)?e.setProperty(kn(r),n.replace(Il,""),"important"):e[r]=n}}const Fl=["Webkit","Moz","ms"],Ma={};function Mg(e,t){const n=Ma[t];if(n)return n;let r=Zt(t);if(r!=="filter"&&r in e)return Ma[t]=r;r=Jn(r);for(let o=0;o<Fl.length;o++){const i=Fl[o]+r;if(i in e)return Ma[t]=i}return t}const Ul="http://www.w3.org/1999/xlink";function Rg(e,t,n,r,o){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Ul,t.slice(6,t.length)):e.setAttributeNS(Ul,t,n);else{const i=o1(t);n==null||i&&!Nd(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function Dg(e,t,n,r,o,i,a){if(t==="innerHTML"||t==="textContent"){r&&a(r,o,i),e[t]=n==null?"":n;return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const u=n==null?"":n;(e.value!==u||e.tagName==="OPTION")&&(e.value=u),n==null&&e.removeAttribute(t);return}let s=!1;if(n===""||n==null){const u=typeof e[t];u==="boolean"?n=Nd(n):n==null&&u==="string"?(n="",s=!0):u==="number"&&(n=0,s=!0)}try{e[t]=n}catch(u){j(`Failed setting prop "${t}" on <${e.tagName.toLowerCase()}>: value ${n} is invalid.`,u)}s&&e.removeAttribute(t)}const[e0,Ig]=(()=>{let e=Date.now,t=!1;if(typeof window!="undefined"){Date.now()>document.createEvent("Event").timeStamp&&(e=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);t=!!(n&&Number(n[1])<=53)}return[e,t]})();let Ss=0;const Fg=Promise.resolve(),Ug=()=>{Ss=0},jg=()=>Ss||(Fg.then(Ug),Ss=e0());function mn(e,t,n,r){e.addEventListener(t,n,r)}function Bg(e,t,n,r){e.removeEventListener(t,n,r)}function Ng(e,t,n,r,o=null){const i=e._vei||(e._vei={}),a=i[t];if(r&&a)a.value=r;else{const[s,u]=Hg(t);if(r){const l=i[t]=Vg(r,o);mn(e,s,l,u)}else a&&(Bg(e,s,a,u),i[t]=void 0)}}const jl=/(?:Once|Passive|Capture)$/;function Hg(e){let t;if(jl.test(e)){t={};let n;for(;n=e.match(jl);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[kn(e.slice(2)),t]}function Vg(e,t){const n=r=>{const o=r.timeStamp||e0();(Ig||o>=n.attached-1)&&Pt(qg(r,n.value),t,5,[r])};return n.value=e,n.attached=jg(),n}function qg(e,t){if(Y(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>o=>!o._stopped&&r&&r(o))}else return t}const Bl=/^on[a-z]/,Zg=(e,t,n,r,o=!1,i,a,s,u)=>{t==="class"?Pg(e,r,o):t==="style"?zg(e,n,r):Oo(t)?Ci(t)||Ng(e,t,n,r,a):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Gg(e,t,r,o))?Dg(e,t,r,i,a,s,u):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),Rg(e,t,r,o))};function Gg(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&Bl.test(t)&&ae(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Bl.test(t)&&Te(n)?!1:t in e}const Cr=e=>{const t=e.props["onUpdate:modelValue"]||!1;return Y(t)?n=>fr(t,n):t};function Wg(e){e.target.composing=!0}function Nl(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const P9={created(e,{modifiers:{lazy:t,trim:n,number:r}},o){e._assign=Cr(o);const i=r||o.props&&o.props.type==="number";mn(e,t?"change":"input",a=>{if(a.target.composing)return;let s=e.value;n&&(s=s.trim()),i&&(s=Si(s)),e._assign(s)}),n&&mn(e,"change",()=>{e.value=e.value.trim()}),t||(mn(e,"compositionstart",Wg),mn(e,"compositionend",Nl),mn(e,"change",Nl))},mounted(e,{value:t}){e.value=t==null?"":t},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:r,number:o}},i){if(e._assign=Cr(i),e.composing||document.activeElement===e&&e.type!=="range"&&(n||r&&e.value.trim()===t||(o||e.type==="number")&&Si(e.value)===t))return;const a=t==null?"":t;e.value!==a&&(e.value=a)}},z9={deep:!0,created(e,t,n){e._assign=Cr(n),mn(e,"change",()=>{const r=e._modelValue,o=mo(e),i=e.checked,a=e._assign;if(Y(r)){const s=hu(r,o),u=s!==-1;if(i&&!u)a(r.concat(o));else if(!i&&u){const l=[...r];l.splice(s,1),a(l)}}else if(zr(r)){const s=new Set(r);i?s.add(o):s.delete(o),a(s)}else a(t0(e,i))})},mounted:Hl,beforeUpdate(e,t,n){e._assign=Cr(n),Hl(e,t,n)}};function Hl(e,{value:t,oldValue:n},r){e._modelValue=t,Y(t)?e.checked=hu(t,r.props.value)>-1:zr(t)?e.checked=t.has(r.props.value):t!==n&&(e.checked=Lo(t,t0(e,!0)))}const M9={deep:!0,created(e,{value:t,modifiers:{number:n}},r){const o=zr(t);mn(e,"change",()=>{const i=Array.prototype.filter.call(e.options,a=>a.selected).map(a=>n?Si(mo(a)):mo(a));e._assign(e.multiple?o?new Set(i):i:i[0])}),e._assign=Cr(r)},mounted(e,{value:t}){Vl(e,t)},beforeUpdate(e,t,n){e._assign=Cr(n)},updated(e,{value:t}){Vl(e,t)}};function Vl(e,t){const n=e.multiple;if(n&&!Y(t)&&!zr(t)){j(`<select multiple v-model> expects an Array or Set value for its binding, but got ${Object.prototype.toString.call(t).slice(8,-1)}.`);return}for(let r=0,o=e.options.length;r<o;r++){const i=e.options[r],a=mo(i);if(n)Y(t)?i.selected=hu(t,a)>-1:i.selected=t.has(a);else if(Lo(mo(i),t)){e.selectedIndex!==r&&(e.selectedIndex=r);return}}!n&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}function mo(e){return"_value"in e?e._value:e.value}function t0(e,t){const n=t?"_trueValue":"_falseValue";return n in e?e[n]:t}const Jg=["ctrl","shift","alt","meta"],Qg={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>Jg.some(n=>e[`${n}Key`]&&!t.includes(n))},R9=(e,t)=>(n,...r)=>{for(let o=0;o<t.length;o++){const i=Qg[t[o]];if(i&&i(n,t))return}return e(n,...r)},Kg=Re({patchProp:Zg},Tg);let ql;function Yg(){return ql||(ql=ug(Kg))}const D9=(...e)=>{const t=Yg().createApp(...e);Xg(t),em(t);const{mount:n}=t;return t.mount=r=>{const o=tm(r);if(!o)return;const i=t._component;!ae(i)&&!i.render&&!i.template&&(i.template=o.innerHTML),o.innerHTML="";const a=n(o,!1,o instanceof SVGElement);return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),a},t};function Xg(e){Object.defineProperty(e.config,"isNativeTag",{value:t=>c1(t)||d1(t),writable:!1})}function em(e){{const t=e.config.isCustomElement;Object.defineProperty(e.config,"isCustomElement",{get(){return t},set(){j("The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead.")}});const n=e.config.compilerOptions,r='The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-dom';Object.defineProperty(e.config,"compilerOptions",{get(){return j(r),n},set(){j(r)}})}}function tm(e){if(Te(e)){const t=document.querySelector(e);return t||j(`Failed to mount app: mount target selector "${e}" returned null.`),t}return window.ShadowRoot&&e instanceof window.ShadowRoot&&e.mode==="closed"&&j('mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'),e}function nm(){Ag()}nm();var rm=!1;function Go(e,t,n){return Array.isArray(e)?(e.length=Math.max(e.length,t),e.splice(t,1,n),n):(e[t]=n,n)}function Ra(e,t){if(Array.isArray(e)){e.splice(t,1);return}delete e[t]}function om(){return n0().__VUE_DEVTOOLS_GLOBAL_HOOK__}function n0(){return typeof navigator!="undefined"&&typeof window!="undefined"?window:typeof global!="undefined"?global:{}}const im=typeof Proxy=="function",am="devtools-plugin:setup",sm="plugin:settings:set";let ur,Ls;function um(){var e;return ur!==void 0||(typeof window!="undefined"&&window.performance?(ur=!0,Ls=window.performance):typeof global!="undefined"&&((e=global.perf_hooks)===null||e===void 0?void 0:e.performance)?(ur=!0,Ls=global.perf_hooks.performance):ur=!1),ur}function lm(){return um()?Ls.now():Date.now()}class cm{constructor(t,n){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=t,this.hook=n;const r={};if(t.settings)for(const a in t.settings){const s=t.settings[a];r[a]=s.defaultValue}const o=`__vue-devtools-plugin-settings__${t.id}`;let i=Object.assign({},r);try{const a=localStorage.getItem(o),s=JSON.parse(a);Object.assign(i,s)}catch{}this.fallbacks={getSettings(){return i},setSettings(a){try{localStorage.setItem(o,JSON.stringify(a))}catch{}i=a},now(){return lm()}},n&&n.on(sm,(a,s)=>{a===this.plugin.id&&this.fallbacks.setSettings(s)}),this.proxiedOn=new Proxy({},{get:(a,s)=>this.target?this.target.on[s]:(...u)=>{this.onQueue.push({method:s,args:u})}}),this.proxiedTarget=new Proxy({},{get:(a,s)=>this.target?this.target[s]:s==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(s)?(...u)=>(this.targetQueue.push({method:s,args:u,resolve:()=>{}}),this.fallbacks[s](...u)):(...u)=>new Promise(l=>{this.targetQueue.push({method:s,args:u,resolve:l})})})}async setRealTarget(t){this.target=t;for(const n of this.onQueue)this.target.on[n.method](...n.args);for(const n of this.targetQueue)n.resolve(await this.target[n.method](...n.args))}}function Ru(e,t){const n=e,r=n0(),o=om(),i=im&&n.enableEarlyProxy;if(o&&(r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!i))o.emit(am,e,t);else{const a=i?new cm(n,o):null;(r.__VUE_DEVTOOLS_PLUGINS__=r.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:n,setupFn:t,proxy:a}),a&&t(a.proxiedTarget)}}/*!
  * pinia v2.0.13
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */let Os;const bo=e=>Os=e,r0=Symbol("pinia");function Yn(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var qt;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(qt||(qt={}));const wn=typeof window!="undefined",Zl=(()=>typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof global=="object"&&global.global===global?global:typeof globalThis=="object"?globalThis:{HTMLElement:null})();function dm(e,{autoBom:t=!1}={}){return t&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob([String.fromCharCode(65279),e],{type:e.type}):e}function Du(e,t,n){const r=new XMLHttpRequest;r.open("GET",e),r.responseType="blob",r.onload=function(){a0(r.response,t,n)},r.onerror=function(){console.error("could not download file")},r.send()}function o0(e){const t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch{}return t.status>=200&&t.status<=299}function di(e){try{e.dispatchEvent(new MouseEvent("click"))}catch{const n=document.createEvent("MouseEvents");n.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(n)}}const pi=typeof navigator=="object"?navigator:{userAgent:""},i0=(()=>/Macintosh/.test(pi.userAgent)&&/AppleWebKit/.test(pi.userAgent)&&!/Safari/.test(pi.userAgent))(),a0=wn?typeof HTMLAnchorElement!="undefined"&&"download"in HTMLAnchorElement.prototype&&!i0?pm:"msSaveOrOpenBlob"in pi?fm:hm:()=>{};function pm(e,t="download",n){const r=document.createElement("a");r.download=t,r.rel="noopener",typeof e=="string"?(r.href=e,r.origin!==location.origin?o0(r.href)?Du(e,t,n):(r.target="_blank",di(r)):di(r)):(r.href=URL.createObjectURL(e),setTimeout(function(){URL.revokeObjectURL(r.href)},4e4),setTimeout(function(){di(r)},0))}function fm(e,t="download",n){if(typeof e=="string")if(o0(e))Du(e,t,n);else{const r=document.createElement("a");r.href=e,r.target="_blank",setTimeout(function(){di(r)})}else navigator.msSaveOrOpenBlob(dm(e,n),t)}function hm(e,t,n,r){if(r=r||open("","_blank"),r&&(r.document.title=r.document.body.innerText="downloading..."),typeof e=="string")return Du(e,t,n);const o=e.type==="application/octet-stream",i=/constructor/i.test(String(Zl.HTMLElement))||"safari"in Zl,a=/CriOS\/[\d]+/.test(navigator.userAgent);if((a||o&&i||i0)&&typeof FileReader!="undefined"){const s=new FileReader;s.onloadend=function(){let u=s.result;if(typeof u!="string")throw r=null,new Error("Wrong reader.result type");u=a?u:u.replace(/^data:[^;]*;/,"data:attachment/file;"),r?r.location.href=u:location.assign(u),r=null},s.readAsDataURL(e)}else{const s=URL.createObjectURL(e);r?r.location.assign(s):location.href=s,r=null,setTimeout(function(){URL.revokeObjectURL(s)},4e4)}}function rt(e,t){const n="\u{1F34D} "+e;typeof __VUE_DEVTOOLS_TOAST__=="function"?__VUE_DEVTOOLS_TOAST__(n,t):t==="error"?console.error(n):t==="warn"?console.warn(n):console.log(n)}function Iu(e){return"_a"in e&&"install"in e}function s0(){if(!("clipboard"in navigator))return rt("Your browser doesn't support the Clipboard API","error"),!0}function u0(e){return e instanceof Error&&e.message.toLowerCase().includes("document is not focused")?(rt('You need to activate the "Emulate a focused page" setting in the "Rendering" panel of devtools.',"warn"),!0):!1}async function gm(e){if(!s0())try{await navigator.clipboard.writeText(JSON.stringify(e.state.value)),rt("Global state copied to clipboard.")}catch(t){if(u0(t))return;rt("Failed to serialize the state. Check the console for more details.","error"),console.error(t)}}async function mm(e){if(!s0())try{e.state.value=JSON.parse(await navigator.clipboard.readText()),rt("Global state pasted from clipboard.")}catch(t){if(u0(t))return;rt("Failed to deserialize the state from clipboard. Check the console for more details.","error"),console.error(t)}}async function bm(e){try{a0(new Blob([JSON.stringify(e.state.value)],{type:"text/plain;charset=utf-8"}),"pinia-state.json")}catch(t){rt("Failed to export the state as JSON. Check the console for more details.","error"),console.error(t)}}let Jt;function wm(){Jt||(Jt=document.createElement("input"),Jt.type="file",Jt.accept=".json");function e(){return new Promise((t,n)=>{Jt.onchange=async()=>{const r=Jt.files;if(!r)return t(null);const o=r.item(0);return t(o?{text:await o.text(),file:o}:null)},Jt.oncancel=()=>t(null),Jt.onerror=n,Jt.click()})}return e}async function ym(e){try{const n=await(await wm())();if(!n)return;const{text:r,file:o}=n;e.state.value=JSON.parse(r),rt(`Global state imported from "${o.name}".`)}catch(t){rt("Failed to export the state as JSON. Check the console for more details.","error"),console.error(t)}}function Lt(e){return{_custom:{display:e}}}const l0="\u{1F34D} Pinia (root)",As="_root";function xm(e){return Iu(e)?{id:As,label:l0}:{id:e.$id,label:e.$id}}function km(e){if(Iu(e)){const n=Array.from(e._s.keys()),r=e._s;return{state:n.map(i=>({editable:!0,key:i,value:e.state.value[i]})),getters:n.filter(i=>r.get(i)._getters).map(i=>{const a=r.get(i);return{editable:!1,key:i,value:a._getters.reduce((s,u)=>(s[u]=a[u],s),{})}})}}const t={state:Object.keys(e.$state).map(n=>({editable:!0,key:n,value:e.$state[n]}))};return e._getters&&e._getters.length&&(t.getters=e._getters.map(n=>({editable:!1,key:n,value:e[n]}))),e._customProperties.size&&(t.customProperties=Array.from(e._customProperties).map(n=>({editable:!0,key:n,value:e[n]}))),t}function vm(e){return e?Array.isArray(e)?e.reduce((t,n)=>(t.keys.push(n.key),t.operations.push(n.type),t.oldValue[n.key]=n.oldValue,t.newValue[n.key]=n.newValue,t),{oldValue:{},keys:[],operations:[],newValue:{}}):{operation:Lt(e.type),key:Lt(e.key),oldValue:e.oldValue,newValue:e.newValue}:{}}function _m(e){switch(e){case qt.direct:return"mutation";case qt.patchFunction:return"$patch";case qt.patchObject:return"$patch";default:return"unknown"}}let wr=!0;const fi=[],Rn="pinia:mutations",Je="pinia",Ri=e=>"\u{1F34D} "+e;function Cm(e,t){Ru({id:"dev.esm.pinia",label:"Pinia \u{1F34D}",logo:"https://pinia.vuejs.org/logo.svg",packageName:"pinia",homepage:"https://pinia.vuejs.org",componentStateTypes:fi,app:e},n=>{typeof n.now!="function"&&rt("You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."),n.addTimelineLayer({id:Rn,label:"Pinia \u{1F34D}",color:15064968}),n.addInspector({id:Je,label:"Pinia \u{1F34D}",icon:"storage",treeFilterPlaceholder:"Search stores",actions:[{icon:"content_copy",action:()=>{gm(t)},tooltip:"Serialize and copy the state"},{icon:"content_paste",action:async()=>{await mm(t),n.sendInspectorTree(Je),n.sendInspectorState(Je)},tooltip:"Replace the state with the content of your clipboard"},{icon:"save",action:()=>{bm(t)},tooltip:"Save the state as a JSON file"},{icon:"folder_open",action:async()=>{await ym(t),n.sendInspectorTree(Je),n.sendInspectorState(Je)},tooltip:"Import the state from a JSON file"}]}),n.on.inspectComponent((r,o)=>{const i=r.componentInstance&&r.componentInstance.proxy;if(i&&i._pStores){const a=r.componentInstance.proxy._pStores;Object.values(a).forEach(s=>{r.instanceData.state.push({type:Ri(s.$id),key:"state",editable:!0,value:s._isOptionsAPI?{_custom:{value:s.$state,actions:[{icon:"restore",tooltip:"Reset the state of this store",action:()=>s.$reset()}]}}:s.$state}),s._getters&&s._getters.length&&r.instanceData.state.push({type:Ri(s.$id),key:"getters",editable:!1,value:s._getters.reduce((u,l)=>{try{u[l]=s[l]}catch(c){u[l]=c}return u},{})})})}}),n.on.getInspectorTree(r=>{if(r.app===e&&r.inspectorId===Je){let o=[t];o=o.concat(Array.from(t._s.values())),r.rootNodes=(r.filter?o.filter(i=>"$id"in i?i.$id.toLowerCase().includes(r.filter.toLowerCase()):l0.toLowerCase().includes(r.filter.toLowerCase())):o).map(xm)}}),n.on.getInspectorState(r=>{if(r.app===e&&r.inspectorId===Je){const o=r.nodeId===As?t:t._s.get(r.nodeId);if(!o)return;o&&(r.state=km(o))}}),n.on.editInspectorState((r,o)=>{if(r.app===e&&r.inspectorId===Je){const i=r.nodeId===As?t:t._s.get(r.nodeId);if(!i)return rt(`store "${r.nodeId}" not found`,"error");const{path:a}=r;Iu(i)?a.unshift("state"):(a.length!==1||!i._customProperties.has(a[0])||a[0]in i.$state)&&a.unshift("$state"),wr=!1,r.set(i,a,r.state.value),wr=!0}}),n.on.editComponentState(r=>{if(r.type.startsWith("\u{1F34D}")){const o=r.type.replace(/^🍍\s*/,""),i=t._s.get(o);if(!i)return rt(`store "${o}" not found`,"error");const{path:a}=r;if(a[0]!=="state")return rt(`Invalid path for store "${o}":
${a}
Only state can be modified.`);a[0]="$state",wr=!1,r.set(i,a,r.state.value),wr=!0}})})}function Em(e,t){fi.includes(Ri(t.$id))||fi.push(Ri(t.$id)),Ru({id:"dev.esm.pinia",label:"Pinia \u{1F34D}",logo:"https://pinia.vuejs.org/logo.svg",packageName:"pinia",homepage:"https://pinia.vuejs.org",componentStateTypes:fi,app:e,settings:{logStoreChanges:{label:"Notify about new/deleted stores",type:"boolean",defaultValue:!0}}},n=>{const r=typeof n.now=="function"?n.now.bind(n):Date.now;t.$onAction(({after:a,onError:s,name:u,args:l})=>{const c=c0++;n.addTimelineEvent({layerId:Rn,event:{time:r(),title:"\u{1F6EB} "+u,subtitle:"start",data:{store:Lt(t.$id),action:Lt(u),args:l},groupId:c}}),a(d=>{Fn=void 0,n.addTimelineEvent({layerId:Rn,event:{time:r(),title:"\u{1F6EC} "+u,subtitle:"end",data:{store:Lt(t.$id),action:Lt(u),args:l,result:d},groupId:c}})}),s(d=>{Fn=void 0,n.addTimelineEvent({layerId:Rn,event:{time:r(),logType:"error",title:"\u{1F4A5} "+u,subtitle:"end",data:{store:Lt(t.$id),action:Lt(u),args:l,error:d},groupId:c}})})},!0),t._customProperties.forEach(a=>{Zn(()=>xr(t[a]),(s,u)=>{n.notifyComponentUpdate(),n.sendInspectorState(Je),wr&&n.addTimelineEvent({layerId:Rn,event:{time:r(),title:"Change",subtitle:a,data:{newValue:s,oldValue:u},groupId:Fn}})},{deep:!0})}),t.$subscribe(({events:a,type:s},u)=>{if(n.notifyComponentUpdate(),n.sendInspectorState(Je),!wr)return;const l={time:r(),title:_m(s),data:Se({store:Lt(t.$id)},vm(a)),groupId:Fn};Fn=void 0,s===qt.patchFunction?l.subtitle="\u2935\uFE0F":s===qt.patchObject?l.subtitle="\u{1F9E9}":a&&!Array.isArray(a)&&(l.subtitle=a.type),a&&(l.data["rawEvent(s)"]={_custom:{display:"DebuggerEvent",type:"object",tooltip:"raw DebuggerEvent[]",value:a}}),n.addTimelineEvent({layerId:Rn,event:l})},{detached:!0,flush:"sync"});const o=t._hotUpdate;t._hotUpdate=At(a=>{o(a),n.addTimelineEvent({layerId:Rn,event:{time:r(),title:"\u{1F525} "+t.$id,subtitle:"HMR update",data:{store:Lt(t.$id),info:Lt("HMR update")}}}),n.notifyComponentUpdate(),n.sendInspectorTree(Je),n.sendInspectorState(Je)});const{$dispose:i}=t;t.$dispose=()=>{i(),n.notifyComponentUpdate(),n.sendInspectorTree(Je),n.sendInspectorState(Je),n.getSettings().logStoreChanges&&rt(`Disposed "${t.$id}" store \u{1F5D1}`)},n.notifyComponentUpdate(),n.sendInspectorTree(Je),n.sendInspectorState(Je),n.getSettings().logStoreChanges&&rt(`"${t.$id}" store installed \u{1F195}`)})}let c0=0,Fn;function Gl(e,t){const n=t.reduce((r,o)=>(r[o]=le(e)[o],r),{});for(const r in n)e[r]=function(){const o=c0,i=new Proxy(e,{get(...a){return Fn=o,Reflect.get(...a)},set(...a){return Fn=o,Reflect.set(...a)}});return n[r].apply(i,arguments)}}function Sm({app:e,store:t,options:n}){if(!t.$id.startsWith("__hot:")){if(n.state&&(t._isOptionsAPI=!0),typeof n.state=="function"){Gl(t,Object.keys(n.actions));const r=t._hotUpdate;le(t)._hotUpdate=function(o){r.apply(this,arguments),Gl(t,Object.keys(o._hmrPayload.actions))}}Em(e,t)}}function I9(){const e=Jd(!0),t=e.run(()=>Rr({}));let n=[],r=[];const o=At({install(i){bo(o),o._a=i,i.provide(r0,o),i.config.globalProperties.$pinia=o,wn&&Cm(i,o),r.forEach(a=>n.push(a)),r=[]},use(i){return!this._a&&!rm?r.push(i):n.push(i),this},_p:n,_a:null,_e:e,_s:new Map,state:t});return wn&&o.use(Sm),o}function d0(e,t){for(const n in t){const r=t[n];if(!(n in e))continue;const o=e[n];Yn(o)&&Yn(r)&&!$e(r)&&!Vt(r)?e[n]=d0(o,r):e[n]=r}return e}const Lm=()=>{};function Wl(e,t,n,r=Lm){e.push(t);const o=()=>{const i=e.indexOf(t);i>-1&&(e.splice(i,1),r())};return!n&&da()&&$u(o),o}function lr(e,...t){e.slice().forEach(n=>{n(...t)})}function $s(e,t){for(const n in t){if(!t.hasOwnProperty(n))continue;const r=t[n],o=e[n];Yn(o)&&Yn(r)&&e.hasOwnProperty(n)&&!$e(r)&&!Vt(r)?e[n]=$s(o,r):e[n]=r}return e}const Om=Symbol("pinia:skipHydration");function Am(e){return!Yn(e)||!e.hasOwnProperty(Om)}const{assign:Ot}=Object;function Jl(e){return!!($e(e)&&e.effect)}function Ql(e,t,n,r){const{state:o,actions:i,getters:a}=t,s=n.state.value[e];let u;function l(){!s&&!r&&(n.state.value[e]=o?o():{});const c=xl(r?Rr(o?o():{}).value:n.state.value[e]);return Ot(c,i,Object.keys(a||{}).reduce((d,p)=>(d[p]=At(kt(()=>{bo(n);const f=n._s.get(e);return a[p].call(f,f)})),d),{}))}return u=Ts(e,l,t,n,r),u.$reset=function(){const d=o?o():{};this.$patch(p=>{Ot(p,d)})},u}function Ts(e,t,n={},r,o){let i;const a=n.state,s=Ot({actions:{}},n);if(!r._e.active)throw new Error("Pinia destroyed");const u={deep:!0};u.onTrigger=v=>{l?f=v:l==!1&&!D._hotUpdating&&(Array.isArray(f)?f.push(v):console.error("\u{1F34D} debuggerEvents should be an array. This is most likely an internal Pinia bug."))};let l,c,d=At([]),p=At([]),f;const h=r.state.value[e];!a&&!h&&!o&&(r.state.value[e]={});const m=Rr({});function C(v){let E;l=c=!1,f=[],typeof v=="function"?(v(r.state.value[e]),E={type:qt.patchFunction,storeId:e,events:f}):($s(r.state.value[e],v),E={type:qt.patchObject,payload:v,storeId:e,events:f}),Ai().then(()=>{l=!0}),c=!0,lr(d,E,r.state.value[e])}const x=()=>{throw new Error(`\u{1F34D}: Store "${e}" is build using the setup syntax and does not implement $reset().`)};function _(){i.stop(),d=[],p=[],r._s.delete(e)}function I(v,E){return function(){bo(r);const P=Array.from(arguments),N=[],Q=[];function K(pe){N.push(pe)}function Ve(pe){Q.push(pe)}lr(p,{args:P,name:v,store:D,after:K,onError:Ve});let De;try{De=E.apply(this&&this.$id===e?this:D,P)}catch(pe){throw lr(Q,pe),pe}return De instanceof Promise?De.then(pe=>(lr(N,pe),pe)).catch(pe=>(lr(Q,pe),Promise.reject(pe))):(lr(N,De),De)}}const q=At({actions:{},getters:{},state:[],hotState:m}),H={_p:r,$id:e,$onAction:Wl.bind(null,p),$patch:C,$reset:x,$subscribe(v,E={}){const P=Wl(d,v,E.detached,()=>N()),N=i.run(()=>Zn(()=>r.state.value[e],Q=>{(E.flush==="sync"?c:l)&&v({storeId:e,type:qt.direct,events:f},Q)},Ot({},u,E)));return P},$dispose:_},D=Mr(Ot(wn?{_customProperties:At(new Set),_hmrPayload:q}:{},H));r._s.set(e,D);const W=r._e.run(()=>(i=Jd(),i.run(()=>t())));for(const v in W){const E=W[v];if($e(E)&&!Jl(E)||Vt(E))o?Go(m.value,v,oi(W,v)):a||(h&&Am(E)&&($e(E)?E.value=h[v]:$s(E,h[v])),r.state.value[e][v]=E),q.state.push(v);else if(typeof E=="function"){const P=o?E:I(v,E);W[v]=P,q.actions[v]=E,s.actions[v]=E}else Jl(E)&&(q.getters[v]=a?n.getters[v]:E,wn&&(W._getters||(W._getters=At([]))).push(v))}Ot(D,W),Ot(le(D),W),Object.defineProperty(D,"$state",{get:()=>o?m.value:r.state.value[e],set:v=>{if(o)throw new Error("cannot set hotState");C(E=>{Ot(E,v)})}});{D._hotUpdate=At(E=>{D._hotUpdating=!0,E._hmrPayload.state.forEach(P=>{if(P in D.$state){const N=E.$state[P],Q=D.$state[P];typeof N=="object"&&Yn(N)&&Yn(Q)?d0(N,Q):E.$state[P]=Q}Go(D,P,oi(E.$state,P))}),Object.keys(D.$state).forEach(P=>{P in E.$state||Ra(D,P)}),l=!1,c=!1,r.state.value[e]=oi(E._hmrPayload,"hotState"),c=!0,Ai().then(()=>{l=!0});for(const P in E._hmrPayload.actions){const N=E[P];Go(D,P,I(P,N))}for(const P in E._hmrPayload.getters){const N=E._hmrPayload.getters[P],Q=a?kt(()=>(bo(r),N.call(D,D))):N;Go(D,P,Q)}Object.keys(D._hmrPayload.getters).forEach(P=>{P in E._hmrPayload.getters||Ra(D,P)}),Object.keys(D._hmrPayload.actions).forEach(P=>{P in E._hmrPayload.actions||Ra(D,P)}),D._hmrPayload=E._hmrPayload,D._getters=E._getters,D._hotUpdating=!1});const v={writable:!0,configurable:!0,enumerable:!1};wn&&["_p","_hmrPayload","_getters","_customProperties"].forEach(E=>{Object.defineProperty(D,E,Se({value:D[E]},v))})}return r._p.forEach(v=>{if(wn){const E=i.run(()=>v({store:D,app:r._a,pinia:r,options:s}));Object.keys(E||{}).forEach(P=>D._customProperties.add(P)),Ot(D,E)}else Ot(D,i.run(()=>v({store:D,app:r._a,pinia:r,options:s})))}),D.$state&&typeof D.$state=="object"&&typeof D.$state.constructor=="function"&&!D.$state.constructor.toString().includes("[native code]")&&console.warn(`[\u{1F34D}]: The "state" must be a plain object. It cannot be
	state: () => new MyClass()
Found in store "${D.$id}".`),h&&a&&n.hydrate&&n.hydrate(D.$state,h),l=!0,c=!0,D}function F9(e,t,n){let r,o;const i=typeof t=="function";typeof e=="string"?(r=e,o=i?n:t):(o=e,r=e.id);function a(s,u){const l=da();if(s=s||l&&zt(r0),s&&bo(s),!Os)throw new Error(`[\u{1F34D}]: getActivePinia was called with no active Pinia. Did you forget to install pinia?
	const pinia = createPinia()
	app.use(pinia)
This will fail in production.`);s=Os,s._s.has(r)||(i?Ts(r,t,o,s):Ql(r,o,s),a._pinia=s);const c=s._s.get(r);if(u){const d="__hot:"+r,p=i?Ts(d,t,o,s,!0):Ql(d,Ot({},o),s,!0);u._hotUpdate(p),delete s.state.value[d],s._s.delete(d)}if(wn&&l&&l.proxy&&!u){const d=l.proxy,p="_pStores"in d?d._pStores:d._pStores={};p[r]=c}return c}return a.$id=r,a}function hi(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?hi=function(t){return typeof t}:hi=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},hi(e)}var $m=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};function Tm(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function Pm(e,t){return t={exports:{}},e(t,t.exports),t.exports}var p0=Pm(function(e,t){/*!
 * clipboard.js v2.0.6
 * https://clipboardjs.com/
 * 
 * Licensed MIT © Zeno Rocha
 */(function(n,r){e.exports=r()})($m,function(){return o={},n.m=r=[function(i,a){i.exports=function(s){var u;if(s.nodeName==="SELECT")s.focus(),u=s.value;else if(s.nodeName==="INPUT"||s.nodeName==="TEXTAREA"){var l=s.hasAttribute("readonly");l||s.setAttribute("readonly",""),s.select(),s.setSelectionRange(0,s.value.length),l||s.removeAttribute("readonly"),u=s.value}else{s.hasAttribute("contenteditable")&&s.focus();var c=window.getSelection(),d=document.createRange();d.selectNodeContents(s),c.removeAllRanges(),c.addRange(d),u=c.toString()}return u}},function(i,a){function s(){}s.prototype={on:function(u,l,c){var d=this.e||(this.e={});return(d[u]||(d[u]=[])).push({fn:l,ctx:c}),this},once:function(u,l,c){var d=this;function p(){d.off(u,p),l.apply(c,arguments)}return p._=l,this.on(u,p,c)},emit:function(u){for(var l=[].slice.call(arguments,1),c=((this.e||(this.e={}))[u]||[]).slice(),d=0,p=c.length;d<p;d++)c[d].fn.apply(c[d].ctx,l);return this},off:function(u,l){var c=this.e||(this.e={}),d=c[u],p=[];if(d&&l)for(var f=0,h=d.length;f<h;f++)d[f].fn!==l&&d[f].fn._!==l&&p.push(d[f]);return p.length?c[u]=p:delete c[u],this}},i.exports=s,i.exports.TinyEmitter=s},function(i,a,s){var u=s(3),l=s(4);i.exports=function(c,d,p){if(!c&&!d&&!p)throw new Error("Missing required arguments");if(!u.string(d))throw new TypeError("Second argument must be a String");if(!u.fn(p))throw new TypeError("Third argument must be a Function");if(u.node(c))return q=d,H=p,(I=c).addEventListener(q,H),{destroy:function(){I.removeEventListener(q,H)}};if(u.nodeList(c))return C=c,x=d,_=p,Array.prototype.forEach.call(C,function(D){D.addEventListener(x,_)}),{destroy:function(){Array.prototype.forEach.call(C,function(D){D.removeEventListener(x,_)})}};if(u.string(c))return f=c,h=d,m=p,l(document.body,f,h,m);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList");var f,h,m,C,x,_,I,q,H}},function(i,a){a.node=function(s){return s!==void 0&&s instanceof HTMLElement&&s.nodeType===1},a.nodeList=function(s){var u=Object.prototype.toString.call(s);return s!==void 0&&(u==="[object NodeList]"||u==="[object HTMLCollection]")&&"length"in s&&(s.length===0||a.node(s[0]))},a.string=function(s){return typeof s=="string"||s instanceof String},a.fn=function(s){return Object.prototype.toString.call(s)==="[object Function]"}},function(i,a,s){var u=s(5);function l(c,d,p,f,h){var m=function(C,x,_,I){return function(q){q.delegateTarget=u(q.target,x),q.delegateTarget&&I.call(C,q)}}.apply(this,arguments);return c.addEventListener(p,m,h),{destroy:function(){c.removeEventListener(p,m,h)}}}i.exports=function(c,d,p,f,h){return typeof c.addEventListener=="function"?l.apply(null,arguments):typeof p=="function"?l.bind(null,document).apply(null,arguments):(typeof c=="string"&&(c=document.querySelectorAll(c)),Array.prototype.map.call(c,function(m){return l(m,d,p,f,h)}))}},function(i,a){if(typeof Element!="undefined"&&!Element.prototype.matches){var s=Element.prototype;s.matches=s.matchesSelector||s.mozMatchesSelector||s.msMatchesSelector||s.oMatchesSelector||s.webkitMatchesSelector}i.exports=function(u,l){for(;u&&u.nodeType!==9;){if(typeof u.matches=="function"&&u.matches(l))return u;u=u.parentNode}}},function(i,a,s){s.r(a);var u=s(0),l=s.n(u),c=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(v){return typeof v}:function(v){return v&&typeof Symbol=="function"&&v.constructor===Symbol&&v!==Symbol.prototype?"symbol":typeof v};function d(v,E){for(var P=0;P<E.length;P++){var N=E[P];N.enumerable=N.enumerable||!1,N.configurable=!0,"value"in N&&(N.writable=!0),Object.defineProperty(v,N.key,N)}}function p(v){(function(E,P){if(!(E instanceof P))throw new TypeError("Cannot call a class as a function")})(this,p),this.resolveOptions(v),this.initSelection()}var f=(function(v,E,P){return E&&d(v.prototype,E),P&&d(v,P),v}(p,[{key:"resolveOptions",value:function(v){var E=0<arguments.length&&v!==void 0?v:{};this.action=E.action,this.container=E.container,this.emitter=E.emitter,this.target=E.target,this.text=E.text,this.trigger=E.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"selectFake",value:function(){var v=this,E=document.documentElement.getAttribute("dir")=="rtl";this.removeFake(),this.fakeHandlerCallback=function(){return v.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[E?"right":"left"]="-9999px";var P=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.style.top=P+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.container.appendChild(this.fakeElem),this.selectedText=l()(this.fakeElem),this.copyText()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=l()(this.target),this.copyText()}},{key:"copyText",value:function(){var v=void 0;try{v=document.execCommand(this.action)}catch{v=!1}this.handleResult(v)}},{key:"handleResult",value:function(v){this.emitter.emit(v?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),document.activeElement.blur(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(v){var E=0<arguments.length&&v!==void 0?v:"copy";if(this._action=E,this._action!=="copy"&&this._action!=="cut")throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(v){if(v!==void 0){if(!v||(v===void 0?"undefined":c(v))!=="object"||v.nodeType!==1)throw new Error('Invalid "target" value, use a valid Element');if(this.action==="copy"&&v.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if(this.action==="cut"&&(v.hasAttribute("readonly")||v.hasAttribute("disabled")))throw new Error(`Invalid "target" attribute. You can't cut text from elements with "readonly" or "disabled" attributes`);this._target=v}},get:function(){return this._target}}]),p),h=s(1),m=s.n(h),C=s(2),x=s.n(C),_=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(v){return typeof v}:function(v){return v&&typeof Symbol=="function"&&v.constructor===Symbol&&v!==Symbol.prototype?"symbol":typeof v},I=function(v,E,P){return E&&q(v.prototype,E),P&&q(v,P),v};function q(v,E){for(var P=0;P<E.length;P++){var N=E[P];N.enumerable=N.enumerable||!1,N.configurable=!0,"value"in N&&(N.writable=!0),Object.defineProperty(v,N.key,N)}}var H=(function(v,E){if(typeof E!="function"&&E!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof E);v.prototype=Object.create(E&&E.prototype,{constructor:{value:v,enumerable:!1,writable:!0,configurable:!0}}),E&&(Object.setPrototypeOf?Object.setPrototypeOf(v,E):v.__proto__=E)}(D,m.a),I(D,[{key:"resolveOptions",value:function(v){var E=0<arguments.length&&v!==void 0?v:{};this.action=typeof E.action=="function"?E.action:this.defaultAction,this.target=typeof E.target=="function"?E.target:this.defaultTarget,this.text=typeof E.text=="function"?E.text:this.defaultText,this.container=_(E.container)==="object"?E.container:document.body}},{key:"listenClick",value:function(v){var E=this;this.listener=x()(v,"click",function(P){return E.onClick(P)})}},{key:"onClick",value:function(v){var E=v.delegateTarget||v.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new f({action:this.action(E),target:this.target(E),text:this.text(E),container:this.container,trigger:E,emitter:this})}},{key:"defaultAction",value:function(v){return W("action",v)}},{key:"defaultTarget",value:function(v){var E=W("target",v);if(E)return document.querySelector(E)}},{key:"defaultText",value:function(v){return W("text",v)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function(v){var E=0<arguments.length&&v!==void 0?v:["copy","cut"],P=typeof E=="string"?[E]:E,N=!!document.queryCommandSupported;return P.forEach(function(Q){N=N&&!!document.queryCommandSupported(Q)}),N}}]),D);function D(v,E){(function(N,Q){if(!(N instanceof Q))throw new TypeError("Cannot call a class as a function")})(this,D);var P=function(N,Q){if(!N)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!Q||typeof Q!="object"&&typeof Q!="function"?N:Q}(this,(D.__proto__||Object.getPrototypeOf(D)).call(this));return P.resolveOptions(E),P.listenClick(v),P}function W(v,E){var P="data-clipboard-"+v;if(E.hasAttribute(P))return E.getAttribute(P)}a.default=H}],n.c=o,n.d=function(i,a,s){n.o(i,a)||Object.defineProperty(i,a,{enumerable:!0,get:s})},n.r=function(i){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(i,"__esModule",{value:!0})},n.t=function(i,a){if(1&a&&(i=n(i)),8&a||4&a&&typeof i=="object"&&i&&i.__esModule)return i;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:i}),2&a&&typeof i!="string")for(var u in i)n.d(s,u,function(l){return i[l]}.bind(null,u));return s},n.n=function(i){var a=i&&i.__esModule?function(){return i.default}:function(){return i};return n.d(a,"a",a),a},n.o=function(i,a){return Object.prototype.hasOwnProperty.call(i,a)},n.p="",n(n.s=6).default;function n(i){if(o[i])return o[i].exports;var a=o[i]={i,l:!1,exports:{}};return r[i].call(a.exports,a,a.exports,n),a.l=!0,a.exports}var r,o})}),f0=Tm(p0);p0.ClipboardJS;var Ps={autoSetContainer:!1,appendToBody:!0};function zm(e,t,n){var r=document.createElement("button"),o=new f0(r,{text:function(){return e},action:function(){return"copy"},container:hi(t)==="object"?t:document.body});o.on("success",function(i){o.destroy(),n(void 0,i)}),o.on("error",function(i){o.destroy(),n(i,void 0)}),Ps.appendToBody&&document.body.appendChild(r),r.click(),Ps.appendToBody&&document.body.removeChild(r)}function U9(e,t){Ps=t,e.config.globalProperties.$copyText=zm,e.directive("clipboard",{mounted:function(r,o){if(o.arg==="success")r._vClipboard_success=o.value;else if(o.arg==="error")r._vClipboard_error=o.value;else{var i=new f0(r,{text:function(){return o.value},action:function(){return o.arg==="cut"?"cut":"copy"},container:t.autoSetContainer?r:void 0});i.on("success",function(a){var s=r._vClipboard_success;s&&s(a)}),i.on("error",function(a){var s=r._vClipboard_error;s&&s(a)}),r._vClipboard=i}},updated:function(r,o){o.arg==="success"?r._vClipboard_success=o.value:o.arg==="error"?r._vClipboard_error=o.value:(r._vClipboard.text=function(){return o.value},r._vClipboard.action=function(){return o.arg==="cut"?"cut":"copy"})},unmounted:function(r,o){o.arg==="success"?delete r._vClipboard_success:o.arg==="error"?delete r._vClipboard_error:(r._vClipboard.destroy(),delete r._vClipboard)}})}function Cn(e){function t(n,r){Error.captureStackTrace&&Error.captureStackTrace(this,this.constructor),this.message=n,this.code=r}return t.prototype=new Error,t.prototype.name=e,t.prototype.constructor=t,t}const Mm=Cn("LaunchDarklyUnexpectedResponseError"),Rm=Cn("LaunchDarklyInvalidEnvironmentIdError"),Dm=Cn("LaunchDarklyInvalidUserError"),Im=Cn("LaunchDarklyInvalidEventKeyError"),Fm=Cn("LaunchDarklyInvalidArgumentError"),Um=Cn("LaunchDarklyFlagFetchError");for(var Pe={LDUnexpectedResponseError:Mm,LDInvalidEnvironmentIdError:Rm,LDInvalidUserError:Dm,LDInvalidEventKeyError:Im,LDInvalidArgumentError:Fm,LDInvalidDataError:Cn("LaunchDarklyInvalidDataError"),LDFlagFetchError:Um,LDTimeoutError:Cn("LaunchDarklyTimeoutError"),isHttpErrorRecoverable:function(e){return!(e>=400&&e<500)||e===400||e===408||e===429}},jm=function(e){var t=Yl(e),n=t[0],r=t[1];return 3*(n+r)/4-r},Bm=function(e){var t,n,r=Yl(e),o=r[0],i=r[1],a=new Hm(function(l,c,d){return 3*(c+d)/4-d}(0,o,i)),s=0,u=i>0?o-4:o;for(n=0;n<u;n+=4)t=yt[e.charCodeAt(n)]<<18|yt[e.charCodeAt(n+1)]<<12|yt[e.charCodeAt(n+2)]<<6|yt[e.charCodeAt(n+3)],a[s++]=t>>16&255,a[s++]=t>>8&255,a[s++]=255&t;return i===2&&(t=yt[e.charCodeAt(n)]<<2|yt[e.charCodeAt(n+1)]>>4,a[s++]=255&t),i===1&&(t=yt[e.charCodeAt(n)]<<10|yt[e.charCodeAt(n+1)]<<4|yt[e.charCodeAt(n+2)]>>2,a[s++]=t>>8&255,a[s++]=255&t),a},Nm=function(e){for(var t,n=e.length,r=n%3,o=[],i=16383,a=0,s=n-r;a<s;a+=i)o.push(Vm(e,a,a+i>s?s:a+i));return r===1?(t=e[n-1],o.push(Nt[t>>2]+Nt[t<<4&63]+"==")):r===2&&(t=(e[n-2]<<8)+e[n-1],o.push(Nt[t>>10]+Nt[t>>4&63]+Nt[t<<2&63]+"=")),o.join("")},Nt=[],yt=[],Hm=typeof Uint8Array<"u"?Uint8Array:Array,Kl="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",cr=0;cr<64;++cr)Nt[cr]=Kl[cr],yt[Kl.charCodeAt(cr)]=cr;function Yl(e){var t=e.length;if(t%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var n=e.indexOf("=");return n===-1&&(n=t),[n,n===t?0:4-n%4]}function Vm(e,t,n){for(var r,o,i=[],a=t;a<n;a+=3)r=(e[a]<<16&16711680)+(e[a+1]<<8&65280)+(255&e[a+2]),i.push(Nt[(o=r)>>18&63]+Nt[o>>12&63]+Nt[o>>6&63]+Nt[63&o]);return i.join("")}yt[45]=62,yt[95]=63;var qm={byteLength:jm,toByteArray:Bm,fromByteArray:Nm},Xl=Array.isArray,ec=Object.keys,Zm=Object.prototype.hasOwnProperty,Gm=function e(t,n){if(t===n)return!0;if(t&&n&&typeof t=="object"&&typeof n=="object"){var r,o,i,a=Xl(t),s=Xl(n);if(a&&s){if((o=t.length)!=n.length)return!1;for(r=o;r--!==0;)if(!e(t[r],n[r]))return!1;return!0}if(a!=s)return!1;var u=t instanceof Date,l=n instanceof Date;if(u!=l)return!1;if(u&&l)return t.getTime()==n.getTime();var c=t instanceof RegExp,d=n instanceof RegExp;if(c!=d)return!1;if(c&&d)return t.toString()==n.toString();var p=ec(t);if((o=p.length)!==ec(n).length)return!1;for(r=o;r--!==0;)if(!Zm.call(n,p[r]))return!1;for(r=o;r--!==0;)if(!e(t[i=p[r]],n[i]))return!1;return!0}return t!=t&&n!=n};const Wm=["key","ip","country","email","firstName","lastName","avatar","name"];function tc(e){const t=unescape(encodeURIComponent(e));return qm.fromByteArray(function(n){const r=[];for(let o=0;o<n.length;o++)r.push(n.charCodeAt(o));return r}(t))}function Da(e,t){return Object.prototype.hasOwnProperty.call(e,t)}var Ia,ue={appendUrlPath:function(e,t){return(e.endsWith("/")?e.substring(0,e.length-1):e)+(t.startsWith("/")?"":"/")+t},base64URLEncode:function(e){return tc(e).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")},btoa:tc,clone:function(e){return JSON.parse(JSON.stringify(e))},deepEquals:function(e,t){return Gm(e,t)},extend:function(...e){return e.reduce((t,n)=>Se(Se({},t),n),{})},getLDUserAgentString:function(e){const t=e.version||"?";return e.userAgent+"/"+t},objectHasOwnProperty:Da,onNextTick:function(e){setTimeout(e,0)},sanitizeContext:function(e){if(!e)return e;let t;return e.kind!==null&&e.kind!==void 0||Wm.forEach(n=>{const r=e[n];r!==void 0&&typeof r!="string"&&(t=t||Se({},e),t[n]=String(r))}),t||e},transformValuesToVersionedValues:function(e){const t={};for(const n in e)Da(e,n)&&(t[n]={value:e[n],version:0});return t},transformVersionedValuesToValues:function(e){const t={};for(const n in e)Da(e,n)&&(t[n]=e[n].value);return t},wrapPromiseCallback:function(e,t){const n=e.then(r=>(t&&setTimeout(()=>{t(null,r)},0),r),r=>{if(!t)return Promise.reject(r);setTimeout(()=>{t(r,null)},0)});return t?void 0:n},once:function(e){let t,n=!1;return function(...r){return n||(n=!0,t=e.apply(this,r)),t}}},Jm=new Uint8Array(16);function nc(){if(!Ia&&!(Ia=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||typeof msCrypto<"u"&&typeof msCrypto.getRandomValues=="function"&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return Ia(Jm)}var Qm=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function Di(e){return typeof e=="string"&&Qm.test(e)}for(var rc,Fa,Ne=[],Ua=0;Ua<256;++Ua)Ne.push((Ua+256).toString(16).substr(1));function gi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,n=(Ne[e[t+0]]+Ne[e[t+1]]+Ne[e[t+2]]+Ne[e[t+3]]+"-"+Ne[e[t+4]]+Ne[e[t+5]]+"-"+Ne[e[t+6]]+Ne[e[t+7]]+"-"+Ne[e[t+8]]+Ne[e[t+9]]+"-"+Ne[e[t+10]]+Ne[e[t+11]]+Ne[e[t+12]]+Ne[e[t+13]]+Ne[e[t+14]]+Ne[e[t+15]]).toLowerCase();if(!Di(n))throw TypeError("Stringified UUID is invalid");return n}var ja=0,Ba=0;function h0(e){if(!Di(e))throw TypeError("Invalid UUID");var t,n=new Uint8Array(16);return n[0]=(t=parseInt(e.slice(0,8),16))>>>24,n[1]=t>>>16&255,n[2]=t>>>8&255,n[3]=255&t,n[4]=(t=parseInt(e.slice(9,13),16))>>>8,n[5]=255&t,n[6]=(t=parseInt(e.slice(14,18),16))>>>8,n[7]=255&t,n[8]=(t=parseInt(e.slice(19,23),16))>>>8,n[9]=255&t,n[10]=(t=parseInt(e.slice(24,36),16))/1099511627776&255,n[11]=t/4294967296&255,n[12]=t>>>24&255,n[13]=t>>>16&255,n[14]=t>>>8&255,n[15]=255&t,n}function g0(e,t,n){function r(o,i,a,s){if(typeof o=="string"&&(o=function(c){c=unescape(encodeURIComponent(c));for(var d=[],p=0;p<c.length;++p)d.push(c.charCodeAt(p));return d}(o)),typeof i=="string"&&(i=h0(i)),i.length!==16)throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");var u=new Uint8Array(16+o.length);if(u.set(i),u.set(o,i.length),(u=n(u))[6]=15&u[6]|t,u[8]=63&u[8]|128,a){s=s||0;for(var l=0;l<16;++l)a[s+l]=u[l];return a}return gi(u)}try{r.name=e}catch{}return r.DNS="6ba7b810-9dad-11d1-80b4-00c04fd430c8",r.URL="6ba7b811-9dad-11d1-80b4-00c04fd430c8",r}function oc(e){return 14+(e+64>>>9<<4)+1}function yn(e,t){var n=(65535&e)+(65535&t);return(e>>16)+(t>>16)+(n>>16)<<16|65535&n}function ha(e,t,n,r,o,i){return yn((a=yn(yn(t,e),yn(r,i)))<<(s=o)|a>>>32-s,n);var a,s}function qe(e,t,n,r,o,i,a){return ha(t&n|~t&r,e,t,o,i,a)}function Ze(e,t,n,r,o,i,a){return ha(t&r|n&~r,e,t,o,i,a)}function Ge(e,t,n,r,o,i,a){return ha(t^n^r,e,t,o,i,a)}function We(e,t,n,r,o,i,a){return ha(n^(t|~r),e,t,o,i,a)}var Km=g0("v3",48,function(e){if(typeof e=="string"){var t=unescape(encodeURIComponent(e));e=new Uint8Array(t.length);for(var n=0;n<t.length;++n)e[n]=t.charCodeAt(n)}return function(r){for(var o=[],i=32*r.length,a="0123456789abcdef",s=0;s<i;s+=8){var u=r[s>>5]>>>s%32&255,l=parseInt(a.charAt(u>>>4&15)+a.charAt(15&u),16);o.push(l)}return o}(function(r,o){r[o>>5]|=128<<o%32,r[oc(o)-1]=o;for(var i=1732584193,a=-271733879,s=-1732584194,u=271733878,l=0;l<r.length;l+=16){var c=i,d=a,p=s,f=u;i=qe(i,a,s,u,r[l],7,-680876936),u=qe(u,i,a,s,r[l+1],12,-389564586),s=qe(s,u,i,a,r[l+2],17,606105819),a=qe(a,s,u,i,r[l+3],22,-1044525330),i=qe(i,a,s,u,r[l+4],7,-176418897),u=qe(u,i,a,s,r[l+5],12,1200080426),s=qe(s,u,i,a,r[l+6],17,-1473231341),a=qe(a,s,u,i,r[l+7],22,-45705983),i=qe(i,a,s,u,r[l+8],7,1770035416),u=qe(u,i,a,s,r[l+9],12,-1958414417),s=qe(s,u,i,a,r[l+10],17,-42063),a=qe(a,s,u,i,r[l+11],22,-1990404162),i=qe(i,a,s,u,r[l+12],7,1804603682),u=qe(u,i,a,s,r[l+13],12,-40341101),s=qe(s,u,i,a,r[l+14],17,-1502002290),i=Ze(i,a=qe(a,s,u,i,r[l+15],22,1236535329),s,u,r[l+1],5,-165796510),u=Ze(u,i,a,s,r[l+6],9,-1069501632),s=Ze(s,u,i,a,r[l+11],14,643717713),a=Ze(a,s,u,i,r[l],20,-373897302),i=Ze(i,a,s,u,r[l+5],5,-701558691),u=Ze(u,i,a,s,r[l+10],9,38016083),s=Ze(s,u,i,a,r[l+15],14,-660478335),a=Ze(a,s,u,i,r[l+4],20,-405537848),i=Ze(i,a,s,u,r[l+9],5,568446438),u=Ze(u,i,a,s,r[l+14],9,-1019803690),s=Ze(s,u,i,a,r[l+3],14,-187363961),a=Ze(a,s,u,i,r[l+8],20,1163531501),i=Ze(i,a,s,u,r[l+13],5,-1444681467),u=Ze(u,i,a,s,r[l+2],9,-51403784),s=Ze(s,u,i,a,r[l+7],14,1735328473),i=Ge(i,a=Ze(a,s,u,i,r[l+12],20,-1926607734),s,u,r[l+5],4,-378558),u=Ge(u,i,a,s,r[l+8],11,-2022574463),s=Ge(s,u,i,a,r[l+11],16,1839030562),a=Ge(a,s,u,i,r[l+14],23,-35309556),i=Ge(i,a,s,u,r[l+1],4,-1530992060),u=Ge(u,i,a,s,r[l+4],11,1272893353),s=Ge(s,u,i,a,r[l+7],16,-155497632),a=Ge(a,s,u,i,r[l+10],23,-1094730640),i=Ge(i,a,s,u,r[l+13],4,681279174),u=Ge(u,i,a,s,r[l],11,-358537222),s=Ge(s,u,i,a,r[l+3],16,-722521979),a=Ge(a,s,u,i,r[l+6],23,76029189),i=Ge(i,a,s,u,r[l+9],4,-640364487),u=Ge(u,i,a,s,r[l+12],11,-421815835),s=Ge(s,u,i,a,r[l+15],16,530742520),i=We(i,a=Ge(a,s,u,i,r[l+2],23,-995338651),s,u,r[l],6,-198630844),u=We(u,i,a,s,r[l+7],10,1126891415),s=We(s,u,i,a,r[l+14],15,-1416354905),a=We(a,s,u,i,r[l+5],21,-57434055),i=We(i,a,s,u,r[l+12],6,1700485571),u=We(u,i,a,s,r[l+3],10,-1894986606),s=We(s,u,i,a,r[l+10],15,-1051523),a=We(a,s,u,i,r[l+1],21,-2054922799),i=We(i,a,s,u,r[l+8],6,1873313359),u=We(u,i,a,s,r[l+15],10,-30611744),s=We(s,u,i,a,r[l+6],15,-1560198380),a=We(a,s,u,i,r[l+13],21,1309151649),i=We(i,a,s,u,r[l+4],6,-145523070),u=We(u,i,a,s,r[l+11],10,-1120210379),s=We(s,u,i,a,r[l+2],15,718787259),a=We(a,s,u,i,r[l+9],21,-343485551),i=yn(i,c),a=yn(a,d),s=yn(s,p),u=yn(u,f)}return[i,a,s,u]}(function(r){if(r.length===0)return[];for(var o=8*r.length,i=new Uint32Array(oc(o)),a=0;a<o;a+=8)i[a>>5]|=(255&r[a/8])<<a%32;return i}(e),8*e.length))}),Ym=Km;function Xm(e,t,n,r){switch(e){case 0:return t&n^~t&r;case 1:case 3:return t^n^r;case 2:return t&n^t&r^n&r}}function Na(e,t){return e<<t|e>>>32-t}var e2=g0("v5",80,function(e){var t=[1518500249,1859775393,2400959708,3395469782],n=[1732584193,4023233417,2562383102,271733878,3285377520];if(typeof e=="string"){var r=unescape(encodeURIComponent(e));e=[];for(var o=0;o<r.length;++o)e.push(r.charCodeAt(o))}else Array.isArray(e)||(e=Array.prototype.slice.call(e));e.push(128);for(var i=e.length/4+2,a=Math.ceil(i/16),s=new Array(a),u=0;u<a;++u){for(var l=new Uint32Array(16),c=0;c<16;++c)l[c]=e[64*u+4*c]<<24|e[64*u+4*c+1]<<16|e[64*u+4*c+2]<<8|e[64*u+4*c+3];s[u]=l}s[a-1][14]=8*(e.length-1)/Math.pow(2,32),s[a-1][14]=Math.floor(s[a-1][14]),s[a-1][15]=8*(e.length-1)&4294967295;for(var d=0;d<a;++d){for(var p=new Uint32Array(80),f=0;f<16;++f)p[f]=s[d][f];for(var h=16;h<80;++h)p[h]=Na(p[h-3]^p[h-8]^p[h-14]^p[h-16],1);for(var m=n[0],C=n[1],x=n[2],_=n[3],I=n[4],q=0;q<80;++q){var H=Math.floor(q/20),D=Na(m,5)+Xm(H,C,x,_)+I+t[H]+p[q]>>>0;I=_,_=x,x=Na(C,30)>>>0,C=m,m=D}n[0]=n[0]+m>>>0,n[1]=n[1]+C>>>0,n[2]=n[2]+x>>>0,n[3]=n[3]+_>>>0,n[4]=n[4]+I>>>0}return[n[0]>>24&255,n[0]>>16&255,n[0]>>8&255,255&n[0],n[1]>>24&255,n[1]>>16&255,n[1]>>8&255,255&n[1],n[2]>>24&255,n[2]>>16&255,n[2]>>8&255,255&n[2],n[3]>>24&255,n[3]>>16&255,n[3]>>8&255,255&n[3],n[4]>>24&255,n[4]>>16&255,n[4]>>8&255,255&n[4]]}),t2=e2,Fu=Object.freeze({__proto__:null,v1:function(e,t,n){var r=t&&n||0,o=t||new Array(16),i=(e=e||{}).node||rc,a=e.clockseq!==void 0?e.clockseq:Fa;if(i==null||a==null){var s=e.random||(e.rng||nc)();i==null&&(i=rc=[1|s[0],s[1],s[2],s[3],s[4],s[5]]),a==null&&(a=Fa=16383&(s[6]<<8|s[7]))}var u=e.msecs!==void 0?e.msecs:Date.now(),l=e.nsecs!==void 0?e.nsecs:Ba+1,c=u-ja+(l-Ba)/1e4;if(c<0&&e.clockseq===void 0&&(a=a+1&16383),(c<0||u>ja)&&e.nsecs===void 0&&(l=0),l>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");ja=u,Ba=l,Fa=a;var d=(1e4*(268435455&(u+=122192928e5))+l)%4294967296;o[r++]=d>>>24&255,o[r++]=d>>>16&255,o[r++]=d>>>8&255,o[r++]=255&d;var p=u/4294967296*1e4&268435455;o[r++]=p>>>8&255,o[r++]=255&p,o[r++]=p>>>24&15|16,o[r++]=p>>>16&255,o[r++]=a>>>8|128,o[r++]=255&a;for(var f=0;f<6;++f)o[r+f]=i[f];return t||gi(o)},v3:Ym,v4:function(e,t,n){var r=(e=e||{}).random||(e.rng||nc)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,t){n=n||0;for(var o=0;o<16;++o)t[n+o]=r[o];return t}return gi(r)},v5:t2,NIL:"00000000-0000-0000-0000-000000000000",version:function(e){if(!Di(e))throw TypeError("Invalid UUID");return parseInt(e.substr(14,1),16)},validate:Di,stringify:gi,parse:h0});const Vr=["debug","info","warn","error","none"];var Uu={commonBasicLogger:function(e,t){if(e&&e.destination&&typeof e.destination!="function")throw new Error("destination for basicLogger was set to a non-function");function n(l){return function(c){console&&console[l]&&console[l].call(console,c)}}const r=e&&e.destination?[e.destination,e.destination,e.destination,e.destination]:[n("log"),n("info"),n("warn"),n("error")],o=!(!e||!e.destination),i=e&&e.prefix!==void 0&&e.prefix!==null?e.prefix:"[LaunchDarkly] ";let a=1;if(e&&e.level)for(let l=0;l<Vr.length;l++)Vr[l]===e.level&&(a=l);function s(l,c,d){if(d.length<1)return;let p;const f=o?c+": "+i:i;if(d.length!==1&&t){const h=[...d];h[0]=f+h[0],p=t(...h)}else p=f+d[0];try{r[l](p)}catch(h){console&&console.log&&console.log("[LaunchDarkly] Configured logger's "+c+" method threw an exception: "+h)}}const u={};for(let l=0;l<Vr.length;l++){const c=Vr[l];if(c!=="none")if(l<a)u[c]=()=>{};else{const d=l;u[c]=function(){s(d,c,arguments)}}}return u},validateLogger:function(e){Vr.forEach(t=>{if(t!=="none"&&(!e[t]||typeof e[t]!="function"))throw new Error("Provided logger instance must support logger."+t+"(...) method")})}};function Wo(e){return e&&e.message?e.message:typeof e=="string"||e instanceof String?e:JSON.stringify(e)}const dr=" Please see https://docs.launchdarkly.com/sdk/client-side/javascript#initialize-the-client for instructions on SDK initialization.";var oe={bootstrapInvalid:function(){return"LaunchDarkly bootstrap data is not available because the back end could not read the flags."},bootstrapOldFormat:function(){return"LaunchDarkly client was initialized with bootstrap data that did not include flag metadata. Events may not be sent correctly."+dr},clientInitialized:function(){return"LaunchDarkly client initialized"},clientNotReady:function(){return"LaunchDarkly client is not ready"},debugEnqueueingEvent:function(e){return'enqueueing "'+e+'" event'},debugPostingDiagnosticEvent:function(e){return"sending diagnostic event ("+e.kind+")"},debugPostingEvents:function(e){return"sending "+e+" events"},debugStreamDelete:function(e){return'received streaming deletion for flag "'+e+'"'},debugStreamDeleteIgnored:function(e){return'received streaming deletion for flag "'+e+'" but ignored due to version check'},debugStreamPatch:function(e){return'received streaming update for flag "'+e+'"'},debugStreamPatchIgnored:function(e){return'received streaming update for flag "'+e+'" but ignored due to version check'},debugStreamPing:function(){return"received ping message from stream"},debugPolling:function(e){return"polling for feature flags at "+e},debugStreamPut:function(){return"received streaming update for all flags"},deprecated:function(e,t){return t?'"'+e+'" is deprecated, please use "'+t+'"':'"'+e+'" is deprecated'},environmentNotFound:function(){return"Environment not found. Double check that you specified a valid environment/client-side ID."+dr},environmentNotSpecified:function(){return"No environment/client-side ID was specified."+dr},errorFetchingFlags:function(e){return"Error fetching flag settings: "+Wo(e)},eventCapacityExceeded:function(){return"Exceeded event queue capacity. Increase capacity to avoid dropping events."},eventWithoutContext:function(){return"Be sure to call `identify` in the LaunchDarkly client: https://docs.launchdarkly.com/sdk/features/identify#javascript"},httpErrorMessage:function(e,t,n){return"Received error "+e+(e===401?" (invalid SDK key)":"")+" for "+t+" - "+(Pe.isHttpErrorRecoverable(e)?n:"giving up permanently")},httpUnavailable:function(){return"Cannot make HTTP requests in this environment."+dr},identifyDisabled:function(){return"identify() has no effect here; it must be called on the main client instance"},inspectorMethodError:(e,t)=>`an inspector: "${t}" of type: "${e}" generated an exception`,invalidContentType:function(e){return'Expected application/json content type but got "'+e+'"'},invalidData:function(){return"Invalid data received from LaunchDarkly; connection may have been interrupted"},invalidInspector:(e,t)=>`an inspector: "${t}" of an invalid type (${e}) was configured`,invalidKey:function(){return"Event key must be a string"},invalidMetricValue:e=>`The track function was called with a non-numeric "metricValue" (${e}), only numeric metric values are supported.`,invalidContext:function(){return"Invalid context specified."+dr},invalidTagValue:e=>`Config option "${e}" must only contain letters, numbers, ., _ or -.`,localStorageUnavailable:function(e){return"local storage is unavailable: "+Wo(e)},networkError:e=>"network error"+(e?" ("+e+")":""),optionBelowMinimum:(e,t,n)=>'Config option "'+e+'" was set to '+t+", changing to minimum value of "+n,streamClosing:function(){return"Closing stream connection"},streamConnecting:function(e){return"Opening stream connection to "+e},streamError:function(e,t){return"Error on stream connection: "+Wo(e)+", will continue retrying after "+t+" milliseconds."},tagValueTooLong:e=>`Value of "${e}" was longer than 64 characters and was discarded.`,unknownCustomEventKey:function(e){return'Custom event "'+e+'" does not exist'},unknownOption:e=>'Ignoring unknown config option "'+e+'"',contextNotSpecified:function(){return"No context specified."+dr},unrecoverableStreamError:e=>`Error on stream connection ${Wo(e)}, giving up permanently`,wrongOptionType:(e,t,n)=>'Config option "'+e+'" should be of type '+t+", got "+n+", using default value",wrongOptionTypeBoolean:(e,t)=>'Config option "'+e+'" should be a boolean, got '+t+", converting to boolean"};const{validateLogger:n2}=Uu,ic={baseUrl:{default:"https://app.launchdarkly.com"},streamUrl:{default:"https://clientstream.launchdarkly.com"},eventsUrl:{default:"https://events.launchdarkly.com"},sendEvents:{default:!0},streaming:{type:"boolean"},sendLDHeaders:{default:!0},requestHeaderTransform:{type:"function"},sendEventsOnlyForVariation:{default:!1},useReport:{default:!1},evaluationReasons:{default:!1},eventCapacity:{default:100,minimum:1},flushInterval:{default:2e3,minimum:2e3},samplingInterval:{default:0,minimum:0},streamReconnectDelay:{default:1e3,minimum:0},allAttributesPrivate:{default:!1},privateAttributes:{default:[]},bootstrap:{type:"string|object"},diagnosticRecordingInterval:{default:9e5,minimum:2e3},diagnosticOptOut:{default:!1},wrapperName:{type:"string"},wrapperVersion:{type:"string"},stateProvider:{type:"object"},application:{validator:function(e,t,n){const r={};return t.id&&(r.id=ac(`${e}.id`,t.id,n)),t.version&&(r.version=ac(`${e}.version`,t.version,n)),r}},inspectors:{default:[]},hooks:{default:[]},plugins:{default:[]}},r2=/^(\w|\.|-)+$/;function Ha(e){return e&&e.replace(/\/+$/,"")}function ac(e,t,n){if(typeof t=="string"&&t.match(r2)){if(!(t.length>64))return t;n.warn(oe.tagValueTooLong(e))}else n.warn(oe.invalidTagValue(e))}var ju={baseOptionDefs:ic,validate:function(e,t,n,r){const o=ue.extend({logger:{default:r}},ic,n),i={};function a(u){ue.onNextTick(()=>{t&&t.maybeReportError(new Pe.LDInvalidArgumentError(u))})}let s=ue.extend({},e||{});return function(u){const l=u;Object.keys(i).forEach(c=>{if(l[c]!==void 0){const d=i[c];r&&r.warn(oe.deprecated(c,d)),d&&(l[d]===void 0&&(l[d]=l[c]),delete l[c])}})}(s),s=function(u){const l=ue.extend({},u);return Object.keys(o).forEach(c=>{l[c]!==void 0&&l[c]!==null||(l[c]=o[c]&&o[c].default)}),l}(s),s=function(u){const l=ue.extend({},u),c=d=>{if(d===null)return"any";if(d===void 0)return;if(Array.isArray(d))return"array";const p=typeof d;return p==="boolean"||p==="string"||p==="number"||p==="function"?p:"object"};return Object.keys(u).forEach(d=>{const p=u[d];if(p!=null){const f=o[d];if(f===void 0)a(oe.unknownOption(d));else{const h=f.type||c(f.default),m=f.validator;if(m){const C=m(d,u[d],r);C!==void 0?l[d]=C:delete l[d]}else if(h!=="any"){const C=h.split("|"),x=c(p);C.indexOf(x)<0?h==="boolean"?(l[d]=!!p,a(oe.wrongOptionTypeBoolean(d,x))):(a(oe.wrongOptionType(d,h,x)),l[d]=f.default):x==="number"&&f.minimum!==void 0&&p<f.minimum&&(a(oe.optionBelowMinimum(d,p,f.minimum)),l[d]=f.minimum)}}}}),l.baseUrl=Ha(l.baseUrl),l.streamUrl=Ha(l.streamUrl),l.eventsUrl=Ha(l.eventsUrl),l}(s),n2(s.logger),s},getTags:function(e){const t={};return e&&(e.application&&e.application.id!==void 0&&e.application.id!==null&&(t["application-id"]=[e.application.id]),e.application&&e.application.version!==void 0&&e.application.id!==null&&(t["application-version"]=[e.application.version])),t}};const{getLDUserAgentString:o2}=ue;var Bu={getLDHeaders:function(e,t){if(t&&!t.sendLDHeaders)return{};const n={};n[e.userAgentHeaderName||"User-Agent"]=o2(e),t&&t.wrapperName&&(n["X-LaunchDarkly-Wrapper"]=t.wrapperVersion?t.wrapperName+"/"+t.wrapperVersion:t.wrapperName);const r=ju.getTags(t),o=Object.keys(r);return o.length&&(n["x-launchdarkly-tags"]=o.sort().map(i=>Array.isArray(r[i])?r[i].sort().map(a=>`${i}/${a}`):[`${i}/${r[i]}`]).reduce((i,a)=>i.concat(a),[]).join(" ")),n},transformHeaders:function(e,t){return t&&t.requestHeaderTransform?t.requestHeaderTransform(Se({},e)):e}};const{v1:i2}=Fu,{getLDHeaders:a2,transformHeaders:s2}=Bu;var m0=function(e,t,n){const r=ue.extend({"Content-Type":"application/json"},a2(e,n)),o={};return o.sendEvents=(i,a,s)=>{if(!e.httpRequest)return Promise.resolve();const u=JSON.stringify(i),l=s?null:i2();return function c(d){const p=s?r:ue.extend({},r,{"X-LaunchDarkly-Event-Schema":"4","X-LaunchDarkly-Payload-ID":l});return e.httpRequest("POST",a,s2(p,n),u).promise.then(f=>{if(f)return f.status>=400&&Pe.isHttpErrorRecoverable(f.status)&&d?c(!1):function(h){const m={status:h.status},C=h.header("date");if(C){const x=Date.parse(C);x&&(m.serverTime=x)}return m}(f)}).catch(()=>d?c(!1):Promise.reject())}(!0).catch(()=>{})},o},u2=function e(t,n=[]){if(t===null||typeof t!="object")return JSON.stringify(t);if(n.includes(t))throw new Error("Cycle detected");return Array.isArray(t)?`[${t.map(r=>e(r,[...n,t])).map(r=>r===void 0?"null":r).join(",")}]`:`{${Object.keys(t).sort().map(r=>{const o=e(t[r],[...n,t]);if(o!==void 0)return`${JSON.stringify(r)}:${o}`}).filter(r=>r!==void 0).join(",")}}`};const{commonBasicLogger:l2}=Uu;function sc(e){return typeof e=="string"&&e!=="kind"&&e.match(/^(\w|\.|-)+$/)}var ga={checkContext:function(e,t){if(e){if(t&&(e.kind===void 0||e.kind===null))return e.key!==void 0&&e.key!==null;const n=e.key,r=e.kind===void 0?"user":e.kind,o=sc(r),i=r==="multi"||n!=null&&n!=="";if(r==="multi"){const a=Object.keys(e).filter(s=>s!=="kind");return i&&a.every(s=>sc(s))&&a.every(s=>{const u=e[s].key;return u!=null&&u!==""})}return i&&o}return!1},getContextKeys:function(e,t=l2()){if(!e)return;const n={},{kind:r,key:o}=e;switch(r){case void 0:n.user=`${o}`;break;case"multi":Object.entries(e).filter(([i])=>i!=="kind").forEach(([i,a])=>{a&&a.key&&(n[i]=a.key)});break;case null:t.warn(`null is not a valid context kind: ${e}`);break;case"":t.warn(`'' is not a valid context kind: ${e}`);break;default:n[r]=`${o}`}return n},getContextKinds:function(e){return e?e.kind===null||e.kind===void 0?["user"]:e.kind!=="multi"?[e.kind]:Object.keys(e).filter(t=>t!=="kind"):[]}};const{getContextKinds:c2}=ga;var d2=function(){const e={};let t=0,n=0,r={},o={};return e.summarizeEvent=i=>{if(i.kind==="feature"){const a=i.key+":"+(i.variation!==null&&i.variation!==void 0?i.variation:"")+":"+(i.version!==null&&i.version!==void 0?i.version:""),s=r[a];let u=o[i.key];u||(u=new Set,o[i.key]=u),function(l){return l.context?c2(l.context):l.contextKeys?Object.keys(l.contextKeys):[]}(i).forEach(l=>u.add(l)),s?s.count=s.count+1:r[a]={count:1,key:i.key,version:i.version,variation:i.variation,value:i.value,default:i.default},(t===0||i.creationDate<t)&&(t=i.creationDate),i.creationDate>n&&(n=i.creationDate)}},e.getSummary=()=>{const i={};let a=!0;for(const s of Object.values(r)){let u=i[s.key];u||(u={default:s.default,counters:[],contextKinds:[...o[s.key]]},i[s.key]=u);const l={value:s.value,count:s.count};s.variation!==void 0&&s.variation!==null&&(l.variation=s.variation),s.version!==void 0&&s.version!==null?l.version=s.version:l.unknown=!0,u.counters.push(l),a=!1}return a?null:{startDate:t,endDate:n,features:i,kind:"summary"}},e.clearSummary=()=>{t=0,n=0,r={},o={}},e},p2=function(e){let t={},n={};return{summarizeEvent:function(r){if(r.kind==="feature"){const o=u2(r.context);if(!o)return;let i=t[o];i||(t[o]=d2(),i=t[o],n[o]=r.context),i.summarizeEvent(r)}},getSummaries:function(){const r=t,o=n;return t={},n={},Object.entries(r).map(([i,a])=>{const s=a.getSummary();return s.context=e.filter(o[i]),s})}}};function b0(e){return e.replace(/~/g,"~0").replace(/\//g,"~1")}function uc(e){return(e.startsWith("/")?e.substring(1):e).split("/").map(t=>t.indexOf("~")>=0?t.replace(/~1/g,"/").replace(/~0/g,"~"):t)}function lc(e){return!e.startsWith("/")}function cc(e,t){const n=lc(e),r=lc(t);if(n&&r)return e===t;if(n){const o=uc(t);return o.length===1&&e===o[0]}if(r){const o=uc(e);return o.length===1&&t===o[0]}return e===t}function dc(e){return`/${b0(e)}`}var Va={cloneExcluding:function(e,t){const n=[],r={},o=[];for(n.push(...Object.keys(e).map(i=>({key:i,ptr:dc(i),source:e,parent:r,visited:[e]})));n.length;){const i=n.pop();if(t.some(a=>cc(a,i.ptr)))o.push(i.ptr);else{const a=i.source[i.key];if(a===null)i.parent[i.key]=a;else if(Array.isArray(a))i.parent[i.key]=[...a];else if(typeof a=="object"){if(i.visited.includes(a))continue;i.parent[i.key]={},n.push(...Object.keys(a).map(s=>{return{key:s,ptr:(u=i.ptr,l=b0(s),`${u}/${l}`),source:a,parent:i.parent[i.key],visited:[...i.visited,a]};var u,l}))}else i.parent[i.key]=a}}return{cloned:r,excluded:o.sort()}},compare:cc,literalToReference:dc},f2=function(e){const t={},n=e.allAttributesPrivate,r=e.privateAttributes||[],o=["key","kind","_meta","anonymous"],i=["name","ip","firstName","lastName","email","avatar","country"],a=(s,u)=>{if(typeof s!="object"||s===null||Array.isArray(s))return;const{cloned:l,excluded:c}=Va.cloneExcluding(s,((d,p)=>(n||p&&d.anonymous?Object.keys(d):[...r,...d._meta&&d._meta.privateAttributes||[]]).filter(f=>!o.some(h=>Va.compare(f,h))))(s,u));return l.key=String(l.key),c.length&&(l._meta||(l._meta={}),l._meta.redactedAttributes=c),l._meta&&(delete l._meta.privateAttributes,Object.keys(l._meta).length===0&&delete l._meta),l.anonymous!==void 0&&(l.anonymous=!!l.anonymous),l};return t.filter=(s,u=!1)=>s.kind===void 0||s.kind===null?a((l=>{const c=Bo(Se({},l.custom||{}),{kind:"user",key:l.key});l.anonymous!==void 0&&(c.anonymous=!!l.anonymous);for(const d of i)delete c[d],l[d]!==void 0&&l[d]!==null&&(c[d]=String(l[d]));return l.privateAttributeNames!==void 0&&l.privateAttributeNames!==null&&(c._meta=c._meta||{},c._meta.privateAttributes=l.privateAttributeNames.map(d=>d.startsWith("/")?Va.literalToReference(d):d)),c})(s),u):s.kind==="multi"?((l,c)=>{const d={kind:l.kind},p=Object.keys(l);for(const f of p)if(f!=="kind"){const h=a(l[f],c);h&&(d[f]=h)}return d})(s,u):a(s,u),t};const{getContextKeys:h2}=ga;var g2=function(e,t,n,r=null,o=null,i=null){const a={},s=i||m0(e,n,t),u=ue.appendUrlPath(t.eventsUrl,"/events/bulk/"+n),l=f2(t),c=p2(l),d=t.samplingInterval,p=t.eventCapacity,f=t.flushInterval,h=t.logger;let m,C=[],x=0,_=!1,I=!1;function q(){return d===0||Math.floor(Math.random()*d)===0}function H(W){const v=ue.extend({},W);return W.kind==="identify"||W.kind==="feature"||W.kind==="custom"?v.context=l.filter(W.context):(v.contextKeys=h2(W.context,h),delete v.context),W.kind==="feature"&&(delete v.trackEvents,delete v.debugEventsUntilDate),v}function D(W){C.length<p?(C.push(W),I=!1):(I||(I=!0,h.warn(oe.eventCapacityExceeded())),r&&r.incrementDroppedEvents())}return a.enqueue=function(W){if(_)return;let v=!1,E=!1;var P;if(c.summarizeEvent(W),W.kind==="feature"?q()&&(v=!!W.trackEvents,E=!!(P=W).debugEventsUntilDate&&P.debugEventsUntilDate>x&&P.debugEventsUntilDate>new Date().getTime()):v=q(),v&&D(H(W)),E){const N=ue.extend({},W,{kind:"debug"});N.context=l.filter(N.context),delete N.trackEvents,delete N.debugEventsUntilDate,D(N)}},a.flush=async function(){if(_)return Promise.resolve();const W=C;return c.getSummaries().forEach(v=>{Object.keys(v.features).length&&W.push(v)}),r&&r.setEventsInLastBatch(W.length),W.length===0?Promise.resolve():(C=[],h.debug(oe.debugPostingEvents(W.length)),s.sendEvents(W,u).then(v=>{v&&(v.serverTime&&(x=v.serverTime),Pe.isHttpErrorRecoverable(v.status)||(_=!0),v.status>=400&&ue.onNextTick(()=>{o.maybeReportError(new Pe.LDUnexpectedResponseError(oe.httpErrorMessage(v.status,"event posting","some events were dropped")))}))}))},a.start=function(){const W=()=>{a.flush(),m=setTimeout(W,f)};m=setTimeout(W,f)},a.stop=function(){clearTimeout(m)},a},m2=function(e){const t={},n={};return t.on=function(r,o,i){n[r]=n[r]||[],n[r]=n[r].concat({handler:o,context:i})},t.off=function(r,o,i){if(n[r])for(let a=0;a<n[r].length;a++)n[r][a].handler===o&&n[r][a].context===i&&(n[r]=n[r].slice(0,a).concat(n[r].slice(a+1)))},t.emit=function(r){if(!n[r])return;const o=n[r].slice(0);for(let i=0;i<o.length;i++)o[i].handler.apply(o[i].context,Array.prototype.slice.call(arguments,1))},t.getEvents=function(){return Object.keys(n)},t.getEventListenerCount=function(r){return n[r]?n[r].length:0},t.maybeReportError=function(r){r&&(n.error?this.emit("error",r):(e||console).error(r.message))},t};const Jo="ready",qa="initialized",Za="failed";var b2=function(e){let t=!1,n=!1,r=null,o=null;const i=new Promise(a=>{const s=()=>{e.off(Jo,s),a()};e.on(Jo,s)}).catch(()=>{});return{getInitializationPromise:()=>o||(t?Promise.resolve():n?Promise.reject(r):(o=new Promise((a,s)=>{const u=()=>{e.off(qa,u),a()},l=c=>{e.off(Za,l),s(c)};e.on(qa,u),e.on(Za,l)}),o)),getReadyPromise:()=>i,signalSuccess:()=>{t||n||(t=!0,e.emit(qa),e.emit(Jo))},signalFailure:a=>{t||n||(n=!0,r=a,e.emit(Za,a),e.emit(Jo)),e.maybeReportError(a)}}},w2=function(e,t,n,r){const o={};function i(){let a="";const s=r.getContext();return s&&(a=n||ue.btoa(JSON.stringify(s))),"ld:"+t+":"+a}return o.loadFlags=()=>e.get(i()).then(a=>{if(a==null)return null;try{let s=JSON.parse(a);if(s){const u=s.$schema;u===void 0||u<1?s=ue.transformValuesToVersionedValues(s):delete s.$schema}return s}catch{return o.clearFlags().then(()=>null)}}),o.saveFlags=a=>{const s=ue.extend({},a,{$schema:1});return e.set(i(),JSON.stringify(s))},o.clearFlags=()=>e.clear(i()),o},y2=function(e,t){const n={};let r=!1;const o=i=>{r||(r=!0,t.warn(oe.localStorageUnavailable(i)))};return n.isEnabled=()=>!!e,n.get=i=>new Promise(a=>{e?e.get(i).then(a).catch(s=>{o(s),a(void 0)}):a(void 0)}),n.set=(i,a)=>new Promise(s=>{e?e.set(i,a).then(()=>s(!0)).catch(u=>{o(u),s(!1)}):s(!1)}),n.clear=i=>new Promise(a=>{e?e.clear(i).then(()=>a(!0)).catch(s=>{o(s),a(!1)}):a(!1)}),n};const{appendUrlPath:pc,base64URLEncode:x2,objectHasOwnProperty:k2}=ue,{getLDHeaders:v2,transformHeaders:_2}=Bu,{isHttpErrorRecoverable:C2}=Pe;var E2=function(e,t,n,r){const o=t.streamUrl,i=t.logger,a={},s=pc(o,"/eval/"+n),u=t.useReport,l=t.evaluationReasons,c=t.streamReconnectDelay,d=v2(e,t);let p,f=!1,h=null,m=null,C=null,x=null,_=null,I=0;function q(){const P=(N=function(){const Q=c*Math.pow(2,I);return Q>3e4?3e4:Q}(),N-Math.trunc(.5*Math.random()*N));var N;return I+=1,P}function H(P){if(P.status&&typeof P.status=="number"&&!C2(P.status))return v(),i.error(oe.unrecoverableStreamError(P)),void(m&&(clearTimeout(m),m=null));const N=q();f||(i.warn(oe.streamError(P,N)),f=!0),E(!1),v(),D(N)}function D(P){m||(P?m=setTimeout(W,P):W())}function W(){let P;m=null;let N="";const Q={headers:d,readTimeoutMillis:3e5};if(e.eventSourceFactory){x!=null&&(N="h="+x),u?e.eventSourceAllowsReport?(P=s,Q.method="REPORT",Q.headers["Content-Type"]="application/json",Q.body=JSON.stringify(C)):(P=pc(o,"/ping/"+n),N=""):P=s+"/"+x2(JSON.stringify(C)),Q.headers=_2(Q.headers,t),l&&(N=N+(N?"&":"")+"withReasons=true"),P=P+(N?"?":"")+N,v(),i.info(oe.streamConnecting(P)),p=new Date().getTime(),h=e.eventSourceFactory(P,Q);for(const K in _)k2(_,K)&&h.addEventListener(K,_[K]);h.onerror=H,h.onopen=()=>{I=0}}}function v(){h&&(i.info(oe.streamClosing()),h.close(),h=null)}function E(P){p&&r&&r.recordStreamInit(p,!P,new Date().getTime()-p),p=null}return a.connect=function(P,N,Q){C=P,x=N,_={};for(const K in Q||{})_[K]=function(Ve){f=!1,E(!0),Q[K]&&Q[K](Ve)};D()},a.disconnect=function(){clearTimeout(m),m=null,v()},a.isConnected=function(){return!!(h&&e.eventSourceIsActive&&e.eventSourceIsActive(h))},a},S2=function(e){let t,n,r,o;const i={addPromise:(a,s)=>{t=a,n&&n(),n=s,a.then(u=>{t===a&&(r(u),e&&e())},u=>{t===a&&(o(u),e&&e())})}};return i.resultPromise=new Promise((a,s)=>{r=a,o=s}),i};const{transformHeaders:L2,getLDHeaders:O2}=Bu,fc="application/json";var A2=function(e,t,n){const r=t.baseUrl,o=t.useReport,i=t.evaluationReasons,a=t.logger,s={},u={};function l(c,d){if(!e.httpRequest)return new Promise((x,_)=>{_(new Pe.LDFlagFetchError(oe.httpUnavailable()))});const p=d?"REPORT":"GET",f=O2(e,t);d&&(f["Content-Type"]=fc);let h=u[c];h||(h=S2(()=>{delete u[c]}),u[c]=h);const m=e.httpRequest(p,c,L2(f,t),d),C=m.promise.then(x=>{if(x.status===200){if(x.header("content-type")&&x.header("content-type").substring(0,16)===fc)return JSON.parse(x.body);{const _=oe.invalidContentType(x.header("content-type")||"");return Promise.reject(new Pe.LDFlagFetchError(_))}}return Promise.reject(function(_){return _.status===404?new Pe.LDInvalidEnvironmentIdError(oe.environmentNotFound()):new Pe.LDFlagFetchError(oe.errorFetchingFlags(_.statusText||String(_.status)))}(x))},x=>Promise.reject(new Pe.LDFlagFetchError(oe.networkError(x))));return h.addPromise(C,()=>{m.cancel&&m.cancel()}),h.resultPromise}return s.fetchJSON=function(c){return l(ue.appendUrlPath(r,c),null)},s.fetchFlagSettings=function(c,d){let p,f,h,m="";return o?(f=[r,"/sdk/evalx/",n,"/context"].join(""),h=JSON.stringify(c)):(p=ue.base64URLEncode(JSON.stringify(c)),f=[r,"/sdk/evalx/",n,"/contexts/",p].join("")),d&&(m="h="+d),i&&(m=m+(m?"&":"")+"withReasons=true"),f=f+(m?"?":"")+m,a.debug(oe.debugPolling(f)),l(f,h)},s},$2=function(e,t){const n={};let r;return n.setContext=function(o){r=ue.sanitizeContext(o),r&&t&&t(ue.clone(r))},n.getContext=function(){return r?ue.clone(r):null},n};const{v1:T2}=Fu,{getContextKinds:P2}=ga;var z2=function(e){function t(r){return r==null||r==="user"?"ld:$anonUserId":`ld:$contextKey:${r}`}function n(r,o){return o.key!==null&&o.key!==void 0?(o.key=o.key.toString(),Promise.resolve(o)):o.anonymous?function(i){return e.get(t(i))}(r).then(i=>{if(i)return o.key=i,o;{const a=T2();return o.key=a,function(s,u){return e.set(t(u),s)}(a,r).then(()=>o)}}):Promise.reject(new Pe.LDInvalidUserError(oe.invalidContext()))}this.processContext=r=>{if(!r)return Promise.reject(new Pe.LDInvalidUserError(oe.contextNotSpecified()));const o=ue.clone(r);if(r.kind==="multi"){const i=P2(o);return Promise.all(i.map(a=>n(a,o[a]))).then(()=>o)}return n(r.kind,o)}};const{v1:M2}=Fu,{baseOptionDefs:Ga}=ju,{appendUrlPath:R2}=ue;var Wa={DiagnosticId:function(e){const t={diagnosticId:M2()};return e&&(t.sdkKeySuffix=e.length>6?e.substring(e.length-6):e),t},DiagnosticsAccumulator:function(e){let t,n,r,o;function i(a){t=a,n=0,r=0,o=[]}return i(e),{getProps:()=>({dataSinceDate:t,droppedEvents:n,eventsInLastBatch:r,streamInits:o}),setProps:a=>{t=a.dataSinceDate,n=a.droppedEvents||0,r=a.eventsInLastBatch||0,o=a.streamInits||[]},incrementDroppedEvents:()=>{n++},setEventsInLastBatch:a=>{r=a},recordStreamInit:(a,s,u)=>{const l={timestamp:a,failed:s,durationMillis:u};o.push(l)},reset:i}},DiagnosticsManager:function(e,t,n,r,o,i,a){const s=!!e.diagnosticUseCombinedEvent,u="ld:"+o+":$diagnostics",l=R2(i.eventsUrl,"/events/diagnostic/"+o),c=i.diagnosticRecordingInterval,d=n;let p,f,h=!!i.streaming;const m={};function C(){return{sdk:I(),configuration:q(),platform:e.diagnosticPlatformData}}function x(H){i.logger&&i.logger.debug(oe.debugPostingDiagnosticEvent(H)),r.sendEvents(H,l,!0).then(()=>{}).catch(()=>{})}function _(){x(function(){const H=new Date().getTime();let D=Se({kind:s?"diagnostic-combined":"diagnostic",id:a,creationDate:H},d.getProps());return s&&(D=Se(Se({},D),C())),d.reset(H),D}()),f=setTimeout(_,c),p=new Date().getTime(),s&&function(){if(t.isEnabled()){const H=Se({},d.getProps());t.set(u,JSON.stringify(H))}}()}function I(){const H=Se({},e.diagnosticSdkData);return i.wrapperName&&(H.wrapperName=i.wrapperName),i.wrapperVersion&&(H.wrapperVersion=i.wrapperVersion),H}function q(){return{customBaseURI:i.baseUrl!==Ga.baseUrl.default,customStreamURI:i.streamUrl!==Ga.streamUrl.default,customEventsURI:i.eventsUrl!==Ga.eventsUrl.default,eventsCapacity:i.eventCapacity,eventsFlushIntervalMillis:i.flushInterval,reconnectTimeMillis:i.streamReconnectDelay,streamingDisabled:!h,allAttributesPrivate:!!i.allAttributesPrivate,diagnosticRecordingIntervalMillis:i.diagnosticRecordingInterval,usingSecureMode:!!i.hash,bootstrapMode:!!i.bootstrap,fetchGoalsDisabled:!i.fetchGoals,sendEventsOnlyForVariation:!!i.sendEventsOnlyForVariation}}return m.start=()=>{s?function(H){if(!t.isEnabled())return H(!1);t.get(u).then(D=>{if(D)try{const W=JSON.parse(D);d.setProps(W),p=W.dataSinceDate}catch{}H(!0)}).catch(()=>{H(!1)})}(H=>{if(H){const D=(p||0)+c,W=new Date().getTime();W>=D?_():f=setTimeout(_,D-W)}else Math.floor(4*Math.random())===0?_():f=setTimeout(_,c)}):(x(Se({kind:"diagnostic-init",id:a,creationDate:d.getProps().dataSinceDate},C())),f=setTimeout(_,c))},m.stop=()=>{f&&clearTimeout(f)},m.setStreaming=H=>{h=H},m}},D2=function(e,t){let n=!1;const r={type:e.type,name:e.name,synchronous:e.synchronous,method:(...o)=>{try{e.method(...o)}catch{n||(n=!0,t.warn(oe.inspectorMethodError(r.type,r.name)))}}};return r};const{onNextTick:Qo}=ue,it={flagUsed:"flag-used",flagDetailsChanged:"flag-details-changed",flagDetailChanged:"flag-detail-changed",clientIdentityChanged:"client-identity-changed"};Object.freeze(it);var I2={InspectorTypes:it,InspectorManager:function(e,t){const n={},r={[it.flagUsed]:[],[it.flagDetailsChanged]:[],[it.flagDetailChanged]:[],[it.clientIdentityChanged]:[]},o={[it.flagUsed]:[],[it.flagDetailsChanged]:[],[it.flagDetailChanged]:[],[it.clientIdentityChanged]:[]},i=e&&e.map(a=>D2(a,t));return i&&i.forEach(a=>{Object.prototype.hasOwnProperty.call(r,a.type)&&!a.synchronous?r[a.type].push(a):Object.prototype.hasOwnProperty.call(o,a.type)&&a.synchronous?o[a.type].push(a):t.warn(oe.invalidInspector(a.type,a.name))}),n.hasListeners=a=>r[a]&&r[a].length||o[a]&&o[a].length,n.onFlagUsed=(a,s,u)=>{const l=it.flagUsed;o[l].length&&o[l].forEach(c=>c.method(a,s,u)),r[l].length&&Qo(()=>{r[l].forEach(c=>c.method(a,s,u))})},n.onFlags=a=>{const s=it.flagDetailsChanged;o[s].length&&o[s].forEach(u=>u.method(a)),r[s].length&&Qo(()=>{r[s].forEach(u=>u.method(a))})},n.onFlagChanged=(a,s)=>{const u=it.flagDetailChanged;o[u].length&&o[u].forEach(l=>l.method(a,s)),r[u].length&&Qo(()=>{r[u].forEach(l=>l.method(a,s))})},n.onIdentityChanged=a=>{const s=it.clientIdentityChanged;o[s].length&&o[s].forEach(u=>u.method(a)),r[s].length&&Qo(()=>{r[s].forEach(u=>u.method(a))})},n}};const{LDTimeoutError:F2}=Pe;var U2=function(e,t){return new Promise((n,r)=>{setTimeout(()=>{r(new F2(`${t} timed out after ${e} seconds.`))},1e3*e)})};const hc="unknown hook";function qr(e,t,n,r,o){try{return r()}catch(i){return e==null||e.error(`An error was encountered in "${t}" of the "${n}" hook: ${i}`),o}}function Zr(e,t){try{return t.getMetadata().name||hc}catch{return e.error("Exception thrown getting metadata for hook. Unable to get hook name."),hc}}var j2=function(e,t){const n=t?[...t]:[];return{withEvaluation:function(r,o,i,a){if(n.length===0)return a();const s=[...n],u={flagKey:r,context:o,defaultValue:i},l=function(d,p,f){return p.map(h=>qr(d,"beforeEvaluation",Zr(d,h),()=>{var C;var m;return(C=(m=h==null?void 0:h.beforeEvaluation)==null?void 0:m.call(h,f,{}))!=null?C:{}},{}))}(e,s,u),c=a();return function(d,p,f,h,m){for(let C=p.length-1;C>=0;C-=1){const x=p[C],_=h[C];qr(d,"afterEvaluation",Zr(d,x),()=>{var q;var I;return(q=(I=x==null?void 0:x.afterEvaluation)==null?void 0:I.call(x,f,_,m))!=null?q:{}},{})}}(e,s,u,l,c),c},identify:function(r,o){const i=[...n],a={context:r,timeout:o},s=function(u,l,c){return l.map(d=>qr(u,"beforeIdentify",Zr(u,d),()=>{var f;var p;return(f=(p=d==null?void 0:d.beforeIdentify)==null?void 0:p.call(d,c,{}))!=null?f:{}},{}))}(e,i,a);return u=>{(function(l,c,d,p,f){for(let h=c.length-1;h>=0;h-=1){const m=c[h],C=p[h];qr(l,"afterIdentify",Zr(l,m),()=>{var _;var x;return(_=(x=m==null?void 0:m.afterIdentify)==null?void 0:x.call(m,d,C,f))!=null?_:{}},{})}})(e,i,a,s,u)}},addHook:function(r){n.push(r)},afterTrack:function(r){if(n.length===0)return;const o=[...n];(function(i,a,s){for(let u=a.length-1;u>=0;u-=1){const l=a[u];qr(i,"afterTrack",Zr(i,l),()=>{var c;return(c=l==null?void 0:l.afterTrack)==null?void 0:c.call(l,s)},void 0)}})(e,o,r)}}};const gc="unknown plugin";function Ja(e,t){try{return t.getMetadata().name||gc}catch{return e.error("Exception thrown getting metadata for plugin. Unable to get plugin name."),gc}}var B2={getPluginHooks:function(e,t,n){const r=[];return n.forEach(o=>{var i;try{const a=(i=o.getHooks)==null?void 0:i.call(o,t);a===void 0?e.error(`Plugin ${Ja(e,o)} returned undefined from getHooks.`):a&&a.length>0&&r.push(...a)}catch{e.error(`Exception thrown getting hooks for plugin ${Ja(e,o)}. Unable to get hooks.`)}}),r},registerPlugins:function(e,t,n,r){r.forEach(o=>{try{o.register(n,t)}catch{e.error(`Exception thrown registering plugin ${Ja(e,o)}.`)}})},createPluginEnvironment:function(e,t,n){const r={};e.userAgent&&(r.name=e.userAgent),e.version&&(r.version=e.version),n.wrapperName&&(r.wrapperName=n.wrapperName),n.wrapperVersion&&(r.wrapperVersion=n.wrapperVersion);const o={};n.application&&(n.application.name&&(o.name=n.application.name),n.application.version&&(o.version=n.application.version));const i={sdk:r,clientSideId:t};return Object.keys(o).length>0&&(i.application=o),i}};const{commonBasicLogger:N2}=Uu,{checkContext:H2}=ga,{InspectorTypes:Ko,InspectorManager:V2}=I2,{getPluginHooks:q2,registerPlugins:Z2,createPluginEnvironment:G2}=B2,Yo="change",mc="internal-change";var w0={initialize:function(e,t,n,r,o){const i=function(){return n&&n.logger?n.logger:o&&o.logger&&o.logger.default||N2("warn")}(),a=m2(i),s=b2(a),u=ju.validate(n,a,o,i),l=V2(u.inspectors,i),c=u.sendEvents;let d=e,p=u.hash;const f=[...u.plugins],h=G2(r,e,u),m=q2(i,h,f),C=j2(i,[...u.hooks,...m]),x=y2(r.localStorage,i),_=m0(r,d,u),I=u.sendEvents&&!u.diagnosticOptOut,q=I?Wa.DiagnosticId(d):null,H=I?Wa.DiagnosticsAccumulator(new Date().getTime()):null,D=I?Wa.DiagnosticsManager(r,x,H,_,d,u,q):null,W=E2(r,u,d,H),v=u.eventProcessor||g2(r,u,d,H,a,_),E=A2(r,u,d);let P,N,Q,K={},Ve=u.streaming,De=!1,pe=!1,de=!0;const ie=u.stateProvider,be=$2(null,function(w){(function(k){ie||k&&gt({kind:"identify",context:k,creationDate:new Date().getTime()})})(w),l.hasListeners(Ko.clientIdentityChanged)&&l.onIdentityChanged(be.getContext())}),Ct=new z2(x),Xe=x.isEnabled()?w2(x,d,p,be):null;function gt(w){d&&(ie&&ie.enqueueEvent&&ie.enqueueEvent(w)||(w.context?(de=!1,!c||pe||r.isDoNotTrack()||(i.debug(oe.debugEnqueueingEvent(w.kind)),v.enqueue(w))):de&&(i.warn(oe.eventWithoutContext()),de=!1)))}function Et(w,k){l.hasListeners(Ko.flagDetailChanged)&&l.onFlagChanged(w.key,G(k))}function wt(){l.hasListeners(Ko.flagDetailsChanged)&&l.onFlags(Object.entries(K).map(([w,k])=>({key:w,detail:G(k)})).reduce((w,k)=>(w[k.key]=k.detail,w),{}))}function $(w,k,y,O){const A=be.getContext(),B=new Date,U={kind:"feature",key:w,context:A,value:k?k.value:null,variation:k?k.variationIndex:null,default:y,creationDate:B.getTime()},V=K[w];V&&(U.version=V.flagVersion?V.flagVersion:V.version,U.trackEvents=V.trackEvents,U.debugEventsUntilDate=V.debugEventsUntilDate),(O||V&&V.trackReason)&&k&&(U.reason=k.reason),gt(U)}function J(w){return H2(w,!1)?Promise.resolve(w):Promise.reject(new Pe.LDInvalidUserError(oe.invalidContext()))}function Z(w,k,y,O,A,B){var U;let V,ee;return K&&ue.objectHasOwnProperty(K,w)&&K[w]&&!K[w].deleted?(ee=K[w],V=G(ee),ee.value!==null&&ee.value!==void 0||(V.value=k)):V={value:k,variationIndex:null,reason:{kind:"ERROR",errorKind:"FLAG_NOT_FOUND"}},y&&(A||(U=ee==null?void 0:ee.prerequisites)==null||U.forEach(me=>{Z(me,void 0,y,!1,!1,!1)}),$(w,V,k,O)),!A&&B&&function(me,_e){l.hasListeners(Ko.flagUsed)&&l.onFlagUsed(me,_e,be.getContext())}(w,V),V}function G(w){return{value:w.value,variationIndex:w.variation===void 0?null:w.variation,reason:w.reason||null}}function ge(){if(N=!0,!be.getContext())return;const w=k=>{try{return JSON.parse(k)}catch{return void a.maybeReportError(new Pe.LDInvalidDataError(oe.invalidData()))}};W.connect(be.getContext(),p,{ping:function(){i.debug(oe.debugStreamPing());const k=be.getContext();E.fetchFlagSettings(k,p).then(y=>{ue.deepEquals(k,be.getContext())&&ne(y||{})}).catch(y=>{a.maybeReportError(new Pe.LDFlagFetchError(oe.errorFetchingFlags(y)))})},put:function(k){const y=w(k.data);y&&(i.debug(oe.debugStreamPut()),ne(y))},patch:function(k){const y=w(k.data);if(!y)return;const O=K[y.key];if(!O||!O.version||!y.version||O.version<y.version){i.debug(oe.debugStreamPatch(y.key));const A={},B=ue.extend({},y);delete B.key,K[y.key]=B;const U=G(B);A[y.key]=O?{previous:O.value,current:U}:{current:U},Et(y,B),se(A)}else i.debug(oe.debugStreamPatchIgnored(y.key))},delete:function(k){const y=w(k.data);if(y)if(!K[y.key]||K[y.key].version<y.version){i.debug(oe.debugStreamDelete(y.key));const O={};K[y.key]&&!K[y.key].deleted&&(O[y.key]={previous:K[y.key].value}),K[y.key]={version:y.version,deleted:!0},Et(y,K[y.key]),se(O)}else i.debug(oe.debugStreamDeleteIgnored(y.key))}})}function Le(){N&&(W.disconnect(),N=!1)}function ne(w){const k={};if(!w)return Promise.resolve();for(const y in K)ue.objectHasOwnProperty(K,y)&&K[y]&&(w[y]&&!ue.deepEquals(w[y].value,K[y].value)?k[y]={previous:K[y].value,current:G(w[y])}:w[y]&&!w[y].deleted||(k[y]={previous:K[y].value}));for(const y in w)ue.objectHasOwnProperty(w,y)&&w[y]&&(!K[y]||K[y].deleted)&&(k[y]={current:G(w[y])});return K=Se({},w),wt(),se(k).catch(()=>{})}function se(w){const k=Object.keys(w);if(k.length>0){const y={};k.forEach(O=>{const A=w[O].current,B=A?A.value:void 0,U=w[O].previous;a.emit(Yo+":"+O,B,U),y[O]=A?{current:B,previous:U}:{previous:U}}),a.emit(Yo,y),a.emit(mc,K),u.sendEventsOnlyForVariation||ie||k.forEach(O=>{$(O,w[O].current)})}return P&&Xe?Xe.saveFlags(K):Promise.resolve()}function ve(){const w=Ve||Q&&Ve===void 0;w&&!N?ge():!w&&N&&Le(),D&&D.setStreaming(w)}function g(w){return w===Yo||w.substr(0,7)===Yo+":"}if(typeof u.bootstrap=="string"&&u.bootstrap.toUpperCase()==="LOCALSTORAGE"&&(Xe?P=!0:i.warn(oe.localStorageUnavailable())),typeof u.bootstrap=="object"&&(K=function(w){const k=Object.keys(w),y="$flagsState",O="$valid",A=w[y];!A&&k.length&&i.warn(oe.bootstrapOldFormat()),w[O]===!1&&i.warn(oe.bootstrapInvalid());const B={};return k.forEach(U=>{if(U!==y&&U!==O){let V={value:w[U]};A&&A[U]?V=ue.extend(V,A[U]):V.version=0,B[U]=V}}),B}(u.bootstrap)),ie){const w=ie.getInitialState();w?b(w):ie.on("init",b),ie.on("update",function(k){k.context&&be.setContext(k.context),k.flags&&ne(k.flags)})}else(function(){if(!e)return Promise.reject(new Pe.LDInvalidEnvironmentIdError(oe.environmentNotSpecified()));let w;return Ct.processContext(t).then(J).then(k=>(w=ue.once(C.identify(k,void 0)),k)).then(k=>(w==null||w({status:"completed"}),be.setContext(k),typeof u.bootstrap=="object"?L():P?Xe.loadFlags().then(y=>y==null?(K={},E.fetchFlagSettings(be.getContext(),p).then(O=>ne(O||{})).then(L).catch(O=>{M(new Pe.LDFlagFetchError(oe.errorFetchingFlags(O)))})):(K=y,ue.onNextTick(L),E.fetchFlagSettings(be.getContext(),p).then(O=>ne(O)).catch(O=>a.maybeReportError(O)))):E.fetchFlagSettings(be.getContext(),p).then(y=>{K=y||{},wt(),L()}).catch(y=>{K={},M(y)}))).catch(k=>{throw w==null||w({status:"error"}),k})})().catch(M);function b(w){d=w.environment,be.setContext(w.context),K=Se({},w.flags),ue.onNextTick(L)}function L(){i.info(oe.clientInitialized()),De=!0,ve(),s.signalSuccess()}function M(w){s.signalFailure(w)}const z={waitForInitialization:function(w=void 0){if(w!=null){if(typeof w=="number")return function(k){k>5&&i.warn("The waitForInitialization function was called with a timeout greater than 5 seconds. We recommend a timeout of 5 seconds or less.");const y=s.getInitializationPromise(),O=U2(k,"waitForInitialization");return Promise.race([O,y]).catch(A=>{throw A instanceof Pe.LDTimeoutError&&i.error(`waitForInitialization error: ${A}`),A})}(w);i.warn("The waitForInitialization method was provided with a non-numeric timeout.")}return i.warn("The waitForInitialization function was called without a timeout specified. In a future version a default timeout will be applied."),s.getInitializationPromise()},waitUntilReady:()=>s.getReadyPromise(),identify:function(w,k,y){if(pe)return ue.wrapPromiseCallback(Promise.resolve({}),y);if(ie)return i.warn(oe.identifyDisabled()),ue.wrapPromiseCallback(Promise.resolve(ue.transformVersionedValuesToValues(K)),y);let O;const A=P&&Xe?Xe.clearFlags():Promise.resolve();return ue.wrapPromiseCallback(A.then(()=>Ct.processContext(w)).then(J).then(B=>(O=ue.once(C.identify(B,void 0)),B)).then(B=>E.fetchFlagSettings(B,k).then(U=>{const V=ue.transformVersionedValuesToValues(U);return be.setContext(B),p=k,U?ne(U).then(()=>V):V})).then(B=>(O==null||O({status:"completed"}),N&&ge(),B)).catch(B=>(O==null||O({status:"error"}),a.maybeReportError(B),Promise.reject(B))),y)},getContext:function(){return be.getContext()},variation:function(w,k){const{value:y}=C.withEvaluation(w,be.getContext(),k,()=>Z(w,k,!0,!1,!1,!0));return y},variationDetail:function(w,k){return C.withEvaluation(w,be.getContext(),k,()=>Z(w,k,!0,!0,!1,!0))},track:function(w,k,y){if(typeof w!="string")return void a.maybeReportError(new Pe.LDInvalidEventKeyError(oe.unknownCustomEventKey(w)));y!==void 0&&typeof y!="number"&&i.warn(oe.invalidMetricValue(typeof y)),r.customEventFilter&&!r.customEventFilter(w)&&i.warn(oe.unknownCustomEventKey(w));const O=be.getContext(),A={kind:"custom",key:w,context:O,url:r.getCurrentUrl(),creationDate:new Date().getTime()};O&&O.anonymous&&(A.contextKind=O.anonymous?"anonymousUser":"user"),k!=null&&(A.data=k),y!=null&&(A.metricValue=y),gt(A),C.afterTrack({context:O,key:w,data:k,metricValue:y})},on:function(w,k,y){g(w)?(Q=!0,De&&ve(),a.on(w,k,y)):a.on(...arguments)},off:function(w){if(a.off(...arguments),g(w)){let k=!1;a.getEvents().forEach(y=>{g(y)&&a.getEventListenerCount(y)>0&&(k=!0)}),k||(Q=!1,N&&Ve===void 0&&Le())}},setStreaming:function(w){const k=w===null?void 0:w;k!==Ve&&(Ve=k,ve())},flush:function(w){return ue.wrapPromiseCallback(c?v.flush():Promise.resolve(),w)},allFlags:function(){const w={};if(!K)return w;for(const k in K)ue.objectHasOwnProperty(K,k)&&!K[k].deleted&&(w[k]=Z(k,null,!u.sendEventsOnlyForVariation,!1,!0,!1).value);return w},close:function(w){if(pe)return ue.wrapPromiseCallback(Promise.resolve(),w);const k=()=>{pe=!0,K={}},y=Promise.resolve().then(()=>{if(Le(),D&&D.stop(),c)return v.stop(),v.flush()}).then(k).catch(k);return ue.wrapPromiseCallback(y,w)},addHook:function(w){C.addHook(w)}};return Z2(i,h,z,f),{client:z,options:u,emitter:a,ident:be,logger:i,requestor:E,start:function(){c&&(D&&D.start(),v.start())},enqueueEvent:gt,getFlagsInternal:function(){return K},getEnvironmentId:()=>d,internalChangeEventName:mc}},errors:Pe},W2=w0.initialize,J2=w0.errors;function Q2(e,t,n){return(t=function(r){var o=function(i,a){if(typeof i!="object"||!i)return i;var s=i[Symbol.toPrimitive];if(s!==void 0){var u=s.call(i,a);if(typeof u!="object")return u;throw new TypeError("@@toPrimitive must return a primitive value.")}return(a==="string"?String:Number)(i)}(r,"string");return typeof o=="symbol"?o:o+""}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function bc(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function wc(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?bc(Object(n),!0).forEach(function(r){Q2(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):bc(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}var yc={promise:Promise.resolve({status:200,header:function(){return null},body:null})};function K2(e,t,n,r,o){if(o&&!function(){var l=window.navigator&&window.navigator.userAgent;if(l){var c=l.match(/Chrom(e|ium)\/([0-9]+)\./);if(c)return parseInt(c[2],10)<73}return!0}())return yc;var i=new window.XMLHttpRequest;for(var a in i.open(e,t,!o),n||{})Object.prototype.hasOwnProperty.call(n,a)&&i.setRequestHeader(a,n[a]);if(o){try{i.send(r)}catch{}return yc}var s,u=new Promise(function(l,c){i.addEventListener("load",function(){s||l({status:i.status,header:function(d){return i.getResponseHeader(d)},body:i.responseText})}),i.addEventListener("error",function(){s||c(new Error)}),i.send(r)});return{promise:u,cancel:function(){s=!0,i.abort()}}}var Qa=e=>{if(typeof e!="string")throw new TypeError("Expected a string");return e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")};function Y2(e,t,n,r){var o,i,a=((e.kind==="substring"||e.kind==="regex")&&r.includes("/")?t:t.replace(r,"")).replace(n,"");switch(e.kind){case"exact":i=t,o=new RegExp("^"+Qa(e.url)+"/?$");break;case"canonical":i=a,o=new RegExp("^"+Qa(e.url)+"/?$");break;case"substring":i=a,o=new RegExp(".*"+Qa(e.substring)+".*$");break;case"regex":i=a,o=new RegExp(e.pattern);break;default:return!1}return o.test(i)}function xc(e,t){for(var n={},r=null,o=[],i=0;i<e.length;i++)for(var a=e[i],s=a.urls||[],u=0;u<s.length;u++)if(Y2(s[u],window.location.href,window.location.search,window.location.hash)){a.kind==="pageview"?t("pageview",a):(o.push(a),t("click_pageview",a));break}return o.length>0&&(r=function(l){for(var c=function(p,f){for(var h=[],m=0;m<f.length;m++)for(var C=p.target,x=f[m],_=x.selector,I=document.querySelectorAll(_);C&&I.length>0;){for(var q=0;q<I.length;q++)C===I[q]&&h.push(x);C=C.parentNode}return h}(l,o),d=0;d<c.length;d++)t("click",c[d])},document.addEventListener("click",r)),n.dispose=function(){document.removeEventListener("click",r)},n}function X2(e,t){var n,r;function o(){r&&r.dispose(),n&&n.length&&(r=xc(n,i))}function i(a,s){var u=e.ident.getContext(),l={kind:a,key:s.key,data:null,url:window.location.href,creationDate:new Date().getTime(),context:u};return a==="click"&&(l.selector=s.selector),e.enqueueEvent(l)}return e.requestor.fetchJSON("/sdk/goals/"+e.getEnvironmentId()).then(function(a){a&&a.length>0&&(r=xc(n=a,i),function(s,u){var l,c=window.location.href;function d(){(l=window.location.href)!==c&&(c=l,u())}(function p(f,h){f(),setTimeout(function(){p(f,h)},h)})(d,s),window.history&&window.history.pushState?window.addEventListener("popstate",d):window.addEventListener("hashchange",d)}(300,o)),t()}).catch(function(a){e.emitter.maybeReportError(new J2.LDUnexpectedResponseError((a&&a.message,a.message))),t()}),{}}var Xo="goalsReady",e3={fetchGoals:{default:!0},hash:{type:"string"},eventProcessor:{type:"object"},eventUrlTransformer:{type:"function"},disableSyncEventPost:{default:!1}};function t3(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=function(c){var d,p={userAgentHeaderName:"X-LaunchDarkly-User-Agent",synchronousFlush:!1};if(window.XMLHttpRequest){var f=c&&c.disableSyncEventPost;p.httpRequest=function(x,_,I,q){var H=p.synchronousFlush&!f;return p.synchronousFlush=!1,K2(x,_,I,q,H)}}p.httpAllowsPost=function(){return d===void 0&&(d=!!window.XMLHttpRequest&&"withCredentials"in new window.XMLHttpRequest),d},p.httpFallbackPing=function(x){new window.Image().src=x};var h,m=c&&c.eventUrlTransformer;p.getCurrentUrl=function(){return m?m(window.location.href):window.location.href},p.isDoNotTrack=function(){var x;return(x=window.navigator&&window.navigator.doNotTrack!==void 0?window.navigator.doNotTrack:window.navigator&&window.navigator.msDoNotTrack!==void 0?window.navigator.msDoNotTrack:window.doNotTrack)===1||x===!0||x==="1"||x==="yes"};try{window.localStorage&&(p.localStorage={get:function(x){return new Promise(function(_){_(window.localStorage.getItem(x))})},set:function(x,_){return new Promise(function(I){window.localStorage.setItem(x,_),I()})},clear:function(x){return new Promise(function(_){window.localStorage.removeItem(x),_()})}})}catch{p.localStorage=null}if(c&&c.useReport&&typeof window.EventSourcePolyfill=="function"&&window.EventSourcePolyfill.supportedOptions&&window.EventSourcePolyfill.supportedOptions.method?(p.eventSourceAllowsReport=!0,h=window.EventSourcePolyfill):(p.eventSourceAllowsReport=!1,h=window.EventSource),window.EventSource){var C=3e5;p.eventSourceFactory=function(x,_){var I=wc(wc({},{heartbeatTimeout:C,silentTimeout:C,skipDefaultHeaders:!0}),_);return new h(x,I)},p.eventSourceIsActive=function(x){return x.readyState===window.EventSource.OPEN||x.readyState===window.EventSource.CONNECTING}}return p.userAgent="JSClient",p.version="3.8.1",p.diagnosticSdkData={name:"js-client-sdk",version:"3.8.1"},p.diagnosticPlatformData={name:"JS"},p.diagnosticUseCombinedEvent=!0,p}(n),o=W2(e,t,n,r,e3),i=o.client,a=o.options,s=o.emitter,u=new Promise(function(c){var d=s.on(Xo,function(){s.off(Xo,d),c()})});i.waitUntilGoalsReady=function(){return u},a.fetchGoals?X2(o,function(){return s.emit(Xo)}):s.emit(Xo),document.readyState!=="complete"?window.addEventListener("load",o.start):o.start();var l=function(){r.synchronousFlush=!0,i.flush().catch(function(){}),r.synchronousFlush=!1};return document.addEventListener("visibilitychange",function(){document.visibilityState==="hidden"&&l()}),window.addEventListener("pagehide",l),i}const n3=(e,t)=>function(n,r){const o=e.value,i=o?t.variation(n,r):r,a=Rr(i),s=u=>a.value=u;return t.on(`change:${n}`,s),Ap(()=>t.off(`change:${n}`,s)),o||t.on("ready",()=>s(t.variation(n,a.value))),na(a)},r3="2.4.1",kc=e=>{var t;return(t=e.context)!=null?t:e.user},o3=Symbol(),i3=Symbol(),a3=Symbol(),s3=Symbol(),j9={install(e,t={}){const n=Rr(!1),r=na(n),o=(i={})=>{var d,p,f,h,m;const a=(d=i.clientSideID)!=null?d:t.clientSideID;if(!a)throw new Error("Cannot initialize LaunchDarkly without a clientSideID");const s=(f=(p=kc(i))!=null?p:kc(t))!=null?f:{anonymous:!0,kind:"user"},u=(h=i.streaming)!=null?h:t.streaming,l=Se(Se({},u!==void 0?{streaming:u}:{}),(m=i.options)!=null?m:t.options),c=t3(a,s,Se({wrapperName:"vue-client-sdk",wrapperVersion:r3},l));return e.provide(a3,c),e.provide(s3,n3(n,c)),c.on("ready",()=>n.value=!0),[r,c]};if(e.provide(i3,r),t.deferInitialization)e.provide(o3,o);else if(t.clientSideID)o(t);else throw new Error("LaunchDarkly plugin requires a clientSideID unless deferInitialization option is used")}};/*!
  * vue-router v4.0.14
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const y0=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",Dr=e=>y0?Symbol("[vue-router]: "+e):"[vue-router]: "+e,u3=Dr("router view location matched"),vc=Dr("router view depth"),ma=Dr("router"),Nu=Dr("route location"),zs=Dr("router view location"),Xt=typeof window!="undefined";function l3(e){return e.__esModule||y0&&e[Symbol.toStringTag]==="Module"}const Ce=Object.assign;function Ka(e,t){const n={};for(const r in t){const o=t[r];n[r]=Array.isArray(o)?o.map(e):e(o)}return n}const ao=()=>{};function xe(e){const t=Array.from(arguments).slice(1);console.warn.apply(console,["[Vue Router warn]: "+e].concat(t))}const c3=/\/$/,d3=e=>e.replace(c3,"");function Ya(e,t,n="/"){let r,o={},i="",a="";const s=t.indexOf("?"),u=t.indexOf("#",s>-1?s:0);return s>-1&&(r=t.slice(0,s),i=t.slice(s+1,u>-1?u:t.length),o=e(i)),u>-1&&(r=r||t.slice(0,u),a=t.slice(u,t.length)),r=h3(r!=null?r:t,n),{fullPath:r+(i&&"?")+i+a,path:r,query:o,hash:a}}function p3(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function _c(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Cc(e,t,n){const r=t.matched.length-1,o=n.matched.length-1;return r>-1&&r===o&&En(t.matched[r],n.matched[o])&&x0(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function En(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function x0(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!f3(e[n],t[n]))return!1;return!0}function f3(e,t){return Array.isArray(e)?Ec(e,t):Array.isArray(t)?Ec(t,e):e===t}function Ec(e,t){return Array.isArray(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function h3(e,t){if(e.startsWith("/"))return e;if(!t.startsWith("/"))return xe(`Cannot resolve a relative location without an absolute path. Trying to resolve "${e}" from "${t}". It should look like "/${t}".`),e;if(!e)return t;const n=t.split("/"),r=e.split("/");let o=n.length-1,i,a;for(i=0;i<r.length;i++)if(a=r[i],!(o===1||a==="."))if(a==="..")o--;else break;return n.slice(0,o).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var wo;(function(e){e.pop="pop",e.push="push"})(wo||(wo={}));var so;(function(e){e.back="back",e.forward="forward",e.unknown=""})(so||(so={}));function g3(e){if(!e)if(Xt){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),d3(e)}const m3=/^[^#]+#/;function b3(e,t){return e.replace(m3,"#")+t}function w3(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const ba=()=>({left:window.pageXOffset,top:window.pageYOffset});function y3(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#");if(typeof e.el=="string"&&(!r||!document.getElementById(e.el.slice(1))))try{const i=document.querySelector(e.el);if(r&&i){xe(`The selector "${e.el}" should be passed as "el: document.querySelector('${e.el}')" because it starts with "#".`);return}}catch{xe(`The selector "${e.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);return}const o=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!o){xe(`Couldn't find element using selector "${e.el}" returned by scrollBehavior.`);return}t=w3(o,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function Sc(e,t){return(history.state?history.state.position-t:-1)+e}const Ms=new Map;function x3(e,t){Ms.set(e,t)}function k3(e){const t=Ms.get(e);return Ms.delete(e),t}let v3=()=>location.protocol+"//"+location.host;function k0(e,t){const{pathname:n,search:r,hash:o}=t,i=e.indexOf("#");if(i>-1){let s=o.includes(e.slice(i))?e.slice(i).length:1,u=o.slice(s);return u[0]!=="/"&&(u="/"+u),_c(u,"")}return _c(n,e)+r+o}function _3(e,t,n,r){let o=[],i=[],a=null;const s=({state:p})=>{const f=k0(e,location),h=n.value,m=t.value;let C=0;if(p){if(n.value=f,t.value=p,a&&a===h){a=null;return}C=m?p.position-m.position:0}else r(f);o.forEach(x=>{x(n.value,h,{delta:C,type:wo.pop,direction:C?C>0?so.forward:so.back:so.unknown})})};function u(){a=n.value}function l(p){o.push(p);const f=()=>{const h=o.indexOf(p);h>-1&&o.splice(h,1)};return i.push(f),f}function c(){const{history:p}=window;!p.state||p.replaceState(Ce({},p.state,{scroll:ba()}),"")}function d(){for(const p of i)p();i=[],window.removeEventListener("popstate",s),window.removeEventListener("beforeunload",c)}return window.addEventListener("popstate",s),window.addEventListener("beforeunload",c),{pauseListeners:u,listen:l,destroy:d}}function Lc(e,t,n,r=!1,o=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:o?ba():null}}function C3(e){const{history:t,location:n}=window,r={value:k0(e,n)},o={value:t.state};o.value||i(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(u,l,c){const d=e.indexOf("#"),p=d>-1?(n.host&&document.querySelector("base")?e:e.slice(d))+u:v3()+e+u;try{t[c?"replaceState":"pushState"](l,"",p),o.value=l}catch(f){xe("Error with push/replace State",f),n[c?"replace":"assign"](p)}}function a(u,l){const c=Ce({},t.state,Lc(o.value.back,u,o.value.forward,!0),l,{position:o.value.position});i(u,c,!0),r.value=u}function s(u,l){const c=Ce({},o.value,t.state,{forward:u,scroll:ba()});t.state||xe(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.`),i(c.current,c,!0);const d=Ce({},Lc(r.value,u,null),{position:c.position+1},l);i(u,d,!1),r.value=u}return{location:r,state:o,push:s,replace:a}}function B9(e){e=g3(e);const t=C3(e),n=_3(e,t.state,t.location,t.replace);function r(i,a=!0){a||n.pauseListeners(),history.go(i)}const o=Ce({location:"",base:e,go:r,createHref:b3.bind(null,e)},t,n);return Object.defineProperty(o,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(o,"state",{enumerable:!0,get:()=>t.state.value}),o}function E3(e){return typeof e=="string"||e&&typeof e=="object"}function v0(e){return typeof e=="string"||typeof e=="symbol"}const cn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},_0=Dr("navigation failure");var Oc;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Oc||(Oc={}));const S3={[1]({location:e,currentLocation:t}){return`No match for
 ${JSON.stringify(e)}${t?`
while being at
`+JSON.stringify(t):""}`},[2]({from:e,to:t}){return`Redirected from "${e.fullPath}" to "${O3(t)}" via a navigation guard.`},[4]({from:e,to:t}){return`Navigation aborted from "${e.fullPath}" to "${t.fullPath}" via a navigation guard.`},[8]({from:e,to:t}){return`Navigation cancelled from "${e.fullPath}" to "${t.fullPath}" with a new navigation.`},[16]({from:e,to:t}){return`Avoided redundant navigation to current location: "${e.fullPath}".`}};function Er(e,t){return Ce(new Error(S3[e](t)),{type:e,[_0]:!0},t)}function dn(e,t){return e instanceof Error&&_0 in e&&(t==null||!!(e.type&t))}const L3=["params","query","hash"];function O3(e){if(typeof e=="string")return e;if("path"in e)return e.path;const t={};for(const n of L3)n in e&&(t[n]=e[n]);return JSON.stringify(t,null,2)}const Ac="[^/]+?",A3={sensitive:!1,strict:!1,start:!0,end:!0},$3=/[.+*?^${}()[\]/\\]/g;function T3(e,t){const n=Ce({},A3,t),r=[];let o=n.start?"^":"";const i=[];for(const l of e){const c=l.length?[]:[90];n.strict&&!l.length&&(o+="/");for(let d=0;d<l.length;d++){const p=l[d];let f=40+(n.sensitive?.25:0);if(p.type===0)d||(o+="/"),o+=p.value.replace($3,"\\$&"),f+=40;else if(p.type===1){const{value:h,repeatable:m,optional:C,regexp:x}=p;i.push({name:h,repeatable:m,optional:C});const _=x||Ac;if(_!==Ac){f+=10;try{new RegExp(`(${_})`)}catch(q){throw new Error(`Invalid custom RegExp for param "${h}" (${_}): `+q.message)}}let I=m?`((?:${_})(?:/(?:${_}))*)`:`(${_})`;d||(I=C&&l.length<2?`(?:/${I})`:"/"+I),C&&(I+="?"),o+=I,f+=20,C&&(f+=-8),m&&(f+=-20),_===".*"&&(f+=-50)}c.push(f)}r.push(c)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(o+="/?"),n.end?o+="$":n.strict&&(o+="(?:/|$)");const a=new RegExp(o,n.sensitive?"":"i");function s(l){const c=l.match(a),d={};if(!c)return null;for(let p=1;p<c.length;p++){const f=c[p]||"",h=i[p-1];d[h.name]=f&&h.repeatable?f.split("/"):f}return d}function u(l){let c="",d=!1;for(const p of e){(!d||!c.endsWith("/"))&&(c+="/"),d=!1;for(const f of p)if(f.type===0)c+=f.value;else if(f.type===1){const{value:h,repeatable:m,optional:C}=f,x=h in l?l[h]:"";if(Array.isArray(x)&&!m)throw new Error(`Provided param "${h}" is an array but it is not repeatable (* or + modifiers)`);const _=Array.isArray(x)?x.join("/"):x;if(!_)if(C)p.length<2&&(c.endsWith("/")?c=c.slice(0,-1):d=!0);else throw new Error(`Missing required param "${h}"`);c+=_}}return c}return{re:a,score:r,keys:i,parse:s,stringify:u}}function P3(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function z3(e,t){let n=0;const r=e.score,o=t.score;for(;n<r.length&&n<o.length;){const i=P3(r[n],o[n]);if(i)return i;n++}return o.length-r.length}const M3={type:0,value:""},R3=/[a-zA-Z0-9_]/;function D3(e){if(!e)return[[]];if(e==="/")return[[M3]];if(!e.startsWith("/"))throw new Error(`Route paths should start with a "/": "${e}" should be "/${e}".`);function t(f){throw new Error(`ERR (${n})/"${l}": ${f}`)}let n=0,r=n;const o=[];let i;function a(){i&&o.push(i),i=[]}let s=0,u,l="",c="";function d(){!l||(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(u==="*"||u==="+")&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:c,repeatable:u==="*"||u==="+",optional:u==="*"||u==="?"})):t("Invalid state to consume buffer"),l="")}function p(){l+=u}for(;s<e.length;){if(u=e[s++],u==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:u==="/"?(l&&d(),a()):u===":"?(d(),n=1):p();break;case 4:p(),n=r;break;case 1:u==="("?n=2:R3.test(u)?p():(d(),n=0,u!=="*"&&u!=="?"&&u!=="+"&&s--);break;case 2:u===")"?c[c.length-1]=="\\"?c=c.slice(0,-1)+u:n=3:c+=u;break;case 3:d(),n=0,u!=="*"&&u!=="?"&&u!=="+"&&s--,c="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${l}"`),d(),a(),o}function I3(e,t,n){const r=T3(D3(e.path),n);{const i=new Set;for(const a of r.keys)i.has(a.name)&&xe(`Found duplicated params with name "${a.name}" for path "${e.path}". Only the last one will be available on "$route.params".`),i.add(a.name)}const o=Ce(r,{record:e,parent:t,children:[],alias:[]});return t&&!o.record.aliasOf==!t.record.aliasOf&&t.children.push(o),o}function F3(e,t){const n=[],r=new Map;t=Tc({strict:!1,end:!0,sensitive:!1},t);function o(c){return r.get(c)}function i(c,d,p){const f=!p,h=j3(c);h.aliasOf=p&&p.record;const m=Tc(t,c),C=[h];if("alias"in c){const I=typeof c.alias=="string"?[c.alias]:c.alias;for(const q of I)C.push(Ce({},h,{components:p?p.record.components:h.components,path:q,aliasOf:p?p.record:h}))}let x,_;for(const I of C){const{path:q}=I;if(d&&q[0]!=="/"){const H=d.record.path,D=H[H.length-1]==="/"?"":"/";I.path=d.record.path+(q&&D+q)}if(I.path==="*")throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.`);if(x=I3(I,d,m),d&&q[0]==="/"&&V3(x,d),p?(p.alias.push(x),H3(p,x)):(_=_||x,_!==x&&_.alias.push(x),f&&c.name&&!$c(x)&&a(c.name)),"children"in h){const H=h.children;for(let D=0;D<H.length;D++)i(H[D],x,p&&p.children[D])}p=p||x,u(x)}return _?()=>{a(_)}:ao}function a(c){if(v0(c)){const d=r.get(c);d&&(r.delete(c),n.splice(n.indexOf(d),1),d.children.forEach(a),d.alias.forEach(a))}else{const d=n.indexOf(c);d>-1&&(n.splice(d,1),c.record.name&&r.delete(c.record.name),c.children.forEach(a),c.alias.forEach(a))}}function s(){return n}function u(c){let d=0;for(;d<n.length&&z3(c,n[d])>=0&&(c.record.path!==n[d].record.path||!C0(c,n[d]));)d++;n.splice(d,0,c),c.record.name&&!$c(c)&&r.set(c.record.name,c)}function l(c,d){let p,f={},h,m;if("name"in c&&c.name){if(p=r.get(c.name),!p)throw Er(1,{location:c});m=p.record.name,f=Ce(U3(d.params,p.keys.filter(_=>!_.optional).map(_=>_.name)),c.params),h=p.stringify(f)}else if("path"in c)h=c.path,h.startsWith("/")||xe(`The Matcher cannot resolve relative paths but received "${h}". Unless you directly called \`matcher.resolve("${h}")\`, this is probably a bug in vue-router. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/router.`),p=n.find(_=>_.re.test(h)),p&&(f=p.parse(h),m=p.record.name);else{if(p=d.name?r.get(d.name):n.find(_=>_.re.test(d.path)),!p)throw Er(1,{location:c,currentLocation:d});m=p.record.name,f=Ce({},d.params,c.params),h=p.stringify(f)}const C=[];let x=p;for(;x;)C.unshift(x.record),x=x.parent;return{name:m,path:h,params:f,matched:C,meta:N3(C)}}return e.forEach(c=>i(c)),{addRoute:i,resolve:l,removeRoute:a,getRoutes:s,getRecordMatcher:o}}function U3(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function j3(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:B3(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||{}:{default:e.component}}}function B3(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="boolean"?n:n[r];return t}function $c(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function N3(e){return e.reduce((t,n)=>Ce(t,n.meta),{})}function Tc(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function Rs(e,t){return e.name===t.name&&e.optional===t.optional&&e.repeatable===t.repeatable}function H3(e,t){for(const n of e.keys)if(!n.optional&&!t.keys.find(Rs.bind(null,n)))return xe(`Alias "${t.record.path}" and the original record: "${e.record.path}" should have the exact same param named "${n.name}"`);for(const n of t.keys)if(!n.optional&&!e.keys.find(Rs.bind(null,n)))return xe(`Alias "${t.record.path}" and the original record: "${e.record.path}" should have the exact same param named "${n.name}"`)}function V3(e,t){for(const n of t.keys)if(!e.keys.find(Rs.bind(null,n)))return xe(`Absolute path "${e.record.path}" should have the exact same param named "${n.name}" as its parent "${t.record.path}".`)}function C0(e,t){return t.children.some(n=>n===e||C0(e,n))}const E0=/#/g,q3=/&/g,Z3=/\//g,G3=/=/g,W3=/\?/g,S0=/\+/g,J3=/%5B/g,Q3=/%5D/g,L0=/%5E/g,K3=/%60/g,O0=/%7B/g,Y3=/%7C/g,A0=/%7D/g,X3=/%20/g;function Hu(e){return encodeURI(""+e).replace(Y3,"|").replace(J3,"[").replace(Q3,"]")}function eb(e){return Hu(e).replace(O0,"{").replace(A0,"}").replace(L0,"^")}function Ds(e){return Hu(e).replace(S0,"%2B").replace(X3,"+").replace(E0,"%23").replace(q3,"%26").replace(K3,"`").replace(O0,"{").replace(A0,"}").replace(L0,"^")}function tb(e){return Ds(e).replace(G3,"%3D")}function nb(e){return Hu(e).replace(E0,"%23").replace(W3,"%3F")}function rb(e){return e==null?"":nb(e).replace(Z3,"%2F")}function yo(e){try{return decodeURIComponent(""+e)}catch{xe(`Error decoding "${e}". Using original value`)}return""+e}function ob(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let o=0;o<r.length;++o){const i=r[o].replace(S0," "),a=i.indexOf("="),s=yo(a<0?i:i.slice(0,a)),u=a<0?null:yo(i.slice(a+1));if(s in t){let l=t[s];Array.isArray(l)||(l=t[s]=[l]),l.push(u)}else t[s]=u}return t}function Pc(e){let t="";for(let n in e){const r=e[n];if(n=tb(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(Array.isArray(r)?r.map(i=>i&&Ds(i)):[r&&Ds(r)]).forEach(i=>{i!==void 0&&(t+=(t.length?"&":"")+n,i!=null&&(t+="="+i))})}return t}function ib(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=Array.isArray(r)?r.map(o=>o==null?null:""+o):r==null?r:""+r)}return t}function Gr(){let e=[];function t(r){return e.push(r),()=>{const o=e.indexOf(r);o>-1&&e.splice(o,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function hn(e,t,n,r,o){const i=r&&(r.enterCallbacks[o]=r.enterCallbacks[o]||[]);return()=>new Promise((a,s)=>{const u=d=>{d===!1?s(Er(4,{from:n,to:t})):d instanceof Error?s(d):E3(d)?s(Er(2,{from:t,to:d})):(i&&r.enterCallbacks[o]===i&&typeof d=="function"&&i.push(d),a())},l=e.call(r&&r.instances[o],t,n,ab(u,t,n));let c=Promise.resolve(l);if(e.length<3&&(c=c.then(u)),e.length>2){const d=`The "next" callback was never called inside of ${e.name?'"'+e.name+'"':""}:
${e.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;if(typeof l=="object"&&"then"in l)c=c.then(p=>u._called?p:(xe(d),Promise.reject(new Error("Invalid navigation guard"))));else if(l!==void 0&&!u._called){xe(d),s(new Error("Invalid navigation guard"));return}}c.catch(d=>s(d))})}function ab(e,t,n){let r=0;return function(){r++===1&&xe(`The "next" callback was called more than once in one navigation guard when going from "${n.fullPath}" to "${t.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`),e._called=!0,r===1&&e.apply(null,arguments)}}function Xa(e,t,n,r){const o=[];for(const i of e)for(const a in i.components){let s=i.components[a];{if(!s||typeof s!="object"&&typeof s!="function")throw xe(`Component "${a}" in record with path "${i.path}" is not a valid component. Received "${String(s)}".`),new Error("Invalid route component");if("then"in s){xe(`Component "${a}" in record with path "${i.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);const u=s;s=()=>u}else s.__asyncLoader&&!s.__warnedDefineAsync&&(s.__warnedDefineAsync=!0,xe(`Component "${a}" in record with path "${i.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`))}if(!(t!=="beforeRouteEnter"&&!i.instances[a]))if(sb(s)){const l=(s.__vccOpts||s)[t];l&&o.push(hn(l,n,r,i,a))}else{let u=s();"catch"in u||(xe(`Component "${a}" in record with path "${i.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`),u=Promise.resolve(u)),o.push(()=>u.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${i.path}"`));const c=l3(l)?l.default:l;i.components[a]=c;const p=(c.__vccOpts||c)[t];return p&&hn(p,n,r,i,a)()}))}}return o}function sb(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function zc(e){const t=zt(ma),n=zt(Nu),r=kt(()=>t.resolve(xr(e.to))),o=kt(()=>{const{matched:u}=r.value,{length:l}=u,c=u[l-1],d=n.matched;if(!c||!d.length)return-1;const p=d.findIndex(En.bind(null,c));if(p>-1)return p;const f=Mc(u[l-2]);return l>1&&Mc(c)===f&&d[d.length-1].path!==f?d.findIndex(En.bind(null,u[l-2])):p}),i=kt(()=>o.value>-1&&db(n.params,r.value.params)),a=kt(()=>o.value>-1&&o.value===n.matched.length-1&&x0(n.params,r.value.params));function s(u={}){return cb(u)?t[xr(e.replace)?"replace":"push"](xr(e.to)).catch(ao):Promise.resolve()}if(Xt){const u=da();if(u){const l={route:r.value,isActive:i.value,isExactActive:a.value};u.__vrl_devtools=u.__vrl_devtools||[],u.__vrl_devtools.push(l),Lh(()=>{l.route=r.value,l.isActive=i.value,l.isExactActive=a.value},{flush:"post"})}}return{route:r,href:kt(()=>r.value.href),isActive:i,isExactActive:a,navigate:s}}const ub=Lp({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:zc,setup(e,{slots:t}){const n=Mr(zc(e)),{options:r}=zt(ma),o=kt(()=>({[Rc(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Rc(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&t.default(n);return e.custom?i:Xp("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},i)}}}),lb=ub;function cb(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function db(e,t){for(const n in t){const r=t[n],o=e[n];if(typeof r=="string"){if(r!==o)return!1}else if(!Array.isArray(o)||o.length!==r.length||r.some((i,a)=>i!==o[a]))return!1}return!0}function Mc(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Rc=(e,t,n)=>e!=null?e:t!=null?t:n,pb=Lp({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(e,{attrs:t,slots:n}){hb();const r=zt(zs),o=kt(()=>e.route||r.value),i=zt(vc,0),a=kt(()=>o.value.matched[i]);si(vc,i+1),si(u3,a),si(zs,o);const s=Rr();return Zn(()=>[s.value,a.value,e.name],([u,l,c],[d,p,f])=>{l&&(l.instances[c]=u,p&&p!==l&&u&&u===d&&(l.leaveGuards.size||(l.leaveGuards=p.leaveGuards),l.updateGuards.size||(l.updateGuards=p.updateGuards))),u&&l&&(!p||!En(l,p)||!d)&&(l.enterCallbacks[c]||[]).forEach(h=>h(u))},{flush:"post"}),()=>{const u=o.value,l=a.value,c=l&&l.components[e.name],d=e.name;if(!c)return Dc(n.default,{Component:c,route:u});const p=l.props[e.name],f=p?p===!0?u.params:typeof p=="function"?p(u):p:null,m=Xp(c,Ce({},f,t,{onVnodeUnmounted:C=>{C.component.isUnmounted&&(l.instances[d]=null)},ref:s}));if(Xt&&m.ref){const C={depth:i,name:l.name,path:l.path,meta:l.meta};(Array.isArray(m.ref)?m.ref.map(_=>_.i):[m.ref.i]).forEach(_=>{_.__vrv_devtools=C})}return Dc(n.default,{Component:m,route:u})||m}}});function Dc(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const fb=pb;function hb(){const e=da(),t=e.parent&&e.parent.type.name;if(t&&(t==="KeepAlive"||t.includes("Transition"))){const n=t==="KeepAlive"?"keep-alive":"transition";xe(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${n}>
    <component :is="Component" />
  </${n}>
</router-view>`)}}function Wr(e,t){const n=Ce({},e,{matched:e.matched.map(r=>_b(r,["instances","children","aliasOf"]))});return{_custom:{type:null,readOnly:!0,display:e.fullPath,tooltip:t,value:n}}}function ei(e){return{_custom:{display:e}}}let gb=0;function mb(e,t,n){if(t.__hasDevtools)return;t.__hasDevtools=!0;const r=gb++;Ru({id:"org.vuejs.router"+(r?"."+r:""),label:"Vue Router",packageName:"vue-router",homepage:"https://router.vuejs.org",logo:"https://router.vuejs.org/logo.png",componentStateTypes:["Routing"],app:e},o=>{o.on.inspectComponent((c,d)=>{c.instanceData&&c.instanceData.state.push({type:"Routing",key:"$route",editable:!1,value:Wr(t.currentRoute.value,"Current Route")})}),o.on.visitComponentTree(({treeNode:c,componentInstance:d})=>{if(d.__vrv_devtools){const p=d.__vrv_devtools;c.tags.push({label:(p.name?`${p.name.toString()}: `:"")+p.path,textColor:0,tooltip:"This component is rendered by &lt;router-view&gt;",backgroundColor:$0})}Array.isArray(d.__vrl_devtools)&&(d.__devtoolsApi=o,d.__vrl_devtools.forEach(p=>{let f=z0,h="";p.isExactActive?(f=P0,h="This is exactly active"):p.isActive&&(f=T0,h="This link is active"),c.tags.push({label:p.route.path,textColor:0,tooltip:h,backgroundColor:f})}))}),Zn(t.currentRoute,()=>{u(),o.notifyComponentUpdate(),o.sendInspectorTree(s),o.sendInspectorState(s)});const i="router:navigations:"+r;o.addTimelineLayer({id:i,label:`Router${r?" "+r:""} Navigations`,color:4237508}),t.onError((c,d)=>{o.addTimelineEvent({layerId:i,event:{title:"Error during Navigation",subtitle:d.fullPath,logType:"error",time:o.now(),data:{error:c},groupId:d.meta.__navigationId}})});let a=0;t.beforeEach((c,d)=>{const p={guard:ei("beforeEach"),from:Wr(d,"Current Location during this navigation"),to:Wr(c,"Target location")};Object.defineProperty(c.meta,"__navigationId",{value:a++}),o.addTimelineEvent({layerId:i,event:{time:o.now(),title:"Start of navigation",subtitle:c.fullPath,data:p,groupId:c.meta.__navigationId}})}),t.afterEach((c,d,p)=>{const f={guard:ei("afterEach")};p?(f.failure={_custom:{type:Error,readOnly:!0,display:p?p.message:"",tooltip:"Navigation Failure",value:p}},f.status=ei("\u274C")):f.status=ei("\u2705"),f.from=Wr(d,"Current Location during this navigation"),f.to=Wr(c,"Target location"),o.addTimelineEvent({layerId:i,event:{title:"End of navigation",subtitle:c.fullPath,time:o.now(),data:f,logType:p?"warning":"default",groupId:c.meta.__navigationId}})});const s="router-inspector:"+r;o.addInspector({id:s,label:"Routes"+(r?" "+r:""),icon:"book",treeFilterPlaceholder:"Search routes"});function u(){if(!l)return;const c=l;let d=n.getRoutes().filter(p=>!p.parent);d.forEach(D0),c.filter&&(d=d.filter(p=>Is(p,c.filter.toLowerCase()))),d.forEach(p=>R0(p,t.currentRoute.value)),c.rootNodes=d.map(M0)}let l;o.on.getInspectorTree(c=>{l=c,c.app===e&&c.inspectorId===s&&u()}),o.on.getInspectorState(c=>{if(c.app===e&&c.inspectorId===s){const p=n.getRoutes().find(f=>f.record.__vd_id===c.nodeId);p&&(c.state={options:wb(p)})}}),o.sendInspectorTree(s),o.sendInspectorState(s)})}function bb(e){return e.optional?e.repeatable?"*":"?":e.repeatable?"+":""}function wb(e){const{record:t}=e,n=[{editable:!1,key:"path",value:t.path}];return t.name!=null&&n.push({editable:!1,key:"name",value:t.name}),n.push({editable:!1,key:"regexp",value:e.re}),e.keys.length&&n.push({editable:!1,key:"keys",value:{_custom:{type:null,readOnly:!0,display:e.keys.map(r=>`${r.name}${bb(r)}`).join(" "),tooltip:"Param keys",value:e.keys}}}),t.redirect!=null&&n.push({editable:!1,key:"redirect",value:t.redirect}),e.alias.length&&n.push({editable:!1,key:"aliases",value:e.alias.map(r=>r.record.path)}),n.push({key:"score",editable:!1,value:{_custom:{type:null,readOnly:!0,display:e.score.map(r=>r.join(", ")).join(" | "),tooltip:"Score used to sort routes",value:e.score}}}),n}const $0=15485081,T0=2450411,P0=8702998,yb=2282478,z0=16486972,xb=6710886;function M0(e){const t=[],{record:n}=e;n.name!=null&&t.push({label:String(n.name),textColor:0,backgroundColor:yb}),n.aliasOf&&t.push({label:"alias",textColor:0,backgroundColor:z0}),e.__vd_match&&t.push({label:"matches",textColor:0,backgroundColor:$0}),e.__vd_exactActive&&t.push({label:"exact",textColor:0,backgroundColor:P0}),e.__vd_active&&t.push({label:"active",textColor:0,backgroundColor:T0}),n.redirect&&t.push({label:"redirect: "+(typeof n.redirect=="string"?n.redirect:"Object"),textColor:16777215,backgroundColor:xb});let r=n.__vd_id;return r==null&&(r=String(kb++),n.__vd_id=r),{id:r,label:n.path,tags:t,children:e.children.map(M0)}}let kb=0;const vb=/^\/(.*)\/([a-z]*)$/;function R0(e,t){const n=t.matched.length&&En(t.matched[t.matched.length-1],e.record);e.__vd_exactActive=e.__vd_active=n,n||(e.__vd_active=t.matched.some(r=>En(r,e.record))),e.children.forEach(r=>R0(r,t))}function D0(e){e.__vd_match=!1,e.children.forEach(D0)}function Is(e,t){const n=String(e.re).match(vb);if(e.__vd_match=!1,!n||n.length<3)return!1;if(new RegExp(n[1].replace(/\$$/,""),n[2]).test(t))return e.children.forEach(a=>Is(a,t)),e.record.path!=="/"||t==="/"?(e.__vd_match=e.re.test(t),!0):!1;const o=e.record.path.toLowerCase(),i=yo(o);return!t.startsWith("/")&&(i.includes(t)||o.includes(t))||i.startsWith(t)||o.startsWith(t)||e.record.name&&String(e.record.name).includes(t)?!0:e.children.some(a=>Is(a,t))}function _b(e,t){const n={};for(const r in e)t.includes(r)||(n[r]=e[r]);return n}function N9(e){const t=F3(e.routes,e),n=e.parseQuery||ob,r=e.stringifyQuery||Pc,o=e.history;if(!o)throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');const i=Gr(),a=Gr(),s=Gr(),u=Z1(cn);let l=cn;Xt&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const c=Ka.bind(null,$=>""+$),d=Ka.bind(null,rb),p=Ka.bind(null,yo);function f($,J){let Z,G;return v0($)?(Z=t.getRecordMatcher($),G=J):G=$,t.addRoute(G,Z)}function h($){const J=t.getRecordMatcher($);J?t.removeRoute(J):xe(`Cannot remove non-existent route "${String($)}"`)}function m(){return t.getRoutes().map($=>$.record)}function C($){return!!t.getRecordMatcher($)}function x($,J){if(J=Ce({},J||u.value),typeof $=="string"){const se=Ya(n,$,J.path),ve=t.resolve({path:se.path},J),g=o.createHref(se.fullPath);return g.startsWith("//")?xe(`Location "${$}" resolved to "${g}". A resolved location cannot start with multiple slashes.`):ve.matched.length||xe(`No match found for location with path "${$}"`),Ce(se,ve,{params:p(ve.params),hash:yo(se.hash),redirectedFrom:void 0,href:g})}let Z;if("path"in $)"params"in $&&!("name"in $)&&Object.keys($.params).length&&xe(`Path "${$.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`),Z=Ce({},$,{path:Ya(n,$.path,J.path).path});else{const se=Ce({},$.params);for(const ve in se)se[ve]==null&&delete se[ve];Z=Ce({},$,{params:d($.params)}),J.params=d(J.params)}const G=t.resolve(Z,J),ge=$.hash||"";ge&&!ge.startsWith("#")&&xe(`A \`hash\` should always start with the character "#". Replace "${ge}" with "#${ge}".`),G.params=c(p(G.params));const Le=p3(r,Ce({},$,{hash:eb(ge),path:G.path})),ne=o.createHref(Le);return ne.startsWith("//")?xe(`Location "${$}" resolved to "${ne}". A resolved location cannot start with multiple slashes.`):G.matched.length||xe(`No match found for location with path "${"path"in $?$.path:$}"`),Ce({fullPath:Le,hash:ge,query:r===Pc?ib($.query):$.query||{}},G,{redirectedFrom:void 0,href:ne})}function _($){return typeof $=="string"?Ya(n,$,u.value.path):Ce({},$)}function I($,J){if(l!==$)return Er(8,{from:J,to:$})}function q($){return W($)}function H($){return q(Ce(_($),{replace:!0}))}function D($){const J=$.matched[$.matched.length-1];if(J&&J.redirect){const{redirect:Z}=J;let G=typeof Z=="function"?Z($):Z;if(typeof G=="string"&&(G=G.includes("?")||G.includes("#")?G=_(G):{path:G},G.params={}),!("path"in G)&&!("name"in G))throw xe(`Invalid redirect found:
${JSON.stringify(G,null,2)}
 when navigating to "${$.fullPath}". A redirect must contain a name or path. This will break in production.`),new Error("Invalid redirect");return Ce({query:$.query,hash:$.hash,params:$.params},G)}}function W($,J){const Z=l=x($),G=u.value,ge=$.state,Le=$.force,ne=$.replace===!0,se=D(Z);if(se)return W(Ce(_(se),{state:ge,force:Le,replace:ne}),J||Z);const ve=Z;ve.redirectedFrom=J;let g;return!Le&&Cc(r,G,Z)&&(g=Er(16,{to:ve,from:G}),Ct(G,G,!0,!1)),(g?Promise.resolve(g):E(ve,G)).catch(b=>dn(b)?dn(b,2)?b:be(b):de(b,ve,G)).then(b=>{if(b){if(dn(b,2))return Cc(r,x(b.to),ve)&&J&&(J._count=J._count?J._count+1:1)>10?(xe(`Detected an infinite redirection in a navigation guard when going from "${G.fullPath}" to "${ve.fullPath}". Aborting to avoid a Stack Overflow. This will break in production if not fixed.`),Promise.reject(new Error("Infinite redirect in navigation guard"))):W(Ce(_(b.to),{state:ge,force:Le,replace:ne}),J||ve)}else b=N(ve,G,!0,ne,ge);return P(ve,G,b),b})}function v($,J){const Z=I($,J);return Z?Promise.reject(Z):Promise.resolve()}function E($,J){let Z;const[G,ge,Le]=Cb($,J);Z=Xa(G.reverse(),"beforeRouteLeave",$,J);for(const se of G)se.leaveGuards.forEach(ve=>{Z.push(hn(ve,$,J))});const ne=v.bind(null,$,J);return Z.push(ne),pr(Z).then(()=>{Z=[];for(const se of i.list())Z.push(hn(se,$,J));return Z.push(ne),pr(Z)}).then(()=>{Z=Xa(ge,"beforeRouteUpdate",$,J);for(const se of ge)se.updateGuards.forEach(ve=>{Z.push(hn(ve,$,J))});return Z.push(ne),pr(Z)}).then(()=>{Z=[];for(const se of $.matched)if(se.beforeEnter&&!J.matched.includes(se))if(Array.isArray(se.beforeEnter))for(const ve of se.beforeEnter)Z.push(hn(ve,$,J));else Z.push(hn(se.beforeEnter,$,J));return Z.push(ne),pr(Z)}).then(()=>($.matched.forEach(se=>se.enterCallbacks={}),Z=Xa(Le,"beforeRouteEnter",$,J),Z.push(ne),pr(Z))).then(()=>{Z=[];for(const se of a.list())Z.push(hn(se,$,J));return Z.push(ne),pr(Z)}).catch(se=>dn(se,8)?se:Promise.reject(se))}function P($,J,Z){for(const G of s.list())G($,J,Z)}function N($,J,Z,G,ge){const Le=I($,J);if(Le)return Le;const ne=J===cn,se=Xt?history.state:{};Z&&(G||ne?o.replace($.fullPath,Ce({scroll:ne&&se&&se.scroll},ge)):o.push($.fullPath,ge)),u.value=$,Ct($,J,Z,ne),be()}let Q;function K(){Q=o.listen(($,J,Z)=>{const G=x($),ge=D(G);if(ge){W(Ce(ge,{replace:!0}),G).catch(ao);return}l=G;const Le=u.value;Xt&&x3(Sc(Le.fullPath,Z.delta),ba()),E(G,Le).catch(ne=>dn(ne,12)?ne:dn(ne,2)?(W(ne.to,G).then(se=>{dn(se,20)&&!Z.delta&&Z.type===wo.pop&&o.go(-1,!1)}).catch(ao),Promise.reject()):(Z.delta&&o.go(-Z.delta,!1),de(ne,G,Le))).then(ne=>{ne=ne||N(G,Le,!1),ne&&(Z.delta?o.go(-Z.delta,!1):Z.type===wo.pop&&dn(ne,20)&&o.go(-1,!1)),P(G,Le,ne)}).catch(ao)})}let Ve=Gr(),De=Gr(),pe;function de($,J,Z){be($);const G=De.list();return G.length?G.forEach(ge=>ge($,J,Z)):(xe("uncaught error during route navigation:"),console.error($)),Promise.reject($)}function ie(){return pe&&u.value!==cn?Promise.resolve():new Promise(($,J)=>{Ve.add([$,J])})}function be($){return pe||(pe=!$,K(),Ve.list().forEach(([J,Z])=>$?Z($):J()),Ve.reset()),$}function Ct($,J,Z,G){const{scrollBehavior:ge}=e;if(!Xt||!ge)return Promise.resolve();const Le=!Z&&k3(Sc($.fullPath,0))||(G||!Z)&&history.state&&history.state.scroll||null;return Ai().then(()=>ge($,J,Le)).then(ne=>ne&&y3(ne)).catch(ne=>de(ne,$,J))}const Xe=$=>o.go($);let gt;const Et=new Set;return{currentRoute:u,addRoute:f,removeRoute:h,hasRoute:C,getRoutes:m,resolve:x,options:e,push:q,replace:H,go:Xe,back:()=>Xe(-1),forward:()=>Xe(1),beforeEach:i.add,beforeResolve:a.add,afterEach:s.add,onError:De.add,isReady:ie,install($){const J=this;$.component("RouterLink",lb),$.component("RouterView",fb),$.config.globalProperties.$router=J,Object.defineProperty($.config.globalProperties,"$route",{enumerable:!0,get:()=>xr(u)}),Xt&&!gt&&u.value===cn&&(gt=!0,q(o.location).catch(ge=>{xe("Unexpected error when starting the router:",ge)}));const Z={};for(const ge in cn)Z[ge]=kt(()=>u.value[ge]);$.provide(ma,J),$.provide(Nu,Mr(Z)),$.provide(zs,u);const G=$.unmount;Et.add($),$.unmount=function(){Et.delete($),Et.size<1&&(l=cn,Q&&Q(),u.value=cn,gt=!1,pe=!1),G()},Xt&&mb($,J,t)}}}function pr(e){return e.reduce((t,n)=>t.then(()=>n()),Promise.resolve())}function Cb(e,t){const n=[],r=[],o=[],i=Math.max(t.matched.length,e.matched.length);for(let a=0;a<i;a++){const s=t.matched[a];s&&(e.matched.find(l=>En(l,s))?r.push(s):n.push(s));const u=e.matched[a];u&&(t.matched.find(l=>En(l,u))||o.push(u))}return[n,r,o]}function H9(){return zt(ma)}function V9(){return zt(Nu)}const I0=e=>e===void 0||e==="auto"||e==="instant"||e==="smooth";function Eb(e,t){this.scrollLeft=e,this.scrollTop=t}const F0=(e,t,n="cannot convert to dictionary.")=>`Failed to execute '${e}' on '${t}': ${n}`,U0=(e,t,n)=>F0(e,t,`The provided value '${n}' is not a valid enum value of type ScrollBehavior.`),Ic=(e,t,n)=>{var r;const o=`__SEAMLESS.BACKUP$${t}`;return!e[o]&&e[t]&&!(!((r=e[t])===null||r===void 0)&&r.__isPolyfill)&&(e[o]=e[t]),e[o]||n},Sb=e=>{const t=typeof e;return e!==null&&(t==="object"||t==="function")},Vu=e=>e.ownerDocument.scrollingElement||e.ownerDocument.documentElement,Lb=e=>.5*(1-Math.cos(Math.PI*e));function qu(){var e;let t;return!((e=window.performance)===null||e===void 0)&&e.now?t=()=>window.performance.now():t=()=>window.Date.now(),qu=t,t()}const Ob=500,j0=e=>{const n=(qu()-e.timeStamp)/(e.duration||Ob);if(n>1){e.method(e.targetX,e.targetY),e.callback();return}const r=(e.timingFunc||Lb)(n),o=e.startX+(e.targetX-e.startX)*r,i=e.startY+(e.targetY-e.startY)*r;e.method(o,i),e.rafId=window.requestAnimationFrame(()=>{j0(e)})},Ii=e=>isFinite(e)?Number(e):0,Ab=e=>{var t;return(t=e.isConnected)!==null&&t!==void 0?t:!e.ownerDocument||!(e.ownerDocument.compareDocumentPosition(e)&1)},$b=(e,t,n)=>{var r,o;if(!Ab(e))return;const i=e.scrollLeft,a=e.scrollTop,s=Ii((r=t.left)!==null&&r!==void 0?r:i),u=Ii((o=t.top)!==null&&o!==void 0?o:a);if(s===i&&u===a)return;const l=Ic(HTMLElement.prototype,"scroll",Eb),c=Ic(Object.getPrototypeOf(e),"scroll",l).bind(e);if(t.behavior!=="smooth"){c(s,u);return}const d=()=>{window.removeEventListener("wheel",f),window.removeEventListener("touchmove",f)},p=Object.assign(Object.assign({},n),{timeStamp:qu(),startX:i,startY:a,targetX:s,targetY:u,rafId:0,method:c,callback:d}),f=()=>{window.cancelAnimationFrame(p.rafId),d()};window.addEventListener("wheel",f,{passive:!0,once:!0}),window.addEventListener("touchmove",f,{passive:!0,once:!0}),j0(p)},Tb=e=>e.window===e,B0=e=>(t,n,r)=>{const[o,i]=Tb(t)?[Vu(t.document.documentElement),"Window"]:[t,"Element"],a=n!=null?n:{};if(!Sb(a))throw new TypeError(F0(e,i));if(!I0(a.behavior))throw new TypeError(U0(e,i,a.behavior));e==="scrollBy"&&(a.left=Ii(a.left)+o.scrollLeft,a.top=Ii(a.top)+o.scrollTop),$b(o,a,r)},Pb=B0("scroll"),zb=B0("scrollTo"),Mb=Pb,q9=zb,N0=e=>{switch(e){case"horizontal-tb":case"lr":case"lr-tb":case"rl":case"rl-tb":return 0;case"vertical-rl":case"tb":case"tb-rl":return 1;case"vertical-lr":case"tb-lr":return 2;case"sideways-rl":return 3;case"sideways-lr":return 4}return 0},H0=(e,t,n,r)=>{let o=0;switch(t||(o^=2),e){case 0:o=o>>1|(o&1)<<1,[n,r]=[r,n];break;case 1:case 3:o^=1;break;case 4:o^=2;break}return[o,n,r]},Rb=e=>(H0(N0(e.writingMode),e.direction!=="rtl",void 0,void 0)[0]&1)===1,Db=(e,t,n)=>{const[r,o,i]=H0(t,n,e.block||"start",e.inline||"nearest");return[o,i].map((a,s)=>{switch(a){case"center":return 1;case"nearest":return 0;default:{const u=r>>s&1;return a==="start"==!u?2:3}}})},Fc=(e,t,n,r,o,i,a)=>e!==0?e:o<t&&i>n||o>t&&i<n?null:o<=t&&a<=r||i>=n&&a>=r?2:i>n&&a<r||o<t&&a>r?3:null,Uc=e=>e!=="visible"&&e!=="clip",Ib=e=>{var t;try{return((t=e.ownerDocument.defaultView)===null||t===void 0?void 0:t.frameElement)||null}catch{return null}},Fb=(e,t)=>e.clientHeight<e.scrollHeight||e.clientWidth<e.scrollWidth?Uc(t.overflowY)||Uc(t.overflowX)||e===Vu(e):!1,jc=e=>{const t=e.parentNode,n=e.parentElement;if(n===null&&t!==null){if(t.nodeType===11)return t.host;if(t.nodeType===9)return Ib(e)}return n},es=(e,t,n)=>e<t?t:e>n?n:e,Ub=e=>["scroll-margin","scroll-snap-margin"].filter(t=>t in e.documentElement.style)[0],jb=(e,t,n)=>{const{top:r,right:o,bottom:i,left:a}=t,s=Ub(e.ownerDocument);if(!s)return[r,o,i,a];const u=l=>{const c=n.getPropertyValue(`${s}-${l}`);return parseInt(c,10)||0};return[r-u("top"),o+u("right"),i+u("bottom"),a-u("left")]},ti=(e,t,n)=>{switch(e){case 1:return(t+n)/2;case 3:return n;case 2:case 0:return t}},Bb=(e,t)=>{var n,r,o;const i=(n=e.ownerDocument.defaultView)===null||n===void 0?void 0:n.visualViewport,[a,s,u,l]=e===Vu(e)?[0,0,(r=i==null?void 0:i.width)!==null&&r!==void 0?r:e.clientWidth,(o=i==null?void 0:i.height)!==null&&o!==void 0?o:e.clientHeight]:[t.left,t.top,e.clientWidth,e.clientHeight],c=a+e.clientLeft,d=s+e.clientTop,p=c+u,f=d+l;return[d,p,f,c]},Nb=(e,t)=>{const n=[];let r=e.ownerDocument,o=r.defaultView;if(!o)return n;const i=window.getComputedStyle(e),a=i.direction!=="rtl",s=N0(i.writingMode||i.getPropertyValue("-webkit-writing-mode")||i.getPropertyValue("-ms-writing-mode")),[u,l]=Db(t,s,a);let[c,d,p,f]=jb(e,e.getBoundingClientRect(),i);for(let h=jc(e);h!==null;h=jc(h)){if(r!==h.ownerDocument){if(r=h.ownerDocument,o=r.defaultView,!o)break;const{left:N,top:Q}=h.getBoundingClientRect();c+=Q,d+=N,p+=Q,f+=N}const m=o.getComputedStyle(h);if(m.position==="fixed")break;if(!Fb(h,m))continue;const C=h.getBoundingClientRect(),[x,_,I,q]=Bb(h,C),H=Fc(u,q,_,h.clientWidth,f,d,d-f),D=Fc(l,x,I,h.clientHeight,c,p,p-c),W=H===null?0:ti(H,f,d)-ti(H,q,_),v=D===null?0:ti(D,c,p)-ti(D,x,I),E=Rb(m)?es(W,-h.scrollWidth+h.clientWidth-h.scrollLeft,-h.scrollLeft):es(W,-h.scrollLeft,h.scrollWidth-h.clientWidth-h.scrollLeft),P=es(v,-h.scrollTop,h.scrollHeight-h.clientHeight-h.scrollTop);n.push([h,{left:h.scrollLeft+E,top:h.scrollTop+P,behavior:t.behavior}]),c=Math.max(c-P,x),d=Math.min(d-E,_),p=Math.min(p-P,I),f=Math.max(f-E,q)}return n},Z9=(e,t,n)=>{const r=t||{};if(!I0(r.behavior))throw new TypeError(U0("scrollIntoView","Element",r.behavior));Nb(e,r).forEach(([i,a])=>{Mb(i,a,n)})},Hb=typeof atob=="function",Vb=typeof btoa=="function",Ir=typeof Buffer=="function",Bc=typeof TextDecoder=="function"?new TextDecoder:void 0,Nc=typeof TextEncoder=="function"?new TextEncoder:void 0,qb="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",eo=Array.prototype.slice.call(qb),ni=(e=>{let t={};return e.forEach((n,r)=>t[n]=r),t})(eo),Zb=/^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/,He=String.fromCharCode.bind(String),Hc=typeof Uint8Array.from=="function"?Uint8Array.from.bind(Uint8Array):e=>new Uint8Array(Array.prototype.slice.call(e,0)),Gb=e=>e.replace(/=/g,"").replace(/[+\/]/g,t=>t=="+"?"-":"_"),V0=e=>e.replace(/[^A-Za-z0-9\+\/]/g,""),Wb=e=>{let t,n,r,o,i="";const a=e.length%3;for(let s=0;s<e.length;){if((n=e.charCodeAt(s++))>255||(r=e.charCodeAt(s++))>255||(o=e.charCodeAt(s++))>255)throw new TypeError("invalid character found");t=n<<16|r<<8|o,i+=eo[t>>18&63]+eo[t>>12&63]+eo[t>>6&63]+eo[t&63]}return a?i.slice(0,a-3)+"===".substring(a):i},q0=Vb?e=>btoa(e):Ir?e=>Buffer.from(e,"binary").toString("base64"):Wb,Jb=Ir?e=>Buffer.from(e).toString("base64"):e=>{let n=[];for(let r=0,o=e.length;r<o;r+=4096)n.push(He.apply(null,e.subarray(r,r+4096)));return q0(n.join(""))},Qb=e=>{if(e.length<2){var t=e.charCodeAt(0);return t<128?e:t<2048?He(192|t>>>6)+He(128|t&63):He(224|t>>>12&15)+He(128|t>>>6&63)+He(128|t&63)}else{var t=65536+(e.charCodeAt(0)-55296)*1024+(e.charCodeAt(1)-56320);return He(240|t>>>18&7)+He(128|t>>>12&63)+He(128|t>>>6&63)+He(128|t&63)}},Kb=/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,Yb=e=>e.replace(Kb,Qb),Vc=Ir?e=>Buffer.from(e,"utf8").toString("base64"):Nc?e=>Jb(Nc.encode(e)):e=>q0(Yb(e)),G9=(e,t=!1)=>t?Gb(Vc(e)):Vc(e),Xb=/[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g,e4=e=>{switch(e.length){case 4:var t=(7&e.charCodeAt(0))<<18|(63&e.charCodeAt(1))<<12|(63&e.charCodeAt(2))<<6|63&e.charCodeAt(3),n=t-65536;return He((n>>>10)+55296)+He((n&1023)+56320);case 3:return He((15&e.charCodeAt(0))<<12|(63&e.charCodeAt(1))<<6|63&e.charCodeAt(2));default:return He((31&e.charCodeAt(0))<<6|63&e.charCodeAt(1))}},t4=e=>e.replace(Xb,e4),n4=e=>{if(e=e.replace(/\s+/g,""),!Zb.test(e))throw new TypeError("malformed base64.");e+="==".slice(2-(e.length&3));let t,n="",r,o;for(let i=0;i<e.length;)t=ni[e.charAt(i++)]<<18|ni[e.charAt(i++)]<<12|(r=ni[e.charAt(i++)])<<6|(o=ni[e.charAt(i++)]),n+=r===64?He(t>>16&255):o===64?He(t>>16&255,t>>8&255):He(t>>16&255,t>>8&255,t&255);return n},Z0=Hb?e=>atob(V0(e)):Ir?e=>Buffer.from(e,"base64").toString("binary"):n4,r4=Ir?e=>Hc(Buffer.from(e,"base64")):e=>Hc(Z0(e).split("").map(t=>t.charCodeAt(0))),o4=Ir?e=>Buffer.from(e,"base64").toString("utf8"):Bc?e=>Bc.decode(r4(e)):e=>t4(Z0(e)),i4=e=>V0(e.replace(/[-_]/g,t=>t=="-"?"+":"/")),W9=e=>o4(i4(e));function G0(e,t){return function(){return e.apply(t,arguments)}}const{toString:W0}=Object.prototype,{getPrototypeOf:Zu}=Object,Gu=(e=>t=>{const n=W0.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),an=e=>(e=e.toLowerCase(),t=>Gu(t)===e),wa=e=>t=>typeof t===e,{isArray:Fr}=Array,xo=wa("undefined");function a4(e){return e!==null&&!xo(e)&&e.constructor!==null&&!xo(e.constructor)&&Xn(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const J0=an("ArrayBuffer");function s4(e){let t;return typeof ArrayBuffer!="undefined"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&J0(e.buffer),t}const u4=wa("string"),Xn=wa("function"),Q0=wa("number"),Wu=e=>e!==null&&typeof e=="object",l4=e=>e===!0||e===!1,mi=e=>{if(Gu(e)!=="object")return!1;const t=Zu(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},c4=an("Date"),d4=an("File"),p4=an("Blob"),f4=an("FileList"),h4=e=>Wu(e)&&Xn(e.pipe),g4=e=>{const t="[object FormData]";return e&&(typeof FormData=="function"&&e instanceof FormData||W0.call(e)===t||Xn(e.toString)&&e.toString()===t)},m4=an("URLSearchParams"),b4=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function To(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e=="undefined")return;let r,o;if(typeof e!="object"&&(e=[e]),Fr(e))for(r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else{const i=n?Object.getOwnPropertyNames(e):Object.keys(e),a=i.length;let s;for(r=0;r<a;r++)s=i[r],t.call(null,e[s],s,e)}}function K0(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,o;for(;r-- >0;)if(o=n[r],t===o.toLowerCase())return o;return null}const Y0=typeof self=="undefined"?typeof global=="undefined"?globalThis:global:self,X0=e=>!xo(e)&&e!==Y0;function Fs(){const{caseless:e}=X0(this)&&this||{},t={},n=(r,o)=>{const i=e&&K0(t,o)||o;mi(t[i])&&mi(r)?t[i]=Fs(t[i],r):mi(r)?t[i]=Fs({},r):Fr(r)?t[i]=r.slice():t[i]=r};for(let r=0,o=arguments.length;r<o;r++)arguments[r]&&To(arguments[r],n);return t}const w4=(e,t,n,{allOwnKeys:r}={})=>(To(t,(o,i)=>{n&&Xn(o)?e[i]=G0(o,n):e[i]=o},{allOwnKeys:r}),e),y4=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),x4=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},k4=(e,t,n,r)=>{let o,i,a;const s={};if(t=t||{},e==null)return t;do{for(o=Object.getOwnPropertyNames(e),i=o.length;i-- >0;)a=o[i],(!r||r(a,e,t))&&!s[a]&&(t[a]=e[a],s[a]=!0);e=n!==!1&&Zu(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},v4=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},_4=e=>{if(!e)return null;if(Fr(e))return e;let t=e.length;if(!Q0(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},C4=(e=>t=>e&&t instanceof e)(typeof Uint8Array!="undefined"&&Zu(Uint8Array)),E4=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let o;for(;(o=r.next())&&!o.done;){const i=o.value;t.call(e,i[0],i[1])}},S4=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},L4=an("HTMLFormElement"),O4=e=>e.toLowerCase().replace(/[_-\s]([a-z\d])(\w*)/g,function(n,r,o){return r.toUpperCase()+o}),qc=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),A4=an("RegExp"),ef=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};To(n,(o,i)=>{t(o,i,e)!==!1&&(r[i]=o)}),Object.defineProperties(e,r)},$4=e=>{ef(e,(t,n)=>{if(Xn(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(!!Xn(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},T4=(e,t)=>{const n={},r=o=>{o.forEach(i=>{n[i]=!0})};return Fr(e)?r(e):r(String(e).split(t)),n},P4=()=>{},z4=(e,t)=>(e=+e,Number.isFinite(e)?e:t),M4=e=>{const t=new Array(10),n=(r,o)=>{if(Wu(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[o]=r;const i=Fr(r)?[]:{};return To(r,(a,s)=>{const u=n(a,o+1);!xo(u)&&(i[s]=u)}),t[o]=void 0,i}}return r};return n(e,0)};var T={isArray:Fr,isArrayBuffer:J0,isBuffer:a4,isFormData:g4,isArrayBufferView:s4,isString:u4,isNumber:Q0,isBoolean:l4,isObject:Wu,isPlainObject:mi,isUndefined:xo,isDate:c4,isFile:d4,isBlob:p4,isRegExp:A4,isFunction:Xn,isStream:h4,isURLSearchParams:m4,isTypedArray:C4,isFileList:f4,forEach:To,merge:Fs,extend:w4,trim:b4,stripBOM:y4,inherits:x4,toFlatObject:k4,kindOf:Gu,kindOfTest:an,endsWith:v4,toArray:_4,forEachEntry:E4,matchAll:S4,isHTMLForm:L4,hasOwnProperty:qc,hasOwnProp:qc,reduceDescriptors:ef,freezeMethods:$4,toObjectSet:T4,toCamelCase:O4,noop:P4,toFiniteNumber:z4,findKey:K0,global:Y0,isContextDefined:X0,toJSONObject:M4};function we(e,t,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o)}T.inherits(we,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:T.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const tf=we.prototype,nf={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{nf[e]={value:e}});Object.defineProperties(we,nf);Object.defineProperty(tf,"isAxiosError",{value:!0});we.from=(e,t,n,r,o,i)=>{const a=Object.create(tf);return T.toFlatObject(e,a,function(u){return u!==Error.prototype},s=>s!=="isAxiosError"),we.call(a,e.message,t,n,r,o),a.cause=e,a.name=e.name,i&&Object.assign(a,i),a};var R4=typeof self=="object"?self.FormData:window.FormData,D4=R4;function Us(e){return T.isPlainObject(e)||T.isArray(e)}function rf(e){return T.endsWith(e,"[]")?e.slice(0,-2):e}function Zc(e,t,n){return e?e.concat(t).map(function(o,i){return o=rf(o),!n&&i?"["+o+"]":o}).join(n?".":""):t}function I4(e){return T.isArray(e)&&!e.some(Us)}const F4=T.toFlatObject(T,{},null,function(t){return/^is[A-Z]/.test(t)});function U4(e){return e&&T.isFunction(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator]}function ya(e,t,n){if(!T.isObject(e))throw new TypeError("target must be an object");t=t||new(D4||FormData),n=T.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(m,C){return!T.isUndefined(C[m])});const r=n.metaTokens,o=n.visitor||c,i=n.dots,a=n.indexes,u=(n.Blob||typeof Blob!="undefined"&&Blob)&&U4(t);if(!T.isFunction(o))throw new TypeError("visitor must be a function");function l(h){if(h===null)return"";if(T.isDate(h))return h.toISOString();if(!u&&T.isBlob(h))throw new we("Blob is not supported. Use a Buffer instead.");return T.isArrayBuffer(h)||T.isTypedArray(h)?u&&typeof Blob=="function"?new Blob([h]):Buffer.from(h):h}function c(h,m,C){let x=h;if(h&&!C&&typeof h=="object"){if(T.endsWith(m,"{}"))m=r?m:m.slice(0,-2),h=JSON.stringify(h);else if(T.isArray(h)&&I4(h)||T.isFileList(h)||T.endsWith(m,"[]")&&(x=T.toArray(h)))return m=rf(m),x.forEach(function(I,q){!(T.isUndefined(I)||I===null)&&t.append(a===!0?Zc([m],q,i):a===null?m:m+"[]",l(I))}),!1}return Us(h)?!0:(t.append(Zc(C,m,i),l(h)),!1)}const d=[],p=Object.assign(F4,{defaultVisitor:c,convertValue:l,isVisitable:Us});function f(h,m){if(!T.isUndefined(h)){if(d.indexOf(h)!==-1)throw Error("Circular reference detected in "+m.join("."));d.push(h),T.forEach(h,function(x,_){(!(T.isUndefined(x)||x===null)&&o.call(t,x,T.isString(_)?_.trim():_,m,p))===!0&&f(x,m?m.concat(_):[_])}),d.pop()}}if(!T.isObject(e))throw new TypeError("data must be an object");return f(e),t}function Gc(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function Ju(e,t){this._pairs=[],e&&ya(e,this,t)}const of=Ju.prototype;of.append=function(t,n){this._pairs.push([t,n])};of.toString=function(t){const n=t?function(r){return t.call(this,r,Gc)}:Gc;return this._pairs.map(function(o){return n(o[0])+"="+n(o[1])},"").join("&")};function j4(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function af(e,t,n){if(!t)return e;const r=n&&n.encode||j4,o=n&&n.serialize;let i;if(o?i=o(t,n):i=T.isURLSearchParams(t)?t.toString():new Ju(t,n).toString(r),i){const a=e.indexOf("#");a!==-1&&(e=e.slice(0,a)),e+=(e.indexOf("?")===-1?"?":"&")+i}return e}class B4{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){T.forEach(this.handlers,function(r){r!==null&&t(r)})}}var Wc=B4,sf={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},N4=typeof URLSearchParams!="undefined"?URLSearchParams:Ju,H4=FormData;const V4=(()=>{let e;return typeof navigator!="undefined"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window!="undefined"&&typeof document!="undefined"})(),q4=(()=>typeof WorkerGlobalScope!="undefined"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")();var Ht={isBrowser:!0,classes:{URLSearchParams:N4,FormData:H4,Blob},isStandardBrowserEnv:V4,isStandardBrowserWebWorkerEnv:q4,protocols:["http","https","file","blob","url","data"]};function Z4(e,t){return ya(e,new Ht.classes.URLSearchParams,Object.assign({visitor:function(n,r,o,i){return Ht.isNode&&T.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},t))}function G4(e){return T.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function W4(e){const t={},n=Object.keys(e);let r;const o=n.length;let i;for(r=0;r<o;r++)i=n[r],t[i]=e[i];return t}function uf(e){function t(n,r,o,i){let a=n[i++];const s=Number.isFinite(+a),u=i>=n.length;return a=!a&&T.isArray(o)?o.length:a,u?(T.hasOwnProp(o,a)?o[a]=[o[a],r]:o[a]=r,!s):((!o[a]||!T.isObject(o[a]))&&(o[a]=[]),t(n,r,o[a],i)&&T.isArray(o[a])&&(o[a]=W4(o[a])),!s)}if(T.isFormData(e)&&T.isFunction(e.entries)){const n={};return T.forEachEntry(e,(r,o)=>{t(G4(r),o,n,0)}),n}return null}const J4={"Content-Type":void 0};function Q4(e,t,n){if(T.isString(e))try{return(t||JSON.parse)(e),T.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const xa={transitional:sf,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",o=r.indexOf("application/json")>-1,i=T.isObject(t);if(i&&T.isHTMLForm(t)&&(t=new FormData(t)),T.isFormData(t))return o&&o?JSON.stringify(uf(t)):t;if(T.isArrayBuffer(t)||T.isBuffer(t)||T.isStream(t)||T.isFile(t)||T.isBlob(t))return t;if(T.isArrayBufferView(t))return t.buffer;if(T.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let s;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Z4(t,this.formSerializer).toString();if((s=T.isFileList(t))||r.indexOf("multipart/form-data")>-1){const u=this.env&&this.env.FormData;return ya(s?{"files[]":t}:t,u&&new u,this.formSerializer)}}return i||o?(n.setContentType("application/json",!1),Q4(t)):t}],transformResponse:[function(t){const n=this.transitional||xa.transitional,r=n&&n.forcedJSONParsing,o=this.responseType==="json";if(t&&T.isString(t)&&(r&&!this.responseType||o)){const a=!(n&&n.silentJSONParsing)&&o;try{return JSON.parse(t)}catch(s){if(a)throw s.name==="SyntaxError"?we.from(s,we.ERR_BAD_RESPONSE,this,null,this.response):s}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Ht.classes.FormData,Blob:Ht.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};T.forEach(["delete","get","head"],function(t){xa.headers[t]={}});T.forEach(["post","put","patch"],function(t){xa.headers[t]=T.merge(J4)});var Qu=xa;const K4=T.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);var Y4=e=>{const t={};let n,r,o;return e&&e.split(`
`).forEach(function(a){o=a.indexOf(":"),n=a.substring(0,o).trim().toLowerCase(),r=a.substring(o+1).trim(),!(!n||t[n]&&K4[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t};const Jc=Symbol("internals");function Jr(e){return e&&String(e).trim().toLowerCase()}function bi(e){return e===!1||e==null?e:T.isArray(e)?e.map(bi):String(e)}function X4(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}function e5(e){return/^[-_a-zA-Z]+$/.test(e.trim())}function Qc(e,t,n,r){if(T.isFunction(r))return r.call(this,t,n);if(!!T.isString(t)){if(T.isString(r))return t.indexOf(r)!==-1;if(T.isRegExp(r))return r.test(t)}}function t5(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function n5(e,t){const n=T.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(o,i,a){return this[r].call(this,t,o,i,a)},configurable:!0})})}class ka{constructor(t){t&&this.set(t)}set(t,n,r){const o=this;function i(s,u,l){const c=Jr(u);if(!c)throw new Error("header name must be a non-empty string");const d=T.findKey(o,c);(!d||o[d]===void 0||l===!0||l===void 0&&o[d]!==!1)&&(o[d||u]=bi(s))}const a=(s,u)=>T.forEach(s,(l,c)=>i(l,c,u));return T.isPlainObject(t)||t instanceof this.constructor?a(t,n):T.isString(t)&&(t=t.trim())&&!e5(t)?a(Y4(t),n):t!=null&&i(n,t,r),this}get(t,n){if(t=Jr(t),t){const r=T.findKey(this,t);if(r){const o=this[r];if(!n)return o;if(n===!0)return X4(o);if(T.isFunction(n))return n.call(this,o,r);if(T.isRegExp(n))return n.exec(o);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=Jr(t),t){const r=T.findKey(this,t);return!!(r&&(!n||Qc(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let o=!1;function i(a){if(a=Jr(a),a){const s=T.findKey(r,a);s&&(!n||Qc(r,r[s],s,n))&&(delete r[s],o=!0)}}return T.isArray(t)?t.forEach(i):i(t),o}clear(){return Object.keys(this).forEach(this.delete.bind(this))}normalize(t){const n=this,r={};return T.forEach(this,(o,i)=>{const a=T.findKey(r,i);if(a){n[a]=bi(o),delete n[i];return}const s=t?t5(i):String(i).trim();s!==i&&delete n[i],n[s]=bi(o),r[s]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return T.forEach(this,(r,o)=>{r!=null&&r!==!1&&(n[o]=t&&T.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(o=>r.set(o)),r}static accessor(t){const r=(this[Jc]=this[Jc]={accessors:{}}).accessors,o=this.prototype;function i(a){const s=Jr(a);r[s]||(n5(o,a),r[s]=!0)}return T.isArray(t)?t.forEach(i):i(t),this}}ka.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent"]);T.freezeMethods(ka.prototype);T.freezeMethods(ka);var nn=ka;function ts(e,t){const n=this||Qu,r=t||n,o=nn.from(r.headers);let i=r.data;return T.forEach(e,function(s){i=s.call(n,i,o.normalize(),t?t.status:void 0)}),o.normalize(),i}function lf(e){return!!(e&&e.__CANCEL__)}function Po(e,t,n){we.call(this,e==null?"canceled":e,we.ERR_CANCELED,t,n),this.name="CanceledError"}T.inherits(Po,we,{__CANCEL__:!0});var r5=null;function o5(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new we("Request failed with status code "+n.status,[we.ERR_BAD_REQUEST,we.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}var i5=Ht.isStandardBrowserEnv?function(){return{write:function(n,r,o,i,a,s){const u=[];u.push(n+"="+encodeURIComponent(r)),T.isNumber(o)&&u.push("expires="+new Date(o).toGMTString()),T.isString(i)&&u.push("path="+i),T.isString(a)&&u.push("domain="+a),s===!0&&u.push("secure"),document.cookie=u.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function a5(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function s5(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function cf(e,t){return e&&!a5(t)?s5(e,t):t}var u5=Ht.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function o(i){let a=i;return t&&(n.setAttribute("href",a),a=n.href),n.setAttribute("href",a),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=o(window.location.href),function(a){const s=T.isString(a)?o(a):a;return s.protocol===r.protocol&&s.host===r.host}}():function(){return function(){return!0}}();function l5(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function c5(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o=0,i=0,a;return t=t!==void 0?t:1e3,function(u){const l=Date.now(),c=r[i];a||(a=l),n[o]=u,r[o]=l;let d=i,p=0;for(;d!==o;)p+=n[d++],d=d%e;if(o=(o+1)%e,o===i&&(i=(i+1)%e),l-a<t)return;const f=c&&l-c;return f?Math.round(p*1e3/f):void 0}}function Kc(e,t){let n=0;const r=c5(50,250);return o=>{const i=o.loaded,a=o.lengthComputable?o.total:void 0,s=i-n,u=r(s),l=i<=a;n=i;const c={loaded:i,total:a,progress:a?i/a:void 0,bytes:s,rate:u||void 0,estimated:u&&a&&l?(a-i)/u:void 0,event:o};c[t?"download":"upload"]=!0,e(c)}}const d5=typeof XMLHttpRequest!="undefined";var p5=d5&&function(e){return new Promise(function(n,r){let o=e.data;const i=nn.from(e.headers).normalize(),a=e.responseType;let s;function u(){e.cancelToken&&e.cancelToken.unsubscribe(s),e.signal&&e.signal.removeEventListener("abort",s)}T.isFormData(o)&&(Ht.isStandardBrowserEnv||Ht.isStandardBrowserWebWorkerEnv)&&i.setContentType(!1);let l=new XMLHttpRequest;if(e.auth){const f=e.auth.username||"",h=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";i.set("Authorization","Basic "+btoa(f+":"+h))}const c=cf(e.baseURL,e.url);l.open(e.method.toUpperCase(),af(c,e.params,e.paramsSerializer),!0),l.timeout=e.timeout;function d(){if(!l)return;const f=nn.from("getAllResponseHeaders"in l&&l.getAllResponseHeaders()),m={data:!a||a==="text"||a==="json"?l.responseText:l.response,status:l.status,statusText:l.statusText,headers:f,config:e,request:l};o5(function(x){n(x),u()},function(x){r(x),u()},m),l=null}if("onloadend"in l?l.onloadend=d:l.onreadystatechange=function(){!l||l.readyState!==4||l.status===0&&!(l.responseURL&&l.responseURL.indexOf("file:")===0)||setTimeout(d)},l.onabort=function(){!l||(r(new we("Request aborted",we.ECONNABORTED,e,l)),l=null)},l.onerror=function(){r(new we("Network Error",we.ERR_NETWORK,e,l)),l=null},l.ontimeout=function(){let h=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const m=e.transitional||sf;e.timeoutErrorMessage&&(h=e.timeoutErrorMessage),r(new we(h,m.clarifyTimeoutError?we.ETIMEDOUT:we.ECONNABORTED,e,l)),l=null},Ht.isStandardBrowserEnv){const f=(e.withCredentials||u5(c))&&e.xsrfCookieName&&i5.read(e.xsrfCookieName);f&&i.set(e.xsrfHeaderName,f)}o===void 0&&i.setContentType(null),"setRequestHeader"in l&&T.forEach(i.toJSON(),function(h,m){l.setRequestHeader(m,h)}),T.isUndefined(e.withCredentials)||(l.withCredentials=!!e.withCredentials),a&&a!=="json"&&(l.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&l.addEventListener("progress",Kc(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&l.upload&&l.upload.addEventListener("progress",Kc(e.onUploadProgress)),(e.cancelToken||e.signal)&&(s=f=>{!l||(r(!f||f.type?new Po(null,e,l):f),l.abort(),l=null)},e.cancelToken&&e.cancelToken.subscribe(s),e.signal&&(e.signal.aborted?s():e.signal.addEventListener("abort",s)));const p=l5(c);if(p&&Ht.protocols.indexOf(p)===-1){r(new we("Unsupported protocol "+p+":",we.ERR_BAD_REQUEST,e));return}l.send(o||null)})};const wi={http:r5,xhr:p5};T.forEach(wi,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});var f5={getAdapter:e=>{e=T.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let o=0;o<t&&(n=e[o],!(r=T.isString(n)?wi[n.toLowerCase()]:n));o++);if(!r)throw r===!1?new we(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(T.hasOwnProp(wi,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`);if(!T.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:wi};function ns(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Po(null,e)}function Yc(e){return ns(e),e.headers=nn.from(e.headers),e.data=ts.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),f5.getAdapter(e.adapter||Qu.adapter)(e).then(function(r){return ns(e),r.data=ts.call(e,e.transformResponse,r),r.headers=nn.from(r.headers),r},function(r){return lf(r)||(ns(e),r&&r.response&&(r.response.data=ts.call(e,e.transformResponse,r.response),r.response.headers=nn.from(r.response.headers))),Promise.reject(r)})}const Xc=e=>e instanceof nn?e.toJSON():e;function Sr(e,t){t=t||{};const n={};function r(l,c,d){return T.isPlainObject(l)&&T.isPlainObject(c)?T.merge.call({caseless:d},l,c):T.isPlainObject(c)?T.merge({},c):T.isArray(c)?c.slice():c}function o(l,c,d){if(T.isUndefined(c)){if(!T.isUndefined(l))return r(void 0,l,d)}else return r(l,c,d)}function i(l,c){if(!T.isUndefined(c))return r(void 0,c)}function a(l,c){if(T.isUndefined(c)){if(!T.isUndefined(l))return r(void 0,l)}else return r(void 0,c)}function s(l,c,d){if(d in t)return r(l,c);if(d in e)return r(void 0,l)}const u={url:i,method:i,data:i,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:s,headers:(l,c)=>o(Xc(l),Xc(c),!0)};return T.forEach(Object.keys(e).concat(Object.keys(t)),function(c){const d=u[c]||o,p=d(e[c],t[c],c);T.isUndefined(p)&&d!==s||(n[c]=p)}),n}const df="1.2.1",Ku={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{Ku[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const ed={};Ku.transitional=function(t,n,r){function o(i,a){return"[Axios v"+df+"] Transitional option '"+i+"'"+a+(r?". "+r:"")}return(i,a,s)=>{if(t===!1)throw new we(o(a," has been removed"+(n?" in "+n:"")),we.ERR_DEPRECATED);return n&&!ed[a]&&(ed[a]=!0,console.warn(o(a," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(i,a,s):!0}};function h5(e,t,n){if(typeof e!="object")throw new we("options must be an object",we.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;for(;o-- >0;){const i=r[o],a=t[i];if(a){const s=e[i],u=s===void 0||a(s,i,e);if(u!==!0)throw new we("option "+i+" must be "+u,we.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new we("Unknown option "+i,we.ERR_BAD_OPTION)}}var js={assertOptions:h5,validators:Ku};const pn=js.validators;class Fi{constructor(t){this.defaults=t,this.interceptors={request:new Wc,response:new Wc}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=Sr(this.defaults,n);const{transitional:r,paramsSerializer:o,headers:i}=n;r!==void 0&&js.assertOptions(r,{silentJSONParsing:pn.transitional(pn.boolean),forcedJSONParsing:pn.transitional(pn.boolean),clarifyTimeoutError:pn.transitional(pn.boolean)},!1),o!==void 0&&js.assertOptions(o,{encode:pn.function,serialize:pn.function},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let a;a=i&&T.merge(i.common,i[n.method]),a&&T.forEach(["delete","get","head","post","put","patch","common"],h=>{delete i[h]}),n.headers=nn.concat(a,i);const s=[];let u=!0;this.interceptors.request.forEach(function(m){typeof m.runWhen=="function"&&m.runWhen(n)===!1||(u=u&&m.synchronous,s.unshift(m.fulfilled,m.rejected))});const l=[];this.interceptors.response.forEach(function(m){l.push(m.fulfilled,m.rejected)});let c,d=0,p;if(!u){const h=[Yc.bind(this),void 0];for(h.unshift.apply(h,s),h.push.apply(h,l),p=h.length,c=Promise.resolve(n);d<p;)c=c.then(h[d++],h[d++]);return c}p=s.length;let f=n;for(d=0;d<p;){const h=s[d++],m=s[d++];try{f=h(f)}catch(C){m.call(this,C);break}}try{c=Yc.call(this,f)}catch(h){return Promise.reject(h)}for(d=0,p=l.length;d<p;)c=c.then(l[d++],l[d++]);return c}getUri(t){t=Sr(this.defaults,t);const n=cf(t.baseURL,t.url);return af(n,t.params,t.paramsSerializer)}}T.forEach(["delete","get","head","options"],function(t){Fi.prototype[t]=function(n,r){return this.request(Sr(r||{},{method:t,url:n,data:(r||{}).data}))}});T.forEach(["post","put","patch"],function(t){function n(r){return function(i,a,s){return this.request(Sr(s||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:a}))}}Fi.prototype[t]=n(),Fi.prototype[t+"Form"]=n(!0)});var yi=Fi;class Yu{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(o=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](o);r._listeners=null}),this.promise.then=o=>{let i;const a=new Promise(s=>{r.subscribe(s),i=s}).then(o);return a.cancel=function(){r.unsubscribe(i)},a},t(function(i,a,s){r.reason||(r.reason=new Po(i,a,s),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new Yu(function(o){t=o}),cancel:t}}}var g5=Yu;function m5(e){return function(n){return e.apply(null,n)}}function b5(e){return T.isObject(e)&&e.isAxiosError===!0}function pf(e){const t=new yi(e),n=G0(yi.prototype.request,t);return T.extend(n,yi.prototype,t,{allOwnKeys:!0}),T.extend(n,t,null,{allOwnKeys:!0}),n.create=function(o){return pf(Sr(e,o))},n}const je=pf(Qu);je.Axios=yi;je.CanceledError=Po;je.CancelToken=g5;je.isCancel=lf;je.VERSION=df;je.toFormData=ya;je.AxiosError=we;je.Cancel=je.CanceledError;je.all=function(t){return Promise.all(t)};je.spread=m5;je.isAxiosError=b5;je.mergeConfig=Sr;je.AxiosHeaders=nn;je.formToJSON=e=>uf(T.isHTMLForm(e)?new FormData(e):e);je.default=je;var J9=je;/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const xi=globalThis,Xu=xi.ShadowRoot&&(xi.ShadyCSS===void 0||xi.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,el=Symbol(),td=new WeakMap;let ff=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==el)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Xu&&e===void 0){const n=t!==void 0&&t.length===1;n&&(e=td.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&td.set(t,e))}return e}toString(){return this.cssText}};const ot=e=>new ff(typeof e=="string"?e:e+"",void 0,el),ze=(e,...t)=>{const n=e.length===1?e[0]:t.reduce((r,o,i)=>r+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[i+1],e[0]);return new ff(n,e,el)},w5=(e,t)=>{if(Xu)e.adoptedStyleSheets=t.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet);else for(const n of t){const r=document.createElement("style"),o=xi.litNonce;o!==void 0&&r.setAttribute("nonce",o),r.textContent=n.cssText,e.appendChild(r)}},nd=Xu?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let n="";for(const r of t.cssRules)n+=r.cssText;return ot(n)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:y5,defineProperty:x5,getOwnPropertyDescriptor:k5,getOwnPropertyNames:v5,getOwnPropertySymbols:_5,getPrototypeOf:C5}=Object,Lr=globalThis,rd=Lr.trustedTypes,E5=rd?rd.emptyScript:"",od=Lr.reactiveElementPolyfillSupport,uo=(e,t)=>e,Ui={toAttribute(e,t){switch(t){case Boolean:e=e?E5:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},va=(e,t)=>!y5(e,t),id={attribute:!0,type:String,converter:Ui,reflect:!1,useDefault:!1,hasChanged:va};var Id,Fd;(Id=Symbol.metadata)!=null||(Symbol.metadata=Symbol("metadata")),(Fd=Lr.litPropertyMetadata)!=null||(Lr.litPropertyMetadata=new WeakMap);class mr extends HTMLElement{static addInitializer(t){var n;this._$Ei(),((n=this.l)!=null?n:this.l=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,n=id){if(n.state&&(n.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((n=Object.create(n)).wrapped=!0),this.elementProperties.set(t,n),!n.noAccessor){const r=Symbol(),o=this.getPropertyDescriptor(t,r,n);o!==void 0&&x5(this.prototype,t,o)}}static getPropertyDescriptor(t,n,r){var a;const{get:o,set:i}=(a=k5(this.prototype,t))!=null?a:{get(){return this[n]},set(s){this[n]=s}};return{get:o,set(s){const u=o==null?void 0:o.call(this);i==null||i.call(this,s),this.requestUpdate(t,u,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){var n;return(n=this.elementProperties.get(t))!=null?n:id}static _$Ei(){if(this.hasOwnProperty(uo("elementProperties")))return;const t=C5(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(uo("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(uo("properties"))){const n=this.properties,r=[...v5(n),..._5(n)];for(const o of r)this.createProperty(o,n[o])}const t=this[Symbol.metadata];if(t!==null){const n=litPropertyMetadata.get(t);if(n!==void 0)for(const[r,o]of n)this.elementProperties.set(r,o)}this._$Eh=new Map;for(const[n,r]of this.elementProperties){const o=this._$Eu(n,r);o!==void 0&&this._$Eh.set(o,n)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const n=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const o of r)n.unshift(nd(o))}else t!==void 0&&n.push(nd(t));return n}static _$Eu(t,n){const r=n.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(n=>this.enableUpdating=n),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(n=>n(this))}addController(t){var r;var n;((r=this._$EO)!=null?r:this._$EO=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&((n=t.hostConnected)==null||n.call(t))}removeController(t){var n;(n=this._$EO)==null||n.delete(t)}_$E_(){const t=new Map,n=this.constructor.elementProperties;for(const r of n.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){var n;const t=(n=this.shadowRoot)!=null?n:this.attachShadow(this.constructor.shadowRootOptions);return w5(t,this.constructor.elementStyles),t}connectedCallback(){var n;var t;(n=this.renderRoot)!=null||(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(r=>{var o;return(o=r.hostConnected)==null?void 0:o.call(r)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(n=>{var r;return(r=n.hostDisconnected)==null?void 0:r.call(n)})}attributeChangedCallback(t,n,r){this._$AK(t,r)}_$ET(t,n){var r;const o=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,o);if(i!==void 0&&o.reflect===!0){const a=(((r=o.converter)==null?void 0:r.toAttribute)!==void 0?o.converter:Ui).toAttribute(n,o.type);this._$Em=t,a==null?this.removeAttribute(i):this.setAttribute(i,a),this._$Em=null}}_$AK(t,n){var s;var r,o;const i=this.constructor,a=i._$Eh.get(t);if(a!==void 0&&this._$Em!==a){const u=i.getPropertyOptions(a),l=typeof u.converter=="function"?{fromAttribute:u.converter}:((r=u.converter)==null?void 0:r.fromAttribute)!==void 0?u.converter:Ui;this._$Em=a;const c=l.fromAttribute(n,u.type);this[a]=(s=c!=null?c:(o=this._$Ej)==null?void 0:o.get(a))!=null?s:c,this._$Em=null}}requestUpdate(t,n,r){var i;var o;if(t!==void 0){const a=this.constructor,s=this[t];if(r!=null||(r=a.getPropertyOptions(t)),!(((i=r.hasChanged)!=null?i:va)(s,n)||r.useDefault&&r.reflect&&s===((o=this._$Ej)==null?void 0:o.get(t))&&!this.hasAttribute(a._$Eu(t,r))))return;this.C(t,n,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,n,{useDefault:r,reflect:o,wrapped:i},a){var s,u,l;r&&!((s=this._$Ej)!=null?s:this._$Ej=new Map).has(t)&&(this._$Ej.set(t,(u=a!=null?a:n)!=null?u:this[t]),i!==!0||a!==void 0)||(this._$AL.has(t)||(this.hasUpdated||r||(n=void 0),this._$AL.set(t,n)),o===!0&&this._$Em!==t&&((l=this._$Eq)!=null?l:this._$Eq=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(n){Promise.reject(n)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var o;var t;if(!this.isUpdatePending)return;if(!this.hasUpdated){if((o=this.renderRoot)!=null||(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[a,s]of this._$Ep)this[a]=s;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[a,s]of i){const{wrapped:u}=s,l=this[a];u!==!0||this._$AL.has(a)||l===void 0||this.C(a,void 0,s,l)}}let n=!1;const r=this._$AL;try{n=this.shouldUpdate(r),n?(this.willUpdate(r),(t=this._$EO)==null||t.forEach(i=>{var a;return(a=i.hostUpdate)==null?void 0:a.call(i)}),this.update(r)):this._$EM()}catch(i){throw n=!1,this._$EM(),i}n&&this._$AE(r)}willUpdate(t){}_$AE(t){var n;(n=this._$EO)==null||n.forEach(r=>{var o;return(o=r.hostUpdated)==null?void 0:o.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&(this._$Eq=this._$Eq.forEach(n=>this._$ET(n,this[n]))),this._$EM()}updated(t){}firstUpdated(t){}}var Ud;mr.elementStyles=[],mr.shadowRootOptions={mode:"open"},mr[uo("elementProperties")]=new Map,mr[uo("finalized")]=new Map,od==null||od({ReactiveElement:mr}),((Ud=Lr.reactiveElementVersions)!=null?Ud:Lr.reactiveElementVersions=[]).push("2.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ji=globalThis,Bi=ji.trustedTypes,ad=Bi?Bi.createPolicy("lit-html",{createHTML:e=>e}):void 0,hf="$lit$",bn=`lit$${Math.random().toFixed(9).slice(2)}$`,gf="?"+bn,S5=`<${gf}>`,er=document,ko=()=>er.createComment(""),vo=e=>e===null||typeof e!="object"&&typeof e!="function",tl=Array.isArray,L5=e=>tl(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",rs=`[ 	
\f\r]`,Qr=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,sd=/-->/g,ud=/>/g,$n=RegExp(`>|${rs}(?:([^\\s"'>=/]+)(${rs}*=${rs}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ld=/'/g,cd=/"/g,mf=/^(?:script|style|textarea|title)$/i,bf=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),F=bf(1),ye=bf(2),Or=Symbol.for("lit-noChange"),Fe=Symbol.for("lit-nothing"),dd=new WeakMap,jn=er.createTreeWalker(er,129);function wf(e,t){if(!tl(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return ad!==void 0?ad.createHTML(t):t}const O5=(e,t)=>{const n=e.length-1,r=[];let o,i=t===2?"<svg>":t===3?"<math>":"",a=Qr;for(let s=0;s<n;s++){const u=e[s];let l,c,d=-1,p=0;for(;p<u.length&&(a.lastIndex=p,c=a.exec(u),c!==null);)p=a.lastIndex,a===Qr?c[1]==="!--"?a=sd:c[1]!==void 0?a=ud:c[2]!==void 0?(mf.test(c[2])&&(o=RegExp("</"+c[2],"g")),a=$n):c[3]!==void 0&&(a=$n):a===$n?c[0]===">"?(a=o!=null?o:Qr,d=-1):c[1]===void 0?d=-2:(d=a.lastIndex-c[2].length,l=c[1],a=c[3]===void 0?$n:c[3]==='"'?cd:ld):a===cd||a===ld?a=$n:a===sd||a===ud?a=Qr:(a=$n,o=void 0);const f=a===$n&&e[s+1].startsWith("/>")?" ":"";i+=a===Qr?u+S5:d>=0?(r.push(l),u.slice(0,d)+hf+u.slice(d)+bn+f):u+bn+(d===-2?s:f)}return[wf(e,i+(e[n]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),r]};class _o{constructor({strings:t,_$litType$:n},r){let o;this.parts=[];let i=0,a=0;const s=t.length-1,u=this.parts,[l,c]=O5(t,n);if(this.el=_o.createElement(l,r),jn.currentNode=this.el.content,n===2||n===3){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(o=jn.nextNode())!==null&&u.length<s;){if(o.nodeType===1){if(o.hasAttributes())for(const d of o.getAttributeNames())if(d.endsWith(hf)){const p=c[a++],f=o.getAttribute(d).split(bn),h=/([.?@])?(.*)/.exec(p);u.push({type:1,index:i,name:h[2],strings:f,ctor:h[1]==="."?$5:h[1]==="?"?T5:h[1]==="@"?P5:_a}),o.removeAttribute(d)}else d.startsWith(bn)&&(u.push({type:6,index:i}),o.removeAttribute(d));if(mf.test(o.tagName)){const d=o.textContent.split(bn),p=d.length-1;if(p>0){o.textContent=Bi?Bi.emptyScript:"";for(let f=0;f<p;f++)o.append(d[f],ko()),jn.nextNode(),u.push({type:2,index:++i});o.append(d[p],ko())}}}else if(o.nodeType===8)if(o.data===gf)u.push({type:2,index:i});else{let d=-1;for(;(d=o.data.indexOf(bn,d+1))!==-1;)u.push({type:7,index:i}),d+=bn.length-1}i++}}static createElement(t,n){const r=er.createElement("template");return r.innerHTML=t,r}}function Ar(e,t,n=e,r){var u;var o,i;if(t===Or)return t;let a=r!==void 0?(o=n._$Co)==null?void 0:o[r]:n._$Cl;const s=vo(t)?void 0:t._$litDirective$;return(a==null?void 0:a.constructor)!==s&&((i=a==null?void 0:a._$AO)==null||i.call(a,!1),s===void 0?a=void 0:(a=new s(e),a._$AT(e,n,r)),r!==void 0?((u=n._$Co)!=null?u:n._$Co=[])[r]=a:n._$Cl=a),a!==void 0&&(t=Ar(e,a._$AS(e,t.values),a,r)),t}class A5{constructor(t,n){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var l;const{el:{content:n},parts:r}=this._$AD,o=((l=t==null?void 0:t.creationScope)!=null?l:er).importNode(n,!0);jn.currentNode=o;let i=jn.nextNode(),a=0,s=0,u=r[0];for(;u!==void 0;){if(a===u.index){let c;u.type===2?c=new zo(i,i.nextSibling,this,t):u.type===1?c=new u.ctor(i,u.name,u.strings,this,t):u.type===6&&(c=new z5(i,this,t)),this._$AV.push(c),u=r[++s]}a!==(u==null?void 0:u.index)&&(i=jn.nextNode(),a++)}return jn.currentNode=er,o}p(t){let n=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,n),n+=r.strings.length-2):r._$AI(t[n])),n++}}class zo{get _$AU(){var n;var t;return(n=(t=this._$AM)==null?void 0:t._$AU)!=null?n:this._$Cv}constructor(t,n,r,o){var i;this.type=2,this._$AH=Fe,this._$AN=void 0,this._$AA=t,this._$AB=n,this._$AM=r,this.options=o,this._$Cv=(i=o==null?void 0:o.isConnected)!=null?i:!0}get parentNode(){let t=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=n.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,n=this){t=Ar(this,t,n),vo(t)?t===Fe||t==null||t===""?(this._$AH!==Fe&&this._$AR(),this._$AH=Fe):t!==this._$AH&&t!==Or&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):L5(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==Fe&&vo(this._$AH)?this._$AA.nextSibling.data=t:this.T(er.createTextNode(t)),this._$AH=t}$(t){var n;const{values:r,_$litType$:o}=t,i=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=_o.createElement(wf(o.h,o.h[0]),this.options)),o);if(((n=this._$AH)==null?void 0:n._$AD)===i)this._$AH.p(r);else{const a=new A5(i,this),s=a.u(this.options);a.p(r),this.T(s),this._$AH=a}}_$AC(t){let n=dd.get(t.strings);return n===void 0&&dd.set(t.strings,n=new _o(t)),n}k(t){tl(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let r,o=0;for(const i of t)o===n.length?n.push(r=new zo(this.O(ko()),this.O(ko()),this,this.options)):r=n[o],r._$AI(i),o++;o<n.length&&(this._$AR(r&&r._$AB.nextSibling,o),n.length=o)}_$AR(t=this._$AA.nextSibling,n){var r;for((r=this._$AP)==null?void 0:r.call(this,!1,!0,n);t!==this._$AB;){const o=t.nextSibling;t.remove(),t=o}}setConnected(t){var n;this._$AM===void 0&&(this._$Cv=t,(n=this._$AP)==null||n.call(this,t))}}class _a{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,n,r,o,i){this.type=1,this._$AH=Fe,this._$AN=void 0,this.element=t,this.name=n,this._$AM=o,this.options=i,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=Fe}_$AI(t,n=this,r,o){const i=this.strings;let a=!1;if(i===void 0)t=Ar(this,t,n,0),a=!vo(t)||t!==this._$AH&&t!==Or,a&&(this._$AH=t);else{const s=t;let u,l;for(t=i[0],u=0;u<i.length-1;u++)l=Ar(this,s[r+u],n,u),l===Or&&(l=this._$AH[u]),a||(a=!vo(l)||l!==this._$AH[u]),l===Fe?t=Fe:t!==Fe&&(t+=(l!=null?l:"")+i[u+1]),this._$AH[u]=l}a&&!o&&this.j(t)}j(t){t===Fe?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t!=null?t:"")}}class $5 extends _a{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===Fe?void 0:t}}class T5 extends _a{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==Fe)}}class P5 extends _a{constructor(t,n,r,o,i){super(t,n,r,o,i),this.type=5}_$AI(t,n=this){var a;if((t=(a=Ar(this,t,n,0))!=null?a:Fe)===Or)return;const r=this._$AH,o=t===Fe&&r!==Fe||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,i=t!==Fe&&(r===Fe||o);o&&this.element.removeEventListener(this.name,this,r),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var r;var n;typeof this._$AH=="function"?this._$AH.call((r=(n=this.options)==null?void 0:n.host)!=null?r:this.element,t):this._$AH.handleEvent(t)}}class z5{constructor(t,n,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=n,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){Ar(this,t)}}const pd=ji.litHtmlPolyfillSupport;var jd;pd==null||pd(_o,zo),((jd=ji.litHtmlVersions)!=null?jd:ji.litHtmlVersions=[]).push("3.3.1");const M5=(e,t,n)=>{var i,a;const r=(i=n==null?void 0:n.renderBefore)!=null?i:t;let o=r._$litPart$;if(o===void 0){const s=(a=n==null?void 0:n.renderBefore)!=null?a:null;r._$litPart$=o=new zo(t.insertBefore(ko(),s),s,void 0,n!=null?n:{})}return o._$AI(e),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Co=globalThis;class X extends mr{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var r;var t;const n=super.createRenderRoot();return(r=(t=this.renderOptions).renderBefore)!=null||(t.renderBefore=n.firstChild),n}update(t){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=M5(n,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return Or}}var fd;X._$litElement$=!0,X.finalized=!0,(fd=Co.litElementHydrateSupport)==null||fd.call(Co,{LitElement:X});const hd=Co.litElementPolyfillSupport;hd==null||hd({LitElement:X});var Bd;((Bd=Co.litElementVersions)!=null?Bd:Co.litElementVersions=[]).push("4.2.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const re=e=>(t,n)=>{n!==void 0?n.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const R5={attribute:!0,type:String,converter:Ui,reflect:!1,hasChanged:va},D5=(e=R5,t,n)=>{const{kind:r,metadata:o}=n;let i=globalThis.litPropertyMetadata.get(o);if(i===void 0&&globalThis.litPropertyMetadata.set(o,i=new Map),r==="setter"&&((e=Object.create(e)).wrapped=!0),i.set(n.name,e),r==="accessor"){const{name:a}=n;return{set(s){const u=t.get.call(this);t.set.call(this,s),this.requestUpdate(a,u,e)},init(s){return s!==void 0&&this.C(a,void 0,e,s),s}}}if(r==="setter"){const{name:a}=n;return function(s){const u=this[a];t.call(this,s),this.requestUpdate(a,u,e)}}throw Error("Unsupported decorator location: "+r)};function R(e){return(t,n)=>typeof n=="object"?D5(e,t,n):((r,o,i)=>{const a=o.hasOwnProperty(i);return o.constructor.createProperty(i,r),a?Object.getOwnPropertyDescriptor(o,i):void 0})(e,t,n)}const ft='*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:var(--un-default-border-color, #e5e7eb)}:before,:after{--un-content: ""}html,:host{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role=button]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]:where(:not([hidden=until-found])){display:none}';/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Dt(e){return R(Bo(Se({},e),{state:!0,attribute:!1}))}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function he(e,t,n){return e?t(e):n==null?void 0:n(e)}var I5=Object.defineProperty,F5=Object.getOwnPropertyDescriptor,yf=(e,t,n,r)=>{for(var o=r>1?void 0:r?F5(t,n):t,i=e.length-1,a;i>=0;i--)(a=e[i])&&(o=(r?a(t,n,o):a(o))||o);return r&&o&&I5(t,n,o),o};let Bs=class extends X{constructor(){super(...arguments),this.iconSize="sm"}render(){return ye`<svg part="icon" width="${this.iconSize=="md"?"32":"24"}" height="${this.iconSize=="md"?"32":"24"}" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.2916 3.33334H2.70829C2.133 3.33334 1.66663 3.87689 1.66663 4.54739C1.66663 5.21789 2.133 5.76145 2.70829 5.76145H17.2916C17.8669 5.76145 18.3333 5.21789 18.3333 4.54739C18.3333 3.87689 17.8669 3.33334 17.2916 3.33334ZM17.2916 14.2386H2.70829C2.133 14.2386 1.66663 14.7821 1.66663 15.4526C1.66663 16.1231 2.133 16.6667 2.70829 16.6667H17.2916C17.8669 16.6667 18.3333 16.1231 18.3333 15.4526C18.3333 14.7821 17.8669 14.2386 17.2916 14.2386ZM2.70829 8.78596H17.2916C17.8669 8.78596 18.3333 9.32951 18.3333 10C18.3333 10.6705 17.8669 11.2141 17.2916 11.2141H2.70829C2.133 11.2141 1.66663 10.6705 1.66663 10C1.66663 9.32951 2.133 8.78596 2.70829 8.78596Z" fill="currentColor"/>
</svg>`}};yf([R({type:String})],Bs.prototype,"iconSize",2);Bs=yf([re("mw-icon-games-menu-menu")],Bs);var U5=Object.getOwnPropertyDescriptor,j5=(e,t,n,r)=>{for(var o=r>1?void 0:r?U5(t,n):t,i=e.length-1,a;i>=0;i--)(a=e[i])&&(o=a(o)||o);return o};let gd=class extends X{render(){return ye`
      <svg part="icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
    `}};gd=j5([re("mw-icon-material-close")],gd);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const xf=(e,t,n)=>{for(const r of t)if(r[0]===e)return(0,r[1])();return n==null?void 0:n()},$r={xs:"16",sm:"20",md:"32",lg:"48"},B5={xs:"32",sm:"40",md:"70",lg:"80"};var N5=Object.defineProperty,H5=Object.getOwnPropertyDescriptor,te=(e,t,n,r)=>{for(var o=r>1?void 0:r?H5(t,n):t,i=e.length-1,a;i>=0;i--)(a=e[i])&&(o=(r?a(t,n,o):a(o))||o);return r&&o&&N5(t,n,o),o};let md=class extends X{render(){return ye`
<svg part="icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.4926 6.0625H16.8346L11.0479 11.8536L12.1519 12.9584L17.9276 7.17846V9.5H19.4889V5.61596L19.5 5.60485L19.4889 5.59375V4.5H14.4926V6.0625ZM4.5 7H10.9952V8.5625H6.06134V17.9997H15.4294V12.9997H16.9907V19.4991L4.5 19.4997V7Z" fill="#CBE1EA"/>
</svg>
`}};md=te([re("mw-icon-link-out")],md);let bd=class extends X{render(){return ye`
    <svg
      part="icon"
      xmlns="http://www.w3.org/2000/svg"
      class="h-[20px] w-[20px]"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <title>Copy</title>
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
      />
    </svg>
    `}};bd=te([re("mw-icon-copy")],bd);let wd=class extends X{render(){return ye`
    <svg
      part="icon"
      xmlns="http://www.w3.org/2000/svg"
      class="h-[20px] w-[20px]"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <title>Save</title>
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
      />
    </svg>
    `}};wd=te([re("mw-icon-save")],wd);let Ns=class extends X{constructor(){super(...arguments),this.color="#EDF4F7"}render(){return ye`
        <svg part="icon" width="7" height="13" viewBox="0 0 7 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_4219_15472)">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.78139 7.00484L1.68774 12.1057C1.3912 12.3843 0.937651 12.3843 0.658547 12.1057C0.379443 11.8272 0.379443 11.3571 0.658547 11.0786L5.24632 6.49997L0.658547 1.92136C0.379443 1.6254 0.379443 1.17276 0.658547 0.894213C0.937651 0.615666 1.3912 0.615666 1.68774 0.894213L6.78139 5.9777C7.0605 6.27365 7.0605 6.72629 6.78139 7.00484Z" fill="${this.color}"/>
            </g>
            <defs>
            <clipPath id="clip0_4219_15472">
            <rect width="11.6293" height="6.5415" fill="white" transform="translate(0.449219 12.3147) rotate(-90)"/>
            </clipPath>
            </defs>
        </svg>
        `}};te([R({type:String})],Ns.prototype,"color",2);Ns=te([re("mw-icon-chevron-right")],Ns);let Hs=class extends X{constructor(){super(...arguments),this.size=33}render(){return ye`
    <svg part="icon" width=${this.size} height=${this.size} viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_5804_18458)">
      <path
        fill="currentColor"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M23.2352 17.9205L13.8912 27.2777C13.3472 27.7887 12.5152 27.7887 12.0032 27.2777C11.4912 26.7668 11.4912 25.9045 12.0032 25.3935L20.4192 16.9943L12.0032 8.5951C11.4912 8.05219 11.4912 7.22185 12.0032 6.71087C12.5152 6.19989 13.3472 6.19989 13.8912 6.71087L23.2352 16.0362C23.7472 16.5791 23.7472 17.4095 23.2352 17.9205Z"
        fill="#4A7D95"
      />
    </g>
    <defs>
      <clipPath id="clip0_5804_18458">
        <rect width="12" height="21.3333" transform="translate(11.6192 6.32764)" />
      </clipPath>
    </defs>
  </svg>
        `}};te([R({type:Number})],Hs.prototype,"size",2);Hs=te([re("mw-icon-chevron-right-2")],Hs);let yd=class extends X{render(){return ye`
        <svg part="icon" width="17" height="9" viewBox="0 0 17 9" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_4239_43935)">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.41336 0.288002L16.4313 7.296C16.8146 7.704 16.8146 8.328 16.4313 8.712C16.0481 9.096 15.4014 9.096 15.0182 8.712L8.71875 2.4L2.41935 8.712C2.01216 9.096 1.38941 9.096 1.00618 8.712C0.622942 8.328 0.622942 7.704 1.00618 7.296L8.00019 0.288001C8.40738 -0.0959984 9.03013 -0.0959983 9.41336 0.288002Z" fill="#97BECE"/>
          </g>
          <defs>
            <clipPath id="clip0_4239_43935">
              <rect width="16" height="9" fill="white" transform="translate(16.7188 9) rotate(-180)"/>
            </clipPath>
          </defs>
        </svg>
        `}};yd=te([re("mw-icon-chevron-up")],yd);let Ni=class extends X{constructor(){super(...arguments),this.color="#CBE1EA",this.size="md"}render(){return ye`
      <svg part="icon" width="${this.size=="sm"?"12.7":"17"}" height="${this.size=="sm"?"7.5":"10"}" viewBox="0 0 17 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_4798_17992)">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M7.80539 9.212L0.787423 2.204C0.40419 1.796 0.40419 1.172 0.787423 0.787999C1.17066 0.403999 1.81736 0.403999 2.2006 0.787999L8.5 7.1L14.7994 0.788C15.2066 0.404 15.8293 0.404 16.2126 0.788C16.5958 1.172 16.5958 1.796 16.2126 2.204L9.21856 9.212C8.81138 9.596 8.18862 9.596 7.80539 9.212Z" fill="${this.color}"/>
      </g>
      <defs>
      <clipPath id="clip0_4798_17992">
      <rect width="9" height="16" fill="white" transform="translate(16.5 0.5) rotate(90)"/>
      </clipPath>
      </defs>
      </svg>
        `}};te([R({type:String})],Ni.prototype,"color",2);te([R({type:String})],Ni.prototype,"size",2);Ni=te([re("mw-icon-chevron-down")],Ni);let Vs=class extends X{constructor(){super(...arguments),this.color="#64748B"}render(){return ye`
      <svg part="icon" color=${this.color} width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.18846 5.5L9.75386 9.0654C10.082 9.39358 10.082 9.92568 9.75386 10.2539C9.42568 10.582 8.89358 10.582 8.5654 10.2539L5 6.68846L1.4346 10.2539C1.10642 10.582 0.574325 10.582 0.246139 10.2539C-0.0820464 9.92568 -0.0820464 9.39358 0.246139 9.0654L3.81154 5.5L0.246139 1.9346C-0.0820464 1.60642 -0.0820464 1.07432 0.246139 0.746139C0.574325 0.417954 1.10642 0.417954 1.4346 0.746139L5 4.31154L8.5654 0.746139C8.89358 0.417954 9.42568 0.417954 9.75386 0.746139C10.082 1.07432 10.082 1.60642 9.75386 1.9346L6.18846 5.5Z" fill="currentColor"/>
      </svg>
    `}};te([R({type:String})],Vs.prototype,"color",2);Vs=te([re("mw-icon-close-sm")],Vs);let xd=class extends X{render(){return ye`
            <svg part="icon" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_4219_2166)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.1392 9L17.5569 15.4177C18.1477 16.0084 18.1477 16.9662 17.5569 17.5569C16.9662 18.1477 16.0084 18.1477 15.4177 17.5569L9 11.1392L2.58229 17.5569C1.99155 18.1477 1.03378 18.1477 0.443051 17.5569C-0.147684 16.9662 -0.147684 16.0084 0.443051 15.4177L6.86076 9L0.443051 2.58229C-0.147684 1.99155 -0.147684 1.03378 0.443051 0.443051C1.03378 -0.147684 1.99155 -0.147684 2.58229 0.443051L9 6.86076L15.4177 0.443051C16.0084 -0.147684 16.9662 -0.147684 17.5569 0.443051C18.1477 1.03378 18.1477 1.99155 17.5569 2.58229L11.1392 9Z" fill="#CBE1EA"/>
                </g>
                <defs>
                <clipPath id="clip0_4219_2166">
                <rect width="18" height="18" fill="white"/>
                </clipPath>
                </defs>
            </svg>
        `}};xd=te([re("mw-icon-close")],xd);let kd=class extends X{render(){return ye`
        <svg part="icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
        `}};kd=te([re("mw-icon-close-fine")],kd);let Hi=class extends X{constructor(){super(...arguments),this.width="24",this.height="21"}render(){return ye`
        <svg part="icon" width="${this.width}" height="${this.height}" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_4219_51958)">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M22.3913 0.5H1.80449C0.992367 0.5 0.334008 1.21821 0.334008 2.10417C0.334008 2.99012 0.992367 3.70833 1.80449 3.70833H22.3913C23.2034 3.70833 23.8618 2.99012 23.8618 2.10417C23.8618 1.21821 23.2034 0.5 22.3913 0.5ZM22.3913 17.6112H1.80447C0.992343 17.6112 0.333984 18.3294 0.333984 19.2153C0.333984 20.1013 0.992343 20.8195 1.80447 20.8195H22.3913C23.2034 20.8195 23.8618 20.1013 23.8618 19.2153C23.8618 18.3294 23.2034 17.6112 22.3913 17.6112ZM1.80447 9.0556H22.3913C23.2034 9.0556 23.8618 9.77381 23.8618 10.6598C23.8618 11.5457 23.2034 12.2639 22.3913 12.2639H1.80447C0.992343 12.2639 0.333984 11.5457 0.333984 10.6598C0.333984 9.77381 0.992343 9.0556 1.80447 9.0556Z" fill="white"/>
          </g>
          <defs>
          <clipPath id="clip0_4219_51958">
          <rect width="23.5278" height="20.3195" fill="white" transform="translate(0.333984 0.5)"/>
          </clipPath>
          </defs>
        </svg>
        `}};te([R({type:String})],Hi.prototype,"width",2);te([R({type:String})],Hi.prototype,"height",2);Hi=te([re("mw-icon-dots")],Hi);let Vi=class extends X{constructor(){super(...arguments),this.width="70",this.height="71"}render(){return ye`
            <svg part="icon" width="${this.width}" height="${this.height}" viewBox="0 0 70 71" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 35.9868C0 16.652 15.7244 0.986816 35.1235 0.986816C54.5226 0.986816 70 16.6595 70 35.9868C70 55.3216 54.5226 70.9868 35.1235 70.9868C15.7319 70.9943 0 55.3216 0 35.9868Z" fill="white"></path>
                <path d="M2.56097 35.9831C2.56097 18.0679 17.0885 3.5478 35.0037 3.5478C52.919 3.5478 67.439 18.0679 67.439 35.9831C67.439 53.8984 52.919 68.4185 35.0037 68.4259C17.0885 68.4259 2.56837 53.8984 2.56097 35.9831ZM4.68388 35.9831C4.68388 44.3564 8.07905 51.9308 13.5675 57.4193C19.056 62.9078 26.6304 66.2956 35.0037 66.303C43.377 66.303 50.9514 62.9078 56.4399 57.4193C61.9284 51.9308 65.3235 44.3564 65.3235 35.9831C65.3235 27.6099 61.9284 20.0355 56.4399 14.547C50.9514 9.05848 43.377 5.66331 35.0037 5.66331C26.623 5.66331 19.056 9.05108 13.5675 14.547C8.07905 20.0355 4.68388 27.6099 4.68388 35.9831Z" fill="#D71920"></path>
                <path d="M38.5512 43.9373C38.5512 43.1096 39.1477 42.6026 39.8412 42.5951C40.7956 42.5951 41.2579 43.3333 41.2579 44.3027L41.7725 44.3325L41.8321 42.8412H41.8023L41.8246 42.8188C41.2356 42.2894 40.5719 42.1477 39.8188 42.1477C38.6481 42.1477 37.5594 42.953 37.5594 44.3176C37.5743 47.1512 41.2505 45.9357 41.2207 47.867C41.2207 48.7544 40.6614 49.3882 39.7964 49.3882H39.7591C38.6705 49.3658 37.9919 48.471 37.9621 47.3003L37.3879 47.2705V47.3003L37.4028 47.442L37.552 49.4106C38.2156 49.7908 38.9464 49.8878 39.6547 49.8878C41.0119 49.8878 42.369 49.1347 42.369 47.4942C42.3466 44.7799 38.5139 45.5704 38.5512 43.9373ZM33.9951 42.2223C33.7565 42.2223 33.5328 42.267 33.2942 42.2969L32.0489 43.0873L32.2279 43.2364C32.5634 43.132 32.899 43.0724 33.2196 43.0724C34.9496 43.0724 35.7176 44.683 35.7251 46.316C35.7251 48.0087 34.9869 49.4404 33.4582 49.4404C32.459 49.4404 31.855 48.7469 31.855 47.7477V37.8228L31.5493 37.6886C30.9229 37.9645 30.1624 38.2106 29.4614 38.3001L29.4465 38.5834C29.9014 38.6132 30.2295 38.6878 30.6247 38.8817L30.5949 46.8007C30.5949 47.1586 30.5949 47.5091 30.5949 47.867C30.5949 48.5008 30.5874 49.1347 30.5427 49.7983L30.826 49.9549L31.4002 49.4031C31.8774 49.6865 32.4739 49.9102 33.0183 49.9176C35.7251 49.9102 36.8958 47.9714 36.8958 45.8686C36.8958 43.4825 35.8295 42.2223 33.9951 42.2223ZM25.3975 39.4335L25.4199 39.0457L21.7959 39.0159L21.7661 39.4037L23.1829 39.784L22.9741 40.3879L20.6029 47.0915C20.3419 46.316 18.4031 40.4625 18.2689 39.9629L18.4479 39.6796L19.626 39.5006L19.6484 39.0756L15.7336 39.0532V39.083H15.7038V39.4782L16.7776 39.7243L16.9715 40.0822C16.8372 40.5818 14.809 46.3533 14.5331 47.1213L12.1842 39.8063L12.2514 39.784L13.3922 39.5006L13.4444 39.0756H13.4146H13.2729L9.37307 39.0383L9.33579 39.4335L10.7302 39.7765L13.944 49.9325L14.4362 49.9549L17.3667 41.8793L20.0809 49.9102L20.6029 49.9325L24.1523 39.7616L25.3975 39.4335ZM12.1619 39.8212L12.2588 40.1195L12.1619 39.8212ZM23.1903 39.7616L23.1009 39.7392L23.1903 39.7616ZM47.0891 48.2026L47.0443 48.2399C46.7088 48.5754 46.1868 49.0974 45.7692 49.0974C44.9714 49.0825 44.6657 48.5307 44.6582 47.5315C44.6582 47.4867 44.6582 47.442 44.6582 47.3972V43.4154H44.7104L46.8281 43.4452L46.8579 42.707L44.6284 42.6772L44.6582 40.7757L44.2779 40.7459C43.9722 41.8122 43.1296 42.4385 42.3093 43.0351L42.2944 43.4154H42.3242V43.4452H43.3831L43.3533 48.0087C43.3533 49.4329 44.2705 49.9474 45.0981 49.9549C45.128 49.9549 45.1653 49.9549 45.1951 49.9549C46.3658 49.8952 47.1637 48.732 47.1711 48.732L47.0965 48.2548L47.0891 48.2026ZM43.1818 35.1906H43.2191C44.1064 35.1683 44.8222 34.8327 45.5008 34.3033L45.4635 35.2055C45.4635 35.2055 45.471 35.2055 45.4784 35.2055H45.4933C45.4933 35.2055 45.5157 35.1981 45.5232 35.1981C45.7991 35.1683 47.2233 34.8476 47.8646 34.7283L47.9093 34.7208L47.6856 34.3778L46.6491 34.2734V29.8218C46.6491 28.5318 46.0899 27.9502 45.1876 27.9502C45.1429 27.9502 45.1056 27.9502 45.0609 27.9502C44.9341 27.9502 44.7999 27.9576 44.6731 28.0247L43.0401 29.0016C42.876 29.106 42.287 29.4266 42.2646 29.7099L42.2124 30.5227L42.3242 30.6122L43.1743 30.4407C43.2787 30.4183 43.4353 30.4258 43.4353 30.2468V30.2245C43.4278 30.0828 43.4204 29.9486 43.4204 29.8218C43.4278 29.2551 43.5546 28.8301 44.5836 28.6809C44.6209 28.6735 44.6582 28.6735 44.6955 28.6735C45.21 28.6735 45.5157 29.2178 45.5157 30.2692V31.343C44.8148 31.5592 44.0467 31.8649 43.2265 32.1334C42.6076 32.3347 41.6457 32.633 41.6457 33.8633C41.6457 34.4226 42.3093 35.1906 43.1818 35.1906ZM45.4933 35.1757H45.4859L45.5008 34.9595L45.4933 35.1757ZM45.5455 31.7083V31.7158C45.4113 31.7605 45.292 31.7978 45.1653 31.8351C45.292 31.7904 45.4113 31.7531 45.5455 31.7083ZM45.5455 31.7382V32.2154L45.5157 33.8111C45.0758 34.087 44.3898 34.4375 43.9871 34.4375C43.4428 34.4375 42.8835 34.0572 42.8835 33.5576C42.876 32.5733 43.9274 32.29 45.5455 31.7382ZM39.6547 26.1978C39.9978 26.1978 40.3184 25.9219 40.3259 25.5491C40.3259 25.1688 40.0425 24.8258 39.6547 24.8183C39.2819 24.8183 39.0135 25.1912 39.0135 25.5491C39.0135 25.8921 39.3267 26.1978 39.6547 26.1978ZM39.1701 34.5493L37.8428 34.7656L37.8204 35.1235L41.6308 35.1533V35.1235H41.6606V34.7954L40.3333 34.5195L40.3557 28.1291L40.0723 27.9949C39.4832 28.2559 38.6556 28.487 37.9994 28.5765L37.9695 28.9344C38.3946 28.9643 38.8196 29.0388 39.1924 29.2253L39.1701 34.5493ZM28.6412 34.4971L27.3661 34.7134L27.3437 35.131L31.1094 35.1608L31.1392 34.7432L29.8417 34.4673L29.8641 30.8956C29.8641 30.6495 30.5352 29.0016 31.3182 29.0016C31.4897 29.0016 31.7357 29.1283 31.8849 29.2402L32.2726 29.2775L32.5485 28.3006C32.295 28.0844 31.7134 28.0471 31.4076 28.0471C30.6321 28.0546 30.401 28.9419 30.0953 29.531L29.9014 29.8442V28.1366L29.5584 28.0024L29.5509 28.0322L29.536 28.0024C28.9618 28.2633 28.1118 28.4945 27.4407 28.584L27.4108 28.9419C27.8508 28.9717 28.2833 29.0463 28.6561 29.2327L28.6412 34.4971ZM12.05 34.7358L10.7153 34.4599L11.4609 26.4066L11.5281 26.2053L15.1147 34.8625L15.3161 34.8774L18.8058 26.2948L18.9027 26.4737L19.5888 34.4822L18.1571 34.6985L18.1347 35.1161L22.2433 35.1459L22.2732 34.7283L21.0279 34.4524L20.1331 25.564L21.535 25.3478L21.5275 25.3179H21.5573L21.5424 24.96L18.4926 24.9302L15.4428 32.3422L12.3483 24.9451L9.23885 24.9302L9.19411 25.3179L10.7153 25.6013L9.85776 34.4897L8.6796 34.7059L8.65723 35.1235L12.0202 35.1533L12.05 34.7358ZM59.0124 30.3065C59.0198 28.8524 58.2816 28.0322 56.7381 27.9874C56.7306 27.9874 56.7231 27.9874 56.7157 27.9874C56.5293 27.9874 56.231 28.062 55.8134 28.3901L54.7322 29.3147C54.3445 28.584 53.6062 28.0098 52.7413 28.0024C52.1746 28.0024 51.9658 28.0769 51.5184 28.4274L50.4893 29.0985V28.1217L50.1538 27.9874C49.5796 28.2484 48.7668 28.4796 48.1256 28.5691L48.0957 28.845C48.5133 28.8748 48.9309 28.9494 49.2888 29.1358L49.2814 34.4673L48.1554 34.6836L48.133 35.0639L51.6153 35.0937L51.6451 34.7507L50.4744 34.4375L50.4968 29.6577C51.0113 29.27 51.5929 28.8002 52.2044 28.8002C53.5093 28.8002 53.5391 30.1201 53.5466 31.2908V34.4673L52.4206 34.7208L52.3983 35.0639L55.8805 35.0937L55.9104 34.7507L54.7397 34.4375L54.762 29.6428C55.2616 29.2775 55.9327 28.8897 56.5516 28.8897C57.7298 28.8897 57.8044 29.8814 57.8118 30.9328C57.8118 31.1118 57.8118 31.2833 57.8118 31.4623V34.4673L56.6859 34.7208L56.6635 35.0639L60.0936 35.0937L60.1234 34.7507L59.0049 34.4375L59.0124 30.3065ZM24.6817 35.3174C25.405 35.3174 25.912 35.2204 26.0239 35.1533L27.724 33.3861L27.2468 33.3488C26.695 33.923 26.1581 34.4077 25.3752 34.4077C25.3379 34.4077 25.3006 34.4077 25.2633 34.4077C23.0487 34.2734 22.7429 32.6031 22.7355 30.6942H22.7802L26.6279 30.7241C27.0529 30.7241 27.2244 30.6719 27.2244 30.1126C27.2244 28.8673 26.1581 28.0024 24.6742 28.0024C22.9219 28.0024 21.5126 29.3147 21.5126 31.6412C21.52 34.005 22.9144 35.3099 24.6817 35.3174ZM24.4729 28.4348C25.5392 28.4348 25.9941 29.1954 25.9941 30.1797C25.9941 30.2319 25.9941 30.2916 25.9941 30.3512L22.7728 30.3214C22.8473 29.3893 23.4737 28.4348 24.4729 28.4348ZM37.8801 28.2932C37.6265 28.0769 37.0449 28.0396 36.7392 28.0396C35.9637 28.0471 35.7325 28.9344 35.4268 29.5235L35.2329 29.8367V28.1291L34.8899 27.9949L34.8825 28.0247L34.8675 27.9949C34.2934 28.2559 33.4433 28.487 32.7722 28.5765L32.7498 28.9344C33.1898 28.9643 33.6223 29.0388 33.9951 29.2253L33.9802 34.4971L32.7051 34.7134L32.6753 35.1235H32.7051H32.802L36.4409 35.1533L36.4707 34.7358L35.1733 34.4599L35.2031 30.8881C35.2031 30.642 35.8742 28.9941 36.6497 28.9941C36.8212 28.9941 37.0673 29.1209 37.2164 29.2327L37.6042 29.27L37.8801 28.2932ZM56.067 43.7435L55.8582 44.079V42.2745L55.4928 42.1403L55.4853 42.1701L55.4704 42.1403C54.8664 42.4162 53.9791 42.6622 53.2707 42.7517L53.2409 43.132C53.7032 43.1618 54.158 43.2364 54.5458 43.4377L54.5309 48.9781L53.1887 49.2092L53.1663 49.6417L57.1184 49.6715L57.1482 49.2391L55.7911 48.9482L55.8134 45.1901C55.8134 44.9365 56.5144 43.1991 57.3421 43.1991C57.521 43.1991 57.782 43.3333 57.9386 43.4526L58.3413 43.4899L58.6321 42.4609C58.3711 42.2372 57.7522 42.1999 57.439 42.1999C56.6337 42.185 56.3951 43.1246 56.067 43.7435ZM27.3885 48.9706C27.3437 48.9706 27.3064 48.9706 27.2692 48.9706C24.9278 48.8289 24.6071 47.0617 24.5997 45.0484L28.7158 45.0782C29.1632 45.0782 29.3421 45.0186 29.3421 44.4295C29.3421 43.1171 28.2162 42.1999 26.6577 42.1999C24.8084 42.2074 23.3246 43.5869 23.3171 46.0401C23.3246 48.5381 24.7935 49.9251 26.6577 49.9251C27.4258 49.9251 27.9552 49.8207 28.0745 49.7536L29.8716 47.8894L29.372 47.8446C28.7829 48.4636 28.2162 48.9706 27.3885 48.9706ZM26.434 42.6697C27.56 42.6697 28.0447 43.475 28.0447 44.519C28.0447 44.5786 28.0447 44.6383 28.0447 44.6979L24.6369 44.6681C24.719 43.6689 25.3752 42.6697 26.434 42.6697ZM53.2707 47.7999C52.6891 48.4114 52.1224 48.9184 51.2947 48.9184C51.2499 48.9184 51.2126 48.9184 51.1679 48.9184C48.8265 48.7767 48.5059 47.0095 48.4984 44.9962L52.6145 45.026C53.0619 45.026 53.2409 44.9664 53.2409 44.3773C53.2409 43.0649 52.1149 42.1477 50.5565 42.1477C48.7072 42.1552 47.2158 43.5347 47.2158 45.9879C47.2158 48.4934 48.6923 49.8729 50.5565 49.8729C51.317 49.8729 51.8539 49.7685 51.9732 49.7014L53.7703 47.8372L53.2707 47.7999ZM50.3402 42.6175C51.4662 42.6175 51.9509 43.4228 51.9509 44.4668C51.9509 44.5264 51.9509 44.5861 51.9434 44.6457L48.5357 44.6159C48.6252 43.6242 49.2888 42.6175 50.3402 42.6175ZM60.0638 31.164V32.1707H62.8004V31.164H60.0638Z" fill="#004990"></path>
            </svg>
        `}};te([R({type:String})],Vi.prototype,"width",2);te([R({type:String})],Vi.prototype,"height",2);Vi=te([re("mw-icon-mw-logo")],Vi);let qi=class extends X{constructor(){super(...arguments),this.width="81",this.height="80"}render(){return ye`
      <svg part="icon" width="${this.width}" height="${this.height}" viewBox="0 0 81 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.42676 39.9958C3.42676 19.5212 20.0296 2.92682 40.5042 2.92682C60.9787 2.92682 77.5731 19.5212 77.5731 39.9958C77.5731 60.4703 60.9787 77.0647 40.5042 77.0732C20.0296 77.0732 3.43521 60.4703 3.42676 39.9958ZM5.85294 39.9958C5.85294 49.5652 9.73313 58.2217 16.0057 64.4942C22.2782 70.7668 30.9347 74.6385 40.5042 74.647C50.0736 74.647 58.7301 70.7668 65.0026 64.4942C71.2752 58.2217 75.1554 49.5652 75.1554 39.9958C75.1554 30.4263 71.2752 21.7698 65.0026 15.4973C58.7301 9.22474 50.0736 5.34454 40.5042 5.34454C30.9263 5.34454 22.2782 9.21628 16.0057 15.4973C9.73313 21.7698 5.85294 30.4263 5.85294 39.9958Z" fill="white"/>
        <path d="M44.5583 49.0863C44.5583 48.1404 45.24 47.5609 46.0326 47.5523C47.1234 47.5523 47.6518 48.396 47.6518 49.5039L48.2398 49.538L48.3079 47.8336H48.2739L48.2994 47.808C47.6262 47.2029 46.8677 47.041 46.007 47.041C44.6691 47.041 43.4249 47.9614 43.4249 49.5209C43.4419 52.7593 47.6432 51.3702 47.6091 53.5774C47.6091 54.5915 46.97 55.3158 45.9815 55.3158H45.9388C44.6946 55.2903 43.9191 54.2676 43.8851 52.9297L43.2289 52.8956V52.9297L43.2459 53.0916L43.4163 55.3414C44.1748 55.776 45.0099 55.8868 45.8195 55.8868C47.3705 55.8868 48.9215 55.0261 48.9215 53.1513C48.896 50.0493 44.5157 50.9526 44.5583 49.0863ZM39.3514 47.1262C39.0787 47.1262 38.823 47.1774 38.5503 47.2115L37.1271 48.1148L37.3317 48.2852C37.7152 48.1659 38.0987 48.0978 38.4651 48.0978C40.4422 48.0978 41.3199 49.9385 41.3285 51.8048C41.3285 53.7393 40.4848 55.3755 38.7378 55.3755C37.5959 55.3755 36.9056 54.583 36.9056 53.441V42.0983L36.5562 41.9449C35.8403 42.2602 34.9711 42.5414 34.17 42.6437L34.153 42.9675C34.6728 43.0016 35.0478 43.0868 35.4995 43.3084L35.4654 52.3587C35.4654 52.7678 35.4654 53.1683 35.4654 53.5774C35.4654 54.3017 35.4568 55.0261 35.4057 55.7845L35.7295 55.9635L36.3857 55.3329C36.9311 55.6567 37.6129 55.9124 38.235 55.9209C41.3285 55.9124 42.6664 53.6967 42.6664 51.2935C42.6664 48.5665 41.4478 47.1262 39.3514 47.1262ZM29.5256 43.939L29.5511 43.4959L25.4095 43.4618L25.3754 43.905L26.9946 44.3396L26.7559 45.0299L24.046 52.6911C23.7477 51.8048 21.532 45.1151 21.3786 44.5441L21.5831 44.2203L22.9296 44.0157L22.9551 43.53L18.4811 43.5044V43.5385H18.447V43.9902L19.6742 44.2714L19.8958 44.6805C19.7424 45.2514 17.4244 51.8474 17.1091 52.7252L14.4247 44.3651L14.5014 44.3396L15.8052 44.0157L15.8649 43.53H15.8308H15.6689L11.2119 43.4874L11.1693 43.939L12.7629 44.3311L16.4359 55.9379L16.9983 55.9635L20.3474 46.7342L23.4494 55.9124L24.046 55.9379L28.1024 44.314L29.5256 43.939ZM14.3991 44.3822L14.5099 44.7231L14.3991 44.3822ZM27.0031 44.314L26.9008 44.2884L27.0031 44.314ZM54.3159 53.9608L54.2648 54.0035C53.8813 54.3869 53.2848 54.9835 52.8075 54.9835C51.8957 54.9664 51.5463 54.3358 51.5378 53.1939C51.5378 53.1427 51.5378 53.0916 51.5378 53.0405V48.4898H51.5974L54.0176 48.5238L54.0517 47.6802L51.5037 47.6461L51.5378 45.473L51.1031 45.4389C50.7537 46.6575 49.7908 47.3734 48.8533 48.0551L48.8363 48.4898H48.8704V48.5238H50.0805L50.0464 53.7393C50.0464 55.367 51.0946 55.955 52.0406 55.9635C52.0746 55.9635 52.1173 55.9635 52.1513 55.9635C53.4893 55.8953 54.4011 54.5659 54.4097 54.5659L54.3244 54.0205L54.3159 53.9608ZM49.8504 39.0901H49.893C50.9071 39.0645 51.7252 38.681 52.5007 38.0759L52.4581 39.1071C52.4581 39.1071 52.4667 39.1071 52.4752 39.1071H52.4922C52.4922 39.1071 52.5178 39.0986 52.5263 39.0986C52.8416 39.0645 54.4693 38.698 55.2022 38.5617L55.2533 38.5532L54.9977 38.1612L53.8131 38.0419V32.9542C53.8131 31.48 53.174 30.8152 52.1428 30.8152C52.0917 30.8152 52.0491 30.8152 51.9979 30.8152C51.8531 30.8152 51.6997 30.8238 51.5548 30.9005L49.6885 32.0168C49.501 32.1361 48.8278 32.5026 48.8022 32.8264L48.7426 33.7553L48.8704 33.8576L49.8419 33.6616C49.9612 33.636 50.1402 33.6445 50.1402 33.44V33.4144C50.1316 33.2525 50.1231 33.0991 50.1231 32.9542C50.1316 32.3066 50.2765 31.8208 51.4525 31.6504C51.4952 31.6419 51.5378 31.6419 51.5804 31.6419C52.1684 31.6419 52.5178 32.264 52.5178 33.4656V34.6927C51.7167 34.9399 50.839 35.2893 49.9015 35.5961C49.1942 35.8261 48.0949 36.167 48.0949 37.5731C48.0949 38.2123 48.8533 39.0901 49.8504 39.0901ZM52.4922 39.073H52.4837L52.5007 38.8259L52.4922 39.073ZM52.5519 35.1103V35.1188C52.3985 35.17 52.2621 35.2126 52.1173 35.2552C52.2621 35.204 52.3985 35.1614 52.5519 35.1103ZM52.5519 35.1444V35.6898L52.5178 37.5135C52.015 37.8288 51.231 38.2293 50.7708 38.2293C50.1487 38.2293 49.5095 37.7947 49.5095 37.2237C49.501 36.0988 50.7026 35.775 52.5519 35.1444ZM45.8195 28.8126C46.2115 28.8126 46.578 28.4973 46.5865 28.0712C46.5865 27.6366 46.2627 27.2445 45.8195 27.236C45.3934 27.236 45.0866 27.6621 45.0866 28.0712C45.0866 28.4632 45.4446 28.8126 45.8195 28.8126ZM45.2656 38.3572L43.7487 38.6043L43.7231 39.0134L48.0778 39.0474V39.0134H48.1119V38.6384L46.595 38.3231L46.6206 31.0198L46.2968 30.8664C45.6235 31.1646 44.6776 31.4288 43.9277 31.5311L43.8936 31.9401C44.3793 31.9742 44.8651 32.0594 45.2912 32.2725L45.2656 38.3572ZM33.2326 38.2975L31.7754 38.5446L31.7498 39.0219L36.0534 39.056L36.0875 38.5787L34.6047 38.2634L34.6302 34.1814C34.6302 33.9002 35.3972 32.0168 36.292 32.0168C36.488 32.0168 36.7692 32.1617 36.9397 32.2895L37.3828 32.3321L37.6981 31.2158C37.4084 30.9686 36.7437 30.926 36.3943 30.926C35.508 30.9345 35.2438 31.9487 34.8944 32.6219L34.6728 32.9798V31.0283L34.2808 30.8749L34.2723 30.909L34.2553 30.8749C33.5991 31.1732 32.6276 31.4373 31.8606 31.5396L31.8265 31.9487C32.3293 31.9827 32.8236 32.068 33.2497 32.281L33.2326 38.2975ZM14.2713 38.5702L12.7459 38.2549L13.5981 29.0512L13.6747 28.8211L17.7738 38.7151L18.0039 38.7321L21.9922 28.9234L22.103 29.1279L22.887 38.2805L21.2508 38.5276L21.2252 39.0048L25.9208 39.0389L25.9549 38.5617L24.5317 38.2464L23.5091 28.0882L25.1112 27.8411L25.1027 27.807H25.1368L25.1197 27.3979L21.6342 27.3639L18.1488 35.8347L14.6122 27.3809L11.0585 27.3639L11.0074 27.807L12.7459 28.1308L11.7658 38.289L10.4194 38.5361L10.3938 39.0134L14.2372 39.0474L14.2713 38.5702ZM67.9425 33.5082C67.951 31.8464 67.1074 30.909 65.3433 30.8579C65.3348 30.8579 65.3263 30.8579 65.3177 30.8579C65.1047 30.8579 64.7638 30.9431 64.2866 31.318L63.0509 32.3748C62.6078 31.5396 61.7641 30.8834 60.7756 30.8749C60.1279 30.8749 59.8893 30.9601 59.378 31.3606L58.2019 32.1276V31.0112L57.8184 30.8579C57.1622 31.1561 56.2334 31.4203 55.5005 31.5226L55.4664 31.8379C55.9436 31.872 56.4208 31.9572 56.8299 32.1702L56.8214 38.2634L55.5346 38.5106L55.509 38.9452L59.4887 38.9793L59.5228 38.5873L58.1849 38.2293L58.2104 32.7668C58.7985 32.3236 59.4632 31.7867 60.162 31.7867C61.6533 31.7867 61.6874 33.2951 61.6959 34.6331V38.2634L60.4091 38.5532L60.3835 38.9452L64.3633 38.9793L64.3974 38.5873L63.0594 38.2293L63.085 32.7497C63.656 32.3321 64.4229 31.889 65.1303 31.889C66.4767 31.889 66.562 33.0224 66.5705 34.224C66.5705 34.4285 66.5705 34.6246 66.5705 34.8291V38.2634L65.2837 38.5532L65.2581 38.9452L69.1782 38.9793L69.2123 38.5873L67.934 38.2293L67.9425 33.5082ZM28.7075 39.2349C29.5341 39.2349 30.1136 39.1241 30.2414 39.0474L32.1844 37.0277L31.639 36.9851C31.0084 37.6413 30.3948 38.1952 29.5 38.1952C29.4574 38.1952 29.4148 38.1952 29.3722 38.1952C26.8412 38.0419 26.4918 36.1329 26.4832 33.9513H26.5344L30.9317 33.9854C31.4174 33.9854 31.6134 33.9258 31.6134 33.2866C31.6134 31.8634 30.3948 30.8749 28.6989 30.8749C26.6963 30.8749 25.0856 32.3748 25.0856 35.0336C25.0942 37.7351 26.6878 39.2264 28.7075 39.2349ZM28.4688 31.3692C29.6875 31.3692 30.2073 32.2384 30.2073 33.3633C30.2073 33.423 30.2073 33.4911 30.2073 33.5593L26.5258 33.5252C26.6111 32.46 27.3269 31.3692 28.4688 31.3692ZM43.7913 31.2073C43.5016 30.9601 42.8369 30.9175 42.4875 30.9175C41.6012 30.926 41.337 31.9401 40.9876 32.6134L40.766 32.9713V31.0198L40.374 30.8664L40.3655 30.9005L40.3484 30.8664C39.6923 31.1646 38.7208 31.4288 37.9538 31.5311L37.9282 31.9401C38.431 31.9742 38.9253 32.0594 39.3514 32.2725L39.3343 38.2975L37.8771 38.5446L37.843 39.0134H37.8771H37.9879L42.1466 39.0474L42.1807 38.5702L40.6978 38.2549L40.7319 34.1729C40.7319 33.8917 41.4989 32.0083 42.3852 32.0083C42.5812 32.0083 42.8624 32.1532 43.0329 32.281L43.476 32.3236L43.7913 31.2073ZM64.5763 48.8647L64.3377 49.2482V47.1859L63.9202 47.0325L63.9116 47.0666L63.8946 47.0325C63.2043 47.3478 62.1902 47.629 61.3806 47.7313L61.3465 48.1659C61.8749 48.2 62.3947 48.2852 62.8379 48.5153L62.8208 54.8471L61.2869 55.1113L61.2613 55.6056L65.7779 55.6397L65.812 55.1454L64.261 54.813L64.2866 50.518C64.2866 50.2282 65.0877 48.2426 66.0336 48.2426C66.2381 48.2426 66.5364 48.396 66.7154 48.5324L67.1755 48.575L67.5079 47.399C67.2096 47.1433 66.5023 47.1007 66.1444 47.1007C65.224 47.0836 64.9513 48.1574 64.5763 48.8647ZM31.8009 54.8386C31.7498 54.8386 31.7072 54.8386 31.6646 54.8386C28.9887 54.6767 28.6222 52.657 28.6137 50.3561L33.3178 50.3902C33.8292 50.3902 34.0337 50.322 34.0337 49.6487C34.0337 48.1489 32.7469 47.1007 30.9658 47.1007C28.8523 47.1092 27.1565 48.6858 27.1479 51.4895C27.1565 54.3443 28.8353 55.9294 30.9658 55.9294C31.8435 55.9294 32.4486 55.8101 32.585 55.7334L34.6387 53.6029L34.0678 53.5518C33.3945 54.2591 32.7469 54.8386 31.8009 54.8386ZM30.7101 47.6376C31.9969 47.6376 32.5509 48.5579 32.5509 49.751C32.5509 49.8192 32.5509 49.8874 32.5509 49.9555L28.6563 49.9214C28.7501 48.7795 29.5 47.6376 30.7101 47.6376ZM61.3806 53.5007C60.7159 54.1995 60.0682 54.779 59.1223 54.779C59.0712 54.779 59.0285 54.779 58.9774 54.779C56.3015 54.617 55.9351 52.5973 55.9266 50.2964L60.6307 50.3305C61.142 50.3305 61.3465 50.2623 61.3465 49.5891C61.3465 48.0892 60.0597 47.041 58.2786 47.041C56.1652 47.0496 54.4608 48.6261 54.4608 51.4298C54.4608 54.2932 56.1481 55.8698 58.2786 55.8698C59.1479 55.8698 59.7614 55.7505 59.8978 55.6738L61.9516 53.5433L61.3806 53.5007ZM58.0315 47.5779C59.3183 47.5779 59.8722 48.4983 59.8722 49.6914C59.8722 49.7595 59.8722 49.8277 59.8637 49.8959L55.9692 49.8618C56.0714 48.7284 56.8299 47.5779 58.0315 47.5779ZM69.1441 34.4882V35.6387H72.2717V34.4882H69.1441Z" fill="white"/>
        <path d="M65.1218 77.9929C65.1218 77.2515 65.7184 76.7061 66.4342 76.7061C67.133 76.7061 67.7381 77.2515 67.7381 77.9929C67.7381 78.7428 67.1415 79.2882 66.4342 79.2882C65.7269 79.2882 65.1218 78.7428 65.1218 77.9929ZM66.4342 79.0752C67.0137 79.0752 67.4739 78.615 67.4739 78.0014C67.4739 77.3878 67.0137 76.9276 66.4342 76.9276C65.8462 76.9276 65.386 77.3878 65.386 78.0014C65.386 78.615 65.8462 79.0752 66.4342 79.0752ZM66.1615 78.7428H65.9399V77.26H66.5024C66.8518 77.26 67.0307 77.3878 67.0307 77.6861C67.0307 77.9503 66.8603 78.0696 66.6472 78.0951L67.0733 78.7513H66.8177L66.4257 78.1037H66.17V78.7428H66.1615ZM66.4342 77.9077C66.6217 77.9077 66.7921 77.8906 66.7921 77.669C66.7921 77.4816 66.6217 77.4475 66.4683 77.4475H66.1615V77.9077H66.4342Z" fill="white"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M40.5 79.5349C62.3345 79.5349 80.0349 61.8345 80.0349 40C80.0349 18.1655 62.3345 0.465116 40.5 0.465116C18.6655 0.465116 0.965116 18.1655 0.965116 40C0.965116 61.8345 18.6655 79.5349 40.5 79.5349ZM40.5 80C62.5914 80 80.5 62.0914 80.5 40C80.5 17.9086 62.5914 0 40.5 0C18.4086 0 0.5 17.9086 0.5 40C0.5 62.0914 18.4086 80 40.5 80Z" fill="white"/>
      </svg>
    `}};te([R({type:String})],qi.prototype,"width",2);te([R({type:String})],qi.prototype,"height",2);qi=te([re("mw-icon-mw-logo-white-lg")],qi);let qs=class extends X{constructor(){super(...arguments),this.size="md",this.getIconSize=()=>B5[this.size]}render(){return ye`
            <svg part="icon" width="${this.getIconSize()}" height="${this.getIconSize()}" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.000976562 19.9977C0.000976562 8.95223 8.95777 0 20.0033 0C31.0487 0 40.001 8.95223 40.001 19.9977C40.001 31.0432 31.0487 39.9954 20.0033 40C8.95777 40 0.00553704 31.0432 0.000976562 19.9977ZM1.30984 19.9977C1.30984 25.1602 3.4031 29.8301 6.78698 33.214C10.1709 36.5979 14.8408 38.6866 20.0033 38.6911C25.1657 38.6911 29.8357 36.5979 33.2195 33.214C36.6034 29.8301 38.6967 25.1602 38.6967 19.9977C38.6967 14.8353 36.6034 10.1653 33.2195 6.78144C29.8357 3.39756 25.1657 1.3043 20.0033 1.3043C14.8362 1.3043 10.1709 3.393 6.78698 6.78144C3.4031 10.1653 1.30984 14.8353 1.30984 19.9977Z" fill="white"/>
            <path d="M22.1906 24.9018C22.1906 24.3915 22.5584 24.0789 22.986 24.0743C23.5744 24.0743 23.8595 24.5294 23.8595 25.1271L24.1767 25.1454L24.2135 24.226H24.1951L24.2089 24.2122C23.8457 23.8858 23.4365 23.7984 22.9722 23.7984C22.2504 23.7984 21.5792 24.2949 21.5792 25.1363C21.5884 26.8833 23.8549 26.1339 23.8365 27.3246C23.8365 27.8717 23.4917 28.2625 22.9584 28.2625H22.9354C22.2642 28.2487 21.8458 27.697 21.8274 26.9752L21.4734 26.9568V26.9752L21.4826 27.0625L21.5746 28.2763C21.9837 28.5107 22.4343 28.5705 22.871 28.5705C23.7077 28.5705 24.5445 28.1062 24.5445 27.0947C24.5307 25.4213 22.1676 25.9086 22.1906 24.9018ZM19.3816 23.8444C19.2345 23.8444 19.0966 23.872 18.9495 23.8904L18.1817 24.3777L18.292 24.4696C18.4989 24.4053 18.7058 24.3685 18.9035 24.3685C19.9701 24.3685 20.4436 25.3615 20.4482 26.3683C20.4482 27.4119 19.9931 28.2946 19.0506 28.2946C18.4346 28.2946 18.0622 27.8671 18.0622 27.251V21.1319L17.8737 21.0492C17.4875 21.2193 17.0186 21.371 16.5864 21.4262L16.5772 21.6009C16.8577 21.6193 17.0599 21.6652 17.3036 21.7848L17.2852 26.6672C17.2852 26.8878 17.2852 27.1039 17.2852 27.3246C17.2852 27.7154 17.2806 28.1061 17.253 28.5153L17.4277 28.6119L17.7817 28.2717C18.076 28.4464 18.4438 28.5843 18.7794 28.5889C20.4482 28.5843 21.17 27.389 21.17 26.0925C21.17 24.6213 20.5126 23.8444 19.3816 23.8444ZM14.0809 22.125L14.0946 21.8859L11.8603 21.8675L11.8419 22.1066L12.7154 22.3411L12.5867 22.7134L11.1247 26.8465C10.9638 26.3683 9.76852 22.7594 9.68577 22.4514L9.79611 22.2767L10.5225 22.1664L10.5363 21.9043L8.12267 21.8905V21.9089H8.10428V22.1526L8.7663 22.3043L8.88583 22.5249C8.80308 22.833 7.55259 26.3913 7.38249 26.8649L5.93432 22.3548L5.9757 22.3411L6.67909 22.1664L6.71128 21.9043H6.69289H6.60554L4.20111 21.8813L4.17813 22.125L5.03783 22.3365L7.0193 28.5981L7.32273 28.6119L9.12949 23.6329L10.8029 28.5843L11.1247 28.5981L13.3131 22.3273L14.0809 22.125ZM5.92053 22.364L5.98029 22.5479L5.92053 22.364ZM12.72 22.3273L12.6649 22.3135L12.72 22.3273ZM27.4546 27.5315L27.427 27.5545C27.2201 27.7613 26.8983 28.0832 26.6409 28.0832C26.1489 28.074 25.9605 27.7338 25.9559 27.1177C25.9559 27.0901 25.9559 27.0625 25.9559 27.035V24.58H25.988L27.2937 24.5984L27.3121 24.1432L25.9375 24.1248L25.9559 22.9525L25.7214 22.9341C25.5329 23.5915 25.0134 23.9777 24.5077 24.3455L24.4985 24.58H24.5169V24.5984H25.1697L25.1513 27.4119C25.1513 28.29 25.7168 28.6073 26.2271 28.6119C26.2455 28.6119 26.2685 28.6119 26.2869 28.6119C27.0087 28.5751 27.5006 27.8579 27.5052 27.8579L27.4592 27.5637L27.4546 27.5315ZM25.0456 19.5091H25.0686C25.6157 19.4953 26.057 19.2884 26.4754 18.962L26.4524 19.5183C26.4524 19.5183 26.457 19.5183 26.4616 19.5183H26.4708C26.4708 19.5183 26.4846 19.5137 26.4891 19.5137C26.6593 19.4953 27.5373 19.2976 27.9327 19.224L27.9603 19.2194L27.8224 19.008L27.1833 18.9436V16.199C27.1833 15.4036 26.8385 15.045 26.2823 15.045C26.2547 15.045 26.2317 15.045 26.2041 15.045C26.126 15.045 26.0432 15.0496 25.965 15.091L24.9582 15.6933C24.8571 15.7576 24.4939 15.9553 24.4801 16.13L24.4479 16.6311L24.5169 16.6863L25.041 16.5806C25.1053 16.5668 25.2019 16.5714 25.2019 16.461V16.4472C25.1973 16.3599 25.1927 16.2771 25.1927 16.199C25.1973 15.8496 25.2754 15.5875 25.9099 15.4956C25.9329 15.491 25.9559 15.491 25.9788 15.491C26.2961 15.491 26.4846 15.8266 26.4846 16.4748V17.1368C26.0524 17.2702 25.5789 17.4586 25.0732 17.6242C24.6916 17.7483 24.0985 17.9322 24.0985 18.6907C24.0985 19.0355 24.5077 19.5091 25.0456 19.5091ZM26.4708 19.4999H26.4662L26.4754 19.3666L26.4708 19.4999ZM26.5029 17.3621V17.3667C26.4202 17.3943 26.3466 17.4173 26.2685 17.4403C26.3466 17.4127 26.4202 17.3897 26.5029 17.3621ZM26.5029 17.3805V17.6747L26.4846 18.6586C26.2133 18.8287 25.7903 19.0447 25.5421 19.0447C25.2065 19.0447 24.8617 18.8103 24.8617 18.5023C24.8571 17.8954 25.5053 17.7207 26.5029 17.3805ZM22.871 13.9646C23.0825 13.9646 23.2802 13.7945 23.2848 13.5647C23.2848 13.3302 23.1101 13.1187 22.871 13.1141C22.6412 13.1141 22.4756 13.344 22.4756 13.5647C22.4756 13.7762 22.6687 13.9646 22.871 13.9646ZM22.5722 19.1137L21.7539 19.247L21.7401 19.4677L24.0893 19.4861V19.4677H24.1077V19.2654L23.2894 19.0953L23.3032 15.1554L23.1285 15.0726C22.7653 15.2335 22.255 15.376 21.8504 15.4312L21.832 15.6519C22.0941 15.6703 22.3561 15.7162 22.586 15.8312L22.5722 19.1137ZM16.0807 19.0815L15.2946 19.2148L15.2808 19.4723L17.6024 19.4907L17.6208 19.2332L16.8209 19.0631L16.8347 16.861C16.8347 16.7093 17.2484 15.6933 17.7312 15.6933C17.8369 15.6933 17.9886 15.7714 18.0806 15.8404L18.3196 15.8634L18.4897 15.2611C18.3334 15.1278 17.9748 15.1048 17.7863 15.1048C17.3082 15.1094 17.1657 15.6565 16.9772 16.0197L16.8577 16.2128V15.16L16.6462 15.0772L16.6416 15.0956L16.6324 15.0772C16.2784 15.2381 15.7543 15.3806 15.3405 15.4358L15.3221 15.6565C15.5934 15.6749 15.86 15.7208 16.0899 15.8358L16.0807 19.0815ZM5.85157 19.2286L5.02864 19.0585L5.48838 14.0934L5.52975 13.9692L7.74109 19.3068L7.86521 19.316L10.0168 14.0244L10.0765 14.1348L10.4995 19.0723L9.61681 19.2056L9.60302 19.4631L12.1362 19.4815L12.1546 19.224L11.3868 19.0539L10.8351 13.5739L11.6994 13.4405L11.6948 13.4222H11.7132L11.704 13.2015L9.82369 13.1831L7.94337 17.7529L6.03546 13.1923L4.11836 13.1831L4.09078 13.4222L5.02864 13.5969L4.49994 19.0769L3.77356 19.2102L3.75977 19.4677L5.83318 19.4861L5.85157 19.2286ZM34.8058 16.4978C34.8104 15.6013 34.3552 15.0956 33.4036 15.068C33.399 15.068 33.3944 15.068 33.3898 15.068C33.2749 15.068 33.091 15.114 32.8335 15.3163L32.1669 15.8863C31.9278 15.4358 31.4727 15.0818 30.9394 15.0772C30.59 15.0772 30.4613 15.1232 30.1854 15.3393L29.551 15.753V15.1508L29.3441 15.068C28.9901 15.2289 28.489 15.3714 28.0936 15.4266L28.0752 15.5967C28.3327 15.6151 28.5901 15.6611 28.8108 15.776L28.8062 19.0631L28.112 19.1965L28.0982 19.4309L30.2452 19.4493L30.2636 19.2378L29.5418 19.0447L29.5556 16.0978C29.8728 15.8588 30.2314 15.5691 30.6084 15.5691C31.4129 15.5691 31.4313 16.3829 31.4359 17.1047V19.0631L30.7417 19.2194L30.7279 19.4309L32.8749 19.4493L32.8933 19.2378L32.1715 19.0447L32.1853 16.0886C32.4933 15.8634 32.9071 15.6243 33.2887 15.6243C34.015 15.6243 34.061 16.2357 34.0656 16.884C34.0656 16.9943 34.0656 17.1001 34.0656 17.2104V19.0631L33.3714 19.2194L33.3576 19.4309L35.4724 19.4493L35.4908 19.2378L34.8012 19.0447L34.8058 16.4978ZM13.6395 19.5872C14.0855 19.5872 14.3981 19.5275 14.467 19.4861L15.5152 18.3965L15.221 18.3735C14.8808 18.7275 14.5498 19.0264 14.0671 19.0264C14.0441 19.0264 14.0211 19.0264 13.9981 19.0264C12.6327 18.9436 12.4442 17.9138 12.4396 16.7369H12.4672L14.8394 16.7553C15.1015 16.7553 15.2072 16.7231 15.2072 16.3783C15.2072 15.6105 14.5498 15.0772 13.6349 15.0772C12.5545 15.0772 11.6856 15.8863 11.6856 17.3207C11.6902 18.7781 12.5499 19.5826 13.6395 19.5872ZM13.5108 15.3439C14.1682 15.3439 14.4486 15.8128 14.4486 16.4196C14.4486 16.4518 14.4486 16.4886 14.4486 16.5254L12.4626 16.507C12.5086 15.9323 12.8947 15.3439 13.5108 15.3439ZM21.7768 15.2565C21.6205 15.1232 21.2619 15.1002 21.0735 15.1002C20.5953 15.1048 20.4528 15.6519 20.2643 16.0151L20.1448 16.2082V15.1554L19.9333 15.0726L19.9287 15.091L19.9195 15.0726C19.5655 15.2335 19.0414 15.376 18.6277 15.4312L18.6139 15.6519C18.8851 15.6703 19.1518 15.7162 19.3816 15.8312L19.3724 19.0815L18.5863 19.2148L18.5679 19.4677H18.5863H18.646L20.8896 19.4861L20.9079 19.2286L20.108 19.0585L20.1264 16.8564C20.1264 16.7047 20.5402 15.6887 21.0183 15.6887C21.124 15.6887 21.2757 15.7668 21.3677 15.8358L21.6067 15.8588L21.7768 15.2565ZM32.9898 24.7823L32.8611 24.9891V23.8766L32.6358 23.7938L32.6312 23.8122L32.622 23.7938C32.2497 23.9639 31.7026 24.1156 31.2658 24.1708L31.2474 24.4053C31.5325 24.4237 31.8129 24.4696 32.052 24.5938L32.0428 28.0096L31.2152 28.1521L31.2015 28.4188L33.6381 28.4372L33.6564 28.1705L32.8197 27.9912L32.8335 25.6741C32.8335 25.5178 33.2657 24.4466 33.776 24.4466C33.8863 24.4466 34.0472 24.5294 34.1438 24.603L34.392 24.6259L34.5713 23.9915C34.4104 23.8536 34.0288 23.8306 33.8357 23.8306C33.3392 23.8214 33.1921 24.4007 32.9898 24.7823ZM15.3084 28.005C15.2808 28.005 15.2578 28.005 15.2348 28.005C13.7912 27.9177 13.5935 26.8281 13.5889 25.5868L16.1267 25.6052C16.4025 25.6052 16.5129 25.5684 16.5129 25.2052C16.5129 24.3961 15.8187 23.8306 14.8578 23.8306C13.7177 23.8352 12.8028 24.6857 12.7982 26.1982C12.8028 27.7384 13.7085 28.5935 14.8578 28.5935C15.3313 28.5935 15.6578 28.5291 15.7313 28.4877L16.8393 27.3384L16.5313 27.3108C16.1681 27.6924 15.8187 28.005 15.3084 28.005ZM14.7199 24.1202C15.4141 24.1202 15.7129 24.6167 15.7129 25.2604C15.7129 25.2972 15.7129 25.3339 15.7129 25.3707L13.6119 25.3523C13.6625 24.7363 14.0671 24.1202 14.7199 24.1202ZM31.2658 27.2832C30.9072 27.6602 30.5578 27.9728 30.0475 27.9728C30.0199 27.9728 29.9969 27.9728 29.9694 27.9728C28.5258 27.8855 28.3281 26.7959 28.3235 25.5546L30.8612 25.573C31.1371 25.573 31.2474 25.5362 31.2474 25.173C31.2474 24.3639 30.5532 23.7984 29.5924 23.7984C28.4522 23.803 27.5328 24.6535 27.5328 26.1661C27.5328 27.7108 28.443 28.5613 29.5924 28.5613C30.0613 28.5613 30.3923 28.4969 30.4659 28.4556L31.5738 27.3062L31.2658 27.2832ZM29.459 24.0881C30.1532 24.0881 30.4521 24.5846 30.4521 25.2282C30.4521 25.265 30.4521 25.3018 30.4475 25.3385L28.3465 25.3201C28.4017 24.7087 28.8108 24.0881 29.459 24.0881ZM35.454 17.0265V17.6471H37.1413V17.0265H35.454Z" fill="white"/>
            </svg>
        `}};te([R({type:String})],qs.prototype,"size",2);qs=te([re("mw-icon-mw-logo-white")],qs);let Zs=class extends X{constructor(){super(...arguments),this.size="md"}render(){return ye`
    <svg width="28" height="14" viewBox="0 0 28 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="28" height="14" rx="2" fill="#F7EC48"/>
    <path d="M9.23145 11H7.30762L4.20215 5.59961H4.1582C4.17122 5.82422 4.18262 6.05046 4.19238 6.27832C4.20215 6.50618 4.21191 6.73405 4.22168 6.96191C4.23145 7.18652 4.24121 7.41276 4.25098 7.64062V11H2.89844V3.86133H4.80762L7.9082 9.20801H7.94238C7.93587 8.98665 7.92773 8.76693 7.91797 8.54883C7.9082 8.33073 7.89844 8.11263 7.88867 7.89453C7.88216 7.67643 7.87565 7.45833 7.86914 7.24023V3.86133H9.23145V11ZM15.1445 11H11.0332V3.86133H15.1445V5.10156H12.5469V6.66895H14.9639V7.90918H12.5469V9.75H15.1445V11ZM25.4082 3.86133L23.5918 11H21.8682L20.9014 7.25C20.8818 7.17839 20.8558 7.06934 20.8232 6.92285C20.7907 6.77637 20.7565 6.61686 20.7207 6.44434C20.6849 6.26855 20.6523 6.10417 20.623 5.95117C20.597 5.79492 20.5791 5.67122 20.5693 5.58008C20.5596 5.67122 20.54 5.79329 20.5107 5.94629C20.4847 6.09928 20.4538 6.26204 20.418 6.43457C20.3854 6.6071 20.3529 6.76823 20.3203 6.91797C20.2878 7.06771 20.2617 7.18164 20.2422 7.25977L19.2803 11H17.5615L15.7402 3.86133H17.2295L18.1426 7.75781C18.1686 7.875 18.1979 8.01497 18.2305 8.17773C18.2663 8.34049 18.3005 8.51139 18.333 8.69043C18.3688 8.86621 18.3997 9.03711 18.4258 9.20312C18.4551 9.36589 18.4762 9.50749 18.4893 9.62793C18.5055 9.50423 18.5267 9.361 18.5527 9.19824C18.5788 9.03223 18.6064 8.86458 18.6357 8.69531C18.6683 8.52279 18.7008 8.36328 18.7334 8.2168C18.766 8.07031 18.7952 7.9515 18.8213 7.86035L19.8613 3.86133H21.292L22.332 7.86035C22.3548 7.94824 22.3809 8.06706 22.4102 8.2168C22.4427 8.36328 22.4753 8.52279 22.5078 8.69531C22.5404 8.86784 22.5697 9.03711 22.5957 9.20312C22.625 9.36589 22.6462 9.50749 22.6592 9.62793C22.682 9.46517 22.7129 9.26823 22.752 9.03711C22.7943 8.80273 22.8382 8.56999 22.8838 8.33887C22.9326 8.10775 22.9749 7.91406 23.0107 7.75781L23.9189 3.86133H25.4082Z" fill="#132631"/>
    </svg>
    `}};te([R({type:String})],Zs.prototype,"size",2);Zs=te([re("mw-icon-new-badge")],Zs);let vd=class extends X{render(){return ye`
      <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
        <ellipse cx="6.5" cy="6.5" rx="6.5" ry="6.5" fill="#FAFAF6"/>
        <ellipse cx="6.49979" cy="6.49961" rx="3.9" ry="3.9" fill="#FBBF24"/>
        <circle cx="6.5" cy="6.5" r="4" stroke="#FDE68A"/>
      </svg>
    `}};vd=te([re("mw-notification-dot")],vd);let _d=class extends X{render(){return ye`
     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M22.536 3.86515L20.2277 1.55682C19.8759 1.20502 19.3056 1.20502 18.9538 1.55682L17.4024 3.10815L20.9849 6.69066L22.5363 5.13933C22.8881 4.78753 22.8878 4.21695 22.536 3.86515Z" fill="white"/>
      <path d="M16.1712 22.7087H3.48798C2.22646 22.7087 1.20001 21.6822 1.20001 20.4207V7.73748C1.20001 6.47596 2.22646 5.44951 3.48798 5.44951H10.5403C10.9329 5.44951 11.2512 5.76783 11.2512 6.16036C11.2512 6.55288 10.9329 6.8712 10.5403 6.8712H3.48798C3.01039 6.8712 2.62171 7.25988 2.62171 7.73748V20.4207C2.62171 20.8983 3.01039 21.287 3.48798 21.287H16.1712C16.6488 21.287 17.0375 20.8983 17.0375 20.4207V13.3684C17.0375 12.9758 17.3558 12.6575 17.7484 12.6575C18.1409 12.6575 18.4592 12.9758 18.4592 13.3684V20.4207C18.4592 21.6822 17.4327 22.7087 16.1712 22.7087Z" fill="white"/>
      <path d="M16.7791 3.73099L8.31368 12.1964L7.13701 16.9554L11.896 15.7787L20.3614 7.31328L16.7791 3.73099ZM7.97817 16.1145L9.21978 15.6796C9.21978 14.9294 8.413 14.8729 8.413 14.8729L9.08132 12.9641L11.1283 15.0111L7.97817 16.1145Z" fill="white"/>
    </svg>
    `}};_d=te([re("mw-icon-cloud-edit")],_d);let Gs=class extends X{constructor(){super(...arguments),this.darkMode=!1}render(){return ye`
     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M3.12924 20.3508C2.43736 20.0319 1.87543 18.8642 1.87543 17.747V5.27641C1.87543 4.15928 2.43736 3.51128 3.12924 3.83022C5.63686 4.98784 6.89068 5.56666 9.39662 6.72259C10.0885 7.04153 10.6504 8.20928 10.6504 9.32641V21.797C10.6504 22.9142 10.0885 23.5622 9.39662 23.2432C6.88899 22.0856 5.63518 21.5068 3.12924 20.3508ZM15.3754 17.9242C15.3754 18.2972 15.0734 18.5992 14.7004 18.5992H11.3254V19.9492H14.7004C15.8176 19.9492 16.7254 19.0413 16.7254 17.9242V13.1992H15.3754V17.9242ZM16.7254 5.09922C16.7254 3.98209 15.8176 3.07422 14.7004 3.07422H3.42793L6.35405 4.42422H14.7021C15.0751 4.42422 15.3771 4.72628 15.3771 5.09922V9.82422H16.7271V5.09922H16.7254ZM21.8082 10.8941L18.8669 8.58053C18.5631 8.34091 18.0737 8.52822 18.0737 8.87922V10.4975H13.3487C12.9758 10.4975 12.6737 10.7996 12.6737 11.1725V11.8475C12.6737 12.2205 12.9758 12.5225 13.3487 12.5225H18.0737V14.1408C18.0737 14.4918 18.5614 14.6792 18.8669 14.4395L21.8082 12.126C22.2301 11.7952 22.2301 11.2232 21.8082 10.8924V10.8941ZM8.60011 13.8135C8.60011 13.2752 8.3318 12.7166 7.99768 12.563C7.66524 12.4095 7.39524 12.72 7.39524 13.2583C7.39524 13.7966 7.66524 14.3552 7.99768 14.5087C8.33011 14.6623 8.60011 14.3501 8.60011 13.8135Z" fill="${this.darkMode?"#94A3B8":"#475569"}"/>
    </svg>
    `}};te([R({type:Boolean})],Gs.prototype,"darkMode",2);Gs=te([re("mw-icon-cloud-logout")],Gs);let Ws=class extends X{constructor(){super(...arguments),this.darkMode=!1}render(){return ye`
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M11.4483 16.0008H9.23833V18.7643H11.4483L13.106 20.422H8.13241C7.82878 20.422 7.58007 20.1733 7.58007 19.869V16.0008H5.37193L8.41013 12.6861L11.4483 16.0008Z" fill="${this.darkMode?"#94A3B8":"#475569"}"/>
        <path d="M14.7636 17.1758V14.4122H12.553L10.8954 12.7552H15.8689C16.1725 12.7552 16.4213 13.0039 16.4213 13.3075V17.1758H18.6294L15.5918 20.4911L12.553 17.1758H14.7636Z" fill="${this.darkMode?"#94A3B8":"#475569"}" />
        <path d="M4.74739 8.53577C4.97141 8.53577 5.19482 8.55737 5.41452 8.59934C5.87984 5.71728 8.38544 3.50977 11.3965 3.50977C13.7583 3.50977 15.8615 4.85884 16.8582 6.94046C17.3297 6.7763 17.8277 6.69114 18.3313 6.69114C20.7956 6.69114 22.8 8.69623 22.8 11.1605C22.8 13.6247 20.795 15.6298 18.3313 15.6298H17.2846V14.1363H18.3313C19.9717 14.1363 21.3066 12.8015 21.3066 11.1611C21.3066 9.52074 19.9717 8.18586 18.3313 8.18586C17.8037 8.18586 17.2853 8.32595 16.8323 8.5907L16.0288 9.06034L15.7443 8.17413C15.1358 6.27827 13.3886 5.00448 11.3959 5.00448C8.87792 5.00448 6.82963 7.05278 6.82963 9.57072L6.84629 10.8896L5.72618 10.2798C5.4281 10.1175 5.08928 10.0317 4.74677 10.0317C3.61493 10.0317 2.69415 10.9525 2.69415 12.0843C2.69415 13.2162 3.61493 14.137 4.74677 14.137H5.90947L4.73443 15.4188L4.54558 15.6243C2.68305 15.52 1.20005 13.9722 1.20005 12.0837C1.20005 10.1953 2.79104 8.53701 4.74677 8.53701L4.74739 8.53577Z"  fill="${this.darkMode?"#94A3B8":"#475569"}"/>
      </svg>
    `}};te([R({type:Boolean})],Ws.prototype,"darkMode",2);Ws=te([re("mw-icon-cloud-sync")],Ws);let Js=class extends X{constructor(){super(...arguments),this.darkMode=!1}render(){return ye`
      <svg xmlns="http://www.w3.org/2000/svg" width="75" height="74" viewBox="0 0 75 60" fill="none">
        <path d="M23.9383 32.532C25.2627 34.7773 27.704 36.2844 30.4993 36.2844C33.4716 36.2844 36.0462 34.5794 37.2982 32.0943C38.5522 34.5794 41.1249 36.2844 44.099 36.2844C46.8943 36.2844 49.3376 34.7773 50.6601 32.532V51.4483C50.6601 51.4483 50.8979 53.2959 48.487 55.7944C48.487 55.7944 45.119 59.3794 37.2982 63.1813C29.4775 59.3794 26.1113 55.7944 26.1113 55.7944C23.7004 53.2959 23.9383 51.4483 23.9383 51.4483V32.532ZM27.548 51.4483V51.5434C27.5937 51.7204 27.8087 52.3559 28.7087 53.2864L28.7335 53.3131C28.8971 53.4786 31.5592 56.1293 37.2982 59.1358C43.0144 56.1388 45.6803 53.4977 45.8611 53.315L45.8896 53.2864C46.7897 52.354 47.0047 51.7185 47.0504 51.5415V39.4983C46.0932 39.759 45.0999 39.8941 44.099 39.8941C41.9812 39.8941 39.9185 39.3004 38.1336 38.1778C37.8463 37.997 37.5684 37.8048 37.3001 37.5993C37.0318 37.8048 36.754 37.997 36.4667 38.1778C34.6799 39.3004 32.6172 39.8941 30.5012 39.8941C29.5003 39.8941 28.507 39.7609 27.5499 39.4983V51.4464L27.548 51.4483Z" fill="white"/>
        <path d="M37.3003 42.2993C39.363 42.2993 41.0356 43.9719 41.0356 46.0346C41.0356 47.4542 40.244 48.6891 39.0756 49.3209V52.9953C39.0756 53.9771 38.2802 54.7725 37.2984 54.7725C36.3165 54.7725 35.523 53.9771 35.523 52.9953V49.3209C34.3565 48.6891 33.563 47.4542 33.563 46.0346C33.563 43.9719 35.2357 42.2993 37.2984 42.2993H37.3003Z" fill="white"/>
        <path d="M14.9358 26.3172C15.6266 26.3172 16.3154 26.3838 16.9928 26.5132C18.4276 17.6268 26.1532 10.8203 35.4391 10.8203C42.7213 10.8203 49.2063 14.98 52.2794 21.3983C53.7332 20.8921 55.2688 20.6295 56.8215 20.6295C64.4196 20.6295 70.6001 26.81 70.6001 34.4081C70.6001 42.0062 64.4177 48.1886 56.8215 48.1886H53.326V43.5837H56.8215C61.8793 43.5837 65.9952 39.4678 65.9952 34.41C65.9952 29.3522 61.8793 25.2364 56.8215 25.2364C55.1946 25.2364 53.5962 25.6683 52.1995 26.4846L49.7219 27.9327L48.8447 25.2002C46.9685 19.3546 41.5815 15.4271 35.4372 15.4271C27.6735 15.4271 21.358 21.7427 21.358 29.5064L21.4093 33.5728L17.9556 31.6928C17.0366 31.1923 15.9919 30.9278 14.9358 30.9278C11.446 30.9278 8.60691 33.7669 8.60691 37.2567C8.60691 40.7465 11.446 43.5856 14.9358 43.5856H21.2761V48.1905H14.9358C8.90566 48.1905 4.00009 43.285 4.00009 37.2567C4.00009 31.2285 8.90566 26.321 14.9358 26.321V26.3172Z" fill="white"/>
      </svg>
    `}};te([R({type:Boolean})],Js.prototype,"darkMode",2);Js=te([re("mw-icon-cloud-security")],Js);let Qs=class extends X{constructor(){super(...arguments),this.darkMode=!1}render(){return ye`
      <svg xmlns="http://www.w3.org/2000/svg" width="73" height="21" viewBox="0 0 73 21" fill="none">
        <g  opacity="0.3" filter="url(#filter0_f_2477_55428)">
        <ellipse cx="36.5" cy="10.5" rx="33.5" ry="7.5" fill="url(#paint0_radial_2477_55428)"/>
        </g>
        <defs>
        <filter id="filter0_f_2477_55428" x="0" y="0" width="73" height="21" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feGaussianBlur stdDeviation="1.5" result="effect1_foregroundBlur_2477_55428"/>
        </filter>
        <radialGradient id="paint0_radial_2477_55428" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(36.5 10.5) rotate(90) scale(7.5 33.5)">
        <stop stop-color="#1C5791"/>
        <stop offset="1" stop-color="#23BCFF"/>
        </radialGradient>
        </defs>
      </svg>
    `}};te([R({type:Boolean})],Qs.prototype,"darkMode",2);Qs=te([re("mw-icon-radial-shadow")],Qs);let Ks=class extends X{constructor(){super(...arguments),this.darkMode=!1}render(){return ye`
      <svg xmlns="http://www.w3.org/2000/svg" width="110" height="6" viewBox="0 0 110 6" fill="none">
        <circle cx="11" cy="3" r="3" fill="white"/>
        <circle cx="41.7341" cy="3" r="3" fill="white"/>
        <circle cx="98.7463" cy="3" r="3" fill="white"/>
        <circle cx="85.8594" cy="3" r="3" fill="white"/>
        <circle cx="68.0205" cy="3" r="3" fill="white"/>
        <path d="M109 6C107.343 6 106 4.65685 106 3C106 1.34315 107.343 0 109 0V6Z" fill="white"/>
        <rect y="2" width="110" height="2" fill="white"/>
      </svg>
    `}};te([R({type:Boolean})],Ks.prototype,"darkMode",2);Ks=te([re("mw-icon-connection")],Ks);let Ys=class extends X{constructor(){super(...arguments),this.darkMode=!1}render(){return ye`
        <svg part="icon" width="18" height="18" viewBox="0 0 18 18" fill="black" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_4219_2166)">
            <path fill-rule="evenodd" fill="${this.darkMode?"white":"black"}" clip-rule="evenodd" d="M11.1392 9L17.5569 15.4177C18.1477 16.0084 18.1477 16.9662 17.5569 17.5569C16.9662 18.1477 16.0084 18.1477 15.4177 17.5569L9 11.1392L2.58229 17.5569C1.99155 18.1477 1.03378 18.1477 0.443051 17.5569C-0.147684 16.9662 -0.147684 16.0084 0.443051 15.4177L6.86076 9L0.443051 2.58229C-0.147684 1.99155 -0.147684 1.03378 0.443051 0.443051C1.03378 -0.147684 1.99155 -0.147684 2.58229 0.443051L9 6.86076L15.4177 0.443051C16.0084 -0.147684 16.9662 -0.147684 17.5569 0.443051C18.1477 1.03378 18.1477 1.99155 17.5569 2.58229L11.1392 9Z" fill="#CBE1EA"/>
            </g>
            <defs>
            <clipPath id="clip0_4219_2166">
            <rect width="18" height="18" fill="white"/>
            </clipPath>
            </defs>
        </svg>
    `}};te([R({type:Boolean})],Ys.prototype,"darkMode",2);Ys=te([re("mw-icon-sync-close")],Ys);let Xs=class extends X{constructor(){super(...arguments),this.darkMode=!1}render(){return ye`
      <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 48 48" fill="none">
        <path d="M17.8423 37.7546L5.36232 25.2746C4.61254 24.5248 4.61254 23.3091 5.36232 22.5593L8.07755 19.844C8.82732 19.0941 10.0431 19.0941 10.7929 19.844L19.2 28.251L37.2071 10.244C37.9569 9.4942 39.1727 9.4942 39.9224 10.244L42.6377 12.9593C43.3874 13.7091 43.3874 14.9247 42.6377 15.6746L20.5576 37.7547C19.8078 38.5044 18.5921 38.5044 17.8423 37.7546Z" fill="white"/>
      </svg>
    `}};te([R({type:Boolean})],Xs.prototype,"darkMode",2);Xs=te([re("mw-icon-checkmark")],Xs);let eu=class extends X{constructor(){super(...arguments),this.darkMode=!1}render(){return ye`
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path d="M6.42084 12.1057C6.42084 11.0669 7.27663 10.2121 8.31566 10.2111L29.7888 10.2109V10.2134C30.8278 10.2124 31.6836 11.0692 31.6836 12.1083V12.7374H22.8096C22.4793 12.7374 22.2102 13.0426 22.2102 13.4183V26.0005H6.42084C6.42084 26.0005 6.42063 16.7683 6.42084 12.1057Z" fill="#475569"/>
        <path d="M4.52619 29.7896C3.13114 29.7896 2 28.6585 2 27.2632L22.2102 27.2636V29.7405C22.2102 29.7484 22.2124 29.7559 22.2148 29.7639C22.2172 29.7718 22.2197 29.7801 22.2202 29.7896H4.52619Z" fill="#475569"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M24.0735 14.0001C23.743 14.0001 23.4741 14.2717 23.4741 14.6071V29.1828C23.4741 29.5183 23.7432 29.7898 24.0735 29.7898H30.4214V17.9478C30.4214 17.7386 30.4911 17.538 30.6157 17.3901C30.74 17.242 30.9088 17.1586 31.0849 17.1584H34.8424V14.6073C34.8424 14.2722 34.5733 14.0004 34.243 14.0004L24.0735 14.0001ZM29.1581 26.6316C29.5068 26.6316 29.7897 26.9145 29.7897 27.2632C29.7897 27.4308 29.7231 27.5914 29.6046 27.7099C29.4864 27.8284 29.3257 27.8948 29.1581 27.8948C28.9906 27.8948 28.8299 27.8284 28.7114 27.7099C28.593 27.5914 28.5265 27.4308 28.5265 27.2632C28.5265 26.9145 28.8092 26.6316 29.1581 26.6316Z" fill="#475569"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M31.6842 19.0529C31.6842 18.7046 31.9812 18.4219 32.3479 18.4213H37.3364C37.7031 18.422 38 18.7047 38 19.0529V29.1582C38 29.5065 37.7031 29.7892 37.3364 29.7899H32.3479C31.9813 29.7892 31.6842 29.5065 31.6842 29.1582V19.0529ZM35.4736 27.2632C35.4736 26.9145 35.1909 26.6316 34.8422 26.6316C34.4932 26.6316 34.2106 26.9145 34.2106 27.2632C34.2106 27.4308 34.277 27.5914 34.3955 27.7099C34.514 27.8284 34.6746 27.8948 34.8422 27.8948C35.0096 27.8948 35.1702 27.8284 35.2887 27.7099C35.4072 27.5914 35.4736 27.4308 35.4736 27.2632Z" fill="#475569"/>
      </svg>
    `}};te([R({type:Boolean})],eu.prototype,"darkMode",2);eu=te([re("mw-icon-local-storage")],eu);let tu=class extends X{constructor(){super(...arguments),this.darkMode=!1}render(){return ye`
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path d="M12.7774 17.5837C13.4933 18.7974 14.8129 19.612 16.3239 19.612C17.9305 19.612 19.3222 18.6904 19.999 17.3471C20.6768 18.6904 22.0674 19.612 23.6751 19.612C25.1861 19.612 26.5068 18.7974 27.2216 17.5837V27.8087C27.2216 27.8087 27.3502 28.8075 26.047 30.158C26.047 30.158 24.2264 32.0958 19.999 34.1509C15.7716 32.0958 13.952 30.158 13.952 30.158C12.6488 28.8075 12.7774 27.8087 12.7774 27.8087V17.5837ZM14.7286 27.8087V27.8601C14.7533 27.9558 14.8695 28.2993 15.356 28.8023L15.3694 28.8167C15.4578 28.9062 16.8968 30.339 19.999 31.9641C23.0888 30.3441 24.5299 28.9165 24.6276 28.8177L24.643 28.8023C25.1295 28.2983 25.2457 27.9548 25.2704 27.8591V21.3493C24.753 21.4902 24.2161 21.5632 23.6751 21.5632C22.5303 21.5632 21.4153 21.2423 20.4505 20.6355C20.2952 20.5377 20.145 20.4339 20 20.3228C19.855 20.4339 19.7048 20.5377 19.5495 20.6355C18.5837 21.2423 17.4687 21.5632 16.3249 21.5632C15.7839 21.5632 15.247 21.4912 14.7296 21.3493V27.8077L14.7286 27.8087Z" fill="#475569"/>
        <path d="M20.0001 22.8633C21.1151 22.8633 22.0192 23.7674 22.0192 24.8824C22.0192 25.6497 21.5913 26.3173 20.9597 26.6588V28.6449C20.9597 29.1757 20.5298 29.6056 19.9991 29.6056C19.4683 29.6056 19.0394 29.1757 19.0394 28.6449V26.6588C18.4089 26.3173 17.98 25.6497 17.98 24.8824C17.98 23.7674 18.8841 22.8633 19.9991 22.8633H20.0001Z" fill="#475569"/>
        <path d="M7.9112 14.2243C8.28457 14.2243 8.65691 14.2603 9.02309 14.3303C9.79863 9.52685 13.9746 5.84766 18.9941 5.84766C22.9304 5.84766 26.4358 8.09611 28.0969 11.5655C28.8827 11.2919 29.7128 11.1499 30.5521 11.1499C34.6592 11.1499 38 14.4907 38 18.5978C38 22.7049 34.6582 26.0467 30.5521 26.0467H28.6626V23.5576H30.5521C33.2861 23.5576 35.5109 21.3328 35.5109 18.5989C35.5109 15.8649 33.2861 13.6401 30.5521 13.6401C29.6727 13.6401 28.8087 13.8736 28.0537 14.3149L26.7145 15.0976L26.2403 13.6206C25.2262 10.4608 22.3143 8.33783 18.993 8.33783C14.7965 8.33783 11.3826 11.7517 11.3826 15.9482L11.4104 18.1463L9.54354 17.1301C9.04674 16.8595 8.48206 16.7166 7.9112 16.7166C6.0248 16.7166 4.49017 18.2512 4.49017 20.1376C4.49017 22.024 6.0248 23.5586 7.9112 23.5586H11.3384V26.0478H7.9112C4.65166 26.0478 2 23.3961 2 20.1376C2 16.8791 4.65166 14.2264 7.9112 14.2264V14.2243Z" fill="#475569"/>
      </svg>
    `}};te([R({type:Boolean})],tu.prototype,"darkMode",2);tu=te([re("mw-icon-cloud-storage")],tu);let nu=class extends X{constructor(){super(...arguments),this.darkMode=!1}render(){return ye`
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_2098_50)">
        <g clip-path="url(#clip1_2098_50)">
        <path d="M10.124 2.77712L9.59293 1.53693C9.93304 1.51497 10.2759 1.59543 10.575 1.76734L21.4622 8.05305C21.7606 8.22615 22.0017 8.48284 22.1528 8.78836L20.8182 8.95141L13.4592 9.83428C13.2415 9.88003 13.1029 9.80003 13.0127 9.54475L10.124 2.77712ZM22.2861 9.89421L20.9669 10.0534L13.6769 10.9316C13.3296 11.0073 12.9623 10.9493 12.6486 10.7697C12.3166 10.5733 12.0691 10.2621 11.9564 9.90013L9.09014 3.19621L8.56843 1.97412C8.44951 2.0801 8.34728 2.20288 8.26539 2.33899L4.41534 9.00747C3.96269 9.79721 4.25733 10.8183 5.07495 11.2936L15.9621 17.5793C16.7825 18.0498 17.8141 17.7943 18.2717 17.0075L22.1218 10.339C22.1987 10.2 22.2538 10.0502 22.2861 9.89421Z" fill="white"/>
        <path d="M1.92649 18.9311L4.47195 14.5222C4.73554 14.0657 5.2594 13.8746 5.64204 14.0956C6.02467 14.3165 6.12118 14.8657 5.85759 15.3222L3.31213 19.7311C3.04854 20.1876 2.52467 20.3786 2.14204 20.1577C1.7594 19.9368 1.6629 19.3876 1.92649 18.9311Z" fill="white"/>
        <path d="M6.33947 19.2876L7.98719 16.4336C8.22254 16.026 8.72352 15.8746 9.10615 16.0956C9.48878 16.3165 9.60818 16.826 9.37283 17.2336L7.72511 20.0876C7.48976 20.4952 6.98878 20.6466 6.60615 20.4257C6.22352 20.2048 6.10412 19.6952 6.33947 19.2876Z" fill="white"/>
        <path d="M10.7184 19.7032L11.5365 18.286C11.7248 17.9599 12.1876 17.8746 12.5703 18.0956C12.9529 18.3165 13.1105 18.7599 12.9222 19.086L12.104 20.5032C11.9157 20.8293 11.4529 20.9145 11.0703 20.6936C10.6876 20.4727 10.5301 20.0293 10.7184 19.7032Z" fill="white"/>
        </g>
        </g>
        <defs>
        <clipPath id="clip0_2098_50">
        <rect width="24" height="24" rx="3" fill="white"/>
        </clipPath>
        <clipPath id="clip1_2098_50">
        <rect width="24" height="24" fill="white"/>
        </clipPath>
        </defs>
      </svg>
    `}};te([R({type:Boolean})],nu.prototype,"darkMode",2);nu=te([re("mw-icon-newsletter-email")],nu);var V5=Object.defineProperty,q5=Object.getOwnPropertyDescriptor,kf=(e,t,n,r)=>{for(var o=r>1?void 0:r?q5(t,n):t,i=e.length-1,a;i>=0;i--)(a=e[i])&&(o=(r?a(t,n,o):a(o))||o);return r&&o&&V5(t,n,o),o};let ru=class extends X{constructor(){super(...arguments),this.iconSize="sm"}render(){return ye`
    <svg
    width="${$r[this.iconSize]}"
    height="${$r[this.iconSize]}"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    part="icon"
  >
    <g clip-path="url(#clip0_8249_2832)">
      <circle
        cx="12"
        cy="12.1429"
        r="10"
        fill="url(#paint0_radial_8249_2832)"
      />
      <path
        d="M15.6631 16.4682C14.0564 17.931 14.3327 21.1985 11.9898 21.1985C9.19799 21.1985 9.39327 18.4582 7.73396 16.4682C5.31393 13.5658 1.84742 13.6977 3.45693 9.12969C4.69719 5.60968 8.04924 3.08719 11.9898 3.08719C15.9304 3.08719 19.2824 5.60968 20.5227 9.12969C22.2192 13.9446 18.5635 13.8273 15.6631 16.4682Z"
        fill="url(#paint1_radial_8249_2832)"
      />
      <path
        d="M20.6415 7.71073C19.1212 7.71073 17.5992 7.68863 16.0799 7.76512C15.2699 7.80589 14.3159 7.84025 13.6277 8.37804C13.4289 8.53334 13.164 8.65125 12.9035 8.73895C12.3032 8.941 11.6634 8.941 11.0631 8.73895C10.8026 8.65125 10.5377 8.53334 10.3389 8.37804C9.65066 7.84025 8.69673 7.80589 7.88665 7.76512C6.36741 7.68869 4.84538 7.71073 3.32509 7.71073C3.01448 7.71132 2.87257 7.89435 2.87706 8.24329C2.87932 8.42236 2.90417 8.62091 2.98341 8.779C3.04449 8.90088 3.17537 8.93229 3.25672 9.02934C3.31269 9.09618 3.32862 9.18334 3.35099 9.2695C3.58168 10.1579 3.73509 11.0663 4.09001 11.909C4.40099 12.6475 4.85999 13.3301 5.48765 13.7429C6.10623 14.1496 6.84288 14.2618 7.54887 14.202C8.25835 14.1418 8.9884 14.011 9.62761 13.642C9.99931 13.4274 10.3368 13.1283 10.5796 12.7462C10.8821 12.2704 11.0227 11.699 11.1945 11.1549C11.2829 10.8752 11.3799 10.5972 11.5124 10.3395C11.5318 10.3017 11.5533 10.259 11.577 10.2146C11.7614 9.86932 12.205 9.86932 12.3893 10.2146C12.4131 10.2591 12.4346 10.3017 12.454 10.3396C12.5864 10.5972 12.6834 10.8753 12.7719 11.155C12.9437 11.6991 13.0843 12.2704 13.3867 12.7463C13.6296 13.1283 13.9671 13.4274 14.3387 13.642C14.978 14.011 15.708 14.1419 16.4175 14.202C17.1235 14.2619 17.8602 14.1497 18.4787 13.7429C19.1064 13.3302 19.5654 12.6476 19.8764 11.9091C20.2313 11.0663 20.3847 10.1579 20.6154 9.26956C20.6378 9.1834 20.6537 9.09624 20.7097 9.0294C20.791 8.93229 20.9218 8.90088 20.983 8.77906C21.0622 8.62097 21.0871 8.42236 21.0893 8.24335C21.0938 7.89441 20.952 7.71138 20.6413 7.71079L20.6415 7.71073Z"
        fill="#010207"
      />
      <path
        d="M19.302 9.85243C19.302 13.328 15.474 8.11203 12.0001 8.11203C8.5262 8.11203 4.69824 13.328 4.69824 9.85243C4.69824 6.37688 8.5262 3.55939 12.0001 3.55939C15.474 3.55939 19.302 6.37688 19.302 9.85243Z"
        fill="url(#paint2_linear_8249_2832)"
        fill-opacity="0.3"
      />
      <path
        opacity="0.5"
        d="M12.0339 18.4666C15.9769 18.4666 17.3163 15.6902 17.0365 15.4805C16.7567 15.2708 15.4658 17.2525 12.0339 17.2525C8.602 17.2524 7.36024 15.3627 7.03381 15.6429C6.70739 15.9231 8.0909 18.4666 12.0339 18.4666Z"
        fill="#FFF9A2"
      />
      <path
        d="M12.0339 18.1462C15.9769 18.1462 17.2884 15.4723 17.0086 15.2626C16.7288 15.0529 15.4658 17.067 12.0339 17.067C8.60202 17.0669 7.36875 15.151 7.04232 15.4312C6.7159 15.7114 8.0909 18.1462 12.0339 18.1462Z"
        fill="url(#paint3_linear_8249_2832)"
      />
      <path
        d="M12.0339 18.298C15.9769 18.298 17.3163 15.4878 17.0365 15.2782C16.7567 15.0685 15.4658 17.1851 12.0339 17.185C8.60201 17.185 7.36024 15.1604 7.03381 15.4406C6.70739 15.7208 8.0909 18.298 12.0339 18.298Z"
        fill="url(#paint4_linear_8249_2832)"
      />
      <path
        d="M20.494 7.99896C19.0036 7.99896 17.5116 7.97967 16.0223 8.04643C15.2281 8.08201 14.293 8.112 13.6183 8.58136C13.4234 8.7169 13.1637 8.81981 12.9084 8.89635C12.32 9.07269 11.6927 9.07269 11.1042 8.89635C10.8489 8.81981 10.5892 8.7169 10.3943 8.58136C9.71962 8.112 8.78448 8.08201 7.99036 8.04643C6.50105 7.97972 5.009 7.99896 3.51865 7.99896C3.21416 7.99947 3.07505 8.15922 3.07945 8.46376C3.08167 8.62004 3.10603 8.79333 3.1837 8.93131C3.24359 9.03768 3.37189 9.06509 3.45163 9.1498C3.5065 9.20813 3.52212 9.2842 3.54404 9.3594C3.77019 10.1348 3.92057 10.9276 4.26851 11.6631C4.57336 12.3076 5.02332 12.9034 5.63862 13.2636C6.24501 13.6186 6.96715 13.7165 7.65924 13.6643C8.35474 13.6118 9.07041 13.4976 9.69703 13.1755C10.0614 12.9883 10.3923 12.7272 10.6303 12.3938C10.9268 11.9784 11.0646 11.4798 11.2331 11.0049C11.3197 10.7608 11.4148 10.5182 11.5447 10.2933C11.5637 10.2603 11.5848 10.223 11.6081 10.1843C11.7888 9.8829 12.2236 9.8829 12.4044 10.1843C12.4276 10.2231 12.4487 10.2603 12.4678 10.2933C12.5976 10.5182 12.6927 10.7609 12.7793 11.005C12.9478 11.4799 13.0856 11.9785 13.3821 12.3938C13.6202 12.7272 13.951 12.9883 14.3153 13.1756C14.942 13.4977 15.6576 13.6118 16.3531 13.6643C17.0452 13.7166 17.7674 13.6187 18.3738 13.2636C18.9891 12.9034 19.4391 12.3077 19.7439 11.6631C20.0918 10.9276 20.2422 10.1348 20.4684 9.35945C20.4903 9.28426 20.5059 9.20818 20.5608 9.14985C20.6405 9.06509 20.7688 9.03768 20.8287 8.93136C20.9064 8.79339 20.9307 8.62004 20.933 8.46381C20.9374 8.15927 20.7983 7.99952 20.4938 7.99901L20.494 7.99896Z"
        fill="url(#paint5_linear_8249_2832)"
      />
      <path
        d="M19.2572 9.51363C18.7504 8.9577 17.8946 8.84134 16.4362 8.88789C15.8545 8.90933 13.046 9.14387 13.1421 10.2428C13.2851 11.8791 15.1744 13.1052 16.8137 12.9914C18.8332 12.9914 20.0769 10.3333 19.2572 9.51363Z"
        fill="white"
        fill-opacity="0.4"
      />
      <path
        d="M4.76131 9.51363C5.26811 8.9577 6.12399 8.84134 7.58232 8.88789C8.1641 8.90933 10.9726 9.14387 10.8765 10.2428C10.7334 11.8791 8.84414 13.1052 7.20481 12.9914C5.18537 12.9914 3.94165 10.3333 4.76131 9.51363Z"
        fill="white"
        fill-opacity="0.4"
      />
      <path
        d="M19.2575 9.20335C18.7507 8.64743 17.8948 8.53107 16.4365 8.57761C15.8547 8.59906 13.0462 8.8336 13.1423 9.93252C13.2854 11.5688 15.1747 12.7949 16.814 12.6811C18.8334 12.6811 20.0771 10.023 19.2575 9.20335Z"
        fill="black"
        fill-opacity="0.4"
      />
      <path
        d="M4.76156 9.20335C5.26835 8.64743 6.12423 8.53107 7.58256 8.57761C8.16434 8.59906 10.9728 8.8336 10.8767 9.93252C10.7337 11.5688 8.84439 12.7949 7.20505 12.6811C5.18562 12.6811 3.9419 10.023 4.76156 9.20335Z"
        fill="black"
        fill-opacity="0.4"
      />
      <path
        d="M19.2572 9.39473C18.7504 8.83881 17.8946 8.72245 16.4362 8.76899C15.8545 8.79044 13.046 9.02497 13.1421 10.1239C13.2851 11.7602 15.1744 12.9863 16.8137 12.8725C18.8332 12.8725 20.0769 10.2144 19.2572 9.39473Z"
        fill="url(#paint6_linear_8249_2832)"
      />
      <path
        d="M4.76131 9.39473C5.26811 8.83881 6.12399 8.72245 7.58232 8.76899C8.1641 8.79044 10.9726 9.02497 10.8765 10.1239C10.7334 11.7602 8.84414 12.9863 7.20481 12.8725C5.18537 12.8725 3.94165 10.2144 4.76131 9.39473Z"
        fill="url(#paint7_linear_8249_2832)"
      />
    </g>
    <defs>
      <radialGradient
        id="paint0_radial_8249_2832"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(12.0169 12.1597) rotate(90.0968) scale(9.98315)"
      >
        <stop stop-color="#FFD733" />
        <stop offset="0.886698" stop-color="#FFC635" />
        <stop offset="1" stop-color="#F98803" />
      </radialGradient>
      <radialGradient
        id="paint1_radial_8249_2832"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(11.6289 5.70102) rotate(90.2881) scale(11.0625 11.0504)"
      >
        <stop stop-color="#FFFAA4" />
        <stop offset="0.378281" stop-color="#FFF885" />
        <stop offset="0.861624" stop-color="#FFD436" stop-opacity="0" />
      </radialGradient>
      <linearGradient
        id="paint2_linear_8249_2832"
        x1="12.0001"
        y1="3.55939"
        x2="12.0001"
        y2="11.0467"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#FFF8D2" />
        <stop offset="1" stop-color="#FEF4BC" stop-opacity="0" />
      </linearGradient>
      <linearGradient
        id="paint3_linear_8249_2832"
        x1="12.0346"
        y1="15.0265"
        x2="12.0308"
        y2="16.9826"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#4A1904" />
        <stop offset="1" stop-color="#3C1504" />
      </linearGradient>
      <linearGradient
        id="paint4_linear_8249_2832"
        x1="12.0346"
        y1="15.2626"
        x2="12.0187"
        y2="17.809"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#4A1904" />
        <stop offset="1" stop-color="#9F5A09" />
      </linearGradient>
      <linearGradient
        id="paint5_linear_8249_2832"
        x1="12.0064"
        y1="8.3894"
        x2="12.0064"
        y2="13.5391"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#21211F" />
        <stop offset="0.31" stop-color="#252523" />
        <stop offset="0.64" stop-color="#31312F" />
        <stop offset="0.96" stop-color="#464644" />
        <stop offset="1" stop-color="#494947" />
      </linearGradient>
      <linearGradient
        id="paint6_linear_8249_2832"
        x1="16.3261"
        y1="8.7597"
        x2="16.3261"
        y2="10.82"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#838383" />
        <stop offset="1" stop-color="#2F2F2D" />
      </linearGradient>
      <linearGradient
        id="paint7_linear_8249_2832"
        x1="7.69243"
        y1="8.7597"
        x2="7.69243"
        y2="10.82"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#838383" />
        <stop offset="1" stop-color="#2F2F2D" />
      </linearGradient>
      <clipPath id="clip0_8249_2832">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>`}};kf([R({type:String})],ru.prototype,"iconSize",2);ru=kf([re("mw-icon-games-emoji-chill")],ru);var Z5=Object.defineProperty,G5=Object.getOwnPropertyDescriptor,vf=(e,t,n,r)=>{for(var o=r>1?void 0:r?G5(t,n):t,i=e.length-1,a;i>=0;i--)(a=e[i])&&(o=(r?a(t,n,o):a(o))||o);return r&&o&&Z5(t,n,o),o};let ou=class extends X{constructor(){super(...arguments),this.iconSize="sm"}render(){return ye`
    <svg
    width="${$r[this.iconSize]}"
    height="${$r[this.iconSize]}"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    part="icon"
  >
    <g clip-path="url(#clip0_8249_2997)">
      <circle
        cx="12"
        cy="12.1429"
        r="10"
        fill="url(#paint0_radial_8249_2997)"
      />
      <path
        d="M15.6631 16.4682C14.0564 17.931 14.3327 21.1985 11.9898 21.1985C9.19799 21.1985 9.39327 18.4582 7.73396 16.4682C5.31393 13.5658 1.84742 13.6977 3.45693 9.12969C4.69719 5.60968 8.04924 3.08719 11.9898 3.08719C15.9304 3.08719 19.2824 5.60968 20.5227 9.12969C22.2192 13.9446 18.5635 13.8273 15.6631 16.4682Z"
        fill="url(#paint1_radial_8249_2997)"
      />
      <path
        d="M19.302 9.85243C19.302 13.328 15.474 8.11203 12.0001 8.11203C8.5262 8.11203 4.69824 13.328 4.69824 9.85243C4.69824 6.37688 8.5262 3.55939 12.0001 3.55939C15.474 3.55939 19.302 6.37688 19.302 9.85243Z"
        fill="url(#paint2_linear_8249_2997)"
        fill-opacity="0.3"
      />
      <path
        d="M10.2988 10.009C10.2988 11.0148 9.74716 11.6201 9.06674 11.6201C8.38631 11.6201 7.83472 11.0148 7.83472 10.009C7.83472 9.00314 8.38631 7.9776 9.06674 7.9776C9.74716 7.9776 10.2988 9.00314 10.2988 10.009Z"
        fill="#FFF9A8"
      />
      <path
        d="M16.1672 10.0764C16.1672 11.0823 15.6156 11.6875 14.9351 11.6875C14.2547 11.6875 13.7031 11.0823 13.7031 10.0764C13.7031 9.07059 14.2547 8.04504 14.9351 8.04504C15.6156 8.04504 16.1672 9.07059 16.1672 10.0764Z"
        fill="#FFF9A8"
      />
      <path
        d="M10.2292 9.99733C10.2292 10.9473 9.7083 11.5189 9.06567 11.5189C8.42305 11.5189 7.9021 10.9473 7.9021 9.99733C7.9021 9.04737 8.42305 8.0788 9.06567 8.0788C9.7083 8.0788 10.2292 9.04737 10.2292 9.99733Z"
        fill="#4A1904"
      />
      <path
        d="M16.0977 9.99733C16.0977 10.9473 15.5767 11.5189 14.9341 11.5189C14.2915 11.5189 13.7705 10.9473 13.7705 9.99733C13.7705 9.04737 14.2915 8.0788 14.9341 8.0788C15.5767 8.0788 16.0977 9.04737 16.0977 9.99733Z"
        fill="#4A1904"
      />
      <path
        d="M10.1957 9.9221C10.1957 10.8348 9.68988 11.384 9.06588 11.384C8.44189 11.384 7.93604 10.8348 7.93604 9.9221C7.93604 9.00938 8.44189 8.0788 9.06588 8.0788C9.68988 8.0788 10.1957 9.00938 10.1957 9.9221Z"
        fill="url(#paint3_linear_8249_2997)"
      />
      <path
        d="M16.0641 9.9221C16.0641 10.8348 15.5583 11.384 14.9343 11.384C14.3103 11.384 13.8044 10.8348 13.8044 9.9221C13.8044 9.00938 14.3103 8.0788 14.9343 8.0788C15.5583 8.0788 16.0641 9.00938 16.0641 9.9221Z"
        fill="url(#paint4_linear_8249_2997)"
      />
      <path
        opacity="0.5"
        d="M12.0338 17.3199C15.5204 17.3199 17.3246 14.4952 17.0437 14.2847C16.7629 14.0743 15.4783 16.3327 12.0338 16.3327C8.58921 16.3327 7.35139 14.1727 7.02376 14.454C6.69613 14.7352 8.54708 17.3199 12.0338 17.3199Z"
        fill="#FFF9A2"
      />
      <path
        d="M12.0339 17.1451C13.5403 17.1451 17.3247 14.4951 17.0439 14.2847C16.7631 14.0742 15.4785 16.1888 12.0339 16.1887C8.58937 16.1887 7.36848 14.1558 7.04085 14.437C6.71322 14.7182 10.5275 17.1451 12.0339 17.1451Z"
        fill="url(#paint5_linear_8249_2997)"
      />
      <path
        d="M12.0338 17.1507C15.2836 17.1507 17.3358 14.4769 17.0549 14.2665C16.7741 14.056 15.4784 16.3552 12.0338 16.3552C8.58929 16.3551 7.34293 14.1483 7.0153 14.4295C6.68768 14.7107 8.78412 17.1507 12.0338 17.1507Z"
        fill="url(#paint6_linear_8249_2997)"
      />
    </g>
    <defs>
      <radialGradient
        id="paint0_radial_8249_2997"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(12.0169 12.1597) rotate(90.0968) scale(9.98315)"
      >
        <stop stop-color="#FFD733" />
        <stop offset="0.886698" stop-color="#FFC635" />
        <stop offset="1" stop-color="#F98803" />
      </radialGradient>
      <radialGradient
        id="paint1_radial_8249_2997"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(11.6289 5.70102) rotate(90.2881) scale(11.0625 11.0504)"
      >
        <stop stop-color="#FFFAA4" />
        <stop offset="0.378281" stop-color="#FFF885" />
        <stop offset="0.861624" stop-color="#FFD436" stop-opacity="0" />
      </radialGradient>
      <linearGradient
        id="paint2_linear_8249_2997"
        x1="12.0001"
        y1="3.55939"
        x2="12.0001"
        y2="11.0467"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#FFF8D2" />
        <stop offset="1" stop-color="#FEF4BC" stop-opacity="0" />
      </linearGradient>
      <linearGradient
        id="paint3_linear_8249_2997"
        x1="9.06298"
        y1="2.96918"
        x2="8.8256"
        y2="11.8662"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#290C00" />
        <stop offset="0.400468" stop-color="#5A2507" />
        <stop offset="1" stop-color="#B86D16" />
      </linearGradient>
      <linearGradient
        id="paint4_linear_8249_2997"
        x1="14.9314"
        y1="2.96918"
        x2="14.694"
        y2="11.8662"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#290C00" />
        <stop offset="0.400468" stop-color="#5A2507" />
        <stop offset="1" stop-color="#B86D16" />
      </linearGradient>
      <linearGradient
        id="paint5_linear_8249_2997"
        x1="12.0346"
        y1="14.0139"
        x2="12.0308"
        y2="15.9773"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#4A1904" />
        <stop offset="1" stop-color="#3C1504" />
      </linearGradient>
      <linearGradient
        id="paint6_linear_8249_2997"
        x1="12.0345"
        y1="14.2507"
        x2="12.0186"
        y2="16.8066"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#4A1904" />
        <stop offset="1" stop-color="#9F5A09" />
      </linearGradient>
      <clipPath id="clip0_8249_2997">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>`}};vf([R({type:String})],ou.prototype,"iconSize",2);ou=vf([re("mw-icon-games-emoji-classic")],ou);var W5=Object.defineProperty,J5=Object.getOwnPropertyDescriptor,_f=(e,t,n,r)=>{for(var o=r>1?void 0:r?J5(t,n):t,i=e.length-1,a;i>=0;i--)(a=e[i])&&(o=(r?a(t,n,o):a(o))||o);return r&&o&&W5(t,n,o),o};let iu=class extends X{constructor(){super(...arguments),this.iconSize="sm"}render(){return ye`
    <svg
    width="${$r[this.iconSize]}"
    height="${$r[this.iconSize]}"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    part="icon"
  >
    <g clip-path="url(#clip0_8249_3018)">
      <circle
        cx="12"
        cy="12.1429"
        r="10"
        fill="url(#paint0_radial_8249_3018)"
      />
      <path
        d="M15.6631 16.4682C14.0564 17.931 14.3327 21.1985 11.9898 21.1985C9.19799 21.1985 9.39327 18.4582 7.73396 16.4682C5.31393 13.5658 1.84742 13.6977 3.45693 9.12969C4.69719 5.60968 8.04924 3.08719 11.9898 3.08719C15.9304 3.08719 19.2824 5.60968 20.5227 9.12969C22.2192 13.9446 18.5635 13.8273 15.6631 16.4682Z"
        fill="url(#paint1_radial_8249_3018)"
      />
      <path
        d="M19.3017 9.85243C19.3017 13.328 15.4738 8.11203 11.9999 8.11203C8.52595 8.11203 4.698 13.328 4.698 9.85243C4.698 6.37688 8.52595 3.55939 11.9999 3.55939C15.4738 3.55939 19.3017 6.37688 19.3017 9.85243Z"
        fill="url(#paint2_linear_8249_3018)"
        fill-opacity="0.3"
      />
      <g opacity="0.5">
        <path
          d="M16.7384 9.42784C15.9289 8.787 15.1027 7.8933 15.3894 7.65722C15.676 7.42113 16.0302 8.06196 17.5142 8.77019C18.9981 9.47843 19.6221 9.30983 19.5884 9.68082C19.5378 10.0855 17.5479 10.0687 16.7384 9.42784Z"
          fill="#FCDD9C"
        />
        <path
          d="M7.24572 9.42784C8.05518 8.787 8.88144 7.8933 8.59476 7.65722C8.30808 7.42113 7.95396 8.06196 6.46998 8.77019C4.986 9.47843 4.36204 9.30983 4.39578 9.68082C4.44637 10.0855 6.43625 10.0687 7.24572 9.42784Z"
          fill="#FCDD9C"
        />
        <ellipse
          cx="9.13316"
          cy="13.0029"
          rx="1.02867"
          ry="1.34907"
          fill="#FCDD9C"
        />
        <ellipse
          cx="14.8331"
          cy="13.0029"
          rx="1.02867"
          ry="1.34907"
          fill="#FCDD9C"
        />
        <path
          d="M14.0845 16.9152H9.88842C9.23852 16.9152 8.71167 17.4419 8.71167 18.0915C8.71167 18.7411 9.23852 19.2677 9.88842 19.2677H14.0845C14.7344 19.2677 15.2613 18.7411 15.2613 18.0915C15.2613 17.4419 14.7344 16.9152 14.0845 16.9152Z"
          fill="#FCDD9C"
        />
      </g>
      <path
        d="M16.7384 9.29292C15.9289 8.65208 15.1027 7.75839 15.3894 7.5223C15.676 7.28621 16.0302 7.92705 17.5142 8.63528C18.9981 9.34351 19.6221 9.17491 19.5884 9.5459C19.5378 9.95062 17.5479 9.93376 16.7384 9.29292Z"
        fill="#6E2E12"
      />
      <path
        d="M7.24572 9.29292C8.05518 8.65208 8.88144 7.75839 8.59476 7.5223C8.30808 7.28621 7.95396 7.92705 6.46998 8.63528C4.986 9.34351 4.36204 9.17491 4.39578 9.5459C4.44637 9.95062 6.43625 9.93376 7.24572 9.29292Z"
        fill="#6E2E12"
      />
      <ellipse
        cx="9.13316"
        cy="12.868"
        rx="1.02867"
        ry="1.34907"
        fill="#6E2E12"
      />
      <ellipse
        cx="14.8331"
        cy="12.868"
        rx="1.02867"
        ry="1.34907"
        fill="#6E2E12"
      />
      <path
        d="M14.0845 16.7803H9.88842C9.23852 16.7803 8.71167 17.3069 8.71167 17.9566C8.71167 18.6062 9.23852 19.1328 9.88842 19.1328H14.0845C14.7344 19.1328 15.2613 18.6062 15.2613 17.9566C15.2613 17.3069 14.7344 16.7803 14.0845 16.7803Z"
        fill="url(#paint3_linear_8249_3018)"
      />
      <g clip-path="url(#clip1_8249_3018)">
        <mask
          id="mask0_8249_3018"
          style="mask-type: alpha"
          maskUnits="userSpaceOnUse"
          x="9"
          y="17"
          width="6"
          height="6"
        >
          <path
            d="M9.25567 17.869H14.7194V20.2467C14.7194 20.2467 14.9555 22.6245 11.9875 22.6245C9.01958 22.6245 9.25567 20.2467 9.25567 20.2467V17.869Z"
            fill="#A11E32"
          />
        </mask>
        <g mask="url(#mask0_8249_3018)">
          <path
            d="M9.25567 17.869H14.7194V20.2467C14.7194 20.2467 14.9555 22.6245 11.9875 22.6245C9.01958 22.6245 9.25567 20.2467 9.25567 20.2467V17.869Z"
            fill="url(#paint4_linear_8249_3018)"
          />
          <path
            d="M9.65979 20.1514C9.65979 19.0957 10.5155 18.24 11.5712 18.24H12.3952C13.4508 18.24 14.3065 19.0957 14.3065 20.1514C14.3065 20.2149 14.31 20.2778 14.3103 20.3413C14.3123 20.7389 14.1761 22.2535 11.9832 22.2535C9.79024 22.2535 9.65402 20.7389 9.65603 20.3413C9.65635 20.2778 9.65979 20.2149 9.65979 20.1514Z"
            fill="url(#paint5_linear_8249_3018)"
          />
          <path
            d="M9.65979 20.1514C9.65979 19.0957 10.5155 18.24 11.5712 18.24H12.3952C13.4508 18.24 14.3065 19.0957 14.3065 20.1514C14.3065 20.2149 14.31 20.2778 14.3103 20.3413C14.3123 20.7389 14.1761 22.2535 11.9832 22.2535C9.79024 22.2535 9.65402 20.7389 9.65603 20.3413C9.65635 20.2778 9.65979 20.2149 9.65979 20.1514Z"
            fill="url(#paint6_radial_8249_3018)"
          />
          <path
            d="M11.7471 17.8692H12.2431V20.0134C12.2431 20.1329 12.146 20.2299 12.0265 20.2299H11.9637C11.8441 20.2299 11.7471 20.1329 11.7471 20.0134V17.8692Z"
            fill="url(#paint7_linear_8249_3018)"
          />
        </g>
      </g>
      <mask
        id="mask1_8249_3018"
        style="mask-type: alpha"
        maskUnits="userSpaceOnUse"
        x="2"
        y="12"
        width="6"
        height="9"
      >
        <path
          d="M7.19399 17.9947C7.19399 19.2427 6.17474 20.2544 4.91743 20.2544C3.66012 20.2544 2.64087 19.2427 2.64087 17.9947C2.64087 16.7467 4.3778 12.5984 4.91743 12.6321C5.45706 12.6658 7.19399 16.7467 7.19399 17.9947Z"
          fill="#269FD9"
        />
      </mask>
      <g mask="url(#mask1_8249_3018)">
        <path
          d="M7.19399 17.9947C7.19399 19.2427 6.17474 20.2544 4.91743 20.2544C3.66012 20.2544 2.64087 19.2427 2.64087 17.9947C2.64087 16.7467 4.3778 12.5984 4.91743 12.6321C5.45706 12.6658 7.19399 16.7467 7.19399 17.9947Z"
          fill="#269FD9"
        />
        <path
          d="M7.19399 17.9947C7.19399 19.2427 6.17474 20.2544 4.91743 20.2544C3.66012 20.2544 2.64087 19.2427 2.64087 17.9947C2.64087 16.7467 4.3778 12.5984 4.91743 12.6321C5.45706 12.6658 7.19399 16.7467 7.19399 17.9947Z"
          fill="url(#paint8_radial_8249_3018)"
        />
        <g opacity="0.5" filter="url(#filter0_f_8249_3018)">
          <ellipse
            cx="4.83309"
            cy="18.8714"
            rx="0.539629"
            ry="0.539629"
            fill="#1871DA"
          />
        </g>
        <path
          d="M5.94622 16.6307C5.94622 17.6633 5.49322 18.5004 4.93441 18.5004C4.37561 18.5004 3.92261 17.6633 3.92261 16.6307C3.92261 15.5981 4.69458 12.1657 4.93441 12.1936C5.17425 12.2215 5.94622 15.5981 5.94622 16.6307Z"
          fill="url(#paint9_radial_8249_3018)"
        />
        <path
          d="M5.94622 16.6307C5.94622 17.6633 5.49322 18.5004 4.93441 18.5004C4.37561 18.5004 3.92261 17.6633 3.92261 16.6307C3.92261 15.5981 4.69458 12.1657 4.93441 12.1936C5.17425 12.2215 5.94622 15.5981 5.94622 16.6307Z"
          fill="url(#paint10_radial_8249_3018)"
          fill-opacity="0.6"
        />
        <path
          d="M5.94622 16.6307C5.94622 17.6633 5.49322 18.5004 4.93441 18.5004C4.37561 18.5004 3.92261 17.6633 3.92261 16.6307C3.92261 15.5981 4.69458 12.1657 4.93441 12.1936C5.17425 12.2215 5.94622 15.5981 5.94622 16.6307Z"
          fill="url(#paint11_linear_8249_3018)"
          fill-opacity="0.9"
        />
        <path
          d="M5.94622 16.6307C5.94622 17.6633 5.49322 18.5004 4.93441 18.5004C4.37561 18.5004 3.92261 17.6633 3.92261 16.6307C3.92261 15.5981 4.69458 12.1657 4.93441 12.1936C5.17425 12.2215 5.94622 15.5981 5.94622 16.6307Z"
          fill="url(#paint12_radial_8249_3018)"
          fill-opacity="0.5"
        />
        <path
          opacity="0.5"
          d="M4.59698 11.7023C4.59698 10.6697 4.74043 9.83258 4.91739 9.83258C5.09434 9.83258 5.23779 10.6697 5.23779 11.7023C5.23779 12.7349 4.99334 16.1672 4.91739 16.1393C4.84144 16.1114 4.59698 12.7349 4.59698 11.7023Z"
          fill="#E8F7FF"
          fill-opacity="0.5"
        />
      </g>
    </g>
    <defs>
      <filter
        id="filter0_f_8249_3018"
        x="-18.7065"
        y="-4.66827"
        width="47.0793"
        height="47.0793"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feGaussianBlur
          stdDeviation="11.5"
          result="effect1_foregroundBlur_8249_3018"
        />
      </filter>
      <radialGradient
        id="paint0_radial_8249_3018"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(12 12.1429) rotate(90) scale(10)"
      >
        <stop stop-color="#FBFE5F" />
        <stop offset="0.598281" stop-color="#FB7C1F" />
        <stop offset="0.938281" stop-color="#FB720F" />
        <stop offset="1" stop-color="#FB4E14" />
      </radialGradient>
      <radialGradient
        id="paint1_radial_8249_3018"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(11.5733 6.64285) rotate(90) scale(10.1206 10.1094)"
      >
        <stop stop-color="#FFE99D" />
        <stop offset="0.6" stop-color="#FEDB5E" stop-opacity="0.5" />
        <stop offset="0.861624" stop-color="#D3552A" stop-opacity="0" />
      </radialGradient>
      <linearGradient
        id="paint2_linear_8249_3018"
        x1="11.9999"
        y1="3.55939"
        x2="11.9999"
        y2="11.0467"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#FFF8D2" />
        <stop offset="1" stop-color="#FEF4BC" stop-opacity="0" />
      </linearGradient>
      <linearGradient
        id="paint3_linear_8249_3018"
        x1="11.9865"
        y1="16.7803"
        x2="11.9832"
        y2="18.2474"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#4A1904" />
        <stop offset="1" stop-color="#6E2E12" />
      </linearGradient>
      <linearGradient
        id="paint4_linear_8249_3018"
        x1="11.9875"
        y1="17.869"
        x2="11.9875"
        y2="22.6245"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#A11E32" />
        <stop offset="0.278281" stop-color="#DB1360" />
      </linearGradient>
      <linearGradient
        id="paint5_linear_8249_3018"
        x1="11.9832"
        y1="18.24"
        x2="11.9832"
        y2="22.2535"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.28451" stop-color="#EC63A1" />
        <stop offset="0.543281" stop-color="#F8A4CA" />
        <stop offset="1" stop-color="#EE88B6" />
      </linearGradient>
      <radialGradient
        id="paint6_radial_8249_3018"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(11.9832 19.7145) rotate(0.812653) scale(2.37798 2.82629)"
      >
        <stop stop-color="#FF8ABE" />
        <stop offset="0.897784" stop-color="#E75494" />
        <stop offset="1" stop-color="#DC1461" />
      </radialGradient>
      <linearGradient
        id="paint7_linear_8249_3018"
        x1="11.9891"
        y1="17.8717"
        x2="12.0023"
        y2="20.2369"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#A72638" />
        <stop offset="1" stop-color="#EE7FB0" />
      </linearGradient>
      <radialGradient
        id="paint8_radial_8249_3018"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(4.91743 16.4431) rotate(89.7762) scale(4.31696 2.57865)"
      >
        <stop offset="0.751456" stop-color="#269FD9" stop-opacity="0" />
        <stop offset="1" stop-color="#60C6F5" />
      </radialGradient>
      <radialGradient
        id="paint9_radial_8249_3018"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(4.93441 18.3486) rotate(-90) scale(4.50253 1.44466)"
      >
        <stop stop-color="#F4FBFF" />
        <stop offset="0.418281" stop-color="#C3E7F8" />
        <stop offset="0.768281" stop-color="#269FD9" />
        <stop offset="1" stop-color="#269FD9" />
      </radialGradient>
      <radialGradient
        id="paint10_radial_8249_3018"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(4.93441 16.9658) rotate(-88.0363) scale(2.95283 2.39024)"
      >
        <stop stop-color="#269FD9" stop-opacity="0.5" />
        <stop offset="0.639877" stop-color="white" stop-opacity="0.5" />
        <stop offset="1" stop-color="white" stop-opacity="0" />
      </radialGradient>
      <linearGradient
        id="paint11_linear_8249_3018"
        x1="4.7995"
        y1="11.8225"
        x2="4.85009"
        y2="16.9489"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="white" />
        <stop offset="1" stop-color="white" stop-opacity="0" />
      </linearGradient>
      <radialGradient
        id="paint12_radial_8249_3018"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(4.93441 15.5493) rotate(90) scale(2.9511 1.41786)"
      >
        <stop stop-color="#269FD9" stop-opacity="0" />
        <stop offset="1" stop-color="#269FD9" />
      </radialGradient>
      <clipPath id="clip0_8249_3018">
        <rect width="24" height="24" fill="white" />
      </clipPath>
      <clipPath id="clip1_8249_3018">
        <rect
          width="5.47264"
          height="4.75548"
          fill="white"
          transform="translate(9.25122 17.869)"
        />
      </clipPath>
    </defs>
  </svg>`}};_f([R({type:String})],iu.prototype,"iconSize",2);iu=_f([re("mw-icon-games-emoji-extreme")],iu);var Q5=Object.getOwnPropertyDescriptor,K5=(e,t,n,r)=>{for(var o=r>1?void 0:r?Q5(t,n):t,i=e.length-1,a;i>=0;i--)(a=e[i])&&(o=a(o)||o);return o};let au=class extends X{render(){return F`
      <img
        part="icon"
        class="w-full block"
        alt=""
        src="data:image/png;base64,UklGRvgQAABXRUJQVlA4WAoAAAAQAAAAEAIARwAAQUxQSCMKAAABsAP/nxr9y/4dZ7GaRUrbgYrqFqf7pUdusfqCO9kWvSvxBIfqUuIJ7lxmqDzBodp0DNXOXPYrsXue+2ERAcFtG0mSMjN7L3JXVbrnA2KQ533ox32YSX715Zc/TFyf8vTvhXnlH6+9OnnGP8Ls8rYrk6f+JSxAXnVd8pWwBP755GuSF4VlyOeuST6yEPoHr0h+uRDCc69I+qWQXJGEpfCa//vP1Ys5htBmdxOwIZLTzYfaZsdqkP1OX07kNo88tZVTe3hfVae2qvKdmgPlQVQPNxtqf8IV9rkRug3u4n2WY47KJlQ2a3EPt7ma/iOi8k2GghFtCufKPu7EPlw8tI995VwTQsjlVJ/Fyva1c2UXO3vyTxwS1hsMC3uvAnp0sBlfuifmm8NkTjLgMwscHNect9OSQLobCwm+2yeYLkVMfdl+2uLZMJSOnIAd6L8aUb6JNdlPa3AHcDcWJ95NG8UFJCWapztjxwMrDt2rqz7WpZq2Jfagbd9U5Nw6ay4fNXAXtn64yVbklKdMPu2naV0XRtxUpEDFXlKoy0cIePM0U7wY6GFKnQ6m521hQqoC8pEUdykJCvHS2F4hPdfDKWLALYFiRBhkf+loYF5B/3WTnVI1uxSPtwNMADSsyLGQm0EmYEMHe6P5G8OzGZKr+0ZB1eQEJSSHr6f62PMzOph1stmAmLBCDBXQa6JAvuagSOT2CIPZHrcS9eQuO0tVVVFtm1i7NlNA3V0VD9i2NAZOZX21lVwLq50SnpshCd5RjqxSYq9IBc0B0QhxYnTtQIHCG/TYQ6+qzeYOoYhQGVPOvrJMhSzLvafckPPqCs5vt9KGek34cW8UqHFk5uPJYg+SJwHgdgqhK0QJrwesRxQ5SeKzKrajY4y8tx63xfNbRgc1s8Ken3L0YWhEyaWIhZQTDejcxEDUUYpEqjHFDabypKbc24BAthq/EoBLuyo05nVe7dcHchzZGfSAaGPKHiXxZCgJn1aM2VSBJUIlI6CqpYksj50y9lqGP4Kn3uBCEXglR2aSFmVDoeqGImnY1JE0kF5BulijQBaCjOvQYEM5S01+nTyb7aKgtisine5ygMEvIx3I/a/tIXbwbY+2ouMQiYCIRcjRKq1hmqJWNdAzozYVTSCiS7cC1sLGNEIT2puOVFD3lCGy4FDCEJwwD0f0BrUbd6hqsapQRFSkx07fMEtXxGE6Sjz3FL0LsGhGqLNeDbbMdBbP1BNZAYYIkkPTwiE28bapSIpQHjh0GHVJ4MYgMIi8ZOQQEi2aTtLWlSLGYpfqiemsjDO2Y0UV5Dk0RZbrop4OKjiMy84xSCEqxJxGwg5IuNcQBw0J01ZicXB4sbgJGquBuQlG/cN6xEaOIc5dGkWjaVJaoV7GdAJQhQhExYKa96P1JD05fpDdZaImgB2BBCvEkhy7SjK4FbWv6/D+DpJcYoHgs20RvBICC3ExsgePoWYiGBrTQO+esP1RTIpUDDnPpfZRBjXEMAa29jKRwsQi1NX8UDl6J99BqMv8pPklasLJIEZwMeew9x3j5FQPKwfLw4um5JybAXCCg3xPUYVqSAyqQyaxoMl1Ize0aHhrRqnJPjUhNUEBcCQ14YrTDqzzRrHIosrGficHtIM7OJQLRjkqnbBCsI6xxSUbtaSvWwwgAodMyqwcwzqxE6L3fnag3nmU59usxQYQoiCO/nv+ZDUHHSAJgchqDb4317cnh7wvhKEwZ4sbk0A2kWQZiiRCXoGbTddDwULVPUWdEt9pzxrNjRzhJ1YdtFsCYlXQxD+wsSd7CZjlz+blGAAHaBZni4s4gS2OqER4Y+GqcAiacF2B0ONHzTu5jwqsg0U+FwbS1aTEiwoplWKQoIejAp/IqsDe+SZjMAjJPDAGHJJCtoxR3AFC+93GtwqRkq2JhD83PECwp4m/0zuJpJWYGXbOyIb2nmc8WtQq2aCPin+tVSLYMc6XcyI94yIuY4vL2SFwk4HxyFeERHAUho6GqoA3h2D5xYKMIEk50alDWCV7RD87rESjx6luRHtuxJxUHLMYW1xObnJ3ZrqjHW9XdFGtxvZZlJBoanWfGwUp2N4w4LdG982ampSOvcHS8TxMrXV2NvAdVENXlUfMYPhgTNXYjqJdERZRkQ8x8e3EMhCQ0wh/qLTGKShqUm2L4Fl/Q/YvT+ORveYcsCfiQmSWvcVNMoWlbTrC8fpAfEOvB4GYm7AhEssthXrM0dMhewtpsW/UJLTaLvBDO0U70NgiMyMn2mwTavYW9xTMyNYcvGR9w6wIC6nG0cJmvhRS7sZSy4EWVaRhw9gnYGubneBtHAXFAdAhPpoBF2j/uBjF2OLKyJ6OW4l3IptSVlYkK4ATQjMKpH0tBdkDWomivdeDxikneUrubsNr7Eg0xUMj0edtLnpNk04AY8ChIG2ouVtcG+GYW18XjlJQy226phdGCE+T4BYCGogcQ51CH+E1I+UsBahTXMUkcB8TvPXDMbQtACUgHwHjWhp6pKm5W9xT7PuO9cc2MrWnFgm4rVoLVJvIR4F3EnmESBo1npRuJLlE3+2ZxBp7TcEZenbk/FARN4Ttxj8SzmnUstYHQ95HB92hIMjhle6f1Rn8WhpRL4YopQSyjzc4NZUBcHVdC3hWEPbLI+XCEnlku+EKCqmogaQEaNdt8VvsiTGg32+02GwrkAwuEI+Wu0PFl/K2qgbtyhRTpboz9uEt903H9Dxlvx28XEBOKgI9nECnk+WyC2c4W1yQmobQPVS7jVKbzIOVrqbKE1i0IqjaardyYANzrXMS+gOXg0NCU2VKbXYtmlXDZdqtD4glSoizmzG3b3X8YMxB+wRN4UyiXeHA6zGkOOrigz9mW837A9Aic4M0NPzOOzLRgNVohh+F3mRoJW4VNhGvskj2VRsiHOKELJaqQpu9ZcxBa4n18DZBb/DrtVgdQmEXIiro2L5ImIHvE2KqbepACJ21Djndkiv+oSdoFEx514GwHj18MzzrQWhdR8EtyMCOnTVVFaY0KQXuZSoJaCc63jYzpmZrZJCaoAMU00Vmt/k5pWMLlFghQqgD3ir60pF1DfOtcdHvFD1QI5UH+rqYpq8TMTQDn7gGsbOAZpph42dLLD9TyXaU6xGlDbztkbCPPyzVBZHElpmteGtuzkaU7izGGNqJFvUyafWBrRESUVN0kO7sXogVCp18DE5dHUhiGOfc4HCjmJFPnEU1MolLjBSzizHOpcawFEqHyI81TA+6JWYWc5UpRh+GdHL2hxLLF2Xs4DrFi/JZ7JC0S+MWI1jpXzg33abBjlfybgHYl+7uAMQZTN8lQJQIPrmyGX/VFQwbqsq7a5qp7pC7bHRLwYjbjciCmAFeuH/zpYXwr0eL246oNB6quvTy/YOXL4RviitS7m2XwcvENSkvXASfF9elvG8B/EZemYjX+7n54uPE1SmPfefPZuQfH3+muE7lSdbNI296jrg6RQAAVlA4IK4GAADQMACdASoRAkgAPm00lEikIqGhIfmcMIANiWlu4LwBZAH0AfwBP7SrLwf/MPw7/TPxs/ufPh9ffYjzVe+2859kvq/5LflB8K94Pp49Bj+S/3j8qPY1eDblaAPzL+md4DqBdy/9d6nf6B/lftJ5z6gB/If7D/m/uq+kH+N/6fkm/L/79/0v8f8Av8s/qf+3/v/70/EZ64/Qx/Xf/6FemdmEw/u/UcnQA7kjnUV9WZmlCTWEeMpw78WPz1TIC6eLH3J0eCSaGYMCB+P1E14gqDTfRucxJrtQIuFuGgYszom/dTczcBY+osDR+tdDQiLDzEOCb98bj5ml96VeD6ZtfWWszm6ZXns+BO46VZgU2qtJLb2jJMnUbcM34JtbmYQwwZajDvy0+2fkHJj4PBQozAJxiENkyXjQ4SQjxlOHed66XrFbUPwwDmhOVZDGVIdQVCPtF2Ri9DJ2wgyDHsmRxkxrGzGZLgbS6x6BFIYUVpoBpDn0biW+Hha3oGUgQ0leLH56pkBdPFjjPFvxY/PVCAAA/uYH0fCKUPe2E4dMpDDHeGq+fYVIJYMcT/uecI6FyUny02vee9Q+OLf5gPA/SFM7/5K7hTqWmQWS+wktEkdPfJpmDucHy4DYnni1SqFCRDWsqFdFlCW8xnjmstem8R+LesIIT3xRIlNO/Y2mq6EhJtf0a7Iedjembu3xgw19kO/pBprGJryHV/5Iev/LoJBDqN63+mehJqP30lPKRgvyZJiq6LlV3f/jD5JPR1L/BikkqAJoflJ8VY/crNG5ahn3Gt15hZyKXIE7tf/+n0AAB/EhOQ6p+7/YkGM80GKOUykTei9wX+eVkrkpKnr8/F5g7inHt2PwjDAkrfZoJLfVmLUWeAlCZ2AvGsYIvLuNfw3BgJO97W55jkKUrSi995AWInvIC5uhOueZj17HTq5qfiDEWB3huYNn8H6c4TO6qK+AS5/9mRyCk3myoqt+fz2wuhmeuuFsT5kaiXgCjg9jq5VHEELA/6M2zrA/XpFPQXr4HVm0LNP0ckgddGW4EXBBd/+ZxmM0QSNxOnlvsFuF9cJlnHp7D/lxDV1tS4kz5otcKq//8ZpmXHN9zdGptXNiLXs45lURObpl2n3lgeIC8tUtf+RQFNs5/Bqkj1up6FXAefuRHwJPt41MqLX//Uf/6jh7W0zPXrHLiAJgo59rdigd2aOWiiUsFfGhR1Mfk8eSIi8i/iRI94plmhdOz1f4nZlgnG+4ENA7JvPU8I20/pq3tvO+m0bZcnLR1DExSH9ChP6KS4YDs/ghGxp6rZO3o9jEQz3iIP//qDN36KWz/6y9/gtCd1sl/Hp0vzRMP1p5fopT7+hwB1v/nwJJJD03WTw84v0BnnFHReu3vvHpfsBl7S91qp86S1SBxInE16o+hYSHGwO1PFGhnn++4xl61vmFsPHtt/hXdrHnyAak/fn71ChcEsgJJqji0bSn3Ql+wl/sbOsC8LQShuACmOrsm/oMrjfL+RJ0/h01Mb+T/t+GPM1whpZ+0H7vdl9maLOpVIyOnIpT77zmO/RnklqiwcrRho+OmR1UM2Z8cFfO1BRhSqxzeOvqUnvu+ErgxIjeCBpp58U5ju/xbPJYhPM9uxUQekW1uCrTfYH4h4NOhPICTNPJ/IegvPx9dnLtceCDyu/olSCNmYjJ+QA88sKcuU6UKYjCqCXRQHpu2bIZR/S7Uq89rXIRknyFrb6KwnMyvHP4IfgGGw3M6tSI29PLTI71z+E4lU2ZelEJ1+41gNHIaddQ3/5AfzwHAKNrWYcO8R/Zxw+HfG8Zt5Jflu+H/oUXyFG8Cc3fpYT4X2PxoS2HuGQpStlghoVPzycJ+esznuNzmvWzy0I+v2v9449i5LNGUmcLDEYp+FYUOA4TUlakqB//9m4R36Kal1I0b+hwU36KWmbh/S+ygkvG9X6uBUHnaXTW2aUPhFA41glZm4yBLJUIKGGctaOGbsuY4haU4auiANYSfoObdZa7rNZbXxql1PuuhX6ItM1JC0/jTdY7pAkYOS/Fn7w+NE9pD1lbIJt8++vmbk6tazELc3WhhpP+foaoW2etPWiSMun/+Q9/1K9kYe+4PuRpFmtlgjEFE4N+Sn4LhDCNlSYWMBb7+UzDsC8JVgwezA6xvcqAl3g8oqhaul//SVUvPZiQvfqOX0puw54r9uI8UwmYPqjhgK4En/tMCVTNOmQDAZfXl/qdPX6KZxpCYE0z8dSe/vT/pkgo8Ijm4IXWsXnAHcB8YkXSj2UAAAA3+gAAAAA="
      />
    `}};au.styles=[ot(ft),ze`
      /* layer: preflights */
*,::before,::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
*,::before,::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
[type='text'], [type='email'], [type='url'], [type='password'], [type='number'], [type='date'], [type='datetime-local'], [type='month'], [type='search'], [type='tel'], [type='time'], [type='week'], [multiple], textarea, select { appearance: none;
background-color: #fff;
border-color: #6b7280;
border-width: 1px;
border-radius: 0;
padding-top: 0.5rem;
padding-right: 0.75rem;
padding-bottom: 0.5rem;
padding-left: 0.75rem;
font-size: 1rem;
line-height: 1.5rem;
--un-shadow: 0 0 #0000; }
[type='text']:focus, [type='email']:focus, [type='url']:focus, [type='password']:focus, [type='number']:focus, [type='date']:focus, [type='datetime-local']:focus, [type='month']:focus, [type='search']:focus, [type='tel']:focus, [type='time']:focus, [type='week']:focus, [multiple]:focus, textarea:focus, select:focus { outline: 2px solid transparent;
outline-offset: 2px;
--un-ring-inset: var(--un-empty,/*!*/ /*!*/);
--un-ring-offset-width: 0px;
--un-ring-offset-color: #fff;
--un-ring-color: #2563eb;
--un-ring-offset-shadow: var(--un-ring-inset) 0 0 0 var(--un-ring-offset-width) var(--un-ring-offset-color);
--un-ring-shadow: var(--un-ring-inset) 0 0 0 calc(1px + var(--un-ring-offset-width)) var(--un-ring-color);
box-shadow: var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow);
border-color: #2563eb; }
input::placeholder, textarea::placeholder { color: #6b7280;
opacity: 1; }
::-webkit-datetime-edit-fields-wrapper { padding: 0; }
::-webkit-date-and-time-value { min-height: 1.5em; }
::-webkit-datetime-edit, ::-webkit-datetime-edit-year-field, ::-webkit-datetime-edit-month-field, ::-webkit-datetime-edit-day-field, ::-webkit-datetime-edit-hour-field, ::-webkit-datetime-edit-minute-field, ::-webkit-datetime-edit-second-field, ::-webkit-datetime-edit-millisecond-field, ::-webkit-datetime-edit-meridiem-field { padding-top: 0;
padding-bottom: 0; }
select { background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
background-position: right 0.5rem center;
background-repeat: no-repeat;
background-size: 1.5em 1.5em;
padding-right: 2.5rem;
print-color-adjust: exact; }
[multiple] { background-image: initial;
background-position: initial;
background-repeat: unset;
background-size: initial;
padding-right: 0.75rem;
print-color-adjust: unset; }
[type='checkbox'], [type='radio'] { appearance: none;
padding: 0;
print-color-adjust: exact;
display: inline-block;
vertical-align: middle;
background-origin: border-box;
user-select: none;
flex-shrink: 0;
height: 1rem;
width: 1rem;
color: #2563eb;
background-color: #fff;
border-color: #6b7280;
border-width: 1px;
--un-shadow: 0 0 #0000; }
[type='checkbox'] { border-radius: 0; }
[type='radio'] { border-radius: 100%; }
[type='checkbox']:focus, [type='radio']:focus { outline: 2px solid transparent;
outline-offset: 2px;
--un-ring-inset: var(--un-empty,/*!*/ /*!*/);
--un-ring-offset-width: 2px;
--un-ring-offset-color: #fff;
--un-ring-color: #2563eb;
--un-ring-offset-shadow: var(--un-ring-inset) 0 0 0 var(--un-ring-offset-width) var(--un-ring-offset-color);
--un-ring-shadow: var(--un-ring-inset) 0 0 0 calc(2px + var(--un-ring-offset-width)) var(--un-ring-color);
box-shadow: var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow); }
[type='checkbox']:checked, [type='radio']:checked { border-color: transparent;
background-color: currentColor;
background-size: 100% 100%;
background-position: center;
background-repeat: no-repeat; }
[type='checkbox']:checked { background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e"); }
[type='radio']:checked { background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e"); }
[type='checkbox']:checked:hover, [type='checkbox']:checked:focus, [type='radio']:checked:hover, [type='radio']:checked:focus { border-color: transparent;
background-color: currentColor; }
[type='checkbox']:indeterminate { background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 16 16'%3e%3cpath stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 8h8'/%3e%3c/svg%3e");
border-color: transparent;
background-color: currentColor;
background-size: 100% 100%;
background-position: center;
background-repeat: no-repeat; }
[type='checkbox']:indeterminate:hover, [type='checkbox']:indeterminate:focus { border-color: transparent;
background-color: currentColor; }
[type='file'] { background: unset;
border-color: inherit;
border-width: 0;
border-radius: 0;
padding: 0;
font-size: unset;
line-height: inherit; }
[type='file']:focus { outline: 1px solid ButtonText , 1px auto -webkit-focus-ring-color; }
*,::before,::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: default */
.static{position:static;}
.block{display:block;}
.w-full{width:100%;};
    `];au=K5([re("mw-icon-eb-games")],au);var Y5=Object.defineProperty,X5=Object.getOwnPropertyDescriptor,nl=(e,t,n,r)=>{for(var o=r>1?void 0:r?X5(t,n):t,i=e.length-1,a;i>=0;i--)(a=e[i])&&(o=(r?a(t,n,o):a(o))||o);return r&&o&&Y5(t,n,o),o};let Eo=class extends X{constructor(){super(...arguments),this.label="The quick brown fox jumps over the lazy dog.",this.tag="h1"}render(){return F`
      ${xf(this.tag,[["h1",()=>F`<h1 part="text" class="h1 text-3xl leading-none ">
                ${this.label}
              </h1>`],["h2",()=>F`<h2 part="text" class="h2 leading-none ">${this.label}</h2>`],["h3",()=>F`<h3 part="text" class="h3 leading-none ">${this.label}</h3>`],["h4",()=>F`<h4 part="text" class="h4 leading-none ">${this.label}</h4>`],["h5",()=>F`<h5 part="text" class="h5 leading-none ">${this.label}</h5>`],["h6",()=>F`<h6 part="text" class="h6 leading-none ">${this.label}</h6>`],["menu-heading",()=>F`<span
                part="text"
                class="menu-heading font-bold leading-none text-white font-['Open_Sans']"
                >${this.label}</span
              >`],["menu-title",()=>F`<span
                part="text"
                class="menu-title text-xl font-bold leading-none text-[#E4C04B] font-['Playfair_Display']"
                >${this.label}</span
              >`],["header",()=>F`<span
                part="text"
                class="header font-bold text-lg leading-none text-white font-['Playfair_Display']"
                >${this.label}</span
              >`],["main-header",()=>F`<span
                part="text"
                class="header font-bold text-lg lg:text-[27px] leading-none text-white font-['Playfair_Display'] antialiased"
                >${this.label}</span
              >`],["next-gen-header",()=>F`<span
                part="text"
                class="header font-bold leading-none text-white font-['Playfair_Display'] antialiased"
                >${this.label}</span
              >`]],()=>F`<h1 part="text" class="h1 text-3xl">${this.label}</h1>`)}
    `}};Eo.styles=[ot(ft),ze`
      h1,
      .h1,
      h2,
      .h2,
      h3,
      .h3,
      h4,
      .h4,
      h5,
      .h5,
      h6,
      .h6 {
        font-family: var(--mw-font-header);
        margin: 0;
        padding: 0;
        font-weight: bold;
      }
      h1,
      .h1 {
        font-size: var(--mw-font-title-xxxl);
      }
      h2,
      .h2 {
        font-size: var(--mw-font-title-xxl);
      }
      h3,
      .h3 {
        font-size: var(--mw-font-title-xl);
      }
      h4,
      .h4 {
        font-size: var(--mw-font-title-l);
      }
      h5,
      .h5 {
        font-size: var(--mw-font-title-m);
      }
      h6,
      .h6 {
        font-size: var(--mw-font-title-sm);
      }
      /* layer: preflights */
*,::before,::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
*,::before,::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
[type='text'], [type='email'], [type='url'], [type='password'], [type='number'], [type='date'], [type='datetime-local'], [type='month'], [type='search'], [type='tel'], [type='time'], [type='week'], [multiple], textarea, select { appearance: none;
background-color: #fff;
border-color: #6b7280;
border-width: 1px;
border-radius: 0;
padding-top: 0.5rem;
padding-right: 0.75rem;
padding-bottom: 0.5rem;
padding-left: 0.75rem;
font-size: 1rem;
line-height: 1.5rem;
--un-shadow: 0 0 #0000; }
[type='text']:focus, [type='email']:focus, [type='url']:focus, [type='password']:focus, [type='number']:focus, [type='date']:focus, [type='datetime-local']:focus, [type='month']:focus, [type='search']:focus, [type='tel']:focus, [type='time']:focus, [type='week']:focus, [multiple]:focus, textarea:focus, select:focus { outline: 2px solid transparent;
outline-offset: 2px;
--un-ring-inset: var(--un-empty,/*!*/ /*!*/);
--un-ring-offset-width: 0px;
--un-ring-offset-color: #fff;
--un-ring-color: #2563eb;
--un-ring-offset-shadow: var(--un-ring-inset) 0 0 0 var(--un-ring-offset-width) var(--un-ring-offset-color);
--un-ring-shadow: var(--un-ring-inset) 0 0 0 calc(1px + var(--un-ring-offset-width)) var(--un-ring-color);
box-shadow: var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow);
border-color: #2563eb; }
input::placeholder, textarea::placeholder { color: #6b7280;
opacity: 1; }
::-webkit-datetime-edit-fields-wrapper { padding: 0; }
::-webkit-date-and-time-value { min-height: 1.5em; }
::-webkit-datetime-edit, ::-webkit-datetime-edit-year-field, ::-webkit-datetime-edit-month-field, ::-webkit-datetime-edit-day-field, ::-webkit-datetime-edit-hour-field, ::-webkit-datetime-edit-minute-field, ::-webkit-datetime-edit-second-field, ::-webkit-datetime-edit-millisecond-field, ::-webkit-datetime-edit-meridiem-field { padding-top: 0;
padding-bottom: 0; }
select { background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
background-position: right 0.5rem center;
background-repeat: no-repeat;
background-size: 1.5em 1.5em;
padding-right: 2.5rem;
print-color-adjust: exact; }
[multiple] { background-image: initial;
background-position: initial;
background-repeat: unset;
background-size: initial;
padding-right: 0.75rem;
print-color-adjust: unset; }
[type='checkbox'], [type='radio'] { appearance: none;
padding: 0;
print-color-adjust: exact;
display: inline-block;
vertical-align: middle;
background-origin: border-box;
user-select: none;
flex-shrink: 0;
height: 1rem;
width: 1rem;
color: #2563eb;
background-color: #fff;
border-color: #6b7280;
border-width: 1px;
--un-shadow: 0 0 #0000; }
[type='checkbox'] { border-radius: 0; }
[type='radio'] { border-radius: 100%; }
[type='checkbox']:focus, [type='radio']:focus { outline: 2px solid transparent;
outline-offset: 2px;
--un-ring-inset: var(--un-empty,/*!*/ /*!*/);
--un-ring-offset-width: 2px;
--un-ring-offset-color: #fff;
--un-ring-color: #2563eb;
--un-ring-offset-shadow: var(--un-ring-inset) 0 0 0 var(--un-ring-offset-width) var(--un-ring-offset-color);
--un-ring-shadow: var(--un-ring-inset) 0 0 0 calc(2px + var(--un-ring-offset-width)) var(--un-ring-color);
box-shadow: var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow); }
[type='checkbox']:checked, [type='radio']:checked { border-color: transparent;
background-color: currentColor;
background-size: 100% 100%;
background-position: center;
background-repeat: no-repeat; }
[type='checkbox']:checked { background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e"); }
[type='radio']:checked { background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e"); }
[type='checkbox']:checked:hover, [type='checkbox']:checked:focus, [type='radio']:checked:hover, [type='radio']:checked:focus { border-color: transparent;
background-color: currentColor; }
[type='checkbox']:indeterminate { background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 16 16'%3e%3cpath stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 8h8'/%3e%3c/svg%3e");
border-color: transparent;
background-color: currentColor;
background-size: 100% 100%;
background-position: center;
background-repeat: no-repeat; }
[type='checkbox']:indeterminate:hover, [type='checkbox']:indeterminate:focus { border-color: transparent;
background-color: currentColor; }
[type='file'] { background: unset;
border-color: inherit;
border-width: 0;
border-radius: 0;
padding: 0;
font-size: unset;
line-height: inherit; }
[type='file']:focus { outline: 1px solid ButtonText , 1px auto -webkit-focus-ring-color; }
*,::before,::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: default */
.static{position:static;}
.h1{height:4px;}
.h2{height:8px;}
.h3{height:12px;}
.h4{height:16px;}
.h5{height:20px;}
.h6{height:24px;}
.text-3xl{font-size:30px;line-height:36px;}
.text-lg{font-size:18px;line-height:28px;}
.text-xl{font-size:20px;line-height:28px;}
.text-\\[\\#E4C04B\\]{--un-text-opacity:1;color:rgb(228 192 75 / var(--un-text-opacity)) /* #E4C04B */;}
.text-white{--un-text-opacity:1;color:rgb(255 255 255 / var(--un-text-opacity)) /* #fff */;}
.font-bold{font-weight:700;}
.leading-none{line-height:1;}
.font-\\[\\'Open_Sans\\'\\]{font-family:'Open Sans';}
.font-\\[\\'Playfair_Display\\'\\]{font-family:'Playfair Display';}
.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}
@media (min-width: 1024px){
.lg\\:text-\\[27px\\]{font-size:27px;}
};
    `];nl([R({type:String})],Eo.prototype,"label",2);nl([R({type:String})],Eo.prototype,"tag",2);Eo=nl([re("mw-headings-collection")],Eo);var ew=Object.defineProperty,tw=Object.getOwnPropertyDescriptor,Ca=(e,t,n,r)=>{for(var o=r>1?void 0:r?tw(t,n):t,i=e.length-1,a;i>=0;i--)(a=e[i])&&(o=(r?a(t,n,o):a(o))||o);return r&&o&&ew(t,n,o),o};let Tr=class extends X{constructor(){super(...arguments),this.onClick=()=>{let e=new CustomEvent("mw-toggle-games-menu",{detail:{message:"Toggled games menu."},bubbles:!0,composed:!0});console.debug("Toggled games menu."),this.dispatchEvent(e)},this.logoLink="https://www.britannica.com/quiz/browse",this.menuOpen=!1,this._handleToggleMenu=()=>{this.menuOpen=!this.menuOpen}}connectedCallback(){super.connectedCallback(),window.addEventListener("mw-toggle-games-menu",this._handleToggleMenu)}disconnectedCallback(){window.removeEventListener("mw-toggle-games-menu",this._handleToggleMenu),super.disconnectedCallback()}render(){return F`
      <div
        part="big-bar-nav"
        class="main-nav flex flex-row self-center items-center gap-1"
      >
        <button
          part="menu-button"
          type="button"
          id="gtm-click-menu-button"
          @click=${{handleEvent:()=>this.onClick()}}
          class="block w-[44px] h-[44px] flex items-center justify-center"
          data-tooltip="${this.menuOpen===!1?"Open":"Close"} Site Menu"
          aria-label="${this.menuOpen===!1?"Open":"Close"} Site Menu"
          title="${this.menuOpen===!1?"Open":"Close"} Site Menu"
        >
          ${he(this.menuOpen===!1,()=>F`
              <mw-icon-games-menu-menu
                part="menu-icon"
                style="width: 24px; height: 24px;"
                class="text-white"
              ></mw-icon-games-menu-menu>
            `,()=>F`
              <mw-icon-material-close
                part="menu-icon"
                style="width: 24px; height: 24px;"
                class="text-white"
              ></mw-icon-material-close>
            `)}
        </button>
        <a
          part="logo"
          href="${this.logoLink}"
          class=""
          target="_top"
          rel="external"
          title="EB Games & Quizzes"
        >
          <mw-icon-eb-games class="block w-[220px] h-[30px]"></mw-icon-eb-games>
        </a>
      </div>
    `}};Tr.styles=[ot(ft),ze`
      /* layer: preflights */
*,::before,::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
*,::before,::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
[type='text'], [type='email'], [type='url'], [type='password'], [type='number'], [type='date'], [type='datetime-local'], [type='month'], [type='search'], [type='tel'], [type='time'], [type='week'], [multiple], textarea, select { appearance: none;
background-color: #fff;
border-color: #6b7280;
border-width: 1px;
border-radius: 0;
padding-top: 0.5rem;
padding-right: 0.75rem;
padding-bottom: 0.5rem;
padding-left: 0.75rem;
font-size: 1rem;
line-height: 1.5rem;
--un-shadow: 0 0 #0000; }
[type='text']:focus, [type='email']:focus, [type='url']:focus, [type='password']:focus, [type='number']:focus, [type='date']:focus, [type='datetime-local']:focus, [type='month']:focus, [type='search']:focus, [type='tel']:focus, [type='time']:focus, [type='week']:focus, [multiple]:focus, textarea:focus, select:focus { outline: 2px solid transparent;
outline-offset: 2px;
--un-ring-inset: var(--un-empty,/*!*/ /*!*/);
--un-ring-offset-width: 0px;
--un-ring-offset-color: #fff;
--un-ring-color: #2563eb;
--un-ring-offset-shadow: var(--un-ring-inset) 0 0 0 var(--un-ring-offset-width) var(--un-ring-offset-color);
--un-ring-shadow: var(--un-ring-inset) 0 0 0 calc(1px + var(--un-ring-offset-width)) var(--un-ring-color);
box-shadow: var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow);
border-color: #2563eb; }
input::placeholder, textarea::placeholder { color: #6b7280;
opacity: 1; }
::-webkit-datetime-edit-fields-wrapper { padding: 0; }
::-webkit-date-and-time-value { min-height: 1.5em; }
::-webkit-datetime-edit, ::-webkit-datetime-edit-year-field, ::-webkit-datetime-edit-month-field, ::-webkit-datetime-edit-day-field, ::-webkit-datetime-edit-hour-field, ::-webkit-datetime-edit-minute-field, ::-webkit-datetime-edit-second-field, ::-webkit-datetime-edit-millisecond-field, ::-webkit-datetime-edit-meridiem-field { padding-top: 0;
padding-bottom: 0; }
select { background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
background-position: right 0.5rem center;
background-repeat: no-repeat;
background-size: 1.5em 1.5em;
padding-right: 2.5rem;
print-color-adjust: exact; }
[multiple] { background-image: initial;
background-position: initial;
background-repeat: unset;
background-size: initial;
padding-right: 0.75rem;
print-color-adjust: unset; }
[type='checkbox'], [type='radio'] { appearance: none;
padding: 0;
print-color-adjust: exact;
display: inline-block;
vertical-align: middle;
background-origin: border-box;
user-select: none;
flex-shrink: 0;
height: 1rem;
width: 1rem;
color: #2563eb;
background-color: #fff;
border-color: #6b7280;
border-width: 1px;
--un-shadow: 0 0 #0000; }
[type='checkbox'] { border-radius: 0; }
[type='radio'] { border-radius: 100%; }
[type='checkbox']:focus, [type='radio']:focus { outline: 2px solid transparent;
outline-offset: 2px;
--un-ring-inset: var(--un-empty,/*!*/ /*!*/);
--un-ring-offset-width: 2px;
--un-ring-offset-color: #fff;
--un-ring-color: #2563eb;
--un-ring-offset-shadow: var(--un-ring-inset) 0 0 0 var(--un-ring-offset-width) var(--un-ring-offset-color);
--un-ring-shadow: var(--un-ring-inset) 0 0 0 calc(2px + var(--un-ring-offset-width)) var(--un-ring-color);
box-shadow: var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow); }
[type='checkbox']:checked, [type='radio']:checked { border-color: transparent;
background-color: currentColor;
background-size: 100% 100%;
background-position: center;
background-repeat: no-repeat; }
[type='checkbox']:checked { background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e"); }
[type='radio']:checked { background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e"); }
[type='checkbox']:checked:hover, [type='checkbox']:checked:focus, [type='radio']:checked:hover, [type='radio']:checked:focus { border-color: transparent;
background-color: currentColor; }
[type='checkbox']:indeterminate { background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 16 16'%3e%3cpath stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 8h8'/%3e%3c/svg%3e");
border-color: transparent;
background-color: currentColor;
background-size: 100% 100%;
background-position: center;
background-repeat: no-repeat; }
[type='checkbox']:indeterminate:hover, [type='checkbox']:indeterminate:focus { border-color: transparent;
background-color: currentColor; }
[type='file'] { background: unset;
border-color: inherit;
border-width: 0;
border-radius: 0;
padding: 0;
font-size: unset;
line-height: inherit; }
[type='file']:focus { outline: 1px solid ButtonText , 1px auto -webkit-focus-ring-color; }
*,::before,::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: default */
.static{position:static;}
.block{display:block;}
.h-\\[30px\\]{height:30px;}
.h-\\[44px\\]{height:44px;}
.w-\\[220px\\]{width:220px;}
.w-\\[44px\\]{width:44px;}
.flex{display:flex;}
.flex-row{flex-direction:row;}
.items-center{align-items:center;}
.self-center{align-self:center;}
.justify-center{justify-content:center;}
.gap-1{gap:4px;}
.text-white{--un-text-opacity:1;color:rgb(255 255 255 / var(--un-text-opacity)) /* #fff */;};
    `];Ca([R({type:String})],Tr.prototype,"onClick",2);Ca([R({type:String})],Tr.prototype,"logoLink",2);Ca([Dt()],Tr.prototype,"menuOpen",2);Tr=Ca([re("mw-big-bar-nav-eb")],Tr);var nw=Object.defineProperty,rw=Object.getOwnPropertyDescriptor,Cf=(e,t,n,r)=>{for(var o=r>1?void 0:r?rw(t,n):t,i=e.length-1,a;i>=0;i--)(a=e[i])&&(o=(r?a(t,n,o):a(o))||o);return r&&o&&nw(t,n,o),o};let Zi=class extends X{constructor(){super(...arguments),this.logoLink="https://www.britannica.com/quiz/browse"}render(){return F`
      <header
        id="games-header"
        class="bg-[#071C2E] border-b border-black w-full h-[54px] flex"
      >
        <div
          class="max-w-[1140px] xl:max-w-[1366px] m-x-auto w-full p-0 d-flex align-items-center items-center flex"
        >
          <mw-big-bar-nav-eb logoLink=${this.logoLink}> </mw-big-bar-nav-eb>
        </div>
      </header>
    `}};Zi.styles=[ot(ft),ze`
      /* layer: preflights */
*,::before,::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
*,::before,::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
[type='text'], [type='email'], [type='url'], [type='password'], [type='number'], [type='date'], [type='datetime-local'], [type='month'], [type='search'], [type='tel'], [type='time'], [type='week'], [multiple], textarea, select { appearance: none;
background-color: #fff;
border-color: #6b7280;
border-width: 1px;
border-radius: 0;
padding-top: 0.5rem;
padding-right: 0.75rem;
padding-bottom: 0.5rem;
padding-left: 0.75rem;
font-size: 1rem;
line-height: 1.5rem;
--un-shadow: 0 0 #0000; }
[type='text']:focus, [type='email']:focus, [type='url']:focus, [type='password']:focus, [type='number']:focus, [type='date']:focus, [type='datetime-local']:focus, [type='month']:focus, [type='search']:focus, [type='tel']:focus, [type='time']:focus, [type='week']:focus, [multiple]:focus, textarea:focus, select:focus { outline: 2px solid transparent;
outline-offset: 2px;
--un-ring-inset: var(--un-empty,/*!*/ /*!*/);
--un-ring-offset-width: 0px;
--un-ring-offset-color: #fff;
--un-ring-color: #2563eb;
--un-ring-offset-shadow: var(--un-ring-inset) 0 0 0 var(--un-ring-offset-width) var(--un-ring-offset-color);
--un-ring-shadow: var(--un-ring-inset) 0 0 0 calc(1px + var(--un-ring-offset-width)) var(--un-ring-color);
box-shadow: var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow);
border-color: #2563eb; }
input::placeholder, textarea::placeholder { color: #6b7280;
opacity: 1; }
::-webkit-datetime-edit-fields-wrapper { padding: 0; }
::-webkit-date-and-time-value { min-height: 1.5em; }
::-webkit-datetime-edit, ::-webkit-datetime-edit-year-field, ::-webkit-datetime-edit-month-field, ::-webkit-datetime-edit-day-field, ::-webkit-datetime-edit-hour-field, ::-webkit-datetime-edit-minute-field, ::-webkit-datetime-edit-second-field, ::-webkit-datetime-edit-millisecond-field, ::-webkit-datetime-edit-meridiem-field { padding-top: 0;
padding-bottom: 0; }
select { background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
background-position: right 0.5rem center;
background-repeat: no-repeat;
background-size: 1.5em 1.5em;
padding-right: 2.5rem;
print-color-adjust: exact; }
[multiple] { background-image: initial;
background-position: initial;
background-repeat: unset;
background-size: initial;
padding-right: 0.75rem;
print-color-adjust: unset; }
[type='checkbox'], [type='radio'] { appearance: none;
padding: 0;
print-color-adjust: exact;
display: inline-block;
vertical-align: middle;
background-origin: border-box;
user-select: none;
flex-shrink: 0;
height: 1rem;
width: 1rem;
color: #2563eb;
background-color: #fff;
border-color: #6b7280;
border-width: 1px;
--un-shadow: 0 0 #0000; }
[type='checkbox'] { border-radius: 0; }
[type='radio'] { border-radius: 100%; }
[type='checkbox']:focus, [type='radio']:focus { outline: 2px solid transparent;
outline-offset: 2px;
--un-ring-inset: var(--un-empty,/*!*/ /*!*/);
--un-ring-offset-width: 2px;
--un-ring-offset-color: #fff;
--un-ring-color: #2563eb;
--un-ring-offset-shadow: var(--un-ring-inset) 0 0 0 var(--un-ring-offset-width) var(--un-ring-offset-color);
--un-ring-shadow: var(--un-ring-inset) 0 0 0 calc(2px + var(--un-ring-offset-width)) var(--un-ring-color);
box-shadow: var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow); }
[type='checkbox']:checked, [type='radio']:checked { border-color: transparent;
background-color: currentColor;
background-size: 100% 100%;
background-position: center;
background-repeat: no-repeat; }
[type='checkbox']:checked { background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e"); }
[type='radio']:checked { background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e"); }
[type='checkbox']:checked:hover, [type='checkbox']:checked:focus, [type='radio']:checked:hover, [type='radio']:checked:focus { border-color: transparent;
background-color: currentColor; }
[type='checkbox']:indeterminate { background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 16 16'%3e%3cpath stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 8h8'/%3e%3c/svg%3e");
border-color: transparent;
background-color: currentColor;
background-size: 100% 100%;
background-position: center;
background-repeat: no-repeat; }
[type='checkbox']:indeterminate:hover, [type='checkbox']:indeterminate:focus { border-color: transparent;
background-color: currentColor; }
[type='file'] { background: unset;
border-color: inherit;
border-width: 0;
border-radius: 0;
padding: 0;
font-size: unset;
line-height: inherit; }
[type='file']:focus { outline: 1px solid ButtonText , 1px auto -webkit-focus-ring-color; }
*,::before,::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: default */
.static{position:static;}
.m-x-auto{margin-left:auto;margin-right:auto;}
.h-\\[54px\\]{height:54px;}
.max-w-\\[1140px\\]{max-width:1140px;}
.w-full{width:100%;}
.flex{display:flex;}
.items-center{align-items:center;}
.border-b{border-bottom-width:1px;}
.border-black{--un-border-opacity:1;border-color:rgb(0 0 0 / var(--un-border-opacity));}
.bg-\\[\\#071C2E\\]{--un-bg-opacity:1;background-color:rgb(7 28 46 / var(--un-bg-opacity)) /* #071C2E */;}
.p-0{padding:0;}
@media (min-width: 1280px){
.xl\\:max-w-\\[1366px\\]{max-width:1366px;}
};
    `];Cf([R({type:String})],Zi.prototype,"logoLink",2);Zi=Cf([re("mw-menu-bar-eb")],Zi);const Pr=9e5,ow="eb_gs_menu_1",iw="mw_gs_promos_1";function Ef(e,t){return function(){return e.apply(t,arguments)}}const{toString:aw}=Object.prototype,{getPrototypeOf:rl}=Object,{iterator:Ea,toStringTag:Sf}=Symbol,Sa=(e=>t=>{const n=aw.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),It=e=>(e=e.toLowerCase(),t=>Sa(t)===e),La=e=>t=>typeof t===e,{isArray:Ur}=Array,So=La("undefined");function Mo(e){return e!==null&&!So(e)&&e.constructor!==null&&!So(e.constructor)&&ct(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Lf=It("ArrayBuffer");function sw(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Lf(e.buffer),t}const uw=La("string"),ct=La("function"),Of=La("number"),Ro=e=>e!==null&&typeof e=="object",lw=e=>e===!0||e===!1,ki=e=>{if(Sa(e)!=="object")return!1;const t=rl(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Sf in e)&&!(Ea in e)},cw=e=>{if(!Ro(e)||Mo(e))return!1;try{return Object.keys(e).length===0&&Object.getPrototypeOf(e)===Object.prototype}catch{return!1}},dw=It("Date"),pw=It("File"),fw=It("Blob"),hw=It("FileList"),gw=e=>Ro(e)&&ct(e.pipe),mw=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||ct(e.append)&&((t=Sa(e))==="formdata"||t==="object"&&ct(e.toString)&&e.toString()==="[object FormData]"))},bw=It("URLSearchParams"),[ww,yw,xw,kw]=["ReadableStream","Request","Response","Headers"].map(It),vw=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Do(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,o;if(typeof e!="object"&&(e=[e]),Ur(e))for(r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else{if(Mo(e))return;const i=n?Object.getOwnPropertyNames(e):Object.keys(e),a=i.length;let s;for(r=0;r<a;r++)s=i[r],t.call(null,e[s],s,e)}}function Af(e,t){if(Mo(e))return null;t=t.toLowerCase();const n=Object.keys(e);let r=n.length,o;for(;r-- >0;)if(o=n[r],t===o.toLowerCase())return o;return null}const Bn=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,$f=e=>!So(e)&&e!==Bn;function su(){const{caseless:e}=$f(this)&&this||{},t={},n=(r,o)=>{const i=e&&Af(t,o)||o;ki(t[i])&&ki(r)?t[i]=su(t[i],r):ki(r)?t[i]=su({},r):Ur(r)?t[i]=r.slice():t[i]=r};for(let r=0,o=arguments.length;r<o;r++)arguments[r]&&Do(arguments[r],n);return t}const _w=(e,t,n,{allOwnKeys:r}={})=>(Do(t,(o,i)=>{n&&ct(o)?e[i]=Ef(o,n):e[i]=o},{allOwnKeys:r}),e),Cw=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Ew=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},Sw=(e,t,n,r)=>{let o,i,a;const s={};if(t=t||{},e==null)return t;do{for(o=Object.getOwnPropertyNames(e),i=o.length;i-- >0;)a=o[i],(!r||r(a,e,t))&&!s[a]&&(t[a]=e[a],s[a]=!0);e=n!==!1&&rl(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},Lw=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},Ow=e=>{if(!e)return null;if(Ur(e))return e;let t=e.length;if(!Of(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},Aw=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&rl(Uint8Array)),$w=(e,t)=>{const n=(e&&e[Ea]).call(e);let r;for(;(r=n.next())&&!r.done;){const o=r.value;t.call(e,o[0],o[1])}},Tw=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},Pw=It("HTMLFormElement"),zw=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(t,n,r){return n.toUpperCase()+r}),Cd=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),Mw=It("RegExp"),Tf=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};Do(n,(o,i)=>{let a;(a=t(o,i,e))!==!1&&(r[i]=a||o)}),Object.defineProperties(e,r)},Rw=e=>{Tf(e,(t,n)=>{if(ct(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(ct(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Dw=(e,t)=>{const n={},r=o=>{o.forEach(i=>{n[i]=!0})};return Ur(e)?r(e):r(String(e).split(t)),n},Iw=()=>{},Fw=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t;function Uw(e){return!!(e&&ct(e.append)&&e[Sf]==="FormData"&&e[Ea])}const jw=e=>{const t=new Array(10),n=(r,o)=>{if(Ro(r)){if(t.indexOf(r)>=0)return;if(Mo(r))return r;if(!("toJSON"in r)){t[o]=r;const i=Ur(r)?[]:{};return Do(r,(a,s)=>{const u=n(a,o+1);!So(u)&&(i[s]=u)}),t[o]=void 0,i}}return r};return n(e,0)},Bw=It("AsyncFunction"),Nw=e=>e&&(Ro(e)||ct(e))&&ct(e.then)&&ct(e.catch),Pf=((e,t)=>e?setImmediate:t?((n,r)=>(Bn.addEventListener("message",({source:o,data:i})=>{o===Bn&&i===n&&r.length&&r.shift()()},!1),o=>{r.push(o),Bn.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",ct(Bn.postMessage)),Hw=typeof queueMicrotask<"u"?queueMicrotask.bind(Bn):typeof process<"u"&&process.nextTick||Pf,Vw=e=>e!=null&&ct(e[Ea]),S={isArray:Ur,isArrayBuffer:Lf,isBuffer:Mo,isFormData:mw,isArrayBufferView:sw,isString:uw,isNumber:Of,isBoolean:lw,isObject:Ro,isPlainObject:ki,isEmptyObject:cw,isReadableStream:ww,isRequest:yw,isResponse:xw,isHeaders:kw,isUndefined:So,isDate:dw,isFile:pw,isBlob:fw,isRegExp:Mw,isFunction:ct,isStream:gw,isURLSearchParams:bw,isTypedArray:Aw,isFileList:hw,forEach:Do,merge:su,extend:_w,trim:vw,stripBOM:Cw,inherits:Ew,toFlatObject:Sw,kindOf:Sa,kindOfTest:It,endsWith:Lw,toArray:Ow,forEachEntry:$w,matchAll:Tw,isHTMLForm:Pw,hasOwnProperty:Cd,hasOwnProp:Cd,reduceDescriptors:Tf,freezeMethods:Rw,toObjectSet:Dw,toCamelCase:zw,noop:Iw,toFiniteNumber:Fw,findKey:Af,global:Bn,isContextDefined:$f,isSpecCompliantForm:Uw,toJSONObject:jw,isAsyncFn:Bw,isThenable:Nw,setImmediate:Pf,asap:Hw,isIterable:Vw};function ce(e,t,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o,this.status=o.status?o.status:null)}S.inherits(ce,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:S.toJSONObject(this.config),code:this.code,status:this.status}}});const zf=ce.prototype,Mf={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Mf[e]={value:e}});Object.defineProperties(ce,Mf);Object.defineProperty(zf,"isAxiosError",{value:!0});ce.from=(e,t,n,r,o,i)=>{const a=Object.create(zf);return S.toFlatObject(e,a,function(s){return s!==Error.prototype},s=>s!=="isAxiosError"),ce.call(a,e.message,t,n,r,o),a.cause=e,a.name=e.name,i&&Object.assign(a,i),a};const qw=null;function uu(e){return S.isPlainObject(e)||S.isArray(e)}function Rf(e){return S.endsWith(e,"[]")?e.slice(0,-2):e}function Ed(e,t,n){return e?e.concat(t).map(function(r,o){return r=Rf(r),!n&&o?"["+r+"]":r}).join(n?".":""):t}function Zw(e){return S.isArray(e)&&!e.some(uu)}const Gw=S.toFlatObject(S,{},null,function(e){return/^is[A-Z]/.test(e)});function Oa(e,t,n){if(!S.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=S.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(f,h){return!S.isUndefined(h[f])});const r=n.metaTokens,o=n.visitor||l,i=n.dots,a=n.indexes,s=(n.Blob||typeof Blob<"u"&&Blob)&&S.isSpecCompliantForm(t);if(!S.isFunction(o))throw new TypeError("visitor must be a function");function u(f){if(f===null)return"";if(S.isDate(f))return f.toISOString();if(S.isBoolean(f))return f.toString();if(!s&&S.isBlob(f))throw new ce("Blob is not supported. Use a Buffer instead.");return S.isArrayBuffer(f)||S.isTypedArray(f)?s&&typeof Blob=="function"?new Blob([f]):Buffer.from(f):f}function l(f,h,m){let C=f;if(f&&!m&&typeof f=="object"){if(S.endsWith(h,"{}"))h=r?h:h.slice(0,-2),f=JSON.stringify(f);else if(S.isArray(f)&&Zw(f)||(S.isFileList(f)||S.endsWith(h,"[]"))&&(C=S.toArray(f)))return h=Rf(h),C.forEach(function(x,_){!(S.isUndefined(x)||x===null)&&t.append(a===!0?Ed([h],_,i):a===null?h:h+"[]",u(x))}),!1}return uu(f)?!0:(t.append(Ed(m,h,i),u(f)),!1)}const c=[],d=Object.assign(Gw,{defaultVisitor:l,convertValue:u,isVisitable:uu});function p(f,h){if(!S.isUndefined(f)){if(c.indexOf(f)!==-1)throw Error("Circular reference detected in "+h.join("."));c.push(f),S.forEach(f,function(m,C){(!(S.isUndefined(m)||m===null)&&o.call(t,m,S.isString(C)?C.trim():C,h,d))===!0&&p(m,h?h.concat(C):[C])}),c.pop()}}if(!S.isObject(e))throw new TypeError("data must be an object");return p(e),t}function Sd(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(n){return t[n]})}function ol(e,t){this._pairs=[],e&&Oa(e,this,t)}const Df=ol.prototype;Df.append=function(e,t){this._pairs.push([e,t])};Df.toString=function(e){const t=e?function(n){return e.call(this,n,Sd)}:Sd;return this._pairs.map(function(n){return t(n[0])+"="+t(n[1])},"").join("&")};function Ww(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function If(e,t,n){if(!t)return e;const r=n&&n.encode||Ww;S.isFunction(n)&&(n={serialize:n});const o=n&&n.serialize;let i;if(o?i=o(t,n):i=S.isURLSearchParams(t)?t.toString():new ol(t,n).toString(r),i){const a=e.indexOf("#");a!==-1&&(e=e.slice(0,a)),e+=(e.indexOf("?")===-1?"?":"&")+i}return e}class Ld{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){S.forEach(this.handlers,function(n){n!==null&&t(n)})}}const Ff={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Jw=typeof URLSearchParams<"u"?URLSearchParams:ol,Qw=typeof FormData<"u"?FormData:null,Kw=typeof Blob<"u"?Blob:null,Yw={isBrowser:!0,classes:{URLSearchParams:Jw,FormData:Qw,Blob:Kw},protocols:["http","https","file","blob","url","data"]},il=typeof window<"u"&&typeof document<"u",lu=typeof navigator=="object"&&navigator||void 0,Xw=il&&(!lu||["ReactNative","NativeScript","NS"].indexOf(lu.product)<0),e8=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",t8=il&&window.location.href||"http://localhost",n8=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:il,hasStandardBrowserEnv:Xw,hasStandardBrowserWebWorkerEnv:e8,navigator:lu,origin:t8},Symbol.toStringTag,{value:"Module"})),Qe=Se(Se({},n8),Yw);function r8(e,t){return Oa(e,new Qe.classes.URLSearchParams,Se({visitor:function(n,r,o,i){return Qe.isNode&&S.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},t))}function o8(e){return S.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function i8(e){const t={},n=Object.keys(e);let r;const o=n.length;let i;for(r=0;r<o;r++)i=n[r],t[i]=e[i];return t}function Uf(e){function t(n,r,o,i){let a=n[i++];if(a==="__proto__")return!0;const s=Number.isFinite(+a),u=i>=n.length;return a=!a&&S.isArray(o)?o.length:a,u?(S.hasOwnProp(o,a)?o[a]=[o[a],r]:o[a]=r,!s):((!o[a]||!S.isObject(o[a]))&&(o[a]=[]),t(n,r,o[a],i)&&S.isArray(o[a])&&(o[a]=i8(o[a])),!s)}if(S.isFormData(e)&&S.isFunction(e.entries)){const n={};return S.forEachEntry(e,(r,o)=>{t(o8(r),o,n,0)}),n}return null}function a8(e,t,n){if(S.isString(e))try{return(t||JSON.parse)(e),S.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const Io={transitional:Ff,adapter:["xhr","http","fetch"],transformRequest:[function(e,t){const n=t.getContentType()||"",r=n.indexOf("application/json")>-1,o=S.isObject(e);if(o&&S.isHTMLForm(e)&&(e=new FormData(e)),S.isFormData(e))return r?JSON.stringify(Uf(e)):e;if(S.isArrayBuffer(e)||S.isBuffer(e)||S.isStream(e)||S.isFile(e)||S.isBlob(e)||S.isReadableStream(e))return e;if(S.isArrayBufferView(e))return e.buffer;if(S.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let i;if(o){if(n.indexOf("application/x-www-form-urlencoded")>-1)return r8(e,this.formSerializer).toString();if((i=S.isFileList(e))||n.indexOf("multipart/form-data")>-1){const a=this.env&&this.env.FormData;return Oa(i?{"files[]":e}:e,a&&new a,this.formSerializer)}}return o||r?(t.setContentType("application/json",!1),a8(e)):e}],transformResponse:[function(e){const t=this.transitional||Io.transitional,n=t&&t.forcedJSONParsing,r=this.responseType==="json";if(S.isResponse(e)||S.isReadableStream(e))return e;if(e&&S.isString(e)&&(n&&!this.responseType||r)){const o=!(t&&t.silentJSONParsing)&&r;try{return JSON.parse(e)}catch(i){if(o)throw i.name==="SyntaxError"?ce.from(i,ce.ERR_BAD_RESPONSE,this,null,this.response):i}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Qe.classes.FormData,Blob:Qe.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};S.forEach(["delete","get","head","post","put","patch"],e=>{Io.headers[e]={}});const s8=S.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),u8=e=>{const t={};let n,r,o;return e&&e.split(`
`).forEach(function(i){o=i.indexOf(":"),n=i.substring(0,o).trim().toLowerCase(),r=i.substring(o+1).trim(),!(!n||t[n]&&s8[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},Od=Symbol("internals");function Kr(e){return e&&String(e).trim().toLowerCase()}function vi(e){return e===!1||e==null?e:S.isArray(e)?e.map(vi):String(e)}function l8(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const c8=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function os(e,t,n,r,o){if(S.isFunction(r))return r.call(this,t,n);if(o&&(t=n),!!S.isString(t)){if(S.isString(r))return t.indexOf(r)!==-1;if(S.isRegExp(r))return r.test(t)}}function d8(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function p8(e,t){const n=S.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(o,i,a){return this[r].call(this,t,o,i,a)},configurable:!0})})}let dt=class{constructor(e){e&&this.set(e)}set(e,t,n){const r=this;function o(a,s,u){const l=Kr(s);if(!l)throw new Error("header name must be a non-empty string");const c=S.findKey(r,l);(!c||r[c]===void 0||u===!0||u===void 0&&r[c]!==!1)&&(r[c||s]=vi(a))}const i=(a,s)=>S.forEach(a,(u,l)=>o(u,l,s));if(S.isPlainObject(e)||e instanceof this.constructor)i(e,t);else if(S.isString(e)&&(e=e.trim())&&!c8(e))i(u8(e),t);else if(S.isObject(e)&&S.isIterable(e)){let a={},s,u;for(const l of e){if(!S.isArray(l))throw TypeError("Object iterator must return a key-value pair");a[u=l[0]]=(s=a[u])?S.isArray(s)?[...s,l[1]]:[s,l[1]]:l[1]}i(a,t)}else e!=null&&o(t,e,n);return this}get(e,t){if(e=Kr(e),e){const n=S.findKey(this,e);if(n){const r=this[n];if(!t)return r;if(t===!0)return l8(r);if(S.isFunction(t))return t.call(this,r,n);if(S.isRegExp(t))return t.exec(r);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=Kr(e),e){const n=S.findKey(this,e);return!!(n&&this[n]!==void 0&&(!t||os(this,this[n],n,t)))}return!1}delete(e,t){const n=this;let r=!1;function o(i){if(i=Kr(i),i){const a=S.findKey(n,i);a&&(!t||os(n,n[a],a,t))&&(delete n[a],r=!0)}}return S.isArray(e)?e.forEach(o):o(e),r}clear(e){const t=Object.keys(this);let n=t.length,r=!1;for(;n--;){const o=t[n];(!e||os(this,this[o],o,e,!0))&&(delete this[o],r=!0)}return r}normalize(e){const t=this,n={};return S.forEach(this,(r,o)=>{const i=S.findKey(n,o);if(i){t[i]=vi(r),delete t[o];return}const a=e?d8(o):String(o).trim();a!==o&&delete t[o],t[a]=vi(r),n[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return S.forEach(this,(n,r)=>{n!=null&&n!==!1&&(t[r]=e&&S.isArray(n)?n.join(", "):n)}),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,t])=>e+": "+t).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const n=new this(e);return t.forEach(r=>n.set(r)),n}static accessor(e){const t=(this[Od]=this[Od]={accessors:{}}).accessors,n=this.prototype;function r(o){const i=Kr(o);t[i]||(p8(n,o),t[i]=!0)}return S.isArray(e)?e.forEach(r):r(e),this}};dt.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);S.reduceDescriptors(dt.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});S.freezeMethods(dt);function is(e,t){const n=this||Io,r=t||n,o=dt.from(r.headers);let i=r.data;return S.forEach(e,function(a){i=a.call(n,i,o.normalize(),t?t.status:void 0)}),o.normalize(),i}function jf(e){return!!(e&&e.__CANCEL__)}function jr(e,t,n){ce.call(this,e!=null?e:"canceled",ce.ERR_CANCELED,t,n),this.name="CanceledError"}S.inherits(jr,ce,{__CANCEL__:!0});function Bf(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new ce("Request failed with status code "+n.status,[ce.ERR_BAD_REQUEST,ce.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function f8(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function h8(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o=0,i=0,a;return t=t!==void 0?t:1e3,function(s){const u=Date.now(),l=r[i];a||(a=u),n[o]=s,r[o]=u;let c=i,d=0;for(;c!==o;)d+=n[c++],c=c%e;if(o=(o+1)%e,o===i&&(i=(i+1)%e),u-a<t)return;const p=l&&u-l;return p?Math.round(d*1e3/p):void 0}}function g8(e,t){let n=0,r=1e3/t,o,i;const a=(s,u=Date.now())=>{n=u,o=null,i&&(clearTimeout(i),i=null),e(...s)};return[(...s)=>{const u=Date.now(),l=u-n;l>=r?a(s,u):(o=s,i||(i=setTimeout(()=>{i=null,a(o)},r-l)))},()=>o&&a(o)]}const Gi=(e,t,n=3)=>{let r=0;const o=h8(50,250);return g8(i=>{const a=i.loaded,s=i.lengthComputable?i.total:void 0,u=a-r,l=o(u),c=a<=s;r=a;const d={loaded:a,total:s,progress:s?a/s:void 0,bytes:u,rate:l||void 0,estimated:l&&s&&c?(s-a)/l:void 0,event:i,lengthComputable:s!=null,[t?"download":"upload"]:!0};e(d)},n)},Ad=(e,t)=>{const n=e!=null;return[r=>t[0]({lengthComputable:n,total:e,loaded:r}),t[1]]},$d=e=>(...t)=>S.asap(()=>e(...t)),m8=Qe.hasStandardBrowserEnv?((e,t)=>n=>(n=new URL(n,Qe.origin),e.protocol===n.protocol&&e.host===n.host&&(t||e.port===n.port)))(new URL(Qe.origin),Qe.navigator&&/(msie|trident)/i.test(Qe.navigator.userAgent)):()=>!0,b8=Qe.hasStandardBrowserEnv?{write(e,t,n,r,o,i){const a=[e+"="+encodeURIComponent(t)];S.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),S.isString(r)&&a.push("path="+r),S.isString(o)&&a.push("domain="+o),i===!0&&a.push("secure"),document.cookie=a.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function w8(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function y8(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function Nf(e,t,n){let r=!w8(t);return e&&(r||n==!1)?y8(e,t):t}const Td=e=>e instanceof dt?Se({},e):e;function tr(e,t){t=t||{};const n={};function r(l,c,d,p){return S.isPlainObject(l)&&S.isPlainObject(c)?S.merge.call({caseless:p},l,c):S.isPlainObject(c)?S.merge({},c):S.isArray(c)?c.slice():c}function o(l,c,d,p){if(S.isUndefined(c)){if(!S.isUndefined(l))return r(void 0,l,d,p)}else return r(l,c,d,p)}function i(l,c){if(!S.isUndefined(c))return r(void 0,c)}function a(l,c){if(S.isUndefined(c)){if(!S.isUndefined(l))return r(void 0,l)}else return r(void 0,c)}function s(l,c,d){if(d in t)return r(l,c);if(d in e)return r(void 0,l)}const u={url:i,method:i,data:i,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,withXSRFToken:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:s,headers:(l,c,d)=>o(Td(l),Td(c),d,!0)};return S.forEach(Object.keys(Se(Se({},e),t)),function(l){const c=u[l]||o,d=c(e[l],t[l],l);S.isUndefined(d)&&c!==s||(n[l]=d)}),n}const Hf=e=>{const t=tr({},e);let{data:n,withXSRFToken:r,xsrfHeaderName:o,xsrfCookieName:i,headers:a,auth:s}=t;t.headers=a=dt.from(a),t.url=If(Nf(t.baseURL,t.url,t.allowAbsoluteUrls),e.params,e.paramsSerializer),s&&a.set("Authorization","Basic "+btoa((s.username||"")+":"+(s.password?unescape(encodeURIComponent(s.password)):"")));let u;if(S.isFormData(n)){if(Qe.hasStandardBrowserEnv||Qe.hasStandardBrowserWebWorkerEnv)a.setContentType(void 0);else if((u=a.getContentType())!==!1){const[l,...c]=u?u.split(";").map(d=>d.trim()).filter(Boolean):[];a.setContentType([l||"multipart/form-data",...c].join("; "))}}if(Qe.hasStandardBrowserEnv&&(r&&S.isFunction(r)&&(r=r(t)),r||r!==!1&&m8(t.url))){const l=o&&i&&b8.read(i);l&&a.set(o,l)}return t},x8=typeof XMLHttpRequest<"u",k8=x8&&function(e){return new Promise(function(t,n){const r=Hf(e);let o=r.data;const i=dt.from(r.headers).normalize();let{responseType:a,onUploadProgress:s,onDownloadProgress:u}=r,l,c,d,p,f;function h(){p&&p(),f&&f(),r.cancelToken&&r.cancelToken.unsubscribe(l),r.signal&&r.signal.removeEventListener("abort",l)}let m=new XMLHttpRequest;m.open(r.method.toUpperCase(),r.url,!0),m.timeout=r.timeout;function C(){if(!m)return;const _=dt.from("getAllResponseHeaders"in m&&m.getAllResponseHeaders()),I={data:!a||a==="text"||a==="json"?m.responseText:m.response,status:m.status,statusText:m.statusText,headers:_,config:e,request:m};Bf(function(q){t(q),h()},function(q){n(q),h()},I),m=null}"onloadend"in m?m.onloadend=C:m.onreadystatechange=function(){!m||m.readyState!==4||m.status===0&&!(m.responseURL&&m.responseURL.indexOf("file:")===0)||setTimeout(C)},m.onabort=function(){m&&(n(new ce("Request aborted",ce.ECONNABORTED,e,m)),m=null)},m.onerror=function(){n(new ce("Network Error",ce.ERR_NETWORK,e,m)),m=null},m.ontimeout=function(){let _=r.timeout?"timeout of "+r.timeout+"ms exceeded":"timeout exceeded";const I=r.transitional||Ff;r.timeoutErrorMessage&&(_=r.timeoutErrorMessage),n(new ce(_,I.clarifyTimeoutError?ce.ETIMEDOUT:ce.ECONNABORTED,e,m)),m=null},o===void 0&&i.setContentType(null),"setRequestHeader"in m&&S.forEach(i.toJSON(),function(_,I){m.setRequestHeader(I,_)}),S.isUndefined(r.withCredentials)||(m.withCredentials=!!r.withCredentials),a&&a!=="json"&&(m.responseType=r.responseType),u&&([d,f]=Gi(u,!0),m.addEventListener("progress",d)),s&&m.upload&&([c,p]=Gi(s),m.upload.addEventListener("progress",c),m.upload.addEventListener("loadend",p)),(r.cancelToken||r.signal)&&(l=_=>{m&&(n(!_||_.type?new jr(null,e,m):_),m.abort(),m=null)},r.cancelToken&&r.cancelToken.subscribe(l),r.signal&&(r.signal.aborted?l():r.signal.addEventListener("abort",l)));const x=f8(r.url);if(x&&Qe.protocols.indexOf(x)===-1){n(new ce("Unsupported protocol "+x+":",ce.ERR_BAD_REQUEST,e));return}m.send(o||null)})},v8=(e,t)=>{const{length:n}=e=e?e.filter(Boolean):[];if(t||n){let r=new AbortController,o;const i=function(l){if(!o){o=!0,s();const c=l instanceof Error?l:this.reason;r.abort(c instanceof ce?c:new jr(c instanceof Error?c.message:c))}};let a=t&&setTimeout(()=>{a=null,i(new ce(`timeout ${t} of ms exceeded`,ce.ETIMEDOUT))},t);const s=()=>{e&&(a&&clearTimeout(a),a=null,e.forEach(l=>{l.unsubscribe?l.unsubscribe(i):l.removeEventListener("abort",i)}),e=null)};e.forEach(l=>l.addEventListener("abort",i));const{signal:u}=r;return u.unsubscribe=()=>S.asap(s),u}},_8=function*(e,t){let n=e.byteLength;if(n<t){yield e;return}let r=0,o;for(;r<n;)o=r+t,yield e.slice(r,o),r=o},C8=async function*(e,t){for await(const n of E8(e))yield*_8(n,t)},E8=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const t=e.getReader();try{for(;;){const{done:n,value:r}=await t.read();if(n)break;yield r}}finally{await t.cancel()}},Pd=(e,t,n,r)=>{const o=C8(e,t);let i=0,a,s=u=>{a||(a=!0,r&&r(u))};return new ReadableStream({async pull(u){try{const{done:l,value:c}=await o.next();if(l){s(),u.close();return}let d=c.byteLength;if(n){let p=i+=d;n(p)}u.enqueue(new Uint8Array(c))}catch(l){throw s(l),l}},cancel(u){return s(u),o.return()}},{highWaterMark:2})},Aa=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",Vf=Aa&&typeof ReadableStream=="function",S8=Aa&&(typeof TextEncoder=="function"?(e=>t=>e.encode(t))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),qf=(e,...t)=>{try{return!!e(...t)}catch{return!1}},L8=Vf&&qf(()=>{let e=!1;const t=new Request(Qe.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t}),zd=64*1024,cu=Vf&&qf(()=>S.isReadableStream(new Response("").body)),Wi={stream:cu&&(e=>e.body)};Aa&&(e=>{["text","arrayBuffer","blob","formData","stream"].forEach(t=>{!Wi[t]&&(Wi[t]=S.isFunction(e[t])?n=>n[t]():(n,r)=>{throw new ce(`Response type '${t}' is not supported`,ce.ERR_NOT_SUPPORT,r)})})})(new Response);const O8=async e=>{if(e==null)return 0;if(S.isBlob(e))return e.size;if(S.isSpecCompliantForm(e))return(await new Request(Qe.origin,{method:"POST",body:e}).arrayBuffer()).byteLength;if(S.isArrayBufferView(e)||S.isArrayBuffer(e))return e.byteLength;if(S.isURLSearchParams(e)&&(e=e+""),S.isString(e))return(await S8(e)).byteLength},A8=async(e,t)=>{const n=S.toFiniteNumber(e.getContentLength());return n!=null?n:O8(t)},$8=Aa&&(async e=>{let{url:t,method:n,data:r,signal:o,cancelToken:i,timeout:a,onDownloadProgress:s,onUploadProgress:u,responseType:l,headers:c,withCredentials:d="same-origin",fetchOptions:p}=Hf(e);l=l?(l+"").toLowerCase():"text";let f=v8([o,i&&i.toAbortSignal()],a),h;const m=f&&f.unsubscribe&&(()=>{f.unsubscribe()});let C;try{if(u&&L8&&n!=="get"&&n!=="head"&&(C=await A8(c,r))!==0){let H=new Request(t,{method:"POST",body:r,duplex:"half"}),D;if(S.isFormData(r)&&(D=H.headers.get("content-type"))&&c.setContentType(D),H.body){const[W,v]=Ad(C,Gi($d(u)));r=Pd(H.body,zd,W,v)}}S.isString(d)||(d=d?"include":"omit");const x="credentials"in Request.prototype;h=new Request(t,Bo(Se({},p),{signal:f,method:n.toUpperCase(),headers:c.normalize().toJSON(),body:r,duplex:"half",credentials:x?d:void 0}));let _=await fetch(h,p);const I=cu&&(l==="stream"||l==="response");if(cu&&(s||I&&m)){const H={};["status","statusText","headers"].forEach(E=>{H[E]=_[E]});const D=S.toFiniteNumber(_.headers.get("content-length")),[W,v]=s&&Ad(D,Gi($d(s),!0))||[];_=new Response(Pd(_.body,zd,W,()=>{v&&v(),m&&m()}),H)}l=l||"text";let q=await Wi[S.findKey(Wi,l)||"text"](_,e);return!I&&m&&m(),await new Promise((H,D)=>{Bf(H,D,{data:q,headers:dt.from(_.headers),status:_.status,statusText:_.statusText,config:e,request:h})})}catch(x){throw m&&m(),x&&x.name==="TypeError"&&/Load failed|fetch/i.test(x.message)?Object.assign(new ce("Network Error",ce.ERR_NETWORK,e,h),{cause:x.cause||x}):ce.from(x,x&&x.code,e,h)}}),du={http:qw,xhr:k8,fetch:$8};S.forEach(du,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Md=e=>`- ${e}`,T8=e=>S.isFunction(e)||e===null||e===!1,Zf={getAdapter:e=>{e=S.isArray(e)?e:[e];const{length:t}=e;let n,r;const o={};for(let i=0;i<t;i++){n=e[i];let a;if(r=n,!T8(n)&&(r=du[(a=String(n)).toLowerCase()],r===void 0))throw new ce(`Unknown adapter '${a}'`);if(r)break;o[a||"#"+i]=r}if(!r){const i=Object.entries(o).map(([s,u])=>`adapter ${s} `+(u===!1?"is not supported by the environment":"is not available in the build"));let a=t?i.length>1?`since :
`+i.map(Md).join(`
`):" "+Md(i[0]):"as no adapter specified";throw new ce("There is no suitable adapter to dispatch the request "+a,"ERR_NOT_SUPPORT")}return r},adapters:du};function as(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new jr(null,e)}function Rd(e){return as(e),e.headers=dt.from(e.headers),e.data=is.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Zf.getAdapter(e.adapter||Io.adapter)(e).then(function(t){return as(e),t.data=is.call(e,e.transformResponse,t),t.headers=dt.from(t.headers),t},function(t){return jf(t)||(as(e),t&&t.response&&(t.response.data=is.call(e,e.transformResponse,t.response),t.response.headers=dt.from(t.response.headers))),Promise.reject(t)})}const Gf="1.11.0",$a={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{$a[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}});const Dd={};$a.transitional=function(e,t,n){function r(o,i){return"[Axios v"+Gf+"] Transitional option '"+o+"'"+i+(n?". "+n:"")}return(o,i,a)=>{if(e===!1)throw new ce(r(i," has been removed"+(t?" in "+t:"")),ce.ERR_DEPRECATED);return t&&!Dd[i]&&(Dd[i]=!0,console.warn(r(i," has been deprecated since v"+t+" and will be removed in the near future"))),e?e(o,i,a):!0}};$a.spelling=function(e){return(t,n)=>(console.warn(`${n} is likely a misspelling of ${e}`),!0)};function P8(e,t,n){if(typeof e!="object")throw new ce("options must be an object",ce.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;for(;o-- >0;){const i=r[o],a=t[i];if(a){const s=e[i],u=s===void 0||a(s,i,e);if(u!==!0)throw new ce("option "+i+" must be "+u,ce.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new ce("Unknown option "+i,ce.ERR_BAD_OPTION)}}const _i={assertOptions:P8,validators:$a},jt=_i.validators;let Wn=class{constructor(e){this.defaults=e||{},this.interceptors={request:new Ld,response:new Ld}}async request(e,t){try{return await this._request(e,t)}catch(n){if(n instanceof Error){let r={};Error.captureStackTrace?Error.captureStackTrace(r):r=new Error;const o=r.stack?r.stack.replace(/^.+\n/,""):"";try{n.stack?o&&!String(n.stack).endsWith(o.replace(/^.+\n.+\n/,""))&&(n.stack+=`
`+o):n.stack=o}catch{}}throw n}}_request(e,t){typeof e=="string"?(t=t||{},t.url=e):t=e||{},t=tr(this.defaults,t);const{transitional:n,paramsSerializer:r,headers:o}=t;n!==void 0&&_i.assertOptions(n,{silentJSONParsing:jt.transitional(jt.boolean),forcedJSONParsing:jt.transitional(jt.boolean),clarifyTimeoutError:jt.transitional(jt.boolean)},!1),r!=null&&(S.isFunction(r)?t.paramsSerializer={serialize:r}:_i.assertOptions(r,{encode:jt.function,serialize:jt.function},!0)),t.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?t.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:t.allowAbsoluteUrls=!0),_i.assertOptions(t,{baseUrl:jt.spelling("baseURL"),withXsrfToken:jt.spelling("withXSRFToken")},!0),t.method=(t.method||this.defaults.method||"get").toLowerCase();let i=o&&S.merge(o.common,o[t.method]);o&&S.forEach(["delete","get","head","post","put","patch","common"],f=>{delete o[f]}),t.headers=dt.concat(i,o);const a=[];let s=!0;this.interceptors.request.forEach(function(f){typeof f.runWhen=="function"&&f.runWhen(t)===!1||(s=s&&f.synchronous,a.unshift(f.fulfilled,f.rejected))});const u=[];this.interceptors.response.forEach(function(f){u.push(f.fulfilled,f.rejected)});let l,c=0,d;if(!s){const f=[Rd.bind(this),void 0];for(f.unshift(...a),f.push(...u),d=f.length,l=Promise.resolve(t);c<d;)l=l.then(f[c++],f[c++]);return l}d=a.length;let p=t;for(c=0;c<d;){const f=a[c++],h=a[c++];try{p=f(p)}catch(m){h.call(this,m);break}}try{l=Rd.call(this,p)}catch(f){return Promise.reject(f)}for(c=0,d=u.length;c<d;)l=l.then(u[c++],u[c++]);return l}getUri(e){e=tr(this.defaults,e);const t=Nf(e.baseURL,e.url,e.allowAbsoluteUrls);return If(t,e.params,e.paramsSerializer)}};S.forEach(["delete","get","head","options"],function(e){Wn.prototype[e]=function(t,n){return this.request(tr(n||{},{method:e,url:t,data:(n||{}).data}))}});S.forEach(["post","put","patch"],function(e){function t(n){return function(r,o,i){return this.request(tr(i||{},{method:e,headers:n?{"Content-Type":"multipart/form-data"}:{},url:r,data:o}))}}Wn.prototype[e]=t(),Wn.prototype[e+"Form"]=t(!0)});let z8=class Wf{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(o=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](o);r._listeners=null}),this.promise.then=o=>{let i;const a=new Promise(s=>{r.subscribe(s),i=s}).then(o);return a.cancel=function(){r.unsubscribe(i)},a},t(function(o,i,a){r.reason||(r.reason=new jr(o,i,a),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const t=new AbortController,n=r=>{t.abort(r)};return this.subscribe(n),t.signal.unsubscribe=()=>this.unsubscribe(n),t.signal}static source(){let t;return{token:new Wf(function(n){t=n}),cancel:t}}};function M8(e){return function(t){return e.apply(null,t)}}function R8(e){return S.isObject(e)&&e.isAxiosError===!0}const pu={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(pu).forEach(([e,t])=>{pu[t]=e});function Jf(e){const t=new Wn(e),n=Ef(Wn.prototype.request,t);return S.extend(n,Wn.prototype,t,{allOwnKeys:!0}),S.extend(n,t,null,{allOwnKeys:!0}),n.create=function(r){return Jf(tr(e,r))},n}const Me=Jf(Io);Me.Axios=Wn;Me.CanceledError=jr;Me.CancelToken=z8;Me.isCancel=jf;Me.VERSION=Gf;Me.toFormData=Oa;Me.AxiosError=ce;Me.Cancel=Me.CanceledError;Me.all=function(e){return Promise.all(e)};Me.spread=M8;Me.isAxiosError=R8;Me.mergeConfig=tr;Me.AxiosHeaders=dt;Me.formToJSON=e=>Uf(S.isHTMLForm(e)?new FormData(e):e);Me.getAdapter=Zf.getAdapter;Me.HttpStatusCode=pu;Me.default=Me;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const D8=Symbol();class Qf{get taskComplete(){return this.t||(this.i===1?this.t=new Promise((t,n)=>{this.o=t,this.h=n}):this.i===3?this.t=Promise.reject(this.l):this.t=Promise.resolve(this.u)),this.t}constructor(t,n,r){var a,s;var o;this.p=0,this.i=0,(this._=t).addController(this);const i=typeof n=="object"?n:{task:n,args:r};this.v=i.task,this.j=i.args,this.m=(a=i.argsEqual)!=null?a:I8,this.k=i.onComplete,this.A=i.onError,this.autoRun=(s=i.autoRun)!=null?s:!0,"initialValue"in i&&(this.u=i.initialValue,this.i=2,this.O=(o=this.T)==null?void 0:o.call(this))}hostUpdate(){this.autoRun===!0&&this.S()}hostUpdated(){this.autoRun==="afterUpdate"&&this.S()}T(){if(this.j===void 0)return;const t=this.j();if(!Array.isArray(t))throw Error("The args function must return an array");return t}async S(){const t=this.T(),n=this.O;this.O=t,t===n||t===void 0||n!==void 0&&this.m(n,t)||await this.run(t)}async run(t){var n,r,o,i,a;let s,u;t!=null||(t=this.T()),this.O=t,this.i===1?(n=this.q)==null||n.abort():(this.t=void 0,this.o=void 0,this.h=void 0),this.i=1,this.autoRun==="afterUpdate"?queueMicrotask(()=>this._.requestUpdate()):this._.requestUpdate();const l=++this.p;this.q=new AbortController;let c=!1;try{s=await this.v(t,{signal:this.q.signal})}catch(d){c=!0,u=d}if(this.p===l){if(s===D8)this.i=0;else{if(c===!1){try{(r=this.k)==null||r.call(this,s)}catch{}this.i=2,(o=this.o)==null||o.call(this,s)}else{try{(i=this.A)==null||i.call(this,u)}catch{}this.i=3,(a=this.h)==null||a.call(this,u)}this.u=s,this.l=u}this._.requestUpdate()}}abort(t){var n;this.i===1&&((n=this.q)==null||n.abort(t))}get value(){return this.u}get error(){return this.l}get status(){return this.i}render(t){var n,r,o,i;switch(this.i){case 0:return(n=t.initial)==null?void 0:n.call(t);case 1:return(r=t.pending)==null?void 0:r.call(t);case 2:return(o=t.complete)==null?void 0:o.call(t,this.value);case 3:return(i=t.error)==null?void 0:i.call(t,this.error);default:throw Error("Unexpected status: "+this.i)}}}const I8=(e,t)=>e===t||e.length===t.length&&e.every((n,r)=>!va(n,t[r]));class F8{constructor(t,n,r,o=Pr){this._menuData=JSON.parse(JSON.stringify({})),this._cacheLifeTime=Pr,this._componentTime=0,this.SESSION_KEY=ow,this.host=t,t.addController(this),this.task=this.setMenuTask(),this._apiUrl=n,this._menuData=r,this._cacheLifeTime=o,this._componentTime=Date.now()}hostConnected(){}hostDisconnected(){}set menuData(t){this._menuData=t}get menuData(){return this._menuData}set cacheLifeTime(t){this._cacheLifeTime=t}get cacheLifeTime(){return this._cacheLifeTime}set apiUrl(t){this._apiUrl=t}get apiUrl(){return this._apiUrl}setMenuTask(){return new Qf(this.host,{args:()=>[this.apiUrl],task:async([t])=>{if(!t)throw new Error("No API Url Provided");let n=0;if(typeof sessionStorage<"u"&&sessionStorage.getItem(this.SESSION_KEY)){const r=JSON.parse(sessionStorage.getItem(this.SESSION_KEY)||"{}");r&&Object.keys(r).length!==0&&(n=(r==null?void 0:r.timestamp)||-1,this._componentTime-n<=this._cacheLifeTime&&(this.menuData=r))}return(this.menuData===void 0||n<1||this._componentTime-n>this._cacheLifeTime)&&await Me(t,{method:"GET"}).then(r=>{if(r.data){let o=r.data;return this.menuData=Object.assign(o,{timestamp:Date.now()}),typeof sessionStorage<"u"&&sessionStorage.setItem(this.SESSION_KEY,JSON.stringify(this.menuData)),r.data}else throw new Error("Malformed Data")}).catch(r=>{throw new Error(r)}),this.menuData}})}render(t){return this.task.render(t)}}var U8=Object.getOwnPropertyDescriptor,j8=(e,t,n,r)=>{for(var o=r>1?void 0:r?U8(t,n):t,i=e.length-1,a;i>=0;i--)(a=e[i])&&(o=a(o)||o);return o};let fu=class extends X{render(){return F`
      <img
        part="icon"
        class="w-full h-auto block"
        alt=""
        src="data:image/webp;base64,UklGRu4LAABXRUJQVlA4WAoAAAAQAAAAnwAAnwAAQUxQSPMKAAABwLztv9paX54f7ixsKBnhEtzJwp03uHMWNmUHd/bCYXSKO80M5xRnxF7XxdBaZk7LP0Ayw3kGSdqetqe8w4iYAE59ePEERSMUjVA0QtEIRSMUjVA0QtEIRSMUjVA0QtEIRSMUjVA0QtEIRSMUjVA0QtEIxaeKlxkC7PTVJoT9QzhPeBwytCnySo+QdHOeqD33YVsiVGegi9yR9fB4wnrNnZk0H7V2rO4M2hKO6saaOzdwj9ZDnAnPuFOz+zDJru4UdocKCIPxXqmYTT2v24bHpzuH0bobunumt9uY7pmqYmW8Z/5f/jY3RpvmxoR8c/SWVBA3EO6UCLEmFlhBvBlQym2oIbfE1SQU2EF9K25lbmk3xDKJhbrA4Y5INXFPJdFJLqx6UoHVDdCmubYKqkNgbDnEIPWKVaYkdomuh+r69NrCCjYrcs8qM1Z0lIShGkM1VNTdqy5AXlNbhQ1VZlMDpaIndfQ99SFAuCoo5bq6ljAmVitqqEgQyFBRU41V2HeE/tquviTasQqFxdiz2CU2hWobebWHMbF6IgTqMClWkwgVcQxh33Hd2jRXRj22lAT0/UQzEA3ArmbXc3V6baQxhA0wGoGDESh20CZWu3AHsOoBkm6BuAGSbgGqMXD9pVwfmwooasdsGNQaWNXcgV0kdBBU93OdaoYqQY6vvGICiBMhdLBZAIrXpk1zfVYAozpCHgJ5kiZZ09XpDcjUkNWeMJip1EOgglHzK6+f9GvYOAayDrByrIlDQI1XBqVcUR2AsDNxcEXYZRjVRBgTlbbs7AHSVV11Hh6BsIq1WlFBVC1QQdGergXq/e5VFXXNtFM7gG4BULdMk5Yr0qa5LvNShkA16SFQqYdJNVybXlGtDlBTqS05Q69jRdgGDtpDRVb7VxUHlWqoyI5Uw1ATRjvYmMkeAv2KXm2vCEq5pnpUottAt6LTLcQCrQ6EXaCzkLXj1R16aXUFUNQEEAa1JlA7KZFXekVS40KZRGegTALXrU1zPXXTVEBUN0A67gDUToDYNNekF/FhZxp12xJG3ROg6AoClVoT6NSOsB60P8/73JIv6s5CUl3Tq8REGK2JPRQ7Qk/WsaoHdcdZuy+6CCjlMoxnoVdtw2ghWpMK9FbEA5RCqx0HdazOEv3MC7nQ93GogeqkUNQ99a4j+QQ1la6gJlkIZjp1rDm1AurB97kllQ415HAK1LkviRDIWgMrHQJQFCrCpuQUODWsoB70XS5Cm+YiGHWoKasT6qapWCyaIQxqBtSa+dA0TThuVagHHbkQvYyiDqkYj+vU4Xk1Cc50qnuo1TyTntTdcdGSBrXcluz8PhxFO6pDC0R1BWViTVQLEJ5Ue44Oe+fzZUApl1EvuA1AWKAeVdNcWYpL1V61ZzEAYetifSkXe1hwGyC2C6SJLWFuM1PRqpmwVd2w2EYIWxcP3NjVkttA3IcF0mSo6FWIkwJZx0CvugsLYR8JW5dXF6JNcxFvRX2E+zq6XmKlug3hoC0UtYaDJpLqLrC4NtZ7j6x5qwvRi6geKEfok6YlulHdhlDcB6rRFXSOiaRaAoudPnls4fHdbwm7dTpqmpaoN+o2UucW8iEQciI8Vw+J5eSp6cWOCy3lMpLbk0xLELq82URma6ZVLqscOTJ58t50KRd78IzrsPTyw9ozHrix6Rxu61O+4XPedOY98tueUG89Z7oQbZoLoZzDoT3hGx1+4WPf7Tv+xj/n+DR4zsLF6KXU4zk0HfchLn7/ccmzjvXtIZ3H9VFv8u8Ln3XU2vMmLreUiyGfx/Ux/PVCdcza82Zuc3/UYVxwfcxvzP3HG45Yuzgejlpxq9MxdpsFuyN+fO7vWM4ubjqPTVywNs0lEccjTGmcMy5901xZis6PbfLIMXJZelGEzRGmejc3hIUvn/vNhWqY29XJIzeBmwbxsGQKmxlfLHzm3C8vvHB2E5LLh8jFl3JhoWnyYcGWfsZ2Ls49n2ud7WldPOSmCRd3+e3okUNNntnPfdjcD87tZzL1sKRj5PbXuyMcAmlimvmA45LTRBg8cldz6do0F0dYHeEW0mQ/8/5zPzGznyTC1iNXgSvQy4N4WHINSbWdvN/c80mrmmDt8iFyhdcCeVwwQVI3k/ed+9nJRk3QuThmrrSU6yDkcW6oIasB+IC5XwWC2kHt/JgDr9yQx4nbAL22wEfP/TqQtIewnxlz4JUc0kF1BfT2wGfO/RnQ2wMr1UMKXK82zRUB6aC2wG4LpLm/BPY7oFUPiatWvS5IB4cA4QB829y/AocAYfCQuPJbAGl8AdQRns/9N8QaeDEmbmAp10fYtMz+1pzvwLTdBO7GOPcXC+81U3N//svCJ87cRm2aW/JfC195U/SGvKuL33WvfPzSL9wQKOWGfOXSH9+Um/p9S397r/RL/3ZDtGluyNOSb31L9Ib80xHvdZ+88f8c8am3A0q5He/hkV9/S27pZx7zw/fJm4Uj3/J2aNPcjtus+voOlHLvvN6rTbNUP534+NqdoEtV3jk95LzZqe7bc6TH9vrax/ZKgDgpAHFUbU9bqd3MzngtnZovB0o5iiNIk/1pqttJ5fUc1OGSTj2GidVJo1om+Yp26uF2xJOSjjUQhiuKo2N7Odo0L4fTqxgAdl4RVay4JD1XPVlB1TRNU0N8fAhA3TQ1ca+6fnycpPXT09PTYzVXNU0N4dnj40OYCU1TQ3j2+PhQzdVNU89VD8+f1o/VQvv49PTisbmYjboLUFRLeFK3ZNXCqozqrhSIe0uXig4JyKqFblAdEmTVQhqcJiCrlklYa8kbXQeg3VvyatSncBSUcp74pGMGCLvJbhzVGHYzUNQI1GoLFB0CVJtJ72Z1UIdA6Ce9ZXVQrSBsFqqtdsBBV5BUoFafTjh1Mjxt1X3LfKu6CUVNtCf1agY6tQOiagkQDmoHlequAoqagbiw0x1QqcJBjUBRq5c15rwq6vYhTKK6g17HinhSp3ZAVPPCIQB0ag+ohwDQqgVgrlM7IM7tFrIaj9GmOa0AhF4d2oUCocs1Zwi5dCyUhcI0qmWuMI2nHNQaCKMWqDclcx49E/Sq7RHzp81XD3s1X1alyjS0LcvVw/6CwmQIF1A9bN31lxePOLJ62Lorp0ApZ2On2r60+KQlEm9AfNJNJJ926nFlkl9WUnu4mnBMUhNc1m7SvaQw6BiuI0zaI2q1cA5tmrMFp/VLimrhOtip/RFZzWfSs+VJ4QK2k/YKkmo9U+2rlbqarF5SnOzDpFPdVXPb0zbqC0Kt+gDdoD4tDGHSzgV1qCatugUqdQsUdYhA3O7I6lBBp5qOgVKWwrPHYeKwfny+V+0D1E+q69eqSfVcHV4LRKeZ3tldParbtlqr7p8Rng3qviarDs8IzwbVh1A9qr4WCDvV7dPWXSCMqk/DrlV9Ho45NnrsrpRVCgDF+TzJzkZoD3qIkEfddVAXXZGdJzpbcJ7ofMzORiDtVA8JoC7qIcNq1BU3MQRuYIgxsBhixWwdOFKb5mpekaqv70Ap987rvdo0947eN6UU410Dq1zdOXduehbunMGatG/vl9YDdD7dL8QWwljC/TJbcbc+DzNAuE+yu4UH23skjMaF7FDdIdQdy33P3dkGTm7vi0e34ZToNt4RYTRz0sF8L7wWoY2cHjpgv25fbSEQBvecv9UNZM2QNUPWDFkzZM2QNUPWDFkzZM2QNUPWDFkzZM2QNUPWDFkzZM2QNUPWDFkzZI2wO3ThfNRd+4proeJEAFZQOCDUAAAAEBIAnQEqoACgAD5dII1Fo6IhHE/kADgFxLS3boU2r4A/gH4AfoB+fvf4VI+XdnV4I6s1I3cMMQlYpZuFbrpR7Y0DmEoGMmuxORRBSc1R2D4p91vYyRe6hVo1CM/iYrfHGXnCD4uSe6RJCBW+QT1f6lkjyRRPd5LV/E64n65OKGfARxDyCPV/yAZPf8WoF0F2JcpvBHVsqVgwAPmvfnd+qoV9/zoT/Zcg6fnFM3/HYM5/c04yvnT539pK///5c0X/hhVL5x9PnWh+cUFB87v1SjKAAAA="
      />
    `}};fu.styles=[ot(ft),ze`
      /* layer: preflights */
*,::before,::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
*,::before,::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
[type='text'], [type='email'], [type='url'], [type='password'], [type='number'], [type='date'], [type='datetime-local'], [type='month'], [type='search'], [type='tel'], [type='time'], [type='week'], [multiple], textarea, select { appearance: none;
background-color: #fff;
border-color: #6b7280;
border-width: 1px;
border-radius: 0;
padding-top: 0.5rem;
padding-right: 0.75rem;
padding-bottom: 0.5rem;
padding-left: 0.75rem;
font-size: 1rem;
line-height: 1.5rem;
--un-shadow: 0 0 #0000; }
[type='text']:focus, [type='email']:focus, [type='url']:focus, [type='password']:focus, [type='number']:focus, [type='date']:focus, [type='datetime-local']:focus, [type='month']:focus, [type='search']:focus, [type='tel']:focus, [type='time']:focus, [type='week']:focus, [multiple]:focus, textarea:focus, select:focus { outline: 2px solid transparent;
outline-offset: 2px;
--un-ring-inset: var(--un-empty,/*!*/ /*!*/);
--un-ring-offset-width: 0px;
--un-ring-offset-color: #fff;
--un-ring-color: #2563eb;
--un-ring-offset-shadow: var(--un-ring-inset) 0 0 0 var(--un-ring-offset-width) var(--un-ring-offset-color);
--un-ring-shadow: var(--un-ring-inset) 0 0 0 calc(1px + var(--un-ring-offset-width)) var(--un-ring-color);
box-shadow: var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow);
border-color: #2563eb; }
input::placeholder, textarea::placeholder { color: #6b7280;
opacity: 1; }
::-webkit-datetime-edit-fields-wrapper { padding: 0; }
::-webkit-date-and-time-value { min-height: 1.5em; }
::-webkit-datetime-edit, ::-webkit-datetime-edit-year-field, ::-webkit-datetime-edit-month-field, ::-webkit-datetime-edit-day-field, ::-webkit-datetime-edit-hour-field, ::-webkit-datetime-edit-minute-field, ::-webkit-datetime-edit-second-field, ::-webkit-datetime-edit-millisecond-field, ::-webkit-datetime-edit-meridiem-field { padding-top: 0;
padding-bottom: 0; }
select { background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
background-position: right 0.5rem center;
background-repeat: no-repeat;
background-size: 1.5em 1.5em;
padding-right: 2.5rem;
print-color-adjust: exact; }
[multiple] { background-image: initial;
background-position: initial;
background-repeat: unset;
background-size: initial;
padding-right: 0.75rem;
print-color-adjust: unset; }
[type='checkbox'], [type='radio'] { appearance: none;
padding: 0;
print-color-adjust: exact;
display: inline-block;
vertical-align: middle;
background-origin: border-box;
user-select: none;
flex-shrink: 0;
height: 1rem;
width: 1rem;
color: #2563eb;
background-color: #fff;
border-color: #6b7280;
border-width: 1px;
--un-shadow: 0 0 #0000; }
[type='checkbox'] { border-radius: 0; }
[type='radio'] { border-radius: 100%; }
[type='checkbox']:focus, [type='radio']:focus { outline: 2px solid transparent;
outline-offset: 2px;
--un-ring-inset: var(--un-empty,/*!*/ /*!*/);
--un-ring-offset-width: 2px;
--un-ring-offset-color: #fff;
--un-ring-color: #2563eb;
--un-ring-offset-shadow: var(--un-ring-inset) 0 0 0 var(--un-ring-offset-width) var(--un-ring-offset-color);
--un-ring-shadow: var(--un-ring-inset) 0 0 0 calc(2px + var(--un-ring-offset-width)) var(--un-ring-color);
box-shadow: var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow); }
[type='checkbox']:checked, [type='radio']:checked { border-color: transparent;
background-color: currentColor;
background-size: 100% 100%;
background-position: center;
background-repeat: no-repeat; }
[type='checkbox']:checked { background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e"); }
[type='radio']:checked { background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e"); }
[type='checkbox']:checked:hover, [type='checkbox']:checked:focus, [type='radio']:checked:hover, [type='radio']:checked:focus { border-color: transparent;
background-color: currentColor; }
[type='checkbox']:indeterminate { background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 16 16'%3e%3cpath stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 8h8'/%3e%3c/svg%3e");
border-color: transparent;
background-color: currentColor;
background-size: 100% 100%;
background-position: center;
background-repeat: no-repeat; }
[type='checkbox']:indeterminate:hover, [type='checkbox']:indeterminate:focus { border-color: transparent;
background-color: currentColor; }
[type='file'] { background: unset;
border-color: inherit;
border-width: 0;
border-radius: 0;
padding: 0;
font-size: unset;
line-height: inherit; }
[type='file']:focus { outline: 1px solid ButtonText , 1px auto -webkit-focus-ring-color; }
*,::before,::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: default */
.static{position:static;}
.block{display:block;}
.h-auto{height:auto;}
.w-full{width:100%;};
    `];fu=j8([re("mw-icon-eb-dotted")],fu);var B8=Object.defineProperty,N8=Object.getOwnPropertyDescriptor,ht=(e,t,n,r)=>{for(var o=r>1?void 0:r?N8(t,n):t,i=e.length-1,a;i>=0;i--)(a=e[i])&&(o=(r?a(t,n,o):a(o))||o);return r&&o&&B8(t,n,o),o};let Ke=class extends X{constructor(){super(...arguments),this.assetsUrl="",this.label="Word",this.id="",this.link="javascript:void(0);",this.utm="",this.parameters="",this.img="",this.rightJustified=!1,this.icon="",this.type="",this.external=!1,this.classes="text-white",this.inlineStyles=""}getIcon(e){return F`
      ${xf(e,[["up",()=>F`<mw-icon-chevron-up
              class="flex items-center"
            ></mw-icon-chevron-up>`],["down",()=>F`<mw-icon-chevron-down
              class="flex items-center"
            ></mw-icon-chevron-down>`],["right",()=>F`<mw-icon-chevron-right
              class="flex items-center"
            ></mw-icon-chevron-right>`],["out",()=>F`<mw-icon-link-out
              class="flex items-center"
            ></mw-icon-link-out>`],["new",()=>F`<mw-icon-new-badge
              class="flex items-center"
            ></mw-icon-new-badge>`]])}
    `}getImg(e){return F`
      ${he(e,()=>F`<img
            part="img"
            class=""
            src="${this.assetsUrl+(typeof e=="string"?e:e.filename_disk)}"
            width="28"
            height="28"
            alt=""
          /> `)}
    `}getLink(){if(this.parameters){if(this.link&&location.href.indexOf(this.link)===0)return location.href+(location.href.includes("?")?"&":"?")+this.parameters.replace("?","").replace("&","");if(this.link)return this.link+this.parameters}else return this.link?this.link+(this.utm?(this.link&&this.link.includes("?")?"&":"?")+this.utm.replace("?","").replace("&",""):""):"javascript:void(0);"}render(){return F`
      ${he(this.type=="hr",()=>F`
          <div part="hr" class="">
            <hr class="h-px border-0 bg-[#265667] my-2" />
          </div>
        `,()=>he(this.type=="title",()=>F`<mw-headings-collection
                part="menu-title"
                label="${this.label}"
                tag="menu-title"
              ></mw-headings-collection>`,()=>F` <div
                part="title"
                class="flex w-full font-['Open_Sans']
              ${this.classes}
              "
                style="${this.inlineStyles}"
              >
                <a
                  part="menu-link"
                  id="${this.id}"
                  href="${this.getLink()}"
                  class="p-1 gap-2 flex flex-row items-center w-full
                  ${this.type=="heading"?"justify-between":""}
                  ${this.rightJustified?"justify-end":""}
                  "
                  target="${this.external&&!this.parameters?"_blank":"_top"}"
                  rel="external"
                >
                  <span
                    part="heading-container"
                    class="flex gap-2 self-start items-center"
                  >
                    ${he(!this.rightJustified,()=>this.getImg(this.img))}
                    ${he(this.type=="",()=>F`<span>${this.label}</span>`,()=>F`<mw-headings-collection
                          part="menu-heading"
                          label="${this.label}"
                          tag="menu-heading"
                        ></mw-headings-collection>`)}
                  </span>

                  <span part="icon" class="flex items-center">
                    ${he(this.rightJustified,()=>this.getImg(this.img),()=>this.getIcon(this.icon))}
                  </span>
                </a>
              </div>`))}
    `}};Ke.styles=[ot(ft),ze`
      /* layer: preflights */
*,::before,::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
*,::before,::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
[type='text'], [type='email'], [type='url'], [type='password'], [type='number'], [type='date'], [type='datetime-local'], [type='month'], [type='search'], [type='tel'], [type='time'], [type='week'], [multiple], textarea, select { appearance: none;
background-color: #fff;
border-color: #6b7280;
border-width: 1px;
border-radius: 0;
padding-top: 0.5rem;
padding-right: 0.75rem;
padding-bottom: 0.5rem;
padding-left: 0.75rem;
font-size: 1rem;
line-height: 1.5rem;
--un-shadow: 0 0 #0000; }
[type='text']:focus, [type='email']:focus, [type='url']:focus, [type='password']:focus, [type='number']:focus, [type='date']:focus, [type='datetime-local']:focus, [type='month']:focus, [type='search']:focus, [type='tel']:focus, [type='time']:focus, [type='week']:focus, [multiple]:focus, textarea:focus, select:focus { outline: 2px solid transparent;
outline-offset: 2px;
--un-ring-inset: var(--un-empty,/*!*/ /*!*/);
--un-ring-offset-width: 0px;
--un-ring-offset-color: #fff;
--un-ring-color: #2563eb;
--un-ring-offset-shadow: var(--un-ring-inset) 0 0 0 var(--un-ring-offset-width) var(--un-ring-offset-color);
--un-ring-shadow: var(--un-ring-inset) 0 0 0 calc(1px + var(--un-ring-offset-width)) var(--un-ring-color);
box-shadow: var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow);
border-color: #2563eb; }
input::placeholder, textarea::placeholder { color: #6b7280;
opacity: 1; }
::-webkit-datetime-edit-fields-wrapper { padding: 0; }
::-webkit-date-and-time-value { min-height: 1.5em; }
::-webkit-datetime-edit, ::-webkit-datetime-edit-year-field, ::-webkit-datetime-edit-month-field, ::-webkit-datetime-edit-day-field, ::-webkit-datetime-edit-hour-field, ::-webkit-datetime-edit-minute-field, ::-webkit-datetime-edit-second-field, ::-webkit-datetime-edit-millisecond-field, ::-webkit-datetime-edit-meridiem-field { padding-top: 0;
padding-bottom: 0; }
select { background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
background-position: right 0.5rem center;
background-repeat: no-repeat;
background-size: 1.5em 1.5em;
padding-right: 2.5rem;
print-color-adjust: exact; }
[multiple] { background-image: initial;
background-position: initial;
background-repeat: unset;
background-size: initial;
padding-right: 0.75rem;
print-color-adjust: unset; }
[type='checkbox'], [type='radio'] { appearance: none;
padding: 0;
print-color-adjust: exact;
display: inline-block;
vertical-align: middle;
background-origin: border-box;
user-select: none;
flex-shrink: 0;
height: 1rem;
width: 1rem;
color: #2563eb;
background-color: #fff;
border-color: #6b7280;
border-width: 1px;
--un-shadow: 0 0 #0000; }
[type='checkbox'] { border-radius: 0; }
[type='radio'] { border-radius: 100%; }
[type='checkbox']:focus, [type='radio']:focus { outline: 2px solid transparent;
outline-offset: 2px;
--un-ring-inset: var(--un-empty,/*!*/ /*!*/);
--un-ring-offset-width: 2px;
--un-ring-offset-color: #fff;
--un-ring-color: #2563eb;
--un-ring-offset-shadow: var(--un-ring-inset) 0 0 0 var(--un-ring-offset-width) var(--un-ring-offset-color);
--un-ring-shadow: var(--un-ring-inset) 0 0 0 calc(2px + var(--un-ring-offset-width)) var(--un-ring-color);
box-shadow: var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow); }
[type='checkbox']:checked, [type='radio']:checked { border-color: transparent;
background-color: currentColor;
background-size: 100% 100%;
background-position: center;
background-repeat: no-repeat; }
[type='checkbox']:checked { background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e"); }
[type='radio']:checked { background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e"); }
[type='checkbox']:checked:hover, [type='checkbox']:checked:focus, [type='radio']:checked:hover, [type='radio']:checked:focus { border-color: transparent;
background-color: currentColor; }
[type='checkbox']:indeterminate { background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 16 16'%3e%3cpath stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 8h8'/%3e%3c/svg%3e");
border-color: transparent;
background-color: currentColor;
background-size: 100% 100%;
background-position: center;
background-repeat: no-repeat; }
[type='checkbox']:indeterminate:hover, [type='checkbox']:indeterminate:focus { border-color: transparent;
background-color: currentColor; }
[type='file'] { background: unset;
border-color: inherit;
border-width: 0;
border-radius: 0;
padding: 0;
font-size: unset;
line-height: inherit; }
[type='file']:focus { outline: 1px solid ButtonText , 1px auto -webkit-focus-ring-color; }
*,::before,::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: shortcuts */
.container{width:100%;}
@media (min-width: 640px){
.container{max-width:640px;}
}
@media (min-width: 768px){
.container{max-width:768px;}
}
@media (min-width: 1024px){
.container{max-width:1024px;}
}
@media (min-width: 1280px){
.container{max-width:1280px;}
}
@media (min-width: 1536px){
.container{max-width:1536px;}
}
/* layer: default */
.static{position:static;}
.my-2{margin-top:8px;margin-bottom:8px;}
.h-px{height:1px;}
.w-full{width:100%;}
.flex{display:flex;}
.flex-row{flex-direction:row;}
.items-center{align-items:center;}
.self-start{align-self:flex-start;}
.justify-end{justify-content:flex-end;}
.justify-between{justify-content:space-between;}
.gap-2{gap:8px;}
.border-0{border-width:0px;}
.bg-\\[\\#265667\\]{--un-bg-opacity:1;background-color:rgb(38 86 103 / var(--un-bg-opacity)) /* #265667 */;}
.p-1{padding:4px;}
.text-white{--un-text-opacity:1;color:rgb(255 255 255 / var(--un-text-opacity)) /* #fff */;}
.font-\\[\\'Open_Sans\\'\\]{font-family:'Open Sans';};
    `];ht([R({type:String})],Ke.prototype,"assetsUrl",2);ht([R({type:String})],Ke.prototype,"label",2);ht([R({type:String})],Ke.prototype,"id",2);ht([R({type:String})],Ke.prototype,"link",2);ht([R({type:String})],Ke.prototype,"utm",2);ht([R({type:String})],Ke.prototype,"parameters",2);ht([R({type:String})],Ke.prototype,"img",2);ht([R({type:Boolean})],Ke.prototype,"rightJustified",2);ht([R({type:String})],Ke.prototype,"icon",2);ht([R({type:String})],Ke.prototype,"type",2);ht([R({type:Boolean})],Ke.prototype,"external",2);ht([R({type:String})],Ke.prototype,"classes",2);ht([R({type:String})],Ke.prototype,"inlineStyles",2);Ke=ht([re("mw-menu-item")],Ke);var H8=Object.defineProperty,V8=Object.getOwnPropertyDescriptor,sn=(e,t,n,r)=>{for(var o=r>1?void 0:r?V8(t,n):t,i=e.length-1,a;i>=0;i--)(a=e[i])&&(o=(r?a(t,n,o):a(o))||o);return r&&o&&H8(t,n,o),o};let Mt=class extends X{constructor(){super(...arguments),this.menuData=[],this.offset=55,this.showClose=!1,this.menuOpen=!1,this.menuEBOpen=!1,this.menuCategoryOpen=!1,this.menuFeatureOpen=!1,this.menuMoreFromOpen=!1}_closeMenu(){let e=new CustomEvent("mw-toggle-games-menu",{detail:{message:"clicked close games menu"},bubbles:!0,composed:!0});this.dispatchEvent(e)}renderArrows(e){return e?F`<mw-icon-chevron-down
        part="arrow down"
        color="currentColor"
        size="sm"
        class="inline-block text-center h-[24px] w-[24px]"
      ></mw-icon-chevron-down>`:F`<mw-icon-chevron-right
        part="arrow right"
        color="currentColor"
        class="inline-block text-center h-[24px] w-[24px]"
      ></mw-icon-chevron-right>`}formatID(e){if(typeof e=="string")return e.toLowerCase().replace(/[^a-zA-Z0-9]+/g,"-")}render(){return F`
      ${he(this.menuOpen,()=>F`
          <div
            part="games-nav-backdrop"
            class="games-nav-backdrop fixed w-full h-screen h-full left-[0] z-[1040]"
            style="
            height: calc(100% - ${this.offset}px);
            top: ${this.offset}px;
            "
          >
            <div
              part="games-nav-container"
              class="max-w-[1140px] xl:max-w-[1366px] mx-auto h-full relative "
            >
              <div
                part="games-nav-bg-close"
                class="w-full h-full top-[0] left-[0] z-[1000] fixed"
                @click="${this._closeMenu}"
              ></div>
              <div
                part="games-nav-menu-container"
                class="
                  games-nav-menu-container
                  flex justify-end
                  relative
                  h-full
                  overflow-y-scroll
                  bg-[#071c2e]
                  pb-20
                  z-[1040]
                "
              >
                <div
                  part="games-nav-menu"
                  class="games-nav-menu text-white h-full py-5 px-3"
                >
                  ${he(this.showClose,()=>F`
                      <div
                        class="w-full h-[45px] w-[35px] flex justify-end absolute right-[10px] top-[10px]
                        "
                      >
                        <button part="nav-close" @click="${this._closeMenu}">
                          <mw-icon-close></mw-icon-close>
                        </button>
                      </div>
                    `)}
                  ${he(this.menuData.hasOwnProperty("games"),()=>F`
                      <div
                        part="games-category-label"
                        class="games-category-label font-serif text-[#BFD1FF] mb-1 px-1"
                      >
                        Games
                      </div>
                    `)}
                  <ul part="qa-eb-games" class="p-0 m-0 qa-eb-games">
                    ${he(this.menuData.hasOwnProperty("games"),()=>{var e;return F`
                        ${(e=this.menuData)==null?void 0:e.games.map((t,n)=>F`<li class="w-full" key="${n}">
                              <mw-menu-item
                                class="block @hover:bg-[#0E3F70] @hover:shadow w-full p-1 rounded"
                                id="gtm-gamesnav-link-${this.formatID(t.title)}"
                                label="${t.title}"
                                link="${t.url}"
                                img="${t.image.fullUrl}"
                                inlineStyles="font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, Segoe UI, Roboto, Arial, sans-serif;"
                              ></mw-menu-item>
                            </li>`)}
                      `})}
                  </ul>

                  <hr class="border-0 h-px pt-0.5 bg-black my-4" />
                  ${he(this.menuData.hasOwnProperty("britannicaQuizzes"),()=>F`
                      <div
                        part="games-category-label"
                        class="games-category-label font-serif text-[#BFD1FF] mb-2 px-1"
                      >
                        Britannica Quizzes
                      </div>
                    `)}
                  <ul part="qa-eb-quizzes" class="p-0 m-0 qa-eb-quizzes">
                    ${he(this.menuData.hasOwnProperty("britannicaQuizzes"),()=>{var e;return F`
                        ${(e=this.menuData)==null?void 0:e.britannicaQuizzes.map((t,n)=>F`<li class="w-full" key="${n}">
                              <mw-menu-item
                                class="block @hover:bg-[#0E3F70] @hover:shadow w-full p-1 rounded leading-5"
                                id="gtm-gamesnav-link-${this.formatID(t.title)}"
                                label="${t.title}"
                                link="${t.url}"
                                img="${t.image.fullUrl}"
                                inlineStyles="font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, Segoe UI, Roboto, Arial, sans-serif;"
                              ></mw-menu-item>
                            </li>`)}
                      `})}

                    <li class="my-2">
                      <mw-menu-item
                        class="block @hover:bg-[#0E3F70] @hover:shadow w-full px-1 py-1 rounded"
                        id="gtm-gamesnav-link-${this.formatID("All Britannica Quizzes")}"
                        label="All Britannica Quizzes"
                        link="/quiz/browse#recent-quizzes"
                        img=""
                        icon="right"
                        inlineStyles="font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, Segoe UI, Roboto, Arial, sans-serif;"
                      ></mw-menu-item>
                    </li>
                    <li class="my-2">
                      <mw-menu-item
                        class="block @hover:bg-[#0E3F70] @hover:shadow w-full px-1 py-1 rounded games-nav-link games-nav-link-all-quizzes"
                        id="gtm-gamesnav-link-${this.formatID("Merriam-Webster Quizzes")}"
                        label="Merriam-Webster Quizzes"
                        link="https://www.merriam-webster.com/games/see-all"
                        img=""
                        icon="right"
                        inlineStyles="font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, Segoe UI, Roboto, Arial, sans-serif;"
                      ></mw-menu-item>
                    </li>
                  </ul>

                  <div
                    part="games-link-logo-container"
                    class="flex games-link-logo-container justify-start md:justify-center mt-5 mb-7 gap-5"
                  >
                    <a
                      class="block h-[80px] w-[80px]"
                      href="/"
                      title="Encyclopedia Britannica"
                      id="gtm-gamesnav-link-${this.formatID("EB Logo")}"
                    >
                      <mw-icon-eb-dotted
                        part="games-link-logo"
                        class="games-link-logo"
                      ></mw-icon-eb-dotted>
                    </a>
                    <a
                      href="https://www.merriam-webster.com"
                      title="Merriam Webster - established 1828"
                      class="h-[80px] w-[80px] block"
                      id="gtm-gamesnav-link-${this.formatID("MW Logo")}"
                    >
                      <mw-icon-mw-logo-white
                        part="games-link-logo games-mw-logo"
                        class="games-link-logo games-mw-logo"
                        size="lg"
                      ></mw-icon-mw-logo-white>
                    </a>
                  </div>

                  <hr class="bg-[#BFD1FF] pt-0.5 border-0 h-px mt-5 mb-3" />

                  <div class="pb-20">
                    <button
                      label="Britannica Menu"
                      part="games-nav-britannica-menu-toggle"
                      class="games-nav-britannica-menu-toggle games-category-label
                      font-serif
                      text-[#BFD1FF]
                      m-0 p-0 content-start
                      w-full text-left
                      "
                      @click="${{handleEvent:e=>{e.stopPropagation(),this.menuEBOpen=!this.menuEBOpen}}}"
                    >
                      ${this.renderArrows(this.menuEBOpen)}
                      <span>Britannica Menu</span>
                    </button>

                    ${he(this.menuEBOpen,()=>F`
                        <div class="mt-3 ml-1.5">
                          ${he(this.menuData.hasOwnProperty("britannicaMenu1"),()=>{var e;return F`
                              <ul class="list-unstyled m-0">
                                ${(e=this.menuData.britannicaMenu1)==null?void 0:e.map((t,n)=>F`
                                    <li
                                      part="games-nav-link"
                                      class="games-nav-link rounded-sm mb-1 p-1"
                                      key=${n}
                                    >
                                      <a
                                        class="block @hover:bg-[#0E3F70] @hover:shadow w-full px-1 py-1 rounded"
                                        href="${t.url}"
                                        id="gtm-gamesnav-link-${this.formatID(t.title)}"
                                      >
                                        ${t.title}
                                      </a>
                                    </li>
                                  `)}
                              </ul>
                            `})}
                          ${he(this.menuData.hasOwnProperty("britannicaMenu2"),()=>{var e;return F`
                              <ul class="list-unstyled mt-5">
                                ${(e=this.menuData.britannicaMenu2)==null?void 0:e.map((t,n)=>F`
                                    <li
                                      part="games-nav-link"
                                      class="games-nav-link rounded-sm mb-1 p-1"
                                      key=${n}
                                    >
                                      <a
                                        class="block @hover:bg-[#0E3F70] @hover:shadow w-full px-1 py-1 rounded"
                                        href="${t.url}"
                                        id="gtm-gamesnav-link-${this.formatID(t.title)}"
                                      >
                                        ${t.title}
                                      </a>
                                    </li>
                                  `)}
                              </ul>
                            `})}

                          <button
                            label="Browse By Category"
                            class="
                              block games-category-label mt-5 m-0 p-0 content-start border-0
                              font-serif
                              text-[#BFD1FF]
                              w-full text-left
                            "
                            @click="${{handleEvent:e=>{e.stopPropagation(),this.menuCategoryOpen=!this.menuCategoryOpen}}}"
                          >
                            ${this.renderArrows(this.menuCategoryOpen)} Browse
                            By Category
                          </button>

                          ${he(this.menuCategoryOpen,()=>F`
                              <div class="mt-3 ml-1.5">
                                <ul class="list-unstyled m-0">
                                  ${he(this.menuData.hasOwnProperty("browseByCategory")&&this.menuData.browseByCategory.length>0,()=>{var e;return F`${(e=this.menuData.browseByCategory)==null?void 0:e.map((t,n)=>{var r,o,i;return F`
                                          <li
                                            class="games-nav-link-label rounded-sm mb-1 mt-3 p-1"
                                            key=${n}
                                          >
                                            <a
                                              class="games-category-label text-xs text-[#BFD1FF]"
                                              href="${(r=t==null?void 0:t.title)==null?void 0:r.url}"
                                              id="gtm-gamesnav-link-${this.formatID((o=t==null?void 0:t.title)==null?void 0:o.title)}"
                                            >
                                              ${(i=t==null?void 0:t.title)==null?void 0:i.title}
                                            </a>
                                          </li>

                                          ${t==null?void 0:t.links.map((a,s)=>F`
                                              <li
                                                class="games-nav-link rounded-sm mb-1"
                                                key=${s}
                                              >
                                                <a
                                                  class="games-category-label text-base block @hover:bg-[#0E3F70] @hover:shadow w-full px-1 py-1 rounded"
                                                  href="${a==null?void 0:a.url}"
                                                  id="gtm-gamesnav-link-${this.formatID(a==null?void 0:a.title)}"
                                                >
                                                  ${a==null?void 0:a.title}
                                                </a>
                                              </li>
                                            `)}
                                        `})} `})}
                                </ul>
                              </div>
                            `)}
                          <button
                            label="Browse By Feature"
                            class="
                              block games-category-label serif mt-5 m-0 p-0 content-start border-0
                              font-serif
                              text-[#BFD1FF]
                              w-full text-left
                            "
                            @click="${{handleEvent:e=>{e.stopPropagation(),this.menuFeatureOpen=!this.menuFeatureOpen}}}"
                          >
                            ${this.renderArrows(this.menuFeatureOpen)} Browse By
                            Feature
                          </button>

                          ${he(this.menuFeatureOpen,()=>F`
                              <div class="mt-3 ml-1.5">
                                <ul class="list-unstyled m-0">
                                  ${he(this.menuData.hasOwnProperty("browseByFeature")&&this.menuData.browseByFeature.length>0,()=>{var e;return F`
                                      ${(e=this.menuData.browseByFeature)==null?void 0:e.map((t,n)=>F`
                                          <li
                                            class="games-nav-link rounded-sm mb-1"
                                            key="${n}"
                                          >
                                            <a
                                              href="${t.url}"
                                              target="${t.newTab?"_blank":"_top"}"
                                              class="flex items-self-center items-center block @hover:bg-[#0E3F70] @hover:shadow w-full px-1 py-1 rounded"
                                              id="gtm-gamesnav-link-${this.formatID(t==null?void 0:t.title)}"
                                            >
                                              ${t==null?void 0:t.title}
                                              ${he(t.newTab,()=>F`<mw-icon-link-out
                                                    class="ml-1 pt-1"
                                                  ></mw-icon-link-out>`)}
                                            </a>
                                          </li>
                                        `)}
                                    `})}
                                </ul>
                              </div>
                            `)}

                          <button
                            label="More From Britannica"
                            class="
                              block games-category-label font-serif mt-5 m-0 p-0 content-start border-0
                              font-serif
                              text-[#BFD1FF]
                              w-full text-left
                            "
                            @click="${{handleEvent:e=>{e.stopPropagation(),this.menuMoreFromOpen=!this.menuMoreFromOpen}}}"
                          >
                            ${this.renderArrows(this.menuMoreFromOpen)} More
                            From Britannica
                          </button>

                          ${he(this.menuMoreFromOpen,()=>F`
                              <div class="mt-3 ml-1.5">
                                <ul class="list-unstyled m-0">
                                  ${he(this.menuData.hasOwnProperty("moreFromBritannica")&&this.menuData.moreFromBritannica.length>0,()=>{var e;return F`
                                      ${(e=this.menuData.moreFromBritannica)==null?void 0:e.map((t,n)=>F`
                                          <li
                                            class="games-nav-link rounded-sm"
                                            key="${n}"
                                          >
                                            <a
                                              href="${t.url}"
                                              target="${t.newTab?"_blank":"_top"}"
                                              class="flex items-self-center items-center block @hover:bg-[#0E3F70] @hover:shadow w-full px-1 py-0.5 rounded"
                                              id="gtm-gamesnav-link-${this.formatID(t==null?void 0:t.title)}"
                                            >
                                              ${t==null?void 0:t.title}
                                              ${he(t==null?void 0:t.newTab,()=>F`<mw-icon-link-out
                                                    class="ml-1 pt-0.5"
                                                  ></mw-icon-link-out>`)}
                                            </a>
                                          </li>
                                        `)}
                                    `})}
                                </ul>
                              </div>
                            `)}
                        </div>
                      `)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        `)}
    `}};Mt.styles=[ot(ft),ze`
      /* layer: preflights */
*,::before,::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
*,::before,::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
[type='text'], [type='email'], [type='url'], [type='password'], [type='number'], [type='date'], [type='datetime-local'], [type='month'], [type='search'], [type='tel'], [type='time'], [type='week'], [multiple], textarea, select { appearance: none;
background-color: #fff;
border-color: #6b7280;
border-width: 1px;
border-radius: 0;
padding-top: 0.5rem;
padding-right: 0.75rem;
padding-bottom: 0.5rem;
padding-left: 0.75rem;
font-size: 1rem;
line-height: 1.5rem;
--un-shadow: 0 0 #0000; }
[type='text']:focus, [type='email']:focus, [type='url']:focus, [type='password']:focus, [type='number']:focus, [type='date']:focus, [type='datetime-local']:focus, [type='month']:focus, [type='search']:focus, [type='tel']:focus, [type='time']:focus, [type='week']:focus, [multiple]:focus, textarea:focus, select:focus { outline: 2px solid transparent;
outline-offset: 2px;
--un-ring-inset: var(--un-empty,/*!*/ /*!*/);
--un-ring-offset-width: 0px;
--un-ring-offset-color: #fff;
--un-ring-color: #2563eb;
--un-ring-offset-shadow: var(--un-ring-inset) 0 0 0 var(--un-ring-offset-width) var(--un-ring-offset-color);
--un-ring-shadow: var(--un-ring-inset) 0 0 0 calc(1px + var(--un-ring-offset-width)) var(--un-ring-color);
box-shadow: var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow);
border-color: #2563eb; }
input::placeholder, textarea::placeholder { color: #6b7280;
opacity: 1; }
::-webkit-datetime-edit-fields-wrapper { padding: 0; }
::-webkit-date-and-time-value { min-height: 1.5em; }
::-webkit-datetime-edit, ::-webkit-datetime-edit-year-field, ::-webkit-datetime-edit-month-field, ::-webkit-datetime-edit-day-field, ::-webkit-datetime-edit-hour-field, ::-webkit-datetime-edit-minute-field, ::-webkit-datetime-edit-second-field, ::-webkit-datetime-edit-millisecond-field, ::-webkit-datetime-edit-meridiem-field { padding-top: 0;
padding-bottom: 0; }
select { background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
background-position: right 0.5rem center;
background-repeat: no-repeat;
background-size: 1.5em 1.5em;
padding-right: 2.5rem;
print-color-adjust: exact; }
[multiple] { background-image: initial;
background-position: initial;
background-repeat: unset;
background-size: initial;
padding-right: 0.75rem;
print-color-adjust: unset; }
[type='checkbox'], [type='radio'] { appearance: none;
padding: 0;
print-color-adjust: exact;
display: inline-block;
vertical-align: middle;
background-origin: border-box;
user-select: none;
flex-shrink: 0;
height: 1rem;
width: 1rem;
color: #2563eb;
background-color: #fff;
border-color: #6b7280;
border-width: 1px;
--un-shadow: 0 0 #0000; }
[type='checkbox'] { border-radius: 0; }
[type='radio'] { border-radius: 100%; }
[type='checkbox']:focus, [type='radio']:focus { outline: 2px solid transparent;
outline-offset: 2px;
--un-ring-inset: var(--un-empty,/*!*/ /*!*/);
--un-ring-offset-width: 2px;
--un-ring-offset-color: #fff;
--un-ring-color: #2563eb;
--un-ring-offset-shadow: var(--un-ring-inset) 0 0 0 var(--un-ring-offset-width) var(--un-ring-offset-color);
--un-ring-shadow: var(--un-ring-inset) 0 0 0 calc(2px + var(--un-ring-offset-width)) var(--un-ring-color);
box-shadow: var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow); }
[type='checkbox']:checked, [type='radio']:checked { border-color: transparent;
background-color: currentColor;
background-size: 100% 100%;
background-position: center;
background-repeat: no-repeat; }
[type='checkbox']:checked { background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e"); }
[type='radio']:checked { background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e"); }
[type='checkbox']:checked:hover, [type='checkbox']:checked:focus, [type='radio']:checked:hover, [type='radio']:checked:focus { border-color: transparent;
background-color: currentColor; }
[type='checkbox']:indeterminate { background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 16 16'%3e%3cpath stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 8h8'/%3e%3c/svg%3e");
border-color: transparent;
background-color: currentColor;
background-size: 100% 100%;
background-position: center;
background-repeat: no-repeat; }
[type='checkbox']:indeterminate:hover, [type='checkbox']:indeterminate:focus { border-color: transparent;
background-color: currentColor; }
[type='file'] { background: unset;
border-color: inherit;
border-width: 0;
border-radius: 0;
padding: 0;
font-size: unset;
line-height: inherit; }
[type='file']:focus { outline: 1px solid ButtonText , 1px auto -webkit-focus-ring-color; }
*,::before,::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: shortcuts */
.container{width:100%;}
@media (min-width: 640px){
.container{max-width:640px;}
}
@media (min-width: 768px){
.container{max-width:768px;}
}
@media (min-width: 1024px){
.container{max-width:1024px;}
}
@media (min-width: 1280px){
.container{max-width:1280px;}
}
@media (min-width: 1536px){
.container{max-width:1536px;}
}
/* layer: default */
.absolute{position:absolute;}
.fixed{position:fixed;}
.relative{position:relative;}
.static{position:static;}
.left-\\[0\\]{left:0;}
.right-\\[10px\\]{right:10px;}
.top-\\[0\\]{top:0;}
.top-\\[10px\\]{top:10px;}
.z-\\[1000\\]{z-index:1000;}
.z-\\[1040\\]{z-index:1040;}
.m-0{margin:0;}
.mx-auto{margin-left:auto;margin-right:auto;}
.my-2{margin-top:8px;margin-bottom:8px;}
.my-4{margin-top:16px;margin-bottom:16px;}
.mb-1{margin-bottom:4px;}
.mb-2{margin-bottom:8px;}
.mb-3{margin-bottom:12px;}
.mb-7{margin-bottom:28px;}
.ml-1{margin-left:4px;}
.ml-1\\.5{margin-left:6px;}
.mt-3{margin-top:12px;}
.mt-5{margin-top:20px;}
.block{display:block;}
.inline-block{display:inline-block;}
[size~="lg"]{width:512px;height:512px;}
[size~="sm"]{width:384px;height:384px;}
.h-\\[24px\\]{height:24px;}
.h-\\[45px\\]{height:45px;}
.h-\\[80px\\]{height:80px;}
.h-full{height:100%;}
.h-px{height:1px;}
.h-screen{height:100vh;}
.max-w-\\[1140px\\]{max-width:1140px;}
.w-\\[24px\\]{width:24px;}
.w-\\[35px\\]{width:35px;}
.w-\\[80px\\]{width:80px;}
.w-full{width:100%;}
.flex{display:flex;}
.content-start{align-content:flex-start;}
.items-center{align-items:center;}
.justify-start{justify-content:flex-start;}
.justify-end{justify-content:flex-end;}
.gap-5{gap:20px;}
.overflow-y-scroll{overflow-y:scroll;}
.border-0{border-width:0px;}
.rounded{border-radius:4px;}
.rounded-sm{border-radius:2px;}
.bg-\\[\\#071c2e\\]{--un-bg-opacity:1;background-color:rgb(7 28 46 / var(--un-bg-opacity)) /* #071c2e */;}
.bg-\\[\\#BFD1FF\\]{--un-bg-opacity:1;background-color:rgb(191 209 255 / var(--un-bg-opacity)) /* #BFD1FF */;}
.bg-black{--un-bg-opacity:1;background-color:rgb(0 0 0 / var(--un-bg-opacity)) /* #000 */;}
.p-0{padding:0;}
.p-1{padding:4px;}
.px{padding-left:16px;padding-right:16px;}
.px-1{padding-left:4px;padding-right:4px;}
.px-3{padding-left:12px;padding-right:12px;}
.py-0\\.5{padding-top:2px;padding-bottom:2px;}
.py-1{padding-top:4px;padding-bottom:4px;}
.py-5{padding-top:20px;padding-bottom:20px;}
.pb-20{padding-bottom:80px;}
.pt-0\\.5{padding-top:2px;}
.pt-1{padding-top:4px;}
.text-center{text-align:center;}
.text-left{text-align:left;}
.text-base{font-size:16px;line-height:24px;}
.text-xs{font-size:12px;line-height:16px;}
.text-\\[\\#BFD1FF\\]{--un-text-opacity:1;color:rgb(191 209 255 / var(--un-text-opacity)) /* #BFD1FF */;}
.text-white{--un-text-opacity:1;color:rgb(255 255 255 / var(--un-text-opacity)) /* #fff */;}
.leading-5{line-height:20px;}
.font-serif{font-family:ui-serif,Georgia,Cambria,"Times New Roman",Times,serif;}
@media (hover: hover) and (pointer: fine){
.\\@hover\\:bg-\\[\\#0E3F70\\]:hover{--un-bg-opacity:1;background-color:rgb(14 63 112 / var(--un-bg-opacity)) /* #0E3F70 */;}
.\\@hover\\:shadow:hover{--un-shadow:var(--un-shadow-inset) 0 1px 3px 0 var(--un-shadow-color, rgb(0 0 0 / 0.1)),var(--un-shadow-inset) 0 1px 2px -1px var(--un-shadow-color, rgb(0 0 0 / 0.1));box-shadow:var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow);}
}
@media (min-width: 768px){
.md\\:justify-center{justify-content:center;}
}
@media (min-width: 1280px){
.xl\\:max-w-\\[1366px\\]{max-width:1366px;}
};
    `,ze`
      :host {
        --container-white-space: calc((100vw - 100%) / 2);
        --thumb-color: #ffffff;
        --track-color: color-mix(in srgb, #ffffff, transparent 75%);
        --track-width: 5px;
        --global-nav-height: 55px;
        --games-nav-menu-container-width: 260px;
        font-family: -apple-system, 'system-ui', 'Helvetica Neue', 'Segoe UI',
          Roboto, Arial, sans-serif;
        font-size: 16px;
      }
      @media (max-width: 768px) {
        :host {
          --games-nav-menu-container-width: 100vw;
        }
      }
      ::selection {
        background-color: #14599d;
        color: #ffffff;
      }
      .games-nav-backdrop {
        background-color: color-mix(in srgb, #000000, transparent 50%);
      }
      .games-nav-menu-container {
        scrollbar-color: var(--thumb-color)
          var(--track-color, color-mix(in srgb, transparent 75%));
        scrollbar-width: thin;
        scrollbar-gutter: stable;
        width: calc(
          var(--container-white-space) + var(--games-nav-menu-container-width)
        );
        margin-left: calc(-1 * var(--container-white-space));
      }

      .games-nav-menu {
        width: var(--games-nav-menu-container-width);
      }

      .font-serif {
        font-family: Georgia, serif;
        font-size: 16px;
        font-weight: 600;
      }
    `];sn([R({type:String})],Mt.prototype,"menuData",2);sn([R({type:Number})],Mt.prototype,"offset",2);sn([R({type:Boolean})],Mt.prototype,"showClose",2);sn([R({type:Boolean,reflect:!0})],Mt.prototype,"menuOpen",2);sn([Dt()],Mt.prototype,"menuEBOpen",2);sn([Dt()],Mt.prototype,"menuCategoryOpen",2);sn([Dt()],Mt.prototype,"menuFeatureOpen",2);sn([Dt()],Mt.prototype,"menuMoreFromOpen",2);Mt=sn([re("mw-menu-games-eb-component")],Mt);var q8=Object.defineProperty,Z8=Object.getOwnPropertyDescriptor,Ln=(e,t,n,r)=>{for(var o=r>1?void 0:r?Z8(t,n):t,i=e.length-1,a;i>=0;i--)(a=e[i])&&(o=(r?a(t,n,o):a(o))||o);return r&&o&&q8(t,n,o),o};let Gt=class extends X{constructor(){super(...arguments),this.menuData=[],this.apiUrl="",this.cacheLifeTime=Pr,this.offset=55,this.showInitial=!1,this.showClose=!1,this.menuOpen=!1,this._exportparts="arrow, right, down, games-nav-backdrop, games-nav-container, games-nav-bg-close, games-nav-menu-container, games-nav-menu, nav-close, games-category-label, qa-eb-games, games-link-logo-container",this._handleEsc=e=>{if((e.key==="Escape"||e.key==="Esc")&&this.menuOpen){let t=new CustomEvent("mw-toggle-games-menu",{detail:{message:"Toggled games menu."},bubbles:!0,composed:!0});console.debug("Toggled games menu."),this.dispatchEvent(t)}},this._handleToggleMenu=()=>{this.menuOpen=!this.menuOpen}}connectedCallback(){super.connectedCallback(),this.menuCMS=new F8(this,this.apiUrl,this.menuData,this.cacheLifeTime),window.addEventListener("mw-toggle-games-menu",this._handleToggleMenu),window.addEventListener("keydown",this._handleEsc)}disconnectedCallback(){window.removeEventListener("mw-toggle-games-menu",this._handleToggleMenu),window.removeEventListener("keydown",this._handleEsc),super.disconnectedCallback()}updated(e){e.has("apiUrl")&&(this.menuCMS.apiUrl=this.apiUrl),e.has("cacheLifeTime")&&(this.menuCMS.cacheLifeTime=this.cacheLifeTime)}render(){return this.menuCMS.render({initial:()=>F`
        ${he(this.showInitial,()=>F`
            <mw-menu-games-eb-component
              offset=${this.offset}
              ?menuOpen=${this.menuOpen}
              ?showClose=${this.showClose}
              .menuData=${this.menuData}
              exportparts=${this._exportparts}
            ></mw-menu-games-eb-component>
          `)}
      `,pending:()=>F`
        ${he(this.showInitial,()=>F`
            <mw-menu-games-eb-component
              offset=${this.offset}
              ?menuOpen=${this.menuOpen}
              ?showClose=${this.showClose}
              .menuData=${this.menuData}
              exportparts=${this._exportparts}
            ></mw-menu-games-eb-component>
          `)}
      `,complete:()=>F`
        <mw-menu-games-eb-component
          offset=${this.offset}
          ?menuOpen=${this.menuOpen}
          ?showClose=${this.showClose}
          .menuData=${this.menuCMS.menuData}
          exportparts=${this._exportparts}
        ></mw-menu-games-eb-component>
      `,error:()=>F`
        <mw-menu-games-eb-component
          offset=${this.offset}
          ?menuOpen=${this.menuOpen}
          ?showClose=${this.showClose}
          .menuData=${this.menuData}
          exportparts=${this._exportparts}
        ></mw-menu-games-eb-component>
      `})}};Gt.styles=[ot(ft),ze`
      /* layer: preflights */
*,::before,::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
*,::before,::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
[type='text'], [type='email'], [type='url'], [type='password'], [type='number'], [type='date'], [type='datetime-local'], [type='month'], [type='search'], [type='tel'], [type='time'], [type='week'], [multiple], textarea, select { appearance: none;
background-color: #fff;
border-color: #6b7280;
border-width: 1px;
border-radius: 0;
padding-top: 0.5rem;
padding-right: 0.75rem;
padding-bottom: 0.5rem;
padding-left: 0.75rem;
font-size: 1rem;
line-height: 1.5rem;
--un-shadow: 0 0 #0000; }
[type='text']:focus, [type='email']:focus, [type='url']:focus, [type='password']:focus, [type='number']:focus, [type='date']:focus, [type='datetime-local']:focus, [type='month']:focus, [type='search']:focus, [type='tel']:focus, [type='time']:focus, [type='week']:focus, [multiple]:focus, textarea:focus, select:focus { outline: 2px solid transparent;
outline-offset: 2px;
--un-ring-inset: var(--un-empty,/*!*/ /*!*/);
--un-ring-offset-width: 0px;
--un-ring-offset-color: #fff;
--un-ring-color: #2563eb;
--un-ring-offset-shadow: var(--un-ring-inset) 0 0 0 var(--un-ring-offset-width) var(--un-ring-offset-color);
--un-ring-shadow: var(--un-ring-inset) 0 0 0 calc(1px + var(--un-ring-offset-width)) var(--un-ring-color);
box-shadow: var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow);
border-color: #2563eb; }
input::placeholder, textarea::placeholder { color: #6b7280;
opacity: 1; }
::-webkit-datetime-edit-fields-wrapper { padding: 0; }
::-webkit-date-and-time-value { min-height: 1.5em; }
::-webkit-datetime-edit, ::-webkit-datetime-edit-year-field, ::-webkit-datetime-edit-month-field, ::-webkit-datetime-edit-day-field, ::-webkit-datetime-edit-hour-field, ::-webkit-datetime-edit-minute-field, ::-webkit-datetime-edit-second-field, ::-webkit-datetime-edit-millisecond-field, ::-webkit-datetime-edit-meridiem-field { padding-top: 0;
padding-bottom: 0; }
select { background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
background-position: right 0.5rem center;
background-repeat: no-repeat;
background-size: 1.5em 1.5em;
padding-right: 2.5rem;
print-color-adjust: exact; }
[multiple] { background-image: initial;
background-position: initial;
background-repeat: unset;
background-size: initial;
padding-right: 0.75rem;
print-color-adjust: unset; }
[type='checkbox'], [type='radio'] { appearance: none;
padding: 0;
print-color-adjust: exact;
display: inline-block;
vertical-align: middle;
background-origin: border-box;
user-select: none;
flex-shrink: 0;
height: 1rem;
width: 1rem;
color: #2563eb;
background-color: #fff;
border-color: #6b7280;
border-width: 1px;
--un-shadow: 0 0 #0000; }
[type='checkbox'] { border-radius: 0; }
[type='radio'] { border-radius: 100%; }
[type='checkbox']:focus, [type='radio']:focus { outline: 2px solid transparent;
outline-offset: 2px;
--un-ring-inset: var(--un-empty,/*!*/ /*!*/);
--un-ring-offset-width: 2px;
--un-ring-offset-color: #fff;
--un-ring-color: #2563eb;
--un-ring-offset-shadow: var(--un-ring-inset) 0 0 0 var(--un-ring-offset-width) var(--un-ring-offset-color);
--un-ring-shadow: var(--un-ring-inset) 0 0 0 calc(2px + var(--un-ring-offset-width)) var(--un-ring-color);
box-shadow: var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow); }
[type='checkbox']:checked, [type='radio']:checked { border-color: transparent;
background-color: currentColor;
background-size: 100% 100%;
background-position: center;
background-repeat: no-repeat; }
[type='checkbox']:checked { background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e"); }
[type='radio']:checked { background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e"); }
[type='checkbox']:checked:hover, [type='checkbox']:checked:focus, [type='radio']:checked:hover, [type='radio']:checked:focus { border-color: transparent;
background-color: currentColor; }
[type='checkbox']:indeterminate { background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 16 16'%3e%3cpath stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 8h8'/%3e%3c/svg%3e");
border-color: transparent;
background-color: currentColor;
background-size: 100% 100%;
background-position: center;
background-repeat: no-repeat; }
[type='checkbox']:indeterminate:hover, [type='checkbox']:indeterminate:focus { border-color: transparent;
background-color: currentColor; }
[type='file'] { background: unset;
border-color: inherit;
border-width: 0;
border-radius: 0;
padding: 0;
font-size: unset;
line-height: inherit; }
[type='file']:focus { outline: 1px solid ButtonText , 1px auto -webkit-focus-ring-color; }
*,::before,::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: default */
.static{position:static;};
    `,ze``];Ln([R({type:String})],Gt.prototype,"menuData",2);Ln([R({type:String})],Gt.prototype,"apiUrl",2);Ln([R({type:Number})],Gt.prototype,"cacheLifeTime",2);Ln([R({type:Number})],Gt.prototype,"offset",2);Ln([R({type:Boolean})],Gt.prototype,"showInitial",2);Ln([R({type:Boolean})],Gt.prototype,"showClose",2);Ln([R({type:Boolean,reflect:!0})],Gt.prototype,"menuOpen",2);Gt=Ln([re("mw-menu-games-eb-cms")],Gt);const G8=[{title:"Home",url:"/"},{title:"History & Society",url:"/History-Society"},{title:"Science & Tech",url:"/Science-Tech"},{title:"Biographies",url:"/Biographies"},{title:"Animals & Nature",url:"/Animals-Nature"},{title:"Geography & Travel",url:"/Geography-Travel"},{title:"Arts & Culture",url:"/Arts-Culture"},{title:"Money",url:"/money"}],W8=[{title:"Games & Quizzes",url:"/quiz/browse"},{title:"Videos",url:"/videos"},{title:"On This Day",url:"/on-this-day"},{title:"One Good Fact",url:"/one-good-fact"},{title:"Dictionary",url:"/dictionary"},{title:"New Articles",url:"/new-articles"}],J8=[{title:{id:5,title:"History & Society",url:"/History-Society"},description:null,links:[{title:"Lifestyles & Social Issues",url:"/browse/Lifestyles-Social-Issues"},{title:"Philosophy & Religion",url:"/browse/Philosophy-Religion"},{title:"Politics, Law & Government",url:"/browse/Politics-Law-Government"},{title:"World History",url:"/browse/World-History"}]},{title:{id:6,title:"Science & Tech",url:"/Science-Tech"},description:null,links:[{title:"Health & Medicine",url:"/browse/Health-Medicine"},{title:"Science",url:"/browse/Science"},{title:"Technology",url:"/browse/Technology"}]},{title:{id:3,title:"Biographies",url:"/Biographies"},description:null,links:[{title:"Browse Biographies",url:"/browse/biographies"}]},{title:{id:1,title:"Animals & Nature",url:"/Animals-Nature"},description:null,links:[{title:"Birds, Reptiles & Other Vertebrates",url:"/browse/Birds-Reptiles-Vertebrates"},{title:"Bugs, Mollusks & Other Invertebrates",url:"/browse/Bugs-Mollusks-Invertebrates"},{title:"Environment",url:"/browse/Environment"},{title:"Fossils & Geologic Time",url:"/browse/Fossil-Geologic-Time"},{title:"Mammals",url:"/browse/Mammals"},{title:"Plants",url:"/browse/Plants"}]},{title:{id:4,title:"Geography & Travel",url:"/Geography-Travel"},description:null,links:[{title:"Geography & Travel",url:"/browse/Geography-Travel"}]},{title:{id:2,title:"Arts & Culture",url:"/Arts-Culture"},description:null,links:[{title:"Entertainment & Pop Culture",url:"/browse/Entertainment-Pop-Culture"},{title:"Literature",url:"/browse/Literature"},{title:"Sports & Recreation",url:"/browse/Sports-Recreation"},{title:"Visual Arts",url:"/browse/Visual-Arts"}]}],Q8=[{title:"Companions",url:"/stories/companion"},{title:"Demystified",url:"/stories/demystified"},{title:"Image Galleries",url:"/gallery/browse"},{title:"Infographics",url:"https://www.britannica.com/study/infographics",newTab:!0},{title:"Lists",url:"/list/browse"},{title:"Podcasts",url:"/podcasts"},{title:"Spotlight",url:"/stories/spotlight"},{title:"Summaries",url:"/summary"},{title:"The Forum",url:"/stories/the-forum"},{title:"Top Questions",url:"/question"},{title:"#WTFact",url:"/stories/wtfact"}],K8=[{title:"100 Women",url:"https://www.britannica.com/explore/100women/",newTab:!0},{title:"Britannica Kids",url:"https://kids.britannica.com/",newTab:!0},{title:"Saving Earth",url:"https://www.britannica.com/explore/savingearth/",newTab:!0},{title:"Space Next 50",url:"https://www.britannica.com/explore/space/",newTab:!0},{title:"Student Center",url:"https://www.britannica.com/study/",newTab:!0}],Y8="GAME",X8=[{title:"Quordle",url:"https://www.merriam-webster.com/games/quordle",image:{id:0,url:"https://cdn-dev.britannica.com/kstm/7753/quordle.png",altText:"Quordle",credit:null,width:null,height:null,fullUrl:"https://cdn-dev.britannica.com/kstm/7753/quordle.png"}},{title:"Blossom",url:"https://www.merriam-webster.com/games/blossom-word-game",image:{id:0,url:"https://cdn-dev.britannica.com/kstm/7758/blossom.png",altText:"Blossom",credit:null,width:null,height:null,fullUrl:"https://cdn-dev.britannica.com/kstm/7758/blossom.png"}},{title:"Octordle",url:"https://www.britannica.com/games/octordle",image:{id:0,url:"https://cdn-dev.britannica.com/kstm/7757/octordle.png",altText:"Octordle",credit:null,width:null,height:null,fullUrl:"https://cdn-dev.britannica.com/kstm/7757/octordle.png"}},{title:"The Missing Letter",url:"https://www.merriam-webster.com/games/missing-letter",image:{id:0,url:"https://cdn-dev.britannica.com/kstm/7754/missing-letter.png",altText:"The Missing Letter",credit:null,width:null,height:null,fullUrl:"https://cdn-dev.britannica.com/kstm/7754/missing-letter.png"}},{title:"Twofer Goofer",url:"https://www.merriam-webster.com/games/twofer-goofer",image:{id:0,url:"https://cdn-dev.britannica.com/kstm/11152/twofer.png",altText:"Twofer Goofer",credit:null,width:null,height:null,fullUrl:"https://cdn-dev.britannica.com/kstm/11152/twofer.png"}},{title:"Pilfer",url:"https://www.merriam-webster.com/games/pilfer",image:{id:0,url:"https://cdn-dev.britannica.com/kstm/11581/sm.png",altText:"Pilfer",credit:null,width:null,height:null,fullUrl:"https://cdn-dev.britannica.com/kstm/11581/sm.png"}},{title:"Victordle ",url:"https://www.britannica.com/games/victordle/",image:{id:0,url:"https://cdn-dev.britannica.com/kstm/9733/Victordle.png",altText:"Victordle ",credit:null,width:null,height:null,fullUrl:"https://cdn-dev.britannica.com/kstm/9733/Victordle.png"}},{title:"Sudoku",url:"https://www.britannica.com/games/sudoku",image:{id:0,url:"https://cdn-dev.britannica.com/kstm/7756/sudoku.png",altText:"Sudoku",credit:null,width:null,height:null,fullUrl:"https://cdn-dev.britannica.com/kstm/7756/sudoku.png"}}],e9=[{title:"U.S. Presidential Code Names Quiz",url:"/quiz/us-presidential-code-names-quiz",image:{id:0,url:"/67/127967-131-824AEB24/United-States-White-House-south-portico-circa-2005.jpg",altText:"The White House South portico, Washington, D.C., USA. Photo circa 2005. White House history.",credit:"\xA9 Cristina Ciochina/Shutterstock.com",width:null,height:null,fullUrl:"https://cdn.britannica.com/67/127967-131-824AEB24/United-States-White-House-south-portico-circa-2005.jpg"}},{title:"What Are You Wearing? Clothing Quiz",url:"/quiz/what-are-you-wearing-clothing-quiz",image:{id:0,url:"/17/237217-131-4358665B/An-image-of-a-man-wearing-lederhosen.jpg",altText:"An image of a man wearing lederhosen. Germany, clothes",credit:"\xA9 Sonja Birkelbach/stock.adobe.com",width:null,height:null,fullUrl:"https://cdn.britannica.com/17/237217-131-4358665B/An-image-of-a-man-wearing-lederhosen.jpg"}}],Q9={britannicaMenu1:G8,britannicaMenu2:W8,browseByCategory:J8,browseByFeature:Q8,moreFromBritannica:K8,menuType:Y8,games:X8,britannicaQuizzes:e9};var t9=Object.defineProperty,n9=Object.getOwnPropertyDescriptor,un=(e,t,n,r)=>{for(var o=r>1?void 0:r?n9(t,n):t,i=e.length-1,a;i>=0;i--)(a=e[i])&&(o=(r?a(t,n,o):a(o))||o);return r&&o&&t9(t,n,o),o};let Rt=class extends X{constructor(){super(...arguments),this.darkMode=!1,this.typeNewsLetterPromo="home",this.modalOpen=!0,this.imageSmall="",this.imageLarge="",this.imageMedium="",this.newsletterUrl="",this.onClickClose=()=>{},this._handleToggleBanner=()=>{this.modalOpen=!this.modalOpen,this.onClickClose()}}render(){return F`
      ${he(this.modalOpen,()=>F`
          <div
            class="antialiased flex justify-center top-0 w-full
          ${this.typeNewsLetterPromo=="home"?"sticky":""}"
          >
            <div
              class="font-['Inter'] flex justify-center shadow-lg  w-full max-w-[982px]
            ${this.darkMode?"bg-[#09192E]":"bg-[#F8F6F1]"}
            ${this.typeNewsLetterPromo=="home"?"relative sm:py-0 py-2":""}
            ${this.typeNewsLetterPromo=="nextgen"?"p-1 mb-[5px]":""}"
            >
              ${this.typeNewsLetterPromo=="home"?F`
                    <button
                      type="button"
                      class="p-1 rounded-full absolute left-2 mt-0 sm:mt-[7px]
              ${this.darkMode?"bg-[#02040BCC] text-[#FAFAF6]":"bg-white text-gray-900"}"
                      aria-label="Close"
                      @click="${this._handleToggleBanner}"
                      id="gtm-click-close-newsletter-promo"
                      aria-labelledby="gtm-click-close-newsletter-promo"
                    >
                      <mw-icon-close-fine></mw-icon-close-fine>
                    </button>
                  `:""}

              <div
                class="flex flex-row w-full md:max-w-[642px] sm:py-[0]
              ${this.typeNewsLetterPromo=="home"?"justify-center items-center md:justify-between h-[78px] sm:h-[50px]":""}"
              >
                <div
                  class="newsletterImage self-stretch grow bg-cover bg-no-repeat bg-right sm:bg-center h-full min-w-[128px]
                bg-[image:var(--bg-mobile)] sm:bg-[image:var(--bg-desktop)]
                ${this.typeNewsLetterPromo!=="home"?"max-w-[220px]":""}"
                  style="
                  --bg-mobile: url('${this.imageSmall}');
                  --bg-desktop: url('${this.typeNewsLetterPromo=="nextgen"?this.imageMedium:this.imageLarge}');
                "
                ></div>

                <div
                  class="flex flex-row items-center pl-[6px]
                ${this.typeNewsLetterPromo=="home"?"pr-2":""}"
                >
                  <div
                    class="flex flex-col gap-1
                  ${this.typeNewsLetterPromo=="home"?"sm:flex-row sm:gap-[28px]":""}"
                  >
                    <div class="flex flex-row">
                      <div class="flex flex-col justify-center">
                        <p
                          class="font-bold text-sm 
                        ${this.darkMode?"text-[#0098DD]":"text-[#007CB4]"}
                        ${this.typeNewsLetterPromo=="nextgen"?"uppercase":""}"
                        >
                          GAMES DAILY NEWSLETTER
                        </p>
                        <p
                          class="italic text-xs 
                      ${this.darkMode?"text-[#FAFAF6]":"text-[#1C1917]"}"
                        >
                          Tips, tricks & stats!
                        </p>
                      </div>
                    </div>
                    <div class="flex items-center">
                      <a
                        id=${this.typeNewsLetterPromo==="home"?"gtm-click-subscribe-newsletter-promo-home":"gtm-click-subscribe-newsletter-promo-nextgen"}
                        aria-labelledby="gtm-click-subscribe-newsletter-promo"
                        class="font-bold rounded-lg
                      ${this.darkMode?"bg-[#00608B] text-[#FAFAF6]":"bg-[#007CB4] text-white"}
                      ${this.typeNewsLetterPromo=="home"?"text-sm leading-none p-1.5 sm:py-[11px] sm:px-5":""}
                      ${this.typeNewsLetterPromo=="nextgen"?"text-xs leading-4 px-5 py-[5px]":""}"
                        href="${this.newsletterUrl}"
                        target="_blank"
                      >
                        SIGN UP
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `)}
    `}};Rt.styles=[ot(ft),ze`
      /* layer: preflights */
*,::before,::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
*,::before,::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
[type='text'], [type='email'], [type='url'], [type='password'], [type='number'], [type='date'], [type='datetime-local'], [type='month'], [type='search'], [type='tel'], [type='time'], [type='week'], [multiple], textarea, select { appearance: none;
background-color: #fff;
border-color: #6b7280;
border-width: 1px;
border-radius: 0;
padding-top: 0.5rem;
padding-right: 0.75rem;
padding-bottom: 0.5rem;
padding-left: 0.75rem;
font-size: 1rem;
line-height: 1.5rem;
--un-shadow: 0 0 #0000; }
[type='text']:focus, [type='email']:focus, [type='url']:focus, [type='password']:focus, [type='number']:focus, [type='date']:focus, [type='datetime-local']:focus, [type='month']:focus, [type='search']:focus, [type='tel']:focus, [type='time']:focus, [type='week']:focus, [multiple]:focus, textarea:focus, select:focus { outline: 2px solid transparent;
outline-offset: 2px;
--un-ring-inset: var(--un-empty,/*!*/ /*!*/);
--un-ring-offset-width: 0px;
--un-ring-offset-color: #fff;
--un-ring-color: #2563eb;
--un-ring-offset-shadow: var(--un-ring-inset) 0 0 0 var(--un-ring-offset-width) var(--un-ring-offset-color);
--un-ring-shadow: var(--un-ring-inset) 0 0 0 calc(1px + var(--un-ring-offset-width)) var(--un-ring-color);
box-shadow: var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow);
border-color: #2563eb; }
input::placeholder, textarea::placeholder { color: #6b7280;
opacity: 1; }
::-webkit-datetime-edit-fields-wrapper { padding: 0; }
::-webkit-date-and-time-value { min-height: 1.5em; }
::-webkit-datetime-edit, ::-webkit-datetime-edit-year-field, ::-webkit-datetime-edit-month-field, ::-webkit-datetime-edit-day-field, ::-webkit-datetime-edit-hour-field, ::-webkit-datetime-edit-minute-field, ::-webkit-datetime-edit-second-field, ::-webkit-datetime-edit-millisecond-field, ::-webkit-datetime-edit-meridiem-field { padding-top: 0;
padding-bottom: 0; }
select { background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
background-position: right 0.5rem center;
background-repeat: no-repeat;
background-size: 1.5em 1.5em;
padding-right: 2.5rem;
print-color-adjust: exact; }
[multiple] { background-image: initial;
background-position: initial;
background-repeat: unset;
background-size: initial;
padding-right: 0.75rem;
print-color-adjust: unset; }
[type='checkbox'], [type='radio'] { appearance: none;
padding: 0;
print-color-adjust: exact;
display: inline-block;
vertical-align: middle;
background-origin: border-box;
user-select: none;
flex-shrink: 0;
height: 1rem;
width: 1rem;
color: #2563eb;
background-color: #fff;
border-color: #6b7280;
border-width: 1px;
--un-shadow: 0 0 #0000; }
[type='checkbox'] { border-radius: 0; }
[type='radio'] { border-radius: 100%; }
[type='checkbox']:focus, [type='radio']:focus { outline: 2px solid transparent;
outline-offset: 2px;
--un-ring-inset: var(--un-empty,/*!*/ /*!*/);
--un-ring-offset-width: 2px;
--un-ring-offset-color: #fff;
--un-ring-color: #2563eb;
--un-ring-offset-shadow: var(--un-ring-inset) 0 0 0 var(--un-ring-offset-width) var(--un-ring-offset-color);
--un-ring-shadow: var(--un-ring-inset) 0 0 0 calc(2px + var(--un-ring-offset-width)) var(--un-ring-color);
box-shadow: var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow); }
[type='checkbox']:checked, [type='radio']:checked { border-color: transparent;
background-color: currentColor;
background-size: 100% 100%;
background-position: center;
background-repeat: no-repeat; }
[type='checkbox']:checked { background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e"); }
[type='radio']:checked { background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e"); }
[type='checkbox']:checked:hover, [type='checkbox']:checked:focus, [type='radio']:checked:hover, [type='radio']:checked:focus { border-color: transparent;
background-color: currentColor; }
[type='checkbox']:indeterminate { background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 16 16'%3e%3cpath stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 8h8'/%3e%3c/svg%3e");
border-color: transparent;
background-color: currentColor;
background-size: 100% 100%;
background-position: center;
background-repeat: no-repeat; }
[type='checkbox']:indeterminate:hover, [type='checkbox']:indeterminate:focus { border-color: transparent;
background-color: currentColor; }
[type='file'] { background: unset;
border-color: inherit;
border-width: 0;
border-radius: 0;
padding: 0;
font-size: unset;
line-height: inherit; }
[type='file']:focus { outline: 1px solid ButtonText , 1px auto -webkit-focus-ring-color; }
*,::before,::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: default */
.absolute{position:absolute;}
.relative{position:relative;}
.sticky{position:sticky;}
.static{position:static;}
.left-2{left:8px;}
.top-0{top:0;}
.mb-\\[5px\\]{margin-bottom:5px;}
.mt-0{margin-top:0;}
.block{display:block;}
.h-\\[78px\\]{height:78px;}
.h-full{height:100%;}
.max-w-\\[220px\\]{max-width:220px;}
.max-w-\\[982px\\]{max-width:982px;}
.min-w-\\[128px\\]{min-width:128px;}
.w-full{width:100%;}
.flex{display:flex;}
.grow{flex-grow:1;}
.flex-row{flex-direction:row;}
.flex-col{flex-direction:column;}
.items-center{align-items:center;}
.self-stretch{align-self:stretch;}
.justify-center{justify-content:center;}
.gap-1{gap:4px;}
.rounded-full{border-radius:9999px;}
.rounded-lg{border-radius:8px;}
.bg-\\[\\#00608B\\]{--un-bg-opacity:1;background-color:rgb(0 96 139 / var(--un-bg-opacity)) /* #00608B */;}
.bg-\\[\\#007CB4\\]{--un-bg-opacity:1;background-color:rgb(0 124 180 / var(--un-bg-opacity)) /* #007CB4 */;}
.bg-\\[\\#02040BCC\\]{--un-bg-opacity:0.8;background-color:rgb(2 4 11 / var(--un-bg-opacity)) /* #02040BCC */;}
.bg-\\[\\#09192E\\]{--un-bg-opacity:1;background-color:rgb(9 25 46 / var(--un-bg-opacity)) /* #09192E */;}
.bg-\\[\\#F8F6F1\\]{--un-bg-opacity:1;background-color:rgb(248 246 241 / var(--un-bg-opacity)) /* #F8F6F1 */;}
.bg-\\[image\\:var\\(--bg-mobile\\)\\]{background-image:var(--bg-mobile);}
.bg-white{--un-bg-opacity:1;background-color:rgb(255 255 255 / var(--un-bg-opacity)) /* #fff */;}
.bg-cover{background-size:cover;}
.bg-right{background-position:right;}
.bg-no-repeat{background-repeat:no-repeat;}
.p-1{padding:4px;}
.p-1\\.5,
[p-1\\.5=""]{padding:6px;}
.px-5,
[px-5=""]{padding-left:20px;padding-right:20px;}
.py-\\[5px\\]{padding-top:5px;padding-bottom:5px;}
.py-2{padding-top:8px;padding-bottom:8px;}
[px=""]{padding-left:16px;padding-right:16px;}
.pl-\\[6px\\]{padding-left:6px;}
.pr-2{padding-right:8px;}
.text-sm,
[text-sm=""]{font-size:14px;line-height:20px;}
.text-xs,
[text-xs=""]{font-size:12px;line-height:16px;}
.text-\\[\\#007CB4\\]{--un-text-opacity:1;color:rgb(0 124 180 / var(--un-text-opacity)) /* #007CB4 */;}
.text-\\[\\#0098DD\\]{--un-text-opacity:1;color:rgb(0 152 221 / var(--un-text-opacity)) /* #0098DD */;}
.text-\\[\\#1C1917\\]{--un-text-opacity:1;color:rgb(28 25 23 / var(--un-text-opacity)) /* #1C1917 */;}
.text-\\[\\#FAFAF6\\]{--un-text-opacity:1;color:rgb(250 250 246 / var(--un-text-opacity)) /* #FAFAF6 */;}
.text-gray-900{--un-text-opacity:1;color:rgb(17 24 39 / var(--un-text-opacity)) /* #111827 */;}
.text-white{--un-text-opacity:1;color:rgb(255 255 255 / var(--un-text-opacity)) /* #fff */;}
.font-bold{font-weight:700;}
.leading-4,
[leading-4=""]{line-height:16px;}
.leading-none,
[leading-none=""]{line-height:1;}
.font-\\[\\'Inter\\'\\]{font-family:'Inter';}
.uppercase{text-transform:uppercase;}
.italic{font-style:italic;}
.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}
.shadow-lg{--un-shadow:var(--un-shadow-inset) 0 10px 15px -3px var(--un-shadow-color, rgb(0 0 0 / 0.1)),var(--un-shadow-inset) 0 4px 6px -4px var(--un-shadow-color, rgb(0 0 0 / 0.1));box-shadow:var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow);}
@media (min-width: 640px){
.sm\\:mt-\\[7px\\]{margin-top:7px;}
.sm\\:h-\\[50px\\]{height:50px;}
.sm\\:flex-row{flex-direction:row;}
.sm\\:gap-\\[28px\\]{gap:28px;}
.sm\\:bg-\\[image\\:var\\(--bg-desktop\\)\\]{background-image:var(--bg-desktop);}
.sm\\:bg-center{background-position:center;}
.sm\\:px-5{padding-left:20px;padding-right:20px;}
.sm\\:py-\\[0\\],
.sm\\:py-0{padding-top:0;padding-bottom:0;}
.sm\\:py-\\[11px\\]{padding-top:11px;padding-bottom:11px;}
}
@media (min-width: 768px){
.md\\:max-w-\\[642px\\]{max-width:642px;}
.md\\:justify-between{justify-content:space-between;}
};
    `,ze`
      mw-icon-close-fine::part(icon) {
        display: block;
      }
    `];un([R({type:Boolean})],Rt.prototype,"darkMode",2);un([R({type:String})],Rt.prototype,"typeNewsLetterPromo",2);un([R({type:Boolean})],Rt.prototype,"modalOpen",2);un([R({type:String})],Rt.prototype,"imageSmall",2);un([R({type:String})],Rt.prototype,"imageLarge",2);un([R({type:String})],Rt.prototype,"imageMedium",2);un([R({type:String})],Rt.prototype,"newsletterUrl",2);un([R({type:String})],Rt.prototype,"onClickClose",2);Rt=un([re("mw-newsletter-banner")],Rt);var K9="/games/octordle/assets/newsletter-games-lg.5ce07514.webp",Y9="/games/octordle/assets/newsletter-games-md.d92b4abf.webp",X9="/games/octordle/assets/newsletter-games-sm.6feb08bc.webp",r9=Object.defineProperty,o9=Object.getOwnPropertyDescriptor,_t=(e,t,n,r)=>{for(var o=r>1?void 0:r?o9(t,n):t,i=e.length-1,a;i>=0;i--)(a=e[i])&&(o=(r?a(t,n,o):a(o))||o);return r&&o&&r9(t,n,o),o};let pt=class extends X{constructor(){super(...arguments),this.assetsUrl="",this.id="",this.img="",this.extImg="",this.extImgDark="",this.header="",this.text="",this.link="javascript:void(0);",this.utm="",this.external=!1,this.darkMode=!1}render(){return F`
      <div
        part="container"
        class="group games-list-item font-sans list-none mb-1 p-0 shadow-md rounded-xl ${this.darkMode?"dark @hover:bg-[#265667] bg-[#0F3850]":"@hover:bg-gradient-to-r from-[#E7F0F4] to-[#CBE1EA] bg-[#F8F8F8]"}
        "
      >
        <a
          part="link"
          class="text-[#0F3850] @hover:text-[#265667] @hover:dark:text-white dark:text-white toast-box flex justify-between w-full text-base text-left p-0.5"
          href="${this.link+(this.utm?(this.link.includes("?")?"&":"?")+this.utm:"")}"
          id="gtm-click-games-${this.id}"
          rel="external"
          target="${this.external?"_blank":"_top"}"
        >
          <div class="flex">
            <div part="toast-img" class="flex self-center toast-img">
              <img
                part="img"
                height="56"
                width="56"
                alt="${this.id}"
                src="${this.assetsUrl+(typeof this.img=="string"?this.img:this.img.filename_disk)}"
              />
            </div>
            <div
              part="toast-header-container"
              class="flex flex-col pl-2 sm:pl-3 self-center"
            >
              <div
                part="toast-header"
                class="text-base sm:text-lg toast-header"
              >
                <strong>${this.header}</strong>
              </div>
              <div part="toast-text" class="toast-text text-sm md:text-base">
                ${this.text}
              </div>
            </div>
          </div>
          <div
            part="toast-ext"
            class="flex items-center self-center pl-1 sm:pl-5 toast-ext ${this.darkMode?"dark text-[#4A7D95] group-hover:text-[#97BECE]":"text-[#8A8D91] group-hover:text-[#265667]"}
          "
          >
            ${he(this.extImgDark&&this.darkMode,()=>F`<img
                  part="img-logo"
                  height="30"
                  width="30"
                  alt="${this.id}"
                  src="${this.assetsUrl+(typeof this.extImgDark=="string"?this.extImgDark:this.extImgDark.filename_disk)}"
                />`,()=>F``)}
            ${he(this.extImg&&!this.darkMode,()=>F`<img
                  part="img-logo"
                  height="30"
                  width="30"
                  alt="${this.id}"
                  src="${this.assetsUrl+(typeof this.extImg=="string"?this.extImg:this.extImg.filename_disk)}"
                />`,()=>F``)}
            <mw-icon-chevron-right-2 part="icon"></mw-icon-chevron-right-2>
          </div>
        </a>
      </div>
    `}};pt.styles=[ot(ft),ze`
      /* layer: preflights */
*,::before,::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
*,::before,::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
[type='text'], [type='email'], [type='url'], [type='password'], [type='number'], [type='date'], [type='datetime-local'], [type='month'], [type='search'], [type='tel'], [type='time'], [type='week'], [multiple], textarea, select { appearance: none;
background-color: #fff;
border-color: #6b7280;
border-width: 1px;
border-radius: 0;
padding-top: 0.5rem;
padding-right: 0.75rem;
padding-bottom: 0.5rem;
padding-left: 0.75rem;
font-size: 1rem;
line-height: 1.5rem;
--un-shadow: 0 0 #0000; }
[type='text']:focus, [type='email']:focus, [type='url']:focus, [type='password']:focus, [type='number']:focus, [type='date']:focus, [type='datetime-local']:focus, [type='month']:focus, [type='search']:focus, [type='tel']:focus, [type='time']:focus, [type='week']:focus, [multiple]:focus, textarea:focus, select:focus { outline: 2px solid transparent;
outline-offset: 2px;
--un-ring-inset: var(--un-empty,/*!*/ /*!*/);
--un-ring-offset-width: 0px;
--un-ring-offset-color: #fff;
--un-ring-color: #2563eb;
--un-ring-offset-shadow: var(--un-ring-inset) 0 0 0 var(--un-ring-offset-width) var(--un-ring-offset-color);
--un-ring-shadow: var(--un-ring-inset) 0 0 0 calc(1px + var(--un-ring-offset-width)) var(--un-ring-color);
box-shadow: var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow);
border-color: #2563eb; }
input::placeholder, textarea::placeholder { color: #6b7280;
opacity: 1; }
::-webkit-datetime-edit-fields-wrapper { padding: 0; }
::-webkit-date-and-time-value { min-height: 1.5em; }
::-webkit-datetime-edit, ::-webkit-datetime-edit-year-field, ::-webkit-datetime-edit-month-field, ::-webkit-datetime-edit-day-field, ::-webkit-datetime-edit-hour-field, ::-webkit-datetime-edit-minute-field, ::-webkit-datetime-edit-second-field, ::-webkit-datetime-edit-millisecond-field, ::-webkit-datetime-edit-meridiem-field { padding-top: 0;
padding-bottom: 0; }
select { background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
background-position: right 0.5rem center;
background-repeat: no-repeat;
background-size: 1.5em 1.5em;
padding-right: 2.5rem;
print-color-adjust: exact; }
[multiple] { background-image: initial;
background-position: initial;
background-repeat: unset;
background-size: initial;
padding-right: 0.75rem;
print-color-adjust: unset; }
[type='checkbox'], [type='radio'] { appearance: none;
padding: 0;
print-color-adjust: exact;
display: inline-block;
vertical-align: middle;
background-origin: border-box;
user-select: none;
flex-shrink: 0;
height: 1rem;
width: 1rem;
color: #2563eb;
background-color: #fff;
border-color: #6b7280;
border-width: 1px;
--un-shadow: 0 0 #0000; }
[type='checkbox'] { border-radius: 0; }
[type='radio'] { border-radius: 100%; }
[type='checkbox']:focus, [type='radio']:focus { outline: 2px solid transparent;
outline-offset: 2px;
--un-ring-inset: var(--un-empty,/*!*/ /*!*/);
--un-ring-offset-width: 2px;
--un-ring-offset-color: #fff;
--un-ring-color: #2563eb;
--un-ring-offset-shadow: var(--un-ring-inset) 0 0 0 var(--un-ring-offset-width) var(--un-ring-offset-color);
--un-ring-shadow: var(--un-ring-inset) 0 0 0 calc(2px + var(--un-ring-offset-width)) var(--un-ring-color);
box-shadow: var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow); }
[type='checkbox']:checked, [type='radio']:checked { border-color: transparent;
background-color: currentColor;
background-size: 100% 100%;
background-position: center;
background-repeat: no-repeat; }
[type='checkbox']:checked { background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e"); }
[type='radio']:checked { background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e"); }
[type='checkbox']:checked:hover, [type='checkbox']:checked:focus, [type='radio']:checked:hover, [type='radio']:checked:focus { border-color: transparent;
background-color: currentColor; }
[type='checkbox']:indeterminate { background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 16 16'%3e%3cpath stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 8h8'/%3e%3c/svg%3e");
border-color: transparent;
background-color: currentColor;
background-size: 100% 100%;
background-position: center;
background-repeat: no-repeat; }
[type='checkbox']:indeterminate:hover, [type='checkbox']:indeterminate:focus { border-color: transparent;
background-color: currentColor; }
[type='file'] { background: unset;
border-color: inherit;
border-width: 0;
border-radius: 0;
padding: 0;
font-size: unset;
line-height: inherit; }
[type='file']:focus { outline: 1px solid ButtonText , 1px auto -webkit-focus-ring-color; }
*,::before,::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: shortcuts */
.container{width:100%;}
@media (min-width: 640px){
.container{max-width:640px;}
}
@media (min-width: 768px){
.container{max-width:768px;}
}
@media (min-width: 1024px){
.container{max-width:1024px;}
}
@media (min-width: 1280px){
.container{max-width:1280px;}
}
@media (min-width: 1536px){
.container{max-width:1536px;}
}
/* layer: default */
.static{position:static;}
.mb-1{margin-bottom:4px;}
.w-full{width:100%;}
.flex{display:flex;}
.flex-col{flex-direction:column;}
.list-none{list-style-type:none;}
.items-center{align-items:center;}
.self-center{align-self:center;}
.justify-between{justify-content:space-between;}
.rounded-xl{border-radius:12px;}
.bg-\\[\\#0F3850\\]{--un-bg-opacity:1;background-color:rgb(15 56 80 / var(--un-bg-opacity)) /* #0F3850 */;}
.bg-\\[\\#F8F8F8\\]{--un-bg-opacity:1;background-color:rgb(248 248 248 / var(--un-bg-opacity)) /* #F8F8F8 */;}
.from-\\[\\#E7F0F4\\]{--un-gradient-from-position:0%;--un-gradient-from:rgb(231 240 244 / var(--un-from-opacity, 1)) var(--un-gradient-from-position);--un-gradient-to-position:100%;--un-gradient-to:rgb(231 240 244 / 0) var(--un-gradient-to-position);--un-gradient-stops:var(--un-gradient-from), var(--un-gradient-to);}
.to-\\[\\#CBE1EA\\]{--un-gradient-to-position:100%;--un-gradient-to:rgb(203 225 234 / var(--un-to-opacity, 1)) var(--un-gradient-to-position);}
.p-0{padding:0;}
.p-0\\.5{padding:2px;}
.pl-1{padding-left:4px;}
.pl-2{padding-left:8px;}
.text-left{text-align:left;}
.text-base{font-size:16px;line-height:24px;}
.text-sm{font-size:14px;line-height:20px;}
.dark .dark\\:text-white{--un-text-opacity:1;color:rgb(255 255 255 / var(--un-text-opacity)) /* #fff */;}
.text-\\[\\#0F3850\\]{--un-text-opacity:1;color:rgb(15 56 80 / var(--un-text-opacity)) /* #0F3850 */;}
.text-\\[\\#4A7D95\\]{--un-text-opacity:1;color:rgb(74 125 149 / var(--un-text-opacity)) /* #4A7D95 */;}
.text-\\[\\#8A8D91\\]{--un-text-opacity:1;color:rgb(138 141 145 / var(--un-text-opacity)) /* #8A8D91 */;}
.group:hover .group-hover\\:text-\\[\\#265667\\]{--un-text-opacity:1;color:rgb(38 86 103 / var(--un-text-opacity)) /* #265667 */;}
.group:hover .group-hover\\:text-\\[\\#97BECE\\]{--un-text-opacity:1;color:rgb(151 190 206 / var(--un-text-opacity)) /* #97BECE */;}
.font-sans{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";}
.shadow-md{--un-shadow:var(--un-shadow-inset) 0 4px 6px -1px var(--un-shadow-color, rgb(0 0 0 / 0.1)),var(--un-shadow-inset) 0 2px 4px -2px var(--un-shadow-color, rgb(0 0 0 / 0.1));box-shadow:var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow);}
@media (hover: hover) and (pointer: fine){
.\\@hover\\:bg-\\[\\#265667\\]:hover{--un-bg-opacity:1;background-color:rgb(38 86 103 / var(--un-bg-opacity)) /* #265667 */;}
.\\@hover\\:bg-gradient-to-r:hover{--un-gradient-shape:to right in oklch;--un-gradient:var(--un-gradient-shape), var(--un-gradient-stops);background-image:linear-gradient(var(--un-gradient));}
.\\@hover\\:text-\\[\\#265667\\]:hover{--un-text-opacity:1;color:rgb(38 86 103 / var(--un-text-opacity)) /* #265667 */;}
.dark .\\@hover\\:dark\\:text-white:hover{--un-text-opacity:1;color:rgb(255 255 255 / var(--un-text-opacity)) /* #fff */;}
}
@media (min-width: 640px){
.sm\\:pl-3{padding-left:12px;}
.sm\\:pl-5{padding-left:20px;}
.sm\\:text-lg{font-size:18px;line-height:28px;}
}
@media (min-width: 768px){
.md\\:text-base{font-size:16px;line-height:24px;}
};
    `];_t([R({type:String})],pt.prototype,"assetsUrl",2);_t([R({type:String})],pt.prototype,"id",2);_t([R({type:String})],pt.prototype,"img",2);_t([R({type:String})],pt.prototype,"extImg",2);_t([R({type:String})],pt.prototype,"extImgDark",2);_t([R({type:String})],pt.prototype,"header",2);_t([R({type:String})],pt.prototype,"text",2);_t([R({type:String})],pt.prototype,"link",2);_t([R({type:String})],pt.prototype,"utm",2);_t([R({type:Boolean})],pt.prototype,"external",2);_t([R({type:Boolean})],pt.prototype,"darkMode",2);pt=_t([re("mw-toast-element")],pt);var i9=Object.defineProperty,a9=Object.getOwnPropertyDescriptor,Fo=(e,t,n,r)=>{for(var o=r>1?void 0:r?a9(t,n):t,i=e.length-1,a;i>=0;i--)(a=e[i])&&(o=(r?a(t,n,o):a(o))||o);return r&&o&&i9(t,n,o),o};let nr=class extends X{constructor(){super(...arguments),this.toasts=[],this.darkMode=!1,this.showTitle=!0,this.assetsUrl=""}render(){return F`
      ${he(this.toasts.length>0,()=>F`
          <div
            class="font-sans px-1 sm:px-3 mx-auto ${this.darkMode?"dark":""}"
          >
            ${he(this.showTitle==!0,()=>F`
                <div
                  part="more-games-heading"
                  class="more-games-heading uppercase text-base rounded-t-2xl font-bold text-center text-white py-1
          ${this.darkMode?"bg-[#0A1B27]":"bg-gradient-to-r from-[#265667] to-[#0F3850] bg-white"}
            "
                >
                  More Games
                </div>
              `,()=>F`
            <div
            class="more-games-heading rounded-t-2xl pt-2"
            </div>
            `)}
            <div
              part="toasts-container"
              class="px-2 shadow-lg pt-1
              ${this.showTitle?"pb-1 rounded-b-2xl":"p-1 pt-2 rounded-2xl"}
              ${this.darkMode?"bg-[#0A1B27]":"bg-white"}
            "
            >
              ${this.toasts.map(e=>F`
                  <mw-toast-element
                    exportparts="container:toast-container, link:toast-link, img:toast-main-img, toast-img, toast-header-container, toast-header, toast-text, img-logo, icon:toast-icon"
                    .img="${e.img}"
                    .extImg="${e.extImg}"
                    .extImgDark="${e.extImgDark}"
                    id="${e.id}"
                    header="${e.header}"
                    text="${e.text}"
                    link="${e.link}"
                    .utm="${e.utm}"
                    .assetsUrl=${this.assetsUrl}
                    ?external="${e.external}"
                    ?darkMode="${this.darkMode}"
                  ></mw-toast-element>
                `)}
            </div>
          </div>
        `)}
    `}};nr.styles=[ot(ft),ze`
      /* layer: preflights */
*,::before,::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
*,::before,::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
[type='text'], [type='email'], [type='url'], [type='password'], [type='number'], [type='date'], [type='datetime-local'], [type='month'], [type='search'], [type='tel'], [type='time'], [type='week'], [multiple], textarea, select { appearance: none;
background-color: #fff;
border-color: #6b7280;
border-width: 1px;
border-radius: 0;
padding-top: 0.5rem;
padding-right: 0.75rem;
padding-bottom: 0.5rem;
padding-left: 0.75rem;
font-size: 1rem;
line-height: 1.5rem;
--un-shadow: 0 0 #0000; }
[type='text']:focus, [type='email']:focus, [type='url']:focus, [type='password']:focus, [type='number']:focus, [type='date']:focus, [type='datetime-local']:focus, [type='month']:focus, [type='search']:focus, [type='tel']:focus, [type='time']:focus, [type='week']:focus, [multiple]:focus, textarea:focus, select:focus { outline: 2px solid transparent;
outline-offset: 2px;
--un-ring-inset: var(--un-empty,/*!*/ /*!*/);
--un-ring-offset-width: 0px;
--un-ring-offset-color: #fff;
--un-ring-color: #2563eb;
--un-ring-offset-shadow: var(--un-ring-inset) 0 0 0 var(--un-ring-offset-width) var(--un-ring-offset-color);
--un-ring-shadow: var(--un-ring-inset) 0 0 0 calc(1px + var(--un-ring-offset-width)) var(--un-ring-color);
box-shadow: var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow);
border-color: #2563eb; }
input::placeholder, textarea::placeholder { color: #6b7280;
opacity: 1; }
::-webkit-datetime-edit-fields-wrapper { padding: 0; }
::-webkit-date-and-time-value { min-height: 1.5em; }
::-webkit-datetime-edit, ::-webkit-datetime-edit-year-field, ::-webkit-datetime-edit-month-field, ::-webkit-datetime-edit-day-field, ::-webkit-datetime-edit-hour-field, ::-webkit-datetime-edit-minute-field, ::-webkit-datetime-edit-second-field, ::-webkit-datetime-edit-millisecond-field, ::-webkit-datetime-edit-meridiem-field { padding-top: 0;
padding-bottom: 0; }
select { background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
background-position: right 0.5rem center;
background-repeat: no-repeat;
background-size: 1.5em 1.5em;
padding-right: 2.5rem;
print-color-adjust: exact; }
[multiple] { background-image: initial;
background-position: initial;
background-repeat: unset;
background-size: initial;
padding-right: 0.75rem;
print-color-adjust: unset; }
[type='checkbox'], [type='radio'] { appearance: none;
padding: 0;
print-color-adjust: exact;
display: inline-block;
vertical-align: middle;
background-origin: border-box;
user-select: none;
flex-shrink: 0;
height: 1rem;
width: 1rem;
color: #2563eb;
background-color: #fff;
border-color: #6b7280;
border-width: 1px;
--un-shadow: 0 0 #0000; }
[type='checkbox'] { border-radius: 0; }
[type='radio'] { border-radius: 100%; }
[type='checkbox']:focus, [type='radio']:focus { outline: 2px solid transparent;
outline-offset: 2px;
--un-ring-inset: var(--un-empty,/*!*/ /*!*/);
--un-ring-offset-width: 2px;
--un-ring-offset-color: #fff;
--un-ring-color: #2563eb;
--un-ring-offset-shadow: var(--un-ring-inset) 0 0 0 var(--un-ring-offset-width) var(--un-ring-offset-color);
--un-ring-shadow: var(--un-ring-inset) 0 0 0 calc(2px + var(--un-ring-offset-width)) var(--un-ring-color);
box-shadow: var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow); }
[type='checkbox']:checked, [type='radio']:checked { border-color: transparent;
background-color: currentColor;
background-size: 100% 100%;
background-position: center;
background-repeat: no-repeat; }
[type='checkbox']:checked { background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e"); }
[type='radio']:checked { background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e"); }
[type='checkbox']:checked:hover, [type='checkbox']:checked:focus, [type='radio']:checked:hover, [type='radio']:checked:focus { border-color: transparent;
background-color: currentColor; }
[type='checkbox']:indeterminate { background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 16 16'%3e%3cpath stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 8h8'/%3e%3c/svg%3e");
border-color: transparent;
background-color: currentColor;
background-size: 100% 100%;
background-position: center;
background-repeat: no-repeat; }
[type='checkbox']:indeterminate:hover, [type='checkbox']:indeterminate:focus { border-color: transparent;
background-color: currentColor; }
[type='file'] { background: unset;
border-color: inherit;
border-width: 0;
border-radius: 0;
padding: 0;
font-size: unset;
line-height: inherit; }
[type='file']:focus { outline: 1px solid ButtonText , 1px auto -webkit-focus-ring-color; }
*,::before,::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: shortcuts */
.container{width:100%;}
@media (min-width: 640px){
.container{max-width:640px;}
}
@media (min-width: 768px){
.container{max-width:768px;}
}
@media (min-width: 1024px){
.container{max-width:1024px;}
}
@media (min-width: 1280px){
.container{max-width:1280px;}
}
@media (min-width: 1536px){
.container{max-width:1536px;}
}
/* layer: default */
.static{position:static;}
.mx-auto{margin-left:auto;margin-right:auto;}
.rounded-2xl{border-radius:16px;}
.rounded-b-2xl{border-bottom-left-radius:16px;border-bottom-right-radius:16px;}
.rounded-t-2xl{border-top-left-radius:16px;border-top-right-radius:16px;}
.bg-\\[\\#0A1B27\\]{--un-bg-opacity:1;background-color:rgb(10 27 39 / var(--un-bg-opacity)) /* #0A1B27 */;}
.bg-white{--un-bg-opacity:1;background-color:rgb(255 255 255 / var(--un-bg-opacity)) /* #fff */;}
.from-\\[\\#265667\\]{--un-gradient-from-position:0%;--un-gradient-from:rgb(38 86 103 / var(--un-from-opacity, 1)) var(--un-gradient-from-position);--un-gradient-to-position:100%;--un-gradient-to:rgb(38 86 103 / 0) var(--un-gradient-to-position);--un-gradient-stops:var(--un-gradient-from), var(--un-gradient-to);}
.to-\\[\\#0F3850\\]{--un-gradient-to-position:100%;--un-gradient-to:rgb(15 56 80 / var(--un-to-opacity, 1)) var(--un-gradient-to-position);}
.bg-gradient-to-r{--un-gradient-shape:to right in oklch;--un-gradient:var(--un-gradient-shape), var(--un-gradient-stops);background-image:linear-gradient(var(--un-gradient));}
.p-1{padding:4px;}
.px-1{padding-left:4px;padding-right:4px;}
.px-2{padding-left:8px;padding-right:8px;}
.py-1{padding-top:4px;padding-bottom:4px;}
.pb-1{padding-bottom:4px;}
.pt-1{padding-top:4px;}
.pt-2{padding-top:8px;}
.text-center{text-align:center;}
.text-base{font-size:16px;line-height:24px;}
.text-white{--un-text-opacity:1;color:rgb(255 255 255 / var(--un-text-opacity)) /* #fff */;}
.font-bold{font-weight:700;}
.font-sans{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";}
.uppercase{text-transform:uppercase;}
.shadow-lg{--un-shadow:var(--un-shadow-inset) 0 10px 15px -3px var(--un-shadow-color, rgb(0 0 0 / 0.1)),var(--un-shadow-inset) 0 4px 6px -4px var(--un-shadow-color, rgb(0 0 0 / 0.1));box-shadow:var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow);}
@media (min-width: 640px){
.sm\\:px-3{padding-left:12px;padding-right:12px;}
};
    `];Fo([R({type:String})],nr.prototype,"toasts",2);Fo([R({type:Boolean})],nr.prototype,"darkMode",2);Fo([R({type:Boolean})],nr.prototype,"showTitle",2);Fo([R({type:String})],nr.prototype,"assetsUrl",2);nr=Fo([re("mw-quordle-more-games")],nr);class s9{constructor(t,n,r,o,i=Pr,a=""){this._cacheLifeTime=Pr,this._gameMode="",this._exceptionId="",this._componentTime=0,this.SESSION_KEY=iw,this.host=t,t.addController(this),this._apiUrl=n,this._promoData=o,this._gameMode=r,this._cacheLifeTime=i,this._exceptionId=a,this.task=this.setPromoTask(),this._componentTime=Date.now()}hostConnected(){}hostDisconnected(){}get toasts(){if(this._promoData&&this._promoData.hasOwnProperty("data")){let t=this._promoData.data.filter(n=>n.game.name==this.gameMode.trim());return t.length>0?t[0].items.map(n=>({id:n.item.promo_id,img:n.item.img,extImg:n.item.ext_img,extImgDark:n.item.ext_img_dark,header:n.item.header,text:n.item.text,link:n.item.link,external:n.item.open_in_new_window,utm:n.item.utm})).filter(n=>n.id!=this._exceptionId.trim()):{}}else return{}}set cacheLifeTime(t){this._cacheLifeTime=t}get cacheLifeTime(){return this._cacheLifeTime}set apiUrl(t){this._apiUrl=t}get apiUrl(){return this._apiUrl}set exceptionId(t){this._exceptionId=t}get exceptionId(){return this._exceptionId}set gameMode(t){this._gameMode=t}get gameMode(){return this._gameMode}setPromoTask(){return new Qf(this.host,{args:()=>[this.apiUrl],task:async([t])=>{if(!t)throw new Error("No API Url Provided");let n=0;if(typeof sessionStorage<"u"&&sessionStorage.getItem(this.SESSION_KEY)){const r=JSON.parse(sessionStorage.getItem(this.SESSION_KEY)||"{}");r&&Object.keys(r).length!==0&&(n=(r==null?void 0:r.timestamp)||-1,this._componentTime-n<=this._cacheLifeTime&&(this._promoData=r))}return(this._promoData===void 0||n<1||this._componentTime-n>this._cacheLifeTime)&&await Me(t,{method:"GET"}).then(r=>{var o;if(r.data&&((o=r.data)==null?void 0:o.data.length)>0){let i=r.data;return this._promoData=Object.assign(i,{timestamp:Date.now()}),typeof sessionStorage<"u"&&sessionStorage.setItem(this.SESSION_KEY,JSON.stringify(this._promoData)),this._promoData}else throw new Error("Malformed Data")}).catch(r=>{throw new Error(r)}),this._promoData}})}render(t){return this.task.render(t)}}var u9=Object.defineProperty,l9=Object.getOwnPropertyDescriptor,Wt=(e,t,n,r)=>{for(var o=r>1?void 0:r?l9(t,n):t,i=e.length-1,a;i>=0;i--)(a=e[i])&&(o=(r?a(t,n,o):a(o))||o);return r&&o&&u9(t,n,o),o};let vt=class extends X{constructor(){super(...arguments),this.darkMode=!1,this.showTitle=!0,this.apiUrl="",this.assetsUrl="",this.exceptionId="",this.gameMode="quordle-daily",this.cacheLifeTime=Pr,this.showInitial=!1,this._exportparts="more-games-heading, toasts-container, toast container, toast-container, toast-link, toast-main-img, toast-img, toast-header-container, toast-header, toast-text, img-logo, toast-icon"}connectedCallback(){super.connectedCallback(),this.promoCMS=new s9(this,this.apiUrl,this.gameMode,this.promoData,this.cacheLifeTime,this.exceptionId)}disconnectedCallback(){super.disconnectedCallback()}updated(e){e.has("apiUrl")&&(this.promoCMS.apiUrl=this.apiUrl),e.has("gameMode")&&(this.promoCMS.gameMode=this.gameMode),e.has("exceptionId")&&(this.promoCMS.exceptionId=this.exceptionId),e.has("cacheLifeTime")&&(this.promoCMS.cacheLifeTime=this.cacheLifeTime)}render(){return this.promoCMS.render({error:()=>F`
        <mw-quordle-more-games
          exportparts="${this._exportparts}"
          ?showTitle="${this.showTitle}"
          ?darkMode="${this.darkMode}"
          .toasts="${this.promoCMS.toasts}"
          .assetsUrl=${this.assetsUrl}
        ></mw-quordle-more-games>
      `,initial:()=>F`
        ${he(this.showInitial,()=>F`
            <mw-quordle-more-games
              exportparts="${this._exportparts}"
              ?showTitle="${this.showTitle}"
              ?darkMode="${this.darkMode}"
              .toasts="${this.promoCMS.toasts}"
              .assetsUrl=${this.assetsUrl}
            ></mw-quordle-more-games>
          `)}
      `,pending:()=>F`
        ${he(this.showInitial,()=>F`
            <mw-quordle-more-games
              exportparts="${this._exportparts}"
              ?showTitle="${this.showTitle}"
              ?darkMode="${this.darkMode}"
              .toasts="${this.promoCMS.toasts}"
              .assetsUrl=${this.assetsUrl}
            ></mw-quordle-more-games>
          `)}
      `,complete:()=>F`
        <mw-quordle-more-games
          exportparts="${this._exportparts}"
          ?showTitle="${this.showTitle}"
          ?darkMode="${this.darkMode}"
          .toasts="${this.promoCMS.toasts}"
          .assetsUrl=${this.assetsUrl}
        ></mw-quordle-more-games>
      `})}};vt.styles=[ot(ft),ze`
      /* layer: preflights */
*,::before,::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
*,::before,::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
[type='text'], [type='email'], [type='url'], [type='password'], [type='number'], [type='date'], [type='datetime-local'], [type='month'], [type='search'], [type='tel'], [type='time'], [type='week'], [multiple], textarea, select { appearance: none;
background-color: #fff;
border-color: #6b7280;
border-width: 1px;
border-radius: 0;
padding-top: 0.5rem;
padding-right: 0.75rem;
padding-bottom: 0.5rem;
padding-left: 0.75rem;
font-size: 1rem;
line-height: 1.5rem;
--un-shadow: 0 0 #0000; }
[type='text']:focus, [type='email']:focus, [type='url']:focus, [type='password']:focus, [type='number']:focus, [type='date']:focus, [type='datetime-local']:focus, [type='month']:focus, [type='search']:focus, [type='tel']:focus, [type='time']:focus, [type='week']:focus, [multiple]:focus, textarea:focus, select:focus { outline: 2px solid transparent;
outline-offset: 2px;
--un-ring-inset: var(--un-empty,/*!*/ /*!*/);
--un-ring-offset-width: 0px;
--un-ring-offset-color: #fff;
--un-ring-color: #2563eb;
--un-ring-offset-shadow: var(--un-ring-inset) 0 0 0 var(--un-ring-offset-width) var(--un-ring-offset-color);
--un-ring-shadow: var(--un-ring-inset) 0 0 0 calc(1px + var(--un-ring-offset-width)) var(--un-ring-color);
box-shadow: var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow);
border-color: #2563eb; }
input::placeholder, textarea::placeholder { color: #6b7280;
opacity: 1; }
::-webkit-datetime-edit-fields-wrapper { padding: 0; }
::-webkit-date-and-time-value { min-height: 1.5em; }
::-webkit-datetime-edit, ::-webkit-datetime-edit-year-field, ::-webkit-datetime-edit-month-field, ::-webkit-datetime-edit-day-field, ::-webkit-datetime-edit-hour-field, ::-webkit-datetime-edit-minute-field, ::-webkit-datetime-edit-second-field, ::-webkit-datetime-edit-millisecond-field, ::-webkit-datetime-edit-meridiem-field { padding-top: 0;
padding-bottom: 0; }
select { background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
background-position: right 0.5rem center;
background-repeat: no-repeat;
background-size: 1.5em 1.5em;
padding-right: 2.5rem;
print-color-adjust: exact; }
[multiple] { background-image: initial;
background-position: initial;
background-repeat: unset;
background-size: initial;
padding-right: 0.75rem;
print-color-adjust: unset; }
[type='checkbox'], [type='radio'] { appearance: none;
padding: 0;
print-color-adjust: exact;
display: inline-block;
vertical-align: middle;
background-origin: border-box;
user-select: none;
flex-shrink: 0;
height: 1rem;
width: 1rem;
color: #2563eb;
background-color: #fff;
border-color: #6b7280;
border-width: 1px;
--un-shadow: 0 0 #0000; }
[type='checkbox'] { border-radius: 0; }
[type='radio'] { border-radius: 100%; }
[type='checkbox']:focus, [type='radio']:focus { outline: 2px solid transparent;
outline-offset: 2px;
--un-ring-inset: var(--un-empty,/*!*/ /*!*/);
--un-ring-offset-width: 2px;
--un-ring-offset-color: #fff;
--un-ring-color: #2563eb;
--un-ring-offset-shadow: var(--un-ring-inset) 0 0 0 var(--un-ring-offset-width) var(--un-ring-offset-color);
--un-ring-shadow: var(--un-ring-inset) 0 0 0 calc(2px + var(--un-ring-offset-width)) var(--un-ring-color);
box-shadow: var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow); }
[type='checkbox']:checked, [type='radio']:checked { border-color: transparent;
background-color: currentColor;
background-size: 100% 100%;
background-position: center;
background-repeat: no-repeat; }
[type='checkbox']:checked { background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e"); }
[type='radio']:checked { background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e"); }
[type='checkbox']:checked:hover, [type='checkbox']:checked:focus, [type='radio']:checked:hover, [type='radio']:checked:focus { border-color: transparent;
background-color: currentColor; }
[type='checkbox']:indeterminate { background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 16 16'%3e%3cpath stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 8h8'/%3e%3c/svg%3e");
border-color: transparent;
background-color: currentColor;
background-size: 100% 100%;
background-position: center;
background-repeat: no-repeat; }
[type='checkbox']:indeterminate:hover, [type='checkbox']:indeterminate:focus { border-color: transparent;
background-color: currentColor; }
[type='file'] { background: unset;
border-color: inherit;
border-width: 0;
border-radius: 0;
padding: 0;
font-size: unset;
line-height: inherit; }
[type='file']:focus { outline: 1px solid ButtonText , 1px auto -webkit-focus-ring-color; }
*,::before,::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: default */
.static{position:static;};
    `];Wt([R({type:String})],vt.prototype,"promoData",2);Wt([R({type:Boolean})],vt.prototype,"darkMode",2);Wt([R({type:Boolean})],vt.prototype,"showTitle",2);Wt([R({type:String})],vt.prototype,"apiUrl",2);Wt([R({type:String})],vt.prototype,"assetsUrl",2);Wt([R({type:String})],vt.prototype,"exceptionId",2);Wt([R({type:String})],vt.prototype,"gameMode",2);Wt([R({type:Number})],vt.prototype,"cacheLifeTime",2);Wt([R({type:Boolean})],vt.prototype,"showInitial",2);vt=Wt([re("mw-quordle-more-games-cms")],vt);const c9=JSON.parse('[{"status":"published","game":{"name":"quordle-daily"},"items":[{"item":{"id":9,"sort":null,"header":"Daily Chill","text":"12 guesses and fewer unusual words","link":"https://dev.merriam-webster.com/games/quordle/#/chill","promo_id":"quordle-daily-chill","utm":null,"open_in_new_window":false,"img":{"filename_disk":"5d8346b4-6c3b-45f4-93bf-c4509d6f49a7.png"},"ext_img":null,"ext_img_dark":null}},{"item":{"id":10,"sort":null,"header":"Daily Extreme","text":"8 guesses and more unusual words","link":"https://dev.merriam-webster.com/games/quordle/#/extreme","promo_id":"quordle-daily-extreme","utm":null,"open_in_new_window":false,"img":{"filename_disk":"9d9b65d6-bfe4-4c01-94f8-2597ab50137f.png"},"ext_img":null,"ext_img_dark":null}},{"item":{"id":8,"sort":null,"header":"Tightrope","text":"A daily trivia game","link":"https://mendel-dev.dev-ext.britannica.com/quiz/tightrope","promo_id":"tightrope","utm":null,"open_in_new_window":true,"img":{"filename_disk":"85e90431-a869-41ea-946b-0fb3d6bf1f2c.png"},"ext_img":null,"ext_img_dark":null}},{"item":{"id":2,"sort":null,"header":"Quordle SEQUENCE","text":"One step at a time","link":"https://dev.merriam-webster.com/games/quordle/#/sequence","promo_id":"quordle-sequence","utm":null,"open_in_new_window":false,"img":{"filename_disk":"2e0700a9-e96d-4190-94db-905555ebd149.webp"},"ext_img":null,"ext_img_dark":null}},{"item":{"id":1,"sort":null,"header":"Octordle","text":"Solve 8 words at once","link":"https://mendel-dev.dev-ext.britannica.com/games/octordle/","promo_id":"octordle","utm":null,"open_in_new_window":false,"img":{"filename_disk":"c1b83cac-7cf9-4601-a876-77a590d560e9.webp"},"ext_img":{"filename_disk":"2b4e4de1-eda7-40e4-b75e-366b41021c90.webp"},"ext_img_dark":{"filename_disk":"2b4e4de1-eda7-40e4-b75e-366b41021c90.webp"}}},{"item":{"id":6,"sort":null,"header":"Pilfer","text":"A delightfully ruthless word game","link":"https://dev.merriam-webster.com/games/pilfer","promo_id":"pilfer","utm":"utm_source=ebsite&utm_medium=octordle&utm_campaign=mw-pilfer-promo","open_in_new_window":true,"img":{"filename_disk":"41081314-a8f0-4928-98ec-054301ee85ee.svg"},"ext_img":null,"ext_img_dark":null}},{"item":{"id":3,"sort":null,"header":"BLOSSOM","text":"Pick the best words!","link":"https://dev.merriam-webster.com/games/blossom-word-game/","promo_id":"blossom","utm":"utm_source=ebsite&utm_medium=octordle&utm_campaign=mw-blossom-promo","open_in_new_window":true,"img":{"filename_disk":"b27aa58b-a979-4a72-91a7-0aff17dadbcd.webp"},"ext_img":null,"ext_img_dark":null}},{"item":{"id":5,"sort":null,"header":"The Missing Letter","text":"A daily crossword with a twist","link":"https://dev.merriam-webster.com/games/missing-letter","promo_id":"missing-letter","utm":"utm_source=ebsite&utm_medium=octordle&utm_campaign=mw-missing-letter-promo","open_in_new_window":true,"img":{"filename_disk":"b2a60f58-1fc5-4662-bfa6-1a6cb984abb2.webp"},"ext_img":null,"ext_img_dark":null}},{"item":{"id":4,"sort":null,"header":"Victordle","text":"Play head-to-head","link":"https://mendel-dev.dev-ext.britannica.com/games/victordle/","promo_id":"victordle","utm":null,"open_in_new_window":true,"img":{"filename_disk":"13f24537-57c6-4580-930c-17c0b4cd87b7.webp"},"ext_img":null,"ext_img_dark":null}}]},{"status":"published","game":{"name":"quordle-sequence"},"items":[{"item":{"id":10,"sort":null,"header":"Daily Extreme","text":"8 guesses and more unusual words","link":"https://dev.merriam-webster.com/games/quordle/#/extreme","promo_id":"quordle-daily-extreme","utm":null,"open_in_new_window":false,"img":{"filename_disk":"9d9b65d6-bfe4-4c01-94f8-2597ab50137f.png"},"ext_img":null,"ext_img_dark":null}},{"item":{"id":9,"sort":null,"header":"Daily Chill","text":"12 guesses and fewer unusual words","link":"https://dev.merriam-webster.com/games/quordle/#/chill","promo_id":"quordle-daily-chill","utm":null,"open_in_new_window":false,"img":{"filename_disk":"5d8346b4-6c3b-45f4-93bf-c4509d6f49a7.png"},"ext_img":null,"ext_img_dark":null}},{"item":{"id":8,"sort":null,"header":"Tightrope","text":"A daily trivia game","link":"https://mendel-dev.dev-ext.britannica.com/quiz/tightrope","promo_id":"tightrope","utm":null,"open_in_new_window":true,"img":{"filename_disk":"85e90431-a869-41ea-946b-0fb3d6bf1f2c.png"},"ext_img":null,"ext_img_dark":null}},{"item":{"id":1,"sort":null,"header":"Octordle","text":"Solve 8 words at once","link":"https://mendel-dev.dev-ext.britannica.com/games/octordle/","promo_id":"octordle","utm":null,"open_in_new_window":false,"img":{"filename_disk":"c1b83cac-7cf9-4601-a876-77a590d560e9.webp"},"ext_img":{"filename_disk":"2b4e4de1-eda7-40e4-b75e-366b41021c90.webp"},"ext_img_dark":{"filename_disk":"2b4e4de1-eda7-40e4-b75e-366b41021c90.webp"}}},{"item":{"id":6,"sort":null,"header":"Pilfer","text":"A delightfully ruthless word game","link":"https://dev.merriam-webster.com/games/pilfer","promo_id":"pilfer","utm":"utm_source=ebsite&utm_medium=octordle&utm_campaign=mw-pilfer-promo","open_in_new_window":true,"img":{"filename_disk":"41081314-a8f0-4928-98ec-054301ee85ee.svg"},"ext_img":null,"ext_img_dark":null}},{"item":{"id":3,"sort":null,"header":"BLOSSOM","text":"Pick the best words!","link":"https://dev.merriam-webster.com/games/blossom-word-game/","promo_id":"blossom","utm":"utm_source=ebsite&utm_medium=octordle&utm_campaign=mw-blossom-promo","open_in_new_window":true,"img":{"filename_disk":"b27aa58b-a979-4a72-91a7-0aff17dadbcd.webp"},"ext_img":null,"ext_img_dark":null}},{"item":{"id":5,"sort":null,"header":"The Missing Letter","text":"A daily crossword with a twist","link":"https://dev.merriam-webster.com/games/missing-letter","promo_id":"missing-letter","utm":"utm_source=ebsite&utm_medium=octordle&utm_campaign=mw-missing-letter-promo","open_in_new_window":true,"img":{"filename_disk":"b2a60f58-1fc5-4662-bfa6-1a6cb984abb2.webp"},"ext_img":null,"ext_img_dark":null}},{"item":{"id":7,"sort":null,"header":"Twofer Goofer ","text":"Think you know it, poet?","link":"https://dev.merriam-webster.com/games/twofer-goofer","promo_id":"twofer","utm":null,"open_in_new_window":true,"img":{"filename_disk":"4d32c07b-4b7f-44bc-89df-c5abb05896b6.svg"},"ext_img":null,"ext_img_dark":null}},{"item":{"id":4,"sort":null,"header":"Victordle","text":"Play head-to-head","link":"https://mendel-dev.dev-ext.britannica.com/games/victordle/","promo_id":"victordle","utm":null,"open_in_new_window":true,"img":{"filename_disk":"13f24537-57c6-4580-930c-17c0b4cd87b7.webp"},"ext_img":null,"ext_img_dark":null}}]},{"status":"published","game":{"name":"quordle-weekly"},"items":[]},{"status":"published","game":{"name":"octordle-daily"},"items":[{"item":{"id":13,"sort":null,"header":"Octordle SEQUENCE","text":"One step at a time","link":"https://mendel-dev.dev-ext.britannica.com/games/octordle/daily-sequence","promo_id":"octordle-sequence","utm":null,"open_in_new_window":true,"img":{"filename_disk":"444c01e6-d932-4ed3-9301-ee5edae1bde1.webp"},"ext_img":null,"ext_img_dark":null}},{"item":{"id":8,"sort":null,"header":"Tightrope","text":"A daily trivia game","link":"https://mendel-dev.dev-ext.britannica.com/quiz/tightrope","promo_id":"tightrope","utm":null,"open_in_new_window":true,"img":{"filename_disk":"85e90431-a869-41ea-946b-0fb3d6bf1f2c.png"},"ext_img":null,"ext_img_dark":null}},{"item":{"id":12,"sort":null,"header":"Quordle","text":"Solve 4 words at once","link":"https://dev.merriam-webster.com/games/quordle/","promo_id":"quordle","utm":"utm_source=ebsite&utm_medium=octordle&utm_campaign=mw-quordle-promo","open_in_new_window":true,"img":{"filename_disk":"2f9306cc-38ee-40aa-833b-6b2aec0612cb.webp"},"ext_img":null,"ext_img_dark":null}},{"item":{"id":6,"sort":null,"header":"Pilfer","text":"A delightfully ruthless word game","link":"https://dev.merriam-webster.com/games/pilfer","promo_id":"pilfer","utm":"utm_source=ebsite&utm_medium=octordle&utm_campaign=mw-pilfer-promo","open_in_new_window":true,"img":{"filename_disk":"41081314-a8f0-4928-98ec-054301ee85ee.svg"},"ext_img":null,"ext_img_dark":null}},{"item":{"id":3,"sort":null,"header":"BLOSSOM","text":"Pick the best words!","link":"https://dev.merriam-webster.com/games/blossom-word-game/","promo_id":"blossom","utm":"utm_source=ebsite&utm_medium=octordle&utm_campaign=mw-blossom-promo","open_in_new_window":true,"img":{"filename_disk":"b27aa58b-a979-4a72-91a7-0aff17dadbcd.webp"},"ext_img":null,"ext_img_dark":null}},{"item":{"id":5,"sort":null,"header":"The Missing Letter","text":"A daily crossword with a twist","link":"https://dev.merriam-webster.com/games/missing-letter","promo_id":"missing-letter","utm":"utm_source=ebsite&utm_medium=octordle&utm_campaign=mw-missing-letter-promo","open_in_new_window":true,"img":{"filename_disk":"b2a60f58-1fc5-4662-bfa6-1a6cb984abb2.webp"},"ext_img":null,"ext_img_dark":null}},{"item":{"id":4,"sort":null,"header":"Victordle","text":"Play head-to-head","link":"https://mendel-dev.dev-ext.britannica.com/games/victordle/","promo_id":"victordle","utm":null,"open_in_new_window":true,"img":{"filename_disk":"13f24537-57c6-4580-930c-17c0b4cd87b7.webp"},"ext_img":null,"ext_img_dark":null}}]},{"status":"published","game":{"name":"octordle-sequence"},"items":[{"item":{"id":8,"sort":null,"header":"Tightrope","text":"A daily trivia game","link":"https://mendel-dev.dev-ext.britannica.com/quiz/tightrope","promo_id":"tightrope","utm":null,"open_in_new_window":true,"img":{"filename_disk":"85e90431-a869-41ea-946b-0fb3d6bf1f2c.png"},"ext_img":null,"ext_img_dark":null}},{"item":{"id":12,"sort":null,"header":"Quordle","text":"Solve 4 words at once","link":"https://dev.merriam-webster.com/games/quordle/","promo_id":"quordle","utm":"utm_source=ebsite&utm_medium=octordle&utm_campaign=mw-quordle-promo","open_in_new_window":true,"img":{"filename_disk":"2f9306cc-38ee-40aa-833b-6b2aec0612cb.webp"},"ext_img":null,"ext_img_dark":null}},{"item":{"id":6,"sort":null,"header":"Pilfer","text":"A delightfully ruthless word game","link":"https://dev.merriam-webster.com/games/pilfer","promo_id":"pilfer","utm":"utm_source=ebsite&utm_medium=octordle&utm_campaign=mw-pilfer-promo","open_in_new_window":true,"img":{"filename_disk":"41081314-a8f0-4928-98ec-054301ee85ee.svg"},"ext_img":null,"ext_img_dark":null}},{"item":{"id":3,"sort":null,"header":"BLOSSOM","text":"Pick the best words!","link":"https://dev.merriam-webster.com/games/blossom-word-game/","promo_id":"blossom","utm":"utm_source=ebsite&utm_medium=octordle&utm_campaign=mw-blossom-promo","open_in_new_window":true,"img":{"filename_disk":"b27aa58b-a979-4a72-91a7-0aff17dadbcd.webp"},"ext_img":null,"ext_img_dark":null}},{"item":{"id":5,"sort":null,"header":"The Missing Letter","text":"A daily crossword with a twist","link":"https://dev.merriam-webster.com/games/missing-letter","promo_id":"missing-letter","utm":"utm_source=ebsite&utm_medium=octordle&utm_campaign=mw-missing-letter-promo","open_in_new_window":true,"img":{"filename_disk":"b2a60f58-1fc5-4662-bfa6-1a6cb984abb2.webp"},"ext_img":null,"ext_img_dark":null}},{"item":{"id":4,"sort":null,"header":"Victordle","text":"Play head-to-head","link":"https://mendel-dev.dev-ext.britannica.com/games/victordle/","promo_id":"victordle","utm":null,"open_in_new_window":true,"img":{"filename_disk":"13f24537-57c6-4580-930c-17c0b4cd87b7.webp"},"ext_img":null,"ext_img_dark":null}}]},{"status":"published","game":{"name":"octordle-practice"},"items":[{"item":{"id":8,"sort":null,"header":"Tightrope","text":"A daily trivia game","link":"https://mendel-dev.dev-ext.britannica.com/quiz/tightrope","promo_id":"tightrope","utm":null,"open_in_new_window":true,"img":{"filename_disk":"85e90431-a869-41ea-946b-0fb3d6bf1f2c.png"},"ext_img":null,"ext_img_dark":null}},{"item":{"id":1,"sort":null,"header":"Octordle","text":"Solve 8 words at once","link":"https://mendel-dev.dev-ext.britannica.com/games/octordle/","promo_id":"octordle","utm":null,"open_in_new_window":false,"img":{"filename_disk":"c1b83cac-7cf9-4601-a876-77a590d560e9.webp"},"ext_img":{"filename_disk":"2b4e4de1-eda7-40e4-b75e-366b41021c90.webp"},"ext_img_dark":{"filename_disk":"2b4e4de1-eda7-40e4-b75e-366b41021c90.webp"}}},{"item":{"id":2,"sort":null,"header":"Quordle SEQUENCE","text":"One step at a time","link":"https://dev.merriam-webster.com/games/quordle/#/sequence","promo_id":"quordle-sequence","utm":null,"open_in_new_window":false,"img":{"filename_disk":"2e0700a9-e96d-4190-94db-905555ebd149.webp"},"ext_img":null,"ext_img_dark":null}},{"item":{"id":4,"sort":null,"header":"Victordle","text":"Play head-to-head","link":"https://mendel-dev.dev-ext.britannica.com/games/victordle/","promo_id":"victordle","utm":null,"open_in_new_window":true,"img":{"filename_disk":"13f24537-57c6-4580-930c-17c0b4cd87b7.webp"},"ext_img":null,"ext_img_dark":null}},{"item":{"id":3,"sort":null,"header":"BLOSSOM","text":"Pick the best words!","link":"https://dev.merriam-webster.com/games/blossom-word-game/","promo_id":"blossom","utm":"utm_source=ebsite&utm_medium=octordle&utm_campaign=mw-blossom-promo","open_in_new_window":true,"img":{"filename_disk":"b27aa58b-a979-4a72-91a7-0aff17dadbcd.webp"},"ext_img":null,"ext_img_dark":null}},{"item":{"id":5,"sort":null,"header":"The Missing Letter","text":"A daily crossword with a twist","link":"https://dev.merriam-webster.com/games/missing-letter","promo_id":"missing-letter","utm":"utm_source=ebsite&utm_medium=octordle&utm_campaign=mw-missing-letter-promo","open_in_new_window":true,"img":{"filename_disk":"b2a60f58-1fc5-4662-bfa6-1a6cb984abb2.webp"},"ext_img":null,"ext_img_dark":null}},{"item":{"id":6,"sort":null,"header":"Pilfer","text":"A delightfully ruthless word game","link":"https://dev.merriam-webster.com/games/pilfer","promo_id":"pilfer","utm":"utm_source=ebsite&utm_medium=octordle&utm_campaign=mw-pilfer-promo","open_in_new_window":true,"img":{"filename_disk":"41081314-a8f0-4928-98ec-054301ee85ee.svg"},"ext_img":null,"ext_img_dark":null}},{"item":{"id":7,"sort":null,"header":"Twofer Goofer ","text":"Think you know it, poet?","link":"https://dev.merriam-webster.com/games/twofer-goofer","promo_id":"twofer","utm":null,"open_in_new_window":true,"img":{"filename_disk":"4d32c07b-4b7f-44bc-89df-c5abb05896b6.svg"},"ext_img":null,"ext_img_dark":null}}]},{"status":"published","game":{"name":"blossom"},"items":[{"item":{"id":2,"sort":null,"header":"Quordle SEQUENCE","text":"One step at a time","link":"https://dev.merriam-webster.com/games/quordle/#/sequence","promo_id":"quordle-sequence","utm":null,"open_in_new_window":false,"img":{"filename_disk":"2e0700a9-e96d-4190-94db-905555ebd149.webp"},"ext_img":null,"ext_img_dark":null}},{"item":{"id":6,"sort":null,"header":"Pilfer","text":"A delightfully ruthless word game","link":"https://dev.merriam-webster.com/games/pilfer","promo_id":"pilfer","utm":"utm_source=ebsite&utm_medium=octordle&utm_campaign=mw-pilfer-promo","open_in_new_window":true,"img":{"filename_disk":"41081314-a8f0-4928-98ec-054301ee85ee.svg"},"ext_img":null,"ext_img_dark":null}},{"item":{"id":1,"sort":null,"header":"Octordle","text":"Solve 8 words at once","link":"https://mendel-dev.dev-ext.britannica.com/games/octordle/","promo_id":"octordle","utm":null,"open_in_new_window":false,"img":{"filename_disk":"c1b83cac-7cf9-4601-a876-77a590d560e9.webp"},"ext_img":{"filename_disk":"2b4e4de1-eda7-40e4-b75e-366b41021c90.webp"},"ext_img_dark":{"filename_disk":"2b4e4de1-eda7-40e4-b75e-366b41021c90.webp"}}},{"item":{"id":5,"sort":null,"header":"The Missing Letter","text":"A daily crossword with a twist","link":"https://dev.merriam-webster.com/games/missing-letter","promo_id":"missing-letter","utm":"utm_source=ebsite&utm_medium=octordle&utm_campaign=mw-missing-letter-promo","open_in_new_window":true,"img":{"filename_disk":"b2a60f58-1fc5-4662-bfa6-1a6cb984abb2.webp"},"ext_img":null,"ext_img_dark":null}},{"item":{"id":7,"sort":null,"header":"Twofer Goofer ","text":"Think you know it, poet?","link":"https://dev.merriam-webster.com/games/twofer-goofer","promo_id":"twofer","utm":null,"open_in_new_window":true,"img":{"filename_disk":"4d32c07b-4b7f-44bc-89df-c5abb05896b6.svg"},"ext_img":null,"ext_img_dark":null}},{"item":{"id":4,"sort":null,"header":"Victordle","text":"Play head-to-head","link":"https://mendel-dev.dev-ext.britannica.com/games/victordle/","promo_id":"victordle","utm":null,"open_in_new_window":true,"img":{"filename_disk":"13f24537-57c6-4580-930c-17c0b4cd87b7.webp"},"ext_img":null,"ext_img_dark":null}}]},{"status":"published","game":{"name":"quordle-daily_chill"},"items":[{"item":{"id":10,"sort":null,"header":"Daily Extreme","text":"8 guesses and more unusual words","link":"https://dev.merriam-webster.com/games/quordle/#/extreme","promo_id":"quordle-daily-extreme","utm":null,"open_in_new_window":false,"img":{"filename_disk":"9d9b65d6-bfe4-4c01-94f8-2597ab50137f.png"},"ext_img":null,"ext_img_dark":null}},{"item":{"id":8,"sort":null,"header":"Tightrope","text":"A daily trivia game","link":"https://mendel-dev.dev-ext.britannica.com/quiz/tightrope","promo_id":"tightrope","utm":null,"open_in_new_window":true,"img":{"filename_disk":"85e90431-a869-41ea-946b-0fb3d6bf1f2c.png"},"ext_img":null,"ext_img_dark":null}},{"item":{"id":2,"sort":null,"header":"Quordle SEQUENCE","text":"One step at a time","link":"https://dev.merriam-webster.com/games/quordle/#/sequence","promo_id":"quordle-sequence","utm":null,"open_in_new_window":false,"img":{"filename_disk":"2e0700a9-e96d-4190-94db-905555ebd149.webp"},"ext_img":null,"ext_img_dark":null}},{"item":{"id":1,"sort":null,"header":"Octordle","text":"Solve 8 words at once","link":"https://mendel-dev.dev-ext.britannica.com/games/octordle/","promo_id":"octordle","utm":null,"open_in_new_window":false,"img":{"filename_disk":"c1b83cac-7cf9-4601-a876-77a590d560e9.webp"},"ext_img":{"filename_disk":"2b4e4de1-eda7-40e4-b75e-366b41021c90.webp"},"ext_img_dark":{"filename_disk":"2b4e4de1-eda7-40e4-b75e-366b41021c90.webp"}}},{"item":{"id":6,"sort":null,"header":"Pilfer","text":"A delightfully ruthless word game","link":"https://dev.merriam-webster.com/games/pilfer","promo_id":"pilfer","utm":"utm_source=ebsite&utm_medium=octordle&utm_campaign=mw-pilfer-promo","open_in_new_window":true,"img":{"filename_disk":"41081314-a8f0-4928-98ec-054301ee85ee.svg"},"ext_img":null,"ext_img_dark":null}},{"item":{"id":3,"sort":null,"header":"BLOSSOM","text":"Pick the best words!","link":"https://dev.merriam-webster.com/games/blossom-word-game/","promo_id":"blossom","utm":"utm_source=ebsite&utm_medium=octordle&utm_campaign=mw-blossom-promo","open_in_new_window":true,"img":{"filename_disk":"b27aa58b-a979-4a72-91a7-0aff17dadbcd.webp"},"ext_img":null,"ext_img_dark":null}},{"item":{"id":5,"sort":null,"header":"The Missing Letter","text":"A daily crossword with a twist","link":"https://dev.merriam-webster.com/games/missing-letter","promo_id":"missing-letter","utm":"utm_source=ebsite&utm_medium=octordle&utm_campaign=mw-missing-letter-promo","open_in_new_window":true,"img":{"filename_disk":"b2a60f58-1fc5-4662-bfa6-1a6cb984abb2.webp"},"ext_img":null,"ext_img_dark":null}},{"item":{"id":4,"sort":null,"header":"Victordle","text":"Play head-to-head","link":"https://mendel-dev.dev-ext.britannica.com/games/victordle/","promo_id":"victordle","utm":null,"open_in_new_window":true,"img":{"filename_disk":"13f24537-57c6-4580-930c-17c0b4cd87b7.webp"},"ext_img":null,"ext_img_dark":null}}]},{"status":"published","game":{"name":"quordle-daily_extreme"},"items":[{"item":{"id":9,"sort":null,"header":"Daily Chill","text":"12 guesses and fewer unusual words","link":"https://dev.merriam-webster.com/games/quordle/#/chill","promo_id":"quordle-daily-chill","utm":null,"open_in_new_window":false,"img":{"filename_disk":"5d8346b4-6c3b-45f4-93bf-c4509d6f49a7.png"},"ext_img":null,"ext_img_dark":null}},{"item":{"id":8,"sort":null,"header":"Tightrope","text":"A daily trivia game","link":"https://mendel-dev.dev-ext.britannica.com/quiz/tightrope","promo_id":"tightrope","utm":null,"open_in_new_window":true,"img":{"filename_disk":"85e90431-a869-41ea-946b-0fb3d6bf1f2c.png"},"ext_img":null,"ext_img_dark":null}},{"item":{"id":2,"sort":null,"header":"Quordle SEQUENCE","text":"One step at a time","link":"https://dev.merriam-webster.com/games/quordle/#/sequence","promo_id":"quordle-sequence","utm":null,"open_in_new_window":false,"img":{"filename_disk":"2e0700a9-e96d-4190-94db-905555ebd149.webp"},"ext_img":null,"ext_img_dark":null}},{"item":{"id":1,"sort":null,"header":"Octordle","text":"Solve 8 words at once","link":"https://mendel-dev.dev-ext.britannica.com/games/octordle/","promo_id":"octordle","utm":null,"open_in_new_window":false,"img":{"filename_disk":"c1b83cac-7cf9-4601-a876-77a590d560e9.webp"},"ext_img":{"filename_disk":"2b4e4de1-eda7-40e4-b75e-366b41021c90.webp"},"ext_img_dark":{"filename_disk":"2b4e4de1-eda7-40e4-b75e-366b41021c90.webp"}}},{"item":{"id":6,"sort":null,"header":"Pilfer","text":"A delightfully ruthless word game","link":"https://dev.merriam-webster.com/games/pilfer","promo_id":"pilfer","utm":"utm_source=ebsite&utm_medium=octordle&utm_campaign=mw-pilfer-promo","open_in_new_window":true,"img":{"filename_disk":"41081314-a8f0-4928-98ec-054301ee85ee.svg"},"ext_img":null,"ext_img_dark":null}},{"item":{"id":3,"sort":null,"header":"BLOSSOM","text":"Pick the best words!","link":"https://dev.merriam-webster.com/games/blossom-word-game/","promo_id":"blossom","utm":"utm_source=ebsite&utm_medium=octordle&utm_campaign=mw-blossom-promo","open_in_new_window":true,"img":{"filename_disk":"b27aa58b-a979-4a72-91a7-0aff17dadbcd.webp"},"ext_img":null,"ext_img_dark":null}},{"item":{"id":5,"sort":null,"header":"The Missing Letter","text":"A daily crossword with a twist","link":"https://dev.merriam-webster.com/games/missing-letter","promo_id":"missing-letter","utm":"utm_source=ebsite&utm_medium=octordle&utm_campaign=mw-missing-letter-promo","open_in_new_window":true,"img":{"filename_disk":"b2a60f58-1fc5-4662-bfa6-1a6cb984abb2.webp"},"ext_img":null,"ext_img_dark":null}},{"item":{"id":4,"sort":null,"header":"Victordle","text":"Play head-to-head","link":"https://mendel-dev.dev-ext.britannica.com/games/victordle/","promo_id":"victordle","utm":null,"open_in_new_window":true,"img":{"filename_disk":"13f24537-57c6-4580-930c-17c0b4cd87b7.webp"},"ext_img":null,"ext_img_dark":null}}]}]'),e6={data:c9},d9=JSON.parse('[{"status":"published","game":{"name":"quordle-weekly"},"items":[{"item":{"id":14,"sort":null,"header":"Daily Chill","text":"12 guesses and fewer unusual words","link":"https://www.merriam-webster.com/games/quordle/#/chill","external":true,"utm":null,"promo_id":"quordle-daily-chill","img":{"filename_disk":"ef9997f2-364b-4613-9c96-21fd6c2868e4.png"},"ext_img":null,"ext_img_dark":null}},{"item":{"id":15,"sort":null,"header":"Daily Extreme","text":"8 guesses and more unusual words","link":"https://www.merriam-webster.com/games/quordle/#/extreme","external":true,"utm":null,"promo_id":"quordle-daily-extreme","img":{"filename_disk":"16957b56-fabc-4137-8314-d2109a3ebe00.png"},"ext_img":null,"ext_img_dark":null}},{"item":{"id":13,"sort":null,"header":"Tightrope","text":"A daily trivia challenge","link":"https://www.britannica.com/quiz/tightrope","external":true,"utm":null,"promo_id":"tightrope","img":{"filename_disk":"58995966-6a4e-49ca-b596-6082afc58fda.webp"},"ext_img":{"filename_disk":"e3810de2-fb7b-4d7f-96c5-002435df85cf.webp"},"ext_img_dark":{"filename_disk":"e3810de2-fb7b-4d7f-96c5-002435df85cf.webp"}}},{"item":{"id":7,"sort":null,"header":"Quordle SEQUENCE","text":"One step at a time","link":"https://www.merriam-webster.com/games/quordle/#/sequence","external":true,"utm":null,"promo_id":"quordle-sequence","img":{"filename_disk":"43859056-7ae3-4060-826f-f2b53f5b4216.webp"},"ext_img":null,"ext_img_dark":null}},{"item":{"id":6,"sort":null,"header":"Octordle","text":"Solve 8 words at once","link":"https://www.britannica.com/games/octordle/","external":true,"utm":null,"promo_id":"octordle","img":{"filename_disk":"a3f2e6bc-9a5b-402d-8292-295bc2525ec7.webp"},"ext_img":{"filename_disk":"e3810de2-fb7b-4d7f-96c5-002435df85cf.webp"},"ext_img_dark":{"filename_disk":"e3810de2-fb7b-4d7f-96c5-002435df85cf.webp"}}},{"item":{"id":11,"sort":null,"header":"Pilfer","text":"A delightfully ruthless word game","link":"https://www.merriam-webster.com/games/pilfer","external":true,"utm":null,"promo_id":"pilfer","img":{"filename_disk":"894a22e5-f2d0-4e47-a651-eb3970e7e48f.webp"},"ext_img":null,"ext_img_dark":null}},{"item":{"id":8,"sort":null,"header":"BLOSSOM","text":"Pick the best words!","link":"https://www.merriam-webster.com/games/blossom-word-game","external":true,"utm":null,"promo_id":"blossom","img":{"filename_disk":"08e4bb21-29f5-49e0-aba5-7cd201fd5a1b.webp"},"ext_img":null,"ext_img_dark":null}},{"item":{"id":10,"sort":null,"header":"The Missing Letter","text":"A crossword with a twist","link":"https://www.merriam-webster.com/games/missing-letter","external":true,"utm":null,"promo_id":"missing-letter","img":{"filename_disk":"b7ba60b3-bbf6-4599-a788-4b400cf15562.webp"},"ext_img":null,"ext_img_dark":null}},{"item":{"id":9,"sort":null,"header":"Victordle","text":"Play head-to-head","link":"https://www.britannica.com/games/victordle/","external":true,"utm":null,"promo_id":"victordle","img":{"filename_disk":"8ab4ea26-4f41-4f2f-a524-74136b0e7c6a.webp"},"ext_img":{"filename_disk":"e3810de2-fb7b-4d7f-96c5-002435df85cf.webp"},"ext_img_dark":{"filename_disk":"e3810de2-fb7b-4d7f-96c5-002435df85cf.webp"}}}]},{"status":"published","game":{"name":"quordle-daily"},"items":[{"item":{"id":14,"sort":null,"header":"Daily Chill","text":"12 guesses and fewer unusual words","link":"https://www.merriam-webster.com/games/quordle/#/chill","external":true,"utm":null,"promo_id":"quordle-daily-chill","img":{"filename_disk":"ef9997f2-364b-4613-9c96-21fd6c2868e4.png"},"ext_img":null,"ext_img_dark":null}},{"item":{"id":15,"sort":null,"header":"Daily Extreme","text":"8 guesses and more unusual words","link":"https://www.merriam-webster.com/games/quordle/#/extreme","external":true,"utm":null,"promo_id":"quordle-daily-extreme","img":{"filename_disk":"16957b56-fabc-4137-8314-d2109a3ebe00.png"},"ext_img":null,"ext_img_dark":null}},{"item":{"id":13,"sort":null,"header":"Tightrope","text":"A daily trivia challenge","link":"https://www.britannica.com/quiz/tightrope","external":true,"utm":null,"promo_id":"tightrope","img":{"filename_disk":"58995966-6a4e-49ca-b596-6082afc58fda.webp"},"ext_img":{"filename_disk":"e3810de2-fb7b-4d7f-96c5-002435df85cf.webp"},"ext_img_dark":{"filename_disk":"e3810de2-fb7b-4d7f-96c5-002435df85cf.webp"}}},{"item":{"id":7,"sort":null,"header":"Quordle SEQUENCE","text":"One step at a time","link":"https://www.merriam-webster.com/games/quordle/#/sequence","external":true,"utm":null,"promo_id":"quordle-sequence","img":{"filename_disk":"43859056-7ae3-4060-826f-f2b53f5b4216.webp"},"ext_img":null,"ext_img_dark":null}},{"item":{"id":6,"sort":null,"header":"Octordle","text":"Solve 8 words at once","link":"https://www.britannica.com/games/octordle/","external":true,"utm":null,"promo_id":"octordle","img":{"filename_disk":"a3f2e6bc-9a5b-402d-8292-295bc2525ec7.webp"},"ext_img":{"filename_disk":"e3810de2-fb7b-4d7f-96c5-002435df85cf.webp"},"ext_img_dark":{"filename_disk":"e3810de2-fb7b-4d7f-96c5-002435df85cf.webp"}}},{"item":{"id":11,"sort":null,"header":"Pilfer","text":"A delightfully ruthless word game","link":"https://www.merriam-webster.com/games/pilfer","external":true,"utm":null,"promo_id":"pilfer","img":{"filename_disk":"894a22e5-f2d0-4e47-a651-eb3970e7e48f.webp"},"ext_img":null,"ext_img_dark":null}},{"item":{"id":8,"sort":null,"header":"BLOSSOM","text":"Pick the best words!","link":"https://www.merriam-webster.com/games/blossom-word-game","external":true,"utm":null,"promo_id":"blossom","img":{"filename_disk":"08e4bb21-29f5-49e0-aba5-7cd201fd5a1b.webp"},"ext_img":null,"ext_img_dark":null}},{"item":{"id":10,"sort":null,"header":"The Missing Letter","text":"A crossword with a twist","link":"https://www.merriam-webster.com/games/missing-letter","external":true,"utm":null,"promo_id":"missing-letter","img":{"filename_disk":"b7ba60b3-bbf6-4599-a788-4b400cf15562.webp"},"ext_img":null,"ext_img_dark":null}},{"item":{"id":9,"sort":null,"header":"Victordle","text":"Play head-to-head","link":"https://www.britannica.com/games/victordle/","external":true,"utm":null,"promo_id":"victordle","img":{"filename_disk":"8ab4ea26-4f41-4f2f-a524-74136b0e7c6a.webp"},"ext_img":{"filename_disk":"e3810de2-fb7b-4d7f-96c5-002435df85cf.webp"},"ext_img_dark":{"filename_disk":"e3810de2-fb7b-4d7f-96c5-002435df85cf.webp"}}}]},{"status":"published","game":{"name":"quordle-sequence"},"items":[{"item":{"id":15,"sort":null,"header":"Daily Extreme","text":"8 guesses and more unusual words","link":"https://www.merriam-webster.com/games/quordle/#/extreme","external":true,"utm":null,"promo_id":"quordle-daily-extreme","img":{"filename_disk":"16957b56-fabc-4137-8314-d2109a3ebe00.png"},"ext_img":null,"ext_img_dark":null}},{"item":{"id":14,"sort":null,"header":"Daily Chill","text":"12 guesses and fewer unusual words","link":"https://www.merriam-webster.com/games/quordle/#/chill","external":true,"utm":null,"promo_id":"quordle-daily-chill","img":{"filename_disk":"ef9997f2-364b-4613-9c96-21fd6c2868e4.png"},"ext_img":null,"ext_img_dark":null}},{"item":{"id":13,"sort":null,"header":"Tightrope","text":"A daily trivia challenge","link":"https://www.britannica.com/quiz/tightrope","external":true,"utm":null,"promo_id":"tightrope","img":{"filename_disk":"58995966-6a4e-49ca-b596-6082afc58fda.webp"},"ext_img":{"filename_disk":"e3810de2-fb7b-4d7f-96c5-002435df85cf.webp"},"ext_img_dark":{"filename_disk":"e3810de2-fb7b-4d7f-96c5-002435df85cf.webp"}}},{"item":{"id":6,"sort":null,"header":"Octordle","text":"Solve 8 words at once","link":"https://www.britannica.com/games/octordle/","external":true,"utm":null,"promo_id":"octordle","img":{"filename_disk":"a3f2e6bc-9a5b-402d-8292-295bc2525ec7.webp"},"ext_img":{"filename_disk":"e3810de2-fb7b-4d7f-96c5-002435df85cf.webp"},"ext_img_dark":{"filename_disk":"e3810de2-fb7b-4d7f-96c5-002435df85cf.webp"}}},{"item":{"id":11,"sort":null,"header":"Pilfer","text":"A delightfully ruthless word game","link":"https://www.merriam-webster.com/games/pilfer","external":true,"utm":null,"promo_id":"pilfer","img":{"filename_disk":"894a22e5-f2d0-4e47-a651-eb3970e7e48f.webp"},"ext_img":null,"ext_img_dark":null}},{"item":{"id":8,"sort":null,"header":"BLOSSOM","text":"Pick the best words!","link":"https://www.merriam-webster.com/games/blossom-word-game","external":true,"utm":null,"promo_id":"blossom","img":{"filename_disk":"08e4bb21-29f5-49e0-aba5-7cd201fd5a1b.webp"},"ext_img":null,"ext_img_dark":null}},{"item":{"id":10,"sort":null,"header":"The Missing Letter","text":"A crossword with a twist","link":"https://www.merriam-webster.com/games/missing-letter","external":true,"utm":null,"promo_id":"missing-letter","img":{"filename_disk":"b7ba60b3-bbf6-4599-a788-4b400cf15562.webp"},"ext_img":null,"ext_img_dark":null}},{"item":{"id":12,"sort":null,"header":"Twofer Goofer ","text":"Think you know it, poet?","link":"https://www.merriam-webster.com/games/twofer-goofer","external":true,"utm":null,"promo_id":"twofer","img":{"filename_disk":"574f0f23-ad07-4193-83b6-4296badf66e3.webp"},"ext_img":null,"ext_img_dark":null}},{"item":{"id":9,"sort":null,"header":"Victordle","text":"Play head-to-head","link":"https://www.britannica.com/games/victordle/","external":true,"utm":null,"promo_id":"victordle","img":{"filename_disk":"8ab4ea26-4f41-4f2f-a524-74136b0e7c6a.webp"},"ext_img":{"filename_disk":"e3810de2-fb7b-4d7f-96c5-002435df85cf.webp"},"ext_img_dark":{"filename_disk":"e3810de2-fb7b-4d7f-96c5-002435df85cf.webp"}}}]},{"status":"published","game":{"name":"octordle-daily"},"items":[{"item":{"id":6,"sort":null,"header":"Octordle","text":"Solve 8 words at once","link":"https://www.britannica.com/games/octordle/","external":true,"utm":null,"promo_id":"octordle","img":{"filename_disk":"a3f2e6bc-9a5b-402d-8292-295bc2525ec7.webp"},"ext_img":{"filename_disk":"e3810de2-fb7b-4d7f-96c5-002435df85cf.webp"},"ext_img_dark":{"filename_disk":"e3810de2-fb7b-4d7f-96c5-002435df85cf.webp"}}},{"item":{"id":7,"sort":null,"header":"Quordle SEQUENCE","text":"One step at a time","link":"https://www.merriam-webster.com/games/quordle/#/sequence","external":true,"utm":null,"promo_id":"quordle-sequence","img":{"filename_disk":"43859056-7ae3-4060-826f-f2b53f5b4216.webp"},"ext_img":null,"ext_img_dark":null}},{"item":{"id":8,"sort":null,"header":"BLOSSOM","text":"Pick the best words!","link":"https://www.merriam-webster.com/games/blossom-word-game","external":true,"utm":null,"promo_id":"blossom","img":{"filename_disk":"08e4bb21-29f5-49e0-aba5-7cd201fd5a1b.webp"},"ext_img":null,"ext_img_dark":null}},{"item":{"id":9,"sort":null,"header":"Victordle","text":"Play head-to-head","link":"https://www.britannica.com/games/victordle/","external":true,"utm":null,"promo_id":"victordle","img":{"filename_disk":"8ab4ea26-4f41-4f2f-a524-74136b0e7c6a.webp"},"ext_img":{"filename_disk":"e3810de2-fb7b-4d7f-96c5-002435df85cf.webp"},"ext_img_dark":{"filename_disk":"e3810de2-fb7b-4d7f-96c5-002435df85cf.webp"}}},{"item":{"id":10,"sort":null,"header":"The Missing Letter","text":"A crossword with a twist","link":"https://www.merriam-webster.com/games/missing-letter","external":true,"utm":null,"promo_id":"missing-letter","img":{"filename_disk":"b7ba60b3-bbf6-4599-a788-4b400cf15562.webp"},"ext_img":null,"ext_img_dark":null}},{"item":{"id":11,"sort":null,"header":"Pilfer","text":"A delightfully ruthless word game","link":"https://www.merriam-webster.com/games/pilfer","external":true,"utm":null,"promo_id":"pilfer","img":{"filename_disk":"894a22e5-f2d0-4e47-a651-eb3970e7e48f.webp"},"ext_img":null,"ext_img_dark":null}},{"item":{"id":12,"sort":null,"header":"Twofer Goofer ","text":"Think you know it, poet?","link":"https://www.merriam-webster.com/games/twofer-goofer","external":true,"utm":null,"promo_id":"twofer","img":{"filename_disk":"574f0f23-ad07-4193-83b6-4296badf66e3.webp"},"ext_img":null,"ext_img_dark":null}},{"item":{"id":13,"sort":null,"header":"Tightrope","text":"A daily trivia challenge","link":"https://www.britannica.com/quiz/tightrope","external":true,"utm":null,"promo_id":"tightrope","img":{"filename_disk":"58995966-6a4e-49ca-b596-6082afc58fda.webp"},"ext_img":{"filename_disk":"e3810de2-fb7b-4d7f-96c5-002435df85cf.webp"},"ext_img_dark":{"filename_disk":"e3810de2-fb7b-4d7f-96c5-002435df85cf.webp"}}},{"item":{"id":14,"sort":null,"header":"Daily Chill","text":"12 guesses and fewer unusual words","link":"https://www.merriam-webster.com/games/quordle/#/chill","external":true,"utm":null,"promo_id":"quordle-daily-chill","img":{"filename_disk":"ef9997f2-364b-4613-9c96-21fd6c2868e4.png"},"ext_img":null,"ext_img_dark":null}},{"item":{"id":15,"sort":null,"header":"Daily Extreme","text":"8 guesses and more unusual words","link":"https://www.merriam-webster.com/games/quordle/#/extreme","external":true,"utm":null,"promo_id":"quordle-daily-extreme","img":{"filename_disk":"16957b56-fabc-4137-8314-d2109a3ebe00.png"},"ext_img":null,"ext_img_dark":null}}]},{"status":"published","game":{"name":"octordle-practice"},"items":[]},{"status":"published","game":{"name":"octordle-sequence"},"items":[{"item":{"id":6,"sort":null,"header":"Octordle","text":"Solve 8 words at once","link":"https://www.britannica.com/games/octordle/","external":true,"utm":null,"promo_id":"octordle","img":{"filename_disk":"a3f2e6bc-9a5b-402d-8292-295bc2525ec7.webp"},"ext_img":{"filename_disk":"e3810de2-fb7b-4d7f-96c5-002435df85cf.webp"},"ext_img_dark":{"filename_disk":"e3810de2-fb7b-4d7f-96c5-002435df85cf.webp"}}},{"item":{"id":7,"sort":null,"header":"Quordle SEQUENCE","text":"One step at a time","link":"https://www.merriam-webster.com/games/quordle/#/sequence","external":true,"utm":null,"promo_id":"quordle-sequence","img":{"filename_disk":"43859056-7ae3-4060-826f-f2b53f5b4216.webp"},"ext_img":null,"ext_img_dark":null}},{"item":{"id":8,"sort":null,"header":"BLOSSOM","text":"Pick the best words!","link":"https://www.merriam-webster.com/games/blossom-word-game","external":true,"utm":null,"promo_id":"blossom","img":{"filename_disk":"08e4bb21-29f5-49e0-aba5-7cd201fd5a1b.webp"},"ext_img":null,"ext_img_dark":null}},{"item":{"id":9,"sort":null,"header":"Victordle","text":"Play head-to-head","link":"https://www.britannica.com/games/victordle/","external":true,"utm":null,"promo_id":"victordle","img":{"filename_disk":"8ab4ea26-4f41-4f2f-a524-74136b0e7c6a.webp"},"ext_img":{"filename_disk":"e3810de2-fb7b-4d7f-96c5-002435df85cf.webp"},"ext_img_dark":{"filename_disk":"e3810de2-fb7b-4d7f-96c5-002435df85cf.webp"}}},{"item":{"id":10,"sort":null,"header":"The Missing Letter","text":"A crossword with a twist","link":"https://www.merriam-webster.com/games/missing-letter","external":true,"utm":null,"promo_id":"missing-letter","img":{"filename_disk":"b7ba60b3-bbf6-4599-a788-4b400cf15562.webp"},"ext_img":null,"ext_img_dark":null}},{"item":{"id":11,"sort":null,"header":"Pilfer","text":"A delightfully ruthless word game","link":"https://www.merriam-webster.com/games/pilfer","external":true,"utm":null,"promo_id":"pilfer","img":{"filename_disk":"894a22e5-f2d0-4e47-a651-eb3970e7e48f.webp"},"ext_img":null,"ext_img_dark":null}},{"item":{"id":12,"sort":null,"header":"Twofer Goofer ","text":"Think you know it, poet?","link":"https://www.merriam-webster.com/games/twofer-goofer","external":true,"utm":null,"promo_id":"twofer","img":{"filename_disk":"574f0f23-ad07-4193-83b6-4296badf66e3.webp"},"ext_img":null,"ext_img_dark":null}},{"item":{"id":13,"sort":null,"header":"Tightrope","text":"A daily trivia challenge","link":"https://www.britannica.com/quiz/tightrope","external":true,"utm":null,"promo_id":"tightrope","img":{"filename_disk":"58995966-6a4e-49ca-b596-6082afc58fda.webp"},"ext_img":{"filename_disk":"e3810de2-fb7b-4d7f-96c5-002435df85cf.webp"},"ext_img_dark":{"filename_disk":"e3810de2-fb7b-4d7f-96c5-002435df85cf.webp"}}},{"item":{"id":14,"sort":null,"header":"Daily Chill","text":"12 guesses and fewer unusual words","link":"https://www.merriam-webster.com/games/quordle/#/chill","external":true,"utm":null,"promo_id":"quordle-daily-chill","img":{"filename_disk":"ef9997f2-364b-4613-9c96-21fd6c2868e4.png"},"ext_img":null,"ext_img_dark":null}},{"item":{"id":15,"sort":null,"header":"Daily Extreme","text":"8 guesses and more unusual words","link":"https://www.merriam-webster.com/games/quordle/#/extreme","external":true,"utm":null,"promo_id":"quordle-daily-extreme","img":{"filename_disk":"16957b56-fabc-4137-8314-d2109a3ebe00.png"},"ext_img":null,"ext_img_dark":null}}]},{"status":"published","game":{"name":"quordle-daily_chill"},"items":[{"item":{"id":15,"sort":null,"header":"Daily Extreme","text":"8 guesses and more unusual words","link":"https://www.merriam-webster.com/games/quordle/#/extreme","external":true,"utm":null,"promo_id":"quordle-daily-extreme","img":{"filename_disk":"16957b56-fabc-4137-8314-d2109a3ebe00.png"},"ext_img":null,"ext_img_dark":null}},{"item":{"id":13,"sort":null,"header":"Tightrope","text":"A daily trivia challenge","link":"https://www.britannica.com/quiz/tightrope","external":true,"utm":null,"promo_id":"tightrope","img":{"filename_disk":"58995966-6a4e-49ca-b596-6082afc58fda.webp"},"ext_img":{"filename_disk":"e3810de2-fb7b-4d7f-96c5-002435df85cf.webp"},"ext_img_dark":{"filename_disk":"e3810de2-fb7b-4d7f-96c5-002435df85cf.webp"}}},{"item":{"id":7,"sort":null,"header":"Quordle SEQUENCE","text":"One step at a time","link":"https://www.merriam-webster.com/games/quordle/#/sequence","external":true,"utm":null,"promo_id":"quordle-sequence","img":{"filename_disk":"43859056-7ae3-4060-826f-f2b53f5b4216.webp"},"ext_img":null,"ext_img_dark":null}},{"item":{"id":6,"sort":null,"header":"Octordle","text":"Solve 8 words at once","link":"https://www.britannica.com/games/octordle/","external":true,"utm":null,"promo_id":"octordle","img":{"filename_disk":"a3f2e6bc-9a5b-402d-8292-295bc2525ec7.webp"},"ext_img":{"filename_disk":"e3810de2-fb7b-4d7f-96c5-002435df85cf.webp"},"ext_img_dark":{"filename_disk":"e3810de2-fb7b-4d7f-96c5-002435df85cf.webp"}}},{"item":{"id":11,"sort":null,"header":"Pilfer","text":"A delightfully ruthless word game","link":"https://www.merriam-webster.com/games/pilfer","external":true,"utm":null,"promo_id":"pilfer","img":{"filename_disk":"894a22e5-f2d0-4e47-a651-eb3970e7e48f.webp"},"ext_img":null,"ext_img_dark":null}},{"item":{"id":8,"sort":null,"header":"BLOSSOM","text":"Pick the best words!","link":"https://www.merriam-webster.com/games/blossom-word-game","external":true,"utm":null,"promo_id":"blossom","img":{"filename_disk":"08e4bb21-29f5-49e0-aba5-7cd201fd5a1b.webp"},"ext_img":null,"ext_img_dark":null}},{"item":{"id":10,"sort":null,"header":"The Missing Letter","text":"A crossword with a twist","link":"https://www.merriam-webster.com/games/missing-letter","external":true,"utm":null,"promo_id":"missing-letter","img":{"filename_disk":"b7ba60b3-bbf6-4599-a788-4b400cf15562.webp"},"ext_img":null,"ext_img_dark":null}},{"item":{"id":9,"sort":null,"header":"Victordle","text":"Play head-to-head","link":"https://www.britannica.com/games/victordle/","external":true,"utm":null,"promo_id":"victordle","img":{"filename_disk":"8ab4ea26-4f41-4f2f-a524-74136b0e7c6a.webp"},"ext_img":{"filename_disk":"e3810de2-fb7b-4d7f-96c5-002435df85cf.webp"},"ext_img_dark":{"filename_disk":"e3810de2-fb7b-4d7f-96c5-002435df85cf.webp"}}}]},{"status":"published","game":{"name":"quordle-daily_extreme"},"items":[{"item":{"id":14,"sort":null,"header":"Daily Chill","text":"12 guesses and fewer unusual words","link":"https://www.merriam-webster.com/games/quordle/#/chill","external":true,"utm":null,"promo_id":"quordle-daily-chill","img":{"filename_disk":"ef9997f2-364b-4613-9c96-21fd6c2868e4.png"},"ext_img":null,"ext_img_dark":null}},{"item":{"id":13,"sort":null,"header":"Tightrope","text":"A daily trivia challenge","link":"https://www.britannica.com/quiz/tightrope","external":true,"utm":null,"promo_id":"tightrope","img":{"filename_disk":"58995966-6a4e-49ca-b596-6082afc58fda.webp"},"ext_img":{"filename_disk":"e3810de2-fb7b-4d7f-96c5-002435df85cf.webp"},"ext_img_dark":{"filename_disk":"e3810de2-fb7b-4d7f-96c5-002435df85cf.webp"}}},{"item":{"id":7,"sort":null,"header":"Quordle SEQUENCE","text":"One step at a time","link":"https://www.merriam-webster.com/games/quordle/#/sequence","external":true,"utm":null,"promo_id":"quordle-sequence","img":{"filename_disk":"43859056-7ae3-4060-826f-f2b53f5b4216.webp"},"ext_img":null,"ext_img_dark":null}},{"item":{"id":6,"sort":null,"header":"Octordle","text":"Solve 8 words at once","link":"https://www.britannica.com/games/octordle/","external":true,"utm":null,"promo_id":"octordle","img":{"filename_disk":"a3f2e6bc-9a5b-402d-8292-295bc2525ec7.webp"},"ext_img":{"filename_disk":"e3810de2-fb7b-4d7f-96c5-002435df85cf.webp"},"ext_img_dark":{"filename_disk":"e3810de2-fb7b-4d7f-96c5-002435df85cf.webp"}}},{"item":{"id":11,"sort":null,"header":"Pilfer","text":"A delightfully ruthless word game","link":"https://www.merriam-webster.com/games/pilfer","external":true,"utm":null,"promo_id":"pilfer","img":{"filename_disk":"894a22e5-f2d0-4e47-a651-eb3970e7e48f.webp"},"ext_img":null,"ext_img_dark":null}},{"item":{"id":8,"sort":null,"header":"BLOSSOM","text":"Pick the best words!","link":"https://www.merriam-webster.com/games/blossom-word-game","external":true,"utm":null,"promo_id":"blossom","img":{"filename_disk":"08e4bb21-29f5-49e0-aba5-7cd201fd5a1b.webp"},"ext_img":null,"ext_img_dark":null}},{"item":{"id":10,"sort":null,"header":"The Missing Letter","text":"A crossword with a twist","link":"https://www.merriam-webster.com/games/missing-letter","external":true,"utm":null,"promo_id":"missing-letter","img":{"filename_disk":"b7ba60b3-bbf6-4599-a788-4b400cf15562.webp"},"ext_img":null,"ext_img_dark":null}},{"item":{"id":9,"sort":null,"header":"Victordle","text":"Play head-to-head","link":"https://www.britannica.com/games/victordle/","external":true,"utm":null,"promo_id":"victordle","img":{"filename_disk":"8ab4ea26-4f41-4f2f-a524-74136b0e7c6a.webp"},"ext_img":{"filename_disk":"e3810de2-fb7b-4d7f-96c5-002435df85cf.webp"},"ext_img_dark":{"filename_disk":"e3810de2-fb7b-4d7f-96c5-002435df85cf.webp"}}}]},{"status":"published","game":{"name":"blossom"},"items":[{"item":{"id":7,"sort":null,"header":"Quordle SEQUENCE","text":"One step at a time","link":"https://www.merriam-webster.com/games/quordle/#/sequence","external":true,"utm":null,"promo_id":"quordle-sequence","img":{"filename_disk":"43859056-7ae3-4060-826f-f2b53f5b4216.webp"},"ext_img":null,"ext_img_dark":null}},{"item":{"id":11,"sort":null,"header":"Pilfer","text":"A delightfully ruthless word game","link":"https://www.merriam-webster.com/games/pilfer","external":true,"utm":null,"promo_id":"pilfer","img":{"filename_disk":"894a22e5-f2d0-4e47-a651-eb3970e7e48f.webp"},"ext_img":null,"ext_img_dark":null}},{"item":{"id":6,"sort":null,"header":"Octordle","text":"Solve 8 words at once","link":"https://www.britannica.com/games/octordle/","external":true,"utm":null,"promo_id":"octordle","img":{"filename_disk":"a3f2e6bc-9a5b-402d-8292-295bc2525ec7.webp"},"ext_img":{"filename_disk":"e3810de2-fb7b-4d7f-96c5-002435df85cf.webp"},"ext_img_dark":{"filename_disk":"e3810de2-fb7b-4d7f-96c5-002435df85cf.webp"}}},{"item":{"id":10,"sort":null,"header":"The Missing Letter","text":"A crossword with a twist","link":"https://www.merriam-webster.com/games/missing-letter","external":true,"utm":null,"promo_id":"missing-letter","img":{"filename_disk":"b7ba60b3-bbf6-4599-a788-4b400cf15562.webp"},"ext_img":null,"ext_img_dark":null}},{"item":{"id":12,"sort":null,"header":"Twofer Goofer ","text":"Think you know it, poet?","link":"https://www.merriam-webster.com/games/twofer-goofer","external":true,"utm":null,"promo_id":"twofer","img":{"filename_disk":"574f0f23-ad07-4193-83b6-4296badf66e3.webp"},"ext_img":null,"ext_img_dark":null}},{"item":{"id":9,"sort":null,"header":"Victordle","text":"Play head-to-head","link":"https://www.britannica.com/games/victordle/","external":true,"utm":null,"promo_id":"victordle","img":{"filename_disk":"8ab4ea26-4f41-4f2f-a524-74136b0e7c6a.webp"},"ext_img":{"filename_disk":"e3810de2-fb7b-4d7f-96c5-002435df85cf.webp"},"ext_img_dark":{"filename_disk":"e3810de2-fb7b-4d7f-96c5-002435df85cf.webp"}}}]}]'),t6={data:d9};var p9=Object.defineProperty,f9=Object.getOwnPropertyDescriptor,Uo=(e,t,n,r)=>{for(var o=r>1?void 0:r?f9(t,n):t,i=e.length-1,a;i>=0;i--)(a=e[i])&&(o=(r?a(t,n,o):a(o))||o);return r&&o&&p9(t,n,o),o};let rr=class extends X{constructor(){super(...arguments),this.label="",this.id="",this.icon="",this.darkMode=!1}render(){return F`
      <button
        part="button"
        type="button"
        id=${this.id}
        class=${`flex-1 text-sm min-h-[40px] text-white font-medium rounded-md px-2 text-center transition-colors focus:ring-4 font-["Roboto"] ${this.darkMode?" bg-blue-600 @hover:bg-blue-700 focus:ring-blue-800":" bg-blue-800 @hover:bg-blue-800 focus:ring-blue-300"}`}
      >
        <div part="text" class="flex flex-row items-center justify-center">
          ${he(this.icon,()=>F`
              <span part="icon" class="d-inline-block w-[20px] h-[20px]">
                ${he(this.icon==="copy",()=>F`<mw-icon-copy
                      class="w-[20px] h-[20px]"
                    ></mw-icon-copy>`)}
                ${he(this.icon==="save",()=>F`<mw-icon-save
                      class="w-[20px] h-[20px]"
                    ></mw-icon-save>`)}
              </span>
            `)}
          ${this.label}
          <slot part="slot"></slot>
        </div>
      </button>
    `}};rr.styles=[ot(ft),ze`
      /* layer: preflights */
*,::before,::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
*,::before,::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
[type='text'], [type='email'], [type='url'], [type='password'], [type='number'], [type='date'], [type='datetime-local'], [type='month'], [type='search'], [type='tel'], [type='time'], [type='week'], [multiple], textarea, select { appearance: none;
background-color: #fff;
border-color: #6b7280;
border-width: 1px;
border-radius: 0;
padding-top: 0.5rem;
padding-right: 0.75rem;
padding-bottom: 0.5rem;
padding-left: 0.75rem;
font-size: 1rem;
line-height: 1.5rem;
--un-shadow: 0 0 #0000; }
[type='text']:focus, [type='email']:focus, [type='url']:focus, [type='password']:focus, [type='number']:focus, [type='date']:focus, [type='datetime-local']:focus, [type='month']:focus, [type='search']:focus, [type='tel']:focus, [type='time']:focus, [type='week']:focus, [multiple]:focus, textarea:focus, select:focus { outline: 2px solid transparent;
outline-offset: 2px;
--un-ring-inset: var(--un-empty,/*!*/ /*!*/);
--un-ring-offset-width: 0px;
--un-ring-offset-color: #fff;
--un-ring-color: #2563eb;
--un-ring-offset-shadow: var(--un-ring-inset) 0 0 0 var(--un-ring-offset-width) var(--un-ring-offset-color);
--un-ring-shadow: var(--un-ring-inset) 0 0 0 calc(1px + var(--un-ring-offset-width)) var(--un-ring-color);
box-shadow: var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow);
border-color: #2563eb; }
input::placeholder, textarea::placeholder { color: #6b7280;
opacity: 1; }
::-webkit-datetime-edit-fields-wrapper { padding: 0; }
::-webkit-date-and-time-value { min-height: 1.5em; }
::-webkit-datetime-edit, ::-webkit-datetime-edit-year-field, ::-webkit-datetime-edit-month-field, ::-webkit-datetime-edit-day-field, ::-webkit-datetime-edit-hour-field, ::-webkit-datetime-edit-minute-field, ::-webkit-datetime-edit-second-field, ::-webkit-datetime-edit-millisecond-field, ::-webkit-datetime-edit-meridiem-field { padding-top: 0;
padding-bottom: 0; }
select { background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
background-position: right 0.5rem center;
background-repeat: no-repeat;
background-size: 1.5em 1.5em;
padding-right: 2.5rem;
print-color-adjust: exact; }
[multiple] { background-image: initial;
background-position: initial;
background-repeat: unset;
background-size: initial;
padding-right: 0.75rem;
print-color-adjust: unset; }
[type='checkbox'], [type='radio'] { appearance: none;
padding: 0;
print-color-adjust: exact;
display: inline-block;
vertical-align: middle;
background-origin: border-box;
user-select: none;
flex-shrink: 0;
height: 1rem;
width: 1rem;
color: #2563eb;
background-color: #fff;
border-color: #6b7280;
border-width: 1px;
--un-shadow: 0 0 #0000; }
[type='checkbox'] { border-radius: 0; }
[type='radio'] { border-radius: 100%; }
[type='checkbox']:focus, [type='radio']:focus { outline: 2px solid transparent;
outline-offset: 2px;
--un-ring-inset: var(--un-empty,/*!*/ /*!*/);
--un-ring-offset-width: 2px;
--un-ring-offset-color: #fff;
--un-ring-color: #2563eb;
--un-ring-offset-shadow: var(--un-ring-inset) 0 0 0 var(--un-ring-offset-width) var(--un-ring-offset-color);
--un-ring-shadow: var(--un-ring-inset) 0 0 0 calc(2px + var(--un-ring-offset-width)) var(--un-ring-color);
box-shadow: var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow); }
[type='checkbox']:checked, [type='radio']:checked { border-color: transparent;
background-color: currentColor;
background-size: 100% 100%;
background-position: center;
background-repeat: no-repeat; }
[type='checkbox']:checked { background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e"); }
[type='radio']:checked { background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e"); }
[type='checkbox']:checked:hover, [type='checkbox']:checked:focus, [type='radio']:checked:hover, [type='radio']:checked:focus { border-color: transparent;
background-color: currentColor; }
[type='checkbox']:indeterminate { background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 16 16'%3e%3cpath stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 8h8'/%3e%3c/svg%3e");
border-color: transparent;
background-color: currentColor;
background-size: 100% 100%;
background-position: center;
background-repeat: no-repeat; }
[type='checkbox']:indeterminate:hover, [type='checkbox']:indeterminate:focus { border-color: transparent;
background-color: currentColor; }
[type='file'] { background: unset;
border-color: inherit;
border-width: 0;
border-radius: 0;
padding: 0;
font-size: unset;
line-height: inherit; }
[type='file']:focus { outline: 1px solid ButtonText , 1px auto -webkit-focus-ring-color; }
*,::before,::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: default */
.static{position:static;}
.h-\\[20px\\]{height:20px;}
.min-h-\\[40px\\]{min-height:40px;}
.w-\\[20px\\]{width:20px;}
.flex,
[flex=""]{display:flex;}
.flex-1,
[flex-1=""]{flex:1 1 0%;}
.flex-row,
[flex-row=""]{flex-direction:row;}
.items-center,
[items-center=""]{align-items:center;}
.justify-center{justify-content:center;}
.rounded-md,
[rounded-md=""]{border-radius:6px;}
.bg-blue-600{--un-bg-opacity:1;background-color:rgb(37 99 235 / var(--un-bg-opacity)) /* #2563eb */;}
.bg-blue-800{--un-bg-opacity:1;background-color:rgb(30 64 175 / var(--un-bg-opacity)) /* #1e40af */;}
.px-2,
[px-2=""]{padding-left:8px;padding-right:8px;}
[px=""]{padding-left:16px;padding-right:16px;}
.text-center,
[text-center=""]{text-align:center;}
.text-sm,
[text-sm=""]{font-size:14px;line-height:20px;}
.text-white,
[text-white=""]{--un-text-opacity:1;color:rgb(255 255 255 / var(--un-text-opacity)) /* #fff */;}
.font-medium,
[font-medium=""]{font-weight:500;}
.font-\\[\\"Roboto\\"\\]{font-family:"Roboto";}
.focus\\:ring-4:focus{--un-ring-width:4px;--un-ring-offset-shadow:var(--un-ring-inset) 0 0 0 var(--un-ring-offset-width) var(--un-ring-offset-color);--un-ring-shadow:var(--un-ring-inset) 0 0 0 calc(var(--un-ring-width) + var(--un-ring-offset-width)) var(--un-ring-color);box-shadow:var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow);}
[focus\\:ring-4=""]:focus{--un-ring-width:4px;--un-ring-offset-shadow:var(--un-ring-inset) 0 0 0 var(--un-ring-offset-width) var(--un-ring-offset-color);--un-ring-shadow:var(--un-ring-inset) 0 0 0 calc(var(--un-ring-width) + var(--un-ring-offset-width)) var(--un-ring-color);box-shadow:var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow);}
.focus\\:ring-blue-300:focus{--un-ring-opacity:1;--un-ring-color:rgb(147 197 253 / var(--un-ring-opacity)) /* #93c5fd */;}
.focus\\:ring-blue-800:focus{--un-ring-opacity:1;--un-ring-color:rgb(30 64 175 / var(--un-ring-opacity)) /* #1e40af */;}
.transition-colors,
[transition-colors=""]{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;}
@media (hover: hover) and (pointer: fine){
.\\@hover\\:bg-blue-700:hover{--un-bg-opacity:1;background-color:rgb(29 78 216 / var(--un-bg-opacity)) /* #1d4ed8 */;}
.\\@hover\\:bg-blue-800:hover{--un-bg-opacity:1;background-color:rgb(30 64 175 / var(--un-bg-opacity)) /* #1e40af */;}
};
    `];Uo([R({type:String})],rr.prototype,"label",2);Uo([R({type:String})],rr.prototype,"id",2);Uo([R({type:String})],rr.prototype,"icon",2);Uo([R({type:Boolean})],rr.prototype,"darkMode",2);rr=Uo([re("mw-button-modal-quordle")],rr);var h9=Object.defineProperty,g9=Object.getOwnPropertyDescriptor,Kf=(e,t,n,r)=>{for(var o=r>1?void 0:r?g9(t,n):t,i=e.length-1,a;i>=0;i--)(a=e[i])&&(o=(r?a(t,n,o):a(o))||o);return r&&o&&h9(t,n,o),o};let Ji=class extends X{constructor(){super(...arguments),this.darkMode=!1}render(){return F`
      <div
        part="container"
        class="max-w-[380px] md:max-w-[480px] m-auto w-full rounded-xl  mb-5  overflow-auto p-3 md:px-4
            ${this.darkMode?"text-white bg-[#1F2937] shadow-[0_2px_30px_0px_rgba(0,0,0,0.6)]":"bg-white shadow-[0_2px_30px_0px_rgba(0,0,0,0.1)]"}"
      >
        <slot part="slot"></slot>
      </div>
    `}};Ji.styles=[ot(ft),ze`
      /* layer: preflights */
*,::before,::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
*,::before,::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
[type='text'], [type='email'], [type='url'], [type='password'], [type='number'], [type='date'], [type='datetime-local'], [type='month'], [type='search'], [type='tel'], [type='time'], [type='week'], [multiple], textarea, select { appearance: none;
background-color: #fff;
border-color: #6b7280;
border-width: 1px;
border-radius: 0;
padding-top: 0.5rem;
padding-right: 0.75rem;
padding-bottom: 0.5rem;
padding-left: 0.75rem;
font-size: 1rem;
line-height: 1.5rem;
--un-shadow: 0 0 #0000; }
[type='text']:focus, [type='email']:focus, [type='url']:focus, [type='password']:focus, [type='number']:focus, [type='date']:focus, [type='datetime-local']:focus, [type='month']:focus, [type='search']:focus, [type='tel']:focus, [type='time']:focus, [type='week']:focus, [multiple]:focus, textarea:focus, select:focus { outline: 2px solid transparent;
outline-offset: 2px;
--un-ring-inset: var(--un-empty,/*!*/ /*!*/);
--un-ring-offset-width: 0px;
--un-ring-offset-color: #fff;
--un-ring-color: #2563eb;
--un-ring-offset-shadow: var(--un-ring-inset) 0 0 0 var(--un-ring-offset-width) var(--un-ring-offset-color);
--un-ring-shadow: var(--un-ring-inset) 0 0 0 calc(1px + var(--un-ring-offset-width)) var(--un-ring-color);
box-shadow: var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow);
border-color: #2563eb; }
input::placeholder, textarea::placeholder { color: #6b7280;
opacity: 1; }
::-webkit-datetime-edit-fields-wrapper { padding: 0; }
::-webkit-date-and-time-value { min-height: 1.5em; }
::-webkit-datetime-edit, ::-webkit-datetime-edit-year-field, ::-webkit-datetime-edit-month-field, ::-webkit-datetime-edit-day-field, ::-webkit-datetime-edit-hour-field, ::-webkit-datetime-edit-minute-field, ::-webkit-datetime-edit-second-field, ::-webkit-datetime-edit-millisecond-field, ::-webkit-datetime-edit-meridiem-field { padding-top: 0;
padding-bottom: 0; }
select { background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
background-position: right 0.5rem center;
background-repeat: no-repeat;
background-size: 1.5em 1.5em;
padding-right: 2.5rem;
print-color-adjust: exact; }
[multiple] { background-image: initial;
background-position: initial;
background-repeat: unset;
background-size: initial;
padding-right: 0.75rem;
print-color-adjust: unset; }
[type='checkbox'], [type='radio'] { appearance: none;
padding: 0;
print-color-adjust: exact;
display: inline-block;
vertical-align: middle;
background-origin: border-box;
user-select: none;
flex-shrink: 0;
height: 1rem;
width: 1rem;
color: #2563eb;
background-color: #fff;
border-color: #6b7280;
border-width: 1px;
--un-shadow: 0 0 #0000; }
[type='checkbox'] { border-radius: 0; }
[type='radio'] { border-radius: 100%; }
[type='checkbox']:focus, [type='radio']:focus { outline: 2px solid transparent;
outline-offset: 2px;
--un-ring-inset: var(--un-empty,/*!*/ /*!*/);
--un-ring-offset-width: 2px;
--un-ring-offset-color: #fff;
--un-ring-color: #2563eb;
--un-ring-offset-shadow: var(--un-ring-inset) 0 0 0 var(--un-ring-offset-width) var(--un-ring-offset-color);
--un-ring-shadow: var(--un-ring-inset) 0 0 0 calc(2px + var(--un-ring-offset-width)) var(--un-ring-color);
box-shadow: var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow); }
[type='checkbox']:checked, [type='radio']:checked { border-color: transparent;
background-color: currentColor;
background-size: 100% 100%;
background-position: center;
background-repeat: no-repeat; }
[type='checkbox']:checked { background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e"); }
[type='radio']:checked { background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e"); }
[type='checkbox']:checked:hover, [type='checkbox']:checked:focus, [type='radio']:checked:hover, [type='radio']:checked:focus { border-color: transparent;
background-color: currentColor; }
[type='checkbox']:indeterminate { background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 16 16'%3e%3cpath stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 8h8'/%3e%3c/svg%3e");
border-color: transparent;
background-color: currentColor;
background-size: 100% 100%;
background-position: center;
background-repeat: no-repeat; }
[type='checkbox']:indeterminate:hover, [type='checkbox']:indeterminate:focus { border-color: transparent;
background-color: currentColor; }
[type='file'] { background: unset;
border-color: inherit;
border-width: 0;
border-radius: 0;
padding: 0;
font-size: unset;
line-height: inherit; }
[type='file']:focus { outline: 1px solid ButtonText , 1px auto -webkit-focus-ring-color; }
*,::before,::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: shortcuts */
.container{width:100%;}
@media (min-width: 640px){
.container{max-width:640px;}
}
@media (min-width: 768px){
.container{max-width:768px;}
}
@media (min-width: 1024px){
.container{max-width:1024px;}
}
@media (min-width: 1280px){
.container{max-width:1280px;}
}
@media (min-width: 1536px){
.container{max-width:1536px;}
}
/* layer: default */
.static{position:static;}
.m-auto{margin:auto;}
.mb-5{margin-bottom:20px;}
.max-w-\\[380px\\]{max-width:380px;}
.w-full{width:100%;}
.overflow-auto{overflow:auto;}
.rounded-xl{border-radius:12px;}
.bg-\\[\\#1F2937\\]{--un-bg-opacity:1;background-color:rgb(31 41 55 / var(--un-bg-opacity)) /* #1F2937 */;}
.bg-white{--un-bg-opacity:1;background-color:rgb(255 255 255 / var(--un-bg-opacity)) /* #fff */;}
.p-3{padding:12px;}
.text-white{--un-text-opacity:1;color:rgb(255 255 255 / var(--un-text-opacity)) /* #fff */;}
.shadow-\\[0_2px_30px_0px_rgba\\(0\\,0\\,0\\,0\\.1\\)\\]{--un-shadow:0 2px 30px 0px var(--un-shadow-color, rgba(0, 0, 0, 0.1));box-shadow:var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow);}
.shadow-\\[0_2px_30px_0px_rgba\\(0\\,0\\,0\\,0\\.6\\)\\]{--un-shadow:0 2px 30px 0px var(--un-shadow-color, rgba(0, 0, 0, 0.6));box-shadow:var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow);}
@media (min-width: 768px){
.md\\:max-w-\\[480px\\]{max-width:480px;}
.md\\:px-4{padding-left:16px;padding-right:16px;}
};
    `];Kf([R({type:Boolean})],Ji.prototype,"darkMode",2);Ji=Kf([re("mw-results-card")],Ji);var m9=Object.defineProperty,b9=Object.getOwnPropertyDescriptor,Ye=(e,t,n,r)=>{for(var o=r>1?void 0:r?b9(t,n):t,i=e.length-1,a;i>=0;i--)(a=e[i])&&(o=(r?a(t,n,o):a(o))||o);return r&&o&&m9(t,n,o),o};let Be=class extends X{constructor(){super(...arguments),this.enabled=!1,this.disableGoogleCMP=!1,this.modalOpen=!1,this.ccpaOptIn="1YNY",this.ccpaOptOut="1YYY",this.ccpaOptOutText="Do not sell or share my personal information.",this.ccpaOptInText="Customize my ad experience.",this.privacyString="",this.ccpaNotApplicable="1---",this._deletionQueue=[],this.userOptedOut=!1,this.gpcEnabled=!1,this.ccpaLinkText="",this.globalPrivacyControl="",this.gpcUpdated=!1}disconnectedCallback(){super.disconnectedCallback()}connectedCallback(){if(super.connectedCallback(),this.enabled){const e=this._readCookie("usprivacy"),t=localStorage.getItem("mw_gpc");this.gpcEnabled=!!t,this.userOptedOut=e===this.ccpaOptOut,navigator&&navigator.hasOwnProperty("globalPrivacyControl")&&(this.globalPrivacyControl=navigator.globalPrivacyControl),window.__uspapi=this.uspapi.bind(this),this._addLocatorFrame(),this.setGpcString();const n=this.userOptedOut||this.gpcEnabled||this.privacyString===this.ccpaOptOut?this.ccpaOptOut:this.ccpaOptIn;this.setPrivacyString(n),this.ccpaLinkText=this.privacyString===""||this.privacyString===this.ccpaOptIn?this.ccpaOptOutText:this.ccpaOptInText}this.disableGoogleCMP||(window.googlefc=window.googlefc||{},window.googlefc.controlledMessagingFunction=async e=>{e.proceed(!1)})}setPrivacyString(e,t=!1){const n=this.privacyString===this.ccpaNotApplicable;(e||t===!0||n||this.gpcUpdated)&&(this._setPrivacyCookie(e),this.privacyString=e)}_setPrivacyCookie(e=""){const t=new Date(2147483647e3).toUTCString();document.cookie=`usprivacy=${e};path=/;expires=${t}`}setGpcString(){(this.gpcEnabled===null||this.gpcEnabled===!1)&&this.globalPrivacyControl?(this.gpcEnabled=!!`${this.globalPrivacyControl}`,this.gpcUpdated=!0,localStorage.setItem("mw_gpc",JSON.stringify(this.gpcEnabled))):this.gpcEnabled===!0&&!this.globalPrivacyControl&&(this.gpcEnabled=JSON.parse(this.globalPrivacyControl),this.gpcUpdated=!0,localStorage.setItem("mw_gpc",JSON.stringify(this.gpcEnabled)))}uspapi(e,t,n){switch(e){case"performDeletion":this._deletionQueue.forEach(o=>{typeof o=="function"&&o()});break;case"registerDeletion":this._deletionQueue.push(n);break;case"getUSPData":const r={command:e,version:t,uspString:this._readCookie("usprivacy")};return n(r,!0);default:return null}}_addLocatorFrame(){if(document.getElementById("__uspapiLocator")===null){const e=document.createElement("iframe");e.style.display="none",e.id="__uspapiLocator",e.name="__uspapiLocator",document.body.appendChild(e)}}optUserOut(){this.modalOpen=!0,this.setPrivacyString(this.ccpaOptOut,!0),this.userOptedOut=!0,this.ccpaLinkText=this.ccpaOptInText,this.dispatchEvent(new CustomEvent("ccpa-preference-change",{detail:{optedOut:!0},bubbles:!0,composed:!0}))}optUserIn(){this.modalOpen=!1,this.setPrivacyString(this.ccpaOptIn,!0),this.userOptedOut=!1,this.ccpaLinkText=this.ccpaOptOutText,this.dispatchEvent(new CustomEvent("ccpa-preference-change",{detail:{optedOut:!1},bubbles:!0,composed:!0}))}optUserInOrOut(){this.ccpaLinkText===this.ccpaOptOutText?this.optUserOut():this.optUserIn()}_readCookie(e){const t=document.cookie.match(new RegExp("(^| )"+e+"=([^;]+)"));return t?t[2]:""}_toggleModal(){this.modalOpen=!this.modalOpen}render(){return F`${he(this.enabled,()=>F`
        <div
          id="merriamwebster-ccpa-modal"
          part="merriamwebster-ccpa-modal"
          class="merriamwebster-ccpa-modal
          ${this.modalOpen?"block!":"hidden"}
        "
        >
          <div
            @click=${this._toggleModal}
            class="
              z-[1] fixed w-full h-full
              ${this.modalOpen?"block!":"hidden"}
            "
            part="merriamwebster-ccpa-modal-container"
          >
            &nbsp;
          </div>
          <div
            @click=${this._toggleModal}
            id="merriamwebster-ccpa-modal-close-btn-container"
          >
            <span>&#10005;</span>
          </div>
          <div
            class="z-[9999] relative  merriamwebster-ccpa-modal-content"
            id="merriamwebster-ccpa-modal-content"
          >
            <div id="merriamwebster-ccpa-modal-title">
              ${this.ccpaOptInText}
            </div>

            <div id="merriamwebster-ccpa-modal-language">
              You have chosen to opt-out of the sale or sharing of your
              information from this site and any of its affiliates. To opt back
              in please click the "Customize my ad experience" link.<br />
              <br />This site collects information through the use of cookies
              and other tracking tools. Cookies and these tools do not contain
              any information that personally identifies a user, but personal
              information that would be stored about you may be linked to the
              information stored in and obtained from them. This information
              would be used and shared for Analytics, Ad Serving, Interest Based
              Advertising, among other purposes.
              <br />
              <br />
              For more information please visit this site's Privacy Policy.
            </div>

            <div class="adthrive-ccpa-lower-buttons-container">
              <div
                @click=${this.optUserIn}
                part="merriamwebster-ccpa-modal-cancel-btn"
                id="merriamwebster-ccpa-modal-cancel-btn"
                class="merriamwebster-ccpa-modal-btn"
              >
                CANCEL
              </div>
              <div
                @click=${this._toggleModal}
                part="merriamwebster-ccpa-modal-continue-btn"
                id="merriamwebster-ccpa-modal-continue-btn"
                class="merriamwebster-ccpa-modal-btn"
              >
                CONTINUE
              </div>
            </div>
          </div>
        </div>
        <div
          id="merriamwebster-ccpa-link"
          class="merriamwebster-ccpa-link"
          part="merriamwebster-ccpa-link"
        >
          <div
            class="merriamwebster-ccpa-link-text"
            part="merriamwebster-ccpa-link-text"
          >
            Information from your device can be used to personalize your ad
            experience.
          </div>
          <a
            part="merriamwebster-ccpa-link-anchor"
            id="ccpaTag"
            @click=${this.optUserInOrOut}
          >
            ${this.ccpaLinkText}
          </a>
        </div>
      `)}`}};Be.styles=[ze`
      /* layer: preflights */
*,::before,::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
*,::before,::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
[type='text'], [type='email'], [type='url'], [type='password'], [type='number'], [type='date'], [type='datetime-local'], [type='month'], [type='search'], [type='tel'], [type='time'], [type='week'], [multiple], textarea, select { appearance: none;
background-color: #fff;
border-color: #6b7280;
border-width: 1px;
border-radius: 0;
padding-top: 0.5rem;
padding-right: 0.75rem;
padding-bottom: 0.5rem;
padding-left: 0.75rem;
font-size: 1rem;
line-height: 1.5rem;
--un-shadow: 0 0 #0000; }
[type='text']:focus, [type='email']:focus, [type='url']:focus, [type='password']:focus, [type='number']:focus, [type='date']:focus, [type='datetime-local']:focus, [type='month']:focus, [type='search']:focus, [type='tel']:focus, [type='time']:focus, [type='week']:focus, [multiple]:focus, textarea:focus, select:focus { outline: 2px solid transparent;
outline-offset: 2px;
--un-ring-inset: var(--un-empty,/*!*/ /*!*/);
--un-ring-offset-width: 0px;
--un-ring-offset-color: #fff;
--un-ring-color: #2563eb;
--un-ring-offset-shadow: var(--un-ring-inset) 0 0 0 var(--un-ring-offset-width) var(--un-ring-offset-color);
--un-ring-shadow: var(--un-ring-inset) 0 0 0 calc(1px + var(--un-ring-offset-width)) var(--un-ring-color);
box-shadow: var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow);
border-color: #2563eb; }
input::placeholder, textarea::placeholder { color: #6b7280;
opacity: 1; }
::-webkit-datetime-edit-fields-wrapper { padding: 0; }
::-webkit-date-and-time-value { min-height: 1.5em; }
::-webkit-datetime-edit, ::-webkit-datetime-edit-year-field, ::-webkit-datetime-edit-month-field, ::-webkit-datetime-edit-day-field, ::-webkit-datetime-edit-hour-field, ::-webkit-datetime-edit-minute-field, ::-webkit-datetime-edit-second-field, ::-webkit-datetime-edit-millisecond-field, ::-webkit-datetime-edit-meridiem-field { padding-top: 0;
padding-bottom: 0; }
select { background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
background-position: right 0.5rem center;
background-repeat: no-repeat;
background-size: 1.5em 1.5em;
padding-right: 2.5rem;
print-color-adjust: exact; }
[multiple] { background-image: initial;
background-position: initial;
background-repeat: unset;
background-size: initial;
padding-right: 0.75rem;
print-color-adjust: unset; }
[type='checkbox'], [type='radio'] { appearance: none;
padding: 0;
print-color-adjust: exact;
display: inline-block;
vertical-align: middle;
background-origin: border-box;
user-select: none;
flex-shrink: 0;
height: 1rem;
width: 1rem;
color: #2563eb;
background-color: #fff;
border-color: #6b7280;
border-width: 1px;
--un-shadow: 0 0 #0000; }
[type='checkbox'] { border-radius: 0; }
[type='radio'] { border-radius: 100%; }
[type='checkbox']:focus, [type='radio']:focus { outline: 2px solid transparent;
outline-offset: 2px;
--un-ring-inset: var(--un-empty,/*!*/ /*!*/);
--un-ring-offset-width: 2px;
--un-ring-offset-color: #fff;
--un-ring-color: #2563eb;
--un-ring-offset-shadow: var(--un-ring-inset) 0 0 0 var(--un-ring-offset-width) var(--un-ring-offset-color);
--un-ring-shadow: var(--un-ring-inset) 0 0 0 calc(2px + var(--un-ring-offset-width)) var(--un-ring-color);
box-shadow: var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow); }
[type='checkbox']:checked, [type='radio']:checked { border-color: transparent;
background-color: currentColor;
background-size: 100% 100%;
background-position: center;
background-repeat: no-repeat; }
[type='checkbox']:checked { background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e"); }
[type='radio']:checked { background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e"); }
[type='checkbox']:checked:hover, [type='checkbox']:checked:focus, [type='radio']:checked:hover, [type='radio']:checked:focus { border-color: transparent;
background-color: currentColor; }
[type='checkbox']:indeterminate { background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 16 16'%3e%3cpath stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 8h8'/%3e%3c/svg%3e");
border-color: transparent;
background-color: currentColor;
background-size: 100% 100%;
background-position: center;
background-repeat: no-repeat; }
[type='checkbox']:indeterminate:hover, [type='checkbox']:indeterminate:focus { border-color: transparent;
background-color: currentColor; }
[type='file'] { background: unset;
border-color: inherit;
border-width: 0;
border-radius: 0;
padding: 0;
font-size: unset;
line-height: inherit; }
[type='file']:focus { outline: 1px solid ButtonText , 1px auto -webkit-focus-ring-color; }
*,::before,::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: shortcuts */
.container{width:100%;}
@media (min-width: 640px){
.container{max-width:640px;}
}
@media (min-width: 768px){
.container{max-width:768px;}
}
@media (min-width: 1024px){
.container{max-width:1024px;}
}
@media (min-width: 1280px){
.container{max-width:1280px;}
}
@media (min-width: 1536px){
.container{max-width:1536px;}
}
/* layer: default */
.absolute{position:absolute;}
.fixed{position:fixed;}
.relative{position:relative;}
.static{position:static;}
.z-\\[1\\]{z-index:1;}
.z-\\[9999\\]{z-index:9999;}
.my{margin-top:16px;margin-bottom:16px;}
.block{display:block;}
.block\\!{display:block !important;}
.inline-block{display:inline-block;}
.h-full{height:100%;}
.w-full{width:100%;}
.transform{transform:translateX(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotateZ(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z));}
.border{border-width:1px;}
.underline{text-decoration-line:underline;}
.hidden{display:none;};
    `,ze`
      .merriamwebster-ccpa-link {
        background-color: white;
        text-align: center;
        margin-top: 5px;
        margin-bottom: 100px;
      }
      @media screen and (max-width: 767.98px) {
        .merriamwebster-ccpa-link {
          margin-bottom: 60px;
        }
      }

      .merriamwebster-ccpa-link,
      .merriamwebster-ccpa-link span {
        font-size: 13px;
        color: #a9a9a9;
        font-family:
          Avenir, Montserrat, Corbel, 'URW Gothic', source-sans-pro, sans-serif;
        font-weight: normal;
        font-size: 13px;
      }

      .merriamwebster-ccpa-link a {
        text-decoration: underline;
        cursor: pointer;
      }

      /* Modal / background */
      .merriamwebster-ccpa-modal {
        display: none; /* Hidden by default */
        position: fixed; /* Stay in place */
        z-index: 2147483647; /* Sit on top of pub content */
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        overflow: auto; /* Enable scroll if needed */
        background-color: rgb(0, 0, 0); /* Fallback color */
        background-color: rgba(0, 0, 0, 0.4); /* Black with opacity */
      }
      /* Modal content */
      .merriamwebster-ccpa-modal-content {
        background-color: #fefefe;
        max-width: 592px;
        margin: 0px auto; /* 10% from the top and centered */
        padding: 20px 24px 24px; /* top pad to offset natural spacing in HTML's x img */
        border: 1px solid #888;
        width: 80%;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        border-radius: 10px;
        box-shadow: 0 0 10px rgb(0 0 0 / 50%);
        position: relative;
        top: 50%;
        transform: translateY(-50%);
      }
      /* Modal title */
      #merriamwebster-ccpa-modal-title {
        font-size: 20px;
        color: rgba(0, 0, 0, 0.87);
        line-height: 26px;
      }
      /* Class for close, continue, and cancel buttons */
      .merriamwebster-ccpa-modal-btn:hover,
      .merriamwebster-ccpa-modal-btn:focus {
        color: black;
        text-decoration: none;
        cursor: pointer;
      }
      /* Legal language */
      #merriamwebster-ccpa-modal-language {
        display: block;
        font-size: 14px;
        line-height: 20px;
        color: rgba(0, 0, 0, 0.87);
        margin: 16px 0px 32px 0px;
      }
      /* Close button's container formatting and animation */
      #merriamwebster-ccpa-modal-close-btn-container:hover,
      #merriamwebster-ccpa-modal-close-btn-container:focus,
      #merriamwebster-ccpa-modal-cancel-btn:hover,
      #merriamwebster-ccpa-modal-cancel-btn:focus {
        color: rgba(0, 0, 0, 0.8);
        text-decoration: none;
        cursor: pointer;
      }
      #merriamwebster-ccpa-modal-continue-btn:hover,
      #merriamwebster-ccpa-modal-continue-btn:focus {
        color: rgba(255, 255, 255, 0.8);
        text-decoration: none;
        cursor: pointer;
      }
      #merriamwebster-ccpa-modal-close-btn-container {
        color: black;
        font-size: 20px;
        line-height: 20px;
        font-weight: bold;
        position: absolute;
        right: 8px;
        top: 8px;
      }
      /* The container for the continue & cancel buttons */
      .adthrive-ccpa-lower-buttons-container {
        color: black;
        font-size: 18px;
      }
      /* Modal's cancel button */
      #merriamwebster-ccpa-modal-cancel-btn {
        display: inline-block;
        width: calc(100% - 160px);
        text-align: left;
      }
      /* Modal's continue button */
      #merriamwebster-ccpa-modal-continue-btn {
        display: inline-block;
        background-color: #010044;
        color: white;
        height: 44px;
        line-height: 44px;
        width: 150px;
        border-radius: 10px;
        text-align: center;
      }
      /* Covers mobile sizes */
      @media screen and (max-width: 896px) {
        .merriamwebster-ccpa-modal-content {
          position: relative;
          width: calc(100% - 80px);
          margin: 0px auto;
        }
        /* Modal title */
        #merriamwebster-ccpa-modal-title {
          font-size: 16px;
          line-height: 24px;
        }
        #merriamwebster-ccpa-modal-language {
          font-size: 12px;
          line-height: 16px;
          text-align: left;
        }
        .adthrive-ccpa-lower-buttons-container {
          font-size: 14px;
        }
        #merriamwebster-ccpa-modal-close-btn-container {
          font-size: 14px;
          line-height: 14px;
        }
      }
      /* Covers extra small width */
      @media screen and (max-width: 350px) {
        #merriamwebster-ccpa-modal-title {
          font-size: 14px;
          line-height: 24px;
        }
        #merriamwebster-ccpa-modal-language {
          font-size: 10px;
          line-height: 14px;
          text-align: left;
        }
        .adthrive-ccpa-lower-buttons-container {
          font-size: 12px;
          display: block;
          width: 100%;
          text-align: center;
        }
        #merriamwebster-ccpa-modal-close-btn-container {
          font-size: 12px;
          line-height: 12px;
          display: block;
        }
        #merriamwebster-ccpa-modal-continue-btn {
          display: block;
          width: 100%;
          text-align: center;
        }
        #merriamwebster-ccpa-modal-cancel-btn {
          display: block;
          width: 100%;
          text-align: center;
          margin-bottom: 10px;
        }
      }
    `];Ye([R({type:Boolean})],Be.prototype,"enabled",2);Ye([R({type:Boolean})],Be.prototype,"disableGoogleCMP",2);Ye([R({type:Boolean})],Be.prototype,"modalOpen",2);Ye([R({type:String})],Be.prototype,"ccpaOptIn",2);Ye([R({type:String})],Be.prototype,"ccpaOptOut",2);Ye([R({type:String})],Be.prototype,"ccpaOptOutText",2);Ye([R({type:String})],Be.prototype,"ccpaOptInText",2);Ye([R({type:String})],Be.prototype,"privacyString",2);Ye([R({type:String})],Be.prototype,"ccpaNotApplicable",2);Ye([Dt()],Be.prototype,"_deletionQueue",2);Ye([Dt()],Be.prototype,"userOptedOut",2);Ye([Dt()],Be.prototype,"gpcEnabled",2);Ye([Dt()],Be.prototype,"ccpaLinkText",2);Ye([Dt()],Be.prototype,"globalPrivacyControl",2);Ye([Dt()],Be.prototype,"gpcUpdated",2);Be=Ye([re("mw-ccpa")],Be);var w9=Object.defineProperty,y9=Object.getOwnPropertyDescriptor,jo=(e,t,n,r)=>{for(var o=r>1?void 0:r?y9(t,n):t,i=e.length-1,a;i>=0;i--)(a=e[i])&&(o=(r?a(t,n,o):a(o))||o);return r&&o&&w9(t,n,o),o};let or=class extends X{constructor(){super(...arguments),this.enabled=!1,this.gdprLinkText="Update Privacy Preferences",this.gdprText="",this.onClick=()=>{window.__cmp("showScreenAdvanced")}}render(){return F`${he(this.enabled,()=>F`
        <div class="gdpr-footer-message" part="gdpr-footer-message">
          <div class="gdpr-privacy-preferences" part="gdpr-privacy-preferences">
            <div
              class="gdpr-privacy-preferences-text"
              part="gdpr-privacy-preferences-text"
            >
              ${this.gdprText}
            </div>
            <a
              class="gdpr-privacy-preferences-link"
              part="gdpr-privacy-preferences-link"
              href="javascript:void(0);"
              @click="${{handleEvent:()=>this.onClick()}}"
            >
              ${this.gdprLinkText}
            </a>
          </div>
        </div>
      `)}`}};or.styles=[ze`
      /* layer: preflights */
*,::before,::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
*,::before,::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
[type='text'], [type='email'], [type='url'], [type='password'], [type='number'], [type='date'], [type='datetime-local'], [type='month'], [type='search'], [type='tel'], [type='time'], [type='week'], [multiple], textarea, select { appearance: none;
background-color: #fff;
border-color: #6b7280;
border-width: 1px;
border-radius: 0;
padding-top: 0.5rem;
padding-right: 0.75rem;
padding-bottom: 0.5rem;
padding-left: 0.75rem;
font-size: 1rem;
line-height: 1.5rem;
--un-shadow: 0 0 #0000; }
[type='text']:focus, [type='email']:focus, [type='url']:focus, [type='password']:focus, [type='number']:focus, [type='date']:focus, [type='datetime-local']:focus, [type='month']:focus, [type='search']:focus, [type='tel']:focus, [type='time']:focus, [type='week']:focus, [multiple]:focus, textarea:focus, select:focus { outline: 2px solid transparent;
outline-offset: 2px;
--un-ring-inset: var(--un-empty,/*!*/ /*!*/);
--un-ring-offset-width: 0px;
--un-ring-offset-color: #fff;
--un-ring-color: #2563eb;
--un-ring-offset-shadow: var(--un-ring-inset) 0 0 0 var(--un-ring-offset-width) var(--un-ring-offset-color);
--un-ring-shadow: var(--un-ring-inset) 0 0 0 calc(1px + var(--un-ring-offset-width)) var(--un-ring-color);
box-shadow: var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow);
border-color: #2563eb; }
input::placeholder, textarea::placeholder { color: #6b7280;
opacity: 1; }
::-webkit-datetime-edit-fields-wrapper { padding: 0; }
::-webkit-date-and-time-value { min-height: 1.5em; }
::-webkit-datetime-edit, ::-webkit-datetime-edit-year-field, ::-webkit-datetime-edit-month-field, ::-webkit-datetime-edit-day-field, ::-webkit-datetime-edit-hour-field, ::-webkit-datetime-edit-minute-field, ::-webkit-datetime-edit-second-field, ::-webkit-datetime-edit-millisecond-field, ::-webkit-datetime-edit-meridiem-field { padding-top: 0;
padding-bottom: 0; }
select { background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
background-position: right 0.5rem center;
background-repeat: no-repeat;
background-size: 1.5em 1.5em;
padding-right: 2.5rem;
print-color-adjust: exact; }
[multiple] { background-image: initial;
background-position: initial;
background-repeat: unset;
background-size: initial;
padding-right: 0.75rem;
print-color-adjust: unset; }
[type='checkbox'], [type='radio'] { appearance: none;
padding: 0;
print-color-adjust: exact;
display: inline-block;
vertical-align: middle;
background-origin: border-box;
user-select: none;
flex-shrink: 0;
height: 1rem;
width: 1rem;
color: #2563eb;
background-color: #fff;
border-color: #6b7280;
border-width: 1px;
--un-shadow: 0 0 #0000; }
[type='checkbox'] { border-radius: 0; }
[type='radio'] { border-radius: 100%; }
[type='checkbox']:focus, [type='radio']:focus { outline: 2px solid transparent;
outline-offset: 2px;
--un-ring-inset: var(--un-empty,/*!*/ /*!*/);
--un-ring-offset-width: 2px;
--un-ring-offset-color: #fff;
--un-ring-color: #2563eb;
--un-ring-offset-shadow: var(--un-ring-inset) 0 0 0 var(--un-ring-offset-width) var(--un-ring-offset-color);
--un-ring-shadow: var(--un-ring-inset) 0 0 0 calc(2px + var(--un-ring-offset-width)) var(--un-ring-color);
box-shadow: var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow); }
[type='checkbox']:checked, [type='radio']:checked { border-color: transparent;
background-color: currentColor;
background-size: 100% 100%;
background-position: center;
background-repeat: no-repeat; }
[type='checkbox']:checked { background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e"); }
[type='radio']:checked { background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e"); }
[type='checkbox']:checked:hover, [type='checkbox']:checked:focus, [type='radio']:checked:hover, [type='radio']:checked:focus { border-color: transparent;
background-color: currentColor; }
[type='checkbox']:indeterminate { background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 16 16'%3e%3cpath stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 8h8'/%3e%3c/svg%3e");
border-color: transparent;
background-color: currentColor;
background-size: 100% 100%;
background-position: center;
background-repeat: no-repeat; }
[type='checkbox']:indeterminate:hover, [type='checkbox']:indeterminate:focus { border-color: transparent;
background-color: currentColor; }
[type='file'] { background: unset;
border-color: inherit;
border-width: 0;
border-radius: 0;
padding: 0;
font-size: unset;
line-height: inherit; }
[type='file']:focus { outline: 1px solid ButtonText , 1px auto -webkit-focus-ring-color; }
*,::before,::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: default */
.relative{position:relative;}
.static{position:static;};
    `,ze`
      .gdpr-footer-message {
        z-index: 999;
        background-color: white;
        position: relative;
        margin-bottom: 100px;
      }

      @media screen and (max-width: 767.98px) {
        .gdpr-footer-message {
          margin-bottom: 60px;
        }
      }
      .gdpr-privacy-preferences {
        margin-top: 5px;
        text-align: center;
        color: #a9a9a9;
        font-family: Avenir, Montserrat, Corbel, 'URW Gothic', source-sans-pro,
          sans-serif;
        font-weight: normal;
        font-size: 13px;
      }
    `];jo([R({type:Boolean})],or.prototype,"enabled",2);jo([R({type:String})],or.prototype,"gdprLinkText",2);jo([R({type:String})],or.prototype,"gdprText",2);jo([R({type:String})],or.prototype,"onClick",2);or=jo([re("mw-gdpr")],or);export{X9 as $,ye as A,ot as B,ze as C,Dt as D,F as E,xt as F,he as G,ft as H,$r as I,xf as J,S9 as K,yh as L,X as M,_9 as N,C9 as O,Rr as P,Q9 as Q,fb as R,k9 as S,gg as T,L9 as U,E9 as V,z9 as W,P9 as X,$e as Y,J9 as Z,R9 as _,Lp as a,Y9 as a0,K9 as a1,H9 as a2,e6 as a3,t6 as a4,q9 as a5,zm as a6,Mr as a7,M9 as a8,N9 as a9,B9 as aa,D9 as ab,j9 as ac,I9 as ad,U9 as ae,$u as b,Zn as c,F9 as d,Vp as e,Zp as f,xr as g,G9 as h,W9 as i,$9 as j,kt as k,ut as l,T9 as m,Ki as n,zh as o,Wp as p,mg as q,A9 as r,Z9 as s,v9 as t,V9 as u,Qi as v,Lh as w,O9 as x,R as y,re as z};
