/* --- Global --- */
import {extension as Reactive} from '@ethers-react/reactive';
import {extension as Providers} from '@ethers-react/providers';
import {extension as Global} from '@ethers-react/Global';

/* --- Local --- */
import GnosisSafe from '@contracts/GnosisSafe.json';
import GnosisSafeProxyFactory from '@contracts/GnosisSafeProxyFactory.json';
import DailyLimitModule from '@contracts/DailyLimitModule.json';

/* --- Module --- */
import {web3Modal} from './web3modal';

/* --- Contracts --- */
export const contracts = [
  DailyLimitModule,
  GnosisSafe,
  GnosisSafeProxyFactory,
  {
    abi: GnosisSafe.abi,
    bytecode: GnosisSafe.bytecode,
    contractName: 'GnosisSafeProxy',
  },
];

Providers.initialState = {
  web3Modal: web3Modal,
};

/* --- Reactive --- */
Reactive.settings.getAccountBalance = true;
Reactive.settings.getAccountOnLoad = true;
Reactive.settings.getProviderSigner = true;
Reactive.settings.getWalletProviderInitialize = false;
Reactive.settings.watchAccountOnChange = true;
Reactive.settings.watchBlockCurrent = true;
Reactive.settings.getWalletBalance = true;
Reactive.settings.getWalletAddress = true;
Reactive.settings.getWalletNetwork = true;
Reactive.settings.getWalletNonce = false;

// export const extensions = [Reactive, Providers];
export const extensions = [Global, Reactive, Providers];
