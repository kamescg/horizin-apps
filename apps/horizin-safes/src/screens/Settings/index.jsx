/* --- Global --- */
import {hooks} from '@ethers-react/system';

/* --- Local --- */
import {FormSettings} from '@forms';

/* --- SettingsScreen : Screen --- */
const SettingsScreen = ({address, ...props}) => {
  return (
    <Atom.Box>
      <Main address={address} />
    </Atom.Box>
  );
};

const Main = props => {
  return (
    <Atom.Box sx={styleMain}>
      <Atom.Heading>Settings</Atom.Heading>
      <Atom.HorizontalRule sx={{my: 0}} />
      <Atom.Flex>
        <Atom.Box sx={{flex: 1, py: 4, pr: 4}}>
          <FormSettings />
        </Atom.Box>
        <Atom.Box sx={{bg: 'smoke', flex: 1, p: 4}}>
          <Atom.Heading>Automatic Login</Atom.Heading>
          <Atom.Paragraph sm>
            The application will automatically connect to the last known Wallet
            provider.
          </Atom.Paragraph>
          <Atom.Heading>Transaction History Storage</Atom.Heading>
          <Atom.Paragraph sm>
            Save the Wallet's transaction history when interacting with the
            application.
          </Atom.Paragraph>
        </Atom.Box>
      </Atom.Flex>
    </Atom.Box>
  );
};

const styleMain = {
  p: 4,
};
export default SettingsScreen;
