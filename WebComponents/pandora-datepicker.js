import{L as t,c as e,h as i}from"./lit-element-ab8a46b6.js";window.customElements.define("pandora-datepicker",class extends t{static get styles(){return e`.container{width:100%}input{padding:5px;width:100%}`}static get properties(){return{type:{type:String},step:{type:Number},textcolor:{type:String},backgroundcolor:{type:String},textsize:{type:String},fontweight:{type:String},borderradius:{type:String},border:{type:String},textalign:{type:String},labelText:{type:String},name:{type:String},disabled:{type:Boolean},required:{type:Boolean},readonly:{type:Boolean}}}constructor(){super(),this.type="datetime-local",this.step=1,this.textcolor="black",this.backgroundcolor="#ccc",this.textsize="18px",this.fontweight="200",this.borderradius="3px",this.border="3px solid #333",this.textalign="center",this.labelText="",this.name="pandoraInput",this.disabled=!1,this.required=!0,this.readonly=!1}render(){return i`<div class="container"><label for="${this.name}">${this.labelText}</label><br><input aria-label="${this.name}" name="${this.name}" type="${this.type}" step="${this.step}" ?disabled="${this.disabled}" ?required="${this.required}" ?readonly="${this.readonly}" style="color:${this.textcolor};
            background:${this.backgroundcolor};
            text-align:${this.textalign};
            font-size:${this.textsize};
            border-radius:${this.borderradius};
            border:${this.border};
            font-weight:${this.fontweight};"></div>`}updated(t){t.forEach((t,e)=>{[""].includes(e)&&this.updatedResponse()})}});
//# sourceMappingURL=pandora-datepicker.js.map
