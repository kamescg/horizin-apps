/* --- Global --- */
import {Router} from '@reach/router';

/* --- Local --- */
import {Dashboard} from '@templates';
import {Activity, Bank, Contracts} from '@screens';

const DashboardPage = props => (
  <Dashboard>
    <Router width="100%" primary={false}>
      <Activity path="/" />
      <Bank path="/bank" />
      <Contracts path="/contracts" />
    </Router>
  </Dashboard>
);

export default DashboardPage;
