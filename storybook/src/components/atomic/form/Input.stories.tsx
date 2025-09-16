import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Input } from '@/components/atomic/form/Input';
import { Button } from '@/components/atomic/button/Button';

const meta = {
	title: 'Atomic/Form/Input',
	component: Input,
	parameters: {
		layout: 'padded',
	},
	tags: ['autodocs'],
	decorators: [ // preview 500
		(Story) => (
			<div style={{ maxWidth: '500px', margin: '0 auto' }}>
				<Story />
			</div>
		),
	],
	argTypes: {
		boxType: {
			control: { type: 'inline-radio' },
			options: ['', 'line', 'gray-search'],
		},
		type: {
			control: { type: 'inline-radio' },
			options: ['text', 'number', 'password', 'search', 'tel'],
		},
		isValidCheck: {
			control: { type: 'inline-radio' },
			options: ['', 'fail', 'success'],
		},
		disabled: { control: 'boolean' },
		readonly: { control: 'boolean' },
		title: { control: 'text' },
		placeholder: { control: 'text' },
		value: { control: 'text' },
		inputGuide: { control: 'text' },
		validDesc: { control: 'text' },
		slotBtn: {
			table: {
				disable: true,
			},
		},
		children: {
			table: {
				disable: true,
			},
		},
		onChange: {
			table: {
				disable: true,
			},
		},
	},
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
	args: {
		type: 'text',
		title: 'input',
		placeholder: 'placeholder',
		inputGuide: 'inputGuide',
		validDesc: 'validDesc',
		value: 'value text',
	},
	render: (args) => {
		return (
			<Input {...args} />
		)
	},
};

export const SlotBtnInput: Story = {
	render: () => {
		return (
			<Input
				type={'text'}
				title={'input 기본형'}
				placeholder={'input 기본형'}
				timeCount={'02:59'}
				slotBtn={
					<Button
						color="lineGray"
						rounded
						size="sm"
						tag="button"
						text="인증완료"
					/>
				}
			/>
		)
	},
};

export const LineType: Story = {
	render: () => {
		return (
			<Input
				boxType={'line'}
				type={'text'}
				title={'input 라인형'}
				placeholder={'input 라인형'}
			/>
		)
	},
};

export const PasswordWithToggle: Story = {
	render: () => {
		return (
			<>
				<Input
					type={'password'}
					title={'input 일반형 password'}
					placeholder={'input 일반형 password'}
				/>
				<Input
					boxType={'line'}
					type={'password'}
					title={'input 라인형 password'}
					placeholder={'input 라인형 password'}
				/>
			</>
		)
	},
};

export const InputNumber: Story = {
	render: () => {
		return (
			<>
				<Input
					type={'number'}
					title={'input 일반형 number'}
					placeholder={'input 일반형 number'}
				/>
				<Input
					boxType={'line'}
					type={'number'}
					title={'input 라인형 number'}
					placeholder={'input 라인형 number'}
				/>
			</>
		)
	},
};

export const InputSearch: Story = {
	render: () => {
		return (
			<Input
				type={'search'}
				title={'input 일반형 search'}
				placeholder={'input 일반형 search'}
			/>
		)
	},
};

export const InputSearchGray: Story = {
	render: () => {
		return (
			<Input
				boxType={'gray-search'}
				type={'search'}
				title={'input 일반형 search'}
				placeholder={'input 일반형 search'}
			/>
		)
	},
};