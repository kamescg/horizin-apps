/* --- Global --- */
import { Drawer } from "@horizin/blueprint-system";

/* --- Module --- */
import { FormSafeSendTransaction } from "../index";

/* --- DrawerSafeSendTransaction : Component --- */
export const DrawerSafeSendTransaction = ({ address, children }) => {
  return (
    <Drawer title="Transaction">
      {children}
      <TransactionForm address={address} />
    </Drawer>
  );
};

DrawerSafeSendTransaction.defaultProps = {
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
      <FormSafeSendTransaction address={props.address} />
    </Atom.Box>
  );
};
