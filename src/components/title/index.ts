import Handlebars from 'handlebars/dist/handlebars';
import DefaultComponent from '../../js/utils/defaultComponent';
import template from './title.tmpl';

class Title extends DefaultComponent {
  constructor(props) {
    super('h1', props);
  }

  render() {
    console.log('render', this.props);
    return Handlebars.compile(template)(this.props);
  }
}

export default Title;
