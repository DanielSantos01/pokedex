import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: white;
  padding: 15px;
`;

export const Image = styled.Image`
  width: 100%;
  height: 50px;
`;

export const Filter = styled.Image`
  width: 18px;
  height: 20px;
`;

export const RowContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 95%;
  align-self: center;
`;

export const ContentContainer = styled.View`
  flex: 1;
  align-items: center;
  margin-top: 35px;
`;

export const Button = styled.TouchableOpacity``;

export const PokemonsContainer = styled.View`
  margin-top: 50px;
  width: 100%;
`;

export const Background = styled.TouchableOpacity`
  width: 45%;
  height: 96px;
  border-radius: 20px;
  background-color: #bdbdbd;
  padding: 10px;
`;

export const Pokemon = styled.Image`
  width: 75px;
  height: 75px;
  position: absolute;
  top: -15px;
  left: 25%;
`;

export const NamePlace = styled.View`
  align-items: center;
  justify-content: center;
  height: 18px;
  border-radius: 10px;
  background-color: #676767;
  margin-top: auto;
`;

export const Title = styled.Text`
  font-size: 12px;
  font-weight: 800;
  color: #ffffff;
`;
