/* --- Global --- */
import React, { useEffect, useState } from "react";
import { withEthers, utils } from "@ethers-react/system";
import { Span } from "@horizin/atoms";

/* --- Module --- */
import { BigNumberToString } from "./index";

/* ---  Balance : Component --- */
export const Balance = ({ address, sx, ...props }) => {
  const ethers = withEthers();
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    if (ethers.provider && address) {
      ethers.provider
        .getBalance(address)
        .then(balance => setBalance(utils.formatEther(balance)))
        .catch(err => console.log(err));
    }
  }, [ethers.provider, address]);

  return (
    <Span sx={sx} {...props}>
      <strong>Balance:</strong> {balance}
    </Span>
  );
};
