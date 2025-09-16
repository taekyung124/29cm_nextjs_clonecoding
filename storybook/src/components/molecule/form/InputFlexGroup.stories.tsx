import * as React from 'react';
import type {Meta, StoryObj} from '@storybook/nextjs-vite';

import {InputFlexGroup} from "@/components/molecule/form/InputFlexGroup";
import {SelectMenu} from '@/components/atomic/form/SelectMenu';
import {Input} from '@/components/atomic/form/Input';

const meta = {
	title: 'Molecule/Form/InputFlexGroup',
	component: InputFlexGroup,
	parameters: {
		layout: 'padded',
	},
	tags: ['autodocs'],
	argTypes: {
		gap: {
			control: 'inline-radio',
			options: ['Md', 'Lg'],
		},
		midText: {
			control: 'text',
		},
		leftArea: {
			control: 'text',
		},
		rightArea: {
			control: 'text',
		},
		formContents: {
			control: 'text',
		},
		btnSlot: {
			control: 'text',
		},
		isValidCheck: {
			control: 'inline-radio',
			options: ['', 'success', 'fail'],
		},
		inputGuide: {
			control: 'text',
		},
		validDesc: {
			control: 'text',
		}
	}
} satisfies Meta<typeof InputFlexGroup>;

export default meta;
type Story = StoryObj<typeof InputFlexGroup>;

export const InputFlexGroupTel: Story = {
	args: {
		gap: 'Md',
		formContents: (<>
			<SelectMenu
				onChange={() => {
				}}
				options={[
					{label: '010', value: '010'},
					{label: '011', value: '011'},
					{label: '016', value: '016'},
					{label: '017', value: '017'},
					{label: '018', value: '018'},
					{label: '019', value: '019'},
				]}
				placeholder="010"
				title="휴대폰 번호"
				value={''}
			/>
			<Input boxType={undefined} type={'number'} title={'휴대폰 번호 앞자리 입력'} hideGuide={true}/>
			<Input boxType={undefined} type={'number'} title={'휴대폰 번호 뒷자리 입력'} hideGuide={true}/>
		</>),
		isValidCheck: 'fail',
		inputGuide: 'guide text 입니다.',
		validDesc: 'valid check text 입니다.'
	},
	render: (args) => <InputFlexGroup {...args} />
}

export const InputFlexGroupEmail: Story = {
	args: {
		gap: 'Lg',
		midText: '@',
		leftArea: (
			<Input boxType={undefined} type={'text'} title={'이메일 입력'} />
		),
		rightArea: (
			<SelectMenu
				onChange={() => {
				}}
				options={[
					{label: '직접입력', value: '직접입력'},
					{label: 'option01', value: 'option01'},
					{label: 'option02', value: 'option02'},
					{label: 'option03', value: 'option03'},
					{label: 'option04', value: 'option04'},
					{label: 'option05', value: 'option05'},
				]}
				placeholder="직접입력"
				title="도메인"
				value={''}
			/>
		),
	},
	render: (args) => <InputFlexGroup {...args} />
}

export const InputFlexGroupEmailLine: Story = {
	args: {
		gap: 'Lg',
		midText: '@',
		leftArea: (
			<Input boxType={'line'} type={'text'} title={'이메일 입력'} />
		),
		rightArea: (
			<SelectMenu
				onChange={() => {
				}}
				options={[
					{label: '직접입력', value: '직접입력'},
					{label: 'option01', value: 'option01'},
					{label: 'option02', value: 'option02'},
					{label: 'option03', value: 'option03'},
					{label: 'option04', value: 'option04'},
					{label: 'option05', value: 'option05'},
				]}
				placeholder="직접입력"
				title="도메인"
				value={''}
				type={'line'}
			/>
		),
	},
	render: (args) => <InputFlexGroup {...args} />
}