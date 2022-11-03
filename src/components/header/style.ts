import styled from "styled-components/native";
import { CaretLeft } from "phosphor-react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Container = styled(SafeAreaView)`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.Image`
  width: 46px;
  height: 56px;
`;

export const IconCare = styled(CaretLeft).attrs(({ theme }) => ({
  size: 32,
  color: theme.COLORS.WHITE,
}))``;

export const Buttonicon = styled.TouchableOpacity`
  flex: 1;
`;
