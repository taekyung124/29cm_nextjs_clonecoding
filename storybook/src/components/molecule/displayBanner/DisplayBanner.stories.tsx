import * as React from 'react';
import type {Meta, StoryFn, StoryObj} from '@storybook/nextjs-vite';

import {DisplayBanner} from "@/components/molecule/displayBanner/DisplayBanner";

const meta = {
	title: 'Molecule/DisplayBanner',
	component: DisplayBanner,
	tags: ['autodocs'],
	parameters: {
		layout: 'padded',
	},
	decorators: [ // preview 500
		(Story) => (
			<div style={{ maxWidth: '500px', margin: '0 auto' }}>
				<Story />
			</div>
		),
	],
	argTypes: {
		prod: {
			control: 'inline-radio',
			options: ['', 'newUpdate', 'priceDown', 'newItem', 'outlet', 'gugusBest'],
		},
		brand: {
			control: 'inline-radio',
			options: ['', 'chanel', 'rolex', 'hermes', 'louisVuitton'],
		},
		supTitle: {
			control: 'text',
		},
		title: {
			control: 'text',
		},
		subText: {
			control: 'text',
		},
		btnText: {
			control: 'text',
		},
	}
} satisfies Meta<typeof DisplayBanner>;

export default meta;
type Story = StoryObj<typeof DisplayBanner>;

export const Default: Story = {
	args: {
		supTitle: 'supTitle',
		title: 'title',
		subText: 'subText',
		btnText: 'btnText',
	},
	render: (args) => <DisplayBanner {...args} />,
}

export const Prod: StoryFn = () => (
	<>
		<DisplayBanner prod="newUpdate" />
		<DisplayBanner prod="priceDown" />
		<DisplayBanner prod="newItem" />
		<DisplayBanner prod="outlet" />
		<DisplayBanner prod="gugusBest" />
	</>
);

export const Brand: StoryFn = () => (
	<>
		<DisplayBanner brand="chanel" />
		<DisplayBanner brand="rolex" />
		<DisplayBanner brand="hermes" />
		<DisplayBanner brand="louisVuitton" />
	</>
);