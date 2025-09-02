import type {Meta, StoryFn} from '@storybook/nextjs-vite';
import styles from '@/styles/components.module.scss';

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
		<p className={styles.dotText}>가상계좌 입금 방식 주문 건을 카드 결제로 전환이 가능합니다.</p>
		<p className={styles.dotTextLg}>가상계좌 입금 방식 주문 건을 카드 결제로 전환이 가능합니다.</p>
		<p className={styles.dotTextRed}>가상계좌 입금 방식 주문 건을 카드 결제로 전환이 가능합니다.</p>
	</>
)

export const DashTextOptions: StoryFn = () => (
	<>
		<p className={styles.dashText}>가상계좌 입금 방식 주문 건을 카드 결제로 전환이 가능합니다.</p>
		<p className={styles.dashTextSm}>가상계좌 입금 방식 주문 건을 카드 결제로 전환이 가능합니다.</p>
		<p className={styles.dashTextLg}>가상계좌 입금 방식 주문 건을 카드 결제로 전환이 가능합니다.</p>
		<p className={styles.dashTextGray}>가상계좌 입금 방식 주문 건을 카드 결제로 전환이 가능합니다.</p>
	</>
)

export const DecimalTextOptions: StoryFn = () => (<p className={styles.decimaText}>가상계좌 입금 방식 주문 건을 카드 결제로 전환이 가능합니다.</p>)

export const UdlTextOptions: StoryFn = () => (
	<>
		<p className={styles.udlText}>가상계좌 입금 방식 주문 건을 카드 결제로 전환이 가능합니다.</p>
		<br />
		<p className={styles.udlTextBlack}>가상계좌 입금 방식 주문 건을 카드 결제로 전환이 가능합니다.</p>
		<br />
		<p className={styles.udlTextLg}>가상계좌 입금 방식 주문 건을 카드 결제로 전환이 가능합니다.</p>
		<br />
		<p className={styles.udlTextLgBlack}>가상계좌 입금 방식 주문 건을 카드 결제로 전환이 가능합니다.</p>
	</>
)