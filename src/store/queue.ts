import create from 'zustand';

import type { SignMessageRequest, Transaction } from '@/store';

type QueueState = {
  order: string[];
  map: {
    [txHash: string]: Transaction | SignMessageRequest;
  };
  setTxQueue: (transactions: Transaction[] | SignMessageRequest[]) => void;
  fetchTxQueue: () => void;
};

export const useQueue = create<QueueState>((set, get) => ({
  order: [],
  map: {},
  setTxQueue: (transactions) => {
    set({
      order: transactions.map(
        (tx: Transaction | SignMessageRequest) => tx.hash
      ),
      map: transactions.reduce(
        (
          map: { [h: string]: Transaction | SignMessageRequest },
          tx: Transaction | SignMessageRequest
        ) => {
          map[tx.hash] = tx;
          return map;
        },
        {}
      ),
    });
    console.log(transactions);
    //   type: ActionType.SET_TX_QUEUE,
    // payload: transactions,
  },
  fetchTxQueue: () => {
    // const txQueue = await postMessage({ type: MessageTypes.GET_TX_QUEUE });
    // get().setTxQueue(txQueue);
  },
}));
