import router from './router/';
import render from './render/';
import validator from './utils/validator';

export default () => {
  document.addEventListener('DOMContentLoaded', () => {
    render(router());

    const button: HTMLFormElement | null = document.querySelector('.button');
    const inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll('.input-field__input');

    validator(button, inputs);
  });
};