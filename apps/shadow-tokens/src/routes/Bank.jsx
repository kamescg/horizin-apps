/* --- Global --- */
import {Router} from '@reach/router';

/* --- Local --- */
import {Canvas} from '@templates';
import {Overview, CreateToken, Settings} from '@screens';

const DashboardPage = props => (
  <Canvas>
    <Router
      width="100%"
      primary={false}
      style={{display: 'flex', flex: 1, height: '100%', width: ' 100%'}}>
      <Overview path="/" />
      <CreateToken path="/token/create" />
      <Settings path="/settings" />
    </Router>
  </Canvas>
);

export default DashboardPage;
