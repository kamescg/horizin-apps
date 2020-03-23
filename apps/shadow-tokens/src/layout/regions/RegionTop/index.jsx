/**
 * @name RegionTopDashboard
 * @description Default top region for application.
 */
/* --- Global --- */
import {
  Address,
  BlockCurrent,
  NetworkID,
  NetworkName,
  ProviderSelect,
  WalletBalance,
} from '@ethers-react/ui';
/* --- Local --- */
import {ColorMode} from '@components';

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
    <Atom.Flex alignCenter>
      <Atom.Span tag sm sx={{ml: 2}}>
        <strong>Balance: </strong>
        <WalletBalance trimmed={6} />
      </Atom.Span>
      <Atom.Span tag sm sx={{ml: 2}}>
        <strong>Network:</strong> <NetworkName /> (<NetworkID />)
      </Atom.Span>
    </Atom.Flex>

    {/* Right */}
    <Atom.Flex alignCenter sx={{py: 2}}>
      <Atom.Box sx={{mx: 3}}>
        <ColorMode />
      </Atom.Box>
      <ProviderSelect />
    </Atom.Flex>
  </Atom.Flex>
);
