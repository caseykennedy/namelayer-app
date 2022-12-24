import { Pressable, Row, Text, View } from 'dripsy';
import * as React from 'react';

import type { TxKeyPath } from '@/core';
import { Chevron } from '@/ui';

type ItemProps = {
  text: TxKeyPath;
  value?: string;
  onPress?: () => void;
  icon?: React.ReactNode;
};

export const Item = ({ text, value, icon, onPress }: ItemProps) => {
  const isPressable = onPress !== undefined;
  const Container = isPressable ? Pressable : View;
  return (
    <Container
      onPress={onPress}
      sx={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        px: 'gutter',
        py: 'sm',
      }}
      // className="flex-1 flex-row  items-center justify-between  px-4 py-2"
    >
      <Row sx={{ alignItems: 'center' }}>
        {icon && <View>{icon}</View>}
        <Text variant="md">{text}</Text>
      </Row>

      <Row sx={{ alignItems: 'center' }}>
        <Text variant="md">{value}</Text>
        {isPressable && (
          <View sx={{ pl: 'xs' }}>
            <Chevron />
          </View>
        )}
      </Row>
    </Container>
  );
};
