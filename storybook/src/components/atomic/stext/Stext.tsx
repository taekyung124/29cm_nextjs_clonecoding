import * as React from 'react';
import styles from '@/components/atomic/stext/Stext.module.scss';

interface StextProps {
	size?: 'Sm' | 'Lg';
	color?: 'Black' | 'Red' | 'Spot';
	fw?: 'Bold';
	mt?: 'sm' | 'md' | 'lg';
	text: string | React.ReactNode;
	addClass?: string;
}

export const Stext: React.FC<StextProps> = ({
	size, color, fw, text, addClass, mt = ''
}) => {
	const styleClass = styles[`stext${size || ''}${color || ''}${fw || ''}`] || '';
	return (
		<div className={[`${styleClass} ${addClass || ''}`.trim(), styles[`${mt}`]].join(' ')}>
			{text}
		</div>
	)
}