import * as React from 'react';
import styles from '@/components/molecule/table/Table.module.scss';

export type TableCell = {
	type?: 'th' | 'td';
	content: string | React.ReactNode;
	colSpan?: number;
	rowSpan?: number;
	className?: string;
	scope?: 'row' | 'col';
};

interface TableProps {
	wapperType?: 'Info' | 'NoLine';
	tblType?: 'Row' | 'Col' | 'ColSm' | 'Info' | 'InfoSm';
	addClass?: 'sizeTextSm' | 'lineTop' | 'infoLine' | 'infoRight';
	commonClass?: string;
	caption?: string;
	colWidth?: string | string[];
	thead?: TableCell[];
	tbody?: TableCell[][];
	tfoot?: TableCell[][];
	hasPriceFooter?: React.ReactNode;
}

export const Table: React.FC<TableProps> = ({
	wapperType, tblType, addClass, commonClass,
	caption, colWidth, thead, tbody, tfoot, hasPriceFooter
}) => {
	const colWidths = Array.isArray(colWidth) ? colWidth : colWidth ? [colWidth, colWidth, colWidth] : [];

	const renderRow = (row: TableCell[], key: number) => (
		<tr key={key}>
			{row.map((cell, idx) => {
				const CellTag = cell.type === 'th' ? 'th' : 'td';
				return (
					<CellTag
						key={idx}
						colSpan={cell.colSpan}
						rowSpan={cell.rowSpan}
						scope={cell.type === 'th' ? cell.scope : undefined} // thScope 적용
						className={[cell.className || ''].join(' ')}
					>
						{cell.content}
					</CellTag>
				);
			})}
		</tr>
	);

	return (
		<div className={[wapperType ? styles[`tbl${wapperType}Wrap`] : styles.tblWrap, addClass ? styles[addClass] : ''].join(' ')}>
			<table className={tblType ? styles[`tbl${tblType}`] : ''}>
				{caption && <caption>{caption}</caption>}

				{colWidths.length > 0 && (
					<colgroup>
						{colWidths.map((w, idx) => <col key={idx} style={{ width: w }} />)}
					</colgroup>
				)}

				{thead && thead.length > 0 && (
					<thead>
						{renderRow(thead, 0)}
					</thead>
				)}

				{tbody && tbody.length > 0 && (
					<tbody>
						{tbody.map((row, idx) => renderRow(row, idx))}
					</tbody>
				)}

				{tfoot && tfoot.length > 0 && (
					<tfoot>
						{tfoot.map((row, idx) => renderRow(row, idx))}
					</tfoot>
				)}
			</table>
			{hasPriceFooter && (
				<div className={styles.priceInfoFooter}>
					{hasPriceFooter}
				</div>
			)}
		</div>
	);
}