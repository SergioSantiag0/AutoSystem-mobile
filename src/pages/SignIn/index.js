import React, { useState } from 'react';
import { ToastAndroid } from 'react-native';

import { cpf } from 'cpf-cnpj-validator';

import api from '../../services/api';

import logo from '../../assets/logo3.png';

import {
  Container,
  TextInputStyled,
  Button,
  TextButton,
  Imagem,
  TextContact,
} from './styles';

export default function SignIn({ navigation }) {
  const [cpfUser, setCpf] = useState('15594000640');

  async function handleSubmit(cpf_user) {
    if (cpf.isValid(cpf_user)) {
      const cpf_number = cpf_user.replace(/\D/g, ''); // Remove tudo o que não é dígito
      try {
        await api.get(`/alunos/${cpf_number}`).then(res => {
          navigation.navigate('Dashboard', { id: res.data.id });
        });
      } catch (e) {
        ToastAndroid.showWithGravityAndOffset(
          'Aluno não encontrado',
          ToastAndroid.LONG,
          ToastAndroid.BOTTOM,
          25,
          50
        );
      }
    } else {
      ToastAndroid.showWithGravityAndOffset(
        'CPF inválido',
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        50
      );
    }
  }

  return (
    <Container behavior="padding" enabled>
      <Imagem source={logo} />
      <TextInputStyled
        placeholder="Digite seu CPF"
        autoCorrect={false}
        keyboardType="numeric"
        value={cpfUser}
        onChangeText={text => setCpf(text)}
        mask="000.000.000-00"
      />
      <Button
        type="submit"
        onPress={() => {
          handleSubmit(cpfUser);
        }}
      >
        <TextButton>Acessar</TextButton>
      </Button>
      <TextContact>Entre em contato conosco</TextContact>
    </Container>
  );
}
