import * as React from 'react';
import styles from '@/styles/components.module.scss';

interface BoxProps {
	Boxsize? : 'extraSmall' | 'small' | 'medium' | 'large';
	Boxcolor? : 'gray' | 'grayLine' | 'white' | 'green' | 'red';
	mt? : string;
	boxScroll? : boolean;
	// children?: React.ReactNode;
	children?: string;
}

export const Box: React.FC<BoxProps> = ({
	Boxsize = 'medium',
	Boxcolor = 'white',
	mt,
	boxScroll = false,
	children,
}) => {
	return (
		<div
			className={[
				styles[`box-${Boxsize}`],
				styles[`box-${Boxcolor}`],
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