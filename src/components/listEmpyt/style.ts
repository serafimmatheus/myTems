import styled from "styled-components/native";

export const Container = styled.View`
  /* flex: 1; */
  width: 100%;
  height: 200px;
  justify-content: center;
  align-items: center;
  border: 1px dashed ${({ theme }) => theme.COLORS.GREEN_500};
  padding: 0 15px;
  margin-bottom: 20px;
`;

export const Message = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  text-align: center;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
`;
