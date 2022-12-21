import * as React from 'react';
import { StyleSheet } from 'react-native';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

export const Tube = ({ color = '#9692A0', style, ...props }: SvgProps) => (
  <Svg
    width={15}
    height={15}
    viewBox="0 0 14 14"
    fill="none"
    {...props}
    style={StyleSheet.flatten([style])}
  >
    <Path
      opacity="0.1"
      d="M12.6509 7.78267C12.6509 7.78267 12.6509 7.76107 12.6509 7.78267C12.6293 7.76107 12.6293 7.76105 12.6293 7.76105L6.23544 1.36716C5.4794 0.611133 3.77291 1.08638 2.43366 2.42564C1.0944 3.7649 0.619203 5.47133 1.37523 6.22737L7.76907 12.6213C8.5251 13.3773 10.2316 12.9021 11.5708 11.5628C12.9101 10.2452 13.3853 8.56031 12.6509 7.78267Z"
      fill={color}
    />
    <Path
      d="M7.76883 12.6429L1.375 6.24902"
      stroke={color}
      strokeMiterlimit="10"
    />
    <Path
      d="M6.23584 1.36719L12.6513 7.7827"
      stroke={color}
      strokeMiterlimit="10"
    />
    <Path
      d="M11.5714 11.5717C12.9127 10.2305 13.3846 8.5277 12.6254 7.7685C11.8661 7.0093 10.1634 7.48117 8.8221 8.82243C7.48085 10.1637 7.00901 11.8664 7.76821 12.6256C8.52742 13.3848 10.2302 12.913 11.5714 11.5717Z"
      stroke={color}
      strokeMiterlimit="10"
    />
    <Path
      d="M5.17791 5.17766C6.51916 3.83641 6.991 2.13366 6.2318 1.37446C5.47259 0.615253 3.76985 1.08709 2.42859 2.42835C1.08733 3.76961 0.615456 5.47239 1.37466 6.23159C2.13386 6.9908 3.83665 6.51892 5.17791 5.17766Z"
      stroke={color}
      strokeMiterlimit="10"
    />
  </Svg>
);
