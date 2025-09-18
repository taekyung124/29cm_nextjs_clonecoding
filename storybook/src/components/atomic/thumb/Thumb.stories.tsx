import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import {Thumb} from "@/components/atomic/thumb/Thumb";

const meta = {
	title: 'Atomic/Thumb',
	component: Thumb,
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
		type: {
			control: 'inline-radio',
			options: ['square', 'classic', 'fluid', 'fixed'],
		},
		squareSize: {
			control: 'inline-radio',
			options: ['auto', 'Xs', 'Sm', 'Md', 'Lg'],
		},
		fixedHeight: {
			control: 'text'
		},
		btnLink: {
			control: 'boolean',
		},
		btnWish: {
			control: 'boolean',
		},
		uiChk: {
			control: 'boolean',
		},
		prodState: {
			control: 'inline-radio',
			options: ['stop', 'ongoing']
		},
		hasCountProd: {
			control: 'boolean',
		},
		countProdVal: {
			control: 'text',
		},
		imgSrc: {
			control: 'select',
			options: ['prod_5by5', 'event_01', 'event_02', 'event_03', 'event_04', 'store_detail_01', 'about_gugus_01']
		},
		altText: {
			control: 'text',
		},
		thumbClass: {
			table: {
				disable: true,
			}
		}
	}
} satisfies Meta<typeof Thumb>;

export default meta;
type Story = StoryObj<typeof Thumb>;

export const Default: Story = {
	args: {
		type: 'square',
		squareSize: 'Md',
		btnWish: true,
		uiChk: true,
		prodState: 'stop',
		imgSrc: 'prod_5by5',
		altText: '썸네일 이미지',

	},
	render: (args) => <Thumb {...args}/>,
}