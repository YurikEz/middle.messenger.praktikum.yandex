import { withRouter } from '../../utils/Router';
import { connect } from '../../store';
import { HomePage } from './home';

export { HomePage } from './home';

export default withRouter(connect(state => ({ user: state.user || {} }), HomePage));