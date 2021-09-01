import myDash from '../../src/utils/mydash/index';

export default () => {
  const pathname = window.location.pathname;
  let currentRoute;

  if (pathname.length === 1 && pathname === '/') {
    currentRoute = 'login'
  } else {
    currentRoute = myDash.lastItem(pathname.split('/').filter(myDash.identity));
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