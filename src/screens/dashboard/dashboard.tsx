import { useNavigation } from '@react-navigation/native';
import { Pressable, Row, ScrollView, Text, View } from 'dripsy';
import React, { useEffect } from 'react';

import { Wallet } from '@/ui/components';
import { Avatar, Pill } from '@/ui/components';
import { Tube } from '@/ui/icons';
import { theme } from '@/ui/theme/dripsy';

export const Dashboard = (props: any) => {
  const nav = useNavigation();

  useEffect(() => {
    nav.setOptions({
      // eslint-disable-next-line react/no-unstable-nested-components
      headerTitle: () => <HeaderTitle />,
      // eslint-disable-next-line react/no-unstable-nested-components
      headerRight: () => <HeaderRight openDrawer={nav.openDrawer} />,
      // eslint-disable-next-line react/no-unstable-nested-components
      headerLeft: () => <HeaderLeft />,
    });
  });

  return (
    <ScrollView sx={{ backgroundColor: 'bg.900' }} {...props}>
      <Wallet />
      <View
        sx={{
          backgroundColor: 'bg.600',
          height: 150,
        }}
      >
        <Pressable onPress={() => nav.navigate('TxStack')}>
          <Text>Open Modal</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

type HeaderRightProps = {
  openDrawer: () => void;
};

const HeaderTitle = () => {
  return (
    <Text variant="body" sx={{ color: 'muted', mr: 'xs' }}>
      {' '}
    </Text>
  );
};

const HeaderRight = ({ openDrawer }: HeaderRightProps) => {
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

const HeaderLeft = () => {
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
