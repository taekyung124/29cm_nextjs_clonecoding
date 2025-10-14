import * as React from 'react';

import type { PopupBaseProps } from "@/components/organism/popup/index";
import styles from "@/components/organism/popup/Popup.module.scss";

import {BtnWrap} from "@/components/molecule/btnWrap/BtnWrap";

interface BottomPopupProps extends PopupBaseProps {
	hasFooter?: boolean;
	dimClose?: boolean;
}

export const BottomPopup: React.FC<BottomPopupProps> = ({
	hasHeader, popTitle,
	hasFooter, btnSlot,
	isShow, onClose ,dimClose, children
}) => {
	return (
		<div className={[styles.dialog, styles.bottom].join(' ')}>
			{hasHeader && (
				<div className={styles.dialogHeader}>
					<h1 className={styles.dialogTitle}>{popTitle}</h1>
					<button
						type={'button'} className={styles.dialogClose}
						onClick={onClose}
					>
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