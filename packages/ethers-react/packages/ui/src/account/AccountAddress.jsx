/* --- Global --- */
import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { helpers } from "@ethers-react/system";
import { Flex } from "@horizin/atoms";
import { Toast } from "@horizin/blueprint-system";
import { Blockie } from "../index";

/* ---  Address : Component --- */
export const AccountAddress = ({
  address,
  attr,
  blockie,
  copy,
  sx,
  sxAddress,
  trim
}) => {
  return (
    <Flex alignCenter sx={sx} {...attr}>
      {blockie && (
        <Blockie
          seed={address}
          sx={{ variant: "icon" }}
          scale={3}
          sxBlockie={{ variant: "circle" }}
        />
      )}
      <Atom.Span sx={sxAddress}>
        {address
          ? trim
            ? helpers.shortenAddress(address, trim)
            : address
          : "0x..."}
      </Atom.Span>
      {copy && (
        <CopyToClipboard text={address}>
          <Atom.Span>
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
                {console.log(console.log(address, "addressas"))}
                <Atom.Image src="https://gnosis-safe.io/app/img/6e43fc0ffe5ea8020a0d524e93d20b3e.svg" />
              </Atom.Span>
            </Toast>
          </Atom.Span>
        </CopyToClipboard>
      )}
    </Flex>
  );
};
