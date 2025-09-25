import * as React from 'react';
import type { Meta, StoryObj, StoryFn } from '@storybook/nextjs-vite';

import {StickyWrap} from "@/components/organism/stickyWrap/StickyWrap";
import {ListHeader} from "@/components/molecule/listHeader/ListHeader";
import {GridList} from "@/components/molecule/gridList/GridList";
import {ProdItem} from "@/components/molecule/prodItem/ProdItem";

const meta = {
	title: 'Organism/StickyWrap',
	component: StickyWrap,
	parameters: {
		layout: 'padded',
	},
	decorators: [ // preview 500
		(Story) => (
			<div style={{ width: '100%', maxWidth: '500px', margin: '0 auto' }}>
				<Story />
			</div>
		),
	],
	argTypes: {
		background: {
			control: 'text'
		},
		zIndex: {
			control: 'number'
		},
		top: {
			control: 'number'
		},
		className: {
			control: 'text'
		},
		children: {
			control: 'object'
		}
	}
} satisfies Meta<typeof StickyWrap>;

export default meta;
type Story = StoryObj<typeof StickyWrap>;

export const Default: Story = {
	args: {
		children: (<div style={{height: '100px', background: 'red'}}>stickyWrap</div>),
	},
	render: (args) =>
		<div>
			<div style={{height: "400px", background: "#eee", textAlign: "center"}}>
				스크롤용 컨텐츠 1
			</div>
			<StickyWrap {...args} />
			<div style={{height: "600px", background: "#ccc", textAlign: "center"}}>
				스크롤용 컨텐츠 2
			</div>
			<div style={{height: "400px", background: "#bbb", textAlign: "center"}}>
				스크롤용 컨텐츠 3
			</div>
		</div>
}

