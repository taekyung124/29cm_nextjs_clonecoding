import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Title } from './Title';

const meta = {
    title: 'Atomic/Title',
    component: Title,
    tags: ['autodocs'],
    parameters: {
    	layout: 'padded',
    },
} satisfies Meta<typeof Title>;

export default meta;
type Story = StoryObj<typeof meta>;

// size
export const Dafault: Story = {
	args: {
		type: 'ctitle',
		size: 'sm',
		lang: 'kor',
		text: '타이틀 type | size | lang'
	},
	render: (args) => <Title {...args} />
};