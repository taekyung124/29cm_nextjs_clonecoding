import * as React from 'react';
import styles from '@/components/organism/foldWrap/FoldWrap.module.scss';

interface FoldItem {
	title?: string;
	rightArea?: string | React.ReactNode;
	icon?: string;
	date?: string;
	foldContent?: React.ReactNode;
	disabled?: boolean;
	onClick?: () => void;
}

interface FoldWrapProps {
	type?: 'line' | 'divider' | 'box';
	color?: 'white' | 'gray';
	innerPadded?: 'none' | 'md';
	items: FoldItem[];
}

export const FoldWrap: React.FC<FoldWrapProps> = ({
	type = 'line',
	color = 'gray',
	innerPadded = 'none',
	items,
}) => {
	const [activeIndex, setActiveIndex] = React.useState<number | null>(null);

	const handleToggle = (index: number, onClick?: () => void) => {
		setActiveIndex(prev => (prev === index ? null : index));
		onClick?.();
	};

	return (
		<ul className={[styles.foldList, styles[`${type}`]].join(' ')}>
			{items.map((item, index) => (
				<li
					key={index}
					className={[styles.foldItem, activeIndex === index ? styles.isActive : ''].join(' ')}
				>
					<div className={[styles.foldHeader, innerPadded === 'md' ? styles.md : ''].join(' ')}>
						{item.icon && (
							<div className={styles.iconArea}>
								<span
									className={styles.icon}
									style={{backgroundImage:`url(/assets/icons/comm_ico_${item.icon}.svg)`}}
								></span>
							</div>
						)}
						<div className={styles.titleArea}>
							<div className={styles.title}>{item.title}</div>
							{item.date && <div className={styles.date}>{item.date}</div>}
						</div>
						{item.rightArea && <div className={styles.rightArea}>{item.rightArea}</div>}
						<button
							className={styles.btnFold}
							onClick={() => handleToggle(index, item.onClick)}
							disabled={item.disabled}
						>
							<span className="offscreen">
								컨텐츠 {activeIndex === index ? '닫기' : '열기'}
							</span>
						</button>
					</div>
					<div
						className={[
							styles.foldContent,
							color === 'gray' ? styles.bgGray : color === 'white' ? styles.bgWhite : '',
						].join(' ')}
					>
						{item.foldContent}
					</div>
				</li>
			))}
		</ul>
	);
};