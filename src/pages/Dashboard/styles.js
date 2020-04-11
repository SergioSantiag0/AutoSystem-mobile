import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #ccc;
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
  background: #05c148;
  font-weight: bold;
  color: #fff;
  padding: 5px;
  margin-bottom: 10px;
  width: 35px;
  height: 35px;
  border-radius: 20;
`;

export const CircleText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.6);
`;
