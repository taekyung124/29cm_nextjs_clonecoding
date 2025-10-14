import * as React from 'react';
import type { Meta, StoryObj, StoryFn } from '@storybook/nextjs-vite';

import {BoardDetail} from "@/components/templates/boardDetail/BoardDetail";

const meta = {
	title: 'Templates/BoardDetail',
	component: BoardDetail,
	tags: ['autodocs'],
	parameters: {
		layout: 'padded',
	},
	argTypes: {
		title: { control: 'text' },
		date: { control: 'text' },
		status: { control: 'text' },
		contents: { control: 'object' },
		replyContents: { control: 'object' },
	}
} satisfies Meta<typeof BoardDetail>;

export default meta;
type Story = StoryObj<typeof BoardDetail>;

export const Default: Story = {
	args: {
		title: '문의 제목~~~~~~',
		date: '2025.09.26',
		status: '답변 완료',
		contents: '문의 내용 ~~~~~~~~~~~~~~~~~~~~',
		replyContents: (
			<>
				안녕하세요. 고객님,
				<br />구구스 상품문의 담당자입니다.
				<br />문의주신 해당 상품은 현재 예약 중이라 구매 어려운 점 양해 부탁드립니다.
				<br />
				<br />감사합니다.
			</>
		)
	},
	render: (args) => <BoardDetail {...args} />,
}

export const NoReplyCase: StoryFn = () => (
	<BoardDetail title={'직접 가서 보고 구입하려는데 문의드려요. 보고구매를 눌러도 넘어가지 않습니다. 직접 가서 보고 구입하려는데 문의드려요. 보고구매를 눌러도 넘어가지 않습니다.'}
				 date={'2025.09.26'} status={'검토중'} contents={'질문~~~~~~~'}
	/>
)