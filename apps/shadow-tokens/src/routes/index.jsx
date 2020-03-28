/* --- Global --- */
import {Router} from '@reach/router';

/* --- Local --- */
// import {Site} from '@templates';
import Bank from './Bank';
import Site from './Site';

const DashboardPage = props => (
  <Router width="100%" primary={false} style={{width: ' 100%'}}>
    <Bank path="/bank/*" />
    <Site path="/*" />
  </Router>
);

export default DashboardPage;
