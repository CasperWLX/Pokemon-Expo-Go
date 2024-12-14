import GuessBox from "@/components/GuessBox";
import { ThemedView } from "@/components/ThemedView";
import { View, ImageBackground } from "react-native";
import { useEffect } from "react";
import pokemonService from "@/service/pokemonService";

export default function Index() {
	const {
		fetchOnePokemon,
		setPokemonToGuess,
		cleanArray,
		fetchAllPokemon,
		listOfGuessedPokemon,
		pokemonToGuess,
		listOfAllPokemon,
	} = pokemonService();

	useEffect(() => {
		fetchRandomPokemon();
		if (listOfAllPokemon.length === 0) {
			fetchAllPokemon();
		}
	}, []);

	const fetchRandomPokemon = async () => {
		const randomId = Math.floor(Math.random() * 150) + 1;

		const randomPokemon = await fetchOnePokemon(randomId.toString());

		if (randomPokemon) {
			setPokemonToGuess(randomPokemon);
		}
	};

	return (
		<ImageBackground
			className="flex-1 justify-center items-center"
			source={require("@/assets/images/pokemon-bg.webp")}
		>
			<View className="flex-row p-4">
				<GuessBox />
			</View>
		</ImageBackground>
	);
}
