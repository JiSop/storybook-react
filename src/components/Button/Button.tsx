import React from 'react';
import styled, { css } from 'styled-components';
import Colors from '../../styles/Colors'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  hex?: string;
  outline?: boolean;
  fullWidth?: boolean;
  roundShape?: boolean;
};

const StyledButton = styled.button<ButtonProps>`
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 1.25px;
  text-align: center;
  border: ${({ outline, hex }) => outline ? `1px solid ${hex}` : 'none'};
  border-radius: ${({ roundShape }) => roundShape ? '28px' : '4px'};
  padding: 0.5rem 1rem;
  min-height: 36px;
  min-width: 96px;
  outline: none;
  cursor: pointer;
  background-color: white;
  &:hover {
    /* HEX 값 뒤에 투명도를 써서 지정 가능 (사실은 템플릿 리터럴이기 때문에 가능하다) */
    background-color: ${({ hex }) => hex ? hex : '#37352f'}0a;
  }
  &,
  &:visited {
    color: ${({ hex }) => hex ? hex : '#37352f'};
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
`;

/**
 * <Button /> 랜더링 (default: text style)
 * @param {string} [hex] - 버튼색 지정 HEX
 * @param {boolean} [roundShape] - 둥근 모양의 버튼
 * @param {boolean} [outline] - 아웃라인 스타일 버튼
 * @param {boolean} [fullWidth] - 버튼의 크기 최대 넓이
 */
export const Button = (props: ButtonProps) => {
  const {
    hex,
    outline,
    fullWidth,
    roundShape
  } = props;
  return (
    <StyledButton
      {...props}
      hex={hex}
      outline={outline}
      fullWidth={fullWidth}
      roundShape={roundShape}
    />
  );
};

// Button.defaultProps = {
//   hex: '#37352f',
// };
// export { Button };
