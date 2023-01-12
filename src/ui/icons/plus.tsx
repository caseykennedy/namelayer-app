import * as React from 'react';
import { StyleSheet } from 'react-native';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

import { theme } from '../theme';

type Props = SvgProps & {
  size?: number;
};

export const Plus = ({
  color = theme.colors.muted,
  size = 14,
  style,
  ...props
}: Props) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 14 14"
    fill="none"
    {...props}
    style={StyleSheet.flatten([style])}
  >
    <Path
      d="M13.2621 7.73795C13.6696 7.73795 14 7.40756 14 7C14 6.59244 13.6696 6.26206 13.2621 6.26206L7.73794 6.26206V0.737944C7.73794 0.330389 7.40756 -6.22041e-08 7 0C6.59244 0 6.26206 0.330389 6.26206 0.737944V6.26206H0.737944C0.330389 6.26206 -1.86612e-07 6.59244 0 7C-3.1102e-07 7.40756 0.330389 7.73794 0.737944 7.73794H6.26206L6.26206 13.2621C6.26206 13.6696 6.59244 14 7 14C7.40756 14 7.73795 13.6696 7.73795 13.2621L7.73795 7.73795L13.2621 7.73795Z"
      fill={color}
    />
  </Svg>
);
