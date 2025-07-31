import { getImagesByQuery } from './js/pixabay-api.js';
import { createGallery } from './js/render-functions.js';
import { clearGallery } from './js/render-functions.js';
// import { showLoader } from './js/render-functions.js';
// import { hideLoader } from './js/render-functions.js';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { lightbox } from './js/render-functions.js';


const form = document.querySelector(".form");
const input = document.querySelector("input");
const loader = document.querySelector(".loader");
export const gallery = document.querySelector(".gallery");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    const userValueInput = input.value.toLowerCase().trim();

    if (!userValueInput) {
         // iziToast.warning({
        //     title: 'Warning',
        //     message: 'Fill in the field!',
        //     position:  'topRight'
        // })
        return;
    }

    getImagesByQuery(userValueInput)
    .then(res => {
        const images = res.data.hits;

        if (images.length === 0) {
            iziToast.error({
                title: 'Error',
                message: 'Sorry, there are no images matching your search query. Please try again!',
                position: 'topRight'
            })
        } else {
            lightbox.refresh();
            gallery.insertAdjacentHTML("beforeend", createGallery(images));
        }
        
         })
    .catch(error => {
             console.log(error);
             
    })
    // .finally(() => {
    //         loader.classList.add("hidden");
    // })

    clearGallery();
}

