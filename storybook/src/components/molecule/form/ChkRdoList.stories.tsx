import * as React from 'react';
import type { Meta, StoryObj, StoryFn} from '@storybook/nextjs-vite';

import {ChkRdoList} from "@/components/molecule/form/ChkRdoList";

const meta = {
	title: 'Molecule/Form/ChkRdoList',
	component: ChkRdoList,
	tags: ['autodocs'],
	parameters: {
		layout: 'padded',
	},
	argTypes: {
		type: {
			control: 'inline-radio',
			options: ['row', 'col']
		},
		align: {
			control: 'inline-radio',
			options: ['center', 'top']
		},
		gap: {
			control: 'inline-radio',
			options: ['sm', 'md']
		}
	}
} satisfies Meta<typeof ChkRdoList>;


export default meta;
type Story = StoryObj<typeof ChkRdoList>;

export const Default: Story = {
	args: {
		type: 'row',
		align: 'center',
		gap: 'md',
		items: [
			{ type: 'checkbox', idx: 'checkbox01', text: '라벨 텍스트', align: 'full' },
			{ type: 'checkbox', idx: 'checkbox02', text: '라벨 텍스트', subText: '서브 텍스트' },
			{ type: 'checkbox', idx: 'checkbox03', text: '라벨 텍스트', align: 'right' },
			{ type: 'radio', idx: 'radio01', name: 'radio', text: '라벨 텍스트' },
			{ type: 'radio', idx: 'radio02', name: 'radio', text: '라벨 텍스트', subText: '서브 텍스트' },
		],
	},
	render: (args) => <ChkRdoList {...args} />
}

export const AlignTop: StoryFn = () => (
	<div style={{maxWidth: '300px', margin: '0 auto'}}>
		<ChkRdoList
			align="top"
			gap="sm"
			type="col"
			items={[
				{
					type: 'checkbox',
					idx: 'checkbox001',
					text: '라벨 텍스트',
					subText: '서브 텍스트 줄바꿈 서브 텍스트 줄바꿈 서브 텍스트 줄바꿈 서브 텍스트 줄바꿈'
				},
				{
					type: 'radio',
					idx: 'radio001',
					name: 'radio001',
					text: '라벨 텍스트',
					subText: '서브 텍스트 줄바꿈 서브 텍스트 줄바꿈 서브 텍스트 줄바꿈 서브 텍스트 줄바꿈'
				},
				{
					type: 'radio',
					idx: 'radio002',
					name: 'radio001',
					text: '라벨 텍스트',
					subText: '서브 텍스트 줄바꿈 서브 텍스트 줄바꿈 서브 텍스트 줄바꿈 서브 텍스트 줄바꿈'
				}
			]}
		/>
	</div>
)