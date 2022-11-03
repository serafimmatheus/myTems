import React from "react";
import { Container } from "./style";

import { TextInputProps } from "react-native";
import { useTheme } from "styled-components/native";

export const Input = ({ ...rest }: TextInputProps) => {
  const theme = useTheme();
  return <Container {...rest}></Container>;
};
