import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

type CardIconProps = {
  focused?: boolean;
  size?: number;
} & React.ComponentProps<typeof Svg>;

const CardIcon: React.FC<CardIconProps> = ({ focused = false, size = 24, ...props }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    {focused ? (
      <>
        {/* Filled state */}
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2 11H22V15.0658C22 15.9523 22 16.7161 21.9179 17.3278C21.8297 17.9833 21.631 18.6117 21.1213 19.1213C20.6117 19.631 19.9833 19.8297 19.3278 19.9179C18.7161 20.0001 17.9523 20.0001 17.0658 20H6.93414C6.04767 20.0001 5.28387 20.0001 4.67221 19.9179C4.0167 19.8297 3.38835 19.631 2.87869 19.1213C2.36902 18.6117 2.17028 17.9833 2.08215 17.3278C1.99991 16.7161 1.99995 15.9523 2 15.0658V11ZM5 14C5 13.4477 5.44772 13 6 13H8C8.55228 13 9 13.4477 9 14C9 14.5523 8.55228 15 8 15H6C5.44772 15 5 14.5523 5 14ZM10 14C10 13.4477 10.4477 13 11 13H13C13.5523 13 14 13.4477 14 14C14 14.5523 13.5523 15 13 15H11C10.4477 15 10 14.5523 10 14Z"
          fill="#B84E44"
        />
        <Path
          d="M22 9V8.93418C22 8.04769 22 7.28387 21.9179 6.67221C21.8297 6.0167 21.631 5.38835 21.1213 4.87869C20.6117 4.36902 19.9833 4.17028 19.3278 4.08215C18.7161 3.99991 17.9523 4 17.0658 4H6.93418C6.04769 4 5.28388 3.99991 4.67222 4.08215C4.0167 4.17028 3.38835 4.36902 2.87869 4.87868C2.36902 5.38835 2.17028 6.0167 2.08215 6.67221C2 7.28388 2 8.0477 2 8.9342V9H22Z"
          fill="#B84E44"
        />
      </>
    ) : (
      <>
        {/* Outlined state */}
        <Path d="M3.5 10H20.5" stroke="#1D3F75" strokeWidth="1.5" strokeLinecap="round" />
        <Path d="M6 14H8" stroke="#1D3F75" strokeWidth="1.5" strokeLinecap="round" />
        <Path d="M11 14H13" stroke="#1D3F75" strokeWidth="1.5" strokeLinecap="round" />
        <Path
          d="M3 9C3 7.11438 3 6.17157 3.58579 5.58579C4.17157 5 5.11438 5 7 5H12H17C18.8856 5 19.8284 5 20.4142 5.58579C21 6.17157 21 7.11438 21 9V12V15C21 16.8856 21 17.8284 20.4142 18.4142C19.8284 19 18.8856 19 17 19H12H7C5.11438 19 4.17157 19 3.58579 18.4142C3 17.8284 3 16.8856 3 15V12V9Z"
          stroke="#1D3F75"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </>
    )}
  </Svg>
);

export default CardIcon;
