import { Container, Row, SafeAreaView, Text, View } from 'dripsy';
import * as React from 'react';

import { Pill } from '../';

const Avatar = () => (
  <View
    sx={{
      alignItems: 'center',
      justifyContent: 'center',
      height: 28,
      width: 28,
      ml: 'xs',
      backgroundColor: 'gold.500',
      borderWidth: 1,
      borderColor: 'gold.500',
      borderRadius: 'sm',
    }}
  >
    <Text sx={{ color: 'black', fontWeight: 600 }}>ck</Text>
  </View>
);

export const TopBar = () => (
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
        <Pill>Synchronized</Pill>
      </Row>
      <Row
        sx={{
          alignItems: 'center',
          justifyContent: 'flex-end',
        }}
      >
        <Text variant="body" sx={{ color: 'muted' }}>
          Primary Wallet
        </Text>
        <Avatar />
      </Row>
    </Container>
  </SafeAreaView>
);
