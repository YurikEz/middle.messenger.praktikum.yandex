import Block from '../../utils/Block';

export class HomePage extends Block {
  componentDidMount() {
    if (this.props.user.profile) {
      this.props.router.go('/messenger')
    } else {
      this.props.router.go('/login')
    }
  }

  render() {
    return `<div></div>`;
  }
}