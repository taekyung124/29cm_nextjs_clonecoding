import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Textarea } from '@/components/atomic/form/Textarea';

const meta = {
	title: 'Atomic/Form/Textarea',
	component: Textarea,
	tags: ['autodocs'],
	parameters: {
		layout: 'padded',
	},
	argTypes: {
		title: {
			control: 'text',
		},
		placeholder: {
			control: 'text',
		},
		disabled: {
			control: 'boolean',
		},
		max: {
			control: 'number',
		}
	}
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
	args: {
		title: 'textarea 데모',
		placeholder: 'textarea 텍스트를 입력하세요.',
		disabled: false,
		max: 50,
	},
	render: (args) => <Textarea {...args} />
}