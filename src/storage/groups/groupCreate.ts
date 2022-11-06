import AsyncStorage from "@react-native-async-storage/async-storage";
import { groupGetAll } from "./groupsGetAll";
import { GROUP_COLLECTION } from "../storageConfig";
import { AppError } from "../../utils/AppError";

export const grouCreate = async (newGroup: string) => {
  try {
    const storedGroups = await groupGetAll();

    // const groupAlreadExists = storedGroups.find((elem) => elem == newGroup);
    const groupAlreadExists = storedGroups.includes(newGroup);

    if (groupAlreadExists) {
      throw new AppError("Já existe um grupo cadastrado com esse nome.");
    }

    const storage = JSON.stringify([...storedGroups, newGroup]);

    await AsyncStorage.setItem(GROUP_COLLECTION, storage);
  } catch (error) {
    throw error;
  }
};
