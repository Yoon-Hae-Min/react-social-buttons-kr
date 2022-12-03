import React from 'react';
import styled from '@emotion/styled';
import { SocialButton, SocialText, Symbol } from './CommonStyle';
import { NaverButtonProps } from '../types/NaverLoginButton';
import {
  NAVER_IDENTITY_COLOR,
  NAVER_IDENTITY_HOVER_COLOR,
  NAVER_WHITE_BORDER_COLOR,
  NAVER_WHITE_HOVER_COLOR,
} from '../constants/color';

const ButtonCSS = {
  green: `background-color: ${NAVER_IDENTITY_COLOR};
  &:hover {
    background-color: ${NAVER_IDENTITY_HOVER_COLOR};
  };`,
  white: `background-color: white;
  border:0.01rem solid ${NAVER_WHITE_BORDER_COLOR};
  &:hover {
    background-color: ${NAVER_WHITE_HOVER_COLOR};
  };`,
};

const NaverButton = styled(SocialButton<NaverButtonProps>())`
  ${(props) => ButtonCSS[props.designType ?? 'green']}
`;

const TextCSS = {
  green: 'color: white',
  white: 'color: black',
};

const NaverLoginText = styled(SocialText<Pick<NaverButtonProps, 'designType' | 'align'>>())`
  ${(props) => TextCSS[props.designType ?? 'green']};
`;

const SymbolColor = {
  green: 'white',
  white: NAVER_IDENTITY_COLOR,
};

const NaverLoginButton = ({
  width,
  height,
  children,
  align,
  isRound,
  shape,
  designType,
  ...props
}: NaverButtonProps) => {
  return (
    <NaverButton width={width} height={height} isRound={isRound} shape={shape} designType={designType} {...props}>
      <Symbol>
        <svg width="1.5rem" height="1.5rem" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 0H7.1875V0.0696481L7.28113 2.6658e-05L15.8125 10.2171V0H23V23H15.8125V22.9999L7.1875 12.6455V23H0V0Z"
            fill={SymbolColor[designType ?? 'green']}
          />
        </svg>
      </Symbol>
      {(shape === 'standard' || shape === undefined) && (
        <NaverLoginText align={align} designType={designType}>
          {children ?? '네이버로 시작하기'}
        </NaverLoginText>
      )}
    </NaverButton>
  );
};

export default NaverLoginButton;
