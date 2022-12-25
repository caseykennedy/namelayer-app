import create from 'zustand';

type CreateWalletShape = {
  walletName: string;
  seedphrase: string;
  password: string;
  optIn: boolean;
  isLedger: boolean;
  xpub: string | undefined;
};

type WalletBalanceShape = {
  unconfirmed: number;
  lockedUnconfirmed: number;
};

type WalletState = {
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

export const useWallet = create<WalletState>((set) => ({
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

export const createWallet = (options: CreateWalletShape) =>
  console.log(options);
export const lockWallet = () => useWallet.getState().lockWallet();
export const unlockWallet = (password: string) => {
  useWallet.getState().unlockWallet(password);
  console.log(password);
};
export const fetchWalletState = useWallet.getState().fetchWalletState;
export const fetchWalletBalance = () => useWallet.getState().fetchWalletBalance;
export const setWalletBalance = (balance: WalletBalanceShape) =>
  useWallet.getState().setWalletBalance(balance);
export const fetchWallets = () => useWallet.getState().fetchWallets;
export const fetchAccountNames = (walletID: string) =>
  useWallet.getState().fetchAccountNames(walletID);
export const setAccountNames = (accountNames: string[]) =>
  useWallet.getState().setAccountNames(accountNames);
export const fetchAccountsInfo = (walletId: string) =>
  useWallet.getState().fetchAccountsInfo(walletId);
export const selectAccount = (accountName: string) =>
  useWallet.getState().selectAccount(accountName);
export const setCurrentAccount = (accountName: string) =>
  useWallet.getState().setCurrentAccount(accountName);
export const fetchWalletIDs = () => useWallet.getState().fetchWalletIDs;
export const selectWallet = (id: string) =>
  useWallet.getState().selectWallet(id);
export const fetchReceiveAddress = (accountName: string, id: string) =>
  useWallet.getState().fetchReceiveAddress(accountName, id);
export const setReceiveAddress = (receiveAddress: string) =>
  useWallet.getState().setReceiveAddress(receiveAddress);
