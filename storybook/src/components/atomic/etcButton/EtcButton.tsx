import * as React from 'react';
import styles from '@/components/atomic/etcButton/EtcButton.module.scss';
import {useState} from "react";

type CommonProps = {
	name: 'grade' | 'box' | 'wish' | 'sort' | 'add';
	color?: 'white' | 'green' | 'gray' | 'red';
	icon?: string | React.ReactNode;
	iconSize?: number;
	text?: string | React.ReactNode;
	addClass?: string;
	onClick?: () => void;
}

type EtcButtonAsButton = {
	tag?: 'button';
	type?: 'button' | 'submit' | 'reset';
} & React.HTMLAttributes<HTMLButtonElement>;

type EtcButtonAsAnchor = {
	tag?: 'a';
	href: string;
} & React.HTMLAttributes<HTMLAnchorElement>;


export type EtcButtonProps = CommonProps & (EtcButtonAsButton | EtcButtonAsAnchor);

export const EtcButton = ({name, color = 'white', icon, iconSize, text, onClick, tag = 'button', addClass, ...rest}: EtcButtonProps) => {
	const renderIcon =(typeof icon === 'string') ? (<span className={styles.icon} style={{backgroundImage: `url("/assets/icons/comm_ico_${icon}.svg")`}}></span>) : (icon);
	const renderCustom = name !== 'wish' &&
		<>
			{(icon && iconSize && name === 'add') && renderIcon}
			{text && <span className={[styles.text, styles[`${addClass}`]].join(' ')}>{text}</span>}
			{(icon && iconSize && name !== 'grade' && name !== 'add') && renderIcon}
		</>

	const [isWished, setIsWished] = useState(false);
	const handleToggle = () => {
		setIsWished((prev) => !prev);
	};

	if (tag === 'a') {
		const { href, ...anchorProps } = rest as React.AnchorHTMLAttributes<HTMLAnchorElement>;
		return (name === 'wish') ? (
			<a
				className={styles[`${name}Btn`]}
				onClick={handleToggle}
				href={href}
				{...anchorProps}
				style={{width: `${iconSize}px`, height: `${iconSize}px`}}
			>
				<span
					className={styles.icon}
					style={{
						backgroundImage: `url('/assets/icons/comm_ico_heart_${isWished ? 'gray' : `${color}`}.svg')`,
						backgroundPosition: 'center',
						backgroundRepeat: 'no-repeat',
						backgroundSize: 'cover',
						width: `${iconSize}px`, height: `${iconSize}px`
				}}
				>
					<span className={'offscreen'}>{isWished ? "관심 해제" : "관심 등록"}</span>
				</span>
			</a>
		) : (
			<a
				className={[
					styles[`${name}Btn`],
					name === 'box' && styles[`${color}`]
				].join(' ')}
				onClick={onClick}
				href={href}
				{...anchorProps}
			>
				{renderCustom}
			</a>
		)
	}
	return (
		(name === 'wish') ? (
			<button
				className={styles[`${name}Btn`]}
				onClick={handleToggle}
			>
				<span
					className={styles.icon}
					style={{
						backgroundImage: `url('/assets/icons/comm_ico_heart_${isWished ? 'gray' : `${color}`}.svg')`,
						backgroundPosition: 'center',
						backgroundRepeat: 'no-repeat',
						backgroundSize: 'cover',
						width: `${iconSize}px`, height: `${iconSize}px`
					}}
				>
					<span className={'offscreen'}>{isWished ? "관심 해제" : "관심 등록"}</span>
				</span>
			</button>
		) : (
			<button
				className={[
					styles[`${name}Btn`],
					name === 'box' && styles[`${color}`]
				].join(' ')}
				onClick={onClick}
			>
				{renderCustom}
			</button>
		)
	)
}