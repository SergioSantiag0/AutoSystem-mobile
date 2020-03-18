import React from 'react';
import { DrawerView } from 'react-navigation-drawer';

import { Container, Content, Title, Icone } from './styles';

export default function Header({ title, handleOpenDrawer }) {
  return (
    <Container>
      <Content>
        <Icone
          onPress={() => {
            handleOpenDrawer();
          }}
          name="menu"
          color="#fff"
          size={30}
        />
      </Content>
      <Title>{title}</Title>
    </Container>
  );
}
