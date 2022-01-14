import React from 'react';

import data from './data/filters.json';
import {Container, RowContainer, Title} from './styles';

const Sidebar: React.FC = () => {
  return (
    <Container>
      <RowContainer>
        <Title>Filtro</Title>
      </RowContainer>
    </Container>
  );
};

export default Sidebar;
