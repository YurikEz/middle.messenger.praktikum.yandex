import './index.scss';
import Block from '../../utils/Block';

interface ButtonProps {
  name: string,
  type?: string,
  label?: string,
  form?: string,
  onClick?: () => void,
}

export class Button extends Block {
  constructor({
                name,
                type= 'button',
                label= '',
                form= '',
                onClick= () => {},
              }: ButtonProps) {
    super({
      name,
      type,
      label,
      form,
      events: {
        click: onClick,
      },
    });
  }

  render(): string {
    // language=hbs
    return `
        <button
          type="{{ type }}"
          class="button"
          {{#if form }}
            form="{{ form }}"
          {{/if}}
        >
            {{ this.label }}
        </button>
    `;
  }
}