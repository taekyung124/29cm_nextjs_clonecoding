import * as React from 'react';
import styles from '@/styles/components.module.scss';

interface TitleWrapProps {
	mb?: 'zero' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
	child?: React.ReactNode;
}

export const TitleWrap: React.FC<TitleWrapProps> = ({ mb, child}) => {
	return (
		<div className={[styles.titleWrap, styles[`${mb}`]].join(' ')}>
			{child}
		</div>
	)
}