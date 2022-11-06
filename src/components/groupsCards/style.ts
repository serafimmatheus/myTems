import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";

export const Container = styled(TouchableOpacity)`
  width: 100%;
  height: 96px;
  flex: 1;
  flex-direction: row;
  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
  margin-bottom: 12px;
  border-radius: 6px;
  align-items: center;
`;

export const ImgGroup = styled.Image`
  width: 32px;
  margin: 0 20px 0 29px;
`;

export const ImgText = styled.Text`
  flex: 1;
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.WHITE};
`;
