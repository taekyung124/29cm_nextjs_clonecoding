import type {Meta, StoryFn} from '@storybook/nextjs-vite';

const meta = {
	title: 'CommonStyle/Typography',
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta;

export default meta;

export const ColorOptions: StoryFn = () => (
	<>
		<p className={'fcSpot'}>.fcSpot 사용 시 #012E29 컬러가 적용 됩니다.</p>
		<p className={'fcRed'}>.fcRed 사용 시 #D93B3B 컬러가 적용 됩니다.</p>
		<p className={'fcBlack'}>.fcBlack 사용 시 #000 컬러가 적용 됩니다.</p>
		<p className={'fcDarkGray'}>.fcDarkGray 사용 시 #666 컬러가 적용 됩니다.</p>
		<p className={'fcGray'}>.fcGray 사용 시 #999 컬러가 적용 됩니다.</p>
		<p className={'fcSell'}>.fcSell 사용 시 #6E675F 컬러가 적용 됩니다.</p>
		<p className={'fcBand'}>.fcBand 사용 시 #2F3647 컬러가 적용 됩니다.</p>
		<div style={{backgroundColor: '#000'}}>
			<p className={'fcWhite'}>.fcFcWhite 사용 시 #FFF 컬러가 적용 됩니다.</p>
		</div>
	</>
)

export const WeightOptions: StoryFn = () => (
	<>
		<p className={'fwLt'}>.fwLt 사용 시 폰트 굵기 300이 적용됩니다.</p>
		<p className={'fwMd'}>.fwMd 사용 시 폰트 굵기 500이 적용됩니다.</p>
		<p className={'fwSb'}>.fwSb 사용 시 폰트 굵기 600이 적용됩니다.</p>
	</>
)

export const AlignOptions: StoryFn = () => (
	<div style={{backgroundColor: '#99aba9', width: '500px'}}>
		<p className={'taLeft'}>.taLeft 사용 시 텍스트가 왼쪽 정렬 됩니다.</p>
		<p className={'taCenter'}>.taCenter 사용 시 텍스트가 중앙 정렬 됩니다.</p>
		<p className={'taRight'}>.taRight 사용 시 텍스트가 오른쪽 정렬 됩니다.</p>
	</div>
)

export const MultiEllipsis: StoryFn = () => (
	<div style={{width: '300px'}}>
		<div className={'multiEllipsis'}>.multiEllipsis 사용시 두줄 말줄임 됩니다 .multiEllipsis 사용시 두줄 말줄임 됩니다 .multiEllipsis 사용시 두줄 말줄임 됩니다 .multiEllipsis 사용시 두줄 말줄임 됩니다 .multiEllipsis 사용시 두줄 말줄임 됩니다 .multiEllipsis 사용시 두줄 말줄임 됩니다</div>
	</div>
)