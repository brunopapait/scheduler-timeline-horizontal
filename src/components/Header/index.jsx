import { useEffect, useState, useRef } from 'react';
import { Container } from './styles';
import { Popover, Calendar } from 'antd';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import ptBr from 'antd/lib/calendar/locale/pt_BR';
import dayjs from 'dayjs';

function Header({ load }) {
  const [selectedDate, setSelectedDate] = useState(dayjs().format('MMM D, YYYY'));
  const [visiblePopover, setVisiblePopover] = useState(false);

  const refCalendar = useRef(<Calendar fullscreen={false} style={{ width: '300px' }} onSelect={handleSelectDate} locale={ptBr} />);

  useEffect(() => {
    load(dayjs(selectedDate).format('YYYY-MM-DD'));
  }, [selectedDate]);

  function onSelectNextDay() {
    setSelectedDate(dayjs(selectedDate).add(1, 'd').format('MMM D, YYYY'));
  }
  function onSelectPrevDay() {
    setSelectedDate(dayjs(selectedDate).subtract(1, 'd').format('MMM D, YYYY'));
  }

  function handleSelectDate(date) {
    setSelectedDate(dayjs(date).format('MMM D, YYYY'));
    setVisiblePopover(prevState => !prevState);
  }

  function handleChangeVisiblePopover() {
    setVisiblePopover(prevState => !prevState);
  }

  function parseDate() {
    const dates = {
      'Jan': 'Jan',
      'Feb': 'Fev',
      'Mar': 'Mar',
      'Apr': 'Abr',
      'May': 'Mai',
      'Jun': 'Jun',
      'Jul': 'Jul',
      'Aug': 'Ago',
      'Sep': 'Set',
      'Oct': 'Out',
      'Nov': 'Nov',
      'Dec': 'Dez',
    }

    const monthSplited = selectedDate.split(' ')[0];
    return selectedDate.replace(monthSplited, dates[monthSplited]);
  };

  return (
    <Container className="header">
      <span className="nav" onClick={onSelectPrevDay}>
        <AiOutlineLeft color='#000' size={20} />
      </span>
      <Popover visible={visiblePopover} onVisibleChange={handleChangeVisiblePopover} content={refCalendar.current} trigger="click">
        <span className="date">{parseDate()}</span>
      </Popover>
      <span className="nav" onClick={onSelectNextDay}>
        <AiOutlineRight color='#000' size={20} />
      </span>
    </Container>
  );
}

export default Header;