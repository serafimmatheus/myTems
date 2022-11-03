import styled from "styled-components/native";
import { UsersThree } from "phosphor-react-native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  align-items: center;
  padding: 24px;
`;

export const Content = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled(UsersThree).attrs(({ theme }) => ({
  color: theme.COLORS.GREEN_700,
  size: "56px",
}))`
  margin-top: 110px;
  width: 56px;
  height: 56px;
`;
