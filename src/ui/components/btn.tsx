// import Ionicons from '@expo/vector-icons/Ionicons';
import type { Theme as DripsyTheme } from 'dripsy';
import { ActivityIndicator, Text, useDripsyTheme, View } from 'dripsy';
import type { ComponentProps } from 'react';
import React from 'react';
import { Pressable, StyleSheet } from 'react-native';

type Props = {
  children?: React.ReactNode | string;
  variant?: keyof DripsyTheme['buttons'];
  sx?: ComponentProps<typeof View>['sx'];
  labelSx?: ComponentProps<typeof View>['sx'];
  isText?: boolean;
  onPress?: ComponentProps<typeof Pressable>['onPress'];
  labelProps?: ComponentProps<typeof Text>;
  touchableProps?: ComponentProps<typeof Pressable>;
  iconLeft?: {
    name: string;
    size?: number;
    color?: string;
  };
  loading?: boolean;
  success?: boolean;
  disabled?: boolean;
  loadingColor?: string;
} & ComponentProps<typeof View>;

const textKeys = ['color', 'fontSize', 'fontWeight', 'textTransform'];

export default function Btn(props: Props) {
  const {
    children = null,
    variant = 'primary',
    sx = {},
    labelSx = {},
    isText = true,
    onPress,
    labelProps,
    touchableProps,
    iconLeft = {},
    loading = false,
    success = false,
    disabled = false,
    hitSlop = {
      top: 10,
      right: 10,
      bottom: 10,
      left: 10,
    },
    loadingColor,
    ...viewProps
  } = props;

  const { colors } = useDripsyTheme().theme;

  const resolvedSx = { ...sx };
  const resolvedLabelSx = { ...labelSx };
  const resolvedIconLeft: Props['iconLeft'] = {
    color: 'background',
    size: 20,
    ...(iconLeft as any),
  };

  const { theme } = useDripsyTheme();

  // @ts-ignore
  const { label: labelStyle = {}, ...variantStyle } = theme.buttons[
    variant
  ] ?? {
    label: {},
  };

  // if (resolvedIconLeft?.name && resolvedIconLeft.color) {
  //   resolvedIconLeft.color = (theme.colors?.[resolvedIconLeft.color] ||
  //     resolvedIconLeft.color) as string;
  // }
  const loaderColor =
    loadingColor ??
    (resolvedLabelSx as any)?.color ??
    (resolvedIconLeft as any)?.color ??
    labelStyle?.color ??
    'background';

  if (loading) {
    // @ts-ignore
    resolvedLabelSx.color = 'transparent';
    // @ts-ignore
    resolvedIconLeft.color = 'transparent';
  }

  return (
    <Pressable
      disabled={loading || disabled}
      {...touchableProps}
      onPress={onPress}
      hitSlop={hitSlop}
      // @ts-ignore
      accessiblityRole="button"
    >
      <View
        {...viewProps}
        sx={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          ...variantStyle,
          ...resolvedSx,
        }}
      >
        {/* {!!resolvedIconLeft?.name && (
          <View sx={{ mr: children ? 2 : 0 }}>
            <Ionicons {...resolvedIconLeft} />
          </View>
        )} */}
        {loading && (
          <View
            sx={{ ...StyleSheet.absoluteFillObject, justifyContent: 'center' }}
          >
            <ActivityIndicator color="primary" />
          </View>
        )}
        {isText && children ? (
          <Text
            {...labelProps}
            sx={{
              textAlign: 'left',
              ...labelStyle,
              ...resolvedLabelSx,
            }}
          >
            {children}
          </Text>
        ) : (
          children
        )}
      </View>
    </Pressable>
  );
}
