import React from 'react';
import styled from '@emotion/styled';
import { SocialButton, SocialText, Symbol } from './CommonStyle';
import { APPLE_BLACK_HOVER_COLOR, APPLE_IDENTITY_COLOR, APPLE_IDENTITY_HOVER_COLOR } from '../constants/color';
import { AppleButtonProps } from '../types/AppleButton';

const ButtonCSS = {
  white: `background-color: white;
  &:hover {
    background-color: ${APPLE_IDENTITY_HOVER_COLOR};
  };`,
  black: `background-color: black;
  &:hover {
    background-color: ${APPLE_BLACK_HOVER_COLOR};
  };`,
};

const AppleButton = styled(SocialButton<AppleButtonProps>())`
  ${(props) => ButtonCSS[props.designType ?? 'white']}
  ${(props) => (props.border ?? false ? `border:0.01rem solid ${APPLE_IDENTITY_COLOR};` : '')}
`;

const TextCSS = {
  white: 'color: black',
  black: 'color: white',
};

const AppleLoginText = styled(SocialText<Pick<AppleButtonProps, 'designType' | 'align'>>())`
  ${(props) => TextCSS[props.designType ?? 'white']};
`;

const SymbolColor = {
  black: 'white',
  white: APPLE_IDENTITY_COLOR,
};

const AppleLoginButton = ({
  width,
  height,
  children,
  align,
  isRound,
  shape,
  designType,
  border,
  ...props
}: AppleButtonProps) => {
  return (
    <AppleButton
      width={width}
      height={height}
      isRound={isRound}
      shape={shape}
      designType={designType}
      border={border}
      {...props}
    >
      <Symbol>
        <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" viewBox="0 0 3206.7 2502.7">
          <path
            d="M2239.7,1368.5c3,325.1,285.2,433.3,288.3,434.7c-2.4,7.6-45.1,154.2-148.7,305.6c-89.5,130.9-182.5,261.3-328.9,264
	c-143.9,2.7-190.1-85.3-354.6-85.3c-164.4,0-215.8,82.6-352,88c-141.3,5.4-248.9-141.5-339.2-271.9
	C820.2,1836.7,679.2,1349.8,868.5,1021c94-163.2,262.1-266.6,444.5-269.3c138.8-2.6,269.7,93.4,354.6,93.4
	c84.8,0,243.9-115.5,411.3-98.5c70,2.9,266.7,28.3,392.9,213.1C2461.7,966,2237.2,1096.7,2239.7,1368.5 M1969.3,570.2
	c75-90.8,125.5-217.2,111.7-343c-108.1,4.3-238.9,72.1-316.5,162.8c-69.5,80.4-130.4,209-114,332.3
	C1771.1,731.6,1894.3,661,1969.3,570.2"
            fill={SymbolColor[designType ?? 'white']}
          />
        </svg>
      </Symbol>
      {(shape === 'standard' || shape === undefined) && (
        <AppleLoginText align={align} designType={designType}>
          {children ?? '애플로 시작하기'}
        </AppleLoginText>
      )}
    </AppleButton>
  );
};

export default AppleLoginButton;
