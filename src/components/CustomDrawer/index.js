import React from 'react';
import { DrawerNavigatorItems } from 'react-navigation-drawer';

import { useUserData } from '../../context/UserData';

import {
  Container,
  UserArea,
  WelcomeText,
  UserDates,
  TextDates,
} from './styles';

export default function CustomDrawer({ ...props }) {
  const { userData } = useUserData();

  return (
    <Container>
      <UserArea>
        <WelcomeText>Bem-vindo</WelcomeText>
        <UserDates>
          <TextDates>Nome: {userData.nome}</TextDates>
          <TextDates>CPF: {userData.cpf}</TextDates>
        </UserDates>
      </UserArea>

      <DrawerNavigatorItems {...props} />
    </Container>
  );
}
