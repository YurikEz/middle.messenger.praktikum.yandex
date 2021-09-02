import utils from '../../src/utils/helpers';

export default () => {
  const pathname: string = window.location.pathname;
  let currentRoute: string;

  if (pathname.length === 1 && pathname === '/') {
    currentRoute = 'login'
  } else {
    currentRoute = utils.lastItem(pathname.split('/').filter(utils.identity));
  }

  if (currentRoute === '500') {
    currentRoute = '_500';
  }

  if (pathname === '/profile/edit/data' && currentRoute === 'data') {
    currentRoute = 'profileEditData';
  }

  if (pathname === '/profile/edit/password' && currentRoute === 'password') {
    currentRoute = 'profileEditPassword';
  }

  return currentRoute;
};