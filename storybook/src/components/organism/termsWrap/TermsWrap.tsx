import * as React from 'react';
import styles from "@/components/organism/termsWrap/TermsWrap.module.scss";

import {SelectMenu, SelectOption} from "@/components/atomic/form/SelectMenu";
import {Table} from "@/components/molecule/table/Table";
import type { TableCell } from "@/components/molecule/table/Table";

interface TermsListItem {
	text?: string | React.ReactNode;
	type?: "default" | "dot" | "dash";
	subList?: TermsListItem[];
}

interface TermsItem {
	sTitle?: string;
	sText?: string | string[];
	tableContents?: TableCell[][];
	tableHead?: TableCell[];
	listContents?: TermsListItem[];
}

interface TermsWrapProps {
	hTitle?: string;
	cTitle?: string;
	cSubText?: string | React.ReactNode;
	items?: TermsItem[];
	selectOptions?: SelectOption[];
}

const renderList = (list?: TermsListItem[], isOrdered: boolean = true) => {
	if (!list || list.length === 0) return null;

	return (
		<ol className={styles.termsSubList}>
			{list.map((li, idx) => {
				let liClass = styles.termsItem;
				if (li.type === "dot") liClass = styles.dotTermsItem;
				if (li.type === "dash") liClass = styles.dashTermsItem;

				return (
					<li key={idx} className={liClass}>
						{li.text}
						{li.subList && renderList(li.subList)}
					</li>
				);
			})}
		</ol>
	);
};

export const TermsWrap: React.FC<TermsWrapProps> = ({
	hTitle, cTitle, cSubText, items = [], selectOptions = []
}) => {
	const [value, setValue] = React.useState('');

	return (
		<div className={styles.termsWrap}>
			<div className={styles.contBox}>
				{hTitle && <div className={styles.hTitle}>{hTitle}</div>}
				{cTitle && <div className={styles.cTitle}>{cTitle}</div>}
				{cSubText && <div className={styles.cSubText}>{cSubText}</div>}
			</div>
			<ol className={styles.termsAnchorList}>
				{items.map((item, idx) => (
					<li key={idx} className={styles.termsAnchorItem}>
						제 {idx + 1}조{' '}
						<a
							role="button"
							tabIndex={0}
							onClick={() => {
								document.getElementById(`terms${idx + 1}`)?.scrollIntoView({behavior: "smooth"});
							}}
						>
							({item.sTitle})
						</a>
					</li>
				))}
			</ol>

			{items.map((item, idx) => (
				<div key={idx} className={styles.contBox}>
					<a className={styles.anchorPos} id={`terms${idx + 1}`}></a>
					<div className={styles.sTitle}>제 {idx + 1}조 ({item.sTitle})</div>
					{item.sText && (
						Array.isArray(item.sText) ? (
							item.sText.map((text, idx2) => (
								<div key={idx2} className={styles.sText}>{text}</div>
							))
						) : (
							<div className={styles.sText}>{item.sText}</div>
						)
					)}

					{item.tableContents && (
						<div className={styles.termsTable}>
							<Table
								tblType={"ColSm"} addClass={"sizeTextSm"} caption={`${item.sTitle} 정보`}
								colWidth={["auto", "auto", "auto"]}
								thead={item.tableHead} tbody={item.tableContents}
							/>
						</div>
					)}

					{item.listContents && renderList(item.listContents, true)}
				</div>
			))}

			{selectOptions &&
				<div className={styles.termsSelect}>
					<SelectMenu
						title={'약관 선택'}
						placeholder={'항목을 선택하세요.'}
						options={selectOptions}
						value={value}
						onChange={(val) => {setValue(val);}}
					/>
				</div>
			}
		</div>
	);
}