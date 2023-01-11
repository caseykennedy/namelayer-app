import { Container } from 'dripsy';
import React from 'react';

type Props = {
  children: React.ReactNode;
};

export function OnboardingLayout({ children }: Props) {
  return (
    <Container
      sx={{
        flex: 1,
        backgroundColor: 'bg.600',
        p: 'gutter',
      }}
    >
      {children}
    </Container>
  );
}
