import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { getImagesByQuery } from './js/pixabay-api';
import {
  clearGallery,
  createGallery,
  hideLoader,
  hideLoadMoreButton,
  refs,
  showLoader,
  showLoadMoreButton,
} from './js/render-functions';

let query = '';
let page = 1;

refs.form.addEventListener('submit', onFormSubmit);

refs.loadMoreBtn.addEventListener('click', onLoadMoreBtnClick);

async function onFormSubmit(event) {
  event.preventDefault();

  const userSearch = event.target.elements['search-text'].value;

  if (userSearch.trim().length === 0) {
    return;
  }

  query = userSearch;
  page = 1;

  hideLoadMoreButton();

  clearGallery();

  showLoader();

  try {
    const data = await getImagesByQuery(userSearch, page);

    if (data.hits.length !== 0) {
      createGallery(data.hits);

      if (page * 15 < data.totalHits) {
        showLoadMoreButton();
      } else {
        hideLoadMoreButton();
        iziToast.warning({
          message: "We're sorry, but you've reached the end of search results.",
        });
      }

      page += 1;
    } else {
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
    }
  } catch {
    iziToast.error({
      message: 'Ошибка сервера',
    });
  } finally {
    hideLoader();
  }
}

async function onLoadMoreBtnClick() {
  hideLoadMoreButton();

  showLoader();

  try {
    const data = await getImagesByQuery(query, page);
    createGallery(data.hits);

    const cardHeight =
      refs.gallery.firstElementChild.getBoundingClientRect().height;

    window.scrollBy({
      top: cardHeight * 2,
      behavior: 'smooth',
    });

    if (page * 15 < data.totalHits) {
      showLoadMoreButton();
    } else {
      hideLoadMoreButton();
      iziToast.warning({
        message: "We're sorry, but you've reached the end of search results.",
      });
    }
    page += 1;
  } catch {
    iziToast.error({
      message: 'Ошибка сервера',
    });
  } finally {
    hideLoader();
  }
}
