import styled from "styled-components/native";
import { CaretLeft } from "phosphor-react-native";

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
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
