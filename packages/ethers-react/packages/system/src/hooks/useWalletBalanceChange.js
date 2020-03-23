/**
 * @function useWalletBalanceChange
 * @version 0.0.0
 * @description Add an event listener for the connected wallets balance.
 */

/* --- Global --- */
import { useEffect, useState } from "react";
import { withEthers, utils } from "@ethers-react/system";

/* --- Effect --- */
export const useWalletBalanceChange = drs => {
  const ethers = withEthers();
  const [balance, setBalance] = useState({});

  /* --- Block Mind : Effect --- */
  useEffect(() => {
    if (ethers.provider && ethers.address) {
      ethers.provider.on(address, balanceBigNumber =>
        setBalance({
          number: balanceBigNumber,
          wei: balanceBigNumber.toString(),
          eth: utils.formatEther(balanceBigNumber),
          trimmed: utils.formatEther(balanceBigNumber).substring(0, 5)
        })
      );
    }
    return () => {
      if (ethers.provider) {
        ethers.provider.removeListener(address);
      }
    };
  }, [ethers.provider, ethers.address]);

  return {
    balance
  };
};
