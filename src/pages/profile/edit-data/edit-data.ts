import Block from '../../../utils/Block';
import Validator from '../../../utils/Validator';
import { onCheckFormFields } from '../../../utils/Validator';

import UserController from '../../../controllers/UserController';
import { UserUpdateProfileProps } from '../../../api/UserAPI';

let fields: NodeListOf<Element>;
let button: HTMLButtonElement | null = null;

export class EditDataPage extends Block {
  getStateFromProps() {
    this.state = {
      handleChangeAvatar: async (e: Event) => {
        e.preventDefault();
        const avatar = e.target?.files[0];
        let formData = new FormData();
        formData.append('avatar', avatar);
        await UserController.updateAvatar(formData);
      },
      handleChangeInput: () => {
        Validator(button, fields);
      },
      onSaveChanges: async (e: Event) => {
        e.preventDefault();
        const validFields = onCheckFormFields(button, fields) as unknown as UserUpdateProfileProps;

        if (Object.keys(validFields).length) {
          await UserController.updateProfile(validFields);
          this.props.router.go('/settings');
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
        <section id="profile-edit-data" class="profile-wrapper">
            {{{ ButtonBack href="settings" }}}
            <div class="profile-inner">
                {{{
                    Title
                        label="Редактирование данных в профиле"
                }}}
                <div class="profile">
                    <div class="profile__left">
                        {{{
                            Avatar
                                  url=this.user.profile.avatar
                                  onChange=handleChangeAvatar
                        }}}
                        <div class="profile__controls">
                            {{{
                                Button
                                      name="save"
                                      label="Сохранить"
                                      form="profile-edit-data"
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
                        <form id="profile-edit-data-form" name="profile-edit-data" class="form">
                            <section class="form__fields">
                                {{{
                                    Input
                                        ref="email"
                                        name="email"
                                        label="Почта"
                                        value=this.user.profile.email
                                        onChange=handleChangeInput
                                }}}
                                {{{
                                    Input
                                        ref="login"
                                        name="login"
                                        label="Логин"
                                        value=this.user.profile.login
                                        onChange=handleChangeInput
                                }}}
                                {{{
                                    Input
                                        ref="first_name"
                                        name="first_name"
                                        label="Имя"
                                        value=this.user.profile.first_name
                                        onChange=handleChangeInput
                                }}}
                                {{{
                                    Input
                                        ref="second_name"
                                        name="second_name"
                                        label="Фамилия"
                                        value=this.user.profile.second_name
                                        onChange=handleChangeInput
                                }}}
                                {{{
                                    Input
                                        ref="display_name"
                                        name="display_name"
                                        label="Имя в чате"
                                        value=this.user.profile.display_name
                                        onChange=handleChangeInput
                                }}}
                                {{{
                                    Input
                                        ref="phone"
                                        name="phone"
                                        label="Телефон"
                                        value=this.user.profile.phone
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