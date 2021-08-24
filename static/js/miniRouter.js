import pages from '../../src/pages';

/**
 * Получаем шаблон страницы
 * @param currentPage
 * @returns {*}
 */
export default (currentPage) => pages[currentPage] || pages['_404'];