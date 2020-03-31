/**
 * @component TokenDeploy
 * @param {*} props
 * @description
 */

/* --- Global --- */
import {hooks as systemHooks} from '@ethers-react/system';
import {hooks as cachingHooks} from '@ethers-react/caching';
import {
  hooks as blueprintHooks,
  useTransactionToast,
} from '@ethers-react/ui-blueprint';
import {TokenDeploy} from '@ethers-react/tokens';

/* --- TokenDeploy : Component --- */
const FormTokenDeploy = props => {
  const contract = systemHooks.useContractDeploy('Token');
  const cache = cachingHooks.useCacheSetItem();
  blueprintHooks.useTransactionToast(contract);

  React.useEffect(() => {
    if (contract.isConfirmed && !cache.index) {
      cache.set({
        table: 'tokens',
        item: {
          name: contract.inputs[0],
          symbol: contract.inputs[1],
          decimals: contract.inputs[2],
          address: contract.creates,
        },
      });
    }
  }, [contract.isConfirmed]);

  return contract.isConfirmed ? (
    <ContractDeploy />
  ) : (
    <TokenDeploy contractName="Token" contract={contract} />
  );
};

const ContractDeploy = props => {
  return (
    <Atom.Flex center column>
      <Atom.Heading xl>Congratulations</Atom.Heading>
      <Atom.Paragraph textCenter>
        Amet suscipit nisl diam sit amet dolor. Duis maximus, ante in mattis
        congue, dui nibh iaculis eros, ac ullamcorper ex est ac lectus. Integer
        sit amet rutrum sem, ut placerat mi.
      </Atom.Paragraph>
      <Molecule.Link to="/bank/tokens/manage">
        <Atom.Button>Manage Tokens</Atom.Button>
      </Molecule.Link>
    </Atom.Flex>
  );
};

export default FormTokenDeploy;
