import * as React from 'react';
import styles from '@/components/molecule/form/FormGroupList.module.scss';
import {Checkbox} from "@/components/atomic/form/Checkbox";
import {Radio} from "@/components/atomic/form/Radio";

export interface BaseItem {
	type: "checkbox" | "radio";
	text: string;
	subText?: string;
	idx: string;
}

export interface CheckboxItem extends BaseItem {
	type: "checkbox";
	align?: "right" | "full";
}

export interface RadioItem extends BaseItem {
	type: "radio";
	name: string;
}

export type ChkRdoItem = CheckboxItem | RadioItem;

export interface ChkRdoListProps {
	type?: "row" | "col";
	align?: "center" | "top";
	gap?: "sm" | "md";
	items: ChkRdoItem[];
}

export const ChkRdoList: React.FC<ChkRdoListProps> = ({
	type = "row",
	align = "center",
	gap = "md",
	items,
}) => {
	const gapCamel = gap.charAt(0).toUpperCase() + gap.slice(1);

	return (
		<ul
			className={[
				styles[`chkRdoList${gapCamel}`],
				styles[`${type}Type`],
				align === "top" ? styles.taTop : "",
			].join(" ")}
		>
			{items.map((item) => (
				<li key={item.idx} className={styles.item}>
					{item.type === "checkbox" ? (
						<Checkbox
							idx={item.idx}
							text={item.text}
							subText={item.subText}
							align={item.align}
						/>
					) : (
						<Radio
							idx={item.idx}
							name={item.name}
							text={item.text}
							subText={item.subText}
						/>
					)}
				</li>
			))}
		</ul>
	);
};