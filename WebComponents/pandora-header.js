import{L as t,c as e,h as i}from"./lit-element-ab8a46b6.js";window.customElements.define("pandora-header",class extends t{static get styles(){return e`*{display:block;box-sizing:border-box;font-family:'Open Sans',sans-serif;outline:0}.container{position:relative;width:100%;background:#eee;margin-right:auto;margin-left:auto;border:solid;border-width:0;background-repeat:no-repeat!important;background-size:100% 100%!important}header{display:flex;height:200px}img{border-radius:50px;width:25%;border:solid;border-width:0;border-color:#000;margin:10px;padding:10px}.title{width:100%;padding:10px;text-align:center}`}static get properties(){return{imageURL:{type:String},imagePosition:{type:String},imageWidth:{type:String},imageBorderRadius:{type:String},imageBorderWidth:{type:String},imageBorderColor:{type:String},text:{type:String},textColor:{type:String},textSize:{type:String},secondaryText:{type:String},secondaryTextColor:{type:String},secondaryTextSize:{type:String},backgroundColor:{type:String},bottomBorder:{type:Boolean},textPosition:{type:String}}}constructor(){super(),this.imageURL="",this.text="",this.secondaryText="",this.imagePosition="right",this.imageBorderRadius="0%",this.imageBorderWidth="0px",this.imageBorderColor="black",this.textColor="black",this.textSize="32px",this.secondaryTextColor="black",this.secondaryTextSize="18px",this.backgroundColor="#CCC",this.textPosition="center",this.imageWidth="25%"}render(){return i`<div class="container"><header>${"left"===this.imagePosition?i`<img style="border-radius:${this.imageBorderRadius}; width:${this.imageWidth}; border-color:${this.imageBorderColor}; border-width:${this.imageBorderWidth};" src="${this.imageURL}" alt="image not found">`:i``}<div class="title"><h2 style="text-align: ${this.textPosition}; font-size:${this.textSize}; color:${this.textColor};">${this.text}</h2><h3 style="text-align: ${this.textPosition}; font-size:${this.secondaryTextSize}; color:${this.secondaryTextColor};">${this.secondaryText}</h3></div>${"right"===this.imagePosition?i`<img style="border-radius:${this.imageBorderRadius}; width:${this.imageWidth}; border-color:${this.imageBorderColor}; border-width:${this.imageBorderWidth};" src="${this.imageURL}" alt="image not found">`:i``}</header></div>`}firstUpdated(){const t=document.createElement("link");t.href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800&display=swap",t.rel="stylesheet",document.head.append(t)}updated(t){t.forEach((t,e)=>{["backgroundColor","imageBorderRadius","imageBorderColor","imageBorderWidth","imagePosition"].includes(e)&&this.updateBackground()})}updateBackground(){"background"===this.imagePosition?(this.shadowRoot.querySelector(".container").style.backgroundImage=`url('${this.imageURL}')`,this.shadowRoot.querySelector(".container").style.borderRadius=this.imageBorderRadius,this.shadowRoot.querySelector(".container").style.borderColor=this.imageBorderColor,this.shadowRoot.querySelector(".container").style.borderWidth=this.imageBorderWidth):(this.shadowRoot.querySelector(".container").style.background=this.backgroundColor,this.shadowRoot.querySelector(".container").style.borderRadius="",this.shadowRoot.querySelector(".container").style.borderColor="",this.shadowRoot.querySelector(".container").style.borderWidth="")}});
//# sourceMappingURL=pandora-header.js.map
