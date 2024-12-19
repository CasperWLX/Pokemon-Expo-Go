import React, { useEffect } from "react";
import { Tabs } from "expo-router";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { Platform } from "react-native";
import { useColorScheme } from "react-native";
import { Colors } from "@/constants/Colors";
import userService from "@/service/userService";

const _layout = () => {
	const colorScheme = useColorScheme();
    const {loggedInUser} = userService();

    useEffect(() => {

    },[loggedInUser] )

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
					title: `${loggedInUser.username === undefined ? "User" : loggedInUser.username}`,
					tabBarIcon: ({ color }) => (
						<IconSymbol size={28} name="user.fill" color={color} />
					),
				}}
			/>
            <Tabs.Screen
				name="register"
				options={{
					title: "Register",
                    href: null,
				}}
			/>
		</Tabs>
	);
};

export default _layout;
