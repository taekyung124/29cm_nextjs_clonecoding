import * as React from 'react';
import styles from "@/components/layouts/contentBox/ContentBox.module.scss";

interface ContentBoxProps {
	type?: 'default' | 'line' | 'divider' | 'gray' | 'green';
	size?: 'zero' | 'Sm' | 'Md' | 'Lg' | 'Xl'; // 20, 30, 50, 60
	pt?: 'Sm' | 'Md' | 'Lg' | 'Xl';
	pb?: 'Sm' | 'Md' | 'Lg' | 'Xl';
	hasInner?: boolean;
	bottomLine?: boolean;
	children?: React.ReactNode;
}

export const ContentBox: React.FC<ContentBoxProps> = ({
	type = 'default', size = 'zero', pt, pb, hasInner = true, bottomLine = false, children
}) => {
	return (
		<div className={[
			styles[`contBox${size === 'zero' ? '' : size}`],
			type !== 'default' ? styles[`${type}`] : '',
			pt && styles[`pt${pt}`],
			pb && styles[`pb${pb}`],
			bottomLine ? styles.last : '',
		].join(' ')}>
			{hasInner ? (
				<div className={styles.contInner}>
					<>{children}</>
				</div>
			) : (
				<>{children}</>
			)}
		</div>
	)
}