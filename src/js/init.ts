import router from './router/';
import render from './render/';

export default () => {
  document.addEventListener('DOMContentLoaded', () => {
    render(router());
  });
};