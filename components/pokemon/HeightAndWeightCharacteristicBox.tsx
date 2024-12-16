import { Text, View } from "react-native";

interface pokemonProps {
    guessedPokemonInfo: number;
    correctPokemonInfo: number;
    unit: string;
}

const HeightAndWeightCharacteristicBox = ({ unit, guessedPokemonInfo, correctPokemonInfo }: pokemonProps) => {

    const getArrow = () => {
        if (guessedPokemonInfo === correctPokemonInfo) {
            return "";
        } else if (guessedPokemonInfo < correctPokemonInfo) {
            return "↑";
        } else {
            return "↓";
        }
    };

    return (
        <View className={`border w-28 h-16 items-center justify-center ${guessedPokemonInfo === correctPokemonInfo ? "bg-green-500" : "bg-red-500"}`}>
            <View className="flex-row">
                <Text>{guessedPokemonInfo}{unit}</Text>
                <Text className="font-bold">{getArrow()}</Text>
            </View>
        </View>
    )
}

export default HeightAndWeightCharacteristicBox;