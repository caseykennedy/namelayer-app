import { Row, Text } from 'dripsy';
import * as React from 'react';

type ActionProps = {
  type: string;
};

const Action = ({ type }: ActionProps) => (
  <Text sx={{ fontWeight: 600 }}>{type}</Text>
);

export const WalletActions = () => (
  <Row
    sx={{
      alignItems: 'center',
      justifyContent: 'space-around',
      px: 'gutter',
      pb: 'xxs',
      height: 64,
    }}
  >
    <Action type="send" />
    <Action type="receive" />
    <Action type="reveal" />
    <Action type="redeem" />
  </Row>
);
