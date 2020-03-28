/**
 * @function useContractDeploy
 * @version 0.0.0
 * @description
 */

/* --- Global --- */
import { useEffect, useReducer } from "react";
import { selectors, ethers } from "@ethers-react/system";

/* --- Module --- */
import withEthers from "../withContext";

/* --- Consntants --- */
const LIFECYLE_TRANSACTION_BROADCAST = "LIFECYLE_TRANSACTION_BROADCAST";
const LIFECYLE_TRANSACTION_SUCCESS = "LIFECYLE_TRANSACTION_SUCCESS";
const LIFECYLE_TRANSACTION_FAILURE = "LIFECYLE_TRANSACTION_FAILURE";
const INITIAL_STATE = {
  lifecyle: undefined,
  params: {},
  hash: undefined,
  broadcast: undefined,
  receipt: undefined,
  // Contract : States
  contractNamePassed: undefined,
  contractFunction: undefined,
  inputs: undefined,
  // Error : States
  broadcastError: undefined,
  confirmedError: undefined,
  receiptStatus: undefined,
  // Booleans : States
  isRequesting: false,
  isBroadcast: false,
  isConfirmed: false,
  isRejected: false
};

/* --- Effect --- */
export const useContractDeploy = selector => {
  /* ------------------- */
  // Reducer & State
  /* ------------------- */

  /* --- Global : State --- */
  const ethersProvider = withEthers();
  const contractSelector = selectors.useSelectContractFromLibrary(selector);

  function reducer(state, action) {
    switch (action.type) {
      case "INIT_CONTRACT_DEPLOY":
        return {
          ...state,
          inputs: action.payload.inputs,
          hash: undefined,
          broadcastError: undefined,
          broadcastErrorCode: undefined,
          isRequesting: true,
          isBroadcast: false,
          isConfirmed: false,
          isRejected: false,
          receipt: undefined,
          params: action.payload.params,
          lifecyle: LIFECYLE_TRANSACTION_BROADCAST
        };
      case "BROADCAST_CONFIRMED":
        return {
          ...state,
          isRequesting: false,
          isBroadcast: true,
          hash: action.payload.hash,
          transaction: action.payload.transaction
        };
      case "BROADCAST_REJECTED":
        return {
          ...state,
          isRequesting: false,
          broadcastErrorCode: action.payload.errorCode,
          broadcastError: action.payload.error,
          lifecyle: LIFECYLE_TRANSACTION_FAILURE
        };
      case "TRANSACTION_SUCCESS":
        return {
          ...state,
          isRequesting: false,
          isConfirmed: true,
          receiptStatus: action.payload.receiptStatus,
          receipt: action.payload.receipt,
          lifecyle: LIFECYLE_TRANSACTION_SUCCESS
        };

      default:
        throw new Error();
    }
  }

  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  /* ------------------- */
  // Actions
  /* ------------------- */
  /* --- deploy : Action --- */
  const deploy = ({ inputs, contractName, params }) => {
    dispatch({
      type: "INIT_CONTRACT_DEPLOY",
      payload: {
        contractName: state.contractName ? state.contractName : contractName,
        inputs: inputs,
        params: params
      }
    });
  };

  /* ------------------- */
  // Effects
  /* ------------------- */
  /* --- Contract Send Transaction :: Effect --- */
  useEffect(() => {
    if (contractSelector.isFound && state.inputs && !state.hash) {
      (async () => {
        try {
          const contract = new ethers.ContractFactory(
            contractSelector.abi,
            contractSelector.bytecode,
            ethersProvider.wallet
          );

          const transactionBroadcast = await contract.deploy(
            ...state.inputs,
            state.params
          );
          dispatch({
            type: "BROADCAST_CONFIRMED",
            payload: {
              hash: transactionBroadcast.hash,
              transaction: transactionBroadcast
            }
          });
        } catch (error) {
          dispatch({
            type: "BROADCAST_REJECTED",
            payload: {
              errorCode: error.code,
              error: error
            }
          });
        }
      })();
    }
  }, [contractSelector.api, state.contractFunction, state.inputs]);

  /* --- Wait for Transaction : Effect --- */
  useEffect(() => {
    if (state.isBroadcast && state.hash) {
      (async () => {
        try {
          const receipt = await ethersProvider.wallet.provider.waitForTransaction(
            state.hash
          );

          dispatch({
            type: "TRANSACTION_SUCCESS",
            payload: {
              receipt: receipt,
              receiptStatus: receipt.status ? true : false
            }
          });
        } catch (error) {
          setTransactionConfirmedError(error);
        }
      })();
    }
  }, [state.isBroadcast, state.hash]);

  return {
    deploy,
    lifecyle: state.lifecyle,
    hash: state.hash,
    broadcast: state.broadcast,
    broadcastError: state.broadcastError,
    broadcastErrorCode: state.broadcastErrorCode,
    receipt: state.receipt,
    receiptStatus: state.receiptStatus,
    confirmedError: state.confirmedError,
    // Boolean States
    isBroadcast: state.isBroadcast,
    isConfirmed: state.isConfirmed,
    isRejected: state.isRejected,
    isRequesting: state.isRequesting,
    // State from Contract Selectr
    isContractFound: contractSelector.isFound
  };
};
