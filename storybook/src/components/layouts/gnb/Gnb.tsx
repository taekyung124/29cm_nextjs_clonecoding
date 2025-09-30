import * as React from 'react';
import styles from "@/components/layouts/gnb/Gnb.module.scss";
import {SwiperWrap} from "@/components/organism/swiperWrap/SwiperWrap";

interface GnbItem {
	text?: string;
	href?: string;
	isNew?: boolean;
}

interface GnbProps {
	items: GnbItem[];
}

export const Gnb: React.FC<GnbProps> = ({
	items = []
}) => {
	const [isActive, setIsActive] = React.useState(false);

	const handleToggle = () => setIsActive(prev => !prev);

	// 임시: 첫 번째 메뉴를 active 상태로 테스트
	const activeIndex = 0;

	const renderGnbMenu = items.map((item, idx) => (
		<a key={idx} href={item.href ? item.href : 'javascript:void(0);'} className={[
			styles.gnbLink, idx === activeIndex ? styles.isActive : ''
		].join(' ')}>
			<span className={styles.text}>{item.text}</span>
			{item.isNew &&
				<span className={styles.new}>
					<span className="offscreen">new</span>
				</span>
			}
		</a>
	));

	const renderGnbLayerList = items.map((item, idx) => (
		<li key={idx} className={styles.gnbItem}>
			<a href={item.href ? item.href : 'javascript:void(0);'} className={[
				styles.gnbLink, idx === activeIndex ? styles.isActive : ''
			].join(' ')}>
				<span className={styles.text}>{item.text}</span>
			</a>
		</li>
	));

	return (
		<div className={[styles.gnbWrap, isActive ? styles.isActive : ''].join(' ')}>
			<div className={styles.gnbBox}>
				<div className={styles.gnbSwiperWrap}>
					<SwiperWrap type={'auto'} items={renderGnbMenu} />
					<button type={'button'} className={styles.gnbToggle} onClick={handleToggle}>
						<span className="offscreen">열기</span>
					</button>
				</div>
				<div className={styles.gnbLayer}>
					<div className={styles.gnbLayerTitle}>바로가기</div>
					<ul className={styles.gnbLayerList}>
						{renderGnbLayerList}
					</ul>
				</div>
			</div>
		</div>
	)
}