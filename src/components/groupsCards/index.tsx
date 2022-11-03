import React, { useState } from "react";
import { Container, ImgGroup, ImgText } from "./style";
import { TouchableOpacityProps } from "react-native";

import group from "../../assets/groups.png";

type Props = TouchableOpacityProps & {
  title: string;
};

export const GroupsCards = ({ title, ...rest }: Props) => {
  return (
    <Container {...rest}>
      <ImgGroup source={group} />
      <ImgText>{title}</ImgText>
    </Container>
  );
};
