import * as React from 'react';
import type { Meta, StoryObj, StoryFn } from '@storybook/nextjs-vite';

import {EtcButton} from "@/components/atomic/etcButton/EtcButton";
import {BtnWrap} from "@/components/molecule/btnWrap/BtnWrap";

const meta = {
	title: 'Atomic/EtcButton',
	component: EtcButton,
	tags: ['autodocs'],
	parameters: {
		layout: 'padded',
	},
	argTypes: {
		name: {
			control: {type: 'inline-radio'},
			options: ['grade', 'box', 'wish', 'sort', 'add'],
		},
		color: {
			control: {type: 'inline-radio'},
			options: ['white', 'gray', 'green', 'red'],
		},
		icon: {
			control: {type: 'select'},
			options: ['lock', 'lock_white', 'phone', 'card', 'phone_white', 'card_white', 'sort', 'add_store'],
		},
		iconSize: {
			control: {type: 'inline-radio'},
			options: [14, 20, 24, 25, 30],
		},
		text: {
			control: {type: 'inline-radio'},
			options: ['grade', 'box', 'wish', 'sort', 'add'],
		},
		addClass: {
			control: {type: 'inline-check'},
			options: ['sm'],
		},
		onClick: {
			table: {
				disable: true,
			},
		},
		tag: {
			control: {type: 'inline-radio'},
			options: ['a', 'button'],
		},
	}
} satisfies Meta<typeof EtcButton>;

export default meta;
type Story = StoryObj<typeof EtcButton>;

export const Default: Story = {
	args: {
		name: 'grade',
		color: 'white',
		icon: '',
		iconSize: 0,
		text: 'S',
		addClass: '',
		tag: 'a'
	},
	render: (args) => <EtcButton {...args} />
}

export const Grade: StoryFn = () => (
	<BtnWrap align={'auto'} buttons={
		<>
			<EtcButton name={'grade'} text="N"/>
			<EtcButton name={'grade'} text="S"/>
			<EtcButton name={'grade'} text="A"/>
			<EtcButton name={'grade'} text="B"/>
			<EtcButton name={'grade'} text="USED" addClass={'sm'}/>
		</>
	} />
)

export const Box: StoryFn = () => (
	<BtnWrap align={'full'} buttons={
		<>
			<EtcButton name={'box'} text="통합간편인증" icon={'lock'} iconSize={30}/>
			<EtcButton name={'box'} text="휴대폰 인증" icon={'phone'} iconSize={30}/>
			<EtcButton name={'box'} text="신용카드 인증" icon={'card'} iconSize={30}/>
			<EtcButton name={'box'} text="통합간편인증" icon={'lock_white'} iconSize={30} color={'green'}/>
			<EtcButton name={'box'} text="휴대폰 인증" icon={'phone_white'} iconSize={30} color={'green'}/>
			<EtcButton name={'box'} text="신용카드 인증" icon={'card_white'} iconSize={30} color={'green'}/>
		</>
	} />
)

export const Wish: StoryFn = () => (
	<>
		<EtcButton name="wish" color="red" iconSize={14} />
		<EtcButton name="wish" color="red" iconSize={20} />
		<EtcButton name="wish" color="red" iconSize={24} />
		<div style={{ background: '#012E29' }}>
			<EtcButton name="wish" iconSize={14} />
			<EtcButton name="wish" iconSize={20} />
			<EtcButton name="wish" iconSize={24} />
		</div>
	</>
)

export const Sort: StoryFn = () => (
	<>
		<EtcButton name={'sort'} text="정렬" icon={'sort'} iconSize={14} />
	</>
)

export const Add: StoryFn = () => (
	<BtnWrap align={'full'} buttons={
		<>
			<EtcButton name={'add'} text="관심매장 추가" icon={'add_store'} iconSize={25}/>
			<EtcButton name={'add'} text="배송지 추가" icon={'add_store'} iconSize={25}/>
			<EtcButton name={'add'} text="계좌 추가" icon={'add_store'} iconSize={25}/>
		</>
	} />
)