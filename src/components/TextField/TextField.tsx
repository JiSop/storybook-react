import React from 'react';
import styled from 'styled-components';
import Colors from '../../styles/Colors'

const InputBlock = styled.div`
  width: 300px;
  border-radius: 4px;
  border: 1px solid ${Colors.gray[4]};
  padding: 2px;
  &:hover {
    border-color: ${Colors.gray[8]};
  }
  &:focus-within {
    border-color: ${Colors.green};
  }
`;

const Input = styled.input`
  border: 0px;
  outline: none;
  width: 100%;
  height: 100%;
  font-size: 14px;
  line-height: 1.14;
  padding: 1px;
  &::placeholder {
    color: ${Colors.gray[5]};
  }
  &:focus {
      caret-color: ${Colors.green};
    }
`;

export const TextField = () => {
  return (
    <InputBlock>
      <Input />
    </InputBlock>
  );
};


