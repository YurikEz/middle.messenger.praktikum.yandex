import router from './router/';
import render from './render/';
import validator from './utils/validator';

export default () => {
  document.addEventListener('DOMContentLoaded', () => {
    render(router());

    const button = document.querySelector('.button');
    const inputs = document.querySelectorAll('.input-field__input');

    validator(button, inputs);
  });
};