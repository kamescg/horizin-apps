/**
 * @function FormSafeEnableModule
 * @version 0.0.0
 * @description Setup a new GnosisSafe.
 */

/* --- Global --- */
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { hooks } from "@ethers-react/system";
import { useTransactionToast } from "@ethers-react/ui-blueprint";

/* --- FormSafeEnableModule : Component --- */
export const FormSafeEnableModule = ({ address, ...props }) => {
  /* --- Local : State --- */
  const { handleSubmit, register, errors } = useForm();

  /* --- Hooks : State --- */
  const functionData = hooks.useGetEncodedData(address);
  const contractTransaction = hooks.useContractSendTransaction(address);
  const toast = useTransactionToast(contractTransaction);

  useEffect(() => {
    functionData.getABI("enableModule", [
      "0x15Ca0C718Ce7BFF15f7c35D78747eE368F968d80"
    ]);
  }, []);

  useEffect(() => {
    console.log(functionData, "functionData");
  }, [functionData]);

  /* --- Actions : Form  --- */
  // Submit : Action : Form
  const onSubmit = async values => {
    contractTransaction.sendTransaction({
      func: "execTransaction",
      inputs: [values.address],
      params: {
        gasLimit: 9990000
      }
    });
    toast.reset();
  };

  /* --- Error : Effect --- */
  useEffect(() => {
    if (Number(process.env.REACT_APP_ETHERS_SYSTEM_DEBUG) === 1) {
      console.log(contractTransaction, "FormSafeEnableModule");
    }
  }, [contractTransaction]);

  /* --- FormSafeEnableModule : Form : Compoent --- */
  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
      <Molecule.Field
        name="address"
        placeholder="Address (Owner)"
        defaultValue={props.valueAddress}
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

FormSafeEnableModule.defaultProps = {
  label: "Setup Safe",
  sxField: {},
  sxButton: {
    mt: 2,
    width: "100%"
  }
};
