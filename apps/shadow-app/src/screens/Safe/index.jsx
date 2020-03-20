/* --- Global --- */
import {hooks} from '@ethers-react/system';
import {
  SafeVersion,
  SafeProxyName,
  SafeOwners,
  SafeThreshold,
  SafeSendTransaction,
  DrawerSafeSetup,
} from '@bank-safe/ui-safe';
/* --- Local --- */

/* --- BankScreen : Screen --- */
const BankScreen = ({address, ...props}) => {
  hooks.useLibraryInitContract({address, contractName: 'GnosisSafeProxy'});

  return (
    <Atom.Box>
      <Showcase address={address} />
      <Main address={address} />
    </Atom.Box>
  );
};

const Showcase = props => {
  return (
    <>
      <Atom.Flex alignCenter between sx={styleShowcae}>
        <Atom.Box>
          <Atom.Flex>
            <Atom.Span block>{props.address}</Atom.Span>
          </Atom.Flex>
          <Atom.Flex sx={{mt: 3}}>
            <SafeThreshold address={props.address} sx={{}} />
          </Atom.Flex>
          <Atom.Flex sx={{mt: 3}}>
            <SafeVersion address={props.address} sx={{fontSize: [1]}} />
            <SafeProxyName
              address={props.address}
              sx={{fontSize: [1], ml: 2}}
            />
          </Atom.Flex>
        </Atom.Box>

        {/* Right : Region */}
        <Atom.Flex>
          <SafeSendTransaction address={props.address}>
            <Atom.Button m1 sm>
              Send
            </Atom.Button>
          </SafeSendTransaction>
          <DrawerSafeSetup address={props.address}>
            <Atom.Button m1 sm>
              Receive
            </Atom.Button>
          </DrawerSafeSetup>
        </Atom.Flex>
      </Atom.Flex>
      <Atom.HorizontalRule />
    </>
  );
};

const styleShowcae = {
  p: 4,
};

const Main = props => {
  return (
    <Atom.Box sx={styleMain}>
      <SafeOwners address={props.address} />
    </Atom.Box>
  );
};

const styleMain = {
  p: 4,
};
export default BankScreen;
