import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import {InfoGuide} from "@/components/molecule/infoGuide/InfoGuide";
import {Button} from "@/components/atomic/button/Button";
import {Stext} from "@/components/atomic/stext/Stext";

const meta = {
	title: 'Molecule/InfoGuide',
	component: InfoGuide,
	tags: ['autodocs'],
	parameters: {
		layout: 'padded',
	},
	argTypes: {
		type: {
			control: 'inline-radio',
			options: ['alert', 'shopping', 'celebrate'],
		},
		pt: {
			control: 'inline-radio',
			options: ['md', 'lg'],
		},
		desc: {
			control: 'text',
		},
		subDesc: {
			control: 'text',
		},
		box: {
			control: 'text',
		},
		boxColor: {
			control: 'inline-radio',
			options: ['gray', 'grayLine', 'white', 'green', 'red']
		},
		btnWrap: {
			control: 'text',
		}
	}
} satisfies Meta<typeof InfoGuide>;

export default meta;
type Story = StoryObj<typeof InfoGuide>;

export const Default: Story = {
	args: {
		type: 'alert',
		pt: 'md',
		desc: (
			<>info guide 안내 문구<br /><span className={'fcRed'}>강조 문구</span> 추가</>
		),
		subDesc: (
			<>info guide 서브 문구<br /><span className={'fwSb'}>강조 문구</span> 추가</>
		),
		box: (
			<>
				<Stext size={'Sm'} color={'Red'} text={'2023년 4월 26일 19시까지 미방문시 자동 취소됩니다.'}/>
				<Stext size={'Sm'} color={'Red'} addClass={'fwLt'} text={'(허수구매율 부과)'} />
			</>
		),
		boxColor: 'red',
		btnWrap: (
			<Button rounded={true} afterIcon={'arw_right_black'} text={'베스트 상품'} />
		)
	},
	render: (args) => <InfoGuide {...args} />,
}