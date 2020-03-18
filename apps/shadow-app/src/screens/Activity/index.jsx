/* --- Global --- */
import {Introduction} from '@views';

/* --- Local --- */

/* --- Overview : Screen --- */
const Overview = props => {
  return (
    <Atom.Box>
      <Main />
    </Atom.Box>
  );
};

const Main = props => {
  return (
    <Atom.Box sx={{}}>
      <Introduction />
      <Atom.HorizontalRule sx={{}} />
    </Atom.Box>
  );
};

export default Overview;
