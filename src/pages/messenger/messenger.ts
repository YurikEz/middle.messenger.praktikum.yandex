import './index.scss';
import Block from '../../utils/Block';

import ChatsController from '../../controllers/ChatsController';
import UserController from '../../controllers/UserController';
import ModalController from '../../controllers/ModalController';
import { ChatData } from '../../api/ChatsAPI';

let timer: number;
let inputValueOnModal: string = '';

export class MessengerPage extends Block {
  getStateFromProps() {
    this.state = {
      activePanelButtons: false,
      handleOpenModalCreateChat: () => {
        ModalController.modalOpen({
          active: true,
          title: 'Создать чат',
          data: {
            input: {
              name: 'nameChat',
              label: 'Название чата',
              placeholder: 'Введите название чата',
            },
            button: {
              name: 'createChat',
              label: 'Создать',
            },
          },
        });
      },
      handleModalClick: async (e: Event) => {
        const nameButton = e?.target?.name;
        if (nameButton === 'close') {
          ModalController.modalClose();
        }

        if (inputValueOnModal.length > 3) {
          if (nameButton === 'createChat') {
            await ChatsController.createChat({
              title: inputValueOnModal,
            })
              .then(async () => {
                await ChatsController.fetchChats();
                ModalController.modalClose();
                inputValueOnModal = '';
              });
          }

          if (nameButton === 'addUser' || nameButton === 'deleteUser') {
            await UserController.searchUsers({
              login: inputValueOnModal,
            })
              .then(async (data) => {
                const foundUser = data?.find(({ login }: { login: string }) => login === inputValueOnModal);

                if (nameButton === 'addUser') {
                  await ChatsController.addUsersInChat({
                    users: [foundUser!.id],
                    chatId: this.props.chats.selectedChat!.id,
                  });
                }

                if (nameButton === 'deleteUser') {
                  await ChatsController.deleteUsersInChat({
                    users: [foundUser!.id],
                    chatId: this.props.chats.selectedChat!.id,
                  });
                }

                await ChatsController.fetchChats();
                await UserController.clearSearchUsers();
              });

            ModalController.modalClose();
            inputValueOnModal = '';
          }
        }
      },
      handleModalChangeInput: (e: Event) => {
        inputValueOnModal = e?.target!.value;
      },
      handleChatOpenedClick: async (e: Event) => {
        const nameButton = e?.target?.name;

        if (nameButton === 'openPanelButtons') {
          this.state.activePanelButtons = !this.state.activePanelButtons;
        }
        if (nameButton === 'openModalAddUser') {
          this.state.activePanelButtons = false;

          ModalController.modalOpen({
            active: true,
            title: 'Добавить пользователя',
            data: {
              input: {
                name: 'nameUser',
                label: 'Логин',
                placeholder: 'Введите логин пользователя',
              },
              button: {
                name: 'addUser',
                label: 'Добавить',
              },
            },
          });
        }
        if (nameButton === 'openModalDeleteUser') {
          this.state.activePanelButtons = false;

          ModalController.modalOpen({
            active: true,
            title: 'Удалить пользователя',
            data: {
              input: {
                name: 'nameUser',
                label: 'Логин',
                placeholder: 'Введите логин пользователя',
              },
              button: {
                name: 'deleteUser',
                label: 'Удалить',
              },
            },
          });
        }
      },
      handleSelectUser: async (e: Event) => {
        const userId: number = Number(e?.target?.dataset?.userId);
        const userLogin: string = e?.target?.dataset?.userLogin;

        await ChatsController.createChat({
          title: userLogin,
        });

        await ChatsController.fetchChats()
          .then(async (data) => {
            if (data?.length) {
              const newChat = data.find(({ title }: { title: string }) => title === userLogin);

              await ChatsController.addUsersInChat({
                users: [userId],
                chatId: newChat!.id,
              });
              await ChatsController.fetchChats();
            }

            await UserController.clearSearchUsers();
          })
      },
      handleSelectChat: (e: Event) => {
        const chatId: number = Number(e?.target?.dataset?.chatId);
        const foundChat: ChatData = this.props.chats.allChats.find(({ id }: { id: number}) => id === chatId);

        ChatsController.setSelectedChat(foundChat);
      },
      handleChangeInput: async (e: Event) => {
        const value: string = e?.target!.value;
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
                      Button
                          label="Создать чат"
                          onClick=handleOpenModalCreateChat
                  }}}
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
                          {{{
                              ButtonUser
                                  item=this
                                  onClick=../handleSelectUser
                          }}}
                      {{/each}}
                  {{else}}
                      {{#each this.chats.allChats }}
                          {{{
                              Chat
                                  item=this
                                  onClick=../handleSelectChat
                          }}}
                      {{/each}}
                  {{/if}}
              </div>
          </div>
          {{{
              ChatOpened
                  item=this.chats.selectedChat
                  activePanelButtons=activePanelButtons
                  onClick=handleChatOpenedClick
          }}}
          {{{
              Modal
                  item=this.modal
                  onClick=handleModalClick
                  onChange=handleModalChangeInput
          }}}
      </section>
    `;
  }
}