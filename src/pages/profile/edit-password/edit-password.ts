import Block from '../../../utils/Block';
import Validator from '../../../utils/Validator';
import { onCheckFormFields } from '../../../utils/Validator';

import UserController from '../../../controllers/UserController';
import AuthController from '../../../controllers/AuthController';
import { UserUpdatePasswordProps } from '../../../api/UserAPI';

let fields: NodeListOf<Element>;
let button: HTMLButtonElement | null = null;

export class EditPasswordPage extends Block {
  getStateFromProps() {
    this.state = {
      handleChangeInput: () => {
        Validator(button, fields);
      },
      onSaveChanges: async (e: Event) => {
        e.preventDefault();
        const validFields = onCheckFormFields(button, fields) as unknown as UserUpdatePasswordProps;

        if (Object.keys(validFields).length) {
          await UserController.updatePassword({
            newPassword: validFields.newPassword,
            oldPassword: validFields.oldPassword,
          });
          await AuthController.logout();
        } else {
          alert('Ошибка: Заполните форму согласно описаниям полей');
        }
      },
    }
  }

  componentDidMount() {
    if (!this.props.user.profile) {
      this.props.router.go('/');
    } else {
      if (!fields?.length) {
        fields = document.querySelectorAll('.input-field');
        button = document.querySelector('.button');
        Validator(button, fields);
      }
    }
  }

  componentDidUpdate() {
    if (!this.props.user.profile) {
      this.props.router.go('/');
    }

    return true;
  }

  render() {
    // language=hbs
    return `
        <section id="profile-edit-password" class="profile-wrapper">
            {{{ ButtonBack href="settings" }}}
            <div class="profile-inner">
                {{{
                    Title
                        label="Изменить пароль"
                }}}
                <div class="profile">
                    <div class="profile__left">
                        {{{
                            Avatar
                                  url=this.user.profile.avatar
                                  disabled=true
                        }}}
                        <div class="profile__controls">
                            {{{
                                Button
                                    name="save"
                                    label="Сохранить"
                                    form="profile-edit-password"
                                    onClick=onSaveChanges
                            }}}
                            {{{
                                Link
                                    label="Назад в профиль"
                                    href="settings"
                            }}}
                        </div>
                    </div>
                    <div class="profile__right">
                        <form id="profile-edit-password-form" name="profile-edit-password" class="form">
                            <section class="form__fields">
                                {{{
                                    Input
                                        ref="oldPassword"
                                        name="oldPassword"
                                        type="password"
                                        label="Старый пароль"
                                        onChange=handleChangeInput
                                }}}
                                {{{
                                    Input
                                        ref="newPassword"
                                        name="newPassword"
                                        type="password"
                                        label="Новый пароль"
                                        onChange=handleChangeInput
                                }}}
                                {{{
                                    Input
                                        ref="newPasswordConfirm"
                                        name="newPasswordConfirm"
                                        type="password"
                                        label="Новый пароль (еще раз)"
                                        onChange=handleChangeInput
                                }}}
                            </section>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    `;
  }
}