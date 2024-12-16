import pokemonService from "@/service/pokemonService";
import StringCharacteristicBox from "./StringCharacteristicBox";
import NumberCharacteristicBox from "./NumberCharacteristicBox";
import HeightAndWeightCharacteristicBox from "./HeightAndWeightCharacteristicBox";
import DescriptionBox from "./DescriptionBox";
import { Image, View, ScrollView } from "react-native";

const PreviousGuessesBox = () => {
	const { listOfGuessedPokemon, pokemonToGuess } = pokemonService();

	return (
		<ScrollView
            contentContainerClassName="w-full"
			showsVerticalScrollIndicator={false}
		>
			<ScrollView
            horizontal
            contentContainerClassName="flex flex-col">
                {listOfGuessedPokemon.length > 0 && (
                    <DescriptionBox />
                )}
                
				{listOfGuessedPokemon.map((pokemon, index) => (
					<View
						key={index}
						className="bg-secondary rounded-lg mb-4"
						style={{ flex: 1 }}
					>
						{/* Render DescriptionBox only for the first item */}

						{/* Horizontal ScrollView for Characteristics */}
						<View
							className="flex-row p-2 items-center justify-center"
						>
							{/* Pokémon Image */}
							<Image
								source={{ uri: pokemon.imgURL }}
                                className="flex-shrink-0 object-contain h-24 w-24"
							/>
							{/* Pokémon Characteristics */}
							<StringCharacteristicBox
								guessedPokemonInfo={pokemon.name}
								correctPokemonInfo={pokemonToGuess.name}
							/>
							<StringCharacteristicBox
								guessedPokemonInfo={pokemon.firstType}
								correctPokemonInfo={pokemonToGuess.firstType}
							/>
							<StringCharacteristicBox
								guessedPokemonInfo={pokemon.secondType}
								correctPokemonInfo={pokemonToGuess.secondType}
							/>
							<NumberCharacteristicBox
								guessedPokemonInfo={pokemon.evolutionStage}
								correctPokemonInfo={
									pokemonToGuess.evolutionStage
								}
								unit=""
							/>
							<HeightAndWeightCharacteristicBox
								guessedPokemonInfo={pokemon.height / 10}
								correctPokemonInfo={pokemonToGuess.height / 10}
								unit="m"
							/>
							<HeightAndWeightCharacteristicBox
								guessedPokemonInfo={pokemon.weight / 10}
								correctPokemonInfo={pokemonToGuess.weight / 10}
								unit="kg"
							/>
						</View>
					</View>
				))}
			</ScrollView>
		</ScrollView>
	);
};

export default PreviousGuessesBox;
