import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';

export const Container = styled.SafeAreaView`
  height: 15%;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  background: #05c148;
`;

export const Content = styled.View`
  margin: 0 0 20px 30px;
`;

export const Title = styled.Text`
  font-size: 26px;
  width: 100%;
  font-weight: bold;
  color: #fff;
  margin-bottom: 17px;
  margin-left: 75px;
`;

export const Icone = styled(Icon)`
  align-self: flex-start;
`;
