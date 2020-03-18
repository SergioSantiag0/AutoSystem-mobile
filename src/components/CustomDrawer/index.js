import React from 'react';
import { DrawerNavigatorItems } from 'react-navigation-drawer';

import {
  Container,
  UserArea,
  WelcomeText,
  UserDates,
  TextDates,
} from './styles';

export default function CustomDrawer({ ...props }) {
  return (
    <Container>
      <UserArea>
        <WelcomeText>Bem-vindo</WelcomeText>
        <UserDates>
          <TextDates>Aluno: Sérgio Felipe</TextDates>
          <TextDates>CPF: 155.940.006-40</TextDates>
        </UserDates>
      </UserArea>

      <DrawerNavigatorItems {...props} />
    </Container>
  );
}
