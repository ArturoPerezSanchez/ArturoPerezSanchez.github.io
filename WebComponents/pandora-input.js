import{L as t,c as e,h as i}from"./lit-element-ab8a46b6.js";window.customElements.define("pandora-input",class extends t{static get styles(){return e`.container{width:100%}input{width:100%;border:solid}input:focus{outline:0}`}static get properties(){return{type:{type:String},placeholder:{type:String},textcolor:{type:String},backgroundcolor:{type:String},textalign:{type:String},padding:{typer:String},textsize:{type:String},fontweight:{type:String},borderradius:{type:String},border:{type:String},value:{type:String},labelText:{type:String},name:{type:String},pattern:{type:String},maxlength:{type:Number},required:{type:Boolean},readonly:{type:Boolean},disabled:{type:Boolean}}}constructor(){super(),this.placeholder="",this.textcolor="black",this.backgroundcolor="#ccc",this.textsize="18px",this.fontweight="200",this.borderradius="9px",this.border="3px solid #333",this.textalign="center",this.labelText="",this.name="pandoraInput",this.padding="5px",this.value="",this.pattern="",this.maxlength=25,this.disabled=!1,this.required=!0,this.readonly=!1,this.type="text"}render(){return i`<div class="container"><label for="${this.name}">${this.labelText}</label> <input aria-label="${this.name}" name="${this.name}" type="${this.type}" value="${this.value}" pattern="${this.pattern}" maxlength="${this.maxlength}" ?disabled="${this.disabled}" ?required="${this.required}" ?readonly="${this.readonly}" placeholder="${this.placeholder}" style="color:${this.textcolor};
            background:${this.backgroundcolor};
            text-align:${this.textalign};
            font-size:${this.textsize};
            border-radius:${this.borderradius};
            border:${this.border};
            padding:${this.padding};
            font-weight:${this.fontweight};"></div>`}updated(t){t.forEach((t,e)=>{[""].includes(e)&&this.updatedResponse()})}});
//# sourceMappingURL=pandora-input.js.map
