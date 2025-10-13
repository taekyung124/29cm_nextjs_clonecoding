import * as React from 'react';
import styles from "@/components/organism/footer/Footer.module.scss";
import {FoldList} from "@/components/organism/foldList/FoldList";

interface FooterProps {
	style?: React.CSSProperties;
}

export const Footer: React.FC<FooterProps> = ({style}) => {
	const renderCsItem = [
		{text : '회사소개', href: 'javascript:void(0);', udl: false},
		{text : '전국직영매장', href: 'javascript:void(0);', udl: false},
		{text : '제휴/입점문의', href: 'javascript:void(0);', udl: false},
		{text : '개인정보처리방침', href: 'javascript:void(0);', udl: true},
		{text : '이용약관', href: 'javascript:void(0);', udl: false},
	];
	const renderSnsItem = [
		{label: '유튜브', key: 'youtube', href: 'javascript:void(0);'},
		{label: '네이버 티비', key: 'navertv', href: 'javascript:void(0);'},
		{label: '페이스북', key: 'facebook', href: 'javascript:void(0);'},
		{label: '인스타그램', key: 'instagram', href: 'javascript:void(0);'},
		{label: '카카오톡', key: 'kakaotalk', href: 'javascript:void(0);'},
	];

	return (
		<div className={styles.footerWrapper} style={style}>
			<div className={styles.footerCi}>
				<a href="javascript:void(0);" className={styles.linkCi}>
					<img src="/assets/images/comm_footer_logo.svg" alt="GUGUS" />
				</a>
			</div>
			<p className={styles.ciSlogan}>No 1 명품 거래 플랫폼</p>
			<div className={styles.footerInfoWrap}>
				<div className={styles.infoRow}>
					<a href="javascript:void(0);" className={styles.csLinkUdl}>고객센터</a>
					<a href="tel:1544-9964">1544-9964</a>
				</div>
				<div className={styles.infoRow}>평일 10:00 ~ 18:00(점심시간 12:00~13:00)</div>
			</div>
			<ul className={styles.csInfoList}>
				{renderCsItem.map((item, index) => (
					<li key={index} className={styles.csInfoItem}>
						<a href={item.href} className={[styles.csLink, item.udl ? styles.udl : ''].join(' ')}>{item.text}</a>
					</li>
				))}
			</ul>
			<div className={styles.foldWrap}>
				<FoldList
					type={'auto'}
					color="white" innerPadded="none"
					items={[
						{
							title: '㈜구구스 사업자 정보',
							foldContent: <>
								<div className={styles.businessInfo}>
									대표이사 : 김정남
									<br />서울 강남구 강남대로84길 13 KR타워 10, 11층
									<br />사업자등록번호 : 120-86-90760
									<a href="javascript:void(0);" className={styles.linkTextUdl}>
										<span className={styles.text}>사업자 정보 확인</span>
									</a>
									<br />통신판매업 신고 : 강남-9862호
									<br />개인정보관리책임자 : 김정수
								</div>
								<div className={styles.footerDesc}>
									<a href="https://pgims.ksnet.co.kr/pg_infoc/src/dealinfo/pg_shop_info2.jsp?shop_id=2036500001"
									   target="_blank" className={styles.linkTextUdl}>
										<span className={styles.text}>KSNET가입사실확인(에스크로)</span>
									</a>
								</div>
								<div className={styles.footerDesc}>구구스 중고 명품은 전 상품 감정사의 감정을 거쳐 등록되며, 새 상품은 감정, 정식수입원을 통해 유통되는 100% 진품임을 보장합니다.</div>
								<div className={styles.footerDesc}>일부 상품의 경우 구구스는 통신판매의 당사자가 아닌 통신판매 중개자로서 상품, 상품정보, 거래에 대한 책임이 제한될 수 있고, 상품의 제조사 또는 해당 브랜드의 자체 A/S 및 교환 서비스에 대해서는 보증하지 않습니다. 각 상품 페이지에서 상세 내용을 확인 하시기 바랍니다.</div>
							</>
						}
					]}
				/>
			</div>
			<ul className={styles.snsLinkList}>
				{renderSnsItem.map((item, index) => (
					<li key={index} className={styles.snsLinkItem}>
						<a href={item.href} className={[styles.snsLink, styles[item.key]].join(' ')}>
							<span className="offscreen">{item.label}</span>
						</a>
					</li>
				))}
			</ul>
			<div className={styles.copyright}>COPYRIGHT ⓒGUGUS ALL RIGHTS RESERVED.</div>
		</div>
	)
}