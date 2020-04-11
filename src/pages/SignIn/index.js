import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { View, ToastAndroid } from 'react-native';
import { RadioButton } from 'react-native-paper';

import { cpf } from 'cpf-cnpj-validator';

import api from '../../services/api';

import { useUserData } from '../../context/UserData';

import logo from '../../assets/logo3.png';

import {
  Container,
  TextInputStyled,
  TextInputInstrutor,
  Button,
  TextButton,
  Imagem,
  TextContact,
  RadioContainer,
  RadioContent,
  RadioText,
} from './styles';

export default function SignIn({ navigation }) {
  // CPF do aluno
  const [cpfUser, setCpf] = useState('');
  // Nome e senha do instrutor
  const [cpfInstrutor, setCpfInstrutor] = useState('');
  const [senhaInstrutor, setSenhaInstrutor] = useState('');
  // Verifica qual campo está checkado aluno ou instrutor
  const [checked, setChecked] = useState('aluno');

  const { setUserData } = useUserData();

  async function handleSubmit(cpf_user) {
    if (cpf.isValid(cpf_user)) {
      const cpf_number = cpf_user.replace(/\D/g, ''); // Remove tudo o que não é dígito
      try {
        await api.get(`/alunos/${cpf_number}`).then(res => {
          setUserData(res.data);
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

  async function handleSubmitInstrutor(cpf_instrutor, password) {
    if (cpf.isValid(cpf_instrutor)) {
      const cpf_number = cpf_instrutor.replace(/\D/g, ''); // Remove tudo o que não é dígito
      try {
        await api
          .post(`/sessionInstrutor`, { cpf: cpf_number, password })
          .then(async res => {
            await setUserData(res.data);
            navigation.navigate('AgendaInstrutor');
          });
      } catch (e) {
        ToastAndroid.showWithGravityAndOffset(
          'Instrutor não encontrado',
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
      {checked === 'aluno' ? (
        <TextInputStyled
          placeholder="Digite seu CPF"
          autoCorrect={false}
          keyboardType="numeric"
          value={cpfUser}
          onChangeText={text => setCpf(text)}
          mask="000.000.000-00"
        />
      ) : (
        <View style={{ width: '100%', alignItems: 'center' }}>
          <TextInputStyled
            placeholder="Digite seu CPF"
            autoCorrect={false}
            keyboardType="numeric"
            value={cpfInstrutor}
            onChangeText={text => setCpfInstrutor(text)}
            mask="000.000.000-00"
          />
          <TextInputInstrutor
            secureTextEntry
            value={senhaInstrutor}
            onChangeText={senha => setSenhaInstrutor(senha)}
            placeholder="Digite sua senha"
            autoCorrect={false}
          />
        </View>
      )}
      <RadioContainer>
        <RadioContent>
          <RadioButton
            color="#fff"
            uncheckedColor="#ccc"
            value="aluno"
            status={checked === 'aluno' ? 'checked' : 'unchecked'}
            onPress={() => {
              setChecked('aluno');
            }}
          />
          <RadioText>Aluno</RadioText>
        </RadioContent>
        <RadioContent>
          <RadioButton
            color="#fff"
            uncheckedColor="#ccc"
            value="instrutor"
            status={checked === 'instrutor' ? 'checked' : 'unchecked'}
            onPress={() => {
              setChecked('instrutor');
            }}
          />
          <RadioText>Instrutor</RadioText>
        </RadioContent>
      </RadioContainer>
      <Button
        type="submit"
        onPress={() => {
          checked === 'aluno'
            ? handleSubmit(cpfUser)
            : handleSubmitInstrutor(cpfInstrutor, senhaInstrutor);
        }}
      >
        <TextButton>Acessar</TextButton>
      </Button>
      <TextContact>Entre em contato conosco</TextContact>
    </Container>
  );
}

SignIn.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    getParam: PropTypes.func.isRequired,
  }).isRequired,
};
