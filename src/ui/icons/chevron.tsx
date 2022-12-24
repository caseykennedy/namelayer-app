import * as React from 'react';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

import { theme } from '../theme';

export const Chevron = ({
  color = theme.colors.muted,
  style,
  ...props
}: SvgProps) => (
  <Svg
    width={9}
    height={16}
    viewBox="0 0 9 16"
    fill="none"
    {...props}
    style={style}
  >
    <Path
      d="M1 1L7.29289 7.29289C7.68342 7.68342 7.68342 8.31658 7.29289 8.70711L1 15"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
    />
  </Svg>
);
