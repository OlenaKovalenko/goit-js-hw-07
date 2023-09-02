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

function onGalleryItemClick(event) {

  event.preventDefault();

  if (event.target === event.currentTarget) {
    return;
  }

  const targetElement = event.target;
  const elementSource = targetElement.dataset.source;
  
  const instance = basicLightbox.create(`
    <img src="${elementSource}" alt="${targetElement.alt}">
`, {
    onShow: (instance) => {
    window.addEventListener('keydown', onEscKeyPress);
    },
    onClose: (instance) => {
    window.removeEventListener('keydown', onEscKeyPress);
    }
});

  instance.show();

  function onEscKeyPress(event) {
    if (event.code === 'Escape') {
      instance.close();
    }
  }
}

console.log(galleryItems);
