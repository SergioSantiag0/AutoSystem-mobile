import styled from 'styled-components/native';
import { TouchableOpacity, Text, Image } from 'react-native';

import MaskedInput from 'react-native-masked-input-text';

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  background: #17171a;

  justify-content: center;
  align-items: center;

  button {
    background: #fff;
  }
`;

export const Imagem = styled(Image)`
  margin-top: -100px;
  width: 70%;
`;

export const TextInputStyled = styled(MaskedInput)`
  background: #fff;
  width: 90%;
  margin-bottom: 15px;
  color: #222;
  font-size: 17px;
  border-radius: 7px;
  padding: 10px;
`;

export const Button = styled(TouchableOpacity)`
  background: #00b652;
  width: 90%;
  margin: 7px 0px;
  align-items: center;
  font-size: 17px;
  border-radius: 7px;
  padding: 10px;
`;

export const TextButton = styled(Text)`
  color: #fff;
  font-weight: bold;
  font-size: 17px;
  padding: 4px;
`;

export const TextContact = styled(Text)`
  color: #fd8906;
  margin-top: 10px;
  font-size: 17px;
`;
