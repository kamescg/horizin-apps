/* --- Global --- */
import { useEffect } from "react";
import { hooks } from "@ethers-react/system";

/* --- Module --- */
import { ErrorMessage } from "./index";

/* --- SafeModules : Component --- */
export const SafeModules = ({ address, ...props }) => {
  /* --- Hooks : State --- */
  const contractRead = hooks.useContractRead(address);

  /* --- Safe Version : Effect --- */
  useEffect(() => {
    contractRead.read({
      func: "getModules",
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

SafeModules.defaultProps = {
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
      <Atom.Heading as="h5">Modules</Atom.Heading>
      <Atom.Flex column>
        {list.map(address => (
          <Atom.Span tag>{address}</Atom.Span>
        ))}
      </Atom.Flex>
    </>
  );
};
