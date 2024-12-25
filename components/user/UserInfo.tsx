import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import userService from "@/service/userService";
import Headline from "./Headline";
import pokemonService from "@/service/pokemonService";
import { router } from "expo-router";
import LoadingCircle from "../LoadingCircle";

const UserInfo = () => {
	const { loggedInUser, logout } = userService();
	const { listOfAllPokemon } = pokemonService();
	const [sortedGuessedPokemon, setSortedGuessedPokemon] = useState<
		[`${string}`, number][] // Array of [pokemonName, count]
	>([]);

	const handleLogout = () => {
		setSortedGuessedPokemon([]); //Need this, otherwise new users get old users stats.
		logout();
		router.push("/(pages)/login");
	};

	useEffect(() => {
		if (loggedInUser && loggedInUser.guessedPokemon) {
			const sortedList = Object.entries(loggedInUser.guessedPokemon).sort(
				([, countA], [, countB]) => countB - countA
			);
			setSortedGuessedPokemon(sortedList);
		}
	}, [loggedInUser, listOfAllPokemon]);

	if (loggedInUser.username === undefined) {
		return (
			<View className="h-full items-center justify-center">
				<LoadingCircle />
			</View>
		);
	}

	return (
		<View className="flex-col mb-24">
			<View className="items-center bg-primary w-full p-4 rounded-lg mb-2">
				<Headline title="Hello!" />
				<View
					className="p-4 w-full bg-secondary rounded-lg shadow-lg shadow-black"
					style={{ boxShadow: "20px" }}
				>
					<Text className="py-2">
						Welcome to your page{" "}
						<Text className="font-bold">
                            Aaaaaaaaaaaaaaa
						</Text>
					</Text>

					<Text className="py-2">
						Your best attempt is:{" "}
						<Text className="font-bold">
							{loggedInUser.bestAttempt}
						</Text>
					</Text>
					<Text className="py-2">
						Your total number of attempts are:{" "}
						<Text className="font-bold">
							{loggedInUser.numberOfAttempts}
						</Text>
					</Text>
				</View>
			</View>

			<View className="w-full items-center bg-primary p-4 rounded-lg mb-2 overflow-hidden h-3/5">
				<View
					className="p-4 w-full bg-secondary rounded-lg shadow-lg shadow-black overflow-hidden"
					style={{ maxHeight: "100%" }}
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
							<Text className="font-bold mb-4 text-center text-xl">
								Your favorite guesses are:
							</Text>
							<ScrollView contentContainerClassName="pb-4">
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
												className="flex-row items-center justify-start mb-4 border-black border-b-2"
											>
												<Image
													source={{
														uri: pokemonDetails?.imgURL,
													}}
													className="h-16 w-16 mr-4 p-2"
												/>

												<Text className="font-bold w-24">
													{pokemonName}
												</Text>
												<Text className="ml-2">
													: {count} time
													{count > 1 ? "s" : ""}
												</Text>
											</View>
										);
									}
								)}
							</ScrollView>
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
		</View>
	);
};

export default UserInfo;
