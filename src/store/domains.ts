import type { StateCreator } from 'zustand';

export type DomainShape = {
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

export type DomainsSlice = {
  order: string[];
  // map: {
  //   [name: string]: DomainShape;
  // };
  offset: number;
  fetching: boolean;
  setFetching: (fetching: boolean) => void;
  setOffset: (offset: number) => void;
  resetDomains: () => void;
  fetchDomainName: (name: string) => void;
  fetchDomainNames: () => void;
  setDomainName: (domain: DomainShape) => void;
  setDomainNames: (domains: DomainShape[]) => void;
};

export const createDomainsSlice: StateCreator<
  DomainsSlice,
  [],
  [],
  DomainsSlice
> = (set) => ({
  map: {},
  order: [],
  fetching: false,
  offset: 20,
  setFetching: (fetching) => {
    set({ fetching });
  },
  setOffset: (offset) => {
    set({ offset });
  },
  resetDomains: () => {
    // dispatch(setDomainNames([]));
    // dispatch(setOffset(20));
  },
  fetchDomainName: (name) => {
    console.log('fetchDomainName:', name);
    // await dispatch(setFetching(true));
    // const domain: Domain = await postMessage({
    //   type: MessageTypes.GET_DOMAIN_NAME,
    //   payload: name,
    // });
    // await dispatch(setDomainName(domain));
    // await dispatch(setFetching(false));
  },
  fetchDomainNames: () => {
    // await dispatch(setFetching(true));
    // await postMessage({
    //   type: MessageTypes.GET_DOMAIN_NAMES,
    // });
    // await dispatch(setFetching(false));
  },
  setDomainName: (domain) => {
    console.log('setDomainName:', domain);
    // set({
    //   map: {
    //     [domain.name]: domain,
    //   },
    // });
  },
  setDomainNames: (domains) => {
    set({
      order: domains.map((domain: DomainShape) => domain.name),
      // map: domains.reduce((map: { [n: string]: Domain }, domain: Domain) => {
      //   map[domain.name] = domain;
      //   return map;
      // }, []),
    });
  },
});

// export const setFetching = (fetching: boolean) =>
//   useDomains.getState().setFetching(fetching);

// export const setOffset = (offset: number) =>
//   useDomains.getState().setOffset(offset);

// export const resetDomains = () => useDomains.getState().resetDomains;

// export const fetchDomainName = (name: string) =>
//   useDomains.getState().fetchDomainName(name);

// export const fetchDomainNames = () => useDomains.getState().fetchDomainNames;

// export const setDomainName = (domain: Domain) =>
//   useDomains.getState().setDomainName(domain);

// export const setDomainNames = (domains: Domain[]) => {
//   useDomains.getState().setDomainNames(domains);
// };
