import type {Meta, StoryFn} from '@storybook/nextjs-vite';


const meta = {
	title: 'CommonStyle/TextList',
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta;

export default meta;

export const DotTextOptions: StoryFn = () => (
	<>
		<p className={'dotText'}>가상계좌 입금 방식 주문 건을 카드 결제로 전환이 가능합니다.</p>
		<p className={'dotTextLg'}>가상계좌 입금 방식 주문 건을 카드 결제로 전환이 가능합니다.</p>
		<p className={'dotTextRed'}>가상계좌 입금 방식 주문 건을 카드 결제로 전환이 가능합니다.</p>
	</>
)

export const DashTextOptions: StoryFn = () => (
	<>
		<p className={'dashText'}>가상계좌 입금 방식 주문 건을 카드 결제로 전환이 가능합니다.</p>
		<p className={'dashTextSm'}>가상계좌 입금 방식 주문 건을 카드 결제로 전환이 가능합니다.</p>
		<p className={'dashTextLg'}>가상계좌 입금 방식 주문 건을 카드 결제로 전환이 가능합니다.</p>
		<p className={'dashTextGray'}>가상계좌 입금 방식 주문 건을 카드 결제로 전환이 가능합니다.</p>
	</>
)

export const DecimalTextOptions: StoryFn = () => (<p className={'decimaText'}>가상계좌 입금 방식 주문 건을 카드 결제로 전환이 가능합니다.</p>)

export const UdlTextOptions: StoryFn = () => (
	<>
		<p className={'udlText'}>가상계좌 입금 방식 주문 건을 카드 결제로 전환이 가능합니다.</p>
		<br />
		<p className={'udlTextBlack'}>가상계좌 입금 방식 주문 건을 카드 결제로 전환이 가능합니다.</p>
		<br />
		<p className={'udlTextLg'}>가상계좌 입금 방식 주문 건을 카드 결제로 전환이 가능합니다.</p>
		<br />
		<p className={'udlTextLgBlack'}>가상계좌 입금 방식 주문 건을 카드 결제로 전환이 가능합니다.</p>
	</>
)