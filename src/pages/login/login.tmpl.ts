import Login from "./index";
import Title from "../../components/title";

const title = new Title({
  label: 'Click me thasdhas',
  extendClass: '',
});

const login = new Login({
  components: {
    title,
  }
});

export default login;