import React, { useState, useMemo, useEffect } from 'react';
import { TouchableHighlight } from 'react-native';
import {
  format,
  subDays,
  addDays,
  setHours,
  setMinutes,
  setSeconds,
  setMilliseconds,
  isBefore,
  isEqual,
  parseISO,
} from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';
import pt from 'date-fns/locale/pt';

import IconC from 'react-native-vector-icons/Entypo';
import Header from '../../components/Header';
import ScheduleItem from '../../components/ScheduleItem';

import api from '../../services/api';

import { useUserData } from '../../context/UserData';

import { Container, GroupButtons, DateText, List } from './styles';

const range = [7, 8, 9, 10, 11, 15, 16, 17, 18, 19];

export default function AgendaInstrutor({ navigation }) {
  const { userData } = useUserData();

  const [agenda, setAgenda] = useState([]);
  const [date, setDate] = useState(new Date());

  const { id } = userData;

  const dateFormatted = useMemo(
    () => format(date, "d 'de' MMMM", { locale: pt }),
    [date]
  );

  useEffect(() => {
    async function loadSchedule() {
      const response = await api.get(`agenda/${id}`, {
        params: { date },
      });
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

      const data = range.map(hour => {
        const checkDate = setMilliseconds(
          setSeconds(setMinutes(setHours(date, hour), 0), 0),
          0
        );
        const compareDate = utcToZonedTime(checkDate, timezone);

        return {
          time: `${hour}:00h`,
          past: isBefore(compareDate, new Date()),
          aula: response.data.find(a => isEqual(parseISO(a.date), compareDate)),
        };
      });
      setAgenda(data);
    }
    loadSchedule();
  }, [date, id]);

  function handlePrevDay() {
    setDate(subDays(date, 1));
  }

  function handleNextDay() {
    setDate(addDays(date, 1));
  }

  function handleOpenDrawer() {
    navigation.openDrawer();
  }
  return (
    <Container>
      <Header title="Agenda" handleOpenDrawer={handleOpenDrawer} />
      <GroupButtons>
        <TouchableHighlight onPress={handlePrevDay} underlayColor="none">
          <IconC name="chevron-left" size={40} color="#05c148" />
        </TouchableHighlight>
        <DateText>{dateFormatted}</DateText>
        <TouchableHighlight onPress={handleNextDay} underlayColor="none">
          <IconC name="chevron-right" size={40} color="#05c148" />
        </TouchableHighlight>
      </GroupButtons>
      <List
        data={agenda}
        keyExtractor={item => String(item)}
        renderItem={({ item }) => <ScheduleItem data={item} />}
      />
    </Container>
  );
}
