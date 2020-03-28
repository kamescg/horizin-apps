/**
 * @name RegionTopDashboard
 * @description Default top region for application.
 */
/* --- Global --- */
import {
  NetworkID,
  NetworkName,
  ProviderSelect,
  WalletBalance,
} from '@ethers-react/ui';
/* --- Local --- */
import {ColorMode, MenuAccount} from '@components';

export default props => (
  <Atom.Flex alignCenter between sx={{variant: 'regions.header'}}>
    <Atom.Flex alignCenter>
      <Molecule.Link to="/">
        <Atom.Heading lg heavy sx={{mb: 0}}>
          {GLOBAL.siteName}
        </Atom.Heading>
      </Molecule.Link>
    </Atom.Flex>
    {/* Left */}

    {/* Right */}
    <Atom.Flex alignCenter sx={{px: 0}}>
      <ProviderSelect />
      <MenuAccount sx={{ml: 3}} />
    </Atom.Flex>
  </Atom.Flex>
);
