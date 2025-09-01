import * as React from 'react';
import styles from '@/styles/components.module.scss';

interface TitleProps {
	type? : 'ctitle' | 'stitle' ;
	size? : 'sm' | 'md' | 'lg' | 'xl';
	lang? : 'kor' | 'Eng';
	text?: string | React.ReactNode;
}

export const Title: React.FC<TitleProps> = ({
	size = 'medium',
	lang = 'kor',
	type = 'ctitle',
	text
}) => {
	return (
		<div
			className={[
				styles[type ?? ''],
				styles[size ?? ''],
				styles[lang ?? ''],
			].join(' ')}>
			{text}
		</div>
	);
}