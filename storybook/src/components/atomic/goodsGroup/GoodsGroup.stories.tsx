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

	}
} satisfies Meta<typeof GoodsGroup>;

export default meta;
type Story = StoryObj<typeof GoodsGroup>;

// size
export const SizeType: Story = {
    args: {
        GoodsGroupSize: "sizeMd",
		label: true,
        children: ""
    },

    render: (args) => {
		const sizes = ['sizeXs' , 'sizeSm' , 'sizeMd' , 'sizeLg' , 'sizeXl' , 'size2xl' , 'size3xl' , 'size4xl' , "size5xl"] as const;
		return (
			<>
				{sizes.map((size) =>
					<GoodsGroup {...args} GoodsGroupSize={size} key={size}>
						{size}
					</GoodsGroup>
				)}
			</>
		)
	}
};