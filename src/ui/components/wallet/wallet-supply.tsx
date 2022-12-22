import { Row, Text, View } from 'dripsy';
import * as React from 'react';

import { Handshake, Lock } from '../../icons';

// type Props = {
//   children: React.ReactNode;
// };

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
      <Row
        sx={{
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <View>
          <Text variants={['xxl', 'medium']}>13,174.03</Text>
        </View>
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
            <Handshake />
          </View>
          <Row
            sx={{
              justifyContent: 'center',
            }}
          >
            <Text variants={['lg', 'bold']}>HNS</Text>
          </Row>
        </Row>
      </Row>

      <Row
        sx={{
          alignItems: 'center',
          justifyContent: 'space-between',
          mt: 'xxs',
        }}
      >
        <View>
          <Text sx={{ color: 'muted' }}>$1,056.72</Text>
        </View>
        <Row
          sx={{
            alignItems: 'center',
          }}
        >
          <Lock />
          <Text sx={{ color: 'muted', ml: 'xxs' }}>273.25</Text>
        </Row>
      </Row>
    </View>
  );
};
