import { Text, View } from "react-native";

import { meditations } from "@/data";
import { useLocalSearchParams } from "expo-router";

const MeditationDetailsScreen = () => {
  const { id } = useLocalSearchParams();

  const meditation = meditations.find((meditation) => meditation.id === Number(id));

  if (!meditation) {
    return (
      <View>
        <Text>Meditation not found</Text>
      </View>
    );
  }

  return (
    <View>
      <Text>Meditation Details {meditation?.title}</Text>
    </View>
  );
};

export default MeditationDetailsScreen;
