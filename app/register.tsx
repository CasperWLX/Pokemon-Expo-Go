import React, { useEffect } from "react";
import {
	View,
	Text,
	ImageBackground,
	KeyboardAvoidingView,
	ScrollView,
	Platform,
	BackHandler,
} from "react-native";
import { Link, useRouter } from "expo-router";
import Register from "@/components/user/Register";
import { IconSymbol } from "@/components/ui/IconSymbol";

const RegisterScreen = () => {
	const router = useRouter();

	useEffect(() => {
		const backAction = () => {
			// Navigate back using Expo Router's router
			router.replace("/user"); // Replace this with your intended route
			return true; // Return true to prevent the default back action
		};

		const backHandler = BackHandler.addEventListener(
			"hardwareBackPress",
			backAction
		);

		// Cleanup the listener on component unmount
		return () => backHandler.remove();
	}, [router]);

	return (
		<ImageBackground
			className="h-screen-safe w-screen"
			source={require("@/assets/images/userbackground.webp")}
		>
			<KeyboardAvoidingView
				behavior={Platform.OS === "ios" ? "padding" : "height"}
				style={{ flex: 1 }}
			>
				<ScrollView
					contentContainerClassName="flex-1 justify-center items-center p-4"
					keyboardShouldPersistTaps="handled"
				>
					<Link
						href={"/user"}
						className="absolute top-20 right-3 p-4 bg-secondary rounded-full color-black"
					>
						<IconSymbol name="arrow.fill" size={15} />
						<Text className="ml-5 p-2">Go back</Text>
					</Link>
					<View className="w-full items-center">
						<Register />
					</View>
				</ScrollView>
			</KeyboardAvoidingView>
		</ImageBackground>
	);
};

export default RegisterScreen;
