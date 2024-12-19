import {
	View,
	ImageBackground,
	KeyboardAvoidingView,
	Platform,
} from "react-native";
import React, { useEffect } from "react";
import Login from "@/components/user/Login";
import userService from "@/service/userService";
import UserInfo from "@/components/user/UserInfo";

const index = () => {
	const { loggedInUser } = userService();

	return (
		<ImageBackground
			className="h-screen-safe w-screen"
			source={require("@/assets/images/userbackground.webp")}
		>
			<KeyboardAvoidingView
				behavior={Platform.OS === "ios" ? "padding" : "height"}
				style={{ flex: 1 }}
			>
				<View className="flex-grow justify-center items-center p-4">
					<View className="w-full items-center mt-12">
						{loggedInUser.username === undefined ? (
							<Login />
						) : (
							<UserInfo />
						)}
					</View>
				</View>
			</KeyboardAvoidingView>
		</ImageBackground>
	);
};

export default index;
