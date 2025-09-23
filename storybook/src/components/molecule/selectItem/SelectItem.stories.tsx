import * as React from 'react';
import type { Meta, StoryObj, StoryFn} from '@storybook/nextjs-vite';

import {SelectItem} from "@/components/molecule/selectItem/SelectItem";
import {Button} from "@/components/atomic/button/Button";
import {EtcButton} from "@/components/atomic/etcButton/EtcButton";
import {SelectMenu} from "@/components/atomic/form/SelectMenu";
import {Input} from "@/components/atomic/form/Input";

const meta = {
	title: 'Molecule/SelectItem',
	component: SelectItem,
	tags: ['autodocs'],
	parameters: {
		layout: 'padded',
	},
	decorators: [ // preview 500
		(Story) => (
			<div style={{ maxWidth: '500px', margin: '0 auto' }}>
				<Story />
			</div>
		),
	],
	argTypes: {
		type: {
			control: 'inline-radio',
			options: ['address', 'account', 'store']
		},
		boxMt: {
			control: 'inline-radio',
			options: ['sm', 'md'],
		},
		icon: {
			control: 'inline-radio',
			options: ['account', 'card'],
		},
		iconSize: {
			control: 'inline-radio',
			options: ['Md', 'Lg'],
		},
		hasSelectBody: { control: 'boolean' },
		title: { control: 'text' },
		thumbSrc: { control: 'text' },
		storeName: { control: 'text' },
		storeRegion: { control: 'text' },
		name: { control: 'text' },
		tel: { control: 'text' },
		accountNumber: { control: 'text' },
		desc: { control: 'text' },
		subDesc: { control: 'text' },
		formContents: {
			table: { disabled: true },
		},
		tableContents: {
			table: { disabled: true },
		}
	}

} satisfies Meta<typeof SelectItem>;

export default meta;
type Story = StoryObj<typeof SelectItem>;

export const Default:Story = {
	args: {
		type: 'address',
		boxMt: 'sm',
		icon: 'account',
		iconSize: 'Md',
		title: 'title 영역',
		headerRight: (<>우측 영역</>),
		hasSelectBody: true,
		name: 'name 영역',
		tel: ['010-1234-5678', '02-1234-5678'],
		accountNumber:'01-234-56789-00',
		desc: 'desc 영역',
		subDesc: 'subDesc 영역',
		formContents: (<>form 컨텐츠 영역</>),
		tableContents: [
			[
				{ type: 'th', content: '매장주소', scope: 'row' },
				{ type: 'td', content: '서울시 강남구 청담동 78 1층' },
			],
			[
				{ type: 'th', content: '영업시간', scope: 'row' },
				{ type: 'td', content: ('월 ~ 토 : 오전 11시 ~ 오후 8시<br>공휴일 : 오후 12시 ~ 오후 8시') },
			],
			[
				{ type: 'th', content: '휴무안내', scope: 'row' },
				{ type: 'td', content: '일요일휴무' },
			],
		]
	},
	render: (args) => <SelectItem {...args} />,
}

export const Address: StoryFn = () => (
	<>
		<SelectItem type={'address'} title={'시골집'} headerRight={
						<>
							<EtcButton name={'icon'} offscreen="수정" icon={'edit'} iconSize={18} />
							<EtcButton name={'icon'} offscreen="삭제" icon={'delete'} iconSize={18} />
						</>
					}
					name={'홍길동'} tel={'010-1234-5678'}
					desc={'서울 강남구 강남대로84길 13 강남역 케이알타워 10층'}
					subDesc={'부재시 경비실에 맡겨주세요.'}
		/>

		<SelectItem type={'address'} title={'시골집'}
					name={'홍길동'} tel={['02-1234-5678', '010-1234-5678']}
					desc={'서울 강남구 강남대로84길 13 강남역 케이알타워 10층'}
					boxMt={'sm'}
					formContents={<>
						<SelectMenu
							options={[
								{label: '부재시 경비실에 맡겨주세요.', value: '부재시 경비실에 맡겨주세요.'},
								{label: '직접입력', value: '직접입력'},
							]}
							placeholder="부재시 경비실에 맡겨주세요."
							title="배송메시지 입력"
							value={''}
							onChange={() => {}}
						/>
						<Input title="배송메시지 입력" type="text" placeholder="배송메시지 입력" />
					</>}
		/>
	</>
)

export const Account: StoryFn = () => (
	<>
		<SelectItem type={'account'} title={'급여통장'} headerRight={
			<>
				<EtcButton name={'icon'} offscreen="삭제" icon={'delete'} iconSize={18} />
			</>
		}
					name={'홍길동'}
					desc={'기업은행 252381-1838581-381'}
					icon={'account'}
					iconSize={'Md'}
		/>

		<SelectItem type={'account'} title={'SC은행 (계좌)'}
					accountNumber={'270**********1707'}
					icon={'account'}
					iconSize={'Lg'}
					boxMt={'sm'}
					hasSelectBody={false}
					// headerRight={<Button size={'sm'} color={'lineLightGray'} rounded text={'선택'} />}
		/>
		<SelectItem type={'account'} title={'우리은행 (체크카드)'}
					accountNumber={'270**********1707'}
					icon={'card'}
					iconSize={'Lg'}
					boxMt={'sm'}
					hasSelectBody={false}
					// headerRight={<Button size={'sm'} color={'lineLightGray'} rounded text={'선택'} />}
		/>
	</>
)

export const Store: StoryFn = () => (
	<>
		<SelectItem type={'store'} title={'반포신세계점'}
					tableContents={[
						[
							{ type: 'th', content: '매장주소', scope: 'row' },
							{ type: 'td', content: '서울시 강남구 청담동 78 1층' },
						],
						[
							{ type: 'th', content: '영업시간', scope: 'row' },
							{ type: 'td', content: <>월 ~ 토 : 오전 11시 ~ 오후 8시<br />공휴일 : 오후 12시 ~ 오후 8시</> },
						],
						[
							{ type: 'th', content: '휴무안내', scope: 'row' },
							{ type: 'td', content: '일요일휴무' },
						],
					]}
		/>
		<SelectItem type={'store'} storeName={'잠실석촌호수점'} storeRegion={'서울'}
					thumbSrc={'product_store.png'} boxMt={'sm'} headerRight={
						<EtcButton name={'icon'} offscreen="삭제" icon={'delete'} iconSize={18} />
					}
					hasSelectBody={false}
		/>
	</>
)
