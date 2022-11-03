import { Header } from "../../components/header";
import { Container } from "./style";
import { HigthLigth } from "../../components/higthLigth";
import { GroupsCards } from "../../components/groupsCards";
import { useState } from "react";
import { ListEmpyt } from "../../components/listEmpyt";
import { Button } from "../../components/button";

export const Groups = () => {
  const [groups, setGroups] = useState<string[]>([]);

  const teste = () => {};

  return (
    <Container>
      <Header />
      <HigthLigth title="Turmas" text="Jogue com a sua turma" />

      {groups.length > 0 ? (
        groups.map((elem) => <GroupsCards key={elem} title={elem} />)
      ) : (
        <ListEmpyt message="Nenhum Grupo encontrado..." />
      )}

      <Button type="SECONDARY" message="Add Groups" />
    </Container>
  );
};
