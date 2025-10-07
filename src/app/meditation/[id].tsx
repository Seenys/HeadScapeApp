import React from "react";
import { Text } from "react-native";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";

import { meditations } from "@/data";
import AntDesign from "@expo/vector-icons/AntDesign";
import { router, useLocalSearchParams } from "expo-router";

const MeditationDetailsScreen = () => {
  const { id } = useLocalSearchParams();

  const { top } = useSafeAreaInsets();

  const meditation = meditations.find((meditation) => meditation.id === Number(id));

  if (!meditation) {
    return (
      <SafeAreaView>
        <Text>Meditation not found</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView>
      <Text className=" text-2xl">Meditation Details {meditation?.title}</Text>
      <AntDesign
        onPress={() => router.back()}
        className="absolute right-4"
        name="close"
        size={24}
        style={{ marginTop: top + 10 }}
        color="black"
      />
    </SafeAreaView>
  );
};

export default MeditationDetailsScreen;
