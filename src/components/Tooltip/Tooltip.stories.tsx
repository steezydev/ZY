import { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';

import Tooltip from './Tooltip';

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    // override React.ReactNode type with this
    // children: {
    // control: { type: 'text' },
    // },
  },
} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = (args) => (
  <Tooltip {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: <span className='text-white'>Some text</span>,
  tip: 'Tooltip',
};
