import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Text, View } from 'react-native';
import Home from '../../assets/svgs/Home.svg';
import HomeFill from '../../assets/svgs/Home fill.svg';
import TabBarIconCustom from '@/components/navigation/TabBarIconCustom';
import HomeIcon from '../../components/Icons/HomeIcon';
import ShopIcon from '@/components/Icons/ShopIcon';
import TagIcon from '@/components/Icons/TagIcon';
import CardIcon from '@/components/Icons/CardIcon';
import BookingIcon from '@/components/Icons/BookingIcon';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarStyle: {
          height: 100,
          padding: 8,
          position: 'absolute',
          borderRadius: 22,
          borderTopWidth: 0,
          marginBottom: 20,
          alignContent: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          width: '90%',
          marginLeft: 16,
          marginRight: 16,
          shadowColor: 'rgba(184, 78, 68, 0.20)',
          shadowOpacity: 25,
          shadowRadius: 0,
          backgroundColor: '#FFFDF9',
          shadowOffset: '0px 0px',
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarLabel: '', // This hides the label
          tabBarIcon: ({ color, focused }) => (
            <View className="flex flex-col items-center justify-center">
              <HomeIcon focused={focused} />
              <Text className={focused ? 'text-[#B84E44]' : 'text-[#1D3F75]'}>Home</Text>
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="explore"
        options={{
          title: 'Shop',
          tabBarLabel: '', // This hides the label
          tabBarIcon: ({ color, focused }) => (
            <View className="flex flex-col items-center justify-center">
              <ShopIcon focused={focused} />
              <Text className={focused ? 'text-[#B84E44]' : 'text-[#1D3F75]'}>Shop</Text>
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="card"
        options={{
          title: 'Card',
          tabBarLabel: '', // This hides the label
          tabBarIcon: ({ color, focused }) => (
            <View className="flex flex-col items-center justify-center">
              <CardIcon focused={focused} />
              <Text className={focused ? 'text-[#B84E44]' : 'text-[#1D3F75]'}>Point card</Text>
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="booking"
        options={{
          title: 'Card',
          tabBarLabel: '', // This hides the label
          tabBarIcon: ({ color, focused }) => (
            <View className="flex flex-col items-center justify-center">
              <BookingIcon focused={focused} />
              <Text className={focused ? 'text-[#B84E44]' : 'text-[#1D3F75]'}>Booking</Text>
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="account"
        options={{
          title: 'Card',
          tabBarLabel: '', // This hides the label
          tabBarIcon: ({ color, focused }) => (
            <View className="flex flex-col items-center justify-center">
              <BookingIcon focused={focused} />
              <Text className={focused ? 'text-[#B84E44]' : 'text-[#1D3F75]'}>Account</Text>
            </View>
          ),
        }}
      />
    </Tabs>
  );
}
