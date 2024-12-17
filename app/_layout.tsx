import { Stack } from "expo-router";
import "../global.css";
import {
	DarkTheme,
	DefaultTheme,
	ThemeProvider,
} from "@react-navigation/native";
import "expo-router/entry";
import { useColorScheme } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
	const colorScheme = useColorScheme();
	return (
		<ThemeProvider
			value={colorScheme === "dark" ? DarkTheme : DefaultTheme}
		>
			<Stack>
				<Stack.Screen name="(pages)" options={{ headerShown: false, animation: 'slide_from_left' }} />
				<Stack.Screen
					name="register"
					options={{ headerShown: false, animation: 'slide_from_right' }}
				/>
				<Stack.Screen name="+not-found" />
			</Stack>
			<StatusBar style="auto" />
		</ThemeProvider>
	);
}
