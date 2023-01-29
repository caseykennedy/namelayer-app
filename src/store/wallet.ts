const Network = require('hsd/lib/protocol/network');
import { WalletClient } from 'hs-client';
import type { StateCreator } from 'zustand';

import WalletService from '@/core/background/wallet';

export type CreateWalletShape = {
  walletName: string;
  seedphrase: string;
  password: string;
  optIn: boolean;
};

export type WalletBalanceShape = {
  unconfirmed: number;
  lockedUnconfirmed: number;
};

export type WalletSlice = {
  wallets: {
    accountDepth: number;
    encrypted: string;
    watchOnly: boolean;
    wid: string;
    accounts: string[];
  }[];
  walletIDs: string[];
  currentWallet: string;
  accountInfo: {
    accountIndex: number;
    name: string;
    type: string;
    watchOnly: boolean;
    wid: string;
  };
  accountNames: string[];
  currentAccount: string;
  locked: boolean;
  receiveAddress: string;
  rescanning: boolean;
  watchOnly: boolean;
  tip: {
    hash: string;
    height: number;
    time: number;
  };
  balance: {
    unconfirmed: number;
    lockedUnconfirmed: number;
  };
  testFn: () => void;
  createWallet: (options: CreateWalletShape) => void;
  lockWallet: () => void;
  unlockWallet: (password: string) => void;
  fetchWalletState: () => void;
  fetchWalletBalance: () => void;
  setWalletBalance: (balance: WalletBalanceShape) => void;
  fetchWallets: () => void;
  fetchAccountNames: (walletID: string) => void;
  setAccountNames: (accountNames: string[]) => void;
  fetchAccountsInfo: (walletId: string) => void;
  selectAccount: (accountName: string) => void;
  setCurrentAccount: (accountName: string) => void;
  fetchWalletIDs: () => void;
  selectWallet: (id: string) => void;
  fetchReceiveAddress: (accountName: string, id: string) => void;
  setReceiveAddress: (receiveAddress: string) => void;
};

export const createWalletSlice: StateCreator<
  WalletSlice,
  [],
  [],
  WalletSlice
