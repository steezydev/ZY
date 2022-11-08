import { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';

import Highlight from './Highlight';

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
Rocket.args = { children: 'Rocket page speed with SSG', variant: 'rocket' };

export const Design = Template.bind({});
Design.args = { children: 'Carefully crafted design', variant: 'design' };

export const Config = Template.bind({});
Config.args = { children: 'User-friendly product builder', variant: 'config' };
