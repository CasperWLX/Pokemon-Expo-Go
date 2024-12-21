import { Text, View } from "react-native"

const DescriptionBox = () => {

    const propertyList = ["Image","Name", "First type", "Second type", "Evolution stage", "Height", "Weight"]
    return (
        <View className="flex-row rounded-lg mb-2 mt-4" >
            {propertyList.map((property, key) => (
                <View className="items-center justify-center mr-1" key={key}>
                    <Text className="text-center font-bold items-center w-24 h-10">{property}</Text>
                    <Text className="text-5xl bg-black h-2 rounded-md text-start">___</Text>
                </View>
            ))}
        </View>
    )
}

export default DescriptionBox