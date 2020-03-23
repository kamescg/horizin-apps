/* --- Global --- */
import {
  SafeOwners,
  SafeModules,
  FormDailyLimitSetup,
  SafeModuleDailyLimits,
} from '@bank-safe/ui-safe';
import SectionSafeModules from './section-safe-modules';

const Main = ({address, moduleAddress, safe, ...props}) => {
  return (
    <Atom.Box sx={styleMain}>
      {/* <SectionSafeModules address={address} safe={safe} /> */}
      <Atom.Flex sx={{}}>
        <Atom.Box sx={{flex: 5, p: 4}}>
          <SafeModuleDailyLimits
            address={address}
            token="0x0000000000000000000000000000000000000000"
          />
          <SafeOwners address={address} />
        </Atom.Box>
        <Atom.Box
          sx={{
            bg: 'gray',
            color: 'text',
            flex: 3,
            p: 4,
          }}>
          <FormDailyLimitSetup moduleAddress={moduleAddress} />
        </Atom.Box>
      </Atom.Flex>
    </Atom.Box>
  );
};

const styleMain = {
  p: 0,
};

export default Main;
