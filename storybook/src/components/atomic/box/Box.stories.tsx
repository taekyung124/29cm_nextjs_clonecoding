import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Box } from './Box';

const meta = {
    title: 'Atomic/Box',
    component: Box,
    tags: ['autodocs'],
    parameters: {
    	layout: 'padded',
    },
	argTypes: {
		size: {
			control: { type: 'inline-radio' },
			options: ['xs', 'sm', 'md', 'lg']
		},
		color: {
			control: { type: 'inline-radio' },
			options: ['gray', 'grayLine', 'white', 'green', 'red']
		},
		mt: {
			control: { type: 'inline-radio' },
      		options: ['sm', 'md'],
		},
		scroll: {
			control: { type: 'boolean' }
		}
	}
} satisfies Meta<typeof Box>;

export default meta;
type Story = StoryObj<typeof Box>;

export const Deafault: Story = {
	args: {
		size: "md",
		color: "gray",
		scroll: true,
		mt: "md",
		child: "box"
	},
	render: (args) => <Box {...args}/>
}