/* --- Global --- */
import { useEffect, useState } from "react";
import { hooks } from "@ethers-react/system";
import { BigNumberToBalance, GetTransaction } from "@ethers-react/ui";
/* --- SafeExecutionEvents : Component --- */
export const SafeExecutionEvents = ({
  address,
  topic,
  contractName,
  eventName
}) => {
  /* ------------------- */
  // State
  /* ------------------- */
  const [init, setInit] = useState(false);
  /* --- Hooks : State --- */
  const contractRead = hooks.useGetEvents(address);

  /* ------------------- */
  // Effets
  /* ------------------- */
  /* --- Select Contract : Effect --- */
  useEffect(() => {
    contractRead.getEvents({ address, topic, eventName: eventName });
  }, [address]);

  useEffect(() => {
    console.log(contractRead, "SafeExecutionEvents");
  }, [contractRead]);

  useEffect(() => {});
  return !contractRead.events ? null : (
    <>
      <Atom.Heading>Transactions</Atom.Heading>
      <Atom.HorizontalRule sx={{ mb: 3 }} />
      <Atom.Flex column>
        {contractRead.events.map(event => (
          <Transaction txHash={event.values[0]} payment={event.values[1]} />
        ))}
      </Atom.Flex>
    </>
  );
};

const Transaction = ({ txHash, payment }) => {
  return (
    <Atom.Flex alignCenter between card>
      <BigNumberToBalance label="ETH: " bigNumber={payment} />
      {/* <GetTransaction tx={'0xecb499bf5ce779098e93071f786091c4c33bc60e015e61847b909cb41941d363'} /> */}
      <Molecule.Link to={`/tx/${txHash}`}>
        <Atom.Button white sm>
          View Transaction
        </Atom.Button>
      </Molecule.Link>
    </Atom.Flex>
  );
};
