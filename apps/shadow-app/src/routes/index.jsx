/* --- Global --- */
import {Router} from '@reach/router';

/* --- Local --- */
import {Dashboard} from '@templates';
import {Activity, Bank, Safes, Safe, Contracts} from '@screens';

const DashboardPage = props => (
  <Dashboard>
    <Router width="100%" primary={false}>
      <Activity path="/" />
      <Bank path="/bank" />
      <Safe path="/safe/:address" />
      <Safes path="/safes" />
      <Contracts path="/contracts" />
    </Router>
  </Dashboard>
);

export default DashboardPage;
