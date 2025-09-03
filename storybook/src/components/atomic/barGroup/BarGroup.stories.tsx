import type {Meta, StoryFn} from '@storybook/nextjs-vite';
import styles from '@/styles/components.module.scss';


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
		<div className={styles.barGroup}>
			<span className={styles.barText}>1462286</span>
			<span className={styles.barText}>온라인 판매점</span>
		</div>
		<br />
		<div className={styles.barGroup}>
			<span className={styles.barTextSm}>1462286</span>
			<span className={styles.barTextSm}>온라인 판매점</span>
		</div>
		<br />
		<div className={styles.barGroup}>
			<span className={styles.barTextLg}>1462286</span>
			<span className={styles.barTextLg}>온라인 판매점</span>
		</div>
	</>
)