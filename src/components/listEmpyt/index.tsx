import React from "react";
import { Container, Message } from "./style";

type IProps = {
  message: string;
};

export const ListEmpyt = ({ message }: IProps) => {
  return (
    <Container>
      <Message>{message}</Message>
    </Container>
  );
};
