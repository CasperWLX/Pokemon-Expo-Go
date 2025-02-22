import React, { useEffect, useState, useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";
import { View, ImageBackground, Text, TouchableOpacity } from "react-native";
import pokemonService from "@/service/pokemonService";
import userService from "@/service/userService";
import GuessBox from "@/components/pokemon/GuessBox";
import PreviousGuessesBox from "@/components/pokemon/PreviousGuessesBox";
import LoadingScreen from "@/components/LoadingScreen";

export default function Index() {
	const [appIsReady, setAppIsReady] = useState(false);

	const {
		fetchOnePokemon,
		setPokemonToGuess,
		cleanArray,
		fetchAllPokemon,
		listOfGuessedPokemon,
		pokemonToGuess,
		listOfAllPokemon,
	} = pokemonService();

	const { updateUser, loggedInUser, refreshTokens, getUserInfo } =
		userService();

	useEffect(() => {
		async function prepare() {
			try {
				await fetchRandomPokemon();
				if (listOfAllPokemon.length === 0) {
					fetchAllPokemon();
				}
				const tokensRefreshed = await refreshTokens();
				if (tokensRefreshed) {
					getUserInfo();
				}
			} catch (error) {
				console.error(error);
			} finally {
				setAppIsReady(true);
			}
		}
		prepare();
	}, []);

	const fetchRandomPokemon = async () => {
		const randomId = Math.floor(Math.random() * 150) + 1;
		const randomPokemon = await fetchOnePokemon(randomId.toString());
		if (randomPokemon) {
			setPokemonToGuess(randomPokemon);
		}
	};

	useEffect(() => {
		if (
			listOfGuessedPokemon.some(
				(pokemon) =>
					pokemon.name === pokemonToGuess.name &&
					loggedInUser?.username
			)
		) {
			updateUser(listOfGuessedPokemon);
		}
	}, [listOfGuessedPokemon]);

	useEffect(() => {}, [appIsReady]);

	if (!appIsReady) {
		return <LoadingScreen />;
	}

	return (
		<ImageBackground
			className="h-screen-safe w-screen"
			source={require("@/assets/images/pokemon-bg.webp")}
		>
			<View className="flex-1 items-center justify-center mt-12 p-4 color-black">
				{listOfGuessedPokemon.some(
					(pokemon) => pokemon.name === pokemonToGuess.name
				) ? (
					<View className="bg-primary border-transparent rounded-lg items-center w-full p-4">
						<View className="bg-secondary p-4 rounded-lg items-center w-full border-transparent m-2">
							<Text>
								You guessed it in {listOfGuessedPokemon.length}{" "}
								tries
							</Text>
						</View>

						<TouchableOpacity
							onPress={() => {
								fetchRandomPokemon();
								cleanArray();
							}}
							className="bg-secondary p-4 rounded-full border-black border shadow-black shadow-lg m-2"
						>
							<Text>New Game</Text>
						</TouchableOpacity>
					</View>
				) : (
					<GuessBox />
				)}
				<PreviousGuessesBox />
			</View>
		</ImageBackground>
	);
}
