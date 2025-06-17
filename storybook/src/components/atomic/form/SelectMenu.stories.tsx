import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { fn } from 'storybook/test';
import { SelectMenu } from './SelectMenu';

const meta = {
	title: 'Atomic/Form/SelectMenu',
	component: SelectMenu,
	tags: ['autodocs'],
	parameters: {
		layout: 'padded',
	},
	args: {
		onChange: fn(),
		options: [
			{ label: 'option 01', value: 'option 01' },
			{ label: 'option 02', value: 'option 02' },
			{ label: 'option 03', value: 'option 03' },
			{ label: 'option 04', value: 'option 04' },
		],
		placeholder: 'Select an option',
		disabled: false,
		value: '',
	},
	argTypes: {
		type: {
			control: { type: 'radio' },
			options: [ undefined ,'line', 'text'],
		},
		disabled: {
			control: 'boolean',
		},
	},
} satisfies Meta<typeof SelectMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: (args) => {
		const [value, setValue] = React.useState('');
		return (
			<SelectMenu
				{...args}
				value={value}
				onChange={(val) => {
					setValue(val);
					args.onChange(val);
				}}
			/>
		);
	},
	args: {
		title: '기본 SelectMenu',
	},
};
export const LineType: Story = {
	render: (args) => {
		const [value, setValue] = React.useState('');
		return (
			<SelectMenu
				{...args}
				value={value}
				onChange={(val) => {
					setValue(val);
					args.onChange(val);
				}}
			/>
		);
	},
	args: {
		type: 'line',
		title: '라인형 셀렉트',
	},
};

export const TextType: Story = {
	render: (args) => {
		const [value, setValue] = React.useState('');
		return (
			<SelectMenu
				{...args}
				value={value}
				onChange={(val) => {
					setValue(val);
					args.onChange(val);
				}}
			/>
		);
	},
	args: {
		type: 'text',
		title: '텍스트형 셀렉트',
	},
};

export const Disabled: Story = {
	render: (args) => {
		const [value, setValue] = React.useState('');
		return (
			<SelectMenu
				{...args}
				value={value}
				onChange={(val) => {
					setValue(val);
					args.onChange(val);
				}}
			/>
		);
	},
	args: {
		title: '비활성화 상태',
		disabled: true,
	},
};