/* --- Global --- */
import {useEffect} from 'react';
import {useForm} from 'react-hook-form';
import {hooks, utils} from '@ethers-react/system';
import {ConfirmingTransaction} from '@ethers-react/ui';

/* --- TokenTransfer : Component --- */
const VaultManagerTransfer = ({contractName, ...props}) => {
  /* --- Hooks : State --- */
  const contractTransaction = hooks.useContractSendTransaction(contractName);

  /* --- Local : State --- */
  const {handleSubmit, register, errors} = useForm();

  /* --- Actions : Form  --- */
  // Submit : Action : Form
  const onSubmit = async values => {
    contractTransaction.sendTransaction({
      contractName,
      func: 'deposit',
      inputs: [],
      params: {
        value: utils.parseEther(values.amounts),
      },
    });
  };

  /* --- Error : Effect --- */
  useEffect(() => {
    console.log(contractTransaction, 'contractTransaction');
  }, [contractTransaction]);

  /* --- TokenTransfer : Form : Compoent --- */
  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{width: '100%'}}>
      <Molecule.Field
        name="amount"
        placeholder="Amount"
        defaultValue={props.valueAmount}
        register={register}
        errors={errors}
        sx={props.sxField}
      />

      <Atom.Button
        md
        rounded
        disabled={!contractTransaction.isContractConnected}
        sx={props.sxButton}>
        {props.label}
      </Atom.Button>
      <ConfirmingTransaction tx={contractTransaction} />
    </form>
  );
};

VaultManagerTransfer.defaultProps = {
  label: 'Transfer',
  sxField: {},
  sxButton: {
    mt: 2,
    width: '100%',
  },
};

export default VaultManagerTransfer;
