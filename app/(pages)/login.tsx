import { View, Text, KeyboardAvoidingView, Platform } from "react-native";
import React from "react";
import Login from "@/components/user/Login";
import { ImageBackground } from "react-native";


const login = () => {
	return (
		<ImageBackground
			className="h-screen-safe w-screen"
			source={require("@/assets/images/userbackground.webp")}
			style={{ flex: 1 }}
		>
			<KeyboardAvoidingView
				behavior={Platform.OS === "ios" ? "padding" : "height"}
				style={{ flex: 1 }}
			>
				<View className="flex-grow p-4 justify-center items-center">
					<View className="items-center w-full">
						<Login />
					</View>
				</View>
			</KeyboardAvoidingView>
		</ImageBackground>
	);
};

export default login;
