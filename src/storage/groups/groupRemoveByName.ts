import AsyncStorage from "@react-native-async-storage/async-storage";

import { GROUP_COLLECTION, PLAYERS_COLLECTION } from "../storageConfig";

import { groupGetAll } from "../groups/groupsGetAll";

export const groupRemoveByName = async (groupDeleted: string) => {
  try {
    const storedGroups = await groupGetAll();
    const filterGroups = storedGroups.filter((group) => group !== groupDeleted);

    const newGroups = JSON.stringify(filterGroups);

    await AsyncStorage.setItem(GROUP_COLLECTION, newGroups);
    await AsyncStorage.removeItem(`${PLAYERS_COLLECTION}-${groupDeleted}`);
  } catch (error) {
    console.log(error);
  }
};
