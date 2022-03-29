import { useRef, memo } from 'react';
import dayjs from 'dayjs';
import { Container } from "./styles";

function MarkerHourNow() {
  const refNow = useRef(null);

  function getMarkerHourNow() {
    const hour = dayjs().hour();
    const minute = dayjs().minute();

    return hour * 100 + (minute * 100) / 60;
  }

  return (
    <Container ref={refNow} style={{ left: getMarkerHourNow() }} />
  );
}

export default memo(MarkerHourNow);
