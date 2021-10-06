import './index.scss';
import Block from '../../utils/Block';

interface MessageProps {
  isMyMessage?: boolean,
  content?: string,
  img?: string,
  time?: string,
}

export class Message extends Block {
  constructor({
                isMyMessage = false,
                content= '',
                img= '',
                time= '',
              }: MessageProps) {
    super({
      isMyMessage,
      content,
      img,
      time,
    });
  }

  render(): string {
    // language=hbs
    return `
        <div class="message {{#if isMyMessage }}message--my{{/if}}">
            {{#if content }}
                <p class="message__text">{{ content }}</p>
            {{/if}}
            {{#if img }}
                <img class="message__image" src="{{ img }}" alt="image">
            {{/if}}
            <div class="message__date">{{ time }}</div>
        </div>
    `;
  }
}