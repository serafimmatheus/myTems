import React from "react";
import { Container, Logo, IconCare, Buttonicon } from "./style";
import logoImg from "../../../src/assets/Logo.png";
import { useNavigation } from "@react-navigation/native";

type Props = {
  showBackButton?: boolean;
};

export const Header = ({ showBackButton = false }: Props) => {
  const { navigate } = useNavigation();

  const goBack = () => {
    navigate("groups");
  };

  return (
    <Container>
      {showBackButton && (
        <Buttonicon onPress={goBack}>
          <IconCare />
        </Buttonicon>
      )}

      <Logo source={logoImg} />
    </Container>
  );
};
