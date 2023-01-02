import type { StateCreator } from 'zustand';

import NodeClient from '@/core/background/node';

import type { AppSlice } from './app';

export type NodeSlice = {
  hash: string;
  height: number;
  time: number;
  setInfo: (hash: string, height: number, time: number) => void;
  fetchLatestBlock: () => Promise<void>;
  testPut: () => Promise<void>;
};

export const createNodeSlice: StateCreator<
  NodeSlice & AppSlice,
  [],
  [],
  NodeSlice
> = (set, get) => ({
  hash: '',
  height: -1,
  time: -1,
  setInfo: (hash: string, height: number, time: number) => {
    set({
      hash,
      height,
      time,
    });
  },
  fetchLatestBlock: async () => {
    const apiHost = get().apiHost;
    const apiKey = get().apiKey;

    const nodeClient = new NodeClient({ apiHost, apiKey });

    try {
      const blockchanInfo = await nodeClient.getBlockchainInfo();
      const block = await nodeClient.getBlockByHeight(
        blockchanInfo!.result!.blocks
      );
      const { hash, height, time } = block || {};

      get().setInfo(hash, height, time);
    } catch (e) {
      console.warn('fetchLatestBlock', e);
    }
  },
  testPut: async () => {
    const apiHost = get().apiHost;
    const apiKey = get().apiKey;

    const nodeClient = new NodeClient({ apiHost, apiKey });

    await nodeClient.testPut();
  },
});

// export const setInfo = (hash: string, height: number, time: number) =>
//   useNode.getState().setInfo(hash, height, time);
