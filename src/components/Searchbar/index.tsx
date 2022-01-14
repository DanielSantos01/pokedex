import React from 'react';

import {SearchbarProps} from './interfaces';
import {Input} from './styles';

const SearchBar: React.FC<SearchbarProps> = ({
  onTextChange,
  placeholder,
  value,
}) => {
  return (
    <Input
      placeholder={placeholder}
      onChangeText={onTextChange}
      value={value}
    />
  );
};

export default SearchBar;
