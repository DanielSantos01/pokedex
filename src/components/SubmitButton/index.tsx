import React from 'react';

import {SubmitButtonProps} from './interfaces';
import {Button, ButtonContent, Loader} from './styles';

const SubmitButton: React.FC<SubmitButtonProps> = ({
  isLoading,
  label,
  onPress,
  color,
  style,
}) => {
  return (
    <Button onPress={onPress} color={color} style={style}>
      {isLoading ? (
        <Loader color="#ffffff" />
      ) : (
        <ButtonContent>{label}</ButtonContent>
      )}
    </Button>
  );
};

export default SubmitButton;
