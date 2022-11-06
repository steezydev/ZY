import { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';

import Stack from './Stack';

import Next from '~/svg/Next.svg';
import TS from '~/svg/TS.svg';
import TW from '~/svg/TW.svg';

export default {
  title: 'Components/Stack',
  component: Stack,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    // override React.ReactNode type with this
    // children: {
    // control: { type: 'text' },
    // },
  },
} as ComponentMeta<typeof Stack>;

const Template: ComponentStory<typeof Stack> = (args) => <Stack {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: (
    <>
      <Stack.Item tooltip='Next.js'>
        <Next />
      </Stack.Item>
      <Stack.Item tooltip='Typescript'>
        <TS />
      </Stack.Item>
      <Stack.Item tooltip='TailwindCSS'>
        <TW />
      </Stack.Item>
    </>
  ),
};
