import * as React from 'react';
import styles from "@/components/molecule/aboutGugusItem/AboutGugusItem.module.scss";
import {Thumb, ThumbProps} from "@/components/atomic/thumb/Thumb";
import {BtnWrap} from "@/components/molecule/btnWrap/BtnWrap";

type AboutGugusThumbProps = Pick<ThumbProps, 'imgSrc' | 'thumbClass'>;

interface AboutGugusItemProps extends AboutGugusThumbProps {
	stepNumber?: string;
	title?: string;
	description?: string;
	btnSlot?: React.ReactNode;
}

export const AboutGugusItem: React.FC<AboutGugusItemProps> = ({
	stepNumber, title, description, btnSlot,
	imgSrc, thumbClass,
}) => {
	return (
		<div className={styles.aboutGugusItem}>
			<Thumb type={'fluid'} imgSrc={imgSrc} altText={title} thumbClass={thumbClass} btnLink={false} />
			<div className={styles.infoBox}>
				<span className={styles.stepNumber}>{stepNumber}</span>
				<div className={styles.title}>{title}</div>
				<div className={styles.desc}>{description}</div>
			</div>
			{btnSlot && <BtnWrap mt={'sm'} buttons={btnSlot} />}
		</div>
	)
}