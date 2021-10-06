import './index.scss';
import Block from '../../utils/Block';
import AuthController from '../../controllers/AuthController';

export class ProfilePage extends Block {
  getStateFromProps() {
    this.state = {
      onLogout: (e: Event) => {
        e.preventDefault();
        AuthController.logout();
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
      <section id="profile" class="profile-wrapper">
          {{{ ButtonBack href="messenger" }}}
          <div class="profile-inner">
            {{{
                Title
                    label="Профиль"
            }}}
            <div class="profile">
              <div class="profile__left">
                {{{
                    Avatar
                }}}
                <div class="profile__controls">
                  {{{
                      Link
                          label="Изменить данные"
                          href="settings/edit/data"
                  }}}
                  {{{
                      Link
                          label="Изменить пароль"
                          href="settings/edit/password"
                  }}}
                  {{{
                      Link
                          label="Выйти"
                          href=""
                          extendClass="red"
                          onClick=onLogout
                  }}}
                </div>
              </div>
              <div class="profile__right">
                  <form id="profile-form" name="profile" class="form">
                      <section class="form__fields">
                          {{{
                              Input
                                  ref="email"
                                  name="email"
                                  label="Почта"
                                  disabled=true
                          }}}
                          {{{
                              Input
                                  ref="login"
                                  name="login"
                                  label="Логин"
                                  disabled=true
                          }}}
                          {{{
                              Input
                                  ref="first_name"
                                  name="first_name"
                                  label="Имя"
                                  disabled=true
                          }}}
                          {{{
                              Input
                                  ref="second_name"
                                  name="second_name"
                                  label="Фамилия"
                                  disabled=true
                          }}}
                          {{{
                              Input
                                  ref="display_name"
                                  name="display_name"
                                  label="Имя в чате"
                                  disabled=true
                          }}}
                          {{{
                              Input
                                  ref="phone"
                                  name="phone"
                                  label="Телефон"
                                  disabled=true
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