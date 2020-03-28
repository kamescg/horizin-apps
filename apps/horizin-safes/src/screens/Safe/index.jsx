/* --- Global --- */
import {useEffect, useState} from 'react';
import {hooks} from '@ethers-react/system';
import {Carousel} from '@horizin/molecules';
import {AccountAddress, AccountBalance} from '@ethers-react/ui';
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

import {ToastContainer} from '@horizin/blueprint-system';

import Routes from './routes';
import SectionSafeModules from './section-safe-modules';

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
      {/* <SectionSafeModules address={address} safe={safe} /> */}
      <Routes address={address} safe={safe} />
      {/* <Main address={address} safe={safe} /> */}
    </Atom.Box>
  );
};

const Showcase = ({safe, ...props}) => {
  const showBalanceUpdate = balance => {
    ToastContainer.show({message: `Balance Update: ${balance.eth} ETH`});
  };

  return (
    <>
      <Atom.Flex alignCenter between sx={styleShowcae}>
        <Atom.Box>
          <Atom.Flex column>
            <AccountAddress blockie copy trim={7} address={props.address} />
          </Atom.Flex>
          <Atom.Flex sx={{mt: 3}}>
            <AccountBalance
              address={props.address}
              callback={showBalanceUpdate}
            />
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

export default BankScreen;
