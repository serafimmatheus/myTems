import styled, { css } from "styled-components/native";
import { TouchableOpacity } from "react-native";

export type FilterStyledProps = {
  isActive?: boolean;
};

export const Container = styled(TouchableOpacity)<FilterStyledProps>`
  ${({ theme, isActive }) =>
    isActive &&
    css`
      border: 1px solid ${theme.COLORS.GREEN_700};
    `}

  border-radius: 4px;
  margin-right: 12px;

  width: 70px;
  height: 38px;

  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  ${({ theme }) =>
    css`
      font-family: ${theme.FONT_FAMILY.BOLD};
      font-size: ${theme.FONT_SIZE.MD}px;
      color: ${theme.COLORS.WHITE};
    `}
`;
