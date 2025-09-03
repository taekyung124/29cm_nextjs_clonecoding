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
      control: 'select',
      options: ['lineGray', 'lineLightGray', 'lineGreen', 'lineSell', 'lineConsign', 'linePurchase', 'lineWhite','lightGray', 'gray', 'green', 'gold', 'sell', 'consign', 'purchase', 'loan', 'band', 'white']
    },
    rounded: {
      control: 'boolean',
    },
    beforeIcon: {
      control: 'text',
    },
    afterIcon: {
      control: 'text',
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
    afterIcon: 'arw_right_black',
    tag: 'button',
  },
  render :(args) => <Button {...args} />
}