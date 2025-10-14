import * as React from 'react';

import type { PopupBaseProps } from "@/components/organism/popup/index";
import styles from "@/components/organism/popup/Popup.module.scss";

import {BtnWrap} from "@/components/molecule/btnWrap/BtnWrap";

interface FullPopupProps extends PopupBaseProps {
	hasFooter?: boolean;
}

export const FullPopup: React.FC<FullPopupProps> = ({
	hasHeader, popTitle,
	hasFooter, btnSlot, children,
	isShow, onClose
}) => {
	return (
		<div className={[styles.dialog, styles.full].join(' ')}>
			{hasHeader && (
				<div className={styles.dialogHeader}>
					<h1 className={styles.dialogTitle}>{popTitle}</h1>
					<button type={'button'} className={styles.dialogClose}>
						<span className="offscreen">팝업 닫기</span>
					</button>
				</div>
			)}
			<div className={styles.dialogBody}>
				<div className={styles.dialogInner}>
					{children}
				</div>
			</div>
			{hasFooter && (
				<div className={styles.dialogFooter}>
				{btnSlot && (
						<BtnWrap buttons={btnSlot} />
					)}
				</div>
			)}
		</div>
	)
}