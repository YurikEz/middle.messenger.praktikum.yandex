import './getStyle';
import './getModules';
import foundedInputs from './foundedInputs';
import getRoute from './getRoute';
import router from './router';
import validator from './validator';

document.addEventListener('DOMContentLoaded', () => {
  const route: string = getRoute();
  router(route);

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