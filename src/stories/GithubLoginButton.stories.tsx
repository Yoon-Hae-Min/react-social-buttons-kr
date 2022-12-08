import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import GithubLoginButton from '../social-buttons/GithubLoginButton';

export default {
  title: 'SocialLogin/GithubLoginButton',
  component: GithubLoginButton,
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
} as ComponentMeta<typeof GithubLoginButton>;

const Template: ComponentStory<typeof GithubLoginButton> = (args) => <GithubLoginButton {...args} />;

export const Default = Template.bind({});

export const CircleButton = Template.bind({});
CircleButton.args = {
  shape: 'circle',
};

export const SquareButton = Template.bind({});
SquareButton.args = {
  shape: 'square',
};
export const ButtonWithChildren = Template.bind({});
ButtonWithChildren.args = {
  children: <span style={{ color: 'blue' }}>태그를 집어넣을수 있음</span>,
};
