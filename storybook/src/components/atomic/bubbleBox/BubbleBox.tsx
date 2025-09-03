import * as React from 'react';
import styles from "@/components/atomic/bubbleBox/BubbleBox.module.scss";

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
				align ? styles[`bubbleBox-${align}`] : '',
			].join(' ').trim()}
		>
			<span className={styles.bubbleText}>{bubbleText}</span>
		</div>
	);
}