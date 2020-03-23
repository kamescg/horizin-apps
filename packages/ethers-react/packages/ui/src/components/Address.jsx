/* --- Global --- */
import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { withEthers, helpers } from "@ethers-react/system";
import { Flex } from "@horizin/atoms";
import { Toast } from "@horizin/blueprint-system";
import { Blockie } from "./index";

/* ---  Address : Component --- */
export const Address = ({ attr, blockie, copy, sx, sxAddress, trim }) => {
  const ethers = withEthers();
  return (
    <Flex alignCenter sx={sx} {...attr}>
      {blockie && (
        <Blockie
          seed={ethers.address}
          sx={{ variant: "icon" }}
          scale={3}
          sxBlockie={{ variant: "circle" }}
        />
      )}
      <Atom.Span sx={sxAddress}>
        {ethers.address
          ? trim
            ? helpers.shortenAddress(ethers.address, trim)
            : ethers.address
          : "0x..."}
      </Atom.Span>
      {copy && (
        <CopyToClipboard text={ethers.address}>
          <Toast msg="Address Copied" pointer sx={{ ml: 2 }}>
            <Atom.Span
              sx={{
                bg: "smoke",
                borderRadius: 9999,
                p: 1,
                "&:hover": {
                  bg: "gray"
                }
              }}
            >
              <Atom.Image src="https://gnosis-safe.io/app/img/6e43fc0ffe5ea8020a0d524e93d20b3e.svg" />
            </Atom.Span>
          </Toast>
        </CopyToClipboard>
      )}
    </Flex>
  );
};
