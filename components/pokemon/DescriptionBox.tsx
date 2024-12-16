import { Text, View } from "react-native"

const DescriptionBox = () => {

    const propertyList = ["Name", "First type", "Second type", "Evolution stage", "Height", "Weight"]
    return (
        <View className="flex flex-row justify-center bg-secondary rounded-lg mb-2 p-2 mt-4" >
            <View className="flex items-center w-[96px] justify-center ">
                <Text className="font-bold w-28 p-2 hidden">hidden</Text>
            </View>
            {propertyList.map((property, key) => (
                <View className="flex items-center w-28 justify-center p-2" key={key}>
                    <Text className="font-bold p-2">{property}:</Text>
                </View>

            ))}
        </View>
    )
}

export default DescriptionBox