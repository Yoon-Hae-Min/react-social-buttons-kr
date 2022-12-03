import styled from '@emotion/styled';
import { SYMBOL_HEIGHT, SYMBOL_WIDTH } from '../constants/size';
import { SocialLoginButton } from '../types/common';

const defaultWidth = {
  standard: '16rem',
  square: '3.5rem',
  circle: '3.5rem',
};

const defaultHeight = {
  standard: '3.5rem',
  square: '3.5rem',
  circle: '3.5rem',
};

export const SocialButton = <T extends SocialLoginButton>() =>
  styled.button<T>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${(props) => props.width ?? defaultWidth[props.shape ?? 'standard']};
    height: ${(props) => props.height ?? defaultHeight[props.shape ?? 'standard']};
    padding: 0.5rem;
    cursor: pointer;
    border-radius: ${(props) => (props.isRound ?? true ? '0.5rem' : 'none')};
    ${(props) => props.shape === 'circle' && 'border-radius: 50%;'}
    border: none;
    outline: none;
  `;
const alignCss = {
  start: 'margin: auto;',
  center: '',
};

export const SocialText = <T extends SocialLoginButton>() =>
  styled.span<T>`
    ${(props) => alignCss[props.align ?? 'start']};
    font-size: 1rem;
    text-align: center;
    color: #191919;
  `;

export const Symbol = styled.div`
  width: ${SYMBOL_WIDTH};
  height: ${SYMBOL_HEIGHT};
  margin: 0rem 0.6rem 0rem 0.6rem;
`;
