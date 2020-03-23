/* --- Global --- */
import { useEffect } from "react";
import { hooks } from "@ethers-react/system";

/* --- Module --- */
import { ErrorMessage } from "./index";

/* --- SafeOwners : Component --- */
export const SafeOwners = ({ address, ...props }) => {
  /* --- Hooks : State --- */
  const contractRead = hooks.useContractRead(address);

  /* --- Safe Version : Effect --- */
  useEffect(() => {
    contractRead.read({
      func: "getOwners",
      inputs: []
    });
  }, []);

  return contractRead.err ? (
    <ErrorMessage label="Version:" msg={contractRead.err.reason} />
  ) : contractRead.data ? (
    <AddressList list={contractRead.data} />
  ) : (
    <Atom.Span>No Data</Atom.Span>
  );
};

SafeOwners.defaultProps = {
  label: "Proxy Name:",
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
