import React from 'react';
import { View } from 'react-native';
import { format, parseISO } from 'date-fns';

import { Container, TextStyled, Button, ButtonText } from './styles';

export default function Appointment({ data }) {
  return (
    <Container>
      <View>
        <TextStyled>
          Data: {format(parseISO(data.date), 'dd/MM/yyyy')}
        </TextStyled>
        <TextStyled>Hora: {format(parseISO(data.date), 'HH:mm')}</TextStyled>
      </View>
      <Button>
        <ButtonText>Concluir</ButtonText>
      </Button>
    </Container>
  );
}
