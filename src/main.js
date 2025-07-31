import { getImagesByQuery } from './js/pixabay-api.js';
// import createGallery(images) from render - functions.js;
// import clearGallery() from render - functions.js;
// import showLoader() from render - functions.js;
// import hideLoader() from render - functions.js;


const form = document.querySelector(".form");
const input = document.querySelector("input");
const gallery = document.querySelector(".gallery");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    const userValueInput = input.value.trim();

    if (!userValueInput) {
        alert("Заповніть поле!");
        return;
    }

    getImagesByQuery(userValueInput)
    .then(res => {
        const images = res.data.hits;

        if (images.length === 0) {
            alert("Sorry, there are no images matching your search query. Please try again!")
        } else {
            gallery.innerHTML = "";
            gallery.insertAdjacentHTML("beforeend", createMarkup(images));
        }
             
         })
    .catch(error => {
             console.log(error);
             
         })

}

