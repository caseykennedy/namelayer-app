import * as React from 'react';
import { StyleSheet } from 'react-native';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

import { theme } from '../theme';

export const Domains = ({
  color = theme.colors.muted,
  style,
  ...props
}: SvgProps) => (
  <Svg
    width={22}
    height={22}
    viewBox="0 0 18 18"
    fill="none"
    {...props}
    style={StyleSheet.flatten([style])}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 0C1.79086 0 0 1.79086 0 4V9V14C0 16.2091 1.79086 18 4 18H8.9754H14C16.2091 18 18 16.2091 18 14V4C18 1.79086 16.2091 0 14 0H8.9754H4ZM8.9754 0C8.7504 0 8.52541 0 8.30341 0.026953C6.04386 0.202401 3.93371 1.22395 2.39429 2.88731C0.855125 4.55068 0 6.73355 0 9C0 11.2664 0.855125 13.4494 2.39429 15.1127C3.93363 16.7761 6.04382 17.7976 8.30341 17.973C8.52539 18 8.7504 18 8.9754 18C9.2004 18 9.4254 18 9.6474 17.973C11.9069 17.7976 14.0171 16.7761 15.5565 15.1127C17.0957 13.4493 17.9508 11.2664 17.9508 9C17.9508 6.73355 17.0957 4.55059 15.5565 2.88731C14.0172 1.22395 11.907 0.202409 9.6474 0.026953C9.42541 0 9.2004 0 8.9754 0ZM12.6743 5.39993H15.2034C14.3253 3.88554 12.9279 2.74078 11.2704 2.17794C11.8803 3.18427 12.3525 4.26808 12.6743 5.39993ZM8.97543 2.00101C8.17585 3.02023 7.55863 4.17016 7.1515 5.39993H10.7994C10.3922 4.17012 9.77513 3.02019 8.97543 2.00101ZM5.27646 5.39993C5.59823 4.26807 6.07052 3.18422 6.68037 2.17794C5.02284 2.74078 3.62544 3.88553 2.74739 5.39993H5.27646ZM4.89838 7.19992H2.00639C1.69869 8.38016 1.69869 9.61966 2.00639 10.7999H4.89838C4.73331 9.60561 4.73331 8.39421 4.89838 7.19992ZM5.27338 12.5999H2.74734C3.62471 14.1138 5.02095 15.2584 6.67729 15.8219C6.06739 14.8156 5.59514 13.7317 5.27338 12.5999ZM8.9753 15.9988C9.77504 14.9796 10.3921 13.8297 10.7992 12.5999H7.15137C7.55851 13.8297 8.17577 14.9796 8.9753 15.9988ZM12.6742 12.5999C12.3524 13.7317 11.8801 14.8156 11.2703 15.8218C12.9266 15.2583 14.3228 14.1137 15.2002 12.5999H12.6742ZM6.71628 7.19987C6.52828 8.3925 6.52828 9.60724 6.71628 10.7999H11.2343C11.4223 9.60724 11.4223 8.3925 11.2343 7.19987H6.71628ZM15.9442 10.7999C16.0971 10.2121 16.1747 9.60724 16.1752 8.99987C16.1747 8.3925 16.0971 7.78766 15.9442 7.19987H13.0522C13.2173 8.39417 13.2173 9.60556 13.0522 10.7999H15.9442Z"
      fill={color}
    />
  </Svg>
);
