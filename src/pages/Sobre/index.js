import React from 'react';
import { Linking } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';

import Header from '../../components/Header';

import {
  Container,
  Content,
  TitleText,
  TextStyled,
  TextContent,
  Button,
  TextButton,
  BtnContainer,
} from './styles';

export default function Sobre({ navigation }) {
  function handleOpenDrawer() {
    navigation.openDrawer();
  }

  function sendWhatsapp() {
    Linking.openURL(`whatsapp://send?phone="+553399961523"&text=${'Olá, '}`);
  }

  return (
    <Container>
      <Header title="Sobre" handleOpenDrawer={handleOpenDrawer} />
      <Content>
        <TitleText>Endereço</TitleText>
        <TextStyled>
          R. Filadélfo Coutinho de Araújo - Manhuaçu - MG, 36905-000
        </TextStyled>

        <TitleText>E-mail</TitleText>
        <TextContent>Tem alguma dúvida?</TextContent>
        <TextStyled>autoescola@gmail.com</TextStyled>

        <TitleText>Telefone</TitleText>
        <TextContent>Você pode ligar a qualquer hora</TextContent>
        <TextStyled>(33) 3333-3333</TextStyled>

        <TextContent>Converse conosco</TextContent>
        <Button type="button" onPress={sendWhatsapp}>
          <BtnContainer>
            <Icon name="whatsapp" color="#fff" size={24} />
            <TextButton>Whatsapp</TextButton>
          </BtnContainer>
        </Button>
      </Content>
    </Container>
  );
}

Sobre.propTypes = {
  navigation: PropTypes.shape({
    openDrawer: PropTypes.func.isRequired,
  }).isRequired,
};
