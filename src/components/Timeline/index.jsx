import { memo } from "react";
import { hours } from "../../mock/hours";
import Hour from "../Hour";
import { Container } from "./styles";

function Timeline() {
  return (
    <Container>
      {hours.map(item => (
        <Hour key={item} hour={item} />
      ))}
    </Container>
  );
}

export default memo(Timeline);
