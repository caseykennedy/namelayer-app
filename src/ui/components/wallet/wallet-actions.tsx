import { Row } from 'dripsy';
import * as React from 'react';

import {
  WalletActionButtonReceive,
  WalletActionButtonRedeem,
  WalletActionButtonReveal,
  WalletActionButtonSend,
} from './wallet-action-button';

export const WalletActions = () => (
  <Row
    sx={{
      alignItems: 'center',
      justifyContent: 'space-around',
    }}
  >
    <WalletActionButtonSend />
    <WalletActionButtonReceive />
    <WalletActionButtonRedeem />
    <WalletActionButtonReveal />
  </Row>
);
