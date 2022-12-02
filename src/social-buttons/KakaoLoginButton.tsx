import React from 'react';
import styled from '@emotion/styled';
import { KakaoButtonProps } from '../types/KakaoLoginButton';
import { SocialButton, SocialText } from './CommonStyle';

const KakaoButton = styled(SocialButton)`
  background-color: #fee500;
  &:hover {
    background-color: #f2da00;
  }
`;

const Symbol = styled.div`
  margin: 0rem 0.5rem 0rem 0.5rem;
`;

const KaKaoLoginText = styled(SocialText)``;

const KaKaoLoginButton = ({ width, height, children, align, isRound, shape, ...props }: KakaoButtonProps) => {
  return (
    <KakaoButton width={width} height={height} isRound={isRound} shape={shape} {...props}>
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
        <KaKaoLoginText align={align}>{children ?? '카카오로 시작하기'}</KaKaoLoginText>
      )}
    </KakaoButton>
  );
};

export default KaKaoLoginButton;
