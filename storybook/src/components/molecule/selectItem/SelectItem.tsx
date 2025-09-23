import * as React from 'react';
import styles from "@/components/molecule/selectItem/SelectItem.module.scss";

import {Button} from "@/components/atomic/button/Button";
import {Box} from "@/components/atomic/box/Box";
import {FlexInfoWrap} from "@/components/molecule/flexInfoWrap/FlexInfoWrap";
import {Table} from "@/components/molecule/table/Table";
import type { TableCell } from "@/components/molecule/table/Table";
import {EtcButton} from "@/components/atomic/etcButton/EtcButton";

interface SelectItemProps {
	type: 'address' | 'account' | 'store';
	boxMt?: 'sm' | 'md';
	icon?: 'account' | 'card';
	iconSize?: 'Md' | 'Lg';
	title?: string;
	headerRight?: React.ReactNode;
	hasSelectBody?: boolean;
	thumbSrc?: string;
	storeName?: string;
	storeRegion?: string;
	name?: string;
	tel?: string | string[];
	accountNumber?: string;
	desc?: string;
	subDesc?: string;
	formContents?: React.ReactNode;
	tableContents?: TableCell[][];
}

export const SelectItem: React.FC<SelectItemProps> = ({
	boxMt, type, icon, iconSize, title, accountNumber, headerRight,
	hasSelectBody = true, thumbSrc, storeName, storeRegion,
	name, tel, desc, subDesc, formContents, tableContents
}) => {
	const renderSelectBtn = <Button size={'sm'} color={'lineLightGray'} rounded text={'선택'} />;
	const renderSelectBtnGreen = <Button size={'sm'} color={'lineGreen'} rounded text={'선택'} />;

	function isStringArray(value: string | string[] | undefined): value is string[] {
		return Array.isArray(value);
	}

	return (
		<Box size={'md'} color={'grayLine'} mt={boxMt} child={
			<div className={styles.selectItem}>
				<div className={styles.selectHeader}>
					{thumbSrc ? (
						<>
							<div className={styles.thumbBox}>
								<img src={`/assets/images/thumb_${thumbSrc}`} alt="매장 이미지" />
							</div>
							<div className={styles.headerTit}>
								<span className={styles.storeName}>{storeName}</span>
								<span className={styles.storeRegion}>{storeRegion}</span>
							</div>
							<div className={styles.headerRight}>
								<EtcButton name={'icon'} offscreen="삭제" icon={'delete'} iconSize={18} />
							</div>
						</>
					) : (
						<>
							<div className={styles.headerTit}>
								{type === 'address' ? (
									<>
										<div className={styles.iconBox}>
											<span className={[
												styles.iconMd,
												styles.address
											].join(' ')}></span>
										</div>
										<div className={styles.titleArea}>
											<div className={styles.title}>{title}</div>
										</div>
									</>
								) : type === 'account' ? (
									<>
										<div className={styles.iconBox}>
											<span className={[
												styles[`icon${iconSize}`],
												styles[`${icon}`]
											].join(' ')}></span>
										</div>
										<div className={styles.titleArea}>
											{iconSize === 'Lg' ? (
												<>
													<div className={styles.title}>{title}</div>
													<div className={styles.accountNumber}>{accountNumber}</div>
												</>
											) : (
												<div className={styles.title}>{title}</div>
											)}
										</div>
									</>
								) : type === 'store' ? (
									<>
										<div className={styles.iconBox}>
											<span className={[
												styles.iconMd,
												styles.store
											].join(' ')}></span>
										</div>
										<div className={styles.titleArea}>
											<span className={styles.title}>{title}</span>
										</div>
									</>
								) : ''}
							</div>
							{(headerRight || iconSize === 'Lg') &&
								<div className={styles.headerRight}>
									{type === 'account' && !hasSelectBody ? renderSelectBtn : headerRight}
								</div>
							}
						</>
					)}
				</div>
				{hasSelectBody && (
					<div className={styles.selectBody}>
						{type !== 'store' && (
							<>
								<div className={styles.userInfo}>
									{isStringArray(tel) ? (
										<>
											<div className={styles.name}>{name}</div>
											<div className="barGroup">
												{tel.map((t, idx) => (
													<span key={idx} className="barText">
														{t}
													</span>
												))}
											</div>
										</>
									) : (
										<div className="barGroup">
											<span className="barTextLg">{name}</span>
											{tel && <span className="barTextLg">{tel}</span>}
										</div>
									)}
								</div>
								<div className={styles.selectInfo}>
									<FlexInfoWrap
										align={subDesc ? 'end' : 'center'}
										leftArea={
											<div className={styles.descArea}>
												<div className={styles.desc}>{desc}</div>
												{subDesc && <div className={styles.subDesc}>{subDesc}</div>}
											</div>
										}
										rightArea={
											type === 'address' && !formContents ? (renderSelectBtnGreen) : type === 'account' ? (renderSelectBtn) : null
										}
									/>
								</div>
							</>
						)}
						{(type === 'address' && formContents) &&
							<div className={styles.formWrap}>
								{formContents}
							</div>
						}
						{(type === 'store' && tableContents) &&
							<div className={styles.tableWrap}>
								<Table wapperType={'Info'} tblType={'InfoSm'} caption={'매장 정보'} colWidth={['70px', 'auto']} tbody={tableContents} />
							</div>
						}
					</div>
				)}
			</div>
		} />
	)
}