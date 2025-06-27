import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import {FlexInfoWrap} from './FlexInfoWrap';

const meta = {
	title: 'molecule/FlexInfoWrap',
	component: FlexInfoWrap,
	tags: ['autodocs'],
	parameters: {
		layout: 'padded',
	},
	argTypes: {
		align: {
			control: { type: 'radio' },
			options: [ undefined, 'center', 'end']
		},
	},
	decorators: [ // preview 500
		(Story) => (
			<div style={{ maxWidth: '500px', margin: '0 auto' }}>
				<Story />
			</div>
		),
	],
} satisfies Meta<typeof FlexInfoWrap>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AlignDefault: Story = {
	render: () => {
		return (
			<FlexInfoWrap
				leftArea={
					<div style={{ height: '50px', background: '#222', color: '#eee'}}>
						왼쪽 요소
					</div>
				}
				rightArea={
					<div style={{height: '10px', background: '#eee', color: '#222'}}>
						오른쪽 요소
					</div>
				}
				align={undefined}
			/>
		)
	},
}

export const AlignCenter: Story = {
	render: () => {
		return (
			<FlexInfoWrap
				leftArea={
					<div style={{ height: '50px', background: '#222', color: '#eee'}}>
						왼쪽 요소
					</div>
				}
				rightArea={
					<div style={{height: '10px', background: '#eee', color: '#222'}}>
						오른쪽 요소
					</div>
				}
				align={'center'}
			/>
		)
	},
}

export const AlignEnd: Story = {
	render: () => {
		return (
			<FlexInfoWrap
				leftArea={
					<div style={{ height: '50px', background: '#222', color: '#eee'}}>
						왼쪽 요소
					</div>
				}
				rightArea={
					<div style={{height: '10px', background: '#eee', color: '#222'}}>
						오른쪽 요소
					</div>
				}
				align={'end'}
			/>
		)
	},
}