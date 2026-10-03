import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export const refs = {
  gallery: document.querySelector('.gallery'),
  loader: document.querySelector('.loader'),
  form: document.querySelector('.form'),
};

const lightbox = new SimpleLightbox('.gallery a');

export function createGallery(images) {
  const markup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `<li>
  <a href="${largeImageURL}">
    <img src="${webformatURL}" alt="${tags}" />
  </a>

  <div>
    <p>
      Likes ${likes}
      <span></span>
    </p>

    <p>
      Views ${views}
      <span></span>
    </p>

    <p>
      Comments ${comments}
      <span></span>
    </p>

    <p>
      Downloads ${downloads}
      <span></span>
    </p>
  </div>
</li>`;
      }
    )
    .join('');

  refs.gallery.innerHTML = markup;
  lightbox.refresh();
}

export function clearGallery() {
  refs.gallery.innerHTML = '';
}

export function showLoader() {
  refs.loader.classList.add('is-active');
}

export function hideLoader() {
  refs.loader.classList.remove('is-active');
}
