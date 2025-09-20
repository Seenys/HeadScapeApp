import { Text, View } from "react-native";

import { meditations } from "../data";

const meditation = meditations[0];

const HomeScreen = () => {
  return (
    <View className="m-5 rounded-2xl border-2 border-gray-300 p-5">
      <Text className="text-xl font-bold">{meditation.title}</Text>
    </View>
  );
};

export default HomeScreen;
