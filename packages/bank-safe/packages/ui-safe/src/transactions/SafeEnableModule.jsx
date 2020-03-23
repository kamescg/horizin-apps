/**
 * @function SafeEnableModule
 * @version 0.0.0
 * @description Send a transaction from a Gnosis Safe.
 */

/* --- Global --- */
import { useEffect, useState } from "react";
import { hooks, utils, withEthers } from "@ethers-react/system";
import { useTransactionToast } from "@ethers-react/ui-blueprint";

/* --- Module --- */
import { generateSignatureFromOwner } from "../lib/helpers";

import { execTx } from "../lib/txDefaultValues";

/* --- SafeEnableModule : Component --- */
export const SafeEnableModule = ({ address, moduleAddress, children }) => {
  /* ------------------- */
  // State
  /* ------------------- */
  const ethersProvider = withEthers();
  const [initTx, setInitTx] = useState(false);
  const [data, setData] = useState(undefined);
  /* ------------------- */
  // Hooks
  /* ------------------- */
  const functionData = hooks.useGetEncodedData(address);
  const contractTransaction = hooks.useContractSendTransaction(address);
  const toast = useTransactionToast(contractTransaction);

  /* --- Initialize : Effect  --- */
  // @dev Pass the moduleAddress to the
  //      encodeFunctionData hook to generate
  //      the exexTransaction data
  useEffect(() => {
    functionData.getABI("enableModule", [moduleAddress]);
  }, []);

  useEffect(() => {
    if (functionData.data) setData(functionData.data);
  }, [functionData]);

  /* ------------------- */
  // Hooks
  /* ------------------- */
  const transactionInitialize = async values => {
    contractTransaction.sendTransaction({
      func: "execTransaction",
      inputs: [
        address,
        0,
        values.data || data,
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

  /* --- SafeEnableModule : Form : Compoent --- */
  return <Atom.Span onClick={transactionInitialize}>{children}</Atom.Span>;
};

SafeEnableModule.defaultProps = {
  label: "Send Transaction",
  sxField: {},
  sxButton: {
    mt: 2,
    width: "100%"
  }
};
