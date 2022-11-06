import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppError } from "../../utils/AppError";

import { PLAYERS_COLLECTION } from "../storageConfig";

import { PlayersStoregeDTO } from "../players/PlayersStorageDTO";
import { playersGetAll } from "./playersGetAll";

export const playersAddByGroup = async (
  newPlayer: PlayersStoregeDTO,
  group: string
) => {
  try {
    const storedPlayers = await playersGetAll(group);

    const playersAlreadExists = storedPlayers.find(
      (elem) => elem.name == newPlayer.name
    );

    if (playersAlreadExists) {
      throw new AppError(`${newPlayer.name} já esta na lista.`);
    }

    const storage = JSON.stringify([...storedPlayers, newPlayer]);

    await AsyncStorage.setItem(`${PLAYERS_COLLECTION}-${group}`, storage);
  } catch (error) {
    throw new AppError("Nome inválido");
  }
};
