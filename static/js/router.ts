import pages from '../../src/pages';

import state from './getState';

export default (route: string) => {
  const root = <HTMLDivElement>document.getElementById('root');
  const checkRoute: boolean = pages.hasOwnProperty(route);
  const currentRoute: string = checkRoute ? route : '_404';
  const currentPage: (context: object, options?: unknown) => string = (context, options) => {
    return pages[currentRoute](context, options);
  };
  const currentState: object = state[currentRoute];

  root.innerHTML = currentPage(currentState);
};