/* --- Global --- */
import { useEffect, useState } from "react";
import { hooks } from "@ethers-react/system";

/* --- Module --- */

/* --- Effect --- */
export const useTokenState = address => {
  const [loading, setLoading] = useState(true);

  /* --- Hooks : State --- */
  const getName = hooks.useContractRead(address);
  const getSymbol = hooks.useContractRead(address);

  useEffect(() => {
    if (getName.data && loading) setLoading(false);
  }, [getName.data]);

  /* --- Safe Version : Effect --- */
  useEffect(() => {
    // Gnosis Safe Version
    getName.read({
      func: "name",
      inputs: []
    });
    getSymbol.read({
      func: "symbol",
      inputs: []
    });
  }, []);

  return {
    loading: loading,
    name: getName.data,
    symbol: getSymbol.data
  };
};
