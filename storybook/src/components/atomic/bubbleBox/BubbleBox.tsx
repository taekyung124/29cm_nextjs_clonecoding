import * as React from 'react';
import styles from "@/styles/components.module.scss";

export interface BubbleBoxProps {
	align? : undefined | "posBottom" ;
	bubbleText? : React.ReactNode;
}

export const BubbleBox: React.FC<BubbleBoxProps> = ({
	align,
	bubbleText
}) => {
	return (
		<div
			className={[
				styles.bubbleBox,
				styles[`bubbleBox-${align}`],
			].join(' ')}
		>
			<span className={styles.bubbleText}>{bubbleText}</span>
		</div>
	);
}