import create from 'zustand';

type AppState = {
  isSyncing: boolean;
  syncMessage: string;
  setIsSyncing: (isSyncing: boolean) => void;
  setSyncMessage: (syncMessage: string) => void;
};

export const useApp = create<AppState>((set) => ({
  isSyncing: false,
  syncMessage: 'synchronizing...',
  setIsSyncing: (isSyncing) => set({ isSyncing }),
  setSyncMessage: (syncMessage) => set({ syncMessage }),
}));

export const setIsSyncing = (isSyncing: boolean) =>
  useApp.getState().setIsSyncing(isSyncing);
export const setSyncMessage = (syncMessage: string) =>
  useApp.getState().setSyncMessage(syncMessage);
