import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';

export const Container = styled.SafeAreaView`
  height: 15%;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  background: #7159c1;
`;

export const Content = styled.View`
  margin: 0 0 20px 30px;
`;

export const Title = styled.Text`
  font-size: 26px;
  font-weight: bold;
  color: #fff;
  margin: 0 auto 20px 75px;
`;

export const Icone = styled(Icon)`
  align-self: flex-start;
`;
