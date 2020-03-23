/* --- Global --- */
import {Router} from '@reach/router';

/* --- Local --- */
import {Site} from '@templates';
import {Activity, Token} from '@screens';

const DashboardPage = props => (
  <Site>
    <Router width="100%" primary={false} style={{width: ' 100%'}}>
      <Activity path="/" />
      <Token path="/token/:address" />
    </Router>
  </Site>
);

export default DashboardPage;
