import { Header } from "../../components/header";
import React, { useState } from "react";
import { Container, Form, HeaderList, NumbersOfPlayers } from "./style";
import { HigthLigth } from "../../components/higthLigth";
import { ButtonsIcons } from "../../components/buttonicons";
import { Input } from "../../components/input";
import { Filters } from "../../components/filters";
import { Alert, FlatList } from "react-native";
import { PlayersCard } from "../../components/playersCard";
import { ListEmpyt } from "../../components/listEmpyt";

export const Players = () => {
  const [team, setTeam] = useState("Team A");
  const [players, setPlayers] = useState([]);

  const addPlayers = () => {};

  const handleRemovePlayers = () => {
    Alert.alert("removido");
  };

  return (
    <Container>
      <Header showBackButton />
      <HigthLigth
        title="Node da turma"
        text="adicione a galera e separe os times"
      />

      <Form>
        <Input placeholder="Nome da pessoa" autoCorrect={false} />

        <ButtonsIcons icon="add" />
      </Form>

      <HeaderList>
        <FlatList
          data={["Team A", "Team B"]}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Filters
              title={item}
              isActive={item === team}
              onPress={() => setTeam(item)}
            />
          )}
          horizontal
        />

        <NumbersOfPlayers>{players.length}</NumbersOfPlayers>
      </HeaderList>

      <FlatList
        data={players}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <PlayersCard name={item} onRemove={handleRemovePlayers} />
        )}
        ListEmptyComponent={() => (
          <ListEmpyt message="Não há pessoas nesse time" />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      />
    </Container>
  );
};
