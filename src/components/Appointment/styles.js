import styled from 'styled-components/native';
import { Text, TouchableOpacity } from 'react-native';

export const Container = styled.View`
  margin-bottom: 15px;
  padding: 20px;
  border-radius: 5px;
  background: #fff;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TextStyled = styled(Text)`
  margin-bottom: 3px;
`;

export const Button = styled(TouchableOpacity)`
  background: #04d361;
  border: 0;
  padding: 8px;
  border-radius: 4px;
`;

export const ButtonText = styled(Text)`
  color: #fff;
  font-weight: bold;
`;
