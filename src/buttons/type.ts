import React, { ReactNode } from 'react';

export interface SocialLoginButton {
  width?: string;

  height?: string;

  text?: string | ReactNode;

  size?: 'large' | 'medium' | 'small';

  onClick?: () => void;

  style?: object;

  variation?: 'circled' | 'outlined' | 'contained';

  align?: 'center' | 'start';

  border: boolean;
}
