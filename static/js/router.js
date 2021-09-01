import state from './getState';
import pages from '../../src/pages/index';

export default (route) => {
  const root = document.getElementById('root');
  const checkRoute = pages.hasOwnProperty(route);
  const currentRoute = checkRoute ? route : '_404';
  const currentPage = pages[currentRoute];
  const currentState = state[currentRoute];

  root.innerHTML = currentPage(currentState);
};