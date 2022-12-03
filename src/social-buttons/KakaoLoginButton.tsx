import React from 'react';
import styled from '@emotion/styled';
import { KakaoButtonProps } from '../types/KakaoLoginButton';
import { SocialButton, SocialText, Symbol } from './CommonStyle';
import { SYMBOL_HEIGHT, SYMBOL_WIDTH } from '../constants/size';
import { KAKAO_IDENTITY_COLOR, KAKAO_IDENTITY_HOVER_COLOR } from '../constants/color';

const KakaoButton = styled(SocialButton())`
  background-color: ${KAKAO_IDENTITY_COLOR};
  &:hover {
    background-color: ${KAKAO_IDENTITY_HOVER_COLOR};
  }
`;

const KaKaoLoginText = styled(SocialText<Pick<KakaoButtonProps, 'align'>>())``;

const KaKaoLoginButton = ({ width, height, children, align, isRound, shape, ...props }: KakaoButtonProps) => {
  return (
    <KakaoButton width={width} height={height} isRound={isRound} shape={shape} {...props}>
      <Symbol>
        <svg
          width={SYMBOL_WIDTH}
          height={SYMBOL_HEIGHT}
          viewBox="0 0 27 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.5 21C20.9558 21 27 16.299 27 10.5C27 4.70101 20.9558 0 13.5 0C6.04416 0 0 4.70101 0 10.5C0 14.1933 2.45168 17.4413 6.15829 19.313L4.5 25L13.2641 20.9984C13.3426 20.9995 13.4212 21 13.5 21Z"
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
