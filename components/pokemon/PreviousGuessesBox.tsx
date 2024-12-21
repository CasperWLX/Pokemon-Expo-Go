import pokemonService from "@/service/pokemonService";
import StringCharacteristicBox from "./StringCharacteristicBox";
import NumberCharacteristicBox from "./NumberCharacteristicBox";
import HeightAndWeightCharacteristicBox from "./HeightAndWeightCharacteristicBox";
import DescriptionBox from "./DescriptionBox";
import { Image, View, ScrollView } from "react-native";
import Animated, { FadeIn, FlipInEasyX } from "react-native-reanimated";

const PreviousGuessesBox = () => {
	const { listOfGuessedPokemon, pokemonToGuess } = pokemonService();

	return (
		<ScrollView
			contentContainerClassName="w-full"
			showsVerticalScrollIndicator={false}
		>
			<ScrollView horizontal contentContainerClassName="flex flex-col">
				{listOfGuessedPokemon.length > 0 && <DescriptionBox />}

				{listOfGuessedPokemon.map((pokemon, index) => (
					<Animated.View
                        //This is risky, only works because items are always added and never removed or reordered
						key={listOfGuessedPokemon.length - index}
						entering={index === 0 ? FlipInEasyX.duration(1000): undefined}
						style={{ width: "100%", marginBottom: 2 }}
					>
						<View className="flex-row items-center">
							{/* Pokémon Image */}
							<Image
								source={{ uri: pokemon.imgURL }}
								className="flex-shrink-0 object-contain h-24 w-24 bg-primary rounded-md border-4 mr-1 border-black"
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
					</Animated.View>
				))}
			</ScrollView>
		</ScrollView>
	);
};

export default PreviousGuessesBox;
