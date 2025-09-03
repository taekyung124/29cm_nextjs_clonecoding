import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import {Checkbox} from '@/components/atomic/form/Checkbox';

const meta = {
	title: 'Atomic/Form/Checkbox',
	component: Checkbox,
	tags: ['autodocs'],
	parameters: {
		layout: 'padded',
	},
	argTypes: {
		align: {
			control: 'inline-radio',
			options: ['default', 'right', 'full'],
		},
		text: {
			control: 'text',
		},
		subText: {
			control: 'text',
		},
		offscreen: {
			control: 'text',
		},
		idx: {
			control: 'text',
		},
		disabled: {
			control: 'boolean',
		}
	}
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
	args: {
		align: 'default',
		text: '라벨 텍스트',
		subText: '서브 텍스트',
		idx: 'checkbox01',
		disabled: false,
	},
	render: (args) => <Checkbox {...args} />,
}