import { View, Text } from "react-native";
import React from "react";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

const user = () => {
	return (
		<ThemedView className="flex-1 justify-center items-center">
			<View className="flex-row">
				<ThemedText>Text2</ThemedText>
				<ThemedText>Text2</ThemedText>
			</View>
		</ThemedView>
	);
};

export default user;
