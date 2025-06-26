import * as React from 'react';
import styles from '@/styles/components.module.scss';

interface BoxProps {
	size? : 'extraSmall' | 'small' | 'medium' | 'large';
	color? : 'gray' | 'grayLine' | 'white' | 'green' | 'red';
	mt? : string;
	boxScroll? : boolean;
	// children?: React.ReactNode;
	children?: string;
}

export const Box: React.FC<BoxProps> = ({
	size = 'medium',
	color = 'white',
	mt,
	boxScroll = false,
	children,
}) => {
	return (
		<div
			className={[
				styles[size ?? ''],
				styles[color ?? ''],
			].join(' ')}
			style={{
				marginTop :
				mt === 'sm' ? '10px' :
				mt === 'md' ? '20px' :
				undefined,
			 	maxHeight: boxScroll ? '134px' : undefined,
        		overflowY: boxScroll ? 'auto' : undefined,
			}}
		>
			{children}
		</div>
	);
}