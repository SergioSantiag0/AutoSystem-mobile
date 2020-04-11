import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #f6f8fa;
  width: 100%;
`;

export const Content = styled.View`
  flex: 1;
  width: 80%;
  margin: 10px auto;
`;

export const HeaderText = styled.Text`
  width: 100%;
  margin: 10px auto;
  border-radius: 2px;
  background: #fff;
  font-weight: bold;
  elevation: 5px;
  text-align: center;
  font-size: 24px;
  padding: 10px;
  color: rgba(0, 0, 0, 0.7);
`;

export const DataContent = styled.ScrollView`
  background: #fff;
  margin: 10px 0;
  border-radius: 2px;
  elevation: 5px;
  padding: 15px;
`;

export const TextContent = styled.View`
  width: 100%;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const TitleText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin: 0 0 5px 0;
  color: rgba(0, 0, 0, 0.7);
`;

export const DataText = styled.Text`
  font-size: 16px;
  color: ${props =>
    props.ativo ? 'rgba(5,193,72, 0.8)' : 'rgba(255, 0, 0, 0.5)'};
`;
