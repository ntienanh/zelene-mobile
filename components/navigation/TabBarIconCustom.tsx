import React from 'react';
import { View } from 'react-native';
import { SvgProps } from 'react-native-svg';

type IconProps = {
  focused: boolean;
  color: string;
  size?: number;
  Icon: React.FC<SvgProps>;
};

export default function TabBarIconCustom({ focused, color, size = 24, Icon }: IconProps) {
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Icon width={size} height={size} fill={color} stroke={color} />
    </View>
  );
}
