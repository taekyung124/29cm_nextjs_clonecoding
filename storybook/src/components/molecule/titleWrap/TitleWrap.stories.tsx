import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import styles from '@/styles/components.module.scss';

import {TitleWrap} from './TitleWrap';
import {Title} from "@/components/atomic/title/Title";

const meta = {
	title: 'Atomic/TitleWrap',
	component: TitleWrap,
	tags: ['autodocs'],
	parameters: {
		layout: 'padded',
	},
	argTypes: {
		mb: {
			control: 'inline-radio',
			options: ['zero','xs', 'sm', 'md', 'lg', 'xl']
		},
		child: {
			control: 'object',
		}
	}
} satisfies Meta<typeof TitleWrap>;

export default meta;
type Story = StoryObj<typeof TitleWrap>;

export const Default: Story = {
	args: {
		mb: 'zero',
		child: (
			<>
				<p className={styles.ctitleSub}>ctitleSub 입니다. 하단 여백 10px을 가집니다.</p>
				<Title size={'xl'} text={'ctitleXl 입니다.'}/>
				<p className={styles.stext}>stext 입니다. ctitleXl 다음에 오는 경우 상단여백 14px을 가집니다.</p>
			</>
		),
	},
	render: (args) => <TitleWrap {...args} />
}