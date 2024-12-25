import { View, ImageBackground } from "react-native";
import React from "react";
import UserInfo from "@/components/user/UserInfo";

const index = () => {


	return (
		<ImageBackground
			className="h-screen-safe w-screen"
			source={require("@/assets/images/userbackground.webp")}
			style={{ flex: 1 }}
		>
			<View className="flex-1 p-4 mb-4 mt-6 color-black">
				<UserInfo />
			</View>
		</ImageBackground>
	);
};

export default index;
