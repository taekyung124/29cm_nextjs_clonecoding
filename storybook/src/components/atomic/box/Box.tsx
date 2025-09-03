import * as React from 'react';
import styles from '@/components/atomic/box/Box.module.scss';

export interface BoxProps {
	size?: 'xs' | 'sm' | 'md' | 'lg';
	color?: 'gray' | 'grayLine' | 'white' | 'green' | 'red';
	mt?: 'sm' | 'md';
	scroll?: boolean;
	alignCenter?: boolean;
	child?: string | React.ReactNode;
}

export const Box: React.FC<BoxProps> = ({
	size = 'md',
	color = 'gray',
	mt = 'sm',
	scroll = false,
	alignCenter = false,
	child,
}) => {
	const sizeCamel = size.charAt(0).toUpperCase() + size.slice(1);

	return (
		<div
			className={[
				styles[`box${sizeCamel}`],
				styles[`${color}`],
				alignCenter && styles[`taCenter`],
			].join(' ')}
			style={{
				marginTop :
				mt === 'sm' ? '10px' :
				mt === 'md' ? '20px' :
				'0',
			 	maxHeight: scroll ? '134px' : 'initial',
        		overflowY: scroll ? 'auto' : 'initial',
			}}
		>
			{child}
		</div>
	);
}