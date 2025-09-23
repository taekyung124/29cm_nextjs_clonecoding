import * as React from 'react';
import styles from '@/components/atomic/form/FormElemnent.module.scss';

interface ToggleProps {
	size?: 'Md' | 'Lg';
	text?: string;
	idx?: string;
	checked?: boolean;
	disabled?: boolean;
}

export const Toggle: React.FC<ToggleProps> = ({
	size, text, idx, checked, disabled,
}) => {
	return (
		<div className={styles[`uiToggle${size === 'Md' ? '' : size}`]}>
			<input id={idx} type="checkbox" checked={checked} disabled={disabled} />
			{size === 'Lg' ? (
				<label htmlFor={idx}><span className={'offscreen'}>{text}</span></label>
			) : (
				<label htmlFor={idx}>{text}</label>
			)}
		</div>
	)
}