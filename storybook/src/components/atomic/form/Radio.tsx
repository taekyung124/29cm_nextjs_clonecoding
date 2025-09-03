import * as React from 'react';
import styles from '@/components/atomic/form/FormElemnent.module.scss';


export interface RadioProps {
	text?: string;
	subText?: string;
	offscreen?: string;
	idx?: string;
	name?: string;
	disabled?: boolean;
}

export const Radio: React.FC<RadioProps> = ({
	text, subText, offscreen, idx, name, disabled
}) => {
	return (
		<span className={styles.uiRdo}>
			<input id={idx} type="radio" name={name} disabled={disabled} />
			<label htmlFor={idx}>
				{(text && !subText) && <span className={styles.text}>{text}</span>}
				{offscreen && <span className={styles.offscreen}>{offscreen}</span>}
				{subText && (
					<span className={styles.textGroup}>
						<span className={styles.text}>{text}</span>
						<span className={styles.subText}>{subText}</span>
					</span>
					)
				}
			</label>
		</span>
	)
}