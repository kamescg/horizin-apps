/**
 * @component Template
 * @param {*} props
 * @description
 */

/* --- Global --- */
import {hooks} from '@ethers-react/system';
import {hooks as tokenHooks} from '@ethers-react/tokens';
/* --- Local --- */

/* --- Screen : Component --- */
const Screen = ({address, ...props}) => {
  hooks.useLibraryInitContract({address: address, contractName: 'Token'});
  const token = tokenHooks.useTokenState(address);
  console.log(token, 'tokenHooks');
  return (
    <>
      <Showcase token={token} name={token.name} symbol={token.symbol} />
      <Main />
    </>
  );
};

/* --- Showcase : Component --- */
const Showcase = ({name, symbol}) => {
  return (
    <Atom.Flex sx={styleShowcase}>
      <Atom.Container sx={{textAlign: 'center'}}>
        <Atom.Heading as="h4" sx={{fontSize: [5, 5, 6]}}>
          {name}
        </Atom.Heading>
      </Atom.Container>
    </Atom.Flex>
  );
};

const styleShowcase = {
  color: 'white',
  flex: 1,
  py: 4,
};

/* --- Main : Component --- */
const Main = props => {
  return (
    <Atom.Flex sx={styleMain}>
      <Atom.Container sx={sxContainer}></Atom.Container>
    </Atom.Flex>
  );
};

const styleMain = {
  bg: 'white',
  flex: 3,
  pb: 5,
  width: '100%',
};

const sxContainer = {
  boxShadow: 1,
  borderRadius: 12,
  p: 4,
  bg: 'white',
  mt: [-50, -65, -100],
};

export default Screen;
