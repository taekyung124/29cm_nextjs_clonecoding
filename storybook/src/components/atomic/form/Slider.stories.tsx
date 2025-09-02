import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import {Slider, SliderProps} from './Slider';

const meta: Meta<SliderProps> = {
	title: 'Atomic/Form/Slider',
	component: Slider,
	tags: ['autodocs'],
	argTypes: {
		minValue: {
			control: {type: 'number'},
		},
		maxValue: {
			control: {type: 'number'},
		}
	},
	decorators: [ // preview 500
		(Story) => (
			<div style={{ maxWidth: '500px', margin: '0 auto' }}>
				<Story />
			</div>
		),
	],
};
export default meta;
type Story = StoryObj<SliderProps>;

export const Default: Story = {
	render: () => {
		return (
			<Slider minValue={100} maxValue={1000} />
		)
	}
}