import { FlatList } from "react-native";

import { meditations } from "@/data";
import MeditationListItem from "@components/MeditationListItem";

const HomeScreen = () => {
  return (
    <>
      <FlatList
        data={meditations}
        renderItem={({ item }) => <MeditationListItem meditation={item} />}
      />
    </>
  );
};

export default HomeScreen;
