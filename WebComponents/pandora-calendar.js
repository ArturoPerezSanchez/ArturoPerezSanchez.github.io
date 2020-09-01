const t=new WeakMap,e=e=>"function"==typeof e&&t.has(e),s=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,i=function(t,e){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;for(;e!==s;){const s=e.nextSibling;t.removeChild(e),e=s}},r={},n={},o=`{{lit-${String(Math.random()).slice(2)}}}`,a=`\x3c!--${o}--\x3e`,l=new RegExp(`${o}|${a}`),d="$lit$";class h{constructor(t,e){this.parts=[],this.element=e;const s=[],i=[],r=document.createTreeWalker(e.content,133,null,!1);let n=0,a=-1,h=0;const{strings:u,values:{length:y}}=t;for(;h<y;){const t=r.nextNode();if(null!==t){if(a++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:s}=e;let i=0;for(let t=0;t<s;t++)c(e[t].name,d)&&i++;for(;i-- >0;){const e=u[h],s=g.exec(e)[2],i=s.toLowerCase()+d,r=t.getAttribute(i);t.removeAttribute(i);const n=r.split(l);this.parts.push({type:"attribute",index:a,name:s,strings:n}),h+=n.length-1}}"TEMPLATE"===t.tagName&&(i.push(t),r.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(o)>=0){const i=t.parentNode,r=e.split(l),n=r.length-1;for(let e=0;e<n;e++){let s,n=r[e];if(""===n)s=p();else{const t=g.exec(n);null!==t&&c(t[2],d)&&(n=n.slice(0,t.index)+t[1]+t[2].slice(0,-d.length)+t[3]),s=document.createTextNode(n)}i.insertBefore(s,t),this.parts.push({type:"node",index:++a})}""===r[n]?(i.insertBefore(p(),t),s.push(t)):t.data=r[n],h+=n}}else if(8===t.nodeType)if(t.data===o){const e=t.parentNode;null!==t.previousSibling&&a!==n||(a++,e.insertBefore(p(),t)),n=a,this.parts.push({type:"node",index:a}),null===t.nextSibling?t.data="":(s.push(t),a--),h++}else{let e=-1;for(;-1!==(e=t.data.indexOf(o,e+1));)this.parts.push({type:"node",index:-1}),h++}}else r.currentNode=i.pop()}for(const t of s)t.parentNode.removeChild(t)}}const c=(t,e)=>{const s=t.length-e.length;return s>=0&&t.slice(s)===e},u=t=>-1!==t.index,p=()=>document.createComment(""),g=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;class y{constructor(t,e,s){this.__parts=[],this.template=t,this.processor=e,this.options=s}update(t){let e=0;for(const s of this.__parts)void 0!==s&&s.setValue(t[e]),e++;for(const t of this.__parts)void 0!==t&&t.commit()}_clone(){const t=s?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=[],i=this.template.parts,r=document.createTreeWalker(t,133,null,!1);let n,o=0,a=0,l=r.nextNode();for(;o<i.length;)if(n=i[o],u(n)){for(;a<n.index;)a++,"TEMPLATE"===l.nodeName&&(e.push(l),r.currentNode=l.content),null===(l=r.nextNode())&&(r.currentNode=e.pop(),l=r.nextNode());if("node"===n.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(l.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(l,n.name,n.strings,this.options));o++}else this.__parts.push(void 0),o++;return s&&(document.adoptNode(t),customElements.upgrade(t)),t}}const f=` ${o} `;class b{constructor(t,e,s,i){this.strings=t,this.values=e,this.type=s,this.processor=i}getHTML(){const t=this.strings.length-1;let e="",s=!1;for(let i=0;i<t;i++){const t=this.strings[i],r=t.lastIndexOf("\x3c!--");s=(r>-1||s)&&-1===t.indexOf("--\x3e",r+1);const n=g.exec(t);e+=null===n?t+(s?f:a):t.substr(0,n.index)+n[1]+n[2]+d+n[3]+o}return e+=this.strings[t]}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}const _=t=>null===t||!("object"==typeof t||"function"==typeof t),m=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class v{constructor(t,e,s){this.dirty=!0,this.element=t,this.name=e,this.strings=s,this.parts=[];for(let t=0;t<s.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new w(this)}_getValue(){const t=this.strings,e=t.length-1;let s="";for(let i=0;i<e;i++){s+=t[i];const e=this.parts[i];if(void 0!==e){const t=e.value;if(_(t)||!m(t))s+="string"==typeof t?t:String(t);else for(const e of t)s+="string"==typeof e?e:String(e)}}return s+=t[e]}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class w{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===r||_(t)&&t===this.value||(this.value=t,e(t)||(this.committer.dirty=!0))}commit(){for(;e(this.value);){const t=this.value;this.value=r,t(this)}this.value!==r&&this.committer.commit()}}class S{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(p()),this.endNode=t.appendChild(p())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=p()),t.__insert(this.endNode=p())}insertAfterPart(t){t.__insert(this.startNode=p()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){for(;e(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=r,t(this)}const t=this.__pendingValue;t!==r&&(_(t)?t!==this.value&&this.__commitText(t):t instanceof b?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):m(t)?this.__commitIterable(t):t===n?(this.value=n,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,s="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=s:this.__commitNode(document.createTextNode(s)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof y&&this.value.template===e)this.value.update(t.values);else{const s=new y(e,t.processor,this.options),i=s._clone();s.update(t.values),this.__commitNode(i),this.value=s}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let s,i=0;for(const r of t)void 0===(s=e[i])&&(s=new S(this.options),e.push(s),0===i?s.appendIntoPart(this):s.insertAfterPart(e[i-1])),s.setValue(r),s.commit(),i++;i<e.length&&(e.length=i,this.clear(s&&s.endNode))}clear(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.startNode;i(this.startNode.parentNode,t.nextSibling,this.endNode)}}class x{constructor(t,e,s){if(this.value=void 0,this.__pendingValue=void 0,2!==s.length||""!==s[0]||""!==s[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=s}setValue(t){this.__pendingValue=t}commit(){for(;e(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=r,t(this)}if(this.__pendingValue===r)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=r}}class k extends v{constructor(t,e,s){super(t,e,s),this.single=2===s.length&&""===s[0]&&""===s[1]}_createPart(){return new D(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class D extends w{}let P=!1;try{const t={get capture(){return P=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}class C{constructor(t,e,s){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=s,this.__boundHandleEvent=(t=>this.handleEvent(t))}setValue(t){this.__pendingValue=t}commit(){for(;e(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=r,t(this)}if(this.__pendingValue===r)return;const t=this.__pendingValue,s=this.value,i=null==t||null!=s&&(t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive),n=null!=t&&(null==s||i);i&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),n&&(this.__options=N(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=r}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const N=t=>t&&(P?{capture:t.capture,passive:t.passive,once:t.once}:t.capture);const A=new class{handleAttributeExpressions(t,e,s,i){const r=e[0];return"."===r?new k(t,e.slice(1),s).parts:"@"===r?[new C(t,e.slice(1),i.eventContext)]:"?"===r?[new x(t,e.slice(1),s)]:new v(t,e,s).parts}handleTextExpression(t){return new S(t)}};function E(t){let e=T.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},T.set(t.type,e));let s=e.stringsArray.get(t.strings);if(void 0!==s)return s;const i=t.strings.join(o);return void 0===(s=e.keyString.get(i))&&(s=new h(t,t.getTemplateElement()),e.keyString.set(i,s)),e.stringsArray.set(t.strings,s),s}const T=new Map,M=new WeakMap;(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.1.2");const V=function(t){for(var e=arguments.length,s=new Array(e>1?e-1:0),i=1;i<e;i++)s[i-1]=arguments[i];return new b(t,s,"html",A)},$=133;function R(t,e){const{element:{content:s},parts:i}=t,r=document.createTreeWalker(s,$,null,!1);let n=U(i),o=i[n],a=-1,l=0;const d=[];let h=null;for(;r.nextNode();){a++;const t=r.currentNode;for(t.previousSibling===h&&(h=null),e.has(t)&&(d.push(t),null===h&&(h=t)),null!==h&&l++;void 0!==o&&o.index===a;)o.index=null!==h?-1:o.index-l,o=i[n=U(i,n)]}d.forEach(t=>t.parentNode.removeChild(t))}const O=t=>{let e=11===t.nodeType?0:1;const s=document.createTreeWalker(t,$,null,!1);for(;s.nextNode();)e++;return e},U=function(t){for(let e=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1)+1;e<t.length;e++){const s=t[e];if(u(s))return e}return-1};const q=(t,e)=>`${t}--${e}`;let z=!0;void 0===window.ShadyCSS?z=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),z=!1);const L=t=>e=>{const s=q(e.type,t);let i=T.get(s);void 0===i&&(i={stringsArray:new WeakMap,keyString:new Map},T.set(s,i));let r=i.stringsArray.get(e.strings);if(void 0!==r)return r;const n=e.strings.join(o);if(void 0===(r=i.keyString.get(n))){const s=e.getTemplateElement();z&&window.ShadyCSS.prepareTemplateDom(s,t),r=new h(e,s),i.keyString.set(n,r)}return i.stringsArray.set(e.strings,r),r},F=["html","svg"],B=new Set,j=(t,e,s)=>{B.add(t);const i=s?s.element:document.createElement("template"),r=e.querySelectorAll("style"),{length:n}=r;if(0===n)return void window.ShadyCSS.prepareTemplateStyles(i,t);const o=document.createElement("style");for(let t=0;t<n;t++){const e=r[t];e.parentNode.removeChild(e),o.textContent+=e.textContent}(t=>{F.forEach(e=>{const s=T.get(q(e,t));void 0!==s&&s.keyString.forEach(t=>{const{element:{content:e}}=t,s=new Set;Array.from(e.querySelectorAll("style")).forEach(t=>{s.add(t)}),R(t,s)})})})(t);const a=i.content;s?function(t,e){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;const{element:{content:i},parts:r}=t;if(null==s)return void i.appendChild(e);const n=document.createTreeWalker(i,$,null,!1);let o=U(r),a=0,l=-1;for(;n.nextNode();)for(l++,n.currentNode===s&&(a=O(e),s.parentNode.insertBefore(e,s));-1!==o&&r[o].index===l;){if(a>0){for(;-1!==o;)r[o].index+=a,o=U(r,o);return}o=U(r,o)}}(s,o,a.firstChild):a.insertBefore(o,a.firstChild),window.ShadyCSS.prepareTemplateStyles(i,t);const l=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==l)e.insertBefore(l.cloneNode(!0),e.firstChild);else if(s){a.insertBefore(o,a.firstChild);const t=new Set;t.add(o),R(s,t)}};window.JSCompiler_renameProperty=((t,e)=>t);const H={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},I=(t,e)=>e!==t&&(e==e||t==t),W={attribute:!0,type:String,converter:H,reflect:!1,hasChanged:I},J=Promise.resolve(!0),Y=1,G=4,K=8,Q=16,X=32,Z="finalized";class tt extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=J,this._hasConnectedResolver=void 0,this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach((e,s)=>{const i=this._attributeNameForProperty(s,e);void 0!==i&&(this._attributeToPropertyMap.set(i,s),t.push(i))}),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((t,e)=>this._classProperties.set(e,t))}}static createProperty(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:W;if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const s="symbol"==typeof t?Symbol():`__${t}`;Object.defineProperty(this.prototype,t,{get(){return this[s]},set(e){const i=this[t];this[s]=e,this._requestUpdate(t,i)},configurable:!0,enumerable:!0})}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty(Z)||t.finalize(),this[Z]=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const s of e)this.createProperty(s,t[s])}}static _attributeNameForProperty(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e){return(arguments.length>2&&void 0!==arguments[2]?arguments[2]:I)(t,e)}static _propertyValueFromAttribute(t,e){const s=e.type,i=e.converter||H,r="function"==typeof i?i:i.fromAttribute;return r?r(t,s):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const s=e.type,i=e.converter;return(i&&i.toAttribute||H.toAttribute)(t,s)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}})}_applyInstanceProperties(){this._instanceProperties.forEach((t,e)=>this[e]=t),this._instanceProperties=void 0}connectedCallback(){this._updateState=this._updateState|X,this._hasConnectedResolver&&(this._hasConnectedResolver(),this._hasConnectedResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,s){e!==s&&this._attributeToProperty(t,s)}_propertyToAttribute(t,e){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:W;const i=this.constructor,r=i._attributeNameForProperty(t,s);if(void 0!==r){const t=i._propertyValueToAttribute(e,s);if(void 0===t)return;this._updateState=this._updateState|K,null==t?this.removeAttribute(r):this.setAttribute(r,t),this._updateState=this._updateState&~K}}_attributeToProperty(t,e){if(this._updateState&K)return;const s=this.constructor,i=s._attributeToPropertyMap.get(t);if(void 0!==i){const t=s._classProperties.get(i)||W;this._updateState=this._updateState|Q,this[i]=s._propertyValueFromAttribute(e,t),this._updateState=this._updateState&~Q}}_requestUpdate(t,e){let s=!0;if(void 0!==t){const i=this.constructor,r=i._classProperties.get(t)||W;i._valueHasChanged(this[t],e,r.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==r.reflect||this._updateState&Q||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,r))):s=!1}!this._hasRequestedUpdate&&s&&this._enqueueUpdate()}requestUpdate(t,e){return this._requestUpdate(t,e),this.updateComplete}async _enqueueUpdate(){let t,e;this._updateState=this._updateState|G;const s=this._updatePromise;this._updatePromise=new Promise((s,i)=>{t=s,e=i});try{await s}catch(t){}this._hasConnected||await new Promise(t=>this._hasConnectedResolver=t);try{const t=this.performUpdate();null!=t&&await t}catch(t){e(t)}t(!this._hasRequestedUpdate)}get _hasConnected(){return this._updateState&X}get _hasRequestedUpdate(){return this._updateState&G}get hasUpdated(){return this._updateState&Y}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{(t=this.shouldUpdate(e))&&this.update(e)}catch(e){throw t=!1,e}finally{this._markUpdated()}t&&(this._updateState&Y||(this._updateState=this._updateState|Y,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=this._updateState&~G}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,e)=>this._propertyToAttribute(e,this[e],t)),this._reflectingProperties=void 0)}updated(t){}firstUpdated(t){}}tt[Z]=!0;const et="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,st=Symbol();class it{constructor(t,e){if(e!==st)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(et?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const rt=function(t){for(var e=arguments.length,s=new Array(e>1?e-1:0),i=1;i<e;i++)s[i-1]=arguments[i];const r=s.reduce((e,s,i)=>e+(t=>{if(t instanceof it)return t.cssText;if("number"==typeof t)return t;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(s)+t[i+1],t[0]);return new it(r,st)};(window.litElementVersions||(window.litElementVersions=[])).push("2.2.1");const nt=t=>t.flat?t.flat(1/0):function t(e){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];for(let i=0,r=e.length;i<r;i++){const r=e[i];Array.isArray(r)?t(r,s):s.push(r)}return s}(t);class ot extends tt{static finalize(){super.finalize.call(this),this._styles=this.hasOwnProperty(JSCompiler_renameProperty("styles",this))?this._getUniqueStyles():this._styles||[]}static _getUniqueStyles(){const t=this.styles,e=[];if(Array.isArray(t)){nt(t).reduceRight((t,e)=>(t.add(e),t),new Set).forEach(t=>e.unshift(t))}else t&&e.push(t);return e}initialize(){super.initialize(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?et?this.renderRoot.adoptedStyleSheets=t.map(t=>t.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(t=>t.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){super.update(t);const e=this.render();e instanceof b&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)}))}render(){}}ot.finalized=!0,ot.render=((t,e,s)=>{if(!s||"object"!=typeof s||!s.scopeName)throw new Error("The `scopeName` option is required.");const r=s.scopeName,n=M.has(e),o=z&&11===e.nodeType&&!!e.host,a=o&&!B.has(r),l=a?document.createDocumentFragment():e;if(((t,e,s)=>{let r=M.get(e);void 0===r&&(i(e,e.firstChild),M.set(e,r=new S(Object.assign({templateFactory:E},s))),r.appendInto(e)),r.setValue(t),r.commit()})(t,l,Object.assign({templateFactory:L(r)},s)),a){const t=M.get(l);M.delete(l);const s=t.value instanceof y?t.value.template:void 0;j(r,l,s),i(e,e.firstChild),e.appendChild(l),M.set(e,t)}!n&&o&&window.ShadyCSS.styleElement(e.host)});window.customElements.define("pandora-calendar",class extends ot{static get styles(){return rt`.container{width:100%;box-sizing:border-box}.button:focus + .bubble{display:block}.bubble:hover{display:block}.button{background-color:transparent;border:0;position:absolute;width:4vw;height:4vw;margin-left:-3vw;margin-top:-1vw;border-radius:50%;cursor:pointer}.bubble{position:relative;color:#fff;font-family:Arial;font-size:17px;line-height:100px;box-shadow:5px 5px 10px 1px #333;text-align:center;cursor:default;border-radius:0 23px 23px 23px;padding:0;z-index:1;margin-left:2vw;margin-top:24px;display:none;margin-top:1.2vw;font-size:.75em;color:#000;min-width:6vw;min-height:6vw;max-width:35vw;width:max-content;opacity:1}.bubble-text{line-height:initial;padding:2vw}.bubble:before{content:' ';position:absolute;display:block;border-style:solid;border-width:16px 5vw 16px 1vw;top:-16px}.bubble:after{content:' ';position:absolute;display:block;z-index:1;border-style:solid;border-color:transparent;border-width:2.5vw;top:-60px}.highlighted{border:2px solid #333;border-radius:50%;cursor:pointer}.header{width:100%;padding:2% 0 2% 0;background-color:#333;display:flex;flex-wrap:nowrap;text-align:center;align-items:center;justify-content:center;border-top:1px solid #000;border-left:1px solid #000;border-right:1px solid #000;font-size:2.5vw}.arrow{padding:5px;cursor:pointer;font-size:1.3em;width:100%;height:100%;margin-left:10%;margin-right:10%;border-radius:50%;border:1px solid transparent}.year-block{margin:0 2% 0 2%}.year{font-size:1.3em}.month{font-size:1.1em}.weekday-container{display:flex;flex-wrap:nowrap;width:98%;border-right:1px solid #000;border-left:1px solid #000;padding-left:2%;font-size:2vw}.weekday{width:14%;text-align:center;padding-top:1.5%;padding-bottom:1.5%}.body{display:flex;flex-wrap:wrap;margin:auto;width:98%;border:1px solid #000;border-top:0;padding-left:2%;padding-bottom:1%;padding-top:1%}.daybox{width:10%;text-align:center;padding-left:2%;padding-right:2%;padding-bottom:1%}.day{margin:auto;height:2vw;font-size:2vw;padding-bottom:1vw;padding-top:1vw}.transparency{opacity:.5}.text{padding-bottom:3px;margin:auto}.mobile{display:none}@media (max-width: 480px){.arrow{width:fit-content;margin:0;padding:0;padding-left:5%;text-align:left}.rotated{display:none}.mobile{display:block;text-align:right;padding:0;padding-right:5%}.header{flex-wrap:wrap}.year-block{width:100%}}`}static get properties(){return{arrowLeft:{type:String},arrowRight:{type:String},bubblecolor:{type:String},bubblesecondarycolor:{type:String},bubbletextcolor:{type:String},_currentDate:{type:Date},dates:{type:Array},daysbackgroundcolor:{type:String},dayscolor:{type:String},defaultDate:{type:String},headerbackgroundcolor:{type:String},headertextcolor:{type:String},highlighteddaycolor:{type:String},weekdaysbackgroundcolor:{type:String},weekdaystextcolor:{type:String},weekdaysvalues:{type:String},weekstart:{type:Number},_st:{type:String}}}constructor(){super(),this.dates=[],this.arrowLeft="🡄",this.arrowRight="🡆",this.bubblecolor="#333",this.bubbletextcolor="#fff",this.daysbackgroundcolor="white",this.dayscolor="#000",this.headerbackgroundcolor="#333",this.headertextcolor="white",this.highlighteddaycolor="#ccc",this.weekdaysbackgroundcolor="#ccc",this.weekdaysvalues="narrow",this.weekdaystextcolor="#000",this.weekstart=1,this._currentDate=new Date}render(){return V`${this._st}<div class="container"><div class="header"><div data-slide="${-1}" @click="${this.changeMonth}" class="arrow rotated desktop"></div><div class="year-block"><div class="year">${this._currentDate.getFullYear()}</div><div class="month">${this.getMonth()}</div></div><div data-slide="${1}" @click="${this.changeMonth}" class="arrow rotated mobile"></div><div data-slide="${1}" @click="${this.changeMonth}" class="arrow"></div></div><div class="weekday-container">${this.getWeekdays().map(t=>V`<div class="weekday">${t}</div>`)}</div><div class="body">${this.getBody()}</div></div>`}firstUpdated(){this.updateDefaultDate()}updateDefaultDate(){this.defaultDate?this._currentDate=new Date(parseInt(this.defaultDate,10)):this._currentDate=new Date}updated(t){t.forEach((t,e)=>{["_currentDate"].includes(e)?(this._currentDate.setDate(1),this.updateBubbles()):["defaultDate"].includes(e)?this.updateDefaultDate():["headerbackgroundcolor"].includes(e)?this.shadowRoot.querySelector(".header").style.background=this.headerbackgroundcolor:["headertextcolor"].includes(e)?this.shadowRoot.querySelector(".header").style.color=this.headertextcolor:["weekdaystextcolor"].includes(e)?this.shadowRoot.querySelector(".weekday-container").style.color=this.weekdaystextcolor:["weekdaysbackgroundcolor"].includes(e)?this.shadowRoot.querySelector(".weekday-container").style.background=this.weekdaysbackgroundcolor:["dayscolor"].includes(e)?this.shadowRoot.querySelector(".body").style.color=this.dayscolor:["daysbackgroundcolor"].includes(e)?this.shadowRoot.querySelector(".body").style.background=this.daysbackgroundcolor:["bubblecolor","bubblesecondarycolor","bubbletextcolor","highlighteddaycolor","currentDate","arrowLeft","arrowRight"].includes(e)&&(this.updateBubbles(),this.getst())})}updateBubbles(){const t=this.shadowRoot.querySelectorAll(".bubble");this.bubblesecondarycolor?t.forEach(t=>{t.style.background=`linear-gradient(135deg, ${this.bubblecolor} 10%, ${this.bubblesecondarycolor} 100%)`}):t.forEach(t=>{t.style.background=this.bubblecolor}),t.forEach(t=>{t.style.color=this.bubbletextcolor})}getst(){return this._st=V`<style>.arrow:after{content:'${this.arrowRight}'}.rotated:after{content:'${this.arrowLeft}'}.bubble:before{border-color:transparent;border-left-color:${this.bubblecolor}}.highlighted{background:${this.highlighteddaycolor}}</style>`,this._st}getWeekdays(){const t=[],e=[];for(let e=0;e<7;e+=1)t.push({index:this._currentDate.getDay(),day:this._currentDate.toLocaleString(window.navigator.language,{weekday:this.weekdaysvalues})}),this._currentDate.setDate(this._currentDate.getDate()+1);this._currentDate.setDate(this._currentDate.getDate()-7),t.sort((t,e)=>t.index>e.index?1:-1),t.forEach(t=>e.push(t.day));for(let t=0;t<this.weekstart;t+=1)e.push(e.shift());return e}getMonth(){const t=this._currentDate.toLocaleString(window.navigator.language,{month:"long"});return t.charAt(0).toUpperCase()+t.slice(1)}getMonthFirstWeekDay(){return new Date(this._currentDate.getFullYear(),this._currentDate.getMonth(),1).getDay()}getMonthLastDay(){return new Date(this._currentDate.getFullYear(),this._currentDate.getMonth()+1,0).getDate()}getPreviousMonthLastDay(){return new Date(this._currentDate.getFullYear(),this._currentDate.getMonth(),0).getDate()}getBody(){const t=[],e=this.getPreviousMonthLastDay(),s=this.getMonthLastDay(),i=(this.getMonthFirstWeekDay()-this.weekstart+7)%7;let r;for(let s=0;s<i;s+=1){const n=e+s-i+1;r=this.highlightedDayBefore(n),t.push(V`<div class="daybox"><div class="day transparency ${r?"highlighted":""}"><div class="text">${n}${r?V`<input type="button" class="button"><div class="bubble"><div class="bubble-text">${r.text}</div></div>`:V``}</div></div></div>`)}for(let e=1;e<=s;e+=1)r=this.highlightedDay(e),t.push(V`<div class="daybox"><div class="day ${r?"highlighted":""}"><div class="text">${e} ${r?V`<input type="button" class="button"><div class="bubble"><div class="bubble-text">${r.text}</div></div>`:V``}</div></div></div>`);const n=7-t.length%7;if(7!==n)for(let e=1;e<=n;e+=1)r=this.highlightedDayAfter(e),t.push(V`<div class="daybox"><div class="day transparency ${r?"highlighted":""}"><div class="text">${e}${r?V`<input type="button" class="button"><div class="bubble"><div class="bubble-text">${r.text}</div></div>`:V``}</div></div></div>`);return t}changeMonth(t){this._currentDate=new Date(this._currentDate.setMonth(this._currentDate.getMonth()+parseInt(t.currentTarget.getAttribute("data-slide"),10)))}highlightedDay(t){const e=new Date(this._currentDate);return e.setDate(t),e.setHours(0,0,0,0),this.dates.find(t=>new Date(t.date).valueOf()===e.valueOf())}highlightedDayBefore(t){const e=new Date(this._currentDate);return e.setMonth(this._currentDate.getMonth()-1),e.setDate(t),e.setHours(0,0,0,0),this.dates.find(t=>new Date(t.date).valueOf()===e.valueOf())}highlightedDayAfter(t){const e=new Date(this._currentDate);return e.setMonth(this._currentDate.getMonth()+1),e.setDate(t),e.setHours(0,0,0,0),this.dates.find(t=>new Date(t.date).valueOf()===e.valueOf())}});
//# sourceMappingURL=pandora-calendar.js.map