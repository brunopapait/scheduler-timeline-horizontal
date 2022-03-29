import { useEffect, useRef } from 'react';
import Timeline from '../Timeline';
import MarkerHourNow from '../MarkerHourNow';
import { Container } from './styles';
import Movements from '../Movements';
import PropTypes from 'prop-types';

export default function Content({ movements }) {
  const refContainer = useRef(null);

  useEffect(() => {
    const { scrollWidth, clientWidth } = refContainer.current;

    refContainer.current.scrollLeft = (scrollWidth - clientWidth) / 2;
  }, []);

  return (
    <>
      <Container ref={refContainer} >
        <Timeline />
        <Movements movements={movements} />
        <MarkerHourNow />
      </Container>
    </>
  );
}

Content.protoTypes = {
  movements: PropTypes.array.isRequired,
}