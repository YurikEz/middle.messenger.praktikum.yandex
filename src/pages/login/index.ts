import { withRouter } from '../../utils/Router';
import { connect } from '../../store';
import { LoginPage } from './login';

export { LoginPage } from './login';

export default withRouter(connect(state => ({ user: state.user || {} }), LoginPage));