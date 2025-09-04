import * as React from 'react';
import type { Meta, StoryObj, StoryFn} from '@storybook/nextjs-vite';

import {Table, TableCell} from "@/components/molecule/table/Table";
import {FlexInfoWrap} from "@/components/molecule/flexInfoWrap/FlexInfoWrap";
import {Stext} from "@/components/atomic/stext/Stext";
import {Button} from "@/components/atomic/button/Button";

const meta = {
	title: 'Molecule/Table',
	component: Table,
	tags: ['autodocs'],
	parameters: {
		layout: 'padded',
	},
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof Table>;

const RowTbodyData: TableCell[][] = [
	[
		{ type: 'th', content: '보증기간', scope: 'row' },
		{ type: 'td', content: '3년', colSpan: 2 },
	],
	[
		{ type: 'th', content: '수선서비스', scope: 'row' },
		{ type: 'td', content: '기본수선' },
		{ type: 'td', content: '내부 클리닝' },
	],
	[
		{ type: 'th', content: '보증 기간 내', scope: 'row' },
		{ type: 'td', content: '무상' },
		{ type: 'td', content: '1회 무료' },
	]
]

export const TblRow: StoryFn = () => (
	<Table
		tblType={'Row'}
		caption={'tblRow 기본 타입 테이블'}
		colWidth={['90px','auto','auto']}
		tbody={RowTbodyData}
	/>
)

const ColTHeadData: TableCell[] = [
	{ type: 'th', content: '구분', scope: 'col' },
	{ type: 'th', content: '20만원 이하', scope: 'col' },
	{ type: 'th', content: '20만원 초과', scope: 'col' },
]

const ColTbodyData: TableCell[][] = [
	[
		{ type: 'td', content: '품목1' },
		{ type: 'td', content: '4만 8천원', rowSpan: 3 },
		{ type: 'td', content: '7%' },
	],
	[
		{ type: 'td', content: '품목2' },
		{ type: 'td', content: '10%' },
	],
	[
		{ type: 'td', content: '품목3' },
		{ type: 'td', content: '13.8%' },
	]
]

export const TblCol: StoryFn = () => (
	<Table
		tblType={'Col'}
		caption={'tblCol 기본 타입 테이블'}
		colWidth={['86px','auto','auto']}
		thead={ColTHeadData}
		tbody={ColTbodyData}
	/>
)

const ColSmTHeadData: TableCell[] = [
	{ type: 'th', content: 'INTL', scope: 'col' },
	{ type: 'th', content: 'CM', scope: 'col' },
	{ type: 'th', content: 'INCHES', scope: 'col' },
]
const ColSmTbodyData: TableCell[][] = [
	[
		{ type: 'td', content: 'XS' },
		{ type: 'td', content: '75' },
		{ type: 'td', content: '30' },
	],
	[
		{ type: 'td', content: 'S' },
		{ type: 'td', content: '80' },
		{ type: 'td', content: '32' },
	],
	[
		{ type: 'td', content: 'M' },
		{ type: 'td', content: '85' },
		{ type: 'td', content: '34' },
	],
	[
		{ type: 'td', content: 'L' },
		{ type: 'td', content: '90' },
		{ type: 'td', content: '36' },
	]
]

export const TblColSm: StoryFn = () => (
	<Table
		tblType={'ColSm'}
		addClass={'sizeTextSm'}
		caption={'tblColSm 타입 테이블 (sizeTextSm 추가)'}
		colWidth={['auto','auto','auto']}
		thead={ColSmTHeadData}
		tbody={ColSmTbodyData}
	/>
)

const NoLineTfootTHeadData: TableCell[] = [
	{ type: 'th', content: '상품명', scope: 'col' },
	{ type: 'th', content: '상품가격', scope: 'col' },
	{ type: 'th', content: '감정가격', scope: 'col' },
]
const NoLineTfootTbodyData: TableCell[][] = [
	[
		{ type: 'td', content: '샤넬 맨투맨' },
		{ type: 'td', content: '500,000' },
		{ type: 'td', content: '답변대기' },
	],
	[
		{ type: 'td', content: '구찌 블론디 핸드백' },
		{ type: 'td', content: '500,000' },
		{ type: 'td', content: '답변대기' },
	]
]

const NoLineTfootTfootData: TableCell[][] = [
	[
		{ type: 'td', content: '총 합계' },
		{ type: 'td', content: '1,000,000' },
		{ type: 'td', content: '-' },
	],
];

export const TblNoLineTfoot: StoryFn = () => (
	<Table
		wapperType={'NoLine'}
		tblType={'Col'}
		caption={'tblNoLineTfoot 타입 테이블'}
		colWidth={['auto','auto','auto']}
		thead={NoLineTfootTHeadData}
		tbody={NoLineTfootTbodyData}
		tfoot={NoLineTfootTfootData}
	/>
)

const InfoLineTopTbodyData: TableCell[][] = [
	[
		{ type: 'th', content: '상품번호', scope: 'row' },
		{ type: 'td', content: '000000' },
	],
	[
		{ type: 'th', content: '이름', scope: 'row' },
		{ type: 'td', content: '김구구' },
	],
	[
		{ type: 'th', content: '보유 포인트', scope: 'row' },
		{ type: 'td', content: '010-1234-5678' },
	],
	[
		{ type: 'th', content: '담당매장', scope: 'row', className: 'vaMid' },
		{ type: 'td', content:
				<FlexInfoWrap align={'center'}
							 leftArea={<Stext color={'Black'} text={'일산점'}/>}
							 rightArea={<Button
								 text={<span className={'fcSpot'}>카톡상담</span>}
								 size={'sm'} color={'lineLightGray'} rounded={true}
								 beforeIcon={'store_kakao_consulting_green'}
							 />} marginLeft={6}
				/>
		},
	]
]

export const TblInfoLineTop: StoryFn = () => (
	<Table
		wapperType={'Info'}
		tblType={'Info'}
		caption={'tblInfoLineTop 타입 테이블'}
		colWidth={['94px','auto']}
		tbody={InfoLineTopTbodyData}
	/>
)

const InfoRightTbodyData: TableCell[][] = [
	[
		{ type: 'th', content: '상품금액', scope: 'row' },
		{ type: 'td', content: '600,000원' },
	],
	[
		{ type: 'th', content: '포인트 사용금액', scope: 'row' },
		{ type: 'td', content: '- 10,000원' },
	],
	[
		{ type: 'th', content: '배송비', scope: 'row' },
		{ type: 'td', content: '+ 4,000원' },
	]
]

export const TblInforight: StoryFn = () => (
	<Table
		wapperType={'Info'}
		tblType={'Info'}
		addClass={'infoRight'}
		caption={'tblInforight 타입 테이블'}
		colWidth={['110px','auto']}
		tbody={InfoRightTbodyData}
		hasPriceFooter={<div style={{width: '100%', height: '30px', background: 'rgba(255,0,0,.2)'}}>//priceInfoFooter// 컴포넌트 작업 이후 추가 예정</div>}
	/>
)

const InfoRightSmTbodyData: TableCell[][] = [
	[
		{ type: 'th', content: '반품사유', scope: 'row' },
		{ type: 'td', content: '구매자의 단순 변심' },
	],
	[
		{ type: 'th', content: '반품방법', scope: 'row' },
		{ type: 'td', content: '직접발송' },
	],
	[
		{ type: 'th', content: '반품지정보', scope: 'row' },
		{ type: 'td', content: <>(16509) 경기도 수원시 영통구 이의동 1340<br />이순신 / 031-251-3816</> },
	],
	[
		{ type: 'th', content: '환불수단', scope: 'row' },
		{ type: 'td', content: '홍길동(제일은행 : 15720187201)' },
	]
]

export const TblInfoRightSm: StoryFn = () => (
	<Table
		wapperType={'Info'}
		tblType={'InfoSm'}
		addClass={'infoRight'}
		caption={'tblInfoRightSm 타입 테이블'}
		colWidth={['84px','auto']}
		tbody={InfoRightSmTbodyData}
	/>
)