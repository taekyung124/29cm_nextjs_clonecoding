import * as React from 'react';
import type { Meta, StoryObj, StoryFn } from '@storybook/nextjs-vite';

import {Gnb} from "@/components/organism/gnb/Gnb";

const meta = {
	title: 'Organism/Header/Gnb',
	component: Gnb,
	tags: ['autodocs'],
	parameters: {
		layout: 'padded',
	},
	decorators: [ // preview 500
		(Story) => (
			<div style={{ maxWidth: '500px', margin: '0 auto'}}>
				<Story />
			</div>
		),
	],
	argTypes: {
		items: {
			control: 'object'
		}
	}
} satisfies Meta<typeof Gnb>;

export default meta;
type Story = StoryObj<typeof Gnb>;

export const Default: Story = {
	args: {
		items: [
			{text: '업데이트', href: '', isNew: true,},
			{text: '가격인하', href: '',},
			{text: '미사용신품', href: '',},
			{text: '핫딜', href: '',},
			{text: '아울렛', href: '',},
			{text: '롤렉스', href: '',},
			{text: '에르메스', href: '',},
			{text: '샤넬', href: '',},
			{text: '이벤트', href: '',},
			{text: '내명품팔기', href: '',},
			{text: '전국직영매장', href: '',},
			{text: '명품케어서비스', href: '',}
		]
	},
	render: (args) => <Gnb {...args} />
}