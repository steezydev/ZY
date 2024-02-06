import { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';

import ProjectCard from './ProjectCard';

export default {
  title: 'Components/Project Card',
  component: ProjectCard,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    // override React.ReactNode type with this
    // children: {
    // control: { type: 'text' },
    // },
  },
} as ComponentMeta<typeof ProjectCard>;

const Template: ComponentStory<typeof ProjectCard> = (args) => (
  <ProjectCard {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: 'Project Title',
  description: 'Project Description',
};
