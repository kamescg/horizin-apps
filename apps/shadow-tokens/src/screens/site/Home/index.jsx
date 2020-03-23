/**
 * @component Template
 * @param {*} props
 * @description
 */

/* --- Global --- */

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
    <Atom.Box sx={styleShowcase}>
      <Atom.BackgroundImage
        src="https://s.gitcoin.co/static/v2/images/header-bg.png"
        sx={{opacity: 0.6}}
      />
      <Atom.Container>
        <Atom.Flex alignCenter>
          <Atom.Box sx={{flex: 1, p: 4}}>
            <Atom.Heading
              heavy
              as="h2"
              sx={{
                fontSize: [4, 4, 5],
              }}>
              <Atom.Span thin>Gitcoin</Atom.Span> Insights
            </Atom.Heading>
            <Atom.Heading
              as="h2"
              sx={{
                fontSize: [1, 1, 2],
              }}>
              Find the perfect developer. <strong>Get the job done.</strong>
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
            {/* Start : Card */}
            <Atom.Box
              card
              sx={{
                px: 4,
                py: 4,
                textAlign: 'center',
                width: ['100%', '100%', '80%'],
              }}>
              <Atom.Heading strong>
                <Atom.Span normal sm>
                  Gitcoin's Official Guide for
                </Atom.Span>
                <br />
                Managing Distributed Teams in 2020
              </Atom.Heading>
              <Atom.HorizontalRule sx={{my: 2}} />
              {/* <FormEmailSubscription label="Download Guide" /> */}
              <Atom.HorizontalRule sx={{my: 3}} />
              <Atom.Heading as="h5" sm>
                A guide to finding, hiring and managing developers in the
                modern, distributed world.
              </Atom.Heading>
            </Atom.Box>
            {/* End : Card */}
            <Atom.Span sm>
              Get early access to Gitcoin Insights.{' '}
              <Atom.Span>
                <Molecule.Link to="/auth/register">
                  <strong>Register Today</strong>
                </Molecule.Link>
              </Atom.Span>
            </Atom.Span>
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
        title="Find Top Talent"
        content="Curabitur placerat, risus in mollis auctor, purus nibh aliquet erat, sed gravida augue ex sed purus. Phasellus nisi purus, consectetur nec auctor at, pharetra sed magna. Etiam mollis dapibus erat in dignissim."
        link="/feature/"
        sx={styleCardFeature}
      />
      <CardFeature
        title="Easily Manage Deadlines"
        content="Curabitur placerat, risus in mollis auctor, purus nibh aliquet erat, sed gravida augue ex sed purus. Phasellus nisi purus, consectetur nec auctor at, pharetra sed magna. Etiam mollis dapibus erat in dignissim."
        link="/feature/"
        sx={styleCardFeature}
      />
      <CardFeature
        title="Historical Analysis"
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
