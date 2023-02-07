import { Container } from 'dripsy';
import React from 'react';

type Props = {
  children: React.ReactNode;
};

export function OnboardingFooter({ children }: Props) {
  return (
    <Container
      sx={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
      }}
    >
      {children}
    </Container>
  );
}
