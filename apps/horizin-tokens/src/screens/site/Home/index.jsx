/**
 * @component Template
 * @param {*} props
 * @description
 */

/* --- Global --- */
import {TokenATMCard} from '@ethers-react/tokens';
/* --- Local --- */
import {CardFeature} from '@components';
import {FormEmailSubscription} from '@forms';
/* --- Screen : Component --- */
const Screen = props => {
  return (
    <Atom.Box sx={{width: '100%'}}>
      <Showcase />
      <Main />
    </Atom.Box>
  );
};

/* --- Showcase : Component --- */
const Showcase = props => {
  return (
    <Atom.Box gradient="mild" direction={45} sx={styleShowcase}>
      {/* <Atom.BackgroundImage
        src="https://s.gitcoin.co/static/v2/images/header-bg.png"
        sx={{opacity: 0.6}}
      /> */}
      <Atom.Container>
        <Atom.Flex alignCenter>
          <Atom.Box sx={{flex: 1, p: 4}}>
            <Atom.Heading
              heavy
              as="h2"
              sx={{
                fontSize: [4, 4, 5],
              }}>
              <Atom.Span thin>Social</Atom.Span> Digital Currencies
            </Atom.Heading>
            <Atom.Heading
              as="h2"
              sx={{
                fontSize: [1, 1, 2],
              }}>
              Grow your fanbase. <strong>Mint your personal token.</strong>
            </Atom.Heading>
            <Atom.Paragraph sm>
              Curabitur placerat, risus in mollis auctor, purus nibh aliquet
              erat, sed gravida augue ex sed purus. Phasellus nisi purus,
              consectetur nec auctor at, pharetra sed magna. Etiam mollis
              dapibus erat in dignissim.
            </Atom.Paragraph>
            <Atom.Flex>
              <Molecule.Link to="/how-it-works" sx={{mr: 2}}>
                <Atom.Button sm white>
                  How It Works
                </Atom.Button>
              </Molecule.Link>
              <Molecule.Link to="/auth/register" m1>
                <Atom.Button sm green>
                  Register Account
                </Atom.Button>
              </Molecule.Link>
            </Atom.Flex>
          </Atom.Box>
          <Atom.Flex center column sx={{flex: 1, p: 4}}>
            <TokenATMCard />
          </Atom.Flex>
        </Atom.Flex>
      </Atom.Container>
    </Atom.Box>
  );
};

const styleShowcase = {
  bg: 'blue',
  color: 'white',
  py: [4, 4, 5, 6],
  width: '100%',
};

/* --- Main : Component --- */
const Main = props => {
  return (
    <Atom.Flex sx={styleMain}>
      <Features />
    </Atom.Flex>
  );
};

const styleMain = {};

const Features = props => {
  return (
    <Atom.Flex sx={{px: 0}}>
      <CardFeature
        title="ATM"
        tagline="Allow Fans to Withdraw Personal Tokens"
        content="Curabitur placerat, risus in mollis auctor, purus nibh aliquet erat, sed gravida augue ex sed purus. Phasellus nisi purus, consectetur nec auctor at, pharetra sed magna. Etiam mollis dapibus erat in dignissim."
        link="/feature/"
        sx={styleCardFeature}
      />
      <CardFeature
        title="Bank"
        tagline="Launch Token Management Services"
        content="Curabitur placerat, risus in mollis auctor, purus nibh aliquet erat, sed gravida augue ex sed purus. Phasellus nisi purus, consectetur nec auctor at, pharetra sed magna. Etiam mollis dapibus erat in dignissim."
        link="/feature/"
        sx={styleCardFeature}
      />
      <CardFeature
        title="Token"
        tagline="Reward Followers w/ a Digital Token"
        content="Curabitur placerat, risus in mollis auctor, purus nibh aliquet erat, sed gravida augue ex sed purus. Phasellus nisi purus, consectetur nec auctor at, pharetra sed magna. Etiam mollis dapibus erat in dignissim."
        link="/feature/"
        sx={styleCardFeature}
      />
    </Atom.Flex>
  );
};

const styleCardFeature = {
  p: 4,
  '&:hover': {
    bg: 'smoke',
  },
};

export default Screen;
