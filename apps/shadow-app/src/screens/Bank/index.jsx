/* --- Global --- */
import {ProxyDeploy} from '@bank-safe/ui-proxy-factory';

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
        <Atom.Heading sx={{fontSize: [3, 3, 4]}}>Deploy Proxy</Atom.Heading>
        <Atom.Paragraph sm>
          Deploy a new Gnosis Safe Proxy smart contract.
        </Atom.Paragraph>
        <Atom.Paragraph sm>
          The deployed contract will use a proxy contract to manage
          functionality. For example the current contracts are set to v1.1.1 and
          in the future can be updated.
        </Atom.Paragraph>
      </Atom.Box>
      <Atom.Flex center column sx={{bg: 'smoke', flex: 1, p: 4}}>
        <ProxyDeploy
          contractName="GnosisSafeProxyFactory"
          valueAddress="0x1799604a9395431dC34da2019439750Ae6240C43"
          valueData="1"
        />
      </Atom.Flex>
    </Atom.Flex>
  );
};

export default BankScreen;
