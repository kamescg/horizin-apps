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

export default props => (
  <Atom.Flex alignCenter between sx={{variant: 'regions.header'}}>
    {/* Left */}
    <Atom.Flex alignCenter>
      <Atom.Span tag sm sx={{ml: 2}}>
        <strong>Balance: </strong>
        <WalletBalance trimmed={6} />
      </Atom.Span>
      <Atom.Span tag sm sx={{ml: 2}}>
        <strong>Network:</strong> <NetworkName /> (<NetworkID />)
      </Atom.Span>
      <Atom.Span tag sm sx={{ml: 2}}>
        <strong>Current Block: </strong>
        <BlockCurrent />
      </Atom.Span>
    </Atom.Flex>

    {/* Right */}
    <Atom.Flex alignCenter sx={{py: 2}}>
      <ProviderSelect />
    </Atom.Flex>
  </Atom.Flex>
);
