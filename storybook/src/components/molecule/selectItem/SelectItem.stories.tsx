import * as React from 'react';
import type { Meta, StoryObj, StoryFn} from '@storybook/nextjs-vite';

import {SelectItem} from "@/components/molecule/selectItem/SelectItem";
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
	args: {},
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
					formContents={<>
						<SelectMenu />
					</>}
		/>
	</>
)

export const Account: StoryFn = () => (
	<>// 추가예정</>
)

export const Store: StoryFn = () => (
	<>// 추가예정</>
)
