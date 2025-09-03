import * as React from 'react';
import styles from '@/components/atomic/textButton/TextButton.module.scss';

type CommonProps = {
	color?: 'gray' | 'black';
	size?: 'md' | 'lg';
	beforeIcon?: string | React.ReactNode;
	afterIcon?: string | React.ReactNode;
	text?: string | React.ReactNode;
	disabled?: boolean;
	udlLink?: boolean;
	onClick?: () => void;
}

type tButtonAsButton = {
	tag?: 'button';
	type?: 'button' | 'submit' | 'reset';
} & React.HTMLAttributes<HTMLButtonElement>;

type tButtonAsAnchor = {
	tag?: 'a';
	href: string;
} & React.HTMLAttributes<HTMLAnchorElement>;

export type tButtonProps = CommonProps & (tButtonAsButton | tButtonAsAnchor);

export const TextButton = ({
	color = 'gray',
	size = 'md',
	udlLink = false,
	beforeIcon, afterIcon,
	text,
	tag = 'button',
	disabled = false,
	onClick,
	...rest}: tButtonProps
) => {
	const renderBeforeIcon = (typeof beforeIcon === 'string') ? (<span className={styles.ico} style={{backgroundImage: `url("/assets/icons/comm_ico_${beforeIcon}.svg")`}}></span>) : (beforeIcon);
	const renderAfterIcon = (typeof afterIcon === 'string') ? (<span className={styles.ico} style={{backgroundImage: `url("/assets/icons/comm_ico_${afterIcon}.svg")`}}></span>) : (afterIcon);

	const baseClass = [
		styles.tBtn,
		styles[`${color}`],
		styles[`${size}`],
		udlLink && styles.udlLink,
	];

	if (tag === 'a') {
		const { href, ...anchorProps } = rest as React.AnchorHTMLAttributes<HTMLAnchorElement>;
		return (
			<a
				className={[...baseClass, disabled ? styles.isDisabled : ''].join(' ')}
				href={disabled ? undefined : href}
				{...anchorProps}
			>
				{(beforeIcon && !udlLink) && renderBeforeIcon}
				{text && <span className={styles.text}>{text}</span>}
				{(afterIcon && !udlLink) && renderAfterIcon}
			</a>
		);
	}

	const { type = 'button', ...tButtonProps } = rest as React.ButtonHTMLAttributes<HTMLButtonElement>;
	return (
		<button
			className={baseClass.join(' ')}
			type={type}
			disabled={disabled}
			onClick={onClick}
			{...tButtonProps}
		>
			{(beforeIcon && !udlLink) && renderBeforeIcon}
			{text && <span className={styles.text}>{text}</span>}
			{(afterIcon && !udlLink) && renderAfterIcon}
		</button>
	)
}