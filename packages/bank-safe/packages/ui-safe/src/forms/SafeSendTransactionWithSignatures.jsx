/**
 * @function FormSafeSendTransaction
 * @version 0.0.0
 * @description Send a transaction from a Gnosis Safe.
 */

/* --- Global --- */
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { hooks, utils } from "@ethers-react/system";
import { useTransactionToast } from "@ethers-react/ui-blueprint";

/* --- FormSafeSendTransaction : Component --- */
export const FormSafeSendTransaction = ({ address, ...props }) => {
  const [txHash, setTxHash] = useState();
  /* --- Hooks : State --- */
  const signing = hooks.useWalletSignMessage(address);
  const contractTransaction = hooks.useContractSendTransaction(address);
  const contractRead = hooks.useContractRead(address);
  const toast = useTransactionToast(contractTransaction);

  /* --- Local : State --- */
  const { handleSubmit, register, errors } = useForm({
    defaultValues: {
      to: "0x89CBe919EE7897c5f75a6d81A576469170B93395",
      value: "1",
      data: "0x",
      operation: "0",
      safeTxGas: "99999",
      baseGas: "99999",
      gasPrice: "99999",
      gasToken: "0x0000000000000000000000000000000000000000",
      refundReceiver: "0x0000000000000000000000000000000000000000",
      signatures: "0"
    }
  });

  /* --- Actions : Form  --- */
  // Submit : Action : Form
  const onSubmit = async values => {
    contractRead.read({
      // func: "execTransaction",
      func: "getTransactionHash",
      inputs: [
        values.to,
        values.value,
        values.data,
        values.operation,
        values.safeTxGas,
        values.baseGas,
        values.gasPrice,
        values.gasToken,
        values.refundReceiver,
        values.signatures
      ],
      params: {
        // gasLimit: 999000
      }
    });
    toast.reset();
  };

  /* --- Error : Effect --- */
  useEffect(() => {
    if (Number(process.env.REACT_APP_ETHERS_SYSTEM_DEBUG) === 1) {
      console.log(contractRead, "SafeSendTransaction");
      if (contractRead.data) setTxHash(contractRead.data);
    }
  }, [contractRead]);

  useEffect(() => {
    signing.signMessage(txHash);
  }, [txHash]);

  useEffect(() => {
    console.log(signing, "signingsigning");
    if (signing.messageSigned) {
      const SplitSig = utils.splitSignature(signing.messageSigned);
      console.log(SplitSig, "SplitSig");
    }
  }, [signing]);

  /* --- FormSafeSendTransaction : Form : Compoent --- */
  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
      <Molecule.Field
        name="to"
        placeholder="To (Address)"
        register={register}
        errors={errors}
        sx={props.sxField}
      />
      <Molecule.Field
        name="value"
        placeholder="Value (ETH)"
        register={register}
        errors={errors}
        sx={props.sxField}
      />
      <Molecule.Field
        name="data"
        placeholder="Data (0x)"
        register={register}
        errors={errors}
        sx={props.sxField}
      />
      <Molecule.Field
        name="operation"
        placeholder="Operation (0 (CALL) - 1 (DELEGATECALL) - 2 (CREATE))"
        register={register}
        errors={errors}
        sx={props.sxField}
      />

      <Molecule.Field
        name="safeTxGas"
        // type="number"
        placeholder="Safe Tx Gas (uint256)"
        register={register}
        errors={errors}
        sx={props.sxField}
      />
      <Molecule.Field
        name="baseGas"
        // type="number"
        placeholder="Base Gas (uint256)"
        register={register}
        errors={errors}
        sx={props.sxField}
      />
      <Molecule.Field
        name="gasPrice"
        // type="number"
        placeholder="Gas Price (uint256)"
        register={register}
        errors={errors}
        sx={props.sxField}
      />
      <Molecule.Field
        name="gasToken"
        placeholder="Gas Token (address)"
        register={register}
        errors={errors}
        sx={props.sxField}
      />
      <Molecule.Field
        name="refundReceiver"
        placeholder="Refund Receiver (address)"
        register={register}
        errors={errors}
        sx={props.sxField}
      />
      <Molecule.Field
        name="signatures"
        placeholder="Signatures (bytes)"
        register={register}
        errors={errors}
        sx={props.sxField}
      />

      <Atom.Button
        md
        rounded
        disabled={!contractRead.isContractConnected}
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

/*
address to,
uint256 value,
bytes calldata data,
Enum.Operation operation,
uint256 safeTxGas,
uint256 baseGas,
uint256 gasPrice,
address gasToken,
address payable refundReceiver,
bytes calldata signatures


*/
