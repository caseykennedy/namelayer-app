import create from 'zustand';

import type { AppSlice } from '@/store/app';
import { createAppSlice } from '@/store/app';
import type { NodeSlice } from '@/store/node';
import { createNodeSlice } from '@/store/node';
import createSelectors from '@/utils/create-selectors';

const useStoreBase = create<AppSlice & NodeSlice>()((...a) => ({
  ...createAppSlice(...a),
  ...createNodeSlice(...a),
}));

export const useStore = createSelectors(useStoreBase);
