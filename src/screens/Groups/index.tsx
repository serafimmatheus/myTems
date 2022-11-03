import { Header } from "../../components/header";
import { Container } from "./style";
import { HigthLigth } from "../../components/higthLigth";
import { GroupsCards } from "../../components/groupsCards";
import { useState } from "react";
import { ListEmpyt } from "../../components/listEmpyt";
import { Button } from "../../components/button";
import { useNavigation } from "@react-navigation/native";

export const Groups = () => {
  const { navigate } = useNavigation();

  const [groups, setGroups] = useState<string[]>([]);

  const handleNewGroup = () => {
    navigate("newGroups");
  };

  return (
    <Container>
      <Header />
      <HigthLigth title="Turmas" text="Jogue com a sua turma" />

      {groups.length > 0 ? (
        groups.map((elem) => <GroupsCards key={elem} title={elem} />)
      ) : (
        <ListEmpyt message="Nenhum Grupo encontrado..." />
      )}

      <Button message="Add Groups" onPress={handleNewGroup} />
    </Container>
  );
};
