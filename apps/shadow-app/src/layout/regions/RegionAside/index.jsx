/* --- Global --- */

/* --- Styles --- */
import {
  styleItem,
  styleItemChild,
  styleItemChildren,
  styleItemHover,
} from './styles';

/* --- Component --- */
const RegionAside = ({sx, ...props}) => {
  return (
    <Atom.Flex column gradient="leather" sx={{variant: 'regions.aside'}}>
      {/* Branding : Area  */}
      <Atom.Flex center column gradient="charcoal" sx={{p: 4}}>
        <Molecule.Link to="/">
          <Atom.Heading lg heavy sx={{mb: 0}}>
            {GLOBAL.siteName}
          </Atom.Heading>
        </Molecule.Link>
      </Atom.Flex>

      {/* Menu : Area  */}
      <Atom.Box sx={{px: 4, py: 3}}>
        <Molecule.Menu
          direction="column"
          sx={styleItem}
          hover={styleItemHover}
          sxChild={styleItemChild}
          sxChildren={styleItemChildren}
          items={[
            {
              label: 'Activity',
              to: '/',
            },
            {
              label: 'Bank',
              to: '/bank',
            },
            {
              label: 'Safes',
              to: '/safes',
            },
            {
              label: 'Contracts',
              to: '/contracts',
            },
          ]}
        />
      </Atom.Box>
    </Atom.Flex>
  );
};

export default RegionAside;
