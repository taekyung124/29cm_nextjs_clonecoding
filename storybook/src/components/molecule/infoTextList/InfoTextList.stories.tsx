import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import {InfoTextList} from "@/components/molecule/infoTextList/InfoTextList";

const meta = {
	title: 'Molecule/InfoTextList',
	component: InfoTextList,
	tags: ['autodocs'],
	parameters: {
		layout: 'padded',
	},
	argTypes: {
		gap: {
			control: 'inline-radio',
			options: ['sm', 'md'],
		},
		items: {
			control: 'object',
		}
	}
} satisfies Meta<typeof InfoTextList>;

export default meta;
type Story = StoryObj<typeof InfoTextList>;

export const Default: Story = {
	args: {
		gap: 'sm',
		items: ([
			{
				type: 'dot',
				text: 'dot text',
			},
			{
				type: 'dot',
				text: 'dot text Lg',
				size: 'Lg',
			},
			{
				type: 'dot',
				text: 'dot text Red',
				color: 'Red',
			},
			{
				type: 'dash',
				text: 'dash text',
			},
			{
				type: 'dash',
				text: 'dash text Sm',
				size: 'Sm',
			},
			{
				type: 'dash',
				text: 'dash text Lg',
				size: 'Lg',
			},
			{
				type: 'dash',
				text: 'dash text Gray',
				color: 'Gray',
			},
			{
				type: 'decimal',
				text: 'decimal text',
			},
			{
				type: 'udl',
				text: 'udl text',
			},
			{
				type: 'udl',
				text: 'udl text Lg',
				size: 'Lg',
			},
			{
				type: 'udl',
				text: 'udl text Black',
				color: 'Black',
			},
			{
				type: 'udl',
				text: 'udl text Lg Black',
				size: 'Lg',
				color: 'Black',
			},
			{
				type: 'brand',
				text: 'brand name',
				sub: 'brand name sub'
			},
		])
	},
	render: (args) => <InfoTextList {...args} />,
}