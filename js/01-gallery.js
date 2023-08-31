import { galleryItems } from './gallery-items.js';
// Change code below this line

const container = document.querySelector(".gallery");
 const markup = createMarkup(galleryItems)
  
  container.insertAdjacentHTML('beforeend', markup);

function createMarkup(arr) {
    return arr.map(({ preview, original, description }) => {
        return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
    }).join("")
};



console.log(galleryItems);
