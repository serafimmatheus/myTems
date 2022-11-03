import React from "react";

import { Header } from "../../components/header";
import { HigthLigth } from "../../components/higthLigth";
import { Button } from "../../components/button";
import { Input } from "../../components/input";

import { Container, Icon, Content } from "./style";

export const NewGroups = () => {
  return (
    <Container>
      <Header showBackButton />

      <Content>
        <Icon />

        <HigthLigth
          title="Nova Turma"
          text="crie uma turma para adicionar pessoas"
        />
        <Input placeholder="Nome da turma" />
        <Button message="Criar" />
      </Content>
    </Container>
  );
};
