import { SocialLoginButton } from './common';

export interface AppleButtonProps extends SocialLoginButton {
  designType?: 'white' | 'black';
  border?: boolean;
}
