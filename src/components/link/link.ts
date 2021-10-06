import Block from '../../utils/Block';
import './index.scss';

interface LinkProps {
  href: string,
  label?: string,
  extendClass?: string,
  onClick?: () => void,
}

export class Link extends Block {
  constructor({
                href,
                label = '',
                extendClass = '',
                onClick = () => {},
              }: LinkProps) {
    super({
      href,
      label,
      extendClass,
      events: {
        click: onClick,
      },
    });
  }

  render(): string {
    // language=hbs
    return `
        <a class="button-link {{ extendClass }}" href="/{{ href }}">{{ label }}</a>
    `;
  }
}