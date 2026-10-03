import{a as b,S as v,i as l}from"./assets/vendor-C1DvvBV_.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();async function u(o,t){return(await b.get("https://pixabay.com/api/",{params:{key:"57804498-a8b09dde311eef7819da69b99",q:o,page:t,per_page:15,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const a={gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader"),form:document.querySelector(".form"),loadMoreBtn:document.querySelector(".js-load-more")},w=new v(".gallery a");function f(o){const t=o.map(({webformatURL:s,largeImageURL:c,tags:e,likes:r,views:i,comments:g,downloads:L})=>`<li>
  <a href="${c}">
    <img src="${s}" alt="${e}" />
  </a>

  <div>
    <p>
      Likes ${r}
      <span></span>
    </p>

    <p>
      Views ${i}
      <span></span>
    </p>

    <p>
      Comments ${g}
      <span></span>
    </p>

    <p>
      Downloads ${L}
      <span></span>
    </p>
  </div>
</li>`).join("");a.gallery.insertAdjacentHTML("beforeend",t),w.refresh()}function B(){a.gallery.innerHTML=""}function p(){a.loader.classList.add("is-active")}function m(){a.loader.classList.remove("is-active")}function h(){a.loadMoreBtn.classList.remove("is-hidden")}function d(){a.loadMoreBtn.classList.add("is-hidden")}let y="",n=1;a.form.addEventListener("submit",M);a.loadMoreBtn.addEventListener("click",S);async function M(o){o.preventDefault();const t=o.target.elements["search-text"].value;if(t.trim().length!==0){y=t,n=1,d(),B(),p();try{const s=await u(t,n);s.hits.length!==0?(f(s.hits),n*15<s.totalHits?h():(d(),l.warning({message:"We're sorry, but you've reached the end of search results."})),n+=1):l.error({message:"Sorry, there are no images matching your search query. Please try again!"})}catch{l.error({message:"Ошибка сервера"})}finally{m()}}}async function S(){p();try{const o=await u(y,n);f(o.hits);const t=a.gallery.firstElementChild.getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:"smooth"}),n*15<o.totalHits?h():(d(),l.warning({message:"We're sorry, but you've reached the end of search results."})),n+=1}catch{l.error({message:"Ошибка сервера"})}finally{m()}}
//# sourceMappingURL=index.js.map
