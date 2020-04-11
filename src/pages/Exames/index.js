import React, { useEffect, useState } from 'react';
import { parseISO, format } from 'date-fns';
import PropTypes from 'prop-types';
import { useUserData } from '../../context/UserData';

import api from '../../services/api';

import Header from '../../components/Header';

import { Container, Content, PrimaryText, Date } from './styles';

export default function Exames({ navigation }) {
  const { userData } = useUserData();

  const [exames, setExames] = useState([]);

  useEffect(() => {
    async function loadExam() {
      const response = await api.get(`/exames/aluno/${userData.id}`);
      setExames(response.data);
    }
    loadExam();
  }, [userData.id]);

  function handleOpenDrawer() {
    navigation.openDrawer();
  }
  return (
    <Container>
      <Header title="Exames" handleOpenDrawer={handleOpenDrawer} />
      <Content>
        {exames.map(exame => (
          <PrimaryText>
            Olá {userData.nome}, {'\n'}Você tem um exame de direção agendado
            para o para o dia{' '}
            <Date>{format(parseISO(exame.date), 'dd/MM/yyyy')}</Date>.
          </PrimaryText>
        ))}
      </Content>
    </Container>
  );
}

Exames.propTypes = {
  navigation: PropTypes.shape({
    openDrawer: PropTypes.func.isRequired,
  }).isRequired,
};
