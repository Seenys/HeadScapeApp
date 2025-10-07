import { Text, View } from "react-native";
import { Pressable } from "react-native";

import { Meditation } from "@/types";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { Link } from "expo-router";

const MeditationListItem = ({ meditation }: { meditation: Meditation }) => {
  return (
    <Link href={`/meditation/${meditation.id}`} asChild>
      <Pressable className="flex-row items-center gap-5">
        <View className="rounded-full bg-green-600 p-1">
          <FontAwesome6 name="check" size={16} color="white" />
        </View>
        <View className="flex-1 rounded-2xl border-2 border-gray-300 p-5 py-8">
          <Text className="mb-2 text-2xl font-semibold">{meditation.title}</Text>
          <View className="flex-row items-center gap-2">
            <FontAwesome6 name="clock" size={16} color="gray" />
            <Text className="text-gray-500">{meditation.duration} min</Text>
          </View>
        </View>
      </Pressable>
    </Link>
  );
};

export default MeditationListItem;
