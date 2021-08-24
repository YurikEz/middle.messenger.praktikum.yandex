import foundedInputs from './foundedInputs';
import validator from './validator';

window.onload = function () {
  const buttons = document.querySelectorAll('.button');

  buttons.forEach(item => item.addEventListener('click', handleButtonClick));

  function handleButtonClick(e) {
    e.preventDefault();

    const elements = e.target.form.firstElementChild.children;
    const inputs = foundedInputs(elements);
    const isValidate = validator(inputs);

    console.log('isValidate', isValidate);
  }
};