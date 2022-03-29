import dayjs from "dayjs";
import PropTypes from "prop-types";
import { Container } from "./styles";

export default function Movements({ movements }) {
  function getPositionMovement(movement) {
    const hour = dayjs(movement.dhInicial).hour()
    const minute = dayjs(movement.dhInicial).minute();

    return hour * 100 + (minute * 100) / 60;
  }

  function getWidthMovement(movement) {
    const diffDatesMinutes = (dayjs(movement.dhFinal).diff(movement.dhInicial).valueOf()) / 60000;

    return (diffDatesMinutes * 100) / 60;
  }

  function getTooltip(movement) {
    const { dhInicial, dhFinal, dsMotivo } = movement;

    return `${dayjs(dhInicial).format('HH:mm')} - ${dayjs(dhFinal).format('HH:mm')} ${dsMotivo}`;
  }

  return (
    <Container>
      <div className="movement-row">
        {movements.map(movement => (
          <div
            key={movement.id}
            className="movement"
            title={getTooltip(movement)}
            style={{ left: getPositionMovement(movement), width: getWidthMovement(movement), background: movement.cor, top: movement.isProducao && 20 }}
          >
            {movement.dsMotivo}
          </div>
        ))}
      </div>
    </Container>
  );
}

Movements.protoTypes = {
  movements: PropTypes.array.isRequired,
}