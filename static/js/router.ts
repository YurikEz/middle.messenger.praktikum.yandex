import pages from '../../src/pages';
import state from './getState';

/**
 * Роутер
 * - Получаем страницу
 * - Загружаем в страницу state
 * - Отдаем строку для render
 * @param route { string } - переданный route
 * @return { string } - строка для render
 */
export default (route: string) => {
  const checkRoute: boolean = pages.hasOwnProperty(route);
  const currentRoute: string = checkRoute ? route : '_404';
  const currentPage: (context: object, options?: unknown) => string = (context, options) => {
    return pages[currentRoute](context, options);
  };
  const currentState: object = state[currentRoute];

  return currentPage(currentState);
};