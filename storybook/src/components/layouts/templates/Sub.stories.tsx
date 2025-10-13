import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import {Sub} from "@/components/layouts/templates/Sub";
import type { HeaderProps, SubList, GnbProps } from "@/components/organism/header/Header";
import {ContentBox} from "@/components/organism/contentBox/ContentBox";
import {Box} from "@/components/atomic/box/Box";
import {TitleWrap} from "@/components/molecule/titleWrap/TitleWrap";
import {Title} from "@/components/atomic/title/Title";
import {Stext} from "@/components/atomic/stext/Stext";

const meta = {
	title: 'Layouts/Templates/Sub',
	component: Sub,
	parameters: {
		layout: 'fullscreen',
	}
} satisfies Meta<typeof Sub>;

export default meta;
type Story = StoryObj<typeof Sub>;


const renderContents = <>
	<ContentBox type={'default'} size={'Md'} pt={'Sm'} hasInner={true}>
		<TitleWrap mb="zero"
			child={<>
				<Title text="타이틀 서브" type="ctitleSub"/>
				<Title size="lg" text="컨텐츠 타이틀"/>
				<Stext mt="sm" text="서브 텍스트 ~~"/>
			</>}
		/>
		<ContentBox type={'default'} size={'Sm'} hasInner={false}>
			서브 컨텐츠
		</ContentBox>
		<ContentBox type={'line'} size={'zero'} pt={'Sm'} hasInner={false}>
			서브 컨텐츠
		</ContentBox>
		<Box color={'gray'} size={'md'} mt={'md'} child={<>
			<ContentBox type={'default'} size={'zero'} pb={'Sm'} hasInner={false}>
				서브 컨텐츠
			</ContentBox>
			<ContentBox type={'line'} size={'zero'} pt={'Sm'} hasInner={false}>
				서브 컨텐츠
			</ContentBox>
		</>} />
	</ContentBox>
	<ContentBox type={'divider'} size={'Md'} hasInner={true}>
		<TitleWrap mb="zero"
				   child={<>
					   <Title text="타이틀 서브" type="ctitleSub"/>
					   <Title size="lg" text="컨텐츠 타이틀"/>
					   <Stext mt="sm" text="서브 텍스트 ~~"/>
				   </>}
		/>
		<ContentBox type={'default'} size={'Sm'} hasInner={false}>
			서브 컨텐츠
		</ContentBox>
		<ContentBox type={'line'} size={'zero'} pt={'Sm'} hasInner={false}>
			서브 컨텐츠
		</ContentBox>
		<Box color={'gray'} size={'md'} mt={'md'} child={<>
			<ContentBox type={'default'} size={'zero'} pb={'Sm'} hasInner={false}>
				서브 컨텐츠
			</ContentBox>
			<ContentBox type={'line'} size={'zero'} pt={'Sm'} hasInner={false}>
				서브 컨텐츠
			</ContentBox>
		</>} />
	</ContentBox>
	<ContentBox type={'gray'} size={'Md'} hasInner={true}>
		<TitleWrap mb="zero"
				   child={<>
					   <Title text="타이틀 서브" type="ctitleSub"/>
					   <Title size="lg" text="컨텐츠 타이틀"/>
					   <Stext mt="sm" text="서브 텍스트 ~~"/>
				   </>}
		/>
		<ContentBox type={'default'} size={'Sm'} hasInner={false}>
			서브 컨텐츠
		</ContentBox>
		<ContentBox type={'line'} size={'zero'} pt={'Sm'} hasInner={false}>
			서브 컨텐츠
		</ContentBox>
		<Box color={'white'} size={'md'} mt={'md'} child={<>
			<ContentBox type={'default'} size={'zero'} pb={'Sm'} hasInner={false}>
				서브 컨텐츠
			</ContentBox>
			<ContentBox type={'line'} size={'zero'} pt={'Sm'} hasInner={false}>
				서브 컨텐츠
			</ContentBox>
		</>} />
	</ContentBox>
</>;

export const SubFull:Story = {
	args: {
		recentProd: true,
		prodImg: 'prod_5by5.png',
		prodUrl: 'javascript:',
		children: renderContents,
		hasGnb: true,
		hasDocker: true,
		hasFooter: true,
	},
	render: (args: any) => {
		const gnbItems: GnbProps['items'] = [
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
		];

		const subDepthList: SubList[] = [
			{title: '서브 메뉴명', href: 'javascript:'},
			{title: '서브 메뉴명', href: 'javascript:'},
			{title: '서브 메뉴명', href: 'javascript:'},
			{title: '서브 메뉴명', href: 'javascript:'},
			{title: '서브 메뉴명', href: 'javascript:'},
		];

		const subHeaderProps: HeaderProps = {
			type: 'sub',
			title: 'gnb O, 2depth O, docker O, footer O',
			subDepth: subDepthList,
			items: gnbItems,
			headerButtonOrder: [
				{btnHomeUrl: 'javascript:'},
				{btnSearchUrl: 'javascript:'},
				{btnShareUrl: 'javascript:'},
				{btnFindIdUrl: 'javascript:'},
			],
		};
		return (
			<Sub headerProps={subHeaderProps} {...args} />
		)
	}
}