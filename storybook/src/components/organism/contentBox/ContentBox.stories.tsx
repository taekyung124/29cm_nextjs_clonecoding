import * as React from 'react';
import type { Meta, StoryObj, StoryFn } from '@storybook/nextjs-vite';

import {ContentBox} from "@/components/organism/contentBox/ContentBox";

const meta = {
	title: 'Organism/Contents/ContentBox',
	component: ContentBox,
	tags: ['autodocs'],
	parameters: {
		layout: 'padded',
	},
	decorators: [ // preview 500
		(Story) => (
			<div style={{ maxWidth: '500px', margin: '0 auto'}}>
				<Story />
			</div>
		),
	],
	argTypes: {
		type: {
			control: 'inline-radio',
			options: ['default', 'line', 'divider', 'gray', 'green'],
		},
		size: {
			control: 'inline-radio',
			options: ['zero', 'Sm', 'Md', 'Lg', 'Xl'],
		},
		pt: {
			control: 'inline-radio',
			options: ['Sm', 'Md', 'Lg', 'Xl'],
		},
		pb: {
			control: 'inline-radio',
			options: ['Sm', 'Md', 'Lg', 'Xl'],
		},
		hasInner: {
			control: 'boolean',
		},
		bottomLine: {
			control: 'boolean',
		},
		children: {
			control: 'text',
		}
	}
} satisfies Meta<typeof ContentBox>;

export default meta;
type Story = StoryObj<typeof ContentBox>;

export const Default: Story = {
	args: {
		type: 'default',
		size: 'zero',
		hasInner: true,
		bottomLine: true,
		children: 'aaa',
	},
	render:(args) => {
		return <ContentBox {...args} />;
	}
}