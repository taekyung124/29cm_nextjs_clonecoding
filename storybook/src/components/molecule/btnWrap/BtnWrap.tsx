import * as React from 'react';
import styles from '@/styles/components.module.scss';

interface BtnWrapProps {
	mt?: 'zero' | 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
	align?: '' | 'auto' | 'center' | 'right' | 'full';
	divider?: boolean;
	buttons?: React.ReactNode;
}

export const BtnWrap: React.FC<BtnWrapProps> = ({ mt = 'zero', align = '', divider, buttons}) => {
	return (
		<div className={[styles[`btn${divider ? 'Divider' : ''}Wrap`], styles[`${mt}`], styles[`${align}`]].join(' ')}>
			{buttons}
		</div>
	)
}