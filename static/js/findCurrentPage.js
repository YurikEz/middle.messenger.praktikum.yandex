import mydash from '../../src/utils/mydash';

/**
 * Находим текущий роут
 * @returns {*|string}
 */
export default () => {
  const page = window.location.pathname
    .split('/')
    .filter(mydash.identity);

  let currentPage = page.length ? mydash.lastItem(page) : 'welcomePage';

  if (currentPage === '500') {
    currentPage = '_500';
  }

  if (currentPage === 'data') {
    currentPage = 'editData';
  }

  if (currentPage === 'password') {
    currentPage = 'editPassword';
  }

  return currentPage;
};