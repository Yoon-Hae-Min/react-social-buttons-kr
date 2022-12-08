import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import GoogleLoginButton from '../social-buttons/GoogleLoginButton';

export default {
  title: 'SocialLogin/GoogleLoginButton',
  component: GoogleLoginButton,
  argTypes: {
    designType: {
      options: ['white'],
      control: { type: 'select' },
    },
    width: {
      control: 'text',
    },
    height: {
      control: 'text',
    },
    shape: {
      options: ['circle', 'standard', 'square'],
      control: { type: 'select' },
    },
    align: {
      options: ['center', 'start'],
      control: { type: 'select' },
    },
    isRound: {
      control: 'boolean',
    },
    children: {
      control: 'text',
    },
  },
} as ComponentMeta<typeof GoogleLoginButton>;

const Template: ComponentStory<typeof GoogleLoginButton> = (args) => <GoogleLoginButton {...args} />;

export const Default = Template.bind({});
