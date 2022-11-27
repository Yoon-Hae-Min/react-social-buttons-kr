import React from 'react';
import styled from '@emotion/styled';
import { KakaoButtonProps } from './type';

const align = {
  start: 'margin: auto',
  center: '',
};

const LoginButton = styled.button<Pick<KakaoButtonProps, 'height' | 'width' | 'border'>>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.width ?? '15rem'};
  height: ${(props) => props.height ?? '3rem'};
  padding: 0.5rem;
  border-radius: ${(props) => (props.border ? '0.5rem' : 'none')};
  border: none;
  outline: none;
  background-color: #fee500;
  cursor: pointer;
`;

const Symbol = styled.div`
  margin: 0rem 0.5rem 0rem 0.5rem;
`;

const LoginText = styled.span<Pick<KakaoButtonProps, 'align'>>`
  ${(props) => align[props.align ?? 'start']};
  font-size: 0.9375rem;
  text-align: center;
  color: #191919;
`;

const KaKaoLoginButton = ({
  width,
  height,
  text = '카카오로 시작하기',
  align,
  onClick,
  style,
  border = true,
  size,
  variation,
}: KakaoButtonProps) => {
  return (
    <LoginButton width={width} height={height} onClick={onClick} style={style} border={border}>
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
      <LoginText align={align}>{text}</LoginText>
    </LoginButton>
  );
};

export default KaKaoLoginButton;
