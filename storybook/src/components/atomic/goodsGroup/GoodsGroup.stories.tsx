import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { GoodsGroup } from './GoodsGroup';

const meta = {
    title: 'Atomic/GoodsGroup',
    component: GoodsGroup,
    tags: ['autodocs'],
    parameters: {
    	layout: 'padded',
    },
	argTypes: {
		size: {
			control: 'radio',
			options: ['sizeXs', 'sizeSm', 'sizeMd', 'sizeLg', 'sizeXl', 'size2xl', 'size3xl', 'size4xl', 'size5xl']
		},
		label: {
			control: 'text',
		},
		val: {
			control: 'text',
		},
		unit: {
			control: 'text',
		}
	}
} satisfies Meta<typeof GoodsGroup>;

export default meta;
type Story = StoryObj<typeof GoodsGroup>;

// size
export const SizeType: Story = {
	args: {
		size: 'sizeMd',
		label: '할인가',
		val: '112,000,000',
		unit: '원',
	},

    render: (args) => <GoodsGroup {...args} />,
};