import styles from '@/styles/components.module.scss';

export interface BoxProps {
	size? : 'xs' | 'sm' | 'md' | 'lg';
	color? : 'gray' | 'gray-line' | 'white' | 'green' | 'red';
	mt? : string;
	boxScroll? : boolean;
}

export const Box = ({
	size = 'md',
	color,
	mt,
	boxScroll = false,
	...props
}: BoxProps) => {
	return (
		<div
			className={[
				styles[`box${size}`],
				styles[`box${color}`],
			].join(' ')}
			style={{
				marginTop :
				mt === 'sm' ? '10px' :
				mt === 'md' ? '20px' :
				undefined,
			 	maxHeight: boxScroll ? '134px' : undefined,
        		overflowY: boxScroll ? 'auto' : undefined,
			}}
			{...props}
		>
		</div>
	)
}