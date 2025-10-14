import * as React from "react";

export interface PopupBaseProps {
	hasHeader?: boolean;
	popTitle?: string;
	btnSlot?: React.ReactNode;
	children?: React.ReactNode;
	isShow: boolean;
	onClose: () => void;
}

export {AlertPopup} from "./AlertPopup";
export {BottomPopup} from "./BottomPopup";
export {FullPopup} from "./FullPopup";