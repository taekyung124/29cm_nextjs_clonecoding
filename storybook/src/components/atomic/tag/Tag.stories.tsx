import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import {Tag} from './Tag';

const meta = {
	title: 'Atomic/Tag',
	component: Tag,
	tags: ['autodocs'],
	parameters: {
		layout: 'padded',
	},
	argTypes: {
		size: {
			control: 'inline-radio',
			options: ['sm', 'md'],
		},
		color: {
			control: 'inline-radio',
			options: ['lightGray', 'white'],
		},
		text: {
			control: 'text',
		},
		btnDelete: {
			control: 'boolean',
		},
		btnWish: {
			control: 'boolean',
		},
		btnLink: {
			control: 'boolean',
		},
		href: {
			control: 'text',
		}
	},
	decorators: [ // preview 500
		(Story) => (
			<div style={{ maxWidth: '500px', margin: '0 auto', padding: '10px', background: 'black' }}>
				<Story />
			</div>
		),
	],
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof Tag>;

export const Default: Story = {
	args: {
		size: 'md',
		color: 'lightGray',
		text: 'tag',
		btnDelete: false,
		btnWish: false,
		btnLink: false,
		href: 'javascript:void(0);',
	},
	render: (args) => <Tag {...args} />,
}

