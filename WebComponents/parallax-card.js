const h=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const t of s)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function o(s){const t={};return s.integrity&&(t.integrity=s.integrity),s.referrerpolicy&&(t.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?t.credentials="include":s.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(s){if(s.ep)return;s.ep=!0;const t=o(s);fetch(s.href,t)}};h();class a extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`

      .container-card {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 220px;
        height: 350px;
        transform-style: preserve-3d;
        perspective: 1000px;
        position: relative;
       
      }

      .card::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        background: radial-gradient(transparent 30%, #000d);
      }

      .flipped::before {
        background: #000b;
      }

      .card {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        width: 100%;
        height: 100%;
        font-family: Montserrat, sans-serif;
        background: linear-gradient(#fff, #aaa);
        background-color: #fff;
        background-image: var(--background-image);
        background-repeat: no-repeat;
        background-position: var(--bpx, 0%) var(--bpy, 0%);
        background-size: 512px;
        border: 5px solid #fff;
        border-radius: 10px;
        box-shadow: 0 0 45px #000;
        box-shadow: 10px 10px 45px #226;
        transform: rotateY(var(--ry, 0deg)) rotateX(var(--rx, 0deg));
        padding: 1em;
      }

      .card .flipped {
        transition: transform 0.5s;
      }

      h1 {
        margin: 0;
        text-shadow: 0 0 10px #000a;
        color: #fff;
        font-size: 22px;
        text-align:center;
      }

      .sticker {
        transform: rotateY(var(--ry, 0deg)) rotateX(var(--rx, 0deg)) translateZ(42px);
        width: 250px;
        height: 250px;
      }

      .description {
        font-size: 18px;
        color: #fff;
        font-weight: 300;
        text-shadow: 2px 2px 2px #000;
        transform: rotateY(180deg);
        text-align: center;
        display: none;
      }

      .card.flipped h1 {
        transform: rotateY(180deg);
      }

      .card.moving .sticker {
        transform: rotateY(0deg) rotateX(var(--rx, 0deg)) translateZ(42px);
      }

      .card.flipped .sticker {
        display: none;
      }

      .card.flipped .description {
        display: block;
      }

      .sticker,
      h1,
      p {
        z-index: 5;
        pointer-events: none;
      }

      @media only screen and (max-width: 825px) {
        .description {
          font-size: 18px;
        }

        .card {
          background-size: 356px;
        }

        h1 {
          font-size: 20px;
        }
        .sticker {
          width: 200px;
          height: 200px;
        }
      }
    `}connectedCallback(){this.isMobile=/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase()),this.title=this.getAttribute("title"),this.src=this.getAttribute("src"),this.background=this.getAttribute("background"),this.description=this.getAttribute("description"),this.style.setProperty("--background-image",`url(${this.background})`),this.render(),this.init()}init(){const e=this.shadowRoot.querySelector(".card"),o=t=>{const i=t.classList.contains("flipped");t.classList.contains("moving")||(t.style.setProperty("transition","transform 0.5s"),t.style.setProperty("--bpx","0%"),t.style.setProperty("--bpy","0%"),t.style.setProperty("--ry",`${i?180:0}deg`),t.style.setProperty("--rx",`${0}deg`),setTimeout(()=>{t.classList.remove("moving"),t.style.setProperty("transition","none")},500))},r=(t,i)=>{const n=i.clientWidth,d=i.clientHeight,c=Math.abs(t.offsetX/10)-n/20,l=Math.abs(t.offsetY/10)-d/20,p=i.classList.contains("flipped");if(!i.classList.contains("moving")){const f=Math.abs(t.offsetX/4)/n*100,g=Math.abs(t.offsetY/1.5)/d*100;i.style.setProperty("--bpx",`${f}%`),i.style.setProperty("--bpy",`${g}%`),i.style.setProperty("--ry",`${p?180-c:-c}deg`),i.style.setProperty("--rx",`${-l}deg`)}},s=()=>{e.classList.add("moving"),e.style.setProperty("transition","transform 0.5s");const t=e.classList.contains("flipped");e.style.setProperty("--ry",t?"0deg":"180deg"),setTimeout(()=>{e.classList.toggle("flipped")},200),setTimeout(()=>{e.classList.remove("moving"),e.style.setProperty("transition","none")},500)};e.addEventListener("mousemove",t=>{t.target===e&&!this.isMobile&&r(t,e)}),e.addEventListener("mouseleave",()=>{o(e)}),e.addEventListener("click",t=>{t.target===e&&!e.classList.contains("moving")&&s()})}render(){this.shadowRoot.innerHTML=`
    <style>${a.styles}</style>
    <div class="container-card"  >
      <div class="card">
        <h1>${this.title}</h1>
        <img class="sticker" src="${this.src}" alt="${this.title}">
        <p class="description">${this.description}</p>
      </div>
    </div>`}}customElements.define("parallax-card",a);
