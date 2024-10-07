import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

type HomeIconProps = {
  focused?: boolean;
  color?: string;
  size?: number;
  outlineColor?: string;
  fillColor?: string;
} & React.ComponentProps<typeof Svg>;

const HomeIcon: React.FC<HomeIconProps> = ({
  focused = false,
  color, // from tab navigator
  size = 24,
  outlineColor = '#1D3F75',
  fillColor = '#B84E44',
  ...props
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    {focused ? (
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.9931 3.43355C12.8564 2.42319 11.1436 2.42319 10.0069 3.43355L2.33565 10.2525C1.92286 10.6194 1.88568 11.2515 2.2526 11.6642C2.61952 12.077 3.25159 12.1142 3.66437 11.7473L4.00001 11.4489L4.00001 17.0657C3.99996 17.9522 3.99992 18.716 4.08215 19.3277C4.17028 19.9832 4.36903 20.6115 4.87869 21.1212C5.38835 21.6309 6.0167 21.8296 6.67222 21.9177C7.28388 22 8.04769 21.9999 8.93418 21.9999H15.0658C15.9523 21.9999 16.7161 22 17.3278 21.9177C17.9833 21.8296 18.6117 21.6309 19.1213 21.1212C19.631 20.6115 19.8297 19.9832 19.9179 19.3277C20.0001 18.716 20.0001 17.9522 20 17.0657L20 11.4489L20.3356 11.7473C20.7484 12.1142 21.3805 12.077 21.7474 11.6642C22.1143 11.2515 22.0772 10.6194 21.6644 10.2525L13.9931 3.43355ZM12 15.9999C11.4477 15.9999 11 16.4476 11 16.9999V18.9999C11 19.5522 10.5523 19.9999 10 19.9999C9.44772 19.9999 9 19.5522 9 18.9999V16.9999C9 15.343 10.3431 13.9999 12 13.9999C13.6569 13.9999 15 15.343 15 16.9999V18.9999C15 19.5522 14.5523 19.9999 14 19.9999C13.4477 19.9999 13 19.5522 13 18.9999V16.9999C13 16.4476 12.5523 15.9999 12 15.9999Z"
        fill={color || fillColor}
      />
    ) : (
      <>
        <Path
          stroke={color || outlineColor}
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M19 9v8c0 1.886 0 2.828-.586 3.414C17.828 21 16.886 21 15 21H9c-1.886 0-2.828 0-3.414-.586C5 19.828 5 18.886 5 17V9"
        />
        <Path
          stroke={color || outlineColor}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="m3 11 4.5-4 3.171-2.819a2 2 0 0 1 2.658 0L16.5 7l4.5 4M10 21v-4a2 2 0 0 1 2-2v0a2 2 0 0 1 2 2v4"
        />
      </>
    )}
  </Svg>
);

export default HomeIcon;