export const ListHeaderCase: StoryFn = () => {
	const [value01 , setValue01] = React.useState('');
	const [value02 , setValue02] = React.useState('');
	return (
		<>
			<StickyWrap
				children={<ListHeader
					countNum="9,999"
					hasFilter
					onChange={(value) => setValue01(value)}
					placeholder="Select an option"
					selectSlots={[
						{
							label: 'option 01',
							value: 'option 01'
						},
						{
							label: 'option 02',
							value: 'option 02'
						},
						{
							label: 'option 03',
							value: 'option 03'
						},
						{
							label: 'option 04',
							value: 'option 04'
						}
					]}
					value={value01}
				/>
				}
			/>
			<GridList mt={12} type={'col2'} gap={'prod'} items={[
				<ProdItem direction="col" imgSrc="prod_5by5" squareSize="auto" prodLank={1} brand="BRAND NAME BRAND NAME BRAND NAME BRAND NAME BRAND NAME BRAND NAME" btmBadgeText={['badge01', 'badge02', 'badge03']} btnLink btnWish uiChk discount={12} loanPrice="300,000" price="112,000,000" priceBadge="A" priceOrigin="4,000,000" prodState="stop" sizeInfo="230" uid={123456} title="prod title prod title prod title prod title prod title prod title prod title prod title prod title" topBadgeText={['badge01', 'badge02']} />,
				<ProdItem direction="col" imgSrc="prod_5by5" squareSize="auto" prodLank={2} brand="BRAND NAME BRAND NAME BRAND NAME BRAND NAME BRAND NAME BRAND NAME" btmBadgeText={['badge01', 'badge02', 'badge03']} btnLink btnWish uiChk discount={12} loanPrice="300,000" price="112,000,000" priceBadge="A" priceOrigin="4,000,000" sizeInfo="230" uid={123456} title="prod title prod title prod title prod title prod title prod title prod title prod title prod title" topBadgeText={['badge01', 'badge02']} />,
				<ProdItem direction="col" imgSrc="prod_5by5" squareSize="auto" prodLank={3} brand="BRAND NAME BRAND NAME BRAND NAME BRAND NAME BRAND NAME BRAND NAME" btmBadgeText={['badge01', 'badge02', 'badge03']} btnLink btnWish uiChk discount={12} loanPrice="300,000" price="112,000,000" priceBadge="A" priceOrigin="4,000,000" sizeInfo="230" uid={123456} title="prod title prod title prod title prod title prod title prod title prod title prod title prod title" topBadgeText={['badge01', 'badge02']} />,
				<ProdItem direction="col" imgSrc="prod_5by5" squareSize="auto" prodLank={4} brand="BRAND NAME BRAND NAME BRAND NAME BRAND NAME BRAND NAME BRAND NAME" btmBadgeText={['badge01', 'badge02', 'badge03']} btnLink btnWish uiChk discount={12} loanPrice="300,000" price="112,000,000" priceBadge="A" priceOrigin="4,000,000" prodState="ongoing" sizeInfo="230" uid={123456} title="prod title prod title prod title prod title prod title prod title prod title prod title prod title" topBadgeText={['badge01', 'badge02']} />]} />

			<StickyWrap
				top={36}
				children={<ListHeader
					countNum="9,999"
					hasFilter
					onChange={(value) => setValue02(value)}
					placeholder="Select an option"
					selectSlots={[
						{
							label: 'option 01',
							value: 'option 01'
						},
						{
							label: 'option 02',
							value: 'option 02'
						},
						{
							label: 'option 03',
							value: 'option 03'
						},
						{
							label: 'option 04',
							value: 'option 04'
						}
					]}
					value={value02}
				/>
				}
			/>
			<GridList mt={12} type={'col2'} gap={'prod'} items={[
				<ProdItem direction="col" imgSrc="prod_5by5" squareSize="auto" prodLank={1} brand="BRAND NAME BRAND NAME BRAND NAME BRAND NAME BRAND NAME BRAND NAME" btmBadgeText={['badge01', 'badge02', 'badge03']} btnLink btnWish uiChk discount={12} loanPrice="300,000" price="112,000,000" priceBadge="A" priceOrigin="4,000,000" prodState="stop" sizeInfo="230" uid={123456} title="prod title prod title prod title prod title prod title prod title prod title prod title prod title" topBadgeText={['badge01', 'badge02']} />,
				<ProdItem direction="col" imgSrc="prod_5by5" squareSize="auto" prodLank={2} brand="BRAND NAME BRAND NAME BRAND NAME BRAND NAME BRAND NAME BRAND NAME" btmBadgeText={['badge01', 'badge02', 'badge03']} btnLink btnWish uiChk discount={12} loanPrice="300,000" price="112,000,000" priceBadge="A" priceOrigin="4,000,000" sizeInfo="230" uid={123456} title="prod title prod title prod title prod title prod title prod title prod title prod title prod title" topBadgeText={['badge01', 'badge02']} />,
				<ProdItem direction="col" imgSrc="prod_5by5" squareSize="auto" prodLank={3} brand="BRAND NAME BRAND NAME BRAND NAME BRAND NAME BRAND NAME BRAND NAME" btmBadgeText={['badge01', 'badge02', 'badge03']} btnLink btnWish uiChk discount={12} loanPrice="300,000" price="112,000,000" priceBadge="A" priceOrigin="4,000,000" sizeInfo="230" uid={123456} title="prod title prod title prod title prod title prod title prod title prod title prod title prod title" topBadgeText={['badge01', 'badge02']} />,
				<ProdItem direction="col" imgSrc="prod_5by5" squareSize="auto" prodLank={4} brand="BRAND NAME BRAND NAME BRAND NAME BRAND NAME BRAND NAME BRAND NAME" btmBadgeText={['badge01', 'badge02', 'badge03']} btnLink btnWish uiChk discount={12} loanPrice="300,000" price="112,000,000" priceBadge="A" priceOrigin="4,000,000" prodState="ongoing" sizeInfo="230" uid={123456} title="prod title prod title prod title prod title prod title prod title prod title prod title prod title" topBadgeText={['badge01', 'badge02']} />]} />

		</>
	)
}