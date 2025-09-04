import type {Meta, StoryFn} from '@storybook/nextjs-vite';

const meta = {
	title: 'CommonStyle/BarGroup',
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta;

export default meta;

export const BarGroupOptions: StoryFn = () => (
	<>
		<div className={'barGroup'}>
			<span className={'barText'}>1462286</span>
			<span className={'barText'}>온라인 판매점</span>
		</div>
		<br />
		<div className={'barGroup'}>
			<span className={'barTextSm'}>1462286</span>
			<span className={'barTextSm'}>온라인 판매점</span>
		</div>
		<br />
		<div className={'barGroup'}>
			<span className={'barTextLg'}>1462286</span>
			<span className={'barTextLg'}>온라인 판매점</span>
		</div>
	</>
)