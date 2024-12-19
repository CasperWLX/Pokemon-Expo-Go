import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import userService from "@/service/userService";
import Headline from "./Headline";

const UserInfo = () => {
	const { loggedInUser, logout } = userService();

    const handleLogout = () => {
        logout();
    }

	return (
		<ScrollView
			contentContainerClassName="flex-col flex-1 justify-center"
			horizontal={false}
		>
			<View className="flex flex-col items-center bg-primary w-full p-4 rounded-lg mb-2">
                <Headline title="Hello!"/>
				<View
					className="p-4 bg-secondary rounded-lg shadow-lg shadow-black"
					style={{ boxShadow: "20px" }}
				>
					<Text className="p-2">
						Welcome to your page {loggedInUser.username}
					</Text>

                    <Text>
						Your best attempt is:{" "} {loggedInUser.bestAttempt}
					</Text>
					<Text>
						Your total number of attempts are:{" "}
						{loggedInUser.numberOfAttempts}
					</Text>
				</View>
			</View>
			<View className="flex flex-col items-center bg-primary w-full p-4 rounded-lg mb-2">
                <Headline title="Log Out" />
			</View>
            <TouchableOpacity
						onPress={handleLogout}
						className="rounded-full p-4 min-w-full items-center bg-secondary"
					>
						<Text className="font-bold">Log out</Text>
					</TouchableOpacity>
		</ScrollView>
	);
};

export default UserInfo;