> = (set) => ({
  wallets: [
    {
      accountDepth: 0,
      encrypted: '',
      watchOnly: false,
      wid: '010101',
      accounts: ['default', 'tld+emoji', 'holdings', 'misc.'],
    },
    {
      accountDepth: 0,
      encrypted: '',
      watchOnly: false,
      wid: '090909',
      accounts: ['default', 'secondary'],
    },
    {
      accountDepth: 0,
      encrypted: '',
      watchOnly: false,
      wid: '090909',
      accounts: ['default'],
    },
  ],
  walletIDs: ['primary', 'secondary', 'tertiary'],
  currentWallet: 'primary',
  accountInfo: {
    accountIndex: 0,
    name: 'default',
    type: '',
    watchOnly: false,
    wid: '',
  },
  accountNames: [],
  currentAccount: 'default',
  locked: true,
  receiveAddress: 'hs1quz3ups4wd8d065m9yntca8mg0tu7vkv3ys7wmk',
  rescanning: false,
  watchOnly: false,
  tip: {
    hash: '',
    height: -1,
    time: -1,
  },
  balance: {
    // unconfirmed: 0,
    // lockedUnconfirmed: 0,
    unconfirmed: 13684.03,
    lockedUnconfirmed: 197.02,
  },

  testFn: async () => {
    const network = Network.get('regtest');
    const walletOptions = {
      port: network.walletPort,
      apiKey: '',
    };
    const walletClient = new WalletClient(walletOptions);

    // const options = {
    //   passphrase: 'passphrase',
    //   watchOnly: false,
    // };
    // try {
    //   const result = await walletClient.createWallet('testReg', options);
    //   return result;
    // } catch (e) {
    //   console.error(e);
    // }

    return walletClient;
  },

  createWallet: async (options) => {
    const { walletName, seedphrase, password, optIn } = options;
    if (!walletName) throw new Error('Wallet name cannot be empty.');
    if (!seedphrase) throw new Error('Invalid seedphrase.');
    if (!password) throw new Error('Password  be empty.');

    const walletOptions = {
      id: walletName,
      mnemonic: seedphrase,
      passphrase: password,
      optIn,
      watchOnly: false,
    };
    const walletClient = new WalletService();
    await walletClient.createWallet(walletOptions);

    // await new Promise((r) => setTimeout(r, 1000));
    // await dispatch(fetchWalletIDs());
    // await dispatch(selectWallet(walletName));
    // return;
  },

  lockWallet: () => set({ locked: true }),

  unlockWallet: (password) => {
    set({ locked: false });
    console.log(password);
  },

  fetchWalletState: () => console.log('fetch wallet state'),

  fetchWalletBalance: () => console.log('fetch wallet balance'),

  setWalletBalance: (balance) => console.log('set wallet balance:', balance),

  fetchWallets: () => console.log('fetch wallets'),

  fetchAccountNames: (walletID) =>
    console.log('fetch account names:', walletID),

  setAccountNames: (accountNames) =>
    console.log('set account names', accountNames),

  fetchAccountsInfo: (walletId) => console.log('fecth accounts info', walletId),

  selectAccount: (accountName) => {
    // const selected = await postMessage({
    //   type: MessageTypes.SELECT_ACCOUNT,
    //   payload: accountName,
    // });
    set({ currentAccount: accountName });
  },

  setCurrentAccount: (accountName) => set({ currentAccount: accountName }),

  fetchWalletIDs: () => console.log('fetch wallet ids'),

  selectWallet: (id) => {
    // await postMessage({
    //   type: MessageTypes.SELECT_WALLET,
    //   payload: id,
    // });
    // await dispatch(fetchWalletState());
    // await dispatch(fetchAccountsInfo(id));
    // await dispatch(selectAccount('default'));
    set({ currentWallet: id });
  },

  fetchReceiveAddress: (accountName, id) =>
    console.log('fetch receive address', accountName, id),

  setReceiveAddress: (receiveAddress) =>
    console.log('set receive address', receiveAddress),
});

// export const createWallet = (options: CreateWalletShape) =>
//   console.log(options);
// export const lockWallet = () => useWalletBase.getState().lockWallet();
// export const unlockWallet = (password: string) => {
//   useWalletBase.getState().unlockWallet(password);
//   console.log(password);
// };
// export const fetchWalletState = useWalletBase.getState().fetchWalletState;
// export const fetchWalletBalance = () =>
//   useWalletBase.getState().fetchWalletBalance;
// export const setWalletBalance = (balance: WalletBalanceShape) =>
//   useWalletBase.getState().setWalletBalance(balance);
// export const fetchWallets = () => useWalletBase.getState().fetchWallets;
// export const fetchAccountNames = (walletID: string) =>
//   useWalletBase.getState().fetchAccountNames(walletID);
// export const setAccountNames = (accountNames: string[]) =>
//   useWalletBase.getState().setAccountNames(accountNames);
// export const fetchAccountsInfo = (walletId: string) =>
//   useWalletBase.getState().fetchAccountsInfo(walletId);
// export const selectAccount = (accountName: string) =>
//   useWalletBase.getState().selectAccount(accountName);
// export const setCurrentAccount = (accountName: string) =>
//   useWalletBase.getState().setCurrentAccount(accountName);
// export const fetchWalletIDs = () => useWalletBase.getState().fetchWalletIDs;
// export const selectWallet = (id: string) =>
//   useWalletBase.getState().selectWallet(id);
// export const fetchReceiveAddress = (accountName: string, id: string) =>
//   useWalletBase.getState().fetchReceiveAddress(accountName, id);
// export const setReceiveAddress = (receiveAddress: string) =>
//   useWalletBase.getState().setReceiveAddress(receiveAddress);
