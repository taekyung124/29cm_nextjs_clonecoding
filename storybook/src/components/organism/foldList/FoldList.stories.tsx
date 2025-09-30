import * as React from 'react';
import type { Meta, StoryObj} from '@storybook/nextjs-vite';

import { FoldList } from '@/components/organism/foldList/FoldList';

const meta = {
	title: 'Organism/FoldList',
	component: FoldList,
	tags: ['autodocs'],
	parameters: {
		layout: 'padded',
	},
	argTypes: {
		type: {
			control: 'inline-radio',
			options: ['auto', 'line', 'divider', 'box']
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
} satisfies Meta<typeof FoldList>;

export default meta;
type Story = StoryObj<typeof FoldList>;

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
	render: (args) => <FoldList {...args} />,
}