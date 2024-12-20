import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import userService from "@/service/userService";
import Headline from "./Headline";
import pokemonService from "@/service/pokemonService";

const UserInfo = () => {
	const { loggedInUser, logout } = userService();
	const { listOfAllPokemon } = pokemonService();
	const [sortedGuessedPokemon, setSortedGuessedPokemon] = useState<
		[`${string}`, number][] // Array of [pokemonName, count]
	>([]);

	const handleLogout = () => {
		logout();
	};

	useEffect(() => {
		if (loggedInUser && loggedInUser.guessedPokemon) {
			const sortedList = Object.entries(loggedInUser.guessedPokemon).sort(
				([, countA], [, countB]) => countB - countA
			);
			setSortedGuessedPokemon(sortedList);
		}
	}, [loggedInUser, listOfAllPokemon]);

	return (
		<ScrollView
			contentContainerClassName="w-full"
			showsVerticalScrollIndicator={false}
		>
			<View className="flex flex-col items-center bg-primary w-full p-4 rounded-lg mb-2">
				<Headline title="Hello!" />
				<View
					className="p-4 bg-secondary rounded-lg shadow-lg shadow-black"
					style={{ boxShadow: "20px" }}
				>
					<Text className="p-2">
						Welcome to your page{" "}
						<Text className="font-bold">
							{loggedInUser.username}
						</Text>
					</Text>
					<Text className="p-2">
						Your best attempt is: {loggedInUser.bestAttempt}
					</Text>
					<Text className="p-2">
						Your total number of attempts are:{" "}
						{loggedInUser.numberOfAttempts}
					</Text>
				</View>
			</View>

			<View className="flex flex-col items-center bg-primary w-full p-4 rounded-lg mb-2">
				<Headline title="Statistics" />
				<View
					className="p-4 bg-secondary rounded-lg shadow-lg shadow-black"
					style={{ boxShadow: "20px" }}
				>
					{sortedGuessedPokemon.length === 0 ? (
						<View>
							<Text className="p-2">
								You don't have any guesses yet.
							</Text>
							<Text className="p-2">
								Let's head to the home page and start playing!
							</Text>
						</View>
					) : (
						<View>
							<Text className="font-bold mb-4">
								Your guessed Pokémon:
							</Text>
							{sortedGuessedPokemon.map(
								([pokemonName, count]) => {
									const pokemonDetails =
										listOfAllPokemon.find(
											(pokemon) =>
												pokemon.name.toLowerCase() ===
												pokemonName.toLowerCase()
										);

									return (
										<View
											key={pokemonName}
											className="flex flex-row items-center mb-4"
										>
											{pokemonDetails && (
												<Image
													source={{
														uri: pokemonDetails.imgURL,
													}}
													className="w-12 h-12 mr-4"
												/>
											)}
											<Text className="font-bold">
												{pokemonName}
											</Text>
											<Text className="ml-2">
												- {count} time
												{count > 1 ? "s" : ""}
											</Text>
										</View>
									);
								}
							)}
						</View>
					)}
				</View>
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
