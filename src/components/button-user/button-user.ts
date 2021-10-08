import './index.scss';
import Block from '../../utils/Block';
import { UserData } from '../../api/UserAPI';

interface ButtonUserProps {
  item: UserData,
  onClick?: () => void,
}

export class ButtonUser extends Block {
  constructor({
                item,
                onClick = () => {},
              }: ButtonUserProps) {
    super({
      item,
      events: {
        click: onClick,
      },
    });
  }

  render(): string {
    // language=hbs
    return `
        <button
                type="button"
                class="button-user"
                data-user-id="{{ item.id }}"
                data-user-login="{{ item.login }}"
        >
            {{ item.login }}
        </button>
    `;
  }
}