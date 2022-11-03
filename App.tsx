import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components";
import { Groups } from "./src/screens/Groups";
import { NewGroups } from "./src/screens/addGroups";
import { Players } from "./src/screens/players";
import { Loading } from "./src/components/loading";
import theme from "./src/theme/theme";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });
  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? <Players /> : <Loading />}
    </ThemeProvider>
  );
}
