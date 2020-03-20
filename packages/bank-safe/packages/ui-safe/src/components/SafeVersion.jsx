/* --- Global --- */
import { useEffect } from "react";
import { hooks } from "@ethers-react/system";

/* --- Module --- */
import { ErrorMessage } from "./index";

/* --- TokenBalance : Component --- */
export const SafeVersion = ({ address, ...props }) => {
  /* --- Hooks : State --- */
  const contractRead = hooks.useContractRead(address);

  /* --- Safe Version : Effect --- */
  useEffect(() => {
    contractRead.read({
      func: "VERSION",
      inputs: []
    });
  }, []);

  return contractRead.err ? (
    <ErrorMessage label="Version:" msg={contractRead.err.reason} />
  ) : (
    <Atom.Span sx={props.sx}>
      <Atom.Span sx={props.sxLabel}>{props.label}</Atom.Span>{" "}
      <Atom.Span sx={props.sxValue}>
        {contractRead.data || props.valueDisconnected}
      </Atom.Span>
    </Atom.Span>
  );
};

SafeVersion.defaultProps = {
  label: "Version:",
  valueDisconnected: "Connect",
  sx: {
    fontSize: [1, 1, 2]
  },
  sxLabel: {
    fontWeight: [700],
    mr: [1]
  },
  sxValue: {}
};
