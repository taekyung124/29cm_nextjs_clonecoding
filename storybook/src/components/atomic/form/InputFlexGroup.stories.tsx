import type { Meta, StoryFn } from '@storybook/nextjs-vite';
import styles from '@/styles/components.module.scss';
import {SelectMenu} from './SelectMenu';
import {Input} from './Input';

const meta = {
	title: 'CommonStyle/Form/InputFlexGroup',
	parameters: {
		layout: 'padded',
		docs: {
			description: {
				component: `
				Form 컴포넌트 요소들을 Flex 정렬하기 위한 Group 레벨의 스타일입니다.  
				- \`styles.inputFlexGroup\` 클래스를 사용하세요. 
				`,
			},
		},
	},
	tags: ['autodocs'],
	decorators: [ // preview 500
		(Story) => (
			<div style={{ maxWidth: '500px', margin: '0 auto' }}>
				<Story />
			</div>
		),
	],
} satisfies Meta;

export default meta;

export const InputFlexGroupTel: StoryFn = () => (
	<div className={styles.inputFlexGroup}>
		<SelectMenu
			onChange={() => {
			}}
			options={[
				{label: '010', value: '010'},
				{label: '011', value: '011'},
				{label: '016', value: '016'},
				{label: '017', value: '017'},
				{label: '018', value: '018'},
				{label: '019', value: '019'},
			]}
			placeholder="010"
			title="휴대폰 번호"
			value={''}
		/>
		<Input boxType={undefined} type={'number'} title={'휴대폰 번호 앞자리 입력'} />
		<Input boxType={undefined} type={'number'} title={'휴대폰 번호 뒷자리 입력'} />
	</div>
)

export const InputFlexGroupEmail: StoryFn = () => (
	<div className={styles.inputFlexGroup}>
		<Input boxType={undefined} type={'text'} title={'이메일 입력'} />
		<span className={styles.gap}>@</span>
		<SelectMenu
			onChange={() => {
			}}
			options={[
				{label: '직접입력', value: '직접입력'},
				{label: 'option01', value: 'option01'},
				{label: 'option02', value: 'option02'},
				{label: 'option03', value: 'option03'},
				{label: 'option04', value: 'option04'},
				{label: 'option05', value: 'option05'},
			]}
			placeholder="직접입력"
			title="도메인"
			value={''}
		/>
	</div>
)

export const InputFlexGroupEmailLine: StoryFn = () => (
	<div className={styles.inputFlexGroup}>
		<Input boxType={'line'} type={'text'} title={'이메일 입력'} />
		<span className={styles.gap}>@</span>
		<SelectMenu
			onChange={() => {
			}}
			options={[
				{label: '직접입력', value: '직접입력'},
				{label: 'option01', value: 'option01'},
				{label: 'option02', value: 'option02'},
				{label: 'option03', value: 'option03'},
				{label: 'option04', value: 'option04'},
				{label: 'option05', value: 'option05'},
			]}
			placeholder="직접입력"
			title="도메인"
			value={''}
			type={'line'}
		/>
	</div>
)