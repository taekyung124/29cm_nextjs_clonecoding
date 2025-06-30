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
	// args : {// 모든 스토리에 공통적으로 쓰일 기본 props 값들
	//
	// },
	argTypes: {
		// GoodsGroupSize : {
		// 	control : { type: 'radio' },
		// 	options: ['sizeXs' , 'sizeSm' , 'sizeMd' , 'sizeLg' , 'sizeXl' , 'size2xl' , 'size3xl' , 'size4xl' , "size5xl"]
		// }
	}
} satisfies Meta<typeof GoodsGroup>;

export default meta;
type Story = StoryObj<typeof GoodsGroup>;

// size
export const SizeType: Story = {
	args: {
		GoodsGroupSize: 'sizeMd',
		label: '할인가',
		val: '112,000,000',
		unit: '원',
	},

    render: (args) => {
		const sizes = ['sizeXs', 'sizeSm', 'sizeMd', 'sizeLg', 'sizeXl', 'size2xl', 'size3xl', 'size4xl', 'size5xl'] as const;

		return (
			<>
				{sizes.map((size) => (
					<div key={size}>
						<GoodsGroup
							{...args}
							GoodsGroupSize={size}
							label={'할인가'}
							val={'112,000,000'}
							unit={'원'}
						/>
				</div>
				))}
			</>
		)
	}
};