import state from '../../js/storage/state';
import Title from '../../components/title/';
import ButtonLink from '../../components/button-link';
import createElement from "../../js/utils/createElement";

const localState = state._500;
const wrapper = createElement('section');

const title = new Title({
  label: localState.label,
  extendClass: localState.extendClass,
}).render();

const subTitle = new Title({
  label: localState.subLabel,
}).render();

const link = new ButtonLink(localState.link).render();

const template = `
  ${title}
  ${subTitle}
  ${link}
`;

wrapper.insertAdjacentHTML(
  'afterbegin',
  template,
);

export default wrapper.outerHTML;