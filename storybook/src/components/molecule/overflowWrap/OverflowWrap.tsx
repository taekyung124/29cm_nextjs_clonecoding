import * as React from 'react';
import styles from '@/components/molecule/overflowWrap/Overflow.module.scss';
import {Button} from "@/components/atomic/button/Button";
import {BtnWrap} from "@/components/molecule/btnWrap/BtnWrap";

interface overflowWrapProps {
	type?: 'toggleLine' | 'toggleRound' | 'textSingle' | 'textMulti';
	contHeader?: React.ReactNode;
	contBody?: React.ReactNode;
	toggleCont?: React.ReactNode;
	toggleContMt?: number;
	text: string | React.ReactNode;
	onClick?: () => void;
}

export const OverflowWrap: React.FC<overflowWrapProps> = ({
	type, contHeader, contBody, toggleCont, text, onClick, toggleContMt,
}) => {
	const [isActive, setIsActive] = React.useState(false);

	const handleToggle = () => {
		setIsActive(prev => !prev);
		onClick?.();
	};

	return (
		<div className={`${styles.overflowWrap} ${isActive ? styles.isActive : ''}`}>
			{(type === 'toggleLine' || type === 'toggleRound') ? (
				<>
					<div className={styles.contHeader}>
						{contHeader}
					</div>
					<div className={styles.contBody}>
						{contBody}
						{toggleCont &&
							<div
								className={styles.toggleCont}
								style={{ marginTop: `${toggleContMt}px`}}
							>
								{toggleCont}
							</div>
						}
					</div>
				</>
			) : (
				<div className={[styles[`${type}`], type === 'textSingle' ? styles.ellipsis : ''].join(' ')}>
					{text}
				</div>
			)}
			{type !== 'toggleRound' ? (
				<button
					type={'button'} className={styles.btnFold}
					onClick={handleToggle}
				>
					{type === 'textSingle' ? (
						<span className={'offscreen'}>{isActive ? '접기' : '펼치기'}</span>
						) : (
						<span className={styles.text}>{isActive ? '접기' : '펼치기'}</span>
						)}
					<span className={styles.icon}></span>
				</button>
			) : (
				<BtnWrap mt={'sm'} buttons={
					<Button size={'md'} color={'lineLightGray'} rounded={true} text={isActive ? '접기' : '펼치기'} afterIcon={'arw_down_gray'} onClick={handleToggle} />
				}/>
			)}
		</div>
	)
}