import AsyncStorage from "@react-native-async-storage/async-storage";

import { PLAYERS_COLLECTION } from "../storageConfig";
import { playersGetAll } from "./playersGetAll";

export const playersRemoveByGroup = async (
  group: string,
  playerName: string
) => {
  try {
    const storage = await playersGetAll(group);

    const filtered = storage.filter((elem) => elem.name !== playerName);

    const newPlayers = JSON.stringify(filtered);
    await AsyncStorage.setItem(`${PLAYERS_COLLECTION}-${group}`, newPlayers);
  } catch (error) {
    console.log(error);
  }
};
