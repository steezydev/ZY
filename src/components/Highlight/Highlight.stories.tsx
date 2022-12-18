import { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';

import Highlight from './Highlight';

import ConfigSvg from '~/svg/Config.svg';
import DesignSvg from '~/svg/Design.svg';
import RocketSvg from '~/svg/Rocket.svg';

export default {
  title: 'Components/Highlight',
  component: Highlight,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    // override React.ReactNode type with this
    // children: {
    // control: { type: 'text' },
    // },
  },
} as ComponentMeta<typeof Highlight>;

const Template: ComponentStory<typeof Highlight> = (args) => (
  <Highlight {...args} />
);

export const Rocket = Template.bind({});
Rocket.args = { children: <RocketSvg />, title: 'Rocket page speed with SSG' };

export const Design = Template.bind({});
Design.args = { children: <DesignSvg />, title: 'Carefully crafted design' };

export const Config = Template.bind({});
Config.args = {
  children: <ConfigSvg />,
  title: 'User-friendly product builder',
};
