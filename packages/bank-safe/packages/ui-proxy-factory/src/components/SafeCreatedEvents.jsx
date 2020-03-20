/* --- Global --- */
import { useEffect, useState } from "react";
import { hooks } from "@ethers-react/system";

/* --- SafeCreatedEvents : Component --- */
export const SafeCreatedEvents = ({
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
  const contractRead = hooks.useGetEvents(contractName);

  /* ------------------- */
  // Effets
  /* ------------------- */
  /* --- Select Contract : Effect --- */
  useEffect(() => {
    setInit(true);
    contractRead.getEvents({ address, topic, eventName: eventName });
  }, [address]);

  useEffect(() => {
    // console.log(contractRead, "getEvents");
  }, [contractRead]);

  useEffect(() => {});
  return !contractRead.events ? null : (
    <Atom.Flex column>
      {contractRead.events.map(event => (
        <ProxyDeploy address={event.values[0]} />
      ))}
    </Atom.Flex>
  );
};

const ProxyDeploy = ({ address }) => {
  return (
    <Atom.Flex alignCenter between card>
      <Atom.Span sx={{ fontSize: [2, 2, 3] }}>{address}</Atom.Span>
      <Molecule.Link to={`safe/${address}`}>
        <Atom.Button white sm>
          View Safe
        </Atom.Button>
      </Molecule.Link>
    </Atom.Flex>
  );
};
