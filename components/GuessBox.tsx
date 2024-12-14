import React, { useState } from "react";
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	FlatList,
	Image,
	StyleSheet,
} from "react-native";
import PokemonService from "../service/pokemonService";
import { pokemonInterface } from "../interface/pokemonInterface";
import StyledView from "./StyledView";

const GuessBox = () => {
	const { addOnePokemonToArray, fetchOnePokemon, listOfAllPokemon } =
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
			const pokemon = await fetchOnePokemon(guess.toLowerCase());
			if (pokemon) {
				addOnePokemonToArray(pokemon);
			}
			setGuess("");
			setSuggestions([]);
		}
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
		<View className="bg-primary border-transparent rounded-lg items-center w-5/6 p-4">
			<View className="p-4 bg-secondary rounded-lg" style={{boxShadow: '20px'}}>
				<Text className="p-2">
					Guess the Pokémon by its name or its ID in the Pokédex
				</Text>
			</View>
			<View className="relative w-5/6 items-center">
				<TextInput
					className="p-2 border border-black w-full rounded-lg m-4"
					placeholder="Enter PokéID or Name"
					value={guess}
					onChangeText={handleInputChange}
				/>
				{suggestionList.length > 0 && (
					<FlatList
						data={suggestionList}
						keyExtractor={(item) => item.name}
						renderItem={({ item }) => (
							<TouchableOpacity
								style={styles.suggestionItem}
								onPress={() => handleSuggestionClick(item.name)}
							>
								<Image
									style={styles.suggestionImage}
									source={{ uri: item.imgURL }}
								/>
								<Text style={styles.suggestionText}>
									{item.name}
								</Text>
							</TouchableOpacity>
						)}
						className="absolute z-10 overflow-y-auto max-h-40 w-full mt-12 bg-primary"
					/>
				)}
			</View>
			<TouchableOpacity className="bg-secondary p-4 rounded-full " onPress={handleGuess}>
				<Text style={styles.buttonText}>Make Guess</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		height: "50%",
		alignItems: "center",
		justifyContent: "center",
		padding: 16,
		backgroundColor: "#4B5563", // gray-600
		borderRadius: 8,
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.8,
		shadowRadius: 2,
		elevation: 5,
	},
	gradient: {
		padding: 16,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 12, // Same border radius as the wrapper for consistent rounded corners
	},
	label: {
		textAlign: "center",
		fontSize: 18,
		marginBottom: 8,
		color: "#FFFFFF",
	},
	inputContainer: {
		width: "100%",
		position: "relative",
	},
	input: {
		padding: 8,
		borderColor: "#D1D5DB", // gray-300
		borderWidth: 1,
		borderRadius: 4,
		color: "#000000",
		width: "100%",
	},
	suggestionList: {
		position: "absolute",
		top: 40,
		left: 0,
		right: 0,
		backgroundColor: "#FFFFFF",
		borderColor: "#D1D5DB", // gray-300
		borderWidth: 1,
		borderRadius: 4,
		zIndex: 10,
		maxHeight: 160,
	},
	suggestionItem: {
		flexDirection: "row",
		alignItems: "center",
		padding: 8,
	},
	suggestionImage: {
		width: 48,
		height: 48,
		marginRight: 8,
	},
	suggestionText: {
		color: "#000000",
	},
	button: {
		marginTop: 16,
		padding: 12,
		backgroundColor: "#10B981", // green-500
		borderRadius: 4,
		alignItems: "center",
	},
	buttonText: {
		color: "#FFFFFF",
		fontSize: 16,
	},
});

export default GuessBox;
