import * as React from 'react';
import styles from "@/components/molecule/displayBanner/DisplayBanner.module.scss";
import {TitleWrap} from "@/components/molecule/titleWrap/TitleWrap";
import {BtnWrap} from "@/components/molecule/btnWrap/BtnWrap";
import {Title} from "@/components/atomic/title/Title";
import {Stext} from "@/components/atomic/stext/Stext";
import {Button} from "@/components/atomic/button/Button";

interface DisplayBannerProps {
	// type?: 'prod' | 'brand' | 'default';
	prod?: 'newUpdate' | 'priceDown' | 'newItem' | 'outlet' | 'gugusBest';
	brand?: 'chanel' | 'rolex' | 'hermes' | 'louisVuitton';
	supTitle?: string | React.ReactNode;
	title?: string | React.ReactNode;
	subText?: string | React.ReactNode;
	btnText?: string;
	imgSrc?: string;
}

function camelToUppercaseWithSpace(str?: string) {
	if (!str) return '';
	return str
		.replace(/([a-z])([A-Z])/g, '$1 $2')
		.toUpperCase();
}

const prodSubMap: Record<NonNullable<DisplayBannerProps['prod']>, string> = {
	newUpdate: '오늘 새로 등록된',
	priceDown: '구구스가 제안하는',
	newItem: '미사용 신품은 인보이스&영수증 포함 풀셋을 제공하지만 일부 상품은 부속품이 없을 수 있습니다.',
	outlet: '',
	gugusBest: '지금 가장 인기있는',
};

const brandSubMap: Record<NonNullable<DisplayBannerProps['brand']>, string> = {
	chanel: '모든 여성들의 로망',
	rolex: '성공의 척도',
	hermes: '1%를 위한',
	louisVuitton: '우아하고 가치 있는',
};

export const DisplayBanner: React.FC<DisplayBannerProps> = ({
	prod, brand, supTitle, title, subText, btnText, imgSrc
}) => {
	const prodTitle = camelToUppercaseWithSpace(prod);
	const brandTitle = camelToUppercaseWithSpace(brand);

	const prodSub = prod ? prodSubMap[prod] : '';
	const brandSub = brand ? brandSubMap[brand] : '';
	return (
		<div className={[
			styles.displayBanner,
			`${prod ? `${styles.prod} ${styles[prod]}` : ''}`,
			`${brand ? `${styles.brand} ${styles[brand]}` : ''}`,
		].join(' ')}>
			{(!prod && !brand) ? (
				<>
					<div className={styles.imgBox}>
						<img src={`/assets/images/${imgSrc ? imgSrc : 'temp_bg_display_marketing_banner.svg'}`} alt="배경 이미지" />
					</div>
					<TitleWrap child={
						<>
							{supTitle && <Title type={'ctitleSub'} size={'md'} text={supTitle} addClass={'fcWhite'}/>}
							{title && <Title type={'ctitle'} size={'xxl'} text={title} addClass={'fcWhite'}/>}
							{subText && <Stext mt={'md'} addClass={'fcWhite'} text={subText} />}
						</>
					} />
					{btnText &&
						<BtnWrap mt={'sm'} align={'auto'} buttons={
							<Button
								size={'md'} color={'lineWhite'} rounded={true} text={btnText}
								afterIcon={'arw_right_white'}
							/>
						} />
					}
				</>
			) : (
				<>
					<TitleWrap child={
						<>
							{brand &&
								<div className={styles.thumbBox}>
									{brand === 'louisVuitton' ?
										<img src={`/assets/icons/ico_logo_louis_vuitton_md_white.svg`} alt="" />
										: <img src={`/assets/icons/ico_logo_${brand}_md_white.svg`} alt="" />
									}
								</div>
							}
							{prod === 'newItem' ? (
								<>
									<Title type={'ctitle'} size={'xxl'} text={'미사용 신품'} addClass={'fcWhite'}/>
									<Stext mt={'md'} addClass={'fcWhite'}
										   text={prodSub}
									/>
								</>
							) : (
								<>
									{prod !== 'outlet' && <Title type={'ctitleSub'} size={'md'} text={prod ? prodSub : brandSub} addClass={'fcWhite'}/>}
									<Title type={'ctitle'} lang={'eng'} size={'lg'} text={prod ? prodTitle : brandTitle} addClass={'fcWhite'}/>
								</>
							)}
						</>
					} />

					{prod === 'newUpdate' && (
						<BtnWrap mt={'sm'} align={'auto'} buttons={
							<Button
								size={'md'} color={'lineWhite'} rounded={true} text={'업데이트 알림 신청'}
								beforeIcon={'alarm_white'} afterIcon={'arw_right_white'}
							/>
						} />
					)}
				</>
			)}
		</div>
	)
}