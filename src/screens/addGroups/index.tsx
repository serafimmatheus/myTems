import React, { useState } from "react";

import { Header } from "../../components/header";
import { HigthLigth } from "../../components/higthLigth";
import { Button } from "../../components/button";
import { Input } from "../../components/input";

import { useNavigation } from "@react-navigation/native";

import { Container, Icon, Content } from "./style";

export const NewGroups = () => {
  const { navigate } = useNavigation();
  const [nameGroup, setNameGroup] = useState("");

  const handleNewGroups = () => {
    navigate("players", { groups: nameGroup });
  };
  return (
    <Container>
      <Header showBackButton />

      <Content>
        <Icon />

        <HigthLigth
          title="Nova Turma"
          text="crie uma turma para adicionar pessoas"
        />
        <Input
          placeholder="Nome da turma"
          style={{ marginBottom: 15 }}
          onChangeText={setNameGroup}
        />

        <Button message="Criar" onPress={handleNewGroups} />
      </Content>
    </Container>
  );
};
