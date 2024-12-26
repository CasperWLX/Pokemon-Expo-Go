import React from "react";
import { View, Image, StyleSheet, ActivityIndicator } from "react-native";

const LoadingCircle = () => {
	return (
		<View className="items-center flex-1 justify-center">
			<ActivityIndicator size={"large"} color={"white"} />
		</View>
	);
};

export default LoadingCircle;
