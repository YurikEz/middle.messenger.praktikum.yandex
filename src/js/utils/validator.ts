// TODO: Написать позже валидатор полей при отправке
const onSubmitForm = (e, inputs) => {
  e.preventDefault();

  console.log('onSubmitForm', inputs);
};

export default (button, inputs) => {
  if (button) {
    button.addEventListener('click', (e) => onSubmitForm(e, inputs));
  }
};