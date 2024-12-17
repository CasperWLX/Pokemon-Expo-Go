import { View, Text, TouchableOpacity, TextInput } from "react-native";
import Headline from "./Headline";
import React, { useState } from "react";

const Register = () => {
	const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [repeatPassword, setReapeatPassword] = useState("")

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
                <TextInput
					className="p-2 border-2 border-black min-w-full rounded-lg m-4"
					placeholder="Repeat Password"
					value={repeatPassword}
					onChangeText={(text) => setReapeatPassword(text)}
					secureTextEntry
				/>
				<TouchableOpacity className="rounded-full bg-secondary p-4 min-w-full items-center">
					<Text className="font-bold">Register</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default Register;
