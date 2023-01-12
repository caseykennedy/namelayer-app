import type { StateCreator } from 'zustand';

import type { Covenant } from '@/utils/covenant';

export type SignMessageRequest = {
  hash: string;
  method: 'SIGN_MESSAGE' | 'SIGN_MESSAGE_WITH_NAME';
  walletId: string;
  data: {
    name?: string;
    address?: string;
    message: string;
  };
  bid: undefined;
  height: 0;
};

export type TxInput = {
  address: string;
  value: number;
  path: {
    change: boolean;
  };
  coin?: TxOutput;
};

export type TxOutput = {
  address: string;
  value: number;
  covenant: Covenant;
  owned?: boolean;
  path: {
    change: boolean;
  };
};

export type Transaction = {
  method: undefined;
  block: string;
  confirmations: number;
  date: Date;
  fee: number;
  hash: string;
  height: number;
  inputs: TxInput[];
  outputs: TxOutput[];
  rate: number;
  time: number;
  tx: string;
  bid?: number;
  blind?: number;
};

export type TransactionsSlice = {
  pending: string[];
  order: string[];
  // map: {
  //   [txHash: string]: Transaction | SignMessageRequest;
  // };
  offset: number;
  fetching: boolean;
  fetchTransactions: () => void;
  fetchPendingTransactions: () => void;
  setFetching: (fetching: boolean) => void;
  setOffset: (offset: number) => void;
  setBlindHash: (blind: { nonce: string; value: number }, hash: string) => void;
  resetTransactions: () => void;
  setTransactions: (transactions: Transaction[]) => void;
};

export const createTransactionsSlice: StateCreator<
  TransactionsSlice,
  [],
  [],
  TransactionsSlice
> = (set, get) => ({
  pending: [],
  order: [],
  map: {},
  offset: 20,
  fetching: false,
  fetchTransactions: () => {
    // const state = getState();
    // const { fetching } = state.transactions;
    // if (fetching) return;
    // dispatch(setFetching(true));
    // const resp = await postMessage({
    //   type: MessageTypes.GET_TRANSACTIONS,
    // });
    // dispatch({
    //   type: ActionType.SET_TRANSACTIONS,
    //   payload: resp,
    // });
    // dispatch(setFetching(false));
  },
  fetchPendingTransactions: () => {
    // const pendingTXs = await postMessage({
    //   type: MessageTypes.GET_PENDING_TRANSACTIONS,
    // });
    // dispatch({
    //   type: ActionType.SET_PENDING_TRANSACTIONS,
    //   payload: pendingTXs,
    // });
  },
  setFetching: (fetching) => {
    set({ fetching });
  },
  setOffset: (offset) => {
    set({ offset });
  },
  setBlindHash: (blind, hash) => {
    console.log(blind, hash);
    // set({
    //   map: {
    //     [hash]: {
    //       blind: blind,
    //     },
    //   },
    // });
  },
  resetTransactions: () => {
    get().setOffset(20);
    get().setTransactions([]);
  },
  setTransactions: (transactions) => {
    set({
      order: transactions.map((tx: Transaction) => tx.hash),
      // map: transactions.reduce(
      //   (map: { [h: string]: Transaction }, tx: Transaction) => {
      //     map[tx.hash] = tx;
      //     return map;
      //   },
      //   {}
      // ),
    });
  },
});
