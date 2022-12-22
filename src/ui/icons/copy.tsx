import * as React from 'react';
import { StyleSheet } from 'react-native';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

import { theme } from '../theme';

export const Copy = ({
  color = theme.colors.muted,
  style,
  ...props
}: SvgProps) => (
  <Svg
    width={9}
    height={10}
    viewBox="0 0 9 10"
    fill="none"
    {...props}
    style={StyleSheet.flatten([style])}
  >
    <Path
      d="M8.71756 1.28791L7.67529 0.27459C7.49445 0.0987742 7.24919 1.30015e-06 6.99344 0L3.53571 0C3.00315 0 2.57143 0.419727 2.57143 0.9375V1.875H0.964286C0.431719 1.875 0 2.29473 0 2.8125V9.0625C0 9.58027 0.431719 10 0.964286 10H5.46429C5.99685 10 6.42857 9.58027 6.42857 9.0625V8.125H8.03571C8.56828 8.125 9 7.70527 9 7.1875V1.95082C9 1.70218 8.8984 1.46372 8.71756 1.28791ZM5.34375 9.0625H1.08482C1.05285 9.0625 1.02219 9.05015 0.99959 9.02818C0.976985 9.0062 0.964286 8.97639 0.964286 8.94531V2.92969C0.964286 2.89861 0.976985 2.8688 0.99959 2.84682C1.02219 2.82485 1.05285 2.8125 1.08482 2.8125H2.57143V7.1875C2.57143 7.70527 3.00315 8.125 3.53571 8.125H5.46429V8.94531C5.46429 8.97639 5.45159 9.0062 5.42898 9.02818C5.40638 9.05015 5.37572 9.0625 5.34375 9.0625ZM7.91518 7.1875H3.65625C3.62428 7.1875 3.59362 7.17515 3.57102 7.15318C3.54841 7.1312 3.53571 7.10139 3.53571 7.07031V1.05469C3.53571 1.02361 3.54841 0.9938 3.57102 0.971823C3.59362 0.949847 3.62428 0.9375 3.65625 0.9375H5.78571V2.65625C5.78571 2.91514 6.00157 3.125 6.26786 3.125H8.03571V7.07031C8.03571 7.10139 8.02302 7.1312 8.00041 7.15318C7.97781 7.17515 7.94715 7.1875 7.91518 7.1875ZM8.03571 2.1875H6.75V0.9375H6.9435C6.97546 0.9375 7.00612 0.949844 7.02874 0.971816L8.00042 1.9165C8.01161 1.92739 8.02049 1.94031 8.02654 1.95453C8.0326 1.96875 8.03572 1.98398 8.03571 1.99937V2.1875Z"
      fill={color}
    />
  </Svg>
);
