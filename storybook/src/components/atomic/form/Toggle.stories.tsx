import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import {Toggle} from "@/components/atomic/form/Toggle";

const meta = {
	title: 'Atomic/Form/Toggle',
	component: Toggle,
	tags: ['autodocs'],
	parameters: {
		layout: 'padded',
	},
	argTypes: {
		size: {
			control: 'inline-radio',
			options: ['Md', 'Lg'],
		},
		text: {
			control: 'text',
		},
		idx: {
			control: 'text',
		},
		checked: {
			control: 'boolean',
		},
		disabled: {
			control: 'boolean',
		}
	}
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof Toggle>;

export const Default: Story = {
	args: {
		size: 'Md',
		idx: 'toggle01',
	},
	render: (args) => <Toggle {...args} />
}