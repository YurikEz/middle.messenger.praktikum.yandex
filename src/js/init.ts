import './getModules';
import foundedInputs from './foundedInputs';
import router from './router/';
import render from './render/';
import validator from './validator';

export default () => {
  document.addEventListener('DOMContentLoaded', () => {
    render(router());

    const buttons = document.querySelectorAll('.button');

    buttons.forEach(item => item.addEventListener('click', handleButtonClick));

    function handleButtonClick(e) {
      e.preventDefault();

      const elements = e.target.form.firstElementChild.children;
      const inputs = foundedInputs(elements);
      const isValidate = validator(inputs);

      console.log('isValidate', isValidate);
    }
  });
};