import './index.scss';
import Block from '../../utils/Block';

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