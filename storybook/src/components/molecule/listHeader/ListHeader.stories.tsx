import * as React from 'react';
import type { Meta, StoryObj, StoryFn } from '@storybook/nextjs-vite';

import {ListHeader} from "@/components/molecule/listHeader/ListHeader";
import {Button} from "@/components/atomic/button/Button";

const meta = {
	title: 'Molecule/ListHeader',
	component: ListHeader,
	tags: ['autodocs'],
	parameters: {
		layout: 'padded',
	},
	argTypes: {
		countNum: {
			control: 'text',
		},
		toggle: {
			control: 'object',
		},
		btnSlots: {
			control: 'object',
		},
		selectSlots: {
			control: 'object',
		},
		isSticky: {
			control: 'boolean',
		},
		hasFilter: {
			control: 'boolean',
		},
	}
} satisfies Meta<typeof ListHeader>;

export default meta;
type Story = StoryObj<typeof ListHeader>;

export const Default: Story = {
	args: {
		countNum: '9,999',
		selectSlots:  [
			{ label: 'option 01', value: 'option 01' },
			{ label: 'option 02', value: 'option 02' },
			{ label: 'option 03', value: 'option 03' },
			{ label: 'option 04', value: 'option 04' },
		],
		placeholder: 'Select an option',
		hasFilter: true,
	},
	render: (args) => {
		const [value, setValue] = React.useState('');

		return (
			<ListHeader {...args} value={value} onChange={(value) => setValue(value)} />
		)
	},
}

export const CountBtn: StoryFn = () => (
	<ListHeader
		countNum="9,999"
		btnSlots={<>
			<Button color="lineGray" rounded size="sm" text="이전 내역 조회" />
			<Button color="lineGray" rounded size="sm" text="모두삭제" />
		</>}
	/>
)

export const CountSelect: StoryFn = () => {
	const [value, setValue] = React.useState('');

	return (
		<ListHeader
			countNum="9,999"
			onChange={(value) => setValue(value)}
			placeholder="Select an option"
			selectSlots={[
				{
					label: 'option 01',
					value: 'option 01'
				},
				{
					label: 'option 02',
					value: 'option 02'
				},
				{
					label: 'option 03',
					value: 'option 03'
				},
				{
					label: 'option 04',
					value: 'option 04'
				}
			]}
			value={value}
		/>
	)
}

export const CountSelectFilter: StoryFn = () => {
	const [value, setValue] = React.useState('');
	return (
		<ListHeader
			countNum="9,999"
			hasFilter
			onChange={(value) => setValue(value)}
			placeholder="Select an option"
			selectSlots={[
				{
					label: 'option 01',
					value: 'option 01'
				},
				{
					label: 'option 02',
					value: 'option 02'
				},
				{
					label: 'option 03',
					value: 'option 03'
				},
				{
					label: 'option 04',
					value: 'option 04'
				}
			]}
			value={value}
		/>
	)
}

export const Toggle: StoryFn = () => (
	<ListHeader toggle={['거래 진행중 제외', '보고구매 가능']} />
)