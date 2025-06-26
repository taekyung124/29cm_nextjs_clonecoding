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
	// args : {// 모든 스토리에 공통적으로 쓰일 기본 props 값들
	//
	// },
	argTypes: {
		mt: {
			control: { type: 'radio' },
      		options: ['sm', 'md', undefined],
		},
		boxScroll: {
			control: { type: 'boolean' }
		}
	}
} satisfies Meta<typeof Box>;

export default meta;
type Story = StoryObj<typeof Box>;

// size
export const SizeType: Story = {
	render: (args) => {
		const sizes = ['extraSmall', 'small', 'medium', 'large'] as const;
		return (
			<>
				{sizes.map((size) =>
					<Box {...args} size={size} key={size}>
						{size}
					</Box>
				)}
			</>
		)
	}
};

//color
export const ColorType: Story = {
	render: (args) => {
		const colors = ['gray', 'grayLine', 'white', 'green', 'red'] as const;
		return (
			<>
				{colors.map((color) =>
					<Box {...args} color={color} key={color}>
						{color}
					</Box>
				)}
			</>
		)
	}
};