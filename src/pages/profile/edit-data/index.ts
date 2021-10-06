import { withRouter } from '../../../utils/Router';
import { connect } from '../../../store';
import { EditDataPage } from './edit-data';

export { EditDataPage } from './edit-data';

export default withRouter(connect(state => ({ user: state.user || {} }), EditDataPage));