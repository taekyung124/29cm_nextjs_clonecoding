import * as React from 'react';
import styles from "@/components/molecule/infoGuide/InfoGuide.module.scss";

import {Title} from '@/components/atomic/title/Title';
import {Box, BoxProps} from "@/components/atomic/box/Box";
import {BtnWrap} from '@/components/molecule/btnWrap/BtnWrap';
import {TitleWrap} from "@/components/molecule/titleWrap/TitleWrap";

export interface InfoGuideProps {
	type?: 'alert' | 'shopping' | 'celebrate';
	pt?: 'md' | 'lg';
	desc?: string | React.ReactNode;
	subDesc?: string | React.ReactNode;
	box?: React.ReactNode;
	boxColor?: BoxProps['color'];
	btnWrap?: React.ReactNode;
}

export const InfoGuide:React.FC<InfoGuideProps> = ({
   type = 'alert',
   pt= 'md',
   desc, subDesc,
   box, boxColor,
   btnWrap
}) => {
	return (
		<div
			className={styles.infoGuideWrap}
			style={{
				paddingTop:
					(pt === 'md' && type !== 'celebrate') ? '30px' :
					(pt === 'lg' && type !== 'celebrate') ? '40px' : '0'
			}}
		>
			{(type && type !== 'celebrate') && (
				<span
					className={styles.icon}
					style={{
						background:`url("/assets/icons/comm_ico_${type}.svg")`
					}}
				></span>
			)}
			{type === 'celebrate' && (
				<div className={styles.celebrateBg}>
					<img src="/assets/images/comm_bg_celebrate.svg" alt="배경이미지" />
				</div>
			)}
			<TitleWrap child={
				<>
				<Title size={'lg'} text={desc} />
					<p className={styles.stext}>{subDesc}</p>
				</>
			}/>
			{(box && type !== 'celebrate') && (
				<Box color={boxColor} mt={'sm'} alignCenter={true} child={box} />
			)}
			{(btnWrap && type !== 'celebrate') && (
				<BtnWrap mt={'sm'} align={'center'} buttons={btnWrap} />
			)}
		</div>
	)
}