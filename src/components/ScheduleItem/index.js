import React from 'react';
import PropTypes from 'prop-types';

import { View } from 'react-native';

import { Container, TextTime, TextName, TextConclude } from './styles';

export default function ScheduleItem({ data }) {
  return (
    <Container past={data.past}>
      <View>
        <TextTime available={!data.aula}>{data.time}</TextTime>
        <TextName available={!data.aula}>
          {data.aula ? data.aula.aluno.nome : 'Em aberto'}
        </TextName>
      </View>
      {!data.past ? (
        <TextConclude past={data.past}>Pendente</TextConclude>
      ) : (
        <TextConclude past={data.past}>Concluída</TextConclude>
      )}
    </Container>
  );
}
