import React from 'react';
import styled from '@emotion/styled';
import { SocialButton, SocialText, Symbol } from './CommonStyle';
import { FacebookButtonProps } from '../types/FacebookButton';
import {
  FACEBOOK_BLACK_HOVER_COLOR,
  FACEBOOK_IDENTITY_COLOR,
  FACEBOOK_IDENTITY_HOVER_COLOR,
  FACEBOOK_WHITE_HOVER_COLOR,
  NAVER_IDENTITY_COLOR,
  NAVER_WHITE_HOVER_COLOR,
} from '../constants/color';

const ButtonCSS = {
  blue: `background-color: ${FACEBOOK_IDENTITY_COLOR};
  &:hover {
    background-color: ${FACEBOOK_IDENTITY_HOVER_COLOR};
  };`,

  'blue-white': `background-color: white;
  border:0.01rem solid ${FACEBOOK_IDENTITY_COLOR};
  &:hover {
    background-color: ${FACEBOOK_WHITE_HOVER_COLOR};
  };`,

  black: `background-color: black;
  &:hover {
    background-color: ${FACEBOOK_BLACK_HOVER_COLOR};
  };`,

  'black-white': `background-color: white;
  border:0.01rem solid black;
  &:hover {
    background-color: ${FACEBOOK_WHITE_HOVER_COLOR};
  };`,
};

const FacebookButton = styled(SocialButton<FacebookButtonProps>())`
  ${(props) => ButtonCSS[props.designType ?? 'blue']}
`;

const TextCSS = {
  blue: 'color:white',
  'blue-white': `color:${FACEBOOK_IDENTITY_COLOR}`,
  black: 'color:white',
  'black-white': 'color:black',
};

const FacebookLoginText = styled(SocialText<Pick<FacebookButtonProps, 'designType' | 'align'>>())`
  ${(props) => TextCSS[props.designType ?? 'blue']};
`;

const SymbolColor = {
  blue: {
    circle: 'white',
    logo: FACEBOOK_IDENTITY_COLOR,
  },
  'blue-white': {
    circle: FACEBOOK_IDENTITY_COLOR,
    logo: 'white',
  },
  black: {
    circle: 'white',
    logo: 'black',
  },
  'black-white': {
    circle: 'black',
    logo: 'white',
  },
};

const FacebookLoginButton = ({
  width,
  height,
  children,
  align,
  isRound,
  shape,
  designType,
  ...props
}: FacebookButtonProps) => {
  return (
    <FacebookButton width={width} height={height} isRound={isRound} shape={shape} designType={designType} {...props}>
      <Symbol>
        <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" viewBox="0 0 14222 14222">
          <circle cx="7111" cy="7112" r="7111" fill={SymbolColor[designType ?? 'blue'].circle} />
          <path
            d="M9879 9168l315-2056H8222V5778c0-562 275-1111 1159-1111h897V2917s-814-139-1592-139c-1624 0-2686 984-2686 2767v1567H4194v2056h1806v4969c362 57 733 86 1111 86s749-30 1111-86V9168z"
            fill={SymbolColor[designType ?? 'blue'].logo}
          />
        </svg>
      </Symbol>
      {(shape === 'standard' || shape === undefined) && (
        <FacebookLoginText align={align} designType={designType}>
          {children ?? '페이스북으로 시작하기'}
        </FacebookLoginText>
      )}
    </FacebookButton>
  );
};

export default FacebookLoginButton;
