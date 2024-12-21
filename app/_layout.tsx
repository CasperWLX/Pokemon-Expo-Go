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
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function RootLayout() {
	const colorScheme = useColorScheme();
	return (
		<GestureHandlerRootView style={{ flex: 1 }}>
			<ThemeProvider
				value={colorScheme === "dark" ? DarkTheme : DefaultTheme}
			>
				<Stack>
					<Stack.Screen
						name="(pages)"
						options={{
							headerShown: false,
							gestureEnabled: true,
						}}
					/>
					<Stack.Screen name="+not-found" />
				</Stack>
				<StatusBar style="auto" />
			</ThemeProvider>
		</GestureHandlerRootView>
	);
}
