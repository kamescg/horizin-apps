/**
 * @function FormSafeSendTransaction
 * @version 0.0.0
 * @description Send a transaction from a Gnosis Safe.
 */

/* --- Global --- */
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { hooks, utils, withEthers } from "@ethers-react/system";
import { useTransactionToast } from "@ethers-react/ui-blueprint";

/* --- Module --- */
import { generateSignatureFromOwner } from "../lib/helpers";

import { execTx } from "./formDefaultValues";

/* --- FormSafeSendTransaction : Component --- */
export const FormSafeSendTransaction = ({ address, ...props }) => {
  const ethersProvider = withEthers();
  const [advancedSettings, setAdvancedSettings] = useState(false);

  /* --- Hooks : State --- */
  const contractTransaction = hooks.useContractSendTransaction(address);
  const toast = useTransactionToast(contractTransaction);

  /* --- Local : State --- */
  const { handleSubmit, register, errors } = useForm({
    defaultValues: {}
  });

  /* --- Actions  --- */
  // Toggle Advanced Settings : Action
  const toggleAdvancedSettings = () => setAdvancedSettings(!advancedSettings);

  // Submit : Action
  const onSubmit = async values => {
    contractTransaction.sendTransaction({
      func: "execTransaction",
      inputs: [
        values.to,
        utils.parseEther(values.value),
        values.data || execTx.data,
        values.operation || execTx.operation,
        values.safeTxGas || execTx.safeTxGas,
        values.baseGas || execTx.baseGas,
        values.gasPrice || execTx.gasPrice,
        values.gasToken || execTx.gasToken,
        values.refundReceiver || execTx.refundReceiver,
        generateSignatureFromOwner(ethersProvider.address)
      ],
      params: {
        gasLimit: 999000
      }
    });
    toast.reset();
  };

  /* --- FormSafeSendTransaction : Form : Compoent --- */
  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
      <Molecule.Field
        name="to"
        placeholder="Recipient (Address or ENS)"
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

      <Atom.Span
        block
        tag
        widthFill
        pointer
        onClick={toggleAdvancedSettings}
        sx={{ textAlign: "center" }}
      >
        Advanced Settings
      </Atom.Span>

      {!advancedSettings ? null : (
        <Atom.Box sx={{ bg: "smoke", p: 3 }}>
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
        </Atom.Box>
      )}

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
