import { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';

import Badge from '@/components/Badge';

import BlogCard from './BlogCard';

export default {
  title: 'Components/Blog Card',
  component: BlogCard,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    // override React.ReactNode type with this
    // children: {
    // control: { type: 'text' },
    // },
  },
} as ComponentMeta<typeof BlogCard>;

const Template: ComponentStory<typeof BlogCard> = (args) => (
  <BlogCard {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: (
    <>
      <div className='flex flex-row items-center justify-between'>
        <BlogCard.Date>Tuesday, October 25th 2022</BlogCard.Date>
        <Badge variant='info'>New</Badge>
      </div>
      <BlogCard.Title>Ultimate React Native design system</BlogCard.Title>
      <BlogCard.Body>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu erat
        rhoncus, sollicitudin purus ac, tristique lorem.
      </BlogCard.Body>
    </>
  ),
};
