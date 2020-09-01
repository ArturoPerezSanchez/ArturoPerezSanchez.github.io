import{L as t,c as e,h as o}from"./lit-element-ab8a46b6.js";window.customElements.define("pandora-tabs",class extends t{static get styles(){return e`.container{width:100%}a{font-family:'Open Sans',sans-serif;font-weight:700;line-height:1.1875rem;text-decoration:none;text-align:center;color:unset}ul{display:flex;flex-direction:row;list-style:none;flex-wrap:wrap}.list{margin-bottom:7px;cursor:pointer;padding:1% 2%;border:1px solid transparent;border-bottom:1px solid #333}.list.active{border:1px solid;border-color:#333 #333 transparent #333;border-bottom:none;border-radius:1%}.list:hover{border-color:#d8d8d8;border-bottom:transparent;border-radius:1%}.list.active:hover{border-color:#333}`}static get properties(){return{content:{type:Array},endpointURL:{type:String},selected:{type:Number},textcolor:{type:String},backgroundcolor:{type:String},activebackgroundcolor:{type:String},activetextcolor:{type:String},_data:{type:Array},_error:{type:String}}}constructor(){super(),this.content=[],this.endpointURL="",this.selected=0,this.textcolor="green",this.backgroundcolor="white",this.activebackgroundcolor="white",this.activetextcolor="black",this._data=[],this._error=""}render(){return o`<style>.list.active{background-color:${this.activebackgroundcolor};background-color:var(--activebackgroundcolor)}</style><div class="container"><ul>${this._data.map((t,e)=>o`<li class="list ${e===this.selected?"active":""}" data-slide="${e}" @click="${this.changeSelection}"><a href="${t.href}">${t.label}</a></li>`)}</ul></div>`}updated(t){t.forEach((t,e)=>{["content","endpointURL"].includes(e)?this.updatedResponse():["textcolor","backgroundcolor"].includes(e)?(this.updateElements(),this.updateActive()):["activetextcolor","activebackgroundcolor","selected"].includes(e)?this.updateActive():(this.updateElements(),this.updateActive())})}changeSelection(t){const e=parseInt(t.currentTarget.getAttribute("data-slide"),10);this.selected!==e&&(this.selected=e,this.updateElements())}updateElements(){this.shadowRoot.querySelectorAll(".list").forEach(t=>{t.style.color=this.textcolor,t.style.backgroundColor=this.backgroundcolor})}updateActive(){this.shadowRoot.querySelectorAll(".active").forEach(t=>{t.style.color=this.activetextcolor,t.style.backgroundColor=this.activebackgroundcolor})}updatedResponse(){this.content?this._data=this.content:fetch(this.endpointURL).then(t=>{t.ok?t.json().then(t=>{this._data=t}).catch(t=>{this._error=`ERROR_Json:${t.message}`}):this._error="Respuesta de red KO"}).catch(t=>{this._error=`ERROR_Fetch: ${t.message}`})}});
//# sourceMappingURL=pandora-tabs.js.map
