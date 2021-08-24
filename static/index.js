import './index.scss';
import findCurrentPage from './js/findCurrentPage';
import miniRouter from './js/miniRouter';
import changeTemplate from './js/changeTemplate';
import foundedInputs from './js/foundedInputs';
import validator from './js/validator';

const root = document.querySelector('#root');
const currentPage = findCurrentPage();
const currentTemplate = miniRouter(currentPage);
changeTemplate(root, currentTemplate);

const buttons = document.querySelectorAll('.button');

buttons.forEach(item => item.addEventListener('click', handleButtonClick));

function handleButtonClick(e) {
  e.preventDefault();

  const elements = e.target.form.firstElementChild.children;
  const inputs = foundedInputs(elements);
  const isValidate = validator(inputs);

  console.log('isValidate', isValidate);
}