import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const Container = styled(LinearGradient)`
  flex: 1;
`;

export const List = styled.FlatList.attrs({
  contentContainerStyle: { padding: 30 },
  showsVerticalScrollIndicator: false,
})``;

export const Content = styled.View`
  flex-direction: row;
  width: 80%;
  margin: 20px auto 0 auto;
  justify-content: space-between;
`;

export const Div = styled.View`
  align-items: center;
`;

export const Circle = styled.Text`
  font-size: 18px;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: #7159c1;
  color: #fff;
  padding: 5px;
  width: 35px;
  height: 35px;
  border-radius: 20;
`;

export const CircleText = styled.Text`
  font-size: 18px;
  color: #fff;
`;
