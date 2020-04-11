import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #ccc;
`;

export const GroupButtons = styled.View`
  flex-direction: row;
  align-self: center;
  align-items: center;
  margin-top: 10px;
`;

export const DateText = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin: 0 15px;
`;

export const List = styled.FlatList.attrs({
  contentContainerStyle: { padding: 30 },
  showsVerticalScrollIndicator: false,
})``;
