import styled from 'styled-components/native';
import { Text, TouchableOpacity } from 'react-native';

export const Container = styled.View`
  margin-bottom: 15px;
  padding: 20px;
  border-radius: 2px;
  background: #fff;

  opacity: ${props => (props.past ? 0.6 : 1)};
  elevation: 5;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-left-width: 5px;
  border-left-color: #404040;
`;

export const TextConclude = styled.Text`
  color: ${props => (props.past ? '#228B22' : '#f64c75')};
  font-size: 14px;
  font-weight: bold;
`;

export const TextStyled = styled(Text)`
  margin-bottom: 3px;
  font-size: 16px;
  font-weight: bold;
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
