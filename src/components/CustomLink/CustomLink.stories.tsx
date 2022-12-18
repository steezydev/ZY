import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';

import CustomLink, { LinkProps } from './CustomLink';

const Template: Story<LinkProps> = (args) => <CustomLink {...args} />;

import RocketSvg from '~/svg/Rocket.svg';

export default {
  title: 'Components/CustomLink',
  component: CustomLink,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['primary', 'secondary'],
      },
    },
  },
} as Meta;

export const Primary = Template.bind({});
Primary.args = {
  href: '#',
  variant: 'primary',
  children: 'Click me',
  icon: <RocketSvg />,
};

export const Secondary = Template.bind({});
Secondary.args = {
  href: '#',
  variant: 'secondary',
  children: 'Click me',
  icon: <RocketSvg />,
};
