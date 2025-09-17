import * as React from 'react';
import styles from '@/components/atomic/goodsGroup/GoodsGroup.module.scss';

interface GoodsGroupProps {
	size? : 'sizeXs' | 'sizeSm' | 'sizeMd' | 'sizeLg' | 'sizeXl' | "size2xl" | "size3xl" | "size4xl" | "size5xl";
	label? : React.ReactNode;
	val? : React.ReactNode;
	unit? : React.ReactNode;
	addCommClass?: string;
}

export const GoodsGroup: React.FC<GoodsGroupProps> = ({
	size = 'sizeMd',
	label,
	val,
	unit,
	addCommClass,
}) => {
	return (
		<span
			className={[
				styles.goodsGroup,
				styles[`goodsGroup-${size}`],
				addCommClass,
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