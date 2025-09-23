import * as React from 'react';
import styles from '@/components/atomic/form/FormElemnent.module.scss';

export interface CheckboxProps {
	align?: 'default' | 'right' | 'full';
	text?: string;
	subText?: string;
	offscreen?: string;
	idx?: string;
	disabled?: boolean;
}

export const Checkbox: React.FC<CheckboxProps> = ({
	align = 'default',
	text, subText, offscreen, idx, disabled
}) => {
	return (
		<span className={[styles.uiChk, align !== 'default' ? styles[`${align}`] : ''].join(' ')}>
			<input id={idx} type="checkbox" disabled={disabled} />
			<label htmlFor={idx}>
				{align === 'full' ? (
					<span className={styles.text}>{text}</span>
				) : subText ? (
					<span className={styles.textGroup}>
						<span className={styles.text}>{text}</span>
						<span className={styles.subText}>{subText}</span>
					</span>
				) : (
					<span className={styles.text}>{text}</span>
				)}

				{offscreen && <span className={styles.offscreen}>{offscreen}</span>}
			</label>
		</span>
	)
}