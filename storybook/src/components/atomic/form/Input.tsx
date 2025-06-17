import * as React from 'react';
import styles from '@/styles/components.module.scss';

export interface InputProps {
	boxType?: undefined | 'line' | 'gray-search';
	type?: 'text' | 'number' | 'password' | 'search' | 'tel';
	title?: string;
	placeholder?: string;
	disabled?: boolean;
	value?: string;
	isValidCheck?: undefined | 'fail' | 'success';
	inputGuide?: string;
	validDesc?: string;
	children?: React.ReactNode;
}
export const Input: React.FC<InputProps> = ({
	boxType,
	type,
	title,
	placeholder,
	disabled = false,
	value,
	isValidCheck,
	inputGuide,
	validDesc,
	children
}) => {
	return (
		<div className={[
			styles.inputGroup,
			styles.validCheck,
			styles[boxType ?? ''],
			styles[isValidCheck ?? '']
		].join(' ')}>
			<div className={
				type === 'search' ? styles.inputSearchBox
				: boxType ? styles[`input${boxType[0].toUpperCase()}${boxType.slice(1)}Box`]
				: styles.inputBox}>
				<input className={styles.uiInput}
					   type={type}
					   title={title}
					   placeholder={placeholder}
					   value={value}
					   disabled={disabled}
				/>
				{(type !== 'password' || 'tel') && (
					<button className={styles.btnInputDel} type={"button"}>
						<span className="offscreen">초기화</span>
					</button>
				)}
				{children && (
					<>
						<span className={styles.timerCount}>02:59</span>
						{children}
					</>
				)}
				{type === 'password' && (
					<button className={styles.btnTogglePw} type={"button"}>
						<span className="offscreen">비밀번호 숨김</span>
					</button>
				)}
				{type === 'search' && (
					<button type="button" className={styles.btnInputSearch}>
						<span className="offscreen">검색</span>
					</button>
				)}
			</div>
			{(inputGuide && !isValidCheck) && (
				<div className="input-guide">하단 텍스트가 노출됩니다.</div>
			)}
			{(validDesc && isValidCheck) && (
				<div className="valid-desc">경고 메시지가 노출됩니다.</div>
			)}
		</div>
	)
}