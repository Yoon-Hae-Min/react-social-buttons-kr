import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import KaKaoLoginButton from '../../buttons/KakaoLoginButton';

export default {
  title: 'KaKaoLoginButton',
  component: KaKaoLoginButton,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof KaKaoLoginButton>;

const Template: ComponentStory<typeof KaKaoLoginButton> = (args) => <KaKaoLoginButton {...args} />;

export const Default = Template.bind({});

export const Center = Template.bind({});
Center.args = {
  align: 'center',
};

export const FullWidth = Template.bind({});
Center.args = {
  width: '100%',
};
