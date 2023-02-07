import type { DrawerContentComponentProps } from '@react-navigation/drawer';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { Pressable, Row, Text, View } from 'dripsy';
// import * as Clipboard from 'expo-clipboard';
import React, { useCallback, useEffect, useState } from 'react';
import Toast from 'react-native-toast-message';

import { useStore } from '@/store';
import { Icon, Jazzicon } from '@/ui/components';
import { Copy as CopyIcon } from '@/ui/icons';
import { theme } from '@/ui/theme';
import { ellipseAddress } from '@/utils/helpers';

const stackNavItems = [
  {
    label: 'Add new wallet',
    icon: <Icon name="plus" size={16} color={theme.colors.muted} />,
  },
  {
    label: 'Settings',
    icon: <Icon name="settings" size={18} color={theme.colors.muted} />,
  },
  {
    label: 'Lock wallet',
    icon: <Icon name="lock" size={18} color={theme.colors.muted} />,
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

function WalletDetails() {
  const receiveAddress = useStore.use.receiveAddress();
  const currentWallet = useStore.use.currentWallet();
  const currentAccount = useStore.use.currentAccount();
  const accountAddressEllipse = ellipseAddress(receiveAddress, 4, 4);

  const copyToClipboard = async (address: string) => {
    // await Clipboard.setStringAsync(address);
    console.log('address', address);
    Toast.show({
      type: 'success',
      text1: 'Copied!',
      text2: 'Your receive address has been copied.',
    });
  };

  return (
    <View sx={{ pt: 'xs', p: 'gutter' }}>
      <Row
        sx={{
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Jazzicon borderRadius={14} size={44} />
        <Text variants={['md', 'medium']}>{currentWallet}</Text>
      </Row>

      <Row
        sx={{
          alignItems: 'center',
          justifyContent: 'space-between',
          pt: 80,
        }}
      >
        <Pressable onPress={() => copyToClipboard(receiveAddress)}>
          <Text variants={['md', 'medium']}>{currentAccount}</Text>
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
}

function WalletNav() {
  const wallets = useStore.use.wallets();
  const walletIDs = useStore.use.walletIDs();
  const currentWallet = useStore.use.currentWallet();

  const selectAccount = useStore.use.selectAccount();
  const selectWallet = useStore.use.selectWallet();
  const setCurrentAccount = useStore.use.setCurrentAccount();

  const [currentAddress, setCurrentAddress] = useState('');
  const [addresses, setAddresses] = useState<
    { address: string; watchOnly: boolean; accounts: string[] }[]
  >([]);

  useEffect(() => {
    (async function onAppHeaderMount() {
      const walletAddresses = [];
      for (const wallet of wallets) {
        const wid = wallet.wid;
        // const response = await postMessage({
        //   type: MessageTypes.GET_WALLET_RECEIVE_ADDRESS,
        //   payload: {
        //     id: wid,
        //     depth: 0,
        //   },
        // });
        if (wid === currentWallet) {
          setCurrentAddress('0x');
        }
        walletAddresses.push({
          address: '0x',
          watchOnly: wallet.watchOnly,
          accounts: wallet.accounts,
        });
      }
      setAddresses(walletAddresses);
    })();
  }, [walletIDs, currentWallet, wallets]);

  const onSelectWallet = useCallback(
    (id: string) => {
      selectWallet(id);
      setCurrentAccount('default');
    },
    [selectWallet, setCurrentAccount]
  );

  const onSelectAccount = useCallback(
    (accountName: string) => {
      selectAccount(accountName);
    },
    [selectAccount]
  );

  return (
    <View
      sx={{
        flex: 1,
        backgroundColor: 'bg.600',
      }}
    >
      {addresses.map((address, i) => {
        const multiAccount =
          currentWallet === walletIDs[i] &&
          !address.watchOnly &&
          address.accounts.length > 1;
        return (
          <View key={i}>
            <View key={i}>
              <Row
                sx={{
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  px: 'gutter',
                  py: 'sm',
                }}
              >
                <Pressable onPress={() => onSelectWallet(walletIDs[i])}>
                  <Row sx={{ alignItems: 'center' }}>
                    <Jazzicon />
                    <Text
                      sx={{
                        pl: 'xs',
                      }}
                    >
                      {walletIDs[i]}
                    </Text>
                  </Row>
                </Pressable>

                {multiAccount && (
                  <Pressable
                    sx={{
                      alignItems: 'center',
                      justifyContent: 'center',
                      height: 24,
                      width: 24,
                      bg: 'bg.900',
                      borderRadius: 'sm',
                      borderStyle: 'solid',
                      borderColor: 'border.light',
                      borderWidth: 1,
                    }}
                  >
                    <Icon name="plus" size={14} color={theme.colors.muted} />
                  </Pressable>
                )}
              </Row>
            </View>

            {multiAccount && (
              <View
                sx={{
                  bg: 'bg.700',
                  borderStyle: 'solid',
                  borderTopWidth: 2,
                  borderColor: 'border.dark',
                }}
              >
                {address.accounts.map((account, ii) => {
                  if (account !== 'default') {
                    return (
                      <Pressable
                        onPress={() => onSelectAccount(account)}
                        key={ii}
                      >
                        <Row
                          sx={{
                            alignItems: 'center',
                            px: 'gutter',
                            py: 'sm',
                          }}
                        >
                          <Text>{account}</Text>
                        </Row>
                      </Pressable>
                    );
                  }
                })}
              </View>
            )}
          </View>
        );
      })}
      {/* <DrawerItemList {...props} /> */}
    </View>
  );
}

function StackNav() {
  return (
    <View
      sx={{
        backgroundColor: 'bg.700',
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
}
