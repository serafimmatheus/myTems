import React from "react";
import { Container, TitleHight, TextHight } from "./style";

type Props = {
  title?: string;
  text?: string;
};

export const HigthLigth = ({ title, text }: Props) => {
  return (
    <Container>
      <TitleHight>{title}</TitleHight>
      <TextHight>{text}</TextHight>
    </Container>
  );
};
