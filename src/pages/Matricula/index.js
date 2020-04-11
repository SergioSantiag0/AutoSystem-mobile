import React from 'react';
import PropTypes from 'prop-types';
import { parseISO, format, addYears } from 'date-fns';

import { useUserData } from '../../context/UserData';

import Header from '../../components/Header';

import {
  Container,
  Content,
  HeaderText,
  DataContent,
  TextContent,
  TitleText,
  DataText,
} from './styles';

export default function Matricula({ navigation }) {
  const { userData } = useUserData();

  function handleOpenDrawer() {
    navigation.openDrawer();
  }

  return (
    <Container>
      <Header title="Matrícula" handleOpenDrawer={handleOpenDrawer} />
      <Content>
        <HeaderText>{userData.nome}</HeaderText>

        <DataContent>
          <TextContent>
            <TitleText>CPF:</TitleText>
            <DataText>{userData.cpf}</DataText>
          </TextContent>

          <TextContent>
            <TitleText>Data Matric: </TitleText>
            <DataText>
              {format(parseISO(userData.data_matric), 'dd-MM-yyyy')}
            </DataText>
          </TextContent>

          <TextContent>
            <TitleText>Vencimento da pauta: </TitleText>
            <DataText>
              {format(
                addYears(parseISO(userData.data_matric), 1),
                'dd-MM-yyyy'
              )}
            </DataText>
          </TextContent>

          <TextContent>
            <TitleText>Categoria:</TitleText>
            <DataText>{userData.categoria}</DataText>
          </TextContent>

          <TextContent>
            <TitleText>Veículo:</TitleText>
            <DataText>{userData.veiculo.placa}</DataText>
          </TextContent>

          <TextContent>
            <TitleText>Instrutor:</TitleText>
            <DataText>{userData.instrutor.nome}</DataText>
          </TextContent>

          <TextContent>
            <TitleText>Status:</TitleText>
            <DataText ativo={userData || !userData}>
              {userData.ativo ? 'Ativo' : 'Inativo'}
            </DataText>
          </TextContent>
        </DataContent>
      </Content>
    </Container>
  );
}

Matricula.propTypes = {
  navigation: PropTypes.shape({
    openDrawer: PropTypes.func.isRequired,
  }).isRequired,
};
