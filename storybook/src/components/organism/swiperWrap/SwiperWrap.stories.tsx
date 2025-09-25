import * as React from "react";
import type { Meta, StoryObj, StoryFn } from "@storybook/react";

import { SwiperWrap } from "@/components/organism/swiperWrap/SwiperWrap";
import {DisplayBanner} from "@/components/molecule/displayBanner/DisplayBanner";
import {Thumb} from "@/components/atomic/thumb/Thumb";
import {ProdItem} from "@/components/molecule/prodItem/ProdItem";

const meta = {
	title: "Organism/SwiperWrap",
	component: SwiperWrap,
	tags: ['autodocs'],
	parameters: {
		layout: 'padded',
	},
	argTypes: {
		type: {
			control: "inline-radio",
			options: ["auto", "dot", "fraction", "card"],
		},
		fractionPos: {
			control: "inline-radio",
			options: ['', 'lg', 'sm', 'center'],
		},
		loop: { control: "boolean" },
		spaceBetween: { control: "number" },
		hasPreview: { control: "boolean" },
		items: { control: 'object' }
	},
} satisfies Meta<typeof SwiperWrap>;

export default meta;
type Story = StoryObj<typeof SwiperWrap>;

const dummySlides = [
	<div style={{ height: '100px', background: '#ccc'}}>Slide 1</div>,
	<div style={{ height: '100px', background: '#adcadd'}}>Slide 2</div>,
	<div style={{ height: '100px', background: '#ccc'}}>Slide 3</div>,
	<div style={{ height: '100px', background: '#adcadd'}}>Slide 4</div>,
	<div style={{ height: '100px', background: '#ccc'}}>Slide 5</div>,
	<div style={{ height: '100px', background: '#adcadd'}}>Slide 6</div>,
];

export const Default: Story = {
	args: {
		type: 'auto',
		items: dummySlides,
	},
	render:(args) =>
		<SwiperWrap {...args} />
}

export const ProdSwiper:StoryFn = () => ( // auto
	<div style={{width: '500px', margin: '0 auto'}}>
		<h3>Product size Xs</h3>
		<SwiperWrap type={'auto'} spaceBetween={4} items={[
			<Thumb altText="썸네일 이미지" btnWish imgSrc="prod_5by5" squareSize="Xs" type="square" uiChk />,
			<Thumb altText="썸네일 이미지" btnWish imgSrc="prod_5by5" squareSize="Xs" type="square" uiChk />,
			<Thumb altText="썸네일 이미지" btnWish imgSrc="prod_5by5" squareSize="Xs" type="square" uiChk />,
			<Thumb altText="썸네일 이미지" btnWish imgSrc="prod_5by5" squareSize="Xs" type="square" uiChk />,
			<Thumb altText="썸네일 이미지" btnWish imgSrc="prod_5by5" squareSize="Xs" type="square" uiChk />,
			<Thumb altText="썸네일 이미지" btnWish imgSrc="prod_5by5" squareSize="Xs" type="square" uiChk />,
			<Thumb altText="썸네일 이미지" btnWish imgSrc="prod_5by5" squareSize="Xs" type="square" uiChk />,
			<Thumb altText="썸네일 이미지" btnWish imgSrc="prod_5by5" squareSize="Xs" type="square" uiChk />,
		]} />
		<br />
		<h3>Product size Sm</h3>
		<SwiperWrap type={'auto'} spaceBetween={4} items={[
			<Thumb altText="썸네일 이미지" btnWish imgSrc="prod_5by5" squareSize="Sm" type="square" uiChk />,
			<Thumb altText="썸네일 이미지" btnWish imgSrc="prod_5by5" squareSize="Sm" type="square" uiChk />,
			<Thumb altText="썸네일 이미지" btnWish imgSrc="prod_5by5" squareSize="Sm" type="square" uiChk />,
			<Thumb altText="썸네일 이미지" btnWish imgSrc="prod_5by5" squareSize="Sm" type="square" uiChk />,
			<Thumb altText="썸네일 이미지" btnWish imgSrc="prod_5by5" squareSize="Sm" type="square" uiChk />,
			<Thumb altText="썸네일 이미지" btnWish imgSrc="prod_5by5" squareSize="Sm" type="square" uiChk />,
			<Thumb altText="썸네일 이미지" btnWish imgSrc="prod_5by5" squareSize="Sm" type="square" uiChk />,
			<Thumb altText="썸네일 이미지" btnWish imgSrc="prod_5by5" squareSize="Sm" type="square" uiChk />,
		]} />
		<br />
		<h3>Product size Lg</h3>
		<SwiperWrap type={'auto'} spaceBetween={10} items={[
			<ProdItem
				prodLank={1}
				direction="col" imgSrc="prod_5by5" squareSize="Lg"
				brand="BRAND NAME BRAND NAME"
				title="prod title prod title prod title"
				btnLink btnWish uiChk
				discount={12} price="112,000,000" priceBadge="A" priceOrigin="4,000,000"
				sizeInfo="230"
			/>,
			<ProdItem
				direction="col" imgSrc="prod_5by5" squareSize="Lg"
				brand="BRAND NAME BRAND NAME"
				title="prod title prod title prod title"
				btnLink btnWish uiChk
				price="112,000,000" priceBadge="N"
				sizeInfo="230" uid={123456}
				btmBadgeText={['badge01', 'badge02', 'badge03']}
			/>,
			<ProdItem
				direction="col" imgSrc="prod_5by5" squareSize="Lg"
				brand="BRAND NAME BRAND NAME"
				title="prod title prod title prod title"
				btnLink btnWish uiChk
				discount={12} price="112,000,000" priceBadge="A" priceOrigin="4,000,000"
				sizeInfo="230" uid={123456}
				btmBadgeText={['badge01', 'badge02', 'badge03']}
			/>,
			<ProdItem
				direction="col" imgSrc="prod_5by5" squareSize="Lg"
				brand="BRAND NAME BRAND NAME"
				title="prod title prod title prod title"
				btnLink btnWish uiChk
				price="112,000,000" priceBadge="A"
				btmBadgeText={['badge01', 'badge02', 'badge03']}
			/>,
			<ProdItem
				direction="col" imgSrc="prod_5by5" squareSize="Lg"
				brand="BRAND NAME BRAND NAME"
				title="prod title prod title prod title"
				btnLink btnWish uiChk
				discount={12} price="112,000,000" priceBadge="A" priceOrigin="4,000,000"
				sizeInfo="230" uid={123456}
			/>
		]} />
	</div>
)

