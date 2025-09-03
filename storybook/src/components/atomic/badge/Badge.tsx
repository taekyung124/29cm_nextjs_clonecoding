import * as React from 'react';
import styles from '@/components/atomic/badge/Badge.module.scss';

interface BadgeProps {
	size?: 'sm' | 'md' | 'lg' | 'xl';
	color?: 'green' | 'lineGreen' | 'lightGreen' | 'lightGray' | 'lineLightGray' | 'gold' | 'lightRed';
	text?: string;
}

export const Badge: React.FC<BadgeProps> = ({
	size = 'sm',
	color = 'green',
	text,
}) => {
	const sizeCamel = size.charAt(0).toUpperCase() + size.slice(1);

	return (
		<span className={[
			styles[`badge${sizeCamel}`],
			styles[`${color}`]
		].join(' ')}>
			<span className={styles.text}>{text}</span>
		</span>
	)
}