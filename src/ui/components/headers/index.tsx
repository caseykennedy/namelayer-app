import { Pressable, Row, Text, useDripsyTheme, View } from 'dripsy';
import React, { useEffect } from 'react';

import { useStore } from '@/store';
import { Jazzicon, Pill } from '@/ui';
import { Tube } from '@/ui/icons';

type HeaderRightProps = {
  openDrawer: () => void;
};

export function WalletHeaderTitle() {
  return (
    <Text variant="body" sx={{ color: 'muted', mr: 'xs' }}>
      {' '}
    </Text>
  );
}

export function WalletHeaderRight({ openDrawer }: HeaderRightProps) {
  const currentWallet = useStore.use.currentWallet();

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
          {currentWallet}
        </Text>
        <Jazzicon />
      </Row>
    </Pressable>
  );
}

export function WalletHeaderLeft() {
  const { colors } = useDripsyTheme().theme;
  const isSyncing = useStore.use.isSyncing();
  const syncMessage = useStore.use.syncMessage();
  const color = colors.success[500];

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
        <Text variants={['mono', 'xxs']} sx={{ color, ml: 'xxs' }}>
          {isSyncing ? syncMessage : 'Synced'}
        </Text>
      </Pill>
    </View>
  );
}
