import { Row, Text } from 'dripsy';
import * as React from 'react';

type Props = {
  children: React.ReactNode;
};

export const Pill = ({ children }: Props) => {
  return (
    <Row
      sx={{
        alignItems: 'center',
        justifyContent: 'center',
        px: 'xs',
        py: 'xxs',
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: 'border',
        borderRadius: 'sm',
      }}
    >
      <Text variants={['mono', 'xxs']}>{children}</Text>
    </Row>
  );
};
