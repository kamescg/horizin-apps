/* --- Global --- */
import {SafeOwners, SafeModules} from '@bank-safe/ui-safe';
import SectionSafeModules from './section-safe-modules';

const Main = ({address, safe, ...props}) => {
  return (
    <Atom.Box sx={styleMain}>
      <SectionSafeModules address={address} safe={safe} />
      <Atom.Flex sx={{p: 4}}>
        <Atom.Box sx={{flex: 1, p: 4}}>
          <SafeModules address={address} />
          <SafeOwners address={address} />
        </Atom.Box>
      </Atom.Flex>
    </Atom.Box>
  );
};

const styleMain = {
  p: 0,
};

export default Main;
