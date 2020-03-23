// Web3Modal & Plugins
import Web3Modal from 'web3modal';

/* --- Providers --- */
const providerOptions = {};

export const web3Modal = new Web3Modal({
  network: 'mainnet', // optional
  cacheProvider: true, // optional
  providerOptions, // required
});
