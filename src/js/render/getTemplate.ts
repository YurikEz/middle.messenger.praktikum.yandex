import pages from '../../pages';
import state from '../storage/state';

export default (route) => {
  const currentPage: (context: object, options?: unknown) => string = (context, options) => {
    return pages[route](context, options);
  };
  const currentState: object = state[route];

  return currentPage(currentState);
}