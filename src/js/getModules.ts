import Handlebars from 'handlebars/dist/handlebars.runtime';

import components from '../components';

for (const [key, value] of Object.entries(components)) {
  Handlebars.registerPartial(key, value);
}