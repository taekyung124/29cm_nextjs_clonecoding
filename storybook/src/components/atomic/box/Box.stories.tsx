import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Box }

	from './Box';

const meta = {
    title: 'Atomic/Box',
    component: Box,
    parameters: {
    layout: 'padded',
    },
    tags: ['autodocs'],

} satisfies Meta<typeof Box>;

export default meta;
type Story = StoryObj<typeof meta>;

// size
export const Xs: Story = {
	args: {
		size : 'xs',
		children : 'xs box입니다.'
	}
}

export const Sm: Story = {
	args: {
		size: 'sm',
		children : 'xs box입니다.'
	}
}

export const Md: Story = {
	args: {
		size: 'md',
		children : 'xs box입니다.'
	}
}

export const Lg: Story = {
	args: {
		size: 'lg',
		children : 'xs box입니다.'
	}
}

// color
export const Gray: Story = {
	args: {
		color : 'gray',
	}
}

export const GrayLine: Story = {
	args: {
		color: 'gray-line',
	}
}
export const White: Story = {
	args: {
		color: 'white',
	}
}

export const Green: Story = {
	args: {
		color: 'green',
	}
}

export const Red: Story = {
	args: {
		color: 'red',
	}
}