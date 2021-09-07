import getTemplate from './getTemplate';
import validator from "../utils/validator";

export default (route: string) => {
  const root = <HTMLDivElement>document.getElementById('root');

  root.innerHTML = getTemplate(route);

  const accessPageForValidate = [
    'messenger',
    'profile',
    'profileEditData',
    'profileEditPassword',
    'registration',
  ];

  if (accessPageForValidate.includes(route)) {
    const button: HTMLButtonElement | null = document.querySelector('.button');
    const fields: NodeListOf<HTMLInputElement> = document.querySelectorAll('.input-field');

    validator(button, fields);
  }
};