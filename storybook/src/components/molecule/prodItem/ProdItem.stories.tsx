import * as React from 'react';
import type { Meta, StoryObj, StoryFn} from '@storybook/nextjs-vite';

import { ProdItem } from "@/components/molecule/prodItem/ProdItem";

const meta = {
	title: 'Molecule/ProdItem',
	component: ProdItem,
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
		direction: {
			control: 'inline-radio',
			options: ['row', 'col'],
		},
		squareSize: {
			control: 'inline-radio',
			options: ['auto', 'Xs', 'Sm', 'Md', 'Lg'],
		},
		prodState: {
			control: 'inline-radio',
			options: ['','stop', 'ongoing']
		},
		topBadgeText: {
			control: 'object'
		},
		btmBadgeText: {
			control: 'object'
		},
		prodLank: {
			control: 'number'
		},
		uid: {
			control: 'number'
		},
		brand: {
			control: 'text'
		},
		title: {
			control: 'text'
		},
		sizeInfo: {
			control: 'text'
		},
		priceOrigin: {
			control: 'text'
		},
		priceBadge: {
			control: 'text'
		},
		price: {
			control: 'text'
		},
		discount: {
			control: 'number'
		},
		loanPrice: {
			control: 'text'
		},
		btnLink: {
			control: 'text'
		},
		href: {
			control: 'text'
		},
	}
} satisfies Meta<typeof ProdItem>;

export default meta;
type Story = StoryObj<typeof ProdItem>;

export const Default: Story = {
	args: {
		direction: 'row',
		topBadgeText: ['badge01', 'badge02'],
		btmBadgeText: ['badge01', 'badge02', 'badge03'],
		prodLank: 1,
		uid: 123456,
		brand: 'BRAND NAME BRAND NAME BRAND NAME BRAND NAME BRAND NAME BRAND NAME',
		title: 'prod title prod title prod title prod title prod title prod title prod title prod title prod title',
		sizeInfo: '230',
		priceOrigin: '4,000,000',
		priceBadge: 'A',
		price: '112,000,000',
		discount: 12,
		loanPrice: '300,000',
		btnLink: true,

		squareSize: 'Lg',
		imgSrc: 'prod_5by5',
		btnWish: true,
		uiChk: true,
		prodState: 'stop',
	},
	render: (args) => <ProdItem {...args} />,
}

export const RowType: StoryFn = () => (
	<>
		<ProdItem
			direction="row"
			prodLank={1} topBadgeText={['badge01', 'badge02']}
			squareSize="Xs" imgSrc="prod_5by5" uiChk btnWish btnLink
			brand="BRAND NAME BRAND NAME BRAND NAME BRAND NAME" uid={123456} title="prod title prod title"
			priceBadge="N" priceOrigin="4,000,000" price="112,000,000" discount={12}
			sizeInfo="230" btmBadgeText={['badge01', 'badge02', 'badge03']}
		/>
		<ProdItem
			direction="row"
			prodLank={2} topBadgeText={['badge']}
			squareSize="Sm" imgSrc="prod_5by5" uiChk btnWish btnLink
			brand="BRAND NAME" uid={123456} title="prod title prod titleprod title prod titleprod title prod titleprod title prod title"
			priceBadge="A" priceOrigin="4,000,000" price="112,000,000" discount={12}
			sizeInfo="230"
		/>
		<ProdItem
			direction="row"
			prodLank={3} topBadgeText={['badge01', 'badge02']}
			squareSize="Md" imgSrc="prod_5by5" uiChk btnWish btnLink
			uid={123456} title="prod title prod title"
			priceOrigin="4,000,000" price="112,000,000" discount={12}
			sizeInfo="230" btmBadgeText={['badge01', 'badge02', 'badge03']}
		/>
		<ProdItem
			direction="row"
			prodLank={4}
			squareSize="Lg" imgSrc="prod_5by5" uiChk btnWish btnLink
			brand="BRAND NAME" title="prod title prod title"
			priceBadge="B" price="112,000,000"
			sizeInfo="230" btmBadgeText={['badge01', 'badge02', 'badge03']}
		/>
	</>
)
export const ColType: StoryFn = () => (
	<>// 추가예정</>
)

