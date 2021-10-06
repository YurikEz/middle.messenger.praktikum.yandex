import Block from '../../../utils/Block';

export class EditPasswordPage extends Block {
  getStateFromProps() {
    // this.state = {}
  }

  componentDidMount() {
    if (!this.props.user.profile) {
      this.props.router.go('/');
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
                                        label="Старый пароль"
                                }}}
                                {{{
                                    Input
                                        ref="newPassword"
                                        name="newPassword"
                                        label="Новый пароль"
                                }}}
                                {{{
                                    Input
                                        ref="newPasswordConfirm"
                                        name="newPasswordConfirm"
                                        label="Новый пароль (еще раз)"
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