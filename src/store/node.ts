import create from 'zustand';

type NodeState = {
  hash: string;
  height: number;
  time: number;
  setInfo: (hash: string, height: number, time: number) => void;
};

export const useNode = create<NodeState>((set, get) => ({
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
  fetchLatestBlock: () => {
    // const block = await postMessage({ type: MessageTypes.GET_LATEST_BLOCK });
    // const { hash, height, time } = block;
    // get().setInfo(hash, height, time);
  },
}));

export const setInfo = (hash: string, height: number, time: number) =>
  useNode.getState().setInfo(hash, height, time);
