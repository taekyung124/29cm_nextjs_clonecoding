import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Button } from './Button';

const meta = {
  title: 'Atomic/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    size: {
      control: 'inline-radio',
      options: ['xs', 'sm', 'md', 'lg', 'xl']
    },
    color: {
      control: 'inline-radio',
      options: ['lineGray', 'lineLightGray', 'lineGreen', 'lineSell', 'lineConsign', 'linePurchase', 'lineWhite','lightGray', 'gray', 'green', 'gold', 'sell', 'consign', 'purchase', 'loan', 'band', 'white']
    },
    rounded: {
      control: 'boolean',
    },
    ico: {
      control: 'text',
    },
    icoLocated: {
      control: 'inline-radio',
      options: ['before', 'after'],
    },
    text: {
      control: 'text',
    },
    disabled: {
      control: 'boolean',
    },
    tag: {
      control: 'inline-radio',
      options: ['button', 'a'],
    },
  }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    size: 'xs',
    color: 'lineGray',
    rounded: false,
    disabled: false,
    text: 'button',
    ico: 'arw_right_black',
    icoLocated: 'after',
    tag: 'button',
  },
  render :(args) => <Button {...args} />
}