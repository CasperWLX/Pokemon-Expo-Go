import { View, Text } from "react-native";
import { useFonts, Poppins_700Bold } from "@expo-google-fonts/poppins";
import { LinearGradient } from "expo-linear-gradient";

const Headline = ({ title }: { title: string }) => {
	const [fontsLoaded] = useFonts({
		Poppins_700Bold,
	});

	if (!fontsLoaded) return null;

	return (
		<View>
			<Text
				style={{
					fontFamily: "Poppins_700Bold",
					fontSize: 40,
					textAlign: "center",
				}}
			>
				{title}
			</Text>
		</View>
	);
};

export default Headline;
