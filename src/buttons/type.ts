import { ReactNode } from 'react';

export interface SocialLoginButton {
  width?: string;

  height?: string;

  children?: string | ReactNode;

  onClick?: () => void;

  style?: object;

  shape?: 'circle' | 'standard' | 'square';

  align?: 'center' | 'start';

  isRound?: boolean;
}
