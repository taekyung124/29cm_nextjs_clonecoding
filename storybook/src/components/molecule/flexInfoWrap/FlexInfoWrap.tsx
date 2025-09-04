import * as React from 'react';
import styles from "@/components/molecule/flexInfoWrap/FlexInfoWrap.module.scss";

export interface FlexInfoWrapProps {
	align?: 'start' | 'center' | 'end';
	leftArea?: React.ReactNode;
	rightArea?: React.ReactNode;
	marginLeft?: number;
}

export const FlexInfoWrap: React.FC<FlexInfoWrapProps> = ({
	align = 'start', leftArea, rightArea, marginLeft
}) => {
	return (
		<div className={[styles.flexInfoWrap, styles[align !== 'start' ? `${align}` : '']].join(' ')}>
			{leftArea}
			<div
				className={styles.rightArea}
				style={{marginLeft: `${marginLeft}px`}}
			>
				{rightArea}
			</div>
		</div>
	)
};