import { withRouter } from '../../../utils/Router';
import { connect } from '../../../store';
import { EditPasswordPage } from './edit-password';

export { EditPasswordPage } from './edit-password';

export default withRouter(connect(state => ({ user: state.user || {} }), EditPasswordPage));