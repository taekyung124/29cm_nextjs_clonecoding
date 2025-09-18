import * as React from 'react';
import styles from '@/components/atomic/goodsGroup/GoodsGroup.module.scss';

interface GoodsGroupProps {
	size? : 'sizeXs' | 'sizeSm' | 'sizeMd' | 'sizeLg' | 'sizeXl' | "size2xl" | "size3xl" | "size4xl" | "size5xl";
	label? : string | React.ReactNode;
	val? : string | React.ReactNode;
	unit? : string | React.ReactNode;
	addCommClass?: string;
	valClass?: string;
}

export const GoodsGroup: React.FC<GoodsGroupProps> = ({
	size = 'sizeMd',
	label,
	val,
	unit,
	addCommClass,
	valClass
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
			<span className={[styles.val, valClass].join(' ')}>{val}</span>
			<span className={styles.unit}>{unit}</span>
		</span>
	);
}