import './index.scss';
import Block from '../../utils/Block';

interface InputSearchProps {
  value?: string;
  onChange?: () => void;
}

export class InputSearch extends Block {
  constructor({
                value = '',
                onChange = () => {},
              }: InputSearchProps) {
    super({
      value,
      events: {
        input: onChange,
      },
    });
  }

  render(): string {
    // language=hbs
    return `
        <input
          class="input-search"
          type="text"
          name="search"
          placeholder="🔎 Поиск"
          autocomplete="off"
          {{#if value }}
              value="{{ value }}"
          {{/if}}
        >
    `
  }
}