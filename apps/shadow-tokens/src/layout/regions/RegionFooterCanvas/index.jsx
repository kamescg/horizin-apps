/**
 * @name RegionFooter
 * @description Default footer region for application.
 */
/* --- Global --- */
import {Link} from '@reach/router';

/* --- Component --- */
export default props => {
  return (
    <Atom.Flex alignCenter between sx={{variant: 'regions.canvasFooter'}}>
      {/* Left */}
      <Atom.Flex alignCenter>
        <Link to="/support">
          <Atom.Span>Support</Atom.Span>
        </Link>
        <Link to="/guides">
          <Atom.Span>Guides</Atom.Span>
        </Link>
      </Atom.Flex>

      {/* Right */}
      <Atom.Flex alignCenter>
        <a href="https://github.com/kamescg">
          <Atom.Span sx={{fontSize: 0}}>Built by KamesCG</Atom.Span>
        </a>
      </Atom.Flex>
    </Atom.Flex>
  );
};
