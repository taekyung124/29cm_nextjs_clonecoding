import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import styles from '@/styles/components.module.scss';

const meta = {
	title: 'CommonStyle/Typography',
	parameters: {
		layout: 'centered',
	},
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const ColorOptions: Story = {
	render: () => (
		<div>
			<p className={styles.fcSpot}>.fcSpot 사용 시 #012E29 컬러가 적용 됩니다.</p>
			<p className={styles.fcRed}>.fcRed 사용 시 #D93B3B 컬러가 적용 됩니다.</p>
			<p className={styles.fcBlack}>.fcBlack 사용 시 #000 컬러가 적용 됩니다.</p>
			<p className={styles.fcDarkGray}>.fcDarkGray 사용 시 #666 컬러가 적용 됩니다.</p>
			<p className={styles.fcGray}>.fcGray 사용 시 #999 컬러가 적용 됩니다.</p>
			<p className={styles.fcSell}>.fcSell 사용 시 #6E675F 컬러가 적용 됩니다.</p>
			<p className={styles.fcBand}>.fcBand 사용 시 #2F3647 컬러가 적용 됩니다.</p>
			<div style={{backgroundColor: '#000'}}>
				<p className={styles.fcWhite}>.fcFcWhite 사용 시 #FFF 컬러가 적용 됩니다.</p>
			</div>
		</div>
	),
};

export const WeightOptions: Story = {
	render: () => (
		<div>
			<p className={styles.fwLt}>.fwLt 사용 시 폰트 굵기 300이 적용됩니다.</p>
			<p className={styles.fwMd}>.fwMd 사용 시 폰트 굵기 500이 적용됩니다.</p>
			<p className={styles.fwSb}>.fwSb 사용 시 폰트 굵기 600이 적용됩니다.</p>
		</div>
	),
};

export const AlignOptions: Story = {
	render: () => (
		<div style={{backgroundColor: '#99ABA9', width: '500px'}}>
			<p className={styles.taLeft}>.taLeft 사용 시 텍스트가 왼쪽 정렬 됩니다.</p>
			<p className={styles.taCenter}>.taCenter 사용 시 텍스트가 중앙 정렬 됩니다.</p>
			<p className={styles.taRight}>.taRight 사용 시 텍스트가 오른쪽 정렬 됩니다.</p>
		</div>
	),
};

export const MultiEllipsis: Story = {
	render: () => (
		<div style={{width: '300px'}}>
			<div className={styles.multiEllipsis}>.multiEllipsis 사용시 두줄 말줄임 됩니다 .multiEllipsis 사용시 두줄 말줄임 됩니다 .multiEllipsis 사용시 두줄 말줄임 됩니다 .multiEllipsis 사용시 두줄 말줄임 됩니다 .multiEllipsis 사용시 두줄 말줄임 됩니다 .multiEllipsis 사용시 두줄 말줄임 됩니다</div>
		</div>
	),
};
