import { View, Text, TextInput, TouchableOpacity} from "react-native";
import { Link } from "expo-router";
import React, { useState } from "react";
import Headline from "./Headline";

const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	return (
		<View className="flex flex-col items-center bg-primary w-full p-4 rounded-lg">
			<Headline title="Sign In" />
			<View className="items-center mt-8 justify-center">
				<TextInput
					className="p-2 border-2 border-black min-w-full rounded-lg m-4"
					placeholder="Username"
					value={username}
					onChangeText={(text) => setUsername(text)}
				/>
				<TextInput
					className="p-2 border-2 border-black min-w-full rounded-lg m-4"
					placeholder="Password"
					value={password}
					onChangeText={(text) => setPassword(text)}
					secureTextEntry
				/>
				<TouchableOpacity className="rounded-full bg-secondary p-4 min-w-full items-center">
					<Text className="font-bold">Log in</Text>
				</TouchableOpacity>

				<Text className="mt-4">Don't have an account yet?</Text>
				<TouchableOpacity className="hover:underline">
					<Link href={"/register"}>
						<Text className="color-accent">Register now</Text>
					</Link>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default Login;
