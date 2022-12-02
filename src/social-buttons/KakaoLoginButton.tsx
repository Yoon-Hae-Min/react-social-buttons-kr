import React from 'react';
import styled from '@emotion/styled';
import { KakaoButtonProps } from './types/KakaoLoginButton';

const defaultWidth = {
  standard: '15rem',
  square: '3rem',
  circle: '3rem',
};

const defaultHeight = {
  standard: '3rem',
  square: '3rem',
  circle: '3rem',
};

const LoginButton = styled.button<Pick<KakaoButtonProps, 'height' | 'width' | 'isRound' | 'shape'>>`
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
  background-color: #fee500;
  &:hover {
    background-color: #f2da00;
  }
`;

const Symbol = styled.div`
  margin: 0rem 0.5rem 0rem 0.5rem;
`;

const alignCss = {
  start: 'margin: auto;',
  center: '',
};

const LoginText = styled.span<Pick<KakaoButtonProps, 'align'>>`
  ${(props) => alignCss[props.align ?? 'start']};
  font-size: 1rem;
  text-align: center;
  color: #191919;
`;

const KaKaoLoginButton = ({ width, height, children, align, isRound, shape, ...props }: KakaoButtonProps) => {
  return (
    <LoginButton width={width} height={height} isRound={isRound} shape={shape} {...props}>
      <Symbol>
        <svg width="27" height="25" viewBox="0 0 27 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.5 21C20.9559 21 27 16.299 27 10.5C27 4.70102 20.9559 0 13.5 0C6.04413 0 0 4.70102 0 10.5C0 14.1933 2.45172 17.4413 6.15833 19.313L4.5 25L13.2641 20.9984C13.3426 20.9995 13.4212 21 13.5 21Z"
            fill="black"
          />
        </svg>
      </Symbol>
      {(shape === 'standard' || shape === undefined) && (
        <LoginText align={align}>{children ?? '카카오로 시작하기'}</LoginText>
      )}
    </LoginButton>
  );
};

export default KaKaoLoginButton;
