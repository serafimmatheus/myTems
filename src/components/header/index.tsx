import React from "react";
import { Container, Logo, IconCare, Buttonicon } from "./style";
import logoImg from "../../../src/assets/Logo.png";

type Props = {
  showBackButton?: boolean;
};

export const Header = ({ showBackButton = false }: Props) => {
  return (
    <Container>
      {showBackButton && (
        <Buttonicon>
          <IconCare />
        </Buttonicon>
      )}

      <Logo source={logoImg} />
    </Container>
  );
};
