import Block from '../../utils/Block';
import Validator from '../../utils/Validator';
import { onCheckFormFields } from '../../utils/Validator';

import AuthController from '../../controllers/AuthController';
import { LoginData } from '../../api/AuthAPI';

let fields: NodeListOf<Element>;
let button: HTMLButtonElement | null = null;

export class LoginPage extends Block {
  getStateFromProps() {
    this.state = {
      handleChangeInput: () => {
        Validator(button, fields);
      },
      onLogin: async (e: Event) => {
        e.preventDefault();
        const validFields = onCheckFormFields(button, fields) as unknown as LoginData;

        if (Object.keys(validFields).length) {
          await AuthController.login(validFields);
        } else {
          alert('Ошибка: Заполните форму согласно описаниям полей');
        }
      },
    }
  }

  componentDidMount() {
    if (this.props.user.profile) {
      this.props.router.go('/messenger')
    }

    if (!fields?.length) {
      fields = document.querySelectorAll('.input-field');
      button = document.querySelector('.button');
      Validator(button, fields);
    }
  }

  componentDidUpdate() {
    if (this.props.user.profile) {
      this.props.router.go('/messenger');
    }

    return true;
  }

  render() {
    // language=hbs
    return `
        <section id="login-page" class="section-wrapper">
            {{{
                Title
                    label="Авторизация"
            }}}
            <form id="login" name="login" class="form">
                <section class="form__fields">
                    {{{
                        Input
                            ref="login"
                            name="login"
                            label="Логин"
                            placeholder="Введите логин"
                            onChange=handleChangeInput
                    }}}
                    {{{
                        Input
                            ref="password"
                            name="password"
                            type="password"
                            label="Пароль"
                            placeholder="Введите пароль"
                            onChange=handleChangeInput
                    }}}
                </section>
                <section class="form__controls">
                    {{{
                        Button
                            name="login"
                            label="Войти"
                            form="login"
                            onClick=onLogin
                    }}}
                    {{{
                        Link
                            label="Ещё не зарегистрированы?"
                            href="sign-up"
                    }}}
                </section>
            </form>
        </section>`;
  }
}