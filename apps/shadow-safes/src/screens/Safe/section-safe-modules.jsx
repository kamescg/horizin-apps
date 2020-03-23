/* --- Global --- */
import {useEffect, useState} from 'react';
import {Carousel} from '@horizin/molecules';
import {SafeEnableModule} from '@bank-safe/ui-safe';

const {
  REACT_APP_MODULE_DAILY_LIMIT,
  REACT_APP_MODULE_SOCIAL_RECOVERY,
  REACT_APP_MODULE_STATE_CHANNEL,
} = process.env;

const Main = ({address, safe, ...props}) => {
  return (
    <Atom.Box sx={styleMain}>
      <ModuleList address={address} modules={safe.modules} />
      <Atom.HorizontalRule sx={{}} />
    </Atom.Box>
  );
};

const styleMain = {
  p: 0,
};

const ModuleList = props => {
  const items = [
    <ModuleCard
      modules={props.modules}
      address={props.address}
      moduleAddress={REACT_APP_MODULE_DAILY_LIMIT}
      image="https://image.flaticon.com/icons/svg/452/452053.svg"
      label="Spending Limit"
      content="Allow owners to spend the safe's digital currencies without requiring confirmation from other owners."
      sx={styleCard}
    />,
    <ModuleCard
      address={props.address}
      moduleAddress={REACT_APP_MODULE_SOCIAL_RECOVERY}
      image="https://image.flaticon.com/icons/svg/1700/1700712.svg"
      label="Social Recovery"
      content="Recover an account by adding friends to an approved list. If you ever lose private keys then can help your recover access "
      sx={styleCard}
    />,
    <ModuleCard
      address={props.address}
      moduleAddress={REACT_APP_MODULE_STATE_CHANNEL}
      image="https://image.flaticon.com/icons/svg/2625/2625387.svg"
      label="Price Hedging"
      content="Coming Soon."
      sx={styleCard}
    />,
    <ModuleCard
      address={props.address}
      moduleAddress={REACT_APP_MODULE_STATE_CHANNEL}
      image="https://image.flaticon.com/icons/svg/2625/2625387.svg"
      label="Personal Loan"
      content="Coming Soon."
      sx={styleCard}
    />,
    <ModuleCard
      address={props.address}
      moduleAddress={REACT_APP_MODULE_STATE_CHANNEL}
      image="https://image.flaticon.com/icons/svg/2625/2625387.svg"
      label="State Channel"
      content="faucibus orci luctus et ultrices posuere cubilia Curae; Mauris vel ipsum ipsum. Donec nec consequat erat. Donec commodo ultricies urna hendrerit posuere."
      sx={styleCard}
    />,
  ];

  return <Carousel items={items} />;
};

const styleCard = {
  bg: 'neutral',
  height: '100%',
  flex: 1,
  borderRight: '2px solid',
  borderRightColor: 'gray',
  p: 4,
};

/* --- Component --- */
const ModuleCard = ({
  address,
  moduleAddress,
  modules,
  label,
  content,
  image,
  sx,
}) => {
  const [installed, setInstalled] = useState(false);
  useEffect(() => {
    console.log(modules, moduleAddress, 'modulesmodules');
    if (modules)
      modules.forEach(
        module =>
          module.toLowerCase() === moduleAddress.toLowerCase() &&
          setInstalled(true),
      );
  }, [modules]);

  return (
    <Atom.Box sx={sx}>
      <Atom.Image src={image} sx={{width: 35}} />
      <Atom.Heading as="h5" sx={{fontSize: [2, 2, 3]}}>
        {label}
      </Atom.Heading>
      <Atom.Paragraph sm>{content}</Atom.Paragraph>

      {!installed ? (
        <SafeEnableModule address={address} moduleAddress={moduleAddress}>
          <Atom.Button sm white address={address} moduleAddress={moduleAddress}>
            Install Module
          </Atom.Button>
        </SafeEnableModule>
      ) : (
        <Molecule.Link to={`/safe/${address}/module/${moduleAddress}`}>
          <Atom.Button
            sm
            green
            gradient="green"
            address={address}
            moduleAddress={moduleAddress}>
            Manage Module
          </Atom.Button>
        </Molecule.Link>
      )}
    </Atom.Box>
  );
};

export default Main;
