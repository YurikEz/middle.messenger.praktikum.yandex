import Handlebars from 'handlebars/dist/handlebars';

import DefaultComponent from '../../js/utils/default-component';

import template from './index.tmpl';

export default class InputSearch extends DefaultComponent {
  constructor(props: { [key: string]: unknown }) {
    super('div', props);
    this.props = props;
  }

  render(): string {
    return Handlebars.compile(template(), { noEscape: true })(this.props);
  }
}
