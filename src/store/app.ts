import type { StateCreator } from 'zustand';

import type { NodeSlice } from './node';
import type { WalletSlice } from './wallet';

export type AppSlice = {
  apiHost: string;
  apiKey: string;
  isSyncing: boolean;
  syncMessage: string;
  setIsSyncing: (isSyncing: boolean) => void;
  setSyncMessage: (syncMessage: string) => void;
  setApiHost: (apiHost: string) => void;
  setApiKey: (apiKey: string) => void;
};

export const createAppSlice: StateCreator<
  AppSlice & NodeSlice & WalletSlice,
  [],
  [],
  AppSlice
> = (set) => ({
  apiHost: 'https://api.handshakeapi.com/hsd',
  apiKey: '',
  isSyncing: false,
  syncMessage: 'synchronizing...',
  setIsSyncing: (isSyncing) => set({ isSyncing }),
  setSyncMessage: (syncMessage) => set({ syncMessage }),
  setApiHost: (apiHost) => set({ apiHost }),
  setApiKey: (apiKey) => set({ apiKey }),
});

// export const setIsSyncing = (isSyncing: boolean) =>
//   useApp.getState().setIsSyncing(isSyncing);
// export const setSyncMessage = (syncMessage: string) =>
//   useAppBase.getState().setSyncMessage(syncMessage);
