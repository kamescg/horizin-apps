/* --- Global --- */
import {extension as Reactive} from '@ethers-react/reactive';
import {extension as Providers} from '@ethers-react/providers';
import {extension as Global} from '@ethers-react/Global';

/* --- Local --- */
import ATM from '@contracts/ATM.json';
import Token from '@contracts/Token.json';
import Registry from '@contracts/Registry.json';

/* --- Module --- */
import {web3Modal} from './web3modal';

/* --- Contracts --- */
export const contracts = [
  Registry,
  {
    abi: ATM.abi,
    bytecode: ATM.bytecode,
    contractName: 'ATM',
  },
  {
    abi: Token.abi,
    bytecode: Token.bytecode,
    contractName: 'Token',
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
