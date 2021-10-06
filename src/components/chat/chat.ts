import './index.scss';
import Block from '../../utils/Block';

interface ChatProps {
  avatar?: string,
  title: string,
  isMyLastMessage?: boolean,
  last_message?: string,
  time?: string,
  unread_count?: number,
}

export class Chat extends Block {
  constructor({
                avatar = '',
                title,
                isMyLastMessage= false,
                last_message= '',
                time= '',
                unread_count= 0,
              }: ChatProps) {
    super({
      avatar,
      title,
      isMyLastMessage,
      last_message,
      time,
      unread_count,
    });
  }

  render(): string {
    // language=hbs
    return `
        <button type="button" class="chat">
            <div class="chat__avatar">
                {{#if avatar }}
                    <img src="{{ avatar }}" alt="avatar">
                {{else}}
                    <div class="chat__avatar-default"></div>
                {{/if}}
            </div>
            <div class="chat__info">
                <h3 class="chat__title">{{ title }}</h3>
                <p class="chat__text">
                    {{#if isMyLastMessage }}
                        Вы:
                    {{/if}}
                    {{ last_message }}
                </p>
            </div>
            <div class="chat__info">
                <span class="chat__date">{{ time }}</span>
                {{#if unread_count }}
                    <div class="chat__notification-wrapper">
                        <span class="chat__notification">{{ unread_count }}</span>
                    </div>
                {{/if}}
            </div>
        </button>
    `;
  }
}