import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";

export type ButtonTypeStyleProps = "PRIMARY" | "SECONDARY";

type IProps = {
  type: ButtonTypeStyleProps;
};

export const Container = styled(TouchableOpacity)<IProps>`
  flex: 1;
  width: 100%;
  min-height: 56px;
  max-height: 56px;
  border-radius: 6px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme, type }) =>
    type === "PRIMARY" ? theme.COLORS.GREEN_700 : theme.COLORS.RED_DARK};
  padding: 0 10px;
`;

export const Text = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;
