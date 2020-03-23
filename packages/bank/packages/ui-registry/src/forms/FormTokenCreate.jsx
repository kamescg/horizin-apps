/**
 * @function FormTokenCreate
 * @version 0.0.0
 * @description Deploy a new token.
 */

/* --- Global --- */
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { hooks, withEthers } from "@ethers-react/system";
import { useTransactionToast } from "@ethers-react/ui-blueprint";

/* --- FormTokenCreate : Component --- */
export const FormTokenCreate = ({ address, ...props }) => {
  /* --- Hooks : State --- */
  const ethersProvider = withEthers();
  const contractTransaction = hooks.useContractSendTransaction(address);
  const toast = useTransactionToast(contractTransaction);

  /* --- Local : State --- */
  const { handleSubmit, register, errors } = useForm();

  /* --- Actions : Form  --- */
  // Submit : Action : Form
  const onSubmit = async values => {
    contractTransaction.sendTransaction({
      func: "deployToken",
      inputs: [
        values.name,
        values.symbol,
        values.decimals,
        values.supply,
        ethersProvider.address
      ],
      params: {
        gasLimit: 9990000
      }
    });
    toast.reset();
  };

  /* --- Error : Effect --- */
  useEffect(() => {
    if (Number(process.env.REACT_APP_ETHERS_SYSTEM_DEBUG) === 1) {
      console.log(contractTransaction, "FormTokenCreate");
    }
  }, [contractTransaction]);

  /* --- FormTokenCreate : Form : Compoent --- */
  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
      <Molecule.Field
        name="name"
        placeholder="Name (horizin)"
        defaultValue={props.valueAddress}
        register={register}
        errors={errors}
        sx={props.sxField}
      />
      <Molecule.Field
        name="symbol"
        placeholder="Symbol (HRZ)"
        defaultValue={props.valueThreshold || 1}
        register={register}
        errors={errors}
        sx={props.sxField}
      />
      <Molecule.Field
        name="decimals"
        type="number"
        placeholder="Decimals (18)"
        defaultValue={props.valueTo}
        register={register}
        errors={errors}
        sx={props.sxField}
      />
      <Molecule.Field
        name="supply"
        type="number"
        placeholder="Supply (100,000)"
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

FormTokenCreate.defaultProps = {
  label: "Deploy Token",
  sxField: {},
  sxButton: {
    mt: 2,
    width: "100%"
  }
};
