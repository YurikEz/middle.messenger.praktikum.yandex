// TODO: Написать позже валидатор полей при отправке
const onSubmitForm = (e: Event, inputs: NodeListOf<HTMLInputElement>) => {
  e.preventDefault();

  console.log('onSubmitForm', inputs);
};

export default (button: HTMLFormElement | null, inputs: NodeListOf<HTMLInputElement>) => {
  if (button) {
    button.addEventListener('click', (e) => onSubmitForm(e, inputs));
  }
};