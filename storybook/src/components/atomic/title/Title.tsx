import * as React from 'react';
import styles from '@/styles/components.module.scss';

interface TitleProps {
	TitleCase? : 'ctitle' | 'stitle' ;
	Titlesize? : 'sm' | 'md' | 'lg' | 'xl';
	Titlelang? : 'kor' | 'Eng';
	// children?: React.ReactNode;
	children?: string;
}

export const Title: React.FC<TitleProps> = ({
	Titlesize = 'medium',
	Titlelang = 'kor',
	TitleCase = 'ctitle',
	children,
}) => {
	return (
		<div
			className={[
				styles[TitleCase ?? ''],
				styles[Titlesize ?? ''],
				styles[Titlelang ?? ''],
			].join(' ')}
		>
			{children}
		</div>
	);
}