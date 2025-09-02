import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import {Badge} from './Badge';

const meta = {
	title: 'Atomic/Badge',
	component: Badge,
	tags: ['autodocs'],
	parameters: {
		layout: 'padded',
	},
	argTypes: {
		size: {
			control: 'inline-radio',
			options: ['sm', 'md', 'lg', 'xl'],
		},
		color: {
			control: 'inline-radio',
			options: ['green', 'lineGreen', 'lightGreen', 'lightGray', 'lineLightGray', 'gold', 'lightRed'],
		},
		text: {
			control: 'text',
		}
	}
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
	args: {
		size: 'sm',
		color: 'green',
		text: 'badge',
	},
	render: (args) => <Badge {...args} />,
}