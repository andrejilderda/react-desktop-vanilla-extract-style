import React from 'react';
import { Story, Meta } from '@storybook/react';
import Button, { ButtonProps } from './Button';

export default {
  title: 'Components/Inputs/Button',
  component: Button,
  argTypes: {
    wrapperClass: {
      table: { disable: true },
      control: { disable: true }, // disable control in ArgsTable
    },
  },
} as Meta;

const Template: Story<ButtonProps & { wrapperClass: string }> = ({
  wrapperClass,
  ...args
}) => (
  <div className={wrapperClass || ''}>
    <Button {...args} />
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  label: 'Button',
};

export const PrimaryHover = Template.bind({});
PrimaryHover.args = {
  label: 'Hover state',
  wrapperClass: 'pseudo-hover',
};
