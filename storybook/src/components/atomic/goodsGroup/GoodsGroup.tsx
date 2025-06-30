import * as React from 'react';
import styles from '@/styles/components.module.scss';

interface GoodsGroupProps {
	GoodsGroupSize? : 'sizeXs' | 'sizeSm' | 'sizeMd' | 'sizeLg' | 'sizeXl' | "size2xl" | "size3xl" | "size4xl" | "size5xl";
	label? : React.ReactNode;
	val? : React.ReactNode;
	unit? : React.ReactNode;
}

export const GoodsGroup: React.FC<GoodsGroupProps> = ({
	GoodsGroupSize = 'sizeMd',
	label,
	val,
	unit,
}) => {
	return (
		<span
			className={[
				styles.goodsGroup,
				styles[`goodsGroup-${GoodsGroupSize}`],
			].join(' ')}
		>
			<span
				className={styles.label}
				style={{
					display: label ? 'inline-block' : 'none',
				}}
			>
				{label}
			</span>
			<span className={styles.val}>{val}</span>
			<span className={styles.unit}>{unit}</span>
		</span>
	);
}