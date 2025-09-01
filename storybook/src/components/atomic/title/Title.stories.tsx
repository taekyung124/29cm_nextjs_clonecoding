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
export const SizeType: Story = {
	render: (args) => {
		const sizes = ['sm', 'md', 'lg','xl'] as const;
		return (
			<>
				{sizes.map((size) =>
					<Title {...args} size={size} key={size}>
						{size}
					</Title>
				)}
			</>
		)
	}
};

// langauage
export const LangType: Story = {
	render: (args) => {
		const langs = ['kor', 'Eng'] as const;
		return (
			<>
				{langs.map((lang) =>
					<Title {...args} lang={lang} key={lang}>
						{lang}
					</Title>
				)}
			</>
		)
	}
};