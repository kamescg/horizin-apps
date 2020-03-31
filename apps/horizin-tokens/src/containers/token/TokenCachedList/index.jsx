/**
 * @component Template
 * @param {*} props
 * @description
 */

/* --- Global --- */
import {helpers} from '@ethers-react/system';
import {hooks} from '@ethers-react/caching';
/* --- Local --- */
// import {FormSettings} from '@forms';

/* --- Screen : Component --- */
const TokenCachedList = props => {
  const cache = hooks.useCacheGetItem();
  React.useEffect(() => {
    cache.get({table: 'tokens'});
  }, []);

  React.useEffect(() => {
    console.log(cache, 'cachecache');
  }, [cache]);

  return (
    <>
      <TokenList tokens={cache.items} />
    </>
  );
};

const TokenList = ({tokens}) => {
  return !tokens ? (
    <Atom.Span>No Tokens</Atom.Span>
  ) : (
    <Atom.Flex column>
      {tokens.map(token => (
        <Token {...token} />
      ))}
    </Atom.Flex>
  );
};

const Token = ({name, symbol, address}) => {
  return (
    <Atom.Flex alignCenter between card>
      <Atom.Box>
        <Atom.Heading as="h5" md m0>
          {name}{' '}
          <Atom.Span block>({helpers.shortenAddress(address, 7)})</Atom.Span>
        </Atom.Heading>
        <Atom.Span block>{symbol}</Atom.Span>
      </Atom.Box>
      <Atom.Flex column>
        <Molecule.Link to={`/bank/token/${address}`}>
          <Atom.Button sm white>
            Manage
          </Atom.Button>
        </Molecule.Link>
      </Atom.Flex>
    </Atom.Flex>
  );
};

export default TokenCachedList;
