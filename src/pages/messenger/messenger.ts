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
              <div class="chats__wrapper"></div>
          </div>
          //openChat
      </section>
    `;
  }
}


// <div class="chats">
// <div class="chats__header">
//   ${link}
//   </div>
//   <div class="chats__search">
//   ${inputSearch}
//   </div>
//   <div class="chats__wrapper">
//   ${chats}
//   </div>
//   </div>
// ${openChat}