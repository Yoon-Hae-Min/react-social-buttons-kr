import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import AppleLoginButton from '../social-buttons/AppleLoginButton';

export default {
  title: 'SocialLogin/AppleLoginButton',
  component: AppleLoginButton,
  argTypes: {
    designType: {
      options: ['white', 'black'],
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
} as ComponentMeta<typeof AppleLoginButton>;

const Template: ComponentStory<typeof AppleLoginButton> = (args) => <AppleLoginButton {...args} />;

export const Default = Template.bind({});
