import * as React from 'react';
import type { Meta, StoryObj} from '@storybook/nextjs-vite';

import { FoldWrap } from '@/components/organism/foldWrap/FoldWrap';

const meta = {
	title: 'Organism/FoldWrap',
	component: FoldWrap,
	tags: ['autodocs'],
	parameters: {
		layout: 'padded',
	},
	argTypes: {
		type: {
			control: 'inline-radio',
			options: ['line', 'divider', 'box']
		},
		color: {
			control: 'inline-radio',
			options: ['white', 'gray']
		},
		innerPadded: {
			control: 'inline-radio',
			options: ['none', 'md']
		},
		items: {
			control: 'object'
		}
	}
} satisfies Meta<typeof FoldWrap>;

export default meta;
type Story = StoryObj<typeof FoldWrap>;

export const Default: Story = {
	args: {
		type: 'line',
		color: 'gray',
		innerPadded: 'md',
		items: ([
			{
				title: 'fold title',
				rightArea: 'right area',
				foldContent: (<>fold content 내용 ~~ </>)
			},
			{
				title: 'fold title',
				icon: 'notice',
				date: '2025-09-16',
				foldContent: (<>공지사항 내용 ~~ </>)
			}
		]),
	},
	render: (args) => <FoldWrap {...args} />,
}