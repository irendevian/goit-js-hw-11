import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


export function createGallery(images) {

    return images.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => `
        <li>
            <a href="${largeImageURL}">
            <img src="${webformatURL}" alt="${tags}" width="360"/></a>
            <div class="descr">
                <p><span>Likes</span> ${likes}</p>
                <p><span>Views</span> ${views}</p>
                <p><span>Comments</span> ${comments}</p>
                <p><span>Downloads</span> ${downloads}</p>
            </div>
        </li>
    `).join("");
}

 export const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionsDelay: 250,
});

import { gallery } from "../main";

export function clearGallery() {
    gallery.innerHTML = "";
    lightbox.refresh();
}


const loader = document.querySelector(".loader");

export function showLoader() {
    loader.classList.remove("hidden");
}

export function hideLoader() {
    loader.classList.add("hidden");
}
