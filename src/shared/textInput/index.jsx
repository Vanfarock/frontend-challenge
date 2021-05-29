import React from 'react';
import { Input, InputContainer, Icon } from './styles';
import PropTypes from 'prop-types';

const TextInput = ({icon, onChange, ...other}) => {
  return (
    <InputContainer>
      <Icon src={icon} />
      <Input {...other} onChange={onChange} />
    </InputContainer>
  );
};

TextInput.propTypes = {
  icon: PropTypes.string.isRequired,
  onChange: PropTypes.func,
}

export default TextInput;