import dayjs from 'dayjs';
import { useState } from 'react';
import { movements as movementsData } from '../../mock/movements';
import Content from "../Content";
import Header from "../Header";
import { Container } from "./styles";

export default function Scheduller() {
  const [movements, setMovements] = useState([]);

  function load(date) {
    const movementsFiltered = movementsData.filter(item => dayjs(item.dhInicial).format('YYYY-MM-DD') === date);

    setMovements(movementsFiltered);
  }

  return (
    <Container>
      <Header load={load} />
      <Content movements={movements} />
    </Container>
  );
}