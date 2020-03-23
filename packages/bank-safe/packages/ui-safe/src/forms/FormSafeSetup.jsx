/**
 * @function FormSafeSetup
 * @version 0.0.0
 * @description Setup a new GnosisSafe.
 */

/* --- Global --- */
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { hooks } from "@ethers-react/system";
import { useTransactionToast } from "@ethers-react/ui-blueprint";

/* --- FormSafeSetup : Component --- */
export const FormSafeSetup = ({ address, ...props }) => {
  /* --- Hooks : State --- */
  const contractTransaction = hooks.useContractSendTransaction(address);
  const toast = useTransactionToast(contractTransaction);

  /* --- Local : State --- */
  const { handleSubmit, register, errors } = useForm();

  /* --- Actions : Form  --- */
  // Submit : Action : Form
  const onSubmit = async values => {
    contractTransaction.sendTransaction({
      func: "setup",
      inputs: [
        [values.owner],
        values.threshold,
        values.to,
        values.data,
        values.fallbackHandler,
        values.paymentToken,
        values.payment,
        values.paymentReceiver
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
      console.log(contractTransaction, "FormSafeSetup");
    }
  }, [contractTransaction]);

  /* --- FormSafeSetup : Form : Compoent --- */
  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
      <Molecule.Field
        name="owner"
        placeholder="Address (Owner)"
        defaultValue={props.valueAddress}
        register={register}
        errors={errors}
        sx={props.sxField}
      />
      <Molecule.Field
        name="threshold"
        placeholder="Threshold"
        defaultValue={props.valueThreshold || 1}
        register={register}
        errors={errors}
        sx={props.sxField}
      />
      <Molecule.Field
        name="to"
        placeholder="To (Smart Contract)"
        defaultValue={props.valueTo}
        register={register}
        errors={errors}
        sx={props.sxField}
      />
      <Molecule.Field
        name="data"
        placeholder="Data"
        defaultValue={props.valueData}
        register={register}
        errors={errors}
        sx={props.sxField}
      />
      <Molecule.Field
        name="fallbackHandler"
        placeholder="Fallback Handler (Smart Contract)"
        defaultValue={props.valueFallbackHandler}
        register={register}
        errors={errors}
        sx={props.sxField}
      />

      <Molecule.Field
        name="paymentToken"
        placeholder="Payment Token (0x000... is ETH)"
        defaultValue={props.valuePaymentToken}
        register={register}
        errors={errors}
        sx={props.sxField}
      />
      <Molecule.Field
        name="payment"
        placeholder="Payment (Integer)"
        defaultValue={props.valuePayment}
        register={register}
        errors={errors}
        sx={props.sxField}
      />
      <Molecule.Field
        name="paymentReceiver"
        placeholder="Payment Receiver (0x000... if tx.origin)"
        defaultValue={props.valuePaymentReceiver}
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

FormSafeSetup.defaultProps = {
  label: "Setup Safe",
  sxField: {},
  sxButton: {
    mt: 2,
    width: "100%"
  }
};
