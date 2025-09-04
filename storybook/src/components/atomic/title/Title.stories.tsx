import * as React from 'react';
import type {Meta, StoryFn, StoryObj} from '@storybook/nextjs-vite';
import { Title } from './Title';

const meta = {
    title: 'Atomic/Title',
    component: Title,
    tags: ['autodocs'],
    parameters: {
    	layout: 'padded',
    },
	argTypes: {
		type: {
			control: 'inline-radio',
			options: ['ctitle', 'ctitleSub', 'stitle']
		},
		size: {
			control: 'inline-radio',
			options: ['sm', 'md', 'lg', 'xl']
		},
		lang: {
			control: 'inline-radio',
			options: ['kor', 'eng']
		},
		text: {
			control: 'text',
		}
	}
} satisfies Meta<typeof Title>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dafault: Story = {
	args: {
		type: 'ctitle',
		size: 'sm',
		lang: 'kor',
		text: '타이틀 type | size | lang'
	},
	render: (args) => <Title {...args} />
};