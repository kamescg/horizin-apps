/**
 * @name RegionTopDashboard
 * @description Default top region for application.
 */
/* --- Local --- */
import {ColorMode} from '@components';

export default props => (
  <Atom.Flex alignCenter between sx={{variant: 'regions.canvasheader'}}>
    {/* Left */}
    <Atom.Flex alignCenter>
      <Molecule.Link to="/">
        <Atom.Heading lg heavy sx={{mb: 0}}>
          {GLOBAL.siteName}
        </Atom.Heading>
      </Molecule.Link>
    </Atom.Flex>

    {/* Right */}
    <Atom.Flex alignCenter>
      <Molecule.Link to="/">
        <Atom.Span>Dashboard</Atom.Span>
      </Molecule.Link>
      <ColorMode />
    </Atom.Flex>
  </Atom.Flex>
);
