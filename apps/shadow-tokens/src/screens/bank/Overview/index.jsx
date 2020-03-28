/**
 * @component Template
 * @param {*} props
 * @description
 */

/* --- Global --- */
import {TokenATMCard} from '@ethers-react/tokens';
import {TokenDeploy} from '@ethers-react/tokens';

/* --- Local --- */
import {CardFeature} from '@components';
import {FormEmailSubscription} from '@forms';

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
      <Atom.BackgroundImage
        src="https://s.gitcoin.co/static/v2/images/header-bg.png"
        sx={{opacity: 0.6}}
      />

      <Atom.Flex alignCenter sx={{height: '100%', width: '100%'}}>
        {/* Left : Region : Start */}
        <Atom.Flex
          column
          sx={{
            bg: 'neutral',
            color: 'text',
            justifyContent: 'center',
            flex: 3,
            height: '100%',
            p: 4,
          }}>
          <Atom.Heading
            heavy
            as="h2"
            sx={{
              fontSize: [4, 4, 5],
            }}>
            <Atom.Span thin>Open</Atom.Span> Finance
          </Atom.Heading>
          <Atom.Paragraph md>
            Curabitur placerat, risus in mollis auctor, purus nibh aliquet erat,
            sed gravida augue ex sed purus. Risen in mollis auctor, purus nibh
            aliquet erat,
          </Atom.Paragraph>
          <Atom.HorizontalRule sx={{my: 3}} />
          <Atom.Heading>Personal Token</Atom.Heading>
          <Atom.Paragraph sm>
            Curabitur placerat, risus in mollis auctor, purus nibh aliquet erat,
            sed gravida augue ex sed purus. Risen in mollis auctor, purus nibh
            aliquet erat,
          </Atom.Paragraph>
          <Atom.Button sm white>
            Create Token
          </Atom.Button>
          <Atom.HorizontalRule sx={{my: 3}} />
          <Atom.Heading>Decentralized ATM</Atom.Heading>
          <Atom.Paragraph sm>
            Curabitur placerat, risus in mollis auctor, purus nibh aliquet erat,
            sed gravida augue ex sed purus. Risen in mollis auctor, purus nibh
            aliquet erat,
          </Atom.Paragraph>
          <Atom.Button sm white>
            Create ATM
          </Atom.Button>
          <Atom.HorizontalRule sx={{my: 3}} />
        </Atom.Flex>
        {/* Right : Region : Start */}
        <Atom.Flex center column sx={{flex: 5, p: 4}}>
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
