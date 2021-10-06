import Block from '../../utils/Block';
import './index.scss';

interface AvatarProps {}

export class Avatar extends Block {
  constructor({}: AvatarProps) {
    super({});
  }

  render(): string {
    // language=hbs
    return `<div class="avatar"></div>`;
  }
}