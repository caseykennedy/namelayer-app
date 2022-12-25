import create from 'zustand';

type DomainsState = {
  order: string[];
  map: {
    [name: string]: Domain;
  };
  offset: number;
  fetching: boolean;
};

type Domain = {
  claimed: number;
  data: string;
  expired: boolean;
  height: number;
  highest: number;
  name: string;
  nameHash: string;
  owner: {
    hash: string;
    index: number;
  };
  registered: boolean;
  renewal: number;
  renewals: number;
  revoked: number;
  transfer: number;
  value: number;
  weak: boolean;
  owned: boolean;
  ownerCovenantType?: string;
};

export const useDomains = create<DomainsState>(() => ({
  map: {},
  order: [],
  fetching: false,
  offset: 20,
  // setIsSyncing: () => set(),
}));

// export const setIsSyncing = () => useDomains.getState();
