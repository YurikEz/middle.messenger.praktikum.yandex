import './index.scss';
import Block from '../../utils/Block';
import ChatsController from "../../controllers/ChatsController";
import UserController from "../../controllers/UserController";

let timer: number;

export class MessengerPage extends Block {
  getStateFromProps() {
    this.state = {
      handleChangeInput: async (e: Event) => {
        const value = e.target.value;
        clearTimeout(timer);

        if (value.length > 1) {
          timer = await setTimeout(async () => {
            await UserController.searchUsers({
              login: value,
            });
          }, 800);
        }
      },
    }
  }

  componentDidMount() {
    if (!this.props.user.profile) {
      this.props.router.go('/');
    }

    if (!this.props.chats.allChats) {
      (async () => {
        await ChatsController.fetchChats();
      })();
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
                                  onChange=handleChangeInput
                  }}}
              </div>
              <div class="chats__wrapper">
                  {{#if this.user.search }}
                      {{#each this.user.search }}
                          {{ this.login }}
                      {{/each}}
                  {{else}}
                      {{{
                          Chat
                              avatar="/path/to/avatar.jpg"
                              title="Новый чат"
                              last_message="Это сообщение было последним"
                              time="2020-01-02T14:22:22.000Z"
                              unread_count=9
                      }}}
                  {{/if}}
              </div>
          </div>
          {{{
              ChatOpened
          }}}
      </section>
    `;
  }
}