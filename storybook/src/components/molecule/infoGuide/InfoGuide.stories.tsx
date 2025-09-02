import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import styles from '@/styles/components.module.scss';

import {InfoGuide} from "@/components/molecule/infoGuide/InfoGuide";
import {Title} from "@/components/atomic/title/Title";
import {Button} from "@/components/atomic/button/Button";

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
			<>info guide 안내 문구<br /><span className={styles.fcRed}>강조 문구</span> 추가</>
		),
		subDesc: (
			<>info guide 서브 문구<br /><span className={styles.fwSb}>강조 문구</span> 추가</>
		),
		box: (
			<>
				<div className={styles.stextSmRed}>2023년 4월 26일 19시까지 미방문시 자동 취소됩니다.</div>
				<div className={[styles.stextSmRed, styles.fwLt].join(' ')}>(허수구매율 부과)</div>
			</>
		),
		boxColor: 'red',
		btnWrap: (
			<Button rounded={true} ico={'arw_right_black'} text={'베스트 상품'} />
		)
	},
	render: (args) => <InfoGuide {...args} />,
}