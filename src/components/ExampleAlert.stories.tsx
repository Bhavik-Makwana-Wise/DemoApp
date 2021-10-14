import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import ExampleAlert from './ExampleAlert';

export default {
  title: 'components/ExampleAlert',
  component: ExampleAlert,
} as ComponentMeta<typeof ExampleAlert>;

const Template: ComponentStory<typeof ExampleAlert> = (args) => <ExampleAlert {...args} />;

export const WithSelectedProfileId = Template.bind({});
WithSelectedProfileId.args = {
  selectedProfileId: 12_345,
};

export const WithoutSelectedProfileId = Template.bind({});
