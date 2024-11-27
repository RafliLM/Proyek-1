import{g as te,c as Di,a as du,m as le,h as Dr,p as K,b as xi,d as M,e as w,F as ke,u as $s,f as pd,i as Fn,j as dn,k as dt,l as we,n as ft,o as mt,q as Bn,r as Un,s as bt,t as xr,v as Q,w as ce,x as Ni,y as fu,z as $n,A as Nr,B as Lr,C as vt,D as _d,E as Sn,G as vd,H as yd,I as mu,J as go,K as Ed,L as it,M as Td,N as Ue,O as Or,P as Ge,Q as wd,R as Li,S as Oi,T as Id,U as Ad,V as ye,W as Mi,X as bd,Y as sn,Z as Cd,_ as Xa,$ as gu,a0 as Tr,a1 as po,a2 as Sd,a3 as Ya,a4 as fn,a5 as _o,a6 as mn,a7 as vo,a8 as Vn,a9 as jn,aa as pu,ab as Rd,ac as rt,ad as Pd,ae as yo,af as _u,ag as cr,ah as Fi,ai as qn,aj as q,ak as ae,al as L,am as ze,an as Te,ao as st,ap as Vd,aq as oe,ar as pe,as as on,at as vu,au as ui,av as kd,aw as Ja,ax as Dd,ay as xd,az as Nd,aA as Ve,aB as Ld,aC as Od,aD as gr,aE as Md,aF as Fd,aG as lr,aH as Bd,aI as Ud,aJ as $d,aK as jd,aL as Za,aM as qd}from"./index-BL5oKNqX.js";function yu(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",t=arguments.length>2?arguments[2]:void 0;return te()({name:t??Di(du(n.replace(/__/g,"-"))),props:{tag:{type:String,default:e},...le()},setup(r,i){let{slots:o}=i;return()=>{var a;return Dr(r.tag,{class:[n,r.class],style:r.style},(a=o.default)==null?void 0:a.call(o))}}})}var el={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eu=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},zd=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=n[t++];e[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=n[t++],a=n[t++],l=n[t++],h=((i&7)<<18|(o&63)<<12|(a&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(h>>10)),e[r++]=String.fromCharCode(56320+(h&1023))}else{const o=n[t++],a=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|a&63)}}return e.join("")},Tu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const o=n[i],a=i+1<n.length,l=a?n[i+1]:0,h=i+2<n.length,d=h?n[i+2]:0,m=o>>2,_=(o&3)<<4|l>>4;let y=(l&15)<<2|d>>6,b=d&63;h||(b=64,a||(y=64)),r.push(t[m],t[_],t[y],t[b])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Eu(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):zd(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const o=t[n.charAt(i++)],l=i<n.length?t[n.charAt(i)]:0;++i;const d=i<n.length?t[n.charAt(i)]:64;++i;const _=i<n.length?t[n.charAt(i)]:64;if(++i,o==null||l==null||d==null||_==null)throw new Gd;const y=o<<2|l>>4;if(r.push(y),d!==64){const b=l<<4&240|d>>2;if(r.push(b),_!==64){const C=d<<6&192|_;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Gd extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Hd=function(n){const e=Eu(n);return Tu.encodeByteArray(e,!0)},Ti=function(n){return Hd(n).replace(/\./g,"")},Kd=function(n){try{return Tu.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wd(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qd=()=>Wd().__FIREBASE_DEFAULTS__,Xd=()=>{if(typeof process>"u"||typeof el>"u")return;const n=el.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Yd=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Kd(n[1]);return e&&JSON.parse(e)},Eo=()=>{try{return Qd()||Xd()||Yd()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Jd=n=>{var e,t;return(t=(e=Eo())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},wu=n=>{const e=Jd(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Iu=()=>{var n;return(n=Eo())===null||n===void 0?void 0:n.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zd{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Au(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Ti(JSON.stringify(t)),Ti(JSON.stringify(a)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ef(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function tf(){var n;const e=(n=Eo())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function nf(){return!tf()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function rf(){try{return typeof indexedDB=="object"}catch{return!1}}function sf(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var o;e(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const of="FirebaseError";class gn extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=of,Object.setPrototypeOf(this,gn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,bu.prototype.create)}}class bu{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,o=this.errors[e],a=o?af(o,r):"Error",l=`${this.serviceName}: ${a} (${i}).`;return new gn(i,l,r)}}function af(n,e){return n.replace(lf,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const lf=/\{\$([^}]+)}/g;function js(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const o=n[i],a=e[i];if(tl(o)&&tl(a)){if(!js(o,a))return!1}else if(o!==a)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function tl(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mr(n){return n&&n._delegate?n._delegate:n}class kn{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const en="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uf{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Zd;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(hf(e))try{this.getOrInitializeService({instanceIdentifier:en})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(e=en){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=en){return this.instances.has(e)}getOptions(e=en){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[o,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(o);r===l&&a.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(e),this.onInitCallbacks.set(i,o);const a=this.instances.get(i);return a&&e(a,i),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:cf(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=en){return this.component?this.component.multipleInstances?e:en:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function cf(n){return n===en?void 0:n}function hf(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class df{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new uf(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Y;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Y||(Y={}));const ff={debug:Y.DEBUG,verbose:Y.VERBOSE,info:Y.INFO,warn:Y.WARN,error:Y.ERROR,silent:Y.SILENT},mf=Y.INFO,gf={[Y.DEBUG]:"log",[Y.VERBOSE]:"log",[Y.INFO]:"info",[Y.WARN]:"warn",[Y.ERROR]:"error"},pf=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=gf[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Cu{constructor(e){this.name=e,this._logLevel=mf,this._logHandler=pf,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Y))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ff[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Y.DEBUG,...e),this._logHandler(this,Y.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Y.VERBOSE,...e),this._logHandler(this,Y.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Y.INFO,...e),this._logHandler(this,Y.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Y.WARN,...e),this._logHandler(this,Y.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Y.ERROR,...e),this._logHandler(this,Y.ERROR,...e)}}const _f=(n,e)=>e.some(t=>n instanceof t);let nl,rl;function vf(){return nl||(nl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function yf(){return rl||(rl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Su=new WeakMap,qs=new WeakMap,Ru=new WeakMap,Rs=new WeakMap,To=new WeakMap;function Ef(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",o),n.removeEventListener("error",a)},o=()=>{t(xt(n.result)),i()},a=()=>{r(n.error),i()};n.addEventListener("success",o),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&Su.set(t,n)}).catch(()=>{}),To.set(e,n),e}function Tf(n){if(qs.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",a),n.removeEventListener("abort",a)},o=()=>{t(),i()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",o),n.addEventListener("error",a),n.addEventListener("abort",a)});qs.set(n,e)}let zs={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return qs.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Ru.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return xt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function wf(n){zs=n(zs)}function If(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Ps(this),e,...t);return Ru.set(r,e.sort?e.sort():[e]),xt(r)}:yf().includes(n)?function(...e){return n.apply(Ps(this),e),xt(Su.get(this))}:function(...e){return xt(n.apply(Ps(this),e))}}function Af(n){return typeof n=="function"?If(n):(n instanceof IDBTransaction&&Tf(n),_f(n,vf())?new Proxy(n,zs):n)}function xt(n){if(n instanceof IDBRequest)return Ef(n);if(Rs.has(n))return Rs.get(n);const e=Af(n);return e!==n&&(Rs.set(n,e),To.set(e,n)),e}const Ps=n=>To.get(n);function bf(n,e,{blocked:t,upgrade:r,blocking:i,terminated:o}={}){const a=indexedDB.open(n,e),l=xt(a);return r&&a.addEventListener("upgradeneeded",h=>{r(xt(a.result),h.oldVersion,h.newVersion,xt(a.transaction),h)}),t&&a.addEventListener("blocked",h=>t(h.oldVersion,h.newVersion,h)),l.then(h=>{o&&h.addEventListener("close",()=>o()),i&&h.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),l}const Cf=["get","getKey","getAll","getAllKeys","count"],Sf=["put","add","delete","clear"],Vs=new Map;function il(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Vs.get(e))return Vs.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=Sf.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Cf.includes(t)))return;const o=async function(a,...l){const h=this.transaction(a,i?"readwrite":"readonly");let d=h.store;return r&&(d=d.index(l.shift())),(await Promise.all([d[t](...l),i&&h.done]))[0]};return Vs.set(e,o),o}wf(n=>({...n,get:(e,t,r)=>il(e,t)||n.get(e,t,r),has:(e,t)=>!!il(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rf{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Pf(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function Pf(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Gs="@firebase/app",sl="0.10.15";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const It=new Cu("@firebase/app"),Vf="@firebase/app-compat",kf="@firebase/analytics-compat",Df="@firebase/analytics",xf="@firebase/app-check-compat",Nf="@firebase/app-check",Lf="@firebase/auth",Of="@firebase/auth-compat",Mf="@firebase/database",Ff="@firebase/data-connect",Bf="@firebase/database-compat",Uf="@firebase/functions",$f="@firebase/functions-compat",jf="@firebase/installations",qf="@firebase/installations-compat",zf="@firebase/messaging",Gf="@firebase/messaging-compat",Hf="@firebase/performance",Kf="@firebase/performance-compat",Wf="@firebase/remote-config",Qf="@firebase/remote-config-compat",Xf="@firebase/storage",Yf="@firebase/storage-compat",Jf="@firebase/firestore",Zf="@firebase/vertexai",em="@firebase/firestore-compat",tm="firebase",nm="11.0.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hs="[DEFAULT]",rm={[Gs]:"fire-core",[Vf]:"fire-core-compat",[Df]:"fire-analytics",[kf]:"fire-analytics-compat",[Nf]:"fire-app-check",[xf]:"fire-app-check-compat",[Lf]:"fire-auth",[Of]:"fire-auth-compat",[Mf]:"fire-rtdb",[Ff]:"fire-data-connect",[Bf]:"fire-rtdb-compat",[Uf]:"fire-fn",[$f]:"fire-fn-compat",[jf]:"fire-iid",[qf]:"fire-iid-compat",[zf]:"fire-fcm",[Gf]:"fire-fcm-compat",[Hf]:"fire-perf",[Kf]:"fire-perf-compat",[Wf]:"fire-rc",[Qf]:"fire-rc-compat",[Xf]:"fire-gcs",[Yf]:"fire-gcs-compat",[Jf]:"fire-fst",[em]:"fire-fst-compat",[Zf]:"fire-vertex","fire-js":"fire-js",[tm]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wi=new Map,im=new Map,Ks=new Map;function ol(n,e){try{n.container.addComponent(e)}catch(t){It.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function wr(n){const e=n.name;if(Ks.has(e))return It.debug(`There were multiple attempts to register component ${e}.`),!1;Ks.set(e,n);for(const t of wi.values())ol(t,n);for(const t of im.values())ol(t,n);return!0}function Pu(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sm={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Nt=new bu("app","Firebase",sm);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class om{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new kn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Nt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vu=nm;function ku(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Hs,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Nt.create("bad-app-name",{appName:String(i)});if(t||(t=Iu()),!t)throw Nt.create("no-options");const o=wi.get(i);if(o){if(js(t,o.options)&&js(r,o.config))return o;throw Nt.create("duplicate-app",{appName:i})}const a=new df(i);for(const h of Ks.values())a.addComponent(h);const l=new om(t,r,a);return wi.set(i,l),l}function Du(n=Hs){const e=wi.get(n);if(!e&&n===Hs&&Iu())return ku();if(!e)throw Nt.create("no-app",{appName:n});return e}function Lt(n,e,t){var r;let i=(r=rm[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const o=i.match(/\s|\//),a=e.match(/\s|\//);if(o||a){const l=[`Unable to register library "${i}" with version "${e}":`];o&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&a&&l.push("and"),a&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),It.warn(l.join(" "));return}wr(new kn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const am="firebase-heartbeat-database",lm=1,Ir="firebase-heartbeat-store";let ks=null;function xu(){return ks||(ks=bf(am,lm,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Ir)}catch(t){console.warn(t)}}}}).catch(n=>{throw Nt.create("idb-open",{originalErrorMessage:n.message})})),ks}async function um(n){try{const t=(await xu()).transaction(Ir),r=await t.objectStore(Ir).get(Nu(n));return await t.done,r}catch(e){if(e instanceof gn)It.warn(e.message);else{const t=Nt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});It.warn(t.message)}}}async function al(n,e){try{const r=(await xu()).transaction(Ir,"readwrite");await r.objectStore(Ir).put(e,Nu(n)),await r.done}catch(t){if(t instanceof gn)It.warn(t.message);else{const r=Nt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});It.warn(r.message)}}}function Nu(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cm=1024,hm=30*24*60*60*1e3;class dm{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new mm(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=ll();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o)?void 0:(this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const l=new Date(a.date).valueOf();return Date.now()-l<=hm}),this._storage.overwrite(this._heartbeatsCache))}catch(r){It.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=ll(),{heartbeatsToSend:r,unsentEntries:i}=fm(this._heartbeatsCache.heartbeats),o=Ti(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(t){return It.warn(t),""}}}function ll(){return new Date().toISOString().substring(0,10)}function fm(n,e=cm){const t=[];let r=n.slice();for(const i of n){const o=t.find(a=>a.agent===i.agent);if(o){if(o.dates.push(i.date),ul(t)>e){o.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),ul(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class mm{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return rf()?sf().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await um(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return al(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return al(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function ul(n){return Ti(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gm(n){wr(new kn("platform-logger",e=>new Rf(e),"PRIVATE")),wr(new kn("heartbeat",e=>new dm(e),"PRIVATE")),Lt(Gs,sl,n),Lt(Gs,sl,"esm2017"),Lt("fire-js","")}gm("");var cl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var an,Lu;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(A,p){function v(){}v.prototype=p.prototype,A.D=p.prototype,A.prototype=new v,A.prototype.constructor=A,A.C=function(I,T,E){for(var g=Array(arguments.length-2),ie=2;ie<arguments.length;ie++)g[ie-2]=arguments[ie];return p.prototype[T].apply(I,g)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(A,p,v){v||(v=0);var I=Array(16);if(typeof p=="string")for(var T=0;16>T;++T)I[T]=p.charCodeAt(v++)|p.charCodeAt(v++)<<8|p.charCodeAt(v++)<<16|p.charCodeAt(v++)<<24;else for(T=0;16>T;++T)I[T]=p[v++]|p[v++]<<8|p[v++]<<16|p[v++]<<24;p=A.g[0],v=A.g[1],T=A.g[2];var E=A.g[3],g=p+(E^v&(T^E))+I[0]+3614090360&4294967295;p=v+(g<<7&4294967295|g>>>25),g=E+(T^p&(v^T))+I[1]+3905402710&4294967295,E=p+(g<<12&4294967295|g>>>20),g=T+(v^E&(p^v))+I[2]+606105819&4294967295,T=E+(g<<17&4294967295|g>>>15),g=v+(p^T&(E^p))+I[3]+3250441966&4294967295,v=T+(g<<22&4294967295|g>>>10),g=p+(E^v&(T^E))+I[4]+4118548399&4294967295,p=v+(g<<7&4294967295|g>>>25),g=E+(T^p&(v^T))+I[5]+1200080426&4294967295,E=p+(g<<12&4294967295|g>>>20),g=T+(v^E&(p^v))+I[6]+2821735955&4294967295,T=E+(g<<17&4294967295|g>>>15),g=v+(p^T&(E^p))+I[7]+4249261313&4294967295,v=T+(g<<22&4294967295|g>>>10),g=p+(E^v&(T^E))+I[8]+1770035416&4294967295,p=v+(g<<7&4294967295|g>>>25),g=E+(T^p&(v^T))+I[9]+2336552879&4294967295,E=p+(g<<12&4294967295|g>>>20),g=T+(v^E&(p^v))+I[10]+4294925233&4294967295,T=E+(g<<17&4294967295|g>>>15),g=v+(p^T&(E^p))+I[11]+2304563134&4294967295,v=T+(g<<22&4294967295|g>>>10),g=p+(E^v&(T^E))+I[12]+1804603682&4294967295,p=v+(g<<7&4294967295|g>>>25),g=E+(T^p&(v^T))+I[13]+4254626195&4294967295,E=p+(g<<12&4294967295|g>>>20),g=T+(v^E&(p^v))+I[14]+2792965006&4294967295,T=E+(g<<17&4294967295|g>>>15),g=v+(p^T&(E^p))+I[15]+1236535329&4294967295,v=T+(g<<22&4294967295|g>>>10),g=p+(T^E&(v^T))+I[1]+4129170786&4294967295,p=v+(g<<5&4294967295|g>>>27),g=E+(v^T&(p^v))+I[6]+3225465664&4294967295,E=p+(g<<9&4294967295|g>>>23),g=T+(p^v&(E^p))+I[11]+643717713&4294967295,T=E+(g<<14&4294967295|g>>>18),g=v+(E^p&(T^E))+I[0]+3921069994&4294967295,v=T+(g<<20&4294967295|g>>>12),g=p+(T^E&(v^T))+I[5]+3593408605&4294967295,p=v+(g<<5&4294967295|g>>>27),g=E+(v^T&(p^v))+I[10]+38016083&4294967295,E=p+(g<<9&4294967295|g>>>23),g=T+(p^v&(E^p))+I[15]+3634488961&4294967295,T=E+(g<<14&4294967295|g>>>18),g=v+(E^p&(T^E))+I[4]+3889429448&4294967295,v=T+(g<<20&4294967295|g>>>12),g=p+(T^E&(v^T))+I[9]+568446438&4294967295,p=v+(g<<5&4294967295|g>>>27),g=E+(v^T&(p^v))+I[14]+3275163606&4294967295,E=p+(g<<9&4294967295|g>>>23),g=T+(p^v&(E^p))+I[3]+4107603335&4294967295,T=E+(g<<14&4294967295|g>>>18),g=v+(E^p&(T^E))+I[8]+1163531501&4294967295,v=T+(g<<20&4294967295|g>>>12),g=p+(T^E&(v^T))+I[13]+2850285829&4294967295,p=v+(g<<5&4294967295|g>>>27),g=E+(v^T&(p^v))+I[2]+4243563512&4294967295,E=p+(g<<9&4294967295|g>>>23),g=T+(p^v&(E^p))+I[7]+1735328473&4294967295,T=E+(g<<14&4294967295|g>>>18),g=v+(E^p&(T^E))+I[12]+2368359562&4294967295,v=T+(g<<20&4294967295|g>>>12),g=p+(v^T^E)+I[5]+4294588738&4294967295,p=v+(g<<4&4294967295|g>>>28),g=E+(p^v^T)+I[8]+2272392833&4294967295,E=p+(g<<11&4294967295|g>>>21),g=T+(E^p^v)+I[11]+1839030562&4294967295,T=E+(g<<16&4294967295|g>>>16),g=v+(T^E^p)+I[14]+4259657740&4294967295,v=T+(g<<23&4294967295|g>>>9),g=p+(v^T^E)+I[1]+2763975236&4294967295,p=v+(g<<4&4294967295|g>>>28),g=E+(p^v^T)+I[4]+1272893353&4294967295,E=p+(g<<11&4294967295|g>>>21),g=T+(E^p^v)+I[7]+4139469664&4294967295,T=E+(g<<16&4294967295|g>>>16),g=v+(T^E^p)+I[10]+3200236656&4294967295,v=T+(g<<23&4294967295|g>>>9),g=p+(v^T^E)+I[13]+681279174&4294967295,p=v+(g<<4&4294967295|g>>>28),g=E+(p^v^T)+I[0]+3936430074&4294967295,E=p+(g<<11&4294967295|g>>>21),g=T+(E^p^v)+I[3]+3572445317&4294967295,T=E+(g<<16&4294967295|g>>>16),g=v+(T^E^p)+I[6]+76029189&4294967295,v=T+(g<<23&4294967295|g>>>9),g=p+(v^T^E)+I[9]+3654602809&4294967295,p=v+(g<<4&4294967295|g>>>28),g=E+(p^v^T)+I[12]+3873151461&4294967295,E=p+(g<<11&4294967295|g>>>21),g=T+(E^p^v)+I[15]+530742520&4294967295,T=E+(g<<16&4294967295|g>>>16),g=v+(T^E^p)+I[2]+3299628645&4294967295,v=T+(g<<23&4294967295|g>>>9),g=p+(T^(v|~E))+I[0]+4096336452&4294967295,p=v+(g<<6&4294967295|g>>>26),g=E+(v^(p|~T))+I[7]+1126891415&4294967295,E=p+(g<<10&4294967295|g>>>22),g=T+(p^(E|~v))+I[14]+2878612391&4294967295,T=E+(g<<15&4294967295|g>>>17),g=v+(E^(T|~p))+I[5]+4237533241&4294967295,v=T+(g<<21&4294967295|g>>>11),g=p+(T^(v|~E))+I[12]+1700485571&4294967295,p=v+(g<<6&4294967295|g>>>26),g=E+(v^(p|~T))+I[3]+2399980690&4294967295,E=p+(g<<10&4294967295|g>>>22),g=T+(p^(E|~v))+I[10]+4293915773&4294967295,T=E+(g<<15&4294967295|g>>>17),g=v+(E^(T|~p))+I[1]+2240044497&4294967295,v=T+(g<<21&4294967295|g>>>11),g=p+(T^(v|~E))+I[8]+1873313359&4294967295,p=v+(g<<6&4294967295|g>>>26),g=E+(v^(p|~T))+I[15]+4264355552&4294967295,E=p+(g<<10&4294967295|g>>>22),g=T+(p^(E|~v))+I[6]+2734768916&4294967295,T=E+(g<<15&4294967295|g>>>17),g=v+(E^(T|~p))+I[13]+1309151649&4294967295,v=T+(g<<21&4294967295|g>>>11),g=p+(T^(v|~E))+I[4]+4149444226&4294967295,p=v+(g<<6&4294967295|g>>>26),g=E+(v^(p|~T))+I[11]+3174756917&4294967295,E=p+(g<<10&4294967295|g>>>22),g=T+(p^(E|~v))+I[2]+718787259&4294967295,T=E+(g<<15&4294967295|g>>>17),g=v+(E^(T|~p))+I[9]+3951481745&4294967295,A.g[0]=A.g[0]+p&4294967295,A.g[1]=A.g[1]+(T+(g<<21&4294967295|g>>>11))&4294967295,A.g[2]=A.g[2]+T&4294967295,A.g[3]=A.g[3]+E&4294967295}r.prototype.u=function(A,p){p===void 0&&(p=A.length);for(var v=p-this.blockSize,I=this.B,T=this.h,E=0;E<p;){if(T==0)for(;E<=v;)i(this,A,E),E+=this.blockSize;if(typeof A=="string"){for(;E<p;)if(I[T++]=A.charCodeAt(E++),T==this.blockSize){i(this,I),T=0;break}}else for(;E<p;)if(I[T++]=A[E++],T==this.blockSize){i(this,I),T=0;break}}this.h=T,this.o+=p},r.prototype.v=function(){var A=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);A[0]=128;for(var p=1;p<A.length-8;++p)A[p]=0;var v=8*this.o;for(p=A.length-8;p<A.length;++p)A[p]=v&255,v/=256;for(this.u(A),A=Array(16),p=v=0;4>p;++p)for(var I=0;32>I;I+=8)A[v++]=this.g[p]>>>I&255;return A};function o(A,p){var v=l;return Object.prototype.hasOwnProperty.call(v,A)?v[A]:v[A]=p(A)}function a(A,p){this.h=p;for(var v=[],I=!0,T=A.length-1;0<=T;T--){var E=A[T]|0;I&&E==p||(v[T]=E,I=!1)}this.g=v}var l={};function h(A){return-128<=A&&128>A?o(A,function(p){return new a([p|0],0>p?-1:0)}):new a([A|0],0>A?-1:0)}function d(A){if(isNaN(A)||!isFinite(A))return _;if(0>A)return P(d(-A));for(var p=[],v=1,I=0;A>=v;I++)p[I]=A/v|0,v*=4294967296;return new a(p,0)}function m(A,p){if(A.length==0)throw Error("number format error: empty string");if(p=p||10,2>p||36<p)throw Error("radix out of range: "+p);if(A.charAt(0)=="-")return P(m(A.substring(1),p));if(0<=A.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=d(Math.pow(p,8)),I=_,T=0;T<A.length;T+=8){var E=Math.min(8,A.length-T),g=parseInt(A.substring(T,T+E),p);8>E?(E=d(Math.pow(p,E)),I=I.j(E).add(d(g))):(I=I.j(v),I=I.add(d(g)))}return I}var _=h(0),y=h(1),b=h(16777216);n=a.prototype,n.m=function(){if(R(this))return-P(this).m();for(var A=0,p=1,v=0;v<this.g.length;v++){var I=this.i(v);A+=(0<=I?I:4294967296+I)*p,p*=4294967296}return A},n.toString=function(A){if(A=A||10,2>A||36<A)throw Error("radix out of range: "+A);if(C(this))return"0";if(R(this))return"-"+P(this).toString(A);for(var p=d(Math.pow(A,6)),v=this,I="";;){var T=B(v,p).g;v=N(v,T.j(p));var E=((0<v.g.length?v.g[0]:v.h)>>>0).toString(A);if(v=T,C(v))return E+I;for(;6>E.length;)E="0"+E;I=E+I}},n.i=function(A){return 0>A?0:A<this.g.length?this.g[A]:this.h};function C(A){if(A.h!=0)return!1;for(var p=0;p<A.g.length;p++)if(A.g[p]!=0)return!1;return!0}function R(A){return A.h==-1}n.l=function(A){return A=N(this,A),R(A)?-1:C(A)?0:1};function P(A){for(var p=A.g.length,v=[],I=0;I<p;I++)v[I]=~A.g[I];return new a(v,~A.h).add(y)}n.abs=function(){return R(this)?P(this):this},n.add=function(A){for(var p=Math.max(this.g.length,A.g.length),v=[],I=0,T=0;T<=p;T++){var E=I+(this.i(T)&65535)+(A.i(T)&65535),g=(E>>>16)+(this.i(T)>>>16)+(A.i(T)>>>16);I=g>>>16,E&=65535,g&=65535,v[T]=g<<16|E}return new a(v,v[v.length-1]&-2147483648?-1:0)};function N(A,p){return A.add(P(p))}n.j=function(A){if(C(this)||C(A))return _;if(R(this))return R(A)?P(this).j(P(A)):P(P(this).j(A));if(R(A))return P(this.j(P(A)));if(0>this.l(b)&&0>A.l(b))return d(this.m()*A.m());for(var p=this.g.length+A.g.length,v=[],I=0;I<2*p;I++)v[I]=0;for(I=0;I<this.g.length;I++)for(var T=0;T<A.g.length;T++){var E=this.i(I)>>>16,g=this.i(I)&65535,ie=A.i(T)>>>16,Se=A.i(T)&65535;v[2*I+2*T]+=g*Se,U(v,2*I+2*T),v[2*I+2*T+1]+=E*Se,U(v,2*I+2*T+1),v[2*I+2*T+1]+=g*ie,U(v,2*I+2*T+1),v[2*I+2*T+2]+=E*ie,U(v,2*I+2*T+2)}for(I=0;I<p;I++)v[I]=v[2*I+1]<<16|v[2*I];for(I=p;I<2*p;I++)v[I]=0;return new a(v,0)};function U(A,p){for(;(A[p]&65535)!=A[p];)A[p+1]+=A[p]>>>16,A[p]&=65535,p++}function j(A,p){this.g=A,this.h=p}function B(A,p){if(C(p))throw Error("division by zero");if(C(A))return new j(_,_);if(R(A))return p=B(P(A),p),new j(P(p.g),P(p.h));if(R(p))return p=B(A,P(p)),new j(P(p.g),p.h);if(30<A.g.length){if(R(A)||R(p))throw Error("slowDivide_ only works with positive integers.");for(var v=y,I=p;0>=I.l(A);)v=W(v),I=W(I);var T=H(v,1),E=H(I,1);for(I=H(I,2),v=H(v,2);!C(I);){var g=E.add(I);0>=g.l(A)&&(T=T.add(v),E=g),I=H(I,1),v=H(v,1)}return p=N(A,T.j(p)),new j(T,p)}for(T=_;0<=A.l(p);){for(v=Math.max(1,Math.floor(A.m()/p.m())),I=Math.ceil(Math.log(v)/Math.LN2),I=48>=I?1:Math.pow(2,I-48),E=d(v),g=E.j(p);R(g)||0<g.l(A);)v-=I,E=d(v),g=E.j(p);C(E)&&(E=y),T=T.add(E),A=N(A,g)}return new j(T,A)}n.A=function(A){return B(this,A).h},n.and=function(A){for(var p=Math.max(this.g.length,A.g.length),v=[],I=0;I<p;I++)v[I]=this.i(I)&A.i(I);return new a(v,this.h&A.h)},n.or=function(A){for(var p=Math.max(this.g.length,A.g.length),v=[],I=0;I<p;I++)v[I]=this.i(I)|A.i(I);return new a(v,this.h|A.h)},n.xor=function(A){for(var p=Math.max(this.g.length,A.g.length),v=[],I=0;I<p;I++)v[I]=this.i(I)^A.i(I);return new a(v,this.h^A.h)};function W(A){for(var p=A.g.length+1,v=[],I=0;I<p;I++)v[I]=A.i(I)<<1|A.i(I-1)>>>31;return new a(v,A.h)}function H(A,p){var v=p>>5;p%=32;for(var I=A.g.length-v,T=[],E=0;E<I;E++)T[E]=0<p?A.i(E+v)>>>p|A.i(E+v+1)<<32-p:A.i(E+v);return new a(T,A.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Lu=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=m,an=a}).apply(typeof cl<"u"?cl:typeof self<"u"?self:typeof window<"u"?window:{});var ci=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ou,hr,Mu,pi,Ws,Fu,Bu,Uu;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(s,u,c){return s==Array.prototype||s==Object.prototype||(s[u]=c.value),s};function t(s){s=[typeof globalThis=="object"&&globalThis,s,typeof window=="object"&&window,typeof self=="object"&&self,typeof ci=="object"&&ci];for(var u=0;u<s.length;++u){var c=s[u];if(c&&c.Math==Math)return c}throw Error("Cannot find global object")}var r=t(this);function i(s,u){if(u)e:{var c=r;s=s.split(".");for(var f=0;f<s.length-1;f++){var S=s[f];if(!(S in c))break e;c=c[S]}s=s[s.length-1],f=c[s],u=u(f),u!=f&&u!=null&&e(c,s,{configurable:!0,writable:!0,value:u})}}function o(s,u){s instanceof String&&(s+="");var c=0,f=!1,S={next:function(){if(!f&&c<s.length){var V=c++;return{value:u(V,s[V]),done:!1}}return f=!0,{done:!0,value:void 0}}};return S[Symbol.iterator]=function(){return S},S}i("Array.prototype.values",function(s){return s||function(){return o(this,function(u,c){return c})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function h(s){var u=typeof s;return u=u!="object"?u:s?Array.isArray(s)?"array":u:"null",u=="array"||u=="object"&&typeof s.length=="number"}function d(s){var u=typeof s;return u=="object"&&s!=null||u=="function"}function m(s,u,c){return s.call.apply(s.bind,arguments)}function _(s,u,c){if(!s)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var S=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(S,f),s.apply(u,S)}}return function(){return s.apply(u,arguments)}}function y(s,u,c){return y=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?m:_,y.apply(null,arguments)}function b(s,u){var c=Array.prototype.slice.call(arguments,1);return function(){var f=c.slice();return f.push.apply(f,arguments),s.apply(this,f)}}function C(s,u){function c(){}c.prototype=u.prototype,s.aa=u.prototype,s.prototype=new c,s.prototype.constructor=s,s.Qb=function(f,S,V){for(var D=Array(arguments.length-2),se=2;se<arguments.length;se++)D[se-2]=arguments[se];return u.prototype[S].apply(f,D)}}function R(s){const u=s.length;if(0<u){const c=Array(u);for(let f=0;f<u;f++)c[f]=s[f];return c}return[]}function P(s,u){for(let c=1;c<arguments.length;c++){const f=arguments[c];if(h(f)){const S=s.length||0,V=f.length||0;s.length=S+V;for(let D=0;D<V;D++)s[S+D]=f[D]}else s.push(f)}}class N{constructor(u,c){this.i=u,this.j=c,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function U(s){return/^[\s\xa0]*$/.test(s)}function j(){var s=l.navigator;return s&&(s=s.userAgent)?s:""}function B(s){return B[" "](s),s}B[" "]=function(){};var W=j().indexOf("Gecko")!=-1&&!(j().toLowerCase().indexOf("webkit")!=-1&&j().indexOf("Edge")==-1)&&!(j().indexOf("Trident")!=-1||j().indexOf("MSIE")!=-1)&&j().indexOf("Edge")==-1;function H(s,u,c){for(const f in s)u.call(c,s[f],f,s)}function A(s,u){for(const c in s)u.call(void 0,s[c],c,s)}function p(s){const u={};for(const c in s)u[c]=s[c];return u}const v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(s,u){let c,f;for(let S=1;S<arguments.length;S++){f=arguments[S];for(c in f)s[c]=f[c];for(let V=0;V<v.length;V++)c=v[V],Object.prototype.hasOwnProperty.call(f,c)&&(s[c]=f[c])}}function T(s){var u=1;s=s.split(":");const c=[];for(;0<u&&s.length;)c.push(s.shift()),u--;return s.length&&c.push(s.join(":")),c}function E(s){l.setTimeout(()=>{throw s},0)}function g(){var s=Wt;let u=null;return s.g&&(u=s.g,s.g=s.g.next,s.g||(s.h=null),u.next=null),u}class ie{constructor(){this.h=this.g=null}add(u,c){const f=Se.get();f.set(u,c),this.h?this.h.next=f:this.g=f,this.h=f}}var Se=new N(()=>new tt,s=>s.reset());class tt{constructor(){this.next=this.g=this.h=null}set(u,c){this.h=u,this.g=c,this.next=null}reset(){this.next=this.g=this.h=null}}let Ht,Kt=!1,Wt=new ie,zr=()=>{const s=l.Promise.resolve(void 0);Ht=()=>{s.then(ns)}};var ns=()=>{for(var s;s=g();){try{s.h.call(s.g)}catch(c){E(c)}var u=Se;u.j(s),100>u.h&&(u.h++,s.next=u.g,u.g=s)}Kt=!1};function ne(){this.s=this.s,this.C=this.C}ne.prototype.s=!1,ne.prototype.ma=function(){this.s||(this.s=!0,this.N())},ne.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function me(s,u){this.type=s,this.g=this.target=u,this.defaultPrevented=!1}me.prototype.h=function(){this.defaultPrevented=!0};var rs=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var s=!1,u=Object.defineProperty({},"passive",{get:function(){s=!0}});try{const c=()=>{};l.addEventListener("test",c,u),l.removeEventListener("test",c,u)}catch{}return s}();function Ct(s,u){if(me.call(this,s?s.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,s){var c=this.type=s.type,f=s.changedTouches&&s.changedTouches.length?s.changedTouches[0]:null;if(this.target=s.target||s.srcElement,this.g=u,u=s.relatedTarget){if(W){e:{try{B(u.nodeName);var S=!0;break e}catch{}S=!1}S||(u=null)}}else c=="mouseover"?u=s.fromElement:c=="mouseout"&&(u=s.toElement);this.relatedTarget=u,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0),this.button=s.button,this.key=s.key||"",this.ctrlKey=s.ctrlKey,this.altKey=s.altKey,this.shiftKey=s.shiftKey,this.metaKey=s.metaKey,this.pointerId=s.pointerId||0,this.pointerType=typeof s.pointerType=="string"?s.pointerType:is[s.pointerType]||"",this.state=s.state,this.i=s,s.defaultPrevented&&Ct.aa.h.call(this)}}C(Ct,me);var is={2:"touch",3:"pen",4:"mouse"};Ct.prototype.h=function(){Ct.aa.h.call(this);var s=this.i;s.preventDefault?s.preventDefault():s.returnValue=!1};var Qt="closure_listenable_"+(1e6*Math.random()|0),Wn=0;function Gr(s,u,c,f,S){this.listener=s,this.proxy=null,this.src=u,this.type=c,this.capture=!!f,this.ha=S,this.key=++Wn,this.da=this.fa=!1}function xe(s){s.da=!0,s.listener=null,s.proxy=null,s.src=null,s.ha=null}function Hr(s){this.src=s,this.g={},this.h=0}Hr.prototype.add=function(s,u,c,f,S){var V=s.toString();s=this.g[V],s||(s=this.g[V]=[],this.h++);var D=os(s,u,f,S);return-1<D?(u=s[D],c||(u.fa=!1)):(u=new Gr(u,this.src,V,!!f,S),u.fa=c,s.push(u)),u};function ss(s,u){var c=u.type;if(c in s.g){var f=s.g[c],S=Array.prototype.indexOf.call(f,u,void 0),V;(V=0<=S)&&Array.prototype.splice.call(f,S,1),V&&(xe(u),s.g[c].length==0&&(delete s.g[c],s.h--))}}function os(s,u,c,f){for(var S=0;S<s.length;++S){var V=s[S];if(!V.da&&V.listener==u&&V.capture==!!c&&V.ha==f)return S}return-1}var as="closure_lm_"+(1e6*Math.random()|0),ls={};function Yo(s,u,c,f,S){if(Array.isArray(u)){for(var V=0;V<u.length;V++)Yo(s,u[V],c,f,S);return null}return c=ea(c),s&&s[Qt]?s.K(u,c,d(f)?!!f.capture:!!f,S):$h(s,u,c,!1,f,S)}function $h(s,u,c,f,S,V){if(!u)throw Error("Invalid event type");var D=d(S)?!!S.capture:!!S,se=cs(s);if(se||(s[as]=se=new Hr(s)),c=se.add(u,c,f,D,V),c.proxy)return c;if(f=jh(),c.proxy=f,f.src=s,f.listener=c,s.addEventListener)rs||(S=D),S===void 0&&(S=!1),s.addEventListener(u.toString(),f,S);else if(s.attachEvent)s.attachEvent(Zo(u.toString()),f);else if(s.addListener&&s.removeListener)s.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return c}function jh(){function s(c){return u.call(s.src,s.listener,c)}const u=qh;return s}function Jo(s,u,c,f,S){if(Array.isArray(u))for(var V=0;V<u.length;V++)Jo(s,u[V],c,f,S);else f=d(f)?!!f.capture:!!f,c=ea(c),s&&s[Qt]?(s=s.i,u=String(u).toString(),u in s.g&&(V=s.g[u],c=os(V,c,f,S),-1<c&&(xe(V[c]),Array.prototype.splice.call(V,c,1),V.length==0&&(delete s.g[u],s.h--)))):s&&(s=cs(s))&&(u=s.g[u.toString()],s=-1,u&&(s=os(u,c,f,S)),(c=-1<s?u[s]:null)&&us(c))}function us(s){if(typeof s!="number"&&s&&!s.da){var u=s.src;if(u&&u[Qt])ss(u.i,s);else{var c=s.type,f=s.proxy;u.removeEventListener?u.removeEventListener(c,f,s.capture):u.detachEvent?u.detachEvent(Zo(c),f):u.addListener&&u.removeListener&&u.removeListener(f),(c=cs(u))?(ss(c,s),c.h==0&&(c.src=null,u[as]=null)):xe(s)}}}function Zo(s){return s in ls?ls[s]:ls[s]="on"+s}function qh(s,u){if(s.da)s=!0;else{u=new Ct(u,this);var c=s.listener,f=s.ha||s.src;s.fa&&us(s),s=c.call(f,u)}return s}function cs(s){return s=s[as],s instanceof Hr?s:null}var hs="__closure_events_fn_"+(1e9*Math.random()>>>0);function ea(s){return typeof s=="function"?s:(s[hs]||(s[hs]=function(u){return s.handleEvent(u)}),s[hs])}function Ne(){ne.call(this),this.i=new Hr(this),this.M=this,this.F=null}C(Ne,ne),Ne.prototype[Qt]=!0,Ne.prototype.removeEventListener=function(s,u,c,f){Jo(this,s,u,c,f)};function $e(s,u){var c,f=s.F;if(f)for(c=[];f;f=f.F)c.push(f);if(s=s.M,f=u.type||u,typeof u=="string")u=new me(u,s);else if(u instanceof me)u.target=u.target||s;else{var S=u;u=new me(f,s),I(u,S)}if(S=!0,c)for(var V=c.length-1;0<=V;V--){var D=u.g=c[V];S=Kr(D,f,!0,u)&&S}if(D=u.g=s,S=Kr(D,f,!0,u)&&S,S=Kr(D,f,!1,u)&&S,c)for(V=0;V<c.length;V++)D=u.g=c[V],S=Kr(D,f,!1,u)&&S}Ne.prototype.N=function(){if(Ne.aa.N.call(this),this.i){var s=this.i,u;for(u in s.g){for(var c=s.g[u],f=0;f<c.length;f++)xe(c[f]);delete s.g[u],s.h--}}this.F=null},Ne.prototype.K=function(s,u,c,f){return this.i.add(String(s),u,!1,c,f)},Ne.prototype.L=function(s,u,c,f){return this.i.add(String(s),u,!0,c,f)};function Kr(s,u,c,f){if(u=s.i.g[String(u)],!u)return!0;u=u.concat();for(var S=!0,V=0;V<u.length;++V){var D=u[V];if(D&&!D.da&&D.capture==c){var se=D.listener,Re=D.ha||D.src;D.fa&&ss(s.i,D),S=se.call(Re,f)!==!1&&S}}return S&&!f.defaultPrevented}function ta(s,u,c){if(typeof s=="function")c&&(s=y(s,c));else if(s&&typeof s.handleEvent=="function")s=y(s.handleEvent,s);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:l.setTimeout(s,u||0)}function na(s){s.g=ta(()=>{s.g=null,s.i&&(s.i=!1,na(s))},s.l);const u=s.h;s.h=null,s.m.apply(null,u)}class zh extends ne{constructor(u,c){super(),this.m=u,this.l=c,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:na(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Qn(s){ne.call(this),this.h=s,this.g={}}C(Qn,ne);var ra=[];function ia(s){H(s.g,function(u,c){this.g.hasOwnProperty(c)&&us(u)},s),s.g={}}Qn.prototype.N=function(){Qn.aa.N.call(this),ia(this)},Qn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ds=l.JSON.stringify,Gh=l.JSON.parse,Hh=class{stringify(s){return l.JSON.stringify(s,void 0)}parse(s){return l.JSON.parse(s,void 0)}};function fs(){}fs.prototype.h=null;function sa(s){return s.h||(s.h=s.i())}function oa(){}var Xn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ms(){me.call(this,"d")}C(ms,me);function gs(){me.call(this,"c")}C(gs,me);var Xt={},aa=null;function Wr(){return aa=aa||new Ne}Xt.La="serverreachability";function la(s){me.call(this,Xt.La,s)}C(la,me);function Yn(s){const u=Wr();$e(u,new la(u))}Xt.STAT_EVENT="statevent";function ua(s,u){me.call(this,Xt.STAT_EVENT,s),this.stat=u}C(ua,me);function je(s){const u=Wr();$e(u,new ua(u,s))}Xt.Ma="timingevent";function ca(s,u){me.call(this,Xt.Ma,s),this.size=u}C(ca,me);function Jn(s,u){if(typeof s!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){s()},u)}function Zn(){this.g=!0}Zn.prototype.xa=function(){this.g=!1};function Kh(s,u,c,f,S,V){s.info(function(){if(s.g)if(V)for(var D="",se=V.split("&"),Re=0;Re<se.length;Re++){var re=se[Re].split("=");if(1<re.length){var Le=re[0];re=re[1];var Oe=Le.split("_");D=2<=Oe.length&&Oe[1]=="type"?D+(Le+"="+re+"&"):D+(Le+"=redacted&")}}else D=null;else D=V;return"XMLHTTP REQ ("+f+") [attempt "+S+"]: "+u+`
`+c+`
`+D})}function Wh(s,u,c,f,S,V,D){s.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+S+"]: "+u+`
`+c+`
`+V+" "+D})}function vn(s,u,c,f){s.info(function(){return"XMLHTTP TEXT ("+u+"): "+Xh(s,c)+(f?" "+f:"")})}function Qh(s,u){s.info(function(){return"TIMEOUT: "+u})}Zn.prototype.info=function(){};function Xh(s,u){if(!s.g)return u;if(!u)return null;try{var c=JSON.parse(u);if(c){for(s=0;s<c.length;s++)if(Array.isArray(c[s])){var f=c[s];if(!(2>f.length)){var S=f[1];if(Array.isArray(S)&&!(1>S.length)){var V=S[0];if(V!="noop"&&V!="stop"&&V!="close")for(var D=1;D<S.length;D++)S[D]=""}}}}return ds(c)}catch{return u}}var Qr={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ha={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ps;function Xr(){}C(Xr,fs),Xr.prototype.g=function(){return new XMLHttpRequest},Xr.prototype.i=function(){return{}},ps=new Xr;function St(s,u,c,f){this.j=s,this.i=u,this.l=c,this.R=f||1,this.U=new Qn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new da}function da(){this.i=null,this.g="",this.h=!1}var fa={},_s={};function vs(s,u,c){s.L=1,s.v=ei(gt(u)),s.m=c,s.P=!0,ma(s,null)}function ma(s,u){s.F=Date.now(),Yr(s),s.A=gt(s.v);var c=s.A,f=s.R;Array.isArray(f)||(f=[String(f)]),Ra(c.i,"t",f),s.C=0,c=s.j.J,s.h=new da,s.g=Ha(s.j,c?u:null,!s.m),0<s.O&&(s.M=new zh(y(s.Y,s,s.g),s.O)),u=s.U,c=s.g,f=s.ca;var S="readystatechange";Array.isArray(S)||(S&&(ra[0]=S.toString()),S=ra);for(var V=0;V<S.length;V++){var D=Yo(c,S[V],f||u.handleEvent,!1,u.h||u);if(!D)break;u.g[D.key]=D}u=s.H?p(s.H):{},s.m?(s.u||(s.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",s.g.ea(s.A,s.u,s.m,u)):(s.u="GET",s.g.ea(s.A,s.u,null,u)),Yn(),Kh(s.i,s.u,s.A,s.l,s.R,s.m)}St.prototype.ca=function(s){s=s.target;const u=this.M;u&&pt(s)==3?u.j():this.Y(s)},St.prototype.Y=function(s){try{if(s==this.g)e:{const Oe=pt(this.g);var u=this.g.Ba();const Tn=this.g.Z();if(!(3>Oe)&&(Oe!=3||this.g&&(this.h.h||this.g.oa()||La(this.g)))){this.J||Oe!=4||u==7||(u==8||0>=Tn?Yn(3):Yn(2)),ys(this);var c=this.g.Z();this.X=c;t:if(ga(this)){var f=La(this.g);s="";var S=f.length,V=pt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Yt(this),er(this);var D="";break t}this.h.i=new l.TextDecoder}for(u=0;u<S;u++)this.h.h=!0,s+=this.h.i.decode(f[u],{stream:!(V&&u==S-1)});f.length=0,this.h.g+=s,this.C=0,D=this.h.g}else D=this.g.oa();if(this.o=c==200,Wh(this.i,this.u,this.A,this.l,this.R,Oe,c),this.o){if(this.T&&!this.K){t:{if(this.g){var se,Re=this.g;if((se=Re.g?Re.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!U(se)){var re=se;break t}}re=null}if(c=re)vn(this.i,this.l,c,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Es(this,c);else{this.o=!1,this.s=3,je(12),Yt(this),er(this);break e}}if(this.P){c=!0;let nt;for(;!this.J&&this.C<D.length;)if(nt=Yh(this,D),nt==_s){Oe==4&&(this.s=4,je(14),c=!1),vn(this.i,this.l,null,"[Incomplete Response]");break}else if(nt==fa){this.s=4,je(15),vn(this.i,this.l,D,"[Invalid Chunk]"),c=!1;break}else vn(this.i,this.l,nt,null),Es(this,nt);if(ga(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Oe!=4||D.length!=0||this.h.h||(this.s=1,je(16),c=!1),this.o=this.o&&c,!c)vn(this.i,this.l,D,"[Invalid Chunked Response]"),Yt(this),er(this);else if(0<D.length&&!this.W){this.W=!0;var Le=this.j;Le.g==this&&Le.ba&&!Le.M&&(Le.j.info("Great, no buffering proxy detected. Bytes received: "+D.length),Cs(Le),Le.M=!0,je(11))}}else vn(this.i,this.l,D,null),Es(this,D);Oe==4&&Yt(this),this.o&&!this.J&&(Oe==4?ja(this.j,this):(this.o=!1,Yr(this)))}else md(this.g),c==400&&0<D.indexOf("Unknown SID")?(this.s=3,je(12)):(this.s=0,je(13)),Yt(this),er(this)}}}catch{}finally{}};function ga(s){return s.g?s.u=="GET"&&s.L!=2&&s.j.Ca:!1}function Yh(s,u){var c=s.C,f=u.indexOf(`
`,c);return f==-1?_s:(c=Number(u.substring(c,f)),isNaN(c)?fa:(f+=1,f+c>u.length?_s:(u=u.slice(f,f+c),s.C=f+c,u)))}St.prototype.cancel=function(){this.J=!0,Yt(this)};function Yr(s){s.S=Date.now()+s.I,pa(s,s.I)}function pa(s,u){if(s.B!=null)throw Error("WatchDog timer not null");s.B=Jn(y(s.ba,s),u)}function ys(s){s.B&&(l.clearTimeout(s.B),s.B=null)}St.prototype.ba=function(){this.B=null;const s=Date.now();0<=s-this.S?(Qh(this.i,this.A),this.L!=2&&(Yn(),je(17)),Yt(this),this.s=2,er(this)):pa(this,this.S-s)};function er(s){s.j.G==0||s.J||ja(s.j,s)}function Yt(s){ys(s);var u=s.M;u&&typeof u.ma=="function"&&u.ma(),s.M=null,ia(s.U),s.g&&(u=s.g,s.g=null,u.abort(),u.ma())}function Es(s,u){try{var c=s.j;if(c.G!=0&&(c.g==s||Ts(c.h,s))){if(!s.K&&Ts(c.h,s)&&c.G==3){try{var f=c.Da.g.parse(u)}catch{f=null}if(Array.isArray(f)&&f.length==3){var S=f;if(S[0]==0){e:if(!c.u){if(c.g)if(c.g.F+3e3<s.F)oi(c),ii(c);else break e;bs(c),je(18)}}else c.za=S[1],0<c.za-c.T&&37500>S[2]&&c.F&&c.v==0&&!c.C&&(c.C=Jn(y(c.Za,c),6e3));if(1>=ya(c.h)&&c.ca){try{c.ca()}catch{}c.ca=void 0}}else Zt(c,11)}else if((s.K||c.g==s)&&oi(c),!U(u))for(S=c.Da.g.parse(u),u=0;u<S.length;u++){let re=S[u];if(c.T=re[0],re=re[1],c.G==2)if(re[0]=="c"){c.K=re[1],c.ia=re[2];const Le=re[3];Le!=null&&(c.la=Le,c.j.info("VER="+c.la));const Oe=re[4];Oe!=null&&(c.Aa=Oe,c.j.info("SVER="+c.Aa));const Tn=re[5];Tn!=null&&typeof Tn=="number"&&0<Tn&&(f=1.5*Tn,c.L=f,c.j.info("backChannelRequestTimeoutMs_="+f)),f=c;const nt=s.g;if(nt){const li=nt.g?nt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(li){var V=f.h;V.g||li.indexOf("spdy")==-1&&li.indexOf("quic")==-1&&li.indexOf("h2")==-1||(V.j=V.l,V.g=new Set,V.h&&(ws(V,V.h),V.h=null))}if(f.D){const Ss=nt.g?nt.g.getResponseHeader("X-HTTP-Session-Id"):null;Ss&&(f.ya=Ss,ue(f.I,f.D,Ss))}}c.G=3,c.l&&c.l.ua(),c.ba&&(c.R=Date.now()-s.F,c.j.info("Handshake RTT: "+c.R+"ms")),f=c;var D=s;if(f.qa=Ga(f,f.J?f.ia:null,f.W),D.K){Ea(f.h,D);var se=D,Re=f.L;Re&&(se.I=Re),se.B&&(ys(se),Yr(se)),f.g=D}else Ua(f);0<c.i.length&&si(c)}else re[0]!="stop"&&re[0]!="close"||Zt(c,7);else c.G==3&&(re[0]=="stop"||re[0]=="close"?re[0]=="stop"?Zt(c,7):As(c):re[0]!="noop"&&c.l&&c.l.ta(re),c.v=0)}}Yn(4)}catch{}}var Jh=class{constructor(s,u){this.g=s,this.map=u}};function _a(s){this.l=s||10,l.PerformanceNavigationTiming?(s=l.performance.getEntriesByType("navigation"),s=0<s.length&&(s[0].nextHopProtocol=="hq"||s[0].nextHopProtocol=="h2")):s=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=s?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function va(s){return s.h?!0:s.g?s.g.size>=s.j:!1}function ya(s){return s.h?1:s.g?s.g.size:0}function Ts(s,u){return s.h?s.h==u:s.g?s.g.has(u):!1}function ws(s,u){s.g?s.g.add(u):s.h=u}function Ea(s,u){s.h&&s.h==u?s.h=null:s.g&&s.g.has(u)&&s.g.delete(u)}_a.prototype.cancel=function(){if(this.i=Ta(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const s of this.g.values())s.cancel();this.g.clear()}};function Ta(s){if(s.h!=null)return s.i.concat(s.h.D);if(s.g!=null&&s.g.size!==0){let u=s.i;for(const c of s.g.values())u=u.concat(c.D);return u}return R(s.i)}function Zh(s){if(s.V&&typeof s.V=="function")return s.V();if(typeof Map<"u"&&s instanceof Map||typeof Set<"u"&&s instanceof Set)return Array.from(s.values());if(typeof s=="string")return s.split("");if(h(s)){for(var u=[],c=s.length,f=0;f<c;f++)u.push(s[f]);return u}u=[],c=0;for(f in s)u[c++]=s[f];return u}function ed(s){if(s.na&&typeof s.na=="function")return s.na();if(!s.V||typeof s.V!="function"){if(typeof Map<"u"&&s instanceof Map)return Array.from(s.keys());if(!(typeof Set<"u"&&s instanceof Set)){if(h(s)||typeof s=="string"){var u=[];s=s.length;for(var c=0;c<s;c++)u.push(c);return u}u=[],c=0;for(const f in s)u[c++]=f;return u}}}function wa(s,u){if(s.forEach&&typeof s.forEach=="function")s.forEach(u,void 0);else if(h(s)||typeof s=="string")Array.prototype.forEach.call(s,u,void 0);else for(var c=ed(s),f=Zh(s),S=f.length,V=0;V<S;V++)u.call(void 0,f[V],c&&c[V],s)}var Ia=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function td(s,u){if(s){s=s.split("&");for(var c=0;c<s.length;c++){var f=s[c].indexOf("="),S=null;if(0<=f){var V=s[c].substring(0,f);S=s[c].substring(f+1)}else V=s[c];u(V,S?decodeURIComponent(S.replace(/\+/g," ")):"")}}}function Jt(s){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,s instanceof Jt){this.h=s.h,Jr(this,s.j),this.o=s.o,this.g=s.g,Zr(this,s.s),this.l=s.l;var u=s.i,c=new rr;c.i=u.i,u.g&&(c.g=new Map(u.g),c.h=u.h),Aa(this,c),this.m=s.m}else s&&(u=String(s).match(Ia))?(this.h=!1,Jr(this,u[1]||"",!0),this.o=tr(u[2]||""),this.g=tr(u[3]||"",!0),Zr(this,u[4]),this.l=tr(u[5]||"",!0),Aa(this,u[6]||"",!0),this.m=tr(u[7]||"")):(this.h=!1,this.i=new rr(null,this.h))}Jt.prototype.toString=function(){var s=[],u=this.j;u&&s.push(nr(u,ba,!0),":");var c=this.g;return(c||u=="file")&&(s.push("//"),(u=this.o)&&s.push(nr(u,ba,!0),"@"),s.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.s,c!=null&&s.push(":",String(c))),(c=this.l)&&(this.g&&c.charAt(0)!="/"&&s.push("/"),s.push(nr(c,c.charAt(0)=="/"?id:rd,!0))),(c=this.i.toString())&&s.push("?",c),(c=this.m)&&s.push("#",nr(c,od)),s.join("")};function gt(s){return new Jt(s)}function Jr(s,u,c){s.j=c?tr(u,!0):u,s.j&&(s.j=s.j.replace(/:$/,""))}function Zr(s,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);s.s=u}else s.s=null}function Aa(s,u,c){u instanceof rr?(s.i=u,ad(s.i,s.h)):(c||(u=nr(u,sd)),s.i=new rr(u,s.h))}function ue(s,u,c){s.i.set(u,c)}function ei(s){return ue(s,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),s}function tr(s,u){return s?u?decodeURI(s.replace(/%25/g,"%2525")):decodeURIComponent(s):""}function nr(s,u,c){return typeof s=="string"?(s=encodeURI(s).replace(u,nd),c&&(s=s.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),s):null}function nd(s){return s=s.charCodeAt(0),"%"+(s>>4&15).toString(16)+(s&15).toString(16)}var ba=/[#\/\?@]/g,rd=/[#\?:]/g,id=/[#\?]/g,sd=/[#\?@]/g,od=/#/g;function rr(s,u){this.h=this.g=null,this.i=s||null,this.j=!!u}function Rt(s){s.g||(s.g=new Map,s.h=0,s.i&&td(s.i,function(u,c){s.add(decodeURIComponent(u.replace(/\+/g," ")),c)}))}n=rr.prototype,n.add=function(s,u){Rt(this),this.i=null,s=yn(this,s);var c=this.g.get(s);return c||this.g.set(s,c=[]),c.push(u),this.h+=1,this};function Ca(s,u){Rt(s),u=yn(s,u),s.g.has(u)&&(s.i=null,s.h-=s.g.get(u).length,s.g.delete(u))}function Sa(s,u){return Rt(s),u=yn(s,u),s.g.has(u)}n.forEach=function(s,u){Rt(this),this.g.forEach(function(c,f){c.forEach(function(S){s.call(u,S,f,this)},this)},this)},n.na=function(){Rt(this);const s=Array.from(this.g.values()),u=Array.from(this.g.keys()),c=[];for(let f=0;f<u.length;f++){const S=s[f];for(let V=0;V<S.length;V++)c.push(u[f])}return c},n.V=function(s){Rt(this);let u=[];if(typeof s=="string")Sa(this,s)&&(u=u.concat(this.g.get(yn(this,s))));else{s=Array.from(this.g.values());for(let c=0;c<s.length;c++)u=u.concat(s[c])}return u},n.set=function(s,u){return Rt(this),this.i=null,s=yn(this,s),Sa(this,s)&&(this.h-=this.g.get(s).length),this.g.set(s,[u]),this.h+=1,this},n.get=function(s,u){return s?(s=this.V(s),0<s.length?String(s[0]):u):u};function Ra(s,u,c){Ca(s,u),0<c.length&&(s.i=null,s.g.set(yn(s,u),R(c)),s.h+=c.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const s=[],u=Array.from(this.g.keys());for(var c=0;c<u.length;c++){var f=u[c];const V=encodeURIComponent(String(f)),D=this.V(f);for(f=0;f<D.length;f++){var S=V;D[f]!==""&&(S+="="+encodeURIComponent(String(D[f]))),s.push(S)}}return this.i=s.join("&")};function yn(s,u){return u=String(u),s.j&&(u=u.toLowerCase()),u}function ad(s,u){u&&!s.j&&(Rt(s),s.i=null,s.g.forEach(function(c,f){var S=f.toLowerCase();f!=S&&(Ca(this,f),Ra(this,S,c))},s)),s.j=u}function ld(s,u){const c=new Zn;if(l.Image){const f=new Image;f.onload=b(Pt,c,"TestLoadImage: loaded",!0,u,f),f.onerror=b(Pt,c,"TestLoadImage: error",!1,u,f),f.onabort=b(Pt,c,"TestLoadImage: abort",!1,u,f),f.ontimeout=b(Pt,c,"TestLoadImage: timeout",!1,u,f),l.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=s}else u(!1)}function ud(s,u){const c=new Zn,f=new AbortController,S=setTimeout(()=>{f.abort(),Pt(c,"TestPingServer: timeout",!1,u)},1e4);fetch(s,{signal:f.signal}).then(V=>{clearTimeout(S),V.ok?Pt(c,"TestPingServer: ok",!0,u):Pt(c,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(S),Pt(c,"TestPingServer: error",!1,u)})}function Pt(s,u,c,f,S){try{S&&(S.onload=null,S.onerror=null,S.onabort=null,S.ontimeout=null),f(c)}catch{}}function cd(){this.g=new Hh}function hd(s,u,c){const f=c||"";try{wa(s,function(S,V){let D=S;d(S)&&(D=ds(S)),u.push(f+V+"="+encodeURIComponent(D))})}catch(S){throw u.push(f+"type="+encodeURIComponent("_badmap")),S}}function ti(s){this.l=s.Ub||null,this.j=s.eb||!1}C(ti,fs),ti.prototype.g=function(){return new ni(this.l,this.j)},ti.prototype.i=function(s){return function(){return s}}({});function ni(s,u){Ne.call(this),this.D=s,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(ni,Ne),n=ni.prototype,n.open=function(s,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=s,this.A=u,this.readyState=1,sr(this)},n.send=function(s){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};s&&(u.body=s),(this.D||l).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ir(this)),this.readyState=0},n.Sa=function(s){if(this.g&&(this.l=s,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=s.headers,this.readyState=2,sr(this)),this.g&&(this.readyState=3,sr(this),this.g)))if(this.responseType==="arraybuffer")s.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in s){if(this.j=s.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Pa(this)}else s.text().then(this.Ra.bind(this),this.ga.bind(this))};function Pa(s){s.j.read().then(s.Pa.bind(s)).catch(s.ga.bind(s))}n.Pa=function(s){if(this.g){if(this.o&&s.value)this.response.push(s.value);else if(!this.o){var u=s.value?s.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!s.done}))&&(this.response=this.responseText+=u)}s.done?ir(this):sr(this),this.readyState==3&&Pa(this)}},n.Ra=function(s){this.g&&(this.response=this.responseText=s,ir(this))},n.Qa=function(s){this.g&&(this.response=s,ir(this))},n.ga=function(){this.g&&ir(this)};function ir(s){s.readyState=4,s.l=null,s.j=null,s.v=null,sr(s)}n.setRequestHeader=function(s,u){this.u.append(s,u)},n.getResponseHeader=function(s){return this.h&&this.h.get(s.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const s=[],u=this.h.entries();for(var c=u.next();!c.done;)c=c.value,s.push(c[0]+": "+c[1]),c=u.next();return s.join(`\r
`)};function sr(s){s.onreadystatechange&&s.onreadystatechange.call(s)}Object.defineProperty(ni.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(s){this.m=s?"include":"same-origin"}});function Va(s){let u="";return H(s,function(c,f){u+=f,u+=":",u+=c,u+=`\r
`}),u}function Is(s,u,c){e:{for(f in c){var f=!1;break e}f=!0}f||(c=Va(c),typeof s=="string"?c!=null&&encodeURIComponent(String(c)):ue(s,u,c))}function fe(s){Ne.call(this),this.headers=new Map,this.o=s||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(fe,Ne);var dd=/^https?$/i,fd=["POST","PUT"];n=fe.prototype,n.Ha=function(s){this.J=s},n.ea=function(s,u,c,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+s);u=u?u.toUpperCase():"GET",this.D=s,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ps.g(),this.v=this.o?sa(this.o):sa(ps),this.g.onreadystatechange=y(this.Ea,this);try{this.B=!0,this.g.open(u,String(s),!0),this.B=!1}catch(V){ka(this,V);return}if(s=c||"",c=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var S in f)c.set(S,f[S]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const V of f.keys())c.set(V,f.get(V));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(c.keys()).find(V=>V.toLowerCase()=="content-type"),S=l.FormData&&s instanceof l.FormData,!(0<=Array.prototype.indexOf.call(fd,u,void 0))||f||S||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[V,D]of c)this.g.setRequestHeader(V,D);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Na(this),this.u=!0,this.g.send(s),this.u=!1}catch(V){ka(this,V)}};function ka(s,u){s.h=!1,s.g&&(s.j=!0,s.g.abort(),s.j=!1),s.l=u,s.m=5,Da(s),ri(s)}function Da(s){s.A||(s.A=!0,$e(s,"complete"),$e(s,"error"))}n.abort=function(s){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=s||7,$e(this,"complete"),$e(this,"abort"),ri(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ri(this,!0)),fe.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?xa(this):this.bb())},n.bb=function(){xa(this)};function xa(s){if(s.h&&typeof a<"u"&&(!s.v[1]||pt(s)!=4||s.Z()!=2)){if(s.u&&pt(s)==4)ta(s.Ea,0,s);else if($e(s,"readystatechange"),pt(s)==4){s.h=!1;try{const D=s.Z();e:switch(D){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var c;if(!(c=u)){var f;if(f=D===0){var S=String(s.D).match(Ia)[1]||null;!S&&l.self&&l.self.location&&(S=l.self.location.protocol.slice(0,-1)),f=!dd.test(S?S.toLowerCase():"")}c=f}if(c)$e(s,"complete"),$e(s,"success");else{s.m=6;try{var V=2<pt(s)?s.g.statusText:""}catch{V=""}s.l=V+" ["+s.Z()+"]",Da(s)}}finally{ri(s)}}}}function ri(s,u){if(s.g){Na(s);const c=s.g,f=s.v[0]?()=>{}:null;s.g=null,s.v=null,u||$e(s,"ready");try{c.onreadystatechange=f}catch{}}}function Na(s){s.I&&(l.clearTimeout(s.I),s.I=null)}n.isActive=function(){return!!this.g};function pt(s){return s.g?s.g.readyState:0}n.Z=function(){try{return 2<pt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(s){if(this.g){var u=this.g.responseText;return s&&u.indexOf(s)==0&&(u=u.substring(s.length)),Gh(u)}};function La(s){try{if(!s.g)return null;if("response"in s.g)return s.g.response;switch(s.H){case"":case"text":return s.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in s.g)return s.g.mozResponseArrayBuffer}return null}catch{return null}}function md(s){const u={};s=(s.g&&2<=pt(s)&&s.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<s.length;f++){if(U(s[f]))continue;var c=T(s[f]);const S=c[0];if(c=c[1],typeof c!="string")continue;c=c.trim();const V=u[S]||[];u[S]=V,V.push(c)}A(u,function(f){return f.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function or(s,u,c){return c&&c.internalChannelParams&&c.internalChannelParams[s]||u}function Oa(s){this.Aa=0,this.i=[],this.j=new Zn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=or("failFast",!1,s),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=or("baseRetryDelayMs",5e3,s),this.cb=or("retryDelaySeedMs",1e4,s),this.Wa=or("forwardChannelMaxRetries",2,s),this.wa=or("forwardChannelRequestTimeoutMs",2e4,s),this.pa=s&&s.xmlHttpFactory||void 0,this.Xa=s&&s.Tb||void 0,this.Ca=s&&s.useFetchStreams||!1,this.L=void 0,this.J=s&&s.supportsCrossDomainXhr||!1,this.K="",this.h=new _a(s&&s.concurrentRequestLimit),this.Da=new cd,this.P=s&&s.fastHandshake||!1,this.O=s&&s.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=s&&s.Rb||!1,s&&s.xa&&this.j.xa(),s&&s.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&s&&s.detectBufferingProxy||!1,this.ja=void 0,s&&s.longPollingTimeout&&0<s.longPollingTimeout&&(this.ja=s.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Oa.prototype,n.la=8,n.G=1,n.connect=function(s,u,c,f){je(0),this.W=s,this.H=u||{},c&&f!==void 0&&(this.H.OSID=c,this.H.OAID=f),this.F=this.X,this.I=Ga(this,null,this.W),si(this)};function As(s){if(Ma(s),s.G==3){var u=s.U++,c=gt(s.I);if(ue(c,"SID",s.K),ue(c,"RID",u),ue(c,"TYPE","terminate"),ar(s,c),u=new St(s,s.j,u),u.L=2,u.v=ei(gt(c)),c=!1,l.navigator&&l.navigator.sendBeacon)try{c=l.navigator.sendBeacon(u.v.toString(),"")}catch{}!c&&l.Image&&(new Image().src=u.v,c=!0),c||(u.g=Ha(u.j,null),u.g.ea(u.v)),u.F=Date.now(),Yr(u)}za(s)}function ii(s){s.g&&(Cs(s),s.g.cancel(),s.g=null)}function Ma(s){ii(s),s.u&&(l.clearTimeout(s.u),s.u=null),oi(s),s.h.cancel(),s.s&&(typeof s.s=="number"&&l.clearTimeout(s.s),s.s=null)}function si(s){if(!va(s.h)&&!s.s){s.s=!0;var u=s.Ga;Ht||zr(),Kt||(Ht(),Kt=!0),Wt.add(u,s),s.B=0}}function gd(s,u){return ya(s.h)>=s.h.j-(s.s?1:0)?!1:s.s?(s.i=u.D.concat(s.i),!0):s.G==1||s.G==2||s.B>=(s.Va?0:s.Wa)?!1:(s.s=Jn(y(s.Ga,s,u),qa(s,s.B)),s.B++,!0)}n.Ga=function(s){if(this.s)if(this.s=null,this.G==1){if(!s){this.U=Math.floor(1e5*Math.random()),s=this.U++;const S=new St(this,this.j,s);let V=this.o;if(this.S&&(V?(V=p(V),I(V,this.S)):V=this.S),this.m!==null||this.O||(S.H=V,V=null),this.P)e:{for(var u=0,c=0;c<this.i.length;c++){t:{var f=this.i[c];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break t}f=void 0}if(f===void 0)break;if(u+=f,4096<u){u=c;break e}if(u===4096||c===this.i.length-1){u=c+1;break e}}u=1e3}else u=1e3;u=Ba(this,S,u),c=gt(this.I),ue(c,"RID",s),ue(c,"CVER",22),this.D&&ue(c,"X-HTTP-Session-Id",this.D),ar(this,c),V&&(this.O?u="headers="+encodeURIComponent(String(Va(V)))+"&"+u:this.m&&Is(c,this.m,V)),ws(this.h,S),this.Ua&&ue(c,"TYPE","init"),this.P?(ue(c,"$req",u),ue(c,"SID","null"),S.T=!0,vs(S,c,null)):vs(S,c,u),this.G=2}}else this.G==3&&(s?Fa(this,s):this.i.length==0||va(this.h)||Fa(this))};function Fa(s,u){var c;u?c=u.l:c=s.U++;const f=gt(s.I);ue(f,"SID",s.K),ue(f,"RID",c),ue(f,"AID",s.T),ar(s,f),s.m&&s.o&&Is(f,s.m,s.o),c=new St(s,s.j,c,s.B+1),s.m===null&&(c.H=s.o),u&&(s.i=u.D.concat(s.i)),u=Ba(s,c,1e3),c.I=Math.round(.5*s.wa)+Math.round(.5*s.wa*Math.random()),ws(s.h,c),vs(c,f,u)}function ar(s,u){s.H&&H(s.H,function(c,f){ue(u,f,c)}),s.l&&wa({},function(c,f){ue(u,f,c)})}function Ba(s,u,c){c=Math.min(s.i.length,c);var f=s.l?y(s.l.Na,s.l,s):null;e:{var S=s.i;let V=-1;for(;;){const D=["count="+c];V==-1?0<c?(V=S[0].g,D.push("ofs="+V)):V=0:D.push("ofs="+V);let se=!0;for(let Re=0;Re<c;Re++){let re=S[Re].g;const Le=S[Re].map;if(re-=V,0>re)V=Math.max(0,S[Re].g-100),se=!1;else try{hd(Le,D,"req"+re+"_")}catch{f&&f(Le)}}if(se){f=D.join("&");break e}}}return s=s.i.splice(0,c),u.D=s,f}function Ua(s){if(!s.g&&!s.u){s.Y=1;var u=s.Fa;Ht||zr(),Kt||(Ht(),Kt=!0),Wt.add(u,s),s.v=0}}function bs(s){return s.g||s.u||3<=s.v?!1:(s.Y++,s.u=Jn(y(s.Fa,s),qa(s,s.v)),s.v++,!0)}n.Fa=function(){if(this.u=null,$a(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var s=2*this.R;this.j.info("BP detection timer enabled: "+s),this.A=Jn(y(this.ab,this),s)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,je(10),ii(this),$a(this))};function Cs(s){s.A!=null&&(l.clearTimeout(s.A),s.A=null)}function $a(s){s.g=new St(s,s.j,"rpc",s.Y),s.m===null&&(s.g.H=s.o),s.g.O=0;var u=gt(s.qa);ue(u,"RID","rpc"),ue(u,"SID",s.K),ue(u,"AID",s.T),ue(u,"CI",s.F?"0":"1"),!s.F&&s.ja&&ue(u,"TO",s.ja),ue(u,"TYPE","xmlhttp"),ar(s,u),s.m&&s.o&&Is(u,s.m,s.o),s.L&&(s.g.I=s.L);var c=s.g;s=s.ia,c.L=1,c.v=ei(gt(u)),c.m=null,c.P=!0,ma(c,s)}n.Za=function(){this.C!=null&&(this.C=null,ii(this),bs(this),je(19))};function oi(s){s.C!=null&&(l.clearTimeout(s.C),s.C=null)}function ja(s,u){var c=null;if(s.g==u){oi(s),Cs(s),s.g=null;var f=2}else if(Ts(s.h,u))c=u.D,Ea(s.h,u),f=1;else return;if(s.G!=0){if(u.o)if(f==1){c=u.m?u.m.length:0,u=Date.now()-u.F;var S=s.B;f=Wr(),$e(f,new ca(f,c)),si(s)}else Ua(s);else if(S=u.s,S==3||S==0&&0<u.X||!(f==1&&gd(s,u)||f==2&&bs(s)))switch(c&&0<c.length&&(u=s.h,u.i=u.i.concat(c)),S){case 1:Zt(s,5);break;case 4:Zt(s,10);break;case 3:Zt(s,6);break;default:Zt(s,2)}}}function qa(s,u){let c=s.Ta+Math.floor(Math.random()*s.cb);return s.isActive()||(c*=2),c*u}function Zt(s,u){if(s.j.info("Error code "+u),u==2){var c=y(s.fb,s),f=s.Xa;const S=!f;f=new Jt(f||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Jr(f,"https"),ei(f),S?ld(f.toString(),c):ud(f.toString(),c)}else je(2);s.G=0,s.l&&s.l.sa(u),za(s),Ma(s)}n.fb=function(s){s?(this.j.info("Successfully pinged google.com"),je(2)):(this.j.info("Failed to ping google.com"),je(1))};function za(s){if(s.G=0,s.ka=[],s.l){const u=Ta(s.h);(u.length!=0||s.i.length!=0)&&(P(s.ka,u),P(s.ka,s.i),s.h.i.length=0,R(s.i),s.i.length=0),s.l.ra()}}function Ga(s,u,c){var f=c instanceof Jt?gt(c):new Jt(c);if(f.g!="")u&&(f.g=u+"."+f.g),Zr(f,f.s);else{var S=l.location;f=S.protocol,u=u?u+"."+S.hostname:S.hostname,S=+S.port;var V=new Jt(null);f&&Jr(V,f),u&&(V.g=u),S&&Zr(V,S),c&&(V.l=c),f=V}return c=s.D,u=s.ya,c&&u&&ue(f,c,u),ue(f,"VER",s.la),ar(s,f),f}function Ha(s,u,c){if(u&&!s.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=s.Ca&&!s.pa?new fe(new ti({eb:c})):new fe(s.pa),u.Ha(s.J),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ka(){}n=Ka.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function ai(){}ai.prototype.g=function(s,u){return new Qe(s,u)};function Qe(s,u){Ne.call(this),this.g=new Oa(u),this.l=s,this.h=u&&u.messageUrlParams||null,s=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(s?s["X-Client-Protocol"]="webchannel":s={"X-Client-Protocol":"webchannel"}),this.g.o=s,s=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(s?s["X-WebChannel-Content-Type"]=u.messageContentType:s={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(s?s["X-WebChannel-Client-Profile"]=u.va:s={"X-WebChannel-Client-Profile":u.va}),this.g.S=s,(s=u&&u.Sb)&&!U(s)&&(this.g.m=s),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!U(u)&&(this.g.D=u,s=this.h,s!==null&&u in s&&(s=this.h,u in s&&delete s[u])),this.j=new En(this)}C(Qe,Ne),Qe.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Qe.prototype.close=function(){As(this.g)},Qe.prototype.o=function(s){var u=this.g;if(typeof s=="string"){var c={};c.__data__=s,s=c}else this.u&&(c={},c.__data__=ds(s),s=c);u.i.push(new Jh(u.Ya++,s)),u.G==3&&si(u)},Qe.prototype.N=function(){this.g.l=null,delete this.j,As(this.g),delete this.g,Qe.aa.N.call(this)};function Wa(s){ms.call(this),s.__headers__&&(this.headers=s.__headers__,this.statusCode=s.__status__,delete s.__headers__,delete s.__status__);var u=s.__sm__;if(u){e:{for(const c in u){s=c;break e}s=void 0}(this.i=s)&&(s=this.i,u=u!==null&&s in u?u[s]:void 0),this.data=u}else this.data=s}C(Wa,ms);function Qa(){gs.call(this),this.status=1}C(Qa,gs);function En(s){this.g=s}C(En,Ka),En.prototype.ua=function(){$e(this.g,"a")},En.prototype.ta=function(s){$e(this.g,new Wa(s))},En.prototype.sa=function(s){$e(this.g,new Qa)},En.prototype.ra=function(){$e(this.g,"b")},ai.prototype.createWebChannel=ai.prototype.g,Qe.prototype.send=Qe.prototype.o,Qe.prototype.open=Qe.prototype.m,Qe.prototype.close=Qe.prototype.close,Uu=function(){return new ai},Bu=function(){return Wr()},Fu=Xt,Ws={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Qr.NO_ERROR=0,Qr.TIMEOUT=8,Qr.HTTP_ERROR=6,pi=Qr,ha.COMPLETE="complete",Mu=ha,oa.EventType=Xn,Xn.OPEN="a",Xn.CLOSE="b",Xn.ERROR="c",Xn.MESSAGE="d",Ne.prototype.listen=Ne.prototype.K,hr=oa,fe.prototype.listenOnce=fe.prototype.L,fe.prototype.getLastError=fe.prototype.Ka,fe.prototype.getLastErrorCode=fe.prototype.Ba,fe.prototype.getStatus=fe.prototype.Z,fe.prototype.getResponseJson=fe.prototype.Oa,fe.prototype.getResponseText=fe.prototype.oa,fe.prototype.send=fe.prototype.ea,fe.prototype.setWithCredentials=fe.prototype.Ha,Ou=fe}).apply(typeof ci<"u"?ci:typeof self<"u"?self:typeof window<"u"?window:{});const hl="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Fe.UNAUTHENTICATED=new Fe(null),Fe.GOOGLE_CREDENTIALS=new Fe("google-credentials-uid"),Fe.FIRST_PARTY=new Fe("first-party-uid"),Fe.MOCK_USER=new Fe("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zn="11.0.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cn=new Cu("@firebase/firestore");function wn(){return cn.logLevel}function O(n,...e){if(cn.logLevel<=Y.DEBUG){const t=e.map(wo);cn.debug(`Firestore (${zn}): ${n}`,...t)}}function At(n,...e){if(cn.logLevel<=Y.ERROR){const t=e.map(wo);cn.error(`Firestore (${zn}): ${n}`,...t)}}function Dn(n,...e){if(cn.logLevel<=Y.WARN){const t=e.map(wo);cn.warn(`Firestore (${zn}): ${n}`,...t)}}function wo(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G(n="Unexpected state"){const e=`FIRESTORE (${zn}) INTERNAL ASSERTION FAILED: `+n;throw At(e),new Error(e)}function de(n,e){n||G()}function J(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class F extends gn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $u{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class pm{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Fe.UNAUTHENTICATED))}shutdown(){}}class _m{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class vm{constructor(e){this.t=e,this.currentUser=Fe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){de(this.o===void 0);let r=this.i;const i=h=>this.i!==r?(r=this.i,t(h)):Promise.resolve();let o=new Ot;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Ot,e.enqueueRetryable(()=>i(this.currentUser))};const a=()=>{const h=o;e.enqueueRetryable(async()=>{await h.promise,await i(this.currentUser)})},l=h=>{O("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(h=>l(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?l(h):(O("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Ot)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(O("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(de(typeof r.accessToken=="string"),new $u(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return de(e===null||typeof e=="string"),new Fe(e)}}class ym{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=Fe.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Em{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new ym(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Fe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Tm{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class wm{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){de(this.o===void 0);const r=o=>{o.error!=null&&O("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.R;return this.R=o.token,O("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>r(o))};const i=o=>{O("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?i(o):O("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(de(typeof t.token=="string"),this.R=t.token,new Tm(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Im(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ju{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=Im(40);for(let o=0;o<i.length;++o)r.length<20&&i[o]<t&&(r+=e.charAt(i[o]%e.length))}return r}}function Z(n,e){return n<e?-1:n>e?1:0}function xn(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new F(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new F(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new F(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new F(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return We.fromMillis(Date.now())}static fromDate(e){return We.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new We(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Z(this.nanoseconds,e.nanoseconds):Z(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(e){this.timestamp=e}static fromTimestamp(e){return new z(e)}static min(){return new z(new We(0,0))}static max(){return new z(new We(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar{constructor(e,t,r){t===void 0?t=0:t>e.length&&G(),r===void 0?r=e.length-t:r>e.length-t&&G(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Ar.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Ar?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const o=e.get(i),a=t.get(i);if(o<a)return-1;if(o>a)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class he extends Ar{construct(e,t,r){return new he(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new F(x.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new he(t)}static emptyPath(){return new he([])}}const Am=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class He extends Ar{construct(e,t,r){return new He(e,t,r)}static isValidIdentifier(e){return Am.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),He.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new He(["__name__"])}static fromServerFormat(e){const t=[];let r="",i=0;const o=()=>{if(r.length===0)throw new F(x.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new F(x.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const h=e[i+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new F(x.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=h,i+=2}else l==="`"?(a=!a,i++):l!=="."||a?(r+=l,i++):(o(),i++)}if(o(),a)throw new F(x.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new He(t)}static emptyPath(){return new He([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(e){this.path=e}static fromPath(e){return new $(he.fromString(e))}static fromName(e){return new $(he.fromString(e).popFirst(5))}static empty(){return new $(he.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&he.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return he.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new $(new he(e.slice()))}}function bm(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=z.fromTimestamp(r===1e9?new We(t+1,0):new We(t,r));return new Ft(i,$.empty(),e)}function Cm(n){return new Ft(n.readTime,n.key,-1)}class Ft{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Ft(z.min(),$.empty(),-1)}static max(){return new Ft(z.max(),$.empty(),-1)}}function Sm(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=$.comparator(n.documentKey,e.documentKey),t!==0?t:Z(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rm="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Pm{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bi(n){if(n.code!==x.FAILED_PRECONDITION||n.message!==Rm)throw n;O("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&G(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new k((r,i)=>{this.nextCallback=o=>{this.wrapSuccess(e,o).next(r,i)},this.catchCallback=o=>{this.wrapFailure(t,o).next(r,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof k?t:k.resolve(t)}catch(t){return k.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):k.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):k.reject(t)}static resolve(e){return new k((t,r)=>{t(e)})}static reject(e){return new k((t,r)=>{r(e)})}static waitFor(e){return new k((t,r)=>{let i=0,o=0,a=!1;e.forEach(l=>{++i,l.next(()=>{++o,a&&o===i&&t()},h=>r(h))}),a=!0,o===i&&t()})}static or(e){let t=k.resolve(!1);for(const r of e)t=t.next(i=>i?k.resolve(i):r());return t}static forEach(e,t){const r=[];return e.forEach((i,o)=>{r.push(t.call(this,i,o))}),this.waitFor(r)}static mapArray(e,t){return new k((r,i)=>{const o=e.length,a=new Array(o);let l=0;for(let h=0;h<o;h++){const d=h;t(e[d]).next(m=>{a[d]=m,++l,l===o&&r(a)},m=>i(m))}})}static doWhile(e,t){return new k((r,i)=>{const o=()=>{e()===!0?t().next(()=>{o()},i):r()};o()})}}function Vm(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Gn(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ie(r),this.se=r=>t.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Ui.oe=-1;function $i(n){return n==null}function Qs(n){return n===0&&1/n==-1/0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function km(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=dl(e)),e=Dm(n.get(t),e);return dl(e)}function Dm(n,e){let t=e;const r=n.length;for(let i=0;i<r;i++){const o=n.charAt(i);switch(o){case"\0":t+="";break;case"":t+="";break;default:t+=o}}return t}function dl(n){return n+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fl(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Fr(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function xm(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{constructor(e,t){this.comparator=e,this.root=t||Pe.EMPTY}insert(e,t){return new _e(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Pe.BLACK,null,null))}remove(e){return new _e(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Pe.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new hi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new hi(this.root,e,this.comparator,!1)}getReverseIterator(){return new hi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new hi(this.root,e,this.comparator,!0)}}class hi{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=t?r(e.key,t):1,t&&i&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(o===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Pe{constructor(e,t,r,i,o){this.key=e,this.value=t,this.color=r??Pe.RED,this.left=i??Pe.EMPTY,this.right=o??Pe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,o){return new Pe(e??this.key,t??this.value,r??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const o=r(e,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(e,t,r),null):o===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Pe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return Pe.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Pe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Pe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw G();const e=this.left.check();if(e!==this.right.check())throw G();return e+(this.isRed()?0:1)}}Pe.EMPTY=null,Pe.RED=!0,Pe.BLACK=!1;Pe.EMPTY=new class{constructor(){this.size=0}get key(){throw G()}get value(){throw G()}get color(){throw G()}get left(){throw G()}get right(){throw G()}copy(e,t,r,i,o){return this}insert(e,t,r){return new Pe(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{constructor(e){this.comparator=e,this.data=new _e(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new ml(this.data.getIterator())}getIteratorFrom(e){return new ml(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof Ae)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,o=r.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Ae(this.comparator);return t.data=e,t}}class ml{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e){this.fields=e,e.sort(He.comparator)}static empty(){return new Vt([])}unionWith(e){let t=new Ae(He.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Vt(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return xn(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qu extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new qu("Invalid base64 string: "+o):o}}(e);return new De(t)}static fromUint8Array(e){const t=function(i){let o="";for(let a=0;a<i.length;++a)o+=String.fromCharCode(i[a]);return o}(e);return new De(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Z(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}De.EMPTY_BYTE_STRING=new De("");const Nm=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Bt(n){if(de(!!n),typeof n=="string"){let e=0;const t=Nm.exec(n);if(de(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ge(n.seconds),nanos:ge(n.nanos)}}function ge(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Ut(n){return typeof n=="string"?De.fromBase64String(n):De.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Io(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function ji(n){const e=n.mapValue.fields.__previous_value__;return Io(e)?ji(e):e}function br(n){const e=Bt(n.mapValue.fields.__local_write_time__.timestampValue);return new We(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lm{constructor(e,t,r,i,o,a,l,h,d){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=h,this.useFetchStreams=d}}class Cr{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Cr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Cr&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const di={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function $t(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Io(n)?4:Mm(n)?9007199254740991:Om(n)?10:11:G()}function ct(n,e){if(n===e)return!0;const t=$t(n);if(t!==$t(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return br(n).isEqual(br(e));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const a=Bt(i.timestampValue),l=Bt(o.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,o){return Ut(i.bytesValue).isEqual(Ut(o.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,o){return ge(i.geoPointValue.latitude)===ge(o.geoPointValue.latitude)&&ge(i.geoPointValue.longitude)===ge(o.geoPointValue.longitude)}(n,e);case 2:return function(i,o){if("integerValue"in i&&"integerValue"in o)return ge(i.integerValue)===ge(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const a=ge(i.doubleValue),l=ge(o.doubleValue);return a===l?Qs(a)===Qs(l):isNaN(a)&&isNaN(l)}return!1}(n,e);case 9:return xn(n.arrayValue.values||[],e.arrayValue.values||[],ct);case 10:case 11:return function(i,o){const a=i.mapValue.fields||{},l=o.mapValue.fields||{};if(fl(a)!==fl(l))return!1;for(const h in a)if(a.hasOwnProperty(h)&&(l[h]===void 0||!ct(a[h],l[h])))return!1;return!0}(n,e);default:return G()}}function Sr(n,e){return(n.values||[]).find(t=>ct(t,e))!==void 0}function Nn(n,e){if(n===e)return 0;const t=$t(n),r=$t(e);if(t!==r)return Z(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return Z(n.booleanValue,e.booleanValue);case 2:return function(o,a){const l=ge(o.integerValue||o.doubleValue),h=ge(a.integerValue||a.doubleValue);return l<h?-1:l>h?1:l===h?0:isNaN(l)?isNaN(h)?0:-1:1}(n,e);case 3:return gl(n.timestampValue,e.timestampValue);case 4:return gl(br(n),br(e));case 5:return Z(n.stringValue,e.stringValue);case 6:return function(o,a){const l=Ut(o),h=Ut(a);return l.compareTo(h)}(n.bytesValue,e.bytesValue);case 7:return function(o,a){const l=o.split("/"),h=a.split("/");for(let d=0;d<l.length&&d<h.length;d++){const m=Z(l[d],h[d]);if(m!==0)return m}return Z(l.length,h.length)}(n.referenceValue,e.referenceValue);case 8:return function(o,a){const l=Z(ge(o.latitude),ge(a.latitude));return l!==0?l:Z(ge(o.longitude),ge(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return pl(n.arrayValue,e.arrayValue);case 10:return function(o,a){var l,h,d,m;const _=o.fields||{},y=a.fields||{},b=(l=_.value)===null||l===void 0?void 0:l.arrayValue,C=(h=y.value)===null||h===void 0?void 0:h.arrayValue,R=Z(((d=b==null?void 0:b.values)===null||d===void 0?void 0:d.length)||0,((m=C==null?void 0:C.values)===null||m===void 0?void 0:m.length)||0);return R!==0?R:pl(b,C)}(n.mapValue,e.mapValue);case 11:return function(o,a){if(o===di.mapValue&&a===di.mapValue)return 0;if(o===di.mapValue)return 1;if(a===di.mapValue)return-1;const l=o.fields||{},h=Object.keys(l),d=a.fields||{},m=Object.keys(d);h.sort(),m.sort();for(let _=0;_<h.length&&_<m.length;++_){const y=Z(h[_],m[_]);if(y!==0)return y;const b=Nn(l[h[_]],d[m[_]]);if(b!==0)return b}return Z(h.length,m.length)}(n.mapValue,e.mapValue);default:throw G()}}function gl(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Z(n,e);const t=Bt(n),r=Bt(e),i=Z(t.seconds,r.seconds);return i!==0?i:Z(t.nanos,r.nanos)}function pl(n,e){const t=n.values||[],r=e.values||[];for(let i=0;i<t.length&&i<r.length;++i){const o=Nn(t[i],r[i]);if(o)return o}return Z(t.length,r.length)}function Ln(n){return Xs(n)}function Xs(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=Bt(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Ut(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return $.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",i=!0;for(const o of t.values||[])i?i=!1:r+=",",r+=Xs(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${Xs(t.fields[a])}`;return i+"}"}(n.mapValue):G()}function _i(n){switch($t(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=ji(n);return e?16+_i(e):16;case 5:return 2*n.stringValue.length;case 6:return Ut(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,o)=>i+_i(o),0)}(n.arrayValue);case 10:case 11:return function(r){let i=0;return Fr(r.fields,(o,a)=>{i+=o.length+_i(a)}),i}(n.mapValue);default:throw G()}}function Ys(n){return!!n&&"integerValue"in n}function Ao(n){return!!n&&"arrayValue"in n}function _l(n){return!!n&&"nullValue"in n}function vl(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Ds(n){return!!n&&"mapValue"in n}function Om(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function pr(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Fr(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=pr(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=pr(n.arrayValue.values[t]);return e}return Object.assign({},n)}function Mm(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e){this.value=e}static empty(){return new ot({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Ds(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=pr(t)}setAll(e){let t=He.emptyPath(),r={},i=[];e.forEach((a,l)=>{if(!t.isImmediateParentOf(l)){const h=this.getFieldsMap(t);this.applyChanges(h,r,i),r={},i=[],t=l.popLast()}a?r[l.lastSegment()]=pr(a):i.push(l.lastSegment())});const o=this.getFieldsMap(t);this.applyChanges(o,r,i)}delete(e){const t=this.field(e.popLast());Ds(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return ct(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];Ds(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){Fr(t,(i,o)=>e[i]=o);for(const i of r)delete e[i]}clone(){return new ot(pr(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e,t,r,i,o,a,l){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=o,this.data=a,this.documentState=l}static newInvalidDocument(e){return new Be(e,0,z.min(),z.min(),z.min(),ot.empty(),0)}static newFoundDocument(e,t,r,i){return new Be(e,1,t,z.min(),r,i,0)}static newNoDocument(e,t){return new Be(e,2,t,z.min(),z.min(),ot.empty(),0)}static newUnknownDocument(e,t){return new Be(e,3,t,z.min(),z.min(),ot.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(z.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ot.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ot.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=z.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Be&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Be(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{constructor(e,t){this.position=e,this.inclusive=t}}function yl(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const o=e[i],a=n.position[i];if(o.field.isKeyField()?r=$.comparator($.fromName(a.referenceValue),t.key):r=Nn(a,t.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function El(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!ct(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(e,t="asc"){this.field=e,this.dir=t}}function Fm(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zu{}class Ee extends zu{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new Um(e,t,r):t==="array-contains"?new qm(e,r):t==="in"?new zm(e,r):t==="not-in"?new Gm(e,r):t==="array-contains-any"?new Hm(e,r):new Ee(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new $m(e,r):new jm(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Nn(t,this.value)):t!==null&&$t(this.value)===$t(t)&&this.matchesComparison(Nn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return G()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ht extends zu{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new ht(e,t)}matches(e){return Gu(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Gu(n){return n.op==="and"}function Hu(n){return Bm(n)&&Gu(n)}function Bm(n){for(const e of n.filters)if(e instanceof ht)return!1;return!0}function Js(n){if(n instanceof Ee)return n.field.canonicalString()+n.op.toString()+Ln(n.value);if(Hu(n))return n.filters.map(e=>Js(e)).join(",");{const e=n.filters.map(t=>Js(t)).join(",");return`${n.op}(${e})`}}function Ku(n,e){return n instanceof Ee?function(r,i){return i instanceof Ee&&r.op===i.op&&r.field.isEqual(i.field)&&ct(r.value,i.value)}(n,e):n instanceof ht?function(r,i){return i instanceof ht&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((o,a,l)=>o&&Ku(a,i.filters[l]),!0):!1}(n,e):void G()}function Wu(n){return n instanceof Ee?function(t){return`${t.field.canonicalString()} ${t.op} ${Ln(t.value)}`}(n):n instanceof ht?function(t){return t.op.toString()+" {"+t.getFilters().map(Wu).join(" ,")+"}"}(n):"Filter"}class Um extends Ee{constructor(e,t,r){super(e,t,r),this.key=$.fromName(r.referenceValue)}matches(e){const t=$.comparator(e.key,this.key);return this.matchesComparison(t)}}class $m extends Ee{constructor(e,t){super(e,"in",t),this.keys=Qu("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class jm extends Ee{constructor(e,t){super(e,"not-in",t),this.keys=Qu("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Qu(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>$.fromName(r.referenceValue))}class qm extends Ee{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Ao(t)&&Sr(t.arrayValue,this.value)}}class zm extends Ee{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Sr(this.value.arrayValue,t)}}class Gm extends Ee{constructor(e,t){super(e,"not-in",t)}matches(e){if(Sr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Sr(this.value.arrayValue,t)}}class Hm extends Ee{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Ao(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Sr(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Km{constructor(e,t=null,r=[],i=[],o=null,a=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=o,this.startAt=a,this.endAt=l,this.ue=null}}function Tl(n,e=null,t=[],r=[],i=null,o=null,a=null){return new Km(n,e,t,r,i,o,a)}function bo(n){const e=J(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Js(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),$i(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Ln(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Ln(r)).join(",")),e.ue=t}return e.ue}function Co(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Fm(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Ku(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!El(n.startAt,e.startAt)&&El(n.endAt,e.endAt)}function Zs(n){return $.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi{constructor(e,t=null,r=[],i=[],o=null,a="F",l=null,h=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=o,this.limitType=a,this.startAt=l,this.endAt=h,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Wm(n,e,t,r,i,o,a,l){return new qi(n,e,t,r,i,o,a,l)}function So(n){return new qi(n)}function wl(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Qm(n){return n.collectionGroup!==null}function _r(n){const e=J(n);if(e.ce===null){e.ce=[];const t=new Set;for(const o of e.explicitOrderBy)e.ce.push(o),t.add(o.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new Ae(He.comparator);return a.filters.forEach(h=>{h.getFlattenedFilters().forEach(d=>{d.isInequality()&&(l=l.add(d.field))})}),l})(e).forEach(o=>{t.has(o.canonicalString())||o.isKeyField()||e.ce.push(new Ai(o,r))}),t.has(He.keyField().canonicalString())||e.ce.push(new Ai(He.keyField(),r))}return e.ce}function at(n){const e=J(n);return e.le||(e.le=Xm(e,_r(n))),e.le}function Xm(n,e){if(n.limitType==="F")return Tl(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(i=>{const o=i.dir==="desc"?"asc":"desc";return new Ai(i.field,o)});const t=n.endAt?new Ii(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Ii(n.startAt.position,n.startAt.inclusive):null;return Tl(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function eo(n,e,t){return new qi(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function zi(n,e){return Co(at(n),at(e))&&n.limitType===e.limitType}function Xu(n){return`${bo(at(n))}|lt:${n.limitType}`}function In(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(i=>Wu(i)).join(", ")}]`),$i(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(i=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(i)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(i=>Ln(i)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(i=>Ln(i)).join(",")),`Target(${r})`}(at(n))}; limitType=${n.limitType})`}function Gi(n,e){return e.isFoundDocument()&&function(r,i){const o=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):$.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,e)&&function(r,i){for(const o of _r(r))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0}(n,e)&&function(r,i){for(const o of r.filters)if(!o.matches(i))return!1;return!0}(n,e)&&function(r,i){return!(r.startAt&&!function(a,l,h){const d=yl(a,l,h);return a.inclusive?d<=0:d<0}(r.startAt,_r(r),i)||r.endAt&&!function(a,l,h){const d=yl(a,l,h);return a.inclusive?d>=0:d>0}(r.endAt,_r(r),i))}(n,e)}function Ym(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Yu(n){return(e,t)=>{let r=!1;for(const i of _r(n)){const o=Jm(i,e,t);if(o!==0)return o;r=r||i.field.isKeyField()}return 0}}function Jm(n,e,t){const r=n.field.isKeyField()?$.comparator(e.key,t.key):function(o,a,l){const h=a.data.field(o),d=l.data.field(o);return h!==null&&d!==null?Nn(h,d):G()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return G()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,o]of r)if(this.equalsFn(i,e))return o}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return void(i[o]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Fr(this.inner,(t,r)=>{for(const[i,o]of r)e(i,o)})}isEmpty(){return xm(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zm=new _e($.comparator);function jt(){return Zm}const Ju=new _e($.comparator);function dr(...n){let e=Ju;for(const t of n)e=e.insert(t.key,t);return e}function eg(n){let e=Ju;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function tn(){return vr()}function Zu(){return vr()}function vr(){return new pn(n=>n.toString(),(n,e)=>n.isEqual(e))}const tg=new Ae($.comparator);function ee(...n){let e=tg;for(const t of n)e=e.add(t);return e}const ng=new Ae(Z);function rg(){return ng}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ig(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Qs(e)?"-0":e}}function sg(n){return{integerValue:""+n}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(){this._=void 0}}function og(n,e,t){return n instanceof to?function(i,o){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&Io(o)&&(o=ji(o)),o&&(a.fields.__previous_value__=o),{mapValue:a}}(t,e):n instanceof bi?ec(n,e):n instanceof Ci?tc(n,e):function(i,o){const a=lg(i,o),l=Il(a)+Il(i.Pe);return Ys(a)&&Ys(i.Pe)?sg(l):ig(i.serializer,l)}(n,e)}function ag(n,e,t){return n instanceof bi?ec(n,e):n instanceof Ci?tc(n,e):t}function lg(n,e){return n instanceof no?function(r){return Ys(r)||function(o){return!!o&&"doubleValue"in o}(r)}(e)?e:{integerValue:0}:null}class to extends Hi{}class bi extends Hi{constructor(e){super(),this.elements=e}}function ec(n,e){const t=nc(e);for(const r of n.elements)t.some(i=>ct(i,r))||t.push(r);return{arrayValue:{values:t}}}class Ci extends Hi{constructor(e){super(),this.elements=e}}function tc(n,e){let t=nc(e);for(const r of n.elements)t=t.filter(i=>!ct(i,r));return{arrayValue:{values:t}}}class no extends Hi{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function Il(n){return ge(n.integerValue||n.doubleValue)}function nc(n){return Ao(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function ug(n,e){return n.field.isEqual(e.field)&&function(r,i){return r instanceof bi&&i instanceof bi||r instanceof Ci&&i instanceof Ci?xn(r.elements,i.elements,ct):r instanceof no&&i instanceof no?ct(r.Pe,i.Pe):r instanceof to&&i instanceof to}(n.transform,e.transform)}class ln{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new ln}static exists(e){return new ln(void 0,e)}static updateTime(e){return new ln(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function vi(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Ro{}function rc(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new hg(n.key,ln.none()):new Po(n.key,n.data,ln.none());{const t=n.data,r=ot.empty();let i=new Ae(He.comparator);for(let o of e.fields)if(!i.has(o)){let a=t.field(o);a===null&&o.length>1&&(o=o.popLast(),a=t.field(o)),a===null?r.delete(o):r.set(o,a),i=i.add(o)}return new Ki(n.key,r,new Vt(i.toArray()),ln.none())}}function cg(n,e,t){n instanceof Po?function(i,o,a){const l=i.value.clone(),h=bl(i.fieldTransforms,o,a.transformResults);l.setAll(h),o.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,e,t):n instanceof Ki?function(i,o,a){if(!vi(i.precondition,o))return void o.convertToUnknownDocument(a.version);const l=bl(i.fieldTransforms,o,a.transformResults),h=o.data;h.setAll(ic(i)),h.setAll(l),o.convertToFoundDocument(a.version,h).setHasCommittedMutations()}(n,e,t):function(i,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function yr(n,e,t,r){return n instanceof Po?function(o,a,l,h){if(!vi(o.precondition,a))return l;const d=o.value.clone(),m=Cl(o.fieldTransforms,h,a);return d.setAll(m),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(n,e,t,r):n instanceof Ki?function(o,a,l,h){if(!vi(o.precondition,a))return l;const d=Cl(o.fieldTransforms,h,a),m=a.data;return m.setAll(ic(o)),m.setAll(d),a.convertToFoundDocument(a.version,m).setHasLocalMutations(),l===null?null:l.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(_=>_.field))}(n,e,t,r):function(o,a,l){return vi(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(n,e,t)}function Al(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&xn(r,i,(o,a)=>ug(o,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Po extends Ro{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Ki extends Ro{constructor(e,t,r,i,o=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function ic(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function bl(n,e,t){const r=new Map;de(n.length===t.length);for(let i=0;i<t.length;i++){const o=n[i],a=o.transform,l=e.data.field(o.field);r.set(o.field,ag(a,l,t[i]))}return r}function Cl(n,e,t){const r=new Map;for(const i of n){const o=i.transform,a=t.data.field(i.field);r.set(i.field,og(o,a,e))}return r}class hg extends Ro{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dg{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(e.key)&&cg(o,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=yr(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=yr(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Zu();return this.mutations.forEach(i=>{const o=e.get(i.key),a=o.overlayedDocument;let l=this.applyToLocalView(a,o.mutatedFields);l=t.has(i.key)?null:l;const h=rc(a,l);h!==null&&r.set(i.key,h),a.isValidDocument()||a.convertToNoDocument(z.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),ee())}isEqual(e){return this.batchId===e.batchId&&xn(this.mutations,e.mutations,(t,r)=>Al(t,r))&&xn(this.baseMutations,e.baseMutations,(t,r)=>Al(t,r))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fg{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mg{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ve,X;function sc(n){if(n===void 0)return At("GRPC error has no .code"),x.UNKNOWN;switch(n){case ve.OK:return x.OK;case ve.CANCELLED:return x.CANCELLED;case ve.UNKNOWN:return x.UNKNOWN;case ve.DEADLINE_EXCEEDED:return x.DEADLINE_EXCEEDED;case ve.RESOURCE_EXHAUSTED:return x.RESOURCE_EXHAUSTED;case ve.INTERNAL:return x.INTERNAL;case ve.UNAVAILABLE:return x.UNAVAILABLE;case ve.UNAUTHENTICATED:return x.UNAUTHENTICATED;case ve.INVALID_ARGUMENT:return x.INVALID_ARGUMENT;case ve.NOT_FOUND:return x.NOT_FOUND;case ve.ALREADY_EXISTS:return x.ALREADY_EXISTS;case ve.PERMISSION_DENIED:return x.PERMISSION_DENIED;case ve.FAILED_PRECONDITION:return x.FAILED_PRECONDITION;case ve.ABORTED:return x.ABORTED;case ve.OUT_OF_RANGE:return x.OUT_OF_RANGE;case ve.UNIMPLEMENTED:return x.UNIMPLEMENTED;case ve.DATA_LOSS:return x.DATA_LOSS;default:return G()}}(X=ve||(ve={}))[X.OK=0]="OK",X[X.CANCELLED=1]="CANCELLED",X[X.UNKNOWN=2]="UNKNOWN",X[X.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",X[X.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",X[X.NOT_FOUND=5]="NOT_FOUND",X[X.ALREADY_EXISTS=6]="ALREADY_EXISTS",X[X.PERMISSION_DENIED=7]="PERMISSION_DENIED",X[X.UNAUTHENTICATED=16]="UNAUTHENTICATED",X[X.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",X[X.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",X[X.ABORTED=10]="ABORTED",X[X.OUT_OF_RANGE=11]="OUT_OF_RANGE",X[X.UNIMPLEMENTED=12]="UNIMPLEMENTED",X[X.INTERNAL=13]="INTERNAL",X[X.UNAVAILABLE=14]="UNAVAILABLE",X[X.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gg(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pg=new an([4294967295,4294967295],0);function Sl(n){const e=gg().encode(n),t=new Lu;return t.update(e),new Uint8Array(t.digest())}function Rl(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),o=e.getUint32(12,!0);return[new an([t,r],0),new an([i,o],0)]}class Vo{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new fr(`Invalid padding: ${t}`);if(r<0)throw new fr(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new fr(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new fr(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=an.fromNumber(this.Ie)}Ee(e,t,r){let i=e.add(t.multiply(an.fromNumber(r)));return i.compare(pg)===1&&(i=new an([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=Sl(e),[r,i]=Rl(t);for(let o=0;o<this.hashCount;o++){const a=this.Ee(r,i,o);if(!this.de(a))return!1}return!0}static create(e,t,r){const i=e%8==0?0:8-e%8,o=new Uint8Array(Math.ceil(e/8)),a=new Vo(o,i,t);return r.forEach(l=>a.insert(l)),a}insert(e){if(this.Ie===0)return;const t=Sl(e),[r,i]=Rl(t);for(let o=0;o<this.hashCount;o++){const a=this.Ee(r,i,o);this.Ae(a)}}Ae(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class fr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wi{constructor(e,t,r,i,o){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const i=new Map;return i.set(e,Br.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Wi(z.min(),i,new _e(Z),jt(),ee())}}class Br{constructor(e,t,r,i,o){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Br(r,t,ee(),ee(),ee())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(e,t,r,i){this.Re=e,this.removedTargetIds=t,this.key=r,this.Ve=i}}class oc{constructor(e,t){this.targetId=e,this.me=t}}class ac{constructor(e,t,r=De.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}}class Pl{constructor(){this.fe=0,this.ge=kl(),this.pe=De.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ee(),t=ee(),r=ee();return this.ge.forEach((i,o)=>{switch(o){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:G()}}),new Br(this.pe,this.ye,e,t,r)}Ce(){this.we=!1,this.ge=kl()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,de(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class _g{constructor(e){this.Le=e,this.Be=new Map,this.ke=jt(),this.qe=Vl(),this.Qe=new _e(Z)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{const r=this.Ge(t);switch(e.state){case 0:this.ze(t)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),r.De(e.resumeToken));break;default:G()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((r,i)=>{this.ze(i)&&t(i)})}He(e){const t=e.targetId,r=e.me.count,i=this.Je(t);if(i){const o=i.target;if(Zs(o))if(r===0){const a=new $(o.path);this.Ue(t,a,Be.newNoDocument(a,z.min()))}else de(r===1);else{const a=this.Ye(t);if(a!==r){const l=this.Ze(e),h=l?this.Xe(l,e,a):1;if(h!==0){this.je(t);const d=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,d)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:o=0}=t;let a,l;try{a=Ut(r).toUint8Array()}catch(h){if(h instanceof qu)return Dn("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{l=new Vo(a,i,o)}catch(h){return Dn(h instanceof fr?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return l.Ie===0?null:l}Xe(e,t,r){return t.me.count===r-this.nt(e,t.targetId)?0:2}nt(e,t){const r=this.Le.getRemoteKeysForTarget(t);let i=0;return r.forEach(o=>{const a=this.Le.tt(),l=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;e.mightContain(l)||(this.Ue(t,o,null),i++)}),i}rt(e){const t=new Map;this.Be.forEach((o,a)=>{const l=this.Je(a);if(l){if(o.current&&Zs(l.target)){const h=new $(l.target.path);this.ke.get(h)!==null||this.it(a,h)||this.Ue(a,h,Be.newNoDocument(h,e))}o.be&&(t.set(a,o.ve()),o.Ce())}});let r=ee();this.qe.forEach((o,a)=>{let l=!0;a.forEachWhile(h=>{const d=this.Je(h);return!d||d.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(o))}),this.ke.forEach((o,a)=>a.setReadTime(e));const i=new Wi(e,t,this.Qe,this.ke,r);return this.ke=jt(),this.qe=Vl(),this.Qe=new _e(Z),i}$e(e,t){if(!this.ze(e))return;const r=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,r),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,t)?i.Fe(t,1):i.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),r&&(this.ke=this.ke.insert(t,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new Pl,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new Ae(Z),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||O("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Pl),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function Vl(){return new _e($.comparator)}function kl(){return new _e($.comparator)}const vg={asc:"ASCENDING",desc:"DESCENDING"},yg={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Eg={and:"AND",or:"OR"};class Tg{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function ro(n,e){return n.useProto3Json||$i(e)?e:{value:e}}function wg(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Ig(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Rn(n){return de(!!n),z.fromTimestamp(function(t){const r=Bt(t);return new We(r.seconds,r.nanos)}(n))}function Ag(n,e){return io(n,e).canonicalString()}function io(n,e){const t=function(i){return new he(["projects",i.projectId,"databases",i.database])}(n).child("documents");return e===void 0?t:t.child(e)}function lc(n){const e=he.fromString(n);return de(fc(e)),e}function xs(n,e){const t=lc(e);if(t.get(1)!==n.databaseId.projectId)throw new F(x.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new F(x.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new $(cc(t))}function uc(n,e){return Ag(n.databaseId,e)}function bg(n){const e=lc(n);return e.length===4?he.emptyPath():cc(e)}function Dl(n){return new he(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function cc(n){return de(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Cg(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:G()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],o=function(d,m){return d.useProto3Json?(de(m===void 0||typeof m=="string"),De.fromBase64String(m||"")):(de(m===void 0||m instanceof Buffer||m instanceof Uint8Array),De.fromUint8Array(m||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,l=a&&function(d){const m=d.code===void 0?x.UNKNOWN:sc(d.code);return new F(m,d.message||"")}(a);t=new ac(r,i,o,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=xs(n,r.document.name),o=Rn(r.document.updateTime),a=r.document.createTime?Rn(r.document.createTime):z.min(),l=new ot({mapValue:{fields:r.document.fields}}),h=Be.newFoundDocument(i,o,a,l),d=r.targetIds||[],m=r.removedTargetIds||[];t=new yi(d,m,h.key,h)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=xs(n,r.document),o=r.readTime?Rn(r.readTime):z.min(),a=Be.newNoDocument(i,o),l=r.removedTargetIds||[];t=new yi([],l,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=xs(n,r.document),o=r.removedTargetIds||[];t=new yi([],o,i,null)}else{if(!("filter"in e))return G();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:o}=r,a=new mg(i,o),l=r.targetId;t=new oc(l,a)}}return t}function Sg(n,e){return{documents:[uc(n,e.path)]}}function Rg(n,e){const t={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=uc(n,i);const o=function(d){if(d.length!==0)return dc(ht.create(d,"and"))}(e.filters);o&&(t.structuredQuery.where=o);const a=function(d){if(d.length!==0)return d.map(m=>function(y){return{field:An(y.field),direction:kg(y.dir)}}(m))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const l=ro(n,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{_t:t,parent:i}}function Pg(n){let e=bg(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){de(r===1);const m=t.from[0];m.allDescendants?i=m.collectionId:e=e.child(m.collectionId)}let o=[];t.where&&(o=function(_){const y=hc(_);return y instanceof ht&&Hu(y)?y.getFilters():[y]}(t.where));let a=[];t.orderBy&&(a=function(_){return _.map(y=>function(C){return new Ai(bn(C.field),function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(C.direction))}(y))}(t.orderBy));let l=null;t.limit&&(l=function(_){let y;return y=typeof _=="object"?_.value:_,$i(y)?null:y}(t.limit));let h=null;t.startAt&&(h=function(_){const y=!!_.before,b=_.values||[];return new Ii(b,y)}(t.startAt));let d=null;return t.endAt&&(d=function(_){const y=!_.before,b=_.values||[];return new Ii(b,y)}(t.endAt)),Wm(e,i,a,o,l,"F",h,d)}function Vg(n,e){const t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return G()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function hc(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=bn(t.unaryFilter.field);return Ee.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=bn(t.unaryFilter.field);return Ee.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=bn(t.unaryFilter.field);return Ee.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=bn(t.unaryFilter.field);return Ee.create(a,"!=",{nullValue:"NULL_VALUE"});default:return G()}}(n):n.fieldFilter!==void 0?function(t){return Ee.create(bn(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return G()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return ht.create(t.compositeFilter.filters.map(r=>hc(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return G()}}(t.compositeFilter.op))}(n):G()}function kg(n){return vg[n]}function Dg(n){return yg[n]}function xg(n){return Eg[n]}function An(n){return{fieldPath:n.canonicalString()}}function bn(n){return He.fromServerFormat(n.fieldPath)}function dc(n){return n instanceof Ee?function(t){if(t.op==="=="){if(vl(t.value))return{unaryFilter:{field:An(t.field),op:"IS_NAN"}};if(_l(t.value))return{unaryFilter:{field:An(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(vl(t.value))return{unaryFilter:{field:An(t.field),op:"IS_NOT_NAN"}};if(_l(t.value))return{unaryFilter:{field:An(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:An(t.field),op:Dg(t.op),value:t.value}}}(n):n instanceof ht?function(t){const r=t.getFilters().map(i=>dc(i));return r.length===1?r[0]:{compositeFilter:{op:xg(t.op),filters:r}}}(n):G()}function fc(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(e,t,r,i,o=z.min(),a=z.min(),l=De.EMPTY_BYTE_STRING,h=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=h}withSequenceNumber(e){return new kt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new kt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new kt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new kt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ng{constructor(e){this.ct=e}}function Lg(n){const e=Pg({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?eo(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Og{constructor(){this.un=new Mg}addToCollectionParentIndex(e,t){return this.un.add(t),k.resolve()}getCollectionParents(e,t){return k.resolve(this.un.getEntries(t))}addFieldIndex(e,t){return k.resolve()}deleteFieldIndex(e,t){return k.resolve()}deleteAllFieldIndexes(e){return k.resolve()}createTargetIndexes(e,t){return k.resolve()}getDocumentsMatchingTarget(e,t){return k.resolve(null)}getIndexType(e,t){return k.resolve(0)}getFieldIndexes(e,t){return k.resolve([])}getNextCollectionGroupToUpdate(e){return k.resolve(null)}getMinOffset(e,t){return k.resolve(Ft.min())}getMinOffsetFromCollectionGroup(e,t){return k.resolve(Ft.min())}updateCollectionGroup(e,t,r){return k.resolve()}updateIndexEntries(e,t){return k.resolve()}}class Mg{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new Ae(he.comparator),o=!i.has(r);return this.index[t]=i.add(r),o}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Ae(he.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xl={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Ke{constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new Ke(e,Ke.DEFAULT_COLLECTION_PERCENTILE,Ke.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ke.DEFAULT_COLLECTION_PERCENTILE=10,Ke.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ke.DEFAULT=new Ke(41943040,Ke.DEFAULT_COLLECTION_PERCENTILE,Ke.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ke.DISABLED=new Ke(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new On(0)}static kn(){return new On(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nl([n,e],[t,r]){const i=Z(n,t);return i===0?Z(e,r):i}class Fg{constructor(e){this.Un=e,this.buffer=new Ae(Nl),this.Wn=0}Gn(){return++this.Wn}zn(e){const t=[e,this.Gn()];if(this.buffer.size<this.Un)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();Nl(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Bg{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Hn(6e4)}stop(){this.jn&&(this.jn.cancel(),this.jn=null)}get started(){return this.jn!==null}Hn(e){O("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Gn(t)?O("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await Bi(t)}await this.Hn(3e5)})}}class Ug{constructor(e,t){this.Jn=e,this.params=t}calculateTargetCount(e,t){return this.Jn.Yn(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return k.resolve(Ui.oe);const r=new Fg(t);return this.Jn.forEachTarget(e,i=>r.zn(i.sequenceNumber)).next(()=>this.Jn.Zn(e,i=>r.zn(i))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.Jn.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Jn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(O("LruGarbageCollector","Garbage collection skipped; disabled"),k.resolve(xl)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(O("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),xl):this.Xn(e,t))}getCacheSize(e){return this.Jn.getCacheSize(e)}Xn(e,t){let r,i,o,a,l,h,d;const m=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(_=>(_>this.params.maximumSequenceNumbersToCollect?(O("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${_}`),i=this.params.maximumSequenceNumbersToCollect):i=_,a=Date.now(),this.nthSequenceNumber(e,i))).next(_=>(r=_,l=Date.now(),this.removeTargets(e,r,t))).next(_=>(o=_,h=Date.now(),this.removeOrphanedDocuments(e,r))).next(_=>(d=Date.now(),wn()<=Y.DEBUG&&O("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-m}ms
	Determined least recently used ${i} in `+(l-a)+`ms
	Removed ${o} targets in `+(h-l)+`ms
	Removed ${_} documents in `+(d-h)+`ms
Total Duration: ${d-m}ms`),k.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:o,documentsRemoved:_})))}}function $g(n,e){return new Ug(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jg{constructor(){this.changes=new pn(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Be.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?k.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qg{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zg{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(r!==null&&yr(r.mutation,i,Vt.empty(),We.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,ee()).next(()=>r))}getLocalViewOfDocuments(e,t,r=ee()){const i=tn();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,r).next(o=>{let a=dr();return o.forEach((l,h)=>{a=a.insert(l,h.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=tn();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,ee()))}populateOverlays(e,t,r){const i=[];return r.forEach(o=>{t.has(o)||i.push(o)}),this.documentOverlayCache.getOverlays(e,i).next(o=>{o.forEach((a,l)=>{t.set(a,l)})})}computeViews(e,t,r,i){let o=jt();const a=vr(),l=function(){return vr()}();return t.forEach((h,d)=>{const m=r.get(d.key);i.has(d.key)&&(m===void 0||m.mutation instanceof Ki)?o=o.insert(d.key,d):m!==void 0?(a.set(d.key,m.mutation.getFieldMask()),yr(m.mutation,d,m.mutation.getFieldMask(),We.now())):a.set(d.key,Vt.empty())}),this.recalculateAndSaveOverlays(e,o).next(h=>(h.forEach((d,m)=>a.set(d,m)),t.forEach((d,m)=>{var _;return l.set(d,new qg(m,(_=a.get(d))!==null&&_!==void 0?_:null))}),l))}recalculateAndSaveOverlays(e,t){const r=vr();let i=new _e((a,l)=>a-l),o=ee();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const l of a)l.keys().forEach(h=>{const d=t.get(h);if(d===null)return;let m=r.get(h)||Vt.empty();m=l.applyToLocalView(d,m),r.set(h,m);const _=(i.get(l.batchId)||ee()).add(h);i=i.insert(l.batchId,_)})}).next(()=>{const a=[],l=i.getReverseIterator();for(;l.hasNext();){const h=l.getNext(),d=h.key,m=h.value,_=Zu();m.forEach(y=>{if(!o.has(y)){const b=rc(t.get(y),r.get(y));b!==null&&_.set(y,b),o=o.add(y)}}),a.push(this.documentOverlayCache.saveOverlays(e,d,_))}return k.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,i){return function(a){return $.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Qm(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next(o=>{const a=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-o.size):k.resolve(tn());let l=-1,h=o;return a.next(d=>k.forEach(d,(m,_)=>(l<_.largestBatchId&&(l=_.largestBatchId),o.get(m)?k.resolve():this.remoteDocumentCache.getEntry(e,m).next(y=>{h=h.insert(m,y)}))).next(()=>this.populateOverlays(e,d,o)).next(()=>this.computeViews(e,h,d,ee())).next(m=>({batchId:l,changes:eg(m)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new $(t)).next(r=>{let i=dr();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){const o=t.collectionGroup;let a=dr();return this.indexManager.getCollectionParents(e,o).next(l=>k.forEach(l,h=>{const d=function(_,y){return new qi(y,null,_.explicitOrderBy.slice(),_.filters.slice(),_.limit,_.limitType,_.startAt,_.endAt)}(t,h.child(o));return this.getDocumentsMatchingCollectionQuery(e,d,r,i).next(m=>{m.forEach((_,y)=>{a=a.insert(_,y)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,i){let o;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,o,i))).next(a=>{o.forEach((h,d)=>{const m=d.getKey();a.get(m)===null&&(a=a.insert(m,Be.newInvalidDocument(m)))});let l=dr();return a.forEach((h,d)=>{const m=o.get(h);m!==void 0&&yr(m.mutation,d,Vt.empty(),We.now()),Gi(t,d)&&(l=l.insert(h,d))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gg{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,t){return k.resolve(this.hr.get(t))}saveBundleMetadata(e,t){return this.hr.set(t.id,function(i){return{id:i.id,version:i.version,createTime:Rn(i.createTime)}}(t)),k.resolve()}getNamedQuery(e,t){return k.resolve(this.Pr.get(t))}saveNamedQuery(e,t){return this.Pr.set(t.name,function(i){return{name:i.name,query:Lg(i.bundledQuery),readTime:Rn(i.readTime)}}(t)),k.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hg{constructor(){this.overlays=new _e($.comparator),this.Ir=new Map}getOverlay(e,t){return k.resolve(this.overlays.get(t))}getOverlays(e,t){const r=tn();return k.forEach(t,i=>this.getOverlay(e,i).next(o=>{o!==null&&r.set(i,o)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((i,o)=>{this.ht(e,t,o)}),k.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(o=>this.overlays=this.overlays.remove(o)),this.Ir.delete(r)),k.resolve()}getOverlaysForCollection(e,t,r){const i=tn(),o=t.length+1,a=new $(t.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const h=l.getNext().value,d=h.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===o&&h.largestBatchId>r&&i.set(h.getKey(),h)}return k.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let o=new _e((d,m)=>d-m);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>r){let m=o.get(d.largestBatchId);m===null&&(m=tn(),o=o.insert(d.largestBatchId,m)),m.set(d.getKey(),d)}}const l=tn(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((d,m)=>l.set(d,m)),!(l.size()>=i)););return k.resolve(l)}ht(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const a=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new fg(t,r));let o=this.Ir.get(t);o===void 0&&(o=ee(),this.Ir.set(t,o)),this.Ir.set(t,o.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kg{constructor(){this.sessionToken=De.EMPTY_BYTE_STRING}getSessionToken(e){return k.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,k.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko{constructor(){this.Tr=new Ae(Ie.Er),this.dr=new Ae(Ie.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,t){const r=new Ie(e,t);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Vr(new Ie(e,t))}mr(e,t){e.forEach(r=>this.removeReference(r,t))}gr(e){const t=new $(new he([])),r=new Ie(t,e),i=new Ie(t,e+1),o=[];return this.dr.forEachInRange([r,i],a=>{this.Vr(a),o.push(a.key)}),o}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const t=new $(new he([])),r=new Ie(t,e),i=new Ie(t,e+1);let o=ee();return this.dr.forEachInRange([r,i],a=>{o=o.add(a.key)}),o}containsKey(e){const t=new Ie(e,0),r=this.Tr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class Ie{constructor(e,t){this.key=e,this.wr=t}static Er(e,t){return $.comparator(e.key,t.key)||Z(e.wr,t.wr)}static Ar(e,t){return Z(e.wr,t.wr)||$.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wg{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Sr=1,this.br=new Ae(Ie.Er)}checkEmpty(e){return k.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const o=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new dg(o,t,r,i);this.mutationQueue.push(a);for(const l of i)this.br=this.br.add(new Ie(l.key,o)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return k.resolve(a)}lookupMutationBatch(e,t){return k.resolve(this.Dr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.vr(r),o=i<0?0:i;return k.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return k.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return k.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new Ie(t,0),i=new Ie(t,Number.POSITIVE_INFINITY),o=[];return this.br.forEachInRange([r,i],a=>{const l=this.Dr(a.wr);o.push(l)}),k.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Ae(Z);return t.forEach(i=>{const o=new Ie(i,0),a=new Ie(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([o,a],l=>{r=r.add(l.wr)})}),k.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let o=r;$.isDocumentKey(o)||(o=o.child(""));const a=new Ie(new $(o),0);let l=new Ae(Z);return this.br.forEachWhile(h=>{const d=h.key.path;return!!r.isPrefixOf(d)&&(d.length===i&&(l=l.add(h.wr)),!0)},a),k.resolve(this.Cr(l))}Cr(e){const t=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){de(this.Fr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return k.forEach(t.mutations,i=>{const o=new Ie(i.key,t.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,t){const r=new Ie(t,0),i=this.br.firstAfterOrEqual(r);return k.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,k.resolve()}Fr(e,t){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const t=this.vr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qg{constructor(e){this.Mr=e,this.docs=function(){return new _e($.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),o=i?i.size:0,a=this.Mr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return k.resolve(r?r.document.mutableCopy():Be.newInvalidDocument(t))}getEntries(e,t){let r=jt();return t.forEach(i=>{const o=this.docs.get(i);r=r.insert(i,o?o.document.mutableCopy():Be.newInvalidDocument(i))}),k.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let o=jt();const a=t.path,l=new $(a.child("")),h=this.docs.getIteratorFrom(l);for(;h.hasNext();){const{key:d,value:{document:m}}=h.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||Sm(Cm(m),r)<=0||(i.has(m.key)||Gi(t,m))&&(o=o.insert(m.key,m.mutableCopy()))}return k.resolve(o)}getAllFromCollectionGroup(e,t,r,i){G()}Or(e,t){return k.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new Xg(this)}getSize(e){return k.resolve(this.size)}}class Xg extends jg{constructor(e){super(),this.cr=e}applyChanges(e){const t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),k.waitFor(t)}getFromCache(e,t){return this.cr.getEntry(e,t)}getAllFromCache(e,t){return this.cr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yg{constructor(e){this.persistence=e,this.Nr=new pn(t=>bo(t),Co),this.lastRemoteSnapshotVersion=z.min(),this.highestTargetId=0,this.Lr=0,this.Br=new ko,this.targetCount=0,this.kr=On.Bn()}forEachTarget(e,t){return this.Nr.forEach((r,i)=>t(i)),k.resolve()}getLastRemoteSnapshotVersion(e){return k.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return k.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),k.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Lr&&(this.Lr=t),k.resolve()}Kn(e){this.Nr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.kr=new On(t),this.highestTargetId=t),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,t){return this.Kn(t),this.targetCount+=1,k.resolve()}updateTargetData(e,t){return this.Kn(t),k.resolve()}removeTargetData(e,t){return this.Nr.delete(t.target),this.Br.gr(t.targetId),this.targetCount-=1,k.resolve()}removeTargets(e,t,r){let i=0;const o=[];return this.Nr.forEach((a,l)=>{l.sequenceNumber<=t&&r.get(l.targetId)===null&&(this.Nr.delete(a),o.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),k.waitFor(o).next(()=>i)}getTargetCount(e){return k.resolve(this.targetCount)}getTargetData(e,t){const r=this.Nr.get(t)||null;return k.resolve(r)}addMatchingKeys(e,t,r){return this.Br.Rr(t,r),k.resolve()}removeMatchingKeys(e,t,r){this.Br.mr(t,r);const i=this.persistence.referenceDelegate,o=[];return i&&t.forEach(a=>{o.push(i.markPotentiallyOrphaned(e,a))}),k.waitFor(o)}removeMatchingKeysForTargetId(e,t){return this.Br.gr(t),k.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Br.yr(t);return k.resolve(r)}containsKey(e,t){return k.resolve(this.Br.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mc{constructor(e,t){this.qr={},this.overlays={},this.Qr=new Ui(0),this.Kr=!1,this.Kr=!0,this.$r=new Kg,this.referenceDelegate=e(this),this.Ur=new Yg(this),this.indexManager=new Og,this.remoteDocumentCache=function(i){return new Qg(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new Ng(t),this.Gr=new Gg(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Hg,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.qr[e.toKey()];return r||(r=new Wg(t,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,t,r){O("MemoryPersistence","Starting transaction:",e);const i=new Jg(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(o=>this.referenceDelegate.jr(i).next(()=>o)).toPromise().then(o=>(i.raiseOnCommittedEvent(),o))}Hr(e,t){return k.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,t)))}}class Jg extends Pm{constructor(e){super(),this.currentSequenceNumber=e}}class Do{constructor(e){this.persistence=e,this.Jr=new ko,this.Yr=null}static Zr(e){return new Do(e)}get Xr(){if(this.Yr)return this.Yr;throw G()}addReference(e,t,r){return this.Jr.addReference(r,t),this.Xr.delete(r.toString()),k.resolve()}removeReference(e,t,r){return this.Jr.removeReference(r,t),this.Xr.add(r.toString()),k.resolve()}markPotentiallyOrphaned(e,t){return this.Xr.add(t.toString()),k.resolve()}removeTarget(e,t){this.Jr.gr(t.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(o=>this.Xr.add(o.toString()))}).next(()=>r.removeTargetData(e,t))}zr(){this.Yr=new Set}jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return k.forEach(this.Xr,r=>{const i=$.fromPath(r);return this.ei(e,i).next(o=>{o||t.removeEntry(i,z.min())})}).next(()=>(this.Yr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ei(e,t).next(r=>{r?this.Xr.delete(t.toString()):this.Xr.add(t.toString())})}Wr(e){return 0}ei(e,t){return k.or([()=>k.resolve(this.Jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Hr(e,t)])}}class Si{constructor(e,t){this.persistence=e,this.ti=new pn(r=>km(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=$g(this,t)}static Zr(e,t){return new Si(e,t)}zr(){}jr(e){return k.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}Yn(e){const t=this.er(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(i=>r+i))}er(e){let t=0;return this.Zn(e,r=>{t++}).next(()=>t)}Zn(e,t){return k.forEach(this.ti,(r,i)=>this.nr(e,r,i).next(o=>o?k.resolve():t(i)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const i=this.persistence.getRemoteDocumentCache(),o=i.newChangeBuffer();return i.Or(e,a=>this.nr(e,a,t).next(l=>{l||(r++,o.removeEntry(a,z.min()))})).next(()=>o.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.ti.set(t,e.currentSequenceNumber),k.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.ti.set(r,e.currentSequenceNumber),k.resolve()}removeReference(e,t,r){return this.ti.set(r,e.currentSequenceNumber),k.resolve()}updateLimboDocument(e,t){return this.ti.set(t,e.currentSequenceNumber),k.resolve()}Wr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=_i(e.data.value)),t}nr(e,t,r){return k.or([()=>this.persistence.Hr(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const i=this.ti.get(t);return k.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.$i=r,this.Ui=i}static Wi(e,t){let r=ee(),i=ee();for(const o of t.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new xo(e,t.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zg{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ep{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return nf()?8:Vm(ef())>0?6:4}()}initialize(e,t){this.Ji=e,this.indexManager=t,this.Gi=!0}getDocumentsMatchingQuery(e,t,r,i){const o={result:null};return this.Yi(e,t).next(a=>{o.result=a}).next(()=>{if(!o.result)return this.Zi(e,t,i,r).next(a=>{o.result=a})}).next(()=>{if(o.result)return;const a=new Zg;return this.Xi(e,t,a).next(l=>{if(o.result=l,this.zi)return this.es(e,t,a,l.size)})}).next(()=>o.result)}es(e,t,r,i){return r.documentReadCount<this.ji?(wn()<=Y.DEBUG&&O("QueryEngine","SDK will not create cache indexes for query:",In(t),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),k.resolve()):(wn()<=Y.DEBUG&&O("QueryEngine","Query:",In(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(wn()<=Y.DEBUG&&O("QueryEngine","The SDK decides to create cache indexes for query:",In(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,at(t))):k.resolve())}Yi(e,t){if(wl(t))return k.resolve(null);let r=at(t);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=eo(t,null,"F"),r=at(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(o=>{const a=ee(...o);return this.Ji.getDocuments(e,a).next(l=>this.indexManager.getMinOffset(e,r).next(h=>{const d=this.ts(t,l);return this.ns(t,d,a,h.readTime)?this.Yi(e,eo(t,null,"F")):this.rs(e,d,t,h)}))})))}Zi(e,t,r,i){return wl(t)||i.isEqual(z.min())?k.resolve(null):this.Ji.getDocuments(e,r).next(o=>{const a=this.ts(t,o);return this.ns(t,a,r,i)?k.resolve(null):(wn()<=Y.DEBUG&&O("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),In(t)),this.rs(e,a,t,bm(i,-1)).next(l=>l))})}ts(e,t){let r=new Ae(Yu(e));return t.forEach((i,o)=>{Gi(e,o)&&(r=r.add(o))}),r}ns(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const o=e.limitType==="F"?t.last():t.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}Xi(e,t,r){return wn()<=Y.DEBUG&&O("QueryEngine","Using full collection scan to execute query:",In(t)),this.Ji.getDocumentsMatchingQuery(e,t,Ft.min(),r)}rs(e,t,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(o=>(t.forEach(a=>{o=o.insert(a.key,a)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tp{constructor(e,t,r,i){this.persistence=e,this.ss=t,this.serializer=i,this.os=new _e(Z),this._s=new pn(o=>bo(o),Co),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new zg(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.os))}}function np(n,e,t,r){return new tp(n,e,t,r)}async function gc(n,e){const t=J(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(o=>(i=o,t.ls(e),t.mutationQueue.getAllMutationBatches(r))).next(o=>{const a=[],l=[];let h=ee();for(const d of i){a.push(d.batchId);for(const m of d.mutations)h=h.add(m.key)}for(const d of o){l.push(d.batchId);for(const m of d.mutations)h=h.add(m.key)}return t.localDocuments.getDocuments(r,h).next(d=>({hs:d,removedBatchIds:a,addedBatchIds:l}))})})}function pc(n){const e=J(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ur.getLastRemoteSnapshotVersion(t))}function rp(n,e){const t=J(n),r=e.snapshotVersion;let i=t.os;return t.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const a=t.cs.newChangeBuffer({trackRemovals:!0});i=t.os;const l=[];e.targetChanges.forEach((m,_)=>{const y=i.get(_);if(!y)return;l.push(t.Ur.removeMatchingKeys(o,m.removedDocuments,_).next(()=>t.Ur.addMatchingKeys(o,m.addedDocuments,_)));let b=y.withSequenceNumber(o.currentSequenceNumber);e.targetMismatches.get(_)!==null?b=b.withResumeToken(De.EMPTY_BYTE_STRING,z.min()).withLastLimboFreeSnapshotVersion(z.min()):m.resumeToken.approximateByteSize()>0&&(b=b.withResumeToken(m.resumeToken,r)),i=i.insert(_,b),function(R,P,N){return R.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-R.snapshotVersion.toMicroseconds()>=3e8?!0:N.addedDocuments.size+N.modifiedDocuments.size+N.removedDocuments.size>0}(y,b,m)&&l.push(t.Ur.updateTargetData(o,b))});let h=jt(),d=ee();if(e.documentUpdates.forEach(m=>{e.resolvedLimboDocuments.has(m)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(o,m))}),l.push(ip(o,a,e.documentUpdates).next(m=>{h=m.Ps,d=m.Is})),!r.isEqual(z.min())){const m=t.Ur.getLastRemoteSnapshotVersion(o).next(_=>t.Ur.setTargetsMetadata(o,o.currentSequenceNumber,r));l.push(m)}return k.waitFor(l).next(()=>a.apply(o)).next(()=>t.localDocuments.getLocalViewOfDocuments(o,h,d)).next(()=>h)}).then(o=>(t.os=i,o))}function ip(n,e,t){let r=ee(),i=ee();return t.forEach(o=>r=r.add(o)),e.getEntries(n,r).next(o=>{let a=jt();return t.forEach((l,h)=>{const d=o.get(l);h.isFoundDocument()!==d.isFoundDocument()&&(i=i.add(l)),h.isNoDocument()&&h.version.isEqual(z.min())?(e.removeEntry(l,h.readTime),a=a.insert(l,h)):!d.isValidDocument()||h.version.compareTo(d.version)>0||h.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(h),a=a.insert(l,h)):O("LocalStore","Ignoring outdated watch update for ",l,". Current version:",d.version," Watch version:",h.version)}),{Ps:a,Is:i}})}function sp(n,e){const t=J(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return t.Ur.getTargetData(r,e).next(o=>o?(i=o,k.resolve(i)):t.Ur.allocateTargetId(r).next(a=>(i=new kt(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=t.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.os=t.os.insert(r.targetId,r),t._s.set(e,r.targetId)),r})}async function so(n,e,t){const r=J(n),i=r.os.get(e),o=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",o,a=>r.persistence.referenceDelegate.removeTarget(a,i))}catch(a){if(!Gn(a))throw a;O("LocalStore",`Failed to update sequence numbers for target ${e}: ${a}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function Ll(n,e,t){const r=J(n);let i=z.min(),o=ee();return r.persistence.runTransaction("Execute query","readwrite",a=>function(h,d,m){const _=J(h),y=_._s.get(m);return y!==void 0?k.resolve(_.os.get(y)):_.Ur.getTargetData(d,m)}(r,a,at(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(a,l.targetId).next(h=>{o=h})}).next(()=>r.ss.getDocumentsMatchingQuery(a,e,t?i:z.min(),t?o:ee())).next(l=>(op(r,Ym(e),l),{documents:l,Ts:o})))}function op(n,e,t){let r=n.us.get(e)||z.min();t.forEach((i,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),n.us.set(e,r)}class Ol{constructor(){this.activeTargetIds=rg()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class ap{constructor(){this.so=new Ol,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,t,r){this.oo[e]=t}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Ol,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lp{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ml{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){O("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){O("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fi=null;function Ns(){return fi===null?fi=function(){return 268435456+Math.round(2147483648*Math.random())}():fi++,"0x"+fi.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const up={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cp{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Me="WebChannelConnection";class hp extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+t.host,this.vo=`projects/${i}/databases/${o}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${o}`}get Fo(){return!1}Mo(t,r,i,o,a){const l=Ns(),h=this.xo(t,r.toUriEncodedString());O("RestConnection",`Sending RPC '${t}' ${l}:`,h,i);const d={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(d,o,a),this.No(t,h,d,i).then(m=>(O("RestConnection",`Received RPC '${t}' ${l}: `,m),m),m=>{throw Dn("RestConnection",`RPC '${t}' ${l} failed with error: `,m,"url: ",h,"request:",i),m})}Lo(t,r,i,o,a,l){return this.Mo(t,r,i,o,a)}Oo(t,r,i){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+zn}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((o,a)=>t[a]=o),i&&i.headers.forEach((o,a)=>t[a]=o)}xo(t,r){const i=up[t];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,t,r,i){const o=Ns();return new Promise((a,l)=>{const h=new Ou;h.setWithCredentials(!0),h.listenOnce(Mu.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case pi.NO_ERROR:const m=h.getResponseJson();O(Me,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(m)),a(m);break;case pi.TIMEOUT:O(Me,`RPC '${e}' ${o} timed out`),l(new F(x.DEADLINE_EXCEEDED,"Request time out"));break;case pi.HTTP_ERROR:const _=h.getStatus();if(O(Me,`RPC '${e}' ${o} failed with status:`,_,"response text:",h.getResponseText()),_>0){let y=h.getResponseJson();Array.isArray(y)&&(y=y[0]);const b=y==null?void 0:y.error;if(b&&b.status&&b.message){const C=function(P){const N=P.toLowerCase().replace(/_/g,"-");return Object.values(x).indexOf(N)>=0?N:x.UNKNOWN}(b.status);l(new F(C,b.message))}else l(new F(x.UNKNOWN,"Server responded with status "+h.getStatus()))}else l(new F(x.UNAVAILABLE,"Connection failed."));break;default:G()}}finally{O(Me,`RPC '${e}' ${o} completed.`)}});const d=JSON.stringify(i);O(Me,`RPC '${e}' ${o} sending request:`,i),h.send(t,"POST",d,r,15)})}Bo(e,t,r){const i=Ns(),o=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=Uu(),l=Bu(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(h.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(h.useFetchStreams=!0),this.Oo(h.initMessageHeaders,t,r),h.encodeInitMessageHeaders=!0;const m=o.join("");O(Me,`Creating RPC '${e}' stream ${i}: ${m}`,h);const _=a.createWebChannel(m,h);let y=!1,b=!1;const C=new cp({Io:P=>{b?O(Me,`Not sending because RPC '${e}' stream ${i} is closed:`,P):(y||(O(Me,`Opening RPC '${e}' stream ${i} transport.`),_.open(),y=!0),O(Me,`RPC '${e}' stream ${i} sending:`,P),_.send(P))},To:()=>_.close()}),R=(P,N,U)=>{P.listen(N,j=>{try{U(j)}catch(B){setTimeout(()=>{throw B},0)}})};return R(_,hr.EventType.OPEN,()=>{b||(O(Me,`RPC '${e}' stream ${i} transport opened.`),C.yo())}),R(_,hr.EventType.CLOSE,()=>{b||(b=!0,O(Me,`RPC '${e}' stream ${i} transport closed`),C.So())}),R(_,hr.EventType.ERROR,P=>{b||(b=!0,Dn(Me,`RPC '${e}' stream ${i} transport errored:`,P),C.So(new F(x.UNAVAILABLE,"The operation could not be completed")))}),R(_,hr.EventType.MESSAGE,P=>{var N;if(!b){const U=P.data[0];de(!!U);const j=U,B=j.error||((N=j[0])===null||N===void 0?void 0:N.error);if(B){O(Me,`RPC '${e}' stream ${i} received error:`,B);const W=B.status;let H=function(v){const I=ve[v];if(I!==void 0)return sc(I)}(W),A=B.message;H===void 0&&(H=x.INTERNAL,A="Unknown error status: "+W+" with message "+B.message),b=!0,C.So(new F(H,A)),_.close()}else O(Me,`RPC '${e}' stream ${i} received:`,U),C.bo(U)}}),R(l,Fu.STAT_EVENT,P=>{P.stat===Ws.PROXY?O(Me,`RPC '${e}' stream ${i} detected buffering proxy`):P.stat===Ws.NOPROXY&&O(Me,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{C.wo()},0),C}}function Ls(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _c(n){return new Tg(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc{constructor(e,t,r=1e3,i=1.5,o=6e4){this.ui=e,this.timerId=t,this.ko=r,this.qo=i,this.Qo=o,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const t=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,t-r);i>0&&O("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dp{constructor(e,t,r,i,o,a,l,h){this.ui=e,this.Ho=r,this.Jo=i,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=h,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new vc(e,t)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,t){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():t&&t.code===x.RESOURCE_EXHAUSTED?(At(t.toString()),At("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):t&&t.code===x.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(t)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),t=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===t&&this.P_(r,i)},r=>{e(()=>{const i=new F(x.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,t){const r=this.h_(this.Yo);this.stream=this.T_(e,t),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return O("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return t=>{this.ui.enqueueAndForget(()=>this.Yo===e?t():(O("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class fp extends dp{constructor(e,t,r,i,o,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,a),this.serializer=o}T_(e,t){return this.connection.Bo("Listen",e,t)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const t=Cg(this.serializer,e),r=function(o){if(!("targetChange"in o))return z.min();const a=o.targetChange;return a.targetIds&&a.targetIds.length?z.min():a.readTime?Rn(a.readTime):z.min()}(e);return this.listener.d_(t,r)}A_(e){const t={};t.database=Dl(this.serializer),t.addTarget=function(o,a){let l;const h=a.target;if(l=Zs(h)?{documents:Sg(o,h)}:{query:Rg(o,h)._t},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=Ig(o,a.resumeToken);const d=ro(o,a.expectedCount);d!==null&&(l.expectedCount=d)}else if(a.snapshotVersion.compareTo(z.min())>0){l.readTime=wg(o,a.snapshotVersion.toTimestamp());const d=ro(o,a.expectedCount);d!==null&&(l.expectedCount=d)}return l}(this.serializer,e);const r=Vg(this.serializer,e);r&&(t.labels=r),this.a_(t)}R_(e){const t={};t.database=Dl(this.serializer),t.removeTarget=e,this.a_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mp extends class{}{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new F(x.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,t,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Mo(e,io(t,r),i,o,a)).catch(o=>{throw o.name==="FirebaseError"?(o.code===x.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new F(x.UNKNOWN,o.toString())})}Lo(e,t,r,i,o){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.Lo(e,io(t,r),i,a,l,o)).catch(a=>{throw a.name==="FirebaseError"?(a.code===x.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new F(x.UNKNOWN,a.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class gp{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(At(t),this.D_=!1):O("OnlineStateTracker",t)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pp{constructor(e,t,r,i,o){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=o,this.k_._o(a=>{r.enqueueAndForget(async()=>{$r(this)&&(O("RemoteStore","Restarting streams for network reachability change."),await async function(h){const d=J(h);d.L_.add(4),await Ur(d),d.q_.set("Unknown"),d.L_.delete(4),await Qi(d)}(this))})}),this.q_=new gp(r,i)}}async function Qi(n){if($r(n))for(const e of n.B_)await e(!0)}async function Ur(n){for(const e of n.B_)await e(!1)}function yc(n,e){const t=J(n);t.N_.has(e.targetId)||(t.N_.set(e.targetId,e),Mo(t)?Oo(t):Hn(t).r_()&&Lo(t,e))}function No(n,e){const t=J(n),r=Hn(t);t.N_.delete(e),r.r_()&&Ec(t,e),t.N_.size===0&&(r.r_()?r.o_():$r(t)&&t.q_.set("Unknown"))}function Lo(n,e){if(n.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(z.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Hn(n).A_(e)}function Ec(n,e){n.Q_.xe(e),Hn(n).R_(e)}function Oo(n){n.Q_=new _g({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>n.N_.get(e)||null,tt:()=>n.datastore.serializer.databaseId}),Hn(n).start(),n.q_.v_()}function Mo(n){return $r(n)&&!Hn(n).n_()&&n.N_.size>0}function $r(n){return J(n).L_.size===0}function Tc(n){n.Q_=void 0}async function _p(n){n.q_.set("Online")}async function vp(n){n.N_.forEach((e,t)=>{Lo(n,e)})}async function yp(n,e){Tc(n),Mo(n)?(n.q_.M_(e),Oo(n)):n.q_.set("Unknown")}async function Ep(n,e,t){if(n.q_.set("Online"),e instanceof ac&&e.state===2&&e.cause)try{await async function(i,o){const a=o.cause;for(const l of o.targetIds)i.N_.has(l)&&(await i.remoteSyncer.rejectListen(l,a),i.N_.delete(l),i.Q_.removeTarget(l))}(n,e)}catch(r){O("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Fl(n,r)}else if(e instanceof yi?n.Q_.Ke(e):e instanceof oc?n.Q_.He(e):n.Q_.We(e),!t.isEqual(z.min()))try{const r=await pc(n.localStore);t.compareTo(r)>=0&&await function(o,a){const l=o.Q_.rt(a);return l.targetChanges.forEach((h,d)=>{if(h.resumeToken.approximateByteSize()>0){const m=o.N_.get(d);m&&o.N_.set(d,m.withResumeToken(h.resumeToken,a))}}),l.targetMismatches.forEach((h,d)=>{const m=o.N_.get(h);if(!m)return;o.N_.set(h,m.withResumeToken(De.EMPTY_BYTE_STRING,m.snapshotVersion)),Ec(o,h);const _=new kt(m.target,h,d,m.sequenceNumber);Lo(o,_)}),o.remoteSyncer.applyRemoteEvent(l)}(n,t)}catch(r){O("RemoteStore","Failed to raise snapshot:",r),await Fl(n,r)}}async function Fl(n,e,t){if(!Gn(e))throw e;n.L_.add(1),await Ur(n),n.q_.set("Offline"),t||(t=()=>pc(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{O("RemoteStore","Retrying IndexedDB access"),await t(),n.L_.delete(1),await Qi(n)})}async function Bl(n,e){const t=J(n);t.asyncQueue.verifyOperationInProgress(),O("RemoteStore","RemoteStore received new credentials");const r=$r(t);t.L_.add(3),await Ur(t),r&&t.q_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.L_.delete(3),await Qi(t)}async function Tp(n,e){const t=J(n);e?(t.L_.delete(2),await Qi(t)):e||(t.L_.add(2),await Ur(t),t.q_.set("Unknown"))}function Hn(n){return n.K_||(n.K_=function(t,r,i){const o=J(t);return o.w_(),new fp(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(n.datastore,n.asyncQueue,{Eo:_p.bind(null,n),Ro:vp.bind(null,n),mo:yp.bind(null,n),d_:Ep.bind(null,n)}),n.B_.push(async e=>{e?(n.K_.s_(),Mo(n)?Oo(n):n.q_.set("Unknown")):(await n.K_.stop(),Tc(n))})),n.K_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fo{constructor(e,t,r,i,o){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new Ot,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,o){const a=Date.now()+r,l=new Fo(e,t,a,i,o);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new F(x.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function wc(n,e){if(At("AsyncQueue",`${e}: ${n}`),Gn(n))return new F(x.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(e){this.comparator=e?(t,r)=>e(t,r)||$.comparator(t.key,r.key):(t,r)=>$.comparator(t.key,r.key),this.keyedMap=dr(),this.sortedSet=new _e(this.comparator)}static emptySet(e){return new Pn(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Pn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,o=r.getNext().key;if(!i.isEqual(o))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Pn;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ul{constructor(){this.W_=new _e($.comparator)}track(e){const t=e.doc.key,r=this.W_.get(t);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(t,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(t):e.type===1&&r.type===2?this.W_=this.W_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):G():this.W_=this.W_.insert(t,e)}G_(){const e=[];return this.W_.inorderTraversal((t,r)=>{e.push(r)}),e}}class Mn{constructor(e,t,r,i,o,a,l,h,d){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=h,this.hasCachedResults=d}static fromInitialDocuments(e,t,r,i,o){const a=[];return t.forEach(l=>{a.push({type:0,doc:l})}),new Mn(e,t,Pn.emptySet(t),a,r,i,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&zi(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wp{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class Ip{constructor(){this.queries=$l(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(t,r){const i=J(t),o=i.queries;i.queries=$l(),o.forEach((a,l)=>{for(const h of l.j_)h.onError(r)})})(this,new F(x.ABORTED,"Firestore shutting down"))}}function $l(){return new pn(n=>Xu(n),zi)}async function Ic(n,e){const t=J(n);let r=3;const i=e.query;let o=t.queries.get(i);o?!o.H_()&&e.J_()&&(r=2):(o=new wp,r=e.J_()?0:1);try{switch(r){case 0:o.z_=await t.onListen(i,!0);break;case 1:o.z_=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(a){const l=wc(a,`Initialization of query '${In(e.query)}' failed`);return void e.onError(l)}t.queries.set(i,o),o.j_.push(e),e.Z_(t.onlineState),o.z_&&e.X_(o.z_)&&Bo(t)}async function Ac(n,e){const t=J(n),r=e.query;let i=3;const o=t.queries.get(r);if(o){const a=o.j_.indexOf(e);a>=0&&(o.j_.splice(a,1),o.j_.length===0?i=e.J_()?0:1:!o.H_()&&e.J_()&&(i=2))}switch(i){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function Ap(n,e){const t=J(n);let r=!1;for(const i of e){const o=i.query,a=t.queries.get(o);if(a){for(const l of a.j_)l.X_(i)&&(r=!0);a.z_=i}}r&&Bo(t)}function bp(n,e,t){const r=J(n),i=r.queries.get(e);if(i)for(const o of i.j_)o.onError(t);r.queries.delete(e)}function Bo(n){n.Y_.forEach(e=>{e.next()})}var oo,jl;(jl=oo||(oo={})).ea="default",jl.Cache="cache";class bc{constructor(e,t,r){this.query=e,this.ta=t,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Mn(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.na?this.ia(e)&&(this.ta.next(e),t=!0):this.sa(e,this.onlineState)&&(this.oa(e),t=!0),this.ra=e,t}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let t=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),t=!0),t}sa(e,t){if(!e.fromCache||!this.J_())return!0;const r=t!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const t=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}oa(e){e=Mn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==oo.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cc{constructor(e){this.key=e}}class Sc{constructor(e){this.key=e}}class Cp{constructor(e,t){this.query=e,this.Ta=t,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=ee(),this.mutatedKeys=ee(),this.Aa=Yu(e),this.Ra=new Pn(this.Aa)}get Va(){return this.Ta}ma(e,t){const r=t?t.fa:new Ul,i=t?t.Ra:this.Ra;let o=t?t.mutatedKeys:this.mutatedKeys,a=i,l=!1;const h=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,d=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((m,_)=>{const y=i.get(m),b=Gi(this.query,_)?_:null,C=!!y&&this.mutatedKeys.has(y.key),R=!!b&&(b.hasLocalMutations||this.mutatedKeys.has(b.key)&&b.hasCommittedMutations);let P=!1;y&&b?y.data.isEqual(b.data)?C!==R&&(r.track({type:3,doc:b}),P=!0):this.ga(y,b)||(r.track({type:2,doc:b}),P=!0,(h&&this.Aa(b,h)>0||d&&this.Aa(b,d)<0)&&(l=!0)):!y&&b?(r.track({type:0,doc:b}),P=!0):y&&!b&&(r.track({type:1,doc:y}),P=!0,(h||d)&&(l=!0)),P&&(b?(a=a.add(b),o=R?o.add(m):o.delete(m)):(a=a.delete(m),o=o.delete(m)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const m=this.query.limitType==="F"?a.last():a.first();a=a.delete(m.key),o=o.delete(m.key),r.track({type:1,doc:m})}return{Ra:a,fa:r,ns:l,mutatedKeys:o}}ga(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,i){const o=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const a=e.fa.G_();a.sort((m,_)=>function(b,C){const R=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return G()}};return R(b)-R(C)}(m.type,_.type)||this.Aa(m.doc,_.doc)),this.pa(r),i=i!=null&&i;const l=t&&!i?this.ya():[],h=this.da.size===0&&this.current&&!i?1:0,d=h!==this.Ea;return this.Ea=h,a.length!==0||d?{snapshot:new Mn(this.query,e.Ra,o,a,e.mutatedKeys,h===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Ul,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(t=>this.Ta=this.Ta.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ta=this.Ta.delete(t)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=ee(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const t=[];return e.forEach(r=>{this.da.has(r)||t.push(new Sc(r))}),this.da.forEach(r=>{e.has(r)||t.push(new Cc(r))}),t}ba(e){this.Ta=e.Ts,this.da=ee();const t=this.ma(e.documents);return this.applyChanges(t,!0)}Da(){return Mn.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class Sp{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class Rp{constructor(e){this.key=e,this.va=!1}}class Pp{constructor(e,t,r,i,o,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.Ca={},this.Fa=new pn(l=>Xu(l),zi),this.Ma=new Map,this.xa=new Set,this.Oa=new _e($.comparator),this.Na=new Map,this.La=new ko,this.Ba={},this.ka=new Map,this.qa=On.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function Vp(n,e,t=!0){const r=Dc(n);let i;const o=r.Fa.get(e);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),i=o.view.Da()):i=await Rc(r,e,t,!0),i}async function kp(n,e){const t=Dc(n);await Rc(t,e,!0,!1)}async function Rc(n,e,t,r){const i=await sp(n.localStore,at(e)),o=i.targetId,a=n.sharedClientState.addLocalQueryTarget(o,t);let l;return r&&(l=await Dp(n,e,o,a==="current",i.resumeToken)),n.isPrimaryClient&&t&&yc(n.remoteStore,i),l}async function Dp(n,e,t,r,i){n.Ka=(_,y,b)=>async function(R,P,N,U){let j=P.view.ma(N);j.ns&&(j=await Ll(R.localStore,P.query,!1).then(({documents:A})=>P.view.ma(A,j)));const B=U&&U.targetChanges.get(P.targetId),W=U&&U.targetMismatches.get(P.targetId)!=null,H=P.view.applyChanges(j,R.isPrimaryClient,B,W);return zl(R,P.targetId,H.wa),H.snapshot}(n,_,y,b);const o=await Ll(n.localStore,e,!0),a=new Cp(e,o.Ts),l=a.ma(o.documents),h=Br.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),d=a.applyChanges(l,n.isPrimaryClient,h);zl(n,t,d.wa);const m=new Sp(e,t,a);return n.Fa.set(e,m),n.Ma.has(t)?n.Ma.get(t).push(e):n.Ma.set(t,[e]),d.snapshot}async function xp(n,e,t){const r=J(n),i=r.Fa.get(e),o=r.Ma.get(i.targetId);if(o.length>1)return r.Ma.set(i.targetId,o.filter(a=>!zi(a,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await so(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),t&&No(r.remoteStore,i.targetId),ao(r,i.targetId)}).catch(Bi)):(ao(r,i.targetId),await so(r.localStore,i.targetId,!0))}async function Np(n,e){const t=J(n),r=t.Fa.get(e),i=t.Ma.get(r.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),No(t.remoteStore,r.targetId))}async function Pc(n,e){const t=J(n);try{const r=await rp(t.localStore,e);e.targetChanges.forEach((i,o)=>{const a=t.Na.get(o);a&&(de(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?a.va=!0:i.modifiedDocuments.size>0?de(a.va):i.removedDocuments.size>0&&(de(a.va),a.va=!1))}),await kc(t,r,e)}catch(r){await Bi(r)}}function ql(n,e,t){const r=J(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.Fa.forEach((o,a)=>{const l=a.view.Z_(e);l.snapshot&&i.push(l.snapshot)}),function(a,l){const h=J(a);h.onlineState=l;let d=!1;h.queries.forEach((m,_)=>{for(const y of _.j_)y.Z_(l)&&(d=!0)}),d&&Bo(h)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Lp(n,e,t){const r=J(n);r.sharedClientState.updateQueryState(e,"rejected",t);const i=r.Na.get(e),o=i&&i.key;if(o){let a=new _e($.comparator);a=a.insert(o,Be.newNoDocument(o,z.min()));const l=ee().add(o),h=new Wi(z.min(),new Map,new _e(Z),a,l);await Pc(r,h),r.Oa=r.Oa.remove(o),r.Na.delete(e),Uo(r)}else await so(r.localStore,e,!1).then(()=>ao(r,e,t)).catch(Bi)}function ao(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Ma.get(e))n.Fa.delete(r),t&&n.Ca.$a(r,t);n.Ma.delete(e),n.isPrimaryClient&&n.La.gr(e).forEach(r=>{n.La.containsKey(r)||Vc(n,r)})}function Vc(n,e){n.xa.delete(e.path.canonicalString());const t=n.Oa.get(e);t!==null&&(No(n.remoteStore,t),n.Oa=n.Oa.remove(e),n.Na.delete(t),Uo(n))}function zl(n,e,t){for(const r of t)r instanceof Cc?(n.La.addReference(r.key,e),Op(n,r)):r instanceof Sc?(O("SyncEngine","Document no longer in limbo: "+r.key),n.La.removeReference(r.key,e),n.La.containsKey(r.key)||Vc(n,r.key)):G()}function Op(n,e){const t=e.key,r=t.path.canonicalString();n.Oa.get(t)||n.xa.has(r)||(O("SyncEngine","New document in limbo: "+t),n.xa.add(r),Uo(n))}function Uo(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){const e=n.xa.values().next().value;n.xa.delete(e);const t=new $(he.fromString(e)),r=n.qa.next();n.Na.set(r,new Rp(t)),n.Oa=n.Oa.insert(t,r),yc(n.remoteStore,new kt(at(So(t.path)),r,"TargetPurposeLimboResolution",Ui.oe))}}async function kc(n,e,t){const r=J(n),i=[],o=[],a=[];r.Fa.isEmpty()||(r.Fa.forEach((l,h)=>{a.push(r.Ka(h,e,t).then(d=>{var m;if((d||t)&&r.isPrimaryClient){const _=d?!d.fromCache:(m=t==null?void 0:t.targetChanges.get(h.targetId))===null||m===void 0?void 0:m.current;r.sharedClientState.updateQueryState(h.targetId,_?"current":"not-current")}if(d){i.push(d);const _=xo.Wi(h.targetId,d);o.push(_)}}))}),await Promise.all(a),r.Ca.d_(i),await async function(h,d){const m=J(h);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",_=>k.forEach(d,y=>k.forEach(y.$i,b=>m.persistence.referenceDelegate.addReference(_,y.targetId,b)).next(()=>k.forEach(y.Ui,b=>m.persistence.referenceDelegate.removeReference(_,y.targetId,b)))))}catch(_){if(!Gn(_))throw _;O("LocalStore","Failed to update sequence numbers: "+_)}for(const _ of d){const y=_.targetId;if(!_.fromCache){const b=m.os.get(y),C=b.snapshotVersion,R=b.withLastLimboFreeSnapshotVersion(C);m.os=m.os.insert(y,R)}}}(r.localStore,o))}async function Mp(n,e){const t=J(n);if(!t.currentUser.isEqual(e)){O("SyncEngine","User change. New user:",e.toKey());const r=await gc(t.localStore,e);t.currentUser=e,function(o,a){o.ka.forEach(l=>{l.forEach(h=>{h.reject(new F(x.CANCELLED,a))})}),o.ka.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await kc(t,r.hs)}}function Fp(n,e){const t=J(n),r=t.Na.get(e);if(r&&r.va)return ee().add(r.key);{let i=ee();const o=t.Ma.get(e);if(!o)return i;for(const a of o){const l=t.Fa.get(a);i=i.unionWith(l.view.Va)}return i}}function Dc(n){const e=J(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Pc.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Fp.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Lp.bind(null,e),e.Ca.d_=Ap.bind(null,e.eventManager),e.Ca.$a=bp.bind(null,e.eventManager),e}class Ri{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=_c(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,t){return null}Ha(e,t){return null}za(e){return np(this.persistence,new ep,e.initialUser,this.serializer)}Ga(e){return new mc(Do.Zr,this.serializer)}Wa(e){return new ap}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ri.provider={build:()=>new Ri};class Bp extends Ri{constructor(e){super(),this.cacheSizeBytes=e}ja(e,t){de(this.persistence.referenceDelegate instanceof Si);const r=this.persistence.referenceDelegate.garbageCollector;return new Bg(r,e.asyncQueue,t)}Ga(e){const t=this.cacheSizeBytes!==void 0?Ke.withCacheSize(this.cacheSizeBytes):Ke.DEFAULT;return new mc(r=>Si.Zr(r,t),this.serializer)}}class lo{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>ql(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Mp.bind(null,this.syncEngine),await Tp(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Ip}()}createDatastore(e){const t=_c(e.databaseInfo.databaseId),r=function(o){return new hp(o)}(e.databaseInfo);return function(o,a,l,h){return new mp(o,a,l,h)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,i,o,a,l){return new pp(r,i,o,a,l)}(this.localStore,this.datastore,e.asyncQueue,t=>ql(this.syncEngine,t,0),function(){return Ml.D()?new Ml:new lp}())}createSyncEngine(e,t){return function(i,o,a,l,h,d,m){const _=new Pp(i,o,a,l,h,d);return m&&(_.Qa=!0),_}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(i){const o=J(i);O("RemoteStore","RemoteStore shutting down."),o.L_.add(5),await Ur(o),o.k_.shutdown(),o.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}lo.provider={build:()=>new lo};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):At("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Up{constructor(e,t,r,i,o){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=Fe.UNAUTHENTICATED,this.clientId=ju.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,async a=>{O("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(O("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ot;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=wc(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Os(n,e){n.asyncQueue.verifyOperationInProgress(),O("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await gc(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function Gl(n,e){n.asyncQueue.verifyOperationInProgress();const t=await $p(n);O("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>Bl(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>Bl(e.remoteStore,i)),n._onlineComponents=e}async function $p(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){O("FirestoreClient","Using user provided OfflineComponentProvider");try{await Os(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(i){return i.name==="FirebaseError"?i.code===x.FAILED_PRECONDITION||i.code===x.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(t))throw t;Dn("Error using user provided cache. Falling back to memory cache: "+t),await Os(n,new Ri)}}else O("FirestoreClient","Using default OfflineComponentProvider"),await Os(n,new Bp(void 0));return n._offlineComponents}async function jp(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(O("FirestoreClient","Using user provided OnlineComponentProvider"),await Gl(n,n._uninitializedComponentsProvider._online)):(O("FirestoreClient","Using default OnlineComponentProvider"),await Gl(n,new lo))),n._onlineComponents}async function Nc(n){const e=await jp(n),t=e.eventManager;return t.onListen=Vp.bind(null,e.syncEngine),t.onUnlisten=xp.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=kp.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=Np.bind(null,e.syncEngine),t}function qp(n,e,t={}){const r=new Ot;return n.asyncQueue.enqueueAndForget(async()=>function(o,a,l,h,d){const m=new xc({next:y=>{m.Za(),a.enqueueAndForget(()=>Ac(o,_));const b=y.docs.has(l);!b&&y.fromCache?d.reject(new F(x.UNAVAILABLE,"Failed to get document because the client is offline.")):b&&y.fromCache&&h&&h.source==="server"?d.reject(new F(x.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(y)},error:y=>d.reject(y)}),_=new bc(So(l.path),m,{includeMetadataChanges:!0,_a:!0});return Ic(o,_)}(await Nc(n),n.asyncQueue,e,t,r)),r.promise}function zp(n,e,t={}){const r=new Ot;return n.asyncQueue.enqueueAndForget(async()=>function(o,a,l,h,d){const m=new xc({next:y=>{m.Za(),a.enqueueAndForget(()=>Ac(o,_)),y.fromCache&&h.source==="server"?d.reject(new F(x.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(y)},error:y=>d.reject(y)}),_=new bc(l,m,{includeMetadataChanges:!0,_a:!0});return Ic(o,_)}(await Nc(n),n.asyncQueue,e,t,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lc(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hl=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oc(n,e,t){if(!t)throw new F(x.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Gp(n,e,t,r){if(e===!0&&r===!0)throw new F(x.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Kl(n){if(!$.isDocumentKey(n))throw new F(x.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Wl(n){if($.isDocumentKey(n))throw new F(x.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Hp(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":G()}function Rr(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new F(x.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Hp(n);throw new F(x.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ql{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new F(x.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new F(x.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Gp("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Lc((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new F(x.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new F(x.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new F(x.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Xi{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ql({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new F(x.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new F(x.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ql(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new pm;switch(r.type){case"firstParty":return new Em(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new F(x.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=Hl.get(t);r&&(O("ComponentProvider","Removing Datastore"),Hl.delete(t),r.terminate())}(this),Promise.resolve()}}function Kp(n,e,t,r={}){var i;const o=(n=Rr(n,Xi))._getSettings(),a=`${e}:${t}`;if(o.host!=="firestore.googleapis.com"&&o.host!==a&&Dn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},o),{host:a,ssl:!1})),r.mockUserToken){let l,h;if(typeof r.mockUserToken=="string")l=r.mockUserToken,h=Fe.MOCK_USER;else{l=Au(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const d=r.mockUserToken.sub||r.mockUserToken.user_id;if(!d)throw new F(x.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");h=new Fe(d)}n._authCredentials=new _m(new $u(l,h))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Yi(this.firestore,e,this._query)}}class lt{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Mt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new lt(this.firestore,e,this._key)}}class Mt extends Yi{constructor(e,t,r){super(e,t,So(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new lt(this.firestore,null,new $(e))}withConverter(e){return new Mt(this.firestore,e,this._path)}}function Ji(n,e,...t){if(n=Mr(n),Oc("collection","path",e),n instanceof Xi){const r=he.fromString(e,...t);return Wl(r),new Mt(n,null,r)}{if(!(n instanceof lt||n instanceof Mt))throw new F(x.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(he.fromString(e,...t));return Wl(r),new Mt(n.firestore,null,r)}}function Wp(n,e,...t){if(n=Mr(n),arguments.length===1&&(e=ju.newId()),Oc("doc","path",e),n instanceof Xi){const r=he.fromString(e,...t);return Kl(r),new lt(n,null,new $(r))}{if(!(n instanceof lt||n instanceof Mt))throw new F(x.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(he.fromString(e,...t));return Kl(r),new lt(n.firestore,n instanceof Mt?n.converter:null,new $(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xl{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new vc(this,"async_queue_retry"),this.Vu=()=>{const r=Ls();r&&O("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const t=Ls();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const t=Ls();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const t=new Ot;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Gn(e))throw e;O("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const t=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(a){let l=a.message||"";return a.stack&&(l=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),l}(r);throw At("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=t,t}enqueueAfterDelay(e,t,r){this.fu(),this.Ru.indexOf(e)>-1&&(t=0);const i=Fo.createAndSchedule(this,e,t,r,o=>this.yu(o));return this.Tu.push(i),i}fu(){this.Eu&&G()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const t of this.Tu)if(t.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Tu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const t=this.Tu.indexOf(e);this.Tu.splice(t,1)}}class $o extends Xi{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=new Xl,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Xl(e),this._firestoreClient=void 0,await e}}}function Qp(n,e){const t=typeof n=="object"?n:Du(),r=typeof n=="string"?n:"(default)",i=Pu(t,"firestore").getImmediate({identifier:r});if(!i._initialized){const o=wu("firestore");o&&Kp(i,...o)}return i}function Mc(n){if(n._terminated)throw new F(x.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Xp(n),n._firestoreClient}function Xp(n){var e,t,r;const i=n._freezeSettings(),o=function(l,h,d,m){return new Lm(l,h,d,m.host,m.ssl,m.experimentalForceLongPolling,m.experimentalAutoDetectLongPolling,Lc(m.experimentalLongPollingOptions),m.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._componentsProvider||!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),n._firestoreClient=new Up(n._authCredentials,n._appCheckCredentials,n._queue,o,n._componentsProvider&&function(l){const h=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(h),_online:h}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Pi(De.fromBase64String(e))}catch(t){throw new F(x.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Pi(De.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fc{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new F(x.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new He(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yp{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new F(x.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new F(x.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Z(this._lat,e._lat)||Z(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jp{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==i[o])return!1;return!0}(this._values,e._values)}}const Zp=new RegExp("[~\\*/\\[\\]]");function e_(n,e,t){if(e.search(Zp)>=0)throw Yl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n);try{return new Fc(...e.split("."))._internalPath}catch{throw Yl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n)}}function Yl(n,e,t,r,i){let o=`Function ${e}() called with invalid data`;o+=". ";let a="";return new F(x.INVALID_ARGUMENT,o+n+a)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bc{constructor(e,t,r,i,o){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new lt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new t_(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Uc("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class t_ extends Bc{data(){return super.data()}}function Uc(n,e){return typeof e=="string"?e_(n,e):e instanceof Fc?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n_(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new F(x.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class r_{convertValue(e,t="none"){switch($t(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ge(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Ut(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw G()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Fr(e,(i,o)=>{r[i]=this.convertValue(o,t)}),r}convertVectorValue(e){var t,r,i;const o=(i=(r=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(a=>ge(a.doubleValue));return new Jp(o)}convertGeoPoint(e){return new Yp(ge(e.latitude),ge(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=ji(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(br(e));default:return null}}convertTimestamp(e){const t=Bt(e);return new We(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=he.fromString(e);de(fc(r));const i=new Cr(r.get(1),r.get(3)),o=new $(r.popFirst(5));return i.isEqual(t)||At(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class $c extends Bc{constructor(e,t,r,i,o,a){super(e,t,r,i,a),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Ei(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Uc("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class Ei extends $c{data(e={}){return super.data(e)}}class i_{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new mr(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new Ei(this._firestore,this._userDataWriter,r.key,r,new mr(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new F(x.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,o){if(i._snapshot.oldDocs.isEmpty()){let a=0;return i._snapshot.docChanges.map(l=>{const h=new Ei(i._firestore,i._userDataWriter,l.doc.key,l.doc,new mr(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:h,oldIndex:-1,newIndex:a++}})}{let a=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>o||l.type!==3).map(l=>{const h=new Ei(i._firestore,i._userDataWriter,l.doc.key,l.doc,new mr(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let d=-1,m=-1;return l.type!==0&&(d=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),m=a.indexOf(l.doc.key)),{type:s_(l.type),doc:h,oldIndex:d,newIndex:m}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function s_(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return G()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o_(n){n=Rr(n,lt);const e=Rr(n.firestore,$o);return qp(Mc(e),n._key).then(t=>a_(e,n,t))}class jc extends r_{constructor(e){super(),this.firestore=e}convertBytes(e){return new Pi(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new lt(this.firestore,null,t)}}function Zi(n){n=Rr(n,Yi);const e=Rr(n.firestore,$o),t=Mc(e),r=new jc(e);return n_(n._query),zp(t,n._query).then(i=>new i_(e,r,n,i))}function a_(n,e,t){const r=t.docs.get(e._key),i=new jc(n);return new $c(n,i,e._key,r,new mr(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(i){zn=i})(Vu),wr(new kn("firestore",(r,{instanceIdentifier:i,options:o})=>{const a=r.getProvider("app").getImmediate(),l=new $o(new vm(r.getProvider("auth-internal")),new wm(r.getProvider("app-check-internal")),function(d,m){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new F(x.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Cr(d.options.projectId,m)}(a,i),a);return o=Object.assign({useFetchStreams:t},o),l._setSettings(o),l},"PUBLIC").setMultipleInstances(!0)),Lt(hl,"4.7.4",e),Lt(hl,"4.7.4","esm2017")})();var l_="firebase",u_="11.0.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Lt(l_,u_,"app");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qc="firebasestorage.googleapis.com",zc="storageBucket",c_=2*60*1e3,h_=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce extends gn{constructor(e,t,r=0){super(Ms(e),`Firebase Storage: ${t} (${Ms(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Ce.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Ms(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var be;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(be||(be={}));function Ms(n){return"storage/"+n}function Gc(){const n="An unknown error occurred, please check the error payload for server response.";return new Ce(be.UNKNOWN,n)}function d_(n){return new Ce(be.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function f_(n){return new Ce(be.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function m_(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Ce(be.UNAUTHENTICATED,n)}function g_(){return new Ce(be.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function p_(n){return new Ce(be.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function __(){return new Ce(be.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function v_(){return new Ce(be.CANCELED,"User canceled the upload/download.")}function y_(n){return new Ce(be.INVALID_URL,"Invalid URL '"+n+"'.")}function E_(n){return new Ce(be.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function T_(){return new Ce(be.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+zc+"' property when initializing the app?")}function w_(){return new Ce(be.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function uo(n){return new Ce(be.INVALID_ARGUMENT,n)}function Hc(){return new Ce(be.APP_DELETED,"The Firebase app was deleted.")}function I_(n){return new Ce(be.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function ur(n){throw new Ce(be.INTERNAL_ERROR,"Internal error: "+n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let r;try{r=Ye.makeFromUrl(e,t)}catch{return new Ye(e,"")}if(r.path==="")return r;throw E_(e)}static makeFromUrl(e,t){let r=null;const i="([A-Za-z0-9.\\-_]+)";function o(B){B.path.charAt(B.path.length-1)==="/"&&(B.path_=B.path_.slice(0,-1))}const a="(/(.*))?$",l=new RegExp("^gs://"+i+a,"i"),h={bucket:1,path:3};function d(B){B.path_=decodeURIComponent(B.path)}const m="v[A-Za-z0-9_]+",_=t.replace(/[.]/g,"\\."),y="(/([^?#]*).*)?$",b=new RegExp(`^https?://${_}/${m}/b/${i}/o${y}`,"i"),C={bucket:1,path:3},R=t===qc?"(?:storage.googleapis.com|storage.cloud.google.com)":t,P="([^?#]*)",N=new RegExp(`^https?://${R}/${i}/${P}`,"i"),j=[{regex:l,indices:h,postModify:o},{regex:b,indices:C,postModify:d},{regex:N,indices:{bucket:1,path:2},postModify:d}];for(let B=0;B<j.length;B++){const W=j[B],H=W.regex.exec(e);if(H){const A=H[W.indices.bucket];let p=H[W.indices.path];p||(p=""),r=new Ye(A,p),W.postModify(r);break}}if(r==null)throw y_(e);return r}}class A_{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b_(n,e,t){let r=1,i=null,o=null,a=!1,l=0;function h(){return l===2}let d=!1;function m(...P){d||(d=!0,e.apply(null,P))}function _(P){i=setTimeout(()=>{i=null,n(b,h())},P)}function y(){o&&clearTimeout(o)}function b(P,...N){if(d){y();return}if(P){y(),m.call(null,P,...N);return}if(h()||a){y(),m.call(null,P,...N);return}r<64&&(r*=2);let j;l===1?(l=2,j=0):j=(r+Math.random())*1e3,_(j)}let C=!1;function R(P){C||(C=!0,y(),!d&&(i!==null?(P||(l=2),clearTimeout(i),_(0)):P||(l=1)))}return _(0),o=setTimeout(()=>{a=!0,R(!0)},t),R}function C_(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S_(n){return n!==void 0}function R_(n){return typeof n=="object"&&!Array.isArray(n)}function Kc(n){return typeof n=="string"||n instanceof String}function Jl(n,e,t,r){if(r<e)throw uo(`Invalid value for '${n}'. Expected ${e} or greater.`);if(r>t)throw uo(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wc(n,e,t){let r=e;return t==null&&(r=`https://${e}`),`${t}://${r}/v0${n}`}function Qc(n){const e=encodeURIComponent;let t="?";for(const r in n)if(n.hasOwnProperty(r)){const i=e(r)+"="+e(n[r]);t=t+i+"&"}return t=t.slice(0,-1),t}var un;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(un||(un={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P_(n,e){const t=n>=500&&n<600,i=[408,429].indexOf(n)!==-1,o=e.indexOf(n)!==-1;return t||i||o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V_{constructor(e,t,r,i,o,a,l,h,d,m,_,y=!0){this.url_=e,this.method_=t,this.headers_=r,this.body_=i,this.successCodes_=o,this.additionalRetryCodes_=a,this.callback_=l,this.errorCallback_=h,this.timeout_=d,this.progressCallback_=m,this.connectionFactory_=_,this.retry=y,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((b,C)=>{this.resolve_=b,this.reject_=C,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new mi(!1,null,!0));return}const o=this.connectionFactory_();this.pendingConnection_=o;const a=l=>{const h=l.loaded,d=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(h,d)};this.progressCallback_!==null&&o.addUploadProgressListener(a),o.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&o.removeUploadProgressListener(a),this.pendingConnection_=null;const l=o.getErrorCode()===un.NO_ERROR,h=o.getStatus();if(!l||P_(h,this.additionalRetryCodes_)&&this.retry){const m=o.getErrorCode()===un.ABORT;r(!1,new mi(!1,null,m));return}const d=this.successCodes_.indexOf(h)!==-1;r(!0,new mi(d,o))})},t=(r,i)=>{const o=this.resolve_,a=this.reject_,l=i.connection;if(i.wasSuccessCode)try{const h=this.callback_(l,l.getResponse());S_(h)?o(h):o()}catch(h){a(h)}else if(l!==null){const h=Gc();h.serverResponse=l.getErrorText(),this.errorCallback_?a(this.errorCallback_(l,h)):a(h)}else if(i.canceled){const h=this.appDelete_?Hc():v_();a(h)}else{const h=__();a(h)}};this.canceled_?t(!1,new mi(!1,null,!0)):this.backoffId_=b_(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&C_(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class mi{constructor(e,t,r){this.wasSuccessCode=e,this.connection=t,this.canceled=!!r}}function k_(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function D_(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function x_(n,e){e&&(n["X-Firebase-GMPID"]=e)}function N_(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function L_(n,e,t,r,i,o,a=!0){const l=Qc(n.urlParams),h=n.url+l,d=Object.assign({},n.headers);return x_(d,e),k_(d,t),D_(d,o),N_(d,r),new V_(h,n.method,d,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,i,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xc(n){let e;try{e=JSON.parse(n)}catch{return null}return R_(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O_(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function M_(n,e){const t=e.split("/").filter(r=>r.length>0).join("/");return n.length===0?t:n+"/"+t}function Yc(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F_(n,e){return e}class qe{constructor(e,t,r,i){this.server=e,this.local=t||e,this.writable=!!r,this.xform=i||F_}}let gi=null;function B_(n){return!Kc(n)||n.length<2?n:Yc(n)}function U_(){if(gi)return gi;const n=[];n.push(new qe("bucket")),n.push(new qe("generation")),n.push(new qe("metageneration")),n.push(new qe("name","fullPath",!0));function e(o,a){return B_(a)}const t=new qe("name");t.xform=e,n.push(t);function r(o,a){return a!==void 0?Number(a):a}const i=new qe("size");return i.xform=r,n.push(i),n.push(new qe("timeCreated")),n.push(new qe("updated")),n.push(new qe("md5Hash",null,!0)),n.push(new qe("cacheControl",null,!0)),n.push(new qe("contentDisposition",null,!0)),n.push(new qe("contentEncoding",null,!0)),n.push(new qe("contentLanguage",null,!0)),n.push(new qe("contentType",null,!0)),n.push(new qe("metadata","customMetadata",!0)),gi=n,gi}function $_(n,e){function t(){const r=n.bucket,i=n.fullPath,o=new Ye(r,i);return e._makeStorageReference(o)}Object.defineProperty(n,"ref",{get:t})}function j_(n,e,t){const r={};r.type="file";const i=t.length;for(let o=0;o<i;o++){const a=t[o];r[a.local]=a.xform(r,e[a.server])}return $_(r,n),r}function q_(n,e,t){const r=Xc(e);return r===null?null:j_(n,r,t)}function z_(n,e,t,r){const i=Xc(e);if(i===null||!Kc(i.downloadTokens))return null;const o=i.downloadTokens;if(o.length===0)return null;const a=encodeURIComponent;return o.split(",").map(d=>{const m=n.bucket,_=n.fullPath,y="/b/"+a(m)+"/o/"+a(_),b=Wc(y,t,r),C=Qc({alt:"media",token:d});return b+C})[0]}class G_{constructor(e,t,r,i){this.url=e,this.method=t,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H_(n){if(!n)throw Gc()}function K_(n,e){function t(r,i){const o=q_(n,i,e);return H_(o!==null),z_(o,i,n.host,n._protocol)}return t}function W_(n){function e(t,r){let i;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?i=g_():i=m_():t.getStatus()===402?i=f_(n.bucket):t.getStatus()===403?i=p_(n.path):i=r,i.status=t.getStatus(),i.serverResponse=r.serverResponse,i}return e}function Q_(n){const e=W_(n);function t(r,i){let o=e(r,i);return r.getStatus()===404&&(o=d_(n.path)),o.serverResponse=i.serverResponse,o}return t}function X_(n,e,t){const r=e.fullServerUrl(),i=Wc(r,n.host,n._protocol),o="GET",a=n.maxOperationRetryTime,l=new G_(i,o,K_(n,t),a);return l.errorHandler=Q_(e),l}class Y_{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=un.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=un.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=un.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,r,i){if(this.sent_)throw ur("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),i!==void 0)for(const o in i)i.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,i[o].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw ur("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw ur("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw ur("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw ur("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class J_ extends Y_{initXhr(){this.xhr_.responseType="text"}}function Z_(){return new J_}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(e,t){this._service=e,t instanceof Ye?this._location=t:this._location=Ye.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new hn(e,t)}get root(){const e=new Ye(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Yc(this._location.path)}get storage(){return this._service}get parent(){const e=O_(this._location.path);if(e===null)return null;const t=new Ye(this._location.bucket,e);return new hn(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw I_(e)}}function ev(n){n._throwIfRoot("getDownloadURL");const e=X_(n.storage,n._location,U_());return n.storage.makeRequestWithTokens(e,Z_).then(t=>{if(t===null)throw w_();return t})}function tv(n,e){const t=M_(n._location.path,e),r=new Ye(n._location.bucket,t);return new hn(n.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nv(n){return/^[A-Za-z]+:\/\//.test(n)}function rv(n,e){return new hn(n,e)}function Jc(n,e){if(n instanceof jo){const t=n;if(t._bucket==null)throw T_();const r=new hn(t,t._bucket);return e!=null?Jc(r,e):r}else return e!==void 0?tv(n,e):n}function iv(n,e){if(e&&nv(e)){if(n instanceof jo)return rv(n,e);throw uo("To use ref(service, url), the first argument must be a Storage instance.")}else return Jc(n,e)}function Zl(n,e){const t=e==null?void 0:e[zc];return t==null?null:Ye.makeFromBucketSpec(t,n)}function sv(n,e,t,r={}){n.host=`${e}:${t}`,n._protocol="http";const{mockUserToken:i}=r;i&&(n._overrideAuthToken=typeof i=="string"?i:Au(i,n.app.options.projectId))}class jo{constructor(e,t,r,i,o){this.app=e,this._authProvider=t,this._appCheckProvider=r,this._url=i,this._firebaseVersion=o,this._bucket=null,this._host=qc,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=c_,this._maxUploadRetryTime=h_,this._requests=new Set,i!=null?this._bucket=Ye.makeFromBucketSpec(i,this._host):this._bucket=Zl(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Ye.makeFromBucketSpec(this._url,e):this._bucket=Zl(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Jl("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Jl("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new hn(this,e)}_makeRequest(e,t,r,i,o=!0){if(this._deleted)return new A_(Hc());{const a=L_(e,this._appId,r,i,t,this._firebaseVersion,o);return this._requests.add(a),a.getPromise().then(()=>this._requests.delete(a),()=>this._requests.delete(a)),a}}async makeRequestWithTokens(e,t){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,r,i).getPromise()}}const eu="@firebase/storage",tu="0.13.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zc="storage";function yt(n){return n=Mr(n),ev(n)}function Et(n,e){return n=Mr(n),iv(n,e)}function ov(n=Du(),e){n=Mr(n);const r=Pu(n,Zc).getImmediate({identifier:e}),i=wu("storage");return i&&av(r,...i),r}function av(n,e,t,r={}){sv(n,e,t,r)}function lv(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),r=n.getProvider("auth-internal"),i=n.getProvider("app-check-internal");return new jo(t,r,i,e,Vu)}function uv(){wr(new kn(Zc,lv,"PUBLIC").setMultipleInstances(!0)),Lt(eu,tu,""),Lt(eu,tu,"esm2017")}uv();const cv={apiKey:"AIzaSyBajD3HY-GZtXtQmLz3oiJaHhbQJHTQazo",authDomain:"exploration-7fe74.firebaseapp.com",projectId:"exploration-7fe74",storageBucket:"exploration-7fe74.appspot.com",messagingSenderId:"500005795974",appId:"1:500005795974:web:c9c046f31638e3a372f907",measurementId:"G-2FSF74LHN2"},eh=ku(cv),jr=Qp(eh),Tt=ov(eh),wt="gs://exploration-7fe74.appspot.com",hv={data(){return{certifications:[],loading:!0}},async mounted(){await this.getCertifications(),this.loading=!1},methods:{async getCertifications(){const e=(await Zi(Ji(jr,"certifications"))).docs.map(t=>t.data());this.certifications=await Promise.all(e.map(async t=>({...t,skills:await Promise.all(t.skills.map(async r=>{const i=Et(Tt,`${wt}/icons/${r.icon}`),o=await yt(i);return{name:r.name,icon:o}}))})))}}},dv=[null,"default","comfortable","compact"],Gt=K({density:{type:String,default:"default",validator:n=>dv.includes(n)}},"density");function _n(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:xi();return{densityClasses:M(()=>`${e}--density-${n.density}`)}}const fv=["elevated","flat","tonal","outlined","text","plain"];function es(n,e){return w(ke,null,[n&&w("span",{key:"overlay",class:`${e}__overlay`},null),w("span",{key:"underlay",class:`${e}__underlay`},null)])}const Kn=K({color:String,variant:{type:String,default:"elevated",validator:n=>fv.includes(n)}},"variant");function ts(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:xi();const t=M(()=>{const{variant:o}=$s(n);return`${e}--variant-${o}`}),{colorClasses:r,colorStyles:i}=pd(M(()=>{const{variant:o,color:a}=$s(n);return{[["elevated","flat"].includes(o)?"background":"text"]:a}}));return{colorClasses:r,colorStyles:i,variantClasses:t}}const th=K({baseColor:String,divided:Boolean,...Fn(),...le(),...Gt(),...dn(),...dt(),...we(),...ft(),...Kn()},"VBtnGroup"),nu=te()({name:"VBtnGroup",props:th(),setup(n,e){let{slots:t}=e;const{themeClasses:r}=mt(n),{densityClasses:i}=_n(n),{borderClasses:o}=Bn(n),{elevationClasses:a}=Un(n),{roundedClasses:l}=bt(n);xr({VBtn:{height:"auto",baseColor:Q(n,"baseColor"),color:Q(n,"color"),density:Q(n,"density"),flat:!0,variant:Q(n,"variant")}}),ce(()=>w(n.tag,{class:["v-btn-group",{"v-btn-group--divided":n.divided},r.value,o.value,i.value,a.value,l.value,n.class],style:n.style},t))}}),mv=K({modelValue:{type:null,default:void 0},multiple:Boolean,mandatory:[Boolean,String],max:Number,selectedClass:String,disabled:Boolean},"group"),gv=K({value:null,disabled:Boolean,selectedClass:String},"group-item");function pv(n,e){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;const r=Ni("useGroupItem");if(!r)throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");const i=fu();$n(Symbol.for(`${e.description}:id`),i);const o=Nr(e,null);if(!o){if(!t)return o;throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${e.description}`)}const a=Q(n,"value"),l=M(()=>!!(o.disabled.value||n.disabled));o.register({id:i,value:a,disabled:l},r),Lr(()=>{o.unregister(i)});const h=M(()=>o.isSelected(i)),d=M(()=>o.items.value[0].id===i),m=M(()=>o.items.value[o.items.value.length-1].id===i),_=M(()=>h.value&&[o.selectedClass.value,n.selectedClass]);return vt(h,y=>{r.emit("group:selected",{value:y})},{flush:"sync"}),{id:i,isSelected:h,isFirst:d,isLast:m,toggle:()=>o.select(i,!h.value),select:y=>o.select(i,y),selectedClass:_,value:a,disabled:l,group:o}}function _v(n,e){let t=!1;const r=_d([]),i=Sn(n,"modelValue",[],y=>y==null?[]:nh(r,go(y)),y=>{const b=yv(r,y);return n.multiple?b:b[0]}),o=Ni("useGroup");function a(y,b){const C=y,R=Symbol.for(`${e.description}:id`),N=Ed(R,o==null?void 0:o.vnode).indexOf(b);$s(C.value)==null&&(C.value=N,C.useIndexAsValue=!0),N>-1?r.splice(N,0,C):r.push(C)}function l(y){if(t)return;h();const b=r.findIndex(C=>C.id===y);r.splice(b,1)}function h(){const y=r.find(b=>!b.disabled);y&&n.mandatory==="force"&&!i.value.length&&(i.value=[y.id])}vd(()=>{h()}),Lr(()=>{t=!0}),yd(()=>{for(let y=0;y<r.length;y++)r[y].useIndexAsValue&&(r[y].value=y)});function d(y,b){const C=r.find(R=>R.id===y);if(!(b&&(C!=null&&C.disabled)))if(n.multiple){const R=i.value.slice(),P=R.findIndex(U=>U===y),N=~P;if(b=b??!N,N&&n.mandatory&&R.length<=1||!N&&n.max!=null&&R.length+1>n.max)return;P<0&&b?R.push(y):P>=0&&!b&&R.splice(P,1),i.value=R}else{const R=i.value.includes(y);if(n.mandatory&&R)return;i.value=b??!R?[y]:[]}}function m(y){if(n.multiple,i.value.length){const b=i.value[0],C=r.findIndex(N=>N.id===b);let R=(C+y)%r.length,P=r[R];for(;P.disabled&&R!==C;)R=(R+y)%r.length,P=r[R];if(P.disabled)return;i.value=[r[R].id]}else{const b=r.find(C=>!C.disabled);b&&(i.value=[b.id])}}const _={register:a,unregister:l,selected:i,select:d,disabled:Q(n,"disabled"),prev:()=>m(r.length-1),next:()=>m(1),isSelected:y=>i.value.includes(y),selectedClass:M(()=>n.selectedClass),items:M(()=>r),getItemIndex:y=>vv(r,y)};return $n(e,_),_}function vv(n,e){const t=nh(n,[e]);return t.length?n.findIndex(r=>r.id===t[0]):-1}function nh(n,e){const t=[];return e.forEach(r=>{const i=n.find(a=>mu(r,a.value)),o=n[r];(i==null?void 0:i.value)!=null?t.push(i.id):o!=null&&t.push(o.id)}),t}function yv(n,e){const t=[];return e.forEach(r=>{const i=n.findIndex(o=>o.id===r);if(~i){const o=n[i];t.push(o.value!=null?o.value:i)}}),t}const rh=Symbol.for("vuetify:v-btn-toggle"),Ev=K({...th(),...mv()},"VBtnToggle");te()({name:"VBtnToggle",props:Ev(),emits:{"update:modelValue":n=>!0},setup(n,e){let{slots:t}=e;const{isSelected:r,next:i,prev:o,select:a,selected:l}=_v(n,rh);return ce(()=>{const h=nu.filterProps(n);return w(nu,it({class:["v-btn-toggle",n.class]},h,{style:n.style}),{default:()=>{var d;return[(d=t.default)==null?void 0:d.call(t,{isSelected:r,next:i,prev:o,select:a,selected:l})]}})}),{next:i,prev:o,select:a}}});const Tv=K({defaults:Object,disabled:Boolean,reset:[Number,String],root:[Boolean,String],scoped:Boolean},"VDefaultsProvider"),Ze=te(!1)({name:"VDefaultsProvider",props:Tv(),setup(n,e){let{slots:t}=e;const{defaults:r,disabled:i,reset:o,root:a,scoped:l}=Td(n);return xr(r,{reset:o,root:a,scoped:l,disabled:i}),()=>{var h;return(h=t.default)==null?void 0:h.call(t)}}}),wv=K({color:String,disabled:Boolean,start:Boolean,end:Boolean,icon:Ue,...le(),...Or(),...we({tag:"i"}),...ft()},"VIcon"),et=te()({name:"VIcon",props:wv(),setup(n,e){let{attrs:t,slots:r}=e;const i=Ge(),{themeClasses:o}=mt(n),{iconData:a}=wd(M(()=>i.value||n.icon)),{sizeClasses:l}=Li(n),{textColorClasses:h,textColorStyles:d}=Oi(Q(n,"color"));return ce(()=>{var y,b;const m=(y=r.default)==null?void 0:y.call(r);m&&(i.value=(b=Id(m).filter(C=>C.type===Ad&&C.children&&typeof C.children=="string")[0])==null?void 0:b.children);const _=!!(t.onClick||t.onClickOnce);return w(a.value.component,{tag:n.tag,icon:a.value.icon,class:["v-icon","notranslate",o.value,l.value,h.value,{"v-icon--clickable":_,"v-icon--disabled":n.disabled,"v-icon--start":n.start,"v-icon--end":n.end},n.class],style:[l.value?void 0:{fontSize:ye(n.size),height:ye(n.size),width:ye(n.size)},d.value,n.style],role:_?"button":void 0,"aria-hidden":!_,tabindex:_?n.disabled?-1:0:void 0},{default:()=>[m]})}),{}}}),ru={center:"center",top:"bottom",bottom:"top",left:"right",right:"left"},qo=K({location:String},"location");function zo(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,t=arguments.length>2?arguments[2]:void 0;const{isRtl:r}=Mi();return{locationStyles:M(()=>{if(!n.location)return{};const{side:o,align:a}=bd(n.location.split(" ").length>1?n.location:`${n.location} center`,r.value);function l(d){return t?t(d):0}const h={};return o!=="center"&&(e?h[ru[o]]=`calc(100% - ${l(o)}px)`:h[o]=0),a!=="center"?e?h[ru[a]]=`calc(100% - ${l(a)}px)`:h[a]=0:(o==="center"?h.top=h.left="50%":h[{top:"left",bottom:"left",left:"top",right:"top"}[o]]="50%",h.transform={top:"translateX(-50%)",bottom:"translateX(-50%)",left:"translateY(-50%)",right:"translateY(-50%)",center:"translate(-50%, -50%)"}[o]),h})}}const Iv=K({absolute:Boolean,active:{type:Boolean,default:!0},bgColor:String,bgOpacity:[Number,String],bufferValue:{type:[Number,String],default:0},bufferColor:String,bufferOpacity:[Number,String],clickable:Boolean,color:String,height:{type:[Number,String],default:4},indeterminate:Boolean,max:{type:[Number,String],default:100},modelValue:{type:[Number,String],default:0},opacity:[Number,String],reverse:Boolean,stream:Boolean,striped:Boolean,roundedBar:Boolean,...le(),...qo({location:"top"}),...dt(),...we(),...ft()},"VProgressLinear"),Av=te()({name:"VProgressLinear",props:Iv(),emits:{"update:modelValue":n=>!0},setup(n,e){var T;let{slots:t}=e;const r=Sn(n,"modelValue"),{isRtl:i,rtlClasses:o}=Mi(),{themeClasses:a}=mt(n),{locationStyles:l}=zo(n),{textColorClasses:h,textColorStyles:d}=Oi(n,"color"),{backgroundColorClasses:m,backgroundColorStyles:_}=sn(M(()=>n.bgColor||n.color)),{backgroundColorClasses:y,backgroundColorStyles:b}=sn(M(()=>n.bufferColor||n.bgColor||n.color)),{backgroundColorClasses:C,backgroundColorStyles:R}=sn(n,"color"),{roundedClasses:P}=bt(n),{intersectionRef:N,isIntersecting:U}=Cd(),j=M(()=>parseFloat(n.max)),B=M(()=>parseFloat(n.height)),W=M(()=>Xa(parseFloat(n.bufferValue)/j.value*100,0,100)),H=M(()=>Xa(parseFloat(r.value)/j.value*100,0,100)),A=M(()=>i.value!==n.reverse),p=M(()=>n.indeterminate?"fade-transition":"slide-x-transition"),v=gu&&((T=window.matchMedia)==null?void 0:T.call(window,"(forced-colors: active)").matches);function I(E){if(!N.value)return;const{left:g,right:ie,width:Se}=N.value.getBoundingClientRect(),tt=A.value?Se-E.clientX+(ie-Se):E.clientX-g;r.value=Math.round(tt/Se*j.value)}return ce(()=>w(n.tag,{ref:N,class:["v-progress-linear",{"v-progress-linear--absolute":n.absolute,"v-progress-linear--active":n.active&&U.value,"v-progress-linear--reverse":A.value,"v-progress-linear--rounded":n.rounded,"v-progress-linear--rounded-bar":n.roundedBar,"v-progress-linear--striped":n.striped},P.value,a.value,o.value,n.class],style:[{bottom:n.location==="bottom"?0:void 0,top:n.location==="top"?0:void 0,height:n.active?ye(B.value):0,"--v-progress-linear-height":ye(B.value),...n.absolute?l.value:{}},n.style],role:"progressbar","aria-hidden":n.active?"false":"true","aria-valuemin":"0","aria-valuemax":n.max,"aria-valuenow":n.indeterminate?void 0:H.value,onClick:n.clickable&&I},{default:()=>[n.stream&&w("div",{key:"stream",class:["v-progress-linear__stream",h.value],style:{...d.value,[A.value?"left":"right"]:ye(-B.value),borderTop:`${ye(B.value/2)} dotted`,opacity:parseFloat(n.bufferOpacity),top:`calc(50% - ${ye(B.value/4)})`,width:ye(100-W.value,"%"),"--v-progress-linear-stream-to":ye(B.value*(A.value?1:-1))}},null),w("div",{class:["v-progress-linear__background",v?void 0:m.value],style:[_.value,{opacity:parseFloat(n.bgOpacity),width:n.stream?0:void 0}]},null),w("div",{class:["v-progress-linear__buffer",v?void 0:y.value],style:[b.value,{opacity:parseFloat(n.bufferOpacity),width:ye(W.value,"%")}]},null),w(Tr,{name:p.value},{default:()=>[n.indeterminate?w("div",{class:"v-progress-linear__indeterminate"},[["long","short"].map(E=>w("div",{key:E,class:["v-progress-linear__indeterminate",E,v?void 0:C.value],style:R.value},null))]):w("div",{class:["v-progress-linear__determinate",v?void 0:C.value],style:[R.value,{width:ye(H.value,"%")}]},null)]}),t.default&&w("div",{class:"v-progress-linear__content"},[t.default({value:H.value,buffer:W.value})])]})),{}}}),ih=K({loading:[Boolean,String]},"loader");function sh(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:xi();return{loaderClasses:M(()=>({[`${e}--loading`]:n.loading}))}}function bv(n,e){var r;let{slots:t}=e;return w("div",{class:`${n.name}__loader`},[((r=t.default)==null?void 0:r.call(t,{color:n.color,isActive:n.active}))||w(Av,{absolute:n.absolute,active:n.active,color:n.color,height:"2",indeterminate:!0},null)])}const Cv=["static","relative","fixed","absolute","sticky"],oh=K({position:{type:String,validator:n=>Cv.includes(n)}},"position");function ah(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:xi();return{positionClasses:M(()=>n.position?`${e}--${n.position}`:void 0)}}function Sv(n,e){vt(()=>{var t;return(t=n.isActive)==null?void 0:t.value},t=>{n.isLink.value&&t&&e&&po(()=>{e(!0)})},{immediate:!0})}const co=Symbol("rippleStop"),Rv=80;function iu(n,e){n.style.transform=e,n.style.webkitTransform=e}function ho(n){return n.constructor.name==="TouchEvent"}function lh(n){return n.constructor.name==="KeyboardEvent"}const Pv=function(n,e){var _;let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=0,i=0;if(!lh(n)){const y=e.getBoundingClientRect(),b=ho(n)?n.touches[n.touches.length-1]:n;r=b.clientX-y.left,i=b.clientY-y.top}let o=0,a=.3;(_=e._ripple)!=null&&_.circle?(a=.15,o=e.clientWidth/2,o=t.center?o:o+Math.sqrt((r-o)**2+(i-o)**2)/4):o=Math.sqrt(e.clientWidth**2+e.clientHeight**2)/2;const l=`${(e.clientWidth-o*2)/2}px`,h=`${(e.clientHeight-o*2)/2}px`,d=t.center?l:`${r-o}px`,m=t.center?h:`${i-o}px`;return{radius:o,scale:a,x:d,y:m,centerX:l,centerY:h}},Vi={show(n,e){var b;let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!((b=e==null?void 0:e._ripple)!=null&&b.enabled))return;const r=document.createElement("span"),i=document.createElement("span");r.appendChild(i),r.className="v-ripple__container",t.class&&(r.className+=` ${t.class}`);const{radius:o,scale:a,x:l,y:h,centerX:d,centerY:m}=Pv(n,e,t),_=`${o*2}px`;i.className="v-ripple__animation",i.style.width=_,i.style.height=_,e.appendChild(r);const y=window.getComputedStyle(e);y&&y.position==="static"&&(e.style.position="relative",e.dataset.previousPosition="static"),i.classList.add("v-ripple__animation--enter"),i.classList.add("v-ripple__animation--visible"),iu(i,`translate(${l}, ${h}) scale3d(${a},${a},${a})`),i.dataset.activated=String(performance.now()),setTimeout(()=>{i.classList.remove("v-ripple__animation--enter"),i.classList.add("v-ripple__animation--in"),iu(i,`translate(${d}, ${m}) scale3d(1,1,1)`)},0)},hide(n){var o;if(!((o=n==null?void 0:n._ripple)!=null&&o.enabled))return;const e=n.getElementsByClassName("v-ripple__animation");if(e.length===0)return;const t=e[e.length-1];if(t.dataset.isHiding)return;t.dataset.isHiding="true";const r=performance.now()-Number(t.dataset.activated),i=Math.max(250-r,0);setTimeout(()=>{t.classList.remove("v-ripple__animation--in"),t.classList.add("v-ripple__animation--out"),setTimeout(()=>{var l;n.getElementsByClassName("v-ripple__animation").length===1&&n.dataset.previousPosition&&(n.style.position=n.dataset.previousPosition,delete n.dataset.previousPosition),((l=t.parentNode)==null?void 0:l.parentNode)===n&&n.removeChild(t.parentNode)},300)},i)}};function uh(n){return typeof n>"u"||!!n}function Pr(n){const e={},t=n.currentTarget;if(!(!(t!=null&&t._ripple)||t._ripple.touched||n[co])){if(n[co]=!0,ho(n))t._ripple.touched=!0,t._ripple.isTouch=!0;else if(t._ripple.isTouch)return;if(e.center=t._ripple.centered||lh(n),t._ripple.class&&(e.class=t._ripple.class),ho(n)){if(t._ripple.showTimerCommit)return;t._ripple.showTimerCommit=()=>{Vi.show(n,t,e)},t._ripple.showTimer=window.setTimeout(()=>{var r;(r=t==null?void 0:t._ripple)!=null&&r.showTimerCommit&&(t._ripple.showTimerCommit(),t._ripple.showTimerCommit=null)},Rv)}else Vi.show(n,t,e)}}function su(n){n[co]=!0}function Xe(n){const e=n.currentTarget;if(e!=null&&e._ripple){if(window.clearTimeout(e._ripple.showTimer),n.type==="touchend"&&e._ripple.showTimerCommit){e._ripple.showTimerCommit(),e._ripple.showTimerCommit=null,e._ripple.showTimer=window.setTimeout(()=>{Xe(n)});return}window.setTimeout(()=>{e._ripple&&(e._ripple.touched=!1)}),Vi.hide(e)}}function ch(n){const e=n.currentTarget;e!=null&&e._ripple&&(e._ripple.showTimerCommit&&(e._ripple.showTimerCommit=null),window.clearTimeout(e._ripple.showTimer))}let Vr=!1;function hh(n){!Vr&&(n.keyCode===Ya.enter||n.keyCode===Ya.space)&&(Vr=!0,Pr(n))}function dh(n){Vr=!1,Xe(n)}function fh(n){Vr&&(Vr=!1,Xe(n))}function mh(n,e,t){const{value:r,modifiers:i}=e,o=uh(r);if(o||Vi.hide(n),n._ripple=n._ripple??{},n._ripple.enabled=o,n._ripple.centered=i.center,n._ripple.circle=i.circle,Sd(r)&&r.class&&(n._ripple.class=r.class),o&&!t){if(i.stop){n.addEventListener("touchstart",su,{passive:!0}),n.addEventListener("mousedown",su);return}n.addEventListener("touchstart",Pr,{passive:!0}),n.addEventListener("touchend",Xe,{passive:!0}),n.addEventListener("touchmove",ch,{passive:!0}),n.addEventListener("touchcancel",Xe),n.addEventListener("mousedown",Pr),n.addEventListener("mouseup",Xe),n.addEventListener("mouseleave",Xe),n.addEventListener("keydown",hh),n.addEventListener("keyup",dh),n.addEventListener("blur",fh),n.addEventListener("dragstart",Xe,{passive:!0})}else!o&&t&&gh(n)}function gh(n){n.removeEventListener("mousedown",Pr),n.removeEventListener("touchstart",Pr),n.removeEventListener("touchend",Xe),n.removeEventListener("touchmove",ch),n.removeEventListener("touchcancel",Xe),n.removeEventListener("mouseup",Xe),n.removeEventListener("mouseleave",Xe),n.removeEventListener("keydown",hh),n.removeEventListener("keyup",dh),n.removeEventListener("dragstart",Xe),n.removeEventListener("blur",fh)}function Vv(n,e){mh(n,e,!1)}function kv(n){delete n._ripple,gh(n)}function Dv(n,e){if(e.value===e.oldValue)return;const t=uh(e.oldValue);mh(n,e,t)}const Go={mounted:Vv,unmounted:kv,updated:Dv},xv=K({active:{type:Boolean,default:void 0},activeColor:String,baseColor:String,symbol:{type:null,default:rh},flat:Boolean,icon:[Boolean,String,Function,Object],prependIcon:Ue,appendIcon:Ue,block:Boolean,readonly:Boolean,slim:Boolean,stacked:Boolean,ripple:{type:[Boolean,Object],default:!0},text:String,...Fn(),...le(),...Gt(),...fn(),...dn(),...gv(),...ih(),...qo(),...oh(),...dt(),..._o(),...Or(),...we({tag:"button"}),...ft(),...Kn({variant:"elevated"})},"VBtn"),nn=te()({name:"VBtn",props:xv(),emits:{"group:selected":n=>!0},setup(n,e){let{attrs:t,slots:r}=e;const{themeClasses:i}=mt(n),{borderClasses:o}=Bn(n),{densityClasses:a}=_n(n),{dimensionStyles:l}=mn(n),{elevationClasses:h}=Un(n),{loaderClasses:d}=sh(n),{locationStyles:m}=zo(n),{positionClasses:_}=ah(n),{roundedClasses:y}=bt(n),{sizeClasses:b,sizeStyles:C}=Li(n),R=pv(n,n.symbol,!1),P=vo(n,t),N=M(()=>{var T;return n.active!==void 0?n.active:P.isLink.value?(T=P.isActive)==null?void 0:T.value:R==null?void 0:R.isSelected.value}),U=M(()=>N.value?n.activeColor??n.color:n.color),j=M(()=>{var E,g;return{color:(R==null?void 0:R.isSelected.value)&&(!P.isLink.value||((E=P.isActive)==null?void 0:E.value))||!R||((g=P.isActive)==null?void 0:g.value)?U.value??n.baseColor:n.baseColor,variant:n.variant}}),{colorClasses:B,colorStyles:W,variantClasses:H}=ts(j),A=M(()=>(R==null?void 0:R.disabled.value)||n.disabled),p=M(()=>n.variant==="elevated"&&!(n.disabled||n.flat||n.border)),v=M(()=>{if(!(n.value===void 0||typeof n.value=="symbol"))return Object(n.value)===n.value?JSON.stringify(n.value,null,0):n.value});function I(T){var E;A.value||P.isLink.value&&(T.metaKey||T.ctrlKey||T.shiftKey||T.button!==0||t.target==="_blank")||((E=P.navigate)==null||E.call(P,T),R==null||R.toggle())}return Sv(P,R==null?void 0:R.select),ce(()=>{const T=P.isLink.value?"a":n.tag,E=!!(n.prependIcon||r.prepend),g=!!(n.appendIcon||r.append),ie=!!(n.icon&&n.icon!==!0);return Vn(w(T,it({type:T==="a"?void 0:"button",class:["v-btn",R==null?void 0:R.selectedClass.value,{"v-btn--active":N.value,"v-btn--block":n.block,"v-btn--disabled":A.value,"v-btn--elevated":p.value,"v-btn--flat":n.flat,"v-btn--icon":!!n.icon,"v-btn--loading":n.loading,"v-btn--readonly":n.readonly,"v-btn--slim":n.slim,"v-btn--stacked":n.stacked},i.value,o.value,B.value,a.value,h.value,d.value,_.value,y.value,b.value,H.value,n.class],style:[W.value,l.value,m.value,C.value,n.style],"aria-busy":n.loading?!0:void 0,disabled:A.value||void 0,tabindex:n.loading||n.readonly?-1:void 0,onClick:I,value:v.value},P.linkProps),{default:()=>{var Se;return[es(!0,"v-btn"),!n.icon&&E&&w("span",{key:"prepend",class:"v-btn__prepend"},[r.prepend?w(Ze,{key:"prepend-defaults",disabled:!n.prependIcon,defaults:{VIcon:{icon:n.prependIcon}}},r.prepend):w(et,{key:"prepend-icon",icon:n.prependIcon},null)]),w("span",{class:"v-btn__content","data-no-activator":""},[!r.default&&ie?w(et,{key:"content-icon",icon:n.icon},null):w(Ze,{key:"content-defaults",disabled:!ie,defaults:{VIcon:{icon:n.icon}}},{default:()=>{var tt;return[((tt=r.default)==null?void 0:tt.call(r))??n.text]}})]),!n.icon&&g&&w("span",{key:"append",class:"v-btn__append"},[r.append?w(Ze,{key:"append-defaults",disabled:!n.appendIcon,defaults:{VIcon:{icon:n.appendIcon}}},r.append):w(et,{key:"append-icon",icon:n.appendIcon},null)]),!!n.loading&&w("span",{key:"loader",class:"v-btn__loader"},[((Se=r.loader)==null?void 0:Se.call(r))??w(jn,{color:typeof n.loading=="boolean"?void 0:n.loading,indeterminate:!0,width:"2"},null)])]}}),[[Go,!A.value&&n.ripple,"",{center:!!n.icon}]])}),{group:R}}}),Ho=te()({name:"VCardActions",props:le(),setup(n,e){let{slots:t}=e;return xr({VBtn:{slim:!0,variant:"text"}}),ce(()=>{var r;return w("div",{class:["v-card-actions",n.class],style:n.style},[(r=t.default)==null?void 0:r.call(t)])}),{}}}),Nv=K({opacity:[Number,String],...le(),...we()},"VCardSubtitle"),qt=te()({name:"VCardSubtitle",props:Nv(),setup(n,e){let{slots:t}=e;return ce(()=>w(n.tag,{class:["v-card-subtitle",n.class],style:[{"--v-card-subtitle-opacity":n.opacity},n.style]},t)),{}}}),_t=yu("v-card-title");function Lv(n){return{aspectStyles:M(()=>{const e=Number(n.aspectRatio);return e?{paddingBottom:String(1/e*100)+"%"}:void 0})}}const ph=K({aspectRatio:[String,Number],contentClass:null,inline:Boolean,...le(),...fn()},"VResponsive"),ou=te()({name:"VResponsive",props:ph(),setup(n,e){let{slots:t}=e;const{aspectStyles:r}=Lv(n),{dimensionStyles:i}=mn(n);return ce(()=>{var o;return w("div",{class:["v-responsive",{"v-responsive--inline":n.inline},n.class],style:[i.value,n.style]},[w("div",{class:"v-responsive__sizer",style:r.value},null),(o=t.additional)==null?void 0:o.call(t),t.default&&w("div",{class:["v-responsive__content",n.contentClass]},[t.default()])])}),{}}});function Ov(n,e){if(!pu)return;const t=e.modifiers||{},r=e.value,{handler:i,options:o}=typeof r=="object"?r:{handler:r,options:{}},a=new IntersectionObserver(function(){var _;let l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],h=arguments.length>1?arguments[1]:void 0;const d=(_=n._observe)==null?void 0:_[e.instance.$.uid];if(!d)return;const m=l.some(y=>y.isIntersecting);i&&(!t.quiet||d.init)&&(!t.once||m||d.init)&&i(m,l,h),m&&t.once?_h(n,e):d.init=!0},o);n._observe=Object(n._observe),n._observe[e.instance.$.uid]={init:!1,observer:a},a.observe(n)}function _h(n,e){var r;const t=(r=n._observe)==null?void 0:r[e.instance.$.uid];t&&(t.observer.unobserve(n),delete n._observe[e.instance.$.uid])}const Mv={mounted:Ov,unmounted:_h},Fv=K({absolute:Boolean,alt:String,cover:Boolean,color:String,draggable:{type:[Boolean,String],default:void 0},eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},crossorigin:String,referrerpolicy:String,srcset:String,position:String,...ph(),...le(),...dt(),...Rd()},"VImg"),ut=te()({name:"VImg",directives:{intersect:Mv},props:Fv(),emits:{loadstart:n=>!0,load:n=>!0,error:n=>!0},setup(n,e){let{emit:t,slots:r}=e;const{backgroundColorClasses:i,backgroundColorStyles:o}=sn(Q(n,"color")),{roundedClasses:a}=bt(n),l=Ni("VImg"),h=rt(""),d=Ge(),m=rt(n.eager?"loading":"idle"),_=rt(),y=rt(),b=M(()=>n.src&&typeof n.src=="object"?{src:n.src.src,srcset:n.srcset||n.src.srcset,lazySrc:n.lazySrc||n.src.lazySrc,aspect:Number(n.aspectRatio||n.src.aspect||0)}:{src:n.src,srcset:n.srcset,lazySrc:n.lazySrc,aspect:Number(n.aspectRatio||0)}),C=M(()=>b.value.aspect||_.value/y.value||0);vt(()=>n.src,()=>{R(m.value!=="idle")}),vt(C,(E,g)=>{!E&&g&&d.value&&B(d.value)}),Pd(()=>R());function R(E){if(!(n.eager&&E)&&!(pu&&!E&&!n.eager)){if(m.value="loading",b.value.lazySrc){const g=new Image;g.src=b.value.lazySrc,B(g,null)}b.value.src&&po(()=>{var g;t("loadstart",((g=d.value)==null?void 0:g.currentSrc)||b.value.src),setTimeout(()=>{var ie;if(!l.isUnmounted)if((ie=d.value)!=null&&ie.complete){if(d.value.naturalWidth||N(),m.value==="error")return;C.value||B(d.value,null),m.value==="loading"&&P()}else C.value||B(d.value),U()})})}}function P(){var E;l.isUnmounted||(U(),B(d.value),m.value="loaded",t("load",((E=d.value)==null?void 0:E.currentSrc)||b.value.src))}function N(){var E;l.isUnmounted||(m.value="error",t("error",((E=d.value)==null?void 0:E.currentSrc)||b.value.src))}function U(){const E=d.value;E&&(h.value=E.currentSrc||E.src)}let j=-1;Lr(()=>{clearTimeout(j)});function B(E){let g=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const ie=()=>{if(clearTimeout(j),l.isUnmounted)return;const{naturalHeight:Se,naturalWidth:tt}=E;Se||tt?(_.value=tt,y.value=Se):!E.complete&&m.value==="loading"&&g!=null?j=window.setTimeout(ie,g):(E.currentSrc.endsWith(".svg")||E.currentSrc.startsWith("data:image/svg+xml"))&&(_.value=1,y.value=1)};ie()}const W=M(()=>({"v-img__img--cover":n.cover,"v-img__img--contain":!n.cover})),H=()=>{var ie;if(!b.value.src||m.value==="idle")return null;const E=w("img",{class:["v-img__img",W.value],style:{objectPosition:n.position},src:b.value.src,srcset:b.value.srcset,alt:n.alt,crossorigin:n.crossorigin,referrerpolicy:n.referrerpolicy,draggable:n.draggable,sizes:n.sizes,ref:d,onLoad:P,onError:N},null),g=(ie=r.sources)==null?void 0:ie.call(r);return w(cr,{transition:n.transition,appear:!0},{default:()=>[Vn(g?w("picture",{class:"v-img__picture"},[g,E]):E,[[_u,m.value==="loaded"]])]})},A=()=>w(cr,{transition:n.transition},{default:()=>[b.value.lazySrc&&m.value!=="loaded"&&w("img",{class:["v-img__img","v-img__img--preload",W.value],style:{objectPosition:n.position},src:b.value.lazySrc,alt:n.alt,crossorigin:n.crossorigin,referrerpolicy:n.referrerpolicy,draggable:n.draggable},null)]}),p=()=>r.placeholder?w(cr,{transition:n.transition,appear:!0},{default:()=>[(m.value==="loading"||m.value==="error"&&!r.error)&&w("div",{class:"v-img__placeholder"},[r.placeholder()])]}):null,v=()=>r.error?w(cr,{transition:n.transition,appear:!0},{default:()=>[m.value==="error"&&w("div",{class:"v-img__error"},[r.error()])]}):null,I=()=>n.gradient?w("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${n.gradient})`}},null):null,T=rt(!1);{const E=vt(C,g=>{g&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{T.value=!0})}),E())})}return ce(()=>{const E=ou.filterProps(n);return Vn(w(ou,it({class:["v-img",{"v-img--absolute":n.absolute,"v-img--booting":!T.value},i.value,a.value,n.class],style:[{width:ye(n.width==="auto"?_.value:n.width)},o.value,n.style]},E,{aspectRatio:C.value,"aria-label":n.alt,role:n.alt?"img":void 0}),{additional:()=>w(ke,null,[w(H,null,null),w(A,null,null),w(I,null,null),w(p,null,null),w(v,null,null)]),default:r.default}),[[yo("intersect"),{handler:R,options:n.options},null,{once:!0}]])}),{currentSrc:h,image:d,state:m,naturalWidth:_,naturalHeight:y}}}),Bv=K({start:Boolean,end:Boolean,icon:Ue,image:String,text:String,...Fn(),...le(),...Gt(),...dt(),...Or(),...we(),...ft(),...Kn({variant:"flat"})},"VAvatar"),ki=te()({name:"VAvatar",props:Bv(),setup(n,e){let{slots:t}=e;const{themeClasses:r}=mt(n),{borderClasses:i}=Bn(n),{colorClasses:o,colorStyles:a,variantClasses:l}=ts(n),{densityClasses:h}=_n(n),{roundedClasses:d}=bt(n),{sizeClasses:m,sizeStyles:_}=Li(n);return ce(()=>w(n.tag,{class:["v-avatar",{"v-avatar--start":n.start,"v-avatar--end":n.end},r.value,i.value,o.value,h.value,d.value,m.value,l.value,n.class],style:[a.value,_.value,n.style]},{default:()=>[t.default?w(Ze,{key:"content-defaults",defaults:{VImg:{cover:!0,src:n.image},VIcon:{icon:n.icon}}},{default:()=>[t.default()]}):n.image?w(ut,{key:"image",src:n.image,alt:"",cover:!0},null):n.icon?w(et,{key:"icon",icon:n.icon},null):n.text,es(!1,"v-avatar")]})),{}}}),Uv=K({appendAvatar:String,appendIcon:Ue,prependAvatar:String,prependIcon:Ue,subtitle:[String,Number],title:[String,Number],...le(),...Gt()},"VCardItem"),vh=te()({name:"VCardItem",props:Uv(),setup(n,e){let{slots:t}=e;return ce(()=>{var d;const r=!!(n.prependAvatar||n.prependIcon),i=!!(r||t.prepend),o=!!(n.appendAvatar||n.appendIcon),a=!!(o||t.append),l=!!(n.title!=null||t.title),h=!!(n.subtitle!=null||t.subtitle);return w("div",{class:["v-card-item",n.class],style:n.style},[i&&w("div",{key:"prepend",class:"v-card-item__prepend"},[t.prepend?w(Ze,{key:"prepend-defaults",disabled:!r,defaults:{VAvatar:{density:n.density,image:n.prependAvatar},VIcon:{density:n.density,icon:n.prependIcon}}},t.prepend):w(ke,null,[n.prependAvatar&&w(ki,{key:"prepend-avatar",density:n.density,image:n.prependAvatar},null),n.prependIcon&&w(et,{key:"prepend-icon",density:n.density,icon:n.prependIcon},null)])]),w("div",{class:"v-card-item__content"},[l&&w(_t,{key:"title"},{default:()=>{var m;return[((m=t.title)==null?void 0:m.call(t))??n.title]}}),h&&w(qt,{key:"subtitle"},{default:()=>{var m;return[((m=t.subtitle)==null?void 0:m.call(t))??n.subtitle]}}),(d=t.default)==null?void 0:d.call(t)]),a&&w("div",{key:"append",class:"v-card-item__append"},[t.append?w(Ze,{key:"append-defaults",disabled:!o,defaults:{VAvatar:{density:n.density,image:n.appendAvatar},VIcon:{density:n.density,icon:n.appendIcon}}},t.append):w(ke,null,[n.appendIcon&&w(et,{key:"append-icon",density:n.density,icon:n.appendIcon},null),n.appendAvatar&&w(ki,{key:"append-avatar",density:n.density,image:n.appendAvatar},null)])])])}),{}}}),$v=K({opacity:[Number,String],...le(),...we()},"VCardText"),zt=te()({name:"VCardText",props:$v(),setup(n,e){let{slots:t}=e;return ce(()=>w(n.tag,{class:["v-card-text",n.class],style:[{"--v-card-text-opacity":n.opacity},n.style]},t)),{}}}),jv=K({appendAvatar:String,appendIcon:Ue,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:Ue,ripple:{type:[Boolean,Object],default:!0},subtitle:[String,Number],text:[String,Number],title:[String,Number],...Fn(),...le(),...Gt(),...fn(),...dn(),...ih(),...qo(),...oh(),...dt(),..._o(),...we(),...ft(),...Kn({variant:"elevated"})},"VCard"),Dt=te()({name:"VCard",directives:{Ripple:Go},props:jv(),setup(n,e){let{attrs:t,slots:r}=e;const{themeClasses:i}=mt(n),{borderClasses:o}=Bn(n),{colorClasses:a,colorStyles:l,variantClasses:h}=ts(n),{densityClasses:d}=_n(n),{dimensionStyles:m}=mn(n),{elevationClasses:_}=Un(n),{loaderClasses:y}=sh(n),{locationStyles:b}=zo(n),{positionClasses:C}=ah(n),{roundedClasses:R}=bt(n),P=vo(n,t),N=M(()=>n.link!==!1&&P.isLink.value),U=M(()=>!n.disabled&&n.link!==!1&&(n.link||P.isClickable.value));return ce(()=>{const j=N.value?"a":n.tag,B=!!(r.title||n.title!=null),W=!!(r.subtitle||n.subtitle!=null),H=B||W,A=!!(r.append||n.appendAvatar||n.appendIcon),p=!!(r.prepend||n.prependAvatar||n.prependIcon),v=!!(r.image||n.image),I=H||p||A,T=!!(r.text||n.text!=null);return Vn(w(j,it({class:["v-card",{"v-card--disabled":n.disabled,"v-card--flat":n.flat,"v-card--hover":n.hover&&!(n.disabled||n.flat),"v-card--link":U.value},i.value,o.value,a.value,d.value,_.value,y.value,C.value,R.value,h.value,n.class],style:[l.value,m.value,b.value,n.style],onClick:U.value&&P.navigate,tabindex:n.disabled?-1:void 0},P.linkProps),{default:()=>{var E;return[v&&w("div",{key:"image",class:"v-card__image"},[r.image?w(Ze,{key:"image-defaults",disabled:!n.image,defaults:{VImg:{cover:!0,src:n.image}}},r.image):w(ut,{key:"image-img",cover:!0,src:n.image},null)]),w(bv,{name:"v-card",active:!!n.loading,color:typeof n.loading=="boolean"?void 0:n.loading},{default:r.loader}),I&&w(vh,{key:"item",prependAvatar:n.prependAvatar,prependIcon:n.prependIcon,title:n.title,subtitle:n.subtitle,appendAvatar:n.appendAvatar,appendIcon:n.appendIcon},{default:r.item,prepend:r.prepend,title:r.title,subtitle:r.subtitle,append:r.append}),T&&w(zt,{key:"text"},{default:()=>{var g;return[((g=r.text)==null?void 0:g.call(r))??n.text]}}),(E=r.default)==null?void 0:E.call(r),r.actions&&w(Ho,null,{default:r.actions}),es(U.value,"v-card")]}}),[[yo("ripple"),U.value&&n.ripple]])}),{}}}),qv=K({fluid:{type:Boolean,default:!1},...le(),...fn(),...we()},"VContainer"),qr=te()({name:"VContainer",props:qv(),setup(n,e){let{slots:t}=e;const{rtlClasses:r}=Mi(),{dimensionStyles:i}=mn(n);return ce(()=>w(n.tag,{class:["v-container",{"v-container--fluid":n.fluid},r.value,n.class],style:[i.value,n.style]},t)),{}}}),yh=Fi.reduce((n,e)=>(n[e]={type:[Boolean,String,Number],default:!1},n),{}),Eh=Fi.reduce((n,e)=>{const t="offset"+Di(e);return n[t]={type:[String,Number],default:null},n},{}),Th=Fi.reduce((n,e)=>{const t="order"+Di(e);return n[t]={type:[String,Number],default:null},n},{}),au={col:Object.keys(yh),offset:Object.keys(Eh),order:Object.keys(Th)};function zv(n,e,t){let r=n;if(!(t==null||t===!1)){if(e){const i=e.replace(n,"");r+=`-${i}`}return n==="col"&&(r="v-"+r),n==="col"&&(t===""||t===!0)||(r+=`-${t}`),r.toLowerCase()}}const Gv=["auto","start","end","center","baseline","stretch"],Hv=K({cols:{type:[Boolean,String,Number],default:!1},...yh,offset:{type:[String,Number],default:null},...Eh,order:{type:[String,Number],default:null},...Th,alignSelf:{type:String,default:null,validator:n=>Gv.includes(n)},...le(),...we()},"VCol"),Fs=te()({name:"VCol",props:Hv(),setup(n,e){let{slots:t}=e;const r=M(()=>{const i=[];let o;for(o in au)au[o].forEach(l=>{const h=n[l],d=zv(o,l,h);d&&i.push(d)});const a=i.some(l=>l.startsWith("v-col-"));return i.push({"v-col":!a||!n.cols,[`v-col-${n.cols}`]:n.cols,[`offset-${n.offset}`]:n.offset,[`order-${n.order}`]:n.order,[`align-self-${n.alignSelf}`]:n.alignSelf}),i});return()=>{var i;return Dr(n.tag,{class:[r.value,n.class],style:n.style},(i=t.default)==null?void 0:i.call(t))}}}),Ko=["start","end","center"],wh=["space-between","space-around","space-evenly"];function Wo(n,e){return Fi.reduce((t,r)=>{const i=n+Di(r);return t[i]=e(),t},{})}const Kv=[...Ko,"baseline","stretch"],Ih=n=>Kv.includes(n),Ah=Wo("align",()=>({type:String,default:null,validator:Ih})),Wv=[...Ko,...wh],bh=n=>Wv.includes(n),Ch=Wo("justify",()=>({type:String,default:null,validator:bh})),Qv=[...Ko,...wh,"stretch"],Sh=n=>Qv.includes(n),Rh=Wo("alignContent",()=>({type:String,default:null,validator:Sh})),lu={align:Object.keys(Ah),justify:Object.keys(Ch),alignContent:Object.keys(Rh)},Xv={align:"align",justify:"justify",alignContent:"align-content"};function Yv(n,e,t){let r=Xv[n];if(t!=null){if(e){const i=e.replace(n,"");r+=`-${i}`}return r+=`-${t}`,r.toLowerCase()}}const Jv=K({dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:Ih},...Ah,justify:{type:String,default:null,validator:bh},...Ch,alignContent:{type:String,default:null,validator:Sh},...Rh,...le(),...we()},"VRow"),Zv=te()({name:"VRow",props:Jv(),setup(n,e){let{slots:t}=e;const r=M(()=>{const i=[];let o;for(o in lu)lu[o].forEach(a=>{const l=n[a],h=Yv(o,a,l);h&&i.push(h)});return i.push({"v-row--no-gutters":n.noGutters,"v-row--dense":n.dense,[`align-${n.align}`]:n.align,[`justify-${n.justify}`]:n.justify,[`align-content-${n.alignContent}`]:n.alignContent}),i});return()=>{var i;return Dr(n.tag,{class:["v-row",r.value,n.class],style:n.style},(i=t.default)==null?void 0:i.call(t))}}}),ey={key:0,width:"100%",class:"d-flex justify-center"},ty={key:1,class:"d-flex align-content-start justify-center flex-wrap"};function ny(n,e,t,r,i,o){return q(),ae(qr,null,{default:L(()=>[e[0]||(e[0]=ze("h1",{class:"text-center mb-2"},"Certifications",-1)),i.loading?(q(),Te("div",ey,[w(jn,{class:"m-auto",color:"primary",indeterminate:"",size:"128"})])):(q(),Te("div",ty,[(q(!0),Te(ke,null,st(i.certifications,(a,l)=>(q(),ae(Dt,{key:l,width:"340",class:Vd("ma-2 d-flex flex-column")},{default:L(()=>[w(_t,null,{default:L(()=>[oe(pe(a.title),1)]),_:2},1024),w(qt,null,{default:L(()=>[oe(pe(a.issuer),1)]),_:2},1024),a.skills?(q(),ae(zt,{key:0,class:"d-flex justify-start"},{default:L(()=>[(q(!0),Te(ke,null,st(a.skills,h=>(q(),ae(ut,{"max-width":"50","max-height":"50",src:h.icon,title:h.name,alt:h.name,class:"mx-1"},null,8,["src","title","alt"]))),256))]),_:2},1024)):on("",!0),w(Ho,{class:"mt-auto pt-0 justify-end"},{default:L(()=>[w(nn,{icon:"mdi-google-drive",href:a.link,target:"_blank",class:"rounded-circle"},null,8,["href"])]),_:2},1024)]),_:2},1024))),128))]))]),_:1})}const ry=qn(hv,[["render",ny],["__scopeId","data-v-262322a0"]]),iy={props:{showProjectDetail:{type:Function,required:!0}},data(){return{projects:[],modal:!1,selectedProject:{},loading:!0}},async mounted(){await this.getProjects(),this.loading=!1},methods:{async getProjects(){const e=(await Zi(Ji(jr,"projects"))).docs.map(t=>({id:t.id,...t.data()}));this.projects=await Promise.all(e.map(async t=>{if(t.thumbnail){const r=Et(Tt,`${wt}/pictures/${t.thumbnail}`);t.thumbnail=await yt(r)}return t.techstacks=await Promise.all(t.techstacks.map(async r=>{const i=Et(Tt,`${wt}/icons/${r}`);return yt(i).then(o=>o)})),t}))}}},sy={key:0,width:"100%",class:"d-flex justify-center"},oy={key:1,class:"d-flex align-content-start justify-center flex-wrap"},ay=["href"];function ly(n,e,t,r,i,o){return q(),ae(qr,null,{default:L(()=>[e[0]||(e[0]=ze("h1",{class:"text-center mb-2"},"Projects",-1)),i.loading?(q(),Te("div",sy,[w(jn,{class:"m-auto",color:"primary",indeterminate:"",size:"128"})])):(q(),Te("div",oy,[(q(!0),Te(ke,null,st(i.projects,(a,l)=>(q(),ae(Dt,{key:l,width:"340",class:"ma-4",onClick:h=>t.showProjectDetail(a.id)},{default:L(()=>[a.thumbnail?(q(),ae(ut,{key:0,"max-height":"200",src:a.thumbnail,class:"bg-white"},null,8,["src"])):on("",!0),w(_t,null,{default:L(()=>[oe(pe(a.title),1)]),_:2},1024),a.link?(q(),ae(qt,{key:1},{default:L(()=>[ze("a",{href:a.link.url,target:"_blank"},pe(a.link.title),9,ay)]),_:2},1024)):on("",!0),w(qt,null,{default:L(()=>[oe(pe(a.subtitle),1)]),_:2},1024),w(zt,{class:"d-flex justify-start"},{default:L(()=>[(q(!0),Te(ke,null,st(a.techstacks,h=>(q(),ae(ut,{"max-width":"50","max-height":"50",src:h,title:h.split(".")[0],alt:h.split(".")[0],class:"mx-2"},null,8,["src","title","alt"]))),256))]),_:2},1024)]),_:2},1032,["onClick"]))),128))]))]),_:1})}const uy=qn(iy,[["render",ly],["__scopeId","data-v-4e87477a"]]),cy={data(){return{loading:!0,experiences:[]}},async mounted(){await this.getExperiences(),this.loading=!1},methods:{async getExperiences(){const e=(await Zi(Ji(jr,"experiences"))).docs.map(t=>t.data());this.experiences=e}}},hy=K({disabled:Boolean,group:Boolean,hideOnLeave:Boolean,leaveAbsolute:Boolean,mode:String,origin:String},"transition");function Je(n,e,t){return te()({name:n,props:hy({mode:t,origin:e}),setup(r,i){let{slots:o}=i;const a={onBeforeEnter(l){r.origin&&(l.style.transformOrigin=r.origin)},onLeave(l){if(r.leaveAbsolute){const{offsetTop:h,offsetLeft:d,offsetWidth:m,offsetHeight:_}=l;l._transitionInitialStyles={position:l.style.position,top:l.style.top,left:l.style.left,width:l.style.width,height:l.style.height},l.style.position="absolute",l.style.top=`${h}px`,l.style.left=`${d}px`,l.style.width=`${m}px`,l.style.height=`${_}px`}r.hideOnLeave&&l.style.setProperty("display","none","important")},onAfterLeave(l){if(r.leaveAbsolute&&(l!=null&&l._transitionInitialStyles)){const{position:h,top:d,left:m,width:_,height:y}=l._transitionInitialStyles;delete l._transitionInitialStyles,l.style.position=h||"",l.style.top=d||"",l.style.left=m||"",l.style.width=_||"",l.style.height=y||""}}};return()=>{const l=r.group?vu:Tr;return Dr(l,{name:r.disabled?"":n,css:!r.disabled,...r.group?void 0:{mode:r.mode},...r.disabled?{}:a},o.default)}}})}function Ph(n,e){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"in-out";return te()({name:n,props:{mode:{type:String,default:t},disabled:Boolean,group:Boolean},setup(r,i){let{slots:o}=i;const a=r.group?vu:Tr;return()=>Dr(a,{name:r.disabled?"":n,css:!r.disabled,...r.disabled?{}:e},o.default)}})}function Vh(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";const t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1)?"width":"height",r=du(`offset-${t}`);return{onBeforeEnter(a){a._parent=a.parentNode,a._initialStyle={transition:a.style.transition,overflow:a.style.overflow,[t]:a.style[t]}},onEnter(a){const l=a._initialStyle;a.style.setProperty("transition","none","important"),a.style.overflow="hidden";const h=`${a[r]}px`;a.style[t]="0",a.offsetHeight,a.style.transition=l.transition,n&&a._parent&&a._parent.classList.add(n),requestAnimationFrame(()=>{a.style[t]=h})},onAfterEnter:o,onEnterCancelled:o,onLeave(a){a._initialStyle={transition:"",overflow:a.style.overflow,[t]:a.style[t]},a.style.overflow="hidden",a.style[t]=`${a[r]}px`,a.offsetHeight,requestAnimationFrame(()=>a.style[t]="0")},onAfterLeave:i,onLeaveCancelled:i};function i(a){n&&a._parent&&a._parent.classList.remove(n),o(a)}function o(a){const l=a._initialStyle[t];a.style.overflow=a._initialStyle.overflow,l!=null&&(a.style[t]=l),delete a._initialStyle}}const dy=K({target:[Object,Array]},"v-dialog-transition"),fy=te()({name:"VDialogTransition",props:dy(),setup(n,e){let{slots:t}=e;const r={onBeforeEnter(i){i.style.pointerEvents="none",i.style.visibility="hidden"},async onEnter(i,o){var y;await new Promise(b=>requestAnimationFrame(b)),await new Promise(b=>requestAnimationFrame(b)),i.style.visibility="";const{x:a,y:l,sx:h,sy:d,speed:m}=cu(n.target,i),_=ui(i,[{transform:`translate(${a}px, ${l}px) scale(${h}, ${d})`,opacity:0},{}],{duration:225*m,easing:kd});(y=uu(i))==null||y.forEach(b=>{ui(b,[{opacity:0},{opacity:0,offset:.33},{}],{duration:225*2*m,easing:Ja})}),_.finished.then(()=>o())},onAfterEnter(i){i.style.removeProperty("pointer-events")},onBeforeLeave(i){i.style.pointerEvents="none"},async onLeave(i,o){var y;await new Promise(b=>requestAnimationFrame(b));const{x:a,y:l,sx:h,sy:d,speed:m}=cu(n.target,i);ui(i,[{},{transform:`translate(${a}px, ${l}px) scale(${h}, ${d})`,opacity:0}],{duration:125*m,easing:Dd}).finished.then(()=>o()),(y=uu(i))==null||y.forEach(b=>{ui(b,[{},{opacity:0,offset:.2},{opacity:0}],{duration:125*2*m,easing:Ja})})},onAfterLeave(i){i.style.removeProperty("pointer-events")}};return()=>n.target?w(Tr,it({name:"dialog-transition"},r,{css:!1}),t):w(Tr,{name:"dialog-transition"},t)}});function uu(n){var t;const e=(t=n.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list"))==null?void 0:t.children;return e&&[...e]}function cu(n,e){const t=xd(n),r=Nd(e),[i,o]=getComputedStyle(e).transformOrigin.split(" ").map(N=>parseFloat(N)),[a,l]=getComputedStyle(e).getPropertyValue("--v-overlay-anchor-origin").split(" ");let h=t.left+t.width/2;a==="left"||l==="left"?h-=t.width/2:(a==="right"||l==="right")&&(h+=t.width/2);let d=t.top+t.height/2;a==="top"||l==="top"?d-=t.height/2:(a==="bottom"||l==="bottom")&&(d+=t.height/2);const m=t.width/r.width,_=t.height/r.height,y=Math.max(1,m,_),b=m/y||0,C=_/y||0,R=r.width*r.height/(window.innerWidth*window.innerHeight),P=R>.12?Math.min(1.5,(R-.12)*10+1):1;return{x:h-(i+r.left),y:d-(o+r.top),sx:b,sy:C,speed:P}}Je("fab-transition","center center","out-in");Je("dialog-bottom-transition");Je("dialog-top-transition");Je("fade-transition");Je("scale-transition");Je("scroll-x-transition");Je("scroll-x-reverse-transition");Je("scroll-y-transition");Je("scroll-y-reverse-transition");Je("slide-x-transition");Je("slide-x-reverse-transition");Je("slide-y-transition");Je("slide-y-reverse-transition");const my=Ph("expand-transition",Vh());Ph("expand-x-transition",Vh("",!0));const fo=Symbol.for("vuetify:list");function kh(){const n=Nr(fo,{hasPrepend:rt(!1),updateHasPrepend:()=>null}),e={hasPrepend:rt(!1),updateHasPrepend:t=>{t&&(e.hasPrepend.value=t)}};return $n(fo,e),n}function Dh(){return Nr(fo,null)}const Qo=n=>{const e={activate:t=>{let{id:r,value:i,activated:o}=t;return r=Ve(r),n&&!i&&o.size===1&&o.has(r)||(i?o.add(r):o.delete(r)),o},in:(t,r,i)=>{let o=new Set;if(t!=null)for(const a of go(t))o=e.activate({id:a,value:!0,activated:new Set(o),children:r,parents:i});return o},out:t=>Array.from(t)};return e},xh=n=>{const e=Qo(n);return{activate:r=>{let{activated:i,id:o,...a}=r;o=Ve(o);const l=i.has(o)?new Set([o]):new Set;return e.activate({...a,id:o,activated:l})},in:(r,i,o)=>{let a=new Set;if(r!=null){const l=go(r);l.length&&(a=e.in(l.slice(0,1),i,o))}return a},out:(r,i,o)=>e.out(r,i,o)}},gy=n=>{const e=Qo(n);return{activate:r=>{let{id:i,activated:o,children:a,...l}=r;return i=Ve(i),a.has(i)?o:e.activate({id:i,activated:o,children:a,...l})},in:e.in,out:e.out}},py=n=>{const e=xh(n);return{activate:r=>{let{id:i,activated:o,children:a,...l}=r;return i=Ve(i),a.has(i)?o:e.activate({id:i,activated:o,children:a,...l})},in:e.in,out:e.out}},_y={open:n=>{let{id:e,value:t,opened:r,parents:i}=n;if(t){const o=new Set;o.add(e);let a=i.get(e);for(;a!=null;)o.add(a),a=i.get(a);return o}else return r.delete(e),r},select:()=>null},Nh={open:n=>{let{id:e,value:t,opened:r,parents:i}=n;if(t){let o=i.get(e);for(r.add(e);o!=null&&o!==e;)r.add(o),o=i.get(o);return r}else r.delete(e);return r},select:()=>null},vy={open:Nh.open,select:n=>{let{id:e,value:t,opened:r,parents:i}=n;if(!t)return r;const o=[];let a=i.get(e);for(;a!=null;)o.push(a),a=i.get(a);return new Set(o)}},Xo=n=>{const e={select:t=>{let{id:r,value:i,selected:o}=t;if(r=Ve(r),n&&!i){const a=Array.from(o.entries()).reduce((l,h)=>{let[d,m]=h;return m==="on"&&l.push(d),l},[]);if(a.length===1&&a[0]===r)return o}return o.set(r,i?"on":"off"),o},in:(t,r,i)=>{let o=new Map;for(const a of t||[])o=e.select({id:a,value:!0,selected:new Map(o),children:r,parents:i});return o},out:t=>{const r=[];for(const[i,o]of t.entries())o==="on"&&r.push(i);return r}};return e},Lh=n=>{const e=Xo(n);return{select:r=>{let{selected:i,id:o,...a}=r;o=Ve(o);const l=i.has(o)?new Map([[o,i.get(o)]]):new Map;return e.select({...a,id:o,selected:l})},in:(r,i,o)=>{let a=new Map;return r!=null&&r.length&&(a=e.in(r.slice(0,1),i,o)),a},out:(r,i,o)=>e.out(r,i,o)}},yy=n=>{const e=Xo(n);return{select:r=>{let{id:i,selected:o,children:a,...l}=r;return i=Ve(i),a.has(i)?o:e.select({id:i,selected:o,children:a,...l})},in:e.in,out:e.out}},Ey=n=>{const e=Lh(n);return{select:r=>{let{id:i,selected:o,children:a,...l}=r;return i=Ve(i),a.has(i)?o:e.select({id:i,selected:o,children:a,...l})},in:e.in,out:e.out}},Ty=n=>{const e={select:t=>{let{id:r,value:i,selected:o,children:a,parents:l}=t;r=Ve(r);const h=new Map(o),d=[r];for(;d.length;){const _=d.shift();o.set(Ve(_),i?"on":"off"),a.has(_)&&d.push(...a.get(_))}let m=Ve(l.get(r));for(;m;){const _=a.get(m),y=_.every(C=>o.get(Ve(C))==="on"),b=_.every(C=>!o.has(Ve(C))||o.get(Ve(C))==="off");o.set(m,y?"on":b?"off":"indeterminate"),m=Ve(l.get(m))}return n&&!i&&Array.from(o.entries()).reduce((y,b)=>{let[C,R]=b;return R==="on"&&y.push(C),y},[]).length===0?h:o},in:(t,r,i)=>{let o=new Map;for(const a of t||[])o=e.select({id:a,value:!0,selected:new Map(o),children:r,parents:i});return o},out:(t,r)=>{const i=[];for(const[o,a]of t.entries())a==="on"&&!r.has(o)&&i.push(o);return i}};return e},kr=Symbol.for("vuetify:nested"),Oh={id:rt(),root:{register:()=>null,unregister:()=>null,parents:Ge(new Map),children:Ge(new Map),open:()=>null,openOnSelect:()=>null,activate:()=>null,select:()=>null,activatable:Ge(!1),selectable:Ge(!1),opened:Ge(new Set),activated:Ge(new Set),selected:Ge(new Map),selectedValues:Ge([]),getPath:()=>[]}},wy=K({activatable:Boolean,selectable:Boolean,activeStrategy:[String,Function,Object],selectStrategy:[String,Function,Object],openStrategy:[String,Object],opened:null,activated:null,selected:null,mandatory:Boolean},"nested"),Iy=n=>{let e=!1;const t=Ge(new Map),r=Ge(new Map),i=Sn(n,"opened",n.opened,C=>new Set(C),C=>[...C.values()]),o=M(()=>{if(typeof n.activeStrategy=="object")return n.activeStrategy;if(typeof n.activeStrategy=="function")return n.activeStrategy(n.mandatory);switch(n.activeStrategy){case"leaf":return gy(n.mandatory);case"single-leaf":return py(n.mandatory);case"independent":return Qo(n.mandatory);case"single-independent":default:return xh(n.mandatory)}}),a=M(()=>{if(typeof n.selectStrategy=="object")return n.selectStrategy;if(typeof n.selectStrategy=="function")return n.selectStrategy(n.mandatory);switch(n.selectStrategy){case"single-leaf":return Ey(n.mandatory);case"leaf":return yy(n.mandatory);case"independent":return Xo(n.mandatory);case"single-independent":return Lh(n.mandatory);case"classic":default:return Ty(n.mandatory)}}),l=M(()=>{if(typeof n.openStrategy=="object")return n.openStrategy;switch(n.openStrategy){case"list":return vy;case"single":return _y;case"multiple":default:return Nh}}),h=Sn(n,"activated",n.activated,C=>o.value.in(C,t.value,r.value),C=>o.value.out(C,t.value,r.value)),d=Sn(n,"selected",n.selected,C=>a.value.in(C,t.value,r.value),C=>a.value.out(C,t.value,r.value));Lr(()=>{e=!0});function m(C){const R=[];let P=C;for(;P!=null;)R.unshift(P),P=r.value.get(P);return R}const _=Ni("nested"),y=new Set,b={id:rt(),root:{opened:i,activatable:Q(n,"activatable"),selectable:Q(n,"selectable"),activated:h,selected:d,selectedValues:M(()=>{const C=[];for(const[R,P]of d.value.entries())P==="on"&&C.push(R);return C}),register:(C,R,P)=>{if(y.has(C)){m(C).map(String).join(" -> "),m(R).concat(C).map(String).join(" -> ");return}else y.add(C);R&&C!==R&&r.value.set(C,R),P&&t.value.set(C,[]),R!=null&&t.value.set(R,[...t.value.get(R)||[],C])},unregister:C=>{if(e)return;y.delete(C),t.value.delete(C);const R=r.value.get(C);if(R){const P=t.value.get(R)??[];t.value.set(R,P.filter(N=>N!==C))}r.value.delete(C)},open:(C,R,P)=>{_.emit("click:open",{id:C,value:R,path:m(C),event:P});const N=l.value.open({id:C,value:R,opened:new Set(i.value),children:t.value,parents:r.value,event:P});N&&(i.value=N)},openOnSelect:(C,R,P)=>{const N=l.value.select({id:C,value:R,selected:new Map(d.value),opened:new Set(i.value),children:t.value,parents:r.value,event:P});N&&(i.value=N)},select:(C,R,P)=>{_.emit("click:select",{id:C,value:R,path:m(C),event:P});const N=a.value.select({id:C,value:R,selected:new Map(d.value),children:t.value,parents:r.value,event:P});N&&(d.value=N),b.root.openOnSelect(C,R,P)},activate:(C,R,P)=>{if(!n.activatable)return b.root.select(C,!0,P);_.emit("click:activate",{id:C,value:R,path:m(C),event:P});const N=o.value.activate({id:C,value:R,activated:new Set(h.value),children:t.value,parents:r.value,event:P});N&&(h.value=N)},children:t,parents:r,getPath:m}};return $n(kr,b),b.root},Mh=(n,e)=>{const t=Nr(kr,Oh),r=Symbol(fu()),i=M(()=>n.value!==void 0?n.value:r),o={...t,id:i,open:(a,l)=>t.root.open(i.value,a,l),openOnSelect:(a,l)=>t.root.openOnSelect(i.value,a,l),isOpen:M(()=>t.root.opened.value.has(i.value)),parent:M(()=>t.root.parents.value.get(i.value)),activate:(a,l)=>t.root.activate(i.value,a,l),isActivated:M(()=>t.root.activated.value.has(Ve(i.value))),select:(a,l)=>t.root.select(i.value,a,l),isSelected:M(()=>t.root.selected.value.get(Ve(i.value))==="on"),isIndeterminate:M(()=>t.root.selected.value.get(i.value)==="indeterminate"),isLeaf:M(()=>!t.root.children.value.get(i.value)),isGroupActivator:t.isGroupActivator};return!t.isGroupActivator&&t.root.register(i.value,t.id.value,e),Lr(()=>{!t.isGroupActivator&&t.root.unregister(i.value)}),e&&$n(kr,o),o},Ay=()=>{const n=Nr(kr,Oh);$n(kr,{...n,isGroupActivator:!0})},by=Ld({name:"VListGroupActivator",setup(n,e){let{slots:t}=e;return Ay(),()=>{var r;return(r=t.default)==null?void 0:r.call(t)}}}),Cy=K({activeColor:String,baseColor:String,color:String,collapseIcon:{type:Ue,default:"$collapse"},expandIcon:{type:Ue,default:"$expand"},prependIcon:Ue,appendIcon:Ue,fluid:Boolean,subgroup:Boolean,title:String,value:null,...le(),...we()},"VListGroup"),hu=te()({name:"VListGroup",props:Cy(),setup(n,e){let{slots:t}=e;const{isOpen:r,open:i,id:o}=Mh(Q(n,"value"),!0),a=M(()=>`v-list-group--id-${String(o.value)}`),l=Dh(),{isBooted:h}=Od();function d(b){b.stopPropagation(),i(!r.value,b)}const m=M(()=>({onClick:d,class:"v-list-group__header",id:a.value})),_=M(()=>r.value?n.collapseIcon:n.expandIcon),y=M(()=>({VListItem:{active:r.value,activeColor:n.activeColor,baseColor:n.baseColor,color:n.color,prependIcon:n.prependIcon||n.subgroup&&_.value,appendIcon:n.appendIcon||!n.subgroup&&_.value,title:n.title,value:n.value}}));return ce(()=>w(n.tag,{class:["v-list-group",{"v-list-group--prepend":l==null?void 0:l.hasPrepend.value,"v-list-group--fluid":n.fluid,"v-list-group--subgroup":n.subgroup,"v-list-group--open":r.value},n.class],style:n.style},{default:()=>[t.activator&&w(Ze,{defaults:y.value},{default:()=>[w(by,null,{default:()=>[t.activator({props:m.value,isOpen:r.value})]})]}),w(cr,{transition:{component:my},disabled:!h.value},{default:()=>{var b;return[Vn(w("div",{class:"v-list-group__items",role:"group","aria-labelledby":a.value},[(b=t.default)==null?void 0:b.call(t)]),[[_u,r.value]])]}})]})),{isOpen:r}}}),Sy=K({opacity:[Number,String],...le(),...we()},"VListItemSubtitle"),Er=te()({name:"VListItemSubtitle",props:Sy(),setup(n,e){let{slots:t}=e;return ce(()=>w(n.tag,{class:["v-list-item-subtitle",n.class],style:[{"--v-list-item-subtitle-opacity":n.opacity},n.style]},t)),{}}}),Cn=yu("v-list-item-title"),Ry=K({active:{type:Boolean,default:void 0},activeClass:String,activeColor:String,appendAvatar:String,appendIcon:Ue,baseColor:String,disabled:Boolean,lines:[Boolean,String],link:{type:Boolean,default:void 0},nav:Boolean,prependAvatar:String,prependIcon:Ue,ripple:{type:[Boolean,Object],default:!0},slim:Boolean,subtitle:[String,Number],title:[String,Number],value:null,onClick:gr(),onClickOnce:gr(),...Fn(),...le(),...Gt(),...fn(),...dn(),...dt(),..._o(),...we(),...ft(),...Kn({variant:"text"})},"VListItem"),rn=te()({name:"VListItem",directives:{Ripple:Go},props:Ry(),emits:{click:n=>!0},setup(n,e){let{attrs:t,slots:r,emit:i}=e;const o=vo(n,t),a=M(()=>n.value===void 0?o.href.value:n.value),{activate:l,isActivated:h,select:d,isOpen:m,isSelected:_,isIndeterminate:y,isGroupActivator:b,root:C,parent:R,openOnSelect:P,id:N}=Mh(a,!1),U=Dh(),j=M(()=>{var ne;return n.active!==!1&&(n.active||((ne=o.isActive)==null?void 0:ne.value)||(C.activatable.value?h.value:_.value))}),B=M(()=>n.link!==!1&&o.isLink.value),W=M(()=>!n.disabled&&n.link!==!1&&(n.link||o.isClickable.value||!!U&&(C.selectable.value||C.activatable.value||n.value!=null))),H=M(()=>n.rounded||n.nav),A=M(()=>n.color??n.activeColor),p=M(()=>({color:j.value?A.value??n.baseColor:n.baseColor,variant:n.variant}));vt(()=>{var ne;return(ne=o.isActive)==null?void 0:ne.value},ne=>{ne&&R.value!=null&&C.open(R.value,!0),ne&&P(ne)},{immediate:!0});const{themeClasses:v}=mt(n),{borderClasses:I}=Bn(n),{colorClasses:T,colorStyles:E,variantClasses:g}=ts(p),{densityClasses:ie}=_n(n),{dimensionStyles:Se}=mn(n),{elevationClasses:tt}=Un(n),{roundedClasses:Ht}=bt(H),Kt=M(()=>n.lines?`v-list-item--${n.lines}-line`:void 0),Wt=M(()=>({isActive:j.value,select:d,isOpen:m.value,isSelected:_.value,isIndeterminate:y.value}));function zr(ne){var me;i("click",ne),W.value&&((me=o.navigate)==null||me.call(o,ne),!b&&(C.activatable.value?l(!h.value,ne):(C.selectable.value||n.value!=null)&&d(!_.value,ne)))}function ns(ne){(ne.key==="Enter"||ne.key===" ")&&(ne.preventDefault(),ne.target.dispatchEvent(new MouseEvent("click",ne)))}return ce(()=>{const ne=B.value?"a":n.tag,me=r.title||n.title!=null,rs=r.subtitle||n.subtitle!=null,Ct=!!(n.appendAvatar||n.appendIcon),is=!!(Ct||r.append),Qt=!!(n.prependAvatar||n.prependIcon),Wn=!!(Qt||r.prepend);return U==null||U.updateHasPrepend(Wn),n.activeColor&&Md("active-color",["color","base-color"]),Vn(w(ne,it({class:["v-list-item",{"v-list-item--active":j.value,"v-list-item--disabled":n.disabled,"v-list-item--link":W.value,"v-list-item--nav":n.nav,"v-list-item--prepend":!Wn&&(U==null?void 0:U.hasPrepend.value),"v-list-item--slim":n.slim,[`${n.activeClass}`]:n.activeClass&&j.value},v.value,I.value,T.value,ie.value,tt.value,Kt.value,Ht.value,g.value,n.class],style:[E.value,Se.value,n.style],tabindex:W.value?U?-2:0:void 0,"aria-selected":C.activatable.value?h.value:_.value,onClick:zr,onKeydown:W.value&&!B.value&&ns},o.linkProps),{default:()=>{var Gr;return[es(W.value||j.value,"v-list-item"),Wn&&w("div",{key:"prepend",class:"v-list-item__prepend"},[r.prepend?w(Ze,{key:"prepend-defaults",disabled:!Qt,defaults:{VAvatar:{density:n.density,image:n.prependAvatar},VIcon:{density:n.density,icon:n.prependIcon},VListItemAction:{start:!0}}},{default:()=>{var xe;return[(xe=r.prepend)==null?void 0:xe.call(r,Wt.value)]}}):w(ke,null,[n.prependAvatar&&w(ki,{key:"prepend-avatar",density:n.density,image:n.prependAvatar},null),n.prependIcon&&w(et,{key:"prepend-icon",density:n.density,icon:n.prependIcon},null)]),w("div",{class:"v-list-item__spacer"},null)]),w("div",{class:"v-list-item__content","data-no-activator":""},[me&&w(Cn,{key:"title"},{default:()=>{var xe;return[((xe=r.title)==null?void 0:xe.call(r,{title:n.title}))??n.title]}}),rs&&w(Er,{key:"subtitle"},{default:()=>{var xe;return[((xe=r.subtitle)==null?void 0:xe.call(r,{subtitle:n.subtitle}))??n.subtitle]}}),(Gr=r.default)==null?void 0:Gr.call(r,Wt.value)]),is&&w("div",{key:"append",class:"v-list-item__append"},[r.append?w(Ze,{key:"append-defaults",disabled:!Ct,defaults:{VAvatar:{density:n.density,image:n.appendAvatar},VIcon:{density:n.density,icon:n.appendIcon},VListItemAction:{end:!0}}},{default:()=>{var xe;return[(xe=r.append)==null?void 0:xe.call(r,Wt.value)]}}):w(ke,null,[n.appendIcon&&w(et,{key:"append-icon",density:n.density,icon:n.appendIcon},null),n.appendAvatar&&w(ki,{key:"append-avatar",density:n.density,image:n.appendAvatar},null)]),w("div",{class:"v-list-item__spacer"},null)])]}}),[[yo("ripple"),W.value&&n.ripple]])}),{activate:l,isActivated:h,isGroupActivator:b,isSelected:_,list:U,select:d,root:C,id:N}}}),Py=K({color:String,inset:Boolean,sticky:Boolean,title:String,...le(),...we()},"VListSubheader"),Vy=te()({name:"VListSubheader",props:Py(),setup(n,e){let{slots:t}=e;const{textColorClasses:r,textColorStyles:i}=Oi(Q(n,"color"));return ce(()=>{const o=!!(t.default||n.title);return w(n.tag,{class:["v-list-subheader",{"v-list-subheader--inset":n.inset,"v-list-subheader--sticky":n.sticky},r.value,n.class],style:[{textColorStyles:i},n.style]},{default:()=>{var a;return[o&&w("div",{class:"v-list-subheader__text"},[((a=t.default)==null?void 0:a.call(t))??n.title])]}})}),{}}}),ky=K({color:String,inset:Boolean,length:[Number,String],opacity:[Number,String],thickness:[Number,String],vertical:Boolean,...le(),...ft()},"VDivider"),Dy=te()({name:"VDivider",props:ky(),setup(n,e){let{attrs:t,slots:r}=e;const{themeClasses:i}=mt(n),{textColorClasses:o,textColorStyles:a}=Oi(Q(n,"color")),l=M(()=>{const h={};return n.length&&(h[n.vertical?"height":"width"]=ye(n.length)),n.thickness&&(h[n.vertical?"borderRightWidth":"borderTopWidth"]=ye(n.thickness)),h});return ce(()=>{const h=w("hr",{class:[{"v-divider":!0,"v-divider--inset":n.inset,"v-divider--vertical":n.vertical},i.value,o.value,n.class],style:[l.value,a.value,{"--v-border-opacity":n.opacity},n.style],"aria-orientation":!t.role||t.role==="separator"?n.vertical?"vertical":"horizontal":void 0,role:`${t.role||"separator"}`},null);return r.default?w("div",{class:["v-divider__wrapper",{"v-divider__wrapper--vertical":n.vertical,"v-divider__wrapper--inset":n.inset}]},[h,w("div",{class:"v-divider__content"},[r.default()]),h]):h}),{}}}),xy=K({items:Array,returnObject:Boolean},"VListChildren"),Fh=te()({name:"VListChildren",props:xy(),setup(n,e){let{slots:t}=e;return kh(),()=>{var r,i;return((r=t.default)==null?void 0:r.call(t))??((i=n.items)==null?void 0:i.map(o=>{var y,b;let{children:a,props:l,type:h,raw:d}=o;if(h==="divider")return((y=t.divider)==null?void 0:y.call(t,{props:l}))??w(Dy,l,null);if(h==="subheader")return((b=t.subheader)==null?void 0:b.call(t,{props:l}))??w(Vy,l,null);const m={subtitle:t.subtitle?C=>{var R;return(R=t.subtitle)==null?void 0:R.call(t,{...C,item:d})}:void 0,prepend:t.prepend?C=>{var R;return(R=t.prepend)==null?void 0:R.call(t,{...C,item:d})}:void 0,append:t.append?C=>{var R;return(R=t.append)==null?void 0:R.call(t,{...C,item:d})}:void 0,title:t.title?C=>{var R;return(R=t.title)==null?void 0:R.call(t,{...C,item:d})}:void 0},_=hu.filterProps(l);return a?w(hu,it({value:l==null?void 0:l.value},_),{activator:C=>{let{props:R}=C;const P={...l,...R,value:n.returnObject?d:l.value};return t.header?t.header({props:P}):w(rn,P,m)},default:()=>w(Fh,{items:a,returnObject:n.returnObject},t)}):t.item?t.item({props:l}):w(rn,it(l,{value:n.returnObject?d:l.value}),m)}))}}}),Ny=K({items:{type:Array,default:()=>[]},itemTitle:{type:[String,Array,Function],default:"title"},itemValue:{type:[String,Array,Function],default:"value"},itemChildren:{type:[Boolean,String,Array,Function],default:"children"},itemProps:{type:[Boolean,String,Array,Function],default:"props"},returnObject:Boolean,valueComparator:{type:Function,default:mu}},"list-items");function Ly(n){return typeof n=="string"||typeof n=="number"||typeof n=="boolean"}function Oy(n,e){const t=lr(e,n.itemType,"item"),r=Ly(e)?e:lr(e,n.itemTitle),i=lr(e,n.itemValue,void 0),o=lr(e,n.itemChildren),a=n.itemProps===!0?Bd(e,["children"]):lr(e,n.itemProps),l={title:r,value:i,...a};return{type:t,title:l.title,value:l.value,props:l,children:t==="item"&&o?Bh(n,o):void 0,raw:e}}function Bh(n,e){const t=[];for(const r of e)t.push(Oy(n,r));return t}function My(n){return{items:M(()=>Bh(n,n.items))}}const Fy=K({baseColor:String,activeColor:String,activeClass:String,bgColor:String,disabled:Boolean,expandIcon:String,collapseIcon:String,lines:{type:[Boolean,String],default:"one"},slim:Boolean,nav:Boolean,"onClick:open":gr(),"onClick:select":gr(),"onUpdate:opened":gr(),...wy({selectStrategy:"single-leaf",openStrategy:"list"}),...Fn(),...le(),...Gt(),...fn(),...dn(),itemType:{type:String,default:"type"},...Ny(),...dt(),...we(),...ft(),...Kn({variant:"text"})},"VList"),mo=te()({name:"VList",props:Fy(),emits:{"update:selected":n=>!0,"update:activated":n=>!0,"update:opened":n=>!0,"click:open":n=>!0,"click:activate":n=>!0,"click:select":n=>!0},setup(n,e){let{slots:t}=e;const{items:r}=My(n),{themeClasses:i}=mt(n),{backgroundColorClasses:o,backgroundColorStyles:a}=sn(Q(n,"bgColor")),{borderClasses:l}=Bn(n),{densityClasses:h}=_n(n),{dimensionStyles:d}=mn(n),{elevationClasses:m}=Un(n),{roundedClasses:_}=bt(n),{children:y,open:b,parents:C,select:R,getPath:P}=Iy(n),N=M(()=>n.lines?`v-list--${n.lines}-line`:void 0),U=Q(n,"activeColor"),j=Q(n,"baseColor"),B=Q(n,"color");kh(),xr({VListGroup:{activeColor:U,baseColor:j,color:B,expandIcon:Q(n,"expandIcon"),collapseIcon:Q(n,"collapseIcon")},VListItem:{activeClass:Q(n,"activeClass"),activeColor:U,baseColor:j,color:B,density:Q(n,"density"),disabled:Q(n,"disabled"),lines:Q(n,"lines"),nav:Q(n,"nav"),slim:Q(n,"slim"),variant:Q(n,"variant")}});const W=rt(!1),H=Ge();function A(g){W.value=!0}function p(g){W.value=!1}function v(g){var ie;!W.value&&!(g.relatedTarget&&((ie=H.value)!=null&&ie.contains(g.relatedTarget)))&&E()}function I(g){const ie=g.target;if(!(!H.value||["INPUT","TEXTAREA"].includes(ie.tagName))){if(g.key==="ArrowDown")E("next");else if(g.key==="ArrowUp")E("prev");else if(g.key==="Home")E("first");else if(g.key==="End")E("last");else return;g.preventDefault()}}function T(g){W.value=!0}function E(g){if(H.value)return Fd(H.value,g)}return ce(()=>w(n.tag,{ref:H,class:["v-list",{"v-list--disabled":n.disabled,"v-list--nav":n.nav,"v-list--slim":n.slim},i.value,o.value,l.value,h.value,m.value,N.value,_.value,n.class],style:[a.value,d.value,n.style],tabindex:n.disabled||W.value?-1:0,role:"listbox","aria-activedescendant":void 0,onFocusin:A,onFocusout:p,onFocus:v,onKeydown:I,onMousedown:T},{default:()=>[w(Fh,{items:r.value,returnObject:n.returnObject},t)]})),{open:b,select:R,focus:E,children:y,parents:C,getPath:P}}}),By=K({start:Boolean,end:Boolean,...le(),...we()},"VListItemMedia"),Uy=te()({name:"VListItemMedia",props:By(),setup(n,e){let{slots:t}=e;return ce(()=>w(n.tag,{class:["v-list-item-media",{"v-list-item-media--start":n.start,"v-list-item-media--end":n.end},n.class],style:n.style},t)),{}}}),$y=K({dotColor:String,fillDot:Boolean,hideDot:Boolean,icon:Ue,iconColor:String,lineColor:String,...le(),...dt(),...Or(),...dn()},"VTimelineDivider"),jy=te()({name:"VTimelineDivider",props:$y(),setup(n,e){let{slots:t}=e;const{sizeClasses:r,sizeStyles:i}=Li(n,"v-timeline-divider__dot"),{backgroundColorStyles:o,backgroundColorClasses:a}=sn(Q(n,"dotColor")),{roundedClasses:l}=bt(n,"v-timeline-divider__dot"),{elevationClasses:h}=Un(n),{backgroundColorClasses:d,backgroundColorStyles:m}=sn(Q(n,"lineColor"));return ce(()=>w("div",{class:["v-timeline-divider",{"v-timeline-divider--fill-dot":n.fillDot},n.class],style:n.style},[w("div",{class:["v-timeline-divider__before",d.value],style:m.value},null),!n.hideDot&&w("div",{key:"dot",class:["v-timeline-divider__dot",h.value,l.value,r.value],style:i.value},[w("div",{class:["v-timeline-divider__inner-dot",a.value,l.value],style:o.value},[t.default?w(Ze,{key:"icon-defaults",disabled:!n.icon,defaults:{VIcon:{color:n.iconColor,icon:n.icon,size:n.size}}},t.default):w(et,{key:"icon",color:n.iconColor,icon:n.icon,size:n.size},null)])]),w("div",{class:["v-timeline-divider__after",d.value],style:m.value},null)])),{}}}),Uh=K({density:String,dotColor:String,fillDot:Boolean,hideDot:Boolean,hideOpposite:{type:Boolean,default:void 0},icon:Ue,iconColor:String,lineInset:[Number,String],...le(),...fn(),...dn(),...dt(),...Or(),...we()},"VTimelineItem"),qy=te()({name:"VTimelineItem",props:Uh(),setup(n,e){let{slots:t}=e;const{dimensionStyles:r}=mn(n),i=rt(0),o=Ge();return vt(o,a=>{var l;a&&(i.value=((l=a.$el.querySelector(".v-timeline-divider__dot"))==null?void 0:l.getBoundingClientRect().width)??0)},{flush:"post"}),ce(()=>{var a,l;return w("div",{class:["v-timeline-item",{"v-timeline-item--fill-dot":n.fillDot},n.class],style:[{"--v-timeline-dot-size":ye(i.value),"--v-timeline-line-inset":n.lineInset?`calc(var(--v-timeline-dot-size) / 2 + ${ye(n.lineInset)})`:ye(0)},n.style]},[w("div",{class:"v-timeline-item__body",style:r.value},[(a=t.default)==null?void 0:a.call(t)]),w(jy,{ref:o,hideDot:n.hideDot,icon:n.icon,iconColor:n.iconColor,size:n.size,elevation:n.elevation,dotColor:n.dotColor,fillDot:n.fillDot,rounded:n.rounded},{default:t.icon}),n.density!=="compact"&&w("div",{class:"v-timeline-item__opposite"},[!n.hideOpposite&&((l=t.opposite)==null?void 0:l.call(t))])])}),{}}}),zy=K({align:{type:String,default:"center",validator:n=>["center","start"].includes(n)},direction:{type:String,default:"vertical",validator:n=>["vertical","horizontal"].includes(n)},justify:{type:String,default:"auto",validator:n=>["auto","center"].includes(n)},side:{type:String,validator:n=>n==null||["start","end"].includes(n)},lineThickness:{type:[String,Number],default:2},lineColor:String,truncateLine:{type:String,validator:n=>["start","end","both"].includes(n)},...Ud(Uh({lineInset:0}),["dotColor","fillDot","hideOpposite","iconColor","lineInset","size"]),...le(),...Gt(),...we(),...ft()},"VTimeline"),Gy=te()({name:"VTimeline",props:zy(),setup(n,e){let{slots:t}=e;const{themeClasses:r}=mt(n),{densityClasses:i}=_n(n),{rtlClasses:o}=Mi();xr({VTimelineDivider:{lineColor:Q(n,"lineColor")},VTimelineItem:{density:Q(n,"density"),dotColor:Q(n,"dotColor"),fillDot:Q(n,"fillDot"),hideOpposite:Q(n,"hideOpposite"),iconColor:Q(n,"iconColor"),lineColor:Q(n,"lineColor"),lineInset:Q(n,"lineInset"),size:Q(n,"size")}});const a=M(()=>{const h=n.side?n.side:n.density!=="default"?"end":null;return h&&`v-timeline--side-${h}`}),l=M(()=>{const h=["v-timeline--truncate-line-start","v-timeline--truncate-line-end"];switch(n.truncateLine){case"both":return h;case"start":return h[0];case"end":return h[1];default:return null}});return ce(()=>w(n.tag,{class:["v-timeline",`v-timeline--${n.direction}`,`v-timeline--align-${n.align}`,`v-timeline--justify-${n.justify}`,l.value,{"v-timeline--inset-line":!!n.lineInset},r.value,i.value,a.value,o.value,n.class],style:[{"--v-timeline-line-thickness":ye(n.lineThickness)},n.style]},t)),{}}}),Hy={key:0,width:"100%",class:"d-flex justify-center"};function Ky(n,e,t,r,i,o){return q(),ae(qr,null,{default:L(()=>[e[2]||(e[2]=ze("h1",{class:"text-center mb-2"},"Experiences",-1)),i.loading?(q(),Te("div",Hy,[w(jn,{class:"m-auto",color:"primary",indeterminate:"",size:"128"})])):(q(),ae(Gy,{key:1,side:n.$vuetify.display.mobile?"end":void 0},{default:L(()=>[(q(!0),Te(ke,null,st(i.experiences,(a,l)=>(q(),ae(qy,{key:l,size:"x-small"},{default:L(()=>[w(Dt,null,{default:L(()=>[w(_t,null,{default:L(()=>[oe(pe(a.company),1)]),_:2},1024),w(qt,null,{default:L(()=>[oe(pe(a.role),1)]),_:2},1024),w(qt,null,{default:L(()=>[oe(pe(a.duration),1)]),_:2},1024),w(zt,null,{default:L(()=>[e[1]||(e[1]=ze("h3",null,"Projects",-1)),a.projects?(q(),ae(mo,{key:0,readonly:""},{default:L(()=>[(q(!0),Te(ke,null,st(a.projects,h=>(q(),ae(rn,{class:"my-1"},{prepend:L(()=>[w(et,null,{default:L(()=>e[0]||(e[0]=[oe("mdi-circle")])),_:1})]),default:L(()=>[w(Cn,null,{default:L(()=>[oe(pe(h.title),1)]),_:2},1024),w(Er,null,{default:L(()=>[oe(pe(h.subtitle),1)]),_:2},1024)]),_:2},1024))),256))]),_:2},1024)):on("",!0)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1},8,["side"]))]),_:1})}const Wy=qn(cy,[["render",Ky],["__scopeId","data-v-b169dbf3"]]),Qy={data(){return{loading:!0,picture:"",description:"",educations:[],techstacks:[]}},async mounted(){await this.getProfile(),this.loading=!1},methods:{async getProfile(){const e=(await Zi(Ji(jr,"profile"))).docs.map(r=>r.data())[0],t=Et(Tt,`${wt}/pictures/${e.picture}`);this.picture=await yt(t),this.description=e.description,this.educations=await Promise.all(e.educations.map(async r=>{const i=Et(Tt,`${wt}/pictures/${r.logo}`);return yt(i).then(o=>({...r,logo:o}))})),this.techstacks=await Promise.all(e.techstacks.map(async r=>({name:r.name,skills:await Promise.all(r.skills.map(async i=>{const o=Et(Tt,`${wt}/icons/${i.icon}`);return yt(o).then(a=>({name:i.name,icon:a}))}))}))),this.loading=!1}}},Xy={key:0,width:"100%",class:"d-flex justify-center"},Yy={class:"d-flex flex-wrap justify-start"},Jy={class:"my-auto"};function Zy(n,e,t,r,i,o){return q(),ae(qr,{class:"mb-5"},{default:L(()=>[e[10]||(e[10]=ze("h1",{class:"text-center mb-2"},"Profile",-1)),i.loading?(q(),Te("div",Xy,[w(jn,{class:"m-auto",color:"primary",indeterminate:"",size:"128"})])):(q(),ae(Zv,{key:1},{default:L(()=>[w(Fs,{cols:n.$vuetify.display.mobile?12:2},{default:L(()=>[w(ut,{src:i.picture,class:"mx-auto rounded-circle",width:n.$vuetify.display.mobile?"100%":"75%"},null,8,["src","width"]),w(Dt,{class:"elevation-2 mt-3"},{default:L(()=>[w(_t,null,{default:L(()=>e[0]||(e[0]=[oe("Identity")])),_:1}),w(mo,{readonly:""},{default:L(()=>[w(rn,null,{default:L(()=>[w(Er,null,{default:L(()=>e[1]||(e[1]=[oe("Name")])),_:1}),w(Cn,null,{default:L(()=>e[2]||(e[2]=[oe("Rafli Lutfiansyah Mauluddin")])),_:1})]),_:1}),w(rn,null,{default:L(()=>[w(Er,null,{default:L(()=>e[3]||(e[3]=[oe("Birthdate")])),_:1}),w(Cn,null,{default:L(()=>e[4]||(e[4]=[oe("29"),ze("sup",null,"th",-1),oe(" May 2002")])),_:1})]),_:1}),w(rn,null,{default:L(()=>[w(Er,null,{default:L(()=>e[5]||(e[5]=[oe("Email")])),_:1}),w(Cn,null,{default:L(()=>e[6]||(e[6]=[oe("raflilutfiansyah28@gmail.com")])),_:1})]),_:1})]),_:1}),w(zt,{class:"text-center"},{default:L(()=>[w(nn,{href:"https://www.linkedin.com/in/rafli-lutfiansyah",icon:"mdi-linkedin",target:"_blank",color:"primary",class:"mt-1 mx-1 rounded-circle"}),w(nn,{href:"https://github.com/RafliLM",icon:"mdi-github",target:"_blank",color:"white",class:"mt-1 mx-1 rounded-circle"}),w(nn,{href:"https://gitlab.com/RafliLM",icon:"mdi-gitlab",target:"_blank",color:"#FC6D26",class:"mt-1 mx-1 rounded-circle"}),w(nn,{href:"https://www.instagram.com/raflilutfiansyah/",icon:"mdi-instagram",target:"_blank",class:"mt-1 mx-1 rounded-circle",style:{"background-image":"linear-gradient(45deg, #f9ce34, #ee2a7b, #6228d7)"}})]),_:1})]),_:1})]),_:1},8,["cols"]),w(Fs,{cols:n.$vuetify.display.mobile?12:7},{default:L(()=>[w(Dt,{class:"elevation-2"},{default:L(()=>[w(_t,null,{default:L(()=>e[7]||(e[7]=[oe("About Me")])),_:1}),w(zt,null,{default:L(()=>[oe(pe(i.description),1)]),_:1})]),_:1}),w(Dt,{class:"elevation-2 mt-3"},{default:L(()=>[w(_t,null,{default:L(()=>e[8]||(e[8]=[oe("Techstacks")])),_:1}),w(mo,{readonly:""},{default:L(()=>[(q(!0),Te(ke,null,st(i.techstacks,a=>(q(),ae(rn,null,{default:L(()=>[w(Cn,null,{default:L(()=>[oe(pe(a.name),1)]),_:2},1024),w(Uy,{class:"mt-2 d-flex align-content-start flex-wrap"},{default:L(()=>[(q(!0),Te(ke,null,st(a.skills,l=>(q(),ae(ut,{"max-height":"40px","max-width":"40px",src:l.icon,title:l.name,alt:l.name,class:"mx-1"},null,8,["src","title","alt"]))),256))]),_:2},1024)]),_:2},1024))),256))]),_:1})]),_:1})]),_:1},8,["cols"]),w(Fs,{cols:n.$vuetify.display.mobile?12:3},{default:L(()=>[w(Dt,{class:"elevation-2"},{default:L(()=>[w(_t,null,{default:L(()=>e[9]||(e[9]=[oe("Education")])),_:1}),(q(!0),Te(ke,null,st(i.educations,(a,l)=>(q(),ae(vh,{key:l},{default:L(()=>[ze("div",Yy,[w(ut,{class:"mx-auto",src:a.logo,"min-width":"100","max-width":"150","max-height":"150"},null,8,["src"]),ze("div",Jy,[ze("h4",null,pe(a.degree),1),ze("p",null,pe(`Field: ${a.field}`),1),ze("p",null,pe(`Institution: ${a.institution}`),1),ze("p",null,pe(`Graduate: ${a.graduationDate}`),1),ze("p",null,pe(`Cumulative GPA: ${a.gpa}`),1)])])]),_:2},1024))),128))]),_:1})]),_:1},8,["cols"])]),_:1}))]),_:1})}const eE=qn(Qy,[["render",Zy]]),tE={props:{modal:Boolean,modalLoading:Boolean,project:{title:String,subtitle:String,description:[String],link:{title:String,url:String},repository:String,techstacks:[String],artefacts:[String],thumbnail:String}},emits:["update:modal","update:modalLoading"],setup(n,e){return{closeModal:()=>{e.emit("update:modal",!1),e.emit("update:modalLoading",!0)},updateModal:i=>{console.log(i),e.emit("update:modal",i),e.emit("update:modalLoading",!i)}}}},Bs=Symbol("Forwarded refs");function Us(n,e){let t=n;for(;t;){const r=Reflect.getOwnPropertyDescriptor(t,e);if(r)return r;t=Object.getPrototypeOf(t)}}function nE(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),r=1;r<e;r++)t[r-1]=arguments[r];return n[Bs]=t,new Proxy(n,{get(i,o){if(Reflect.has(i,o))return Reflect.get(i,o);if(!(typeof o=="symbol"||o.startsWith("$")||o.startsWith("__"))){for(const a of t)if(a.value&&Reflect.has(a.value,o)){const l=Reflect.get(a.value,o);return typeof l=="function"?l.bind(a.value):l}}},has(i,o){if(Reflect.has(i,o))return!0;if(typeof o=="symbol"||o.startsWith("$")||o.startsWith("__"))return!1;for(const a of t)if(a.value&&Reflect.has(a.value,o))return!0;return!1},set(i,o,a){if(Reflect.has(i,o))return Reflect.set(i,o,a);if(typeof o=="symbol"||o.startsWith("$")||o.startsWith("__"))return!1;for(const l of t)if(l.value&&Reflect.has(l.value,o))return Reflect.set(l.value,o,a);return!1},getOwnPropertyDescriptor(i,o){var l;const a=Reflect.getOwnPropertyDescriptor(i,o);if(a)return a;if(!(typeof o=="symbol"||o.startsWith("$")||o.startsWith("__"))){for(const h of t){if(!h.value)continue;const d=Us(h.value,o)??("_"in h.value?Us((l=h.value._)==null?void 0:l.setupState,o):void 0);if(d)return d}for(const h of t){const d=h.value&&h.value[Bs];if(!d)continue;const m=d.slice();for(;m.length;){const _=m.shift(),y=Us(_.value,o);if(y)return y;const b=_.value&&_.value[Bs];b&&m.push(...b)}}}}})}const rE=K({fullscreen:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,...$d({origin:"center center",scrollStrategy:"block",transition:{component:fy},zIndex:2400})},"VDialog"),iE=te()({name:"VDialog",props:rE(),emits:{"update:modelValue":n=>!0,afterEnter:()=>!0,afterLeave:()=>!0},setup(n,e){let{emit:t,slots:r}=e;const i=Sn(n,"modelValue"),{scopeId:o}=jd(),a=Ge();function l(m){var b,C;const _=m.relatedTarget,y=m.target;if(_!==y&&((b=a.value)!=null&&b.contentEl)&&((C=a.value)!=null&&C.globalTop)&&![document,a.value.contentEl].includes(y)&&!a.value.contentEl.contains(y)){const R=qd(a.value.contentEl);if(!R.length)return;const P=R[0],N=R[R.length-1];_===P?N.focus():P.focus()}}gu&&vt(()=>i.value&&n.retainFocus,m=>{m?document.addEventListener("focusin",l):document.removeEventListener("focusin",l)},{immediate:!0});function h(){var m;t("afterEnter"),(m=a.value)!=null&&m.contentEl&&!a.value.contentEl.contains(document.activeElement)&&a.value.contentEl.focus({preventScroll:!0})}function d(){t("afterLeave")}return vt(i,async m=>{var _;m||(await po(),(_=a.value.activatorEl)==null||_.focus({preventScroll:!0}))}),ce(()=>{const m=Za.filterProps(n),_=it({"aria-haspopup":"dialog"},n.activatorProps),y=it({tabindex:-1},n.contentProps);return w(Za,it({ref:a,class:["v-dialog",{"v-dialog--fullscreen":n.fullscreen,"v-dialog--scrollable":n.scrollable},n.class],style:n.style},m,{modelValue:i.value,"onUpdate:modelValue":b=>i.value=b,"aria-modal":"true",activatorProps:_,contentProps:y,role:"dialog",onAfterEnter:h,onAfterLeave:d},o),{activator:r.activator,default:function(){for(var b=arguments.length,C=new Array(b),R=0;R<b;R++)C[R]=arguments[R];return w(Ze,{root:"VDialog"},{default:()=>{var P;return[(P=r.default)==null?void 0:P.call(r,...C)]}})}})}),nE({},a)}}),sE={key:0,width:"100%",class:"d-flex justify-center"},oE=["href"],aE={class:"my-1"};function lE(n,e,t,r,i,o){return q(),ae(iE,{modelValue:t.modal,"onUpdate:modelValue":r.updateModal},{default:L(()=>[t.modalLoading?(q(),Te("div",sE,[w(jn,{class:"m-auto",color:"primary",indeterminate:"",size:"128"})])):(q(),ae(Dt,{key:1,class:"mx-auto","max-width":n.$vuetify.display.mobile?"100%":"60%"},{default:L(()=>[w(Ho,{class:"justify-end"},{default:L(()=>[t.project.repository?(q(),ae(nn,{key:0,icon:"",href:t.project.repository,target:"_blank"},{default:L(()=>[w(et,null,{default:L(()=>e[0]||(e[0]=[oe("mdi-github")])),_:1})]),_:1},8,["href"])):on("",!0),w(nn,{icon:"",onClick:r.closeModal,rounded:"circle"},{default:L(()=>[w(et,null,{default:L(()=>e[1]||(e[1]=[oe("mdi-close")])),_:1})]),_:1},8,["onClick"])]),_:1}),t.project.thumbnail?(q(),ae(ut,{key:0,src:t.project.thumbnail,"max-height":"300",class:"bg-white"},null,8,["src"])):on("",!0),w(_t,null,{default:L(()=>[oe(pe(t.project.title),1)]),_:1}),w(qt,null,{default:L(()=>[oe(pe(t.project.subtitle),1)]),_:1}),t.project.link?(q(),ae(qt,{key:1},{default:L(()=>[ze("a",{href:t.project.link.url,target:"_blank"},pe(t.project.link.title),9,oE)]),_:1})):on("",!0),w(zt,{class:"pa-4"},{default:L(()=>[(q(!0),Te(ke,null,st(t.project.description,a=>(q(),Te("p",aE,pe(a),1))),256))]),_:1}),w(zt,{class:"d-flex"},{default:L(()=>[(q(!0),Te(ke,null,st(t.project.techstacks,a=>(q(),ae(ut,{src:a,title:a.split(".")[0],alt:a.split(".")[0],"max-width":"50","max-height":"50",class:"mx-2"},null,8,["src","title","alt"]))),256))]),_:1})]),_:1},8,["max-width"]))]),_:1},8,["modelValue","onUpdate:modelValue"])}const uE=qn(tE,[["render",lE],["__scopeId","data-v-cea1616e"]]),cE={data(){return{modal:!1,modalLoading:!0,project:{}}},methods:{async showProjectDetail(n){this.project={},this.modal=!0;const e=Wp(jr,"projects",n),t=await o_(e);if(t.exists()){let r=t.data();if(r.thumbnail){const i=Et(Tt,`${wt}/pictures/${r.thumbnail}`);r.thumbnail=await yt(i)}r.techstacks=await Promise.all(r.techstacks.map(async i=>{const o=Et(Tt,`${wt}/icons/${i}`);return await yt(o)})),r.artefacts=await Promise.all(r.artefacts.map(async i=>{const o=Et(Tt,`${wt}/icons/${i}`);return await yt(o)})),this.project=r,this.modalLoading=!1}}}};function hE(n,e,t,r,i,o){const a=uE,l=eE,h=Wy,d=uy,m=ry;return q(),ae(qr,null,{default:L(()=>[w(a,{project:i.project,modal:i.modal,"onUpdate:modal":e[0]||(e[0]=_=>i.modal=_),modalLoading:i.modalLoading,"onUpdate:modalLoading":e[1]||(e[1]=_=>i.modalLoading=_)},null,8,["project","modal","modalLoading"]),w(l),w(h),w(d,{showProjectDetail:o.showProjectDetail},null,8,["showProjectDetail"]),w(m)]),_:1})}const pE=qn(cE,[["render",hE]]);export{pE as default};
