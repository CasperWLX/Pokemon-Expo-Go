import { Text, View } from "react-native";

interface pokemonProps {
    guessedPokemonInfo: string;
    correctPokemonInfo: string;
}

const StringCharacteristicBox = ({guessedPokemonInfo, correctPokemonInfo }: pokemonProps) => {

    return (
        <View className={`border w-28 h-16 items-center justify-center ${guessedPokemonInfo === correctPokemonInfo ? "bg-green-500" : "bg-red-500"}`}>
            <View>
                <Text>{guessedPokemonInfo}</Text>
            </View>
        </View>
    )
}

export default StringCharacteristicBox;