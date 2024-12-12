import React from "react";
import { Tabs } from "expo-router";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { Platform, StyleSheet } from "react-native";
import { useColorScheme } from "react-native";
import { Colors } from "@/constants/Colors";

const _layout = () => {
	const colorScheme = useColorScheme();

	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
				headerShown: false,
				tabBarStyle: Platform.select({
					ios: {
						position: "absolute",
					},
					default: {},
				}),
			}}
		>
			<Tabs.Screen
				name="index"
				options={{
					title: "Home",
					tabBarIcon: ({ color }) => (
						<IconSymbol size={28} name="house.fill" color={color} />
					),
				}}
			/>
			<Tabs.Screen
				name="user"
				options={{
					title: "User",
					tabBarIcon: ({ color }) => (
						<IconSymbol size={28} name="user.fill" color={color} />
					),
				}}
			/>
		</Tabs>
	);
};

export default _layout;
