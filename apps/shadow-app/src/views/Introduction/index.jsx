/* --- Component --- */
const ViewDashboard = props => (
  <Atom.Flex column sx={{p: 4}}>
    <Atom.Heading>Horizin Shadow Bank</Atom.Heading>
    <Atom.Paragraph>
      The Horizin Shadow Bank is minimal viable product for owning an extensible
      on-chain bank.
    </Atom.Paragraph>
    <Atom.Paragraph>
      Banks are deployed using the Gnosis Safe contracts. Additional
      functionality is available by installing modules. The additional
      functionality includes basics like a daily spending limit, plus advanced
      features to support Open Finance protocols.
    </Atom.Paragraph>
  </Atom.Flex>
);

export default ViewDashboard;
