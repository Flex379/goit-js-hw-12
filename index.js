import{a as f,S as d,i as l}from"./assets/vendor-B4VkUtbg.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();function p(o){return f.get("https://pixabay.com/api/",{params:{key:"57804498-a8b09dde311eef7819da69b99",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(t=>t.data)}const n={gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader"),form:document.querySelector(".form")},m=new d(".gallery a");function y(o){const t=o.map(({webformatURL:s,largeImageURL:i,tags:e,likes:r,views:a,comments:c,downloads:u})=>`<li>
  <a href="${i}">
    <img src="${s}" alt="${e}" />
  </a>

  <div>
    <p>
      Likes ${r}
      <span></span>
    </p>

    <p>
      Views ${a}
      <span></span>
    </p>

    <p>
      Comments ${c}
      <span></span>
    </p>

    <p>
      Downloads ${u}
      <span></span>
    </p>
  </div>
</li>`).join("");n.gallery.innerHTML=t,m.refresh()}function h(){n.gallery.innerHTML=""}function g(){n.loader.classList.add("is-active")}function L(){n.loader.classList.remove("is-active")}n.form.addEventListener("submit",b);function b(o){o.preventDefault();const t=o.target.elements["search-text"].value;t.trim().length!==0&&(h(),g(),p(t).then(s=>{s.hits.length!==0?y(s.hits):l.error({message:"Sorry, there are no images matching your search query. Please try again!"})}).catch(()=>{l.error({message:"Ошибка сервера"})}).finally(()=>{L()}))}
//# sourceMappingURL=index.js.map
