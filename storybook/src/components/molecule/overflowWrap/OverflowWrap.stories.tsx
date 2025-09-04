import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import {OverflowWrap} from "@/components/molecule/overflowWrap/OverflowWrap";
import {TitleWrap} from "@/components/molecule/titleWrap/TitleWrap";
import {Title} from "@/components/atomic/title/Title";
import {Stext} from "@/components/atomic/stext/Stext";
import {Table, TableCell} from "@/components/molecule/table/Table";

const meta = {
	title: 'Molecule/OverflowWrap',
	component: OverflowWrap,
	tags: ['autodocs'],
	parameters: {
		layout: 'padded',
	},
	argTypes: {
		type: {
			control: 'inline-radio',
			options: ['toggleLine', 'toggleRound', 'textSingle', 'textMulti']
		},
		contHeader: {
			control: 'text'
		},
		contBody: {
			control: 'text'
		},
		toggleCont: {
			control: 'text'
		},
		text: {
			control: 'text'
		},
		onClick: {
			table: {
				control: 'disabled'
			}
		},
		toggleContMt: {
			control: 'number'
		}
	}
} satisfies Meta<typeof OverflowWrap>;

export default meta;
type Story = StoryObj<typeof OverflowWrap>;

const InfoSm01TbodyData: TableCell[][] = [
	[
		{ type: 'th', content: '답변 가능 시간', scope: 'row' },
		{ type: 'td', content: '10:00~17:00' },
	],
	[
		{ type: 'th', content: '당일 출고 가능 시간', scope: 'row' },
		{ type: 'td', content: '10:00~13:00' },
	]
]
const InfoSm02TbodyData: TableCell[][] = [
	[
		{ type: 'th', content: '발송 택배사', scope: 'row' },
		{ type: 'td', content: 'CJ 대한통운' },
	],
	[
		{ type: 'th', content: '반품 회수 방법', scope: 'row' },
		{ type: 'td', content: '고객 직접 발송' },
	],
	[
		{ type: 'th', content: '반품비', scope: 'row' },
		{ type: 'td', content: '50,000원' },
	]
]

export const Default: Story = {
	args: {
		type: 'toggleLine',
		contHeader: (
			<TitleWrap mb={'md'} child={
				<>
					<Title type={'ctitle'} size={'md'} text={'온라인판매점'}/>
					<Stext size={'Sm'} mt={'md'}
						   text={
							<> 까다로운 심사를 거쳐 인증 받은 셀러의
							   <br />상품만을 판매하는 온라인 판매점 상품입니다.
						   </>}
					/>
				</>
			} />
		),
		contBody: (
			<Table
				wapperType={'Info'}
				tblType={'InfoSm'}
				caption={'온라인 판매점 테이블'}
				colWidth={['120px','auto']}
				tbody={InfoSm01TbodyData}
			/>
		),
		toggleCont: (<Table
			wapperType={'Info'}
			tblType={'InfoSm'}
			caption={'온라인 판매점 테이블'}
			colWidth={['120px','auto']}
			tbody={InfoSm02TbodyData}
		/>),
		toggleContMt: 6,
	},
	render: (args) =>
		<div style={{ maxWidth: '300px', margin: '0 auto' }}>
			<OverflowWrap {...args} />
		</div>,
}