import {useState} from 'react';
import styles from '@/components/atomic/tag/Tag.module.scss';

interface TagProps {
	size?: 'sm' | 'md';
	color?: 'lightGray' | 'white';
	text?: string;
	btnDelete?: boolean;
	btnWish?: boolean;
	btnLink?: boolean;
	href?: string;
}

export const Tag: React.FC<TagProps> = ({
	size = 'md',
	color = 'lightGray',
	text,
	btnDelete = false,
	btnWish = false,
	btnLink = false,
	href = 'javascript:void(0);',
}) => {
	const [isWished, setIsWished] = useState(false);
	const handleToggle = () => {
		setIsWished((prev) => !prev);
	};

	const sizeCamel = size.charAt(0).toUpperCase() + size.slice(1);

	return (
		<span className={[
			styles[`tag${sizeCamel}`],
			styles[`${color}`],
		].join(' ')}>
			<span className={styles.text}>{text}</span>
			{btnWish && (
				<button
					type={'button'}
					className={styles.btnWish}
					onClick={handleToggle}
					style={{ background: `url('/assets/icons/comm_ico_heart_${isWished ? 'gray' : 'red'}.svg') no-repeat center/contain`}}
				>
					<span className={'offscreen'}>{isWished ? "관심 해제" : "관심 등록"}</span>
				</button>
			)}
			{btnDelete && (
				<button type={'button'} className={styles.btnDelete}>
					<span className={'offscreen'}>삭제</span>
				</button>
			)}
			{btnLink && (
				<a href={href} className={styles.btnLink}>
					<span className={'offscreen'}>바로가기</span>
				</a>
			)}
		</span>
	)
}