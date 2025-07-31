import{a as u,S as d,i as p}from"./assets/vendor-CaRFiM55.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const f="51560534-ee0888e2507fe11f794ee77c8";function m(s){return u("https://pixabay.com/api/",{params:{key:f,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}})}function y(s){return s.map(({webformatURL:r,largeImageURL:o,tags:n,likes:e,views:t,comments:i,downloads:l})=>`
        <li>
            <a href="${o}">
            <img src="${r}" alt="${n}" width="360"/></a>
            <div class="descr">
                <p><span>Likes</span> ${e}</p>
                <p><span>Views</span> ${t}</p>
                <p><span>Comments</span> ${i}</p>
                <p><span>Downloads</span> ${l}</p>
            </div>
        </li>
    `).join("")}const h=new d(".gallery a",{captionsData:"alt",captionsDelay:250});function g(){c.innerHTML="",h.refresh()}const a=document.querySelector(".loader");function L(){a.classList.remove("hidden")}function b(){a.classList.add("hidden")}const S=document.querySelector(".form"),v=document.querySelector("input"),c=document.querySelector(".gallery");S.addEventListener("submit",q);function q(s){s.preventDefault();const r=v.value.toLowerCase().trim();r&&(L(),m(r).then(o=>{const n=o.data.hits;n.length===0?p.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):c.insertAdjacentHTML("beforeend",y(n))}).catch(o=>{console.log(o)}).finally(()=>{b()}),g())}
//# sourceMappingURL=index.js.map
