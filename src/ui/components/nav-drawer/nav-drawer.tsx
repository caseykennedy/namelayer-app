import type { DrawerContentComponentProps } from '@react-navigation/drawer';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { Pressable, Row, Text, View } from 'dripsy';
// import * as Clipboard from 'expo-clipboard';
import React from 'react';

import { Avatar } from '@/ui';
import { Chevron, Copy as CopyIcon, Plus, Settings } from '@/ui/icons';
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
// import Ionicons from 'react-native-vector-icons/Ionicons';
import { ellipseAddress } from '@/utils/helpers';

const stackNavItems = [
  {
    label: 'Add new wallet',
    icon: <Plus />,
  },
  {
    label: 'Transactions',
    icon: <Chevron />,
  },
  {
    label: 'Settings',
    icon: <Settings size={18} />,
  },
];

const walletNavItems = [
  {
    name: 'Primary wallet',
  },
  {
    name: 'Secondary',
  },
  {
    name: 'Ledger',
  },
];

export const NavDrawer = (props: DrawerContentComponentProps) => {
  return (
    <View
      sx={{
        flex: 1,
        backgroundColor: 'bg.900',
        borderRightWidth: 1,
        borderColor: 'bg.700',
      }}
    >
      <DrawerContentScrollView
        {...props}
        // eslint-disable-next-line react-native/no-inline-styles
        contentContainerStyle={{
          flex: 1,
        }}
      >
        <WalletDetails />
        <WalletNav />
      </DrawerContentScrollView>

      <StackNav />
    </View>
  );
};

const WalletDetails = () => {
  const copyToClipboard = async (address: string) => {
    console.log('address', address);
    // await Clipboard.setStringAsync(address);
  };

  const walletName = 'Primary wallet';
  const accountName = 'Default account';
  const accountAddress = 'hs1quz3ups4wd8d065m9yntca8mg0tu7vkv3ys7wmk';
  const accountAddressEllipse = ellipseAddress(accountAddress, 4, 4);

  return (
    <View sx={{ pt: 'xs', p: 'gutter' }}>
      <Row
        sx={{
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Avatar size={44} />
        <Text variants={['md', 'medium']}>{walletName}</Text>
      </Row>

      <Row
        sx={{
          alignItems: 'center',
          justifyContent: 'space-between',
          pt: 80,
        }}
      >
        <Pressable onPress={() => copyToClipboard(accountAddress)}>
          <Text variants={['md', 'medium']}>{accountName}</Text>
          <Row
            sx={{
              alignItems: 'center',
            }}
          >
            <Text
              variants={['xs', 'muted']}
              sx={{
                pr: 'xs',
              }}
            >
              {accountAddressEllipse}
            </Text>

            <CopyIcon />
          </Row>
        </Pressable>
      </Row>
    </View>
  );
};

const WalletNav = () => {
  return (
    <View
      sx={{
        flex: 1,
        backgroundColor: 'bg.600',
      }}
    >
      {walletNavItems.map(({ name }) => (
        <Row
          sx={{
            // borderBottomWidth: 1,
            // borderColor: 'border.light',
            alignItems: 'center',
            px: 'gutter',
            py: 'sm',
          }}
          key={name}
        >
          <Avatar />
          <Text
            sx={{
              pl: 'xs',
            }}
          >
            {name}
          </Text>
        </Row>
      ))}
      {/* <DrawerItemList {...props} /> */}
    </View>
  );
};

const StackNav = () => {
  return (
    <View
      sx={{
        backgroundColor: 'bg.800',
        borderTopWidth: 2,
        borderColor: 'border.dark',
        pb: 'lg',
      }}
    >
      {stackNavItems.map(({ icon, label }) => (
        <Pressable
          onPress={() => {}}
          sx={{
            borderBottomWidth: 1,
            borderColor: 'border.light',
            px: 'gutter',
            py: 'sm',
          }}
          key={label}
        >
          <Row
            sx={{
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Text variants={['sm', 'muted']}>{label}</Text>
            <View
              sx={{
                alignItems: 'center',
                justifyContent: 'center',
                height: 18,
                width: 18,
              }}
            >
              {icon}
            </View>
          </Row>
        </Pressable>
      ))}
    </View>
  );
};
