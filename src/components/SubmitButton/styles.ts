import styled from 'styled-components/native';
import {Button as Btn, ActivityIndicator} from '@ant-design/react-native';

interface OptionalProps {
  color?: string;
}

export const Button = styled(Btn)<OptionalProps>`
  width: 100%;
  height: 56px;
  border-radius: 8px;
  background-color: ${({color}) => color || '#2e6eb5'};
  border: 0px;
`;

export const ButtonContent = styled.Text`
  font-size: 16px;
  font-weight: 700;
  color: #ffffff;
`;

export const Loader = styled(ActivityIndicator)``;
