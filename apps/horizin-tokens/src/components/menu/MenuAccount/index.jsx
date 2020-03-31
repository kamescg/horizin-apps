import {Popover} from '@horizin/blueprint-system';

import {
  styleItem,
  styleItemChild,
  styleItemChildren,
  styleItemHover,
} from './styles';
/* --- MenuAccount : Component --- */
const MenuAccount = ({sx}) => {
  return (
    <>
      <Popover>
        <Atom.Span tag sm sx={sx}>
          Menu
        </Atom.Span>
        <Menu />
        <Atom.Span>Me</Atom.Span>
      </Popover>
    </>
  );
};

const Menu = props => {
  return (
    <>
      <Atom.Box sx={{width: 220}}>
        <Molecule.Menu
          direction="column"
          label="Bank"
          sx={styleItem}
          hover={styleItemHover}
          sxChild={styleItemChild}
          sxChildren={styleItemChildren}
          items={[
            {
              label: 'Account',
              to: '/bank',
            },
            {
              label: 'Create Token',
              to: '/bank/token/create',
            },
            {
              label: 'Token Manage',
              to: '/bank/tokens/manage',
            },
            {
              label: 'ATM Deposit',
              to: '/bank/atm/deposit',
            },
            {
              label: 'ATM Withdraw',
              to: '/bank/atm/withdraw',
            },
            {
              label: 'Settings',
              to: '/bank/settings',
            },
          ]}
        />
      </Atom.Box>
    </>
  );
};

export default MenuAccount;
