import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import {Radio} from '@/components/atomic/form/Radio';

const meta = {
	title: 'Atomic/Form/Radio',
	component: Radio,
	tags: ['autodocs'],
	parameters: {
		layout: 'padded',
	},
	argTypes: {
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
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof Radio>;

export const Default: Story = {
	args: {
		text: '라벨 텍스트',
		subText: '서브 텍스트',
		idx: 'radio01',
		name: 'radio01',
		disabled: false,
	},
	render: (args) => <Radio {...args} />,
}