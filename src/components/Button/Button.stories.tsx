import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';

import Button, { ButtonProps } from './Button';

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['solid', 'outline'],
      },
    },
  },
} as Meta;

export const Fill = Template.bind({});
Fill.args = {
  variant: 'primary',
  children: 'Click me',
};

export const Outline = Template.bind({});
Outline.args = {
  variant: 'secondary',
  children: 'Click me',
};

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
  children: 'Click me',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  children: 'Click me',
};
