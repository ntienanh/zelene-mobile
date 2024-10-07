import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

type BookingIconProps = {
  focused?: boolean;
  size?: number;
} & React.ComponentProps<typeof Svg>;

const BookingIcon: React.FC<BookingIconProps> = ({ focused = false, size = 24, ...props }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    {focused ? (
      <>
        {/* Filled state */}
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9 3C7.11438 3 6.17157 3 5.58579 3.58579C5 4.17157 5 5.11438 5 7V17C5 18.8856 5 19.8284 5.58579 20.4142C6.17157 21 7.11438 21 9 21H15C16.8856 21 17.8284 21 18.4142 20.4142C19 19.8284 19 18.8856 19 17V9.65685C19 8.83935 19 8.4306 18.8478 8.06306C18.6955 7.69552 18.4065 7.40649 17.8284 6.82843L15.1716 4.17157C14.5935 3.59351 14.3045 3.30448 13.9369 3.15224C13.5694 3 13.1606 3 12.3431 3H9Z"
          fill="#B84E44"
        />
        <Path
          d="M9 12H15"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M9 15H15"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </>
    ) : (
      <>
        {/* Outlined state */}
        <Path
          d="M9 12H15"
          stroke="#1D3F75"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M9 15H15"
          stroke="#1D3F75"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M18.3284 6.82843C18.9065 7.40649 19.1955 7.69552 19.3478 8.06306C19.5 8.4306 19.5 8.83935 19.5 9.65685V17C19.5 18.8856 19.5 19.8284 18.9142 20.4142C18.3284 21 17.3856 21 15.5 21H9.5C7.61438 21 6.67157 21 6.08579 20.4142C5.5 19.8284 5.5 18.8856 5.5 17V7C5.5 5.11438 5.5 4.17157 6.08579 3.58579C6.67157 3 7.61438 3 9.5 3H12.8431C13.6606 3 14.0694 3 14.4369 3.15224C14.8045 3.30448 15.0935 3.59351 15.6716 4.17157L18.3284 6.82843Z"
          stroke="#1D3F75"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </>
    )}
  </Svg>
);

export default BookingIcon;
