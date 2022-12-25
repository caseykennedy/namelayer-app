import { Row } from 'dripsy';
import * as React from 'react';

import {
  ReceiveButton,
  RedeemButton,
  RevealButton,
  SendButton,
} from './wallet-action-button';

export const WalletActions = () => (
  <Row
    sx={{
      alignItems: 'center',
      justifyContent: 'space-around',
    }}
  >
    <SendButton />
    <ReceiveButton />
    <RedeemButton />
    <RevealButton />
  </Row>
);
