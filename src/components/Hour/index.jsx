import PropTypes from 'prop-types';
import { HourComponent } from './styles';

export default function Hour({ hour }) {
  return (
    <HourComponent>
      <span>{hour}</span>
    </HourComponent>
  );
}

Hour.propTypes = {
  hour: PropTypes.string.isRequired,
};

