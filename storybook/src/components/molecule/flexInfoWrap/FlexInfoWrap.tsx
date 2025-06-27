import * as React from 'react';
import styles from "@/styles/components.module.scss";

export interface FlexInfoWrapProps {
	align?: undefined | "center" | "end";
	leftArea?: React.ReactNode;
	rightArea?: React.ReactNode;
}

export const FlexInfoWrap: React.FC<FlexInfoWrapProps> = ({
	align = undefined,
	leftArea,
	rightArea,
}) => {
	return (
		<div className={styles.flexInfoWrap}>
			{leftArea}
			<div className={[
				styles.rightArea,
				styles[align ?? '']
			].join(' ')}>
				{rightArea}
			</div>
		</div>
	)
};