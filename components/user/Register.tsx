import { View, Text, TouchableOpacity, TextInput } from "react-native";
import Headline from "./Headline";
import React, { useState, useEffect } from "react";
import userService from "@/service/userService";

const Register = () => {
	const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [repeatPassword, setReapeatPassword] = useState("")

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
            alert("You've successfully registered"); //Keyboard dismiss, clear input fields

        } else {
            alert("A user with that name already exists");
        }
    };

	return (
		<View className="flex flex-col items-center bg-primary w-full p-4 rounded-lg">
			<Headline title="Register" />
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
                <TextInput
					className="p-2 border-2 border-black min-w-full rounded-lg m-4"
					placeholder="Repeat Password"
                    placeholderTextColor="gray"
					value={repeatPassword}
					onChangeText={(text) => setReapeatPassword(text)}
					secureTextEntry
				/>
				<TouchableOpacity disabled={!allowRegister} onPress={handleSubmit} className={`rounded-full  p-4 min-w-full items-center ${allowRegister ? "bg-secondary" : "bg-gray-400"}`}>
					<Text className="font-bold">Register</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default Register;
