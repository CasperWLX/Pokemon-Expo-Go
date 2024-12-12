import TextContent from "@/components/TextContent";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { View } from "react-native";

export default function Index() {
	return (
		<ThemedView className="flex-1 justify-center items-center">
			<View className="flex-row">
				<ThemedText>Text</ThemedText>
				<ThemedText>Text</ThemedText>
			</View>
		</ThemedView>
	);
}
