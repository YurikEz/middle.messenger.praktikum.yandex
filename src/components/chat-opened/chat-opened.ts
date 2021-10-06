import './index.scss';
import Block from '../../utils/Block';

interface ChatOpenedProps {
  selectedChat?: {
    [key: string]: unknown,
  },
  avatar?: string,
}

export class ChatOpened extends Block {
  constructor({
                selectedChat = undefined,
                avatar = '',
              }: ChatOpenedProps) {
    super({
      selectedChat,
      avatar,
    });
  }

  render(): string {
    // language=hbs
    return `
        <div class="open-chat {{#if selectedChat }}open-chat--active{{/if}}">
            {{#if selectedChat }}
                <div class="open-chat__header">
                    <div class="open-chat__header-info">
                        <div class="open-chat__header-avatar">
                            {{#if avatar }}
                                <img src="{{ avatar }}" alt="avatar">
                            {{else}}
                                <div class="open-chat__header-avatar-default"></div>
                            {{/if}}
                        </div>
                        <div class="open-chat__header-title">{{ selectedChat.title }}</div>
                    </div>
                    <button class="open-chat__header-settings">
                        <img src="/image/icons/dots.svg" alt="dots">
                    </button>
                </div>
                <div class="open-chat__messages">
                    messages
                </div>
                <div class="open-chat__controls">
                    <button class="open-chat__button-upload" type="button">
                        <img src="/image/icons/upload.svg" alt="upload">
                    </button>
                    {{{
                        Input
                            name="message"
                            placeholder="Сообщение"
                            isNotLabel=true
                    }}}
                    {{{
                        ButtonSend
                    }}}
                </div>
            {{else}}
                <div class="open-chat__empty">
                    <h3 class="open-chat__empty-title">Выберите чат чтобы отправить сообщение</h3>
                </div>
            {{/if}}
        </div>
    `;
  }
}