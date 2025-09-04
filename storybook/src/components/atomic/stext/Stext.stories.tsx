import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import {Stext} from '@/components/atomic/stext/Stext';

const meta = {
	title: 'Atomic/Stext',
	component: Stext,
	tags: ['autodocs'],
	parameters: {
		layout: 'padded',
	},
	argTypes: {
		size: {
			control: 'inline-radio',
			options: ['', 'Sm', 'Lg']
		},
		color: {
			control: 'inline-radio',
			options: ['', 'Black', 'Red', 'Spot']
		},
		fw: {
			control: 'inline-radio',
			options: ['', 'Bold']
		},
		mt: {
			control: 'inline-radio',
			options: ['', 'sm', 'md', 'lg']
		},
		text: {
			control: 'text'
		}
	}
} satisfies Meta<typeof Stext>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dafault: Story = {
	args: {
		text: 'stext size | color | fw'
	},
	render: (args) => <Stext {...args} />
};