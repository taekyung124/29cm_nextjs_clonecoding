import styles from '@/styles/components.module.scss';

export interface TooltipWrapProps {
	children?: React.ReactNode;
	placement? : 'left' | 'right';
	boxWidth?: number;
}

export const TooltipWrap = ({
	children,
	placement = 'left',
	boxWidth,
}: TooltipWrapProps) => {
	return (
		<div className={styles.tooltipWrap}>
			<button className={styles.btnTooltip}>
				<span className={styles.icoTooltip}>
					<span className="offscreen">더보기</span>
				</span>
			</button>
			<div className={[
				styles.tooltipBox,
				styles[`${placement}`
				]].join(' ')}
				 style={{width: boxWidth}}
			>
				{children}
			</div>
		</div>
	);
};