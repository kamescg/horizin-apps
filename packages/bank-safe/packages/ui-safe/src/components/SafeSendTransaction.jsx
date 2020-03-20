/* --- Global --- */
import { useEffect } from "react";
import { hooks } from "@ethers-react/system";
import { Drawer } from "@horizin/blueprint-system";

/* --- Module --- */
import { ErrorMessage } from "./index";
import { FormSafeSendTransaction } from "../index";

/* --- SafeSendTransaction : Component --- */
export const SafeSendTransaction = ({ address, children, ...props }) => {
  /* --- Hooks : State --- */
  return (
    <Drawer>
      {children}
      <TransactionForm />
    </Drawer>
  );
};

SafeSendTransaction.defaultProps = {
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

const TransactionForm = props => {
  return (
    <Atom.Box>
      Transaction
      <FormSafeSendTransaction />
    </Atom.Box>
  );
};
