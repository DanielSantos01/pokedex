import React from 'react';

import {CellProps} from './interfaces';
import {Container, Content} from './styles';

const Cell: React.FC<CellProps> = ({content, selected, callback}) => {
  return (
    <Container selected={selected} onPress={() => callback(content)}>
      <Content selected={selected}>{content}</Content>
    </Container>
  );
};

export default Cell;
