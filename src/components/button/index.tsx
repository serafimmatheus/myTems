import React from "react";
import { Container, ButtonTypeStyleProps, Text } from "./style";
import { TouchableOpacityProps } from "react-native";

type IProps = TouchableOpacityProps & {
  type?: ButtonTypeStyleProps;
  message: string;
};

export const Button = ({ type = "PRIMARY", message, ...rest }: IProps) => {
  return (
    <Container type={type} {...rest}>
      <Text> {message}</Text>
    </Container>
  );
};
