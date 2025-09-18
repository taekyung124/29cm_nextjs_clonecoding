import * as React from 'react';
import type { Meta, StoryObj, StoryFn } from '@storybook/nextjs-vite';

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

export const Square1by1: StoryFn = () => (
	<div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
		<Thumb altText="상품 이미지" btnWish imgSrc="prod_5by5" squareSize="Xs" type="square" uiChk />
		<Thumb altText="상품 이미지" btnWish imgSrc="prod_5by5" squareSize="Sm" type="square" uiChk />
		<Thumb altText="상품 이미지" btnWish imgSrc="prod_5by5" squareSize="Md" type="square" uiChk />
		<Thumb altText="상품 이미지" btnWish imgSrc="prod_5by5" squareSize="Lg" type="square" uiChk />
		<Thumb altText="상품 이미지" btnWish imgSrc="prod_5by5" prodState="stop" type="square" uiChk />
		<Thumb altText="상품 이미지" btnWish imgSrc="prod_5by5" prodState="ongoing" type="square" uiChk />
	</div>
)

export const Classic4by3: StoryFn = () => (
	<>
		<Thumb
			altText="이벤트 썸네일 이미지"
			btnLink
			imgSrc="event_01"
			type="classic"
		/>
		<Thumb
			altText="이벤트 썸네일 이미지"
			btnLink
			imgSrc="event_02"
			type="classic"
		/>
		<Thumb
			altText="이벤트 썸네일 이미지"
			btnLink
			imgSrc="event_03"
			type="classic"
		/>
		<Thumb
			altText="이벤트 썸네일 이미지"
			btnLink
			imgSrc="event_04"
			type="classic"
		/>
	</>
)

export const FluidW_100H_auto: StoryFn = () => (
	<Thumb
		altText="어바웃 구구스 썸네일 이미지"
		btnLink
		imgSrc="about_gugus_01"
		type="fluid"
	/>
)

export const FixedW_100H_fixed: StoryFn = () => (
	<Thumb
		altText="이벤트 썸네일 이미지"
		btnLink
		countProdVal="9,999"
		hasCountProd
		fixedHeight={'47.761%'}
		imgSrc="store_detail_01"
		type="fixed"
	/>
)