import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import {TextButton} from '@/components/atomic/textButton/TextButton';

const meta = {
	title: 'Atomic/TextButton',
	component: TextButton,
	tags: ['autodocs'],
	parameters: {
		layout: 'padded',
	},
	argTypes: {
		color: {
			control: 'inline-radio',
			options: ['gray', 'black']
		},
		size: {
			control: 'inline-radio',
			options: ['md', 'lg']
		},
		beforeIcon: {
			control: 'select',
			options: ['download_black', 'post', 'copy', 'share'],
		},
		afterIcon: {
			control: 'select',
			options: ['download_black', 'post', 'copy', 'share'],
		},
		text: {
			control: 'text',
		},
		udlLink: {
			control: 'boolean',
		},
		disabled: {
			control: 'boolean',
		}
	},
} satisfies Meta<typeof TextButton>;

export default meta;
type Story = StoryObj<typeof TextButton>;

export const Default: Story = {
	args: {
		color: 'gray',
		size: 'md',
		text: 'text button',
		udlLink: false,
	},
	render: (args) => <TextButton {...args} />,
}