import { ReactNode } from 'react';

export interface SocialLoginButton {
  width?: string;

  height?: string;

  children?: string | ReactNode;

  shape?: 'circle' | 'standard' | 'square';

  align?: 'center' | 'start';

  isRound?: boolean;
}
