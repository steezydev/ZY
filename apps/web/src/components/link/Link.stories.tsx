import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';

import Link from './Link';

import { LinkProps } from '@/types/props/LinkProps';

import RocketSvg from '~/svg/Rocket.svg';

const Template: Story<LinkProps> = (args) => <Link {...args} />;

export default {
  title: 'Components/Link',
  component: Link,
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
  children: 'Click me',
  icon: <RocketSvg />,
};

export const Secondary = Template.bind({});
Secondary.args = {
  href: '#',
  children: 'Click me',
  icon: <RocketSvg />,
};
