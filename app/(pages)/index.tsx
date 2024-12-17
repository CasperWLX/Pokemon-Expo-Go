import GuessBox from "@/components/pokemon/GuessBox";
import PreviousGuessesBox from "@/components/pokemon/PreviousGuessesBox";
import {
	View,
	ImageBackground,
	KeyboardAvoidingView,
	Platform,
	TouchableWithoutFeedback,
	Keyboard,
	Text,
	TouchableOpacity,
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

    useEffect(() => {
        if(listOfGuessedPokemon.some(pokemon => pokemon.name === pokemonToGuess.name)){
            updateUserStats;
        }
    }, [listOfGuessedPokemon])

    const updateUserStats = async() => {

    }

	return (
		<ImageBackground
			className="h-screen-safe w-screen"
			source={require("@/assets/images/pokemon-bg.webp")}
		>
			<View className="flex-1 items-center justify-center mt-12 p-4 color-black">
				{listOfGuessedPokemon.some(pokemon => pokemon.name === pokemonToGuess.name) ? (
					<View className="bg-primary border-transparent rounded-lg items-center w-full p-4">
						<View className="bg-secondary p-4 rounded-lg items-center w-full border-transparent m-2">
							<Text>You guessed it in {listOfGuessedPokemon.length} tries</Text>
						</View>
                        
						<TouchableOpacity
							onPress={() => {
								fetchRandomPokemon(), cleanArray();
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