import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import styles from "@/styles/components.module.scss";

import {FlexInfoWrap} from './FlexInfoWrap';
import {TitleWrap} from "@/components/molecule/titleWrap/TitleWrap";
import {Title} from "@/components/atomic/title/Title";
import {Button} from "@/components/atomic/button/Button";

const meta = {
	title: 'Molecule/FlexInfoWrap',
	component: FlexInfoWrap,
	tags: ['autodocs'],
	parameters: {
		layout: 'padded',
	},
	argTypes: {
		align: {
			control: { type: 'radio' },
			options: [ 'start', 'center', 'end']
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
type Story = StoryObj<typeof FlexInfoWrap>;

export const Default: Story = {
	args: {
		align: 'start'
	},
	render: (args) => {
		return (
			<FlexInfoWrap
				leftArea={
					<TitleWrap child={
						<>
							<p className={styles.ctitleSub}>ctitleSub 입니다. 하단 여백 10px을 가집니다.</p>
							<Title size={'xl'} text={'ctitleXl 입니다.'}/>
							<p className={styles.stext}>stext 입니다. ctitleXl 다음에 오는 경우 상단여백 14px을 가집니다.</p>
						</>
					}/>
				}
				rightArea={
					<Button size={'md'} color={'gray'} rounded={true} text={'우측 영역'}/>
				}
				{...args}
			/>
		)
	},
}