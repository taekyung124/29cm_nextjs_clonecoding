import * as React from 'react';
import type { Meta, StoryObj, StoryFn } from '@storybook/nextjs-vite';

import {TermsWrap} from "@/components/templates/termsWrap/TermsWrap";

const meta = {
	title: 'Templates/TermsWrap',
	component: TermsWrap,
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
		hTitle: {
			control: 'text'
		},
		cTitle: {
			control: 'text'
		},
		cSubText: {
			control: 'text'
		},
		items: {
			control: 'object'
		},
		selectOptions: {
			control: 'object'
		}
	}
} satisfies Meta<typeof TermsWrap>;

export default meta;
type Story = StoryObj<typeof TermsWrap>;

export const Default: Story = {
	args: {
		hTitle: '대타이틀 영역입니다.',
		cTitle: '중타이틀 영역입니다.',
		cSubText: '중타이틀 서브 텍스트 영역입니다. 중타이틀 서브 텍스트 영역입니다. 중타이틀 서브 텍스트 영역입니다. 중타이틀 서브 텍스트 영역입니다. 중타이틀 서브 텍스트 영역입니다. 중타이틀 서브 텍스트 영역입니다. 중타이틀 서브 텍스트 영역입니다.',
		selectOptions: [
			{label: "[현행] 2025년 09월 26일 시행안", value: "terms 01"},
			{label: "[이전] 2024년 09월 26일 시행안", value: "terms 02"},
			{label: "[이전] 2023년 09월 26일 시행안", value: "terms 03"}
		],
		items: [
			{
				sTitle: '소타이틀 영역입니다.',
				sText: '설명 영역입니다. 설명 영역입니다. 설명 영역입니다. 설명 영역입니다. 설명 영역입니다. 설명 영역입니다. 설명 영역입니다. 설명 영역입니다. 설명 영역입니다. 설명 영역입니다. 설명 영역입니다.',
				tableHead: [
					{ type: 'th', content: '테이블 제목', scope: 'col' },
					{ type: 'th', content: '테이블 제목', scope: 'col' },
					{ type: 'th', content: '테이블 제목', scope: 'col' },
				],
				tableContents: [
					[
						{ type: 'td', content: '테이블 내용' },
						{ type: 'td', content: '테이블 내용' },
						{ type: 'td', content: '테이블 내용' },
					],
					[
						{ type: 'td', content: '테이블 내용' },
						{ type: 'td', content: '테이블 내용' },
						{ type: 'td', content: '테이블 내용' },
					]
				]
			},
			{
				sTitle: '소타이틀 영역입니다.',
				sText: ['설명 영역입니다. 설명 영역입니다. 설명 영역입니다. 설명 영역입니다. 설명 영역입니다. 설명 영역입니다. 설명 영역입니다. 설명 영역입니다. 설명 영역입니다. 설명 영역입니다. 설명 영역입니다.', '설명 영역입니다. 설명 영역입니다. 설명 영역입니다. 설명 영역입니다. 설명 영역입니다. 설명 영역입니다. 설명 영역입니다. 설명 영역입니다. 설명 영역입니다. 설명 영역입니다. 설명 영역입니다.'],
			},
			{
				sTitle: '소타이틀 영역입니다.',
				listContents: [
					{ text: "1. 설명 영역입니다. 설명 영역입니다." },
					{ text: "2. 설명 영역입니다. 설명 영역입니다.",
						subList: [
							{ text: "A. 캡션 영역입니다. 캡션 영역입니다. 캡션 영역입니다." },
							{
								text: "B. 캡션 영역입니다. 캡션 영역입니다. 캡션 영역입니다.",
								subList: [
									{ text: "1. 캡션 영역입니다. 캡션 영역입니다. 캡션 영역입니다." },
									{ text: "2. 캡션 영역입니다. 캡션 영역입니다. 캡션 영역입니다." },
								],
							},
						],
					},
					{ text: "3. 설명 영역입니다. 설명 영역입니다.",
						subList: [
							{
								text: "캡션 영역입니다. 캡션 영역입니다. 캡션 영역입니다.", type: "dot",
								subList: [
									{ text: "캡션 영역입니다. 캡션 영역입니다. 캡션 영역입니다.", type: "dash", },
									{ text: "캡션 영역입니다. 캡션 영역입니다. 캡션 영역입니다.", type: "dash", },
								],
							},
							{ text: "캡션 영역입니다. 캡션 영역입니다. 캡션 영역입니다.", type: "dot" },
						],
					},
					{ text: "4. 설명 영역입니다. 설명 영역입니다.",
						subList: [
							{
								text: "캡션 영역입니다. 캡션 영역입니다. 캡션 영역입니다.", type: "dash",
								subList: [
									{ text: "캡션 영역입니다. 캡션 영역입니다. 캡션 영역입니다.", type: "dot", },
									{ text: "캡션 영역입니다. 캡션 영역입니다. 캡션 영역입니다.", type: "dot", },
								],
							},
							{ text: "캡션 영역입니다. 캡션 영역입니다. 캡션 영역입니다.", type: "dash" },
						],
					},
				],
			},
			{
				sTitle: '소타이틀 영역입니다.',
				listContents: [
					{
						text: "1. 캡션 영역입니다. 캡션 영역입니다. 캡션 영역입니다.",
						subList: [
							{ text: "캡션 영역입니다. 캡션 영역입니다. 캡션 영역입니다." },
						],
					},
					{
						text: "2. 캡션 영역입니다. 캡션 영역입니다. 캡션 영역입니다.",
						subList: [
							{ text: "캡션 영역입니다. 캡션 영역입니다. 캡션 영역입니다." },
						],
					},
					{
						text: "3. 캡션 영역입니다. 캡션 영역입니다. 캡션 영역입니다.",
						subList: [
							{ text: "캡션 영역입니다. 캡션 영역입니다. 캡션 영역입니다." },
						],
					},
				]
			}
		]
	},
	render:(args) => <TermsWrap {...args} />,
}