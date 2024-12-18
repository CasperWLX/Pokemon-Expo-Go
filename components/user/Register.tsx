import { View, Text, TouchableOpacity, TextInput } from "react-native";
import Headline from "./Headline";
import React, { useState, useEffect } from "react";

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

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        const result = await register(username, password);
        if (result) {
            alert("You've successfully registered");
        } else {
            alert("A user with that name already exists");
        }
    };

	return (
		<View className="flex flex-col items-center bg-primary w-full p-4 rounded-lg">
			<Headline title="Regsiter" />
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
				<TouchableOpacity disabled={allowRegister} className="rounded-full bg-secondary p-4 min-w-full items-center">
					<Text className="font-bold">Register</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default Register;
