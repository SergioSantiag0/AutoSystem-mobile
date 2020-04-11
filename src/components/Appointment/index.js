import React from 'react';
import PropTypes from 'prop-types';

import { View } from 'react-native';
import { format, parseISO } from 'date-fns';

import { Container, TextStyled, TextConclude } from './styles';

export default function Appointment({ data }) {
  return (
    <Container past={data.past}>
      <View>
        <TextStyled>
          Data: {format(parseISO(data.date), 'dd/MM/yyyy')}
        </TextStyled>
        <TextStyled>Hora: {format(parseISO(data.date), 'HH:mm')}</TextStyled>
      </View>
      {!data.past ? (
        <TextConclude past={data.past}>Pendente</TextConclude>
      ) : (
        <TextConclude past={data.past}>Concluída</TextConclude>
      )}
    </Container>
  );
}

Appointment.propTypes = {
  data: PropTypes.shape().isRequired,
};
