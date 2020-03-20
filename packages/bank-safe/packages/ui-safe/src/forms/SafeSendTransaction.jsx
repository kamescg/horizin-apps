/**
 * @function FormSafeSendTransaction
 * @version 0.0.0
 * @description Send a transaction from a Gnosis Safe.
 */

/* --- Global --- */
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { hooks } from "@ethers-react/system";
import { useTransactionToast } from "@ethers-react/ui-blueprint";

/* --- FormSafeSendTransaction : Component --- */
export const FormSafeSendTransaction = ({
  address,
  contractName,
  ...props
}) => {
  /* --- Hooks : State --- */
  const contractTransaction = hooks.useContractSendTransaction(address);
  const toast = useTransactionToast(contractTransaction);

  /* --- Local : State --- */
  const { handleSubmit, register, errors } = useForm();

  /* --- Actions : Form  --- */
  // Submit : Action : Form
  const onSubmit = async values => {
    contractTransaction.sendTransaction({
      contractName,
      func: "execTransaction",
      inputs: [values.to, values.value, values.data]
    });
    toast.reset();
  };

  /* --- Error : Effect --- */
  useEffect(() => {
    if (Number(process.env.REACT_APP_ETHERS_SYSTEM_DEBUG) === 1) {
    }
  }, [contractTransaction]);

  /* --- FormSafeSendTransaction : Form : Compoent --- */
  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
      <Molecule.Field
        name="to"
        placeholder="To (Address)"
        defaultValue={props.valueTo}
        register={register}
        errors={errors}
        sx={props.sxField}
      />
      <Molecule.Field
        name="value"
        placeholder="Value (ETH)"
        defaultValue={props.valueValue}
        register={register}
        errors={errors}
        sx={props.sxField}
      />
      <Molecule.Field
        name="data"
        placeholder="Data (0x)"
        defaultValue={props.valueData}
        register={register}
        errors={errors}
        sx={props.sxField}
      />

      <Atom.Button
        md
        rounded
        disabled={!contractTransaction.isContractConnected}
        sx={props.sxButton}
      >
        {props.label}
      </Atom.Button>
    </form>
  );
};

FormSafeSendTransaction.defaultProps = {
  label: "Send Transaction",
  sxField: {},
  sxButton: {
    mt: 2,
    width: "100%"
  }
};
