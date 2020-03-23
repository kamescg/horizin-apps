/* --- Global --- */
import { useEffect, useState } from "react";
import { withEthers, utils } from "@ethers-react/system";

/* --- Effect --- */
export const useBalanceChange = adrs => {
  const ethers = withEthers();
  const [address, setAddress] = useState(adrs);
  const [balance, setBalance] = useState({});

  console.log(adrs, "adrsadrs");

  /* --- Block Mind : Listen Event --- */
  useEffect(() => {
    if (address && ethers.provider) {
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
  }, [ethers.provider]);

  return balance;
};
