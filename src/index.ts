require("babel-polyfill");

import Block from './utils/Block';
import Router from './utils/Router';
import registerComponent from './utils/RegisterComponent';
import AuthController from './controllers/AuthController';

import HomePage from './pages/home';
import LoginPage from './pages/login';
import SignUpPage from './pages/signup';
import MessengerPage from './pages/messenger';
import ProfilePage from './pages/profile';
import EditDataPage from './pages/profile/edit-data';
import EditPasswordPage from './pages/profile/edit-password';
import _404 from './pages/404';
import _500 from './pages/500';

const components = require('./components/**/index.ts') as {[key: string]: { default: typeof Block }};

Object.values(components).forEach(component => registerComponent(component.default));

AuthController.fetchUser()
  .then(() => {
    const router = new Router();

    router
      .use('/', HomePage)
      .use('/login', LoginPage)
      .use('/sign-up', SignUpPage)
      .use('/messenger', MessengerPage)
      .use('/settings', ProfilePage)
      .use('/settings/edit/data', EditDataPage)
      .use('/settings/edit/password', EditPasswordPage)
      .use('/404', _404)
      .use('/500', _500)
      .start();
  });