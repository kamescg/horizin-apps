/**
 * @function useContractRead
 * @description Read from a deployed smart contract.
 */

/* --- Global --- */
import { useEffect, useReducer } from "react";
import { selectors } from "@ethers-react/system";

INITIAL_STATE = {
  contractFunction: undefined,
  inputs: undefined,
  data: undefined,
  err: undefined
};

/* --- useContractRead : Effect --- */
export const useContractRead = selector => {
  /* ------------------- */
  // State
  /* ------------------- */

  /* --- Local : State --- */
  const contractSelector = selectors.useSelectContract(selector);

  function reducer(state, action) {
    switch (action.type) {
      case "CONTRACT_READ":
        return {
          ...state,
          contractFunction: action.payload.contractFunction,
          inputs: action.payload.inputs,
          hash: undefined,
          broadcastError: undefined,
          broadcastErrorCode: undefined,
          isRequesting: true,
          isRead: false,
          lifecyle: LIFECYLE_TRANSACTION_BROADCAST
        };
      case "CONTRACT_READ_SUCCESS":
        return {
          ...state,
          isRequesting: false,
          isRead: true,
          data: action.payload
        };
      case "SET_BROADCAST_REJECTED":
        return {
          ...state,
          isRequesting: false,
          broadcastErrorCode: action.payload.errorCode,
          broadcastError: action.payload.error,
          lifecyle: LIFECYLE_TRANSACTION_FAILURE
        };
      default:
        throw new Error();
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  /* ------------------- */
  // Actions
  /* ------------------- */
  /* --- read : Action --- */
  const read = ({ func, inputs, contractName }) => {
    dispatch({
      type: "CONTRACT_READ",
      payload: {
        contractFunction: func,
        inputs: inputs
      }
    });
  };
  /* ------------------- */
  // Effects
  /* ------------------- */

  /* --- Contract Initialize :: Effect --- */
  useEffect(() => {
    if (
      contractSelector.api &&
      state.contractFunction &&
      state.inputs &&
      !isContractReadData
    ) {
      (async () => {
        try {
          const data = await contractSelector.api[contractFunction](
            ...state.inputs
          );
          dispatch({
            type: "CONTRACT_READ_SUCCESS",
            payload: data
          });
        } catch (error) {
          console.log(error);
          dispatch({
            type: "CONTRACT_READS_FAILURE",
            payload: data
          });
        }
      })();
    }
  }, [contractSelector.api, contractFunction, contractInput]);

  return {
    read,
    input: state.inputs,
    data: state.data,
    err: err,
    isRead: isContractReadData,
    isError: isContractReadData ? true : false,

    // State from Contract Selectors
    isContractConnected: contractSelector.isConnected,
    isContractFound: contractSelector.isFound
  };
};
