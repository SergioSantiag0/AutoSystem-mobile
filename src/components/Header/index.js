import React from 'react';

import { Container, Content, Title, Icone } from './styles';

export default function Header({ title }) {
  return (
    <Container>
      <Content>
        <Icone
          onPress={() => {
            alert('Vai abrir o menu');
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
