/* --- Global --- */
import { useEffect } from "react";
import { hooks } from "@ethers-react/system";

/* --- Module --- */
// import { ErrorMessage } from "./index";

/* --- SafeModuleDailyLimits : Component --- */
export const SafeModuleDailyLimits = ({ address, token, ...props }) => {
  /* --- Hooks : State --- */
  const contractRead = hooks.useContractRead(
    "0x458d86f6B080CfF441028C2cA160eA44b213312f"
  );

  /* --- Safe Version : Effect --- */
  useEffect(() => {
    contractRead.read({
      func: "dailyLimits",
      inputs: ["0x0000000000000000000000000000000000000000"]
    });
  }, []);

  useEffect(() => {
    console.log(contractRead, "contractReadcontractRead");
  }, [contractRead]);

  return contractRead.err ? null : (
    <Atom.Span sx={props.sx}>
      <Atom.Span sx={props.sxLabel}>{props.label}</Atom.Span>{" "}
      <Atom.Span sx={props.sxValue}>
        {contractRead.data || props.valueDisconnected}
      </Atom.Span>
    </Atom.Span>
  );
};

SafeModuleDailyLimits.defaultProps = {
  label: "Proxy Name:",
  valueDisconnected: "Connect",
  sx: {},
  sxLabel: {
    fontWeight: [700],
    mr: [1]
  },
  sxValue: {}
};
