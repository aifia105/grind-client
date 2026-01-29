import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { getFontFamily } from '@/constants/Fonts';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.accent.primary, 
        tabBarInactiveTintColor: Colors.text.tertiary, 
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: true, 
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            position: 'absolute',
            backgroundColor: Colors.surface.primary, 
            borderTopWidth: 1,
            borderTopColor: Colors.border.primary, 
            height: 88,
            paddingBottom: 34,
            paddingTop: 8,
            paddingHorizontal: 16,
          },
          default: {
            backgroundColor: Colors.surface.primary, 
            borderTopWidth: 1,
            borderTopColor: Colors.border.primary, 
            borderRadius: 2,
            elevation: 0,
            height: 70,
            paddingBottom: 8,
            paddingTop: 4,
            paddingHorizontal: 12,
          },
        }),
        tabBarLabelStyle: {
          fontSize: 11,
          fontFamily: getFontFamily('spaceGrotesk', 'medium'),
          marginTop: 4,
          marginBottom: -5,
        },
        tabBarIconStyle: {
          marginBottom: 0,
        },
      }}>
        <Tabs.Screen
          name="index"
          options={{
            title: 'Home',
            tabBarIcon: ({ color }) => <IconSymbol size={24} name="house.fill" color={color} />,
          }}
        />
      <Tabs.Screen
        name="training"
        options={{
          title: 'Training',
          tabBarIcon: ({ color }) => <IconSymbol size={22} name="dumbbell.fill" color={color} />,
        }}
      />
        <Tabs.Screen
          name="library"
          options={{
            title: 'Library',
            tabBarIcon: ({ color }) => <IconSymbol size={22} name="book.fill" color={color} />,
          }}
        />
      <Tabs.Screen
        name="meals"
        options={{
          title: 'Nutrition',
          tabBarIcon: ({ color }) => <IconSymbol size={22} name="meals" color={color} />,
        }}
      />
       <Tabs.Screen
        name="sleep"
        options={{
          title: 'Sleep',
          tabBarIcon: ({ color }) => <IconSymbol size={22} name="sleep" color={color} />,
        }}
      />
        <Tabs.Screen
          name="calendar"
          options={{
            title: 'Calendar',
            tabBarIcon: ({ color }) => <IconSymbol size={22} name="calendar" color={color} />,
          }}
        />
    </Tabs>
  );
}
