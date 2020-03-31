/**
 * @component Template
 * @param {*} props
 * @description
 */

/* --- Global --- */
import {TokenATMCard} from '@ethers-react/tokens';
/* --- Local --- */
// import {FormSettings} from '@forms';
import {TokenCachedList} from '@containers';
/* --- Screen : Component --- */
const Screen = props => {
  return (
    <>
      <Showcase />
    </>
  );
};

/* --- Showcase : Component --- */
const Showcase = props => {
  return (
    <Atom.Flex sx={styleShowcase}>
      <Atom.Flex alignCenter sx={{height: '100%', width: '100%'}}>
        {/* Left : Region : Start */}
        <Atom.Flex
          column
          sx={{
            bg: 'neutral',
            color: 'text',
            justifyContent: 'center',
            flex: 5,
            height: '100%',
            p: 4,
          }}>
          <Atom.Heading as="h3" sx={{fontSize: [3, 3, 4]}}>
            Manage Tokens
          </Atom.Heading>
          <Atom.HorizontalRule sx={{mb: 3}} />
          <TokenCachedList />
        </Atom.Flex>
        {/* Right : Region : Start */}
        <Atom.Flex center column sx={{flex: 4, p: 4}}>
          <TokenATMCard />
        </Atom.Flex>
        {/* Right : Region : End */}
      </Atom.Flex>
    </Atom.Flex>
  );
};

const styleShowcase = {
  // bg: 'blue',
  color: 'white',
  flex: 1,
  // height: '100%',
  // py: [4, 4, 5, 6],
  width: '100%',
};

export default Screen;
