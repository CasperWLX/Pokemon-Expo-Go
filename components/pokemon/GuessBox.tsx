import React, { useState } from "react";
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	FlatList,
	Image,
	Keyboard,
	TouchableWithoutFeedback,
	TouchableNativeFeedback,
	Platform,
} from "react-native";
import PokemonService from "../../service/pokemonService";
import { pokemonInterface } from "../../interface/pokemonInterface";

const GuessBox = () => {
	const { addOnePokemonToArray, listOfAllPokemon, listOfGuessedPokemon } =
		PokemonService();
	const [guess, setGuess] = useState("");
	const [suggestionList, setSuggestions] = useState<pokemonInterface[]>([]);

	const getSuggestions = (input: string) => {
		return listOfAllPokemon
			.filter((pokemon) =>
				pokemon.name.toLowerCase().startsWith(input.toLowerCase())
			)
			.map((pokemon) => pokemon);
	};

	const handleGuess = async () => {
        
		if (guess.trim()) {
			const pokemon = listOfAllPokemon.find(
				(pokemon) =>
					pokemon.name.toLowerCase() === guess.toLowerCase() ||
					pokemon.pokemonId === Number(guess)
			);
			if (pokemon) {
				addOnePokemonToArray(pokemon);
			}
			setGuess("");
			setSuggestions([]);
		}
		Keyboard.dismiss();
	};

	const handleInputChange = (input: string) => {
		setGuess(input);
		if (input.length > 0) {
			const suggestions = getSuggestions(input);
			setSuggestions(suggestions);
		} else {
			setSuggestions([]);
		}
	};

	const handleSuggestionClick = (suggestion: string) => {
		setGuess(suggestion);
		setSuggestions([]);
	};

	return (
		<View className="bg-primary border-transparent rounded-3xl items-center w-full p-4">
			<View
				className="p-4 bg-secondary rounded-lg shadow-md shadow-black m-2"
				style={{ boxShadow: "20px" }}
			>
				<Text className="p-2">
					Guess the Pokémon by its name or its ID in the Pokédex
				</Text>
			</View>
			<View className="relative w-5/6 items-center">
				<TouchableOpacity>
					<TextInput
						className="p-2 border-2 border-black color-black min-w-full rounded-lg m-4"
						placeholder="Enter PokéID or Name"
						value={guess}
						onChangeText={handleInputChange}
						placeholderTextColor="gray"
					/>
				</TouchableOpacity>

				{suggestionList.length > 0 && (
					<FlatList
						data={suggestionList}
						keyExtractor={(item) => item.name}
						keyboardShouldPersistTaps="handled"
						renderItem={({ item }) => (
							<TouchableNativeFeedback
								onPress={() => handleSuggestionClick(item.name)}
							>
								<View className="flex-row items-center p-2">
									<Image
										className="flex-shrink-0 object-contain h-16 w-16"
										source={{ uri: item.imgURL }}
									/>
									<Text className="ml-4">{item.name}</Text>
								</View>
							</TouchableNativeFeedback>
						)}
						className="absolute z-10 overflow-y-auto max-h-48 w-full mt-12 bg-slate-50"
					/>
				)}
				<Text className="p-2 mb-2">
					Number of tries: {listOfGuessedPokemon.length}
				</Text>
			</View>
			<TouchableOpacity
				className="bg-secondary p-4 rounded-full shadow-black shadow-lg border-transparent"
				onPress={handleGuess}
			>
				<Text className="font-bold px-10">Submit</Text>
			</TouchableOpacity>
		</View>
	);
};

export default GuessBox;
