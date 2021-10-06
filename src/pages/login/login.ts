import Block from '../../utils/Block';
import Validator from "../../utils/Validator";
import { onCheckFormFields } from "../../utils/Validator";

import AuthController from '../../controllers/AuthController';
import { LoginData } from '../../api/AuthAPI';

let fields: NodeListOf<HTMLInputElement> | [] = [];
let button: HTMLButtonElement | null = null;

export class LoginPage extends Block {
  getStateFromProps() {
    this.state = {
      handleChangeInput: () => {
        Validator(button, fields);
      },
      onLogin: async (e: Event) => {
        e.preventDefault();
        const validFields = onCheckFormFields(fields, button) as unknown as LoginData;

        if (Object.keys(validFields).length) {
          await AuthController.login(validFields);
        } else {
          throw Error('Заполните форму согласно описаниям полей');
        }
      },
    }
  }

  componentDidMount() {
    if (!fields.length) {
      fields = document.querySelectorAll('.input-field');
      button = document.querySelector('.button');
      Validator(button, fields);
    }

    if (this.props.user.profile) {
      this.props.router.go('/messenger')
    }
  }

  componentDidUpdate() {
    if (this.props.user.profile) {
      this.props.router.go('/messenger');
    } else {
      this.props.router.go('/login')
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
                            autocomplete="on"
                            onChange=handleChangeInput
                    }}}
                    {{{
                        Input
                            ref="password"
                            name="password"
                            type="password"
                            label="Пароль"
                            placeholder="Введите пароль"
                            autocomplete="on"
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