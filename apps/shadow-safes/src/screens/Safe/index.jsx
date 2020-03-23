/* --- Global --- */
import {useEffect} from 'react';
import {hooks} from '@ethers-react/system';
import {Carousel} from '@horizin/molecules';
import {Balance, Blockie} from '@ethers-react/ui';
import {
  hooks as gnosisHooks,
  SafeVersion,
  SafeProxyName,
  SafeOwners,
  SafeThreshold,
  DrawerSafeSendTransaction,
  DrawerSafeSetup,
  SafeModules,
  SafeExecutionEvents,
  FormSafeEnableModule,
  SafeEnableModule,
} from '@bank-safe/ui-safe';
/* --- Local --- */

/* --- BankScreen : Screen --- */
const BankScreen = ({address, ...props}) => {
  hooks.useLibraryInitContract({address, contractName: 'GnosisSafe'});

  const safe = gnosisHooks.useGnosisSafeState(address);

  useEffect(() => {
    console.log(safe, 'gnosisHooks');
  }, [safe]);

  return (
    <Atom.Box>
      <Showcase address={address} safe={safe} />
      <Main address={address} safe={safe} />
    </Atom.Box>
  );
};

const Showcase = ({safe, ...props}) => {
  return (
    <>
      <Atom.Flex alignCenter between sx={styleShowcae}>
        <Atom.Box>
          <Atom.Flex column>
            <Atom.Span>
              <Atom.Span>
                <Blockie
                  seed={props.address}
                  sx={{borderRadius: 99999, boxShadow: 1}}
                />
              </Atom.Span>
            </Atom.Span>
            <Atom.Span block>{props.address}</Atom.Span>
          </Atom.Flex>
          <Atom.Flex sx={{mt: 3}}>
            <Balance address={props.address} />
            <SafeThreshold address={props.address} sx={{}} />
          </Atom.Flex>
          <Atom.Flex sx={{mt: 3}}>
            <SafeVersion address={props.address} sx={{fontSize: [1]}} />
            <SafeProxyName
              address={props.address}
              sx={{fontSize: [1], ml: 2}}
            />
          </Atom.Flex>
        </Atom.Box>

        {/* Right : Region */}

        {safe.loading ? null : (
          <>
            <Atom.Flex>
              <DrawerSafeSendTransaction address={props.address}>
                <Atom.Button m1 sm>
                  Send
                </Atom.Button>
              </DrawerSafeSendTransaction>

              {!Number(safe.threshold.toString()) ? (
                <DrawerSafeSetup address={props.address}>
                  <Atom.Button m1 sm green>
                    Setup Safe
                  </Atom.Button>
                </DrawerSafeSetup>
              ) : null}
            </Atom.Flex>
          </>
        )}
      </Atom.Flex>
      <Atom.HorizontalRule />
    </>
  );
};

const styleShowcae = {
  p: 4,
};

const {
  REACT_APP_MODULE_DAILY_LIMIT,
  REACT_APP_MODULE_SOCIAL_RECOVERY,
  REACT_APP_MODULE_STATE_CHANNEL,
} = process.env;

const Main = props => {
  return (
    <Atom.Box sx={styleMain}>
      <ModuleList address={props.address} />
      <Atom.HorizontalRule sx={{}} />
      <Atom.Flex sx={{p: 4}}>
        <Atom.Box sx={{flex: 1, p: 4}}>
          <SafeModules address={props.address} />
          <SafeOwners address={props.address} />
        </Atom.Box>
      </Atom.Flex>
    </Atom.Box>
  );
};

const styleMain = {
  p: 0,
};

const ModuleList = props => {
  const items = [
    <ModuleCard
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
const ModuleCard = ({address, moduleAddress, label, content, image, sx}) => {
  return (
    <Atom.Box sx={sx}>
      <Atom.Image src={image} sx={{width: 35}} />
      <Atom.Heading as="h5" sx={{fontSize: [2, 2, 3]}}>
        {label}
      </Atom.Heading>
      <Atom.Paragraph sm>{content}</Atom.Paragraph>
      <SafeEnableModule address={address} moduleAddress={moduleAddress}>
        <Atom.Button sm white address={address} moduleAddress={moduleAddress}>
          Install Module
        </Atom.Button>
      </SafeEnableModule>
    </Atom.Box>
  );
};

export default BankScreen;

/* <>
  <SafeExecutionEvents
    contractName="GnosisSafe"
    eventName="ExecutionSuccess"
    topic="ExecutionSuccess(bytes32,uint256)"
    address={props.address}
  />

  <Atom.Box sx={{flex: 1, p: 4}}>
          <FormSafeEnableModule address={props.address} />
        </Atom.Box>
</>; */
