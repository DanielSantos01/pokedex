import styled from 'styled-components/native';
import {TextInput as Input} from 'react-native-paper';
import {Icon} from '@ant-design/react-native';

export const Container = styled.View``;

export const TextInput = styled(Input)`
  width: 100%;
  height: 56px;
  border-radius: 5px;
  background-color: rgba(51, 51, 51, 0.06);
  border: 0px;
  margin-bottom: 20px;
  font-size: 16px;
`;

export const Button = styled.TouchableOpacity`
  position: absolute;
  top: 19px;
  right: 10px;
`;

export const Eye = styled(Icon)`
  color: rgba(0, 0, 0, 0.6);
`;
