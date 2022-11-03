import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Groups } from "../screens/Groups";
import { NewGroups } from "../screens/addGroups";
import { Players } from "../screens/players";

const { Navigator, Screen } = createNativeStackNavigator();

export const AppRoutes = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="groups" component={Groups} />
      <Screen name="newGroups" component={NewGroups} />
      <Screen name="players" component={Players} />
    </Navigator>
  );
};
