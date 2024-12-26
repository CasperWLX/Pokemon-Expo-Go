import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	Keyboard,
} from "react-native";
import { Link, router } from "expo-router";
import React, { useEffect, useState } from "react";
import Headline from "./Headline";
import userService from "@/service/userService";
import LoadingCircle from "../LoadingCircle";

const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [isAllowed, setAllow] = useState(false);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setAllow(password.length > 0 && username.length > 0);
	}, [username, password]);

	const { login, getUserInfo } = userService();

	const handleLogin = async () => {
		try {
			setLoading(true);
			console.log("we try log in");
			const loginSuccesfull = await login(username, password);
			if (loginSuccesfull) {
				cleanInputs();
				getUserInfo();
				router.push("/(pages)/user");
			} else {
				alert("Password or Username is wrong");
			}
		} catch (error) {
			console.log(error);
		}
		setLoading(false);
	};

	const cleanInputs = () => {
		setUsername("");
		setPassword("");
	};
	if (loading) {
		return (
			<View className="h-full items-center justify-center">
				<LoadingCircle />
			</View>
		);
	}

	return (
		<View className="flex-col items-center bg-primary w-full p-4 rounded-lg">
			<Headline title="Sign In" />
			<View className="items-center mt-8 justify-center">
				<TextInput
					className="p-2 border-2 border-black min-w-full rounded-lg m-4"
					placeholder="Username"
					placeholderTextColor="gray"
					value={username}
					onChangeText={(text) => setUsername(text)}
				/>
				<TextInput
					className="p-2 border-2 border-black min-w-full rounded-lg m-4"
					placeholder="Password"
					placeholderTextColor="gray"
					value={password}
					onChangeText={(text) => setPassword(text)}
					secureTextEntry
				/>
				<TouchableOpacity
					onPress={handleLogin}
					disabled={!isAllowed}
					className={`rounded-full  p-4 min-w-full items-center ${
						isAllowed ? "bg-secondary" : "bg-gray-400"
					}`}
				>
					<Text className="font-bold">Log in</Text>
				</TouchableOpacity>

				<Text className="mt-4">Don't have an account yet?</Text>
				<TouchableOpacity className="hover:underline">
					<Link href={"/register"} onPress={Keyboard.dismiss}>
						<Text className="color-accent">Register now</Text>
					</Link>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default Login;
