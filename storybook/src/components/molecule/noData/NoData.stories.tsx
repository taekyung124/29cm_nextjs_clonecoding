import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import {NoData} from "@/components/molecule/noData/NoData";
import {Button} from '@/components/atomic/button/Button';
import {Title} from '@/components/atomic/title/Title';
import {Stext} from '@/components/atomic/stext/Stext';

const meta = {
	title: 'Molecule/NoData',
	component: NoData,
	tags: ['autodocs'],
	parameters: {
		layout: 'padded',
	},
	argTypes: {
		type: {
			control: 'inline-radio',
			options: ['box', 'wrap'],
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
} satisfies Meta<typeof NoData>;

export default meta;
type Story = StoryObj<typeof NoData>;

export const Default: Story = {
	args: {
		type: 'wrap',
		pt: 'md',
		desc: 'no data 안내 문구',
		subDesc: 'no data 서브 문구',
		box: (
			<>
				<Title type={'stitle'} size={'md'} text={'업데이트 미리보기 가능 시간'} />
				<Stext size={'Sm'} text={<>앱 : 오후 8시~익일 오전 11시<br />웹 : 오후 8시 30분~익일 오전 11시</>} />
			</>
		),
		boxColor: 'gray',
		btnWrap: (
			<Button rounded={true} afterIcon={'arw_right_black'} text={'베스트 상품'} />
		)
	},
	render: (args) => <NoData {...args} />
}