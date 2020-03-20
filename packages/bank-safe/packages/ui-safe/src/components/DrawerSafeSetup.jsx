/* --- Global --- */
import { useEffect } from "react";
import { hooks } from "@ethers-react/system";
import { Drawer } from "@horizin/blueprint-system";

/* --- Module --- */
import { ErrorMessage } from "./index";
import { FormSafeSetup } from "../index";

/* --- DrawerSafeSetup : Component --- */
export const DrawerSafeSetup = ({ address, children, ...props }) => {
  /* --- Hooks : State --- */
  return (
    <Drawer>
      {children}
      <Form address={props.address} />
    </Drawer>
  );
};

DrawerSafeSetup.defaultProps = {
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

const Form = props => {
  return (
    <Atom.Box>
      <Atom.Heading>Setup Safe</Atom.Heading>
      <FormSafeSetup address={props.address} />
    </Atom.Box>
  );
};
