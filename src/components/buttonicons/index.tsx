import React from "react";
import { Container, Icon, ButtonIconTypeStyledProps } from "./style";
import { TouchableOpacityProps } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

type Props = TouchableOpacityProps & {
  icon: keyof typeof MaterialIcons.glyphMap;
  type?: ButtonIconTypeStyledProps;
};

export const ButtonsIcons = ({ icon, type = "PRIMARY", ...rest }: Props) => {
  return (
    <Container {...rest}>
      <Icon name={icon} type={type} />
    </Container>
  );
};