export const RecentSearchKeyword: StoryFn = () => ( // dot
	<div style={{width: '500px', margin: '0 auto'}}>

	</div>
)

export const DisplayBannerSwiper: StoryFn = () => ( // fraction
	<div style={{width: '500px', margin: '0 auto'}}>
		<SwiperWrap type={'fraction'} items={[
			<DisplayBanner
				btnText="버튼명"
				subText={<>마케팅 관련 서브 타이틀이 들어갑니다.<br />마케팅 관련 서브 타이틀이 들어갑니다.</>}
				title={<>일이삼사오육칠팔구십<br />일이삼사오육칠팔구십</>}
				imgSrc={'bg_display_brand_chanel.png'}
			/>,
			<DisplayBanner
				btnText="버튼명"
				subText={<>마케팅 관련 서브 타이틀이 들어갑니다.<br />마케팅 관련 서브 타이틀이 들어갑니다.</>}
				title={<>일이삼사오육칠팔구십<br />일이삼사오육칠팔구십</>}
				imgSrc={'bg_display_brand_rolex.png'}
			/>,
			<DisplayBanner
				btnText="버튼명"
				subText={<>마케팅 관련 서브 타이틀이 들어갑니다.<br />마케팅 관련 서브 타이틀이 들어갑니다.</>}
				title={<>일이삼사오육칠팔구십<br />일이삼사오육칠팔구십</>}
				imgSrc={'bg_display_brand_hermes.png'}
			/>,
		]} />
	</div>
)

export const ProdCardSwiper: StoryFn = () => ( // card
	<div style={{width: '500px', margin: '0 auto'}}>
		<SwiperWrap type={'card'} items={[
			<ProdItem
				direction="col" imgSrc="prod_5by5" squareSize="auto"
				brand="BRAND NAME" sizeInfo="230"
				title="prod title prod title prod title"
				btmBadgeText={['badge01', 'badge02', 'badge03']}
				btnLink btnWish prodState={'ongoing'}
				discount={12} loanPrice="300,000" price="112,000,000" priceBadge="A" priceOrigin="4,000,000"
			/>,
			<ProdItem
				direction="col" imgSrc="prod_5by5" squareSize="auto"
				brand="BRAND NAME" sizeInfo="230"
				title="prod title prod title prod title"
				btmBadgeText={['badge01', 'badge02', 'badge03']}
				btnLink btnWish prodState={'ongoing'}
				discount={12} loanPrice="300,000" price="112,000,000" priceBadge="A" priceOrigin="4,000,000"
			/>,
			<ProdItem
				direction="col" imgSrc="prod_5by5" squareSize="auto"
				brand="BRAND NAME" sizeInfo="230"
				title="prod title prod title prod title"
				btmBadgeText={['badge01', 'badge02', 'badge03']}
				btnLink btnWish prodState={'ongoing'}
				discount={12} loanPrice="300,000" price="112,000,000" priceBadge="A" priceOrigin="4,000,000"
			/>,
			<ProdItem
				direction="col" imgSrc="prod_5by5" squareSize="auto"
				brand="BRAND NAME" sizeInfo="230"
				title="prod title prod title prod title"
				btmBadgeText={['badge01', 'badge02', 'badge03']}
				btnLink btnWish prodState={'ongoing'}
				discount={12} loanPrice="300,000" price="112,000,000" priceBadge="A" priceOrigin="4,000,000"
			/>
		]} />
	</div>
)