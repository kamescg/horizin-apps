/* --- Global --- */
import {Introduction} from '@views';
import {hooks} from '@ethers-react/system';
import {
  FormTokenCreate,
  RegistryTokens,
  RegistryTokenCreatedEvents,
} from '@bank/ui-registry';

/* --- Local --- */

/* --- Overview : Screen --- */
const Overview = props => {
  return (
    <Atom.Box>
      <Showcase />
      <Main />
    </Atom.Box>
  );
};

const Showcase = props => {
  return (
    <Atom.Box gradient="blue">
      <Atom.Container>
        <Atom.Flex alignCenter sx={{}}>
          <Atom.Box sx={{flex: 1, p: 4}}>
            <Atom.Heading>Social Tokens</Atom.Heading>
            <Atom.Paragraph>
              Donec sapien felis, interdum sed risus volutpat, molestie cursus
              velit. Duis a congue arcu. Aenean ornare dolor suscipit nibh
              euismod gravida suscipit quis lacus. Sed venenatis aliquet
              facilisis.
            </Atom.Paragraph>
            <Atom.Button white sm>
              Learn More
            </Atom.Button>
          </Atom.Box>
          <Atom.Box sx={{flex: 1, p: 4}}>
            <FormTokenCreate address={process.env.REACT_APP_REGISTRY} />
          </Atom.Box>
        </Atom.Flex>
      </Atom.Container>
    </Atom.Box>
  );
};

const Main = props => {
  hooks.useLibraryInitContract({
    address: '0x458d86f6B080CfF441028C2cA160eA44b213312f',
    contractName: 'Registry',
  });
  return (
    <Atom.Container>
      <RegistryTokens
        address={process.env.REACT_APP_REGISTRY}
        token="0x458d86f6B080CfF441028C2cA160eA44b213312f"
      />
      <RegistryTokenCreatedEvents
        contractName="Registry"
        eventName="TokenCreated"
        address={process.env.REACT_APP_REGISTRY}
        topic="TokenCreated(address)"
      />
    </Atom.Container>
  );
};

export default Overview;
