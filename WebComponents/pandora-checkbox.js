import{L as t,c as e,h as i}from"./lit-element-ab8a46b6.js";window.customElements.define("pandora-checkbox",class extends t{static get styles(){return e`.container{width:100%;padding:5px}`}static get properties(){return{textcolor:{type:String},backgroundcolor:{type:String},textsize:{type:String},fontweight:{type:String},borderradius:{type:String},border:{type:String},textalign:{type:String},labelText:{type:String},name:{type:String},disabled:{type:Boolean},required:{type:Boolean},readonly:{type:Boolean}}}constructor(){super(),this.textcolor="black",this.backgroundcolor="#ccc",this.textsize="18px",this.fontweight="200",this.borderradius="3px",this.border="3px solid #333",this.textalign="left",this.labelText="Checkbox Label",this.name="pandoraInput",this.disabled=!1,this.required=!0,this.readonly=!1}render(){return i`<div class="container" style="color:${this.textcolor};
          background:${this.backgroundcolor};
          text-align:${this.textalign};
          font-size:${this.textsize};
          border-radius:${this.borderradius};
          border:${this.border};
          font-weight:${this.fontweight};"><label for="${this.name}">${this.labelText}</label> <input aria-label="${this.name}" name="${this.name}" type="checkbox" ?disabled="${this.disabled}" ?required="${this.required}" ?readonly="${this.readonly}"></div>`}updated(t){t.forEach((t,e)=>{[""].includes(e)&&this.updatedResponse()})}});
//# sourceMappingURL=pandora-checkbox.js.map
