import * as React from 'react';
import styles from "@/components/layouts/header/Header.module.scss";

import {StickyWrap} from "@/components/organism/stickyWrap/StickyWrap";
import {EtcButton} from "@/components/atomic/etcButton/EtcButton";
import {TextButton} from "@/components/atomic/textButton/TextButton";
import {Gnb, GnbProps} from "@/components/layouts/gnb/Gnb";

type HeaderGnbProps = Pick<GnbProps, 'items'>

interface SubList {
	title?: string;
	href?: string;
}

interface HeaderProps extends HeaderGnbProps {
	type: 'main' | 'sub';
	title?: string;
	subDepth?: SubList[];
	btnHomeUrl?: string;
	btnSearchUrl?: string;
	btnShareUrl?: string;
	btnSettingUrl?: string;
	btnAlarmUrl?: string;
	btnCloseUrl?: string;
	btnFindIdUrl?: string;
	hasGnb?: boolean;
	bgTransparent?: boolean;
	hasNewAlarm?: boolean;
}

export const Header: React.FC<HeaderProps> = ({
	type, title, subDepth, hasGnb, items = [], bgTransparent = false, hasNewAlarm = false,
	btnHomeUrl = 'javascript:', btnSearchUrl = 'javascript:', btnShareUrl = 'javascript:', btnSettingUrl = 'javascript:',
	btnAlarmUrl = 'javascript:', btnCloseUrl = 'javascript:', btnFindIdUrl = 'javascript:',
}) => {
	const renderHeader =
		<>
			{type === 'sub' && (
				<div className={styles.headerLeft}>
					<EtcButton name={'icon'} icon={'header_back'} iconSize={24} offscreen={'이전 화면으로 이동'} />
					<div className={styles.pageTitle}>{title}</div>
					{subDepth && <>
						<EtcButton name={'icon'} icon={'header_sub_depth'} iconSize={14} btnSize={22} offscreen={'서브 카테고리 메뉴 열기'} />
						<div className={styles.subDepthLayer}>
							<ul className={styles.subDepthList}>
								{subDepth.map((item, idx) => (
									<li key={idx} className={styles.subDepthItem}>
										<a href={item.href ? item.href : 'javascript:'} className={styles.subLink}>
											<span className={styles.text}>{item.title}</span>
										</a>
									</li>
								))}
							</ul>
							<div className={styles.subLayerDim}></div>
						</div>
					</>}
				</div>
			)}
			{type === 'main' && (
				<h1 className={styles.logo}>
					<a href="javascript:" className={styles.btnLogo}>
						<span className="offscreen">GUGUS</span>
					</a>
				</h1>
			)}
			<div className={styles.headerRight}>
				{btnHomeUrl &&
					<EtcButton tag={'a'} href={btnHomeUrl} name={'icon'} icon={'header_home'} iconSize={24} offscreen={'홈'} />
				}
				{btnSearchUrl &&
					<EtcButton tag={'a'} href={btnSearchUrl} name={'icon'} icon={'header_search'} iconSize={24} offscreen={'검색'}
							   addClass={styles.btnSearch} />
				}
				{btnShareUrl &&
					<EtcButton tag={'a'} href={btnShareUrl} name={'icon'} icon={'header_share'} iconSize={24} offscreen={'공유'} />
				}
				{btnAlarmUrl &&
					<EtcButton tag={'a'} href={btnAlarmUrl} name={'icon'} icon={'header_alarm'} iconSize={24} offscreen={'알림'}
							   addClass={[styles.btnAlarm, hasNewAlarm ? styles.new : ''].join(' ')} />
				}
				{btnSettingUrl &&
					<EtcButton tag={'a'} href={btnSettingUrl} name={'icon'} icon={'header_setting'} iconSize={24} offscreen={'설정'} />
				}
				{btnCloseUrl &&
					<EtcButton tag={'a'} href={btnCloseUrl} name={'icon'} icon={'header_close'} iconSize={24} offscreen={'닫기'} />
				}
				{btnFindIdUrl &&
					<TextButton tag={'a'} href={btnFindIdUrl} text={'아이디 찾기'} />
				}
			</div>
		</>;

	const [gnbActive, setGnbActive] = React.useState(false);

	return (
		<div className={[styles.headerWrapper, styles[type], bgTransparent ? styles.transparent : ''].join(' ')}>
			{(hasGnb && type ==='sub') && (
				<Gnb items={items} />
			)}
			<div className={[styles.headerWrap, gnbActive ? styles.gnbActive : ''].join(' ')}>
				{type === 'sub' && (
					<StickyWrap
						children={renderHeader}
					/>
				)}
				{type === 'main' && (
					<>renderHeader</>
				)}
			</div>
			{(hasGnb && type ==='main') && (
				<StickyWrap children={
					<Gnb items={items} isActive={gnbActive} onToggle={setGnbActive} />
				} />
			)}
		</div>
	)
}