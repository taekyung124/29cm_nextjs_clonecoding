import * as React from 'react';
import styles from "@/components/molecule/flexInfoWrap/FlexInfoWrap.module.scss";

export interface FlexInfoWrapProps {
	align?: 'start' | 'center' | 'end';
	leftArea?: React.ReactNode;
	rightArea?: React.ReactNode;
}

export const FlexInfoWrap: React.FC<FlexInfoWrapProps> = ({
	align = 'start',
	leftArea,
	rightArea,
}) => {
	return (
		<div className={styles.flexInfoWrap}>
			{leftArea}
			<div className={[
				styles.rightArea,
				styles[align !== 'start' ? align : '']
			].join(' ')}>
				{rightArea}
			</div>
		</div>
	)
};