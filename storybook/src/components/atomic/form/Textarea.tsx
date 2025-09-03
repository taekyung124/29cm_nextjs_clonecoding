import * as React from 'react';
import styles from '@/components/atomic/form/FormElemnent.module.scss';


export interface TextareaProps {
	title?: string;
	placeholder?: string;
	disabled?: boolean;
	focused?: boolean;
	max?: number;
}

export const Textarea: React.FC<TextareaProps> = ({ title, placeholder, disabled, focused, max = 100}) => {
	const [value, setValue] = React.useState('');
	const [isComposing, setIsComposing] = React.useState(false);

	const count = isComposing ? value.length - 1 : value.length;

	return (
		<div className={[
			styles.textareaBox,
			disabled ? styles.isDisabled : '',
			focused ? styles.isFocus : ''
		].join(' ')}
		>
			<textarea
				className={styles.uiTextarea}
				title={title}
				placeholder={placeholder}
				disabled={disabled}
				value={value}
				onChange={e => setValue(e.target.value)}
				onCompositionStart={() => setIsComposing(true)}
				onCompositionEnd={() => setIsComposing(false)}
				maxLength={max}
			/>
			<div className={styles.byteCheck}>
				<span className={styles.count}>{count}</span> / <span className={styles.max}>{max}</span>
			</div>
		</div>
	);
};