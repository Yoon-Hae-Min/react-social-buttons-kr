import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import NaverLoginButton from '../social-buttons/NaverLoginButton';

export default {
  title: 'SocialLogin/NaverLoginButton',
  component: NaverLoginButton,
  argTypes: {
    designType: {
      options: ['green', 'white'],
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
} as ComponentMeta<typeof NaverLoginButton>;

const Template: ComponentStory<typeof NaverLoginButton> = (args) => <NaverLoginButton {...args} />;

export const Default = Template.bind({});

export const WhiteButton = Template.bind({});
WhiteButton.args = {
  designType: 'white',
};
