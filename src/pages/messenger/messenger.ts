import './index.scss';
import Block from '../../utils/Block';

export class MessengerPage extends Block {
  getStateFromProps() {
    // this.state = {}
  }

  componentDidMount() {
    // if (!this.props.user.profile) {
    //   this.props.router.go('/');
    // }
  }

  componentDidUpdate() {
    // if (!this.props.user.profile) {
    //   this.props.router.go('/');
    // }

    return true;
  }

  render() {
    // language=hbs
    return `
      <section id="messenger" class="messenger">
          <div class="chats">
              <div class="chats__header">
                  {{{
                      Link
                          label="Профиль"
                          href="settings"
                  }}}
              </div>
              <div class="chats__search">
                  {{{
                      InputSearch
                  }}}
              </div>
              <div class="chats__wrapper">
                  {{{
                      Chat
                          avatar="/path/to/avatar.jpg"
                          title="Новый чат"
                          last_message="Это сообщение было последним"
                          time="2020-01-02T14:22:22.000Z"
                          unread_count=9
                  }}}
              </div>
          </div>
          {{{
              ChatOpened
          }}}
      </section>
    `;
  }
}