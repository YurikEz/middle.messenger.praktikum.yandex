import Block from '../../../utils/Block';

export class EditDataPage extends Block {
  getStateFromProps() {
    this.state = {
      onSaveChanges: (e: Event) => {
        e.preventDefault();
        console.log('onSaveChanges', e);
      },
    }
  }

  componentDidMount() {
    if (!this.props.user.profile) {
      this.props.router.go('/');
    } else {
      for (const [key, field] of Object.entries(this.refs)) {
        const children = Array.from(field.children) as HTMLInputElement[];
        const input: HTMLInputElement | undefined = children.find(({ localName }) => localName === 'input');

        input!.value = this.props.user.profile[key];
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
                                }}}
                                {{{
                                    Input
                                        ref="login"
                                        name="login"
                                        label="Логин"
                                }}}
                                {{{
                                    Input
                                        ref="first_name"
                                        name="first_name"
                                        label="Имя"
                                }}}
                                {{{
                                    Input
                                        ref="second_name"
                                        name="second_name"
                                        label="Фамилия"
                                }}}
                                {{{
                                    Input
                                        ref="display_name"
                                        name="display_name"
                                        label="Имя в чате"
                                }}}
                                {{{
                                    Input
                                        ref="phone"
                                        name="phone"
                                        label="Телефон"
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