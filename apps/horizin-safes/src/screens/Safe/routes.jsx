/* --- Global --- */
import {Router} from '@reach/router';

/* --- Local --- */
import Main from './main';
import ModuleDailyLimit from './module-daily-limit';

const {
  REACT_APP_MODULE_DAILY_LIMIT,
  REACT_APP_MODULE_SOCIAL_RECOVERY,
  REACT_APP_MODULE_STATE_CHANNEL,
} = process.env;

const DashboardPage = props => (
  <Router width="100%" primary={false}>
    <Main path="/" {...props} />
    <ModuleDailyLimit
      path={`/module/${REACT_APP_MODULE_DAILY_LIMIT}`}
      moduleAddress={REACT_APP_MODULE_DAILY_LIMIT}
      {...props}
    />
  </Router>
);

export default DashboardPage;
