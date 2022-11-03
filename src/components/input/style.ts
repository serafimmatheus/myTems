import styled, { css } from "styled-components/native";
import { TextInput } from "react-native";

export const Container = styled(TextInput).attrs(({ theme }) => ({
  placeholderTextColor: theme.COLORS.GRAY_300,
}))`
  ${({ theme }) => css`
    flex: 1;
    width: 100%;
    min-height: 56px;
    max-height: 56px;
    justify-content: center;
    align-items: center;
    background-color: ${theme.COLORS.GRAY_700};

    color: ${theme.COLORS.WHITE};

    border-radius: 6px;
    padding: 16px;

    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
  `}
`;
