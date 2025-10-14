import * as React from 'react';

import type { PopupBaseProps } from "@/components/organism/popup/index";
import styles from "@/components/organism/popup/Popup.module.scss";

import {BtnWrap} from "@/components/molecule/btnWrap/BtnWrap";

interface AlertPopupProps extends PopupBaseProps {
	dimClose?: boolean;
}

export const AlertPopup: React.FC<AlertPopupProps> = ({
	hasHeader, popTitle, btnSlot,
	isShow, onClose, dimClose, children
}) => {
	return (
		<div className={[styles.dialog, styles.alert].join(' ')}>
			{hasHeader && (
				<div className={styles.dialogHeader}>
					<h1 className={styles.dialogTitle}>{popTitle}</h1>
				</div>
			)}
			<div className={styles.dialogBody}>
				<div className={styles.dialogInner}>
					{children}
				</div>
			</div>
			<div className={styles.dialogFooter}>
				{btnSlot && (
					<BtnWrap align={'between'} buttons={btnSlot} />
				)}
			</div>
		</div>
	)
}