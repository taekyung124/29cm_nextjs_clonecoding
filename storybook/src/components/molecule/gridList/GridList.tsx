import * as React from 'react';
import styles from "@/components/molecule/gridList/GridList.module.scss";

interface GridListProps {
	type?: 'row' | 'col2';
	gap?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'prod'; // 6, 10, 20, 40, 50, 10 40
	mt?: number;
	items: React.ReactNode[];
}

export const GridList: React.FC<GridListProps> = ({
	type = 'row', gap = 'md', mt, items
}) => {
	const gapCamel = gap.charAt(0).toUpperCase() + gap.slice(1);

	return (
		<ul
			className={[
			styles.gridList,
			styles[`${type}`],
			styles[`gap${gapCamel}`],
			].join(' ')}
			style={{ marginTop: mt ? `${mt}px` : 'initial'}}
		>
			{items.map((item, idx) => (
				<li
					key={idx}
					className={styles.gridItem}
				>
					{item}
				</li>
			))}
		</ul>
	)
}