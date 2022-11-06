import { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';

import Badge from './Badge';

export default {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    // override React.ReactNode type with this
    // children: {
    // control: { type: 'text' },
    // },
  },
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />;

export const Default = Template.bind({});
Default.args = { children: 'Badge', variant: 'default' };

export const Ready = Template.bind({});
Ready.args = { children: 'Ready', variant: 'ready' };

export const Warning = Template.bind({});
Warning.args = { children: 'In progress', variant: 'warning' };

export const Error = Template.bind({});
Error.args = { children: 'Deprecated', variant: 'error' };

export const Dashed = Template.bind({});
Dashed.args = { children: 'Concept', variant: 'dashed' };

export const Info = Template.bind({});
Info.args = { children: 'New', variant: 'info' };

export const Popular = Template.bind({});
Popular.args = { children: 'Popular', variant: 'highlight' };
