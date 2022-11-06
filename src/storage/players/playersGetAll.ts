import AsyncStorage from "@react-native-async-storage/async-storage";
import { PLAYERS_COLLECTION } from "../storageConfig";
import { PlayersStoregeDTO } from "./PlayersStorageDTO";

export const playersGetAll = async (group: string) => {
  try {
    const storage = await AsyncStorage.getItem(
      `${PLAYERS_COLLECTION}-${group}`
    );

    const players: PlayersStoregeDTO[] = storage ? JSON.parse(storage) : [];

    return players;
  } catch (error) {
    throw error;
  }
};
