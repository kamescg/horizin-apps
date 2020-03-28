/**
 * @name RegionTopDashboard
 * @description Default top region for application.
 */
import {WalletProviderSelect} from '@ethers-react/ui';
/* --- Local --- */
import {MenuAccount} from '@components';

export default props => (
  <Atom.Flex alignCenter between sx={{variant: 'regions.canvas_header'}}>
    {/* Left */}
    <Atom.Flex alignCenter>
      <Molecule.Link to="/">
        <Atom.Heading lg heavy sx={{mb: 0}}>
          {GLOBAL.siteName}
        </Atom.Heading>
      </Molecule.Link>
    </Atom.Flex>

    {/* Right */}
    <Atom.Flex alignCenter>
      <WalletProviderSelect />
      <MenuAccount sx={{ml: 3}} />
    </Atom.Flex>
  </Atom.Flex>
);
