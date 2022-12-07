import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import FacebookLoginButton from '../social-buttons/FacebookLoginButton';

export default {
  title: 'SocialLogin/FacebookLoginButton',
  component: FacebookLoginButton,
  argTypes: {
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
} as ComponentMeta<typeof FacebookLoginButton>;

const Template: ComponentStory<typeof FacebookLoginButton> = (args) => <FacebookLoginButton {...args} />;

export const Default = Template.bind({});
