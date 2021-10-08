import Handlebars from 'handlebars/dist/handlebars';
import { HelperOptions } from 'handlebars';

import Block from './Block';

interface BlockConstructable<Props = unknown> {
  new(props: Props): Block;
  getName: () => string;
}

export default function registerComponent(Component: BlockConstructable) {
  Handlebars.registerHelper(Component.getName(), function ({ hash: { ref, ...hash }, data }: HelperOptions) {
    if (!data.root.children) {
      data.root.children = {};
    }

    if (!data.root.refs) {
      data.root.refs = {};
    }

    const { children, refs } = data.root;

    const component = new Component(hash);

    children[component.id] = component;

    if (ref) {
      refs[ref] = component.getContent();
    }

    return `<div data-id="${component.id}"></div>`;
  })
}