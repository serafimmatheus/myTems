import { playersGetAll } from "./playersGetAll";

export const playersGetByGroupsAndTeams = async (
  group: string,
  team: string
) => {
  try {
    const storageGroup = await playersGetAll(group);

    const players = storageGroup.filter((elem) => elem.team === team);

    return players;
  } catch (error) {
    console.log(error);
  }
};
