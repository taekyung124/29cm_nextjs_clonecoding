import * as React from 'react';
import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import {AlertPopup} from "@/components/organism/popup/AlertPopup";
import {TextButton} from "@/components/atomic/textButton/TextButton";

import {Sub} from "@/components/layouts/templates/Sub";
import type {HeaderProps} from "@/components/organism/header/Header";
import {ContentBox} from "@/components/organism/contentBox/ContentBox";
import {Button} from "@/components/atomic/button/Button";
import {Stext} from "@/components/atomic/stext/Stext";

const meta = {
	title: 'Organism/Popup/AlertPopup',
	component: AlertPopup,
	parameters: {
		layout: 'padded',
	},
	argTypes: {
		hasHeader: {
			control: 'boolean',
		},
		popTitle: {
			control: 'text',
		},
		btnSlot: {
			control: 'object',
		},
		dimClose: {
			control: 'boolean',
		},
		children: {
			control: 'object',
		},
		onClose: { control: false },
	}
} satisfies Meta<typeof AlertPopup>;

export default meta;
type Story = StoryObj<typeof AlertPopup>;

export const AlertPopupDefault: Story = {
	args: {
		hasHeader: true,
		popTitle: 'Alert Popup Title',
	},
	render: (args) => {
		const [isPopupOpen, setPopupOpen] = React.useState(false);

		const handleOpen = () => setPopupOpen(true);
		const handleClose = () => setPopupOpen(false);

		const subHeaderProps: HeaderProps = {
			type: "sub",
			title: "Alert Popup",
			hasGnb: false,
			headerButtonOrder: [
				{ btnHomeUrl: "javascript:" },
				{ btnSearchUrl: "javascript:" },
				{ btnShareUrl: "javascript:" },
				{ btnFindIdUrl: "javascript:" },
			],
		};

		return (
			<>
				<Sub headerProps={subHeaderProps}>
					<ContentBox size={'Md'}>
						<Button
							color="green"
							rounded
							size="md"
							tag="button"
							text="alert popup 열기"
							onClick={handleOpen}
						/>
					</ContentBox>
				</Sub>
				<AlertPopup
					{...args} isShow={isPopupOpen} onClose={handleClose}
					btnSlot={<>
						<TextButton
							size={'md'} onClick={handleClose} text="취소"
							addCommClass={'fcSpot'}
						/>
						<TextButton
							size={'md'} onClick={handleClose} text="확인"
							addCommClass={'fcSpot fwSb'}
						/>
					</>}
				>
					<ContentBox size={'zero'} pb={'Md'}>
						<Stext text={'구구스 팝업 가이드 서브 텍스트 영역입니다. 구구스 팝업 가이드 서브 텍스트 영역입니다. 구구스 팝업 가이드 서브 텍스트 영역입니다. 팝업 내용이 길어질 경우 위아래 최소 상하단 여백 40px을 남겨둔 채 스크롤 됩니다.'} />
					</ContentBox>
				</AlertPopup>
			</>
		)
	}
}