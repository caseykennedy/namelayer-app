import { Container, Pressable, Row, SafeAreaView, Text } from 'dripsy';
import * as React from 'react';

import { Tube } from '@/ui/icons';
import { theme } from '@/ui/theme/dripsy';

import { Avatar, Pill } from '../';

export const TopBar = () => {
  // const navigation = useNavigation();
  return (
    <SafeAreaView>
      <Container
        sx={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          p: 'gutter',
          pt: 'sm',
        }}
      >
        <Row>
          {/* <Pill>BLOCK: 987345</Pill> */}
          <SyncStatus />
        </Row>
        <Wallet />
      </Container>
    </SafeAreaView>
  );
};

const SyncStatus = () => {
  const color = theme.colors.aqua[500];
  return (
    <Pill borderColor={color}>
      <Tube color={color} />
      <Text variants={['mono', 'xxs']} sx={{ color: color, ml: 'xxs' }}>
        Synced
      </Text>
    </Pill>
  );
};

const Wallet = () => {
  return (
    <Pressable onPress={() => {}}>
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
