import React, {useState, useCallback} from 'react';

import {InputProps} from './interfaces';
import {TextInput, Container, Button, Eye} from './styles';

const Input: React.FC<InputProps> = ({
  onTextChange,
  placeholder,
  value,
  label,
  isPassword,
}) => {
  const [isSecure, setSecure] = useState<boolean>(!!isPassword);

  const toggleSecurity = useCallback(() => {
    setSecure(!isSecure);
  }, [isSecure]);

  return (
    <Container>
      <TextInput
        underlineColor="rgba(0, 0, 0, 0.38)"
        activeUnderlineColor="#1554F6"
        value={value}
        onChangeText={onTextChange}
        placeholder={placeholder}
        label={label}
        secureTextEntry={isSecure}
      />

      {isPassword && (
        <Button onPress={toggleSecurity}>
          <Eye name={isSecure ? 'eye-invisible' : 'eye'} />
        </Button>
      )}
    </Container>
  );
};

export default Input;
