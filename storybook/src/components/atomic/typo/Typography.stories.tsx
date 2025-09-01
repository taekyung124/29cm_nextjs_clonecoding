import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import styles from '@/styles/components.module.scss';

const meta = {
	title: 'CommonStyle/Typography',
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
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

export const SubText: Story = {
	render: () => (
		<div>
			<p className={styles.stextSm}>.stextSm 입니다. font-size: 13px, color: #666</p>
			<p className={styles.stextSmBlack}>.stextSmBlack 입니다. font-size: 13px, color: #000</p>
			<p className={styles.stextSmSpot}>.stextSmSpot 입니다. font-size: 13px, color: #012E29, font-weight: 300</p>
			<p className={styles.stextSmRed}>.stextSmRed입니다. font-size: 13px, color: #D93B3B, font-weight: 500</p>
			<p className={styles.stext}>.stext 입니다. font-size: 14px, color: #666</p>
			<p className={styles.stextBlack}>.stextBlack 입니다. font-size: 14px, color: #000</p>
			<p className={styles.stextBold}>.stextBold 입니다. font-size: 14px, color: #000, font-weight: 500</p>
			<p className={styles.stextLg}>.stextLg 입니다. font-size: 16px, color: #000</p>
		</div>
	),
};

export const TitleSubInTitleWrap: Story = {
	render: () => (
		<div className={styles.titleWrap}>
			<p className={styles.ctitleSubSm}>.ctitleSubSm 입니다. font-size: 13px, color: #666</p>
			<p className={styles.ctitleSub}>.ctitleSub 입니다. font-size: 13px, color: #999, font-weight: 500</p>
			<p className={styles.ctitleSubLg}>.ctitleSubLg 입니다. font-size: 16px</p>
		</div>
	),
};
