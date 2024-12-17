import { View, ImageBackground, KeyboardAvoidingView, ScrollView, Platform } from "react-native";
import React from "react";
import Login from "@/components/user/Login";

const user = () => {
	return (
		<ImageBackground
			className="h-screen-safe w-screen"
			source={require("@/assets/images/userbackground.webp")}
		>
			<KeyboardAvoidingView
				behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={{flex: 1}}
			>
				<ScrollView
					contentContainerClassName="flex-grow justify-center items-center p-4"
					keyboardShouldPersistTaps="handled"
				>
					<View className="w-full items-center">
						<Login />
					</View>
				</ScrollView>
			</KeyboardAvoidingView>
		</ImageBackground>
	);
};

export default user;
