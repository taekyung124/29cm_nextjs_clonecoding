import * as React from 'react';
import styles from '@/components/molecule/btnWrap/BtnWrap.module.scss';

interface BtnWrapProps {
	mt?: 'zero' | 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
	align?: 'default' | 'auto' | 'center' | 'right' | 'full';
	divider?: boolean;
	buttons?: React.ReactNode;
	gap?: number;
}

export const BtnWrap: React.FC<BtnWrapProps> = ({ mt = 'zero', align = '', divider, buttons, gap = 0}) => {
	return (
		<div
			className={[
				styles[`btn${divider ? 'Divider' : ''}Wrap`],
				styles[`${mt}`],
				styles[align !== 'default' ? `${align}` : '']
			].join(' ')}
			style={{gap: gap ? gap + 'px' : 0 }}
		>
			{buttons}
		</div>
	)
}