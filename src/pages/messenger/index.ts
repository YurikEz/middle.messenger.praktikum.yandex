import state from '../../js/storage/state';
import Chat from '../../components/chat/';
import OpenChat from '../../components/open-chat/';
import Message from '../../components/message/';
import InputSearch from '../../components/input-search/';
import ButtonLink from '../../components/button-link';
import createElement from "../../js/utils/createElement";
import formatDate from "../../js/utils/formatDate";

const localState = state.messenger;
const wrapper = createElement('section', 'messenger', ['messenger']);

const link = new ButtonLink(localState.link).render();

const inputSearch = new InputSearch(localState.search.element).render();

const chats = localState.chats.map(chat => new Chat({
  ...chat,
  time: formatDate(chat.last_message.time),
  isMyLastMessage: chat.last_message.user.login === state.currentUser.login,
}).render()).join('');

const messages = localState.selectedChat.messages.map(message => new Message({
  ...message,
  time: formatDate(message.time),
  isMyMessage: message.user.login === state.currentUser.login,
}).render()).join('');

const openChat = new OpenChat({
  selectedChat: localState.selectedChat,
  messages,
}).render();

const template = `
  <div class="chats">
    <div class="chats__header">
      ${link}
    </div>
    <div class="chats__search">
      ${inputSearch}
    </div>
    <div class="chats__wrapper">
      ${chats}
    </div>
  </div>
  ${openChat}
`;

wrapper.insertAdjacentHTML(
  'afterbegin',
  template,
);

export default wrapper.outerHTML;