import * as React from 'react';
import type { Meta, StoryObj, StoryFn } from '@storybook/nextjs-vite';

import {BoardList} from "@/components/organism/boardList/BoardList";

const meta = {
	title: 'Organism/BoardList',
	component: BoardList,
	tags: ['autodocs'],
	parameters: {
		layout: 'padded',
	},
	argTypes: {
		mt: {
			control: 'number'
		},
		hasTopLine: {
			control: 'boolean'
		},
		items: {
			control: 'object',
		}
	}
} satisfies Meta<typeof BoardList>;

export default meta;
type Story = StoryObj<typeof BoardList>;

export const Default: Story = {
	args: {
		hasTopLine: false,
		items: ([
			{
				title: '구구스 온라인', desc: '샤넬 스니커즈 운동화 CC로고 스웨이드 라이트 샤넬 스니커즈 운동화',
				orderNumber: 1234567, date: '2025.09.26', status: '구매적립', statusColor: 'fcBlack',
				pointType: 'earn', val: '10,000', unit: 'P', pointDesc: '추가포인트', hasHref: false
			},
			{
				title: '구찌 홀스레빗', date: '2025.09.26', status: '자동구매취소',
				pointType: 'use', val: '10', unit: '점', hasHref: false
			},
			{
				title: '구구스 온라인', desc: '아아아ㅏ아아아아아아아ㅏ아 아아아ㅏ아아아아아아아ㅏ아 아아아ㅏ아아아아아아아ㅏ아 아아아ㅏ아아아아아아아ㅏ아 아아아ㅏ아아아아아아아ㅏ아',
				orderNumber: 1234567, date: '2025.09.26', status: '구매사용', statusColor: 'fcBlack',
				pointType: 'use', val: '10,000,000', unit: 'P', hasHref: false
			},
			{
				title: '포인트', desc: '샤넬 스니커즈 운동화 CC로고 스웨이드 라이트 샤넬 스니커즈 운동화 샤넬 스니커즈 운동화 CC로고 스웨이드 라이트 샤넬 스니커즈 운동화',
				orderNumber: 9999999, date: '2025.09.26', status: '구구스 온라인', statusColor: 'fcBlack',
				pointType: 'expire', val: '10,000', unit: 'P', pointDesc: '30,000P', hasHref: false
			},
		])
	},
	render: (args) => <BoardList {...args} />,
}

export const QnaList: StoryFn = () => (
	<BoardList items={[
		{ title: '직접 가서 보고 구입하려는데 문의드려요. 보고구매를 눌러도 넘어가지 않습니다.', isQna: true, date: '2025.09.26', status: '검토중', hasHref: true },
		{ title: (<>직접 가서 보고 구입하려는데 문의드려요. <br />보고구매를 눌러도 넘어가지 않습니다.</>), isQna: true, date: '2025.09.26', status: '검토중', hasHref: true},
		{ title: '직접 가서 보고 구입하려는데 문의드려요. 보고구매를 눌러도 넘어가지 않습니다.', isQna: true, date: '2025.09.26', status: '답변 완료', statusColor: 'fcSpot', hasHref: true },
		{ title: '직접 가서 보고 구입하려는데 문의드려요.', isQna: true, date: '2025.09.26', status: '검토중', hasHref: true},
	]} />
)