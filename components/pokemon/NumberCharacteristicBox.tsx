import { Text, View } from "react-native";

interface pokemonProps {
    guessedPokemonInfo: number;
    correctPokemonInfo: number;
    unit: string;
}

const NumberCharacteristicBox = ({ unit, guessedPokemonInfo, correctPokemonInfo }: pokemonProps) => {

    return (
        <View className={`border-4 rounded-md border-black mr-1 w-24 h-24 items-center justify-center ${guessedPokemonInfo === correctPokemonInfo ? "bg-green-500" : "bg-red-500"}`}>
            <View>
                <Text>{guessedPokemonInfo} {unit}</Text>
            </View>
        </View>
    )
}

export default NumberCharacteristicBox;