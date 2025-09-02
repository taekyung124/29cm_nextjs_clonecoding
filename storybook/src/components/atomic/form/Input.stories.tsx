import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Input, InputProps } from './Input';

const meta: Meta<InputProps> = {
	title: 'Atomic/Form/Input',
	component: Input,
	tags: ['autodocs'],
	argTypes: {
		boxType: {
			control: { type: 'select' },
			options: [undefined, 'line', 'gray-search'],
		},
		type: {
			control: { type: 'select' },
			options: ['text', 'number', 'password', 'search', 'tel'],
		},
		isValidCheck: {
			control: { type: 'select' },
			options: [undefined, 'fail', 'success'],
		},
		disabled: { control: 'boolean' },
		readonly: { control: 'boolean' },
		title: { control: 'text' },
		placeholder: { control: 'text' },
		value: { control: 'text' },
		inputGuide: { control: 'text' },
		validDesc: { control: 'text' },
	},
};

export default meta;
type Story = StoryObj<InputProps>;

export const Default: Story = {
	render: () => {
		return (
			<>
				<Input boxType={undefined} type={'text'} title={'input 기본형'} placeholder={'input 기본형'} />
				<Input boxType={undefined} type={'text'} title={'input 기본형 비활성화'} placeholder={'input 기본형 비활성화'} disabled={true}/>
				<Input boxType={undefined} type={'text'} title={'input 기본형 비활성화'} placeholder={'input 기본형 비활성화'} disabled={true} value={'input 기본형 비활성화 value 있는 경우'}/>
			</>
		)
	},
};

export const LineType: Story = {
	render: () => {
		return (
			<>
				<Input boxType={'line'} type={'text'} title={'input 라인형'} placeholder={'input 라인형'} />
			</>
		)
	},
};

export const PasswordWithToggle: Story = {
	render: () => {
		return (
			<>
				<Input boxType={undefined} type={'password'} title={'input 일반형 password'} placeholder={'input 일반형 password'} />
				<Input boxType={'line'} type={'password'} title={'input 라인형 password'} placeholder={'input 라인형 password'} />
			</>
		)
	},
};

export const InputNumber: Story = {
	render: () => {
		return (
			<>
				<Input boxType={undefined} type={'number'} title={'input 일반형 number'} placeholder={'input 일반형 number'} />
				<Input boxType={'line'} type={'number'} title={'input 라인형 number'} placeholder={'input 라인형 number'} />
			</>
		)
	},
};

export const InputSearch: Story = {
	render: () => {
		return (
			<>
				<Input boxType={undefined} type={'search'} title={'input 일반형 search'} placeholder={'input 일반형 search'} />
			</>
		)
	},
};

export const InputSearchGray: Story = {
	render: () => {
		return (
			<>
				<Input boxType={'gray-search'} type={'search'} title={'input 일반형 search'} placeholder={'input 일반형 search'} />
			</>
		)
	},
};