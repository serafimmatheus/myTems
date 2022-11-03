import { Container, FilterStyledProps, Title } from "./style";
import { TouchableOpacity } from "react-native";

type Props = TouchableOpacity &
  FilterStyledProps & {
    title: string;
  };

export const Filters = ({ title, isActive = false, ...rest }: Props) => {
  return (
    <Container isActive={isActive} {...rest}>
      <Title>{title}</Title>
    </Container>
  );
};
