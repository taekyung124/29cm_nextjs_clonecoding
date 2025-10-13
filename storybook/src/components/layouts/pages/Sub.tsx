import * as React from 'react';
import styles from "@/components/layouts/pages/Layouts.module.scss"
import { Header, HeaderProps} from "@/components/organism/header/Header";
import {Footer} from "@/components/organism/footer/Footer";
import {Docker} from "@/components/organism/docker/Docker";
import {WingBanner, WingBannerProps} from "@/components/organism/wingBanner/WingBanner";

type SubWingBannerProps = Pick<WingBannerProps, 'recentProd' | 'prodImg' | 'prodUrl'>;

interface SubProps extends SubWingBannerProps {
	headerProps?: HeaderProps;
	hasGnb?: boolean;
	hasDocker?: boolean;
	hasFooter?: boolean;
	children?: React.ReactNode;
}

export const Sub: React.FC<SubProps> = ({
	headerProps ,hasGnb, hasDocker, hasFooter, children,
	// wingBanner
	prodImg, prodUrl, recentProd
}) => {
	return (
		<div className={[
			styles.wrapper,
			styles.sub,
			!hasDocker && styles.noDocker,
		].join(' ')}>
			<div className={styles.skipNav}>
				{hasDocker && (
					<a href={'#docker'}>도커 바로가기</a>
				)}
				<a href={'#container'}>본문으로 가기</a>
			</div>
			{headerProps && <Header hasGnb={hasGnb} {...headerProps} />}
			<div className={styles.containerWrapper} id="container">
				<div className={styles.contentWrapper}>
					{children}
				</div>
			</div>
			{hasDocker && (<Docker id={'docker'} />)}
			<WingBanner prodImg={prodImg} prodUrl={prodUrl} recentProd={recentProd} bottomPos={hasDocker ? '90px' : '20px'} />
			{hasFooter && (
				<Footer style={{
					marginTop: `${hasDocker ? 'initial' : 'calc(-1 * env(safe-area-inset-bottom))'}`,
					paddingBottom: `${hasDocker ? 'initial' : '60px'}`,
				}} />
			)}
		</div>
	)
}