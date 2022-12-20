import { Row, Text, View } from 'dripsy';
import * as React from 'react';

// type Props = {
//   children: React.ReactNode;
// };

export const WalletSupply = () => {
  return (
    <View
      sx={{
        borderBottomWidth: 1,
        borderColor: 'border',
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
              justifyContent: 'center',
              mr: 'xxs',
              height: 24,
              width: 24,
              borderRadius: 'full',
              borderColor: 'muted',
              borderWidth: 1,
            }}
          >
            <Text variants={['sm', 'bold', 'centered']}>H</Text>
          </View>
          <Row
            sx={{
              justifyContent: 'center',
            }}
          >
            <Text variant="lg">HNS</Text>
          </Row>
        </Row>
      </Row>

      <Row
        sx={{
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <View>
          <Text sx={{ color: 'muted' }}>$1,056.72</Text>
        </View>
        <View>
          <Text sx={{ color: 'muted' }}>273.25</Text>
        </View>
      </Row>
    </View>
  );
};
