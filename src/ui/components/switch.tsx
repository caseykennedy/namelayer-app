import { useDripsyTheme } from 'dripsy';
import React from 'react';
import type { SwitchProps } from 'react-native';
import { Switch as RNSwitch } from 'react-native';

type Props = {
  isEnabled?: boolean;
} & SwitchProps;

export function Switch({ isEnabled = false, ...props }: Props) {
  const { colors } = useDripsyTheme().theme;

  return (
    <RNSwitch
      trackColor={{ false: colors.muted, true: colors.success[600] }}
      thumbColor={!isEnabled ? colors.text : colors.text}
      ios_backgroundColor={colors.bg[400]}
      {...props}
    />
  );
}
