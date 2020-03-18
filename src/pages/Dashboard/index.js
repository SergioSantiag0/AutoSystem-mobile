import React, { useEffect, useState } from 'react';

import api from '../../services/api';

import Header from '../../components/Header';
import Appointment from '../../components/Appointment';

import { Container, List, Content, Div, Circle, CircleText } from './styles';

export default function Dashboard({ navigation }) {
  const [aulas, setAulas] = useState([]);
  useEffect(() => {
    async function loadSchedule() {
      const response = await api.get(`/aulas/${navigation.getParam('id')}`);
      setAulas(response.data);
    }
    loadSchedule();
  }, [navigation]);

  function handleOpenDrawer() {
    navigation.openDrawer();
  }

  return (
    <Container colors={['#545567', '#141518']}>
      <Header title="Agenda" handleOpenDrawer={handleOpenDrawer} />
      <Content>
        <Div>
          <Circle>{aulas.length}</Circle>
          <CircleText>Agendadas</CircleText>
        </Div>
        <Div>
          <Circle>5</Circle>
          <CircleText>Finalizadas</CircleText>
        </Div>
        <Div>
          <Circle>8</Circle>
          <CircleText>Restantes</CircleText>
        </Div>
      </Content>
      <List
        data={aulas}
        keyExtractor={item => String(item)}
        renderItem={({ item }) => <Appointment data={item} />}
      />
    </Container>
  );
}
