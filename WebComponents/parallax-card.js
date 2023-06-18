const g=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const s of e.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function o(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerpolicy&&(e.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?e.credentials="include":t.crossorigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function i(t){if(t.ep)return;t.ep=!0;const e=o(t);fetch(t.href,e)}};g();class n extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`

      .container-card {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 350px;
        height: 450px;
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
      }

      .sticker {
        transform: rotateY(var(--ry, 0deg)) rotateX(var(--rx, 0deg)) translateZ(42px);
        width: 300px;
        height: 300px;
      }

      .description {
        font-size: 26px;
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
        .container-card {
          width: 250px;
          height: 320px;
        }
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
    `}connectedCallback(){this.title=this.getAttribute("title"),this.src=this.getAttribute("src"),this.background=this.getAttribute("background"),this.description=this.getAttribute("description"),this.style.setProperty("--background-image",`url(${this.background})`),this.render(),this.init()}init(){const r=this.shadowRoot.querySelector(".card"),o=(t,e)=>{const s=e.clientWidth,a=e.clientHeight,d=Math.abs(t.offsetX/10)-s/20,c=Math.abs(t.offsetY/10)-a/20,l=e.classList.contains("flipped");if(!e.classList.contains("moving")){const p=Math.abs(t.offsetX/4)/s*100,f=Math.abs(t.offsetY/1.5)/a*100;e.style.setProperty("--bpx",`${p}%`),e.style.setProperty("--bpy",`${f}%`),e.style.setProperty("--ry",`${l?180-d:-d}deg`),e.style.setProperty("--rx",`${-c}deg`)}},i=()=>{r.classList.add("moving"),r.style.setProperty("transition","transform 0.5s");const t=r.classList.contains("flipped");r.style.setProperty("--ry",t?"360deg":"180deg"),setTimeout(()=>{r.classList.toggle("flipped")},200),setTimeout(()=>{r.classList.remove("moving"),r.style.setProperty("transition","none")},500)};r.addEventListener("mousemove",t=>{t.target===r&&o(t,r)}),r.addEventListener("click",t=>{t.target===r&&!r.classList.contains("moving")&&i()})}render(){this.shadowRoot.innerHTML=`
    <style>${n.styles}</style>
    <div class="container-card"  >
      <div class="card">
        <h1>${this.title}</h1>
        <img class="sticker" src="${this.src}" alt="${this.title}">
        <p class="description">${this.description}</p>
      </div>
    </div>`}}customElements.define("parallax-card",n);
