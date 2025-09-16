import * as React from 'react';
import styles from '@/components/molecule/infoTextList/InfoTextList.module.scss';

interface InfoTextItem {
	type: 'dot' | 'dash' | 'udl' | 'decimal' | 'brand';
	size?: 'Sm' | 'Lg';
	color?: 'Red' | 'Black' | 'Gray';
	text: string | React.ReactNode;
	sub?: string | React.ReactNode;
}

interface InfoTextListProps {
	gap: 'sm' | 'md';
	items: InfoTextItem[];
}

export const InfoTextList: React.FC<InfoTextListProps> = ({
	gap, items
}) => {
	return (
		<ul className={[styles.infoTextList, styles[`${gap}`]].join(' ')}>
			{items.map((item, index) => {
				if (item.type === 'brand') {
					return (
						<li key={index} className={styles.brandItem}>
							<div className={styles.brandName}>{item.text}</div>
							{item.sub && (
								<div className={styles.brandSub}>{item.sub}</div>
							)}
						</li>
					);
				}

				return (
					<li key={index}
						className={[
							`${item.type}Text`,
							item.size ? item.size : '',
							item.color ? item.color: '',
						].join('')
					}>
						{item.text}
					</li>
				);
			})}
		</ul>
	);
};