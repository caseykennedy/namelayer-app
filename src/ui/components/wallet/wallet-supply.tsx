import { Row, Text, View } from 'dripsy';
import * as React from 'react';

import { useStore } from '@/store';
import { Icon, theme } from '@/ui';

const HNS_CURRENT_FIAT = 0.24;

export const WalletSupply = () => {
  return (
    <View
      sx={{
        borderBottomWidth: 1,
        borderColor: 'border.light',
        p: 'gutter',
        pt: 'xl',
      }}
    >
      <TokenBalance />
      <TokenBalanceMeta />
    </View>
  );
};

const TokenBalance = () => {
  const unconfirmed = useStore.use.balance().unconfirmed;
  const lockedUnconfirmed = useStore.use.balance().lockedUnconfirmed;
  const spendable = unconfirmed - lockedUnconfirmed;
  const spendableFormatted = spendable.toLocaleString();

  return (
    <Row
      sx={{
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <View>
        <Text variants={['xxl', 'medium']}>{spendableFormatted}</Text>
      </View>

      <HnsBadge />
    </Row>
  );
};

const HnsBadge = () => {
  return (
    <Row
      sx={{
        alignItems: 'center',
      }}
    >
      <View
        sx={{
          alignItems: 'center',
          justifyContent: 'center',
          mr: 'xxs',
          height: 26,
          width: 26,
          borderRadius: 'full',
          borderColor: 'muted',
          borderWidth: 1,
        }}
      >
        <Icon name="handshake" />
      </View>
      <Row
        sx={{
          justifyContent: 'center',
        }}
      >
        <Text variants={['lg', 'bold']}>HNS</Text>
      </Row>
    </Row>
  );
};

const TokenBalanceMeta = () => {
  const unconfirmed = useStore.use.balance().unconfirmed;
  const lockedUnconfirmed = useStore.use.balance().lockedUnconfirmed;
  const spendableFiat = HNS_CURRENT_FIAT * (unconfirmed - lockedUnconfirmed);
  const spendableFiatFormatted = spendableFiat.toLocaleString();

  return (
    <Row
      sx={{
        alignItems: 'center',
        justifyContent: 'space-between',
        mt: 'xxs',
      }}
    >
      <View>
        <Text sx={{ color: 'muted' }}>${spendableFiatFormatted}</Text>
      </View>
      <Row
        sx={{
          alignItems: 'center',
        }}
      >
        <Icon name="lock" size={14} color={theme.colors.muted} />
        <Text sx={{ color: 'muted', ml: 'xxs' }}>{lockedUnconfirmed}</Text>
      </Row>
    </Row>
  );
};
