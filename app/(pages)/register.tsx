import React, { useEffect } from "react";
import {
	View,
	Text,
	ImageBackground,
	KeyboardAvoidingView,
	Platform,
	BackHandler,
	TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";

import Register from "@/components/user/Register";

const RegisterScreen = () => {
	const router = useRouter();

	// Handle hardware back button for Android
	useEffect(() => {
		const backAction = () => {
			if (Platform.OS === "android") {
				router.push("/user");
				return true;
			}
			return false;
		};

		const backHandler = BackHandler.addEventListener(
			"hardwareBackPress",
			backAction
		);

		return () => backHandler.remove();
	}, [router]);

	return (
		<ImageBackground
			className="h-screen-safe w-screen"
			source={require("@/assets/images/userbackground.webp")}
			resizeMode="cover"
		>
			<KeyboardAvoidingView
				behavior={Platform.OS === "ios" ? "padding" : "height"}
				style={{ flex: 1, width: "100%" }}
			>
				{/* Main Content */}
				<View className="flex-1 justify-center items-center p-4">
					<View className="w-full items-center">
						<Register />
					</View>
				</View>
			</KeyboardAvoidingView>
		</ImageBackground>
	);
};

export default RegisterScreen;
