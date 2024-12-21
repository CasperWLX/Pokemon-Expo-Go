import { Text, View } from "react-native";
import {AutoSizeText, ResizeTextMode} from 'react-native-auto-size-text'

interface pokemonProps {
    guessedPokemonInfo: string;
    correctPokemonInfo: string;
}

const StringCharacteristicBox = ({guessedPokemonInfo, correctPokemonInfo }: pokemonProps) => {

    return (
        <View className={`w-24 h-24 items-center justify-center mr-1 border-4 border-black rounded-md  ${guessedPokemonInfo === correctPokemonInfo ? "bg-green-500" : "bg-red-500"}`}>
            <View>
                <AutoSizeText fontSize={16} numberOfLines={1} mode={ResizeTextMode.max_lines}>{guessedPokemonInfo}</AutoSizeText>
            </View>
        </View>
    )
}

export default StringCharacteristicBox;