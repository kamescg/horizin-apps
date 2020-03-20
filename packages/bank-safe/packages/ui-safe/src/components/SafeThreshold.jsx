/* --- Global --- */
import { useEffect } from "react";
import { hooks } from "@ethers-react/system";
import { BigNumberToString } from "@ethers-react/ui";
/* --- Module --- */
import { ErrorMessage } from "./index";

/* --- SafeThreshold : Component --- */
export const SafeThreshold = ({ address, ...props }) => {
  /* --- Hooks : State --- */
  const contractRead = hooks.useContractRead(address);

  /* --- Safe Version : Effect --- */
  useEffect(() => {
    contractRead.read({
      func: "getThreshold",
      inputs: []
    });
  }, []);

  useEffect(() => {}, [contractRead]);

  return contractRead.err ? (
    <ErrorMessage label="Version:" msg={contractRead.err.reason} />
  ) : (
    <Atom.Span sx={props.sx}>
      <Atom.Span sx={props.sxLabel}>{props.label}</Atom.Span>{" "}
      <Atom.Span sx={props.sxValue}>
        {contractRead.data ? (
          <BigNumberToString bigNumber={contractRead.data} />
        ) : (
          <Atom.Span>No Data</Atom.Span>
        )}
      </Atom.Span>
    </Atom.Span>
  );
};

SafeThreshold.defaultProps = {
  label: "Threshold:",
  valueDisconnected: "Connect",
  sx: {},
  sxLabel: {
    fontWeight: [700],
    mr: [1]
  },
  sxValue: {}
};

/* --- Component --- */
const AddressList = ({ list }) => {
  return (
    <>
      <Atom.Heading as="h5">Safe Owners</Atom.Heading>
      <Atom.Flex column>
        {list.map(address => (
          <Atom.Span tag>{address}</Atom.Span>
        ))}
      </Atom.Flex>
    </>
  );
};
