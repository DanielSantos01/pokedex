import styled from 'styled-components/native';
import {WingBlank} from '@ant-design/react-native';

export const Container = styled.ImageBackground`
  flex: 1;
`;

export const Image = styled.Image`
  width: 100%;
  height: 80px;
  margin-top: 40px;
`;

export const CardContent = styled(WingBlank)`
  width: 340px;
  height: 385px;
  border-radius: 8px;
  elevation: 4;
  background-color: #ffffff;
  padding: 20px 15px;
  position: absolute;
  align-self: center;
  top: 25%;
`;

export const Title = styled.Text`
  font-size: 25px;
  font-weight: 600;
  color: #000000;
`;

export const Description = styled.Text`
  font-size: 15px;
  color: #000000;
`;

export const InputsContainer = styled.View`
  margin-top: 50px;
  width: 100%;
`;
