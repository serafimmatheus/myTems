import { Container, Icon, Name } from "./style";
import { ButtonsIcons } from "../buttonicons";

type Props = {
  name: string;
  onRemove: () => void;
};

export const PlayersCard = ({ name, onRemove }: Props) => {
  return (
    <Container>
      <Icon name="person" />

      <Name>{name}</Name>

      <ButtonsIcons icon="close" type="SECONDARY" onPress={onRemove} />
    </Container>
  );
};
