import pages from '../../pages';

export default (route: string) => {
  const pagesTyped: {
    [key: string]: string;
  } = pages;

  return pagesTyped[route];
};