import { Pressable, Row, Text, View } from 'dripsy';
import React, { useEffect } from 'react';

import { useStore } from '@/store';
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
  const isSyncing = useStore.use.isSyncing();
  const syncMessage = useStore.use.syncMessage();
  const color = theme.colors.aqua[500];

  // const hasSyncMessage = syncMessage !== null;

  useEffect(() => {
    console.log('isSyncing:', isSyncing);
  }, [isSyncing]);

  return (
    <View
      sx={{
        pl: 'gutter',
      }}
    >
      <Pill borderColor={color}>
        <Tube color={color} />
        <Text variants={['mono', 'xxs']} sx={{ color: color, ml: 'xxs' }}>
          {isSyncing ? syncMessage : 'Synced'}
        </Text>
      </Pill>
    </View>
  );
};
