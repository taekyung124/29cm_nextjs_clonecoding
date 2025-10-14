import * as React from 'react';
import styles from "@/components/templates/boardList/BoardList.module.scss";
import {GoodsGroup} from "@/components/atomic/goodsGroup/GoodsGroup";

interface BoardItem {
	title?: string | React.ReactNode;
	desc?: string;
	orderNumber?: number;
	date?: string;
	status?: string;
	statusColor?: 'fcBlack' | 'fcSpot';
	pointType?: 'earn' | 'use' | 'expire';
	val?: string;
	unit?: string;
	pointDesc?: string;
	isQna?: boolean;
	hasHref?: boolean;
	href?: string;
}

interface BoardListProps {
	mt?: number;
	hasTopLine?: boolean;
	items: BoardItem[];
}

export const BoardList: React.FC<BoardListProps> = ({
	mt, hasTopLine, items
}) => {
	return (
		<ul className={[styles.boardList, hasTopLine ? styles.hasTopLine : ''].join(' ')}>
			{items.map((item, index) => (
				<li key={index} className={styles.boardItem}>
					{item.isQna && (
						<div className={styles.qnaType}>Q</div>
					)}
					<div className={styles.boardInfo}>
						<div className={styles.title}>{item.title}</div>
						{!item.isQna && (
							<>
								<div className={styles.orderNumber}>주문번호 {item.orderNumber}</div>
								<div className={styles.desc}>{item.desc}</div>
							</>
						)}
						<div className={[styles.barGroup, 'barGroup'].join(' ')}>
							<span className="barTextSm">{item.date}{item.pointType === 'expire' ? '(소멸예정일)' : ''}</span>
							<span className={`barTextSm fwMd ${item.statusColor} ? ${item.statusColor} : ''`}>{item.status}</span>
						</div>
					</div>
					{!item.isQna && (
						<div className={styles.rightArea}>
							<GoodsGroup
								size={'sizeLg'}
								val={item.val}
								unit={item.unit}
								label={item.pointType === 'earn' ? '+' : item.pointType === 'use' ? '-' : undefined}
								addCommClass={item.pointType === 'earn' ? 'fcRed' : item.pointType === 'use' ? 'fcSpot' : ''}
							/>
							{item.pointDesc &&
								<p className={[styles.pointDesc, styles[`${item.pointType}`]].join(' ')}>({item.pointDesc})</p>}
						</div>
					)}
					{item.hasHref && (
						<a href={item.href ? item.href : 'javascript: alert("link");'} className="btnLink">
							<span className="offscreen">상세 바로가기</span>
						</a>
					)}
				</li>
			))}
		</ul>
	)
}