/* --- Global --- */
import {SafeSetup} from '@bank-safe/ui-safe';

/* --- Local --- */

/* --- BankScreen : Screen --- */
const BankScreen = props => {
  return (
    <Atom.Box>
      <Main />
    </Atom.Box>
  );
};

const Main = props => {
  return (
    <Atom.Box sx={{}}>
      <ProxyDeployDemo />
      <Atom.HorizontalRule />
    </Atom.Box>
  );
};

const ProxyDeployDemo = props => {
  return (
    <Atom.Flex>
      <Atom.Box sx={{flex: 1, p: 4}}>
        <Atom.Heading sx={{fontSize: [3, 3, 4]}}>Proxy Setup</Atom.Heading>
        <Atom.Paragraph sm>
          Setup the Gnosis Safe Proxy smart contract.
        </Atom.Paragraph>
        <Atom.Paragraph>
          <ul>
            <li>address[] calldata _owners</li>
            <li>uint256 _threshold</li>
            <li>address to</li>
            <li>bytes calldata data</li>
            <li>address fallbackHandler</li>
            <li>address paymentToken</li>
            <li>uint256 payment</li>
            <li>address payable paymentReceiver</li>
          </ul>
        </Atom.Paragraph>
      </Atom.Box>
      <Atom.Flex center column sx={{bg: 'smoke', flex: 1, p: 4}}>
        <SafeSetup
          contractName="GnosisSafeProxy"
          valueAddress="0x89CBe919EE7897c5f75a6d81A576469170B93395"
          valueData="0x"
        />
      </Atom.Flex>
    </Atom.Flex>
  );
};

export default BankScreen;
