import { View, Text, TouchableOpacity, TextInput, Keyboard } from "react-native";
import { router } from "expo-router";
import Headline from "./Headline";
import React, { useState, useEffect } from "react";
import userService from "@/service/userService";

const Register = () => {
	const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");

    const [allowRegister, setAllow] = useState<boolean>(false);

    const { register } = userService();

    useEffect(() => {
        setAllow(
            password === repeatPassword &&
                password.length > 4 &&
                username.length > 4
        );
    }, [password, repeatPassword, username]);

    const handleSubmit = async () => {
        const result = await register(username, password);
        if (result) {
            alert("You've successfully registered");
            cleanInputs();
            Keyboard.dismiss();
            router.push("/(pages)/user");
        } else {
            alert("A user with that name already exists");
        }
    };

    const cleanInputs = () => {
        setPassword("")
        setRepeatPassword("")
        setUsername("")
    }

	return (
		<View className="flex flex-col items-center bg-primary w-full p-4 rounded-lg">
			<Headline title="Register" />
			<View className="items-center mt-8 justify-center">
				<TextInput
					className="p-2 border-2 border-black min-w-full rounded-lg m-2"
					placeholder="Username"
					placeholderTextColor="gray"
					value={username}
					onChangeText={(text) => setUsername(text)}
				/>
				<TextInput
					className="p-2 border-2 border-black min-w-full rounded-lg m-2"
					placeholder="Password"
					placeholderTextColor="gray"
					value={password}
					onChangeText={(text) => setPassword(text)}
					secureTextEntry
				/>
				<TextInput
					className="p-2 border-2 border-black min-w-full rounded-lg m-2"
					placeholder="Repeat Password"
					placeholderTextColor="gray"
					value={repeatPassword}
					onChangeText={(text) => setRepeatPassword(text)}
					secureTextEntry
				/>
				{/* Error Messages */}
				<Text
					className="text-red-500 m-2"
					style={{
						opacity:
							password !== repeatPassword &&
							password.length > 4 &&
							repeatPassword.length > 4
								? 1
								: 0,
					}}
				>
					Passwords do not match
				</Text>
				<Text
					className="text-red-500 p-2"
					style={{
						opacity: username.length < 5 && password.length === password.length && password.length > 4 ? 1 : 0,
					}}
				>
					Username too short
				</Text>
				<TouchableOpacity
					disabled={!allowRegister}
					onPress={handleSubmit}
					className={`rounded-full p-4 min-w-full items-center ${
						allowRegister ? "bg-secondary" : "bg-gray-400"
					}`}
				>
					<Text className="font-bold">Register</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default Register;
