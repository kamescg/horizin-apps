/* --- Global --- */
import { useEffect, useState } from "react";
import { hooks } from "@ethers-react/system";

/* --- Module --- */
import { ErrorMessage } from "./index";

/* --- Effect --- */
export const useGnosisSafeState = address => {
  const [loading, setLoading] = useState(true);

  /* --- Hooks : State --- */
  const getVersion = hooks.useContractRead(address);
  const getModules = hooks.useContractRead(address);
  const getThreshold = hooks.useContractRead(address);
  const getOwners = hooks.useContractRead(address);

  useEffect(() => {
    if (
      getVersion.data &&
      getModules.data &&
      getThreshold.data &&
      getOwners.data
    )
      setLoading(false);
  }, [getVersion.data, getModules.data, getThreshold.data, getOwners.data]);

  /* --- Safe Version : Effect --- */
  useEffect(() => {
    // Gnosis Safe Version
    getVersion.read({
      func: "VERSION",
      inputs: []
    });

    // Get Gnosis Safe Modules
    getModules.read({
      func: "getModules",
      inputs: []
    });
    // Get Gnosis Safe Threshold
    getThreshold.read({
      func: "getThreshold",
      inputs: []
    });

    // Get Gnosis Safe Owners
    getOwners.read({
      func: "getOwners",
      inputs: []
    });
  }, []);

  return {
    loading: loading,
    version: getVersion.data,
    threshold: getThreshold.data,
    owners: getOwners.data,
    modules: getModules.data
  };
};
