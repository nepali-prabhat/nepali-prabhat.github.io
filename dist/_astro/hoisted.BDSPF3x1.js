function p(s,e){s.classList.toggle(e)}function l(){return document.documentElement.getAttribute("data-theme")==="dark"}class w extends HTMLElement{#e=!1;connectedCallback(){const e=document.getElementById("main-header"),t=this.querySelector("button");t?.addEventListener("click",()=>{e&&p(e,"menu-open"),this.#e=!this.#e,t.setAttribute("aria-expanded",this.#e.toString())})}}customElements.define("mobile-button",w);const E="modulepreload",k=function(s){return"/"+s},h={},b=function(e,t,c){let d=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const r=document.querySelector("meta[property=csp-nonce]"),n=r?.nonce||r?.getAttribute("nonce");d=Promise.allSettled(t.map(o=>{if(o=k(o),o in h)return;h[o]=!0;const a=o.endsWith(".css"),m=a?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${m}`))return;const i=document.createElement("link");if(i.rel=a?"stylesheet":E,a||(i.as="script"),i.crossOrigin="",i.href=o,n&&i.setAttribute("nonce",n),document.head.appendChild(i),a)return new Promise((g,f)=>{i.addEventListener("load",g),i.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${o}`)))})}))}function u(r){const n=new Event("vite:preloadError",{cancelable:!0});if(n.payload=r,window.dispatchEvent(n),!n.defaultPrevented)throw r}return d.then(r=>{for(const n of r||[])n.status==="rejected"&&u(n.reason);return e().catch(u)})};class y extends HTMLElement{closeBtn;dialog;dialogFrame;openBtn;closeModal=()=>{this.dialog.open&&(this.dialog.close(),window.removeEventListener("click",this.onWindowClick))};onWindowClick=e=>{("href"in(e.target||{})||document.body.contains(e.target)&&!this.dialogFrame.contains(e.target))&&this.closeModal()};onWindowKeydown=e=>{(e.ctrlKey||e.metaKey)&&e.key==="k"&&!this.dialog.open&&(this.openModal(),e.preventDefault()),e.key==="/"&&!this.dialog.open&&(this.openModal(),e.preventDefault())};openModal=e=>{this.dialog.showModal(),this.querySelector("input")?.focus(),e?.stopPropagation(),window.addEventListener("click",this.onWindowClick)};constructor(){super(),this.openBtn=this.querySelector("button[data-open-modal]"),this.closeBtn=this.querySelector("button[data-close-modal]"),this.dialog=this.querySelector("dialog"),this.dialogFrame=this.querySelector(".dialog-frame"),this.openBtn.addEventListener("click",this.openModal),this.openBtn.disabled=!1,this.closeBtn.addEventListener("click",this.closeModal)}connectedCallback(){window.addEventListener("keydown",this.onWindowKeydown),(window.requestIdleCallback||(t=>setTimeout(t,1)))(async()=>{const{PagefindUI:t}=await b(async()=>{const{PagefindUI:c}=await import("./ui-core.Dy7aqKwL.js");return{PagefindUI:c}},[]);new t({baseUrl:"/",bundlePath:"/".replace(/\/$/,"")+"/pagefind/",element:"#cactus__search",showImages:!1,showSubResults:!0})})}disconnectedCallback(){window.removeEventListener("keydown",this.onWindowKeydown)}}customElements.define("site-search",y);class v extends HTMLElement{connectedCallback(){const e=this.querySelector("button");e.setAttribute("role","switch"),e.setAttribute("aria-checked",String(l())),e.addEventListener("click",()=>{let t=new CustomEvent("theme-change",{detail:{theme:l()?"light":"dark"}});document.dispatchEvent(t),e.setAttribute("aria-checked",String(l()))})}}customElements.define("theme-toggle",v);export{b as _};
