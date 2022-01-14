import styled from 'styled-components/native';

interface OptionalProps {
  selected?: boolean;
}

export const Container = styled.TouchableOpacity<OptionalProps>`
  width: 45%;
  height: 40px;
  border-radius: 4px;
  background-color: ${({selected}) => (selected ? '#2E6EB5' : '#D8D8D8')};
  align-items: center;
  align-items: center;
`;

export const Content = styled.Text<OptionalProps>`
  font-size: 16px;
  font-weight: 700;
  color: ${({selected}) => (selected ? '#ffffff' : '#6B6060')};
`;
