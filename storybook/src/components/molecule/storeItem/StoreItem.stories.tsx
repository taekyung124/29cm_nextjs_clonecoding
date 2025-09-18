import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import {StoreItem} from "@/components/molecule/storeItem/StoreItem";

const meta = {
	title: 'Molecule/StoreItem',
	component: StoreItem,
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
			options: ['list', 'detail']
		},
		storeName: {
			control: 'text',
		},
		btnWish: {
			control: 'boolean',
		},
		storeLocation: {
			control: 'text',
		},
		locationCopy: {
			control: 'boolean',
		},
		guideUrl: {
			table: {
				disable: true,
			}
		},
		chatUrl: {
			table: {
				disable: true,
			}
		},
		productsUrl: {
			table: {
				disable: true,
			}
		},
		tableContents: {
			control: 'object',
		},
		grayBoxContents: {
			control: 'text',
		},
		countProdVal: {
			control: 'text',
		},
	}
} satisfies Meta<typeof StoreItem>;

export default meta;
type Story = StoryObj<typeof StoreItem>;

export const Default: Story = {
	args: {
		type: 'list',
		storeName: 'stores',
		btnWish: true,
		storeLocation: 'store location store location store location store location',
		grayBoxContents: '매장 소식이 노출됩니다. 매장 소식이 노출됩니다. 매장 소식이 노출됩니다. 매장 소식이 노출됩니다. 매장 소식이 노출됩니다. 매장 소식이 노출됩니다.',
		tableContents: [
			[
				{ type: 'th', content: '전화번호', scope: 'row', className: 'fcBlack fwMd'},
				{ type: 'td', content: '070-8230-2410' },
			],
			[
				{ type: 'th', content: '영업시간', scope: 'row', className: 'fcBlack fwMd'},
				{ type: 'td', content: <>월~금 : 오전 10시~오후6시<br />토, 공휴일 휴무</> },
			],
			[
				{ type: 'th', content: '주소', scope: 'row', className: 'fcBlack fwMd'},
				{ type: 'td', content: '서울시 강남구 청담동 78, 2층' },
			],
		],
		imgSrc: 'store_detail_01',
		countProdVal: '9,999'
	},
	render: (args) => <StoreItem {...args} />
}