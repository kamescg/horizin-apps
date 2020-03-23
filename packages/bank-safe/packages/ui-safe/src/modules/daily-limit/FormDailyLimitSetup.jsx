/**
 * @function FormDailyLimitSetup
 * @version 0.0.0
 * @description Setup the daily spending limit.
 */

/* --- Global --- */
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { hooks, utils, withEthers } from "@ethers-react/system";
import { useTransactionToast } from "@ethers-react/ui-blueprint";

/* --- Module --- */
import { generateSignatureFromOwner } from "../../lib/helpers";

import { execTx } from "../../lib/txDefaultValues";

/* --- FormDailyLimitSetup : Component --- */
export const FormDailyLimitSetup = ({ address, moduleAddress, ...props }) => {
  /* ------------------- */
  // Components
  /* ------------------- */
  const ethersProvider = withEthers();
  const [data, setData] = useState(undefined);
  const [advancedSettings, setAdvancedSettings] = useState(false);

  /* --- Hooks : State --- */
  const functionData = hooks.useGetEncodedData(moduleAddress);
  const contractTransaction = hooks.useContractSendTransaction(address);
  const toast = useTransactionToast(contractTransaction);

  /* --- Actions  --- */
  // Toggle Advanced Settings : Action
  const toggleAdvancedSettings = () => setAdvancedSettings(!advancedSettings);

  /* --- Initialize : Effect  --- */
  // @dev Pass the moduleAddress to the
  //      encodeFunctionData hook to generate
  //      the exexTransaction data
  // useEffect(() => {
  //   functionData.getABI("setup", [moduleAddress]);
  // }, []);

  /* ------------------- */
  // Form Configuration
  /* ------------------- */
  /* --- Local : State --- */
  const { handleSubmit, register, errors } = useForm({
    defaultValues: {}
  });

  // Submit : Action
  const onSubmit = async values => {
    functionData.getABI("setup", [[values.tokens], [values.dailyLimits]]);
  };

  useEffect(() => {
    if (functionData.data) setData(functionData.data);
  }, [functionData]);

  useEffect(() => {
    if (data) {
      contractTransaction.sendTransaction({
        func: "execTransaction",
        inputs: [
          moduleAddress,
          utils.parseEther("0"),
          data || execTx.data,
          execTx.operation,
          execTx.safeTxGas,
          execTx.baseGas,
          execTx.gasPrice,
          execTx.gasToken,
          execTx.refundReceiver,
          generateSignatureFromOwner(ethersProvider.address)
        ],
        params: {
          gasLimit: 999000
        }
      });
      toast.reset();
    }
  }, [data]);

  /* --- FormDailyLimitSetup : Form : Compoent --- */
  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
      <Molecule.Field
        name="tokens"
        placeholder="0x..."
        register={register}
        errors={errors}
        sx={props.sxField}
      />

      <Molecule.Field
        name="dailyLimits"
        type="number"
        placeholder="500"
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

FormDailyLimitSetup.defaultProps = {
  label: "Setup",
  sxField: {},
  sxButton: {
    mt: 2,
    width: "100%"
  }
};
