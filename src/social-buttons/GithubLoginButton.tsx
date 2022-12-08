import React from 'react';
import styled from '@emotion/styled';
import { SocialButton, SocialText, Symbol } from './CommonStyle';
import { GITHUB_IDENTITY_COLOR, GITHUB_IDENTITY_HOVER_COLOR } from '../constants/color';
import { GithubButtonProps } from '../types/GithubButton';

const GithubButton = styled(SocialButton())`
  background-color: ${GITHUB_IDENTITY_COLOR};
  &:hover {
    background-color: ${GITHUB_IDENTITY_HOVER_COLOR};
  }
`;

const GithubLoginText = styled(SocialText<Pick<GithubButtonProps, 'align'>>())`
  color: white;
`;

const GithubLoginButton = ({ width, height, children, align, isRound, shape, ...props }: GithubButtonProps) => {
  return (
    <GithubButton width={width} height={height} isRound={isRound} shape={shape} {...props}>
      <Symbol>
        <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" fill="none" viewBox="0 0 18 18">
          <path
            fill="#fff"
            fillRule="evenodd"
            d="M6.02 14.494c0 .074-.083.134-.188.134-.12.01-.203-.049-.203-.134 0-.075.083-.134.188-.134.11-.012.204.048.204.134zm-1.128-.168c-.025.074.047.16.156.182.094.038.203 0 .225-.074.022-.074-.047-.16-.156-.193-.094-.027-.2.01-.225.085zm1.604-.063c-.105.026-.178.097-.167.182.01.075.105.123.214.097.105-.026.178-.097.167-.171-.01-.071-.109-.12-.214-.108zM8.884 0C3.85 0 0 3.92 0 9.082c0 4.127 2.533 7.66 6.151 8.903.465.085.628-.209.628-.45 0-.231-.01-1.504-.01-2.286 0 0-2.541.558-3.075-1.109 0 0-.413-1.083-1.009-1.362 0 0-.83-.585.059-.574 0 0 .903.075 1.4.96.795 1.438 2.127 1.024 2.646.779.083-.596.32-1.009.58-1.255-2.028-.23-4.075-.532-4.075-4.112 0-1.024.276-1.538.857-2.193-.095-.242-.403-1.24.094-2.527.758-.242 2.504 1.005 2.504 1.005.726-.208 1.506-.316 2.279-.316.773 0 1.553.108 2.28.316 0 0 1.745-1.25 2.503-1.005.497 1.292.189 2.285.095 2.527.58.66.936 1.173.936 2.193 0 3.591-2.138 3.878-4.166 4.112.334.294.617.853.617 1.727 0 1.255-.011 2.807-.011 3.112 0 .242.167.536.628.45C15.54 16.742 18 13.21 18 9.082 18 3.919 13.917 0 8.884 0zM3.527 12.837c-.047.037-.036.123.026.194.058.06.141.085.189.037.047-.037.036-.123-.026-.194-.058-.06-.141-.085-.189-.037zm-.392-.301c-.025.048.011.108.084.145.058.037.13.026.156-.026.025-.048-.01-.108-.083-.145-.073-.023-.131-.011-.157.026zm1.176 1.325c-.058.048-.036.16.047.23.084.086.19.097.236.038.048-.049.026-.16-.047-.231-.08-.086-.189-.097-.236-.037zm-.413-.547c-.058.037-.058.134 0 .22.058.085.156.122.203.085.058-.049.058-.145 0-.23-.051-.086-.145-.124-.203-.075z"
            clipRule="evenodd"
          ></path>
        </svg>
      </Symbol>
      {(shape === 'standard' || shape === undefined) && (
        <GithubLoginText align={align}>{children ?? '깃허브로 시작하기'}</GithubLoginText>
      )}
    </GithubButton>
  );
};

export default GithubLoginButton;
