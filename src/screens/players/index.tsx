import React, { useState, useEffect } from "react";
import { useRoute, useNavigation, TabRouter } from "@react-navigation/native";
import { Alert, FlatList, Keyboard } from "react-native";

import { Header } from "../../components/header";
import { HigthLigth } from "../../components/higthLigth";
import { ButtonsIcons } from "../../components/buttonicons";
import { Input } from "../../components/input";
import { Filters } from "../../components/filters";
import { PlayersCard } from "../../components/playersCard";
import { ListEmpyt } from "../../components/listEmpyt";
import { Button } from "../../components/button";
import { Loading } from "../../components/loading";

import { playersAddByGroup } from "../../storage/players/playerAddByGroup";
import { playersGetByGroupsAndTeams } from "../../storage/players/playersGetByGrupsAndTeams";
import { PlayersStoregeDTO } from "../../storage/players/PlayersStorageDTO";
import { playersRemoveByGroup } from "../../storage/players/playersRemoveByGroup";
import { groupRemoveByName } from "../../storage/groups/groupRemoveByName";

import { AppError } from "../../utils/AppError";

import { Container, Form, HeaderList, NumbersOfPlayers } from "./style";

type RouteParams = {
  groups: string;
};

export const Players = () => {
  const [team, setTeam] = useState("Team A");
  const [players, setPlayers] = useState<PlayersStoregeDTO[]>([]);
  const [namePlayers, setNamePlayers] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const { navigate } = useNavigation();
  const route = useRoute();
  const { groups } = route.params as RouteParams;

  const addPlayers = async () => {
    if (namePlayers.trim().length === 0) {
      return Alert.alert(
        "Novo jogador",
        "Informe um nome válido para o jogador."
      );
    }

    const newPlayer = {
      name: namePlayers,
      team,
    };

    try {
      setIsLoading(true);
      await playersAddByGroup(newPlayer, groups);
      setNamePlayers("");
      fetchPlayersFilterByGroup();
      Keyboard.dismiss();
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert("Novo jogador", "Informe um nome válido para o jogador.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleRemovePlayers = async (playerName: string) => {
    try {
      setIsLoading(true);
      await playersRemoveByGroup(groups, playerName);
      fetchPlayersFilterByGroup();
    } catch (error) {
      Alert.alert("Remover jogador", "Não foi possivel remover esse jogador.");
    } finally {
      setIsLoading(false);
    }
  };

  const fetchPlayersFilterByGroup = async () => {
    try {
      setIsLoading(true);
      const playersByTeam = await playersGetByGroupsAndTeams(groups, team);

      setPlayers(playersByTeam);
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert("Error", "Não foi possivel localizar esse time");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const groupRemove = async () => {
    try {
      setIsLoading(true);
      await groupRemoveByName(groups);

      navigate("groups");
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const removeGroups = () => {
    Alert.alert(`${groups}`, "deseja remover essa turma?", [
      {
        text: "Sim",
        onPress: () => groupRemove(),
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  };

  useEffect(() => {
    fetchPlayersFilterByGroup();
  }, [team]);

  return (
    <Container>
      <Header showBackButton />
      <HigthLigth title={groups} text="adicione a galera e separe os times" />

      <Form>
        <Input
          placeholder="Nome do jogador"
          autoCorrect={false}
          onChangeText={setNamePlayers}
          value={namePlayers}
          onSubmitEditing={addPlayers}
          returnKeyType="done"
        />

        <ButtonsIcons icon="add" onPress={addPlayers} />
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

      {isLoading ? (
        <Loading />
      ) : (
        <FlatList
          data={players}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => (
            <PlayersCard
              name={item.name}
              onRemove={() => handleRemovePlayers(item.name)}
            />
          )}
          ListEmptyComponent={() => (
            <ListEmpyt message="Não há jogadores nesse time" />
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 100 }}
        />
      )}

      <Button message="Remover turma" type="SECONDARY" onPress={removeGroups} />
    </Container>
  );
};
