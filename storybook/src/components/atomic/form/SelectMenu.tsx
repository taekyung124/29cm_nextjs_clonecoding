import * as React from 'react';
import styles from '@/components/atomic/form/FormElemnent.module.scss';


export interface SelectOption {
	label: string;
	value: string;
}

export interface SelectMenuProps {
	type?: 'line' | 'text';
	title?: string;
	placeholder?: string;
	disabled?: boolean;
	options: SelectOption[];
	value: string;
	onChange: (value: string) => void;
}

export const SelectMenu: React.FC<SelectMenuProps> = ({
	type,
	title,
	placeholder,
	disabled = false,
	options,
	value,
	onChange,
}) => {
	const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		onChange(event.target.value);
	};
	return (
		<div className={[
			styles.uiSelect,
			styles[type ?? ''],
			`__select`
		].join(' ')}>
			<select title={title} disabled={disabled} onChange={handleChange} value={value}>
				<option value={''} disabled hidden>
					{placeholder}
				</option>
				{options.map((option, index) => (
					<option
						key={index}
						value={option.value}
						className={value === option.value ? 'selected' : ''}
					>
						{option.label}
					</option>
				))}
			</select>
		</div>
	);
}