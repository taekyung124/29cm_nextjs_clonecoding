import * as React from 'react';
import styles from '@/styles/components.module.scss';

interface GoodsGroupProps {
	GoodsGroupSize? : 'sizeXs' | 'sizeSm' | 'sizeMd' | 'sizeLg' | 'sizeXl' | "size2xl" | "size3xl" | "size4xl" | "size5xl";
	label? : boolean;
	children?: string;
}

export const GoodsGroup: React.FC<GoodsGroupProps> = ({
	GoodsGroupSize = '',
	label = false,
	children,
}) => {
	return (
		<div
			className={[
				styles[GoodsGroupSize ?? ''],
			].join(' ')}
			style={{
			 	display: label ? 'block' : 'none',
			}}
		>
			{children}
		</div>
	);
}