import { View, Text, TouchableOpacity, TextInput, Keyboard } from "react-native";
import { router } from "expo-router";
import Headline from "./Headline";
import React, { useState, useEffect } from "react";
import userService from "@/service/userService";
import LoadingCircle from "../LoadingCircle";

const Register = () => {
	const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const [allowRegister, setAllow] = useState<boolean>(false);

    const { register } = userService();

    useEffect(() => {
        const usernameIsAllowed = username.length > 4 && username.length < 16;
        const passwordIsAllowed = password.length > 4 && password === repeatPassword;

        setAllow(usernameIsAllowed && passwordIsAllowed);
    }, [password, repeatPassword, username]);

    const handleSubmit = async () => {
        setLoading(true);
        const result = await register(username, password);
        if (result) {
            alert("You've successfully registered");
            cleanInputs();
            Keyboard.dismiss();
            router.push("/(pages)/login");
        } else {
            alert("A user with that name already exists");
        }
        setLoading(false);
    };

    const cleanInputs = () => {
        setPassword("")
        setRepeatPassword("")
        setUsername("")
    }

    if(loading){
        return (
			<View className="h-full items-center justify-center">
				<LoadingCircle />
			</View>
		);
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
                {password.length < 4 ? (
                    <Text
					className="text-red-500 m-2"
				>
					Passwords is too short
				</Text>
                ) : (
                <Text
					className="text-red-500 m-2"
					style={{
						opacity:
							password !== repeatPassword
								? 1
								: 0,
					}}
				>
					Passwords do not match
				</Text>)}
				
				<Text
					className="text-red-500 p-2"
					style={{
						opacity: username.length > 0 && (username.length < 5 || username.length > 15) ? 1 : 0,
					}}
				>
					Username needs to be 5-15 characters
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
