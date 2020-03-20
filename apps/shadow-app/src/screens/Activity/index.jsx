/* --- Global --- */
import {Introduction} from '@views';

import {SafeCreatedEvents} from '@bank-safe/ui-proxy-factory';
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
      <Atom.Box sx={{p: 4}}>
        <Atom.Heading as="h2" sx={{}}>
          Deployed Safes
        </Atom.Heading>
        <SafeCreatedEvents
          contractName="GnosisSafeProxyFactory"
          eventName="ProxyCreation"
          address={'0xa46658184053bd606174Aef9b8Eb1cc07a0728Cf'}
          topic="ProxyCreation(address)"
        />
      </Atom.Box>
    </Atom.Box>
  );
};

export default Overview;
