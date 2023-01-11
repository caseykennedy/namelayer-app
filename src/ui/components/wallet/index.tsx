import { View } from 'dripsy';
import * as React from 'react';

import { WalletActions } from './wallet-actions';
import { WalletSupply } from './wallet-supply';

export function Wallet() {
  return (
    <View sx={{ backgroundColor: 'bg.900' }}>
      <WalletSupply />
      <WalletActions />
    </View>
  );
}
