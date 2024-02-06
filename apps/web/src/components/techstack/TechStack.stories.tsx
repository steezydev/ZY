import { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';

import Stack from './TechStack';
import TechStackItem from './TechStackItem';

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
      <TechStackItem tooltip='Next.js'>
        <Next />
      </TechStackItem>
      <TechStackItem tooltip='Typescript'>
        <TS />
      </TechStackItem>
      <TechStackItem tooltip='TailwindCSS'>
        <TW />
      </TechStackItem>
    </>
  ),
};
