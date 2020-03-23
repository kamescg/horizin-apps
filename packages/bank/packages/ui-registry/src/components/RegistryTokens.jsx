/* --- Global --- */
import { useEffect } from "react";
import { hooks } from "@ethers-react/system";
import { BigNumberToString } from "@ethers-react/ui";
/* --- Module --- */
// import { ErrorMessage } from "./index";

/* --- RegistryTokens : Component --- */
export const RegistryTokens = ({ address, token, ...props }) => {
  /* --- Hooks : State --- */
  const contractRead = hooks.useContractRead(address);

  /* --- Safe Version : Effect --- */
  useEffect(() => {
    contractRead.read({
      func: "tokens",
      inputs: [token]
    });
  }, []);

  useEffect(() => {
    console.log(contractRead, "contractRead RegistryTokens");
  }, [contractRead]);

  return contractRead.err ? null : contractRead.data ? (
    <TokenInformation {...contractRead.data} /> // <AddressList list={contractRead.data} />
  ) : (
    <Atom.Span>No Data</Atom.Span>
  );
};

RegistryTokens.defaultProps = {
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
const TokenInformation = ({ name, supply, symbol, issuer }) => {
  return (
    <>
      <Atom.Flex between>
        <Atom.Flex>
          <Atom.Heading
            as="h2"
            sx={{
              fontSize: [4, 4, 5]
            }}
          >
            {name}
          </Atom.Heading>
          <Atom.Heading
            as="h5"
            sx={{
              fontSize: [1, 1, 2]
            }}
          >
            {symbol}
          </Atom.Heading>
        </Atom.Flex>
        <Atom.Box>
          <BigNumberToString bigNumber={supply} />
          <br />
          <Atom.Span block>{issuer}</Atom.Span>
        </Atom.Box>
      </Atom.Flex>
    </>
  );
};
