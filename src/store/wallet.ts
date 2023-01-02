import create from 'zustand';

import createSelectors from '@/utils/create-selectors';

type CreateWalletShape = {
  walletName: string;
  seedphrase: string;
  password: string;
  optIn: boolean;
};

type WalletBalanceShape = {
  unconfirmed: number;
  lockedUnconfirmed: number;
};

type WalletState = {
  createWalletOptions: CreateWalletShape;
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

export const useWalletBase = create<WalletState>((set) => ({
  createWalletOptions: {
    walletName: '',
    seedphrase: '',
    password: '',
    optIn: false,
  },
  wallets: [],
  walletIDs: [],
  currentWallet: '',
  accountInfo: {
    accountIndex: 0,
    name: '',
    type: '',
    watchOnly: false,
    wid: '',
  },
  accountNames: [],
  currentAccount: 'default',
  locked: true,
  receiveAddress: '',
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
  createWallet: (options) => console.log(options),
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
  selectAccount: (accountName) => console.log('select account', accountName),
  setCurrentAccount: (accountName) => set({ currentAccount: accountName }),
  fetchWalletIDs: () => console.log('fetch wallet ids'),
  selectWallet: (id) => console.log('select wallet', id),
  fetchReceiveAddress: (accountName, id) =>
    console.log('fetch receive address', accountName, id),
  setReceiveAddress: (receiveAddress) =>
    console.log('set receive address', receiveAddress),
}));

export const useWallet = createSelectors(useWalletBase);

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
