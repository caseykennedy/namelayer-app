import { Container } from 'dripsy';
import React from 'react';

type Props = {
  children: React.ReactNode;
};

export const OnboardingLayout = ({ children }: Props) => {
  return (
    <Container
      sx={{
        flex: 1,
        backgroundColor: 'bg.700',
        p: 'gutter',
      }}
    >
      {children}
    </Container>
  );
};
