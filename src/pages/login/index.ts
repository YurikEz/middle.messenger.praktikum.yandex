import Handlebars from 'handlebars/dist/handlebars';
import Block from "../../js/utils/defaultComponent";
import template from "./login.tmpl";

class Login extends Block {
  constructor(props) {
    super('section', props);
  }

  render() {
    console.log('render', this.props);
    return Handlebars.compile(template)(this.props);
  }
}

export default Login;