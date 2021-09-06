import Handlebars from 'handlebars/dist/handlebars';
import DefaultComponent from '../../js/utils/default-component';
import template from './index.tmpl';

export default class Title extends DefaultComponent {
  constructor(props) {
    super('h1', props);
    this.props = props;
  }

  render() {
    return Handlebars.compile(template(), {noEscape: true})(this.props);
  }
}
