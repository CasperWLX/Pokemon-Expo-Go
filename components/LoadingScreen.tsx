import {
	View,
	Image,
	ActivityIndicator,
} from "react-native";
import React from "react";

const LoadingScreen = () => {
	return (
		<View className="flex-1 items-center justify-center bg-white">
			<Image
				source={require("@/assets/images/splash.png")}
				style={{ resizeMode: "contain", height: 240 }}
			/>
			<View className="absolute" style={{left: 173, top: 326}}>
				<ActivityIndicator size={"large"} color={"black"} />
			</View>
		</View>
	);
};

export default LoadingScreen;
