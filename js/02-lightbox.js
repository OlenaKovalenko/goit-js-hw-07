import { galleryItems } from './gallery-items.js';
// Change code below this line

const container = document.querySelector(".gallery");
const markup = createMarkup(galleryItems)

container.insertAdjacentHTML('beforeend', markup);
container.addEventListener('click', onGalleryItemClick);

function createMarkup(arr) {
  return arr.map(({ preview, original, description }) => {
    return `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`
    }).join("")
};

function onGalleryItemClick(event) {
  event.preventDefault();

  if (event.target === event.currentTarget) {
    return;
  }

    let lightbox = new SimpleLightbox('.gallery a', { /* options */
        captionsData: 'alt',
        captionPosition: 'bottom',
        captionDelay: 250
    });

}

console.log(galleryItems);
