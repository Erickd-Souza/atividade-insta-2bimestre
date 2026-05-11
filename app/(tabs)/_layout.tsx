import { Tabs } from 'expo-router';
import React from 'react';
import { Image, StyleSheet } from 'react-native';

import { HapticTab } from '@/components/haptic-tab';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

const styles = StyleSheet.create({
	fotoPerfil: {
		width: 24,
		height: 24,
		borderRadius: 200,
	},
});

export default function TabLayout() {
	const colorScheme = useColorScheme();

	return (
		<Tabs
			screenOptions={{
				//tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
				headerShown: false,
				tabBarButton: HapticTab,
			}} initialRouteName='home'>
			<Tabs.Screen
				name="home"
				options={{
					title: 'Home',
					tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
				}}
			/>
			<Tabs.Screen
				name="perfil"
				options={{
					title: 'Perfil',
					tabBarIcon: ({ color }) => <Image style={styles.fotoPerfil} source={{uri: "https://picsum.photos/200",}}/>,
				}}
			/>
		</Tabs>
	);
}
