import { Text, View } from "react-native";

import { Meditation } from "../types";

const MeditationListItem = ({ meditation }: { meditation: Meditation }) => {
  return (
    <View className="m-5 rounded-2xl border-2 border-gray-300 p-5">
      <Text className="text-xl font-bold">{meditation.title}</Text>
    </View>
  );
};

export default MeditationListItem;
