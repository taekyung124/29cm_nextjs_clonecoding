import * as React from "react";
import type { Meta, StoryObj, StoryFn } from "@storybook/react";

import {TabWrap} from "@/components/organism/tabWrap/TabWrap";

const meta = {
	title: 'Organism/TabWrap',
	component: TabWrap,
	tags: ['autodocs'],
	parameters: {
		layout: 'padded',
	},
	argTypes: {
		type: {
			control: "inline-radio",
			options: ['line', 'pill', 'boxSm', 'boxLg'],
		},
		align: {
			control: "inline-radio",
			options: ['auto', 'justify', 'col2', 'col3']
		},
		isAnchor: {
			control: "boolean",
		},
		filterTab: {
			control: "boolean",
		},
		tabs: {
			control: "object"
		},
		tabContent: {
			control: "object"
		}
	}
} satisfies Meta<typeof TabWrap>;

export default meta;
type Story = StoryObj<typeof TabWrap>;

export const Default: Story = {
	args: {
		type: 'line',
		align: 'justify',
		isAnchor: false,
		filterTab: false,
		tabs:[
			{ text: 'tabMenu 01', href: 'javascript:', isDisabled: false},
			{ text: 'tabMenu 02', val: '01', isDisabled: false},
			{ text: 'tabMenu 03', isDisabled: true},
			{ text: 'tabMenu 04', val: '01', isDisabled: false},
		],
		tabContent: [
			<div style={{width: '100%', height: '300px', background: '#aaa'}}>tabMenu 01</div>,
			<div style={{width: '100%', height: '300px', background: '#bbb'}}>tabMenu 02</div>,
			<div style={{width: '100%', height: '300px', background: '#ccc'}}>tabMenu 03</div>,
			<div style={{width: '100%', height: '300px', background: '#ddd'}}>tabMenu 04</div>,
		]
	},
	render:(args) => <TabWrap {...args} />,
}
