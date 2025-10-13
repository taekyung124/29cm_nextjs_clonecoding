import * as React from 'react';
import type { Meta, StoryObj, StoryFn } from '@storybook/nextjs-vite';

import {Header} from "@/components/organism/header/Header";

const meta = {
	title: 'Organism/Header',
	component: Header,
	parameters: {
		layout: 'padded',
	},
	argTypes: {
		type: {
			control: "inline-radio",
			options: ['main', 'sub']
		},
		title: {
			control: "text"
		},
		subDepth: {
			control: "object",
		},
		headerButtonOrder: {
			control: "object",
		},
		hasGnb: {
			control: "boolean",
		},
		bgTransparent: {
			control: "boolean",
		},
		hasNewAlarm: {
			control: "boolean",
		}
	}
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof Header>;

export const MainHeader: StoryFn = () => (
	<div style={{width: '100%', maxWidth: '500px', margin: '0 auto', background: '#333'}}>
		<Header
			type={'main'}
			headerButtonOrder={[
				{btnAlarmUrl: 'javascript:'},
				{btnSearchUrl: 'javascript:'},
			]}
			hasGnb={true} hasNewAlarm={true}
			items={[
				{text: '업데이트', href: 'javascript:', isNew: true,},
				{text: '가격인하', href: 'javascript:',},
				{text: '미사용신품', href: 'javascript:',},
				{text: '핫딜', href: 'javascript:',},
				{text: '아울렛', href: 'javascript:',},
				{text: '롤렉스', href: 'javascript:',},
				{text: '에르메스', href: 'javascript:',},
				{text: '샤넬', href: 'javascript:',},
				{text: '이벤트', href: 'javascript:',},
				{text: '내명품팔기', href: 'javascript:',},
				{text: '전국직영매장', href: 'javascript:',},
				{text: '명품케어서비스', href: 'javascript:',}
			]}
		/>
		<div style={{height: "600px", background: "#ccc", textAlign: "center"}}>
			스크롤용 컨텐츠 1
		</div>
		<div style={{height: "400px", background: "#bbb", textAlign: "center"}}>
			스크롤용 컨텐츠 2
		</div>
	</div>
)

export const SubHeader: StoryFn = () => (
	<div style={{width: '100%', maxWidth: '500px', margin: '0 auto', background: '#333'}}>
		<Header
			type={'sub'}
			title={'페이지 타이틀 페이지 타이틀 페이지 타이틀 페이지 타이틀 페이지 타이틀'}
			subDepth={[
				{title: '서브 메뉴명', href: 'javascript:'},
				{title: '서브 메뉴명', href: 'javascript:'},
				{title: '서브 메뉴명', href: 'javascript:'},
				{title: '서브 메뉴명', href: 'javascript:'},
				{title: '서브 메뉴명', href: 'javascript:'},
			]}
			headerButtonOrder={[
				{btnHomeUrl: 'javascript:'},
				{btnSearchUrl: 'javascript:'},
				{btnShareUrl: 'javascript:'},
				{btnFindIdUrl: 'javascript:'},
			]}
			hasGnb={true}
			items={[
				{text: '업데이트', href: 'javascript:', isNew: true,},
				{text: '가격인하', href: 'javascript:',},
				{text: '미사용신품', href: 'javascript:',},
				{text: '핫딜', href: 'javascript:',},
				{text: '아울렛', href: 'javascript:',},
				{text: '롤렉스', href: 'javascript:',},
				{text: '에르메스', href: 'javascript:',},
				{text: '샤넬', href: 'javascript:',},
				{text: '이벤트', href: 'javascript:',},
				{text: '내명품팔기', href: 'javascript:',},
				{text: '전국직영매장', href: 'javascript:',},
				{text: '명품케어서비스', href: 'javascript:',}
			]}
		/>
		<div style={{height: "600px", background: "#ccc", textAlign: "center"}}>
			스크롤용 컨텐츠 1
		</div>
		<div style={{height: "400px", background: "#bbb", textAlign: "center"}}>
			스크롤용 컨텐츠 2
		</div>
	</div>
)