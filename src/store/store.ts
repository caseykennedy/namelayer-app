import create from 'zustand';

import type { AppSlice } from '@/store/app';
import { createAppSlice } from '@/store/app';
import type { NodeSlice } from '@/store/node';
import { createNodeSlice } from '@/store/node';
import type { WalletSlice } from '@/store/wallet';
import { createWalletSlice } from '@/store/wallet';
import createSelectors from '@/utils/create-selectors';

const useStoreBase = create<AppSlice & NodeSlice & WalletSlice>()((...a) => ({
  ...createAppSlice(...a),
  ...createNodeSlice(...a),
  ...createWalletSlice(...a),
}));

export const useStore = createSelectors(useStoreBase);
