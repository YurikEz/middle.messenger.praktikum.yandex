import './index.scss';
import Block from '../../utils/Block';

// interface ButtonSendProps {}

export class ButtonSend extends Block {
  constructor() {
    super({});
  }

  render(): string {
    // language=hbs
    return `
        <button class="open-chat__button-send button" type="button">
            <img src="/image/icons/send.svg" alt="send">
        </button>
    `;
  }
}