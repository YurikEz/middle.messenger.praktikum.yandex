import state from '../../js/storage/state';
import Title from '../../components/title/';
import Form from '../../components/form';
import Button from '../../components/button/';
import ButtonLink from '../../components/button-link';
import Input from '../../components/input/';
import createElement from "../../js/utils/createElement";

const localState = state.registration;
const wrapper = createElement('section', 'registration', ['section-wrapper']);

const title = new Title({
  label: localState.label,
}).render();

const buttons = localState.controls.map(button => {
  if (button.isButton) {
    return new Button(button).render()
  } else {
    return new ButtonLink(button).render()
  }
}).join('');

const inputs = localState.data.map(input => new Input(input).render()).join('');

const form = new Form({
  formName: localState.formName,
  buttons,
  inputs,
}).render();

const template = `
  ${title}
  ${form}
`;

wrapper.insertAdjacentHTML(
  'afterbegin',
  template,
);

export default wrapper.outerHTML;