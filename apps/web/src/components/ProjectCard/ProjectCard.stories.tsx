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
  children: (
    <>
      <ProjectCard.Title>Lissa Soap</ProjectCard.Title>
      <ProjectCard.Body>
        Improve ashamed married expense bed her comfort pursuit mrs. Four time
        took ye your as fail lady. Up greatest am exertion or marianne. Shy
        occasional terminated insensible and inhabiting gay. So know do fond to
        half on. Now who promise was justice new winding.
      </ProjectCard.Body>
    </>
  ),
};
