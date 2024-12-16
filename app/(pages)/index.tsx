import GuessBox from "@/components/pokemon/GuessBox";
import PreviousGuessesBox from "@/components/pokemon/PreviousGuessesBox";
import {
	View,
	ImageBackground,
	KeyboardAvoidingView,
	Platform,
	TouchableWithoutFeedback,
	Keyboard,
} from "react-native";
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
			className="h-screen-safe w-screen"
			source={require("@/assets/images/pokemon-bg.webp")}
		>
			<View className="flex-1 items-center justify-center mt-12 p-4">
				<GuessBox />
				<PreviousGuessesBox />
			</View>
		</ImageBackground>
	);
}
