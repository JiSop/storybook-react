import React from 'react';
import styled, { css } from 'styled-components';
import Colors from '../../styles/Colors'

type ButtonProps = {
  children: React.ReactNode,
  disabled?: boolean
  fullWidth?: boolean
  roundShape?: boolean,
  outline?: boolean,
};

const StyledButton = styled.button<ButtonProps>`
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 1.25px;
  text-align: center;
  border: none;
  border-radius: ${({ roundShape }) => roundShape ? '28px' : '4px'};
  padding: 0.5rem 1rem;
  min-height: 36px;
  min-width: 96px;
  outline: none;
  cursor: pointer;
  &:hover {
    background-color: ${Colors.primaryHover};
  }
  &,
  &:visited {
    color: ${Colors.primary};
  }
  &:disabled {
    &,
    &:hover {
    color: ${Colors.gray[4]};
    background-color: ${Colors.gray[1]};
    cursor: not-allowed;
    box-shadow: none;
    border-color: ${Colors.gray[4]};
    }
  }
  ${({ fullWidth }) => fullWidth &&
    css`
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
      width: 100%;
    `}
  ${({ outline }) => outline &&
    css`
      background-color: ${Colors.surface};
      border: 1px solid ${Colors.primary};
      min-height: 24px;
      &,
      &:hover,
      &:visited {
        box-shadow: none;
        color: ${Colors.primary};
      }
      &:hover {
        background-color: ${Colors.primaryHover};
      }
    `}
`;

/**
 * <Button /> 랜더링 (default: text style)
 * @param {string} [color] - 버튼의 색상 지정
 * @param {boolean} [roundShape] - 둥근 모양의 버튼
 * @param {boolean} [outline] - 아웃라인 스타일 버튼
 * @param {boolean} [fullWidth] - 버튼의 크기 최대 넓이
 */
export const Button: React.FC<ButtonProps> = props => {
  const {
  children,
  roundShape,
  outline,
  fullWidth,
  disabled,
} = props;
  return (
    <StyledButton
      outline={outline}
      fullWidth={fullWidth}
      roundShape={roundShape}
      disabled={disabled}
    >
      {children}
    </StyledButton>
  );
};
