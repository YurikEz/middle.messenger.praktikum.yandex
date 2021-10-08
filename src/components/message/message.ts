import './index.scss';
import Block from '../../utils/Block';
import { ChatMessage } from '../../api/ChatsAPI';

interface MessageProps {
  item: ChatMessage,
  currentUserId: number,
}

export class Message extends Block {
  constructor({
                item,
                currentUserId,
              }: MessageProps) {
    super({
      item,
      currentUserId,
      isMyMessage: Number(currentUserId) === Number(item.user_id),
    });
  }

  static getName() {
    return 'Message';
  }

  render(): string {
    // language=hbs
    return `
        <div class="message {{#if isMyMessage }}message--my{{/if}}">
            {{#if item.content }}
                <p class="message__text">{{ item.content }}</p>
            {{/if}}
            {{#if img }}
                <img class="message__image" src="{{ img }}" alt="image">
            {{/if}}
            <div class="message__date">{{ item.time }}</div>
        </div>
    `;
  }
}