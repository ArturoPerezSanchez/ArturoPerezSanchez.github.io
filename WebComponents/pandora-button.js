import{L as t,c as e,h as i}from"./lit-element-ab8a46b6.js";window.customElements.define("pandora-button",class extends t{static get styles(){return e`.container{width:100%}button{width:100%}`}static get properties(){return{textcolor:{type:String},backgroundcolor:{type:String},textalign:{type:String},padding:{typer:String},textsize:{type:String},fontweight:{type:String},borderradius:{type:String},border:{type:String},value:{type:String},name:{type:String},disabled:{type:Boolean},onclick:{type:String}}}constructor(){super(),this.textcolor="black",this.backgroundcolor="#ccc",this.textsize="18px",this.fontweight="200",this.borderradius="9px",this.border="3px solid #333",this.textalign="center",this.name="pandoraInput",this.padding="5px",this.value="Click Me!",this.disabled=!1,this.onclick="alert('you cclicked me!')"}render(){return i`<div class="container"><button aria-label="${this.name}" name="${this.name}" type="button" onclick="${this.onclick}" ?disabled="${this.disabled}" style="color:${this.textcolor};
            background:${this.backgroundcolor};
            text-align:${this.textalign};
            font-size:${this.textsize};
            border-radius:${this.borderradius};
            border:${this.border};
            padding:${this.padding};
            font-weight:${this.fontweight};">${this.value}</div>`}updated(t){t.forEach((t,e)=>{[""].includes(e)&&this.updatedResponse()})}});
//# sourceMappingURL=pandora-button.js.map
