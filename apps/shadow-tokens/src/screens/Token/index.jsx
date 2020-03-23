/* --- Global --- */
import {hooks} from '@ethers-react/system';
import {RegistryTokens} from '@bank/ui-registry';

/* --- Local --- */

/* --- Overview : Screen --- */
const Overview = props => {
  hooks.useLibraryInitContract({
    address: props.address,
    contractName: 'Registry',
  });
  return (
    <Atom.Box>
      <Showcase />
      <Main />
    </Atom.Box>
  );
};

const Showcase = props => {
  return (
    <Atom.Box gradient="blue" sx={styleShowcase}>
      <Atom.Container>
        <RegistryTokens
          address={process.env.REACT_APP_REGISTRY}
          token="0x458d86f6B080CfF441028C2cA160eA44b213312f"
        />
      </Atom.Container>
    </Atom.Box>
  );
};

const styleShowcase = {
  flex: 1,
  px: 4,
  py: 5,
  width: '100%',
};

const Main = props => {
  return (
    <Atom.Container>
      <Atom.Heading>Main</Atom.Heading>
    </Atom.Container>
  );
};

export default Overview;
