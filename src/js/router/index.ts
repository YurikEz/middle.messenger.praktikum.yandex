import getRoute from "./getRoute";
import pages from '../../pages';

/**
 * Роутер
 * - Получаем страницу
 * - Загружаем в страницу state
 * - Отдаем строку для render
 * @return { string } - строка для render
 */
export default () => {
  const route: string = getRoute();
  const checkRoute: boolean = pages.hasOwnProperty(route);
  return checkRoute ? route : '_404';
};