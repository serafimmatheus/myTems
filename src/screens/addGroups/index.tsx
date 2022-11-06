import React, { useState } from "react";

import { Header } from "../../components/header";
import { HigthLigth } from "../../components/higthLigth";
import { Button } from "../../components/button";
import { Input } from "../../components/input";

import { useNavigation } from "@react-navigation/native";

import { Container, Icon, Content } from "./style";
import { grouCreate } from "../../storage/groups/groupCreate";
import { AppError } from "../../utils/AppError";
import { Alert } from "react-native";

export const NewGroups = () => {
  const { navigate } = useNavigation();
  const [nameGroup, setNameGroup] = useState("");

  const handleNewGroups = async () => {
    try {
      if (nameGroup.trim().length === 0) {
        return Alert.alert("Nova turma", "Adicione um nome válido para turma.");
      }

      await grouCreate(nameGroup);
      navigate("players", { groups: nameGroup });
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert("Nova turma", error.message);
      } else {
        Alert.alert("Nova turma", "não foi possível criar a turma.");
        console.log(error);
      }
    }
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

        <Button message="Criar turma" onPress={handleNewGroups} />
      </Content>
    </Container>
  );
};
