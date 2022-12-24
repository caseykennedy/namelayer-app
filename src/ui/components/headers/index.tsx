import { Pressable, Row, Text, View } from 'dripsy';
import React from 'react';

import { theme } from '@/ui';
import { Tube } from '@/ui/icons';

import { Avatar } from '../avatar';
import { Pill } from '../pill';

type HeaderRightProps = {
  openDrawer: () => void;
};

export const WalletHeaderTitle = () => {
  return (
    <Text variant="body" sx={{ color: 'muted', mr: 'xs' }}>
      {' '}
    </Text>
  );
};

export const WalletHeaderRight = ({ openDrawer }: HeaderRightProps) => {
  return (
    <Pressable
      onPress={openDrawer}
      sx={{
        pr: 'gutter',
      }}
    >
      <Row
        sx={{
          alignItems: 'center',
          justifyContent: 'flex-end',
        }}
      >
        <Text variant="body" sx={{ color: 'muted', mr: 'xs' }}>
          Primary Wallet
        </Text>
        <Avatar />
      </Row>
    </Pressable>
  );
};

export const WalletHeaderLeft = () => {
  const color = theme.colors.aqua[500];
  return (
    <View
      sx={{
        pl: 'gutter',
      }}
    >
      <Pill borderColor={color}>
        <Tube color={color} />
        <Text variants={['mono', 'xxs']} sx={{ color: color, ml: 'xxs' }}>
          Synced
        </Text>
      </Pill>
    </View>
  );
};
