import * as React from 'react';
import styles from "@/components/layouts/pages/Layouts.module.scss"
import {Header} from "@/components/organism/header/Header";
import {Footer} from "@/components/organism/footer/Footer";
import {Docker} from "@/components/organism/docker/Docker";
import {WingBanner, WingBannerProps} from "@/components/organism/wingBanner/WingBanner";

type MainWingBannerProps = Pick<WingBannerProps, 'recentProd' | 'prodImg' | 'prodUrl'>;

interface MainProps extends MainWingBannerProps {
	children?: React.ReactNode;
}

export const Main: React.FC<MainProps> = ({
	children,
	// wingBanner
	prodImg, prodUrl, recentProd
}) => {
	return (
		<div className={[
			styles.wrapper, styles.main,
		].join(' ')}>
			<div className={styles.skipNav}>
				<a href={'#docker'}>도커 바로가기</a>
				<a href={'#container'}>본문으로 가기</a>
			</div>
			<Header
				type={'main'}
				headerButtonOrder={[
					{btnAlarmUrl: 'javascript:'},
					{btnSearchUrl: 'javascript:'},
				]}
				hasGnb={true} hasNewAlarm={true}
				items={[
					{text: '업데이트', href: 'javascript:', isNew: true,},
					{text: '가격인하', href: 'javascript:',},
					{text: '미사용신품', href: 'javascript:',},
					{text: '핫딜', href: 'javascript:',},
					{text: '아울렛', href: 'javascript:',},
					{text: '롤렉스', href: 'javascript:',},
					{text: '에르메스', href: 'javascript:',},
					{text: '샤넬', href: 'javascript:',},
					{text: '이벤트', href: 'javascript:',},
					{text: '내명품팔기', href: 'javascript:',},
					{text: '전국직영매장', href: 'javascript:',},
					{text: '명품케어서비스', href: 'javascript:',}
				]}
			/>
			<div className={styles.containerWrapper} id="container">
				<div className={styles.contentWrapper}>
					{children}
				</div>
			</div>
			<Docker id={'docker'} />
			<WingBanner prodImg={prodImg} prodUrl={prodUrl} recentProd={recentProd} />
			<Footer />
		</div>
	)
}