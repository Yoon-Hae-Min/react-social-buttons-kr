import styled from '@emotion/styled';
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

export const SocialButton = styled.button<SocialLoginButton>`
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

export const SocialText = styled.span<SocialLoginButton>`
  ${(props) => alignCss[props.align ?? 'start']};
  font-size: 1rem;
  text-align: center;
  color: #191919;
`;
