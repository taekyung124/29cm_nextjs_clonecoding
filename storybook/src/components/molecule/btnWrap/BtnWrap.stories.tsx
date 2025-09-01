import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { BtnWrap } from './BtnWrap';
import {Button} from "@/components/atomic/button/Button";

const meta = {
	title: 'Molecule/BtnWrap',
	component: BtnWrap,
	tags: ['autodocs'],
	parameters: {
		layout: 'padded',
	},
	argTypes: {
		mt: {
			control: 'inline-radio',
			options: ['zero', '2xs', 'xs', 'sm', 'md', 'lg', 'xl'],
		},
		align: {
			control: 'inline-radio',
			options: ['', 'auto', 'center', 'right', 'full'],
		},
		divider: {
			control: 'boolean',
		},
		buttons: {
			control: 'object',}
	}
} satisfies Meta<typeof BtnWrap>;

export default meta;
type Story = StoryObj<typeof BtnWrap>;

export const Default: Story = {
	args: {
		mt: 'zero',
		divider: false,
		buttons: (
			<>
				<Button color={'lineLightGray'} text={'lineLightGray'}/>
				<Button color={'green'} text={'green'}/>
			</>
		)
	},
	render: (args) => <BtnWrap {...args} />,
}