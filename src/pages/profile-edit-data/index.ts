import state from '../../js/storage/state';
import Title from '../../components/title/';
import Form from '../../components/form';
import Button from '../../components/button/';
import ButtonLink from '../../components/button-link';
import ButtonLeftSide from "../../components/button-left-side";
import Avatar from "../../components/avatar";
import Input from '../../components/input/';
import createElement from "../../js/utils/createElement";

const localState = state.profileEditData;
const wrapper = createElement('section', 'profile-edit-data', ['profile-wrapper']);

const title = new Title({
  label: localState.label,
}).render();

const avatar = new Avatar({}).render();

const buttonLeftSide = new ButtonLeftSide(localState.link).render();

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
  inputs,
}).render();

const template = `
  ${buttonLeftSide}
   <div class="profile-inner">
      ${title}
      <div class="profile">
        <div class="profile__left">
          ${avatar}
          <div class="profile__controls">
            ${buttons}
          </div>
        </div>
        <div class="profile__right">
          ${form}
        </div>
      </div>
    </div>
`;

wrapper.insertAdjacentHTML(
  'afterbegin',
  template,
);

export default wrapper.outerHTML;