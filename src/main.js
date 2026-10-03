import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { getImagesByQuery } from './js/pixabay-api';
import {
  clearGallery,
  createGallery,
  hideLoader,
  refs,
  showLoader,
} from './js/render-functions';

refs.form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const userSearch = event.target.elements['search-text'].value;

  if (userSearch.trim().length === 0) {
    return;
  }

  clearGallery();

  showLoader();

  getImagesByQuery(userSearch)
    .then(data => {
      if (data.hits.length !== 0) {
        createGallery(data.hits);
      } else {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
      }
    })
    .catch(() => {
      iziToast.error({
        message: 'Ошибка сервера',
      });
    })
    .finally(() => {
      hideLoader();
    });
}
