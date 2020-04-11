import React from 'react';
import PropTypes from 'prop-types';

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

Header.propTypes = {
  title: PropTypes.string.isRequired,
  handleOpenDrawer: PropTypes.func.isRequired,
};
