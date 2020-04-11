import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #f6f8fa;
`;

export const Content = styled.View`
  width: 80%;
  margin: 20px auto 0 10px;
`;

export const TitleText = styled.Text`
  font-size: 24px;
  color: #05c148;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const TextContent = styled.Text`
  font-size: 20px;
  color: #696969;
  margin-bottom: 10px;
  line-height: 30px;
`;

export const TextStyled = styled.Text`
  margin-bottom: 10px;
  font-size: 18px;
  line-height: 30px;
`;

export const Button = styled.TouchableOpacity`
  background: #00b652;
  width: 90%;
  margin: 7px 0px;
  align-items: center;
  font-size: 17px;
  border-radius: 7px;
  padding: 5px 10px;
`;

export const BtnContainer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  padding: 0 10px;
`;

export const TextButton = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 18px;
  margin: 0 auto;
  padding: 4px;
`;
