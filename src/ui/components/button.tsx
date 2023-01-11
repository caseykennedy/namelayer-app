import type { Theme as DripsyTheme } from 'dripsy';
import { ActivityIndicator, styled, Text, View } from 'dripsy';
import type { ComponentProps } from 'react';
import React from 'react';
import { Pressable as NPressable, StyleSheet } from 'react-native';

export const Pressable = styled(NPressable, {
  defaultVariant: 'default',
  themeKey: 'button',
})();

type Props = {
  children?: React.ReactNode;
  variant?: keyof DripsyTheme['button'];
  onPress?: ComponentProps<typeof NPressable>['onPress'];
  pressableProps?: ComponentProps<typeof NPressable>;
  labelProps?: ComponentProps<typeof Text>;
  loading?: boolean;
  disabled?: boolean;
};

export const Button = ({
  children,
  variant,
  onPress,
  pressableProps,
  labelProps,
  loading = false,
  disabled = false,
}: Props) => {
  return (
    <Pressable
      disabled={loading || disabled}
      variant={variant}
      onPress={onPress}
      {...pressableProps}
    >
      {loading ? (
        <View
          sx={{ ...StyleSheet.absoluteFillObject, justifyContent: 'center' }}
        >
          <ActivityIndicator color="white" />
        </View>
      ) : (
        <Text
          variants={['bold']}
          sx={{ color: variant === 'primary' ? 'text' : 'muted' }}
          {...labelProps}
        >
          {children}
        </Text>
      )}
    </Pressable>
  );
};
