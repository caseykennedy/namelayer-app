import create from 'zustand';

import type { AppSlice } from '@/store/app';
import { createAppSlice } from '@/store/app';
import type { DomainsSlice } from '@/store/domains';
import { createDomainsSlice } from '@/store/domains';
import type { NodeSlice } from '@/store/node';
import { createNodeSlice } from '@/store/node';
import type { QueueSlice } from '@/store/queue';
import { createQueueSlice } from '@/store/queue';
import type { TransactionsSlice } from '@/store/transactions';
import { createTransactionsSlice } from '@/store/transactions';
import type { WalletSlice } from '@/store/wallet';
import { createWalletSlice } from '@/store/wallet';
import createSelectors from '@/utils/create-selectors';

export const useStoreBase = create<
  AppSlice &
    DomainsSlice &
    NodeSlice &
    TransactionsSlice &
    WalletSlice &
    QueueSlice
>()((...a) => ({
  ...createAppSlice(...a),
  ...createDomainsSlice(...a),
  ...createNodeSlice(...a),
  ...createTransactionsSlice(...a),
  ...createWalletSlice(...a),
  ...createQueueSlice(...a),
}));

export const useStore = createSelectors(useStoreBase);
