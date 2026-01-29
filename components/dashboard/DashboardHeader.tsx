import { IconSymbol } from '@/components/ui/IconSymbol';
import { Colors } from '@/constants/Colors';
import { getFontFamily } from '@/constants/Fonts';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function DashboardHeader() {
  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  });

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 18) return 'Good afternoon';
    return 'Good evening';
  };

  const profile = {
    name: 'John Doe',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA8_iomKTN2Ginqu1XE8pmZtfmXgRPiU2dTHVLD8VtIDWBiQMpAHDwDfuEkJy-mON5Ci2KllSJrrsrN6Oib_6V29nRiZrIC3cWpwTu7mXuNucBeLaxorLfW6tZW8wEebLql2mkkmoal6dpGThnIIaO2JQFumBz-AUNEBH_-ZuaXL8-41bSarJCDS0dwehoR335NIYIAT88UfTshiuDhqX33TTSsvzOWpRQmMa1CBGcr1kZWgcdnFKAXbZdKCFnZp_FzDaDo4nGUyY1_',
  };

  return (
    <View style={styles.container}>
      <View style={styles.leftSection}>
        <View style={styles.profileContainer}>
          <Image source={{ uri: profile.image }} style={styles.profileImage} />
        </View>
        <View style={styles.greetingContainer}>
          <Text style={styles.greeting}>{getGreeting()}</Text>
          <Text style={styles.date}>{today}</Text>
        </View>
      </View>
      <View style={styles.rightSection}>
        <TouchableOpacity style={styles.iconButton}>
          <IconSymbol size={24} name="gear" color={Colors.text.tertiary} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 20,
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  profileContainer: {
    marginRight: 12,
  },
  profileImage: {
    width: 48,
    height: 48,
    borderRadius: 24,
    borderWidth: 2,
    borderColor: Colors.accent.primary,
  },
  greetingContainer: {
    flex: 1,
  },
  greeting: {
    fontSize: 24,
    fontFamily: getFontFamily('spaceGrotesk', 'bold'),
    color: Colors.text.primary,
    marginBottom: 2,
  },
  date: {
    fontSize: 14,
    fontFamily: getFontFamily('notoSans', 'regular'),
    color: Colors.text.secondary,
  },
  rightSection: {
    flexDirection: 'row',
    gap: 12,
  },
  iconButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: Colors.surface.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.border.primary,
  },
});
