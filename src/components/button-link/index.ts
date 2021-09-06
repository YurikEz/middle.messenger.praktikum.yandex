import Handlebars from 'handlebars/dist/handlebars';
import DefaultComponent from '../../js/utils/default-component';
import template from './index.tmpls';

export default class ButtonLink extends DefaultComponent {
  constructor(props) {
    super('div', props);
    this.props = props;
  }

  render() {
    return Handlebars.compile(template(), { noEscape: true })(this.props);
  }
}