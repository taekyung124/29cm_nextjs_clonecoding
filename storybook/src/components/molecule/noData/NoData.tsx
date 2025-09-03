import * as React from 'react';
import styles from "@/components/molecule/noData/NoData.module.scss";

import {Box, BoxProps} from '@/components/atomic/box/Box';
import {BtnWrap} from '@/components/molecule/btnWrap/BtnWrap';

export interface NoDataProps {
	type?: 'box' | 'wrap';
	pt?: 'md' | 'lg';
	desc?: string | React.ReactNode;
	subDesc?: string | React.ReactNode;
	box?: React.ReactNode;
	boxColor?: BoxProps['color'];
	btnWrap?: React.ReactNode;
}

export const NoData: React.FC<NoDataProps> = ({
	type = 'wrap', pt= 'md',
	desc, subDesc,
	box, boxColor,
	btnWrap
}) => {
	const typeCamel = type.charAt(0).toUpperCase() + type.slice(1);
	console.log(typeCamel);
	return (
		<div
			className={styles[`noData${typeCamel}`]}
			style={{
				paddingTop:
					(pt === 'md' && type !== 'box') ? '30px' :
					(pt === 'lg' && type !== 'box') ? '40px' : '0'
			}}
		>
			<span className={styles.icon}></span>
			<p className={styles.desc}>{desc}</p>
			{(type !== 'box' && subDesc) && (
				<p className={styles.subDesc}>{subDesc}</p>
			)}
			{(box && type !== 'box') && (
				<Box color={boxColor} mt={'md'} alignCenter={true} child={box} />
			)}
			{(btnWrap && type !== 'box') && (
				<BtnWrap mt={'md'} align={'center'} buttons={btnWrap} />
			)}
		</div>
	)
}