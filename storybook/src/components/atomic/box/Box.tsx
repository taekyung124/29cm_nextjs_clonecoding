import * as React from 'react';
import styles from '@/styles/components.module.scss';

interface BoxProps {
	size? : 'extraSmall' | 'small' | 'medium' | 'large';
	color? : 'gray' | 'grayLine' | 'white' | 'green' | 'red';
	mt? : 'sm' | 'md';
	scroll? : boolean;
	children?: string | React.ReactNode;
}

export const Box: React.FC<BoxProps> = ({
	size = 'medium',
	color = 'gray',
	mt = 'sm',
	scroll = false,
	children,
}) => {
	return (
		<div
			className={[
				styles[`box-${size}`],
				styles[`box-${color}`],
			].join(' ')}
			style={{
				marginTop :
				mt === 'sm' ? '10px' :
				mt === 'md' ? '20px' :
				'0',
			 	maxHeight: scroll ? '134px' : undefined,
        		overflowY: scroll ? 'auto' : undefined,
			}}
		>
			{children}
		</div>
	);
}