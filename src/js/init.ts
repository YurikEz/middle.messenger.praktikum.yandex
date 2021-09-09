import render from './render/';
import router from './router/';

export default (): void => {
  document.addEventListener('DOMContentLoaded', () => {
    console.log('init');
    render(router());
  });
};