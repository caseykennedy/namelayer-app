import { Pressable, Row, Text } from 'dripsy';
import * as React from 'react';

import { Arrow } from '../../icons';

export const WalletActions = () => (
  <Row
    sx={{
      alignItems: 'center',
      justifyContent: 'space-between',
      px: 'gutter',
      pb: 'xxs',
      height: 64,
    }}
  >
    <WalletActionButton type="send" />
    <WalletActionButton type="receive" />
    <WalletActionButton type="reveal" />
    <WalletActionButton type="redeem" />
  </Row>
);

type ActionProps = {
  type: 'send' | 'receive' | 'reveal' | 'redeem';
};

const WalletActionButton = ({ type }: ActionProps) => {
  return (
    <Pressable
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
      }}
    >
      <Icon type={type} />
      <Text sx={{ fontWeight: 600, ml: 'xxs' }}>{type}</Text>
    </Pressable>
  );
};

const Icon = ({ type }: ActionProps) => {
  switch (type) {
    case 'send':
      return <Arrow />;
    case 'receive':
      return (
        <Arrow
          style={{
            transform: [{ rotate: '180deg' }],
          }}
        />
      );
    case 'redeem':
      return <Arrow />;
    case 'reveal':
      return <Arrow />;
    default:
      return <Arrow />;
  }
};
