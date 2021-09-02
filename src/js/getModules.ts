import Handlebars from 'handlebars/dist/handlebars.runtime';

import modules from '../modules';

for (const [key, value] of Object.entries(modules)) {
  Handlebars.registerPartial(key, value);
}