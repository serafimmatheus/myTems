import { Header } from "../../components/header";
import { Container } from "./style";
import { HigthLigth } from "../../components/higthLigth";
import { GroupsCards } from "../../components/groupsCards";
import { useState, useCallback } from "react";
import { ListEmpyt } from "../../components/listEmpyt";
import { Button } from "../../components/button";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { groupGetAll } from "../../storage/groups/groupsGetAll";
import { FlatList, View } from "react-native";
import { Loading } from "../../components/loading";

export const Groups = () => {
  const { navigate } = useNavigation();

  const [isLoading, setIsLoading] = useState(true);

  const [groups, setGroups] = useState<string[]>([]);

  const handleNewGroup = () => {
    navigate("newGroups");
  };

  const fetchGroups = async () => {
    try {
      setIsLoading(true);
      const data = await groupGetAll();
      setGroups(data);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  const handleOpenGroups = (group: string) => {
    navigate("players", { groups: group });
  };

  useFocusEffect(
    useCallback(() => {
      fetchGroups();
    }, [])
  );

  return (
    <Container>
      <Header />
      <HigthLigth title="Turmas" text="Jogue com a sua turma" />

      {/* <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <GroupsCards
            key={item}
            title={item}
            onPress={() => handleOpenGroups(item)}
          />
        )}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => (
          <ListEmpyt message="Nenhum Grupo encontrado..." />
        )}
        showsVerticalScrollIndicator={false}
      /> */}
      {isLoading ? (
        <Loading />
      ) : groups.length > 0 ? (
        groups.map((elem) => (
          <GroupsCards
            key={elem}
            title={elem}
            onPress={() => handleOpenGroups(elem)}
          />
        ))
      ) : (
        <ListEmpyt message="Nenhuma turma encontrada..." />
      )}

      <Button message="Adicionar turma" onPress={handleNewGroup} />
    </Container>
  );
};
