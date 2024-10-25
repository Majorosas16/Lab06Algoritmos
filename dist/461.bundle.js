/*! For license information please see 461.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunklab3algoritmos=self.webpackChunklab3algoritmos||[]).push([[461],{743:(e,t,n)=>{n.d(t,{Bd:()=>f,FA:()=>_,Fy:()=>u,Ku:()=>C,T9:()=>l,Uj:()=>s,ZQ:()=>d,bD:()=>E,cY:()=>h,eX:()=>b,g:()=>v,nr:()=>g,p7:()=>p,yU:()=>c,zW:()=>m});const r=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},i={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let t=0;t<e.length;t+=3){const i=e[t],a=t+1<e.length,s=a?e[t+1]:0,o=t+2<e.length,c=o?e[t+2]:0,l=i>>2,h=(3&i)<<4|s>>4;let u=(15&s)<<2|c>>6,d=63&c;o||(d=64,a||(u=64)),r.push(n[l],n[h],n[u],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(r(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const a=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&a)}else if(i>239&&i<365){const a=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(a>>10)),t[r++]=String.fromCharCode(56320+(1023&a))}else{const a=e[n++],s=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&a)<<6|63&s)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let t=0;t<e.length;){const i=n[e.charAt(t++)],s=t<e.length?n[e.charAt(t)]:0;++t;const o=t<e.length?n[e.charAt(t)]:64;++t;const c=t<e.length?n[e.charAt(t)]:64;if(++t,null==i||null==s||null==o||null==c)throw new a;const l=i<<2|s>>4;if(r.push(l),64!==o){const e=s<<4&240|o>>2;if(r.push(e),64!==c){const e=o<<6&192|c;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class a extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const s=function(e){return function(e){const t=r(e);return i.encodeByteArray(t,!0)}(e).replace(/\./g,"")},o=()=>{try{return function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==n.g)return n.g;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__||(()=>{if("undefined"==typeof process||void 0===process.env)return;const e=process.env.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0})()||(()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}const t=e&&function(e){try{return i.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null}(e[1]);return t&&JSON.parse(t)})()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},c=e=>{const t=(e=>{var t,n;return null===(n=null===(t=o())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]})(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),r]:[t.substring(0,n),r]},l=()=>{var e;return null===(e=o())||void 0===e?void 0:e.config};class h{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}function u(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=t||"demo-project",r=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e);return[s(JSON.stringify({alg:"none",type:"JWT"})),s(JSON.stringify(a)),""].join(".")}function d(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function f(){return"undefined"!=typeof window||p()}function p(){return"undefined"!=typeof WorkerGlobalScope&&"undefined"!=typeof self&&self instanceof WorkerGlobalScope}function g(){return!function(){var e;const t=null===(e=o())||void 0===e?void 0:e.forceEnvironment;if("node"===t)return!0;if("browser"===t)return!1;try{return"[object process]"===Object.prototype.toString.call(n.g.process)}catch(e){return!1}}()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function m(){try{return"object"==typeof indexedDB}catch(e){return!1}}function b(){return new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}}))}class v extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,v.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,_.prototype.create)}}class _{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],a=i?function(e,t){return e.replace(y,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}(i,n):"Error",s=`${this.serviceName}: ${a} (${r}).`;return new v(r,s,n)}}const y=/\{\$([^}]+)}/g;function E(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],a=t[i];if(w(n)&&w(a)){if(!E(n,a))return!1}else if(n!==a)return!1}for(const e of r)if(!n.includes(e))return!1;return!0}function w(e){return null!==e&&"object"==typeof e}function C(e){return e&&e._delegate?e._delegate:e}},461:(e,t,n)=>{n.d(t,{Dk:()=>re,HG:()=>K,He:()=>oe,KO:()=>ae,MF:()=>Q,NM:()=>ie,SV:()=>P,Sx:()=>ne,Tj:()=>j,U6:()=>G,Us:()=>J,Wp:()=>ee,aP:()=>se,g:()=>a.g,iF:()=>$,j6:()=>W,mq:()=>V,om:()=>x,pN:()=>te,xZ:()=>X,yX:()=>z,yi:()=>U});var r=n(125),i=n(424),a=n(743),s=n(148);class o{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}const c="@firebase/app",l="0.10.13",h=new i.Vy("@firebase/app"),u="@firebase/app-compat",d="@firebase/analytics-compat",f="@firebase/analytics",p="@firebase/app-check-compat",g="@firebase/app-check",m="@firebase/auth",b="@firebase/auth-compat",v="@firebase/database",_="@firebase/data-connect",y="@firebase/database-compat",E="@firebase/functions",w="@firebase/functions-compat",C="@firebase/installations",S="@firebase/installations-compat",D="@firebase/messaging",I="@firebase/messaging-compat",A="@firebase/performance",O="@firebase/performance-compat",N="@firebase/remote-config",T="@firebase/remote-config-compat",B="@firebase/storage",R="@firebase/storage-compat",L="@firebase/firestore",H="@firebase/vertexai-preview",M="@firebase/firestore-compat",k="firebase",$="[DEFAULT]",F={[c]:"fire-core",[u]:"fire-core-compat",[f]:"fire-analytics",[d]:"fire-analytics-compat",[g]:"fire-app-check",[p]:"fire-app-check-compat",[m]:"fire-auth",[b]:"fire-auth-compat",[v]:"fire-rtdb",[_]:"fire-data-connect",[y]:"fire-rtdb-compat",[E]:"fire-fn",[w]:"fire-fn-compat",[C]:"fire-iid",[S]:"fire-iid-compat",[D]:"fire-fcm",[I]:"fire-fcm-compat",[A]:"fire-perf",[O]:"fire-perf-compat",[N]:"fire-rc",[T]:"fire-rc-compat",[B]:"fire-gcs",[R]:"fire-gcs-compat",[L]:"fire-fst",[M]:"fire-fst-compat",[H]:"fire-vertex","fire-js":"fire-js",[k]:"fire-js-all"},P=new Map,j=new Map,z=new Map;function U(e,t){try{e.container.addComponent(t)}catch(n){h.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function V(e,t){e.container.addOrOverwriteComponent(t)}function x(e){const t=e.name;if(z.has(t))return h.debug(`There were multiple attempts to register component ${t}.`),!1;z.set(t,e);for(const t of P.values())U(t,e);for(const t of j.values())U(t,e);return!0}function W(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function J(e,t,n=$){W(e,t).clearInstance(n)}function G(e){return void 0!==e.options}function X(e){return void 0!==e.settings}function K(){z.clear()}const Y=new a.FA("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."});class Z{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.uA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Y.create("app-deleted",{appName:this._name})}}class q extends Z{constructor(e,t,n,r){const i=void 0!==t.automaticDataCollectionEnabled&&t.automaticDataCollectionEnabled,a={name:n,automaticDataCollectionEnabled:i};void 0!==e.apiKey?super(e,a,r):super(e.options,a,r),this._serverConfig=Object.assign({automaticDataCollectionEnabled:i},t),this._finalizationRegistry=null,"undefined"!=typeof FinalizationRegistry&&(this._finalizationRegistry=new FinalizationRegistry((()=>{this.automaticCleanup()}))),this._refCount=0,this.incRefCount(this._serverConfig.releaseOnDeref),this._serverConfig.releaseOnDeref=void 0,t.releaseOnDeref=void 0,ae(c,l,"serverapp")}toJSON(){}get refCount(){return this._refCount}incRefCount(e){this.isDeleted||(this._refCount++,void 0!==e&&null!==this._finalizationRegistry&&this._finalizationRegistry.register(e,this))}decRefCount(){return this.isDeleted?0:--this._refCount}automaticCleanup(){ie(this)}get settings(){return this.checkDestroyed(),this._serverConfig}checkDestroyed(){if(this.isDeleted)throw Y.create("server-app-deleted")}}const Q="10.14.1";function ee(e,t={}){let n=e;"object"!=typeof t&&(t={name:t});const i=Object.assign({name:$,automaticDataCollectionEnabled:!1},t),s=i.name;if("string"!=typeof s||!s)throw Y.create("bad-app-name",{appName:String(s)});if(n||(n=(0,a.T9)()),!n)throw Y.create("no-options");const o=P.get(s);if(o){if((0,a.bD)(n,o.options)&&(0,a.bD)(i,o.config))return o;throw Y.create("duplicate-app",{appName:s})}const c=new r.h1(s);for(const e of z.values())c.addComponent(e);const l=new Z(n,i,c);return P.set(s,l),l}function te(e,t){if((0,a.Bd)()&&!(0,a.p7)())throw Y.create("invalid-server-app-environment");let n;void 0===t.automaticDataCollectionEnabled&&(t.automaticDataCollectionEnabled=!1),n=G(e)?e.options:e;const i=Object.assign(Object.assign({},t),n);if(void 0!==i.releaseOnDeref&&delete i.releaseOnDeref,void 0!==t.releaseOnDeref&&"undefined"==typeof FinalizationRegistry)throw Y.create("finalization-registry-not-supported",{});const s=""+(o=JSON.stringify(i),[...o].reduce(((e,t)=>Math.imul(31,e)+t.charCodeAt(0)|0),0));var o;const c=j.get(s);if(c)return c.incRefCount(t.releaseOnDeref),c;const l=new r.h1(s);for(const e of z.values())l.addComponent(e);const h=new q(n,t,s,l);return j.set(s,h),h}function ne(e=$){const t=P.get(e);if(!t&&e===$&&(0,a.T9)())return ee();if(!t)throw Y.create("no-app",{appName:e});return t}function re(){return Array.from(P.values())}async function ie(e){let t=!1;const n=e.name;P.has(n)?(t=!0,P.delete(n)):j.has(n)&&e.decRefCount()<=0&&(j.delete(n),t=!0),t&&(await Promise.all(e.container.getProviders().map((e=>e.delete()))),e.isDeleted=!0)}function ae(e,t,n){var i;let a=null!==(i=F[e])&&void 0!==i?i:e;n&&(a+=`-${n}`);const s=a.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const e=[`Unable to register library "${a}" with version "${t}":`];return s&&e.push(`library name "${a}" contains illegal characters (whitespace or "/")`),s&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void h.warn(e.join(" "))}x(new r.uA(`${a}-version`,(()=>({library:a,version:t})),"VERSION"))}function se(e,t){if(null!==e&&"function"!=typeof e)throw Y.create("invalid-log-argument");(0,i.Ey)(e,t)}function oe(e){(0,i.He)(e)}const ce="firebase-heartbeat-database",le=1,he="firebase-heartbeat-store";let ue=null;function de(){return ue||(ue=(0,s.openDB)(ce,le,{upgrade:(e,t)=>{if(0===t)try{e.createObjectStore(he)}catch(e){console.warn(e)}}}).catch((e=>{throw Y.create("idb-open",{originalErrorMessage:e.message})}))),ue}async function fe(e,t){try{const n=(await de()).transaction(he,"readwrite"),r=n.objectStore(he);await r.put(t,pe(e)),await n.done}catch(e){if(e instanceof a.g)h.warn(e.message);else{const t=Y.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});h.warn(t.message)}}}function pe(e){return`${e.name}!${e.options.appId}`}class ge{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new be(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){var e,t;try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=me();if(null==(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)&&(this._heartbeatsCache=await this._heartbeatsCachePromise,null==(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)))return;if(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some((e=>e.date===r)))return;return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}catch(e){h.warn(e)}}async getHeartbeatsHeader(){var e;try{if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null==(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)||0===this._heartbeatsCache.heartbeats.length)return"";const t=me(),{heartbeatsToSend:n,unsentEntries:r}=function(e,t=1024){const n=[];let r=e.slice();for(const i of e){const e=n.find((e=>e.agent===i.agent));if(e){if(e.dates.push(i.date),ve(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),ve(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),i=(0,a.Uj)(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(e){return h.warn(e),""}}}function me(){return(new Date).toISOString().substring(0,10)}class be{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,a.zW)()&&(0,a.eX)().then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){const e=await async function(e){try{const t=(await de()).transaction(he),n=await t.objectStore(he).get(pe(e));return await t.done,n}catch(e){if(e instanceof a.g)h.warn(e.message);else{const t=Y.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});h.warn(t.message)}}}(this.app);return(null==e?void 0:e.heartbeats)?e:{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return fe(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return fe(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function ve(e){return(0,a.Uj)(JSON.stringify({version:2,heartbeats:e})).length}x(new r.uA("platform-logger",(e=>new o(e)),"PRIVATE")),x(new r.uA("heartbeat",(e=>new ge(e)),"PRIVATE")),ae(c,l,""),ae(c,l,"esm2017"),ae("fire-js","")},125:(e,t,n)=>{n.d(t,{h1:()=>o,uA:()=>i});var r=n(743);class i{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}const a="[DEFAULT]";class s{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new r.cY;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}(e))try{this.getOrInitializeService({instanceIdentifier:a})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e=a){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=a){return this.instances.has(e)}getOptions(e=a){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries())n===this.normalizeInstanceIdentifier(e)&&t.resolve(r);return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const a=this.instances.get(r);return a&&e(a,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(r=e,r===a?void 0:r),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var r;return n||null}normalizeInstanceIdentifier(e=a){return this.component?this.component.multipleInstances?e:a:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class o{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new s(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},424:(e,t,n)=>{n.d(t,{$b:()=>i,Ey:()=>u,He:()=>h,Vy:()=>l});const r=[];var i;!function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"}(i||(i={}));const a={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},s=i.INFO,o={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},c=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=o[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class l{constructor(e){this.name=e,this._logLevel=s,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in i))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?a[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...e),this._logHandler(this,i.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...e),this._logHandler(this,i.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,i.INFO,...e),this._logHandler(this,i.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,i.WARN,...e),this._logHandler(this,i.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...e),this._logHandler(this,i.ERROR,...e)}}function h(e){r.forEach((t=>{t.setLogLevel(e)}))}function u(e,t){for(const n of r){let r=null;t&&t.level&&(r=a[t.level]),n.userLogHandler=null===e?null:(t,n,...a)=>{const s=a.map((e=>{if(null==e)return null;if("string"==typeof e)return e;if("number"==typeof e||"boolean"==typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(e){return null}})).filter((e=>e)).join(" ");n>=(null!=r?r:t.logLevel)&&e({level:i[n].toLowerCase(),message:s,args:a,type:t.name})}}}}}]);