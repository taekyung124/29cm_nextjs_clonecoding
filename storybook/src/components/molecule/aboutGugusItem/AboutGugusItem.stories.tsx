import * as React from 'react';
import type { Meta, StoryObj, StoryFn} from '@storybook/nextjs-vite';

import {AboutGugusItem} from "@/components/molecule/aboutGugusItem/AboutGugusItem";
import {Button} from "@/components/atomic/button/Button";

const meta = {
	title: 'Molecule/AboutGugusItem',
	component: AboutGugusItem,
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
		stepNumber: {
			control: 'text',
		},
		title: {
			control: 'text',
		},
		description: {
			control: 'text',
		},
		btnSlot: {
			table: {
				disabled:true,
			}
		},
		imgSrc: {
			control: 'text',
		}
	}
} satisfies Meta<typeof AboutGugusItem>;

export default meta;
type Story = StoryObj<typeof AboutGugusItem>;

export const Default: Story = {
	args: {
		stepNumber: '02',
		title: '전국 직영 오프라인 매장 운영',
		description: '전국 26개 직영 매장을 운영하고 있으며, 프리미엄 보고 구매 서비스를 통해 가까운 매장으로 상품 이동하여 직접 시착 및 확인 가능',
		btnSlot: (<Button size={'lg'} color={'lineLightGray'} text={'가까운 매장 안내'} tag={'a'} href={'javascript:'} />),
		imgSrc: 'about_gugus_01',
	},
	render: (args) => <AboutGugusItem {...args} />,
}

export const AboutGugusSteps: StoryFn = () => (
	<>
		<AboutGugusItem
			description="국내 최다인 75명의 명품 감정 인력을 보유하고 있으며, 전문 감정사의 감정을 받은 상품만을 취급"
			imgSrc="about_gugus_01"
			stepNumber="01"
			title="사전 감정 100% 안심 거래"
		/>
		<AboutGugusItem
			btnSlot={<Button color="lineGray" size="lg" tag="a" href={'javascript:'} text="가까운 매장 안내"/>}
			description="전국 26개 직영 매장을 운영하고 있으며, 프리미엄 보고 구매 서비스를 통해 가까운 매장으로 상품 이동하여 직접 시착 및 확인 가능"
			imgSrc="about_gugus_02"
			stepNumber="02"
			title="전국 직영 오프라인 매장 운영"
		/>
		<AboutGugusItem
			description="매일 업데이트 되는 600개 이상의 상품을 빠르게 확인 및 구매 가능하며, 개인화 추천 및 다양한 이벤트를 통해 합리적 구매 가능"
			imgSrc="about_gugus_03"
			stepNumber="03"
			title="온라인으로 편리하게 명품 쇼핑"
		/>
		<AboutGugusItem
			description="가방, 잡화, 시계 외에도 의류, 신발, 주얼리 등 14만개의 다양한 카테고리 상품 보유"
			imgSrc="about_gugus_04"
			stepNumber="04"
			title="보유 상품 업계 No.1"
		/>
		<AboutGugusItem
			btnSlot={<Button color="lineGray" size="lg" tag="a" href={'javascript:'} text="명품 A/S서비스"/>}
			description="35년 이상 숙련된 명장들이 상주하고 있으며, 보증 기간 내 의뢰 시 장인을 통해 무상 명품 케어 서비스 제공"
			imgSrc="about_gugus_05"
			stepNumber="05"
			title="명품 케어 서비스 제공"
		/>
		<AboutGugusItem
			btnSlot={<Button color="green" size="lg" tag="a" href={'javascript:'} text="명품 A/S서비스"/>}
			description="온/오프라인 통해 객관적인 시세 및 업계 최저 판매 수수료 기반으로 최고 수준의 판매가를 제공하며 매장 방문 거래 시 당일 현금 지급 서비스 제공"
			imgSrc="about_gugus_06"
			stepNumber="06"
			title="쉽고 빠른 명품 판매"
		/>
	</>
)