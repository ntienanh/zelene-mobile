import { SvgXml } from 'react-native-svg';
import { View } from 'react-native';

// Import SVGs
import ShopIcon from '../assets/svgs/Shop.svg';
import ShopFillIcon from '../assets/svgs/Shop_fill.svg';
import HomeIcon from '../assets/svgs/Home.svg';
import HomeFillIcon from '../assets/svgs/Home_fill.svg';
import UserIcon from '../assets/svgs/User.svg';
import UserFillIcon from '../assets/svgs/User_fill.svg';
import PromotionIcon from '../assets/svgs/Promotion.svg';
import PromotionFillIcon from '../assets/svgs/Promotion_fill.svg';

const icons = {
  shop: {
    default: ShopIcon,
    fill: ShopFillIcon
  },
  home: {
    default: HomeIcon,
    fill: HomeFillIcon
  },
  user: {
    default: UserIcon,
    fill: UserFillIcon
  },
  promotion: {
    default: PromotionIcon,
    fill: PromotionFillIcon
  }
};

export const TabBarIcon = ({ name, focused, color, size = 24 }) => {
  const Icon = focused ? icons[name]?.fill : icons[name]?.default;
  
  if (!Icon) {
    console.warn(`Icon "${name}" not found`);
    return null;
  }

  return (
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <Icon width={size} height={size} color={color} />
    </View>
  );
};