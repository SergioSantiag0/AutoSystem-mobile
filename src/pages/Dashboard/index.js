import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

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

  const completed = aulas.filter(aula => aula.past === true);

  return (
    <Container>
      <Header title="Agenda" handleOpenDrawer={handleOpenDrawer} />
      <Content>
        <Div>
          <Circle>{aulas.length}</Circle>
          <CircleText>Agendadas</CircleText>
        </Div>
        <Div>
          <Circle>{completed.length}</Circle>
          <CircleText>Finalizadas</CircleText>
        </Div>
        <Div>
          <Circle>{aulas.length - completed.length}</Circle>
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

Dashboard.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    getParam: PropTypes.func.isRequired,
    openDrawer: PropTypes.func.isRequired,
  }).isRequired,
};
