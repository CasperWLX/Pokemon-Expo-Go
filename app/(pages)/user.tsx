import {
	View,
	ImageBackground,
	KeyboardAvoidingView,
	Platform,
} from "react-native";
import React from "react";
import Login from "@/components/user/Login";
import userService from "@/service/userService";
import UserInfo from "@/components/user/UserInfo";

const index = () => {
	const { loggedInUser } = userService();

	return (
		<ImageBackground
			className="h-screen-safe w-screen"
			source={require("@/assets/images/userbackground.webp")}
            style={{flex: 1}}
		>
			{loggedInUser.username === undefined ? (
				<KeyboardAvoidingView
					behavior={Platform.OS === "ios" ? "padding" : "height"}
                    style={{flex: 1}}
				>
					<View className="flex-grow p-4 justify-center items-center">
						<View className="items-center w-full">
							<Login />
						</View>
					</View>
				</KeyboardAvoidingView>
			) : (
				<View className="flex-1 justify-center mt-12 p-4 color-black">
					<UserInfo />
				</View>
			)}
		</ImageBackground>
	);
};

export default index;
